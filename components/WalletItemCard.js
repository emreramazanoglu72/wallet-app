import { useNavigation } from "@react-navigation/native";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Currency from "../utils/numberFormat";

const WalletItemCard = ({ item }) => {
  const { navigate } = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate("WalletDetail", { item: item })}
      style={styles.cardContainer}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.logo} source={item.image} />
        <View>
          <Text style={styles.title}>{item.marketCode}</Text>
          <Text style={styles.altText}>{item.altText}</Text>
        </View>
      </View>
      <Image
        style={styles.schemaImage}
        source={require(`../assets/schema3.png`)}
      />
      <View>
        <Text style={styles.price}>
          <Currency valueStyle={styles.price} name={"$"} value={item.currentQuote} />
        </Text>
        <Text style={styles.rate}>11.75%</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WalletItemCard;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0,
    height: 50,
    borderRadius: 18,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: Dimensions.get("screen").width,
    justifyContent: "space-around",
  },
  logo: {
    margin: 5,
    height: 40,
    width: 40,
    alignSelf: "center",
  },
  title: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "white",
  },
  altText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    color: "#FFFFFF",
    opacity: 0.6,
  },
  schemaImage: {
    marginTop: 15,
    marginBottom: 15,
    height: 32,
    width: 100,
  },
  price: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.6,
    color: "white",
  },
  rate: {
    fontWeight: "500",
    fontSize: 10,
    letterSpacing: 0.5,
    color: "#04DC00",
    textAlign: "right",
  },
});
