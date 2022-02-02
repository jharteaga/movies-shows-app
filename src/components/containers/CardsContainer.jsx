import React, { useEffect, useState } from 'react'
import { Box, Center, Text } from 'native-base'
import CardsList from '../lists/CardsList'
import Loading from '../layout/Loading'
import { getMovies, searchMovies } from '../../services/moviesApi'
import CardContainer from './CardContainer'

const CardsContainer = ({ type, selected, query = '' }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async (type) => {
    if (type !== 'search') {
      const response = await getMovies(type, selected)
      setData(response.results)
    } else {
      const response = await searchMovies(selected, query)
      setData(response.results)
    }
  }

  const renderCardContainer = (item) => (
    <CardContainer key={item.id} movie={item} type={type} />
  )

  useEffect(() => {
    setLoading(true)
    getData(type).then(() => setLoading(false))
  }, [selected, query])

  return (
    <Box style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : data.length ? (
        <CardsList data={data} render={renderCardContainer} />
      ) : (
        <Center mt={10}>
          <Text fontSize={20} bold>
            No Results
          </Text>
        </Center>
      )}
    </Box>
  )
}

export default CardsContainer
