import React, { useState, useEffect} from 'react';
import { Text, View, StyleSheet, FlatList, PermissionsAndroid} from 'react-native';
import ListItem from "../component/ListItem.js";
import Constants from 'expo-constants';
import * as Location from 'expo-location';

var Data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]






function ClubSearch({navigation}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  return (
    <View>
      <Text>{text}</Text>
      <FlatList
        data={Data}
        renderItem={(item) => <ListItem navigation={navigation} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

export default ClubSearch;