import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, Text, View} from 'react-native';
import { reset, getCurrentFrame } from 'expo/build/AR';


function Footer(){
    return(
        <View style={styles.footer}>
            <MaterialIcons name="home" size={32}/>
            <MaterialIcons name="bookmark" size={32}/>
            <MaterialIcons name="group" size={32}/>
            <MaterialIcons name="settings" size={32}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        backgroundColor: '#fafafa',
        borderTopColor: '#f5f5f5',
        borderTopWidth: 3,
        padding:7,
        justifyContent: 'space-evenly'
        
    }

})

export default Footer;
