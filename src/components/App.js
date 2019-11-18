import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllCharacters} />
      </Switch>
    </Router>
  );
}