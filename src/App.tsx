import React from 'react';
import NavigationWidget from './samples/ui/NavigationWidget';
import { navigationData } from './constants'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationWidget data={navigationData} />
      </header>
    </div>
  );
}

export default App;
