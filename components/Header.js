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
    top: 56, // Adjust as needed
    left: 32, // Adjust as needed
    zIndex: 1, // Ensures it stays on top
  },
  icon: {
    width: 45, // Adjust size as needed
    height: 24, // Adjust size as needed
  },
});

export default Header;
