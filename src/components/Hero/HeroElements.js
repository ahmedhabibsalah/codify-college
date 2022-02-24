import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Main = styled.main `
position: relative;
/* background:#edf2f4; */
z-index:1;
`
export const Container = styled.div `
padding: 2em;
margin-left: auto;
margin-right: auto;
position: relative;
text-align:center;

@media screen and (max-width: 920px){
      font-size:0.5rem
  }
`

export const Section = styled.section `
border-radius: 0.5em;
box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
padding: 5em;
/* background:#ffffff; */

`

export const TextWrapper = styled.div `
font-size: 1.125em;
line-height: 1.75em;
display: flex;
flex-direction: column;
justify-content: center;
`

export const SmallTitle = styled.p`
font-size: .85em;
color: #ff5773;
`

export const Title = styled.h1`
font-size: 3.75em;
line-height: 1;
color:#2b2d42;
margin-bottom: 1em;
`

export const Bio = styled.p `
color: #2b2d42;
font-size: 1.125em;
line-height: 1.75em;
`
export const ButtonWrap = styled.div`
    width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5em;
`

export const HeroLink = styled(Link)`
/* color: #ff5773; */
display:flex;
font-size: 1.2em;
align-items:center;
text-decoration: none;
padding: 0 1em;
height: 100%;
cursor:pointer;
&:hover {
        color:	#2b2d42;
        transition : all 0.2s ease-in-out;
    }
`