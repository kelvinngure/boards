import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {Image} from 'react-native';

import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { reset, getCurrentFrame } from 'expo/build/AR';

import Content from './postContent'
import Upvotes from './upvotes'
import { ScrollView } from 'react-native-gesture-handler';

function Saved(){
    return(
        
        <View>
        <View style={styles.header}>
         <View style={styles.headerName}> 
            <Text style={styles.headerText}>Saved</Text>
        </View>
        <View style={styles.headerIcons}>
            <MaterialIcons name="search" size={32} color="white" style ={styles.searcher}/>
            <MaterialIcons name="notifications" size={32} color="white" style ={styles.searcher}/>
        </View>
        </View>

        <ScrollView>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>
University leaders answer faculty, staff questions during virtual town hall</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>  
        </ScrollView>
        
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
    },
    post: {
        backgroundColor: 'white',
        marginBottom: 8,
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    credentials:{
        fontSize: 14
    },



})

export default Saved;
