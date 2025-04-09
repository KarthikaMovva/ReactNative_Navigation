
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import SpecificDetails from "./Screens/SpecificDetails";

const App=()=>{
  const Tab=createBottomTabNavigator();
  return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen component={HomeScreen} name="Home"/>
        <Tab.Screen component={DetailsScreen} name="Details"/>
        <Tab.Screen component={SpecificDetails} name="More Details"/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;