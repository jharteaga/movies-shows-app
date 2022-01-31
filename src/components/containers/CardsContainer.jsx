import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import CardsList from '../lists/CardsList'
import Loading from '../layout/Loading'
import { getMovies } from '../../services/moviesApi'

const CardsContainer = ({ type, selected }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const response = await getMovies(type, selected)
    setData(response.results)
  }

  useEffect(() => {
    setLoading(true)
    getData().then(() => setLoading(false))
  }, [selected])

  return <Box>{loading ? <Loading /> : <CardsList data={data} />}</Box>
}

export default CardsContainer
