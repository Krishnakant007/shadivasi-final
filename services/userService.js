// // // app/services/userService.js
// // import { db } from '../config/firebase';
// // import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

// // export const createUserProfile = async (userId, userData) => {
// //   try {
// //     const userRef = doc(db, 'Users', userId);
// //     await setDoc(userRef, {
// //       ...userData,
// //       clerkUserId: userId, // Store Clerk user ID for reference
// //       createdAt: new Date(),
// //       updatedAt: new Date(),
// //     });
// //     return true;
// //   } catch (error) {
// //     console.error('Error creating user profile:', error);
// //     return false;
// //   }
// // };

// // export const getUserProfile = async (userId) => {
// //   try {
// //     const userRef = doc(db, 'Users', userId);
// //     const docSnap = await getDoc(userRef);
    
// //     if (docSnap.exists()) {
// //       return docSnap.data();
// //     }
// //     return null;
// //   } catch (error) {
// //     console.error('Error getting user profile:', error);
// //     return null;
// //   }
// // };

// // export const updateUserProfile = async (userId, updatedData) => {
// //   try {
// //     const userRef = doc(db, 'Users', userId);
// //     await updateDoc(userRef, {
// //       ...updatedData,
// //       updatedAt: new Date(),
// //     });
// //     return true;
// //   } catch (error) {
// //     console.error('Error updating user profile:', error);
// //     return false;
// //   }
// // };







// // services/userService.js
// import { db } from '../config/firebase';
// import { doc, setDoc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';

// export const createUserProfile = async (userId, userData) => {
//   try {
//     const userRef = doc(db, 'Users', userId);
//     await setDoc(userRef, {
//       ...userData,
//       createdAt: serverTimestamp(),
//       updatedAt: serverTimestamp(),
//       lastLogin: serverTimestamp(),
//       profileCompleted: false
//     });
//     return true;
//   } catch (error) {
//     console.error('Error creating user profile:', error);
//     throw error;
//   }
// };

// export const getUserProfile = async (userId) => {
//   try {
//     const userRef = doc(db, 'Users', userId);
//     const docSnap = await getDoc(userRef);
//     return docSnap.exists() ? docSnap.data() : null;
//   } catch (error) {
//     console.error('Error getting user profile:', error);
//     throw error;
//   }
// };

// export const updateUserProfile = async (userId, updatedData) => {
//   try {
//     const userRef = doc(db, 'Users', userId);
//     await updateDoc(userRef, {
//       ...updatedData,
//       updatedAt: serverTimestamp()
//     });
//     return true;
//   } catch (error) {
//     console.error('Error updating user profile:', error);
//     throw error;
//   }
// };




