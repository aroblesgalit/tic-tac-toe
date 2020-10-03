import React from 'react'
import './pages.css'
import MarkModal from '../components/MarkModal'
import Grid from '../components/Grid'
import StartBtn from '../components/StartBtn'
import NamesModal from '../components/NamesModal'
import { GameConsumer } from '../utils/GameContext'

export default function Home() {
    return (
        <div>
            <GameConsumer>
                {
                    value => {
                        const { start, game, closeModal, handleStart, marks, names } = value;
                        return (
                            <section className='main-container'>
                                {marks ? <MarkModal game={game} closeModal={closeModal} /> : ''}
                                {names ? <NamesModal game={game} /> : ''}
                                <h1>Tic Tac Toe</h1>
                                <h3>
                                    {
                                        start ? `${game.p1.name} vs ${game.p2.name}` : ''
                                    }
                                </h3>
                                <StartBtn start={start} handleStart={handleStart} />

                                <div className='container'>
                                    {
                                        game && game.gameOver ? '' : ( game ? <Grid game={game} start={start} /> : '')
                                    }
                                </div>
                            </section>
                        )
                    }
                }
            </GameConsumer>
        </div>
    )
}
