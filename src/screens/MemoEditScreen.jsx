import React, { useState } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

const MemoEditScreen = (props) => {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;

  const [ body, setBody ] = useState(bodyText);

  const handleOnPress = () => {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memoList`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          console.log('error', error);
          Alert.alert(error.message);
        });
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={setBody}
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

MemoEditScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      bodyText: PropTypes.string,
    }),
  }).isRequired,
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

export default MemoEditScreen;
