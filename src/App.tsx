import React from 'react';
import {createClient, Provider as UrqlProvider} from 'urql';
import {Stories} from './screens/Home.screen';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './screens/BottomTabs.navigator';

const client = createClient({
  url: 'http://localhost:3000/graphql',
});

export const App: React.FC = () => {
  return (
    <UrqlProvider value={client}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </UrqlProvider>
  );
};
