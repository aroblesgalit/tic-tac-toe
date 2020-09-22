import React, { useState } from 'react'
import './pages.css'
import Game from '../components/Game'
import MarkModal from '../components/MarkModal'

export default function Home() {

    const [game, setGame] = useState(false);
    const [modal, setModal] = useState(false);

    function handleStart() {
        // setGame(() => {
        //     const newGame = new Game("Alvin", "Davis");
        //     return newGame;
        // })
        setModal(true);
        setGame(true);
    }

    return (
        <div>
            <h1>Tic Tac Toe</h1>

            {
                game
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
                    // game ? `${game.p1.name} vs ${game.p2.name}` : ''
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
            {
                modal ? <MarkModal /> : ''
            }
        </div>
    )
}
