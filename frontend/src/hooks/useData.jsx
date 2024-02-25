import { useState } from "react";
import { Axios } from "axios";

export const useData = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const result = await Axios.get(`${import.meta.env.VITE_APIURL}`);
      setData(result);
    } catch (error) {
      if (error) {
        console.error(error)
      }
    }
  };

  return { data, getData };
};
