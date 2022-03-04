import React from 'react'
import { Bio, ButtonWrap, Container, Main, Section, SmallTitle, TextWrapper, Title } from './CareersElements'
import { Button } from '../../globleStyles';

const Career = () => {


  return (
    <Main style={{marginBottom:"40px"}}>
        <Container>
            <Section>
                <TextWrapper>
                   <SmallTitle>Working with us </SmallTitle>
                    <Title>Apply For Internships</Title>
                    <Bio style={{textAlign: 'start'}}>
                        Do you already have a background in development? Are you just starting out as a developer but feel like you need more experience? As a developer just starting out you too are eligible to enroll in our Career Development plan. Submit your application below! 
                        We offer our graduate students Career development plans: a 3 months long internship working with real-life projects, frameworks, libraries and technologies that are in demand. Via our Personal Development Program we offer CV guidance, Networking Events, Technical Interviews/Mock Interviews, coaching and updating your GitHub and LinkedIn accounts.
                    </Bio> 
                </TextWrapper>
                <ButtonWrap>
                        <a target="_blank" href='https://ahmedhabibsalah.aidaform.com/expert-account-template-basic-job-application-form' rel="noreferrer" >
                            <Button>Apply</Button>
                        </a>
                </ButtonWrap>
            </Section>
        </Container>
    </Main>
  )
}

export default Career