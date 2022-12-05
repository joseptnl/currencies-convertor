import CurrenciesList from "../Components/CurrenciesList.js"
import {
  View,
  StyleSheet,
  Text
} from "react-native";
import React from "react"
import GetCurrenciesRates from '../Services/GetCurrenciesRates.js'

ExchangeRates = () => {
  const [currenciesRates, setCurrenciesRates] = React.useState([])

  React.useEffect (() => {
    GetCurrenciesRates("EUR")
    .then((data) => {
      setCurrenciesRates(data.rates)
    })
  }, [])

  return (
    <View style={styles.background}>
      <CurrenciesList />
      <Text>{currenciesRates != undefined ? currenciesRates['EUR']  : 0}</Text>
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
