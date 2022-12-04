import { currenciesData } from "../currenciesData.js";
import {
  StyleSheet,
  FlatList
} from "react-native";
import CurrenciesListItem from "./CurrenciesListItem.js";
import React from "react";

CurrenciesList = () => {

  const [expandedItem, setExpandedItem] = React.useState(0);

  expansionManager = (currency) => {
    setExpandedItem(currency.id)
  }

  return (
    <FlatList
      style={styles.currenciesList}
      data={currenciesData}
      renderItem={({item}) => (
        <CurrenciesListItem currency={item} currenciesData={currenciesData} updateExpansion={expansionManager} expanded={item.id == expandedItem ? true : false}/>
      )}
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
