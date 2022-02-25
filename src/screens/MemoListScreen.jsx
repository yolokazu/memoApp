import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircleButton from '../components/CircleButton';
import MemoList from '../components/MemoList';

const MemoListScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton
        name='plus'
        size={32}
        onPress={() => { navigation.navigate('Create') }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

export default MemoListScreen;
