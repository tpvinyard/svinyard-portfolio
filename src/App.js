import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleContainer from './components/mainpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleContainer/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sarah Vinyard
        </p>
        <p>
          Marketing Analyst from Austin, TX.
        </p>
      </header>
    </div>
  );
}

export default App;
