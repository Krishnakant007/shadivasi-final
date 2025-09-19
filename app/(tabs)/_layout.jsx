// // import { Tabs } from 'expo-router';
// // import React from 'react';
// // import { Platform } from 'react-native';

// // import { HapticTab } from '@/components/HapticTab';
// // import { IconSymbol } from '@/components/ui/IconSymbol';
// // import TabBarBackground from '@/components/ui/TabBarBackground';
// // import { Colors } from '@/constants/Colors';
// // import { useColorScheme } from '@/hooks/useColorScheme';

// // export default function TabLayout() {
// //   const colorScheme = useColorScheme();

// //   return (
// //     <Tabs
// //       screenOptions={{
// //         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
// //         headerShown: false,
// //         tabBarButton: HapticTab,
// //         tabBarBackground: TabBarBackground,
// //         tabBarStyle: Platform.select({
// //           ios: {
// //             // Use a transparent background on iOS to show the blur effect
// //             position: 'absolute',
// //           },
// //           default: {},
// //         }),
// //       }}>
// //       <Tabs.Screen
// //         name="index"
// //         options={{
// //           title: 'Home',
// //           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
// //         }}
// //       />
// //       <Tabs.Screen
// //         name="explore"
// //         options={{
// //           title: 'Explore',
// //           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
// //         }}
// //       />
// //     </Tabs>
// //   );
// // }


// //app/(tabs)/_layout.jsx

// // import { Tabs } from "expo-router";
// // import { FontAwesome } from "@expo/vector-icons";
// // import { useAuth } from "../hooks/useAuth";
// // import { Redirect } from "expo-router";
// // import { ActivityIndicator, View } from "react-native";

// // export default function TabsLayout() {
// //   const { isLoaded, isSignedIn, profileCompleted } = useAuth();

// //   if (!isLoaded) {
// //     return (
// //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //         <ActivityIndicator size="large" />
// //       </View>
// //     );
// //   }

// //   if (!isSignedIn) {
// //     return <Redirect href="/" />;
// //   }

// //   if (!profileCompleted) {
// //     return <Redirect href="/homescreens/info1" />;
// //   }

// //   return (
// //      <Tabs screenOptions={{ headerShown: false }}>
// //       <Tabs.Screen 
// //         name="index"
// //         options={{
// //           tabBarLabel: 'Home',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="home" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Matches"
// //         options={{
// //           tabBarLabel: 'Matches',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="heart" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Interests"
// //         options={{
// //           tabBarLabel: 'Interests',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="star" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Messages"
// //         options={{
// //           tabBarLabel: 'Messages',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="envelope" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Upgrade"
// //         options={{
// //           tabBarLabel: 'Upgrade',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="diamond" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Profile"
// //         options={{
// //           tabBarLabel: 'Profile',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="cog" size={size} color={color} />
// //           )
// //         }}
// //       />
// //     </Tabs>
// //   );
// // }











// // import { Tabs } from "expo-router";
// // import { FontAwesome } from "@expo/vector-icons";
// // import { useAuth } from "../hooks/useAuth";
// // import { Redirect } from "expo-router";
// // import { ActivityIndicator, View } from "react-native";

// // export default function TabsLayout() {
// //   const { isLoaded, isSignedIn, profileCompleted } = useAuth();

// //   if (!isLoaded) {
// //     return (
// //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //         <ActivityIndicator size="large" />
// //       </View>
// //     );
// //   }

// //   if (!isSignedIn) {
// //     return <Redirect href="/" />;
// //   }

// //   if (!profileCompleted) {
// //     return <Redirect href="/homescreens/info1" />;
// //   }

