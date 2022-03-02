import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';

const MemoList = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('Detail') }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>TEST</Text>
          <Text style={styles.memoListItemDate}>2022/02/21 22:00</Text>
        </View>
        <TouchableOpacity
        style={styles.memoDelete}
          onPress={() => Alert.alert('Are you sure to delete?')}
        >
          <Icon name='delete' size={24} color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('Detail') }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>TEST</Text>
          <Text style={styles.memoListItemDate}>2022/02/21 22:00</Text>
        </View>
        <TouchableOpacity
        style={styles.memoDelete}
          onPress={() => Alert.alert('Are you sure to delete?')}
        >
          <Icon name='delete' size={24} color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('Detail') }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>TEST</Text>
          <Text style={styles.memoListItemDate}>2022/02/21 22:00</Text>
        </View>
        <TouchableOpacity
        style={styles.memoDelete}
          onPress={() => Alert.alert('Are you sure to delete?')}
        >
          <Icon name='delete' size={24} color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 1,
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },

  memoDelete: {
    padding: 8,
  },
});

export default MemoList;
