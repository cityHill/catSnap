import React from 'react'
import TopLevelComponent from './screens/EntryScreen'
import Routing, {Router} from './utilities/routing/index'

const Route = Routing.Route

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' component={TopLevelComponent}/>
            </Router>
        )
    }
}

