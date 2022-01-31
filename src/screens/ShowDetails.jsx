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
    <>
      {details?.id && (
        <Box mx={10}>
          <Text alignSelf="center" py={10} fontSize="xl" bold>
            {details.title}
          </Text>
          <Image
            alignSelf="center"
            source={{ uri: `${IMAGE_BASE_URL}${details.poster_path}` }}
            alt="movie"
            size="2xl"
          />
          <Text py={7}>{details.overview}</Text>
          <Text fontSize="xs">
            Popularity: {details.popularity} | Release Date:{' '}
            {details.release_date}
          </Text>
        </Box>
      )}
    </>
  )
}

export default ShowDetails
