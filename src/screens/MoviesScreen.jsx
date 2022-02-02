import React, { useState } from 'react'
import { Box, Center } from 'native-base'
import FilterSelector from '../components/forms/FilterSelector'
import CardsContainer from '../components/containers/CardsContainer'

const MoviesScreen = () => {
  const [selected, setSelected] = useState('popular')

  return (
    <>
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
    </>
  )
}

export default MoviesScreen
