export type RootStackParamList = {
  Home: undefined;
  BubbleHeads: undefined;
  SharedElement: undefined;
  OpacityAnimated: undefined;
  TranslateAnimated: undefined;
  ScaleAnimated: undefined;
  DimensionsAnimated: undefined;
  PositionAnimated: undefined;
  InterpolationAnimated: undefined;
};

export type RootStackRoutes<T> = {
  readonly [P in keyof T]: P;
};  

export type NavigationRoutes = RootStackRoutes<RootStackParamList>;
