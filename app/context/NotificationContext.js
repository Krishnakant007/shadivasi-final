// import React, { createContext, useContext, useState, useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { Platform } from 'react-native';
// import { useAuth } from './AuthContext';
// import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// const NotificationContext = createContext();

// export const useNotifications = () => {
//   const context = useContext(NotificationContext);
//   if (!context) {
//     throw new Error('useNotifications must be used within a NotificationProvider');
//   }
//   return context;
// };

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const { user } = useAuth();

//   // Configure notification handler
//   useEffect(() => {
//     Notifications.setNotificationHandler({
//       handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: true,
//       }),
//     });

//     // Request permissions
//     const requestPermissions = async () => {
//       const { status } = await Notifications.requestPermissionsAsync();
//       if (status !== 'granted') {
//         alert('You need to enable notifications to receive updates');
//       }
//     };

//     requestPermissions();
//   }, []);

//   // Listen for notifications when app is in foreground
//   useEffect(() => {
//     const subscription = Notifications.addNotificationReceivedListener(notification => {
//       setNotifications(prev => [notification, ...prev]);
//       setUnreadCount(prev => prev + 1);
//     });

//     return () => subscription.remove();
//   }, []);

//   // Listen for received interests and messages
//   useEffect(() => {
//     if (!user?.id) return;

//     // Listen for received interests
//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const interestsQuery = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const interestsUnsubscribe = onSnapshot(interestsQuery, async (querySnapshot) => {
//       for (const doc of querySnapshot.docChanges()) {
//         if (doc.type === 'added') {
//           const interest = doc.doc.data();
          
//           // Send notification for new interest
//           await Notifications.scheduleNotificationAsync({
//             content: {
//               title: 'New Interest Received!',
//               body: `${interest.fromUserName || 'Someone'} is interested in you`,
//               data: { type: 'interest', id: doc.doc.id, screen: 'Messages' },
//             },
//             trigger: null,
//           });
//         }
//       }
//     });

//     // Listen for new messages
//     const chatsRef = collection(db, 'chats');
//     const chatsQuery = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const chatsUnsubscribe = onSnapshot(chatsQuery, async (querySnapshot) => {
//       for (const doc of querySnapshot.docChanges()) {
//         if (doc.type === 'modified') {
//           const chat = doc.doc.data();
//           const otherParticipantId = chat.participantIds.find(id => id !== user.id);
          
//           // Check if this is a new message (not from current user)
//           if (chat.lastMessage && chat.lastMessageSenderId !== user.id) {
//             await Notifications.scheduleNotificationAsync({
//               content: {
//                 title: 'New Message',
//                 body: `${chat.lastMessageSenderName || 'Someone'}: ${chat.lastMessage}`,
//                 data: {
//                   type: 'message',
//                   chatId: doc.doc.id,
//                   screen: 'Chat',
//                   name: chat.lastMessageSenderName
//                 },
//               },
//               trigger: null,
//             });
//           }
//         }
//       }
//     });

//     return () => {
//       interestsUnsubscribe();
//       chatsUnsubscribe();
//     };
//   }, [user]);

