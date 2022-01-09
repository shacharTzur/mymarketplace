import React, {useContext } from "react";
// import { useState } from "react";
import {motion} from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import {Container, ContentWithPaddingXl} from "components/misc/Layouts.js";
import {SectionHeading} from "components/misc/Headings.js";
import {ReactComponent as SvgDecoratorBlob1} from "images/svg-decorator-blob-5.svg";
import {ReactComponent as SvgDecoratorBlob2} from "images/svg-decorator-blob-7.svg";
import ProductContext from "../../store/product-context";
import {useHistory} from "react-router-dom";
import {ReactComponent as MessageIcon} from "../../images/message-icon.svg";
import {MsgButtonCont} from "components/misc/Buttons.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRating = styled.div`
  ${tw`mr-0 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-5 h-4 fill-current text-orange-400 mr-0`}
  }
`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
                    heading,
                    tabs
                }) => {
    const tabsKeys = Object.keys(tabs);
    const prodCtx = useContext(ProductContext);
    const history = useHistory();
    const ChatHandler = (productId) => {
        prodCtx.setProductId(productId);
        history.push('/components/innerPages/WhoWantPage');
    }
    // const [activeTab, setActiveTab] = useState(tabsKeys[0])
    return (
        <Container>
            <ContentWithPaddingXl>
                <HeaderRow>
                    <Header>{heading}</Header>
                </HeaderRow>
                {tabsKeys.map((tabKey, index) => (
                    <TabContent
                        key={index}
                        variants={{
                            current: {
                                opacity: 1,
                                scale: 1,
                                display: "flex",
                            },
                            hidden: {
                                opacity: 0,
                                scale: 0.8,
                                display: "none",
                            }
                        }}
                        transition={{duration: 0.4}}
                        // initial={activeTab === tabKey ? "current" : "hidden"}
                        // animate={activeTab === tabKey ? "current" : "hidden"}
                    >
                        {tabs[tabKey].map((card, index) => (
                            <CardContainer key={index}>
                                <Card className="group" initial="rest" animate="rest">
                                    <CardImageContainer imageSrc={card.imageSrc}>
                                        <MsgButtonCont>
                                            <CardRating>
                                                <button onClick={() => ChatHandler(card.id)}>
                                                    <MessageIcon/>
                                                </button>
                                            </CardRating>
                                        </MsgButtonCont>
                                    </CardImageContainer>
                                    <CardText>
                                        <CardTitle>{card.category}</CardTitle>
                                        <CardContent>{card.brand}</CardContent>
                                        <CardPrice>{card.price}</CardPrice>
                                    </CardText>
                                </Card>
                            </CardContainer>
                        ))}
                    </TabContent>
                ))}
            </ContentWithPaddingXl>
            <DecoratorBlob1/>
            <DecoratorBlob2/>
        </Container>
    )
        ;
};
