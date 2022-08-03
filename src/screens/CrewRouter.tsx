import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CrewMemberScreen from './CrewMemberScreen';
import CrewScreen from './CrewScreen';
import React, {useState} from 'react';
import {StackRouteParams} from '../utils/types';

const Stack = createNativeStackNavigator<StackRouteParams>();

export const CrewRouter = () => {
  const [modalTitle, setModalTitle] = useState<string>('Crew Modal');
  return (
    <Stack.Navigator initialRouteName="CREW">
      <Stack.Group screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="CREW" component={CrewScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{presentation: 'modal', headerTitleAlign: 'center'}}>
        <Stack.Screen name="CrewModal" component={CrewMemberScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default CrewRouter;
