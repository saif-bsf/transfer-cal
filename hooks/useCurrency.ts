import axios from "axios";
import { useEffect, useState } from "react";

const useCurrency = () => {
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5500/mock/data.json")
      .then((resp) => {
        console.log(resp.data);
        setCurrencyList(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return { currencyList };
};

export default useCurrency;
