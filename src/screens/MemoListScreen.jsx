/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import MemoList from '../components/MemoList';
import Button from '../components/Button';
import Loading from '../components/Loading';

const MemoListScreen = (props) => {
  const { navigation } = props;
  const [ memoList, setMemoList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      setIsLoading(true);
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
        setIsLoading(false);
      }, (error) => {
        Alert.Alert(error.message);
        setIsLoading(false);
      });
    }
    return unsubscribe;
  }, []);

  if (memoList.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text
            style={emptyStyles.title}
          >
            Let's create new memo !
          </Text>
          <Button
            label='Create New'
            style={emptyStyles.button}
            onPress={() => { navigation.navigate('Create') }}
          />
        </View>
      </View>
    );
  }

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
const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    marginBottom: 24,
  },

  button: {
    alignSelf: 'center',
  },
});

export default MemoListScreen;
