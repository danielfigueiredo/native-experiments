import React, { useRef } from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangle: {
    backgroundColor: 'pink',
    position: 'absolute',
    height: 200,
  },
});

export const PositionAnimated = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const animatedStyles = {
    top: animation,
    left: animation,
    right: animation,
  };
  const startAnimation = () => {
    Animated.timing(
      animation, 
      { toValue: 100, duration: 1000, useNativeDriver: false },
    ).start(() => {
      Animated.timing(animation,
        { toValue: 0, duration: 1000, useNativeDriver: false },
      ).start();
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.rectangle, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};