// // // // app/hooks/useFirebase.js
// // // import { useState } from 'react';
// // // import { db } from '../../config/firebase';
// // // import { doc, getDoc, setDoc } from 'firebase/firestore';
// // // import { useAuth } from './useAuth';

// // // export const useFirebase = () => {
// // //   const { isSignedIn, user } = useAuth();
// // //   const [loading, setLoading] = useState(false);
  
// // //   const getUserData = async () => {
// // //     if (!isSignedIn || !user) return null;
    
// // //     try {
// // //       setLoading(true);
// // //       const userRef = doc(db, 'users', user.id);
// // //       const docSnap = await getDoc(userRef);
      
// // //       if (docSnap.exists()) {
// // //         return docSnap.data();
// // //       }
// // //       return null;
// // //     } catch (error) {
// // //       console.error('Error getting user data:', error);
// // //       return null;
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };
  
// // //   const updateUserData = async (data) => {
// // //     if (!isSignedIn || !user) return false;
    
// // //     try {
// // //       setLoading(true);
// // //       const userRef = doc(db, 'users', user.id);
      
// // //       await setDoc(userRef, {
// // //         ...data,
// // //         updatedAt: new Date()
// // //       }, { merge: true });
      
// // //       return true;
// // //     } catch (error) {
// // //       console.error('Error updating user data:', error);
// // //       return false;
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };
  
// // //   return { getUserData, updateUserData, loading };
// // // };
















// // //16

// // // app/hooks/useFirestore.js
// // // import { useState, useEffect } from 'react';
// // // import { db } from '../../config/firebase';
// // // import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
// // // import { useAuth } from './useAuth';

// // // export const useFirestore = () => {
// // //   const { user } = useAuth();
// // //   const [userData, setUserData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   const getUserData = async () => {
// // //     if (!user) return;
    
// // //     try {
// // //       const userRef = doc(db, "Users", user.id);
// // //       const docSnap = await getDoc(userRef);
      
// // //       if (docSnap.exists()) {
// // //         setUserData(docSnap.data());
// // //       }
// // //     } catch (err) {
// // //       setError(err);
// // //       console.error("Error getting user data:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const updateUserData = async (data) => {
// // //     if (!user) return;
    
// // //     try {
// // //       const userRef = doc(db, "Users", user.id);
// // //       await updateDoc(userRef, {
// // //         ...data,
// // //         updatedAt: new Date().toISOString()
// // //       });
// // //       await getUserData(); // Refresh local data
// // //     } catch (err) {
// // //       setError(err);
// // //       console.error("Error updating user data:", err);
// // //       throw err;
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getUserData();
// // //   }, [user]);

// // //   return {
// // //     userData,
// // //     loading,
// // //     error,
// // //     updateUserData,
// // //     refreshUserData: getUserData
// // //   };
// // // };







// // // trail2
// // //original
// // // app/hooks/useFirestore.js
// // // import { useState, useEffect } from 'react';
// // // import { db } from '../../config/firebase';
// // // import {
// // //   doc,
// // //   setDoc,
// // //   getDoc,
// // //   collection,
// // //   serverTimestamp
// // // } from 'firebase/firestore';
// // // import { useAuth } from './useAuth';

// // // export const useFirestore = () => {
// // //   const { user } = useAuth();
// // //   const [userData, setUserData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // Get the appropriate collection reference based on gender
// // //   const getCollectionRef = (gender) => {
// // //     if (!gender) return null;
// // //     return collection(db, `Users/${gender}/profiles`);
// // //   };

// // //   // Create or update user profile
// // //   const saveUserProfile = async (data) => {
// // //     if (!user || !data.gender) {
// // //       throw new Error('User or gender not available');
// // //     }

// // //     try {
// // //       const userRef = doc(db, "Users", user.id);
// // //       const genderCollectionRef = getCollectionRef(data.gender);
// // //       const profileRef = doc(genderCollectionRef, user.id);

// // //       const profileData = {
// // //         ...data,
// // //         email: user.primaryEmailAddress.emailAddress,
// // //         clerkId: user.id,
// // //         createdAt: serverTimestamp(),
// // //         updatedAt: serverTimestamp()
// // //       };

// // //       // Save to both main Users collection and gender-specific collection
// // //       await Promise.all([
// // //         setDoc(userRef, profileData),
// // //         setDoc(profileRef, profileData)
// // //       ]);

// // //       return profileData;
// // //     } catch (err) {
// // //       console.error("Error saving user profile:", err);
// // //       throw err;
// // //     }
// // //   };

// // //   const getUserData = async () => {
// // //     if (!user) return;
    
