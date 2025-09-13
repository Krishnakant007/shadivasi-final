// // // import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// // // import { useFonts } from 'expo-font';
// // // import { Stack } from 'expo-router';
// // // import { StatusBar } from 'expo-status-bar';
// // // import 'react-native-reanimated';

// // // import { useColorScheme } from '@/hooks/useColorScheme';

// // // export default function RootLayout() {
// // //   const colorScheme = useColorScheme();
// // //   const [loaded] = useFonts({
// // //     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
// // //   });

// // //   if (!loaded) {
// // //     // Async font loading only occurs in development.
// // //     return null;
// // //   }

// // //   return (
// // //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// // //       <Stack>
// // //         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// // //         <Stack.Screen name="+not-found" />
// // //       </Stack>
// // //       <StatusBar style="auto" />
// // //     </ThemeProvider>
// // //   );
// // // }




// // //12/8/2025
// // // app/_layout.jsx
// // import { Stack } from "expo-router";
// // import { LanguageProvider } from './context/LanguageContext';
// // // import { AuthProvider } from './context/AuthContext';

// // export default function RootLayout() {
// //   return (
// //     <LanguageProvider>
     
// //         <Stack screenOptions={{ headerShown: false }}>
// //           <Stack.Screen name="(tabs)" />
// //           <Stack.Screen name="login" />
// //           <Stack.Screen name="login/signup" />
// //           <Stack.Screen name="login/login-email" />
// //           <Stack.Screen name="homescreens/info1" />
// //           <Stack.Screen name="homescreens/info2" />
//           // <Stack.Screen name="homescreens/info3" />
//           //  <Stack.Screen name="homescreens/info4" />
//           // <Stack.Screen name="homescreens/info5" />
//           // <Stack.Screen name="homescreens/info6" />
//           // <Stack.Screen name="homescreens/info7" />
//           // <Stack.Screen name="homescreens/info8" />
//           // <Stack.Screen name="homescreens/info9" />
//           // <Stack.Screen name="homescreens/info10" />
// //           <Stack.Screen name="homescreens/info11" />
// //           <Stack.Screen name="homescreens/info12" />
// //         </Stack>
    
// //     </LanguageProvider>
// //   );
// // }





// // 13-8-2025



















// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { LanguageProvider } from './context/LanguageContext';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <Stack screenOptions={{ headerShown: false }}>
// //           <Stack.Screen name="(auth)" />
// //           <Stack.Screen name="(tabs)" />
// //           <Stack.Screen name="homescreens/info1" />
//         //  <Stack.Screen name="homescreens/info2" />
//         //     <Stack.Screen name="homescreens/info3" />
//         //    <Stack.Screen name="homescreens/info4" />
//         //   <Stack.Screen name="homescreens/info5" />
//         //   <Stack.Screen name="homescreens/info6" />
//         //   <Stack.Screen name="homescreens/info7" />
//         //   <Stack.Screen name="homescreens/info8" />
//         //   <Stack.Screen name="homescreens/info9" />
//         //   <Stack.Screen name="homescreens/info10" />
//         //   <Stack.Screen name="homescreens/info11" />
// //         </Stack>
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }



// // //app/_layout.jsx
// // import { Stack, Redirect } from "expo-router";
// // import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import { useEffect, useState } from "react";

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // function AuthStateHandler({ children }) {
// //   const { isLoaded, isSignedIn, user } = useAuth();
// //   const [isCheckingAuth, setIsCheckingAuth] = useState(true);

// //   useEffect(() => {
// //     if (isLoaded) {
// //       setIsCheckingAuth(false);
// //     }
// //   }, [isLoaded]);

// //   if (isCheckingAuth) {
// //     return (
// //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //         <ActivityIndicator size="large" />
// //       </View>
// //     );
// //   }

// //   if (!isSignedIn) {
// //     return <Redirect href="/" />;
// //   }

// //   if (!user?.publicMetadata?.profileCompleted) {
// //     return <Redirect href="/homescreens/info1" />;
// //   }

// //   return children;
// // }

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <AuthStateHandler>
// //           <Stack screenOptions={{ headerShown: false }}>
// //             <Stack.Screen name="(auth)" />
// //             <Stack.Screen name="(tabs)" />
// //             <Stack.Screen name="homescreens/info1" />
// //             <Stack.Screen name="homescreens/info2" />
// //             <Stack.Screen name="homescreens/info3" />
// //             <Stack.Screen name="homescreens/info4" />
// //             <Stack.Screen name="homescreens/info5" />
// //             <Stack.Screen name="homescreens/info6" />
// //             <Stack.Screen name="homescreens/info7" />
// //             <Stack.Screen name="homescreens/info8" />
// //             <Stack.Screen name="homescreens/info9" />
// //             <Stack.Screen name="homescreens/info10" />
// //             <Stack.Screen name="homescreens/info11" />
// //             <Stack.Screen name="homescreens/info12" />
// //           </Stack>
// //         </AuthStateHandler>
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }




