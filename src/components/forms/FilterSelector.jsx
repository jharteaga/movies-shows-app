import React from 'react'
import { Center, CheckIcon, Select } from 'native-base'

const FilterSelector = ({ onChange, selected }) => {
  return (
    <Center py={5}>
      <Select
        selectedValue={selected}
        width="40%"
        fontSize={16}
        minWidth="50%"
        _selectedItem={{
          backgroundColor: '#23776d',
          _text: { color: '#fff' },
          endIcon: <CheckIcon size="6" color="#fff" />
        }}
        mt={1}
        onValueChange={(itemSelected) => onChange(itemSelected)}
      >
        <Select.Item label="now_playing" value="now_playing" />
        <Select.Item label="popular" value="popular" />
        <Select.Item label="top_rated" value="top_rated" />
        <Select.Item label="upcoming" value="upcoming" />
      </Select>
    </Center>
  )
}

export default FilterSelector
