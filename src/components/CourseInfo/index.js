import React from 'react'
import { Button, TopLine } from '../../globleStyles'
import { ButtonWrap, FirstColumn, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, SecondColumn, Subtitle, TextWrapper} from './CourseElements'
import course from '../../images/mern.png'
import {Link as LinkScroll} from 'react-scroll';

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
                                   <LinkScroll  to='courseDetails' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                        <Button style={{fontSize:"1.5rem"}}>
                                            Learn More
                                        </Button>
                                   </LinkScroll>
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
            </InfoContainer> 
            
        </>
  )
}

export default CourseInfo