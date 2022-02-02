import React, { useState } from 'react'
import { LogBox } from 'react-native'
import { Box, Button, HStack, Icon, Input, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import FilterSelector from './FilterSelector'

LogBox.ignoreLogs(['NativeBase:'])

const SearchForm = ({ onSubmit }) => {
  const [selected, setSelected] = useState('multi')
  const [query, setQuery] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = () => {
    if (query.trim()) {
      setErrorMsg('')
      onSubmit({ query, selected })
    } else {
      setErrorMsg('Movie/TV show name is required')
    }
  }

  return (
    <>
      <Text mb={2}>
        Search Movie/TV Show<Text style={{ color: 'red' }}>*</Text>
      </Text>
      <Input
        size="md"
        w="90%"
        backgroundColor="#e4e4e7"
        InputLeftElement={
          <Icon
            as={<Ionicons name="search" />}
            size={5}
            ml="2"
            color="#a9a9a9"
          />
        }
        placeholder="i.e. James Bond, CSI"
        placeholderTextColor="#a9a9a9"
        onChangeText={(text) => setQuery(text)}
        isRequired
        borderWidth={1}
        borderColor={errorMsg ? 'red.600' : '#e4e4e7'}
      />

      <Text mt={3}>
        Choose Search Type<Text style={{ color: 'red' }}>*</Text>
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
      <Text color={'red.600'} mt={2}>
        {errorMsg}
      </Text>
    </>
  )
}

export default SearchForm
