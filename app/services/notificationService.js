// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// export const sendInterestNotification = async (toUserId, fromUserId, fromUserName) => {
//   try {
//     // Store notification in Firestore
//     const notificationRef = collection(db, 'Users', toUserId, 'notifications');
//     await addDoc(notificationRef, {
//       type: 'interest',
//       fromUserId,
//       fromUserName,
//       message: `${fromUserName} is interested in you`,
//       timestamp: serverTimestamp(),
//       read: false,
//     });
    
//     // In a real app, you would also send a push notification via FCM
//     console.log('Interest notification sent to:', toUserId);
//   } catch (error) {
//     console.error('Error sending interest notification:', error);
//   }
// };

// export const sendMessageNotification = async (toUserId, fromUserId, fromUserName, message, chatId) => {
//   try {
//     // Store notification in Firestore
//     const notificationRef = collection(db, 'Users', toUserId, 'notifications');
//     await addDoc(notificationRef, {
//       type: 'message',
//       fromUserId,
//       fromUserName,
//       message,
//       chatId,
//       timestamp: serverTimestamp(),
//       read: false,
//     });
    
//     // In a real app, you would also send a push notification via FCM
//     console.log('Message notification sent to:', toUserId);
//   } catch (error) {
//     console.error('Error sending message notification:', error);
//   }
// };