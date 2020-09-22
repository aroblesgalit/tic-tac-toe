import React, { useState } from 'react'
import './pages.css'
import Game from '../components/Game'

export default function Home() {

    const [game, setGame] = useState();

    function handleStart() {
        setGame(() => {
            const newGame = new Game("Alvin", "Davis");
            return newGame;
        })
    }

    return (
        <div>
            <h1>Tic Tac Toe</h1>

            <button
                type='button'
                className='btn btn-primary'
                onClick={handleStart}
            >
                Start
            </button>
            <h1>
                {
                    game ? `${game.p1} vs ${game.p2}` : ""
                }
            </h1>
            <div className='container'>
                <div className='box-wrapper row'>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                </div>
            </div>
        </div>
    )
}
