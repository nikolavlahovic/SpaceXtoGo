import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {StackRouteParams} from '../utils/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<StackRouteParams, 'CrewModal'>;

const CrewMemberScreen = ({route}: Props) => {
  const {name, image, status, agency} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>Name -</Text>
          <Text style={styles.text}>Agency -</Text>
          <Text style={styles.text}>Status -</Text>
        </View>
        <View style={styles.propsContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{agency}</Text>
          <Text style={styles.text}>{status}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#78a',
  },
  image: {
    width: 250,
    height: 350,
  },
  imageContainer: {
    backgroundColor: '#fff',
    elevation: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    backgroundColor: '#fff',
    flex: 1,
    elevation: 5,
    padding: 10,
  },
  propsContainer: {
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
});

export default CrewMemberScreen;
