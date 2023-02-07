import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import Book from './Book'

const Books = () => {
    const bookData = useContext(BookContext);
    return (
        <ul>
            {bookData.map((item, index) => {
                return (
                    <Book key={index} item={item} />
                )
            })}
        </ul>
    )
}

export default Books