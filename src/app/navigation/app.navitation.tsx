import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { BubbleHeads } from 'experiments/bubble-heads';
import { SharedElement } from 'experiments/shared-element';
import { Home } from 'experiments/home';

import { RootStackParamList } from './app.navigation.types';
import { navigationRoutes } from './app.navigation.constants';
import { PropertiesTabs } from './properties';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={navigationRoutes.Home}
      component={Home}
      options={{ title: 'Home' }}
    />
    <Stack.Screen
      name={navigationRoutes.BubbleHeads}
      component={BubbleHeads}
      options={{ title: 'Bubble Heads' }}
    />
    <Stack.Screen
      name={navigationRoutes.SharedElement}
      component={SharedElement}
      options={{ title: 'Shared Element Transition' }}
    />
    <Stack.Screen 
      name={navigationRoutes.OpacityAnimated}
      component={PropertiesTabs}
      options={{ title: 'Animated Properties' }}
    />
  </Stack.Navigator>
);
