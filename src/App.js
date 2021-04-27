import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Order from './routes/Order';
import Language from './components/Language';

function App() {
  return (
    <HashRouter>
      <Language />
      <Route path='/' component={Home} exact={true} />
      <Route path='/Order' component={Order} />
    </HashRouter>
  );
}

export default App;
