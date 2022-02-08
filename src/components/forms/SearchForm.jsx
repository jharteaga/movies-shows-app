import React, { useState } from 'react'
import { LogBox } from 'react-native'
import { Box, Button, HStack, Icon, Input, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import FilterSelector from './FilterSelector'
import { colors } from '../../config/colors'

LogBox.ignoreLogs(['NativeBase:'])

const SearchForm = ({ onSubmit, onReset }) => {
  const [selected, setSelected] = useState('multi')
  const [query, setQuery] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = () => {
    if (query.trim()) {
      setErrorMsg('')
      onReset((prev) => !prev)
      onSubmit({ query, selected })
    } else {
      setErrorMsg('Movie/TV show name is required')
    }
  }

  return (
    <>
      <Text mb={2}>
        Search Movie/TV Show<Text style={{ color: colors.RED }}>*</Text>
      </Text>
      <Input
        size="md"
        w="90%"
        backgroundColor={colors.LIGHT_GRAY}
        InputLeftElement={
          <Icon
            as={<Ionicons name="search" />}
            size={5}
            ml="2"
            color={colors.DARK_GRAY}
          />
        }
        placeholder="i.e. James Bond, CSI"
        placeholderTextColor={colors.DARK_GRAY}
        onChangeText={(text) => setQuery(text)}
        isRequired
        borderWidth={1}
        borderColor={errorMsg ? colors.TOMATO : colors.LIGHT_GRAY}
      />

      <Text mt={3}>
        Choose Search Type<Text style={{ color: colors.RED }}>*</Text>
      </Text>
      <HStack space={5} mt={1} mr={7}>
        <Box w="2/4">
          <FilterSelector
            type="search"
            selected={selected}
            onChange={setSelected}
            isError={errorMsg ? true : false}
          />
        </Box>
        <Box w="2/5">
          <Button
            leftIcon={<Icon as={Ionicons} name="search" size="sm" />}
            size="lg"
            mt={-1}
            onPress={handleSubmit}
          >
            Search
          </Button>
        </Box>
      </HStack>
      <Text color={colors.TOMATO} mt={2}>
        {errorMsg}
      </Text>
    </>
  )
}

export default SearchForm
