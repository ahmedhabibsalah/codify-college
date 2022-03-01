import styled from 'styled-components'

export const InfoRow = styled.div `
display: grid;
grid-auto-columns:minmax(auto, 1fr);
align-items: center;
grid-template-areas: 'col1 col2';
@media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2'
}
`
export const FirstColumn = styled.div `
margin-bottom: 15px;
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
text-align:start;
`

export const Heading = styled.h1 `
margin-bottom: 24px;
font-size: 38px;
line-height: 1.1;
font-weight: 600;
color: #ff5773;
@media screen and (max-width: 480px) {
    font-size: 22px
}
`
export const Subtitle =styled.p `
max-width:440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 1.2;
color: '#000' ;
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
`