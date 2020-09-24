import React, { useEffect, useState } from 'react'
import './pages.css'
import Game from '../components/Game'
import MarkModal from '../components/MarkModal'
import Grid from '../components/Grid'

export default function Home() {

    const [game, setGame] = useState({});
    const [start, setStart] = useState(false);

    useEffect(() => {
        setGame(() => {
            const newGame = new Game("Alvin", "Davis");
            return newGame;
        })
    }, [])

    function handleStart() {
        console.log(game)
        setStart(true);
    }

    function closeModal() {
        setStart(null);
    }

    return (
        <div>
            { start ? <MarkModal game={game} closeModal={closeModal} /> : ''}
            <h1>Tic Tac Toe</h1>
            {start === null ? `Turn ${game.turn}` : ''}
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
            <h1>
                {
                    start ? `${game.p1.name} vs ${game.p2.name}` : ''
                }
            </h1>
            <div className='container'>
                <Grid game={game} start={start} />
            </div>
        </div>
    )
}
