import React from "react"
import s from "@/styles/Home.module.css"
import Link from "next/link"

export default function NavigationBar(): JSX.Element {
    return (
        <div className={s.navContainer}>
            <div>
                <img className={s.navLogo} src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" alt="logo" />
            </div>
            <div>
                <input className={s.navSearch} type="text" placeholder="Search movies, TV, actors, more..." />
            </div>
            <div>
                <div className={s.navShortcut}>
                    <Link href="#">What's the Tomatometer@?</Link>
                    <Link href="#">Critics</Link>
                    <Link href="#">LOGIN/SIGNUP</Link>
                </div>
                <div className={s.navCategory}>
                    <Link href="/movies">MOVIES</Link>
                    <Link href="#">TV SHOWS</Link>
                    <Link href="#">MOVIE TRIVIA</Link>
                    <Link href="#">NEWS</Link>
                    <Link href="#">SHOWTIMES</Link>
                </div>
            </div>
        </div>
    )
}