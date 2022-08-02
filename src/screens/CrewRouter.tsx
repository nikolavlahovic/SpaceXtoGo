import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CrewMemberScreen from './CrewMemberScreen';
import CrewScreen from './CrewScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

export const CrewRouter = () => {
  return (
    <Stack.Navigator initialRouteName="CREW">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="CREW" component={CrewScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal', headerShown: false}}>
        <Stack.Screen name="CrewModal" component={CrewMemberScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
export default CrewRouter;
