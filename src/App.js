import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Component from "./Component";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>

          <Component name="Person"/>
          <Component name="Person1"/>
          <Component name="Person2"/>
        </header>

        <main>
          <h1>Main</h1>

        </main>
      </div>
  );
}

export default App;
