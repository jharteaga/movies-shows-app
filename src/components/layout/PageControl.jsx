import React from 'react'
import { Flex, HStack, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { colors } from '../../config/colors'

const PageControl = ({ onChangeRange, page, totalPages = 2 }) => {
  const handleChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onChangeRange({
        min: (newPage - 1) * 10,
        max: newPage * 10,
        page: newPage
      })
    }
  }

  return (
    <Flex direction="row" justifyContent="space-between" mx={4} pb={3}>
      <TouchableOpacity onPress={() => handleChange(page - 1)}>
        <HStack
          borderWidth={1}
          borderColor={colors.BLUE_GRAY}
          borderRadius={12}
          pt={1.5}
          pr={2.5}
        >
          <Icon
            as={Ionicons}
            size="9"
            color={colors.BLUE_GRAY}
            name="chevron-back-outline"
          />
          <Text fontSize={15} mt={0.5} bold>
            Prev
          </Text>
        </HStack>
      </TouchableOpacity>
      <Text alignSelf="center">
        Page {page}/{totalPages}
      </Text>
      <TouchableOpacity onPress={() => handleChange(page + 1)}>
        <HStack
          borderWidth={1}
          borderColor={colors.BLUE_GRAY}
          borderRadius={12}
          pt={1.5}
          pl={2.5}
        >
          <Text fontSize={15} mt={0.5} bold>
            Next
          </Text>
          <Icon
            as={Ionicons}
            size="9"
            color={colors.BLUE_GRAY}
            name="chevron-forward-outline"
          />
        </HStack>
      </TouchableOpacity>
    </Flex>
  )
}

export default PageControl
