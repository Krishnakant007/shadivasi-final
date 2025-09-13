// // //06-08-2025

// // // app/context/LanguageContext.jsx
// // import React, { createContext, useState, useContext, useEffect } from 'react';
// // import { Animated } from 'react-native';

// // const LanguageContext = createContext();

// // export const LanguageProvider = ({ children }) => {
// //   const [language, setLanguage] = useState('ENG');
// //   const toggleAnim = useState(new Animated.Value(0))[0];

// //   const toggleLanguage = () => {
// //     const toValue = language === 'ENG' ? 1 : 0;
// //     Animated.spring(toggleAnim, {
// //       toValue,
// //       friction: 10,
// //       useNativeDriver: false,
// //     }).start();
// //     setLanguage(prev => prev === 'ENG' ? 'HI' : 'ENG');
// //   };

// //   const translateX = toggleAnim.interpolate({
// //     inputRange: [0, 1],
// //     outputRange: [0, 36]
// //   });

// //   return (
// //     <LanguageContext.Provider value={{ language, toggleLanguage, translateX }}>
// //       {children}
// //     </LanguageContext.Provider>
// //   );
// // };

// // export const useLanguage = () => {
// //   return useContext(LanguageContext);
// // };



// import React, { createContext, useState, useContext } from 'react';
// import { Animated } from 'react-native';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('ENG');
//   const [translateX] = useState(new Animated.Value(0));

//   const toggleLanguage = () => {
//     const toValue = language === 'ENG' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setLanguage(prev => prev === 'ENG' ? 'HI' : 'ENG');
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage, translateX }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };






// import React, { createContext, useState, useContext } from 'react';
// import { Animated } from 'react-native';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('ENG');
//   const [translateX] = useState(new Animated.Value(0));

//   const toggleLanguage = () => {
//     const toValue = language === 'ENG' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setLanguage(prev => prev === 'ENG' ? 'HI' : 'ENG');
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage, translateX }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export default function useLanguage() {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// }




// app/context/LanguageContext.jsx
//original
// app/context/LanguageContext.jsx
// import React, { createContext, useState, useContext } from 'react';
// import { Animated } from 'react-native';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('ENG');
//   const [translateX] = useState(new Animated.Value(0));

//   const toggleLanguage = () => {
//     const toValue = language === 'ENG' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setLanguage(prev => prev === 'ENG' ? 'HI' : 'ENG');
//   };

//   return (
//     <LanguageContext.Provider value={{ language, toggleLanguage, translateX }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };




//11/09/2025
// app/context/LanguageContext.jsx
// import React, { createContext, useState, useContext } from 'react';
// import { Animated } from 'react-native';

// const LanguageContext = createContext();

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('ENG');
//   const [translateX] = useState(new Animated.Value(0));

//   // This function toggles between 'ENG' and 'HI' and updates the animation
//   const toggleLanguage = () => {
//     const toValue = language === 'ENG' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false, // Required for layout animations
//     }).start();
//     setLanguage(prev => (prev === 'ENG' ? 'HI' : 'ENG'));
//   };

//   // Combine all values to be provided by the context
//   const value = {
//     language,
//     setLanguage, // Direct state setter for flexibility
//     toggleLanguage, // Animated toggle function
//     translateX, // The animated value for UI components
//   };

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Add default export from your updated version
// export default LanguageProvider;





//13/09/2025
// app/context/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { Animated } from 'react-native';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ENG');
  const [translateX] = useState(new Animated.Value(0));

  const toggleLanguage = () => {
    const toValue = language === 'ENG' ? 1 : 0;
    Animated.spring(translateX, {
      toValue,
      friction: 10,
      useNativeDriver: false,
    }).start();
    setLanguage(prev => prev === 'ENG' ? 'HI' : 'ENG');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translateX }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};