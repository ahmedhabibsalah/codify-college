import React from 'react'
import { FirstColumn, Heading, InfoRow, SecondColumn, Subtitle, TextWrapper } from './Styles'

const Projects = () => {
  return (
<InfoRow >
    <FirstColumn >
         <TextWrapper>
            <Heading>Turn an idea into a product in 2 weeks</Heading>
            <Subtitle>Projects Stage is the ultimate experience of the course: produce, cast, design, code and deploy a full project in teams during the two final weeks you going to work on 2 final project.</Subtitle>
        </TextWrapper>
    </FirstColumn>
    <SecondColumn>
         <TextWrapper>
            <Subtitle>• Build a creative prototype with Figma to validate the UX</Subtitle>
            <Subtitle>• Code the Project from scratch: from the back end to the user interface</Subtitle>
            <Subtitle>• Deploy your application on a production environment </Subtitle>
            <Subtitle>• Represent your Project during the Demo Day!</Subtitle>
        </TextWrapper>
    </SecondColumn>
</InfoRow>  )
}

export default Projects