import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  image: {
    height: 140,
    // width: '100%',
    resizeMode: 'contain',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',

    margin: 10,
  },
  username: {
    fontSize: 16,
    color: '#000000',
    padding: 3,
  },
  userAge: {
    fontSize: 16,
    color: '#000000',
    padding: 3,
  },
});
