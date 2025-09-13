// // hooks/useOnlineStatus.js
// import { useEffect } from 'react';
// import { doc, setDoc, onDisconnect, serverTimestamp } from 'firebase/firestore';
// import { db } fro../../config/firebasease';
// import { useAuth } fro../context/AuthContextext';

// export const useOnlineStatus = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     if (!user) return;

//     const userStatusRef = doc(db, 'onlineUsers', user.uid);
    
//     const setOnline = async () => {
//       await setDoc(userStatusRef, {
//         isOnline: true,
//         lastSeen: serverTimestamp()
//       });
      
//       // Setup disconnect handler
//       await onDisconnect(userStatusRef).set({
//         isOnline: false,
//         lastSeen: serverTimestamp()
//       });
//     };

//     setOnline();

//     // Cleanup on unmount
//     return () => {
//       setDoc(userStatusRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp()
//       }).catch(() => {});
//     };
//   }, [user]);
// };







//1/09/2025

// app/hooks/useOnlineStatus.js
// import { useEffect } from 'react';
// import { doc, setDoc, onDisconnect, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';

// export const useOnlineStatus = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     if (!user?.id) return;

//     const userStatusRef = doc(db, 'onlineUsers', user.id);
    
//     const setOnline = async () => {
//       try {
//         await setDoc(userStatusRef, {
//           isOnline: true,
//           lastSeen: serverTimestamp(),
//           userId: user.id,
//           userName: user.displayName || 'User'
//         });
        
//         // Setup disconnect handler
//         await onDisconnect(userStatusRef).set({
//           isOnline: false,
//           lastSeen: serverTimestamp(),
//           userId: user.id,
//           userName: user.displayName || 'User'
//         });
//       } catch (error) {
//         console.error('Error setting online status:', error);
//       }
//     };

//     setOnline();

//     // Cleanup on unmount
//     return () => {
//       setDoc(userStatusRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//         userId: user.id,
//         userName: user.displayName || 'User'
//       }).catch(() => {});
//     };
//   }, [user]);
// };








//trail2

// app/hooks/useOnlineStatus.js
// import { useEffect } from 'react';
// import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';

// export const useOnlineStatus = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     if (!user?.id) return;

//     const userStatusRef = doc(db, 'onlineUsers', user.id);
    
//     // Set user as online when component mounts
//     const setOnline = async () => {
//       try {
//         await setDoc(userStatusRef, {
//           isOnline: true,
//           lastSeen: serverTimestamp(),
//           userId: user.id,
//           userName: user.displayName || 'User'
//         });
//       } catch (error) {
//         console.error('Error setting online status:', error);
//       }
//     };

//     setOnline();

//     // Set user as offline when component unmounts
//     return () => {
//       setDoc(userStatusRef, {
//         isOnline: false,
//         lastSeen: serverTimestamp(),
//         userId: user.id,
//         userName: user.displayName || 'User'
//       }).catch(() => {});
//     };
//   }, [user]);
// };




//10/09/2025

//app/hooks/useOnlineStatus.js
import { useEffect } from 'react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../context/AuthContext';

export const useOnlineStatus = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.id) return;

    const userStatusRef = doc(db, 'onlineUsers', user.id);
    
    // Set user as online when component mounts
    const setOnline = async () => {
      try {
        await setDoc(userStatusRef, {
          isOnline: true,
          lastSeen: serverTimestamp(),
          userId: user.id,
          userName: user.displayName || 'User'
        });
      } catch (error) {
        console.error('Error setting online status:', error);
      }
    };

    setOnline();

    // Set user as offline when component unmounts
    return () => {
      setDoc(userStatusRef, {
        isOnline: false,
        lastSeen: serverTimestamp(),
        userId: user.id,
        userName: user.displayName || 'User'
      }).catch(() => {});
    };
  }, [user]);
};




//11/09/2025
// app/hooks/useOnlineStatus.js
// import { useEffect } from 'react';
// import { AppState } from 'react-native';
// import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from './useAuth';

// export const useOnlineStatus = () => {
//   const { user } = useAuth();

//   useEffect(() => {
//     // Do nothing if there is no authenticated user
//     if (!user?.id) return;

//     // A reusable function to update the user's status in Firestore
//     const updateOnlineStatus = async (isOnline) => {
//       try {
//         const userStatusRef = doc(db, 'onlineUsers', user.id);
//         await setDoc(userStatusRef, {
//           isOnline,
//           lastSeen: serverTimestamp(),
//           userId: user.id,
//           userName: user.displayName || 'User'
//         }, { merge: true }); // Use merge to avoid overwriting other fields
//       } catch (error) {
//         console.error('Error updating online status:', error);
//       }
//     };

//     // Set user as online when the hook is initially mounted
//     updateOnlineStatus(true);

//     // Subscribe to app state changes
//     const subscription = AppState.addEventListener('change', nextAppState => {
//       if (nextAppState === 'active') {
//         // App has come to the foreground, set user as online
//         updateOnlineStatus(true);
//       } else {
//         // App has gone to the background or is inactive, set user as offline
//         updateOnlineStatus(false);
//       }
//     });

//     // Cleanup function that runs when the component unmounts
//     return () => {
//       // Remove the AppState listener to prevent memory leaks
//       subscription?.remove();
      
//       // Explicitly set user as offline when the component unmounts
//       // This preserves the "old functionality" and handles cases like logout
//       updateOnlineStatus(false);
//     };
//   }, [user]); // Re-run this effect if the user changes
// };

// export default useOnlineStatus;





//tril2