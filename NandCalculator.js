import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const NandCalculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculateNand = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      if ((num1 === 0 || num1 === 1) && (num2 === 0 || num2 === 1)) {
        setResult(num1 && num2 ? 0 : 1);
      } else {
        Alert.alert('Enter 0 or 1 as input');
      }
    } else {
      Alert.alert('Enter valid numeric input');
    }
  };

  return (
    <View>
      <Text style={myStyles.text}>NandCalculator</Text>

      <Text style={myStyles.inputText}>Enter first Input </Text>
      <TextInput
        style={myStyles.input}
        placeholder="Enter 0 or 1"
        onChangeText={(text) => setNumber1(text)}
        keyboardType="numeric"
      />
      <Text style={myStyles.inputText}>Enter Second Input </Text>
      <TextInput
        placeholder="Enter 0 or 1"
        style={myStyles.input}
        onChangeText={(text) => setNumber2(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={myStyles.button} onPress={calculateNand}>
        <Text style={myStyles.buttonText}>Calculate NAND</Text>
      </TouchableOpacity>
      <Text style={myStyles.result}>Result: {result}</Text>
    </View>
  );
};

const myStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: '90%',
    padding: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
  inputText: {
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 20,
    paddingBottom: 8,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'aquamarine',
    marginTop: 30,
    padding: 10,
    width: '90%',
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
});

export default NandCalculator;
