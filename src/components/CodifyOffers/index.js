import React from 'react'
import { ServicesHeading, ServicesIcon, ServicesParagraph, ServicesSecondHeader } from '../../globleStyles'
import services from './Data'
import { ServicesCard, ServicesContainer, ServicesWrapper } from './OffersElements'
const Offers = () => {
  return (
    <ServicesContainer> 
        <ServicesHeading> What we Offer ?</ServicesHeading>
            <ServicesWrapper >
                {services.map(({id, h1, img, alt, p}) => (
                  <ServicesCard key={id}>
                    <ServicesIcon src={img} alt={alt} />
                    <ServicesSecondHeader>{h1}</ServicesSecondHeader>
                    <ServicesParagraph>{p}</ServicesParagraph>
                  </ServicesCard>        
                ))}
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Offers