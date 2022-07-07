import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { x } from "react-native-x-utils";

const Currency = (props) => {
  const {
    name = "¥",
    value = 0,
    interval = 0,
    precision = 2,
    style,
    nameStyle,
    valueStyle,
  } = props;
  //let value = props?.value ?? 0;
  let _value = x.string.isNumber(value)
    ? parseFloat(`${value}`).toFixed(precision)
    : value;
  return (
    <View style={[styles.view, style]}>
      <Text style={[styles.valueStyle, valueStyle]}>{_value}</Text>
      <Text style={[styles.nameStyle, nameStyle]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "baseline",
    display: "flex",
  },
  nameStyle: {},
  valueStyle: {},
});
export default Currency;
