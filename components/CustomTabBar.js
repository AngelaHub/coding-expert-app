import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { useCurrentRoute } from '../RouteContext'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabBar = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const currentRoute = useCurrentRoute(); 

  console.log('CustomTabBar Current Route:', currentRoute); 

  const showBackButton = currentRoute != 'Home'; 

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleHomePress = () => {
    navigation.navigate('Home');
  };


  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      <View style={styles.flexBox1}>
      {showBackButton && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
        >
          <FontAwesomeIcon icon={faArrowLeft} size={28} color='#ffffff' />
        </TouchableOpacity>
      )}
      </View>
      <View style={styles.flexBox2}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={handleHomePress}
      >
        <FontAwesomeIcon icon={faHouse} size={28} color='#ffffff' />
      </TouchableOpacity>
      </View>
      <View style={styles.flexBox3} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    backgroundColor: '#DB1041',
  },
  flexBox1: {
    flex: 1, 
    paddingLeft: 32
  },
  flexBox2: {
    flex: 1, 
  },
  flexBox3: {
    flex: 1, 
    paddingRight: 32
  },
  backButton: {
    flex: 1,
    alignItems: 'start',
    justifyContent: 'center'  
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTabBar;