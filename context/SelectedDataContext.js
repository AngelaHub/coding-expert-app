import React, { createContext, useState } from 'react';

export const SelectedDataContext = createContext();

export const SelectedDataProvider = ({ children }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedGenreId, setSelectedGenreId] = useState(null); 
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);  // Add this state

  return (
    <SelectedDataContext.Provider value={{
      selectedCategoryId,
      setSelectedCategoryId,
      selectedGenreId,
      setSelectedGenreId,
      selectedBookIndex,         // Add this value
      setSelectedBookIndex       // Add this value
    }}>
      {children}
    </SelectedDataContext.Provider>
  );
};
