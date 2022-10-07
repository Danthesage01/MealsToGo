import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestuarantsScreen from "./src/features/restuarants/screen/RestuarantsScreen";
import RestuarantsInfo from "./src/features/restuarants/components/RestuarantInfoComponents";
export default function App() {
  return (
    <>
      <RestuarantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
