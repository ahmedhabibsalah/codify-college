import React from 'react'
import { FirstColumn, Heading, InfoRow, SecondColumn, Subtitle, TextWrapper } from './Styles'

const BasicFEnd = () => {
  return (
    <InfoRow >
               <FirstColumn >
                    <TextWrapper>
                       <Heading>Internet theory</Heading>
                       <Subtitle>At begning you will learn Web Basics, How the Internet Works. HTTP Request and Response Cycle, Client and Server Architecture and Terminologies</Subtitle>
                   </TextWrapper>
                   <TextWrapper>
                       <Heading>Advanced Style Technology</Heading>
                       <Subtitle>Build fast, responsive sites with Bootstrap4, Learn how to use Bootstrap, and build websites in couple of hours,Advanced Css3 using flexbox and Grid System technology, animation and transition. Sass extension, Sass module, and variables, write optmized and reusable style using Sass.</Subtitle>
                   </TextWrapper>
               </FirstColumn>
               <SecondColumn>
                    <TextWrapper>
                       <Heading >JavaScript</Heading>
                       <Subtitle >Create responsive web pages for modern browsers using HTML, CSS, and JavaScript. JavaScript, ECMAScript 6, DOM Manipulation, Regular Expressions, Object Oriented Programming, Data Structures & Algorithms.</Subtitle>
                   </TextWrapper>
                   <TextWrapper>
                       <Heading >Building Modren Website</Heading>
                       <Subtitle >Build a richly interactive, a modern front end application using advanced Css3,Bootstrap4 and HTML5. Collaborate as a team using Git and GitHub, widely accepted collaboration practices, and Agile development workflows.</Subtitle>
                   </TextWrapper>
               </SecondColumn>
           </InfoRow>  
  )
}

export default BasicFEnd