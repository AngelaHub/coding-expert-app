import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header'; 
import { SelectedDataContext } from '../context/SelectedDataContext';  // Import the context

const BookView = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const { selectedBookIndex, setSelectedBookIndex } = useContext(SelectedDataContext); // Get context
  const route = useRoute();
  const { categoryId, genreId } = route.params || {};

  const fetchBookDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://anjela.vaw.be/getBook.php?age=${categoryId}&genre=${genreId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching book details:', error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect the first thing that loades 
  useEffect(() => {
    fetchBookDetails();
  }, [categoryId, genreId]);

  const handleBookPress = (index) => {
    setSelectedBookIndex(index);
  };

  // The arrows to see other books
  const handleNextBook = () => { 
    setSelectedBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const handlePreviousBook = () => {
    setSelectedBookIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Text style={styles.title}>Dit zijn jouw resultaten</Text>
        <View style={styles.bookBox}>
          <View>
            <ActivityIndicator size="large" color="#0064B4" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <Text style={styles.errorText}>Error: {error}</Text>
      </SafeAreaView>
    );
  }

  const selectedBook = books[selectedBookIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.title}>Dit zijn jouw resultaten</Text>
      <View style={styles.bookBox}>
        {selectedBookIndex === null ? (
          <>
            <View style={styles.row}>
              {books.slice(0, 2).map((book, index) => (
                <TouchableOpacity key={index} onPress={() => handleBookPress(index)} style={styles.imageContainer}>
                    <Image
                    source={{ uri: `https://anjela.vaw.be/${book.CoverImage}` }}
                    style={styles.bookImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.row}>
              {books.slice(2,3).map((book, index) => (
                <TouchableOpacity key={index} onPress={() => handleBookPress(index + 2)} style={styles.imageContainer}>
                  <Image
                    source={{ uri: `https://anjela.vaw.be/${book.CoverImage}` }}
                    style={styles.bookImage}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <ScrollView contentContainerStyle={styles.bookDetails}>
            <View style={styles.detailsRow}>
              <View style={styles.imageBox}>
                <Image
                  source={{ uri: `https://anjela.vaw.be/${selectedBook.CoverImage}` }}
                  style={styles.bookImageDetail}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.detailsText}>
                <View style={styles.bookInfo}>
                  <Text style={styles.bookName}>{selectedBook.Title}</Text>
                  <Text style={styles.bookAuthor}>{selectedBook.Author}</Text>
                </View>
                <View style={styles.whereBox}>
                  <Text style={styles.whereText}>Waar staat het?</Text>
                  <Text style={styles.section}>{selectedBook.ShelfName}</Text>
                </View>
              </View>
            </View>
            <View style={styles.excerptContainer}>
              <Text style={styles.bookExcerpt}>{selectedBook.Excerpt}</Text>
            </View>
          </ScrollView>
        )}
      </View>
      {selectedBookIndex !== null && (
        <View style={styles.navigationButtons}>
          <TouchableOpacity
            onPress={handlePreviousBook}
            style={styles.navButton}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={28} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNextBook}
            style={styles.navButton}
          >
            <FontAwesomeIcon icon={faArrowRight} size={28} color="#ffffff" />
          </TouchableOpacity>
        </View>
      )}
      {selectedBookIndex === null && (
        <TouchableOpacity style={styles.button} onPress={fetchBookDetails}>
          <Image
          source={require('../assets/spin.png')}
        style={styles.spin}
          ></Image>
          <Text style={styles.buttonText}>Andere</Text>
        </TouchableOpacity>
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
    width: '100%'
  },
  spin: {
    width: 28,
    height: 25,
    marginBottom: 5
  },
  title: {
    fontSize: 20,
    paddingHorizontal: 60,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  bookBox: {
    backgroundColor: '#E6F0F8',
    borderRadius: 36,
    height: 500,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'relative',
    width: '87%', // Adjusted for consistent padding
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bookImage: {
    width: 125,
    height: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },
  bookImageDetail: {
    width: 150,
    height: 240,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },
  bookDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  detailsRow: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 28,
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
  },
  imageBox: {
    width: '50%'
  },
  detailsText: {
    width: '50%',
    paddingLeft: 20
  },
  bookInfo: {
    height: '50%'
  },
  bookName: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold', 
    color: 'black',
  },
  bookAuthor: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold', 
    color: 'black',
  },
  spacer: {
    height: 10,
  },
  whereText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold', // SemiBold
    color: '#DB1041',
  },
  section: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',  
    color: 'black',
  },
  excerptContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  bookExcerpt: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '87%',
  },
  navButton: {
    width: 76,
    height: 48,
    borderRadius: 36,
    backgroundColor: '#0064B4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
  },
  button: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: '#0064B4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,
    position: 'absolute',
    bottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold'
  },
  loadingText: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'Poppins-SemiBold'
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default BookView;
