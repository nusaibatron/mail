import { useState, useEffect } from "react";
import paginate from "./utils";
//import Data from "./data"
const url = "https://nusaibatron.github.io/mailapi2/data.json";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { loading, data };
};
