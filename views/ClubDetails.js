import React from 'react';
import { Button, View, Text} from 'react-native';
import { Logs } from 'expo'

Logs.enableExpoCliLogging()

function ClubDetails({navigation}) {

    return (
    <View>
        <Text>Create a component that will be the detail page of a Club</Text>
        <Text>Create a component that will be a list item for all data.</Text>

        <Button title="Women's Bathroom" onPress={() => {navigation.navigate("Club Main")}}>Scan coming soon</Button>
    </View>                                 
    );
  
}

export default ClubDetails;