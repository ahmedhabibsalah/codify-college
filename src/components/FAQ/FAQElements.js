import styled from 'styled-components';

export const Section = styled.section `
padding:3rem 9%;
background: #ffffff;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    margin-top: 75px;
}
`

export const Content = styled.div `
padding-top: 6.5rem;
  max-width:70rem;
  margin:0 auto;
  text-align:center;
`
export const Heading = styled.h3 `
  font-size: 2.5rem;
  color:#2b2d42;
  text-transform: uppercase;
`