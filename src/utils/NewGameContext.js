import React from 'react'

const NewGameContext = React.createContext();

// Provider
function NewGameProvider(props) {
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