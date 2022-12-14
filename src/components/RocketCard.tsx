import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import React from 'react';
import {RocketData} from '../services/rocketService';
import ExternalLinkIcon from 'react-native-vector-icons/EvilIcons';

const RocketCard = ({
  name,
  active,
  flickr_images,
  height,
  wikipedia,
}: RocketData) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: flickr_images[1]}} style={styles.cardImage} />
      </View>
      <View style={styles.textView}>
        <Text>Name- {name}</Text>
        <Text>Height: {height.meters}m</Text>
        <Text>
          Rocket is currently
          <Text style={styles.boldText}>
            {active ? ' active' : ' inactive'}
          </Text>
        </Text>
      </View>
      <View>
        <ExternalLinkIcon
          size={40}
          name={'external-link'}
          color={'#000'}
          style={styles.linkIcon}
          onPress={() => Linking.openURL(wikipedia)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 10,
    elevation: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardImage: {
    width: 150,
    height: 250,
  },
  textView: {
    padding: 20,
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  linkIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});

export default RocketCard;
