import React from 'react';
import { Image } from 'react-native';

export type Element = {
  id: string;
  avatar: any;
};

export type DetailElementProps = {
  element: Element;
};

export const DetailElement: React.FunctionComponent<DetailElementProps> = ({ element }: DetailElementProps) => (
  <Image source={element.avatar} />
);