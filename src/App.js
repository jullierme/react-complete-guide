import React, { Component } from 'react'
import Person from './app/components/Person/Person'

class App extends Component {
    teste() {
        return <span>teste</span>
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React!</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/index.js</code> and save to
                    reload...
                </p>

                <p className="App-intro">
                    To get started, edit <code>src/index.js</code> and save to
                    reload...
                </p>

                <Person name="Teste Teste Teste" />
                <Person />
                <Person>
                    <button>teste</button>
                </Person>

                {this.teste()}
                {this.teste()}
            </div>
        )
    }
}

export default App
