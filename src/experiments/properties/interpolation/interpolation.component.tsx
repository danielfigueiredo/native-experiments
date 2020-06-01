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
  },
});

export const InterpolationAnimated = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const interpolateBg = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(77,19,128)', 'rgb(237,233,7)'],
  });
  const interpolateText = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(237,233,7)', 'rgb(77,19,128)'],
  });
  const boxAnimatedStyles = {
    backgroundColor: interpolateBg,
  };
  const textAnimatedStyles = {
    color: interpolateText,
  };
  const startAnimation = () => {
    Animated.timing(
      animation, 
      { toValue: 1, duration: 1000, useNativeDriver: false },
    ).start(() => {
      Animated.timing(animation,
        { toValue: 0, duration: 1000, useNativeDriver: false },
      ).start();
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, boxAnimatedStyles]}>
          <Animated.Text style={textAnimatedStyles}>
            My color shifts
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};