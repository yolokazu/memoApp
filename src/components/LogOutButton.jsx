import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

const LogOutButton = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    firebase.auth().signOut()
    .then(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    })
    .catch((error) => {
      Alert.alert(error.message);
    });
  };

  return (
    <TouchableOpacity onPress={handleOnPress} style={styles.container}>
      <Text style={styles.label}>Log out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export default LogOutButton;
