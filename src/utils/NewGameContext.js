import React from 'react'
import { useState } from 'react';

const NewGameContext = React.createContext();

// Provider
function NewGameProvider(props) {

    const [game, setGame] = useState({
        start: null,
        turn: 0,
        marks: [
            null, null, null,
            null, null, null,
            null, null, null
        ]
    })

    const [player1, setPlayer1] = useState({
        name: '',
        mark: null
    })
    
    const [player2, setPlayer2] = useState({
        name: '',
        mark: null
    })

    return (
        <NewGameContext.Provider>
            {props.children}
        </NewGameContext.Provider>
    )
}

// Consumer
const NewGameConsumer = NewGameContext.Consumer;

export default NewGameContext;
export { NewGameProvider, NewGameConsumer };