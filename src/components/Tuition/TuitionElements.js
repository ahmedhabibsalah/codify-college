import styled from 'styled-components';

export const InfoContainer = styled.div `
color: #fff;
@media screen and (max-width: 768px) {
    padding: 108px 0;
}
`
export const InfoWrapper = styled.div`
display:grid;
z-index: 1;
width : 100%;
max-width: 1100px;
margin-top: 60px;
margin-right : auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`
export const InfoRow = styled.div `
display: grid;
grid-auto-columns:minmax(auto, 1fr);
align-items: center;
grid-template-areas: 'col1 col2';
@media screen and (max-width: 768px) {
    grid-template-areas:'col1' 'col2';
    margin-bottom: 120px;
}
`
export const FirstColumn = styled.div `
margin-bottom: 55px;
padding: 0 15px;
grid-area: col1;
`
export const SecondColumn = styled.div `
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;

`
export const TextWrapper = styled.div `
max-width: 540;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p `
color: #ff5773;
font-size: 14px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4x;
text-transform: uppercase;
margin-bottom: 16px;
`
export const Heading = styled.h1 `
margin-bottom: 24px;
font-size: 38px;
line-height: 1.1;
font-weight: 600;
color: '#2b2d42';
@media screen and (max-width: 480px) {
    font-size: 22px
}
`
export const Subtitle =styled.p `
max-width:440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 1.2;
color: #000;
`
export const ImgWrap = styled.div `
max-width: 555px;
height: 100%;
`
export const Img = styled.img `
width: 100%;
height: 450px;
margin:-100px 0 10px 0;
padding-right: 0;
border-radius:2rem;
@media screen and (max-width: 768px) {
width: 80%;
height: 350px;
}
`

export const ServicesContainer = styled.div`
/* height: 1000px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #ffffff;
@media screen and (max-width: 768px) {
margin-top:160px
}
/* @media screen and (max-width: 480px) {
    height: 1600px;
} */
`

export const ServicesWrapper = styled.div `
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
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

export const ServicesCard = styled.div `
/* background: #fff; */
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height : 840px;
width:400px;
padding : 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img `
height: 100px;
width: 100px;
margin-bottom: 10px;
`

export const ServicesHeading = styled.h1 `
font-size : 2.5rem;
color: #2b2d42;
margin-bottom: 64px;
@media screen and (max-width: 480px){
    font-size: 2rem;
}
`
export const ServicesSecondHeader = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
    color:'#2b2d42'!important;
`

export const ServicesParagraph = styled.p `
    font-size: 1rem;
    text-align: center;
`