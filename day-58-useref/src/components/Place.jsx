import React from 'react'
import PlaceImage from './PlaceImage'

const Place = ({ place }) => {
    return (
        <div>
            <PlaceImage place={place} />
            <p>
                <b>{place.name}</b>
                <b>{":" + place.description}</b>
            </p>
        </div>
    )
}

export default Place