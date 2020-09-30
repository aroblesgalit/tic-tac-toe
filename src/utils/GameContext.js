import React, { useState } from 'react';
import Game from '../components/Game';
import BoardRendererInterface from '../components/BoardRendererInterface'

const GameContext = React.createContext();

// Provider
function GameProvider(props) {

    const [game, setGame] = useState();
    const [start, setStart] = useState(false);
    const [names, setNames] = useState(false);
    const [marks, setMarks] = useState(false);

    function handleStart() {
        setGame(() => {
            const newGame = new Game("Alvin", "Davis", BoardRendererInterface);
            return newGame;
        })
        openNames();
        setStart(null);
    }

    function openNames() {
        setNames(true);
    }

    function closeNames() {
        setNames(false);
    }

    function openMarks() {
        setMarks(true);
    }

    function closeModal() {
        setStart(true);
        setMarks(false);
        console.log(game)
    }

    if (game && game.gameOver) {
        setStart(false)
    }

    return (
        <GameContext.Provider
            value={{
                game,
                start,
                marks,
                names,
                handleStart,
                setStart,
                closeModal,
                openMarks,
                closeNames
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}

// Consumer
const GameConsumer = GameContext.Consumer;

export default GameContext;
export { GameProvider, GameConsumer };