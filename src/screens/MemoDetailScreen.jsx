import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

const MemoDetailScreen = (props) => {
  const { navigation, route } = props;
  const { id } = route.params;

  const [ memo, setMemo ] = useState(null);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memoList`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <View style={styles.memoBody}>
        <ScrollView>
          <Text style={styles.memoText}>
            {memo && memo.bodyText}
          </Text>
        </ScrollView>
      </View>
      <CircleButton
        name='pencil'
        size={44}
        style={{ top: 60, bottom: 'auto' }}
        onPress={() => { navigation.navigate('Edit', { id: memo.id, bodyText: memo.bodyText }) }}
      />
    </View>
  );
};

MemoDetailScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
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
