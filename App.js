import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/Home';
import CategoryView from './screens/CategoryView';
import CustomTabBar from './components/CustomTabBar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const MainStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CategoryView" component={CategoryView} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });
    setFontsLoaded(true);
    await SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="HomeStack" component={MainStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
