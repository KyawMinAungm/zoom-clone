import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <section className='flex-center w-full h-screen '>
        
        <SignIn />
    </section>
  )
}

export default SignInPage