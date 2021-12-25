import React, {useState} from "react";
import {motion} from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components"
import GetProfileData from "./ProfileCreator";
import {css} from "styled-components/macro"; //eslint-disable-line
import {SectionHeading, Subheading as SubheadingBase} from "components/misc/Headings.js";
import {ReactComponent as PlusIcon} from "feather-icons/dist/icons/plus.svg";
import {ReactComponent as MinusIcon} from "feather-icons/dist/icons/minus.svg";
import TabCardGrid from "../cards/TabCardGrid";
import TabGrid from "components/cards/TabCardGrid.js";
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;
const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const Image = styled.div(props => [`background-image: url("${props.imageSrc}");`, props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`, props.imageShadow ? tw`shadow` : tw`shadow-none`, tw`hidden lg:block rounded h-144 bg-center`]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);


export default ({
                    data,
                    products,
                    imageSrc,
                    imageContain = false,
                    imageShadow = true,
                }) => {
    // const dataKeys = Object.keys(data);

    const [activeQuestionIndex1, setActiveQuestionIndex1] = useState(null);
    const [activeQuestionIndex2, setActiveQuestionIndex2] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex1 === questionIndex) setActiveQuestionIndex1(null);
        else setActiveQuestionIndex1(questionIndex);
    };

    return (<Container>
            <Content>
                <TwoColumn>
                    <Column tw="hidden lg:block w-2/12 flex-shrink-0">
                        <Image imageSrc={imageSrc} tw="rounded-full"/>
                    </Column>
                    <Column>
                        <FAQContent>
                            <FAQSContainer>
                                {data.map((dataKey, index) => (<FAQ
                                        key={index}
                                        onClick={() => {
                                            toggleQuestion(index);
                                        }}
                                        className="group"
                                    >
                                        <Heading>
                                            {data[0].userName}
                                        </Heading>
                                        <Question>
                                            <QuestionText>Personal Information</QuestionText>
                                            <QuestionToggleIcon>
                                                {activeQuestionIndex1 === index ? <MinusIcon/> : <PlusIcon/>}
                                            </QuestionToggleIcon>
                                        </Question>
                                        <Answer
                                            variants={{
                                                open: {opacity: 1, height: "auto", marginTop: "16px"},
                                                collapsed: {opacity: 0, height: 0, marginTop: "0px"}
                                            }}
                                            initial="collapsed"
                                            animate={activeQuestionIndex1 === index ? "open" : "collapsed"}
                                            transition={{duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}}
                                        >

                                            <h4>{"First Name: " + dataKey.firstName}</h4>
                                            <h4>{"Last Name: " + dataKey.lastName}</h4>
                                        </Answer>
                                    </FAQ>
                                ))}
                            </FAQSContainer>
                            <FAQSContainer>
                                {data.map((dataKey, index) => (<FAQ
                                    key={index}
                                    onClick={() => {
                                        toggleQuestion(index);
                                    }}
                                    className="group"
                                >
                                    <Question>
                                        <QuestionText>My Products</QuestionText>
                                        <QuestionToggleIcon>
                                            {activeQuestionIndex2 === index ? <MinusIcon/> : <PlusIcon/>}
                                        </QuestionToggleIcon>
                                    </Question>
                                    <Answer
                                        variants={{
                                            open: {opacity: 1, height: "auto", marginTop: "16px"},
                                            collapsed: {opacity: 0, height: 0, marginTop: "0px"}
                                        }}
                                        initial="collapsed"
                                        animate={activeQuestionIndex2 === index ? "open" : "collapsed"}
                                        transition={{duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98]}}
                                    >
                                    <TabGrid
                                        tabs={products}
                                        heading={''}
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