// //app/_layout.jsx

// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import AuthStateHandler from './components/AuthStateHandler';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <AuthStateHandler />
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }





// //14-08-2025
// // app/_layout.jsx
// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import AuthStateHandler from './components/AuthStateHandler';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <AuthStateHandler />
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }




// // import { Slot } from 'expo-router';
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { LanguageProvider } from './context/LanguageContext';
// // import { useEffect } from 'react';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   useEffect(() => {
// //     // Clean up the URL if it contains the OAuth callback
// //     if (typeof window !== 'undefined' && window.location.href.includes('oauth-native-callback')) {
// //       window.history.replaceState(null, '', '/');
// //     }
// //   }, []);

// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <Slot />
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }







// // // app/_layout.jsx
// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import AuthStateHandler from './components/AuthStateHandler';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <AuthStateHandler />
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // } 


// // // app/_layout.jsx
// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import { ProfileProvider } from './context/ProfileContext';
// // import AuthStateHandler from './components/AuthStateHandler';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <ProfileProvider>
// //           <AuthStateHandler />
// //         </ProfileProvider>
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }










// //15/0/2025

// // app/_layout.jsx
// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import { ProfileProvider } from './context/ProfileContext';
// // import AuthStateHandler from './components/AuthStateHandler';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <ProfileProvider>
// //           <AuthStateHandler />
// //         </ProfileProvider>
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }











// // 15/08/2025

// // app/_layout.jsx
// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import { ProfileProvider } from './context/ProfileContext';
// // import AuthStateHandler from './components/AuthStateHandler';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <ProfileProvider>
// //           <AuthStateHandler />
// //         </ProfileProvider>
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }






// // app/_layout.jsx
// // import { Stack } from "expo-router";
// // import { ClerkProvider } from "@clerk/clerk-expo";
// // import * as SecureStore from "expo-secure-store";
// // import { ActivityIndicator, View } from "react-native";
// // import { LanguageProvider } from './context/LanguageContext';
// // import { ProfileProvider } from './context/ProfileContext';
// // import AuthStateHandler from './components/AuthStateHandler';

// // const tokenCache = {
// //   async getToken(key) {
// //     try {
// //       return SecureStore.getItemAsync(key);
// //     } catch (err) {
// //       return null;
// //     }
// //   },
// //   async saveToken(key, value) {
// //     try {
// //       return SecureStore.setItemAsync(key, value);
// //     } catch (err) {
// //       return;
// //     }
// //   },
// // };

// // export default function RootLayout() {
// //   return (
// //     <ClerkProvider
// //       tokenCache={tokenCache}
// //       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
// //     >
// //       <LanguageProvider>
// //         <ProfileProvider>
// //           <AuthStateHandler />
// //         </ProfileProvider>
// //       </LanguageProvider>
// //     </ClerkProvider>
// //   );
// // }








// // 16


// // app/_layout.jsx
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from "expo-secure-store";
// import { ActivityIndicator, View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';



// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// // ... other imports ...

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <ProfileProgressProvider>
//             <AuthStateHandler />
//           </ProfileProgressProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }








// // app/_layout.jsx
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from "expo-secure-store";
// import { ActivityIndicator, View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <ProfileProgressProvider>
//             <AuthStateHandler />
//           </ProfileProgressProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }




//29/08/2025
// app/_layout.jsx
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from "expo-secure-store";
// import { ActivityIndicator, View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// import { AuthProvider } from '../app/context/AuthContext';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// function AppContent() {
//   return (
//     <ProfileProgressProvider>
//       <AuthStateHandler />
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="chat/[id]" options={{ headerShown: true, title: 'Chat' }} />
//         <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: 'Profile' }} />
//       </Stack>
//     </ProfileProgressProvider>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <AuthProvider>
//             <AppContent />
//           </AuthProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }









//31/08/2025
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from "expo-secure-store";
// import { View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// import { AuthProvider } from '../app/context/AuthContext';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// function AppContent() {
//   return (
//     <ProfileProgressProvider>
//       <AuthStateHandler />
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="chat/[id]" options={{ headerShown: true, title: 'Chat' }} />
//         <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: 'Profile' }} />
//       </Stack>
//     </ProfileProgressProvider>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <AuthProvider>
//             <AppContent />
//           </AuthProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }










