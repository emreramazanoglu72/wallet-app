import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [auth, setAuth] = React.useState();
  const [walletList, setWalletList] = React.useState([]);
  const logOut = async () => {
    await AsyncStorage.removeItem("auth");
    setAuth(null);
  };
  React.useEffect(() => getAuth(), []);
  const getAuth = async () => {
    const auth = await AsyncStorage.getItem("auth");
    if (auth) {
      setAuth(JSON.parse(auth));
    }
  };
  const state = { auth, setAuth, logOut, walletList, setWalletList };
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;

const styles = StyleSheet.create({});
