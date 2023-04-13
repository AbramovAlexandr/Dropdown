import React, {useMemo, useEffect, useCallback, useContext} from 'react'
import { DropList } from '../componets/DropList/DropList'
import { createPortal } from 'react-dom'
import './Modal.css'

const modalRootElement = document.querySelector('#modal')

export const Modal = ({isDrop}) => {
  console.log(isDrop)
    const element = useMemo(() => document.createElement('div'), [])

    useEffect(()=>{
      modalRootElement.appendChild(element)

      return () =>{
        modalRootElement.removeChild(element)
      }
    }, [])
    if(!isDrop){
      return <></>
    }
  return createPortal(
  <div className='modal'>
    <DropList/>
  </div>
  , element)
}
