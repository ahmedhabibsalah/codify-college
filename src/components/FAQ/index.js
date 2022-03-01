import React from 'react'
import { Content, Heading, Section } from './FAQElements'
import Faq from 'react-faq-component';
import data from './Data';

const FAQ = () => {
  return (
    <>
    <Section >
    <Content>
        <Heading>
            Frequenly asked questions
        </Heading>
    </Content >
    <Faq data={data} />    
    </Section>
    </>
  )
}

export default FAQ