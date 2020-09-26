import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { GameProvider } from './utils/GameContext';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Home />
      </div>
    </GameProvider>
  );
}

export default App;
