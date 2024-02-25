import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Details = () => {
  return (
    <Flex justifyContent={'center'} flexDir={'column'} w={'100%'}>
        <Flex justifyContent={'center'} alignItems={'center'}>
            <Heading>Welcome Syafiq</Heading>
        </Flex>
        <Flex>
            <Text>To Create Todo</Text>
        </Flex>
    </Flex>
  )
}

export default Details