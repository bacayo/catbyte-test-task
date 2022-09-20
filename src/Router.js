import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import AddUserScreen from './screens/AddUserScreen';

const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerTitle: 'Users', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="UserDetailScreen"
          component={UserDetailScreen}
          options={({ route }) => ({
            headerTitle: route.params.firstname + ' ' + route.params.lastName,
          })}
        />
        <Stack.Screen
          name="AddUserScreen"
          component={AddUserScreen}
          options={{ headerTitle: 'Add new user' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
