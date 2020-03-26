import React, {useState} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';

import Header from './components/header';
import MainBody from './components/mainBody';
import Footer from './components/footer'




export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <MainBody/>
        
      </ScrollView>
      <Footer style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaeb',
  },
  footer: {
    justifyContent: 'flex-end',
    bottom: 0,
    position: 'absolute',
  },
 
});
