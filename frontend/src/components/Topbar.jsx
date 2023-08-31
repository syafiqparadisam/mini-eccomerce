import { Flex, Button} from '@chakra-ui/react'
// import React from 'react'

const Topbar = () => {
  return (
    <Flex bg={'blue'} justifyContent={'flex-end'} alignItems={'center'} p={4}>
        <Button color={'green'} mr={4} _hover={{background: 'lightGreen', color: 'white'}} border={'2px solid white'} borderRadius={'8px'}>
            Log In
        </Button>
        <Button bg={'lightGreen'} color={'white'} _hover={{background: 'white', color: 'lightGreen'}} border={'2px solid white'} borderRadius={'8px'}>
            Sign Up
        </Button>
    </Flex>
  )
}

export default Topbar