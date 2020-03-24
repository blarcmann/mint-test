import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} />
      <Route path='**' component={Dashboard} />
    </Switch>
  );
}

export default App;
