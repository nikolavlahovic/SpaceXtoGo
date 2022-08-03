import {View, Text, Image, StyleSheet, Linking, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackRouteParams} from '../utils/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import ExternalLinkIcon from 'react-native-vector-icons/EvilIcons';
import {checkAttPermission} from '../AppPermisions/iOSPermissions';
import {
  checkCameraPermission,
  checkExternalStoragePermission,
} from '../AppPermisions/AndroidPermissions';

type Props = NativeStackScreenProps<StackRouteParams, 'CrewModal'>;

const CrewMemberScreen = ({route}: Props) => {
  const {name, image, status, agency, wikipedia} = route.params;
  const [permissions, setPermissions] = useState<boolean>(true);
  const noPermissions = () => (
    <View>
      <Text style={styles.error}>
        You need to grant permissions to view this page
      </Text>
    </View>
  );
  const checkPermissions = async () => {
    if (Platform.OS === 'ios') {
      const result = await checkAttPermission();
      if (result === 'granted') {
        setPermissions(true);
      } else {
        setPermissions(false);
      }
    } else {
      const cameraPermission = await checkCameraPermission();
      const galleryPermission = await checkExternalStoragePermission();
      if (cameraPermission && galleryPermission) {
        setPermissions(true);
      } else {
        setPermissions(false);
      }
    }
  };
  useEffect(() => {
    checkPermissions();
  }, []);
  if (!permissions) {
    return noPermissions();
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>Name </Text>
          <Text style={styles.text}>Agency </Text>
          <Text style={styles.text}>Status </Text>
        </View>
        <View style={styles.propsContainer}>
          <Text style={styles.textApi}>{name}</Text>
          <Text style={styles.textApi}>{agency}</Text>
          <Text style={styles.textApi}>{status}</Text>
        </View>
      </View>
      <View style={styles.wikiContainer}>
        <Text style={styles.textWiki}>More info</Text>
        <ExternalLinkIcon
          size={40}
          name={'external-link'}
          color={'#000'}
          onPress={() => Linking.openURL(wikipedia)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  image: {
    width: 250,
    height: 350,
  },
  imageContainer: {
    backgroundColor: '#fff',
    elevation: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 10,
  },
  propsContainer: {
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  textApi: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)',
  },
  wikiContainer: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  textWiki: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: 'bold',
  },
  error: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default CrewMemberScreen;
