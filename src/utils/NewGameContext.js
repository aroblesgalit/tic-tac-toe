import React from 'react'
import { useState } from 'react';

const NewGameContext = React.createContext();

// Provider
function NewGameProvider(props) {

    const [game, setGame] = useState({
        start: false,
        namesModal: false,
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

    function openNamesModal() {
        setGame({
            ...game,
            namesModal: true
        })
    }

    return (
        <NewGameContext.Provider
            value={{
                ...game,
                player1,
                player2,
                openNamesModal
            }}
        >
            {props.children}
        </NewGameContext.Provider>
    )
}

// Consumer
const NewGameConsumer = NewGameContext.Consumer;

export default NewGameContext;
export { NewGameProvider, NewGameConsumer };