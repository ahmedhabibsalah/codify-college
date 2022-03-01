import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { Button, ServicesCard, ServicesContainer, ServicesHeading, ServicesIcon, ServicesParagraph, ServicesSecondHeader, ServicesWrapper, TextWrapper } from '../../globleStyles'
import { ButtonWrap } from '../Hero/HeroElements'
import MobileDev from '../MobileDevelopment'
import Shopify from '../ShopifyDevelopment'
import WebSev from '../WebDevelopment'

import services from './Data'

const SoftwareServices = () => {
    const [selected, setSelected] = useState(null);

  return (
    <ServicesContainer  style={{background:'transparent'}}>
        <TextWrapper>
            <ServicesHeading> What we Offer ?</ServicesHeading>
        </TextWrapper> 
            <ServicesWrapper >
                {services.map(({id, h1, img, alt, p}) => (
                  <ServicesCard key={id} >
                    <ServicesIcon src={img} alt={alt} />
                    <ServicesSecondHeader style={{fontSize:"1.25rem"}}>{h1}</ServicesSecondHeader>
                    <ServicesParagraph>{p}</ServicesParagraph>
                     <Button onClick={() => setSelected(id) } > Learn More </Button>
                  </ServicesCard>        
                ))}
                 
                  
        </ServicesWrapper>
        { ( selected == 0 ) ? <WebSev /> : null }
        { ( selected == 1 ) ? <MobileDev /> : null }
        { ( selected == 2 ) ? <Shopify /> : null }
        <ButtonWrap style={{marginBottom:'70px'}}>
            <Button> Book An Appointment</Button>
        </ButtonWrap>
          
    </ServicesContainer>
  )
}

export default SoftwareServices