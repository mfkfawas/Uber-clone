import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'

const search = () => {
  const [pickUp, setPickUp] = useState('')
  const [dropOff, setdropOff] = useState('')

  return (
    <Wrapper>
      <BackButtonContainer>
        <Link href='/'>
          <BackButtonImg src='https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png' />
        </Link>
      </BackButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png' />
          <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png' />
          <Square src='https://img.icons8.com/windows/50/000000/square-full.png' />
        </FromToIcons>

        <InputBoxes>
          <Input
            placeholder='Enter pick-up location'
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
          />
          <Input
            placeholder='Where to?'
            value={dropOff}
            onChange={(e) => setdropOff(e.target.value)}
          />
        </InputBoxes>

        <PlusIcon src='https://img.icons8.com/ios/50/000000/plus-math.png' />
      </InputContainer>

      <SavedPlaces>
        <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star--v1.png' />
        Saved Places.
      </SavedPlaces>

      <ConfirmButtonContainer>
        <Link
          href={{
            pathname: '/confirm',
            query: {
              pickUp: pickUp,
              dropOff: dropOff,
            },
          }}
        >
          <ConfirmButton>Confirm Location</ConfirmButton>
        </Link>
      </ConfirmButtonContainer>
    </Wrapper>
  )
}

export default search

const Wrapper = tw.div`
h-screen bg-gray-200
`

const BackButtonContainer = tw.div`
bg-white p-2
`

const BackButtonImg = tw.img`
h-12 cursor-pointer
`

const InputContainer = tw.div`
bg-white flex items-center mb-2
`

const FromToIcons = tw.div`
flex flex-col w-10 bg-white  items-center 
`

const Circle = tw.img`
h-2.5
`

const Line = tw.img`
h-10
`

const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1 px-2
`

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 border-none outline-none
`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full mx-2
`
const SavedPlaces = tw.div`
bg-white flex items-center px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 rounded-full p-2 mr-2
`

const ConfirmButtonContainer = tw.div`
m-3 
`

const ConfirmButton = tw.button`
bg-black text-white w-full p-3 text-xl cursor-pointer
`
