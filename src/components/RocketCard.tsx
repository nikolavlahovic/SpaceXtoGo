import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type RocketProps = {
  name: string;
  id: string;
};
const RocketCard = ({name, id}: RocketProps) => {
  return (
    <View style={styles.container}>
      <Text>name: {name}</Text>
      <Text>id: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    margin: 10,
  },
});

export default RocketCard;
