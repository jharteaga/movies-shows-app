import React, { useState } from 'react'
import { Box, Center, Text } from 'native-base'
import SearchForm from '../components/forms/SearchForm'
import CardsContainer from '../components/containers/CardsContainer'

const SearchScreen = () => {
  const [formData, setFormData] = useState({})
  const [newSearch, setNewSearch] = useState(false)

  return (
    <>
      <Box py={5} ml={8}>
        <SearchForm onSubmit={setFormData} onReset={setNewSearch} />
        {!formData?.query && (
          <Center mt={20}>
            <Text fontSize={20} bold ml={-8}>
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
          onReset={newSearch}
        />
      )}
    </>
  )
}

export default SearchScreen
