import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const CategoryView = () => {
  const navigation = useNavigation();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategoryPress = (id) => {
    setSelectedCategoryId(id); // Store the selected category ID
    console.log(`Selected CATEGORY ID: ${id}`)
    navigation.navigate('GenreView', { categoryId: id }); // Pass the ID to the next screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Wat is je favoriete leeftijdscategorie?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleCategoryPress(1)}>
          <Text style={styles.buttonText}>Jong volwassenen (12-18j)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCategoryPress(2)}>
          <Text style={styles.buttonText}>Nieuw volwassenen (18-25j)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCategoryPress(3)}>
          <Text style={styles.buttonText}>Volwassenen (18+)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 60, // Add padding for better layout on small screens
  },
  title: {
    fontSize: 20,
    marginBottom: 63,
    paddingHorizontal: 60,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 264,
    height: 52,
    borderRadius: 36,
    backgroundColor: '#0064B4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 5,  // Needed for Android shadow
    marginBottom: 44, // Margin between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 16, // Reduced size for better fit
    fontFamily: 'Poppins-SemiBold',
  },
});

export default CategoryView;
