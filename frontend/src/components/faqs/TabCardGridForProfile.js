import React, {useState} from "react";
import {motion} from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import {Container, ContentWithPaddingXl} from "components/misc/Layouts.js";
import {SectionHeading} from "components/misc/Headings.js";
import {PrimaryButton as PrimaryButtonBase} from "components/misc/Buttons.js";
import {DeleteButton as DeleteButtonBase} from "components/misc/Buttons.js";
import {ReactComponent as NotificationIcon} from "images/notification-icon.svg";
import {ReactComponent as DeleteIcon} from "images/delete-icon.svg";
import {ReactComponent as SvgDecoratorBlob1} from "images/svg-decorator-blob-5.svg";
import {ReactComponent as SvgDecoratorBlob2} from "images/svg-decorator-blob-7.svg";
import { useHistory } from 'react-router-dom'

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }

  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
}
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
   ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const DeleteButtonCont = tw.div`inline-flex bg-gray-400 hocus:bg-gray-700 top-0 mt-2 ml-2 mb-2 rounded-full px-1 py-1 content-center right-0 focus:shadow-outline focus:outline-none transition duration-300`;
const CardRatingContainer = tw.div`inline-flex bg-gray-100 top-0 mt-2 ml-2 mb-2 rounded-full px-2 py-2 bg-red-600 content-center hocus:bg-red-700 focus:shadow-outline focus:outline-none transition duration-300`;
const CardRating = styled.div`
  ${tw`mr-0 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-5 h-4 fill-current text-orange-400 mr-0`}
  }
`;
const DeleteRating = styled.div`
    ${tw`mr-0 text-sm font-bold flex items-end`}
    svg {
        ${tw`fill-current mr-0`}
    }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm bottom-0 `;
const DeleteButton = tw(DeleteButtonBase)`text-sm bottom-0 `;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 bottom-0`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;



const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
                    heading,
                    tabs
                }) => {
    const tabsKeys = Object.keys(tabs);
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);
    const history = useHistory();
    let isNotification = false;
    
    const notificationButtonHandler = (id) => {
        history.push('/components/innerPages/WhoWantPage#'+id, {some: id});
    }
    const deleteButtonHandler = (id) => {
        let url = 'http://localhost:8080/product/deleteProduct?prod_id='+id;
        fetch(url, {
            method:'DELETE',
        }).then(res => res.text())
        .then(data => history.go(0))
    }

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
                        initial={activeTab === tabKey ? "current" : "hidden"}
                        animate={activeTab === tabKey ? "current" : "hidden"}
                    >
                        {tabs[tabKey].map((card, index) => (
                            <CardContainer key={index}>
                                {card.notification === 1 ? isNotification=true: isNotification=false} {
                            }

                                <Card className="group" href={card.url} initial="rest" whileHover="hover"
                                      animate="rest">
                                    <CardImageContainer imageSrc={card.imageSrc}>
                                        {isNotification ?
                                            <CardRatingContainer>
                                                <CardRating>
                                                    <button onClick={() => notificationButtonHandler(card.id)}>
                                                    <NotificationIcon/>
                                                    </button>
                                                </CardRating>
                                            </CardRatingContainer>
                                            : null
                                        }
                                    </CardImageContainer>
                                    <CardText>
                                        <CardTitle>{card.category} </CardTitle>
                                        <CardContent>{card.brand}</CardContent>
                                        <CardPrice>{card.price}
                                            <DeleteButtonCont>
                                                <DeleteButton onClick={() => deleteButtonHandler(card.id)}> <DeleteIcon/> </DeleteButton>                                                
                                            </DeleteButtonCont>
                                        </CardPrice>
                                        
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
    );
};
