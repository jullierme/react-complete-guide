import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import registerServiceWorker from './registerServiceWorker'

export const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">Welcome to React!</h1>
    </header>
    <p className="App-intro">
            To get started, edit <code>src/index.js</code> and save to reload...
    </p>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
