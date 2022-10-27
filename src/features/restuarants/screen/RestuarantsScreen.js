import React from "react";
import styled from "styled-components/native";
import {
  View,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import RestuarantsInfoCard from "../components/RestuarantInfoComponents";
import { SafeArea } from "../../../components/utility/safeAreaComp";


const RestuarantsScreen = () => {
  return (
    <SafeArea>
      <SearchbarContainer>
        <SearchbarView placeholder="Search" />
      </SearchbarContainer>
      <RestuarantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
        ]}
        renderItem={() => <RestuarantsInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};



const SearchbarContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const SearchbarView = styled(Searchbar)`
  padding: 0;
  alignitems: "center";
  justifycontent: "center";
`;

const RestuarantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding: 16
  }
})``
// const RestuarantContainer = styled(View)`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });

export default RestuarantsScreen;
