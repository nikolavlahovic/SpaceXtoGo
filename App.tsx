import React, {useEffect} from 'react';
import {
  Button,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RocketsScreen from './src/screens/RocketsScreen';
import CrewScreen from './src/screens/CrewScreen';
import RocketIcon from 'react-native-vector-icons/AntDesign';
import CrewIcon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const Tab = createBottomTabNavigator();
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  useEffect(() => {
    requestCameraPermission();
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
        />
        <Tab.Navigator initialRouteName="Rockets">
          <Tab.Screen
            name="Rockets "
            component={RocketsScreen}
            options={{
              tabBarIcon: () => {
                return <RocketIcon size={30} name={'rocket1'} color={'#000'} />;
              },
              tabBarActiveTintColor: '#000',
              tabBarInactiveTintColor: '#ccc',
              headerTitleAlign: 'center',
            }}
          />
          <Tab.Screen
            name="Crews"
            component={CrewScreen}
            options={{
              tabBarIcon: () => {
                return <CrewIcon size={30} name={'people'} color={'#000'} />;
              },
              tabBarActiveTintColor: '#000',
              tabBarInactiveTintColor: '#ccc',
              headerTitleAlign: 'center',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <Button title={'press'} onPress={() => requestCameraPermission()} />
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
  tabIcon: {
    height: 20,
    width: 20,
  },
});
export default App;
