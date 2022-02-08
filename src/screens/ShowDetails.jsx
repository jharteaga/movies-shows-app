import React, { useEffect, useState } from 'react'
import { Box, Image, ScrollView, Text } from 'native-base'
import { IMAGE_BASE_URL } from '../config/apiConfig'
import { getMedia } from '../services/mediaApi'
const placeholder = require('../../assets/no-image-thumb.jpeg')

const ShowDetails = ({ route }) => {
  const [details, setDetails] = useState({})
  const { id, type } = route.params

  const callApi = async () => {
    const response = await getMedia(type, id)
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
            source={
              details.poster_path
                ? { uri: `${IMAGE_BASE_URL}${details.poster_path}` }
                : placeholder
            }
            alt="movie"
            size="2xl"
          />
          <Text py={7}>
            {details.overview ? details.overview : 'No overview available'}
          </Text>
          <Text mb={10} fontSize="xs">
            Popularity: {details.popularity || 'Not available'} | Release Date:{' '}
            {type === 'movie'
              ? details.release_date || 'Not available'
              : details.first_air_date || 'Not available'}
          </Text>
        </Box>
      )}
    </ScrollView>
  )
}

export default ShowDetails
