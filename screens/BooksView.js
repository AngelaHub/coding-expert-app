// BookView.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const BookView = () => {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const route = useRoute();
  const { categoryId, genreId } = route.params || {};

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://anjela.vaw.be/getBook.php?age=${categoryId}&genre=${genreId}`);
        console.log("HEJ")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [categoryId, genreId]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0064B4" />
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {book ? (
        <View style={styles.content}>
          <Text style={styles.title}>{book.Title}</Text>
          <Text style={styles.author}>{book.Author}</Text>
          <Text style={styles.excerpt}>{book.Excerpt}</Text>
        </View>
      ) : (
        <Text style={styles.errorText}>No book details found</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  author: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  excerpt: {
    fontSize: 16,
    textAlign: 'center',
  },
  loadingText: {
    fontSize: 18,
    marginTop: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default BookView;
