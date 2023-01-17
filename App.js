import { StyleSheet, Platform, StatusBar } from 'react-native';
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
import { FAB } from 'react-native-paper';
import BathroomList from "./views/BathroomList.js"
import CameraScanner from "./views/CameraScanner.js"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
      <Stack.Navigator  initialRouteName='Club Search'>
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#4F47C7',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} headerStyle name="Profile Creation" component={ProfileScreen}/>
        <Stack.Screen name="Bathroom Selection" component={BathroomSelectionScreen} />
        <Stack.Screen name="Club Search" component={ClubSearch}  options={({ navigation }) => ({
              title: 'Smart Club',
              headerRight: () => (
                <FAB
                size="small"
                icon="barcode-scan"
                style={styles.fab}
                onPress={() => navigation.navigate("Camera Scanner")}/>
              ),
            })}>
              
        </Stack.Screen>
        <Stack.Screen name="Club Details" component={ClubDetails} />
        <Stack.Screen name="Club Main" component={ClubMain}  options={({ route }) => ({ title: route.params.name })} />  
        <Stack.Screen name="Bar Selection" component={BarSelection} />   
        <Stack.Screen name="Drink Menu" component={DrinkMenu} />  
        <Stack.Screen name="Drink Selection" component={DrinkSelection} 
        options= {{headerShown:false}}/>    
        <Stack.Screen name="Bathroom List" component={BathroomList} /> 
        <Stack.Screen name="Camera Scanner" component={CameraScanner} />  


        
            
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
  fab: {
    backgroundColor:"#4F47C7",
 
  },
});
