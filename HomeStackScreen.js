import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { navigationRef } from './NavigationService';
import { useCurrentRoute } from './RouteContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CategoryView from './screens/CategoryView';
import GenreView from './screens/GenreView';
import BooksView from './screens/BooksView';
import BookDetail from './screens/BookDetail';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  const { setCurrentRoute } = useCurrentRoute();

  useFocusEffect(
    React.useCallback(() => {
      const route = navigationRef.current?.getCurrentRoute();
      if (route) {
        setCurrentRoute(route.name);
      }
    }, [])
  );

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="CategoryView" component={CategoryView} />
      <HomeStack.Screen name="GenreView" component={GenreView} />
      <HomeStack.Screen name="BooksView" component={BooksView} />
      <HomeStack.Screen name="BookDetail" component={BookDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
