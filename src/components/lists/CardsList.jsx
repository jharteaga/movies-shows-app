import React from 'react'
import { FlatList } from 'native-base'

const CardsList = ({ data, render }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => render(item)}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 10 }}
    />
  )
}

export default CardsList
