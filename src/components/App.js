import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import Header from './Header';
import SimpsonsQuote from '../containers/facts/SimpsonsQuote';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AllCharacters} />
        <Route path="/quotes" component={SimpsonsQuote} />
      </Switch>
    </Router>
  );
}