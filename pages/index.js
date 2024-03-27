
import MainNavigation from '@/components/MainNavigation'
import React, { useState } from 'react'
import CustomWebcam from '@/components/CustomWebcam'
import HomePageCard from '@/components/HomePageCard';

export default function index() {

  const [display, setDisplay] = useState(true);

  const displayHandler = () =>{
    setDisplay((display)=>!display);
  }
  return (
    <div>
        <MainNavigation/>
        {display && <HomePageCard/>}
        <CustomWebcam displayHandler = {displayHandler}/>
    </div>
  )
}
