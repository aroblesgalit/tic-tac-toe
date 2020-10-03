import React from 'react'
import './grid.css'
import { NewGameConsumer } from '../../../utils/NewGameContext'

export default function Grid() {
    return (
        <div className='box-wrapper row'>
            <NewGameConsumer>
                {
                    value => {
                        return (
                            value.marks.map((mark, i) => (
                                <div
                                    key={i}
                                    className='box col-4'
                                    onClick={() => console.log(value.marks)}
                                >
                                    {mark}
                                </div>
                            ))
                        )
                    }
                }
            </NewGameConsumer>
        </div>
    )
}
