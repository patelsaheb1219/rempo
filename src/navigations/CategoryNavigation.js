//Module Import
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'react-native-paper';

//File Imports
import CategoryOffer from '../components/screens/Categories/CategoryOffer/';
import CategoryShop from '../components/screens/Categories/CategoryShop/';
import OfferCards from '../components/screens/common/OfferCards';

//default const
const Tab = createMaterialTopTabNavigator();



const CategoryNavigation = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      tabBarOptions={{
        upperCaseLabel: false,
        style: {
          borderBottomColor: colors.primary,
        }
      }}
    >
      <Tab.Screen name="Shop" component={CategoryShop} />
      <Tab.Screen name="Offer" component={CategoryOffer} />
    </Tab.Navigator>
  );
}

export default CategoryNavigation;