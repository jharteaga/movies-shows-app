import React, { useState } from 'react'
import { Box } from 'native-base'
import FilterSelector from '../components/forms/FilterSelector'
import CardsContainer from '../components/containers/CardsContainer'

const MoviesScreen = () => {
  const [selected, setSelected] = useState('popular')

  return (
    <Box style={{ flex: 0.9 }}>
      <FilterSelector onChange={setSelected} selected={selected} />
      <CardsContainer selected={selected} />
    </Box>
  )
}

export default MoviesScreen
