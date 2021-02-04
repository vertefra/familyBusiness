import React from 'react'
import { Board } from './components/board/Board'
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Setup from './components/setup/Setup'
=======
>>>>>>> 76c6145d111c5b8211a6a1d1b38f5511677e6b56

function App() {
    return (
        <div>
<<<<<<< HEAD
            <Router>
                <Switch>
                    <Route path="/" component={Setup} />
                    <Route path="/game" component={Board} />
                </Switch>
            </Router>
=======
            <Board />
>>>>>>> 76c6145d111c5b8211a6a1d1b38f5511677e6b56
        </div>
    )
}

export default App
