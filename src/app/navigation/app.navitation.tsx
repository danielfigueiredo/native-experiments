import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { BubbleHeads } from 'experiments/bubble-heads';

const Stack = createStackNavigator();

export const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="BubbleHeads"
      component={BubbleHeads}
      options={{ title: 'Welcome' }}
    />
  </Stack.Navigator>
);
