import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import styles from './styles';
import { turnOn, turnOff } from './tools/computer-controller'

export default function App() {

  const [ displayText, setDisplayText ] = React.useState('');

  const changeDisplay = (text) => {
    console.log(text);
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
        onPress = { () => { turnOff(changeDisplay) } }
      />


      <Text
        style = {styles.responseText}>
        { displayText }
      </Text>

    </View>
  );
}

