import React, { useEffect, useState } from 'react'
import './pages.css'
import Game from '../components/Game'
import MarkModal from '../components/MarkModal'
import Grid from '../components/Grid'
import StartBtn from '../components/StartBtn'

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
            <h3>
                {
                    start === null ? `${game.p1.name} vs ${game.p2.name}` : ''
                }
            </h3>
            {start === null ? `Turn ${game.turn}` : ''}
            <StartBtn start={start} handleStart={handleStart} />

            <div className='container'>
                <Grid game={game} start={start} />
            </div>
        </div>
    )
}
