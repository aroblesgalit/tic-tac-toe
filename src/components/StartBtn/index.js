import React from 'react'

export default function StartBtn({ start, handleStart }) {
    return (
        <React.Fragment>
            {
                start
                    ? ""
                    : (
                        start === null
                            ? ''
                            : (
                                <button
                                    type='button'
                                    className='btn btn-primary'
                                    onClick={handleStart}
                                >
                                    Start
                                </button>
                            )
                    )
            }
        </React.Fragment>
    )
}
