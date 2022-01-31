import { Box, Image, ScrollView, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { IMAGE_BASE_URL } from '../config/apiConfig'
import { getMovie } from '../services/moviesApi'

const ShowDetails = ({ route }) => {
  const [details, setDetails] = useState({})
  const { id, type } = route.params

  const callApi = async () => {
    const response = await getMovie(type, id)
    setDetails(response)
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <ScrollView>
      {details?.id && (
        <Box mx={10}>
          <Text alignSelf="center" py={10} fontSize="xl" bold>
            {type === 'movie' ? details.title : details.name}
          </Text>
          <Image
            alignSelf="center"
            source={{ uri: `${IMAGE_BASE_URL}${details.poster_path}` }}
            alt="movie"
            size="2xl"
          />
          <Text py={7}>
            {details.overview ? details.overview : 'No overview available'}
          </Text>
          <Text mb={10} fontSize="xs">
            Popularity: {details.popularity} | Release Date:{' '}
            {type === 'movie' ? details.release_date : details.first_air_date}
          </Text>
        </Box>
      )}
    </ScrollView>
  )
}

export default ShowDetails
