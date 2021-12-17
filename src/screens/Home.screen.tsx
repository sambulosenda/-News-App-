import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {gql, useQuery} from 'urql';

const STORIES_QUERY = gql`
  query AllStories {
    stories {
      id
      title
      author
      summary
    }
  }
`;
export const HomeScreen: React.FC = () => {
  const [{data, error, fetching}] = useQuery({query: STORIES_QUERY});

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
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContent}
        data={data.stories}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
          </View>
        )}
      />
    </View>
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
