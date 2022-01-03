import React, { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Map from './components/Map'
import RideSelector from './components/RideSelector'

const confirm = () => {
  const router = useRouter()
  const { pickUp, dropOff } = router.query

  const [pickUpCoordinates, setPickUpCoordinates] = useState([0, 0])
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0])

  const getPickUpCoordinates = (pickUp) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUp}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoibWZrZmF3YXMiLCJhIjoiY2twdzlwZHZpMXE1MDJ3cWtzcGVkZXltbSJ9.gfELcH3Fm51OJmRXEarAjA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => setPickUpCoordinates(data.features[0].center))
  }

  const getDropOffCoordinates = (dropOff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1IjoibWZrZmF3YXMiLCJhIjoiY2twdzlwZHZpMXE1MDJ3cWtzcGVkZXltbSJ9.gfELcH3Fm51OJmRXEarAjA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => setDropOffCoordinates(data.features[0].center))
  }

  useEffect(() => {
    getPickUpCoordinates(pickUp)
    getDropOffCoordinates(dropOff)
  }, [pickUp, dropOff])

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href='/search'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />

      <RideContainer>
        <RideSelector
          pickUpCoordinates={pickUpCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  )
}

export default confirm

const Wrapper = tw.div`
h-screen flex flex-col 
`

const RideContainer = tw.div`
flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white py-4 m-4 text-xl text-center
`

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
h-full object-contain
`
