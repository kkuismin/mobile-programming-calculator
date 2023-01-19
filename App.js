import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');

  const lisaa = () => {
    setResult(parseInt(text1) + parseInt(text2));
  }

  const vahenna = () => {
    setResult(parseInt(text1) - parseInt(text2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={text1 => setText1(text1)}
        value={text1}
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input}
        onChangeText={text2 => setText2(text2)}
        value={text2}
        keyboardType="numeric"
      />
      <View style={styles.buttons}>
        <Button onPress={lisaa} title="+" />
        <Button onPress={vahenna} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
    margin: 5,
  },
  buttons: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
});
