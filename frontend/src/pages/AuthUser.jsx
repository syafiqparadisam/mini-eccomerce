import { Flex, Box, Heading } from "@chakra-ui/react";
import AuthForm from "../components/AuthForm";

const AuthUser = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={'100%'} h={'100vh'} flexDir={'column'}>
      <AuthForm/>
    </Box>
  );
};

export default AuthUser;
