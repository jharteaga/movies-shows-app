import React from 'react'
import { Box, HStack, Image, Text, VStack, Button } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { IMAGE_BASE_URL } from '../../config/apiConfig'

const CardContainer = ({ movie }) => {
  const navigation = useNavigation()

  return (
    <Box width="60%" py="2">
      <HStack space="3" mx="4" justifyContent="space-between">
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
          alt="movie"
          size="110px"
        />
        <VStack w="100%">
          <Text fontSize="md" bold>
            {movie.title}
          </Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>Release Date: {movie.release_date}</Text>
          <Button
            size="lg"
            onPress={() =>
              navigation.navigate('ShowDetails', {
                id: movie.id,
                label: movie.title
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
