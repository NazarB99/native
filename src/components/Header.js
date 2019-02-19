import React from 'react';
import { Text, View } from 'react-native'

const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOpacity:0.4,
        shadowOffset: {width:0,height:20},
        elevation:2,
        position:'relative'
    },
    header: {
        fontSize: 20,
    }
}

const Header = (props) => {
    const { header, viewStyle } = styles
    return (
        <View style={viewStyle}>
            <Text style={header}>{props.headerText}</Text>
        </View>

    )
}

export default Header;