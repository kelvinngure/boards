import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';


import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Login(){
    return(
        <View style={styles.body}>
            <View style={styles.logoView}>
                <Text style={styles.logo}>boards</Text>
            </View>
            <View style={styles.formView}> 
                <Text style={styles.form}>form</Text>
            </View>
            
            
        </View>
        

        
    )
}


const styles = StyleSheet.create({
   body: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
   },
   logoView:{
   },
   logo: {
       fontSize: 70,

   },
   form: {

   },

})

export default Login;
