import React from 'react'
import './markModal.css'

export default function index() {
    return (
        <div className="mark-container container position-fixed">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Choose your Mark</h5>
                            <div className="marks d-flex justify-content-around m-4">
                                <span id="mark-o">o</span><span id="mark-x">x</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
