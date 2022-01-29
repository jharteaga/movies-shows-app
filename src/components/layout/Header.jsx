import React from 'react'
import { Box, HStack, StatusBar, Text } from 'native-base'

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="#2c3e50">
        <HStack
          bg="#2c3e50"
          px={1}
          py={3}
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#fff" fontSize={20} fontWeight="bold">
            Movies App
          </Text>
        </HStack>
      </Box>
    </>
  )
}

export default Header