// //   return (
// //     <Tabs screenOptions={{ headerShown: false }}>
// //       <Tabs.Screen 
// //         name="index"
// //         options={{
// //           tabBarLabel: 'Home',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="home" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Matches"
// //         options={{
// //           tabBarLabel: 'Matches',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="heart" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Interests"
// //         options={{
// //           tabBarLabel: 'Interests',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="star" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Messages"
// //         options={{
// //           tabBarLabel: 'Messages',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="envelope" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Upgrade"
// //         options={{
// //           tabBarLabel: 'Upgrade',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="diamond" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Profile"
// //         options={{
// //           tabBarLabel: 'Profile',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="cog" size={size} color={color} />
// //           )
// //         }}
// //       />
// //     </Tabs>
// //   );
// // }





// //app/(tabs)/_layout.jsx

// // import { Tabs } from "expo-router";
// // import { FontAwesome } from "@expo/vector-icons";
// // import { useAuth } from "../hooks/useAuth";
// // import { Redirect } from "expo-router";
// // import { ActivityIndicator, View } from "react-native";

// // export default function TabsLayout() {
// //   const { isLoaded, isSignedIn, profileCompleted } = useAuth();

// //   if (!isLoaded) {
// //     return (
// //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //         <ActivityIndicator size="large" />
// //       </View>
// //     );
// //   }

// //   if (!isSignedIn) {
// //     return <Redirect href="/" />;
// //   }

// //   if (!profileCompleted) {
// //     return <Redirect href="/homescreens/info1" />;
// //   }

// //   return (
// //      <Tabs screenOptions={{ headerShown: false }}>
// //       <Tabs.Screen 
// //         name="index"
// //         options={{
// //           tabBarLabel: 'Home',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="home" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Matches"
// //         options={{
// //           tabBarLabel: 'Matches',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="heart" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Interests"
// //         options={{
// //           tabBarLabel: 'Interests',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="star" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Messages"
// //         options={{
// //           tabBarLabel: 'Messages',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="envelope" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Upgrade"
// //         options={{
// //           tabBarLabel: 'Upgrade',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="diamond" size={size} color={color} />
// //           )
// //         }}
// //       />
// //       <Tabs.Screen 
// //         name="Profile"
// //         options={{
// //           tabBarLabel: 'Profile',
// //           tabBarIcon: ({ color, size }) => (
// //             <FontAwesome name="cog" size={size} color={color} />
// //           )
// //         }}
// //       />
// //     </Tabs>
// //   );
// // } 

















// // app/(tabs)/_layout.jsx
// import { Tabs } from "expo-router";
// import { FontAwesome } from "@expo/vector-icons";
// import { useAuth } from "../hooks/useAuth";
// import { Redirect } from "expo-router";
// import { ActivityIndicator, View } from "react-native";

// export default function TabsLayout() {
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

//   if (!profileCompleted) {
//     return <Redirect href="/homescreens/info1" />;
//   }

//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen 
//         name="index"
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="home" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Matches"
//         options={{
//           tabBarLabel: 'Matches',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="heart" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Interests"
//         options={{
//           tabBarLabel: 'Interests',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="star" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Messages"
//         options={{
//           tabBarLabel: 'Messages',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="envelope" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Upgrade"
//         options={{
//           tabBarLabel: 'Upgrade',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="diamond" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Profile"
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="cog" size={size} color={color} />
//           )
//         }}
//       />
//     </Tabs>
//   );
// }







// // app/(tabs)/_layout.jsx
// import { Tabs } from "expo-router";
// import { FontAwesome } from "@expo/vector-icons";
// import { useAuth } from "../hooks/useAuth";
// import { Redirect } from "expo-router";
// import { ActivityIndicator, View } from "react-native";

// export default function TabsLayout() {
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

//   if (!profileCompleted) {
//     return <Redirect href="/homescreens/info1" />;
//   }

//   return (
//     <Tabs screenOptions={{ 
//       headerShown: false,
//       tabBarActiveTintColor: "#FF6B6B"
//     }}>
//       <Tabs.Screen 
//         name="index"
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="home" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Matches"
//         options={{
//           tabBarLabel: 'Matches',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="heart" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Interests"
//         options={{
//           tabBarLabel: 'Interests',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="star" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Messages"
//         options={{
//           tabBarLabel: 'Messages',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="envelope" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Upgrade"
//         options={{
//           tabBarLabel: 'Upgrade',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="diamond" size={size} color={color} />
//           )
//         }}
//       />
//       <Tabs.Screen 
//         name="Profile"
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="cog" size={size} color={color} />
//           )
//         }}
//       />
//     </Tabs>
//   );
// }





