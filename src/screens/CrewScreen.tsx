import {View, Text} from 'react-native';
import React from 'react';

type CrewProps = {
  name: string;
};

const CrewScreen = ({name}: CrewProps) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default CrewScreen;
