import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BookmarksScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmarks </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    Flex: 1,
    alignItems: 'center',
  },
});
