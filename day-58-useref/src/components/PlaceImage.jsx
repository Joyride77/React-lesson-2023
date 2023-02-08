import React from 'react'
import { useContext } from 'react';
import { ImageContext } from '../contexts/ImageContext';
import { getImageUrl } from '../utils/utils'

const PlaceImage = ({ place }) => {
    const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
    return (
        <img src={getImageUrl(place)} alt={place.name} width={imageSize} height={imageSize} />
    )
}

export default PlaceImage