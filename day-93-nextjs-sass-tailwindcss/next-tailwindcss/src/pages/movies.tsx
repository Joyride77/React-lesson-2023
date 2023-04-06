import React from "react"
import MovieCard from "@/components/MovieCard"
import NavigationBar from "@/components/NavigationBar"

export default function Movies(props: any): JSX.Element {
    return (
        <div>
            <NavigationBar />
            <h1>MOVIE PAGE</h1>
            <MovieCard />
            <div className="container bg-grey">
                <div>aa</div>
                <div>aa</div>
                <div>bb</div>
            </div>
        </div>
    )
}