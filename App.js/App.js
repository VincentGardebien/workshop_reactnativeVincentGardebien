import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, TextInput, View, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  const onPress = () => {
    Alert.alert('Bonjour')
  };

  const onChangeText = (text) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Me</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Type here..."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
  },
});