import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { useContext } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { AppContext } from "../../AppProvider";
import { auth, db } from "../../firebase";

export default function RegisterScreen() {
  const { navigate } = useNavigation();
  const context = useContext(AppContext);

  const goLoginScreen = () => navigate("LoginScreen");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      surName: "",
    },
    onSubmit: (values) => {
      register(values);
    },
  });

  const register = (values) => {
    console.log("geldi", values);
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((item) => {
        const addData = {
          firstname: values.firstName,
          surName: values.surName,
          email: values.email,
          password: values.password,
        };
        db.collection("users").add(addData);
        AsyncStorage.setItem("auth", JSON.stringify(addData));
        context.setAuth(addData);
      })
      .catch((err) => console.log(232, err));
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/login.png")}
        resizeMode={"stretch"}
      />
      <Text style={styles.title}>Lets Register Account</Text>
      <Text style={styles.description}>
        Hello user , you have a greatful journey
      </Text>

      <View>
        <TextInput
          style={styles.input}
          value={formik.values.firstName}
          onChangeText={(text) => formik.setFieldValue("name", text)}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          value={formik.values.surName}
          onChangeText={(text) => formik.setFieldValue("surName", text)}
          placeholder="Sur Name"
        />
        <TextInput
          style={styles.input}
          value={formik.values.email}
          onChangeText={(text) => formik.setFieldValue("email", text)}
          placeholder="Email"
          textContentType={"emailAddress"}
          keyboardType={"email-address"}
        />
        <TextInput
          style={styles.input}
          value={formik.values.password}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          placeholder="Password"
          secureTextEntry
        />

        <TouchableOpacity onPress={goLoginScreen}>
          <Text style={styles.forgetPassword}>
            Already have an account ?{" "}
            <Text style={{ fontWeight: "bold" }}>Login</Text>{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={formik.submitForm} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    padding: 25,
    flex: 1,
    display: "flex",
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
