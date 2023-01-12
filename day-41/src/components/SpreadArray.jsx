import React from 'react'
import { useState } from 'react';

const SpreadArray = () => {
    let nextId = 0;
    const [name, setName] = useState("");
    const [books, setBooks] = useState([]);
    return (
        <div>
            <h1>Book list :</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => {
                setName("");
                setBooks([...books, { id: nextId++, name: name }]);
            }}>
                Add
            </button>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SpreadArray