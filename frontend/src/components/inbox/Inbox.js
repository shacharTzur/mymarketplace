import tw from "twin.macro";
import TabCardGridForProducts from "./TabCardGridForProducts";
import {useHistory} from "react-router-dom";
import React, {useContext, useState} from "react";
import {Container, ContentWithPaddingXl} from "../misc/Layouts";
import styled from "styled-components";
import {SectionHeading, Subheading as SubheadingBase} from "../misc/Headings";
const Image = styled.div(props => [`background-image: url("${props.imageSrc}");`, props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`, props.imageShadow ? tw`shadow` : tw`shadow-none`, tw`hidden lg:block rounded h-32 bg-center`, tw`w-32`]);
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;
const TwoColumn = tw.div`flex`;
const Column = tw.div``;
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;

export default ({
                    user,
                    heading='Inbox',
                    buyProducts,
                    sellProducts
                }) => {

    return (<Container>
        <Content>
            <HeaderRow>
                <Header>heading</Header>
            </HeaderRow>
            <TwoColumn>
                <Column tw='hidden lg:block w-2/12 h-1/6'>
                    <Subheading>Products I Want To Buy</Subheading>
                    <TabCardGridForProducts
                        products={buyProducts}
                    />
                </Column>
                <Column tw='hidden sm:block w-10/12 flex-shrink h-1/6'>
                    <Subheading>Products I Want To Sell</Subheading>
                    <TabCardGridForProducts>
                        products={sellProducts}
                    </TabCardGridForProducts>
                </Column>
            </TwoColumn>
        </Content>
    </Container>
    )
}