// // //     try {
// // //       const userRef = doc(db, "Users", user.id);
// // //       const docSnap = await getDoc(userRef);
      
// // //       if (docSnap.exists()) {
// // //         setUserData(docSnap.data());
// // //       }
// // //     } catch (err) {
// // //       setError(err);
// // //       console.error("Error getting user data:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     getUserData();
// // //   }, [user]);

// // //   return {
// // //     userData,
// // //     loading,
// // //     error,
// // //     saveUserProfile,
// // //     refreshUserData: getUserData
// // //   };
// // // };







// // // app/hooks/useFirebase.js
// import { useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   serverTimestamp,
//   updateDoc
// } from 'firebase/firestore';
// import { useAuth } from './useAuth';

// export const useFirestore = () => {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the appropriate collection reference based on gender
//   const getCollectionRef = (gender) => {
//     if (!gender) return null;
//     return collection(db, `Users/${gender}/profiles`);
//   };

//   // Create or update user profile - FIXED to preserve existing data
//   const saveUserProfile = async (data) => {
//     if (!user || !data.gender) {
//       throw new Error('User or gender not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
//       const genderCollectionRef = getCollectionRef(data.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Get existing data first to preserve it
//       const existingDoc = await getDoc(userRef);
//       const existingData = existingDoc.exists() ? existingDoc.data() : {};

//       const profileData = {
//         ...existingData, // Preserve existing data
//         ...data, // Add new/updated data
//         email: user.primaryEmailAddress.emailAddress,
//         clerkId: user.id,
//         updatedAt: serverTimestamp(),
//         // Only set createdAt if it doesn't exist
//         createdAt: existingData.createdAt || serverTimestamp()
//       };

//       // Save to both main Users collection and gender-specific collection
//       await Promise.all([
//         setDoc(userRef, profileData, { merge: true }), // Use merge to preserve existing fields
//         setDoc(profileRef, profileData, { merge: true })
//       ]);

//       return profileData;
//     } catch (err) {
//       console.error("Error saving user profile:", err);
//       throw err;
//     }
//   };

//   // Update specific fields only
//   const updateUserProfile = async (updates) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get user data to determine gender
//       const userDoc = await getDoc(userRef);
//       if (!userDoc.exists()) {
//         throw new Error('User document not found');
//       }
      
//       const userData = userDoc.data();
//       const genderCollectionRef = getCollectionRef(userData.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       const updateData = {
//         ...updates,
//         updatedAt: serverTimestamp()
//       };

//       // Update both collections
//       await Promise.all([
//         updateDoc(userRef, updateData),
//         updateDoc(profileRef, updateData)
//       ]);

//       // Refresh local data
//       await getUserData();
      
//       return updateData;
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       throw err;
//     }
//   };

//   const getUserData = async () => {
//     if (!user) return;
    
//     try {
//       const userRef = doc(db, "Users", user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         setUserData(docSnap.data());
//       } else {
//         setUserData(null);
//       }
//     } catch (err) {
//       setError(err);
//       console.error("Error getting user data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getUserData();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return {
//     userData,
//     loading,
//     error,
//     saveUserProfile,
//     updateUserProfile,
//     refreshUserData: getUserData
//   };
// };














// //20/08/2025

// // app/hooks/useFirebase.js
// app/hooks/useFirebase.js (updated) original
// import { useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   serverTimestamp,
//   updateDoc
// } from 'firebase/firestore';
// import { useAuth } from './useAuth';

// // Progress mapping for each screen
// const getProgressForScreen = (screenNumber) => {
//   const progressMap = {
//     1: 8,    // info1
//     2: 16,   // info2
//     3: 25,   // info3
//     4: 33,   // info4
//     5: 42,   // info5
//     6: 50,   // info6
//     7: 58,   // info7
//     8: 67,   // info8
//     9: 75,   // info9
//     10: 83,  // info10
//     11: 92,  // info11
//     12: 100, // info12
//     13: 100  // info13
//   };
//   return progressMap[screenNumber] || 0;
// };

// export const useFirestore = () => {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the appropriate collection reference based on gender
//   const getCollectionRef = (gender) => {
//     if (!gender) return null;
//     return collection(db, `Users/${gender}/profiles`);
//   };

//   // Create or update user profile with progress tracking
//   const saveUserProfile = async (data, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
//       const genderCollectionRef = getCollectionRef(data.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Get existing data first to preserve it
//       const existingDoc = await getDoc(userRef);
//       const existingData = existingDoc.exists() ? existingDoc.data() : {};

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : existingData.profileProgress || 0;

