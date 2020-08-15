//Module Imports
import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';

//File Imports
import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';
import Notification from '../components/screens/Notification';
import Categories from '../components/screens/Categories';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const CategoriesScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const NotificationScreen = () => {
  return (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  </NavigationContainer>
)
}

const ProfileScreen = () => {
  return (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  </NavigationContainer>
)
}

const AppNavigation = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer independent={true}>
      <BottomTab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          activeTintColor: colors.primary,
        }}
        keyboardHidesTabBar
      >
        <BottomTab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="categories"
          component={CategoriesScreen}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="briefcase" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="notifications"
          component={NotificationScreen}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <BottomTab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;