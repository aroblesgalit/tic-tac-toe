import React from 'react'
import './grid.css'

export default function Grid({ start, game }) {

    // if (game.gameOver) {
    //     return 'Start a New Game!'
    // }

    return (
        <div className='box-wrapper row'>
            {
                start ? (
                    game.marks.map((mark, i) => (
                        <div
                            key={i}
                            className='box col-4'
                            onClick={() => game.addMark(i)}
                        >
                            {mark}
                        </div>
                    ))
                ) : ''
            }
        </div>
    )
}
