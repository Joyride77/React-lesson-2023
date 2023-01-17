import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {

    const aboutPageData = {
        from: "Index ",
        message: "Welcome to About Page",
        timestamp: Date.now(),
    }

    const homePageData = {
        from: "Index ",
        message: "Welcome to Home Page",
        timestamp: Date.now(),
    }

    return (
        <div>
            <h1>Day 44 - Dynamic Routing</h1>
            <nav>
                <Link to={'/about'} state={aboutPageData}>About Page</Link>
                <Link to={'/home'} state={homePageData}>Home Page</Link>
                <Link to={'/accordion'}>Accordion</Link>
                <Link to={'/movies'}>Movies</Link>
                <Link to={'/gallery'}>Image Gallery</Link>
                <Link to={'/toaster'}>Toaster Page</Link>

            </nav>
        </div>
    )
}

export default Index