//app/_layout.jsx // original
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from "expo-secure-store";
// import { View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// import { AuthProvider } from '../app/context/AuthContext';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// function AppContent() {
//   return (
//     <ProfileProgressProvider>
//       <AuthStateHandler />
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="chat/[id]" options={{ headerShown: true, title: 'Chat' }} />
//         <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: 'Profile' }} />
//       </Stack>
//     </ProfileProgressProvider>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <AuthProvider>
//             <AppContent />
//           </AuthProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }






//31/08/2025

// app/_layout.jsx
// app/_layout.jsx
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from 'expo-secure-store';
// import { View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// import { AuthProvider } from './context/AuthContext';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// function AppContent() {
//   return (
//     <ProfileProgressProvider>
//       <AuthStateHandler />
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="(tabs)" />
//         <Stack.Screen name="chat/[id]" options={{ headerShown: false, title: 'Chat' }} />
//         <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: 'Profile' }} />
//       </Stack>
//     </ProfileProgressProvider>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <AuthProvider>
//             <AppContent />
//           </AuthProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }




//10/09/2025
// app/_layout.jsx
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from 'expo-secure-store';
// import { View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// import { AuthProvider } from './context/AuthContext';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// function AppContent() {
//   return (
//     <ProfileProgressProvider>
//       <AuthStateHandler />
//       <Stack screenOptions={{ headerShown: false }}>
//         {/* Tab Navigator */}
//         <Stack.Screen name="(tabs)" />
        
//         {/* Chat Screens */}
//         <Stack.Screen name="chat/[id]" options={{ headerShown: false, title: 'Chat' }} />
        
//         {/* Profile Screens */}
//         <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: 'Profile' }} />
        
//         {/* New Screens - Add all your new screens here */}
//         <Stack.Screen name="EditProfile" options={{ headerShown: false }} />
//         <Stack.Screen name="EditPartnerPreference" options={{ headerShown: false }} />
//         <Stack.Screen name="AccountSettings" options={{ headerShown: false }} />
//         <Stack.Screen name="TermsAndConditions" options={{ headerShown: false }} />
//         <Stack.Screen name="PrivacyPolicy" options={{ headerShown: false }} />
//         <Stack.Screen name="DailyMatches" options={{ headerShown: false }} />
//         <Stack.Screen name="HelpSupport" options={{ headerShown: false }} />
        
//         {/* Add any other screens you might have */}
//         <Stack.Screen name="Upgrade" options={{ headerShown: false }} />
//         <Stack.Screen name="Matches" options={{ headerShown: false }} />
//         <Stack.Screen name="Messages" options={{ headerShown: false }} />
//       </Stack>
//     </ProfileProgressProvider>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <AuthProvider>
//             <AppContent />
//           </AuthProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }


//11/09/2025
// app/_layout.jsx
// import { Stack } from "expo-router";
// import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
// import * as SecureStore from 'expo-secure-store';
// import { View } from "react-native";
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import AuthStateHandler from './components/AuthStateHandler';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// import { AuthProvider } from './context/AuthContext';
// import { NotificationProvider } from './context/NotificationContext';
// import { registerForPushNotificationsAsync } from './services/notificationHandler';
// import { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { navigationRef } from './services/navigationRef';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// function AppContent() {
//   // Register for push notifications
//   useEffect(() => {
//     registerForPushNotificationsAsync();
//   }, []);

//   return (
//     <NavigationContainer ref={navigationRef}>
//       <NotificationProvider>
//         <ProfileProgressProvider>
//           <AuthStateHandler />
//           <Stack screenOptions={{ headerShown: false }}>
//             {/* Tab Navigator */}
//             <Stack.Screen name="(tabs)" />
            
//             {/* Auth Screens */}
//             <Stack.Screen name="(auth)" />
            
//             {/* Chat Screens */}
//             <Stack.Screen name="chat/[id]" options={{ headerShown: false, title: 'Chat' }} />
            
//             {/* Profile Screens */}
//             <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: 'Profile' }} />
            
//             {/* New Screens - Add all your new screens here */}
//             <Stack.Screen name="EditProfile" options={{ headerShown: false }} />
//             <Stack.Screen name="EditPartnerPreference" options={{ headerShown: false }} />
//             <Stack.Screen name="AccountSettings" options={{ headerShown: false }} />
//             <Stack.Screen name="TermsAndConditions" options={{ headerShown: false }} />
//             <Stack.Screen name="PrivacyPolicy" options={{ headerShown: false }} />
//             <Stack.Screen name="DailyMatches" options={{ headerShown: false }} />
//             <Stack.Screen name="HelpSupport" options={{ headerShown: false }} />
            
//             {/* Add any other screens you might have */}
//             <Stack.Screen name="Upgrade" options={{ headerShown: false }} />
//             <Stack.Screen name="Matches" options={{ headerShown: false }} />
//             <Stack.Screen name="Messages" options={{ headerShown: false }} />
//           </Stack>
//         </ProfileProgressProvider>
//       </NotificationProvider>
//     </NavigationContainer>
//   );
// }

