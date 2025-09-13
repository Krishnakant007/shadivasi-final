// app/context/ProfileProgressContext.jsx
import React, { createContext, useState, useContext } from 'react';

const ProfileProgressContext = createContext();

export const ProfileProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const updateProgress = (step, data) => {
    setCompletedSteps(prev => [...prev, step]);
    setProgress(prev => prev + (100 / 12)); // Assuming 12 steps
  };

  return (
    <ProfileProgressContext.Provider value={{ 
      progress, 
      completedSteps,
      updateProgress 
    }}>
      {children}
    </ProfileProgressContext.Provider>
  );
};

export const useProfileProgress = () => useContext(ProfileProgressContext);