import React, { useState } from 'react'
import { Box, Center } from 'native-base'
import FilterSelector from '../components/forms/FilterSelector'
import CardsContainer from '../components/containers/CardsContainer'

const TvShowsScreen = () => {
  const [selected, setSelected] = useState('popular')

  return (
    <>
      <Box style={{ flex: 1 }}>
        <Center py={5}>
          <FilterSelector
            onChange={setSelected}
            selected={selected}
            type="tv"
          />
        </Center>
        <CardsContainer selected={selected} type="tv" />
      </Box>
    </>
  )
}

export default TvShowsScreen
