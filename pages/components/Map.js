import React, { useRef, useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken =
  'pk.eyJ1IjoibWZrZmF3YXMiLCJhIjoiY2twdzlwZHZpMXE1MDJ3cWtzcGVkZXltbSJ9.gfELcH3Fm51OJmRXEarAjA'

const Map = ({ pickUpCoordinates, dropOffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', //map is the id of the container where we want to display this map.
      style:
        'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if (pickUpCoordinates) {
      addToMap(map, pickUpCoordinates)
    }

    if (dropOffCoordinates) {
      addToMap(map, dropOffCoordinates)
    }

    if (pickUpCoordinates && dropOffCoordinates) {
      //for focusing to the both corr coordinates.
      map.fitBounds(
        [pickUpCoordinates, dropOffCoordinates],
        { padding: 60 }
      )
    }
  }, [pickUpCoordinates, dropOffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map)
  }

  return (
    <Wrapper id='map'>
      <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
  h-1/2
`

const BackButton = tw.img`

`
