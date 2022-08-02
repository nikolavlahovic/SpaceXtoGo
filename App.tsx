import React, {useEffect} from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RocketsScreen from './src/screens/RocketsScreen';
import RocketIcon from 'react-native-vector-icons/AntDesign';
import IoIcon from 'react-native-vector-icons/Ionicons';
import {requestAttPermission} from './src/AppPermisions/iOSPermissions';
import {
  requestCameraPermission,
  requestExternalStoragePermission,
} from './src/AppPermisions/AndroidPermissions';
import CrewRouter from './src/screens/CrewRouter';
const App = () => {
  const Tab = createBottomTabNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestCameraPermission();
      requestExternalStoragePermission();
    }
    if (Platform.OS === 'ios') {
      requestAttPermission();
    }
  }, []);
  return (
    <SafeAreaView style={styles.wrapper}>
      <NavigationContainer theme={MyTheme}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle={'dark-content'}
        />
        <Tab.Navigator initialRouteName="Rockets">
          <Tab.Screen
            name="ROCKETS "
            component={RocketsScreen}
            options={{
              tabBarIcon: () => {
                return <RocketIcon size={30} name={'rocket1'} color={'#000'} />;
              },
              tabBarActiveTintColor: '#000',
              tabBarInactiveTintColor: '#ccc',
              headerTitleAlign: 'center',
              // headerLeft: () => (
              //   <IoIcon
              //     style={{marginLeft: 20, color: '#000'}}
              //     name={'arrow-back'}
              //     size={25}
              //   />
              // ),
            }}
          />
          <Tab.Screen
            name="CREW"
            component={CrewRouter}
            options={{
              tabBarIcon: () => {
                return <IoIcon size={30} name={'people'} color={'#000'} />;
              },
              tabBarActiveTintColor: '#000',
              tabBarInactiveTintColor: '#ccc',
              headerTitleAlign: 'center',
            }}
          />
        </Tab.Navigator>
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
  tabIcon: {
    height: 20,
    width: 20,
  },
});
export default App;
