import React,{useState} from 'react';
import { Button, View, Text,TextInput, Image, Dimensions,Platform, StatusBar} from 'react-native';
import { Logs } from 'expo'
import styles from "../../style.js"
import {formatDollar} from '../../utilities.js'
import {DrinkTypes} from "../../StaticData.js"

Logs.enableExpoCliLogging()

function getPictureSize(){
    return {
      width: Dimensions.get('window').width *.60,
      height: Dimensions.get('window').width *.60,
      
    };
  }

  

function ClubDetails({route,navigation}) {

  const [description,setDescription]=useState("")

  const addtoCart = async() =>{

    var drinkObject = {
      Name:route.params.DrinkChoice.Name,
      Cost:route.params.DrinkChoice.Cost,
      Description:description,
      NumberOfDrinks:1
      // eventually will add custom obtions that may affect price
    }

    const cart = route.params.ShoppingCart
    cart.push(drinkObject)
  
    
    navigation.navigate("Drink Menu",{Bar:route.params.Bar,ShoppingCart:cart})
  }

    return (
    <View style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <View style={{justifyContent:"center", alignItems:"center"}}>
        <Image style={getPictureSize()} source={require('../../assets/favicon.png')} />
        </View>
        <View style={{backgroundColor:"white",marginTop:16,marginBottom:8, paddingLeft:16}}>
            <Text style={[styles.headerText]}>{route.params.DrinkChoice.Name}</Text>
            <Text style={[styles.headerSubLabel,styles.verticalFormat]} >{formatDollar(route.params.DrinkChoice.Cost)}</Text>
            {route.params.DrinkChoice.Description &&
            <Text style={[styles.verticalFormat,{color:"grey"}]}>{route.params.DrinkChoice.Description}</Text>
            }
        </View>

        <View style={{backgroundColor:"white",marginTop:8,marginBottom:16, paddingLeft:16}}>
        <Text style={[styles.headerSubLabel,styles.verticalFormat]} >{route.params.DrinkChoice.type + " Options"}</Text>

            {route.params.DrinkChoice.type==DrinkTypes.Cocktail &&
            <View>
                <Text>Cocktail DropDown</Text>

            </View>
            
            
            }
            {route.params.DrinkChoice.type==DrinkTypes.Wine &&
            <Text>Wine DropDown</Text>
            }
            {route.params.DrinkChoice.type==DrinkTypes.Beer &&
            <Text>Beer DropDown</Text>
            }
        </View>
        
        
        <View style={{backgroundColor:"white",marginTop:8,marginBottom:16, paddingHorizontal:16}}>
        <Text style={[styles.headerSubLabel,styles.verticalFormat]} >Special Instructions</Text>
        <TextInput
        style={{height: 100, backgroundColor:"lightgrey", textAlignVertical:"top", paddingTop:8,paddingLeft:8}}
        placeholder="Enter details here"
        onChangeText={newText => setDescription(newText)}
      />
                  <Text style={[styles.verticalFormat,{color:"grey"}]}>Can cause price increase</Text>

        </View>

        <View style={[styles.footer]}>
    <Button color="#4F47C7" style={[styles.submitButton]} title="Add to cart" onPress={() =>{addtoCart()}}/>

    </View>
    </View>                                 
    );
  
}

export default ClubDetails;