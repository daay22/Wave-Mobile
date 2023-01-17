import {React,View} from 'react';
import { Linking, StyleSheet, Image, Dimensions,Button, TouchableOpacity,Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Card, Title } from 'react-native-paper';

function getPictureSize(){
  return {
    width: Dimensions.get('window').width *.2,
    height: Dimensions.get('window').width *.2
  };
}

function sendSMS(name,address){
  var url = "sms:number?body${Headed to "+name+ "! /n/n"+ address+"}"
  Linking.openURL(url)
} 
 




function ListItem({navigation,data}) {
 // const {name= "Name",
   //       picture="",
     //   openingTIme="9:00",
       // closingTIme="2:00",
  //    location="231 green fern way",
    //} = data
  //  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const name= "Name of Place"
    const time = "Time of closing"
    const concat = name+" : "+ time
    const location = "Location of the Establishment"


  return (
      <Card style={{marginVertical:2}} mode="elevated" elevated="5" onPress={() => {navigation.navigate("Club Details")}}>
        <Card.Title leftStyle = {{width: Dimensions.get('window').width *.20,
    height: Dimensions.get('window').width *.20}}  left={() => <Image style={getPictureSize()} source={require('../assets/favicon.png')} />} titleStyle={{fontWeight: 'bold',color:'#4F47C7'}} title={concat} subtitle={location} />
        <Card.Actions>
          <Ionicons name="arrow-up-circle"  onPress={() => {navigation.navigate("Club Main", { name: 'Custom profile header' })}} size={32} color="#4F47C7" />
          <Ionicons name="share-social" onPress={()=>{ sendSMS(name,location)}} size={32} color="#4F47C7" />
        </Card.Actions>
      </Card>
  );
}

export default ListItem;

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
