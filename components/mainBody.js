import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { reset, getCurrentFrame } from 'expo/build/AR';

import Upvotes from './upvotes'
import Content from './postContent'



function MainBody(){
    return(
        <View>
            <View style={styles.post}>
                <Text style={styles.heading}>First COVID-19 case confirmed on University Park campus</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>Penn State leaders answer student questions at virtual town hall</Text>
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
                <Text style={styles.heading}>First COVID-19 case confirmed on University Park campus</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>Penn State leaders answer student questions at virtual town hall</Text>
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
                <Text style={styles.heading}>First COVID-19 case confirmed on University Park campus</Text>
                <Text style={styles.credentials}>Credentials</Text>
                <Content/>
                <Upvotes/>
            </View>
            <View style={styles.post}>
                <Text style={styles.heading}>Penn State leaders answer student questions at virtual town hall</Text>
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

        </View> 
    )
}


const styles = StyleSheet.create({
    mainBody: {
        
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
    content: {
        fontSize: 18
    },
    engagement: {

    },

})

export default MainBody;
