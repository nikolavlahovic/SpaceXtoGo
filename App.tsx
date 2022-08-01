import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RocketsScreen from './src/screens/RocketsScreen';
import CrewMemberScreen from './src/screens/CrewMemberScreen';
import NavBar from './src/components/NavBar';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
        />
        <Stack.Navigator initialRouteName="Rockets">
          <Stack.Screen name="Rockets" component={RocketsScreen} />
          <Stack.Screen name="Crew" component={CrewMemberScreen} />
        </Stack.Navigator>
        <NavBar />
      </NavigationContainer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
  text: {
    color: '#000',
  },
});
export default App;
