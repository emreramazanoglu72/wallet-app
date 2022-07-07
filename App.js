import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screns/authentication/WelcomeScreen";
import LoginScreen from "./screns/authentication/LoginScreen";
import RegisterScreen from "./screns/authentication/RegisterScreen";
import DashboardScreen from "./screns/private/DashboardScreen";
import { auth, db } from "./firebase";
import AppProvider, { AppContext } from "./AppProvider";
import WalletDetail from "./screns/private/WalletDetail";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const context = React.useContext(AppContext);
  return (
    <NavigationContainer>
      {context.auth == null ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="RegisterScreen"
            component={RegisterScreen}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="DashboardScreen"
            component={DashboardScreen}
          />
           <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="WalletDetail"
            component={WalletDetail}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

function App() {

  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}

export default App;
