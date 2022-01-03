import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/')
      }
    })
  }, [])

  return (
    <Wrapper>
      <UberLogo src='https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg' />
      <Title>Log in to access your account.</Title>
      <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8  w-full self-center
`

const UberLogo = tw.img`
h-20 w-auto object-contain self-start`

const HeadImage = tw.img`
h-1/2 w-auto object-contain self-center`

const Title = tw.div`
text-5xl pt-4 text-gray-500
`
