import React, { useState } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import CircleButton from '../components/CircleButton';
import firebase from 'firebase';

const MemoCreateScreen = (props) => {
  const { navigation } = props;
  const [ bodyText, setBodyText ] = useState('');

  const handleOnPress = () => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser.uid}/memoList`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
     })
      .then((docRef) => {
        console.log('created', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('error', error)
      });
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          onChangeText={setBodyText}
          multiline
          style={styles.input}
          autoFocus
        />
      </View>
      <CircleButton
        name='check'
        size={44}
        onPress={handleOnPress}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },

  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoCreateScreen;
