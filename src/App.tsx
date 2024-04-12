import React from 'react';
import NavigationWidget from './samples/ui/Navigation';
import { data } from './constants'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationWidget data={data} />
      </header>
    </div>
  );
}

export default App;
