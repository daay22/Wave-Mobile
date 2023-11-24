// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResultScreen from './results';
import BarcodeScannerScreen  from './BarcodeScanner.js';
import ProfileScreen from "./views/ProfileScreen"
import BathroomSelectionScreen from "./views/InClubScreens/BathroomSelectionScreen.js"
import ClubDetails from "./views/ClubSelectionScreens/ClubDetails.js"
import ClubMain from "./views/ClubSelectionScreens/ClubMain.js"
import BarSelection from './views/DrinkSelectionScreens/BarSelection.js'
import DrinkMenu from './views/DrinkSelectionScreens/DrinkMenu.js'
import DrinkSelection from './views/DrinkSelectionScreens/DrinkSelection.js' 
import BathroomList from "./views/InClubScreens/BathroomList.js"
import Checkout from './views/DrinkSelectionScreens/Checkout.js'
import { MyProvider } from './store/context';


const Stack = createStackNavigator();

export default function App() {
  return (
    <MyProvider>
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Scanner">
        <Stack.Screen name="Scanner"  options= {{headerShown:false}} component={BarcodeScannerScreen} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#4F47C7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} headerStyle name="Profile Creation" component={ProfileScreen}/>
        <Stack.Screen name="Bathroom Selection" component={BathroomSelectionScreen} />
        <Stack.Screen name="Club Details" component={ClubDetails} options={{
          title: '',
        }} />
        <Stack.Screen name="Club Main" component={ClubMain}  options={({ route }) => ({ title: route.params.name })} />  
        <Stack.Screen name="Bar Selection" component={BarSelection} />   
        <Stack.Screen name="Drink Menu" component={DrinkMenu} />  
        <Stack.Screen name="Checkout" component={Checkout} />  
        <Stack.Screen name="Drink Selection" component={DrinkSelection} 
        options= {{headerShown:false}}/>    
        <Stack.Screen name="Bathroom List" component={BathroomList} /> 
      </Stack.Navigator>
    </NavigationContainer>
    </MyProvider>
    
  );
}