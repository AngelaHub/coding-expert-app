import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from './screens/Home';
import CategoryView from './screens/CategoryView';
import HomeStackScreen from './HomeStackScreen';
import CustomTabBar from './components/CustomTabBar';
import { RouteProvider } from './RouteContext'; 
import { navigationRef } from './NavigationService';

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });
    setFontsLoaded(true);
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <NavigationContainer ref={navigationRef}>
    <RouteProvider>
        <Tab.Navigator
          tabBar={props => <CustomTabBar {...props} />}
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="HomeStack" component={HomeStackScreen} />
        </Tab.Navigator>
    </RouteProvider>
    </NavigationContainer>

  );
};

export default App;
