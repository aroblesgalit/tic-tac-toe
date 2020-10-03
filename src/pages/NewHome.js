import React from 'react'
import './pages.css'
import MarkModal from '../components/new/MarkModal'
import Grid from '../components/new/Grid'
import StartBtn from '../components/new/StartBtn'
import NamesModal from '../components/new/NamesModal'
import { NewGameConsumer } from '../utils/NewGameContext'

export default function Home() {
    return (
        <div>
            <NewGameConsumer>
                {
                    value => {
                        const { start, openNamesModal } = value;
                        return (
                            <section className='main-container'>
                                <NamesModal />
                                <h1>Tic Tac Toe 2</h1>
                                <h3>

                                </h3>
                                <StartBtn start={start} handleStart={openNamesModal} />

                                <div className='container'>

                                </div>
                                
                            </section>
                        )
                    }
                }
            </NewGameConsumer>
        </div>
    )
}
