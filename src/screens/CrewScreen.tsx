import {View, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {CrewData, getCrewData} from '../services/crewService';
import CrewCard from '../components/CrewCard';

const CrewScreen = ({navigation}) => {
  const [crew, setCrew] = useState<CrewData[] | null>(null);
  const getCrew = useCallback(async () => {
    try {
      const {data} = await getCrewData();
      setCrew(data);
    } catch (err) {
    } finally {
    }
  }, []);

  useEffect(() => {
    getCrew();
  }, [getCrew]);

  return (
    <FlatList
      data={crew}
      renderItem={({item}) => (
        <CrewCard
          name={item.name}
          status={item.status}
          wikipedia={item.wikipedia}
          image={item.image}
          agency={item.agency}
          onModalOpen={() => navigation.navigate('CrewModal')}
        />
      )}
      keyExtractor={item => item.id}>
      <View />
    </FlatList>
  );
};

export default CrewScreen;
