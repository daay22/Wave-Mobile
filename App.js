import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "./views/ProfileScreen"
import BathroomSelectionScreen from "./views/BathroomSelectionScreen.js"
import ClubSearch from "./views/ClubSearch.js"
import ClubDetails from "./views/ClubDetails.js"
import ClubMain from "./views/ClubMain.js"
import BarSelection from './views/BarSelection.js'
import DrinkMenu from './views/DrinkMenu.js'
import DrinkSelection from './views/DrinkSelection.js'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
      <Stack.Navigator  initialRouteName='Profile Creation'>
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#4F47C7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} headerStyle name="Profile Creation" component={ProfileScreen}/>
        <Stack.Screen name="Bathroom Selection" component={BathroomSelectionScreen} />
        <Stack.Screen name="Club Search" component={ClubSearch} />
        <Stack.Screen name="Club Details" component={ClubDetails} />
        <Stack.Screen name="Club Main" component={ClubMain} />  
        <Stack.Screen name="Bar Selection" component={BarSelection} />   
        <Stack.Screen name="Drink Menu" component={DrinkMenu} />  
        <Stack.Screen name="Drink Selection" component={DrinkSelection} />    
            
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
