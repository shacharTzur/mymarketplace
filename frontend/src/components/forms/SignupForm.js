import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import AbuPic from "images/ourImages/abu sign up.png";
import { Hint } from 'react-autocomplete-hint';
import {useEffect, useRef, useState, useContext} from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

import ModalWant from "../misc/WantModal";



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

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
export default ({
  subheading = "Contact Us",
  heading = <><span tw="text-primary-500">Sign Up</span><wbr/></>,
  description = "",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
  userName = "",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
    const history = useHistory();

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const userNameInputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const submitHandler = (event) => {
      event.preventDefault();
      const enteredFirstName = firstNameInputRef.current.value;
      const enteredLastName = lastNameInputRef.current.value;
      const enteredUserName = userNameInputRef.current.value;

      const fd = new FormData();
      fd.append('files', selectedFile);

      setIsLoading(true);
      console.log(selectedFile);
      console.log(fd);
      let url1 = 'http://localhost:8080/user/add';
      let url2 = 'http://localhost:8080/upload';

      url1 = url1+"?firstName="+enteredFirstName;
      url1 = url1+"&lastName="+enteredLastName;
      url1 = url1+"&UserName="+enteredUserName;
      url1 = url1+"&ImagePath="+selectedFile.name;

      let promise1 = fetch(url1, {
        method: 'POST',
        // body: JSON.stringify ({
        //   firstname: enteredFirstName,
        //   lastname: enteredLastName,
        //   username: enteredUserName,
        //   imagepath: selectedFile.name
        // }),
        headers:{'Content-Type': 'application/json'},
      }).then(res => {
        setIsLoading(false);
        if (res.ok) {
          return res.text()  
        } else {
          return res.json().then(data => {
            let errorMessage = 'SignUp request FAILED!!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      }).then(data => {
          alert(data)
      })
      .catch((err) => {
        alert(err.message);
      });

      let promise2 = fetch(url2, {
        method: 'POST',
        body:fd,
      }).then(function (res) {
        if (res.ok) {
          alert("Image uploaded! ");
        } else {
          alert("Image uploading failed! ");
        }
      });

      Promise.all([promise2,promise1]).then( (values) => {
        history.push('../../');
      });
    };
// category, brand, price, condition, owner, discription, size, name, color, image
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={AbuPic}/>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {/*subheading && <Subheading>{subheading}</Subheading>*/}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={submitHandler}>
              <Input type="text" name="firstname" placeholder="First Name" ref={firstNameInputRef} />
              <Input type="text" name="lastname" placeholder="Last Name" ref={lastNameInputRef} />

              <Input type="text" name="username" placeholder="User Name" ref={userNameInputRef}/>
              <Input type="file" name="files" accept="image/*" onChange={(event) => setSelectedFile(event.target.files[0])} />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

// category  dropdown
// brand     text
// condi     choose
// owner     displayed optional no do
// size      dropdown
// color     text
// price     int