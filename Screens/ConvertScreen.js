import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
//import Test from "../Components/Test";
// import Icon from "react-native-vector-icons/Octicons";

//import currenciesRates from "/home/code/Desktop/currencies-convertor/data.json";

// compnents
import CurrencySelector from "../Components/CurrencySelector";
import GetCurrenciesRates from "../Services/GetCurrenciesRates";

//styles
import styles from "../style.js";

ConvertScreen = ({ navigation, props }) => {
  const [currenciesRates1, setCurrenciesRates] = React.useState({});
  const [currentIpAddress, setCurrentIpAddress] = React.useState(undefined);

  // Configurign ip request
  let request = new XMLHttpRequest()
  request.open('GET', 'https://api.ipify.org?format=json', true) // set true for asynchronous
  request.setRequestHeader('Accept', 'application/json')
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText)
      setCurrentIpAddress(response.ip)
    }
  }

  React.useEffect(() => {
    // Get Local IP
    request.send()

    // Set currencies rates
    GetCurrenciesRates("EUR").then(data => {
      if (data.rates != undefined)
        setCurrenciesRates(data.rates);
    });
  }, []);

  React.useEffect(() => {
    if (currentIpAddress != undefined) {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "KUBjNwG3YzUBaCdiWW4UviGQKHLJ8qo7");

      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };
      fetch(`https://api.apilayer.com/ip_to_location/${currentIpAddress}`, requestOptions)
        .then(response => response.json())
        .then(response => console.log(response))
    }
  }, [currentIpAddress]);

  let counter = 1;
  let rates = Object.keys(currenciesRates1).map(key => {
    return {
      id: counter++,
      abbreviation: key,
      rates: currenciesRates1[key]
    };
  });

  /** this needs to be changed */
  const [firstCurrency, setFirstCurrency] = React.useState({
    id: 1,
    abbreviation: "EUR",
    name: "Euro",
    rates: 1
  });
  const [secondCurrency, setSecondCurrency] = React.useState({
    id: 1,
    abbreviation: "EUR",
    name: "Euro",
    rates: 1
  });

  if (firstCurrency === undefined) console.log("hello");
  const [output, setOutput] = React.useState(firstCurrency.rates);

  //this needs to be changed
  const passValue = newVal => {
    setOutput((newVal * secondCurrency.rates) / firstCurrency.rates);
  };

  return (
    <View style={styles.container}>
      {/**first currency */}
      <CurrencySelector
        ratesData={rates}
        currentCurrency={firstCurrency}
        initialValue={"1"}
        editing={true}
        //this is where the problem lays
        passCurrency={setFirstCurrency}
        passValue={passValue}
      />

      {/**second currency */}
      <CurrencySelector
        ratesData={rates}
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
        onPress={() => {
          navigation.navigate("Exchange Rates", { rates });
        }}
      >
        <Text style={styles.btnText}> Click to See Exchange Rates </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConvertScreen;
