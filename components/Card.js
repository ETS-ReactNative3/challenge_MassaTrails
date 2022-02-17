import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

//constants
import { colorPrimary } from '../constants/colors';

export default function Card(props) {

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => props.onClick(props.data)}>
        <ImageBackground source={props.data.image} style={styles.background}>
          <View style={styles.informations}>
            <Text style={styles.title}>{props.data.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorPrimary,
    marginHorizontal: 3,
    marginVertical: 6,
    borderRadius: 3,
    width: 200,
    height: 200,
    overflow: 'hidden',
  },
  background: {
    width: '100%',
    height: 200,
  },
  informations: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colorPrimary,
    width: '100%',
    height: 80,
  },
  title: {
    color: 'white',
    padding: 10,
  },
});
