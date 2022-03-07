import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import PropTypes from 'prop-types';
import { dateToString } from '../utils';

const MemoList = (props) => {
  const { memoList } = props;
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.memoListItem}
      onPress={() => { navigation.navigate('Detail', { id: item.id }) }}
    >
      <View>
        <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
        <Text style={styles.memoListItemDate}>{dateToString(item.updatedAt)}</Text>
      </View>
      <TouchableOpacity
      style={styles.memoDelete}
        onPress={() => Alert.alert('Are you sure to delete?')}
      >
        <Icon name='delete' size={24} color='#B0B0B0' />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={memoList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

MemoList.propTypes = {
  memoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    bodyText: PropTypes.string,
    updatedAt: PropTypes.instanceOf(Date),
  })).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

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
