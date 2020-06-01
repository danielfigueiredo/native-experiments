import React, { useRef } from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const squareSide = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: squareSide,
    height: squareSide,
    backgroundColor: 'purple',
  },
  secondBox: {
    width: squareSide,
    height: squareSide,
    backgroundColor: 'blue',
  },
});

export const DimensionsAnimated = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const interpolateY = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -20]
  });
  const animatedStyles = {
    transform: [
      { scaleY: animation },
      { translateY: interpolateY },
    ],
  };
  const startAnimation = () => {
    Animated.timing(
      animation, 
      { toValue: 2, duration: 750, useNativeDriver: true },
    ).start(() => {
      Animated.timing(animation,
        { toValue: 1, duration: 1000, useNativeDriver: true },
      ).start();
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <View>
          <View style={styles.secondBox} />
          <Animated.View style={[styles.box, animatedStyles]} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};