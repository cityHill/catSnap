import React from 'react'
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native'
import reactCSS from 'reactcss'
import Images from '../assets/images/images'
import {appPage} from './TopLevelScreenComponent'


class MemeSelector extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    onPress = () => {
        this.props.setAppPage(appPage.SCANNING)
      }

    render() {
        const styles = reactCSS({
            'default': {
                container: {
                  //display: 'flex',
                  flex: 1
                },
                tlCat: {
                    position: 'absolute',
                    top: 100,
                    left: 200,
                    width: 480,
                    height: 360
                },
                selectorText: {
                    fontSize: 24,
                    color: '#EE0C97',
                    fontWeight: 'bold',
                    position: 'absolute',
                    top: 450,
                    left: 400,
                    width: 150,
                    height: 30,
                    backgroundColor: 'lightgrey',
                    textAlign: 'center'
                }
            },
    })
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={this.onPress}>
                <Image style={styles.tlCat} resizeMode="contain" source={Images.TL_CAT} />
                <Text style={styles.selectorText}>Thug Life</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default MemeSelector

