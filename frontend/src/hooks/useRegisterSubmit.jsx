import { Axios } from "axios";
import { useState } from "react";

const useRegisterSubmit = () => {
  const [response, setResponse] = useState();

  const handleRegister = (data) => {
    // const res = await Axios.post(`${import.meta.env.VITE_APIURL}/register`, {
    //     username: input.usernameRef.current.value,
    //     email: input.emailRef.current.value,
    //     password: input.passwordRef.current.value,
    //     confirmPassword: input.confirmPasswordRef.current.value,
    // })
    // setResponse(res)
    console.log({ data: data });
  };

  return { response, handleRegister };
};

export default useRegisterSubmit;
