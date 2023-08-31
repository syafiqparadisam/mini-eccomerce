import { Flex, Heading, List, ListItem, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <VStack h={'100%'} bg={"blue"}>
      <Flex justifyContent={"center"} flexDir={'column'}>
        <Heading
          fontStyle={"italic"}
          color={"white"}
          m={8}
          fontWeight={700}
        >
          <span style={{ color: "yellow" }}>My</span> Activity
        </Heading>
        <List alignSelf={'center'} textAlign={'center'}>
          <ListItem color={'white'} p={8} _hover={{backgroundColor: 'black'}} fontWeight={'bold'} borderRadius={'5px'} >
            Do It Now
          </ListItem>
          <ListItem color={'white'} my={10} p={5} _hover={{backgroundColor: 'black'}} fontWeight={'bold'} borderRadius={'5px'}>
            Logs Todo
          </ListItem>
          <ListItem color={'white'} p={5}  _hover={{backgroundColor: 'black'}} fontWeight={'bold'} borderRadius={'5px'}>
            Details
          </ListItem>
        </List>
      </Flex>
    </VStack>
  );
};

export default Sidebar;
