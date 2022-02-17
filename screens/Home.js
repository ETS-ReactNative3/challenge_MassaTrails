// library
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

//constants
import { colorPrimary } from '../constants/colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://www.massatrails.fr/static/media/back_2.63c5623e.jpg',
        }}
        style={styles.background}
      >
        <Image source={require('../assets/img/logo.png')} style={styles.logo} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPrimary,
    flex: 1,
  },

  logo: {
    width: Dimensions.get('window').width * 0.8,
    height: 200,
    marginBottom: 15,
    resizeMode: 'contain',
  },

  background: {
    width: Dimensions.get('window').width,
    height: '100%',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
