import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
type Props = {
  agency: string;
};
const ImageComponent = ({agency}: Props) => {
  if (agency === 'NASA') {
    return (
      <Image
        source={require('../../assets/NASA.png')}
        style={styles.logoImage}
      />
    );
  }
  if (agency === 'SpaceX') {
    return (
      <Image
        source={require('../../assets/spaceX.png')}
        style={styles.spacexLogo}
      />
    );
  }
  if (agency === 'Axiom Space') {
    return (
      <Image
        source={require('../../assets/AxiomSpaceLogo.png')}
        style={styles.axiomSpace}
      />
    );
  }
  if (agency === 'JAXA') {
    return (
      <Image
        source={require('../../assets/JAXA.png')}
        style={styles.axiomSpace}
      />
    );
  }
  if (agency === 'ESA') {
    return (
      <Image
        source={require('../../assets/Esa.png')}
        style={styles.axiomSpace}
      />
    );
  }
  if (agency === 'Roscosmos') {
    return (
      <Image
        source={require('../../assets/Roscosmos.png')}
        style={styles.roscosmosLogo}
      />
    );
  } else {
    return <View />;
  }
};

const styles = StyleSheet.create({
  logoImage: {
    width: 60,
    height: 60,
    margin: 10,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  spacexLogo: {
    width: 120,
    height: 15,
    margin: 10,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  axiomSpace: {
    width: 100,
    height: 35,
    margin: 10,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  roscosmosLogo: {
    width: 100,
    height: 60,
    margin: 10,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
});
export default ImageComponent;
