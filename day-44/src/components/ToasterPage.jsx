import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const ToasterPage = () => {
    const notify = () => toast("Successfully Saved!")
    return (
        <div>
            <h1>It is Toaster Page</h1>
            <button onClick={notify}>Save</button>
            <ToastContainer />
            <Link to={'/'}>Back</Link>
        </div>
    )
}

export default ToasterPage