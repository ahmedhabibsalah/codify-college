import styled from 'styled-components';


export const Section = styled.section `
padding:3rem 9%;
background: #ffffff;
  min-height: 100vh;
  text-align: center;
  @media screen and (max-width: 768px) {
    margin-top: 75px;

}
`

export const Content = styled.div `
padding-top: 6.5rem;
  max-width:70rem;
  margin:0 auto;
`
export const Heading = styled.h3 `
  font-size: 2.5rem;
  color:#2b2d42;
  text-transform: uppercase;
`
export const Bio = styled.p `
 font-size: 1.3rem;
  color:#2b2d42;
  padding:1rem 0;
  
  `

export const TechnologiesWrapper = styled.div `
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr ;
}
@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding:0;
}
`
export const TechnologiesCard = styled.div `
background: transparent;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height : 340px;
height: 150px;
padding : 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
@media screen and (max-width: 768px) {
  height: 200px;

}

`
export const TechnologiesIcon = styled.img `
height: 60px;
width: 60px;
margin-bottom: 10px;

`

export const TechnologiesHeader = styled.h1 `
font-size : 2.5rem;
color: #000;
margin-bottom: 64px;
@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const TechnologiesSecondHeader = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
    color:#081C15;
    text-transform:uppercase;
`

export const Duration = styled.p`
font-size:1rem;
color: gray;
opacity: 0.5;
`