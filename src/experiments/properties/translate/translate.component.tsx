import React, { useRef } from 'react';
import { StyleSheet, Animated, View, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'orange'
  },
});

export const TranslateAnimated = () => {
  const animationX = useRef(new Animated.Value(0)).current;
  const animationY = useRef(new Animated.Value(0)).current;
  const animatedStyles = {
    transform: [
      { translateX: animationX },
      { translateY: animationY },
    ],
  };
  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(
        animationX, 
        { toValue: 150, duration: 1500, useNativeDriver: true },
      ),
      Animated.timing(
        animationY,
        { toValue: -300, duration: 1500, useNativeDriver: true },
      ),
    ]).start(() => {
      animationX.setValue(0);
      animationY.setValue(0);
    });
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box, animatedStyles]} />
      </TouchableWithoutFeedback>
    </View>
  );
};
