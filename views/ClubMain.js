import React from 'react';
import { Button, View, Text} from 'react-native';
import { Logs } from 'expo'

Logs.enableExpoCliLogging()

function ClubMain({navigation}) {

    return (
    <View>
        <Text>Create a component that will be the Main Page for the club</Text>
        <Text>Create a component that will be a list item for all data.</Text>

        <Button title="Order a Drink" onPress={() => {navigation.navigate("ClubMain")}}></Button>
        <Button title="Bathroom List" onPress={() => {navigation.navigate("ClubMain")}}></Button>
    </View>                                 
    );
  
}

export default ClubMain;