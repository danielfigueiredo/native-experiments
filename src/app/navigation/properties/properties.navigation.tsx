import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OpacityAnimated } from 'experiments/properties/opacity'
import { TranslateAnimated } from 'experiments/properties/translate';
import { ScaleAnimated } from 'experiments/properties/scale';
import { DimensionsAnimated } from 'experiments/properties/dimensions';
import { PositionAnimated } from 'experiments/properties/position';

import { navigationRoutes } from '../app.navigation.constants';
import { InterpolationAnimated } from 'experiments/properties/interpolation';

const Tab = createBottomTabNavigator();

export const PropertiesTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name={navigationRoutes.OpacityAnimated} component={OpacityAnimated} options={{ title: 'Opacity' }} />
    <Tab.Screen name={navigationRoutes.TranslateAnimated} component={TranslateAnimated} options={{ title: 'Translate' }} />
    <Tab.Screen name={navigationRoutes.ScaleAnimated} component={ScaleAnimated} options={{ title: 'Scale' }} />
    <Tab.Screen name={navigationRoutes.DimensionsAnimated} component={DimensionsAnimated} options={{ title: 'Dimensions' }} />
    <Tab.Screen name={navigationRoutes.PositionAnimated} component={PositionAnimated} options={{ title: 'Position' }} />
    <Tab.Screen name={navigationRoutes.InterpolationAnimated} component={InterpolationAnimated} options={{ title: 'Interpolation' }} />
  </Tab.Navigator>
);
