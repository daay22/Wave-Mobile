import React from 'react';
import { Button, View, Text} from 'react-native';
import { Logs } from 'expo'
import styles from "../style.js"
import {formatDollar} from '../utilities.js'
import {DrinkTypes} from "../StaticData.js"

Logs.enableExpoCliLogging()

function ClubDetails({route,navigation}) {

    return (
    <View>
        <Text style={styles.header}>{route.params.DrinkChoice.Name}</Text>
        <Text>{formatDollar(route.params.DrinkChoice.Cost)}</Text>
        <Text>{route.params.DrinkChoice.type}</Text>
        {route.params.DrinkChoice.type==DrinkTypes.Cocktail &&
        <Text>Cocktail DropDown</Text>
        }
        {route.params.DrinkChoice.type==DrinkTypes.Wine &&
        <Text>Wine DropDown</Text>
        }
        {route.params.DrinkChoice.type==DrinkTypes.Beer &&
        <Text>Beer DropDown</Text>
        }

        <Button title="Club Main" onPress={() => {navigation.navigate("Club Main")}}>Scan coming soon</Button>
    </View>                                 
    );
  
}

export default ClubDetails;