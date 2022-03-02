import React, { useRef } from 'react'
import emailjs from "emailjs-com";
import { Info, FirstSide, Form, FormContent, FormGroup, Header, Heading, InfoWrap, SecondHeading,  SubTitle, ContactForm, ContactFormContact, Label, Input, TextArea, Container, FormWrap,} from './ContectElements'
import { Button } from '../../globleStyles';


const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_76gm7kx', 'template_v79s8y6', form.current, 'user_18Td7PjM7Vb2tN8DdpIun')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  return (
    <Container>
        <FormWrap>
        <Heading>Not sure where to begin?</Heading>
        <SecondHeading>Contact Us </SecondHeading>
            <Form>
                    <FormGroup>
                        <FormContent>
                            <FirstSide >
                                <Header >
                                    Get in touch
                                </Header>
                                <SubTitle>
                                    Fill in the form to start a conversation
                                </SubTitle>
                                <InfoWrap>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" style={{width: '2rem', height:'2rem', color:'#ff5773'}}>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <Info>
                                    Röntgenvgen 1,141 52, Huddinge, Stockholm, Sweden
                                    </Info>
                                </InfoWrap>
                                <InfoWrap>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" style={{width: '2rem', height:'2rem', color:'#ff5773'}}>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <Info class="ml-4 text-md tracking-wide font-semibold w-40">
                                    +46-72 33 38 723
                                    </Info>
                                </InfoWrap>
                                <InfoWrap>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" style={{width: '2rem', height:'2rem', color:'#ff5773'}}>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <Info >
                                    info@codifycollege.se
                                    </Info>
                                </InfoWrap>
                            </FirstSide>
                            <ContactForm ref={form}  onSubmit={sendEmail}>
                                <ContactFormContact>
                                    <Label for="name" >Full Name</Label>
                                    <Input type="text" name="name" placeholder="Full Name"/>
                                </ContactFormContact>
                                <ContactFormContact>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email"  placeholder="Email" />
                                </ContactFormContact>
                                <ContactFormContact>
                                    <Label for="subject">Subject</Label>
                                    <Input type="text" name="subject"  placeholder="Subject" />
                                </ContactFormContact>
                                <ContactFormContact>
                                    <Label>Your message</Label>
                                    <TextArea  name="message" id="" cols="20" rows="4"  placeholder="Your message" ></TextArea>
                                </ContactFormContact>
                                <Button type='submit' style={{width:'8rem'}}>Submit</Button>
                            </ContactForm>
                        </FormContent>
                    </FormGroup>
                </Form>
                </FormWrap>
    </Container>
  )
}

export default Contact