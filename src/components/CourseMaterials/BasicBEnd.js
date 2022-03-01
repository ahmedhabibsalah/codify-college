import React from 'react'
import { FirstColumn, Heading, InfoRow, SecondColumn, Subtitle, TextWrapper } from './Styles'

const BasicBEnd = () => {
  return (
    <InfoRow >
    <FirstColumn >
         <TextWrapper>
            <Heading>Communicating with server</Heading>
            <Subtitle>How JavaScript code in the browser can fetch and handle data stored in a remote backend server.</Subtitle>
        </TextWrapper>
    </FirstColumn>
    <SecondColumn>
         <TextWrapper>
            <Heading >Node JS</Heading>
            <Subtitle >Introduction Nodejs, Node File System (FS), Node Package Manager (NPM), Asynchronous Programming, Network requests using Fetch/Axios API.</Subtitle>
        </TextWrapper>
    </SecondColumn>
</InfoRow>
  )
}

export default BasicBEnd