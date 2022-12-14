import { API_KEY } from "@env";

GetCurrenciesRates = baseCurrency => {
  return fetch(
    "https://api.apilayer.com/fixer/latest?base=" + baseCurrency + "",
    {
      method: "GET",
      redirect: "follow",
      headers: {
        apikey: "plMPsEaZoFt885eZD8tfPf9sh9lcryPY"
      }
    }
  ).then(response => response.json());
};

export default GetCurrenciesRates;
