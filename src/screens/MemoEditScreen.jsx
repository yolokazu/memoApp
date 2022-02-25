import React from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import CircleButton from '../components/CircleButton';

const MemoEditScreen = (props) => {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.inputContainer}>
        <TextInput value='TEST' multiline style={styles.input} />
      </View>
      <CircleButton
        name='check'
        size={44}
        onPress={() => { navigation.goBack() }}
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

export default MemoEditScreen;
