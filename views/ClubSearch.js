import * as React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';
import ListItem from "../component/ListItem.js";
import Constants from 'expo-constants';

var Data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function ClubSearch({navigation}) {
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={(item) => <ListItem navigation={navigation} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

export default ClubSearch;