import React from 'react'
import { Center, CheckIcon, Select } from 'native-base'

const options = {
  movie: ['now_playing', 'popular', 'top_rated', 'upcoming'],
  tv: ['airing_today', 'on_the_air', 'popular', 'top_rated']
}

const FilterSelector = ({ onChange, selected, type }) => {
  return (
    <Center py={5}>
      <Select
        selectedValue={selected}
        width="50%"
        fontSize={16}
        _selectedItem={{
          backgroundColor: '#23776d',
          _text: { color: '#fff' },
          endIcon: <CheckIcon size="6" color="#fff" />
        }}
        onValueChange={(itemSelected) => onChange(itemSelected)}
      >
        {options[type].map((item) => (
          <Select.Item key={item} label={item} value={item} />
        ))}
      </Select>
    </Center>
  )
}

export default FilterSelector
