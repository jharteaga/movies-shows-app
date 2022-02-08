import React, { useEffect, useState } from 'react'
import { Box, Center, Text } from 'native-base'
import CardsList from '../lists/CardsList'
import Loading from '../layout/Loading'
import { getMedias, searchMedia } from '../../services/mediaApi'
import CardContainer from './CardContainer'
import PageControl from '../layout/PageControl'

const CardsContainer = ({ type, selected, query = '' }) => {
  const [data, setData] = useState([])
  const [range, setRange] = useState({ min: 0, max: 10 })
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const getData = async (type) => {
    if (type !== 'search') {
      const response = await getMedias(type, selected)
      getPageResults(response.results)
    } else {
      const response = await searchMedia(selected, query)
      getPageResults(response)
    }
  }

  const getPageResults = (results) => {
    const pageResults = results.filter(
      (item, index) => index >= range.min && index < range.max
    )

    setData(pageResults)
  }

  //Render props technique
  const renderCardContainer = (item) => (
    <CardContainer key={item.id} movie={item} type={type} />
  )

  useEffect(() => {
    setLoading(true)
    getData(type).then(() => setLoading(false))
  }, [selected, query, range])

  return (
    <Box style={{ flex: 1 }}>
      {loading ? (
        <Loading />
      ) : data.length ? (
        <>
          <PageControl
            onChangeRange={setRange}
            onChangePage={setPage}
            page={page}
          />
          <CardsList data={data} render={renderCardContainer} />
        </>
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
