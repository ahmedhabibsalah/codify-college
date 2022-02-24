import React from 'react'
import { Button } from '../../globleStyles'
import { ButtonWrap, ButtonWrapper, FirstColumn, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, SecondColumn, Subtitle, TextWrapper, Title, TopLine } from './CourseElements'
import course from '../../images/mern.png'

const CourseInfo = ({lightBg, id, topLine, lightText, darkText, headLine, descriptionLineOne, alt, imgStart,  }) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id} >
               <InfoWrapper>
                   <InfoRow imgStart={imgStart}>
                       <FirstColumn imgStart={imgStart}>
                           <TextWrapper>
                               <TopLine>{topLine}</TopLine>
                               <Heading lightText={lightText}>{headLine}</Heading>
                               <Subtitle darkText={darkText}>{descriptionLineOne} </Subtitle>
                               <ButtonWrap  >
                             <Button style={{fontSize:"1.5rem"}}>
                                 Learn More
                             </Button>
                          </ButtonWrap> 
                           </TextWrapper>
                       </FirstColumn>
                       <SecondColumn>
                           <ImgWrap>
                              <Img src={course} alt={alt} />
                           </ImgWrap>
                   </SecondColumn>
                   </InfoRow>     
                </InfoWrapper>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                    <path fill="#ff5773" fill-opacity="0.5" d="M0,224L1440,0L1440,320L0,320Z"></path>
                </svg>  */}
            </InfoContainer> 
            
        </>
  )
}

export default CourseInfo