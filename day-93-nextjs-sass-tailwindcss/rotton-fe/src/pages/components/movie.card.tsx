import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css"

interface IAwards {
    wins: Number;
    nominations: Number;
    text: string;
}

interface IImdb {
    rating: Number;
    votes: Number;
    id: Number;
}

interface IViewer {
    rating: Number;
    numReviews: Number;
    meter: Number;
}

interface ITomatoes {
    viewer: IViewer;
    lastUpdated: Date;
}

interface IMovie {
    plot: string;
    genres: [string];
    runtime: Number;
    rated: string;
    cast: [string];
    num_mflix_comments: Number;
    poster: string;
    title: string;
    fullplot: string;
    languages: [string];
    released: Date;
    directors: [string];
    writers: [string];
    awards: IAwards;
    lastupdated: Date;
    year: Number;
    imdb: IImdb;
    type: {
        type: string;
        enum: ["movie"];
        required: true;
    };
    tomatoes: ITomatoes;
}

export default function MovieCard(): JSX.Element {
    const URL = "http://localhost:8080/movies/movielist?page=2&moviesPerPage=30"
    const router = useRouter();
    const [navigate, setNavigate] = React.useState(false)
    const [movie, setMovie] = useState<IMovie[]>([])

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
        <div className="grid grid-cols-6 mx-4">
            {movie.map((m, index) => (
                <div key={index} className="w-40 h-58 my-5">
                    <img className="w-full h-full rounded-xl" src={m.poster} alt="pic" />
                    <div className="grid grid-cols-2">
                        <div>
                            <span></span>
                            <span>{m.tomatoes.viewer.meter}</span>
                        </div>
                        <div>
                            <span></span>
                            <span>{m.imdb.rating}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}