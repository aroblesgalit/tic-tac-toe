import React from 'react'
import { useState } from 'react';

const NewGameContext = React.createContext();

// Provider
function NewGameProvider(props) {

    const [game, setGame] = useState({
        start: false,
        gameOver: false,
        namesModal: false,
        marksModal: false,
        turn: 0
    })

    const [marks, setMarks] = useState([
        null, null, null,
        null, null, null,
        null, null, null
    ])

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
        if (game.gameOver) return;
        let tempMarks = [...marks];
        if (tempMarks[index] === null) {
            if (game.turn === 0) {
                tempMarks[index] = player1.mark;
                game.turn = 1;
            } else {
                tempMarks[index] = player2.mark;
                game.turn = 0;
            }
            setMarks(tempMarks)
        }
        setTimeout(() => {
            checkForWin(tempMarks);
        }, 250);
    }

    function checkForWin(marks) {
        let cell1 = marks[0];
        let cell2 = marks[1];
        let cell3 = marks[2];
        let cell4 = marks[3];
        let cell5 = marks[4];
        let cell6 = marks[5];
        let cell7 = marks[6];
        let cell8 = marks[7];
        let cell9 = marks[8];
        if ((cell1 === cell2 && cell1 === cell3 && cell1 !== null)
            || (cell4 === cell5 && cell4 === cell6 && cell4 !== null)
            || (cell7 === cell8 && cell7 === cell9 && cell7 !== null)
            || (cell1 === cell4 && cell1 === cell7 && cell1 !== null)
            || (cell2 === cell5 && cell2 === cell8 && cell2 !== null)
            || (cell3 === cell6 && cell3 === cell9 && cell3 !== null)
            || (cell1 === cell5 && cell1 === cell9 && cell1 !== null)
            || (cell3 === cell5 && cell3 === cell7 && cell3 !== null)) {
            setGame({
                ...game,
                gameOver: true
            })
            if (game.turn === 1) {
                alert(`${player1.name} wins!`);
            } else {
                alert(`${player2.name} wins!`);
            }
        } else if (marks.every(mark => mark !== null)) {
            setGame({
                ...game,
                gameOver: true
            })
            alert("Game over. No winner.")
        }
    }

    function playAgain() {
        setGame({
            start: false,
            gameOver: false,
            namesModal: true,
            marksModal: false,
            turn: 0
        })
        setMarks([
            null, null, null,
            null, null, null,
            null, null, null
        ])
    }

    return (
        <NewGameContext.Provider
            value={{
                ...game,
                marks,
                player1,
                player2,
                openNamesModal,
                openMarksModal,
                addNames,
                chooseMarks,
                addMark,
                playAgain
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