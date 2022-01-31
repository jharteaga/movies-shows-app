import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import CardsList from '../lists/CardsList'
import { getMovies } from '../../services/moviesApi'
import Loading from '../layout/Loading'

const CardsContainer = ({ selected }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const response = await getMovies(selected)
    setData(response.results)
  }

  useEffect(() => {
    setLoading(true)
    getData().then(() => setLoading(false))
  }, [selected])

  return <Box>{loading ? <Loading /> : <CardsList data={data} />}</Box>
}

export default CardsContainer
