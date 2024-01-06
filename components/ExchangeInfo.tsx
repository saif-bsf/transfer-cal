import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  currencyCode: string;
  value: string;
};

const ExchangeInfo = ({ currencyCode, value }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.verticalLine} />
      <View style={styles.textContianer}>
        <Text style={styles.exchangeLabel}>
          <Text style={styles.numberLabel}>1</Text> AED = {currencyCode}{" "}
          <Text style={styles.numberLabel}>{value}</Text>
        </Text>
        <Text style={styles.feeLabel}>
          Fees
          <Ionicons name="chevron-down" size={18} color={Colors.primary100} />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  verticalLine: {
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: Colors.gray400,
    marginLeft: 20,
    height: "100%",
  },
  textContianer: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: Colors.gray100,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginVertical: 20,
  },
  exchangeLabel: {},
  feeLabel: {
    color: Colors.primary100,
    fontSize: 16,
    fontWeight: "bold",
  },
  numberLabel: {
    fontWeight: "bold",
    color: Colors.gray400,
  },
});

export default ExchangeInfo;
