import React from 'react'
import Button from './Button'
const ButtonList = () => {
  return (
    <div className='ButtonList flex py-3 '>
      <Button name = 'All'/>
      <Button name = 'Music'/>
      <Button name = 'Gaming'/>

    </div>
  )
}

export default ButtonList
