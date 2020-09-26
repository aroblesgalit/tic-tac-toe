import React, { useState } from 'react'

const GameContext = React.createContext();

// Provider
function GameProvider(props) {

    const [game, setGame] = useState();
    const [start, setStart] = useState(false);

    function handleStart() {
        setGame(() => {
            const newGame = new Game("Alvin", "Davis");
            return newGame;
        })
        setStart(null);
    }

    function closeModal() {
        setStart(true);
        console.log(game)
    }

    if (game.gameOver) {
        setStart(false)
    }

    return (
        <GameContext.Provider
            value={{
                game,
                start,
                handleStart,
                setStart,
                closeModal
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