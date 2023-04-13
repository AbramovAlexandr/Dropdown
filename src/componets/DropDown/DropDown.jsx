import React, { useContext, useState } from 'react'
import './DropDown.css'
import { DropList } from '../DropList/DropList'
import { Context } from '../../Utils/context/context'
import { Modal } from '../../Modal/Modal'

export const DropDown = () => {
    const {countiesSelected} = useContext(Context)
    const {removeCountry} = useContext(Context)

    console.log('country', countiesSelected)

    const {toggleShow, isDrop} = useContext(Context)
  return (
    <div className='WrapperList'>
      <p>Язык</p>
      <div className='list'>
          <div className='item-list'>
              {countiesSelected.map((country, key) => <div className='countries' key={key}>
                <p>
                  <img src={country.image}/>
                  {country.value}
                  <button onClick={() => removeCountry(country.id)}>{`[x]`}</button>
                </p>
              </div> )}
          </div>
          {isDrop ? <button onClick={toggleShow} className='btnShow'>↑</button> : <button onClick={toggleShow} className='btnShow'>↓</button>}
      </div>
      <Modal isDrop={isDrop}/>
    </div>
    
  )
}
