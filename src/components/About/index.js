import React from 'react'
import { FirstColumn, Heading, InfoContainer, InfoRow, InfoWrapper, SecondColumn, ServicesContainer, ServicesIcon, ServicesWrapper, Subtitle, TextWrapper } from './AboutElements'
import logo from '../../images/codify-logo.png'

const About = () => {
  return (
    <InfoContainer  >
    <Heading style={{textAlign:'center', color:'#2b2d42'}}>About Codify College AB</Heading>
        <InfoWrapper > 
            <InfoRow>
                <FirstColumn >
                    <TextWrapper>
                        <Subtitle >
                          Professional Training & Coaching Company aiming to teach coding for better life,The training was developed by a group of Engineers at KTH and seniors of software engineers at Scania.
                          Teaches students to develop web applications from scratch. 
                          Our fast track program and world-class teachers give students all the skills and tools needed to kick-start their tech career, land a job as software developers or product managers, or launch their own startup.
                        </Subtitle>                         
                    </TextWrapper>
                </FirstColumn>
                <SecondColumn>
                     <ServicesContainer > 
                             <ServicesWrapper >
                                <ServicesIcon src={logo} />                                      
                             </ServicesWrapper>                                     
                     </ServicesContainer>
                 </SecondColumn>
            </InfoRow>
         </InfoWrapper>
     </InfoContainer>
  )
}

export default About