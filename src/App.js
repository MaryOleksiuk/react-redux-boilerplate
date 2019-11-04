import React from 'react';
import { Provider } from 'react-redux';
import { store } from './init/store';
import './App.css';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <h1>App</h1>
      </div>
    </Provider>
  );
}

export default App;
