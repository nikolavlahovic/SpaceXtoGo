import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import ExternalLinkIcon from 'react-native-vector-icons/EvilIcons';
type CrewProps = {
  name: string;
  agency: string;
  wikipedia: string;
  image: string;
  status: string;
  onModalOpen: () => void;
};
export const CrewCard = ({
  name,
  agency,
  image,
  status,
  onModalOpen,
}: CrewProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: image}} style={styles.cardImage} />
      </View>
      <View style={styles.textView}>
        <Text>Name - {name}</Text>
        <Text>Agency - {agency}</Text>
        <Text>
          Astronaut is currently
          <Text style={styles.boldText}>{` ${status}`}</Text>
        </Text>
      </View>
      <View>
        <ExternalLinkIcon
          size={40}
          name={'external-link'}
          color={'#000'}
          style={styles.linkIcon}
          onPress={() => onModalOpen()}
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

export default CrewCard;
