import styled from 'styled-components';

export const Container = styled.div`
min-height: 692px;
/* position:fixed; */
bottom:0;
left:0;
right:0;
margin-top:60px;
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