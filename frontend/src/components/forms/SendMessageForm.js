import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SendButton as SendButtonBase } from "components/misc/Buttons.js";
import { useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';

const Container = tw.div`relative`;
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`

const SubmitButton = tw(SendButtonBase)`inline-block mt-8`
export default ({
  submitButtonText = "Send",
  textOnLeft = true,
  productId,
  friendUserName,
}) => {
    const authCtx = useContext(AuthContext);
    // const [isLoading, setIsLoading] = useState(false);
    const messageInputRef = useRef();

    const submitHandler = (event) => {
      event.preventDefault();
      const enteredMessage = messageInputRef.current.value;
      document.getElementsByName('sendMessage')[0].reset();
      // setIsLoading(true);

      let url = 'http://localhost:8080/messages/send';
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          sender: authCtx.token,
          receiver: friendUserName,
          content: enteredMessage,
          product_id: productId,
        }),
          headers:{'Content-Type': 'application/json'},
      })
      .then(res => {
        // setIsLoading(false);
        if (res.ok) {
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
