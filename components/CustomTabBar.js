import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTabBar = () => {
    const insets = useSafeAreaInsets(); // Get safe area insets

  const navigation = useNavigation(); // Move useNavigation inside the component

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      <View style={styles.tabButton}></View>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => handlePress('Home')}
      >
        <FontAwesomeIcon icon={faHouse} size={28} color='#ffffff' />
      </TouchableOpacity>
      <View style={styles.tabButton}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    backgroundColor: '#DB1041',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTabBar;
