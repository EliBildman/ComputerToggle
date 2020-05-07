import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles';
import { turnOn, turnOff } from './tools/computer-controller'

export default function App() {

  return (
    <View style={styles.container}>

      <Button
        buttonStyle = { styles.button }
        titleStyle = { styles.buttonText }
        containerStyle = { styles.buttonCont }
        title='ON'
        type='outline'
        onPress = { () => {console.log('on')} }
      />

      <Button
        buttonStyle = { styles.button }
        titleStyle = { styles.buttonText }
        containerStyle = { styles.buttonCont }
        title='OFF'
        type='outline'
        onPress = { () => {console.log('off')} }
      />

    </View>
  );
}

