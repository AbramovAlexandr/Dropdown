import React from 'react'
import './Input.module.css'

export const Input = ({searchValue,setSearchValue}) => {
  return (
    <div className="group">
        <input placeholder="Search" type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="input"/>
    </div>
  )
}
