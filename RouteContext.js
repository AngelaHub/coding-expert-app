import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('Home');
  const state = useNavigationState(state => state);

  //The findCurrentRoute function is a helper that recursively checks if the current route has nested routes (a state object).
  //If a nested route exists, it continues to check deeper until it finds the innermost active route.
  //Once it finds the deepest active route (which doesn't have further nested routes), it returns the name of that route.

  useEffect(() => {
    if (state && state.routes[state.index]) {
      
      const findCurrentRoute = (route) => {
        if (route.state) {
          return findCurrentRoute(route.state.routes[route.state.index]);
        }
        return route.name;
      };
      setCurrentRoute(findCurrentRoute(state.routes[state.index]));
    }
  }, [state]);

  return (
    <RouteContext.Provider value={currentRoute}>
      {children}
    </RouteContext.Provider>
  );
};

export const useCurrentRoute = () => useContext(RouteContext);
