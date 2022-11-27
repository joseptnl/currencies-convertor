import CurrenciesList from "../Components/CurrenciesList.js"
import {
  View,
  StyleSheet,
} from "react-native";

ExchangeRates = () => {
  return (
    <View style={styles.background}>
      <CurrenciesList />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ExchangeRates;
