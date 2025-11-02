import React from 'react'
import ButtonList from './Button/ButtonList'
import VideoContainer from './VideoContainer'
const MainContainer = () => {
  return (
    <div className='col-span-11'>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
