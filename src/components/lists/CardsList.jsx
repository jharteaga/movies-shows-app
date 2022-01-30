import React from 'react'
import { FlatList } from 'native-base'
import CardContainer from '../containers/CardContainer'

const CardsList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <CardContainer key={item.id} movie={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default CardsList
