import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { useContext } from "react";
import {
  Image, ScrollView, StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { AppContext } from "../../AppProvider";
import { auth, db } from "../../firebase";

export default function LoginScreen() {
  const { navigate } = useNavigation();
  const context = useContext(AppContext);

  const goRegisterScreen = () => navigate("RegisterScreen");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginAction(values);
    },
  });

  const loginAction = (values) => {
    auth
      .signInWithEmailAndPassword(values.username, values.password)
      .then((res) => {
        db.collection("users")
          .where("email", "==", values.username)
          .get()
          .then((item) => {
            item.docs.map(async (items) => {
              await AsyncStorage.setItem("auth", JSON.stringify(items.data()));
              context.setAuth(items.data());
            });
          });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/login.png")}
        resizeMode={"stretch"}
      />
      <Text style={styles.title}>Lets Sign you in</Text>
      <Text style={styles.description}>
        Welcome Back ,{"\n"}You have been missed
      </Text>

      <View>
        <TextInput
          style={styles.input}
          value={formik.values.username}
          onChangeText={(text) => formik.setFieldValue("username", text)}
          placeholder="Email ,phone & username"
        />
        <TextInput
          style={styles.input}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          placeholder="Password"
          secureTextEntry={true}
          passwordRules={true}
        />
        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={formik.submitForm} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.hr} />
        <TouchableOpacity onPress={goRegisterScreen}>
          <Text style={{ textAlign: "center" }}>
            Don’t have an account ?{" "}
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              {" "}
              Register Now
            </Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    padding: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 37,
    textAlign: "center",
    color: "#000000",
  },
  description: {
    fontWeight: "400",
    textAlign: "center",
    fontSize: 28,
    lineHeight: 35,
  },

  input: {
    borderWidth: 1,
    borderColor: "#8E8383",
    borderRadius: 5,
    padding: 15,
    marginTop: 15,
  },

  forgetPassword: {
    textAlign: "right",
    fontFamily: "Outfit",
    marginTop: 10,
  },
  logo: {
    alignSelf: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    marginTop: 20,
    borderRadius: 5,
  },
  loginBtnText: {
    fontSize: 18,
    fontFamily: "Outfit",
    fontWeight: "500",
    padding: 20,
    color: "#fff",
    textAlign: "center",
  },

  hr: {
    borderWidth: 1,
    borderColor: "lightgray",
    margin: 15,
  },
});
