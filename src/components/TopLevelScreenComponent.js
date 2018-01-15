import React from 'react'
import {
    Text,
    View,
    Button
} from 'react-native'
import reactCSS from 'reactcss'
import Splash from './Splash'
import MemeSelector from './MemeSelector'
import Scanning from './Scanning'
import ShowMeme from './ShowMeme'

export const appPage = {
    SPLASH: 'splash',
    MEMESELECTOR: 'memeselector',
    SCANNING: 'scanning',
    SHOWMEME: 'showmeme'
}

class TopLevelScreenComponent extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            currentPage: appPage.SPLASH
        }
    }

    setAppPage = (newPage) => {
        this.setState({
            currentPage: newPage
        })
    }

    render() {
        const styles = reactCSS({
            'default': {
                container: {
                    flex: 1,
                    //justifyContent: 'space-between'                        
                }
            },
        })
        let component
        switch (this.state.currentPage) {
            case appPage.SPLASH:
                component = <Splash setAppPage={this.setAppPage} />
                break
            case appPage.MEMESELECTOR:
                component = <MemeSelector setAppPage={this.setAppPage} />
                break
            case appPage.SCANNING:
                component = <Scanning setAppPage={this.setAppPage} />
                break
            case appPage.SHOWMEME:
                component = <ShowMeme setAppPage={this.setAppPage} />
                break
        }
        return (
            <View style={styles.container}>
            {component}
            </View>
        )
    }
}


export default TopLevelScreenComponent

