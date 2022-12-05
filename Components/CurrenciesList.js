import {
  StyleSheet,
  FlatList
} from "react-native";
import CurrenciesListItem from "./CurrenciesListItem.js";
import React from "react";

CurrenciesList = (currenciesRates) => {

  const [expandedItem, setExpandedItem] = React.useState(0);

  expansionManager = (currency) => {
    setExpandedItem(currency.id)
  }

  return (
    <FlatList
      style={styles.currenciesList}
      data={() => Object.keys(currenciesRates).map((key) => {return {abbreviation: key, rates: currenciesRates[key]}})}
      renderItem={({item}) => (
        <CurrenciesListItem 
          currency={item} 
          currenciesRates={currenciesRates} 
          updateExpansion={expansionManager} 
          expanded={item.id == expandedItem ? true : false}/>)}
    />
  );
}

// Styles
const styles = StyleSheet.create({
  currenciesList: {
    width: "100%",
    backgroundColor: "#fff"
  }
});

export default CurrenciesList;
