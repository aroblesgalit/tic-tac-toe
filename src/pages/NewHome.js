import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'
import MarkModal from '../components/new/MarkModal'
import Grid from '../components/new/Grid'
import StartBtn from '../components/new/StartBtn'
import RestartBtn from '../components/new/RestartBtn'
import NamesModal from '../components/new/NamesModal'
import { NewGameConsumer } from '../utils/NewGameContext'

export default function Home() {
    return (
        <div>
            <NewGameConsumer>
                {
                    value => {
                        const { start, gameOver, player1, player2, namesModal, marksModal, openNamesModal, playAgain } = value;
                        return (
                            <section className='main-container'>
                                {
                                    namesModal ? <NamesModal /> : ''
                                }
                                {
                                    marksModal ? <MarkModal /> : ''
                                }
                                <h1>Tic Tac Toe 2</h1>
                                <h3>
                                    {
                                        start ? (
                                            `${player1.name} vs ${player2.name}`
                                        ) : ''
                                    }
                                </h3>
                                <StartBtn start={start} handleStart={openNamesModal} />
                                {
                                    gameOver ? <RestartBtn handleStart={playAgain} /> : ''
                                }
                                <div className='container'>
                                    {
                                        start ? <Grid /> : ''
                                    }
                                </div>
                                <div className='new-link'>
                                    <Link to='/'>That</Link>
                                </div>
                            </section>
                        )
                    }
                }
            </NewGameConsumer>
        </div>
    )
}
