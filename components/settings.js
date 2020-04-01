import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Settings(){
    return(
        <View>
            <View style={styles.header}>
                <View style={styles.headerName}> 
                    <Text style={styles.headerText}>Settings</Text>
                </View>
                <View style={styles.headerIcons}>
                    <MaterialIcons name="search" size={32} color="white" style ={styles.searcher}/>
                    <MaterialIcons name="notifications" size={32} color="white" style ={styles.searcher}/>
                </View>
            </View>
            

            <ScrollView style={styles.settingsView}>   
                <Text style={styles.heading}>ACCOUNT</Text>
                <View style={styles.settingsChildrenView}>
                    <View style={styles.settingsChildren}>
                        <Text style={styles.specificSettings}>Change Name</Text>
                        <Text style={styles.specificSettings}>Password</Text>
                        <Text style={styles.specificSettings}>Logout</Text>
                    </View>
                </View> 
                <Text style={styles.heading}>INTERACTION</Text>
                <View style={styles.settingsChildrenView}>
                    <View style={styles.settingsChildren}>
                        <Text style={styles.specificSettings}>Notifications</Text>
                        <Text style={styles.specificSettings}>Content</Text>
                        <Text style={styles.specificSettings}>Data Consumption</Text>
                    </View>   
                </View>
                <Text style={styles.heading}>OTHER</Text>
                <View style={styles.settingsChildrenView}>
                    <View style={styles.settingsChildren}>
                        <Text style={styles.specificSettings}>Privacy Policy</Text>
                        <Text style={styles.specificSettings}>FAQ and Support</Text>
                        <Text style={styles.specificSettings}>Acceptable Use</Text>
                        <Text style={styles.specificSettings}>Terms of service</Text>
                        <Text style={styles.specificSettings}>Licences</Text>
                        <Text style={styles.specificSettings}>Join Us</Text>
                        
                    </View>      
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
    settingsView:{
        paddingLeft: 0,
        paddingTop: 5,
        backgroundColor: '#e8eaeb'
    },
    heading: {
        fontSize: 16,
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    settingsChildrenView: {
        backgroundColor: 'white',
    
    },
    settingsChildren: {
        paddingLeft: 30,
        paddingBottom: 10,
        paddingTop: 10,
    },
    specificSettings:{
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14
    }
})

export default Settings;
