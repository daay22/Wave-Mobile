import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EBE3F5',
    },
    inClubContainer: {
      flex: 1,
      backgroundColor: '#949296',
    },
    submitButton:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingBottom: 12,
      marginBottom:32,
      backgroundColor:"#4F47C7"
    },
    bigHeaderText:{
        fontWeight: 'bold',
        fontSize: 40,
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
      paddingBottom:32,
      justifyContent: 'space-between',
    
     },
  });


  export default styles;