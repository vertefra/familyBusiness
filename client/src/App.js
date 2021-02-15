import React from 'react'
import Board from './components/Board'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

function App() {
    let gameID, userID
    if (localStorage.getItem('game')) {
        const game = JSON.parse(localStorage.getItem('game'))
        gameID = game.gameID
        userID = game.userID
    }

    return (
        <div>
            <Router>
                <Switch>
                    {/* <Route path="/" exact={true} component={Setup} /> */}
                    <Route
                        path="/game/:gameID/:userID"
                        exact={true}
                        component={Board}
                    />
                    <Redirect to={`/game/${gameID}/${userID}`} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
