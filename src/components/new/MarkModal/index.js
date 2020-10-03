import React from 'react'
import './markModal.css'

export default function index({ game, closeModal }) {
    return (
        <div className="mark-container position-fixed">
            <div className="row d-flex justify-content-center">
                <div className="col">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Choose your Mark</h5>
                            <div className="marks d-flex justify-content-around m-2">
                                <div
                                    onClick={() => {game.chooseMark("o"); closeModal()}}
                                >
                                    o
                                </div>
                                <div
                                    onClick={() => {game.chooseMark("x"); closeModal()}}
                                >
                                    x
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
