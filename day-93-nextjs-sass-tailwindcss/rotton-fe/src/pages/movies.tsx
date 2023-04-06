import React from "react"
import NavigationBar from "./components/navigation.bar"
import styles from "@/styles/Home.module.css"
import MovieCard from "./components/movie.card"

export default function Movies(): JSX.Element {
    return (
        <div className={styles.mycontainer}>
            <NavigationBar />
            <MovieCard />

        </div>
    )
}