//       const profileData = {
//         ...existingData,
//         ...data,
//         email: user.primaryEmailAddress.emailAddress,
//         clerkId: user.id,
//         profileProgress: progress,
//         updatedAt: serverTimestamp(),
//         createdAt: existingData.createdAt || serverTimestamp()
//       };

//       // Save to both main Users collection and gender-specific collection
//       await Promise.all([
//         setDoc(userRef, profileData, { merge: true }),
//         setDoc(profileRef, profileData, { merge: true })
//       ]);

//       setUserData(profileData);
//       return profileData;
//     } catch (err) {
//       console.error("Error saving user profile:", err);
//       throw err;
//     }
//   };

//   // Update specific fields only with progress tracking
//   const updateUserProfile = async (updates, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get user data to determine gender
//       const userDoc = await getDoc(userRef);
//       if (!userDoc.exists()) {
//         throw new Error('User document not found');
//       }
      
//       const userData = userDoc.data();
//       const genderCollectionRef = getCollectionRef(userData.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : userData.profileProgress || 0;

//       const updateData = {
//         ...updates,
//         profileProgress: progress,
//         updatedAt: serverTimestamp()
//       };

//       // Update both collections
//       await Promise.all([
//         updateDoc(userRef, updateData),
//         updateDoc(profileRef, updateData)
//       ]);

//       // Refresh local data
//       await getUserData();
      
//       return updateData;
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       throw err;
//     }
//   };

//   const getUserData = async () => {
//     if (!user) return;
    
//     try {
//       const userRef = doc(db, "Users", user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         setUserData(docSnap.data());
//       } else {
//         setUserData(null);
//       }
//     } catch (err) {
//       setError(err);
//       console.error("Error getting user data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getUserData();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return {
//     userData,
//     loading,
//     error,
//     saveUserProfile,
//     updateUserProfile,
//     refreshUserData: getUserData
//   };
// };


//29/08/2025

// hooks/useFirebase.js
// import { useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   serverTimestamp,
//   updateDoc
// } from 'firebase/firestore';
// import { useAuth } from '../context/AuthContext'; // Updated import path

// // Progress mapping for each screen
// const getProgressForScreen = (screenNumber) => {
//   const progressMap = {
//     1: 8,    // info1
//     2: 16,   // info2
//     3: 25,   // info3
//     4: 33,   // info4
//     5: 42,   // info5
//     6: 50,   // info6
//     7: 58,   // info7
//     8: 67,   // info8
//     9: 75,   // info9
//     10: 83,  // info10
//     11: 92,  // info11
//     12: 100, // info12
//     13: 100  // info13
//   };
//   return progressMap[screenNumber] || 0;
// };

// export const useFirebase = () => {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the appropriate collection reference based on gender
//   const getCollectionRef = (gender) => {
//     if (!gender) return null;
//     return collection(db, `Users/${gender}/profiles`);
//   };

//   // Create or update user profile with progress tracking
//   const saveUserProfile = async (data, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
//       const genderCollectionRef = getCollectionRef(data.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Get existing data first to preserve it
//       const existingDoc = await getDoc(userRef);
//       const existingData = existingDoc.exists() ? existingDoc.data() : {};

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : existingData.profileProgress || 0;

//       const profileData = {
//         ...existingData,
//         ...data,
//         email: user.primaryEmailAddress?.emailAddress || user.email,
//         clerkId: user.id,
//         profileProgress: progress,
//         updatedAt: serverTimestamp(),
//         createdAt: existingData.createdAt || serverTimestamp()
//       };

//       // Save to both main Users collection and gender-specific collection
//       await Promise.all([
//         setDoc(userRef, profileData, { merge: true }),
//         setDoc(profileRef, profileData, { merge: true })
//       ]);

//       setUserData(profileData);
//       return profileData;
//     } catch (err) {
//       console.error("Error saving user profile:", err);
//       throw err;
//     }
//   };

//   // Update specific fields only with progress tracking
//   const updateUserProfile = async (updates, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get user data to determine gender
//       const userDoc = await getDoc(userRef);
//       if (!userDoc.exists()) {
//         throw new Error('User document not found');
//       }
      
//       const userData = userDoc.data();
//       const genderCollectionRef = getCollectionRef(userData.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : userData.profileProgress || 0;

//       const updateData = {
//         ...updates,
//         profileProgress: progress,
//         updatedAt: serverTimestamp()
//       };

//       // Update both collections
//       await Promise.all([
//         updateDoc(userRef, updateData),
//         updateDoc(profileRef, updateData)
//       ]);

