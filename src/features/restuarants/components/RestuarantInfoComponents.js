import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/Spacerrr";
import { Text } from "../../../components/typography/textComp";
import {
  Icon,
  RestuarantCard,
  RestuarantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./RestuarantInfoCardStyles";

const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Shola Imole",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    ],
    address = "Kunle Onile Ilorin",
    isOpenNow = true,
    rating = 4.7,
    isClosedTemporarily = true,
  } = restuarant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestuarantCard>
      <RestuarantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml
                key={index}
                height={20}
                width={20}
                xml={star}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer
              position="left"
              size="large"
            >
              {isOpenNow && (
                <SvgXml
                  height={20}
                  width={20}
                  xml={open}
                />
              )}
            </Spacer>
            <Spacer
              position="left"
              size="large"
            >
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestuarantCard>
  );
};

// const Title = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.heading};
//   font-size: ${(props) => props.theme.fontSizes.body};
//   padding: ${(props) => props.theme.space[3]};
//   color: ${(props) => props.theme.colors.ui.primary};
// `;

export default RestuarantInfoCard;
