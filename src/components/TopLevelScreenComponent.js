import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native'


class TopLevelScreenComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    render() {

        return (
            <View style={styles.container}>
               Catsnap
            </View>
        )
    }
}


export default TopLevelScreenComponent