// // app/(tabs)/_layout.jsx
// import { Tabs } from "expo-router";
// import { FontAwesome } from "@expo/vector-icons";
// import { useAuth } from "../hooks/useAuth";
// import { Redirect } from "expo-router";
// import { ActivityIndicator, View, StyleSheet, Platform, SafeAreaView } from "react-native";

// export default function TabsLayout() {
//   const { isLoaded, isSignedIn, profileCompleted, loading } = useAuth();

//   if (!isLoaded || loading) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//         </View>
//       </SafeAreaView>
//     );
//   }

//   if (!isSignedIn) {
//     return <Redirect href="/" />;
//   }

//   if (!profileCompleted) {
//     return <Redirect href="/homescreens/info1" />;
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Tabs screenOptions={{ 
//         headerShown: false,
//         tabBarActiveTintColor: "#FF6B6B",
//         tabBarInactiveTintColor: "#888",
//         tabBarStyle: styles.tabBar,
//         tabBarLabelStyle: styles.tabLabel,
//         tabBarItemStyle: styles.tabItem,
//       }}>
//         <Tabs.Screen 
//           name="index"
//           options={{
//             tabBarLabel: 'Home',
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="home" size={size} color={color} />
//               </View>
//             )
//           }}
//         />
//         <Tabs.Screen 
//           name="Matches"
//           options={{
//             tabBarLabel: 'Matches',
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="heart" size={size} color={color} />
//               </View>
//             )
//           }}
//         />
        
//          <Tabs.Screen 
//           name="Messages"
//           options={{
//             tabBarLabel: 'Messages',
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="envelope" size={size} color={color} />
//               </View>
//             )
//           }}
//         />
//         <Tabs.Screen 
//           name="Upgrade"
//           options={{
//             tabBarLabel: 'Upgrade',
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="diamond" size={size} color={color} />
//               </View>
//             )
//           }}
//         />
//         <Tabs.Screen 
//           name="Profile"
//           options={{
//             tabBarLabel: 'Profile',
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="cog" size={size} color={color} />
//               </View>
//             )
//           }}
//         />
//       </Tabs>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F8F9FA"
//   },
//   tabBar: {
//     backgroundColor: "#FFF",
//     borderTopWidth: 0,
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     height: Platform.OS === 'ios' ? 85 : 70,
//     paddingBottom: Platform.OS === 'ios' ? 25 : 10,
//     paddingTop: 10,
//     marginHorizontal: 10,
//     borderRadius: 20,
//     position: 'absolute',
//     bottom: Platform.OS === 'ios' ? 10 : 15,
//     left: 10,
//     right: 10,
//   },
//   tabLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//     marginBottom: 4,
//   },
//   tabItem: {
//     paddingVertical: 5,
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });






//17/09/2025
// app/(tabs)/_layout.jsx
// import { Tabs } from "expo-router";
// import { FontAwesome } from "@expo/vector-icons";
// import { useAuth } from "../hooks/useAuth";
// import { Redirect } from "expo-router";
// import { ActivityIndicator, View, StyleSheet, Platform, SafeAreaView } from "react-native";
// import { useSafeAreaInsets } from "react-native-safe-area-context";

// export default function TabsLayout() {
//   const { isLoaded, isSignedIn, profileCompleted, loading } = useAuth();
//   const insets = useSafeAreaInsets();

//   if (!isLoaded || loading) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//         </View>
//       </SafeAreaView>
//     );
//   }

