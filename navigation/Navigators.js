//library
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

//screen
import TrailsScreen from '../screens/Trails';
import VideoScreen from '../screens/Video';
import AtelierScreen from '../screens/Atelier';
import HomeScreen from '../screens/Home';

//components
import DrawerContentScreen from '../screens/drawer/DrawerContent';

//constants
import { colorPrimary } from '../constants/colors';

//var
const headerOptions = {
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: colorPrimary,
  },
};

const styleBarBottom = {
  backgroundColor: colorPrimary,
  height: 60,
  borderTopColor: 'orange',
  borderTopWidth: 1,
};

//DrawerNaviagator
const DrawerNavigator = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colorPrimary,
          width: 240,
        },
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
      }}
      drawerContent={(props) => <DrawerContentScreen {...props} />}
    >
      <DrawerNavigator.Screen
        options={{ headerShown: false }}
        name='Trails'
        component={TrailsTabNavigator}
      />
      <DrawerNavigator.Screen
        options={{ headerShown: false }}
        name='Atelier'
        component={AttelierTabNavigator}
      />
    </DrawerNavigator.Navigator>
  );
};

//TrailsTabNavigator
const TabNavigator = createBottomTabNavigator();

const TrailsTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'TabHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name == 'TabVideo') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          }

          return <Ionicons name={iconName} size={size} color={'white'} />;
        },

        tabBarLabel: () => {
          let name;

          if (route.name == 'TabHome') {
            name = 'Home';
          } else if (route.name == 'TabVideo') {
            name = 'Video';
          }

          return (
            <Text
              style={{
                fontSize: 15,
                color: 'white',
              }}
            >
              {name}
            </Text>
          );
        },

        tabBarStyle: {
          ...styleBarBottom,
        },
      })}
      // initialRouteName='TabVideo'
    >
      <TabNavigator.Screen
        name='TabHome'
        component={HomeScreen}
        options={{ title: 'Home', fontSize: 200, headerShown: false }}
      />
      <TabNavigator.Screen
        name='TabVideo'
        component={TrailsStacksNavigator}
        options={{ title: 'Video', headerShown: false }}
      />
    </TabNavigator.Navigator>
  );
};

//AttelierTabNavigator
const AttelierTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == 'TabHome') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name == 'TabVideo') {
            iconName = focused ? 'videocam' : 'videocam-outline';
          }

          return <Ionicons name={iconName} size={size} color={'white'} />;
        },

        tabBarLabel: () => {
          let name;

          if (route.name == 'TabHome') {
            name = 'Home';
          } else if (route.name == 'TabVideo') {
            name = 'Video';
          }

          return (
            <Text
              style={{
                fontSize: 15,
                color: 'white',
              }}
            >
              {name}
            </Text>
          );
        },

        tabBarStyle: {
          ...styleBarBottom,
        },
      })}
    >
      <TabNavigator.Screen
        name='TabHome'
        component={HomeScreen}
        options={{ title: 'Home', fontSize: 200, headerShown: false }}
      />
      <TabNavigator.Screen
        name='TabVideo'
        component={AtelierStacksNavigator}
        options={{ title: 'Video', headerShown: false }}
      />
    </TabNavigator.Navigator>
  );
};

//TrailsStacksNavigator

const StackNavigator = createStackNavigator();

const TrailsStacksNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name='atelier'
        component={TrailsScreen}
        options={({ navigation }) => ({
          title: 'Trails',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons
                style={{ marginLeft: 20 }}
                name={'menu-outline'}
                size={40}
                color={'white'}
              />
            </TouchableOpacity>
          ),

          ...headerOptions,
        })}
      />
      <StackNavigator.Screen
        name='Video'
        component={VideoScreen}
        options={{
          headerStyle: {
            backgroundColor: colorPrimary,
            elevation: null,
          },
          headerTintColor: 'white',
        }}
      />
    </StackNavigator.Navigator>
  );
};

//AtelierStacksNavigator

const AtelierStacksNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name='atelier'
        component={AtelierScreen}
        options={({ navigation }) => ({
          title: 'Atelier',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons name={'menu-outline'} size={40} color={'white'} />
            </TouchableOpacity>
          ),
          ...headerOptions,
        })}
      />
      <StackNavigator.Screen
        name='Video'
        component={VideoScreen}
        options={{
          headerStyle: {
            backgroundColor: colorPrimary,
            elevation: null,
          },
          headerTintColor: 'white',
        }}
      />
    </StackNavigator.Navigator>
  );
};
