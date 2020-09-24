import React from 'react'

export default function StartBtn({ start, handleStart }) {
    return (
        <React.Fragment>
            {
                start === false ? (
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={handleStart}
                    >
                        Start
                    </button>
                ) : ''
            }
        </React.Fragment>
    )
}
