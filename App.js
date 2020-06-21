import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import styles from './styles';
import { turnOn, turnOff } from './tools/computer-controller'

export default function App() {

  const [ displayText, setDisplayText ] = React.useState('');

  const changeDisplay = (text) => {
    setDisplayText(text);
    setTimeout(() => { setDisplayText('') }, 3000);
  }

  return (
    <View style={styles.container}>

      <Button
        buttonStyle = { styles.button }
        titleStyle = { styles.buttonText }
        containerStyle = { styles.buttonCont }
        title = 'ON'
        type = 'outline'
        onPress = { () => { turnOn(changeDisplay) } }
      />

      <Button
        buttonStyle = { styles.button }
        titleStyle = { styles.buttonText }
        containerStyle = { styles.buttonCont }
        title = 'OFF'
        type = 'outline'
        onPress = { () => {console.log('off')} }
      />


      <Text
        style = {styles.responseText}>
        { displayText }
      </Text>

    </View>
  );
}

