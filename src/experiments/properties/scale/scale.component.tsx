import React, { useRef } from 'react';
import { StyleSheet, Animated, View, TouchableWithoutFeedback, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 100,
    height: 50,
    backgroundColor: 'tomato'
  },
});

export const ScaleAnimated = () => {
  const animationX = useRef(new Animated.Value(1)).current;
  const animationY = useRef(new Animated.Value(1)).current;
  const animatedStyles = {
    transform: [
      { scaleX: animationX },
      { scaleY: animationY },
    ],
  };
  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(
        animationX, 
        { toValue: 0.5, duration: 1500, useNativeDriver: true },
      ),
      Animated.timing(
        animationY,
        { toValue: 2, duration: 1500, useNativeDriver: true },
      ),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(
          animationX, 
          { toValue: -2, duration: 1500, useNativeDriver: true },
        ),
        Animated.timing(
          animationY,
          { toValue: -0.5, duration: 1500, useNativeDriver: true },
        ),
      ]).start(() => {
        Animated.parallel([
          Animated.timing(
            animationX, 
            { toValue: 1, duration: 1500, useNativeDriver: true },
          ),
          Animated.timing(
            animationY,
            { toValue: 1, duration: 1500, useNativeDriver: true },
          ),
        ]).start();
      });
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <Text>Scale it!</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
