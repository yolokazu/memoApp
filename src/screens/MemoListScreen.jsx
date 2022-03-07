import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';

const MemoListScreen = (props) => {
  const { navigation } = props;
  const [ memoList, setMemoList ] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    console.log('useEffect');
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memoList`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemoList = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemoList.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemoList(userMemoList);
      }, (error) => {
        Alert.Alert(error.message);
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memoList={memoList} />
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
