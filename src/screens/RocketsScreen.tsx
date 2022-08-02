import {View, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import RocketCard from '../components/RocketCard';
import {getRocketData, RocketData} from '../services/rocketService';

const RocketsScreen = ({}) => {
  const [rockets, setRockets] = useState<RocketData[] | null>(null);
  const getRockets = useCallback(async () => {
    try {
      const {data} = await getRocketData();
      setRockets(data);
    } catch (err) {
    } finally {
    }
  }, []);

  useEffect(() => {
    getRockets();
  }, [getRockets]);

  return (
    <FlatList
      data={rockets}
      renderItem={({item}) => (
        <RocketCard
          name={item.name}
          id={item.id}
          active={item.active}
          description={item.description}
          flickr_images={item.flickr_images}
          height={item.height}
          wikipedia={item.wikipedia}
        />
      )}
      keyExtractor={item => item.id}>
      <View />
    </FlatList>
  );
};

export default RocketsScreen;
