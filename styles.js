import { StyleSheet } from 'react-native'

const backgroundColor = '#444444'
const buttonColor = '#FFFFFF';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText: {
      color: buttonColor,
      textAlign: 'center'
    },

    button: {
      width: '100%',
      height: 170,
      borderColor: buttonColor,
    },

    buttonCont: {
      marginTop: 10,
      marginBottom: 10
    },

    responseText: {
      marginTop: 30,
      color: 'white',
      
    }



  });
  

export default styles;