//   if (!isSignedIn) return <Redirect href="/" />;
//   if (!profileCompleted) return <Redirect href="/homescreens/info1" />;

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Tabs
//         screenOptions={{
//           headerShown: false,
//           tabBarShowLabel: true,
//           tabBarActiveTintColor: "#FF6B6B",
//           tabBarInactiveTintColor: "#888888",
//           tabBarStyle: {
//             backgroundColor: "#FFF",
//             borderTopWidth: 0,
//             elevation: 8,
//             shadowColor: "#000",
//             shadowOffset: { width: 0, height: -2 },
//             shadowOpacity: 0.1,
//             shadowRadius: 4,
//             height: Platform.OS === "ios" ? 85 : 70,
//             paddingBottom: Platform.OS === "ios" ? insets.bottom > 0 ? insets.bottom - 10 : 15 : 10,
//             paddingTop: 10,
//             marginHorizontal: 10,
//             borderRadius: 20,
//             position: "absolute",
//             bottom: Platform.OS === "ios" ? 15 : 15,
//             left: 10,
//             right: 10,
//           },
//           tabBarLabelStyle: {
//             fontSize: 12,
//             fontWeight: "500",
//             marginBottom: Platform.OS === "ios" ? 0 : 4,
//           },
//           tabBarItemStyle: {
//             paddingVertical: 5,
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="index"
//           options={{
//             tabBarLabel: "Home",
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="home" size={size} color={color} />
//               </View>
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="Matches"
//           options={{
//             tabBarLabel: "Matches",
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="heart" size={size} color={color} />
//               </View>
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="Messages"
//           options={{
//             tabBarLabel: "Messages",
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="envelope" size={size} color={color} />
//               </View>
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="Upgrade"
//           options={{
//             tabBarLabel: "Upgrade",
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="diamond" size={size} color={color} />
//               </View>
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="Profile"
//           options={{
//             tabBarLabel: "Profile",
//             tabBarIcon: ({ color, size }) => (
//               <View style={styles.iconContainer}>
//                 <FontAwesome name="user" size={size} color={color} />
//               </View>
//             ),
//           }}
//         />
//       </Tabs>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: "#F8F9FA",
//     paddingBottom:8
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F8F9FA"
//   },
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom:4
//   },
// });


//trail2

// app/(tabs)/_layout.jsx
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useAuth } from "../hooks/useAuth";
import { Redirect } from "expo-router";
import { ActivityIndicator, View, StyleSheet, Platform, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabsLayout() {
  const { isLoaded, isSignedIn, profileCompleted, loading } = useAuth();
  const insets = useSafeAreaInsets();

  if (!isLoaded || loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B6B" />
        </View>
      </SafeAreaView>
    );
  }

  if (!isSignedIn) return <Redirect href="/" />;
  if (!profileCompleted) return <Redirect href="/homescreens/info1" />;

  // Calculate dynamic padding for iOS devices
  const iosBottomPadding = insets.bottom > 0 ? insets.bottom - 5 : 10;
  const tabBarHeight = Platform.OS === "ios" ? 82 : 70;
  const tabBarBottom = Platform.OS === "ios" ? 10 : 15;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#FF6B6B",
          tabBarInactiveTintColor: "#888888",
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderTopWidth: 0,
            elevation: 8,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            height: tabBarHeight,
            paddingBottom: Platform.OS === "ios" ? iosBottomPadding : 8,
            paddingTop: 8,
            marginHorizontal: 10,
            borderRadius: 20,
            position: "absolute",
            bottom: tabBarBottom,
            left: 10,
            right: 10,
          },
          tabBarLabelStyle: {
            fontSize: 11, // Slightly smaller to fit all labels
            fontWeight: "500",
            marginBottom: Platform.OS === "ios" ? 2 : 3,
          },
          tabBarItemStyle: {
            paddingVertical: 4,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="home" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Matches"
          options={{
            tabBarLabel: "Matches",
            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="heart" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Messages"
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="envelope" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Upgrade"
          options={{
            tabBarLabel: "Upgrade",
            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="diamond" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <View style={styles.iconContainer}>
                <FontAwesome name="user" size={size} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA"
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS === "ios" ? 2 : 0,
  },
});