// export default function RootLayout() {
//   return (
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
//     >
//       <LanguageProvider>
//         <ProfileProvider>
//           <AuthProvider>
//             <AppContent />
//           </AuthProvider>
//         </ProfileProvider>
//       </LanguageProvider>
//     </ClerkProvider>
//   );
// }


//trail2
// import { Stack } from "expo-router";
// import { ClerkProvider } from "@clerk/clerk-expo";
// import * as SecureStore from 'expo-secure-store';
// import { LanguageProvider } from './context/LanguageContext';
// import { ProfileProvider } from './context/ProfileContext';
// import { ProfileProgressProvider } from './context/ProfileProgressContext';
// import { AuthProvider } from './context/AuthContext';
// import { NotificationProvider } from './context/NotificationContext';

// // Clerk token cache setup
// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

// /**
//  * This is the main content of the app, wrapped in all necessary providers.
//  * The <Stack /> navigator from Expo Router renders the actual screens.
//  */
// function AppContent() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="(tabs)" />
//       <Stack.Screen name="(auth)" />
//       <Stack.Screen name="chat/[id]" />
//       <Stack.Screen name="profile/[id]" />
//       <Stack.Screen name="EditProfile" />
//       <Stack.Screen name="EditPartnerPreference" />
//       <Stack.Screen name="AccountSettings" />
//       <Stack.Screen name="TermsAndConditions" />
//       <Stack.Screen name="PrivacyPolicy" />
//       <Stack.Screen name="DailyMatches" />
//       <Stack.Screen name="HelpSupport" />
//       <Stack.Screen name="Upgrade" />
//     </Stack>
//   );
// }

// /**
//  * This is the root layout component.
//  * It sets up all the context providers, with ClerkProvider at the top.
//  */
// export default function RootLayout() {
//   const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

//   if (!publishableKey) {
//     throw new Error("Missing Clerk Publishable Key. Ensure EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is set in your environment variables.");
//   }

//   return (
//     // ClerkProvider MUST be the outermost provider to prevent auth-related crashes.
//     <ClerkProvider
//       tokenCache={tokenCache}
//       publishableKey={publishableKey}
//     >
//       <AuthProvider>
//         <LanguageProvider>
//           <ProfileProvider>
//             <NotificationProvider>
//               <ProfileProgressProvider>
//                 <AppContent />
//               </ProfileProgressProvider>
//             </NotificationProvider>
//           </ProfileProvider>
//         </LanguageProvider>
//       </AuthProvider>
//     </ClerkProvider>
//   );
// }



// 12/09/2025

// app/_layout.jsx
import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import * as SecureStore from 'expo-secure-store';
import { View } from "react-native";
import { LanguageProvider } from './context/LanguageContext';
import { ProfileProvider } from './context/ProfileContext';
import AuthStateHandler from './components/AuthStateHandler';
import { ProfileProgressProvider } from './context/ProfileProgressContext';
import { AuthProvider } from './context/AuthContext';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

function AppContent() {
  return (
    <ProfileProgressProvider>
      <AuthStateHandler />
      <Stack screenOptions={{ headerShown: false }}>
        {/* Tab Navigator */}
        <Stack.Screen name="(tabs)" />
        
        {/* Chat Screens */}
        <Stack.Screen name="chat/[id]" options={{ headerShown: false, title: 'Chat' }} />
        
        {/* Profile Screens */}
        <Stack.Screen name="profile/[id]" options={{ headerShown: true, title: 'Profile' }} />
        
        {/* New Screens - Add all your new screens here */}
        <Stack.Screen name="EditProfile" options={{ headerShown: false }} />
        <Stack.Screen name="EditPartnerPreference" options={{ headerShown: false }} />
        <Stack.Screen name="AccountSettings" options={{ headerShown: false }} />
        <Stack.Screen name="TermsAndConditions" options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyPolicy" options={{ headerShown: false }} />
        <Stack.Screen name="DailyMatches" options={{ headerShown: false }} />
        <Stack.Screen name="HelpSupport" options={{ headerShown: false }} />
        
        {/* Add any other screens you might have */}
        <Stack.Screen name="Upgrade" options={{ headerShown: false }} />
        <Stack.Screen name="Matches" options={{ headerShown: false }} />
        <Stack.Screen name="Messages" options={{ headerShown: false }} />
      </Stack>
    </ProfileProgressProvider>
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <LanguageProvider>
        <ProfileProvider>
          <AuthProvider>
            <AppContent />
          </AuthProvider>
        </ProfileProvider>
      </LanguageProvider>
    </ClerkProvider>
  );
}