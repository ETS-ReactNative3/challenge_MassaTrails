import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function VideoItem() {
  const setOrientation = () => {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  };
  return (
    <View style={styles.card}>
      <Video
        style={styles.video}
        source={require('../assets/mp4/Explorastro_demo.mp4')}
        useNativeControls
        resizeMode='cover'
        isLooping
        onFullscreenUpdate={setOrientation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: Dimensions.get('window').width,
    height: 300,
  },
});
