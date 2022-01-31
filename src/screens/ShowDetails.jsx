import { Box, Center, Image, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { IMAGE_BASE_URL } from '../config/apiConfig'
import { getMovie } from '../services/moviesApi'

const ShowDetails = ({ route }) => {
  const [details, setDetails] = useState({})
  const { id } = route.params

  const callApi = async () => {
    const response = await getMovie(id)
    setDetails(response)
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <Box>
      {details?.id && (
        <Center>
          <Text py={10} mx={8} fontSize="xl" bold>
            {details.title}
          </Text>
          <Image
            source={{ uri: `${IMAGE_BASE_URL}${details.poster_path}` }}
            alt="movie"
            size="2xl"
          />
          <Text py={7} mx={8}>
            {details.overview}
          </Text>
          <Text ml={-8} fontSize="xs">
            Popularity: {details.popularity} | Release Date:{' '}
            {details.release_date}
          </Text>
        </Center>
      )}
    </Box>
  )
}

export default ShowDetails
