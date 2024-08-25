import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/A-icon.png')}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 56, 
    left: 32, 
    zIndex: 1, 
  },
  icon: {
    width: 45, 
    height: 24, 
  },
});

export default Header;
