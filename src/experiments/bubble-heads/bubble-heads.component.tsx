import React from 'react';
import { Dimensions } from 'react-native';
import { BubbleHead, BubbleHeadPosition } from './bubble-head.component';

const berusAvatar = require('../../../assets/berus-avatar.jpg');
const catAvatar = require('../../../assets/cat-avatar.jpg');
const bearAvatar = require('../../../assets/bear-avatar.jpg');
const llamaAvatar = require('../../../assets/llama-avatar.jpg');
const gliderAvatar = require('../../../assets/glider-avatar.png');

export type BubbleHeadInfo = {
  avatar: any;
  
};

export type BubbleHeadsProps = {
  bubbleHeads: BubbleHeadInfo[];
};

const bubbleHeads: BubbleHeadInfo[] = [
  { avatar: berusAvatar },
  { avatar: catAvatar },
  { avatar: bearAvatar },
  { avatar: llamaAvatar },
  { avatar: gliderAvatar },
];

const getRandomWithinRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
}

const hasCollision = (
  bubbleHeadPositions: BubbleHeadPosition[],
  bubbleHead: BubbleHeadPosition,
): boolean => {
  return !!bubbleHeadPositions.find((existingBubbleHead) => {
    const xSquaredDiff = Math.pow(existingBubbleHead.x - bubbleHead.x, 2);
    const ySquaredDiff = Math.pow(existingBubbleHead.y - bubbleHead.y, 2);
    const distance = Math.abs(Math.sqrt(xSquaredDiff + ySquaredDiff));
    return distance <= bubbleHead.radius;
  });
};

const windowDimension = Dimensions.get('window');

const randomlyPositionBubbleHeads = (bubbleHeads: BubbleHeadInfo[]) => {
  const radius = 100;
  const diameter = radius * 2;
  const windowHeight = windowDimension.height - diameter;
  const windowWidth = windowDimension.width - diameter;
  const bubbleHeadPositions: BubbleHeadPosition[] = [];
  let i = 0;

  while(i < bubbleHeads.length) {
    const x = getRandomWithinRange(0, windowWidth);
    const y = getRandomWithinRange(0, windowHeight);
    const position: BubbleHeadPosition = {
      radius,
      x: x,
      y: y,
    }; 
    if (!hasCollision(bubbleHeadPositions, position)) {
      bubbleHeadPositions.push(position);
      i++;
    }
  }

  return bubbleHeadPositions;
};

export const BubbleHeads = () => {
  const bubbleHeadPositions = randomlyPositionBubbleHeads(bubbleHeads);
  return bubbleHeads.map((bubbleHead: BubbleHeadInfo, index: number) => (
    <BubbleHead 
      bubbleHeadPosition={{
        x: bubbleHeadPositions[index].x,
        y: bubbleHeadPositions[index].y,
        radius: bubbleHeadPositions[index].radius,
      }}
      avatar={bubbleHead.avatar}
    />
  ));
};
