import React from 'react'
import Offers from '../components/CodifyOffers'
import CourseDetails from '../components/CourseDetails'
import CourseInfo from '../components/CourseInfo'
import { homeObjOne } from '../components/CourseInfo/Data'
import FAQ from '../components/FAQ'
import Hero from '../components/Hero'
import { Main } from '../components/Hero/HeroElements'
import Reviews from '../components/Reviews'
import Tuition from '../components/Tuition'

const Home = () => {
  return (
    <>
        <Hero />
        <CourseInfo  {...homeObjOne} />
        <Offers />
        <CourseDetails />
        <Tuition />
        <Reviews />
        <FAQ  />        
    </>
  )
}

export default Home