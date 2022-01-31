import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import CardsList from '../lists/CardsList'
import { getMovies } from '../../services/moviesApi'

const CardsContainer = ({ selected }) => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await getMovies(selected)
    setData(response.results)
  }

  useEffect(() => {
    getData()
  }, [selected])

  return (
    <Box>
      <CardsList data={data} />
    </Box>
  )
}

export default CardsContainer
