import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [startMessage, setStartMessage] = useState(' ');
  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then((message) => {
        setStartMessage(message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <p>Message from backend: {startMessage}</p>
      </div>
    </div>
  );
}

export default App;
