import axios from "axios";
import { useEffect, useState } from "react";
import { currencyListData } from "../mock/data.json";

const useCurrency = () => {
  const [currencyList, setCurrencyList] = useState(currencyListData);

  // TODO: Once we get Live API
  // useEffect(() => {
  //   axios
  //     .get("https://mocki.io/v1/0e4563ba-11f2-41f9-a758-13316801f20e")
  //     .then((resp) => {
  //       console.log(resp.data);
  //       setCurrencyList(resp.data.currencyList);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return { currencyList };
};

export default useCurrency;
