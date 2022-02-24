import React from 'react'
import { Button } from '../../globleStyles'
import { Bio, ButtonWrap, Container, HeroLink, Main, Section, SmallTitle, TextWrapper, Title } from './HeroElements'

const Hero = () => {
  return (
    <>
    <Main>
        <Container>
            <Section>
                <TextWrapper>
                   <SmallTitle>Changing lives, businesses through talent transformation in digital technologies.</SmallTitle>
                    <Title>learn to code, With a New Digital Life</Title>
                    <Bio>Start your new Work with our weekly remotely Tech programs in full-stack developer and build web and mobile apps powered by JavaScript Start your new Work with our weekly remotely</Bio> 
                </TextWrapper>
                <ButtonWrap>
                    {/* <HeroLink> */}
                       <Button>Get in Touch</Button> 
                    {/* </HeroLink>                   */}
                </ButtonWrap>
                
            </Section>
        </Container>
    </Main>
    </>
  )
}

export default Hero