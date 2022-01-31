import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import CardsList from '../lists/CardsList'
import Loading from '../layout/Loading'
import { getMovies } from '../../services/moviesApi'
import CardContainer from './CardContainer'

const CardsContainer = ({ type, selected }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const response = await getMovies(type, selected)
    setData(response.results)
  }

  const renderCardContainer = (item) => (
    <CardContainer key={item.id} movie={item} type={type} />
  )

  useEffect(() => {
    setLoading(true)
    getData().then(() => setLoading(false))
  }, [selected])

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <CardsList data={data} render={renderCardContainer} />
      )}
    </Box>
  )
}

export default CardsContainer
