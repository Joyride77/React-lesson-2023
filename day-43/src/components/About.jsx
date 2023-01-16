import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>It is about page</h1>
            <Link to={"/about/usuhuu"}>Usuhuu</Link>
            <Link to={"/about/khangai"}>Khangai</Link>
            <Outlet />
        </div>
    )
}

export default About