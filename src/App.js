import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { GameProvider } from './utils/GameContext';
import NewHome from './pages/NewHome';
import { NewGameProvider } from './utils/NewGameContext';

function App() {
  return (
    <GameProvider>
      <NewGameProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/new'>
              <NewHome />
            </Route>
          </Switch>
        </Router>
      </NewGameProvider>
    </GameProvider>
  );
}

export default App;
