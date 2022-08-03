import {View, FlatList, ListRenderItem} from 'react-native';
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
  const renderItem: ListRenderItem<RocketData> = ({
    item,
  }: {
    item: RocketData;
  }) => {
    return (
      <RocketCard
        name={item.name}
        id={item.id}
        active={item.active}
        description={item.description}
        flickr_images={item.flickr_images}
        height={item.height}
        wikipedia={item.wikipedia}
      />
    );
  };
  const keyExtractor = ({id}: RocketData) => id;

  useEffect(() => {
    getRockets();
  }, [getRockets]);

  return (
    <FlatList
      data={rockets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}>
      <View />
    </FlatList>
  );
};

export default RocketsScreen;
