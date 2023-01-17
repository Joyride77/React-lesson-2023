import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import movieData from '../data/movies'

const Movie = () => {
    const { id } = useParams()
    // const location = useLocation();
    // console.log(location.state);

    const movie = movieData.filter(data => data.id == id)
    console.log(movie);
    return (
        <div>
            <h1>Movie Detail Page {id}</h1>
            {/* <div>{location.state.id}</div>
            <div>{location.state.name}</div>
            <div>{location.state.ISBN}</div> */}

            {movie &&
                movie.map((m, idx) => {
                    return (
                        <div key={idx}>
                            <p>{m.name}</p>
                            <p>{m.id}</p>
                            <p>{m.ISBN}</p>
                            <p>{m.genre}</p>
                        </div>
                    )
                })
            }
            <Link to={"/movies"}>Back</Link>
        </div>
    )
}

export default Movie