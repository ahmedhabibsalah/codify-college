import React from 'react'
import { FirstColumn, Heading, InfoRow, SecondColumn, Subtitle, TextWrapper } from './Styles'

const AdvancedFEnd = () => {
  return (
    <InfoRow >
               <FirstColumn >
                    <TextWrapper>
                       <Heading>React JS</Heading>
                       <Subtitle>Optimize the functionality of apps using React Router. Learn up to date advanced React programming with React Hooks, Custom API, and NextJS.</Subtitle>
                   </TextWrapper>
                   <TextWrapper>
                       <Heading>Redux</Heading>
                       <Subtitle>Master an open-source JavaScript library for managing application state. Redux is most commonly used with libraries such as React or Angular for building user interfaces. Centralizing your application's state and logic enables powerful capabilities like undo/redo, state persistence, and much more.</Subtitle>
                   </TextWrapper>
               </FirstColumn>
               <SecondColumn>
                    <TextWrapper>
                       <Heading >Event-Driven APIs</Heading>
                       <Subtitle >Implementing asynchronous APIs to send multiple responses to a single request. API security that is categorized into authentication and authorization. Using event-driven APIs has become key to meet customer demand and provide a better user experience. Since there are several fundamental differences between REST and async APIs</Subtitle>
                   </TextWrapper>
                   <TextWrapper>
                       <Heading >Building Web products</Heading>
                       <Subtitle >Build a richly interactive, front end single page application using a modern framework library like React. Collaborate as a team using Git and GitHub, widely accepted collaboration practices, and Agile development workflows.</Subtitle>
                   </TextWrapper>
               </SecondColumn>
           </InfoRow>  
  )
}

export default AdvancedFEnd