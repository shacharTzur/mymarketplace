import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import Peddler from "images/ourImages/aladdin peddler.png";
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
  heading = <>What do <span tw="text-primary-500">you want</span><wbr/> today?</>,
  description = "Tell us what you want to find today! relevant sellers will be notified and contact you ASAP!",
  submitButtonText = "Send",
  formAction = "#",
  formMethod = "get",
  textOnLeft = true,
  userName = "",
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  // let brandData = Brands();
  // let brandData = [{'brand': 'fox'}, {brand: 'renuar'}];
  // const [hintData, setHintData] = useState([])
  // const [text, setText] = useState('')

  // const getBrandData = async() => {
  //   let brandData = ['fox', 'renuar'];
  //   setHintData(brandData)
  // }
    const history = useHistory();
    const titleInputRef = useRef();
    const categoryInputRef = useRef();
    const brandInputRef = useRef();
    const conditionInputRef = useRef();
    const sizeInputRef = useRef();
    const colorInputRef = useRef();
    const priceInputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);

      let url = 'http://localhost:8080/product/Iwant?searcher='+userName;
      if (enteredCategory != 'true'){
        url = url+'&givenCategory='+enteredCategory
      }
      if (enteredBrand != ''){
        url = url+'&givenBrand='+enteredBrand
      }
      if (enteredPrice != ''){
        url = url+'&givenPrice='+enteredPrice
      }
      if (enteredCondition != 'true'){
        url = url+'&givenCondi='+enteredCondition
      }
      if (enteredSize != 'true'){
        url = url+'&givenSize='+enteredSize
      }
      if (enteredColor != ''){
        url = url+'&givenColor='+enteredColor
      }
      fetch(url).then(res => {
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
          // setShowModal(true);
          alert(data)
          // if (!showModal){
            history.push('../landingPages/Homepage');
          // }          
      })
      .catch((err) => {
        alert(err.message);
      });
    };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={Peddler} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {/*subheading && <Subheading>{subheading}</Subheading>*/}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form onSubmit={submitHandler}>
              <Input type="text" name="title" placeholder="Search title" ref={titleInputRef} />

              <Select name="category" ref={categoryInputRef}>
                <option disabled selected value> -- Item Category -- </option>
                <option value="shirt">Shirt</option>
                <option value="jacket">Jacket</option>
                <option value="sweatshirt">Sweatshirt</option>
                <option value="pants">Pants</option>
                <option value="shorts">Shorts</option>
                <option value="suits">Suits</option>
                <option value="dress">Dress</option>
                <option value="blouse">Blouse</option>
                <option value="skirt">Skirt</option>
              </Select>

              <Input type="text" name="brand" placeholder="Brand Name" ref={brandInputRef} />

              <Select name="condition" ref={conditionInputRef}>
                <option disabled selected value> -- Item Condition -- </option>
                <option value="new">New</option>
                <option value="excellent">Used - Excellent shape</option>
                <option value="good">Used - Good</option>
                <option value="fair">Used - Fair</option>
                <option value="very_used">Very Used</option>
              </Select>

              <Select name="size" ref={sizeInputRef}>
                <option disabled selected value> -- item size -- </option>
                <option value="xxs">XXS</option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </Select>

              <Input type="text" name="color" placeholder="Preferred color" ref={colorInputRef}/>
              <Input type="text" name="price" placeholder="Price around" ref={priceInputRef} />


              {/*             {<code>{`[${hintData.toString()}]`}</code>}}
             <Hint options={hintData} allowTabFill>
              <input className='input-with-hint'
                name="brand"
                placeholder="enter brand"
                value={text}
                onChange={e => setText(e.target.value)} 
              />
              </Hint}>*/}
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      {/*{showModal ? <ModalWant/> : ''}*/}
      {/*{showModal ? 'HAHAHAH' : ''}*/}
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