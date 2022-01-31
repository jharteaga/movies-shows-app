import React from 'react'
import { FlatList } from 'native-base'
import CardContainer from '../containers/CardContainer'

const CardsList = ({ data, render }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => render(item)}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      mb={5}
    />
  )
}

export default CardsList
