import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {Image} from 'react-native';

import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { reset, getCurrentFrame } from 'expo/build/AR';

function Header(){
    return(
        
        <View style={styles.header}>
         <View style={styles.headerName}> 
            <Image source={require('../assets/avatar.png')} fadeDuration={0} style={styles.avatar}/>
            <Text style={styles.headerText}>boards</Text>
        </View>
        <View style={styles.headerIcons}>
            <MaterialIcons name="search" size={32} color="white" style ={styles.searcher}/>
            <MaterialIcons name="notifications" size={32} color="white" style ={styles.searcher}/>
        </View>
        </View>
        
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#fafafa',
        paddingTop: 40,
        paddingLeft: 13,
        paddingBottom: 6,
        borderBottomWidth: 3,
        borderBottomColor: '#f5f5f5',
        alignItems: "flex-end",
        
    },
    headerName:{
        flexDirection: 'row',

    },
    headerIcons:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    headerText:{
        fontSize: 30, 
        color: '#1c84ad',
        marginLeft:5,
        paddingTop: 5,      
    },
    searcher: {
        alignItems: "flex-end",
        color: 'black',
        marginBottom: 7,
        paddingRight: 20,
        justifyContent: 'flex-end'
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 50,
    }



})

export default Header;
