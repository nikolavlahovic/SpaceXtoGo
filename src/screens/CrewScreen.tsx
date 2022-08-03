import {View, FlatList, ListRenderItem, Alert} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {CrewData, getCrewData} from '../services/crewService';
import CrewCard from '../components/CrewCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackRouteParams} from '../utils/types';
import useProps from '../hooks/useProps';
import {checkConnectivity} from '../utils/CheckConnection';

type Props = NativeStackScreenProps<StackRouteParams, 'CREW'>;

const CrewScreen = ({navigation}: Props) => {
  const context = useProps();
  const [crew, setCrew] = useState<CrewData[] | null>(null);
  const getCrew = useCallback(async () => {
    try {
      const hasInternetAccess = await checkConnectivity();
      const {data} = await getCrewData();
      setCrew(data);
      if (!hasInternetAccess) {
        Alert.alert(
          'Connection issue',
          'Make sure you are connected to the internet',
        );
      }
    } catch (err) {
      Alert.alert('Problem with the server', 'Api server not working');
    } finally {
    }
  }, []);
  const renderItem: ListRenderItem<CrewData> = ({item}: {item: CrewData}) => {
    return (
      <CrewCard
        name={item.name}
        status={item.status}
        wikipedia={item.wikipedia}
        image={item.image}
        agency={item.agency}
        onModalOpen={() => {
          context.setModalTitle(item.name);
          navigation.push('CrewModal', {
            name: item.name,
            image: item.image,
            agency: item.agency,
            wikipedia: item.wikipedia,
            status: item.status,
          });
        }}
      />
    );
  };
  const keyExtractor = ({id}: CrewData) => id;

  useEffect(() => {
    getCrew();
  }, [getCrew]);

  return (
    <FlatList data={crew} renderItem={renderItem} keyExtractor={keyExtractor} />
  );
};

export default CrewScreen;
