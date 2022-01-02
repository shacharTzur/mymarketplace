import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SendButton as SendButtonBase } from "components/misc/Buttons.js";
import { Hint } from 'react-autocomplete-hint';
import {useEffect, useRef, useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import ReceiverContext from '../../store/receiver-context';
import ProductContext from '../../store/product-context';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Select = tw.select`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`

const SubmitButton = tw(SendButtonBase)`inline-block mt-8`
export default ({
  submitButtonText = "Send",
  textOnLeft = true,
  productId=3,
  friendUserName,
}) => {
    const authCtx = useContext(AuthContext);
    const recCtx = useContext(ReceiverContext);
    const prodCtx = useContext(ProductContext);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const messageInputRef = useRef();

    const submitHandler = (event) => {
      event.preventDefault();
      const enteredMessage = messageInputRef.current.value;
      document.getElementsByName('sendMessage')[0].reset();
      setIsLoading(true);

      let url = 'http://localhost:8080/messages/send';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          sender: authCtx.token,
          receiver: friendUserName,
          content: enteredMessage,
          product_id: productId,
        })
      })
      .then(res => {
        setIsLoading(false);
        if (res.ok) {
            alert(res.text())
          return res.text()  
        } else {
          return res.json().then(data => {
            let errorMessage = 'message send FAILED!!';
            alert(errorMessage)
          });
        }
      })
      .then(data => {})
      .catch((err) => {
        alert(err.message);
      });
    };

  return (
    <Form name='sendMessage' onSubmit={submitHandler}>
        <Container>
          <Input type="textbox" name="message" placeholder="Enter your message" ref={messageInputRef} />
          <SubmitButton type="submit">{submitButtonText}</SubmitButton>
        </Container>
    </Form>
  );
};
