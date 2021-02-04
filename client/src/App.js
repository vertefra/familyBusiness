import React from 'react'
import { Board } from './components/board/Board'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Setup from './components/setup/Setup'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Setup} />
                    <Route path="/game" component={Board} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
