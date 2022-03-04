import styled from 'styled-components';

export const Container = styled.div `
min-height: 750px;
bottom: 0;
left: 0;
top: 0;
z-index: 0;
overflow: hidden;
`
export const FormWrap = styled.div `
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-self:center;
@media screen and (max-width: 400px) {
    height: 80%
}
`

export const Heading = styled.h1`
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  color: #2b2d42;
  text-transform: uppercase;
  letter-spacing: 6px;
`

export const SecondHeading = styled.p`
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 16px ;
  color: #ff5773;
  text-transform: uppercase;
  letter-spacing: 6px;
`
export const Form = styled.div `
max-width: 72rem;
margin-left: 40px;
margin-right: 40px;
padding-left: 2rem;
padding-right: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-self:center;

@media screen and (max-width: 480px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left:60px;
}
`
export const FormGroup = styled.div`
margin-top: 2rem;
overflow: hidden;

`

export const FormContent = styled.div`
	display: grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    align-self:center;

    @media screen and (max-width: 960px) {
    grid-template-columns: 1fr ;
}
`
export const FirstSide = styled.div`
	padding: 1.5rem;
    /* margin-left: 8.5rem; */
    margin-bottom:2rem;
    border-radius: 0.125rem;
    background:#ffffff;
    align-self:center;

`

export const Header = styled.h1 `
	font-size: 2.25rem;
line-height: 2.5rem;
color: #2b2d42;

`
export const SubTitle = styled.p`
font-size: 1rem; 
line-height: 1.5rem;
color: #2b2d42;

`

export const InfoWrap = styled.div`
display:flex;
margin-top: 1.5rem;
margin-bottom: 2.5rem;
color: #2b2d42;
align-self:center;
white-space:nowrap;
`

export const Info = styled.div`
	margin-left: 1rem;
    font-size: 1rem;
line-height: 1.5rem;
color: #2b2d42;
width: 10rem;
`

export const ContactForm = styled.form`
padding: 1.5rem; 
display:flex;
flex-direction: column;
justify-content: center;
align-self:center;
/* margin-left: 8.5rem; */
`
export const ContactFormContact = styled.div`
display:flex;
flex-direction: column;
padding-bottom:20px;
`

export const Label = styled.label`
display: none;
`

export const Input = styled.input`
width:25rem;
padding: 0.75rem; 
border-radius: 0.5rem;
background:#ffffff;
font-size: 1rem;
line-height: 1.5rem;
&:focus{
outline: 2px solid transparent;
outline-offset: 2px;
}
`
export const TextArea = styled.textarea`
width:25rem;
padding: 0.75rem; 
border-radius: 0.5rem;
background:#ffffff;
font-size: 1rem;
line-height: 1.5rem;
&:focus{
outline: 2px solid transparent;
outline-offset: 2px;
}
`
