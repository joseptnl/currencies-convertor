import {
  StyleSheet,
  FlatList
} from "react-native";
import CurrenciesListItem from "./CurrenciesListItem.js";
import React from "react";

CurrenciesList = ({currenciesRates}) => {

  initExpandedCache = () => {
    let cache = []
    currenciesRates.forEach(() => {
      cache.push(false)
    });
    return cache
  }

  const [expandedCache, setExpandedCache] = React.useState(initExpandedCache());

  expansionManager = (id) => {
    let cache = expandedCache.map((item, idx) => {
      if (idx == id - 1) item = !item
      else item = false
      return item
    })
    setExpandedCache(cache)
  }  

  return (
    <FlatList
      style={styles.currenciesList}
      data={currenciesRates}
      renderItem={({item, idx}) => (
        <CurrenciesListItem 
          currency={item} 
          currenciesRates={currenciesRates} 
          updateExpansion={expansionManager} 
          expanded={expandedCache[item.id - 1]}/>)}
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
