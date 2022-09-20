import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';

import UserDetailCard from '../../components/UserDetailCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../../api';

import styles from './UserDetailScreenStyles';

const UserDetailScreen = (props) => {
  const { firstname, id } = props.route.params;
  const { user } = useSelector((state) => state.usersSlice);

  //   const renderUser = ({ item }) => <UserDetailCard user={item} />;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  return (
    <View style={styles.container}>
      <UserDetailCard
        firstName={user?.firstName}
        lastName={user?.lastName}
        age={user?.age}
        image={user?.image}
        address={user?.company?.address?.address}
        postalCode={user?.company?.address?.postalCode}
        state={user?.company?.address?.state}
      />
    </View>
  );
};

export default UserDetailScreen;
