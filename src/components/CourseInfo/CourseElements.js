import styled from 'styled-components'

export const InfoContainer = styled.div `
color: #fff;
@media screen and (max-width: 768px) {
    padding: 108px 0;
}
`
export const InfoWrapper = styled.div`
display:grid;
z-index: 1;
height: 860px;
width : 100%;
max-width: 1100px;
margin-right : auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`
export const InfoRow = styled.div `
display: grid;
grid-auto-columns:minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};
@media screen and (max-width: 768px) {
    grid-template-areas: ${(imgStart)=>(imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )}
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
color: ${({lightText}) =>(lightText ? '#2b2d42' : '#ffffff')};
@media screen and (max-width: 480px) {
    font-size: 22px
}
`
export const Subtitle =styled.p `
max-width:440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 1.2;
color: ${({darkText}) => (darkText ? '#000' : '#fff')};
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

export const ButtonWrap = styled.div`
    width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-flow: wrap;
	gap: 0.5em;
`