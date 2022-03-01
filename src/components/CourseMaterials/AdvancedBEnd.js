import React from 'react'
import { FirstColumn, Heading, InfoRow, SecondColumn, Subtitle, TextWrapper } from './Styles'

const AdvancedBEnd = () => {
  return (
    <InfoRow >
    <FirstColumn >
         <TextWrapper>
            <Heading>Express</Heading>
            <Subtitle>Introduction ExpressJS, Routes with Express, Static server with ExpressJS, next() & Multer middleware, Templates Engines, Data Structures & Algorithms. Advanced NodeJS & ExpressJS, Nodemailer, express validator, Bcrypt and JSON Web Tokens (JWT).</Subtitle>
        </TextWrapper>
    </FirstColumn>
    <SecondColumn>
         <TextWrapper>
            <Heading >Mongo DB</Heading>
            <Subtitle >Introduction to Database Management, MongoDB, Mongoose CURD operations, and Mongo Atlas.</Subtitle>
        </TextWrapper>
        <TextWrapper>
            <Heading>Production with Heroku</Heading>
            <Subtitle>Deploying applications on Heroku. introduction to Cloud Computing. How can you start?</Subtitle>
        </TextWrapper>
    </SecondColumn>
</InfoRow>
  )
}

export default AdvancedBEnd