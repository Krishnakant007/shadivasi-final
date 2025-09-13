// import React, { createContext, useContext, useState, useEffect } from 'react';
// import * as SecureStore from 'expo-secure-store';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { auth } from '../../firebaseConfig';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithCredential,
//   signOut
// } from 'firebase/auth';

// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
// });

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const emailSignIn = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const emailSignUp = async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const googleSignIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { idToken } = await GoogleSignin.signIn();
//       const googleCredential = GoogleAuthProvider.credential(idToken);
//       const userCredential = await signInWithCredential(auth, googleCredential);
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//       await GoogleSignin.signOut();
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider value={{
//       user,
//       loading,
//       emailSignIn,
//       emailSignUp,
//       googleSignIn,
//       logOut
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);











// import React, { createContext, useContext, useState, useEffect } from 'react';
// import * as SecureStore from 'expo-secure-store';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// // import { auth } from '../../firebaseConfig';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithCredential,
//   signOut,
//   onAuthStateChanged
// } from 'firebase/auth';
// import { auth } from '../../firebase/firebaseConfig';

// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
// });

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const emailSignIn = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const emailSignUp = async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const googleSignIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { idToken } = await GoogleSignin.signIn();
//       const googleCredential = GoogleAuthProvider.credential(idToken);
//       const userCredential = await signInWithCredential(auth, googleCredential);
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logOut = async () => {
//     try {
//       await signOut(auth);
//       await GoogleSignin.signOut();
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <AuthContext.Provider value={{
//       user,
//       loading,
//       emailSignIn,
//       emailSignUp,
//       googleSignIn,
//       logOut
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);









// // app/context/AuthContext.js
// import React, { createContext, useContext, useEffect, useState } from 'react';
// // import { auth } from '../firebase/firebaseConfig';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from 'firebase/auth';
// import { auth } from '../../firebase/firebaseConfig';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const signUpWithEmail = async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       return userCredential;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       return result.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const loginWithEmail = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       return userCredential;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const value = {
//     user,
//     loading,
//     signUpWithEmail,
//     signInWithGoogle,
//     loginWithEmail,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }









// 11-08-2025

// import React, { createContext, useContext, useEffect, useState } from 'react';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   signInWithCredential,
//   GoogleAuthProvider
// } from 'firebase/auth';
// import { auth} from '../../firebase/firebaseConfig';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const signUpWithEmail = async (email, password) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       return userCredential;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const signInWithGoogle = async () => {
//     try {
//       // Check if your device supports Google Play
//       await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
//       // Get the users ID token
//       const { idToken } = await GoogleSignin.signIn();

//       // Create a Google credential with the token
//       const credential = GoogleAuthProvider.credential(idToken);

//       // Sign-in the user with the credential
//       const userCredential = await signInWithCredential(auth, credential);
//       return userCredential.user;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const loginWithEmail = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       return userCredential;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const value = {
//     user,
//     loading,
//     signUpWithEmail,
//     signInWithGoogle,
//     loginWithEmail,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
// }

// export function useAuth() {
//   return useContext(AuthContext);
// }








// app/context/AuthContext.jsx   19/8
// original
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const auth = useAuth();

//   return (
//     <AuthContext.Provider value={auth}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuthContext must be used within an AuthProvider');
//   }
//   return context;
// };

// export default AuthContext;




//29/08/2025

// context/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useAuth as useClerkAuth } from '@clerk/clerk-expo';
// import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const { userId, getToken, user: clerkUser } = useClerkAuth();
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const initializeUser = async () => {
//       if (userId) {
//         try {
//           // Check if user exists in Firestore
//           const userRef = doc(db, 'Users', userId);
//           const userSnap = await getDoc(userRef);
          
//           if (userSnap.exists()) {
//             setUser({ id: userId, ...userSnap.data() });
//           } else {
//             // Create a basic user document if it doesn't exist
//             await setDoc(userRef, {
//               clerkUserId: userId,
//               email: clerkUser?.primaryEmailAddress?.emailAddress,
//               createdAt: serverTimestamp(),
//               lastSeen: serverTimestamp(),
//               profileComplete: false
//             });
//             setUser({
//               id: userId,
//               clerkUserId: userId,
//               email: clerkUser?.primaryEmailAddress?.emailAddress,
//               profileComplete: false
//             });
//           }
//         } catch (error) {
//           console.error('Error initializing user:', error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setUser(null);
//         setLoading(false);
//       }
//     };

//     initializeUser();
//   }, [userId, clerkUser]);

//   const value = {
//     user,
//     loading,
//     updateUser: (updates) => {
//       setUser(prev => ({ ...prev, ...updates }));
//     }
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   );
// };











//31/08/2025

// app/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-expo";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoaded, isSignedIn, user: clerkUser } = useUser();
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkProfileCompletion = async () => {
      if (isLoaded && clerkUser) {
        try {
          const isProfileComplete = clerkUser.unsafeMetadata?.profileCompleted === true;
          setProfileCompleted(isProfileComplete);
        } catch (error) {
          console.error("Error checking profile completion:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkProfileCompletion();
  }, [isLoaded, isSignedIn, clerkUser]);

  // Create a consistent user object with all required fields
  const getUserData = () => {
    if (!clerkUser) return null;
    
    return {
      id: clerkUser.id || '',
      uid: clerkUser.id || '', // alias for compatibility
      firstName: clerkUser.firstName || '',
      lastName: clerkUser.lastName || '',
      displayName: clerkUser.fullName || `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || 'User',
      email: clerkUser.primaryEmailAddress?.emailAddress || '',
      profilePhoto: clerkUser.imageUrl || '',
      profileCompleted: clerkUser.unsafeMetadata?.profileCompleted === true
    };
  };

  const user = getUserData();

  const value = {
    isLoaded,
    isSignedIn,
    user,
    profileCompleted,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;