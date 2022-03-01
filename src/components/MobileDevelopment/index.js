import React from 'react'
import { ServicesCard, ServicesContainer, ServicesIcon, ServicesParagraph, ServicesSecondHeader, ServicesWrapper,} from '../../globleStyles'
import mobileData from './Data'

const MobileDev = () => {
  return (
    <ServicesContainer  id="services">
            <ServicesWrapper >
                {mobileData.map(({id, h1, img, alt, p}) => (
                  <ServicesCard key={id}>
                    <ServicesIcon src={img} />
                    <ServicesSecondHeader style={{fontSize:"1.25rem"}}>{h1}</ServicesSecondHeader>
                    <ServicesParagraph>{p}</ServicesParagraph>
                  </ServicesCard>        
                ))}
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default MobileDev