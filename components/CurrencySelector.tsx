import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./base/Input";
import { Colors } from "../constants/colors";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  flag: string;
  currencyCode: string;
  label: string;
  isSourceCurrency: boolean;
  currencies?: Array<{
    label: string;
    value: string;
  }>;
  resultAmount?: string;
  onCurrencyChange?: (selectedCurrency: string) => void;
  onInputChange?: (value: string) => void;
};

const CurrencySelector = ({
  flag,
  currencyCode,
  label,
  currencies,
  isSourceCurrency,
  resultAmount,
  onInputChange,
  onCurrencyChange,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Text style={styles.label}>{label}</Text>
        {isSourceCurrency && (
          <Text style={styles.flagLabel}>
            {flag} {currencyCode}
          </Text>
        )}
        {!isSourceCurrency && (
          <RNPickerSelect
            value={currencyCode}
            onValueChange={(itemValue, itemIndex) =>
              onCurrencyChange && onCurrencyChange(itemValue)
            }
            items={currencies || []}
            style={pickerSelectStyles}
            Icon={() => (
              <Ionicons name="chevron-down" size={24} color="white" />
            )}
          />
        )}
      </View>
      <Input
        onChange={onInputChange}
        resultAmount={resultAmount}
        isSourceCurrency={isSourceCurrency}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  flagContainer: {
    padding: 16,
    zIndex: 1,
    left: 12,
    minWidth: 140,
    backgroundColor: Colors.primary100,
    borderRadius: 12,
    color: "white",
  },
  label: {
    color: "white",
  },
  flagLabel: {
    fontSize: 24,
    color: "white",
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 24,
    color: "white",
  },
  inputAndroid: {
    fontSize: 24,
    color: "white",
  },
});

export default CurrencySelector;
