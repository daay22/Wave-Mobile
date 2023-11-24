import React,{useEffect,useState} from 'react';
import {Platform, View, Text, FlatList} from 'react-native';
import { Divider,Button } from 'react-native-paper';
import styles from "../../style.js"
import RecieptItem from "../../component/recieptRecord"

export default function Checkout({navigation,route}){
    const [totalBill,setTotalBill]=useState(0)
    const [subTotalBill,setSubTotalBill]=useState(0)
    const [barName,setBar]=useState("")
    const [barDescription,setBarDescription]=useState("")
    const [barWaitTime,setBarWaitTime]=useState("")
    const [reciept,setReciept]=useState("")

    
    useEffect(()=>{
            console.log(route.params)
            setBar(route.params.Data.Bar.Name)
            setBarDescription(route.params.Data.Bar.Description)
            setBarWaitTime(route.params.Data.Bar.CurrentWaitTime)
            setReciept(route.params.Data.Cart)
            var cost = 0;
            for(var iter=0;iter<route.params.Data.Cart.length;iter++){
                cost+= route.params.Data.Cart[iter].Cost
                console.log(route.params.Data.Cart[iter].Cost)
            }
            
            var total = cost+2.00;
            cost = cost.toFixed(2)
            setSubTotalBill(cost)
            console.log(total+"is the total")
            total= total.toFixed(2)
            setTotalBill(total);
            console.log(cost)

            
    },[])
    return(
       <View>
        <View style={[{flexDirection:"row"}]}>
        <Button labelStyle={{fontSize: 30,paddingTop:20}} icon="map-marker"/>
        <View style={[{flexDirection:"column",marginTop:10}]}>
        <Text style={[styles.checkoutData,styles.verticalFormat]}>{barName}</Text>
        <Text>{barDescription}</Text>
        </View>
        
        </View>

        <View style={[{flexDirection:"row"}]}>
        <Button labelStyle={{fontSize: 30,paddingTop:20}} icon="clock-outline"/>
        <View style={[{flexDirection:"column",marginTop:10}]}>
        <Text style={[styles.checkoutData,styles.verticalFormat]}>{barWaitTime}</Text>
        </View>
        
        </View>
        

        <Text style={[styles.bigHeaderText,styles.primaryColor,styles.marginLeftHeader,styles.bottomHeaderMargin]}>Items</Text>
        <FlatList
        data={reciept}
        renderItem={(item) => <RecieptItem data={item} />}
        />
        
        <Divider style={[{backgroundColor:"black",margin:12,}]}/>
        <View style={[styles.stretchFormItems,styles.verticalFormat]}>
            <Text style={[styles.checkoutText,styles.marginLeftHeader,styles.bottomHeaderMargin]}>Subtotal</Text>
            <Text style={[styles.checkoutText,styles.marginLeftHeader,styles.bottomHeaderMargin]}>(${subTotalBill})</Text>
        </View>
        <View style={[styles.stretchFormItems,styles.verticalFormat]}>
            <Text style={[styles.checkoutText,styles.marginLeftHeader,styles.bottomHeaderMargin]}>Service Charge</Text>
            <Text style={[styles.checkoutText,styles.marginLeftHeader,styles.bottomHeaderMargin]}>(${2})</Text>
        </View>
        <View style={[styles.stretchFormItems,styles.verticalFormat]}>
            <Text style={[styles.checkoutText,styles.marginLeftHeader,styles.bottomHeaderMargin]}>Total</Text>
            <Text style={[styles.checkoutText,styles.marginLeftHeader,styles.bottomHeaderMargin]}>${totalBill}</Text>
        </View>



       
        
       </View> 
    )
}