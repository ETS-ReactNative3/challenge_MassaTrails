//librayry
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AccordionList } from 'accordion-collapse-react-native';
import VideoItem from '../components/Video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-elements';

//constants
import { colorPrimary, colorSecondary } from '../constants/colors';

export default function Video(props) {
  const list = [
    {
      title: props.route.params.item.title,
      body: props.route.params.item.body,
    },
  ];

  const head = (item) => {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>{item.title}</Text>
        <Rating
          showRating
          imageSize={30}
          tintColor={colorPrimary}
          ratingBackgroundColor='red'
          ratingColo='red'
          showRating={false}
          style={{ marginVertical: 20 }}
        />
        <Ionicons
          name={'chevron-down-outline'}
          size={50}
          color={colorPrimary}
        />
      </View>
    );
  };

  const body = (item) => {
    return (
      <View>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <VideoItem></VideoItem>
      <AccordionList
        list={list}
        header={head}
        body={body}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: colorSecondary,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  body: {
    color: 'white',
  },
});
