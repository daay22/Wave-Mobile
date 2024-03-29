// screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
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
    fetch("http://192.168.4.72:8000/api/v1/venues/65543d62086bbf3888fe2988")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error: ',error));
    navigation.navigate('Club Main', { barcodeData: data });
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
      <Text>Scan a Barcode or Enter a Code:</Text>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={styles.scanner}
      />
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputCode}
      />
      <Button title="Submit" onPress={handleTextInputSubmit} />
      {scanned && <Button title="Scan Again" onPress={() => setScanned(false)} />}
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
});
