import React from 'react'
import { FirstColumn, Heading,  InfoRow,  SecondColumn, Subtitle, TextWrapper } from './Styles'

const WebDev = () => {
  return (
     
            <InfoRow >
               <FirstColumn >
                    <TextWrapper>
                       <Heading>Developer Tools & workflow</Heading>
                       <Subtitle>Work with the right developer tools and workflow. </Subtitle>
                   </TextWrapper>
               </FirstColumn>
               <SecondColumn>
                    <TextWrapper>
                       <Heading >HTML5 Basics</Heading>
                       <Subtitle >Design your first web page from scratch. Learn the principles of web design and how to write HTML code. </Subtitle>
                   </TextWrapper>
               </SecondColumn>
           </InfoRow>     
      

  )
}

export default WebDev