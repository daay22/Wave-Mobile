import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions,Button, TouchableOpacity,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {formatDollar} from '../utilities.js'
import {DrinkTypes} from '../StaticData.js'

function getPictureSize(){
  return {
    width: Dimensions.get('window').width *.25,
    height: Dimensions.get('window').width *.25
  };
}

function ListItem({data}) {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate({name:"Drink Selection",params:{DrinkChoice:data}})}} style={styles.object}>
    <View style ={styles.textbox}>
    <Text style={{fontWeight: 'bold',  fontSize:20  }}>{data.Name}</Text>
     <Text style ={{paddingVertical:7}}>{formatDollar(data.Cost)}</Text>
     <Text>{data.Description}</Text>

     </View>
     <Image style={getPictureSize()} source={require('../assets/favicon.png')} />
    </TouchableOpacity> 
  );
}

export default ListItem;

const styles = StyleSheet.create({
  object: {
    marginLeft: Dimensions.get('window').width *.05,
    flexDirection: "row",
    marginVertical:15,

    
  },
  textbox:{
    marginLeft:Dimensions.get('window').width *.05,
    flexDirection:"column",
    flex:1,
  },
  button:{
    marginHorizontal:10,
    paddingHorizontal:10
  }
});
