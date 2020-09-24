import React from 'react'
import './grid.css'

export default function Grid({ start, game }) {
    return (
        <div className='box-wrapper row'>
            {
                start === null ? (
                    game.marks.map((mark, i) => (
                        <div
                            key={i}
                            className='box col-4'
                            onClick={() => { game.addMark(i); console.log(game.marks) }}
                        >
                            {mark}
                        </div>
                    ))
                ) : ''
            }
        </div>
    )
}
