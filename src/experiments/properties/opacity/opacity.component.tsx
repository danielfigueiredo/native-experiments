import React, { useRef } from 'react';
import { Animated, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'orange'
  },
});

export const OpacityAnimated = () => {
  const animation = useRef(new Animated.Value(1)).current;
  const animatedStyles = {
    opacity: animation,
  };
  const startAnimation = () => {
    Animated.timing(
      animation, 
      { toValue: 0, duration: 350, useNativeDriver: true },
    ).start(() => {
      Animated.timing(animation,
        { toValue: 1, duration: 500, useNativeDriver: true },
      ).start();
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
