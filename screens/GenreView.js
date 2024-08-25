import { React, useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { SelectedDataContext } from '../context/SelectedDataContext'; 
import Header from '../components/Header';

const GenreView = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const selectedCategoryId  = route.params.categoryId; //This is the catecory ID from the prev screen
  const { selectedGenreId, setSelectedGenreId } = useContext(SelectedDataContext); 

  const handleGenrePress = (id) => {
    setSelectedGenreId(id);
    console.log(`Already selected categowry ID: ${selectedCategoryId}`);

    console.log(`Selected Genre ID: ${id}`);
    navigation.navigate('BooksView', { categoryId: selectedCategoryId, genreId: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
          <Text style={styles.title}>Kies je lievelingsthema</Text>
      <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollViewContent}>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(1)}>
          <Text style={styles.buttonText}>Avontuur</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(2)}>
          <Text style={styles.buttonText}>Fantasy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(3)}>
          <Text style={styles.buttonText}>Liefde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(4)}>
          <Text style={styles.buttonText}>Thriller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(5)}>
          <Text style={styles.buttonText}>Sport</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(6)}>
          <Text style={styles.buttonText}>Horror</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(7)}>
          <Text style={styles.buttonText}>Science fiction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleGenrePress(8)}>
          <Text style={styles.buttonText}>Historisch</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  title: {
    fontSize: 20,
    marginVertical: 35,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 212,
    height: 52,
    borderRadius: 36,
    backgroundColor: '#0064B4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,  
    marginBottom: 20, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, 
    fontFamily: 'Poppins-SemiBold',
  },
  scrollStyle: {
    flexGrow: 1, 
    width: '100%'
 },
 scrollViewContent: {
  alignItems: 'center',
  marginTop: 15
},
});

export default GenreView;
