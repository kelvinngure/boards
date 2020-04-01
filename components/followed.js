import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Followed(){
    return(
        <View>
            <View style={styles.header}>
                <View style={styles.headerName}> 
                    <Text style={styles.headerText}>Followed</Text>
                </View>
                <View style={styles.headerIcons}>
                    <MaterialIcons name="search" size={32} color="white" style ={styles.searcher}/>
                    <MaterialIcons name="notifications" size={32} color="white" style ={styles.searcher}/>
                </View>
            </View>
            
            <View style={styles.followBody}>
           
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
    },
    followBody:{

    },
    followInfo:{

    },



})

export default Followed;
