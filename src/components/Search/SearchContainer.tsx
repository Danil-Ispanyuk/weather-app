import React, { SetStateAction, useEffect, useState } from 'react'
import { debounce } from '../../utils/debounce';
import { Search } from './Search'

export const SearchContainer = () => {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    if(searchValue){
      console.log('searchValue', searchValue)
    }
  }, [searchValue])
  const handleChange = debounce((value: string) => setSearchValue(value), 500);
  return (
    <Search onChange={(e) => handleChange((e.target as HTMLInputElement).value)} />
  )
}