//       // Refresh local data
//       await getUserData();
      
//       return updateData;
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       throw err;
//     }
//   };

//   const getUserData = async () => {
//     if (!user) return;
    
//     try {
//       const userRef = doc(db, "Users", user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         setUserData(docSnap.data());
//       } else {
//         setUserData(null);
//       }
//     } catch (err) {
//       setError(err);
//       console.error("Error getting user data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getUserData();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return {
//     userData,
//     loading,
//     error,
//     saveUserProfile,
//     updateUserProfile,
//     refreshUserData: getUserData
//   };
// };

// // If you need a separate useFirestore hook
// export const useFirestore = () => {
//   return { db };
// };










//31/08/2025

// app/hooks/useFirebase.js
// import { useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   serverTimestamp,
//   updateDoc
// } from 'firebase/firestore';
// import { useAuth } from './useAuth';

// // Progress mapping for each screen
// const getProgressForScreen = (screenNumber) => {
//   const progressMap = {
//     1: 8,    // info1
//     2: 16,   // info2
//     3: 25,   // info3
//     4: 33,   // info4
//     5: 42,   // info5
//     6: 50,   // info6
//     7: 58,   // info7
//     8: 67,   // info8
//     9: 75,   // info9
//     10: 83,  // info10
//     11: 92,  // info11
//     12: 100, // info12
//     13: 100  // info13
//   };
//   return progressMap[screenNumber] || 0;
// };

// export const useFirestore = () => {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the appropriate collection reference based on gender
//   const getCollectionRef = (gender) => {
//     if (!gender) return null;
//     return collection(db, `Users/${gender}/profiles`);
//   };

//   // Create or update user profile with progress tracking
//   const saveUserProfile = async (data, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
//       const genderCollectionRef = getCollectionRef(data.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Get existing data first to preserve it
//       const existingDoc = await getDoc(userRef);
//       const existingData = existingDoc.exists() ? existingDoc.data() : {};

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : existingData.profileProgress || 0;

//       const profileData = {
//         ...existingData,
//         ...data,
//         email: user.primaryEmailAddress.emailAddress,
//         clerkId: user.id,
//         profileProgress: progress,
//         updatedAt: serverTimestamp(),
//         createdAt: existingData.createdAt || serverTimestamp()
//       };

//       // Save to both main Users collection and gender-specific collection
//       await Promise.all([
//         setDoc(userRef, profileData, { merge: true }),
//         setDoc(profileRef, profileData, { merge: true })
//       ]);

//       setUserData(profileData);
//       return profileData;
//     } catch (err) {
//       console.error("Error saving user profile:", err);
//       throw err;
//     }
//   };

//   // Update specific fields only with progress tracking
//   const updateUserProfile = async (updates, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get user data to determine gender
//       const userDoc = await getDoc(userRef);
//       if (!userDoc.exists()) {
//         throw new Error('User document not found');
//       }
      
//       const userData = userDoc.data();
//       const genderCollectionRef = getCollectionRef(userData.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : userData.profileProgress || 0;

//       const updateData = {
//         ...updates,
//         profileProgress: progress,
//         updatedAt: serverTimestamp()
//       };

//       // Update both collections
//       await Promise.all([
//         updateDoc(userRef, updateData),
//         updateDoc(profileRef, updateData)
//       ]);

//       // Refresh local data
//       await getUserData();
      
//       return updateData;
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       throw err;
//     }
//   };

//   const getUserData = async () => {
//     if (!user) return;
    
//     try {
//       const userRef = doc(db, "Users", user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         setUserData(docSnap.data());
//       } else {
//         setUserData(null);
//       }
//     } catch (err) {
//       setError(err);
//       console.error("Error getting user data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getUserData();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return {
//     userData,
//     loading,
//     error,
//     saveUserProfile,
//     updateUserProfile,
//     refreshUserData: getUserData
//   };
// };



//09/09/2025

// app/hooks/useFirebase.js
// import { useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   serverTimestamp,
//   updateDoc
// } from 'firebase/firestore';
// import { useAuth } from './useAuth';

// // Progress mapping for each screen
// const getProgressForScreen = (screenNumber) => {
//   const progressMap = {
//     1: 8,    // info1
//     2: 16,   // info2
//     3: 25,   // info3
//     4: 33,   // info4
//     5: 42,   // info5
//     6: 50,   // info6
//     7: 58,   // info7
//     8: 67,   // info8
//     9: 75,   // info9
//     10: 83,  // info10
//     11: 92,  // info11
//     12: 100, // info12
//     13: 100  // info13
//   };
//   return progressMap[screenNumber] || 0;
// };

