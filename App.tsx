import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Button from "./components/Button";
import CurrencySelector from "./components/CurrencySelector";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CurrencySelector />
      <Button>Start transfer</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
