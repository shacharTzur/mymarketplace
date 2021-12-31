import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import ArabStore from "images/ourImages/arab store.jpg";
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
  heading = <>What do <span tw="text-primary-500">you want to SELL</span><wbr/> today?</>,
  description = "Tell us what you want to find today! relevant sellers will be notified and contact you ASAP!",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = false,
  userName = "",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
    const history = useHistory();
    const titleInputRef = useRef();
    const categoryInputRef = useRef();
    const brandInputRef = useRef();
    const conditionInputRef = useRef();
    const sizeInputRef = useRef();
    const colorInputRef = useRef();
    const priceInputRef = useRef();
    const descriptionInputRef = useRef();
    // const imagePathInputRef = useRef();


    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    // const [showModal, setShowModal] = useState(false);

    const submitHandler = (event) => {
      event.preventDefault();
      const enteredTitle = titleInputRef.current.value;
      const enteredCategory = categoryInputRef.current.value;
      const enteredBrand = brandInputRef.current.value;
      const enteredCondition = conditionInputRef.current.value;
      const enteredSize = sizeInputRef.current.value;
      const enteredColor = colorInputRef.current.value;
      const enteredPrice = priceInputRef.current.value;
      const enteredDescription = descriptionInputRef.current.value;
      // const enteredImagePath = imagePathInputRef.current.value;
      setIsLoading(true);
      console.log(selectedFile);
      let url1 = 'http://localhost:8080/product/addNew';
      let url2 = 'http://localhost:8080/upload';
      let promise1 = fetch(url1, {
        method: 'POST',
        body: JSON.stringify ({
          category: enteredCategory,
          brand: enteredBrand,
          price: enteredPrice,
          condi: enteredCondition,
          owner: userName,
          description: enteredDescription,
          name: enteredTitle,
          size: enteredSize,
          color: enteredColor,
          // imagepath: enteredImagePath,
        }),
        headers:{'Content-Type': 'application/json'},
      }).then(res => {
        setIsLoading(false);
        if (res.ok) {
          return res.text()  
        } else {
          return res.json().then(data => {
            let errorMessage = '"I Want" request FAILED!!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      }).then(data => {
          alert(data)
            history.push('../landingPages/Homepage');    
      })
      .catch((err) => {
        alert(err.message);
      });

      let promise2 = fetch(url2, {
        method: 'POST',
        body:selectedFile ,
        // headers:{'Content-Type': 'multipart/form-data'},
      }).then(function (res) {
        if (res.ok) {
          alert("Perfect! ");
        } else {
          alert("Oops! ");
        }
      });

      Promise.all([promise2,promise1]);
    };
// category, brand, price, condition, owner, discription, size, name, color, image
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={ArabStore}/>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {/*subheading && <Subheading>{subheading}</Subheading>*/}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={submitHandler}>
              <Input type="text" name="title" placeholder="Product name" ref={titleInputRef} />
              <Input type="text" name="brand" placeholder="Brand Name" ref={brandInputRef} />

              <Select name="category" ref={categoryInputRef}>
                <option disabled selected value> -- Item Category -- </option>
                <option value="SHIRT">Shirt</option>
                <option value="JACKET">Jacket</option>
                <option value="SWEATSHIRT">Sweatshirt</option>
                <option value="PANTS">Pants</option>
                <option value="SHORTS">Shorts</option>
                <option value="SUITS">Suits</option>
                <option value="DRESS">Dress</option>
                <option value="BLOUSE">Blouse</option>
                <option value="SKIRT">Skirt</option>
              </Select>

              <Select name="condition" ref={conditionInputRef}>
                <option disabled selected value> -- Item Condition -- </option>
                <option value="NEW">New</option>
                <option value="EXCELLENT">Used - Excellent shape</option>
                <option value="GOOD">Used - Good</option>
                <option value="FAIR">Used - Fair</option>
                <option value="VERY_USED">Very Used</option>
              </Select>

              <Select name="size" ref={sizeInputRef}>
                <option disabled selected value> -- item size -- </option>
                <option value="XXS">XXS</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </Select>

              <Input type="text" name="color" placeholder="Color" ref={colorInputRef}/>
              <Input type="text" name="price" placeholder="Price in $" ref={priceInputRef} />
              <Textarea placeholder="Short description" ref={descriptionInputRef}/>
              <Input type="file" name="image" onChange={(event) => setSelectedFile(event.target.files[0])} />
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