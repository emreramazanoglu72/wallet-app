import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { bgColors } from "../utils";

const WalletCardColor = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
    onPress={() => navigate("WalletDetail", { item: item })}
    style={styles.cardContainer}
  >
    <LinearGradient
      colors={[
        "rgba(255, 255, 255, 0.12)",
        bgColors[Math.floor(Math.random() * 5)],
      ]}
      style={styles.Card}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={styles.Head}>
          <Image style={styles.Logo} source={item.image} />
        </View>
        <View>
          <Text style={styles.Title}>{item.marketCode}</Text>
          <Text style={styles.AltText}>{item.altText}</Text>
        </View>
      </View>
      <Image
        style={{ marginTop: 15, marginBottom: 7 }}
        source={require(`../assets/schema1.png`)}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={styles.Price}>$6780</Text>
        <Text style={styles.Rate}>11.75%</Text>
      </View>
    </LinearGradient>
    </TouchableOpacity>
  );
};

export default WalletCardColor;

const styles = StyleSheet.create({
  Card: {
    height: 150,
    width: 195,
    borderRadius: 18,
    padding: 15,
    marginRight: 10,
  },
  Head: {
    margin: "auto",
    borderRadius: 100,
    width: 40,
    marginRight: 10,
  },
  Logo: {
    margin: 5,
    height: 40,
    width: 40,
    alignSelf: "center",
  },
  Title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  AltText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    color: "#FFFFFF",
    opacity: 0.6,
  },
  Price: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.6,
    color: "#FFFFFF",
  },
  Rate: {
    fontWeight: "500",
    fontSize: 10,
    letterSpacing: 0.5,
    color: "#04DC00",
  },
});
