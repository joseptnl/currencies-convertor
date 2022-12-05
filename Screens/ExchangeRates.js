
import CurrenciesList from "../Components/CurrenciesList.js"
import {
  View,
  StyleSheet,
  Text
} from "react-native";
import React from "react"

ExchangeRates = ({route}) => {
  return (
    <View style={styles.background}>
      <CurrenciesList currenciesRates={route.params.rates}/>
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
