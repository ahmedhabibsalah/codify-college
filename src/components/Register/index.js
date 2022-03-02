import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form, FormContent, FormH1, FormInput, FormLabel, FormWrap, Text} from '../../globleStyles'

const SignUp = () => {
  return (
    <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form>
                        <FormH1>Create Your Account </FormH1>
                        <FormLabel htmlFor='for'>First Name</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Last Name</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required />
                        <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                        <FormInput type='password' required />
                        <Button type='submit' style={{width:"50%", textAlign:"center"}}>Sign Up</Button>
                        <Text>
                            Already have Account <Link to='/signIn' style={{color:"#ff5773", textDecoration:"none"}}>Sign In </Link>
                        </Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignUp