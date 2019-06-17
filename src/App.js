import React, { Component } from 'react'

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

                {this.teste()}
                {this.teste()}
            </div>
        )
    }
}

export default App
