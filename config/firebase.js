// // //config/firebase.js

// // import { initializeApp } from 'firebase/app';

// // import { getFirestore } from 'firebase/firestore';

// // const firebaseConfig = {
// //   apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
// //   authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
// //   projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
// //   storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
// //   measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);

// // export {  db };








// // // config/firebase.js
// // import { initializeApp } from 'firebase/app';
// // import { getFirestore } from 'firebase/firestore';

// // const firebaseConfig = {
// //   apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
// //   authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
// //   projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
// //   storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
// //   appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
// //   measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);

// // export { db };








// // config/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Storage
const storage = getStorage(app);

export { db, storage };






//11-09-2025
// config/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import { getMessaging } from 'firebase/messaging';

// // Firebase Config
// const firebaseConfig = {
//   apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase App
// const app = initializeApp(firebaseConfig);

// // Initialize Services
// const db = getFirestore(app);
// const storage = getStorage(app);
// const messaging = getMessaging(app);

// export { db, storage, messaging };
// export default app;
