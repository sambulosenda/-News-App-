import * as React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Types';
import { StoryByIdQueryVariables, StorySummaryFieldsFragment } from '../graphql/__generated__/operationTypes';

export const Story: React.FC <{item: StoryByIdQueryVariables}> = ({item}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('StoryDetailsScreen', {
          id: item.id,
          title: item.title,
        })
      }>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.summary}>{item.summary}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 18,
    color: 'grey',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  flatlistContent: {
    paddingBottom: 20,
  },
});
