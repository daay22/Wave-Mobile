// screens/HomeScreen.js

import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { MyContext,MyProvider } from './store/context';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const {state, clear,load} = useContext(MyContext);
  const [scanned, setScanned] = useState(false);
  const [inputCode, setInputCode] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // You can perform additional checks on the barcode data if needed
    fetch("http://192.168.4.72:8000/api/v1/customer/"+data)
    .then(response => response.json())
    .then(data => load(data))
    .then(()=> navigation.navigate('Club Main', { name: state.venue.venue_name }))
    .catch(error => console.error());
    //navigation.navigate('Club Main', { barcodeData: data });
  };

  const handleInputChange = (text) => {
    setInputCode(text);
  };

  const handleTextInputSubmit = () => {
    // You can perform additional checks on the input code if needed
    navigation.navigate('Result', { barcodeData: inputCode });
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.box}>
        <View style={[styles.corner, styles.topLeft]} />
        <View style={[styles.corner, styles.topRight]} />
        <View style={[styles.corner, styles.bottomLeft]} />
        <View style={[styles.corner, styles.bottomRight]} />
      </View>
       <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.goBack()}>
       <Ionicons name="document-text" onPress={()=>{ sendSMS(name,location)}} size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: 200,
    height: 40,
    marginTop: 20,
    padding: 8,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40, // Adjust this value to set the distance from the bottom
    right: 40, // Adjust this value to set the distance from the right
    width: 60,
    height: 60,
    borderRadius: 30, // Half of the width and height to make it circular
    backgroundColor: '#4F47C7', // Your desired background color
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Add elevation for a slight shadow effect (Android)
    shadowColor: '#000', // Shadow color (iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (iOS)
    shadowOpacity: 0.8, // Shadow opacity (iOS)
    shadowRadius: 3, // Shadow radius (iOS)
  },
  box: {
    position: 'absolute',
    justifyContent:'center',
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.3,
    top: (Dimensions.get('window').height * 0.6 - Dimensions.get('window').height * 0.081) / 2,
    left: (Dimensions.get('window').width - Dimensions.get('window').width * 0.6) / 2,
  },
  corner: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderWidth: 6,
    borderColor: 'white',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  }
});
