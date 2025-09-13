// //app/components/AuthStateHandler.jsx

// import { Stack } from "expo-router";
// import { ActivityIndicator, View } from "react-native";
// import { useAuth } from "../hooks/useAuth";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted } = useAuth();

//   if (!isLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <>
//           <Stack.Screen name="homescreens/info1" />
//           {/* Add all other info screens */}
//           <Stack.Screen name="homescreens/info12" />
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }









// app/components/AuthStateHandler.jsx
//14/08/2025
// import { Stack } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator, Alert } from "react-native";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted, user } = useAuth();

//   if (!isLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <>
//           <Stack.Screen name="homescreens/info1" />
//           <Stack.Screen name="homescreens/info12" />
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }


//trail2
// app/components/AuthStateHandler.jsx
// import { Stack, Redirect } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator } from "react-native";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted } = useAuth();

//   if (!isLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <>
//           <Stack.Screen name="homescreens/info1" />
//           <Stack.Screen name="homescreens/info12" />
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }








// import { Redirect } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator } from "react-native";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted } = useAuth();

//   if (!isLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   if (!isSignedIn) {
//     return <Redirect href="/" />;
//   }

//   if (!profileCompleted) {
//     return <Redirect href="/homescreens/info1" />;
//   }

//   return <Redirect href="/(tabs)" />;
// }










//  // app/components/AuthStateHandler.jsx
// import { Stack, Redirect } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator } from "react-native";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted } = useAuth();

//   if (!isLoaded) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <>
//             <Stack.Screen name="homescreens/info1" />
//             <Stack.Screen name="homescreens/info2" />
//             <Stack.Screen name="homescreens/info3" />
//             <Stack.Screen name="homescreens/info4" />
//             <Stack.Screen name="homescreens/info5" />
//             <Stack.Screen name="homescreens/info6" />
//             <Stack.Screen name="homescreens/info7" />
//             <Stack.Screen name="homescreens/info8" />
//             <Stack.Screen name="homescreens/info9" />
//             <Stack.Screen name="homescreens/info10" />
//             <Stack.Screen name="homescreens/info11" />
//             <Stack.Screen name="homescreens/info12" />
        
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }





//16
//original

// app/components/AuthStateHandler.jsx

// import { Stack, Redirect } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator } from "react-native";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted, loading } = useAuth();

//   if (!isLoaded || loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <>
//           <Stack.Screen name="homescreens/info1" />
//           <Stack.Screen name="homescreens/info2" />
//           <Stack.Screen name="homescreens/info3" />
//           <Stack.Screen name="homescreens/info4" />
//           <Stack.Screen name="homescreens/info5" />
//           <Stack.Screen name="homescreens/info6" />
//           <Stack.Screen name="homescreens/info7" />
//           <Stack.Screen name="homescreens/info8" />
//           <Stack.Screen name="homescreens/info9" />
//           <Stack.Screen name="homescreens/info10" />
//           <Stack.Screen name="homescreens/info11" />
//             <Stack.Screen name="homescreens/info12" />
//             <Stack.Screen name="homescreens/info13" />
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }


// app/components/AuthStateHandler.jsx
//original
// import { Stack } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator } from "react-native";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted, loading } = useAuth();

//   if (!isLoaded || loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <Stack.Screen name="homescreens/info8" />
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }


// app/components/AuthStateHandler.jsx  15082025
// app/components/AuthStateHandler.jsx
// import { Stack, Redirect } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { useFirebase } from "../hooks/useFirebase";
// import { View, ActivityIndicator } from "react-native";
// import { useEffect, useState } from "react";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, user } = useAuth();
//   const { getUserData } = useFirebase();
//   const [profileCompleted, setProfileCompleted] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkProfile = async () => {
//       if (isSignedIn && user) {
//         try {
//           const userData = await getUserData();
//           setProfileCompleted(userData?.profileCompleted || false);
//         } catch (error) {
//           console.error('Error checking profile:', error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };
    
