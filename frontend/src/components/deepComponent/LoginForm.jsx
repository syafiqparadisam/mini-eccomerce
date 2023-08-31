import { Input, FormControl, Link, FormLabel } from "@chakra-ui/react";
import { useRef } from "react";
import useLoginSubmit from "../../hooks/useLoginSubmit";

const LoginForm = () => {
  const { response, handleLogin } = useLoginSubmit();
  const input = {
    usernameRef: useRef(),
    passwordRef: useRef(),
  };
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleLogin(input)
    }}>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" ref={input.usernameRef} />
        <FormLabel>Password :</FormLabel>
        <Input type="password" ref={input.passwordRef} />
        <Link color={"blue.400"}>Lupa Password ?</Link>
        <Input
          type="submit"
          bg={"blue.600"}
          mt={3}
          color={"white"}
          _hover={{ backgroundColor: "white", color: "black" }}
          border={"1px solid blue"}
        />
      </FormControl>
    </form>
  );
};

export default LoginForm;
