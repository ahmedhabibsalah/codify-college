import React from 'react'
import { ServicesCard, ServicesContainer, ServicesIcon, ServicesParagraph, ServicesSecondHeader, ServicesWrapper,} from '../../globleStyles'
import shopifyData from './Data'

const Shopify = () => {
  return (
    <ServicesContainer  id="services">
            <ServicesWrapper >
                {shopifyData.map(({id, h1, img, p}) => (
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

export default Shopify