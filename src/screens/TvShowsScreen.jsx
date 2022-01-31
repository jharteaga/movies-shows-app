import React, { useState } from 'react'
import { Box } from 'native-base'
import FilterSelector from '../components/forms/FilterSelector'
import CardsContainer from '../components/containers/CardsContainer'

const TvShowsScreen = () => {
  const [selected, setSelected] = useState('popular')

  return (
    <>
      <Box style={{ flex: 0.9 }}>
        <FilterSelector onChange={setSelected} selected={selected} type="tv" />
        <CardsContainer selected={selected} type="tv" />
      </Box>
    </>
  )
}

export default TvShowsScreen
