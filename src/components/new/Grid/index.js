import React from 'react'
import './grid.css'

export default function Grid({ start, game }) {

    // if (game.gameOver) {
    //     return 'Start a New Game!'
    // }
    class boardRendererInt extends game.renderer {
        draw(marks) {
            return (
                marks.map((mark, i) => (
                    <div
                        key={i}
                        className='box col-4'
                        onClick={() => game.addMark(i)}
                    >
                        {mark}
                    </div>
                ))
            )
        }
    }

    const board = new boardRendererInt(); 

    return (
        <div className='box-wrapper row'>
            {
                start ? (
                    board.draw(game.marks)
                ) : ''
            }
        </div>
    )
}
