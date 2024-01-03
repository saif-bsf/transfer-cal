import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { Colors } from "../constants/colors";
import useCurrency from "../hooks/useCurrency";

const CurrencySelector = () => {
  const { currencyList } = useCurrency();
  return (
    <View style={styles.container}>
      <View style={styles.flag}>
        <Text>You send exactly</Text>
        <Text>Flag</Text>
      </View>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  flag: {
    padding: 8,
    backgroundColor: Colors.primary100,
  },
});

export default CurrencySelector;
