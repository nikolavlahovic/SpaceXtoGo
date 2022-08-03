import {View, FlatList, ListRenderItem} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {CrewData, getCrewData} from '../services/crewService';
import CrewCard from '../components/CrewCard';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackRouteParams} from '../utils/types';

type Props = NativeStackScreenProps<StackRouteParams, 'CREW'>;

const CrewScreen = ({navigation}: Props) => {
  const [crew, setCrew] = useState<CrewData[] | null>(null);
  const getCrew = useCallback(async () => {
    try {
      const {data} = await getCrewData();
      setCrew(data);
    } catch (err) {
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
        onModalOpen={() =>
          navigation.push('CrewModal', {
            name: item.name,
            image: item.image,
            agency: item.agency,
            wikipedia: item.wikipedia,
            status: item.status,
          })
        }
      />
    );
  };
  const keyExtractor = ({id}: CrewData) => id;

  useEffect(() => {
    getCrew();
  }, [getCrew]);

  return (
    <FlatList data={crew} renderItem={renderItem} keyExtractor={keyExtractor}>
      <View />
    </FlatList>
  );
};

export default CrewScreen;
