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


class ShowMeme extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    back = () => {
        this.props.setAppPage(appPage.SCANNING)
    }

    render() {
        const styles = reactCSS({
            'default': {
                container: {
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                },
                scanCat: {
                    width: 480,
                    height: 360,
                    alignSelf: 'center'
                },
                backText: {
                    fontSize: 24,
                    color: '#EE0C97',
                    fontWeight: 'bold',
                    width: 150,
                    height: 50,
                    backgroundColor: 'lightgrey',
                    textAlign: 'center',
                    alignSelf: 'flex-start'

                }
            },
        })
        return (
            <View style={styles.container}>
                    <Image style={styles.scanCat} resizeMode="contain" source={Images.SCAN_CAT_TL} />
                <TouchableOpacity onPress={this.back}>
                    <Text style={styles.backText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default ShowMeme

