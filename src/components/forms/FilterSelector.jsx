import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Center, CheckIcon, Icon, Select } from 'native-base'

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
          endIcon: <CheckIcon size="5" color="#fff" />
        }}
        onValueChange={(itemSelected) => onChange(itemSelected)}
        dropdownIcon={
          <Icon as={Ionicons} size="5" color="gray.500" name="chevron-down" />
        }
      >
        {options[type].map((item, index) => (
          <Select.Item key={`${item}-${index}`} label={item} value={item} />
        ))}
      </Select>
    </Center>
  )
}

export default FilterSelector
