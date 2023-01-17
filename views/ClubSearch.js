import React, { useState, useEffect} from 'react';
import {View, StyleSheet, FlatList,Alert} from 'react-native';
import ListItem from "../component/ListItem.js";
import * as Location from 'expo-location';
import { Searchbar } from 'react-native-paper';

var Data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]


function ClubSearch({navigation}) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchQuery, setSearchQuery] =useState(null);

  const onChangeSearch = query => setSearchQuery(query);

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
    Alert.alert("Lat: "+ location.coords.latitude+" Long: "+ location.coords.longitude)
  }
//<Text>{text}</Text>



  return (
    <View>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
   
    
      
      <FlatList
        data={Data}
        renderItem={(item) => <ListItem navigation={navigation} />}
        keyExtractor={(item) => item}
      />
      
    </View>
  );
}

export default ClubSearch;

const styles = StyleSheet.create({
  buttonActive:{
    color:"#white",
    backgrounColor:"#4F47C7" 
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 40,
  },
});