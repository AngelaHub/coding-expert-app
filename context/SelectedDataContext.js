import React, { createContext, useState } from 'react';

export const SelectedDataContext = createContext();

export const SelectedDataProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedGenreId, setSelectedGenreId] = useState(null); 

  return (
    <SelectedDataContext.Provider value={{ selectedCategoryId, setSelectedCategoryId, selectedGenreId, setSelectedGenreId }}>
      {children}
    </SelectedDataContext.Provider>
  );
};
