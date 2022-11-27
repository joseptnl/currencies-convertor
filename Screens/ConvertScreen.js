import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/Octicons";

// compnents
import CurrencySelector from "../Components/CurrencySelector";

//styles
import styles from "../style.js";

import { currenciesData } from "../currenciesData";

ConvertScreen = ({ navigation }) => {
  const currencies = currenciesData;
  const [firstCurrency, setFirstCurrency] = React.useState(currencies[0]);
  const [secondCurrency, setSecondCurrency] = React.useState(currencies[1]);
  const [output, setOutput] = React.useState(
    firstCurrency.rates[secondCurrency.id - 1] * 1
  );

  const passValue = newVal => {
    setOutput((firstCurrency.rates * newVal) / secondCurrency.rates);
  };
  const passFirstCurrency = newCurrency => {
    setFirstCurrency(newCurrency);
  };
  const passSecondCurrency = newCurrency => {
    setSecondCurrency(newCurrency);
  };

  React.useEffect(() => {
    console.log(JSON.stringify(output));
  });
  return (
    <View style={styles.container}>
      <CurrencySelector
        currencies={currencies}
        initialCurrency={firstCurrency}
        initialValue={"1"}
        editing={true}
        passCurrency={passFirstCurrency}
        passValue={passValue}
      />

      <CurrencySelector
        currencies={currencies}
        initialCurrency={secondCurrency}
        editing={false}
        passCurrency={passSecondCurrency}
        output={output}
      />

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
