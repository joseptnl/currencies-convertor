import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

// compnents
import CurrencySelector from "../Components/CurrencySelector";

//styles
import styles from "../style.js";

ConvertScreen = ({ navigation }) => {
  const currencies = [
    {
      key: "1",
      value: "USD",
      flagImage:
        "/home/code/Desktop/currency_converter/my-app/assets/usaFlag.png"
    },
    {
      key: "2",
      value: "SEK",
      flagImage:
        "/home/code/Desktop/currency_converter/my-app/assets/swedenFlag.png"
    }
  ];
  return (
    <View style={styles.container}>
      <CurrencySelector currency={currencies[0]} />
      <TouchableOpacity
        style={styles.iconBtn}
        onPress={() => console.log("switch")}
      >
        <Icon
          style={styles.switchIcon}
          name="arrow-switch"
          color="black"
          size={25}
        />
      </TouchableOpacity>

      <CurrencySelector currency={currencies[1]} />

      <TouchableOpacity
        style={styles.button}
        title="Go to rates"
        onPress={() => navigation.navigate("Exchange Rates")}
      >
        <Text style={styles.btnText}> Click to See Exchange Rates </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConvertScreen;
