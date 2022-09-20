import { View, Text, Pressable, Image } from 'react-native';
import React from 'react';

import styles from './UserCardStyles';
import { useNavigation } from '@react-navigation/native';

const UserCard = ({ user }) => {
  const navigation = useNavigation();

  const navigateDetail = () => {
    navigation.navigate('UserDetailScreen', {
      firstname: user.firstName,
      lastName: user.lastName,
      image: user.image,
      age: user.age,
      company: user.company,
      id: user.id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={navigateDetail}>
        <Image style={styles.image} source={{ uri: user.image }} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>
            {user.firstName} {user.lastName},
          </Text>
          <Text style={styles.userAge}>{user.age}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default UserCard;
