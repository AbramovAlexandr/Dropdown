import React, { useContext, useEffect } from 'react'
import './DropList.css'
import { Checkbox } from '../Checkbox/Checkbox'
import { Input } from '../Input/Input'
import { Context } from '../../Utils/context/context'
import { countryMock } from '../../constant'

export const DropList = () => {
  const {counties, 
    handleSelect, 
    countiesSelected, 
    searchValue, 
    setSearchValue, 
    filterSearchCountry, 
    setCountries} = useContext(Context)

  useEffect(()=>{
      const filteredCountry = filterSearchCountry({countryMock, searchValue})
      setCountries(filteredCountry)
  }, [searchValue])

  console.log('input', searchValue)
  console.log(counties)

  return (
    <div className='droplist'>
      <div className='search'>
        <Input searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <ul className='items'>
        {counties.map((country, key) => {
          const isSelected = countiesSelected.find(findCountry => findCountry.id === country.id);
          return (
            <div className='itemList' key={key}>
              <img className='imageCountry' src={country.image}/>
              <li  onClick={(e) =>{
            handleSelect(country);
            e.stopPropagation();
          }}
          >
            {country.value}
          </li>
          <Checkbox isSelected={isSelected} handleSelect={handleSelect} value={country}/>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
