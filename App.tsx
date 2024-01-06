import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CurrencyConverter from "./components/CurrencyConverter";

export default function App() {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={Keyboard.dismiss}
    >
      <View style={styles.innerContainer}>
        <StatusBar style="auto" />
        <CurrencyConverter />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
