//library
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { SearchBar } from 'react-native-elements';

//utils
import api from '../utils/api';

//constants
import { colorPrimary, colorSecondary } from '../constants/colors';

//components
import Card from '../components/Card';

export default function Trails(props) {
  const [dataItems, setDataItems] = useState();
  const [showMore, setShowMore] = useState(false);
  const [search, setSearch] = useState('');

  const updateSearch = (search) => {
    setSearch(search);
  };

  useEffect(() => {
    const getItems = async () => {
      try {
        const resp = await api.get('/posts');
        const data = resp.data.slice(0, 12);
        const arrayItems = data.map((item) => {
          item.image = require('../assets/img/skyNigth.jpg');

          return item;
        });

        setDataItems(arrayItems);
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  const handleClickShowMore = () => {
    setShowMore(!showMore);
  };

  const handleClickItem = (item) => {
    props.navigation.navigate('Video', {
      item,
    });
  };

  const numberOfItems = dataItems && showMore ? dataItems.length : 6;

  return (
    <View style={styles.container}>
      {!dataItems ? (
        <View style={styles.spinner}>
          <ActivityIndicator size='large' color='#00ff00' />
        </View>
      ) : (
        <View style={styles.listItems}>
          <View style={styles.search}>
            <SearchBar
              placeholder='Rerchercher une video'
              onChangeText={updateSearch}
              value={search}
            />
          </View>
          <FlatList
            data={
              dataItems &&
              dataItems
                .slice(0, numberOfItems)
                .filter((element) =>
                  element.title.includes(search.toLowerCase())
                )
            }
            renderItem={({ item }) => (
              <Animatable.View
                animation='fadeIn'
                style={{ textAlign: 'center' }}
              >
                <Card onClick={handleClickItem} data={item} />
              </Animatable.View>
            )}
            keyExtractor={(item, index) => index}
            onEndReachedThreshold={1}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              paddingBottom: 70,
            }}
            numColumns={2}
            ListFooterComponent={() =>
              numberOfItems === 6 && (
                <Ionicons
                  name={'add-outline'}
                  size={50}
                  color={colorPrimary}
                  onPress={handleClickShowMore}
                />
              )
            }
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorSecondary,
  },

  listItems: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  search: {
    width: Dimensions.get('window').width,
  },

  spinner:{
    alignItems:'center',
    justifyContent:'center',
  }
});
