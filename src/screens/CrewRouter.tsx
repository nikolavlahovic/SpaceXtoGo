import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CrewMemberScreen from './CrewMemberScreen';
import CrewScreen from './CrewScreen';
import React from 'react';
import {StackRouteParams} from '../utils/types';
import useProps from '../hooks/useProps';

const Stack = createNativeStackNavigator<StackRouteParams>();

export const CrewRouter = () => {
  const context = useProps();
  return (
    <Stack.Navigator initialRouteName="CREW">
      <Stack.Group screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="CREW" component={CrewScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{presentation: 'modal', headerTitleAlign: 'center'}}>
        <Stack.Screen
          name="CrewModal"
          component={CrewMemberScreen}
          options={{title: context.modalTitle}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default CrewRouter;
