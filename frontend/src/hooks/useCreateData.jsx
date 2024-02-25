import { Axios } from "axios";
import { useState } from "react";

const useCreateData = () => {
  const [response, setResponse] = useState();

  async function handleCreateData(Input) {
    try {
      const response = await Axios.post(`${import.meta.env.VITE_APIURL}`, {
        nama_aktivitas: Input.nama_aktivitas,
        waktu_deadline: Input.waktu_deadline,
        berhasil: "BELUM DIKERJAKAN",
        dikerjakan: Input.dikerjakan,
      });
      setResponse(response);
    } catch (error) {
      if (error) {
        console.error(error)
      }
    }
  }

  return { response, handleCreateData };
};

export default useCreateData;
