import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { GameProvider } from './utils/GameContext';
import NewHome from './pages/NewHome';

function App() {
  return (
    <GameProvider>
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

    </GameProvider>
  );
}

export default App;
