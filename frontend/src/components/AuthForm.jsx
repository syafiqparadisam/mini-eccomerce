import {
  TabPanel,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Link,
} from "@chakra-ui/react";
import Register from "./deepComponent/Register";
import LoginForm from "./deepComponent/LoginForm";

const AuthForm = () => {
  return (
    <Flex
      border={"2px solid black"}
      borderRadius={"10px"}
      flexDir={"column"}
      p={4}
      width={"30%"}
    >
      <Tabs>
        <TabList>
          <Tab color={"blue.500"}>Register</Tab>
          <Link>
            <Tab color={"blue.500"}>Login</Tab>
          </Link>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Register />
          </TabPanel>
          <TabPanel>
            <LoginForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default AuthForm;
