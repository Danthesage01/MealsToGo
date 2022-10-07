import React from "react";
import styled from "styled-components/native";
import {
  StatusBar,
  View,
  Platform,
  SafeAreaView,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestuarantsInfoCard from "../components/RestuarantInfoComponents";
const RestuarantsScreen = () => {
  return (
    <SafeArea >
      <SearchbarContainer >
        <SearchbarView placeholder="Search" />
      </SearchbarContainer>
      <RestuarantContainer >
        <RestuarantsInfoCard />
      </RestuarantContainer>
    </SafeArea>
  );
};

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const SearchbarContainer = styled(View)`
  padding: 16px;
`;
const RestuarantContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;
const SearchbarView = styled(Searchbar)`
  padding: 0;
  alignitems: "center";
  justifycontent: "center";
`;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });

export default RestuarantsScreen;
