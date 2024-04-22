import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <section className='flex-center w-full h-screen'>
        <SignUp/>
    </section>
  )
}

export default SignUpPage