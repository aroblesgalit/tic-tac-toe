import React from 'react';
import './startBtn.css';

export default function StartBtn({ start, handleStart }) {
    return (
        <React.Fragment>
            {
                start === false ? (
                    <button
                        type='button'
                        className='start-btn btn btn-primary'
                        onClick={handleStart}
                    >
                        Start
                    </button>
                ) : ''
            }
        </React.Fragment>
    )
}
