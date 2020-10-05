import React from 'react';
import './startBtn.css';

export default function RestartBtn({ handleStart }) {
    return (
        <button
            type='button'
            className='start-btn btn btn-danger'
            onClick={handleStart}
        >
            Play Again
        </button>
    )
}
