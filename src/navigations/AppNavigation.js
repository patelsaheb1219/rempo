//Module Imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'react-native-paper';
import { Platform, StatusBar } from 'react-native';

//File Imports
import Home from '../components/screens/Home';
import Profile from '../components/screens/Profile';
import Notification from '../components/screens/Notification';
import Categories from '../components/screens/Categories';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        initialRouteName={"Home"}
        options={{
          style: {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            //Useful for other screen
            headerTitleAlign: 'center'
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const CategoriesScreen = () => {
  const { colors } = useTheme();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTitleAlign: 'center'
            //Useful for other screen
            // headerLeft: (props) => {
            //   return <HeaderBackButton 
            //     { ...props }
            //     onPress={() => console.log('back')}
            //   />
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const NotificationScreen = () => {
  const { colors } = useTheme();
  return (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleAlign: 'center'
          //Useful for other screen
          // headerLeft: (props) => {
          //   return <HeaderBackButton 
          //     { ...props }
          //     onPress={() => console.log('back')}
          //   />
          // },
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
}

const ProfileScreen = () => {
  const { colors } = useTheme();
  return (
  <NavigationContainer
    independent={true}
  >
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleAlign: 'center'
          //Useful for other screen
          // headerLeft: (props) => {
          //   return <HeaderBackButton 
          //     { ...props }
          //     onPress={() => console.log('back')}
          //   />
          // },
        }}
      />
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