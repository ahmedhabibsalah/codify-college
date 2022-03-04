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
grid-template-areas: 'col2 col1';
@media screen and (max-width: 768px) {
    grid-template-areas:'col2' 'col1';
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
line-height: 2.1;
color: #000;
`

export const ServicesContainer = styled.div`
/* height: 1000px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #ffffff;

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

export const ServicesIcon = styled.img `
height: 350px;
width: 350px;
margin-bottom: 80px;
`

