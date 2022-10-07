import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";



const RestuarantInfoCard = ({ restuarant = {} }) => {
  const {
    name = "Shola Imole",
    icon = "",
    photos = [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    ],
    address = "Kunle Onile Ilorin",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restuarant;
  return (
    <RestuarantCard>
      <RestuarantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestuarantCard>
  );
};

const RestuarantCard = styled(Card)`
  background: white;
`;
const RestuarantCardCover = styled(Card.Cover)`
  padding: 26px;
  background: white;
`;
const Title = styled(Text)`
  padding: 16px;
`;

export default RestuarantInfoCard;
