import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

export const requestAttPermission = async () => {
  const result = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
  if (result === RESULTS.DENIED) {
    await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
  }
};
