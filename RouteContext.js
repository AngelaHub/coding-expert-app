import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigationState } from '@react-navigation/native';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState('');
  const state = useNavigationState(state => state);

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
