import React,{useEffect,useState} from 'react';
import {Platform, View, Text, FlatList, Pressable} from 'react-native';
import { Divider,Button } from 'react-native-paper';
import styles from "../../style.js"
import RecieptItem from "../../component/recieptRecord"
import { useStripe } from '@stripe/stripe-react-native';
import { Alert } from "react-native";


export default function Checkout({navigation,route}){
    const [totalBill,setTotalBill]=useState(0)
    const [subTotalBill,setSubTotalBill]=useState(0)
    const [barName,setBar]=useState("")
    const [barDescription,setBarDescription]=useState("")
    const [barWaitTime,setBarWaitTime]=useState("")
    const [reciept,setReciept]=useState("")
    const [clientSecret,setClientSecret] = useState("")
    const [ephemeralKey,setEphemeralKey] = useState("")
    const [customer,setCustomer] = useState("")
    
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  //  const [publisherKey,setpublisherKey]=useState("")

  const initializePaymentSheet = async () => {
    console.log('Im here: ',clientSecret, 'e:', ephemeralKey)
    setClientSecret()
    setEphemeralKey()
    setCustomer()
    console.log(route.params.Data.ClientKey)
    const { error } = await initPaymentSheet({
      merchantDisplayName: route.params.Data.Bar.name,
      customerId: route.params.Data.Customer,
      customerEphemeralKeySecret: route.params.Data.EphemeralKey,
      paymentIntentClientSecret: route.params.Data.ClientKey,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      /*defaultBillingDetails: {
        name: 'Jane Doe',
      }*/
    });
    if (error) {
        console.log(error)
        Alert.alert(error);
    //  setLoading(true);
    }
  }; 

  const openPaymentSheet = async () => {
    const { error, paymentOption } = await presentPaymentSheet();

    if (error) {
        console.log(error)
        if(error.code=="Canceled"){
          //do nothing
        }
        else{
          Alert.alert(`Error code: ${error.code}`, error.message);
        }
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
      console.log(paymentOption)
    }
  };

  useEffect(() => {
    setClientSecret(route.params.Data.ClientKey)
    setEphemeralKey(route.params.Data.EphemeralKey)
    setCustomer(route.params.Data.Customer)
    console.log(route.params.Data.ClientKey)
    initializePaymentSheet();
  }, []);

    useEffect(()=>{
        async function initialize(){
            setBar(route.params.Data.Bar.name)
            setBarDescription(route.params.Data.Bar.description)
            //setBarWaitTime(route.params.Data.Bar.CurrentWaitTime)
            setBarWaitTime('1-3 Minutes')
            setReciept(route.params.Data.Cart)
            var cost = 0;
            for(var iter=0;iter<route.params.Data.Cart.length;iter++){
                cost+= route.params.Data.Cart[iter].Cost
                console.log(route.params.Data.Cart[iter].Cost)
            }
            
            var total = cost+2.00;
            cost = cost.toFixed(2)
            setSubTotalBill(cost)
            total= total.toFixed(2)
            setTotalBill(total);
               /* const pKey = await service.getPublisherKey();
                if(pKey){
                    setpublisherKey(pKey)
                }*/
 
           
        } 
        initialize();         
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
          renderItem={(item) => <RecieptItem data={item}
          keyExtractor={(item) => item.index} />}
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
  
  
  
          <Pressable onPress={() =>  {openPaymentSheet()}} style={[styles.submitButton]}>
          <Text  style={{color:"white", fontSize:32}}>Checkout</Text>
        </Pressable>
         </View> 
        
    )
}