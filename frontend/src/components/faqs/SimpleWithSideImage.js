import React, {useState} from "react";
import {motion} from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components"
import {SectionHeading} from "components/misc/Headings.js";
import {ReactComponent as PlusIcon} from "feather-icons/dist/icons/plus.svg";
import {ReactComponent as MinusIcon} from "feather-icons/dist/icons/minus.svg";
import TabCardGridForProfile from "./TabCardGridForProfile";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
const TwoColumn = tw.div`flex`;
const Column = tw.div``;
const Image = styled.div(props => [`background-image: url("${props.imageSrc}");`, props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`, props.imageShadow ? tw`shadow` : tw`shadow-none`, tw`hidden lg:block rounded h-32 bg-center`, tw`w-32`]);
const FAQContent = tw.div`lg:ml-12`;
const Heading = tw(SectionHeading)`md:text-left`;
const FAQSContainer = tw.dl`mt-0`;
const FAQ = tw.div`mt-8 select-none border lg:border-0 px-8 py-0 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`cursor-pointer flex items-center`;
const QuestionText = tw.span`text-sm sm:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-300 text-gray-100 p-1 rounded-full group-hover:bg-primary-400 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-3`}
  }
`;
const Answer = motion(tw.dd` text-sm sm:text-base leading-relaxed`);


export default ({
                    data,
                    products,
                }) => {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    return (<Container>
            <Content>
                <TwoColumn>
                    <Column tw='hidden lg:block w-2/12 h-1/6'>
                        <Image imageSrc={data[0].imageSrc} tw="rounded-full"/>
                    </Column>
                    <Column tw='hidden sm:block w-10/12 flex-shrink h-1/6'>
                        <FAQContent>
                            <FAQSContainer>
                                {data.map((dataKey, index) => (<FAQ
                                        key={index}
                                        className="group"
                                    >
                                        <Heading>
                                            {data[0].userName}
                                        </Heading>
                                        <QuestionText>Personal Information</QuestionText>
                                        <h4>{"First Name: " + dataKey.firstName}</h4>
                                        <h4>{"Last Name: " + dataKey.lastName}</h4>
                                    </FAQ>
                                ))}
                            </FAQSContainer>
                            <FAQSContainer>
                                {data.map((dataKey, index) => (<FAQ
                                    key={index}
                                    className="group"
                                >
                                    <Question onClick={() => {
                                        toggleQuestion(index);
                                    }}>
                                        <QuestionText>My Products</QuestionText>
                                        <QuestionToggleIcon>
                                            {activeQuestionIndex === index ? <MinusIcon/> : <PlusIcon/>}
                                        </QuestionToggleIcon>
                                    </Question>
                                    <Answer
                                        variants={{
                                            open: {opacity: 1, height: 0, marginTop: "0px"},
                                            collapsed: {opacity: 0, height: 0, marginTop: "0px"}
                                        }}
                                        initial="collapsed"
                                        animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                    >
                                        <TabCardGridForProfile
                                            tabs={products}
                                        />
                                    </Answer>
                                </FAQ>))}
                            </FAQSContainer>
                        </FAQContent>
                    </Column>
                </TwoColumn>
            </Content>
        </Container>
    );
};
