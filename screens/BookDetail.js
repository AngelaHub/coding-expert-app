import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const BookDetail = () => {
  const route = useRoute();
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.Title}</Text>
      <Image source={{ uri: `https://anjela.vaw.be/${book.CoverImage}` }} style={styles.coverImage} />
      <Text style={styles.author}>{book.Author}</Text>
      <Text style={styles.excerpt}>{book.Excerpt}</Text>
      {/* Add more details if needed */}
    </View>
  );
};
export default BookDetail;
// Add styling as needed