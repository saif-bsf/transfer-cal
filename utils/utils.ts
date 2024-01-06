import { currencyListData } from "../mock/data.json";

export const transformCurrencyList = (
  currencyList: typeof currencyListData
) => {
  return currencyList
    .map((currency) => {
      return {
        label: `${currency.countryFlag} ${currency.currencyName} `,
        value: currency.currencyName,
      };
    })
    .filter((currency) => currency.value !== "AED");
};
