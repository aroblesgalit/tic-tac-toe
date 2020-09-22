import React from 'react'
import './markModal.css'

export default function index() {
    return (
        <div className='modal' tabIndex='-1' role='dialog'>
            <div className='modal-dialog' role='document'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Choose your Mark</h5>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <span className='p-mark'>o</span><span className='p-mark'>x</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
