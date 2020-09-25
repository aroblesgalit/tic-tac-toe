import React, { useState } from 'react'
import './pages.css'
import Game from '../components/Game'
import MarkModal from '../components/MarkModal'
import Grid from '../components/Grid'
import StartBtn from '../components/StartBtn'

export default function Home() {

    const [game, setGame] = useState({});
    const [start, setStart] = useState(false);

    function handleStart() {
        setGame(() => {
            const newGame = new Game("Alvin", "Davis");
            return newGame;
        })
        setStart(null);
    }

    function closeModal() {
        setStart(true);
        console.log(game)
    }

    if (game.gameOver) {
        setStart(false)
    }

    return (
        <div>
            { start === null ? <MarkModal game={game} closeModal={closeModal} /> : ''}
            <h1>Tic Tac Toe</h1>
            <h3>
                {
                    start ? `${game.p1.name} vs ${game.p2.name}` : ''
                }
            </h3>
            {start ? `Turn ${game.turn}` : ''}
            <StartBtn start={start} handleStart={handleStart} />

            <div className='container'>
                {
                    game.gameOver ? '' : <Grid game={game} start={start} />
                }
            </div>
        </div>
    )
}
