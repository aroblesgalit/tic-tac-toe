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

    function addNames(p1, p2) {
        setPlayer1({
            ...player1,
            name: p1
        })
        setPlayer2({
            ...player2,
            name: p2
        })
    }

    function openMarksModal() {
        setGame({
            ...game,
            namesModal: false,
            marksModal: true
        })
    }

    function chooseMarks(mark) {
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

    function addMark(index) {
        let tempMarks = [...game.marks];
        if (tempMarks[index] === null) {
            if (game.turn === 0) {
                tempMarks[index] = player1.mark;
                game.turn = 1;
            } else {
                tempMarks[index] = player2.mark;
                game.turn = 0;
            }
            setGame({
                ...game,
                marks: tempMarks
            })
        }
        console.log('players', player1, player2)
        console.log(game.marks)
        // this.checkForWin();
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
                chooseMarks,
                addMark
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