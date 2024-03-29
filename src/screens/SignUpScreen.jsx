import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';

const SignUpScreen = (props) => {
  const { navigation } = props;
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleOnPress = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'List' }],
        });
      })
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder='Email Adrress'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
          secureTextEntry
          textContentType='password'
        />
        <Button
          label='Submit'
          onPress={() => { handleOnPress }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already resistered ?</Text>
          <TouchableOpacity>
            <Text
              style={styles.footerLink}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
              }}
            >
              Log in.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 24,
  },

  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footer: {
    flexDirection: 'row',
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },

  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
});

export default SignUpScreen;
