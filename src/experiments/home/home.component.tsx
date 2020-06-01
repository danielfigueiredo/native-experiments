import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Button } from 'react-native';
import { RootStackParamList } from 'app/navigation';
import { navigationRoutes } from 'app/navigation';

export type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export const Home: React.FunctionComponent<HomeProps> = ({ navigation }) => (
  <View>
    <Button 
      title="Bubble heads"
      onPress={() => navigation.navigate(navigationRoutes.BubbleHeads)}
    />
    <Button 
      title="Shared Element"
      onPress={() => navigation.navigate(navigationRoutes.SharedElement)}
    />
    <Button 
      title="Properties Animations"
      onPress={() => navigation.navigate(navigationRoutes.OpacityAnimated)}
    />
  </View>
);
