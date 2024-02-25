import { Axios } from "axios";
import { useState } from "react";

const useDeleteData = () => {
  const [response, setResponse] = useState();

  const handleDeleteData = async (data) => {
    try {
      const res = await Axios.delete(
        `${import.meta.env.VITE_APIURL}${data.id}`
      );
      setResponse(res);
    } catch (error) {
        if(error) {
            console.error(error)
        }
    }
  };
  return { response, handleDeleteData };
};

export default useDeleteData;
