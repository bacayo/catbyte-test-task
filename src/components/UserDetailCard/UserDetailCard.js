import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from './UserDetailCardStyles';

const UserDetailCard = ({
  firstName,
  lastName,
  image,
  age,
  address,
  postalCode,
  state,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.nameContainer}>
        {/* <Text style={styles.userName}>Full Name: </Text> */}
        <Text style={styles.userName}>
          Name: {firstName} {lastName}
        </Text>
      </View>
      <Text style={styles.age}>Age: {age}</Text>
      <Text style={styles.company}>Company: {address}</Text>
      <Text style={styles.company}>{postalCode}</Text>
      <Text style={styles.company}>{state}</Text>
    </View>
  );
};

export default UserDetailCard;
