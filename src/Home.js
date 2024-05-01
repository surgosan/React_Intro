import logo from './logo.svg';
// import Component from "./Component";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>

                {/*<Component name="Person"/>*/}
                {/*<Component name="Person1"/>*/}
                {/*<Component name="Person2"/>*/}
            </header>
        </div>
    );
}

export default Home;
