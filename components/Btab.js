import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainBody from './mainBody';
import Header from './header';
import Saved from './saved';
import Followed from './followed';
import Settings from './settings';
import Login from './loginPage'





const Tab = createBottomTabNavigator();

function Btab() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Saved') {
            iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
          }
          else if (route.name === 'Followed') {
            iconName = focused ? 'ios-grid' : 'ios-grid';
          }
          else if (route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }
          else if (route.name === 'Login') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1c84ad',
        inactiveTintColor: 'black',
      }}>
        <Tab.Screen name="Home" component={MainBody} />
        <Tab.Screen name="Saved" component={Saved} />
        <Tab.Screen name="Followed" component={Followed} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Btab;