// export const useFirestore = () => {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the appropriate collection reference based on gender
//   const getCollectionRef = (gender) => {
//     if (!gender) return null;
//     return collection(db, `Users/${gender}/profiles`);
//   };

//   // Create or update user profile with progress tracking
//   const saveUserProfile = async (data, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
//       const genderCollectionRef = getCollectionRef(data.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Get existing data first to preserve it
//       const existingDoc = await getDoc(userRef);
//       const existingData = existingDoc.exists() ? existingDoc.data() : {};

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : existingData.profileProgress || 0;

//       const profileData = {
//         ...existingData,
//         ...data,
//         email: user.primaryEmailAddress.emailAddress,
//         clerkId: user.id,
//         profileProgress: progress,
//         updatedAt: serverTimestamp(),
//         createdAt: existingData.createdAt || serverTimestamp()
//       };

//       // Save to both main Users collection and gender-specific collection
//       await Promise.all([
//         setDoc(userRef, profileData, { merge: true }),
//         setDoc(profileRef, profileData, { merge: true })
//       ]);

//       setUserData(profileData);
//       return profileData;
//     } catch (err) {
//       console.error("Error saving user profile:", err);
//       throw err;
//     }
//   };

//   // Update specific fields only with progress tracking
//   const updateUserProfile = async (updates, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get user data to determine gender
//       const userDoc = await getDoc(userRef);
//       if (!userDoc.exists()) {
//         throw new Error('User document not found');
//       }
      
//       const userData = userDoc.data();
//       const genderCollectionRef = getCollectionRef(userData.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : userData.profileProgress || 0;

//       const updateData = {
//         ...updates,
//         profileProgress: progress,
//         updatedAt: serverTimestamp()
//       };

//       // Update both collections
//       await Promise.all([
//         updateDoc(userRef, updateData),
//         updateDoc(profileRef, updateData)
//       ]);

//       // Refresh local data
//       await getUserData();
      
//       return updateData;
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       throw err;
//     }
//   };

//   const getUserData = async () => {
//     if (!user) return;
    
//     try {
//       const userRef = doc(db, "Users", user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         setUserData(docSnap.data());
//       } else {
//         setUserData(null);
//       }
//     } catch (err) {
//       setError(err);
//       console.error("Error getting user data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getUserData();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return {
//     userData,
//     loading,
//     error,
//     saveUserProfile,
//     updateUserProfile,
//     refreshUserData: getUserData
//   };
// };










//13/09/2025
// app/hooks/useFirebase.js
// import { useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   serverTimestamp,
//   updateDoc
// } from 'firebase/firestore';
// import { useAuth } from './useAuth';

// // Progress mapping for each screen
// const getProgressForScreen = (screenNumber) => {
//   const progressMap = {
//     1: 8,    // info1
//     2: 16,   // info2
//     3: 25,   // info3
//     4: 33,   // info4
//     5: 42,   // info5
//     6: 50,   // info6
//     7: 58,   // info7
//     8: 67,   // info8
//     9: 75,   // info9
//     10: 83,  // info10
//     11: 92,  // info11
//     12: 100, // info12
//     13: 100  // info13
//   };
//   return progressMap[screenNumber] || 0;
// };

// export const useFirestore = () => {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get the appropriate collection reference based on gender
//   const getCollectionRef = (gender) => {
//     if (!gender) return null;
//     return collection(db, `Users/${gender}/profiles`);
//   };

//   // Create or update user profile with progress tracking
//   const saveUserProfile = async (data, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
//       const genderCollectionRef = getCollectionRef(data.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Get existing data first to preserve it
//       const existingDoc = await getDoc(userRef);
//       const existingData = existingDoc.exists() ? existingDoc.data() : {};

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : existingData.profileProgress || 0;

//       // Safely get email address
//       const email = user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress || '';

//       const profileData = {
//         ...existingData,
//         ...data,
//         email: email,
//         clerkId: user.id,
//         profileProgress: progress,
//         updatedAt: serverTimestamp(),
//         createdAt: existingData.createdAt || serverTimestamp()
//       };

//       // Save to both main Users collection and gender-specific collection
//       await Promise.all([
//         setDoc(userRef, profileData, { merge: true }),
//         genderCollectionRef && setDoc(profileRef, profileData, { merge: true })
//       ]);

//       setUserData(profileData);
//       return profileData;
//     } catch (err) {
//       console.error("Error saving user profile:", err);
//       throw err;
//     }
//   };

