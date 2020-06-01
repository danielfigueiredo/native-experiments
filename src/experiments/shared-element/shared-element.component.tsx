import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Image, Animated } from 'react-native';
import { randomUUID } from 'utils/random';
import { Element } from './detail-element.component';

const berusAvatar = require('../../../assets/berus-avatar.jpg');
const catAvatar = require('../../../assets/cat-avatar.jpg');
const bearAvatar = require('../../../assets/bear-avatar.jpg');
const llamaAvatar = require('../../../assets/llama-avatar.jpg');
const gliderAvatar = require('../../../assets/glider-avatar.png');

const elements = [
  { id: randomUUID(), avatar: berusAvatar },
  { id: randomUUID(), avatar: catAvatar },
  { id: randomUUID(), avatar: bearAvatar },
  { id: randomUUID(), avatar: llamaAvatar },
  { id: randomUUID(), avatar: gliderAvatar },
];

type OpacityState = {
  [key: string]: () => void;
};

export const SharedElement: React.FunctionComponent = () => {
  const openProgress = useRef(new Animated.Value(0)).current;
  const [opacityState, setOpacityState] = useState<OpacityState>({});
  const onDetailsPress = (element: Element) => {
    const result = openProgress.interpolate({
      inputRange: [0.005, 0.01],
      outputRange: [1, 0],
    });
    // opacityState[element.id](result);
    // this.setState({ photo, isAnimating: true }, () => {
    //   Animated.timing(this.state.openProgress, {
    //     toValue: 1,
    //     duration: 300,
    //     useNativeDriver: true
    //   }).start(() => {
    //     this.setState({ isAnimating: false });
    //   });
    // });
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={elements}
        renderItem={({ item }) => <Image source={item.avatar} />}
      />
    </View>
  );
};