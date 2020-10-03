import React from 'react';
import './startBtn.css';

export default function RestartBtn({ handleStart }) {
    return (
        <button
            type='button'
            className='start-btn btn btn-primary'
            onClick={handleStart}
        >
            Play Again
        </button>
    )
}
