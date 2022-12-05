import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
//import Test from "../Components/Test";
// import Icon from "react-native-vector-icons/Octicons";

// compnents
import CurrencySelector from "../Components/CurrencySelector";

//styles
import styles from "../style.js";

import { currenciesData } from "../currenciesData";

ConvertScreen = ({ navigation }) => {
  //currencies represents the data we are using
  // to be changed into an api later
  const currencies = currenciesData;

  //testing purposes: change me if needed
  const [firstCurrency, setFirstCurrency] = React.useState(currencies[1]);
  const [secondCurrency, setSecondCurrency] = React.useState(currencies[1]);
  const [output, setOutput] = React.useState(
    firstCurrency.rates[secondCurrency.id - 1] * 1
  );

  const passValue = newVal => {
    setOutput((firstCurrency.rates * newVal) / secondCurrency.rates);
  };
  console.log(output);

  return (
    <View style={styles.container}>
      {/**first currency */}
      <CurrencySelector
        currentCurrency={firstCurrency}
        initialValue={"1"}
        editing={true}
        //this is where the problem lays
        passCurrency={setFirstCurrency}
        passValue={passValue}
      />

      {/**second currency */}
      <CurrencySelector
        currentCurrency={secondCurrency}
        editing={false}
        output={output}
        //this is where the problem lays
        passCurrency={setSecondCurrency}
      />

      {/** navigate to exchange rates page */}
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
