import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import movieData from "../data/movies"

const Movies = () => {

    const [movies, setMovies] = useState(movieData)
    console.log(movies);
    return (
        <div>
            <h1>Movies</h1>
            {
                movies.map((data, index) => {
                    return (
                        <Link to={`/movie/${data.id}`} key={index} state={data}>
                            <div>{data.id}: {data.name}</div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Movies