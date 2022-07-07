import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppContext } from "../../AppProvider";
import HomeHeader from "../../components/HomeHeader";
import WalletCardColor from "../../components/WalletCardColor";
import WalletItemCard from "../../components/WalletItemCard";
import GET from "../../service/Api";
import { logos } from "../../utils";
import Currency from "../../utils/numberFormat";

export default function App() {
  const context = React.useContext(AppContext);

  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    GET("/market/ticker/all#").then((response) => {
      const data = [];
      response.map((item) => {
        item.altText = item.marketCode.split("-")[0];
        logos.filter(
          (filter) => filter.name == item.altText && (item.image = filter.image)
        );
        data.push(item);
      });
      context.setWalletList(data);
    });
  };

  if (context.walletList == null) {
    return <View></View>;
  }

  return (
    <LinearGradient
      colors={[
        "radial-gradient(231.16% 60.04% at 249.64% -17.13%, rgba(12, 10, 48, 0.99) 0%, rgba(184, 180, 255, 0) 100%)",
        "#070628",
      ]}
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <HomeHeader />

        <View style={styles.content}>
          <Text style={styles.text1}>Bitcoin</Text>
          <Text >
          <Currency valueStyle={styles.text2} name={"₺"} value={context.walletList[0]?.currentQuote} />
            <Text style={styles.text3}>+7.65%</Text>
          </Text>
          <FlatList
            horizontal
            data={context.walletList?.slice(0, 6)}
            style={{ marginTop: 15 }}
            renderItem={({ item }) => <WalletCardColor item={item} />}
            keyExtractor={(item, key) => key}
          />
        </View>
        <View
          style={{
            margin: 30,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
              Market Statistics
            </Text>
            <TouchableOpacity>
              <Text style={{ fontWeight: "400", fontSize: 16, color: "white" }}>
                All {">"}
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={context.walletList.slice(0, 16)}
            style={{ marginTop: 15, margin: -30 }}
            renderItem={({ item, key }) => <WalletItemCard item={item} />}
            keyExtractor={(item, key) => key}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("screen").height,
  },

  content: {
    marginTop: 25,
    margin: 20,
  },
  text1: {
    fontWeight: "400",
    fontSize: 15,
    alignItems: "center",
    color: "#FFFFFF",
    opacity: 0.6,
  },
  text2: {
    fontWeight: "600",
    fontSize: 26,
    lineHeight: 31,
    color: "#FFFFFF",
    justifyContent: "space-between",
  },
  text3: {
    fontWeight: "500",
    fontSize: 20,
    lineHeight: 31,
    color: "#51AE6F",
  },
});