//   // Update specific fields only with progress tracking
//   const updateUserProfile = async (updates, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get user data to determine gender
//       const userDoc = await getDoc(userRef);
//       if (!userDoc.exists()) {
//         throw new Error('User document not found');
//       }
      
//       const userData = userDoc.data();
//       const genderCollectionRef = getCollectionRef(userData.gender);
//       const profileRef = doc(genderCollectionRef, user.id);

//       // Calculate progress
//       const progress = screenNumber ? getProgressForScreen(screenNumber) : userData.profileProgress || 0;

//       const updateData = {
//         ...updates,
//         profileProgress: progress,
//         updatedAt: serverTimestamp()
//       };

//       // Update both collections
//       await Promise.all([
//         updateDoc(userRef, updateData),
//         genderCollectionRef && updateDoc(profileRef, updateData)
//       ]);

//       // Refresh local data
//       await getUserData();
      
//       return updateData;
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       throw err;
//     }
//   };

//   const getUserData = async () => {
//     if (!user) return;
    
//     try {
//       const userRef = doc(db, "Users", user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         setUserData(docSnap.data());
//       } else {
//         setUserData(null);
//       }
//     } catch (err) {
//       setError(err);
//       console.error("Error getting user data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getUserData();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return {
//     userData,
//     loading,
//     error,
//     saveUserProfile,
//     updateUserProfile,
//     refreshUserData: getUserData
//   };
// };



// 14/09/2025
// import { useState, useEffect } from 'react';
// import { db } from '../../config/firebase';
// import {
//   doc,
//   setDoc,
//   getDoc,
//   collection,
//   serverTimestamp,
//   updateDoc,
//   query,
//   where,
//   getDocs,
//   limit,
//   onSnapshot
// } from 'firebase/firestore';
// import { useAuth } from './useAuth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Cache expiration time (5 minutes)
// const CACHE_EXPIRY = 5 * 60 * 1000;

// export const useFirestore = () => {
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Get cached data with expiration check
//   const getCachedData = async (key) => {
//     try {
//       const cached = await AsyncStorage.getItem(key);
//       if (!cached) return null;
      
//       const { data, timestamp } = JSON.parse(cached);
//       if (Date.now() - timestamp > CACHE_EXPIRY) {
//         await AsyncStorage.removeItem(key);
//         return null;
//       }
      
//       return data;
//     } catch (error) {
//       console.error('Error getting cached data:', error);
//       return null;
//     }
//   };

//   // Set data to cache with timestamp
//   const setCachedData = async (key, data) => {
//     try {
//       const cacheData = {
//         data,
//         timestamp: Date.now()
//       };
//       await AsyncStorage.setItem(key, JSON.stringify(cacheData));
//     } catch (error) {
//       console.error('Error setting cached data:', error);
//     }
//   };

//   const saveUserProfile = async (data, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get existing data first to preserve it
//       const existingDoc = await getDoc(userRef);
//       const existingData = existingDoc.exists() ? existingDoc.data() : {};

//       // Calculate progress
//       const progressMap = {
//         1: 8, 2: 16, 3: 25, 4: 33, 5: 42, 6: 50,
//         7: 58, 8: 67, 9: 75, 10: 83, 11: 92, 12: 100, 13: 100
//       };
//       const progress = screenNumber ? progressMap[screenNumber] : existingData.profileProgress || 0;

//       const email = user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress || '';

//       const profileData = {
//         ...existingData,
//         ...data,
//         email: email,
//         clerkId: user.id,
//         profileProgress: progress,
//         updatedAt: serverTimestamp(),
//         createdAt: existingData.createdAt || serverTimestamp()
//       };

//       // Save to Users collection
//       await setDoc(userRef, profileData, { merge: true });

//       // Update cache
//       await setCachedData(`user_${user.id}`, profileData);
//       setUserData(profileData);
      
//       return profileData;
//     } catch (err) {
//       console.error("Error saving user profile:", err);
//       throw err;
//     }
//   };

//   const updateUserProfile = async (updates, screenNumber = null) => {
//     if (!user) {
//       throw new Error('User not available');
//     }

//     try {
//       const userRef = doc(db, "Users", user.id);
      
//       // Get user data
//       const userDoc = await getDoc(userRef);
//       if (!userDoc.exists()) {
//         throw new Error('User document not found');
//       }
      
//       const userData = userDoc.data();
      
//       // Calculate progress
//       const progressMap = {
//         1: 8, 2: 16, 3: 25, 4: 33, 5: 42, 6: 50,
//         7: 58, 8: 67, 9: 75, 10: 83, 11: 92, 12: 100, 13: 100
//       };
//       const progress = screenNumber ? progressMap[screenNumber] : userData.profileProgress || 0;

