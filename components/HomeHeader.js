import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../AppProvider";

const HomeHeader = () => {
  const context = React.useContext(AppContext);
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerMesage}>Good Morning</Text>
        <Text style={styles.headerTitle}>
          {context.auth.firstname} {context.auth.surName}
        </Text>
      </View>
      <TouchableOpacity onPress={context.logOut}>
        <Image source={require("../assets/avatar.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  headerTitle: {
    fontWeight: "600",
    fontSize: 28,
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
  },
  headerMesage: {
    fontWeight: "400",
    fontSize: 15,
    alignItems: "center",
    color: "#FFFFFF",
    opacity: 0.6,
  },
});
