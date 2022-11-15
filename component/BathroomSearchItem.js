import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions,Button, TouchableOpacity,Alert } from 'react-native';

function getPictureSize(){
  return {
    width: Dimensions.get('window').width *.25,
    height: Dimensions.get('window').width *.25
  };
}


function BathroomSearchItem({navigation}) {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Club Details")}} style={styles.object}>
    <Image style={getPictureSize()} source={require('../assets/favicon.png')} />
    <View style ={styles.textbox}>
    <Text style={{fontWeight: 'bold',color:'#4F47C7'}}>1st floor Bathroom</Text>
     <Text>Location of the Establishment1</Text>
     <View style ={{flexDirection:"row"}}>
      <Button title="Inside" onPress={() => {navigation.navigate("Club Main")}} style={styles.button} />
      <Button title="Share" onPress={()=>{ Alert.alert("This should send a text message")}} style={styles.button}/>
     </View>
     </View>
    </TouchableOpacity>
  );
}

export default BathroomSearchItem;

const styles = StyleSheet.create({
  object: {
    marginLeft: Dimensions.get('window').width *.05,
    backgroundColor: '#ecf0f1',
    flexDirection: "row",
    marginVertical:15
    
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
