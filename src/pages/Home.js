import React from 'react'
import CourseInfo from '../components/CourseInfo'
import { homeObjOne } from '../components/CourseInfo/Data'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
        <Hero />
        <CourseInfo  {...homeObjOne} />
    </div>
  )
}

export default Home