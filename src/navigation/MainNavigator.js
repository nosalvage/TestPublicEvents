import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {Events, EventDetails} from '../screens';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  const defaultOptions = {headerTransparent: true};

  return (
    <MainStack.Navigator
      screenOptions={defaultOptions}
      initialRouteName="Events">
      <MainStack.Screen name="Events" component={Events} />
      <MainStack.Screen name="EventDetails" component={EventDetails} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
