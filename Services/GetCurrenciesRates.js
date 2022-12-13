import { API_KEY } from "@env";

GetCurrenciesRates = baseCurrency => {
  return fetch(
    "https://api.apilayer.com/fixer/latest?base=" + baseCurrency + "",
    {
      method: "GET",
      redirect: "follow",
      headers: {
        apikey: "WeKsp3DDZ9QSiWtXaH2Z95Jkq2Wa92iT"
      }
    }
  ).then(response => response.json());
};

export default GetCurrenciesRates;
