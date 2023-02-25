import React from 'react';
import { Logs } from 'expo'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "../../style"
import BarSelection from '../DrinkSelectionScreens/BarSelection.js'
import DrinkMenu from '../DrinkSelectionScreens/DrinkMenu.js'
import DrinkSelection from '../DrinkSelectionScreens/DrinkSelection.js'
import { FAB } from 'react-native-paper';
import BathroomList from "../InClubScreens/BathroomList.js"
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Button} from "react-native-paper"
import VIPService from "../VIPScreensScreens/VIPServices"

Logs.enableExpoCliLogging()

const Tab = createBottomTabNavigator();

function ClubMain() {

    return (
        <Tab.Navigator>
        <Tab.Screen labeled={false}  name="Bar Selection" component={BarSelection}
        options={{
            tabBarLabel: 'Bar',
            tabBarIcon: ({}) => (
                <Ionicons name="wine-sharp" class="tabIcon" size={24} color="#4F47C7" />
            ),
            headerShown:false
          }}
          />
        <Tab.Screen name="Bathroom" component={BathroomList} 
        options={{
            tabBarLabel:"Bathroom",
            tabBarIcon: ({}) =>(
                <MaterialCommunityIcons name="toilet" size={24} color="#4F47C7" />
            ),
            headerShown:false
        }}/>
        <Tab.Screen name="VIP" component={VIPService} 
        options={{
            tabBarLabel:"VIP",
            tabBarIcon: ({}) =>(
                <MaterialCommunityIcons name="star" size={24} color="#4F47C7" />
            ),
            headerShown:false
        }}/>
      </Tab.Navigator>                              
    );
  
}

export default ClubMain