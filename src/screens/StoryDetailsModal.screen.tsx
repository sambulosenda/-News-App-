import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import {useRoute, RouteProp} from '@react-navigation/core';
import {RootStackParamList} from '../Types';
import {useQuery, gql} from 'urql';
import {
  StoryByIdQuery,
  StoryByIdQueryVariables,
} from '../graphql/__generated__/operationTypes';

const STORY_BY_ID = gql`
  query StoryById($id: ID!) {
    story(id: $id) {
      id
      title
      author
      text
      summary
    }
  }
`;

export const StoryDetailModal: React.FC = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'StoryDetailsScreen'>>();

  const [{data, fetching, error}] = useQuery<
    StoryByIdQuery,
    StoryByIdQueryVariables
  >({
    query: STORY_BY_ID,
    variables: {id: route.params.id},
  });

  if (fetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="grey" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Something went wrong {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.author}>By {data.story.author}</Text>
      <Text style={styles.text}>{data.story.text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    Flex: 1,
    alignItems: 'center',
  },
  scrollView: {
    padding: 20,
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: 20,
  },
  text: {
    lineHeight: 25,
  },
});
