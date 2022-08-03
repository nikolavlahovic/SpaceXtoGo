import {View, FlatList, ListRenderItem, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import RocketCard from '../components/RocketCard';
import {getRocketData, RocketData} from '../services/rocketService';
import {checkConnectivity} from '../utils/CheckConnection';

const RocketsScreen = ({}) => {
  const [rockets, setRockets] = useState<RocketData[] | null>(null);
  const getRockets = useCallback(async () => {
    try {
      const hasInternetAccess = await checkConnectivity();
      const {data} = await getRocketData();
      setRockets(data);
      if (!hasInternetAccess) {
        Alert.alert(
          'Connection issue',
          'Make sure you are connected to the internet',
        );
      }
    } catch (err) {
      Alert.alert('Problem with the server', 'Api server not working');
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
      keyExtractor={keyExtractor}
    />
  );
};

export default RocketsScreen;
