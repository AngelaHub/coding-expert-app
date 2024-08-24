import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../assets/A-icon.svg')}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 10, // Adjust as needed
    left: 10, // Adjust as needed
    zIndex: 1, // Ensures it stays on top
  },
  icon: {
    width: 40, // Adjust size as needed
    height: 40, // Adjust size as needed
  },
});

export default Header;
