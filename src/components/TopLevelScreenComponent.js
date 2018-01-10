import React from 'react'
import {
    Text,
    View,
    Button
} from 'react-native'
import reactCSS from 'reactcss'


class TopLevelScreenComponent extends React.Component {
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
               <Text> Catsnap </Text>
            </View>
        )
    }
}


export default TopLevelScreenComponent

