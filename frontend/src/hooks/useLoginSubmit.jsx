import { useState } from "react";
import { Axios } from "axios";

const useLoginSubmit = () => {
  const [response, setResponse] = useState();
  const handleLogin = async (input) => {
    const res = await Axios.post(`${import.meta.env.VITE_APIURL}/login`, {
      username: input.usernameRef.current.value,
      password: input.passwordRef.current.value,
    });
    setResponse(res);
  };
  return { response, handleLogin };
};

export default useLoginSubmit;
