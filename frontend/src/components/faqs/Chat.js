import React, {useState} from "react";
import {motion} from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import {SectionHeading, Subheading as SubheadingBase} from "components/misc/Headings.js";
import {ReactComponent as ClosedIcon} from "images/message-icon.svg";
import {ReactComponent as OpenIcon} from "images/open-message-icon.svg";
import {PrimaryButton as PrimaryButtonBase} from "../misc/Buttons";
import SendMessageForm from "../forms/SendMessageForm";

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4  inline-block`
const Column = tw.div``;

const Image = styled.div(props => [`background-image: url("${props.imageSrc}");`, props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`, props.imageShadow ? tw`shadow` : tw`shadow-none`, tw`hidden lg:block rounded h-32 bg-center`, tw`w-32`]);
const FAQContent = tw.div`lg:ml-12`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionTextFrom = tw.span`text-sm lg:text-sm`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-300 text-gray-100 p-1 rounded-full group-hover:bg-primary-400 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-3`}
  }
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;
const Answer = motion(tw.dd` text-sm sm:text-base leading-relaxed`);

export default ({
                    heading = "Chat",
                    description = "go ahead! try to sell your products!",
                    userImageSrc,
                    friendImageSrc,
                    messages,
                    friendUserName,
                    userUserName,
                    productId,
                }) => {
    const faqs = messages;
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    let isMe;
    return (
        <Container>
            <Content>
                <ThreeColumnContainer>
                    <Column tw='hidden lg:block w-2/12 h-1/6'>
                        <Image imageSrc={userImageSrc} tw="rounded-full"/>
                    </Column>
                    <Column>
                        <FAQContent>
                            <Heading>{heading}</Heading>
                            <Description>{description}</Description>
                            <FAQSContainer>
                                {faqs.map((faq, index) => (
                                    <FAQ
                                        key={index}
                                        onClick={() => {
                                            toggleQuestion(index);
                                        }}
                                        className="group"
                                    >
                                        <Question>
                                            <QuestionText>
                                                {faq.sender === userUserName ? isMe = true : isMe = false}
                                                {isMe === true?
                                                    <HighlightedText>Me</HighlightedText>
                                                    :
                                                    <HighlightedText>{friendUserName}</HighlightedText>
                                                }

                                                <QuestionTextFrom>  {faq.date}</QuestionTextFrom>
                                            </QuestionText>
                                            <QuestionToggleIcon>
                                                {activeQuestionIndex === index ? <OpenIcon/> : <ClosedIcon/>}
                                            </QuestionToggleIcon>
                                        </Question>
                                        <Answer
                                            variants={{
                                                open: {opacity: 1, height: "auto", marginTop: "16px"},
                                                collapsed: {opacity: 0, height: 0, marginTop: "0px"}
                                            }}
                                            initial="collapsed"
                                            animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                            transition={{duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}}
                                        >
                                            {faq.content}
                                        </Answer>
                                    </FAQ>
                                ))}
                            </FAQSContainer>
                        </FAQContent>
                        <FAQ>
                            <FAQSContainer>
                                <FAQContent>
                                    <SendMessageForm
                                        friendUserName={friendUserName}
                                        productId={productId}
                                    >
                                    </SendMessageForm>
                                </FAQContent>
                            </FAQSContainer>
                        </FAQ>
                    </Column>
                    <Column tw='lg:block w-2/12 h-1/6'>
                        <Image imageSrc={friendImageSrc} tw="rounded-full"/>
                    </Column>
                </ThreeColumnContainer>
            </Content>
        </Container>
    );
};