//       const updateData = {
//         ...updates,
//         profileProgress: progress,
//         updatedAt: serverTimestamp()
//       };

//       // Update document
//       await updateDoc(userRef, updateData);

//       // Update cache
//       const updatedData = { ...userData, ...updateData };
//       await setCachedData(`user_${user.id}`, updatedData);
//       setUserData(updatedData);
      
//       return updateData;
//     } catch (err) {
//       console.error("Error updating user profile:", err);
//       throw err;
//     }
//   };

//   const getUserData = async (forceRefresh = false) => {
//     if (!user) return;
    
//     try {
//       // Try to get from cache first
//       if (!forceRefresh) {
//         const cachedData = await getCachedData(`user_${user.id}`);
//         if (cachedData) {
//           setUserData(cachedData);
//           setLoading(false);
//           return;
//         }
//       }
      
//       // Fetch from Firestore if not in cache or forced refresh
//       const userRef = doc(db, "Users", user.id);
//       const docSnap = await getDoc(userRef);
      
//       if (docSnap.exists()) {
//         const data = docSnap.data();
//         setUserData(data);
//         await setCachedData(`user_${user.id}`, data);
//       } else {
//         setUserData(null);
//       }
//     } catch (err) {
//       setError(err);
//       console.error("Error getting user data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch profiles with caching
//   const fetchProfiles = async (genderToFetch, limitCount = 10) => {
//     if (!user) return [];
    
//     const cacheKey = `profiles_${genderToFetch}_${limitCount}`;
    
//     // Try to get from cache first
//     const cachedProfiles = await getCachedData(cacheKey);
//     if (cachedProfiles) {
//       return cachedProfiles;
//     }
    
//     try {
//       const profilesRef = collection(db, 'Users');
//       const q = query(
//         profilesRef,
//         where('gender', '==', genderToFetch),
//         limit(limitCount)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if (doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             ...profileData
//           });
//         }
//       });
      
//       // Cache the results
//       await setCachedData(cacheKey, profiles);
//       return profiles;
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       getUserData();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   return {
//     userData,
//     loading,
//     error,
//     saveUserProfile,
//     updateUserProfile,
//     refreshUserData: () => getUserData(true),
//     fetchProfiles
//   };
// };



//17/09/2025
import { useState, useEffect } from 'react';
import { db } from '../../config/firebase';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  serverTimestamp,
  updateDoc,
  query,
  where,
  getDocs,
  limit,
  onSnapshot
} from 'firebase/firestore';
import { useAuth } from './useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Cache expiration time (5 minutes)
const CACHE_EXPIRY = 5 * 60 * 1000;

