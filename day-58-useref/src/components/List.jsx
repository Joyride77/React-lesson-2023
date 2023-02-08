import React from 'react'
import { places } from '../data/data'
import Place from './Place'

const List = () => {
    const items = places.map((place, index) => {
        return <Place key={index} place={place} />
    })
    return (
        <div>
            {items}
        </div>
    )
}

export default List