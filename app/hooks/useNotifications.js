// import { useEffect, useRef } from 'react';
// import * as Notifications from 'expo-notifications';
// import { Platform } from 'react-native';
// import * as Device from 'expo-device';

// export const useNotifications = () => {
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     // This listener is called whenever a notification is received while the app is foregrounded
//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       console.log('Notification received:', notification);
//     });

//     // This listener is called whenever a user taps on or interacts with a notification
//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log('Notification response:', response);
      
//       // Handle navigation based on notification data
//       const { data } = response.notification.request.content;
//       if (data.screen === 'Messages') {
//         // Navigate to messages screen
//       } else if (data.screen === 'Chat' && data.chatId) {
//         // Navigate to specific chat
//       }
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   const registerForPushNotifications = async () => {
//     if (Platform.OS === 'android') {
//       await Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: '#FF231F7C',
//       });
//     }

//     if (Device.isDevice) {
//       const { status: existingStatus } = await Notifications.getPermissionsAsync();
//       let finalStatus = existingStatus;
      
//       if (existingStatus !== 'granted') {
//         const { status } = await Notifications.requestPermissionsAsync();
//         finalStatus = status;
//       }
      
//       if (finalStatus !== 'granted') {
//         alert('Failed to get push token for push notification!');
//         return;
//       }
      
//       const token = (await Notifications.getExpoPushTokenAsync()).data;
//       console.log('Expo push token:', token);
      
//       return token;
//     } else {
//       alert('Must use physical device for Push Notifications');
//     }
//   };

//   return {
//     registerForPushNotifications,
//   };
// };