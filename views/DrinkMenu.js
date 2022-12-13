import React from 'react';
import { Button, View, Text, FlatList, SectionList, StyleSheet} from 'react-native';
import { Logs } from 'expo'
import DrinkItem from '../component/DrinkItem'
import styles from "../style.js"

Logs.enableExpoCliLogging()


var testData = [{Name:"Vodka Cranberry",Cost:8.5, Description:"You know the vibes", type:"Cocktail"}, 
{Name:"Bug juice shot",Cost:10, Description:"mixed with the blood of our fallen ancestors, a sweet treat of vodka, and crickets",type:"Cocktail"}, 
{Name:"Pinot Nior",Cost:10.50,type:"Wine"}, 
{Name:"Bud Light",Cost:4.99,type:"Beer"} ]


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
  ];




function DrinkMenu({navigation}) {

    var shoppingCart = []
    const renderItem = ({ item }) => (
        <DrinkItem data={item} />
      );

    return (
    <View>
        <SectionList 
            sections={DATA}
            keyExtractor={(item,index) => item+index}
            renderItem = {renderItem}
            renderSectionHeader = {({section: {title}}) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
    </View>                                 
    );
  
}

export default DrinkMenu;
