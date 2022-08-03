import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ImageComponent from './ImageComponent';
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
    <TouchableOpacity style={styles.container} onPress={() => onModalOpen()}>
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
        <ImageComponent agency={agency} />
      </View>
    </TouchableOpacity>
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
  logoImage: {
    width: 50,
    height: 50,
  },
});

export default CrewCard;
