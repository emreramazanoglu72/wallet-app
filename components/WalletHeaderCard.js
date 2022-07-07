import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { bgColors } from "../utils";

const WalletHeaderCard = ({ item }) => {
  const { goBack } = useNavigation();
  return (
    <LinearGradient
      colors={[
        "rgba(255, 255, 255, 0.12)",
        bgColors[Math.floor(Math.random() * 5)],
      ]}
      style={{
        height: 250,
        width: Dimensions.get("screen").width,
        padding: 15,
        alignSelf: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity onPress={goBack}>
        <Image
          style={{
            height: 60,
            width: 60,
            top: 5,
          }}
          source={require("../assets/back.png")}
        />
      </TouchableOpacity>
      <View style={{ alignSelf: "center" }}>
        <Image
          style={{
            height: 60,
            width: 60,
            textAlign: "center",
            alignSelf: "center",
          }}
          source={item.image}
        />
        <View>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 20,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            {}
            {item.marketCode}
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 15,
              lineHeight: 14,
              color: "#FFFFFF",
              opacity: 0.6,
              textAlign: "center",
            }}
          >
            {item.altText}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          width: Dimensions.get("screen").width,
          bottom: 10,
          textAlign: "center",
          display: "flex",
          padding: 15,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            lineHeight: 20,
            letterSpacing: 0.7,
            color: "#FFFFFF",
            flex: 1,
          }}
        >
          $6780
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 16,
            textAlign: "center",
            letterSpacing: 0.5,
            color: "#04DC00",
          }}
        >
          11.75%
        </Text>
      </View>
    </LinearGradient>
  );
};

export default WalletHeaderCard;

const styles = StyleSheet.create({});
