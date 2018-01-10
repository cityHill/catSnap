import React from 'react'
import TopLevelScreenComponent from './../components/TopLevelScreenComponent'
import {
    View,
} from 'react-native'
import reactCSS from 'reactcss'

class EntryScreen extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        const styles = reactCSS({
            'default': {
                container: {
                  display: 'flex',
                }
            },
    })
        return (
            <View style={styles.container}>
                <TopLevelScreenComponent/>
            </View>
        )
    }
}


export default EntryScreen

