import React from 'react';

import { StyleSheet, Text, View} from 'react-native';
import { reset, getCurrentFrame } from 'expo/build/AR';


function Content(){
    return(
        <View>
            <Text style={styles.content} numberOfLines={5} ellipsizeMode='tail'>
            Penn State leaders hosted a virtual town hall meeting March 24 to answer questions and provide information to students and families about the measures Penn State has taken to slow the spread of the novel coronavirus and protect the health and well-being of students, faculty, staff and community members.

The student-focused town hall followed a similar virtual event dedicated to answering questions from faculty and staff.

Penn State President Eric Barron hosted the virtual meeting for students and families, and was joined by Nick Jones, executive vice president and provost; Damon Sims, vice president for student affairs; Renata Engel, vice provost for online education; Yvonne Gaudelius, associate vice president and senior associate dean for undergraduate education; and Matthew Ferrari, associate professor of biology and researcher in the Center for Infectious Disease Dynamics.


            </Text>
        </View>
        
    )
}


const styles = StyleSheet.create({
    content: {
        
    }

})

export default Content;
