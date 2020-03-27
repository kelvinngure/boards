import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, Text, View} from 'react-native';
import { reset, getCurrentFrame } from 'expo/build/AR';


function Upvotes(){
    return(
        <View style={styles.upvoteContainer}>
            
            <MaterialIcons name="check-box" size={20} style={styles.upvotes}/>
            
        </View>
        
    )
}


const styles = StyleSheet.create({
    upvoteContainer:{
        marginTop: 10,
    },
    upvotes: {
        color:'#1c84ad',
    }

})

export default Upvotes;
