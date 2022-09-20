import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getUserAsync } from '../../api';
import UserCard from '../../components/UserCard/UserCard';
import styles from './HomeScreenStyles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //get user array
  const { users } = useSelector((state) => state.usersSlice);

  //render user
  const renderUsers = ({ item }) => <UserCard user={item} />;

  const handleAddUser = () => {
    navigation.navigate('AddUserScreen');
  };

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList data={users} renderItem={renderUsers} numColumns={2} />
      <TouchableOpacity onPress={handleAddUser} style={styles.addUserBtn}>
        <Text style={styles.addUserBtnTitle}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
