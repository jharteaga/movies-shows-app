import { Box, Text } from 'native-base'
import React from 'react'
import MovieContainer from '../components/containers/MovieContainer'

const movie = {
  title: 'Movie Title',
  popularity: 2200.687,
  releaseDate: '2020-01-02',
  posterPath: 'https://picsum.photos/500/500'
}

const MoviesScreen = () => {
  return (
    <Box>
      <Text>Movies Screen</Text>
      <MovieContainer movie={movie} />
    </Box>
  )
}

export default MoviesScreen
