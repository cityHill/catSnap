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
import { appPage } from './TopLevelScreenComponent'


class Scanning extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    back = () => {
        this.props.setAppPage(appPage.MEMESELECTOR)
    }
    forward = () => {
        this.props.setAppPage(appPage.SHOWMEME)
    }

    render() {
        const styles = reactCSS({
            'default': {
                container: {
                    //display: 'flex',
                    flex: 1
                },
                scanCat: {
                    position: 'absolute',
                    top: 100,
                    left: 200,
                    width: 480,
                    height: 360
                },
                backText: {
                    fontSize: 24,
                    color: '#EE0C97',
                    fontWeight: 'bold',
                    position: 'absolute',
                    top: 450,
                    left: 100,
                    width: 150,
                    height: 50,
                    backgroundColor: 'lightgrey',
                    textAlign: 'center'

                }
            },
        })
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.forward}>
                    <Image style={styles.scanCat} resizeMode="contain" source={Images.SCAN_CAT} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.back}>
                    <Text style={styles.backText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default Scanning

