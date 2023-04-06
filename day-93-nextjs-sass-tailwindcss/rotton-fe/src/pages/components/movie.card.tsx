import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css"



export default function MovieCard(): JSX.Element {
    const URL = "http://localhost:8080/movies/movielist"
    const router = useRouter();
    const [navigate, setNavigate] = React.useState(false)
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetchList();
    }, [])

    async function fetchList(): Promise<void> {
        const FETCHED_DATA = await fetch(URL);
        const FETCHED_JSON = await FETCHED_DATA.json();
        setMovie(FETCHED_JSON)
        console.log(FETCHED_JSON);
    }


    React.useEffect(() => {
        if (navigate) {
            router.push("/")
        }
    }, [navigate])
    return (
        <div className="grid grid-cols-6 mx-4 mt-10">
            {movie.map((m, index) => (
                <div key={index} className="w-40 h-[14.5rem] mb-28">
                    <img className="w-full h-full rounded-xl" src={m.poster} alt="pic" />
                    <div className="grid grid-cols-2 mt-2">
                        <div className="grid grid-cols-3">
                            <span>

                                <img className="w-5" src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" alt="tom" />
                            </span>
                            <span className={styles.ratingFont}>{m.imdb.rating}</span>
                        </div>
                        <div className="grid grid-cols-3">
                            <span>
                                <img className="w-5" src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg" alt="pop" />
                            </span>
                            <span className={styles.ratingFont}>{m.imdb.votes}</span>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-ratingColor w-full">{m.title}</span>
                        <span className="text-xs text-ratingColor w-full">Opened {m.year}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}