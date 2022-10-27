import styled from "styled-components/native";
import { StatusBar, Platform, SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;
