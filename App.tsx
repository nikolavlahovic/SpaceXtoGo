import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar animated={true} backgroundColor="#aaa" />
      <Text>App</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
  },
});
export default App;
