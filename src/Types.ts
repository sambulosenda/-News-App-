import {NavigatorScreenParams} from '@react-navigation/core';

export type BottomTabParamsList = {
  Home: undefined;
  Bookmarks: undefined;
};

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabParamsList>;
  StoryDetailsScreen: {5: string; title: string};
};
