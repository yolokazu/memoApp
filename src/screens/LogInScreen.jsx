import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AppBar from '../components/AppBar';
import Button from '../components/Button';

const LogInScreen = () => (
  <View style={styles.container}>
    <AppBar />
    <View style={styles.inner}>
      <Text style={styles.title}>Log In</Text>
      <TextInput style={styles.input} value='Email Adrress' />
      <TextInput style={styles.input} value='Password' />
      <Button label='Submit' />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Not resistered ?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Sign up here !</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

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

export default LogInScreen;
