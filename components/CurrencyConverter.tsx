import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useCurrency from "../hooks/useCurrency";
import Button from "./base/Button";
import CurrencySelector from "./CurrencySelector";
import { transformCurrencyList } from "../utils/utils";
import { currencyListData } from "../mock/data.json";
import ExchangeInfo from "./ExchangeInfo";
import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const CurrencyConverter = () => {
  const { currencyList } = useCurrency();
  const [resultAmount, setResultAmount] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState<
    (typeof currencyListData)[0]
  >(currencyListData[1]);

  useEffect(() => {
    const amount = Number(inputAmount) * Number(selectedCurrency?.rate);
    setResultAmount(
      amount
        ? amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        : ""
    );
  }, [inputAmount, selectedCurrency]);

  const handleCurrencyChange = (selCurrency: string) => {
    const selCurrrencyObj =
      currencyList.find((currency) => currency.currencyName === selCurrency) ||
      currencyListData[1];
    setSelectedCurrency(selCurrrencyObj);
  };

  return (
    <View style={styles.container}>
      <CurrencySelector
        flag={currencyList[0].countryFlag}
        currencyCode={currencyList[0].currencyName}
        onInputChange={(value: string) => setInputAmount(value)}
        label="You send exactly"
        isSourceCurrency={true}
      />
      <ExchangeInfo
        currencyCode={selectedCurrency?.currencyName}
        value={selectedCurrency?.rate}
      />
      <CurrencySelector
        flag={selectedCurrency?.countryFlag}
        currencyCode={selectedCurrency?.currencyName}
        label="Recipient gets"
        currencies={transformCurrencyList(currencyList)}
        onCurrencyChange={handleCurrencyChange}
        isSourceCurrency={false}
        resultAmount={resultAmount}
      />
      <Text style={styles.timeText}>
        {<Ionicons name="flash" size={16} color="black" />}
        Processing time - 1 Hour
      </Text>
      <Text style={styles.termsText}>
        *Normal working hours & public holidays apply
      </Text>
      <Button>Start transfer</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  timeText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 36,
    marginBottom: 12,
  },
  termsText: {
    fontSize: 12,
    color: Colors.gray300,
    marginBottom: 36,
  },
});

export default CurrencyConverter;
