import React, { useEffect, useState } from 'react'
import { Box } from 'native-base'
import CardsList from '../lists/CardsList'
import { getPopularMovies } from '../../services/moviesApi'

const movies = [
  {
    id: 1,
    title: 'Movie Title',
    popularity: 2200.687,
    releaseDate: '2020-01-02',
    posterPath: 'https://picsum.photos/500/500'
  },
  {
    id: 2,
    title: 'Movie Title 2',
    popularity: 2200.687,
    releaseDate: '2020-01-03',
    posterPath: 'https://picsum.photos/500/500'
  },
  {
    id: 3,
    title: 'Movie Title 3',
    popularity: 2200.687,
    releaseDate: '2020-01-10',
    posterPath: 'https://picsum.photos/500/500'
  },
  {
    id: 4,
    title: 'Movie Title 4',
    popularity: 2200.687,
    releaseDate: '2020-01-02',
    posterPath: 'https://picsum.photos/500/500'
  },
  {
    id: 5,
    title: 'Movie Title 5',
    popularity: 2200.687,
    releaseDate: '2020-01-02',
    posterPath: 'https://picsum.photos/500/500'
  },
  {
    id: 6,
    title: 'Movie Title 6',
    popularity: 2200.687,
    releaseDate: '2020-01-02',
    posterPath: 'https://picsum.photos/500/500'
  },
  {
    id: 7,
    title: 'Movie Title 7',
    popularity: 2200.687,
    releaseDate: '2020-01-02',
    posterPath: 'https://picsum.photos/500/500'
  }
]

const CardsContainer = ({ selected }) => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await getPopularMovies()
    setData(response.results)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Box>
      <CardsList data={data} />
    </Box>
  )
}

export default CardsContainer
