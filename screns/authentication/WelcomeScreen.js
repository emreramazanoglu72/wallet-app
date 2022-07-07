import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../../AppProvider";

export default function WelcomeScreen() {
  const context = React.useContext(AppContext);

  const { navigate } = useNavigation();
  const goLoginPage = () => navigate("LoginScreen");
  const goRegisterPage = () => navigate("RegisterScreen");
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/welcomeScreen.png")}
        resizeMode={"contain"}
      />
      <Text style={styles.title}>Team work all</Text>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id potenti nisl
        tellus vestibulum dictum luctus cum habitasse augue. Convallis vitae,
        dictum justo, iaculis id. Cras a ac augue netus egestas semper varius
        facilisis id.
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          bottom: 10,
        }}
      >
        <TouchableOpacity onPress={goLoginPage} style={styles.signBtn}>
          <Text style={styles.signBtnText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goRegisterPage} style={styles.registerBtn}>
          <Text style={styles.registerBtnText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 374,
    height: 250,
  },
  title: {
    fontSize: 34,
    fontFamily: "Outfit",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    fontFamily: "Outfit",
    margin: 20,
  },

  signBtn: {
    backgroundColor: "#000000",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadiusTopRight: 10,
    borderRadiusButtomRight: 10,

    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  signBtnText: {
    fontSize: 22,
    color: "#FFFFFF",
  },

  registerBtn: {
    backgroundColor: "#6E77F6",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadiusTopRight: 10,
    borderRadiusButtomRight: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  registerBtnText: {
    fontSize: 22,
    color: "#FFFFFF",
  },
});
