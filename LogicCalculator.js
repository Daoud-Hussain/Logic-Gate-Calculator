import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LogicCalculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculateGate = (gateType) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      if ((num1 === 0 || num1 === 1) && (num2 === 0 || num2 === 1)) {
        switch (gateType) {
          case 'NAND':
            setResult(num1 && num2 ? 0 : 1);
            break;
          case 'AND':
            setResult(num1 && num2 ? 1 : 0);
            break;
          case 'OR':
            setResult(num1 || num2 ? 1 : 0);
            break;
          case 'NOT':
            setResult(num1 === 0 ? 1 : 0);
            break;
          default:
            setResult('');
            break;
        }
      } else {
        Alert.alert('Enter 0 or 1 as input');
      }
    } else {
      Alert.alert('Enter valid numeric input');
    }
  };

  return (
    <View>
      <Text style={myStyles.text}>Logic Calculator</Text>

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
      <View style={myStyles.buttonContainer}>
        <TouchableOpacity style={myStyles.button} onPress={() => calculateGate('NAND')}>
          <Text style={myStyles.buttonText}>Calculate NAND</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.button} onPress={() => calculateGate('AND')}>
          <Text style={myStyles.buttonText}>Calculate AND</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.button} onPress={() => calculateGate('OR')}>
          <Text style={myStyles.buttonText}>Calculate OR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={myStyles.button} onPress={() => calculateGate('NOT')}>
          <Text style={myStyles.buttonText}>Calculate NOT</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: 'aquamarine',
    padding: 10,
    width: '45%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  result: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    marginTop: 10,
  },
});

export default LogicCalculator;
