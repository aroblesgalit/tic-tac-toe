import React, { useState } from 'react'
import './namesModal.css'
import { GameConsumer } from '../../utils/GameContext'

export default function Index({ game }) {

    const [player1Name, setPlayer1Name] = useState("");
    const [player2Name, setPlayer2Name] = useState("");

    return (
        <div className="names-container position-fixed">
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Names</h5>
                            <div className="names d-flex justify-content-around m-4">
                                <form>
                                    <div className="row">
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="PLAYER 1"
                                                onChange={(e) => setPlayer1Name(e.target.value)}
                                            />
                                        </div>
                                        <div className="col">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="PLAYER 2"
                                                onChange={(e) => setPlayer2Name(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="next-btn row">
                                        <GameConsumer>
                                            {
                                                value => {
                                                    return (
                                                        <button
                                                            type="submit"
                                                            className="btn btn-primary"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                game.addNames(player1Name, player2Name);
                                                                value.openMarks();
                                                                value.closeNames();
                                                            }}
                                                        >
                                                            Next
                                                        </button>
                                                    )
                                                }}
                                        </GameConsumer>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
