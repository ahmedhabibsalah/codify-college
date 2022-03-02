import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text } from '../../globleStyles'


const SignIn = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form>
                        <FormH1>Sign In to Your Account</FormH1>

                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <Button type='submit' style={{width:"50%", textAlign:"center"}}>Sign In</Button>
                        <Text>Forgot Your Password</Text>
                        <Text>
                            Don't have Account, Register <Link to='/signUp' style={{color:"#ff5773", textDecoration:"none"}}>Here</Link>
                        </Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn