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
  const [lastExpanded, setLastExpanded] = React.useState(0);

  expansionManager = (id) => {
    let cache = expandedCache
    cache[id - 1] = !cache[id - 1]
    if (lastExpanded > 0) cache[lastExpanded - 1] = false
    if (!cache[id-1]) setLastExpanded(0)
    else setLastExpanded(id)
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
