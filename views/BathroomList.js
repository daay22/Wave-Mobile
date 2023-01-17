import React, { useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import BathroomSearchItem from "../component/BathroomSearchItem.js"
import styles from '../style'


var Data = [{ID:1,Name:"1st Floor Mens Bathroom",Gender: 1,Description:"In the back behind the bar to the left"},
{ID:2,Name:"1st Floor Womens Bathroom",Gender: 2,Description:"In the back behind the bar to the right"},
{ID:3,Name:"Rooftop Bathroom",Gender: 3,Description:"When first arriving up the stairs make a left and past the narrow hallway it will be on your right"}
]


function BathroomList({}) {

  return (
    <View style={[styles.inClubContainer]}>
      <FlatList
        data={Data}
        renderItem={(item) => <BathroomSearchItem data={item} />}
        keyExtractor={(item) => item.ID}
      />
      
    </View>
  );
}

export default BathroomList;