import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  Text, View
} from "react-native";
import GET from "../../service/Api";
import WalletHeaderCard from "../../components/WalletHeaderCard";
import Currency from "../../utils/numberFormat";

const WalletDetail = ({ route }) => {
  const { item } = route.params;
  const [response, setResponse] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    GET(`/market/orderbook?market=${item.marketCode}&depth=50`).then(
      (response) => {
        setResponse(response);
      }
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      <WalletHeaderCard item={item} />
      <View>
        <Text
          style={{
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            padding: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          BIDS
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
            paddingTop: 15,
            paddingBottom: 15,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Total (TRY)</Text>
          <Text style={{ fontWeight: "bold" }}>Quantity ({item.altText})</Text>
          <Text style={{ fontWeight: "bold" }}>Price</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
          }}
        >
          <View style={{ flex: 1, alignSelf: "center" }}>
            {response?.bids?.map((data) => (
              <Text
                style={{
                  borderBottomWidth: 1,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                <Currency name={"₺"} value={data[0]} />
              </Text>
            ))}
          </View>
          <View style={{ flex: 1, alignSelf: "center" }}>
            {response?.bids?.map((data) => (
              <Text
                style={{
                  borderBottomWidth: 1,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                <Currency name={item.altText} value={data[1]} />
              </Text>
            ))}
          </View>
          <View style={{ flex: 1, alignSelf: "center" }}>
            {response?.bids?.map((data) => (
              <Text
                style={{
                  borderBottomWidth: 1,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                <Currency name={"₺"} value={data[1] * data[0]} />
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View>
        <Text
          style={{
            backgroundColor: "#FFFFFF",
            textAlign: "center",
            padding: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          ASKS
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Total (TRY)</Text>
          <Text style={{ fontWeight: "bold" }}>Quantity ({item.altText})</Text>
          <Text style={{ fontWeight: "bold" }}>Price</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#FFFFFF",
          }}
        >
          <View style={{ flex: 1, alignSelf: "center" }}>
            {response?.asks?.map((data) => (
              <Text
                style={{
                  borderBottomWidth: 1,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                <Currency name={"₺"} value={data[0]} />
              </Text>
            ))}
          </View>
          <View style={{ flex: 1, alignSelf: "center" }}>
            {response?.asks?.map((data) => (
              <Text
                style={{
                  borderBottomWidth: 1,
                  textAlign: "center",
                  padding: 10,
                }}
              >
                <Currency name={item.altText} value={data[1]} />
              </Text>
            ))}
          </View>
          <View style={{ flex: 1, alignSelf: "center" }}>
            {response?.asks?.map((data) => (
              <Text
                style={{
                  borderBottomWidth: 1,
                  textAlign: "right",
                  padding: 10,
                }}
              >
                <Currency name={"₺"} value={data[1] * data[0]} />
              </Text>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WalletDetail;

const styles = StyleSheet.create({});
