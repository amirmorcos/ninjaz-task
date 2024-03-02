/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import BottomNavigation from "./src/navigation/BottomNavigation/BottomNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
