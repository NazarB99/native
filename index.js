/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {name as appName} from './app.json';

const App = () => {
    return(
        <View style={{flex: 1}}>
            <Header headerText="Albums!"/>
            <AlbumList/>
        </View>
    )
}

AppRegistry.registerComponent(appName, () => App);
