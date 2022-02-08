import React from 'react'
import { Text, HStack, Spinner } from 'native-base'
import { colors } from '../../config/colors'

const Loading = () => {
  return (
    <HStack space={3} py={3} justifyContent="center">
      <Spinner color={colors.BLACK} accessibilityLabel="Loading results" />
      <Text color={colors.BLACK} fontSize="lg" bold>
        Loading results
      </Text>
    </HStack>
  )
}

export default Loading
