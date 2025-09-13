// // // app/context/ProfileContext.jsx
// // import React, { createContext, useState, useContext } from 'react';

// // const ProfileContext = createContext();

// // export const ProfileProvider = ({ children }) => {
// //   const [profileFor, setProfileFor] = useState(null);
// //   const [gender, setGender] = useState(null);
  
// //   return (
// //     <ProfileContext.Provider value={{ profileFor, setProfileFor, gender, setGender }}>
// //       {children}
// //     </ProfileContext.Provider>
// //   );
// // };

// // export const useProfile = () => useContext(ProfileContext);






// // app/context/ProfileContext.jsx
// import React, { createContext, useState, useContext } from 'react';

// const ProfileContext = createContext();

// export const ProfileProvider = ({ children }) => {
//   const [profileFor, setProfileFor] = useState(null);
//   const [gender, setGender] = useState(null);
  
//   // Helper function to get the appropriate prefix
//   const getPrefix = () => {
//     if (!profileFor) return 'Your';
//     return profileFor === 'MySelf' ? 'Your' : profileFor.replace('My', 'Your');
//   };

//   return (
//     <ProfileContext.Provider value={{
//       profileFor,
//       setProfileFor,
//       gender,
//       setGender,
//       getPrefix
//     }}>
//       {children}
//     </ProfileContext.Provider>
//   );
// };

// export const useProfile = () => useContext(ProfileContext);









//15/08/2025

//app/context/ProfileContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import { doc, setDoc, getDoc } from 'firebase/firestore';
// import { useAuth } from '../hooks/useAuth';

// const ProfileContext = createContext();

// export const ProfileProvider = ({ children }) => {
//   const { isSignedIn, user } = useAuth();
//   const [profileFor, setProfileFor] = useState(null);
//   const [gender, setGender] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [birthDate, setBirthDate] = useState(null);
//   const [loading, setLoading] = useState(false);

//   // Save profile to Firestore
//   const saveProfile = async () => {
//     if (!isSignedIn || !user) return;
    
//     try {
//       setLoading(true);
//       const userRef = doc(db, 'users', user.id);
      
//       await setDoc(userRef, {
//         email: user.primaryEmailAddress?.emailAddress,
//         profileFor,
//         gender,
//         firstName,
//         lastName,
//         birthDate,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }, { merge: true });
      
//       // Update Clerk user metadata
//       await user.update({
//         unsafeMetadata: {
//           profileCompleted: true,
//           gender,
//           profileFor
//         }
//       });
      
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Load profile from Firestore
//   const loadProfile = async () => {
//     if (!isSignedIn || !user) return;
    
//     try {
//       setLoading(true);
//       const userRef = doc(db, 'users', user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setProfileFor(data.profileFor);
//         setGender(data.gender);
//         setFirstName(data.firstName);
//         setLastName(data.lastName);
//         setBirthDate(data.birthDate);
//       }
//     } catch (error) {
//       console.error('Error loading profile:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isSignedIn) {
//       loadProfile();
//     }
//   }, [isSignedIn, user]);

//   const getPrefix = () => {
//     if (!profileFor) return '';
    
//     switch(profileFor) {
//       case 'MySelf': return 'Your';
//       case 'My Son': return 'Your son\'s';
//       case 'My Daughter': return 'Your daughter\'s';
//       case 'My Sister': return 'Your sister\'s';
//       case 'My Brother': return 'Your brother\'s';
//       case 'My Friend': return 'Your friend\'s';
//       case 'Cousin': return 'Your cousin\'s';
//       case 'My Relative': return 'Your relative\'s';
//       default: return '';
//     }
//   };

//   return (
//     <ProfileContext.Provider
//       value={{
//         profileFor,
//         setProfileFor,
//         gender,
//         setGender,
//         firstName,
//         setFirstName,
//         lastName,
//         setLastName,
//         birthDate,
//         setBirthDate,
//         saveProfile,
//         getPrefix,
//         loading
//       }}
//     >
//       {children}
//     </ProfileContext.Provider>
//   );
// };

// export const useProfile = () => useContext(ProfileContext);




//13/09/2025
// app/context/ProfileContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../hooks/useAuth';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { isSignedIn, user } = useAuth();
  const [profileFor, setProfileFor] = useState(null);
  const [gender, setGender] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [loading, setLoading] = useState(false);

  // Save profile to Firestore
  const saveProfile = async () => {
    if (!isSignedIn || !user) return;
    
    try {
      setLoading(true);
      const userRef = doc(db, 'users', user.id);
      
      await setDoc(userRef, {
        email: user.primaryEmailAddress?.emailAddress,
        profileFor,
        gender,
        firstName,
        lastName,
        birthDate,
        createdAt: new Date(),
        updatedAt: new Date()
      }, { merge: true });
      
      // Update Clerk user metadata
      await user.update({
        unsafeMetadata: {
          profileCompleted: true,
          gender,
          profileFor
        }
      });
      
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load profile from Firestore
  const loadProfile = async () => {
    if (!isSignedIn || !user) return;
    
    try {
      setLoading(true);
      const userRef = doc(db, 'users', user.id);
      const docSnap = await getDoc(userRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setProfileFor(data.profileFor);
        setGender(data.gender);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setBirthDate(data.birthDate);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSignedIn) {
      loadProfile();
    }
  }, [isSignedIn, user]);

  const getPrefix = () => {
    if (!profileFor) return '';
    
    switch(profileFor) {
      case 'MySelf': return 'Your';
      case 'My Son': return 'Your son\'s';
      case 'My Daughter': return 'Your daughter\'s';
      case 'My Sister': return 'Your sister\'s';
      case 'My Brother': return 'Your brother\'s';
      case 'My Friend': return 'Your friend\'s';
      case 'Cousin': return 'Your cousin\'s';
      case 'My Relative': return 'Your relative\'s';
      default: return '';
    }
  };

  return (
    <ProfileContext.Provider
      value={{
        profileFor,
        setProfileFor,
        gender,
        setGender,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        birthDate,
        setBirthDate,
        saveProfile,
        getPrefix,
        loading
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);