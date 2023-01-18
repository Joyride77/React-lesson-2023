import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            <h1>Header</h1>
            <nav>
                <Link className={activeIndex === 0 ? "active" : ""} setActiveIndex={() => setActiveIndex(0)} to="/login">Login</Link>
                <Link className={activeIndex === 1 ? "active" : ""} onClick={() => {
                    setActiveIndex(1);
                }} to="/register">Register</Link>
                <Link className={activeIndex === 2 ? "active" : ""} onClick={() => {
                    setActiveIndex(2);
                }} to="/accordion">Accordion</Link>
            </nav>
        </div>
    )
}

export default Header