import React, { useEffect,useState } from 'react';
import {View, Text, SectionList,Pressable} from 'react-native';
import { Logs } from 'expo'
import DrinkItem from '../../component/DrinkItem'
import styles from "../../style.js"

Logs.enableExpoCliLogging()

///scrollToLocation Is the method to get to different headers.


var testData = [{Name:"Vodka Cranberry",Cost:8.5, Description:"You know the vibes", type:"Cocktail"}, 
{Name:"Bug juice shot",Cost:10, Description:"mixed with the blood of our fallen ancestors, a sweet treat of vodka, and crickets",type:"Cocktail"}, 
{Name:"Pinot Nior",Cost:10.50,type:"Wine"}, 
{Name:"Moscato",Cost:10.50,type:"Wine"}, 
{Name:"Pino Grigio",Cost:10.50,type:"Wine"}, 
{Name:"Bud Light",Cost:4.99,type:"Beer"},
{Name:"Budweiser",Cost:4.99,type:"Beer"},
{Name:"Coors Light",Cost:4.99,type:"Beer"} ]


const DATA = [
    {
      title: "Liquor",
      data: testData.filter(item => item.type=="Cocktail")
    },
    {
      title: "Wine",
      data: testData.filter(item => item.type=="Wine")
    },
    {
      title: "Drinks",
      data: testData.filter(item => item.type=="Beer")
    },
    {
      title:"",
      data:""
    }
  ];





function DrinkMenu({route,navigation}) {

  const [shoppingCart, setShoppingCart] = useState([]);
  const [bar, setBar] = useState(null);


  useEffect(()=>{
      setShoppingCart(route.params.ShoppingCart)
      setBar(route.params.Bar)
       
  },[])

  function printCart(){
    console.log(shoppingCart)
  }

    

    function goToCheckout(){
      var checkoutObject = {
        Bar:bar,
        Cart: shoppingCart
      }
      navigation.navigate("Checkout", { Data: checkoutObject })
    }

    const renderItem = ({ item }) => (
        <DrinkItem data={item} shoppingCart={shoppingCart} bar ={bar} />
      );

    return (
    <View style={{flex:1,marginHorizontal:8}}>
        <SectionList 
            sections={DATA}
            keyExtractor={(item,index) => item+index}
            renderItem = {renderItem}
            renderSectionHeader = {({section: {title}}) => (
                <Text style={styles.headerText}>{title}</Text>
            )}
        />
        
      {shoppingCart.length>0 &&
        <View style={[styles.footer]}>
        <Pressable onPress={() =>  {goToCheckout()}} style={[styles.submitButton]}>
          <Text  style={{color:"white", fontSize:32}}>View Cart({shoppingCart.length})</Text>
        </Pressable>
        </View>
        }
        
    </View>                                 
    );
  
}

export default DrinkMenu;
