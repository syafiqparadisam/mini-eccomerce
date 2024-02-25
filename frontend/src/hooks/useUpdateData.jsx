import { Axios } from "axios";
import { useState } from "react";

const useUpdateData = () => {
  const [response, setResponse] = useState();

  const handleUpdateData = async (input, data) => {
    try {
      const res = await Axios.put(`${import.meta.env.VITE_APIURL}${data.id}`, {
        nama_aktivitas: input.nama_aktivitas,
        waktu_deadline: input.waktu_deadline,
        berhasil: "",
        dikerjakan: input.dikerjakan,
      });
      setResponse(res)
    } catch (err) {
      if (err) {
        console.error(err);
      }
    }
  };

  return {response, handleUpdateData}
};

export default useUpdateData;
