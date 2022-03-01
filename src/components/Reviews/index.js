import React from 'react'
import { ServicesHeading, ServicesIcon, ServicesParagraph, ServicesSecondHeader, TopLine } from '../../globleStyles'
import reviews from './Data'
import { ServicesCard, ServicesContainer, ServicesWrapper } from './ReviewsElements'

const Reviews = () => {
  return (
    <ServicesContainer  id="services"> 
        <TopLine>4.8/5 E-Learning Service</TopLine>
        <ServicesHeading> Reviews</ServicesHeading>
            <ServicesWrapper >
                {reviews.map(({id, logo, rate, value}) => (
                  <ServicesCard key={id}>
                    <ServicesIcon src={logo} alt='logo' />
                    <ServicesSecondHeader>{value}</ServicesSecondHeader>
                    <ServicesParagraph>{rate}</ServicesParagraph>
                  </ServicesCard>        
                ))}
        </ServicesWrapper>
    </ServicesContainer>
    
  )
}

export default Reviews