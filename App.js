import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeStackScreen from './HomeStackScreen';
import CustomTabBar from './components/CustomTabBar';
import { RouteProvider } from './RouteContext'; 
import { navigationRef } from './NavigationService';
import { SelectedDataProvider } from './context/SelectedDataContext'; // Ensure the correct path

const Tab = createBottomTabNavigator();

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false); //FontsLoaded is false from the beginning

  //Loading the fonts
  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),

    });
    setFontsLoaded(true);
    await SplashScreen.hideAsync();
  };

  //Useeffect is called when App.js is rendered
  useEffect(() => { 
    loadFonts(); // LoadFonts is called by useEffect
  }, []);

  //if fonts are not loaded then show nothing of the app / else show the stuff inside the return clause below
  if (!fontsLoaded) {
    return null;
  }

  //RouteProvider makes it possible to navigate between the screens, HomeStack: stack of screens
  return ( 
    <SelectedDataProvider>
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
    </SelectedDataProvider>
  );
};

export default App;