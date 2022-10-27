import React from "react";
import { View, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components/native";
import RestuarantsScreen from "./src/features/restuarants/screen/RestuarantsScreen";
import { theme } from "./src/infrastructure/theme";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "./src/components/utility/safeAreaComp";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const MapScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Map!</Text>
      </View>
    </SafeArea>
  );
};
const SettingsScreen = () => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
};
const RestaurantScreen = () => {
  return (
    <ThemeProvider theme={theme}>
      <RestuarantsScreen />
    </ThemeProvider>
  );
};
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Map") {
            iconName = focused ? "md-map" : "md-map-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "md-settings" : "md-settings-outline";
          } else if (route.name === "Restaurants") {
            iconName = focused ? "md-restaurant" : "md-restaurant-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "#2182BD",
        tabBarInactiveTintColor: "#757575",
      })}
    >
      <Tab.Screen
        name="Restaurants"
        component={RestaurantScreen}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MyTabs />
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
}
