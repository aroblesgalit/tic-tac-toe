import React from 'react'
import './pages.css'

export default function Home() {
    return (
        <div>
            <h1>Tic Tac Toe</h1>
            
            <div className='container'>
                <div className='box-wrapper row'>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                    <div className='box col-4'>O</div>
                </div>
            </div>
        </div>
    )
}