//   const markAsRead = () => {
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   const clearNotifications = () => {
//     setNotifications([]);
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   const value = {
//     notifications,
//     unreadCount,
//     markAsRead,
//     clearNotifications,
//   };

//   return (
//     <NotificationContext.Provider value={value}>
//       {children}
//     </NotificationContext.Provider>
//   );
// };









//trail original
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { Platform } from 'react-native';
// import { useAuth } from './AuthContext';
// import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// const NotificationContext = createContext();

// export const useNotifications = () => {
//   const context = useContext(NotificationContext);
//   if (!context) {
//     throw new Error('useNotifications must be used within a NotificationProvider');
//   }
//   return context;
// };

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const { user } = useAuth();

//   // Configure notification handler
//   useEffect(() => {
//     Notifications.setNotificationHandler({
//       handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: true,
//       }),
//     });

//     // Request permissions
//     const requestPermissions = async () => {
//       const { status } = await Notifications.requestPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Notification permissions not granted');
//       }
//     };

//     requestPermissions();
//   }, []);

//   // Listen for notifications when app is in foreground
//   useEffect(() => {
//     const subscription = Notifications.addNotificationReceivedListener(notification => {
//       setNotifications(prev => [notification, ...prev]);
//       setUnreadCount(prev => prev + 1);
//     });

//     return () => subscription.remove();
//   }, []);

//   // Listen for received interests and messages
//   useEffect(() => {
//     if (!user?.id) return;

//     // Listen for received interests
//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const interestsQuery = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const interestsUnsubscribe = onSnapshot(interestsQuery, async (querySnapshot) => {
//       for (const doc of querySnapshot.docChanges()) {
//         if (doc.type === 'added') {
//           const interest = doc.doc.data();
          
//           // Send notification for new interest
//           await Notifications.scheduleNotificationAsync({
//             content: {
//               title: 'New Interest Received!',
//               body: `${interest.fromUserName || 'Someone'} is interested in you`,
//               data: { type: 'interest', id: doc.doc.id, screen: 'Messages' },
//             },
//             trigger: null,
//           });
//         }
//       }
//     });

//     // Listen for new messages
//     const chatsRef = collection(db, 'chats');
//     const chatsQuery = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const chatsUnsubscribe = onSnapshot(chatsQuery, async (querySnapshot) => {
//       for (const doc of querySnapshot.docChanges()) {
//         if (doc.type === 'modified') {
//           const chat = doc.doc.data();
//           const otherParticipantId = chat.participantIds.find(id => id !== user.id);
          
//           // Check if this is a new message (not from current user)
//           if (chat.lastMessage && chat.lastMessageSenderId !== user.id) {
//             await Notifications.scheduleNotificationAsync({
//               content: {
//                 title: 'New Message',
//                 body: `${chat.lastMessageSenderName || 'Someone'}: ${chat.lastMessage}`,
//                 data: {
//                   type: 'message',
//                   chatId: doc.doc.id,
//                   screen: 'Chat',
//                   name: chat.lastMessageSenderName
//                 },
//               },
//               trigger: null,
//             });
//           }
//         }
//       }
//     });

//     return () => {
//       interestsUnsubscribe();
//       chatsUnsubscribe();
//     };
//   }, [user]);

//   const markAsRead = () => {
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   const clearNotifications = () => {
//     setNotifications([]);
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   const value = {
//     notifications,
//     unreadCount,
//     markAsRead,
//     clearNotifications,
//   };

//   return (
//     <NotificationContext.Provider value={value}>
//       {children}
//     </NotificationContext.Provider>
//   );
// };



//trail2

// //NotificationContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { Platform } from 'react-native';
// import { useAuth } from './AuthContext';
// import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// const NotificationContext = createContext();

// export const useNotifications = () => {
//   const context = useContext(NotificationContext);
//   if (!context) {
//     throw new Error('useNotifications must be used within a NotificationProvider');
//   }
//   return context;
// };

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const { user } = useAuth();

//   // Configure notification handler
//   useEffect(() => {
//     Notifications.setNotificationHandler({
//       handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: true,
//       }),
//     });

//     // Request permissions
//     const requestPermissions = async () => {
//       const { status } = await Notifications.requestPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Notification permissions not granted');
//       }
//     };

//     requestPermissions();
//   }, []);

//   // Listen for notifications when app is in foreground
//   useEffect(() => {
//     const subscription = Notifications.addNotificationReceivedListener(notification => {
//       setNotifications(prev => [notification, ...prev]);
//       setUnreadCount(prev => prev + 1);
//     });

//     return () => subscription.remove();
//   }, []);

//   // Listen for received interests and messages
//   useEffect(() => {
//     if (!user?.id) return;

//     // Listen for received interests
//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const interestsQuery = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const interestsUnsubscribe = onSnapshot(interestsQuery, async (querySnapshot) => {
//       for (const doc of querySnapshot.docChanges()) {
//         if (doc.type === 'added') {
//           const interest = doc.doc.data();
          
//           // Send notification for new interest
//           await Notifications.scheduleNotificationAsync({
//             content: {
//               title: 'New Interest Received!',
//               body: `${interest.fromUserName || 'Someone'} is interested in you`,
//               data: { type: 'interest', id: doc.doc.id, screen: 'Messages' },
//             },
//             trigger: null,
//           });
//         }
//       }
//     });

//     // Listen for new messages
//     const chatsRef = collection(db, 'chats');
//     const chatsQuery = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const chatsUnsubscribe = onSnapshot(chatsQuery, async (querySnapshot) => {
//       for (const doc of querySnapshot.docChanges()) {
//         if (doc.type === 'modified') {
//           const chat = doc.doc.data();
//           const otherParticipantId = chat.participantIds.find(id => id !== user.id);
          
//           // Check if this is a new message (not from current user)
//           if (chat.lastMessage && chat.lastMessageSenderId !== user.id) {
//             await Notifications.scheduleNotificationAsync({
//               content: {
//                 title: 'New Message',
//                 body: `${chat.lastMessageSenderName || 'Someone'}: ${chat.lastMessage}`,
//                 data: {
//                   type: 'message',
//                   chatId: doc.doc.id,
//                   screen: 'Chat',
//                   name: chat.lastMessageSenderName
//                 },
//               },
//               trigger: null,
//             });
//           }
//         }
//       }
//     });

//     return () => {
//       interestsUnsubscribe();
//       chatsUnsubscribe();
//     };
//   }, [user]);

//   const markAsRead = () => {
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   const clearNotifications = () => {
//     setNotifications([]);
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   const value = {
//     notifications,
//     unreadCount,
//     markAsRead,
//     clearNotifications,
//   };

//   return (
//     <NotificationContext.Provider value={value}>
//       {children}
//     </NotificationContext.Provider>
//   );
// };




//trail3
// app/context/NotificationContext.js
// import { createContext, useContext, useState, useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { Platform } from 'react-native';
// import { useAuth } from '../hooks/useAuth'; // Corrected the import path
// import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// const NotificationContext = createContext();

// export const useNotifications = () => {
//   const context = useContext(NotificationContext);
//   if (!context) {
//     throw new Error('useNotifications must be used within a NotificationProvider');
//   }
//   return context;
// };

// export const NotificationProvider = ({ children }) => {
//   const [notifications, setNotifications] = useState([]);
//   const [unreadCount, setUnreadCount] = useState(0);
//   const { user } = useAuth();

//   // Configure notification handler for how incoming notifications are handled
//   useEffect(() => {
//     Notifications.setNotificationHandler({
//       handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: true,
//       }),
//     });

//     // Request permissions for notifications
//     const requestPermissions = async () => {
//       const { status } = await Notifications.requestPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Notification permissions not granted');
//       }
//     };

//     requestPermissions();
//   }, []);

//   // Listen for new notifications while the app is in the foreground
//   useEffect(() => {
//     const subscription = Notifications.addNotificationReceivedListener(notification => {
//       setNotifications(prev => [notification, ...prev]);
//       setUnreadCount(prev => prev + 1);
//     });

//     return () => subscription.remove();
//   }, []);

//   // Listen for backend events (interests and messages) to trigger notifications
//   useEffect(() => {
//     if (!user?.id) return;

//     // Listener for new received interests
//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const interestsQuery = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const interestsUnsubscribe = onSnapshot(interestsQuery, async (querySnapshot) => {
//       for (const change of querySnapshot.docChanges()) {
//         if (change.type === 'added') {
//           const interest = change.doc.data();
          
//           // Schedule a local notification for the new interest
//           await Notifications.scheduleNotificationAsync({
//             content: {
//               title: 'New Interest Received!',
//               body: `${interest.fromUserName || 'Someone'} is interested in you`,
//               data: { type: 'interest', id: change.doc.id, screen: 'Messages' },
//             },
//             trigger: null, // trigger immediately
//           });
//         }
//       }
//     });

//     // Listener for new messages in chats
//     const chatsRef = collection(db, 'chats');
//     const chatsQuery = query(
//       chatsRef, 
//       where('participantIds', 'array-contains', user.id)
//     );
    
//     const chatsUnsubscribe = onSnapshot(chatsQuery, async (querySnapshot) => {
//       for (const change of querySnapshot.docChanges()) {
//         // We check for 'modified' because a new message updates the chat document
//         if (change.type === 'modified') {
//           const chat = change.doc.data();
          
//           // Ensure the notification is for a message sent by the other user
//           if (chat.lastMessage && chat.lastMessageSenderId !== user.id) {
//             await Notifications.scheduleNotificationAsync({
//               content: {
//                 title: 'New Message',
//                 body: `${chat.lastMessageSenderName || 'Someone'}: ${chat.lastMessage}`,
//                 data: { 
//                   type: 'message', 
//                   chatId: change.doc.id, 
//                   screen: 'Chat',
//                   name: chat.lastMessageSenderName 
//                 },
//               },
//               trigger: null, // trigger immediately
//             });
//           }
//         }
//       }
//     });

//     // Cleanup listeners on component unmount
//     return () => {
//       interestsUnsubscribe();
//       chatsUnsubscribe();
//     };
//   }, [user]);

//   // Function to mark all notifications as read and reset the badge count
//   const markAsRead = () => {
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   // Function to clear all notifications from state and reset the badge
//   const clearNotifications = () => {
//     setNotifications([]);
//     setUnreadCount(0);
//     Notifications.setBadgeCountAsync(0);
//   };

//   // The value provided to consuming components
//   const value = {
//     notifications,
//     unreadCount,
//     markAsRead,
//     clearNotifications,
//   };

//   return (
//     <NotificationContext.Provider value={value}>
//       {children}
//     </NotificationContext.Provider>
//   );
// };

// // Add default export
// export default NotificationProvider;
