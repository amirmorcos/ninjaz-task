/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Toast from "react-native-toast-message";

import { Provider } from "react-redux";
import BottomNavigation from "./src/navigation/BottomNavigation/BottomNavigation";
import { persistor, store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App(): React.JSX.Element {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
        <Toast />
      </Provider>
    </PersistGate>
  );
}

export default App;
