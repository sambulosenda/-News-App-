import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './Home.screen';
import {BookmarksScreen} from './Bookmarks.Screen';
import {BottomTabParamsList} from '../Types';

const BottomTabs = createBottomTabNavigator<BottomTabParamsList>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Bookmarks" component={BookmarksScreen} />
    </BottomTabs.Navigator>
  );
};
