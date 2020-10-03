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
                        const { start, namesModal, marksModal, openNamesModal } = value;
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

                                </h3>
                                <StartBtn start={start} handleStart={openNamesModal} />

                                <div className='container'>
                                    {
                                        start ? <Grid /> : ''
                                    }
                                </div>

                            </section>
                        )
                    }
                }
            </NewGameConsumer>
        </div>
    )
}
