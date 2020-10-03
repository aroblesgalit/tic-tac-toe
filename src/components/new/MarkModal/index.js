import React from 'react'
import './markModal.css'
import { NewGameConsumer } from '../../../utils/NewGameContext'

export default function index() {
    return (
        <div className="mark-container position-fixed">
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Choose your Mark</h5>
                            <NewGameConsumer>
                                {
                                    value => {
                                        return (
                                            <div className="marks d-flex justify-content-around m-2">
                                                <div
                                                    onClick={() => { value.chooseMarks('o') }}
                                                >
                                                    o
                                            </div>
                                                <div
                                                    onClick={() => { value.chooseMarks('x') }}
                                                >
                                                    x
                                            </div>
                                            </div>
                                        )
                                    }
                                }
                            </NewGameConsumer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
