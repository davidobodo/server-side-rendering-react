import React from 'react';

const HomePage = () => {

    const handleOnclick = () => {
        console.log('JS is running')
    }

    return (
        <div>
            <h1>My home page</h1>
            <p>Some content</p>
            <button onClick={handleOnclick}>Console log some text</button>
        </div>
    )
}

export default HomePage;