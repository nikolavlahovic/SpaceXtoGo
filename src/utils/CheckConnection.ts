import {Platform} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export const checkConnectivity = () => {
  return new Promise(resolve => {
    if (Platform.OS === 'android') {
      NetInfo.fetch().then(state => {
        resolve(state.isInternetReachable);
      });
    } else {
      const unsubscribe = NetInfo.addEventListener(state => {
        unsubscribe();
        resolve(state.isInternetReachable);
      });
    }
  });
};
