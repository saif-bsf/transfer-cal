import React, { useRef, useState } from "react";
import { Keyboard, Pressable, StyleSheet, Text, TextInput } from "react-native";
import { Colors } from "../../constants/colors";

type Props = {
  onChange?: (text: string) => void;
  resultAmount?: string;
  isSourceCurrency: boolean;
};

const Input = ({ onChange, resultAmount, isSourceCurrency }: Props) => {
  const [inputAmount, setInputAmount] = useState("");
  const inputRef = useRef(null);

  const handleChange = (value: string) => {
    if (isSourceCurrency) {
      const validatedNumber = Number(value.replace(/[^0-9]/g, ""));
      const formattedValue = isNaN(validatedNumber)
        ? ""
        : validatedNumber.toLocaleString("en-US");
      setInputAmount(formattedValue);
      onChange && onChange(value.replace(/[^0-9]/g, ""));
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        inputRef?.current?.focus();
      }}
    >
      <TextInput
        style={styles.integerPart}
        keyboardType="decimal-pad"
        value={isSourceCurrency ? inputAmount : resultAmount?.split(".")?.[0]}
        onChangeText={handleChange}
        editable={isSourceCurrency}
        maxLength={10}
        ref={inputRef}
      />
      {resultAmount?.split(".")?.[1] && (
        <Text style={styles.decimalPart}>
          {"." + resultAmount?.split(".")?.[1]}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 24,
    borderWidth: 2,
    borderLeftWidth: 0,
    borderColor: Colors.gray200,
    borderRadius: 8,
  },
  integerPart: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
  },
  decimalPart: {
    color: Colors.gray300,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default Input;
