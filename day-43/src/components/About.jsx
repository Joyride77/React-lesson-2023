import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h1>It is about page</h1>
            <a href="/about/usuhuu">Usuhuu</a>
            <a href="/about/khangai">Khangai</a>
            <Outlet />
        </div>
    )
}

export default About