export const useFirestore = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get cached data with expiration check
  const getCachedData = async (key) => {
    try {
      const cached = await AsyncStorage.getItem(key);
      if (!cached) return null;
      
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp > CACHE_EXPIRY) {
        await AsyncStorage.removeItem(key);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error getting cached data:', error);
      return null;
    }
  };

  // Set data to cache with timestamp
  const setCachedData = async (key, data) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      await AsyncStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error setting cached data:', error);
    }
  };

  const saveUserProfile = async (data, screenNumber = null) => {
    if (!user) {
      throw new Error('User not available');
    }

    try {
      const userRef = doc(db, "Users", user.id);
      
      // Get existing data first to preserve it
      const existingDoc = await getDoc(userRef);
      const existingData = existingDoc.exists() ? existingDoc.data() : {};

      // Calculate progress
      const progressMap = {
        1: 8, 2: 16, 3: 25, 4: 33, 5: 42, 6: 50, 
        7: 58, 8: 67, 9: 75, 10: 83, 11: 92, 12: 100, 13: 100
      };
      const progress = screenNumber ? progressMap[screenNumber] : existingData.profileProgress || 0;

      const email = user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress || '';

      const profileData = {
        ...existingData,
        ...data,
        email: email,
        clerkId: user.id,
        profileProgress: progress,
        updatedAt: serverTimestamp(),
        createdAt: existingData.createdAt || serverTimestamp()
      };

      // Save to Users collection
      await setDoc(userRef, profileData, { merge: true });

      // Update cache
      await setCachedData(`user_${user.id}`, profileData);
      setUserData(profileData);
      
      return profileData;
    } catch (err) {
      console.error("Error saving user profile:", err);
      throw err;
    }
  };

  const updateUserProfile = async (updates, screenNumber = null) => {
    if (!user) {
      throw new Error('User not available');
    }

    try {
      const userRef = doc(db, "Users", user.id);
      
      // Get user data
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        throw new Error('User document not found');
      }
      
      const userData = userDoc.data();
      
      // Calculate progress
      const progressMap = {
        1: 8, 2: 16, 3: 25, 4: 33, 5: 42, 6: 50, 
        7: 58, 8: 67, 9: 75, 10: 83, 11: 92, 12: 100, 13: 100
      };
      const progress = screenNumber ? progressMap[screenNumber] : userData.profileProgress || 0;

      const updateData = {
        ...updates,
        profileProgress: progress,
        updatedAt: serverTimestamp()
      };

      // Update document
      await updateDoc(userRef, updateData);

      // Update cache
      const updatedData = { ...userData, ...updateData };
      await setCachedData(`user_${user.id}`, updatedData);
      setUserData(updatedData);
      
      return updateData;
    } catch (err) {
      console.error("Error updating user profile:", err);
      throw err;
    }
  };

  const getUserData = async (forceRefresh = false) => {
    if (!user) return;
    
    try {
      // Try to get from cache first
      if (!forceRefresh) {
        const cachedData = await getCachedData(`user_${user.id}`);
        if (cachedData) {
          setUserData(cachedData);
          setLoading(false);
          return;
        }
      }
      
      // Fetch from Firestore if not in cache or forced refresh
      const userRef = doc(db, "Users", user.id);
      const docSnap = await getDoc(userRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
        await setCachedData(`user_${user.id}`, data);
      } else {
        setUserData(null);
      }
    } catch (err) {
      setError(err);
      console.error("Error getting user data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch profiles with caching
  const fetchProfiles = async (genderToFetch, limitCount = 10, specificUserId = null) => {
    if (!user) return [];
    
    const cacheKey = specificUserId ? `profile_${specificUserId}` : `profiles_${genderToFetch}_${limitCount}`;
    
    // Try to get from cache first
    const cachedProfiles = await getCachedData(cacheKey);
    if (cachedProfiles) {
      return specificUserId ? [cachedProfiles] : cachedProfiles;
    }
    
    try {
      if (specificUserId) {
        // Fetch specific user profile
        const userRef = doc(db, 'Users', specificUserId);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const userData = userSnap.data();
          const profile = {
            id: specificUserId,
            ...userData
          };
          
          // Cache the result
          await setCachedData(cacheKey, profile);
          return [profile];
        }
        return [];
      }
      
      const profilesRef = collection(db, 'Users');
      const q = query(
        profilesRef, 
        where('gender', '==', genderToFetch),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const profiles = [];
      
      querySnapshot.forEach((doc) => {
        const profileData = doc.data();
        if (doc.id !== user.id) {
          profiles.push({
            id: doc.id,
            ...profileData
          });
        }
      });
      
      // Cache the results
      await setCachedData(cacheKey, profiles);
      return profiles;
    } catch (error) {
      console.error('Error fetching profiles:', error);
      return [];
    }
  };

  // Update verification status
  const updateVerificationStatus = async (userId, status) => {
    try {
      const userRef = doc(db, "Users", userId);
      await updateDoc(userRef, {
        verificationStatus: status,
        updatedAt: serverTimestamp()
      });
      
      // Update cache if needed
      const cachedData = await getCachedData(`user_${userId}`);
      if (cachedData) {
        const updatedData = { ...cachedData, verificationStatus: status };
        await setCachedData(`user_${userId}`, updatedData);
      }
      
      // Also update profiles cache if this user is cached there
      const cachedProfiles = await getCachedData(`profiles_${cachedData?.gender}_10`);
      if (cachedProfiles && Array.isArray(cachedProfiles)) {
        const updatedProfiles = cachedProfiles.map(profile => 
          profile.id === userId ? { ...profile, verificationStatus: status } : profile
        );
        await setCachedData(`profiles_${cachedData?.gender}_10`, updatedProfiles);
      }
      
      return true;
    } catch (error) {
      console.error("Error updating verification status:", error);
      throw error;
    }
  };

  // Get all users for admin
  const getAllUsers = async () => {
    try {
      const usersRef = collection(db, 'Users');
      const querySnapshot = await getDocs(usersRef);
      
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return users;
    } catch (error) {
      console.error('Error getting all users:', error);
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      getUserData();
    } else {
      setLoading(false);
    }
  }, [user]);

  return {
    userData,
    loading,
    error,
    saveUserProfile,
    updateUserProfile,
    refreshUserData: () => getUserData(true),
    fetchProfiles,
    updateVerificationStatus,
    getAllUsers
  };
};