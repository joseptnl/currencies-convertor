import { currenciesData } from "../currenciesData.js";
import {
  StyleSheet,
  FlatList
} from "react-native";
import CurrenciesListItem from "./CurrenciesListItem.js";
import React from "react";

CurrenciesList = () => {
  return (
    <FlatList
      style={styles.currenciesList}
      data={currenciesData}
      renderItem={({item}) => (
        <CurrenciesListItem currency={item} currenciesData={currenciesData}/>
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
