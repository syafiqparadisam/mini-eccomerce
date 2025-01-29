import {
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
  Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import useRegisterSubmit from "../../hooks/useRegisterSubmit";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const { response, handleRegister } = useRegisterSubmit();
  
  function d(data) {
    console.log(data);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(d);
        console.log(response);
      }}
    >
    <p>{errors}</p>
      <FormControl>
        <FormLabel>Username :</FormLabel>
        <Input type="text" name="username" {...register("username")} />
        <FormLabel>Email :</FormLabel>
        <Input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          {...register("email")}
        />
        <FormLabel>Password :</FormLabel>
        <Input type="password" name="password" {...register("password")} />
        <FormLabel>Confirm Password :</FormLabel>
        <Input
          type="password"
          name="confirmPassword"
          {...register("confirmPassword")}
        />
        <Text my={3} textAlign={"center"}>
          Atau ?
        </Text>
        <Flex justifyContent={"center"}>
          <Button
            bg={"white"}
            border={"1px solid blue"}
            borderRadius={"10px"}
            textAlign={"center"}
            pb={1}
            width={"100%"}
            fontWeight={800}
            fontSize={"15px"}
          >
            <FcGoogle
              style={{
                display: "inline-block",
                marginTop: "2px",
                marginRight: "5px",
              }}
              size={"25px"}
            />
            Sign Up With Google
          </Button>
        </Flex>
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

export default Register;
