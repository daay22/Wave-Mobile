import React from 'react';
import { Text, View, Dimensions,Button, TouchableOpacity } from 'react-native';
import styles from '../style';

function BarSelectionItem({navigation,data}) {
  return (
    <TouchableOpacity style={{padding:5}} onPress={()=>{navigation.navigate("Drink Menu",{Bar:data.item,ShoppingCart:[]})}} >
    <View>   
    <Text style={[styles.primaryColorHeader]}>{data.item.Name}</Text>
     <Text style={{paddingTop:5,paddingBottom:3}}>{data.item.Description}</Text>
     <Text style={{fontStyle: 'italic'}}>{data.item.CurrentWaitTime}</Text>
     </View>
    </TouchableOpacity>
  );
}

export default BarSelectionItem;