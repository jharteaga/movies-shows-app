import React from 'react'
import { Box, HStack, StatusBar, Text } from 'native-base'
import { colors } from '../../config/colors'

const Header = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.DARK_BLUE} barStyle="light-content" />
      <Box safeAreaTop backgroundColor={colors.DARK_BLUE}>
        <HStack
          bg={colors.DARK_BLUE}
          px={1}
          py={3}
          alignItems="center"
          justifyContent="center"
        >
          <Text color={colors.WHITE} fontSize={20} fontWeight="bold">
            Movies App
          </Text>
        </HStack>
      </Box>
    </>
  )
}

export default Header
