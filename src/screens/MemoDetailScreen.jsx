import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

const MemoDetailScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>Test</Text>
        <Text style={styles.memoDate}>2022-02-22 12:40</Text>
      </View>
      <View style={styles.memoBody}>
        <ScrollView>
          <Text style={styles.memoText}>
            text text text text text text
            text text text text text text
            text text text text text text
          </Text>
        </ScrollView>
      </View>
      <CircleButton text='+' style={{ top: 160, bottom: 'auto' }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,
  },

  memoTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#FFFFFF',
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },

  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default MemoDetailScreen;
