import React from 'react'
import TopLevelScreenComponent from './../components/TopLevelScreenComponent'
import {
    View,
} from 'react-native'

class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <TopLevelScreenComponent/>
            </View>
        )
    }
}


export default EntryScreen

