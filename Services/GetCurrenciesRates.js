import { API_KEY } from "@env";

GetCurrenciesRates = baseCurrency => {
  console.log(API_KEY);
  return fetch(
    "https://api.apilayer.com/fixer/latest?base=" + baseCurrency + "",
    {
      method: "GET",
      redirect: "follow",
      headers: {
        apikey: API_KEY
      }
    }
  ).then(response => response.json());
};

export default GetCurrenciesRates;
