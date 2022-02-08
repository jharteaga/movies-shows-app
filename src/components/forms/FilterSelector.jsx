import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { CheckIcon, Icon, Select } from 'native-base'
import { colors } from '../../config/colors'

const options = {
  movie: ['now_playing', 'popular', 'top_rated', 'upcoming'],
  tv: ['airing_today', 'on_the_air', 'popular', 'top_rated'],
  search: ['movie', 'multi', 'tv']
}

const FilterSelector = ({ onChange, selected, type, isError }) => {
  return (
    <Select
      borderColor={isError ? colors.TOMATO : colors.LIGHT_GRAY}
      selectedValue={selected}
      fontSize={16}
      minWidth="130"
      _selectedItem={{
        backgroundColor: colors.GREEN,
        _text: { color: colors.WHITE },
        endIcon: <CheckIcon size="5" color={colors.WHITE} />
      }}
      onValueChange={(itemSelected) => onChange(itemSelected)}
      dropdownIcon={
        <Icon as={Ionicons} size="5" color={colors.GRAY} name="chevron-down" />
      }
    >
      {options[type].map((item, index) => (
        <Select.Item key={`${item}-${index}`} label={item} value={item} />
      ))}
    </Select>
  )
}

export default FilterSelector
