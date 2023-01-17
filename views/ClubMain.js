import React from 'react';
import { Logs } from 'expo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "../style"
import BarSelection from './BarSelection.js'
import DrinkMenu from './DrinkMenu.js'
import DrinkSelection from './DrinkSelection.js'
import { FAB } from 'react-native-paper';
import BathroomList from "./BathroomList.js"
import Ionicons from '@expo/vector-icons/Ionicons';
import {Button} from "react-native-paper"
import VIPService from "./VIPServices"

Logs.enableExpoCliLogging()

const Tab = createBottomTabNavigator();

function ClubMain() {

    return (
        <Tab.Navigator>
        <Tab.Screen labeled={false}  name="Bar Selection" component={BarSelection}
        options={{
            tabBarLabel: 'Drinks',
            tabBarIcon: ({}) => (
                <Ionicons name="wine-sharp" color="#4F47C7" />
            ),
            headerShown:false
          }}
          />
        <Tab.Screen name="Bathroom" component={BathroomList} 
        options={{
            tabBarLabel:"Bathroom",
            tabBarIcon: ({}) =>(
                <Button icon="toilet"/>
            ),
            headerShown:false
        }}/>
        <Tab.Screen name="VIP" component={VIPService} 
        options={{
            tabBarLabel:"VIP",
            tabBarIcon: ({}) =>(
                <Button icon="star"/>
            ),
            headerShown:false
        }}/>
      </Tab.Navigator>                              
    );
  
}

export default ClubMain;