import React from 'react'
import { FirstColumn, Heading, InfoRow, SecondColumn, Subtitle, TextWrapper } from './Styles'

const MobileDev = () => {
  return (
    <InfoRow >
    <FirstColumn >
         <TextWrapper>
            <Heading>Introduction to React Native</Heading>
            <Subtitle>During this part, we will learn how to build an actual React Native application from bottom up. We will learn concepts such what are React Native's core components, how to create beautiful user interfaces, how to communicate with a server and how to test a React Native application.</Subtitle>
        </TextWrapper>
    </FirstColumn>
    <SecondColumn>
         <TextWrapper>
            <Heading >Communicating with server</Heading>
            <Subtitle >In this section, we will learn how to communicate with a server using HTTP requests, how to use Apollo Client in a React Native application, and how to store data in the user's device.</Subtitle>
        </TextWrapper>
        <TextWrapper>
            <Heading>React Native basics</Heading>
            <Subtitle>In this section, we will learn how to build user interfaces with React Native's core components, how to add style properties to these core components, how to transition between views, and how to manage form's state efficiently.</Subtitle>
        </TextWrapper>
    </SecondColumn>
</InfoRow>
  )
}

export default MobileDev