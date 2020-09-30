import React from 'react'
import './namesModal.css'

export default function index() {
    return (
        <div className="names-container container position-fixed">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-12">
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
                                            />
                                        </div>
                                        <div className="col">
                                            <input 
                                                type="text"
                                                className="form-control"
                                                placeholder="PLAYER 2"
                                            />
                                        </div>
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
