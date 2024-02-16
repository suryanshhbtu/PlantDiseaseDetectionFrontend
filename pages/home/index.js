
import MainNavigation from '@/components/MainNavigation'
import React from 'react'
import CustomWebcam from '@/components/CustomWebcam'
import HomePageCard from '@/components/HomePageCard';

export default function index() {
  return (
    <div>
        <MainNavigation/>
        <HomePageCard>
        <CustomWebcam/>
        </HomePageCard>
    </div>
  )
}
