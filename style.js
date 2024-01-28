import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBE3F5',
    },
    alignRight:{
      textAlign:"right",
      marginRight:8
    },
    marginLeftHeader:{
      marginLeft:12
    },
    inClubContainer: {
      flex: 1,
      backgroundColor: '#949296',
    },
    primaryColor:{
      color:"#4F47C7"
    },
    submitButton:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 6,
      paddingBottom: 6,
      marginBottom:12,
      backgroundColor:"#4F47C7",
      paddingHorizontal:8
      
    },

    bigHeaderText:{
        fontWeight: 'bold',
        fontSize: 40,
    },
    primaryColorHeader:{
      color:"#4F47C7",
      fontWeight: 'bold',
        fontSize: 40,
    },
    checkoutData:{
      color:"#4F47C7",
      fontWeight: 'bold',
        fontSize: 32,
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 32,
    },
    headerSubLabel:{
      fontWeight: 'bold',
      fontSize: 22
  },
  verticalFormat:{
    marginVertical:8
  },
    formLabel:{
        fontWeight: 'bold',
        fontSize: 22,
        marginTop:10
    },
    checkoutText:{
      fontSize:24,
    },
    

    textInputStyle:{
        backgroundColor:"white",
        alignSelf: "stretch",
        marginBottom:15

        
    },
    pictureAndTitleLayOut:{
      marginBottom:"25%",
      marginTop:"40%",
      marginLeft:"5%"
      
    },
    footer: {
     
      justifyContent: 'space-between',
    
     },
     stretchFormItems:{
     
        justifyContent: 'space-between',
        alignItems:"stretch",
        flexDirection:"row",
        marginVertical:24
     },
     bottomHeaderMargin:{
        marginBottom:24
     },
     bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      //marginBottom: 36
    },
     tabIcon: {
      fontSize:32
    },
    
  });


  export default styles;