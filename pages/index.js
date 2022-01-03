import React, { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { onAuthStateChanged, signOut } from '@firebase/auth'
import { useRouter } from 'next/router'

import { auth, provider } from '../firebase'
import Map from './components/Map'

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])
  // const map = new mapboxgl.Map({
  //   container: 'YOUR_CONTAINER_ELEMENT_ID',
  //   style: 'mapbox://styles/mapbox/streets-v11'
  //   });

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src='https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg' />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImg
              //{user && user.photoUrl} - add to src
              src='https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg'
              onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImg src='https://i.ibb.co/cyvcpfF/uberx.png' />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImg src='https://i.ibb.co/n776JLm/bike.png' />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImg src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserver
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  h-screen flex flex-col 
`

const ActionItems = tw.div`
  bg-gray-100 flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`

const UberLogo = tw.img`
h-16
`

const Profile = tw.div`
flex items-center mr-4
`

const Name = tw.div`
mr-4 text-sm
`

const UserImg = tw.img`
w-12 h-12 rounded-full object-cover border border-gray-200 p-px cursor-pointer
`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex-1 bg-gray-200 m-4 h-32 flex flex-col items-center justify-center rounded-lg
transform hover:scale-105 transition text-xl
`

const ActionButtonImg = tw.img`
h-3/5
`

const InputButton = tw.div`
bg-gray-200 p-4 mt-4 mx-3 text-2xl flex items-center
`
