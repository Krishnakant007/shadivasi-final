//11/09/2025
// //app/services/notificationHandler.js
// import * as Notifications from 'expo-notifications';
// import * as Device from 'expo-device';
// import { Platform } from 'react-native';

// // This should be called in your _layout.jsx
// export const registerForPushNotificationsAsync = async () => {
//   let token;
  
//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
    
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
    
//     if (finalStatus !== 'granted') {
//       console.log('Failed to get push token for push notification!');
//       return;
//     }
    
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//   } else {
//     console.log('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF6B6B',
//     });
//   }

//   return token;
// };

// // Handle notification when app is in background or quit
// Notifications.addNotificationResponseReceivedListener(response => {
//   const { data } = response.notification.request.content;
  
//   // You can navigate to specific screens based on the notification data
//   // This will require additional navigation setup
//   console.log('Notification received with data:', data);
// });


//trail2
// app/services/notificationHandler.js
// import * as Notifications from 'expo-notifications';
// import * as Device from 'expo-device';
// import { Platform } from 'react-native';
// import { navigate } from './navigationRef';

// // This should be called in your _layout.jsx
// export const registerForPushNotificationsAsync = async () => {
//   let token;
  
//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
    
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
    
//     if (finalStatus !== 'granted') {
//       console.log('Failed to get push token for push notification!');
//       return;
//     }
    
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//   } else {
//     console.log('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF6B6B',
//     });
//   }

//   return token;
// };

// // Handle notification when app is in background or quit
// Notifications.addNotificationResponseReceivedListener(response => {
//   const { data } = response.notification.request.content;
  
//   // Navigate to specific screens based on the notification data
//   if (data.screen === 'Messages') {
//     navigate('(tabs)/Messages');
//   } else if (data.screen === 'Chat' && data.chatId) {
//     navigate('chat/[id]', { 
//       id: data.chatId,
//       name: data.name || 'User' 
//     });
//   }
  
//   // Keep the original console log for debugging
//   console.log('Notification received with data:', data);
// });


// // import * as Notifications from 'expo-notifications';
// // import * as Device from 'expo-device';
// // import { Platform } from 'react-native';
// // import { useRouter } from 'expo-router';

// // // This should be called in your App.js
// // export const registerForPushNotificationsAsync = async () => {
// //   let token;
  
// //   if (Device.isDevice) {
// //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
// //     let finalStatus = existingStatus;
    
// //     if (existingStatus !== 'granted') {
// //       const { status } = await Notifications.requestPermissionsAsync();
// //       finalStatus = status;
// //     }
    
// //     if (finalStatus !== 'granted') {
// //       alert('Failed to get push token for push notification!');
// //       return;
// //     }
    
// //     token = (await Notifications.getExpoPushTokenAsync()).data;
// //   } else {
// //     alert('Must use physical device for Push Notifications');
// //   }

// //   if (Platform.OS === 'android') {
// //     Notifications.setNotificationChannelAsync('default', {
// //       name: 'default',
// //       importance: Notifications.AndroidImportance.MAX,
// //       vibrationPattern: [0, 250, 250, 250],
// //       lightColor: '#FF6B6B',
// //     });
// //   }

// //   return token;
// // };

// // // Handle notification when app is in background or quit
// // Notifications.addNotificationResponseReceivedListener(response => {
// //   const { data } = response.notification.request.content;
  
// //   // You can navigate to specific screens based on the notification data
// //   if (data.screen === 'Messages') {
// //     // Use a navigation method that works from outside React components
// //     // This might require a navigation ref
// //   } else if (data.screen === 'Chat' && data.chatId) {
// //     // Navigate to chat screen
// //   }
// // });






