import React, { useState } from 'react'
import { Box, Center, Text } from 'native-base'
import SearchForm from '../components/forms/SearchForm'
import CardsContainer from '../components/containers/CardsContainer'

const SearchScreen = () => {
  const [formData, setFormData] = useState({})

  return (
    <>
      <Box py={5} ml={8}>
        <SearchForm onSubmit={setFormData} />
        {!formData?.query && (
          <Center mt={20}>
            <Text fontSize={25} bold ml={-5}>
              Please initiate a search
            </Text>
          </Center>
        )}
      </Box>
      {formData?.query && (
        <CardsContainer
          selected={formData.selected}
          type="search"
          query={formData.query}
        />
      )}
    </>
  )
}

export default SearchScreen
