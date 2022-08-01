import {View, Text, StyleSheet} from 'react-native';
import {ReactComponent as RocketIcon} from '../../assets/Rocket.svg';
import React from 'react';

const NavBar = () => {
  return (
    <View style={styles.navigationWrapper}>
      <RocketIcon />
      <View></View>
      <View></View>
    </View>
  );
};
const styles = StyleSheet.create({
  navigationWrapper: {
    justifyContent: 'flex-end',
    elevation: 1,
    padding: 20,
  },
});
export default NavBar;
