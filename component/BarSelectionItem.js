import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions,Button, TouchableOpacity,Alert } from 'react-native';

function getPictureSize(){
  return {
    width: Dimensions.get('window').width *.25,
    height: Dimensions.get('window').width *.25
  };
}


function ListItem({navigation}) {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Drink Menu")}} style={styles.object}>
    <View style ={styles.textbox}>
    <Text style={{fontWeight: 'bold',color:'#4F47C7'}}>Name of the Bar</Text>
     <Text>Descriton of location</Text>
     <Text>Wait time</Text>
     </View>
    </TouchableOpacity>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  object: {
    marginLeft: Dimensions.get('window').width *.05,
    backgroundColor: '#ecf0f1',
    flexDirection: "column",
    marginVertical:15
    
  },
  textbox:{
    marginLeft:Dimensions.get('window').width *.05,
    flex:1,
  },
  button:{
    marginHorizontal:10,
    paddingHorizontal:10
  }
});
