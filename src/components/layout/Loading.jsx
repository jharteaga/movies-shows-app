import React from 'react'
import { Text, HStack, Spinner } from 'native-base'

const Loading = () => {
  return (
    <HStack space={3} py={3} justifyContent="center">
      <Spinner color="black" accessibilityLabel="Loading results" />
      <Text color="black" fontSize="lg" bold>
        Loading results
      </Text>
    </HStack>
  )
}

export default Loading
