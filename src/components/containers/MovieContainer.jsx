import React from 'react'
import { Box, HStack, Image, Text, VStack, Button } from 'native-base'

const MovieContainer = ({ movie }) => {
  return (
    <Box width="60%">
      <HStack space="3" mx="4" justifyContent="space-between">
        <Image source={{ uri: movie.posterPath }} alt="movie" size="110px" />
        <VStack w="100%">
          <Text fontSize="md" bold>
            {movie.title}
          </Text>
          <Text>Popularity: {movie.popularity}</Text>
          <Text>Release Date: {movie.releaseDate}</Text>
          <Button size="lg">More Details</Button>
        </VStack>
      </HStack>
    </Box>
  )
}

export default MovieContainer
