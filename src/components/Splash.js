import React from 'react'
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import reactCSS from 'reactcss'
import Images from '../assets/images/images'
import {appPage} from './TopLevelScreenComponent'


class Splash extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    onPress = () => {
        this.props.setAppPage(appPage.MEMESELECTOR)
      }

    render() {
        const styles = reactCSS({
            'default': {
                container: {
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                csLogo: {
                    width: 100,
                    height: 100,
                },
                splashText: {
                    fontSize: 18,
                    color: '#EE0C97',
                    fontWeight: 'bold',
                    paddingBottom: 20
                },
                buttonText: {
                    color: '#841584',
                    fontSize: 18,
                    fontWeight: 'bold',
                    width: 150,
                    height: 30,
                    backgroundColor: 'lightgrey',
                    textAlign: 'center',
                }
            }
        })
        return (
            <View style={styles.container}>
                <Image style={styles.csLogo} resizeMode="contain" source={Images.CAT_SNAP_LOGO} />
                <Text style={styles.splashText}>Initializing catSnap...</Text>
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.buttonText}> Meme My Cat! </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Splash

