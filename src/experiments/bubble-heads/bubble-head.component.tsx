import React, { useRef, useEffect } from 'react';
import { Animated, View, Image, StyleSheet, PanResponder, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  circle: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleWrapper: {
    position: 'absolute',
    top: Dimensions.get('window').height,
    justifyContent: 'flex-end',
  },
});

export type BubbleHeadPosition = {
  radius: number;
  x: number;
  y: number;
};

export type BubbleHeadProps = {
  bubbleHeadPosition: BubbleHeadPosition;
  avatar: any;
};

export const BubbleHead = ({ bubbleHeadPosition, avatar }: BubbleHeadProps) => {
  const draggableAnimation = useRef(new Animated.ValueXY()).current;
  const draggableResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: draggableAnimation.x, dy: draggableAnimation.y }
      ], { useNativeDriver: false }),
      onPanResponderGrant: () => {
        draggableAnimation.extractOffset();
      },
      onPanResponderRelease: () => {
        draggableAnimation.flattenOffset();
      },
    })
  ).current;
  const slideUpAnimation = useRef( new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(slideUpAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [])
  const screenHeight = Dimensions.get('window').height;

  return (
    <View>
      <Animated.View
        style={{
          transform: [
            { translateX: draggableAnimation.x },
            { translateY: draggableAnimation.y }
          ],
        }}
        {...draggableResponder.panHandlers}
      >
        <View 
          style={[
            styles.circleWrapper,
            { left: bubbleHeadPosition.x }
          ]}
        >
          <Animated.View 
            style={{
              transform: [
                {
                  translateY: slideUpAnimation.interpolate({
                    inputRange: [0.01, 1],
                    outputRange: [0, (-1 * screenHeight) + bubbleHeadPosition.y ],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <Image 
              style={[
                styles.circle,
                { 
                  height: bubbleHeadPosition.radius, 
                  width: bubbleHeadPosition.radius, 
                  borderRadius: bubbleHeadPosition.radius,
                }
              ]}
              source={avatar}
            />
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};
