import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const correctUsername = 'admin';
  const correctPassword = 'password123';

  const validateCredentials = () => {
    if (username === correctUsername && password === correctPassword) {
      setMessage('Login successful! Welcome!');
    } else if (username !== correctUsername && password !== correctPassword) {
      setMessage('Both username and password are incorrect.');
    } else if (username !== correctUsername) {
      setMessage('Username is incorrect.');
    } else if (password !== correctPassword) {
      setMessage('Password is incorrect.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={validateCredentials} />

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  },
});

export default LoginScreen;
