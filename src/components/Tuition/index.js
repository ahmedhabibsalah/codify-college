import React from 'react'
import { FirstColumn, Heading, InfoContainer, InfoRow, InfoWrapper, SecondColumn, ServicesCard, ServicesContainer, ServicesHeading, ServicesIcon, ServicesSecondHeader, ServicesWrapper, Subtitle, TextWrapper, TopLine } from './TuitionElements'
import logo from '../../images/codify-logo.png'
import { Button } from '../../globleStyles'
import { ButtonWrap } from '../Hero/HeroElements'
import Reviews from '../Reviews'
import Footer from '../Footer'

const Tuition = () => {
  return (
    <InfoContainer  >
           <TopLine style={{textAlign:'center'}}>We conduct discount programs from time to time, so the price may be lower.</TopLine>
           <Heading style={{textAlign:'center', color:'#2b2d42'}}>Tuition</Heading>
               <InfoWrapper > 
                   <InfoRow >
                       <FirstColumn >
                           <TextWrapper>
                               <Heading style={{ color:'#ff5773'}}>Course Fees</Heading>
                               <Subtitle >2 000€ / 3-5 months</Subtitle>
                               <Subtitle >3 000€ / 4-6 months </Subtitle>
                               <Subtitle >optional weekly extensions after that</Subtitle>                              
                           </TextWrapper>
                           <TextWrapper>
                               <Heading style={{ color:'#ff5773'}}>Fully flexible self-paced online learning</Heading>
                               <Subtitle >Interest-free payment option of 5-6 months Alternatively, you may sign up for up to 36 months with Klarna, which includes complete access to the materials for 6 months and 9-15 weeks of mentor assistance, which includes access to the support platform, 1:1 sessions, and our Slack chat group.</Subtitle>
                               <Subtitle >If you require additional time and mentor help to complete the bootcamp, you may extend it on a weekly basis for 99€ each week, allowing you to study at your own speed while still receiving all of the support and direction we give.</Subtitle>
                               <Subtitle >As a result, you may finish the bootcamp according to your schedule and learning pace – from a full-time intense 3-6 months to a longer period, just as we do with our in-person group on campus</Subtitle>                              
                           </TextWrapper>
                       </FirstColumn>
                       <SecondColumn>
                            <ServicesContainer > 
                                    <ServicesWrapper >
                                        <ServicesCard >
                                            <ServicesIcon src={logo} />
                                        <ServicesHeading> Full Stack Web and Mobile Development</ServicesHeading>
                                        <Heading style={{ color:'#2b2d42'}}>6690EGP</Heading>
                                        <TopLine >Per month</TopLine>                                                                        
                                            <ServicesSecondHeader style={{ color:'#2b2d42', paddingTop:'25px', opacity:'0.8'}}>* If you prefer to study full-time and are well-prepared, you may complete the course in 4 months. If you take it at a slower pace, you should be able to finish it in around 5 months. 5 or 6 months is more reasonable for students who are combining the bootcamp with a part-time or full-time work.</ServicesSecondHeader>
                                                <ButtonWrap style={{ paddingTop:'25px'}}>
                                                    <Button>Select</Button>
                                                </ButtonWrap>                                 
                                        </ServicesCard>                                    
                                    </ServicesWrapper>                                     
                            </ServicesContainer>
                        </SecondColumn>
                   </InfoRow>
                   {/* <Reviews /> */}
                </InfoWrapper>
            </InfoContainer>
  )
}

export default Tuition