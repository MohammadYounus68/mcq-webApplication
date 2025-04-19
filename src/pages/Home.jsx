import React from 'react';
import './Home.css';
const Home = ({onStart}) => {
    return (
        <div className='home'>
            <h1>Welcome to the Quiz</h1>
            <button onClick={onStart}>Start Quiz</button>
        </div>
    );
};

export default Home;