//     checkProfile();
//   }, [isSignedIn, user]);

//   if (!isLoaded || loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <>
//           <Stack.Screen name="homescreens/info1" />
//           <Stack.Screen name="homescreens/info2" />
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }










//21/08/2025

// app/components/AuthStateHandler.jsx
// app/components/AuthStateHandler.jsx (updated) // orginal
// import { Stack, Redirect } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator } from "react-native";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted, loading } = useAuth();

//   if (!isLoaded || loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {!isSignedIn ? (
//         <Stack.Screen name="(auth)" />
//       ) : !profileCompleted ? (
//         <>
//           <Stack.Screen name="homescreens/info1" />
//           <Stack.Screen name="homescreens/info2" />
//           <Stack.Screen name="homescreens/info3" />
//           <Stack.Screen name="homescreens/info4" />
//           <Stack.Screen name="homescreens/info5" />
//           <Stack.Screen name="homescreens/info6" />
//           <Stack.Screen name="homescreens/info7" />
//           <Stack.Screen name="homescreens/info8" />
//           <Stack.Screen name="homescreens/info9" />
//           <Stack.Screen name="homescreens/info10" />
//           <Stack.Screen name="homescreens/info11" />
//           <Stack.Screen name="homescreens/info12" />
//           <Stack.Screen name="homescreens/info13" />
//         </>
//       ) : (
//         <Stack.Screen name="(tabs)" />
//       )}
//     </Stack>
//   );
// }









//trail2
// app/components/AuthStateHandler.jsx (updated)
// import { Stack, Redirect } from "expo-router";
// import { useAuth } from "../hooks/useAuth";
// import { View, ActivityIndicator } from "react-native";
// import ProfileProgressLoader from "./ProfileProgressLoader";

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn, profileCompleted, loading } = useAuth();

//   if (!isLoaded || loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   if (!isSignedIn) {
//     return <Redirect href="/" />;
//   }

//   if (profileCompleted) {
//     return <Redirect href="/(tabs)" />;
//   }

//   // Show progress loader which will redirect to the appropriate screen
//   return <ProfileProgressLoader />;
// }







//29/08/2025

// components/AuthStateHandler.js
// import { useEffect } from 'react';
// import { useAuth as useClerkAuth } from '@clerk/clerk-expo';
// import { useRouter, useSegments } from 'expo-router';
// import { View, ActivityIndicator } from 'react-native';
// import { useAuth } from '../context/AuthContext';

// export default function AuthStateHandler() {
//   const { isLoaded, isSignedIn } = useClerkAuth();
//   const { loading: authLoading } = useAuth();
//   const segments = useSegments();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isLoaded || authLoading) return;

//     const inAuthGroup = segments[0] === '(auth)';

//     if (isSignedIn && !authLoading) {
//       // User is signed in
//       if (inAuthGroup) {
//         router.replace('/(tabs)');
//       }
//     } else if (!isSignedIn) {
//       // User is not signed in
//       if (!inAuthGroup) {
//         router.replace('/(auth)/welcome');
//       }
//     }
//   }, [isSignedIn, isLoaded, segments, authLoading]);

//   if (!isLoaded || authLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" color="#FF6B6B" />
//       </View>
//     );
//   }

//   return null;
// }








//31
//App/components/AuthStateHandler.jsx
import { Redirect } from "expo-router";
import { useAuth } from "../hooks/useAuth";
import { View } from "react-native";
import ProfileProgressLoader from "./ProfileProgressLoader";

export default function AuthStateHandler() {
  const { isLoaded, isSignedIn, profileCompleted } = useAuth();

  // Don't show anything while loading
  if (!isLoaded) { 
    return <View />;
  }

  if (!isSignedIn) {
    return <Redirect href="/" />;
  }

  if (profileCompleted) {
    return <Redirect href="/(tabs)" />;
  }

  // Show progress loader which will redirect to the appropriate screen
  return <ProfileProgressLoader />;
}