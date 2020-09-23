import React, { useEffect, useState } from 'react'
import './pages.css'
import Game from '../components/Game'
import MarkModal from '../components/MarkModal'

export default function Home() {

    const [game, setGame] = useState();
    const [start, setStart] = useState(false);

    useEffect(() => {
        setGame(() => {
            const newGame = new Game("Alvin", "Davis");
            return newGame;
        })
    }, [])

    function handleStart() {
        setStart(true);
    }

    return (
        <div>
            { start ? <MarkModal chooseMark={game.chooseMark} /> : '' }
            <h1>Tic Tac Toe</h1>

            {
                start
                    ? ""
                    : (
                        <button
                            type='button'
                            className='btn btn-primary'
                            onClick={handleStart}
                        >
                            Start
                        </button>
                    )
            }
            <h1>
                {
                    start ? `${game.p1.name} vs ${game.p2.name}` : ''
                }
            </h1>
            <div className='container'>
                <div className='box-wrapper row'>
                    {
                        game ? (
                            game.marks.map((mark, i) => (
                                <div key={i} className='box col-4'>{mark}</div>
                            ))
                        ) : ''
                    }
                </div>
            </div>
        </div>
    )
}
