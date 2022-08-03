import {PermissionsAndroid} from 'react-native';

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Camera permission granted');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const requestExternalStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the gallery');
    } else {
      console.log('Gallery permissions denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const checkCameraPermission = () => {
  const result = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );
  return result;
};
export const checkExternalStoragePermission = () => {
  const result = PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );
  return result;
};
