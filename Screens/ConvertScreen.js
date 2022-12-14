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
  const [firstCurrency, setFirstCurrency] = React.useState({});
  const [secondCurrency, setSecondCurrency] = React.useState({});
  const [rates, setRates] = React.useState([]);
  const [renderCond, setRenderCond] = React.useState(false);

  React.useEffect(() => {
    let counter = 1;
    setRates(
      Object.keys(currenciesRates1).map(key => {
        return {
          id: counter++,
          abbreviation: key,
          rates: currenciesRates1[key]
        };
      })
    );
  }, [currenciesRates1]);

  // Configurign ip request
  let request = new XMLHttpRequest();
  request.open("GET", "https://api.ipify.org?format=json", true); // set true for asynchronous
  request.setRequestHeader("Accept", "application/json");
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let response = JSON.parse(this.responseText);
      setCurrentIpAddress(response.ip);
    }
  };

  React.useEffect(() => {
    // Set currencies rates
    GetCurrenciesRates("EUR").then(data => {
      if (data.rates != undefined) setCurrenciesRates(data.rates);
    });
    // Get Local IP
    request.send();
  }, []);

  const [countryData, setCountryData] = React.useState({});

  React.useEffect(() => {
    if (currentIpAddress != undefined) {
      var myHeaders = new Headers();
      myHeaders.append("apikey", "KUBjNwG3YzUBaCdiWW4UviGQKHLJ8qo7");

      var requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders
      };
      fetch(
        `https://api.apilayer.com/ip_to_location/${currentIpAddress}`,
        requestOptions
      )
        .then(response => response.json())

        .then(response => {
          //setCountryData(response);
          let fcurrency = rates.find(
            currency =>
              currency.abbreviation == response["currencies"][0]["code"]
          );
          setFirstCurrency(fcurrency);
          let c2 = rates[0];
          setSecondCurrency(c2);
        });
    }

    // setFirstCurrency(() =>
    //   rates.find(
    //     currency =>
    //       currency.abbreviation === countryData["currencies"][0]["code"]
    //   )
    // );
    // setSecondCurrency(rates[0]);
    // console.log(firstCurrency);
    // console.log(secondCurrency);
  }, [currentIpAddress, rates]);

  //console.log(firstCurrency);

  const [output, setOutput] = React.useState("");

  //this needs to be changed
  const passValue = newVal => {
    setOutput((newVal * secondCurrency.rates) / firstCurrency.rates);
  };

  return (
    <View style={styles.container}>
      <CurrencySelector
        ratesData={rates}
        currentCurrency={firstCurrency}
        initialValue={"1"}
        editing={true}
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
