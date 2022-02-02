import React, { useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Box, Center } from 'native-base'
import FilterSelector from '../components/forms/FilterSelector'
import CardsContainer from '../components/containers/CardsContainer'

const MoviesScreen = () => {
  const isFocused = useIsFocused()
  const [selected, setSelected] = useState('popular')

  return (
    <>
      {isFocused && (
        <Box style={{ flex: 1 }}>
          <Center py={5}>
            <FilterSelector
              onChange={setSelected}
              selected={selected}
              type="movie"
            />
          </Center>
          <CardsContainer selected={selected} type="movie" />
        </Box>
      )}
    </>
  )
}

export default MoviesScreen
