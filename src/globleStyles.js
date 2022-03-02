import styled from 'styled-components';
export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 1.25rem;
	color: #ff5773;
	outline: none;
	border: 2px solid #ff5773;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #ff5773;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: #2b2d42;
	}
    
`;

export const TopLine = styled.p `
color: #ff5773;
font-size: 14px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4x;
text-transform: uppercase;
margin-bottom: 16px;
`
export const ServicesHeading = styled.h1 `
font-size : 2.5rem;
color: #2b2d42;
margin-bottom: 64px;
@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const ServicesIcon = styled.img `
height: 100px;
width: 100px;
margin-bottom: 10px;
`

export const ServicesSecondHeader = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
    color:#ff5773;
`

export const ServicesParagraph = styled.p `
    font-size: 1rem;
    text-align: center;
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
margin: 70px auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 46px;
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
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
height : 340px;
padding : 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const TextWrapper = styled.div `
line-height: 1.75em;
display: flex;
flex-direction: column;
justify-content: center;
margin:60px auto;

`

export const Container = styled.div`
min-height: 692px;
/* position:fixed; */
bottom:0;
left:0;
right:0;
margin-top:60px;
margin-bottom:60px;
z-index:0;
overflow:hidden;
/* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%,) */
`

export const FormWrap = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:400px) {
    height:80%
}
`

export const FormContent = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;

@media screen and (max-width:400px) {
    padding:10px;
}
` 

export const Form = styled.form`
background: #edf2f4;
max-width: 400px;
height: auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:80px 32px;
border-radius:4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
@media screen and (max-width:400px) {
    padding:32px 32px;
}

`
export const FormH1 = styled.h1`
margin-bottom:40px;
color:#2b2d42;
font-size:20px;
font-weight:400;
text-align:center;
`

export const FormLabel = styled.label `
margin-bottom:8px;
font-size:14px;
color:#ff5773;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border:none;
border-radius: 4px;
`

export const Text = styled.span`
text-align:center;
margin-top:24px;
color: #2b2d42;
font-size:14px;
`