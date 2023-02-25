import React from 'react';
import { Button, View, Text, FlatList} from 'react-native';
import { Logs } from 'expo'
import BarSelectionItem from '../../component/BarSelectionItem.js'

Logs.enableExpoCliLogging()


var testData = [{Name:"1st Floor Bar",Description:"Bar on the left once you enter", CurrentWaitTime:"1-3 Minutes"}, {Name:"2nd Floor Bar",Description:"Bar on the backwall of 2nd floor", CurrentWaitTime:"10-12 Minutes"}, {Name:"Rooftop Bar",Description:"", CurrentWaitTime:"Open"}]

function BarSelection({navigation}) {

    return (
    <View>
        <FlatList
        data={testData}
        renderItem={(item) => <BarSelectionItem data={item} navigation={navigation} />}
      />
    </View>                                 
    );
  
}

export default BarSelection;