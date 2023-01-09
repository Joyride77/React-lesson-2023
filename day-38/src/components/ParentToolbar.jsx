import React from 'react'

const ParentToolbar = () => {
    return (
        <div
            className='Toolbar'
            onClick={() => {
                alert('You Clicked on the toolbar!');
            }}
        >
            <button onClick={(e) => {
                e.stopPropagation();
                alert('Playing!');
            }}
            >
                Play Movie
            </button>
            <button onClick={() => alert('Uploading!')}>Upload Image</button>
        </div>
    )
}

export default ParentToolbar