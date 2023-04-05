import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import NavigationBar from "@/components/navigation.bar";
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

export default function Movies(): JSX.Element {
    const URL = "http://localhost:8080/movies/movielist?page=2&moviesPerPage=10"
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
        <div className={styles.myhtml}>
            <NavigationBar />
            <h1>MOVIES PAGE</h1>
            {movie.map((m, index) => (
                <div key={index}>
                    <img src={m.poster} alt="piz" />
                </div>
            ))}
            <button onClick={() => setNavigate(true)}>Go Back</button>
        </div>
    )
}