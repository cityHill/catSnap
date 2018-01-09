import React from 'react'
import TopLevelComponent from './src/screens/EntryScreen'
import Routing, {Router} from './src/utilities/routing/index'

const Route = Routing.Route


class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' component={TopLevelComponent}/>
            </Router>
        )
    }
}

export default App
