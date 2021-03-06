import React from 'react'
import { Box, HStack, Image, Text, VStack, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { IMAGE_BASE_URL } from '../../config/apiConfig'
const placeholder = require('../../../assets/no-image-thumb.jpeg')

const CardContainer = ({ movie, type }) => {
  const navigation = useNavigation()

  if (type === 'search') {
    type = movie?.title ? 'movie' : 'tv'
  }

  return (
    <Box width="60%" py="2">
      <HStack space="3" mx="4" justifyContent="space-between">
        <Image
          source={
            movie.poster_path
              ? { uri: `${IMAGE_BASE_URL}${movie.poster_path}` }
              : placeholder
          }
          alt={
            movie.title
              ? `${movie.title} poster image`
              : `${movie.name} poster image`
          }
          size="110px"
        />
        <VStack w="100%">
          <Text fontSize="md" bold>
            {type === 'movie' ? movie.title : movie.name}
          </Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>
            Release Date:{' '}
            {type === 'movie'
              ? movie.release_date || 'Not available'
              : movie.first_air_date || 'Not available'}
          </Text>
          <Button
            size="lg"
            onPress={() =>
              navigation.navigate('ShowDetails', {
                id: movie.id,
                label: type === 'movie' ? movie.title : movie.name,
                type
              })
            }
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  )
}

export default CardContainer
