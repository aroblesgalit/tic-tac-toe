import React from 'react'
import { useState } from 'react';

const NewGameContext = React.createContext();

// Provider
function NewGameProvider(props) {

    const [game, setGame] = useState({
        start: false,
        namesModal: false,
        marksModal: false,
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

    function addNames(player1, player2) {
        setPlayer1({
            ...player1,
            name: player1
        })
        setPlayer2({
            ...player2,
            name: player2
        })
    }

    function openMarksModal() {
        setGame({
            ...game,
            namesModal: false,
            marksModal: true
        })
    }

    function addMarks(mark) {
        setPlayer1({
            ...player1,
            mark: mark
        })
        if (mark === 'x') {
            setPlayer2({
                ...player2,
                mark: 'o'
            })
        } else {
            setPlayer2({
                ...player2,
                mark: 'x'
            })
        }
        setGame({
            ...game,
            marksModal: false,
            start: true
        })
    }

    return (
        <NewGameContext.Provider
            value={{
                ...game,
                player1,
                player2,
                openNamesModal,
                openMarksModal,
                addNames,
                addMarks
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