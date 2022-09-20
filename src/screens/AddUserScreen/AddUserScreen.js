import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import styles from './AddUserScreenStyles';
import { useDispatch } from 'react-redux';
import { addNewUserAsync } from '../../api';

const AddUserScreen = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [img, setImg] = useState('');

  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(
      addNewUserAsync({
        firstName: firstname,
        lastName: lastname,
        image: 'https://robohash.org/doloremquesintcorrupti.png',
      })
    );
    // fetchData();
  };

  //   const fetchData = () => {
  //     fetch('https://dummyjson.com/users/add', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         firstName: firstname,
  //         lastName: lastname,
  //         image: 'https://robohash.org/doloremquesintcorrupti.png',
  //         /* other product data */
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then(console.log);
  //   };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FirstName"
        value={firstname}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="lastName"
        value={lastname}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="image"
        value={img}
        onChangeText={setImg}
      />

      <TouchableOpacity style={styles.addBtn} onPress={addUser}>
        <Text style={styles.addBtnTitle}>Add User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUserScreen;
