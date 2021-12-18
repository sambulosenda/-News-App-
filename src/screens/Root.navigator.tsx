import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabsNavigator} from './BottomTabs.navigator';
import {StoryDetailModal} from './StoryDetailsModal.screen';
import {RootStackParamList} from '../Types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="HomeBottom"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="StoryDetailsScreen"
        component={StoryDetailModal}
        options={({route}) => ({
          presentation: 'modal',
          title: route.params.title,
        })}
      />
    </RootStack.Navigator>
  );
};
