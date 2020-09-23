import React from 'react'
import './markModal.css'

export default function index({ chooseMark }) {
    return (
        <div className="mark-container container position-fixed">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">Choose your Mark</h5>
                            <div className="marks d-flex justify-content-around m-4">
                                <span
                                    id="o"
                                    onClick={(e) => chooseMark(e.target.id)}
                                >
                                    o
                                </span>
                                <span
                                    id="x"
                                    onClick={(e) => chooseMark(e.target.id)}
                                >
                                    x
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
