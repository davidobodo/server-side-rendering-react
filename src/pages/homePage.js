import React from 'react';
import { Helmet } from 'react-helmet';

const HomePage = () => {

    const handleOnclick = () => {
        console.log('JS is running')
    }

    const head = () => {
        return (
            <Helmet>
                <title>My Page title</title>
            </Helmet>
        )
    }

    return (
        <div>
            {head()}
            <h1>My home page</h1>
            <p>Some content</p>
            <button onClick={handleOnclick}>Console log some text</button>
        </div>
    )
}

export default HomePage;