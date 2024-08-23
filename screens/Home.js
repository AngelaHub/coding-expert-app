import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import Header from '../components/Header'; 
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation(); // Get navigation prop

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: insets.bottom }]}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Op zoek naar een boek naar jouw smaak</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('CategoryView')}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/shapes.png')}
        style={styles.bottomImage}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 60,
    marginBottom: 63
  },
  title: {
    fontSize: 20,
    marginBottom: 63,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  button: {
    width: 176,
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  bottomImage: {
    width: '100%',
    position: 'absolute',
    bottom: -100,
  },
});

export default Home;
