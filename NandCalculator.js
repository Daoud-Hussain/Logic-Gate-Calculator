import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const NandCalculator = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
    }
  };

  return (
    <View>
      <Text style={myStyles.text}>NandCalculator</Text>
      
      <Text style={myStyles.inputText}>Enter first Input </Text>
      <TextInput 
        style = {myStyles.input}
        placeholder="Enter number 1"
        onChangeText={(text) => setNumber1(text)}
        keyboardType="numeric"
      />
      <Text style={myStyles.inputText}>Enter Second Input </Text>
      <TextInput
        placeholder="Enter number 2"
        style = {myStyles.input}
        onChangeText={(text) => setNumber2(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style = {myStyles.button} title="Add" onPress={addNumbers}>
        <Text style={myStyles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <Text style={myStyles.result}>Result: {result}</Text>
    </View>
  );
};

const myStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: "90%",
    padding: 10,
    marginHorizontal: 20,

  }, 
  text:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    padding: 10,
    marginTop: 10,

  }, 
  inputText: {
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 20,
    paddingBottom: 8,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "aquamarine",
    marginTop: 30,
    padding: 10,
    width: "90%",
    marginHorizontal: 20
  }, 
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20
  }, 
  result: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    padding: 10,
    marginTop: 10,

  }
})

export default NandCalculator;
