/* eslint-disable eqeqeq */
import React, { useState } from 'react'
import { Bio, Content, Duration, Heading,  Section, TechnologiesCard, TechnologiesIcon, TechnologiesSecondHeader, TechnologiesWrapper } from './CourseDetails'
import materials from './Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import WebDev from '../CourseMaterials/WebDev';
import BasicFEnd from '../CourseMaterials/BasicFEnd';
import AdvancedFEnd from '../CourseMaterials/AdvancedFEnd';
import BasicBEnd from '../CourseMaterials/BasicBEnd';
import AdvancedBEnd from '../CourseMaterials/AdvancedBEnd';
import MobileDev from '../CourseMaterials/MobileDev';
import Projects from '../CourseMaterials/Projects';
import { TopLine } from '../../globleStyles';

const CourseDetails = () => {
    const [selected, setSelected] = useState(false);
  return (
    <Section id='courseDetails'>
    <Content>
        <TopLine>Comprehensive Curriculum</TopLine>
        <Heading>
        Full Stack Developer Courses
        </Heading>
        <Bio> 
        Our Full Stack Developer Courses are made to give you an easy and fast path in web development. By the end these courses you will be able to build web applications from scratch.
        </Bio>
    </Content>
    <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            style={{padding:'30px'}}
    >
    <TechnologiesWrapper>
            { materials.map(({id, h1, img, alt, p}) => (   
                <SwiperSlide>                    
                <TechnologiesCard onClick={() => setSelected(id) }  key={id}>
                    <TechnologiesIcon src={img} alt={alt}/>
                    <TechnologiesSecondHeader>{h1}</TechnologiesSecondHeader>
                    <Duration>{p}</Duration>
                </TechnologiesCard>
                </SwiperSlide> 
                ))}
            </TechnologiesWrapper>
            </Swiper>
            { ( selected == 0 ) ? <WebDev /> : null }
            { ( selected == 1 ) ? <BasicFEnd /> : null }
            { ( selected == 2 ) ? <AdvancedFEnd /> : null }
            { ( selected == 3 ) ? <BasicBEnd /> : null }
            { ( selected == 4 ) ? <AdvancedBEnd /> : null }
            { ( selected == 5 ) ? <MobileDev /> : null }
            { ( selected == 6 ) ? <Projects /> : null }
    </Section>
  )
}

export default CourseDetails