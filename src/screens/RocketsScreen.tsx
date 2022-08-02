import {View, Text, FlatList} from 'react-native';
import React from 'react';
import RocketCard from '../components/RocketCard';
type Item = {
  id: string;
  name: string;
};
const DATA: Item[] = [
  {
    id: 'dasd',
    name: 'glen',
  },
  {
    id: 'dasdd',
    name: 'glen',
  },
];
const RocketsScreen = ({}) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <RocketCard name={item.name} id={item.id} />}>
      <View></View>
    </FlatList>
  );
};

export default RocketsScreen;
