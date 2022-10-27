import styled from "styled-components/native";
import { View, Image, Text } from "react-native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestuarantCard = styled(Card)`
  background: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props)=> props.theme.space[3]}
`;
export const RestuarantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]}
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled(View)`
  flex-direction: row;
`;
export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
