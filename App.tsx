import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar animated={true} backgroundColor="#aaa" />
        <Text style={styles.text}>App</Text>
      </SafeAreaView>
    </NavigationContainer>
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
