
// // app/login/index.jsx
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
// import React from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')

//     return (
//         <SafeAreaView style={styles.container}>
//             {/* Full height background image */}
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             {/* Dark overlay for better readability */}
//             <View style={styles.overlay} />

//             {/* Content area - transparent */}
//             <View style={styles.contentContainer}>
//                 {/* Welcome message at top
//                  <View style={styles.header}>
//                  <Text style={styles.title}>Welcome</Text>
//                 <Text style={styles.subtitle}>Join our community today</Text>
//                </View>
//                 */}
//                 {/* Spacer to push buttons to bottom */}
//                 <View style={styles.spacer} />

//                 {/* Button container at bottom */}
//                 <View style={styles.bottomContainer}>
//                     {/* Google Sign-In Button */}
//                     <View style={styles.header}>
//                  <Text style={styles.title}>Welcome</Text>
//                 <Text style={styles.subtitle}>Join our community today</Text>
//                </View>
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={() => router.push('homescreens/info1')}
//                     >
//                         <FontAwesome name="google" size={20} color="#DB4437" />
//                         <Text style={styles.socialButtonText}>Continue with Google</Text>
//                     </TouchableOpacity>

//                     {/* Email Sign-In Button */}
//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('login/interest')}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     {/* Login prompt */}
//                     <View style={styles.loginPrompt}>


//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('login/interest')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Trust Indicator */}
//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',

//         paddingBottom:20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,

//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems:'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize:16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })



// // // 13/08/2025
// // // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// // // import { useOAuth } from "@clerk/clerk-expo";
// // // import { useRouter } from "expo-router";
// // // import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

// // // export default function Login() {
// // //   useWarmUpBrowser();
// // //   const router = useRouter();

// // //   const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

// // //   const onPress = async () => {
// // //     try {
// // //       const { createdSessionId, setActive } = await googleAuth();

// // //       if (createdSessionId) {
// // //         setActive({ session: createdSessionId });
// // //         router.push("/homescreens/info1");
// // //       }
// // //     } catch (err) {
// // //       console.error("OAuth error", err);
// // //     }
// // //   };

// // //   return (
// // //     <View style={styles.container}>
// // //       <Text style={styles.title}>Welcome to Adivasi Shadi</Text>
// // //       <Text style={styles.subtitle}>Find your perfect match</Text>

// // //       <TouchableOpacity style={styles.button} onPress={onPress}>
// // //         <Text style={styles.buttonText}>Continue with Google</Text>
// // //       </TouchableOpacity>

// // //       <TouchableOpacity
// // //         style={[styles.button, styles.emailButton]}
// // //         onPress={() => router.push("/login/signup")}
// // //       >
// // //         <Text style={[styles.buttonText, styles.emailButtonText]}>Continue with Email</Text>
// // //       </TouchableOpacity>

// // //       <TouchableOpacity onPress={() => router.push("/login/login-email")}>
// // //         <Text style={styles.loginLink}>Already have an account? Log in</Text>
// // //       </TouchableOpacity>
// // //     </View>
// // //   );
// // // }

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     justifyContent: "center",
// // //     alignItems: "center",
// // //     padding: 20,
// // //     backgroundColor: "#fff",
// // //   },
// // //   title: {
// // //     fontSize: 24,
// // //     fontWeight: "bold",
// // //     marginBottom: 10,
// // //   },
// // //   subtitle: {
// // //     fontSize: 16,
// // //     color: "#666",
// // //     marginBottom: 40,
// // //   },
// // //   button: {
// // //     width: "100%",
// // //     padding: 15,
// // //     backgroundColor: "#4285F4",
// // //     borderRadius: 8,
// // //     marginBottom: 15,
// // //     alignItems: "center",
// // //   },
// // //   buttonText: {
// // //     color: "white",
// // //     fontWeight: "bold",
// // //     fontSize: 16,
// // //   },
// // //   emailButton: {
// // //     backgroundColor: "white",
// // //     borderWidth: 1,
// // //     borderColor: "#ddd",
// // //   },
// // //   emailButtonText: {
// // //     color: "#333",
// // //   },
// // //   loginLink: {
// // //     marginTop: 20,
// // //     color: "#4285F4",
// // //   },
// // // });











// // import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// // import { useOAuth } from "@clerk/clerk-expo";
// // import { useRouter } from "expo-router";
// // import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
// // import { SafeAreaView } from "react-native-safe-area-context";

// // export default function Login() {
// //   useWarmUpBrowser();
// //   const router = useRouter();

// //   const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

// //   const onPress = async () => {
// //     try {
// //       const { createdSessionId, setActive } = await googleAuth();

// //       if (createdSessionId) {
// //         setActive({ session: createdSessionId });
// //         router.push("/homescreens/info1");
// //       }
// //     } catch (err) {
// //       console.error("OAuth error", err);
// //     }
// //   };

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       {/* Background Image */}
// //       <Image
// //         source={require('../../assets/images/login1.jpg')}
// //         style={styles.backgroundImage}
// //         resizeMode="cover"
// //       />

// //       {/* Dark overlay */}
// //       <View style={styles.overlay} />

// //       {/* Content */}
// //       <View style={styles.content}>
// //         <Text style={styles.title}>Welcome to Adivasi Shadi</Text>
// //         <Text style={styles.subtitle}>Find your perfect match</Text>

// //         <TouchableOpacity style={styles.button} onPress={onPress}>
// //           <Text style={styles.buttonText}>Continue with Google</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={[styles.button, styles.emailButton]}
// //           onPress={() => router.push("/login/signup")}
// //         >
// //           <Text style={[styles.buttonText, styles.emailButtonText]}>Continue with Email</Text>
// //         </TouchableOpacity>

// //         <View style={styles.loginPrompt}>
// //           <Text style={styles.loginText}>Already have an account?</Text>
// //           <TouchableOpacity onPress={() => router.push("/login/login-email")}>
// //             <Text style={styles.loginLink}> Login</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#000',
// //   },
// //   backgroundImage: {
// //     position: 'absolute',
// //     width: '100%',
// //     height: '100%',
// //   },
// //   overlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(0,0,0,0.5)',
// //   },
// //   content: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     marginBottom: 10,
// //     textAlign: 'center',
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: 'rgba(255,255,255,0.8)',
// //     marginBottom: 40,
// //     textAlign: 'center',
// //   },
// //   button: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     backgroundColor: 'rgba(255,255,255,0.9)',
// //     padding: 16,
// //     borderRadius: 10,
// //     marginBottom: 15,
// //   },
// //   buttonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   emailButton: {
// //     backgroundColor: 'black',
// //   },
// //   emailButtonText: {
// //     color: 'white',
// //   },
// //   loginPrompt: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginTop: 20,
// //   },
// //   loginText: {
// //     color: 'rgba(255,255,255,0.8)',
// //   },
// //   loginLink: {
// //     color: '#fff',
// //     fontWeight: '600',
// //     textDecorationLine: 'underline',
// //   },
// // });






// // import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// // import { useOAuth } from "@clerk/clerk-expo";
// // import { useRouter } from "expo-router";
// // import useWarmUpBrowser from "../hooks/useWarmUpBrowser";
// // import { LinearGradient } from 'expo-linear-gradient';
// // import { useLanguage } from "../context/LanguageContext";

// // export default function Login() {
// //   useWarmUpBrowser();
// //   const router = useRouter();
// //   const { language, toggleLanguage } = useLanguage();

// //   const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

// //   const onPress = async () => {
// //     try {
// //       const { createdSessionId, setActive } = await googleAuth();

// //       if (createdSessionId) {
// //         setActive({ session: createdSessionId });
// //         router.push("/homescreens/info1");
// //       }
// //     } catch (err) {
// //       console.error("OAuth error", err);
// //     }
// //   };

// //   // Translations
// //   const translations = {
// //     title: {
// //       ENG: "Welcome to Adivasi Shadi",
// //       HI: "आदिवासी शादी में आपका स्वागत है"
// //     },
// //     subtitle: {
// //       ENG: "Find your perfect match",
// //       HI: "अपना आदर्श साथी खोजें"
// //     },
// //     googleButton: {
// //       ENG: "Continue with Google",
// //       HI: "Google के साथ जारी रखें"
// //     },
// //     emailButton: {
// //       ENG: "Continue with Email",
// //       HI: "ईमेल के साथ जारी रखें"
// //     },
// //     loginPrompt: {
// //       ENG: "Already have an account?",
// //       HI: "क्या आपके पास पहले से खाता है?"
// //     },
// //     loginLink: {
// //       ENG: "Log In",
// //       HI: "लॉग इन करें"
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <LinearGradient
// //         colors={['#FF6B6B', '#6C63FF']}
// //         style={styles.background}
// //       />

// //       <View style={styles.content}>
// //         <Image
// //           source={require('../../assets/images/login1.jpg')}
// //           style={styles.logo}
// //         />

// //         <Text style={styles.title}>{translations.title[language]}</Text>
// //         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

// //         <TouchableOpacity style={styles.googleButton} onPress={onPress}>
// //           <Text style={styles.buttonText}>{translations.googleButton[language]}</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={styles.emailButton}
// //           onPress={() => router.push("/login-email")}
// //         >
// //           <Text style={styles.emailButtonText}>{translations.emailButton[language]}</Text>
// //         </TouchableOpacity>

// //         <View style={styles.loginPrompt}>
// //           <Text style={styles.loginText}>{translations.loginPrompt[language]}</Text>
// //           <TouchableOpacity onPress={() => router.push("/login-email")}>
// //             <Text style={styles.loginLink}>{translations.loginLink[language]}</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   background: {
// //     position: 'absolute',
// //     left: 0,
// //     right: 0,
// //     top: 0,
// //     bottom: 0,
// //   },
// //   content: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   logo: {
// //     width: 100,
// //     height: 100,
// //     alignSelf: 'center',
// //     marginBottom: 30,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: 'white',
// //     textAlign: 'center',
// //     marginBottom: 10,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: 'rgba(255,255,255,0.8)',
// //     textAlign: 'center',
// //     marginBottom: 40,
// //   },
// //   googleButton: {
// //     backgroundColor: 'white',
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     marginBottom: 15,
// //   },
// //   buttonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   emailButton: {
// //     backgroundColor: 'rgba(255,255,255,0.2)',
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     borderWidth: 1,
// //     borderColor: 'white',
// //   },
// //   emailButtonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: 'white',
// //   },
// //   loginPrompt: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginTop: 20,
// //   },
// //   loginText: {
// //     color: 'white',
// //   },
// //   loginLink: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     textDecorationLine: 'underline',
// //     marginLeft: 5,
// //   },
// // });








// // import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// // import { useOAuth, useAuth } from "@clerk/clerk-expo";
// // import { useRouter } from "expo-router";
// // import useWarmUpBrowser from "../hooks/useWarmUpBrowser";
// // import { LinearGradient } from 'expo-linear-gradient';
// // import { useLanguage } from "../context/LanguageContext";
// // import { useEffect } from "react";

// // export default function Login() {
// //   useWarmUpBrowser();
// //   const router = useRouter();
// //   const { isSignedIn } = useAuth();
// //   const { language, toggleLanguage } = useLanguage();

// //   const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

// //   useEffect(() => {
// //     if (isSignedIn) {
// //       router.replace("/homescreens/info1");
// //     }
// //   }, [isSignedIn]);

// //   const onPress = async () => {
// //     try {
// //       const { createdSessionId, setActive } = await googleAuth();

// //       if (createdSessionId) {
// //         setActive({ session: createdSessionId });
// //       }
// //     } catch (err) {
// //       if (err.errors?.[0]?.code === "form_identifier_exists") {
// //         // User is already signed in, redirect to appropriate screen
// //         router.replace("/homescreens/info1");
// //       } else {
// //         console.error("OAuth error", err);
// //       }
// //     }
// //   };

// //   // Translations
// //   const translations = {
// //     title: {
// //       ENG: "Welcome to Adivasi Shadi",
// //       HI: "आदिवासी शादी में आपका स्वागत है"
// //     },
// //     subtitle: {
// //       ENG: "Find your perfect match",
// //       HI: "अपना आदर्श साथी खोजें"
// //     },
// //     googleButton: {
// //       ENG: "Continue with Google",
// //       HI: "Google के साथ जारी रखें"
// //     },
// //     emailButton: {
// //       ENG: "Continue with Email",
// //       HI: "ईमेल के साथ जारी रखें"
// //     },
// //     loginPrompt: {
// //       ENG: "Already have an account?",
// //       HI: "क्या आपके पास पहले से खाता है?"
// //     },
// //     loginLink: {
// //       ENG: "Log In",
// //       HI: "लॉग इन करें"
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <LinearGradient
// //         colors={['#FF6B6B', '#6C63FF']}
// //         style={styles.background}
// //       />

// //       <View style={styles.content}>
// //         <Image
// //           source={require('../../assets/images/login1.jpg')}
// //           style={styles.logo}
// //         />

// //         <Text style={styles.title}>{translations.title[language]}</Text>
// //         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

// //         <TouchableOpacity style={styles.googleButton} onPress={onPress}>
// //           <Text style={styles.buttonText}>{translations.googleButton[language]}</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={styles.emailButton}
// //           onPress={() => router.push("/login-email")}
// //         >
// //           <Text style={styles.emailButtonText}>{translations.emailButton[language]}</Text>
// //         </TouchableOpacity>

// //         <View style={styles.loginPrompt}>
// //           <Text style={styles.loginText}>{translations.loginPrompt[language]}</Text>
// //           <TouchableOpacity onPress={() => router.push("/login-email")}>
// //             <Text style={styles.loginLink}>{translations.loginLink[language]}</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   background: {
// //     position: 'absolute',
// //     left: 0,
// //     right: 0,
// //     top: 0,
// //     bottom: 0,
// //   },
// //   content: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 20,
// //   },
// //   logo: {
// //     width: 100,
// //     height: 100,
// //     alignSelf: 'center',
// //     marginBottom: 30,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: 'white',
// //     textAlign: 'center',
// //     marginBottom: 10,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: 'rgba(255,255,255,0.8)',
// //     textAlign: 'center',
// //     marginBottom: 40,
// //   },
// //   googleButton: {
// //     backgroundColor: 'white',
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     marginBottom: 15,
// //   },
// //   buttonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   emailButton: {
// //     backgroundColor: 'rgba(255,255,255,0.2)',
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     borderWidth: 1,
// //     borderColor: 'white',
// //   },
// //   emailButtonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: 'white',
// //   },
// //   loginPrompt: {
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     marginTop: 20,
// //   },
// //   loginText: {
// //     color: 'white',
// //   },
// //   loginLink: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //     textDecorationLine: 'underline',
// //     marginLeft: 5,
// //   },
// // });







// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import { useOAuth, useAuth } from "@clerk/clerk-expo";
// // import { useRouter } from "expo-router";
// // import useWarmUpBrowser from "../hooks/useWarmUpBrowser";
// // import { useLanguage } from "../context/LanguageContext";
// // import { useEffect } from "react";

// // export default function Login() {
// //   useWarmUpBrowser();
// //   const router = useRouter();
// //   const { isSignedIn } = useAuth();
// //   const { language, toggleLanguage } = useLanguage();

// //   const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

// //   useEffect(() => {
// //     if (isSignedIn) {
// //       router.replace("/homescreens/info1");
// //     }
// //   }, [isSignedIn]);

// //   const onPress = async () => {
// //     try {
// //       const { createdSessionId, setActive } = await googleAuth();
// //       if (createdSessionId) {
// //         setActive({ session: createdSessionId });
// //       }
// //     } catch (err) {
// //       if (err.errors?.[0]?.code === "form_identifier_exists") {
// //         router.replace("/homescreens/info1");
// //       }
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <TouchableOpacity onPress={onPress}>
// //         <Text>Continue with Google</Text>
// //       </TouchableOpacity>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center"
// //   }
// // });



// //app/(auth)/index.jsx


// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import { useOAuth } from "@clerk/clerk-expo";
// // import { useRouter } from "expo-router";
// // import useWarmUpBrowser from "../hooks/useWarmUpBrowser";
// // import { useLanguage } from "../context/LanguageContext";
// // import { useAuth } from "../hooks/useAuth";
// // import { useEffect } from "react";
// // import { LinearGradient } from 'expo-linear-gradient';

// // export default function Login() {
// //   useWarmUpBrowser();
// //   const router = useRouter();
// //   const { isSignedIn } = useAuth();
// //   const { language, toggleLanguage } = useLanguage();

// //   const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

// //   useEffect(() => {
// //     if (isSignedIn) {
// //       router.replace("/homescreens/info1");
// //     }
// //   }, [isSignedIn]);

// //   const onPress = async () => {
// //     try {
// //       const { createdSessionId, setActive } = await googleAuth();

// //       if (createdSessionId) {
// //         setActive({ session: createdSessionId });
// //       }
// //     } catch (err) {
// //       if (err.errors?.[0]?.code === "form_identifier_exists") {
// //         router.replace("/homescreens/info1");
// //       } else {
// //         console.error("OAuth error", err);
// //       }
// //     }
// //   };

// //   // Translations
// //   const translations = {
// //     title: {
// //       ENG: "Welcome to Adivasi Shadi",
// //       HI: "आदिवासी शादी में आपका स्वागत है"
// //     },
// //     subtitle: {
// //       ENG: "Find your perfect match",
// //       HI: "अपना आदर्श साथी खोजें"
// //     },
// //     googleButton: {
// //       ENG: "Continue with Google",
// //       HI: "Google के साथ जारी रखें"
// //     },
// //     emailButton: {
// //       ENG: "Continue with Email",
// //       HI: "ईमेल के साथ जारी रखें"
// //     },
// //     loginPrompt: {
// //       ENG: "Already have an account?",
// //       HI: "क्या आपके पास पहले से खाता है?"
// //     },
// //     loginLink: {
// //       ENG: "Log In",
// //       HI: "लॉग इन करें"
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <LinearGradient
// //         colors={['#FF6B6B', '#6C63FF']}
// //         style={styles.background}
// //       />

// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
// //           <Text style={styles.languageText}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <View style={styles.content}>
// //         <Text style={styles.title}>{translations.title[language]}</Text>
// //         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

// //         <TouchableOpacity style={styles.googleButton} onPress={onPress}>
// //           <Text style={styles.buttonText}>{translations.googleButton[language]}</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity
// //           style={styles.emailButton}
// //           onPress={() => router.push("/login-email")}
// //         >
// //           <Text style={styles.emailButtonText}>{translations.emailButton[language]}</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   background: {
// //     position: 'absolute',
// //     left: 0,
// //     right: 0,
// //     top: 0,
// //     bottom: 0,
// //   },
// //   header: {
// //     padding: 20,
// //     paddingTop: 50,
// //     alignItems: 'flex-end',
// //   },
// //   languageButton: {
// //     backgroundColor: 'rgba(255,255,255,0.2)',
// //     paddingHorizontal: 15,
// //     paddingVertical: 8,
// //     borderRadius: 20,
// //   },
// //   languageText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //   },
// //   content: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     padding: 30,
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: 'bold',
// //     color: 'white',
// //     textAlign: 'center',
// //     marginBottom: 10,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: 'rgba(255,255,255,0.8)',
// //     textAlign: 'center',
// //     marginBottom: 40,
// //   },
// //   googleButton: {
// //     backgroundColor: 'white',
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     marginBottom: 15,
// //   },
// //   buttonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   emailButton: {
// //     backgroundColor: 'rgba(255,255,255,0.2)',
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     borderWidth: 1,
// //     borderColor: 'white',
// //   },
// //   emailButtonText: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: 'white',
// //   },
// // });









//14/08/2025

// app/(auth)/index.jsx
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { Redirect, useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 setActive({ session: createdSessionId });
//                 router.replace("/(tabs)");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             {/* Full height background image */}
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             {/* Dark overlay for better readability */}
//             <View style={styles.overlay} />

//             {/* Content area - transparent */}
//             <View style={styles.contentContainer}>
//                 {/* Welcome message at top */}
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 {/* Spacer to push buttons to bottom */}
//                 <View style={styles.spacer} />

//                 {/* Button container at bottom */}
//                 <View style={styles.bottomContainer}>
//                     {/* Google Sign-In Button */}
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     {/* Email Sign-In Button */}
//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('login-email')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     {/* Login prompt */}
//                     <View style={styles.loginPrompt}>
//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('login-email')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Trust Indicator */}
//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom:20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems:'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize:16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })







// trail2

// app/(auth)/index.jsx
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { useRouter, Redirect } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 setActive({ session: createdSessionId });
//                 router.replace("/(tabs)");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             {/* Full height background image */}
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             {/* Dark overlay for better readability */}
//             <View style={styles.overlay} />

//             {/* Content area - transparent */}
//             <View style={styles.contentContainer}>
//                 {/* Welcome message at top */}
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 {/* Spacer to push buttons to bottom */}
//                 <View style={styles.spacer} />

//                 {/* Button container at bottom */}
//                 <View style={styles.bottomContainer}>
//                     {/* Google Sign-In Button */}
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     {/* Email Sign-In Button */}
//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('login-email')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     {/* Login prompt */}
//                     <View style={styles.loginPrompt}>
//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('login-email')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>

//                     {/* Trust Indicator */}
//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom:20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems:'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize:16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })







//14/08/2025
//trail3
// app/(auth)/index.jsx
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { useRouter, Redirect } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);
//     const [showEmailLogin, setShowEmailLogin] = useState(false);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 await setActive({ session: createdSessionId });
//                 router.replace("/(tabs)");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const toggleEmailLogin = () => {
//         setShowEmailLogin(!showEmailLogin);
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             {/* Full height background image */}
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             {/* Dark overlay for better readability */}
//             <View style={styles.overlay} />

//             {/* Content area - transparent */}
//             <View style={styles.contentContainer}>
//                 {/* Welcome message at top */}
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 {/* Spacer to push buttons to bottom */}
//                 <View style={styles.spacer} />

//                 {/* Button container at bottom */}
//                 <View style={styles.bottomContainer}>
//                     {showEmailLogin ? (
//                         <>
//                             {/* Email Login Form */}
//                             <View style={styles.formContainer}>
//                                 <View style={styles.inputContainer}>
//                                     <MaterialIcons name="email" size={20} color="#6C63FF" />
//                                     <TextInput
//                                         style={styles.input}
//                                         placeholder="Email Address"
//                                         value={email}
//                                         onChangeText={setEmail}
//                                         keyboardType="email-address"
//                                         autoCapitalize="none"
//                                     />
//                                 </View>

//                                 <View style={styles.inputContainer}>
//                                     <AntDesign name="lock" size={20} color="#6C63FF" />
//                                     <TextInput
//                                         style={styles.input}
//                                         placeholder="Password"
//                                         value={password}
//                                         onChangeText={setPassword}
//                                         secureTextEntry
//                                     />
//                                 </View>

//                                 <TouchableOpacity
//                                     style={styles.loginButton}
//                                     onPress={() => router.push('login-email')}
//                                 >
//                                     <Text style={styles.loginButtonText}>Login</Text>
//                                 </TouchableOpacity>

//                                 <TouchableOpacity
//                                     style={styles.googleButton}
//                                     onPress={onGoogleSignIn}
//                                     disabled={loading}
//                                 >
//                                     {loading ? (
//                                         <ActivityIndicator color="#DB4437" />
//                                     ) : (
//                                         <>
//                                             <FontAwesome name="google" size={20} color="#DB4437" />
//                                             <Text style={styles.googleButtonText}>Continue with Google</Text>
//                                         </>
//                                     )}
//                                 </TouchableOpacity>

//                                 <TouchableOpacity
//                                     style={styles.backButton}
//                                     onPress={toggleEmailLogin}
//                                 >
//                                     <Text style={styles.backButtonText}>Back to options</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </>
//                     ) : (
//                         <>
//                             {/* Google Sign-In Button */}
//                             <TouchableOpacity
//                                 style={styles.socialButton}
//                                 onPress={onGoogleSignIn}
//                                 disabled={loading}
//                             >
//                                 {loading ? (
//                                     <ActivityIndicator color="#DB4437" />
//                                 ) : (
//                                     <>
//                                         <FontAwesome name="google" size={20} color="#DB4437" />
//                                         <Text style={styles.socialButtonText}>Continue with Google</Text>
//                                     </>
//                                 )}
//                             </TouchableOpacity>

//                             {/* Email Sign-In Button */}
//                             <TouchableOpacity
//                                 style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                                 onPress={toggleEmailLogin}
//                                 disabled={loading}
//                             >
//                                 <MaterialIcons name="email" size={20} color="white" />
//                                 <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                             </TouchableOpacity>

//                             <View style={styles.dividerContainer}>
//                                 <View style={styles.dividerLine} />
//                                 <Text style={styles.dividerText}>OR</Text>
//                                 <View style={styles.dividerLine} />
//                             </View>

//                             {/* Sign up prompt */}
//                             <View style={styles.signupPrompt}>
//                                 <Text style={styles.signupText}>Don't have an account?</Text>
//                                 <TouchableOpacity onPress={() => router.push('signup')}>
//                                     <Text style={styles.signupLink}> Sign Up</Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </>
//                     )}

//                     {/* Trust Indicator */}
//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     formContainer: {
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         borderRadius: 10,
//         padding: 20,
//         marginBottom: 15,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         borderRadius: 8,
//         paddingHorizontal: 15,
//         paddingVertical: 10,
//         marginBottom: 15,
//     },
//     input: {
//         flex: 1,
//         height: 40,
//         fontSize: 16,
//         marginLeft: 10,
//     },
//     loginButton: {
//         backgroundColor: Colors.PRIMARY,
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginBottom: 15,
//     },
//     loginButtonText: {
//         color: 'white',
//         fontWeight: '600',
//         fontSize: 16,
//     },
//     googleButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'white',
//         padding: 15,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     googleButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     backButton: {
//         alignItems: 'center',
//         padding: 10,
//     },
//     backButtonText: {
//         color: Colors.PRIMARY,
//         fontWeight: '600',
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     signupPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     signupText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     signupLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })






// trail3

// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { useRouter, Redirect } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 await setActive({ session: createdSessionId });
//                 // Directly navigate to profile completion if needed
//                 router.replace("/homescreens/info1");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/login-email");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             <View style={styles.overlay} />

//             <View style={styles.contentContainer}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 <View style={styles.spacer} />

//                 <View style={styles.bottomContainer}>
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('/login-email')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     <View style={styles.signupPrompt}>
//                         <Text style={styles.signupText}>Don't have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/signup')}>
//                             <Text style={styles.signupLink}> Sign Up</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     signupPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     signupText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     signupLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })






//trail4
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { useRouter, Redirect } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 await setActive({ session: createdSessionId });
//                 router.replace("/homescreens/info1");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/login-email");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             <View style={styles.overlay} />

//             <View style={styles.contentContainer}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 <View style={styles.spacer} />

//                 <View style={styles.bottomContainer}>
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Login with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('/login-email')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Login with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     <View style={styles.signupPrompt}>
//                         <Text style={styles.signupText}>New to our app?</Text>
//                         <TouchableOpacity onPress={() => router.push('/signup')}>
//                             <Text style={styles.signupLink}> Create Account</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     signupPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     signupText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     signupLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })






//trail5
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { useRouter, Redirect } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 await setActive({ session: createdSessionId });
//                 router.replace("/homescreens/info1");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/login-email");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             <View style={styles.overlay} />

//             <View style={styles.contentContainer}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 <View style={styles.spacer} />

//                 <View style={styles.bottomContainer}>
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('/email-login')}  // Changed from '/login-email'
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     <View style={styles.loginPrompt}>
//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/login-email')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })








//trail
//app/(auth)/index.jsx // original
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { Redirect, useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 // Immediately navigate to info1 after successful auth
//                 await setActive({ session: createdSessionId });
//                 router.replace("/homescreens/info1");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/login-email");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             <View style={styles.overlay} />

//             <View style={styles.contentContainer}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 <View style={styles.spacer} />

//                 <View style={styles.bottomContainer}>
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('/email-login')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     <View style={styles.loginPrompt}>
//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/login-email')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })






//app/(auth)/index.jsx  // Originals
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Modal, ScrollView } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { Redirect, useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);
//     const [showTerms, setShowTerms] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 // Immediately navigate to info1 after successful auth
//                 await setActive({ session: createdSessionId });
//                 router.replace("/homescreens/info1");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/login-email");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Image
//                 source={require('./../../assets/images/login1.png')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             <View style={styles.overlay} />

//             <View style={styles.contentContainer}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 <View style={styles.spacer} />

//                 <View style={styles.bottomContainer}>
//                     <View style={styles.termsLinkContainer}>
//                         <Text style={styles.termsText}>By continuing, you agree to our </Text>
//                         <TouchableOpacity onPress={() => setShowTerms(true)}>
//                             <Text style={styles.termsLink}>Terms & Conditions</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('/email-login')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     <View style={styles.loginPrompt}>
//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/login-email')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>

//             <Modal
//                 visible={showTerms}
//                 animationType="slide"
//                 transparent={true}
//                 onRequestClose={() => setShowTerms(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         <View style={styles.modalHeader}>
//                             <Text style={styles.modalTitle}>Terms & Conditions</Text>
//                             <TouchableOpacity onPress={() => setShowTerms(false)} style={styles.closeButton}>
//                                 <AntDesign name="close" size={24} color="black" />
//                             </TouchableOpacity>
//                         </View>
                        
//                         <ScrollView style={styles.termsContent}>
//                             <Text style={styles.termsHeading}>📜 Terms & Conditions for Shaadivasi.in</Text>
//                             <Text style={styles.termsParagraph}>Recently Updated</Text>
//                             <Text style={styles.termsParagraph}>
//                                 Welcome to Shaadivasi.in (hereinafter referred to as the "App" / "Platform" / "Service"). These
//                                 Terms and Conditions ("T&C") govern the use of the App, including all features, functionalities,
//                                 content, and services provided therein. By accessing, registering on, or using Shaadivasi.in, you
//                                 agree to be bound by these Terms. If you do not agree, you must refrain from using the App. We
//                                 strongly advise you to read these Terms carefully and review them periodically, as they may be
//                                 updated from time to time.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>1. Eligibility</Text>
//                             <Text style={styles.termsSubHeading}>1.1 Minimum Age Requirement</Text>
//                             <Text style={styles.termsParagraph}>
//                                 To use Shaadivasi.in, a user must be at least 18 years of age as per the Indian Majority Act,
//                                 1875. Any registration by a person under the age of 18 is strictly prohibited and shall be treated
//                                 as invalid. The App reserves the right to verify the age of any user and to immediately terminate
//                                 accounts of underage users.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>1.2 Legal Competency to Marry</Text>
//                             <Text style={styles.termsParagraph}>
//                                 Only individuals who are legally permitted to marry under Indian laws are eligible to register.
//                                 This includes, but is not limited to, the following laws:
//                                 {"\n"}• Hindu Marriage Act, 1955
//                                 {"\n"}• Special Marriage Act, 1954
//                                 {"\n"}• Prohibition of Child Marriage Act, 2006
//                                 {"\n"}• Indian Christian Marriage Act, 1872
//                                 {"\n"}• Parsi Marriage and Divorce Act, 1936
//                                 {"\n"}• Muslim Personal Law (Shariat) Application Act, 1937
//                             </Text>
                            
//                             <Text style={styles.termsParagraph}>
//                                 Users must ensure they are:
//                                 {"\n"}• Not already married, unless permitted by their personal law.
//                                 {"\n"}• Of sound mind and capable of understanding the nature of marriage.
//                                 {"\n"}• Free from any legal disability or court orders disqualifying them from marriage.
//                             </Text>
                            
//                             {/* Add more sections as needed following the same pattern */}
                            
//                             <Text style={styles.termsParagraph}>
//                                 User Acceptance: I Agree to the Terms & Conditions of Shaadivasi.in
//                                 {"\n"}(Kindly tick the box and accept these Terms & Conditions at the time of sign-up on our App)
//                             </Text>
//                         </ScrollView>
                        
//                         <TouchableOpacity
//                             style={styles.agreeButton}
//                             onPress={() => setShowTerms(false)}
//                         >
//                             <Text style={styles.agreeButtonText}>I Understand</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     termsLinkContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginBottom: 20,
//         flexWrap: 'wrap',
//     },
//     termsText: {
//         color: 'rgba(255,255,255,0.8)',
//         fontSize: 14,
//     },
//     termsLink: {
//         color: '#fff',
//         textDecorationLine: 'underline',
//         fontSize: 14,
//         fontWeight: '600',
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         padding: 20,
//     },
//     modalContent: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         width: '100%',
//         maxHeight: '80%',
//         overflow: 'hidden',
//     },
//     modalHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
//     modalTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     closeButton: {
//         padding: 5,
//     },
//     termsContent: {
//         padding: 15,
//     },
//     termsHeading: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     termsSubHeading: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         marginTop: 15,
//         marginBottom: 5,
//     },
//     termsParagraph: {
//         fontSize: 12,
//         marginBottom: 10,
//         lineHeight: 18,
//     },
//     agreeButton: {
//         backgroundColor: Colors.PRIMARY,
//         padding: 15,
//         alignItems: 'center',
//     },
//     agreeButtonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
// });







// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons'
// import { Redirect, useRouter } from 'expo-router'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useOAuth } from '@clerk/clerk-expo'
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser'
// import { useAuth } from '../hooks/useAuth'

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" })
//     const { isLoaded, isSignedIn } = useAuth()
//     const [loading, setLoading] = useState(false)

//     useWarmUpBrowser()

//     // Handle the OAuth callback immediately if it exists in the URL
//     useEffect(() => {
//         const handleDeepLink = async () => {
//             if (typeof window !== 'undefined' && window.location.href.includes('oauth-native-callback')) {
//                 try {
//                     setLoading(true)
//                     const { createdSessionId, setActive } = await googleAuth()
                    
//                     if (createdSessionId) {
//                         await setActive({ session: createdSessionId })
//                         router.replace("/homescreens/info1")
//                     }
//                 } catch (err) {
//                     console.error("OAuth error", err)
//                     router.replace("/")
//                 } finally {
//                     setLoading(false)
//                 }
//             }
//         }
        
//         handleDeepLink()
//     }, [])

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true)
//             const { createdSessionId, setActive } = await googleAuth()

//             if (createdSessionId) {
//                 await setActive({ session: createdSessionId })
//                 router.replace("/homescreens/info1")
//             }
//         } catch (err) {
//             console.error("OAuth error", err)
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/login-email")
//             }
//         } finally {
//             setLoading(false)
//         }
//     }

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         )
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Image
//                 source={require('./../../assets/images/login1.jpg')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             <View style={styles.overlay} />

//             <View style={styles.contentContainer}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 <View style={styles.spacer} />

//                 <View style={styles.bottomContainer}>
//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('/email-login')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>

//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     <View style={styles.loginPrompt}>
//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/login-email')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>

//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
// })


















// //app/(auth)/index.jsx
// import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Modal, ScrollView } from 'react-native'
// import React, { useState } from 'react'
// import Colors from '../../constant/Colors'
// import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
// import { Redirect, useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useOAuth } from '@clerk/clerk-expo';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
// import { useAuth } from '../hooks/useAuth';

// export default function Login() {
//     const router = useRouter()
//     const { width, height } = Dimensions.get('window')
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isLoaded, isSignedIn } = useAuth();
//     const [loading, setLoading] = useState(false);
//     const [showTerms, setShowTerms] = useState(false);

//     useWarmUpBrowser();

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();

//             if (createdSessionId) {
//                 // Immediately navigate to info1 after successful auth
//                 await setActive({ session: createdSessionId });
//                 router.replace("/homescreens/info1");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/login-email");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!isLoaded) {
//         return (
//             <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                 <ActivityIndicator size="large" />
//             </View>
//         );
//     }

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     return (
//         <SafeAreaView style={styles.container}>
//             <Image
//                 source={require('./../../assets/images/login1.png')}
//                 style={[styles.backgroundImage, { width, height }]}
//                 resizeMode="cover"
//             />

//             <View style={styles.overlay} />

//             <View style={styles.contentContainer}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>Welcome</Text>
//                     <Text style={styles.subtitle}>Join our community today</Text>
//                 </View>

//                 <View style={styles.spacer} />

//                 <View style={styles.bottomContainer}>
                  

//                     <TouchableOpacity
//                         style={styles.socialButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.socialButtonText}>Continue with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
//                         onPress={() => router.push('/email-login')}
//                         disabled={loading}
//                     >
//                         <MaterialIcons name="email" size={20} color="white" />
//                         <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
//                     </TouchableOpacity>
                    
//                          <View style={styles.termsLinkContainer}>
//                         <Text style={styles.termsText}>By continuing, you agree to our </Text>
//                         <TouchableOpacity onPress={() => setShowTerms(true)}>
//                             <Text style={styles.termsLink}>Terms & Conditions</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View style={styles.dividerContainer}>
//                         <View style={styles.dividerLine} />
//                         <Text style={styles.dividerText}>OR</Text>
//                         <View style={styles.dividerLine} />
//                     </View>

//                     <View style={styles.loginPrompt}>
//                         <Text style={styles.loginText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/login-email')}>
//                             <Text style={styles.loginLink}> Login</Text>
//                         </TouchableOpacity>
//                     </View>
                          
//                     <View style={styles.trustContainer}>
//                         <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
//                         <Text style={styles.trustText}>100% Safe and secure</Text>
//                     </View>
//                 </View>
//             </View>

//             <Modal
//                 visible={showTerms}
//                 animationType="slide"
//                 transparent={true}
//                 onRequestClose={() => setShowTerms(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         <View style={styles.modalHeader}>
//                             <Text style={styles.modalTitle}>Terms & Conditions</Text>
//                             <TouchableOpacity onPress={() => setShowTerms(false)} style={styles.closeButton}>
//                                 <AntDesign name="close" size={24} color="black" />
//                             </TouchableOpacity>
//                         </View>
                        
//                         <ScrollView style={styles.termsContent}>
//                             <Text style={styles.termsHeading}>📜 Terms & Conditions for Shaadivasi.in</Text>
//                             <Text style={styles.termsSubHeading}>Recently Updated</Text>
//                             <Text style={styles.termsParagraph}>
//                                 Welcome to Shaadivasi.in (hereinafter referred to as the “App” / “Platform” / “Service”). These
//                                 Terms and Conditions (“T&C”) govern the use of the App, including all features, functionalities,
//                                 content, and services provided therein. By accessing, registering on, or using Shaadivasi.in, you
//                                 agree to be bound by these Terms. If you do not agree, you must refrain from using the App. We
//                                 strongly advise you to read these Terms carefully and review them periodically, as they may be
//                                 updated from time to time.
//                             </Text>

//                             <Text style={styles.termsSubHeading}>1. Eligibility</Text>
//                             <Text style={styles.termsSubHeading}>1.1 Minimum Age Requirement</Text>
//                             <Text style={styles.termsParagraph}>
//                                 To use Shaadivasi.in, a user must be at least 18 years of age as per the Indian Majority Act,
//                                 1875. Any registration by a person under the age of 18 is strictly prohibited and shall be treated
//                                 as invalid. The App reserves the right to verify the age of any user and to immediately terminate
//                                 accounts of underage users.
//                             </Text>
//                             <Text style={styles.termsSubHeading}>1.2 Legal Competency to Marry</Text>
//                             <Text style={styles.termsParagraph}>
//                                 Only individuals who are legally permitted to marry under Indian laws are eligible to register.
//                                 This includes, but is not limited to, the following laws:
//                                 {"\n"}• Hindu Marriage Act, 1955
//                                 {"\n"}• Special Marriage Act, 1954
//                                 {"\n"}• Prohibition of Child Marriage Act, 2006
//                                 {"\n"}• Indian Christian Marriage Act, 1872
//                                 {"\n"}• Parsi Marriage and Divorce Act, 1936
//                                 {"\n"}• Muslim Personal Law (Shariat) Application Act, 1937
//                                 {"\n\n"}Users must ensure they are:
//                                 {"\n"}• Not already married, unless permitted by their personal law.
//                                 {"\n"}• Of sound mind and capable of understanding the nature of marriage.
//                                 {"\n"}• Free from any legal disability or court orders disqualifying them from marriage.
//                             </Text>
//                             <Text style={styles.termsSubHeading}>1.3 Accuracy of Information</Text>
//                             <Text style={styles.termsParagraph}>
//                                 During registration, users must provide true, accurate, current, and complete information.
//                                 Providing false, misleading, or incomplete details (such as hiding marital status, existing
//                                 relationships, criminal history, or serious medical conditions) shall constitute a breach of these
//                                 Terms and may result in termination of the account without refund, as well as possible legal
//                                 action.
//                             </Text>
//                             <Text style={styles.termsSubHeading}>1.4 User Representation</Text>
//                             <Text style={styles.termsParagraph}>
//                                 By registering, the user represents and warrants that:
//                                 {"\n"}• They meet all legal requirements for marriage.
//                                 {"\n"}• The information they provide is authentic and verifiable.
//                                 {"\n"}• They are using the App exclusively for matrimonial purposes.
//                                 {"\n\n"}Shaadivasi.in shall not be responsible for any false declarations made by users. The
//                                 responsibility for verifying eligibility lies solely with the users themselves.
//                             </Text>

//                             <Text style={styles.termsSubHeading}>2. Nature of Service</Text>
//                             <Text style={styles.termsParagraph}>
//                                 2.1 Shaadivasi.in is a digital platform created to connect individuals, primarily from the Adivasi
//                                 community, for matrimonial purposes. It acts only as a facilitator for introductions and
//                                 communications between registered users.
//                                 {"\n\n"}2.2 Shaadivasi.in is not a marriage bureau, matchmaking agency, or matrimonial
//                                 guarantor. We do not provide matchmaking consultancy, astrological services, background
//                                 verification, or legal guarantees regarding marriage.
//                                 {"\n\n"}2.3 The platform does not promise or guarantee:
//                                 {"\n"}• That a marriage will take place.
//                                 {"\n"}• Compatibility or suitability between users.
//                                 {"\n"}• The success or stability of any marriage or relationship formed through the App.
//                                 {"\n\n"}2.4 Shaadivasi.in is not responsible for:
//                                 {"\n"}• Verification of users’ backgrounds, financial status, education, employment, or character.
//                                 {"\n"}• Any disputes, conflicts, or fraudulent activities carried out by users.
//                                 {"\n"}• Any promises or representations made by one user to another.
//                                 {"\n\n"}The App is strictly an enabling platform, and users must perform their own due diligence before
//                                 proceeding with any discussions, meetings, or marriage.
//                             </Text>

//                             <Text style={styles.termsSubHeading}>3. User Responsibilities</Text>
//                             <Text style={styles.termsParagraph}>
//                                 3.1 Users agree to use the App strictly for matrimonial purposes and must not:
//                                 {"\n"}• Provide false, misleading, or fraudulent information.
//                                 {"\n"}• Upload obscene, pornographic, offensive, defamatory, or illegal content.
//                                 {"\n"}• Engage in harassment, threats, exploitation, or abusive communication.
//                                 {"\n"}• Use the platform for casual dating, time-pass, money extortion, or any non-matrimonial
//                                 activities.
//                                 {"\n"}• Impersonate another person or create multiple accounts with fake identities.
//                                 {"\n"}• Share another person’s personal information (such as phone number, address, or photos)
//                                 without consent.
//                                 {"\n\n"}3.2 Users are solely responsible for verifying the background, character, and suitability of any
//                                 potential partner before making commitments.
//                                 {"\n\n"}3.3 Users must conduct themselves with dignity and respect when communicating with others.
//                                 Any inappropriate, abusive, or exploitative behavior may lead to suspension or permanent
//                                 termination.
//                                 {"\n\n"}3.4 Users must take adequate precautions before sharing financial details, meeting in person, or
//                                 proceeding with marriage arrangements.
//                             </Text>

//                             <Text style={styles.termsSubHeading}>4. Verification & Compliance</Text>
//                             <Text style={styles.termsParagraph}>
//                                 4.1 Shaadivasi.in may conduct limited verification of documents such as Aadhaar, PAN, or
//                                 educational certificates to promote authenticity, but this is not exhaustive. Final responsibility of
//                                 verification lies with the users themselves.
//                                 {"\n\n"}4.2 Users must comply with all applicable Indian laws, including but not limited to:
//                                 {"\n"}• Information Technology Act, 2000 and Rules – relating to digital content,
//                                 cybersecurity, and protection of user data.
//                                 {"\n"}• Consumer Protection Act, 2019 – regarding fairness and non-misrepresentation.
//                                 {"\n"}• Indian Penal Code, 1860 – covering fraud, cheating, impersonation, obscenity,
//                                 defamation, and criminal intimidation.
//                                 {"\n"}• Dowry Prohibition Act, 1961 – strictly prohibiting dowry demands or related
//                                 discussions.
//                                 {"\n\n"}4.3 Any user found violating these laws may have their account terminated and may face legal
//                                 consequences under Indian law.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>5. Privacy & Data Protection</Text>
//                             <Text style={styles.termsParagraph}>
//                                 5.1 Shaadivasi.in collects, processes, and stores user data in accordance with:
//                                 {"\n"}• Information Technology (Reasonable Security Practices and Procedures and
//                                 Sensitive Personal Data or Information) Rules, 2011
//                                 {"\n"}• Digital Personal Data Protection Act, 2023
//                                 {"\n\n"}5.2 Data collected may include personal details, contact information, photographs, preferences,
//                                 and activity logs. This information is used solely to provide matrimonial services and improve
//                                 user experience.
//                                 {"\n\n"}5.3 Shaadivasi.in does not sell or rent personal data to third parties without consent. However,
//                                 data may be shared:
//                                 {"\n"}• With service providers who assist in running the App.
//                                 {"\n"}• When required by law enforcement or government agencies.
//                                 {"\n"}• To protect the rights, safety, and security of users and the platform.
//                                 {"\n\n"}5.4 Despite best security practices, Shaadivasi.in cannot guarantee absolute protection against
//                                 unauthorized access, hacking, or data breaches. Users agree to use the App at their own risk.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>6. Payments & Membership</Text>
//                             <Text style={styles.termsParagraph}>
//                                 6.1 Some features of Shaadivasi.in may be offered only to paid members (e.g., premium
//                                 memberships, visibility boosts, or advanced search filters).
//                                 {"\n\n"}6.2 All payments are non-refundable, except where mandated by Indian law. Users must
//                                 carefully review membership terms before purchasing.
//                                 {"\n\n"}6.3 Payments must be made through authorized payment gateways integrated with the App.
//                                 Shaadivasi.in is not responsible for failures, delays, or frauds occurring due to third-party
//                                 payment processors.
//                                 {"\n\n"}6.4 Auto-renewal of subscriptions (if enabled) will be charged to the user’s registered payment
//                                 method, unless cancelled in advance.
//                                 {"\n\n"}6.5 Any fraudulent payment, chargeback, or payment dispute may result in immediate
//                                 suspension of the account.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>7. Disclaimer & Limitation of Liability</Text>
//                             <Text style={styles.termsParagraph}>
//                                 7.1 Shaadivasi.in is not responsible for:
//                                 {"\n"}• The eventual success, failure, or outcome of marriages or relationships.
//                                 {"\n"}• Any disputes, dowry issues, fraud, harassment, or incompatibility between users.
//                                 {"\n"}• Any direct, indirect, or consequential damages arising out of use of the platform.
//                                 {"\n\n"}7.2 The App acts only as a facilitator. Once two users begin communicating, meeting, or
//                                 entering into marriage, Shaadivasi.in has no liability for their actions, decisions, or
//                                 consequences.
//                                 {"\n\n"}7.3 Users acknowledge that interactions on the platform involve inherent risks, and Shaadivasi.in
//                                 disclaims all liability for such risks.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>8. Dispute Resolution</Text>
//                             <Text style={styles.termsParagraph}>
//                                 8.1 Users must first attempt to resolve complaints through Shaadivasi.in’s internal grievance
//                                 redressal mechanism.
//                                 {"\n\n"}8.2 If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts located in
//                                 [Your City/State, India], in accordance with Indian laws.
//                                 {"\n\n"}8.3 The App may, at its discretion, recommend arbitration or mediation for amicable
//                                 resolution before resorting to litigation.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>9. Termination</Text>
//                             <Text style={styles.termsParagraph}>
//                                 9.1 Shaadivasi.in reserves the right to suspend or permanently terminate user accounts that:
//                                 {"\n"}• Violate these Terms & Conditions.
//                                 {"\n"}• Provide fake, misleading, or illegal information.
//                                 {"\n"}• Upload offensive, obscene, or defamatory content.
//                                 {"\n"}• Engage in harassment, fraud, dowry solicitation, or misuse of the platform.
//                                 {"\n\n"}9.2 Termination may be immediate and without notice. In such cases, no refund shall be
//                                 provided.
//                                 {"\n\n"}9.3 Shaadivasi.in may also retain certain user data after termination, as required by law.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>10. General Rules</Text>
//                             <Text style={styles.termsParagraph}>
//                                 • Respect cultural and community values.
//                                 {"\n"}• Communicate with dignity and honesty.
//                                 {"\n"}• Do not demand or promote dowry (punishable under Dowry Prohibition Act, 1961).
//                                 {"\n"}• Do not use the platform for business solicitation, advertisements, or money extortion.
//                                 {"\n"}• Do not misuse the platform for illegal or criminal activities.
//                                 {"\n"}• Shaadivasi.in reserves the right to modify, update, or replace these Terms at any time,
//                                 with changes effective upon publication on the App.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>11. Limitation of Liability & Indemnity</Text>
//                             <Text style={styles.termsParagraph}>
//                                 11.1 Shaadivasi.in, its founders, owners, directors, employees, and affiliates shall not be liable
//                                 for any damages, claims, or disputes arising from:
//                                 {"\n"}• Misuse of the platform by users.
//                                 {"\n"}• False or misleading information shared by users.
//                                 {"\n"}• Fraud, dowry demands, harassment, or illegal acts committed by users.
//                                 {"\n"}• Matrimonial disputes, separation, or divorce after marriage.
//                                 {"\n\n"}11.2 The maximum liability of Shaadivasi.in (if proven in a court of law) shall be limited to the
//                                 amount of membership fee paid by the affected user.
//                                 {"\n\n"}11.3 Users agree to indemnify and hold harmless Shaadivasi.in, its founders, directors,
//                                 employees, and partners against any legal claims, damages, penalties, or expenses (including
//                                 attorney fees) arising from misuse of the platform or violation of these Terms.
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>12. User Declaration & Confirmation</Text>
//                             <Text style={styles.termsParagraph}>
//                                 By registering or using Shaadivasi.in, I hereby declare and confirm that:
//                                 {"\n"}• I am above 18 years of age and legally eligible to marry under Indian laws.
//                                 {"\n"}• I have read, understood, and agreed to all the Terms & Conditions mentioned herein.
//                                 {"\n"}• I understand that Shaadivasi.in is only a facilitating platform and does not guarantee
//                                 marriage or compatibility.
//                                 {"\n"}• I take full responsibility for my interactions, communications, and decisions made
//                                 through this platform.
//                                 {"\n"}• I shall not hold Shaadivasi.in, its owners, or affiliates responsible for any disputes, fraud,
//                                 dowry issues, incompatibility, or failures arising from my use of the App.
//                             </Text>
//                             <Text style={styles.termsParagraph}>
//                                 User Acceptance
//                                 {"\n"}I Agree to the Terms & Conditions of Shaadivasi.in
//                                 {"\n"}(Kindly tick the box and accept these Terms & Conditions at the time of sign-up on our App)
//                             </Text>
                            
//                             <View style={{height: 30}}/>

//                             <Text style={styles.termsHeading}>📜 Shaadivasi.in के ͧलए Ǔनयम और शत ( ɏ Terms & Conditions)</Text>
//                             <Text style={styles.termsSubHeading}>हाल हȣ मɅअपडटे ͩकया गया</Text>
//                             <Text style={styles.termsParagraph}>
//                                 Shaadivasi.in मɅ आपका èवागत है (आगे इसे “ऐप” / “Üलेटफ़ॉम” / “सेवा” कहा जाएगा)। ये Ǔनयम और शतɏ(“T&C”) इस ऐप के उपयोग को Ǔनयंǒğत करती हɇ, िजसमɅ सभी फȧचस[, काय¢[ मताएँ, सामĒी और Ĥदान कȧ गई सेवाएँ शाͧमल हɇ। Shaadivasi.in का उपयोग, पंजीकरण या एÈसेस करके, आप इन शतɟ से बंधे होने के ͧलए सहमत होते हɇ। यǑद आप सहमत नहȣं हɇ, तो आपको इस ऐप का उपयोग करने से बचना चाǑहए। हम आपको ͸ढ़ता से सलाह देते हɇͩक आप इन शतɟ को Úयानपूवक पढ़ [ Ʌ और समय-समय पर उनकȧ समी¢ा करɅ, Èयɉͩक इनमɅ समयसमय पर अपडटे ͩकए जा सकते हɇ।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>1. पाğता (Eligibility)</Text>
//                             <Text style={styles.termsSubHeading}>1.1 Ûयूनतम आयुआवæयकता</Text>
//                             <Text style={styles.termsParagraph}>
//                                 Shaadivasi.in का उपयोग करने के ͧलए, उपयोगकता[ कȧ आयुभारतीय Ĥौढ़ता अͬधǓनयम, 1875 के अनुसार कम से कम 18 वष[ होनी चाǑहए। 18 वष[ से कम आयुवाले åयिÈत ɮवारा कोई भी पंजीकरण सÉती से Ǔनͪषɮध है और अमाÛय माना जाएगा। ऐप को ͩकसी भी उपयोगकता[ कȧ आयुस×याͪपत करने और नाबाͧलग उपयोगकता[ओं के खाते तुरंत समाÜत करने का अͬधकार है।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>1.2 ͪववाह के ͧलए कानूनी योÊयता</Text>
//                             <Text style={styles.termsParagraph}>
//                                 के वल वहȣ åयिÈत पंजीकरण कर सकते हɇ िजÛहɅ भारतीय कानूनɉ के अतं गत [ ͪववाह करने कȧ अनुमǓत है। इसमɅ, लेͩकन के वल इÛहȣं तक सीͧमत नहȣं, Ǔनàनͧलͨखत कानून शाͧमल हɇ:
//                                 {"\n"}• Ǒहदं ूͪववाह अͬधǓनयम, 1955
//                                 {"\n"}• ͪवशषे ͪववाह अͬधǓनयम, 1954
//                                 {"\n"}• बाल ͪववाह Ǔनषेध अͬधǓनयम, 2006
//                                 {"\n"}• भारतीय ईसाई ͪववाह अͬधǓनयम, 1872
//                                 {"\n"}• पारसी ͪववाह और तलाक अͬधǓनयम, 1936
//                                 {"\n"}• मुिèलम åयिÈतगत कानून (शरȣयत) अͬधǓनयम, 1937
//                                 {"\n\n"}उपयोगकता[ओं को यह सुǓनिæचत करना होगा ͩक वे:
//                                 {"\n"}• पहले से ͪववाǑहत न हɉ (जब तक ͩक उनके Ǔनजी कानून ɮवारा अनुमǓत न हो)।
//                                 {"\n"}• èवèथ मिèतçक के हɉ और ͪववाह कȧ ĤकृǓत को समझने मɅ स¢म हɉ।
//                                 {"\n"}• ͩकसी भी कानूनी अ¢मता या अदालत के आदेश से ͪववाह करने से वंͬचत न हɉ।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>1.3 जानकारȣ कȧ सटȣकता</Text>
//                             <Text style={styles.termsParagraph}>
//                                 पंजीकरण के दौरान, उपयोगकता[ओं को सÍची, सहȣ, वतम[ ान और पूण जानकार [ ȣ Ĥदान करनी होगी। झूठȤ, ħामक या अधूरȣ जानकारȣ (जैसे वैवाǑहक िèथǓत Ǔछपाना, पहले से मौजदू संबंध, आपराͬधक इǓतहास, गंभीर ͬचͩक×सीय िèथǓतयाँ) देना इन शतɟ का उãलंघन होगा और इसके पǐरणामèवǾप खाते का समापन (ǒबना ǐरफंड) तथा कानूनी कार[वाई हो सकती है।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>1.4 उपयोगकता[ कȧ घोषणा</Text>
//                             <Text style={styles.termsParagraph}>
//                                 पंजीकरण करके, उपयोगकता[ यह ĤǓतǓनͬध×व और आæवासन देता है ͩक:
//                                 {"\n"}• वह ͪववाह के ͧलए सभी कानूनी आवæयकताओं को पूरा करता/करती है।
//                                 {"\n"}• Ĥदान कȧ गई जानकारȣ वाèतͪवक और स×यापन योÊय है।
//                                 {"\n"}• वह इस ऐप का उपयोग के वल वैवाǑहक उɮदेæयɉ के ͧलए कर रहा/रहȣ है।
//                                 {"\n\n"}Shaadivasi.in ͩकसी भी उपयोगकता[ ɮवारा कȧ गई झठू Ȥ घोषणाओं के ͧलए िजàमेदार नहȣं होगा। पाğता स×याͪपत करने कȧ िजàमेदारȣ के वल उपयोगकता[ओं कȧ है।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>2. सेवा का èवǾप (Nature of Service)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 2.1 Shaadivasi.in एक ͫडिजटल Üलेटफ़ॉम है [ , िजसे मुÉय Ǿप से आǑदवासी समुदाय के åयिÈतयɉ को ͪववाह हेतुजोड़ने के ͧलए बनाया गया है। यह केवल पंजीकृत उपयोगकता[ओं के बीच पǐरचय और संचार का माÚयम है।
//                                 {"\n\n"}2.2 Shaadivasi.in कोई ͪववाह Þयूरो, मैचमेͩकंग एजɅसी, या वैवाǑहक गारंटर नहȣं है। हम ÏयोǓतषीय सेवाएँ, पçृठभͧूम जाँच या ͪववाह के कानूनी आæवासन Ĥदान नहȣं करते।
//                                 {"\n\n"}2.3 यह Üलेटफ़ॉम यह वादा या गारंट [ ȣ नहȣं करता ͩक:
//                                 {"\n"}• ͪववाह अवæय होगा।
//                                 {"\n"}• उपयोगकता[ओं के बीच संगतता या उपयुÈतता सǓुनिæचत होगी।
//                                 {"\n"}• ͪववाह या संबंध सफल और èथायी हɉगे।
//                                 {"\n\n"}2.4 Shaadivasi.in िजàमेदार नहȣं है:
//                                 {"\n"}• उपयोगकता[ओं कȧ पçृठभͧूम, ͪवƣीय िèथǓत, ͧश¢ा, रोजगार या चǐरğ कȧ जाँच करने के ͧलए।
//                                 {"\n"}• उपयोगकता[ओं ɮवारा ͩकए गए ͪववाद, संघष या धोखाधड़ी के [ ͧलए।
//                                 {"\n"}• ͩकसी भी उपयोगकता[ ɮवारा दसू रे को ͩकए गए वादɉ या बयानɉ के ͧलए।
//                                 {"\n\n"}ऐप केवल एक सुͪवधा Ĥदान करने वाला माÚयम है, और उपयोगकता[ओं को ͩकसी भी चचा[, मुलाकात या ͪववाह से पहले èवयं पूरȣ सावधानी बरतनी होगी।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>3. उपयोगकता[ कȧ िजàमेदाǐरयाँ (User Responsibilities)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 3.1 उपयोगकता[ सहमत हɇͩक वे ऐप का उपयोग के वल वैवाǑहक उɮदेæयɉ के ͧलए करɅगे और वे:
//                                 {"\n"}• झूठȤ, ħामक, या धोखाधड़ी वालȣ जानकारȣ नहȣं दɅगे।
//                                 {"\n"}• अæलȣल, पोनȾĒाͩफक, आपͪƣजनक, मानहाǓनकारक, या अवैध सामĒी अपलोड नहȣं करɅगे।
//                                 {"\n"}• उ×पीड़न, धमकȧ, शोषण या अपमानजनक संचार मɅ शाͧमल नहȣं हɉगे।
//                                 {"\n"}• ऐप का उपयोग कैज़ुअल डेǑटगं , टाइमपास, धन उगाहȣ, या गैर-वैवाǑहक गǓतͪवͬधयɉ के ͧलए नहȣं करɅगे।
//                                 {"\n"}• ͩकसी अÛय åयिÈत का ĤǓतǾपण नहȣं करɅगे या नकलȣ पहचान के साथ कई खाते नहȣं बनाएंगे।
//                                 {"\n"}• ͩकसी अÛय åयिÈत कȧ Ǔनजी जानकारȣ (जैसे फोन नंबर, पता, फोटो) ǒबना अनुमǓत साझा नहȣं करɅगे।
//                                 {"\n\n"}3.2 उपयोगकता[ ͩकसी भी सभं ाͪवत साथी कȧ पçृठभूͧम, चǐरğ और उपयुÈतता कȧ जाँच èवयं करɅगे।
//                                 {"\n\n"}3.3 उपयोगकता[ओं को दसू रɉ से संवाद करते समय गǐरमा और सàमान बनाए रखना होगा। अनुͬचत, अपमानजनक या शोषणकारȣ åयवहार खाते के Ǔनलंबन या èथायी समािÜत का कारण बन सकता है।
//                                 {"\n\n"}3.4 उपयोगकता[ओं को ͪवƣीय जानकारȣ साझा करने, åयिÈतगत Ǿप से ͧमलने, या ͪववाह कȧ åयवèथा करने से पहले पया[Üत सावधानी बरतनी चाǑहए।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>4. सदèयता और भुगतान (Membership & Payments)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 4.1 Shaadivasi.in Ǔनःशुãक और सशुãक दोनɉ Ĥकार कȧ सदèयता योजनाएँ Ĥदान करता है। कुछ सुͪवधाएँ के वल Ĥीͧमयम/पेड सदèयता लेने पर हȣ उपलÞध होती हɇ।
//                                 {"\n\n"}4.2 सभी शुãक भारतीय ǽपये (INR) मɅ लागूहɉगे और इÛहɅ ऐप/वेबसाइट पर सूचीबɮध ͩकया जाएगा। भुगतान एक बार ͩकया गया तो वह ͩकसी भी पǐरिèथǓत मɅवापस (Refundable) नहȣं होगा।
//                                 {"\n\n"}4.3 Shaadivasi.in को ǒबना पूव[ सूचना Ǒदए कभी भी अपनी शुãक संरचना, भुगतान के तरȣके और सुͪवधाओं मɅ बदलाव करने का अͬधकार है।
//                                 {"\n\n"}4.4 ͩकसी भी अनͬधकृत लेन-देन, धोखाधड़ी वाले भुगतान, या भुगतान गेटवे से संबंͬधत समèयाओं के ͧलए ऐप िजàमेदार नहȣं होगा। उपयोगकता[ को ऐसे मामलɉ मɅ सीधे भुगतान सेवा Ĥदाता से सपं क[ करना होगा।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>5. गोपनीयता और डटे ा सरु¢ा (Privacy & Data Protection)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 5.1 Shaadivasi.in उपयोगकता[ओं कȧ åयिÈतगत जानकारȣ का दǽुपयोग नहȣं करेगा। सभी डटे ा केवल पंजीकृत उपयोगकता[ओं के बीच मैͬचगं और संचार के उɮदेæय से उपयोग ͩकया जाएगा।
//                                 {"\n\n"}5.2 ऐप भारतीय सूचना Ĥौɮयोͬगकȧ अͬधǓनयम, 2000 तथा ͫडिजटल åयिÈतगत डटे ा संर¢ण अͬधǓनयम, 2023 (DPDP Act) के Ǔनयमɉ का पालन करेगा।
//                                 {"\n\n"}5.3 उपयोगकता[ओं को सलाह दȣ जाती है ͩक वे ऐप पर संवेदनशील जानकारȣ (जैसे ͪवƣीय ͪववरण, बक खाता नंबर ɇ , OTP आǑद) साझा न करɅ।
//                                 {"\n\n"}5.4 यǑद ͩकसी साइबर-हमले, हैͩकंग या ततृ ीय प¢ ɮवारा अवैध Ǿप से डेटा तक पहुँच बनाई जाती है, तो Shaadivasi.in या इसके संèथापक åयिÈतगत Ǿप से िजàमेदार नहȣं हɉगे, बशतȶ उͬचत सुर¢ा उपाय लागूͩकए गए हɉ।
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>6. सामĒी का उपयोग (Use of Content)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 6.1 ऐप पर पोèट कȧ गई सभी Ĥोफ़ाइल, फोटो और ͪववरण के वल åयिÈतगत उपयोग के ͧलए हɇ।
//                                 {"\n\n"}6.2 उपयोगकता[ओं को ऐप कȧ सामĒी कȧ कॉपी करने, èĐȧनशॉट लेने, ͪवतǐरत करने या ͩकसी åयावसाǓयक/ग़ैर-कानूनी उɮदेæय से उपयोग करने कȧ अनुमǓत नहȣं है।
//                                 {"\n\n"}6.3 Shaadivasi.in को ͩकसी भी समय ͩकसी भी उपयोगकता[ ɮवारा अपलोड कȧ गई अनुͬचत सामĒी को हटाने या संपाǑदत करने का अͬधकार है।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>7. अèवीकरण (Disclaimer)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 7.1 Shaadivasi.in के वल एक मÚयèथ (intermediary) के Ǿप मɅ काय करता है और भारतीय [ सूचना Ĥौɮयोͬगकȧ अͬधǓनयम, 2000 कȧ धारा 79 के अतं गत "सेफ हाब [ र[ " सरु¢ा का लाभ ĤाÜत करता है।
//                                 {"\n\n"}7.2 हम उपयोगकता[ओं ɮवारा साझा कȧ गई ͩकसी भी जानकारȣ कȧ Ĥामाͨणकता, सटȣकता या पूणता के [ ͧलए िजàमेदार नहȣं हɇ।
//                                 {"\n\n"}7.3 हम ͩकसी भी उपयोगकता[ कȧ गǓतͪवͬधयɉ, संवाद या ͪववाह पǐरणामɉ कȧ गारंटȣ नहȣं देते।
//                                 {"\n\n"}7.4 उपयोगकता[ èवयं अपने ͪववेक और सावधानी से ͩकसी भी सबं ंध या ͪववाह का Ǔनणय ल [ Ʌ।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>8. खाता समािÜत (Termination of Account)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 8.1 Shaadivasi.in ͩकसी भी उपयोगकता[ का खाता त×काल Ĥभाव से समाÜत कर सकता है यǑद:
//                                 {"\n"}• उसने झूठȤ या धोखाधड़ी जानकारȣ दȣ हो।
//                                 {"\n"}• वह अनुͬचत, अपमानजनक या अवैध गǓतͪवͬधयɉ मɅ शाͧमल हो।
//                                 {"\n"}• उसने ऐप कȧ नीǓतयɉ का उãलंघन ͩकया हो।
//                                 {"\n\n"}8.2 उपयोगकता[ èवयं भी अपना खाता èथायी Ǿप से बंद करने का अनुरोध कर सकते हɇ।
//                                 {"\n\n"}8.3 खाते के समाÜत होने पर कोई भी शुãक वापस नहȣं ͩकया जाएगा।
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>9. ͪववाद समाधान (Dispute Resolution)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 9.1 इन शतɟ से उ×पÛन कोई भी ͪववाद भारतीय कानूनɉ के अधीन होगा।
//                                 {"\n\n"}9.2 ͩकसी भी ͪववाद का समाधान महाराçĚ राÏय, भारत के Ûयायालयɉ मɅ ͩकया जाएगा।
//                                 {"\n\n"}9.3 उपयोगकता[ओं को सलाह दȣ जाती है ͩक वे ͩकसी भी ͧशकायत के ͧलए पहले Shaadivasi.in कȧ सपोट[ टȣम से संपक[ करɅ।
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>10. संशोधन (Modifications)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 10.1 Shaadivasi.in को इन Ǔनयमɉ और शतɟ मɅ समय-समय पर बदलाव या अपडटे करने का पूरा अͬधकार है।
//                                 {"\n\n"}10.2 ऐसे बदलाव ऐप/वेबसाइट पर Ĥकाͧशत होने के तुरंत बाद Ĥभावी हो जाएंगे।
//                                 {"\n\n"}10.3 उपयोगकता[ कȧ िजàमेदारȣ है ͩक वे Ǔनयͧमत Ǿप से इन शतɟ कȧ समी¢ा करɅ।
//                             </Text>
                            
//                             <Text style={styles.termsSubHeading}>11. संèथापकɉ कȧ सुर¢ा (Founders’ Protection)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 11.1 Shaadivasi.in और इसके संèथापक के वल एक ͫडिजटल Üलेटफ़ॉम उपल [ Þध कराते हɇ।
//                                 {"\n\n"}11.2 उपयोगकता[ओं के बीच उ×पÛन ͩकसी भी ͪववाद, धोखाधड़ी, उ×पीड़न, दहेज मांग, या वैवाǑहक ͪवफलता के ͧलए संèथापक åयिÈतगत Ǿप से िजàमेदार नहȣं हɉगे।
//                                 {"\n\n"}11.3 भारतीय सूचना Ĥौɮयोͬगकȧ अͬधǓनयम, 2000 कȧ धारा 79 के तहत संèथापकɉ और Ĥबंधन को “Safe Harbour” सुर¢ा ĤाÜत है, िजसका अथ है [ ͩक Üलेटफ़ॉम उपयोगकता [ [ओं ɮवारा डाले गए ͩकसी भी सामĒी या संचार के ͧलए िजàमेदार नहȣं होगा।
//                                 {"\n\n"}11.4 यǑद ͩकसी भी पǐरिèथǓत मɅ Shaadivasi.in या उसके संèथापकɉ कȧ िजàमेदारȣ अदालत मɅ ͧसɮध होती है, तो अͬधकतम िजàमेदारȣ के वल उपयोगकता[ ɮवारा चुकाए गए सदèयता शुãक तक सीͧमत होगी।
//                                 {"\n\n"}11.5 उपयोगकता[ सहमत होते हɇͩक वे Shaadivasi.in, इसके संèथापकɉ, कमचा [ ǐरयɉ, और सहयोͬगयɉ को ͩकसी भी कानूनी दावे, जुमा[ने, या खच (िजसम [ Ʌ वकȧल कȧ फȧस भी शाͧमल है) से सुरͯ¢त रखɅगे।
//                             </Text>

//                             <Text style={styles.termsSubHeading}>12. अंǓतम घोषणा और èवीकृǓत (Final Declaration & Acceptance)</Text>
//                             <Text style={styles.termsParagraph}>
//                                 इस ऐप पर पंजीकरण और उपयोग करके, मɇhereby confirm करता/करती हूँ ͩक:
//                                 {"\n"}• मने सभी ɇ Ǔनयम और शतɏÚयानपूवक पढ़ [ ȣ हɇ।
//                                 {"\n"}• म इन शत ɇ ɟ से सहमत हूँऔर इÛहɅ मानने के ͧलए बाÚय हूँ।
//                                 {"\n"}• मɇसमझता/समझती हूँ ͩक Shaadivasi.in और इसके संèथापक के वल एक पǐरचया×मक ͫडिजटल Üलेटफ़ॉम उपल [ Þध कराते हɇ और ͩकसी भी वैवाǑहक ͪववाद, धोखाधड़ी, या ͪवफलता के ͧलए åयिÈतगत Ǿप से िजàमेदार नहȣं हɇ।
//                                 {"\n"}• म यह भी ɇ èवीकार करता/करती हूँ ͩक मेरȣ दȣ गई सभी जानकारȣ स×य और सहȣ है।
//                             </Text>

//                             <Text style={styles.termsParagraph}>
//                                 उपयोगकता[ èवीकृǓत
//                                 {"\n"}मɇShaadivasi.in कȧ Ǔनयम एवं शतɟ से सहमत हूँ।
//                                 {"\n"}(कृपया साइन-अप करते समय बॉÈस पर Ǒटक करके इन Ǔनयम एवं . शतɟ को èवीकार करɅ) ✅
//                             </Text>

//                         </ScrollView>
                        
//                         <TouchableOpacity
//                             style={styles.agreeButton}
//                             onPress={() => setShowTerms(false)}
//                         >
//                             <Text style={styles.agreeButtonText}>I Understand</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//     },
//     backgroundImage: {
//         position: 'absolute',
//         top: 25,
//         left: 0,
//     },
//     overlay: {
//         ...StyleSheet.absoluteFillObject,
//         backgroundColor: 'rgba(0,0,0,0.4)',
//     },
//     contentContainer: {
//         flex: 1,
//         padding: 25,
//     },
//     header: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#fff',
//         marginBottom: 8,
//     },
//     subtitle: {
//         fontSize: 16,
//         color: 'rgba(255,255,255,0.8)',
//         paddingBottom: 20
//     },
//     spacer: {
//         flex: 1,
//     },
//     bottomContainer: {
//         marginBottom: 20,
//     },
//     termsLinkContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginBottom: 20,
//         flexWrap: 'wrap',
//     },
//     termsText: {
//         color: 'rgba(255,255,255,0.8)',
//         fontSize: 14,
//     },
//     termsLink: {
//         color: '#fff',
//         textDecorationLine: 'underline',
//         fontSize: 14,
//         fontWeight: '600',
//     },
//     socialButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'rgba(255,255,255,0.9)',
//         padding: 18,
//         borderRadius: 10,
//         marginBottom: 15,
//         gap: 12,
//     },
//     socialButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     dividerContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 20,
//     },
//     dividerLine: {
//         flex: 1,
//         height: 1,
//         backgroundColor: 'rgba(255,255,255,0.3)',
//     },
//     dividerText: {
//         color: 'rgba(255,255,255,0.7)',
//         paddingHorizontal: 10,
//         fontSize: 14,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 15,
//         alignItems: 'center'
//     },
//     loginText: {
//         color: 'rgba(255,255,255,0.8)',
//     },
//     loginLink: {
//         color: '#fff',
//         fontWeight: '600',
//         textDecorationLine: 'underline',
//         fontSize: 16
//     },
//     trustContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//         gap: 8,
//     },
//     trustText: {
//         color: 'rgba(255,255,255,0.7)',
//         fontSize: 14,
//     },
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.7)',
//         padding: 20,
//     },
//     modalContent: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         width: '100%',
//         maxHeight: '80%',
//         overflow: 'hidden',
//     },
//     modalHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//     },
//     modalTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     closeButton: {
//         padding: 5,
//     },
//     termsContent: {
//         padding: 15,
//     },
//     termsHeading: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     termsSubHeading: {
//         fontSize: 14,
//         fontWeight: 'bold',
//         marginTop: 15,
//         marginBottom: 5,
//     },
//     termsParagraph: {
//         fontSize: 12,
//         marginBottom: 10,
//         lineHeight: 18,
//     },
//     agreeButton: {
//         backgroundColor: Colors.PRIMARY,
//         padding: 15,
//         alignItems: 'center',
//     },
//     agreeButtonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
// });





//10/09
//app/(auth)/index.jsx
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constant/Colors'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Redirect, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useOAuth } from '@clerk/clerk-expo';
import useWarmUpBrowser from '../hooks/useWarmUpBrowser';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const router = useRouter()
    const { width, height } = Dimensions.get('window')
    const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
    const { isLoaded, isSignedIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    useWarmUpBrowser();

    const onGoogleSignIn = async () => {
        try {
            setLoading(true);
            const { createdSessionId, setActive } = await googleAuth();

            if (createdSessionId) {
                // Immediately navigate to info1 after successful auth
                await setActive({ session: createdSessionId });
                router.replace("/homescreens/info1");
            }
        } catch (err) {
            console.error("OAuth error", err);
            if (err.errors?.[0]?.code === "form_identifier_exists") {
                router.replace("/login-email");
            }
        } finally {
            setLoading(false);
        }
    };

    if (!isLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (isSignedIn) {
        return <Redirect href="/(tabs)" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('./../../assets/images/login1.png')}
                style={[styles.backgroundImage, { width, height }]}
                resizeMode="cover"
            />

            <View style={styles.overlay} />

            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Join our community today</Text>
                </View>

                <View style={styles.spacer} />

                <View style={styles.bottomContainer}>
                  

                    <TouchableOpacity
                        style={styles.socialButton}
                        onPress={onGoogleSignIn}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#DB4437" />
                        ) : (
                            <>
                                <FontAwesome name="google" size={20} color="#DB4437" />
                                <Text style={styles.socialButtonText}>Continue with Google</Text>
                            </>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.socialButton, { backgroundColor: Colors.PRIMARY }]}
                        onPress={() => router.push('/email-login')}
                        disabled={loading}
                    >
                        <MaterialIcons name="email" size={20} color="white" />
                        <Text style={[styles.socialButtonText, { color: 'white' }]}>Continue with Email</Text>
                    </TouchableOpacity>
                    
                         <View style={styles.termsLinkContainer}>
                        <Text style={styles.termsText}>By continuing, you agree to our </Text>
                        <TouchableOpacity onPress={() => setShowTerms(true)}>
                            <Text style={styles.termsLink}>Terms & Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dividerContainer}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    <View style={styles.loginPrompt}>
                        <Text style={styles.loginText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => router.push('/login-email')}>
                            <Text style={styles.loginLink}> Login</Text>
                        </TouchableOpacity>
                    </View>
                          
                    <View style={styles.trustContainer}>
                        <AntDesign name="checkcircleo" size={16} color="#4CAF50" />
                        <Text style={styles.trustText}>100% Safe and secure</Text>
                    </View>
                </View>
            </View>

            <Modal
                visible={showTerms}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowTerms(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Terms & Conditions</Text>
                            <TouchableOpacity onPress={() => setShowTerms(false)} style={styles.closeButton}>
                                <AntDesign name="close" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                        
                        <ScrollView style={styles.termsContent}>
                            <Text style={styles.termsHeading}>📜 Terms & Conditions for Shaadivasi.in</Text>
                            <Text style={styles.termsSubHeading}>Recently Updated</Text>
                            <Text style={styles.termsParagraph}>
                                Welcome to Shaadivasi.in (hereinafter referred to as the “App” / “Platform” / “Service”). These
                                Terms and Conditions (“T&C”) govern the use of the App, including all features, functionalities,
                                content, and services provided therein. By accessing, registering on, or using Shaadivasi.in, you
                                agree to be bound by these Terms. If you do not agree, you must refrain from using the App. We
                                strongly advise you to read these Terms carefully and review them periodically, as they may be
                                updated from time to time.
                            </Text>

                            <Text style={styles.termsSubHeading}>1. Eligibility</Text>
                            <Text style={styles.termsSubHeading}>1.1 Minimum Age Requirement</Text>
                            <Text style={styles.termsParagraph}>
                                To use Shaadivasi.in, a user must be at least 18 years of age as per the Indian Majority Act,
                                1875. Any registration by a person under the age of 18 is strictly prohibited and shall be treated
                                as invalid. The App reserves the right to verify the age of any user and to immediately terminate
                                accounts of underage users.
                            </Text>
                            <Text style={styles.termsSubHeading}>1.2 Legal Competency to Marry</Text>
                            <Text style={styles.termsParagraph}>
                                Only individuals who are legally permitted to marry under Indian laws are eligible to register.
                                This includes, but is not limited to, the following laws:
                                {"\n"}• Hindu Marriage Act, 1955
                                {"\n"}• Special Marriage Act, 1954
                                {"\n"}• Prohibition of Child Marriage Act, 2006
                                {"\n"}• Indian Christian Marriage Act, 1872
                                {"\n"}• Parsi Marriage and Divorce Act, 1936
                                {"\n"}• Muslim Personal Law (Shariat) Application Act, 1937
                                {"\n\n"}Users must ensure they are:
                                {"\n"}• Not already married, unless permitted by their personal law.
                                {"\n"}• Of sound mind and capable of understanding the nature of marriage.
                                {"\n"}• Free from any legal disability or court orders disqualifying them from marriage.
                            </Text>
                            <Text style={styles.termsSubHeading}>1.3 Accuracy of Information</Text>
                            <Text style={styles.termsParagraph}>
                                During registration, users must provide true, accurate, current, and complete information.
                                Providing false, misleading, or incomplete details (such as hiding marital status, existing
                                relationships, criminal history, or serious medical conditions) shall constitute a breach of these
                                Terms and may result in termination of the account without refund, as well as possible legal
                                action.
                            </Text>
                            <Text style={styles.termsSubHeading}>1.4 User Representation</Text>
                            <Text style={styles.termsParagraph}>
                                By registering, the user represents and warrants that:
                                {"\n"}• They meet all legal requirements for marriage.
                                {"\n"}• The information they provide is authentic and verifiable.
                                {"\n"}• They are using the App exclusively for matrimonial purposes.
                                {"\n\n"}Shaadivasi.in shall not be responsible for any false declarations made by users. The
                                responsibility for verifying eligibility lies solely with the users themselves.
                            </Text>

                            <Text style={styles.termsSubHeading}>2. Nature of Service</Text>
                            <Text style={styles.termsParagraph}>
                                2.1 Shaadivasi.in is a digital platform created to connect individuals, primarily from the Adivasi
                                community, for matrimonial purposes. It acts only as a facilitator for introductions and
                                communications between registered users.
                                {"\n\n"}2.2 Shaadivasi.in is not a marriage bureau, matchmaking agency, or matrimonial
                                guarantor. We do not provide matchmaking consultancy, astrological services, background
                                verification, or legal guarantees regarding marriage.
                                {"\n\n"}2.3 The platform does not promise or guarantee:
                                {"\n"}• That a marriage will take place.
                                {"\n"}• Compatibility or suitability between users.
                                {"\n"}• The success or stability of any marriage or relationship formed through the App.
                                {"\n\n"}2.4 Shaadivasi.in is not responsible for:
                                {"\n"}• Verification of users’ backgrounds, financial status, education, employment, or character.
                                {"\n"}• Any disputes, conflicts, or fraudulent activities carried out by users.
                                {"\n"}• Any promises or representations made by one user to another.
                                {"\n\n"}The App is strictly an enabling platform, and users must perform their own due diligence before
                                proceeding with any discussions, meetings, or marriage.
                            </Text>

                            <Text style={styles.termsSubHeading}>3. User Responsibilities</Text>
                            <Text style={styles.termsParagraph}>
                                3.1 Users agree to use the App strictly for matrimonial purposes and must not:
                                {"\n"}• Provide false, misleading, or fraudulent information.
                                {"\n"}• Upload obscene, pornographic, offensive, defamatory, or illegal content.
                                {"\n"}• Engage in harassment, threats, exploitation, or abusive communication.
                                {"\n"}• Use the platform for casual dating, time-pass, money extortion, or any non-matrimonial
                                activities.
                                {"\n"}• Impersonate another person or create multiple accounts with fake identities.
                                {"\n"}• Share another person’s personal information (such as phone number, address, or photos)
                                without consent.
                                {"\n\n"}3.2 Users are solely responsible for verifying the background, character, and suitability of any
                                potential partner before making commitments.
                                {"\n\n"}3.3 Users must conduct themselves with dignity and respect when communicating with others.
                                Any inappropriate, abusive, or exploitative behavior may lead to suspension or permanent
                                termination.
                                {"\n\n"}3.4 Users must take adequate precautions before sharing financial details, meeting in person, or
                                proceeding with marriage arrangements.
                            </Text>

                            <Text style={styles.termsSubHeading}>4. Verification & Compliance</Text>
                            <Text style={styles.termsParagraph}>
                                4.1 Shaadivasi.in may conduct limited verification of documents such as Aadhaar, PAN, or
                                educational certificates to promote authenticity, but this is not exhaustive. Final responsibility of
                                verification lies with the users themselves.
                                {"\n\n"}4.2 Users must comply with all applicable Indian laws, including but not limited to:
                                {"\n"}• Information Technology Act, 2000 and Rules – relating to digital content,
                                cybersecurity, and protection of user data.
                                {"\n"}• Consumer Protection Act, 2019 – regarding fairness and non-misrepresentation.
                                {"\n"}• Indian Penal Code, 1860 – covering fraud, cheating, impersonation, obscenity,
                                defamation, and criminal intimidation.
                                {"\n"}• Dowry Prohibition Act, 1961 – strictly prohibiting dowry demands or related
                                discussions.
                                {"\n\n"}4.3 Any user found violating these laws may have their account terminated and may face legal
                                consequences under Indian law.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>5. Privacy & Data Protection</Text>
                            <Text style={styles.termsParagraph}>
                                5.1 Shaadivasi.in collects, processes, and stores user data in accordance with:
                                {"\n"}• Information Technology (Reasonable Security Practices and Procedures and
                                Sensitive Personal Data or Information) Rules, 2011
                                {"\n"}• Digital Personal Data Protection Act, 2023
                                {"\n\n"}5.2 Data collected may include personal details, contact information, photographs, preferences,
                                and activity logs. This information is used solely to provide matrimonial services and improve
                                user experience.
                                {"\n\n"}5.3 Shaadivasi.in does not sell or rent personal data to third parties without consent. However,
                                data may be shared:
                                {"\n"}• With service providers who assist in running the App.
                                {"\n"}• When required by law enforcement or government agencies.
                                {"\n"}• To protect the rights, safety, and security of users and the platform.
                                {"\n\n"}5.4 Despite best security practices, Shaadivasi.in cannot guarantee absolute protection against
                                unauthorized access, hacking, or data breaches. Users agree to use the App at their own risk.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>6. Payments & Membership</Text>
                            <Text style={styles.termsParagraph}>
                                6.1 Some features of Shaadivasi.in may be offered only to paid members (e.g., premium
                                memberships, visibility boosts, or advanced search filters).
                                {"\n\n"}6.2 All payments are non-refundable, except where mandated by Indian law. Users must
                                carefully review membership terms before purchasing.
                                {"\n\n"}6.3 Payments must be made through authorized payment gateways integrated with the App.
                                Shaadivasi.in is not responsible for failures, delays, or frauds occurring due to third-party
                                payment processors.
                                {"\n\n"}6.4 Auto-renewal of subscriptions (if enabled) will be charged to the user’s registered payment
                                method, unless cancelled in advance.
                                {"\n\n"}6.5 Any fraudulent payment, chargeback, or payment dispute may result in immediate
                                suspension of the account.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>7. Disclaimer & Limitation of Liability</Text>
                            <Text style={styles.termsParagraph}>
                                7.1 Shaadivasi.in is not responsible for:
                                {"\n"}• The eventual success, failure, or outcome of marriages or relationships.
                                {"\n"}• Any disputes, dowry issues, fraud, harassment, or incompatibility between users.
                                {"\n"}• Any direct, indirect, or consequential damages arising out of use of the platform.
                                {"\n\n"}7.2 The App acts only as a facilitator. Once two users begin communicating, meeting, or
                                entering into marriage, Shaadivasi.in has no liability for their actions, decisions, or
                                consequences.
                                {"\n\n"}7.3 Users acknowledge that interactions on the platform involve inherent risks, and Shaadivasi.in
                                disclaims all liability for such risks.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>8. Dispute Resolution</Text>
                            <Text style={styles.termsParagraph}>
                                8.1 Users must first attempt to resolve complaints through Shaadivasi.in’s internal grievance
                                redressal mechanism.
                                {"\n\n"}8.2 If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts located in
                                [Your City/State, India], in accordance with Indian laws.
                                {"\n\n"}8.3 The App may, at its discretion, recommend arbitration or mediation for amicable
                                resolution before resorting to litigation.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>9. Termination</Text>
                            <Text style={styles.termsParagraph}>
                                9.1 Shaadivasi.in reserves the right to suspend or permanently terminate user accounts that:
                                {"\n"}• Violate these Terms & Conditions.
                                {"\n"}• Provide fake, misleading, or illegal information.
                                {"\n"}• Upload offensive, obscene, or defamatory content.
                                {"\n"}• Engage in harassment, fraud, dowry solicitation, or misuse of the platform.
                                {"\n\n"}9.2 Termination may be immediate and without notice. In such cases, no refund shall be
                                provided.
                                {"\n\n"}9.3 Shaadivasi.in may also retain certain user data after termination, as required by law.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>10. General Rules</Text>
                            <Text style={styles.termsParagraph}>
                                • Respect cultural and community values.
                                {"\n"}• Communicate with dignity and honesty.
                                {"\n"}• Do not demand or promote dowry (punishable under Dowry Prohibition Act, 1961).
                                {"\n"}• Do not use the platform for business solicitation, advertisements, or money extortion.
                                {"\n"}• Do not misuse the platform for illegal or criminal activities.
                                {"\n"}• Shaadivasi.in reserves the right to modify, update, or replace these Terms at any time,
                                with changes effective upon publication on the App.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>11. Limitation of Liability & Indemnity</Text>
                            <Text style={styles.termsParagraph}>
                                11.1 Shaadivasi.in, its founders, owners, directors, employees, and affiliates shall not be liable
                                for any damages, claims, or disputes arising from:
                                {"\n"}• Misuse of the platform by users.
                                {"\n"}• False or misleading information shared by users.
                                {"\n"}• Fraud, dowry demands, harassment, or illegal acts committed by users.
                                {"\n"}• Matrimonial disputes, separation, or divorce after marriage.
                                {"\n\n"}11.2 The maximum liability of Shaadivasi.in (if proven in a court of law) shall be limited to the
                                amount of membership fee paid by the affected user.
                                {"\n\n"}11.3 Users agree to indemnify and hold harmless Shaadivasi.in, its founders, directors,
                                employees, and partners against any legal claims, damages, penalties, or expenses (including
                                attorney fees) arising from misuse of the platform or violation of these Terms.
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>12. User Declaration & Confirmation</Text>
                            <Text style={styles.termsParagraph}>
                                By registering or using Shaadivasi.in, I hereby declare and confirm that:
                                {"\n"}• I am above 18 years of age and legally eligible to marry under Indian laws.
                                {"\n"}• I have read, understood, and agreed to all the Terms & Conditions mentioned herein.
                                {"\n"}• I understand that Shaadivasi.in is only a facilitating platform and does not guarantee
                                marriage or compatibility.
                                {"\n"}• I take full responsibility for my interactions, communications, and decisions made
                                through this platform.
                                {"\n"}• I shall not hold Shaadivasi.in, its owners, or affiliates responsible for any disputes, fraud,
                                dowry issues, incompatibility, or failures arising from my use of the App.
                            </Text>
                            <Text style={styles.termsParagraph}>
                                User Acceptance
                                {"\n"}I Agree to the Terms & Conditions of Shaadivasi.in
                                {"\n"}(Kindly tick the box and accept these Terms & Conditions at the time of sign-up on our App)
                            </Text>
                            
                            <View style={{height: 30}}/>

                            {/* START OF HINDI TEXT REPLACEMENT */}
                            <Text style={styles.termsHeading}>📜 Shaadivasi.in के लिए नियम और शर्तें (Terms & Conditions)</Text>
                            <Text style={styles.termsSubHeading}>हाल ही में अपडेट किया गया</Text>
                            <Text style={styles.termsParagraph}>
                                Shaadivasi.in में आपका स्वागत है (आगे इसे &quot;ऐप&quot; / &quot;प्लेटफ़ॉर्म&quot; / &quot;सेवा&quot; कहा जाएगा)। 
  ये नियम और शर्तें (&quot;T&amp;C&quot;) इस ऐप के उपयोग को नियंत्रित करती हैं, जिसमें सभी फीचर्स, कार्यक्षमताएँ, सामग्री और प्रदान की गई सेवाएँ शामिल हैं। Shaadivasi.in का उपयोग, पंजीकरण या एक्सेस करके, आप इन शर्तों से बंधे होने के लिए सहमत होते हैं। यदि आप सहमत नहीं हैं, तो आपको इस ऐप का उपयोग करने से बचना चाहिए। हम आपको दृढ़ता से सलाह देते हैं कि आप इन शर्तों को ध्यानपूर्वक पढ़ें और समय-समय पर उनकी समीक्षा करें, क्योंकि इनमें समय-समय पर अपडेट किए जा सकते हैं।
                            </Text>

                            <Text style={styles.termsSubHeading}>1. पात्रता (Eligibility)</Text>
                            <Text style={styles.termsSubHeading}>1.1 न्यूनतम आयु आवश्यकता</Text>
                            <Text style={styles.termsParagraph}>
                                Shaadivasi.in का उपयोग करने के लिए, उपयोगकर्ता की आयु भारतीय प्रौढ़ता अधिनियम, 1875 के अनुसार कम से कम 18 वर्ष होनी चाहिए। 18 वर्ष से कम आयु वाले व्यक्ति द्वारा कोई भी पंजीकरण सख्ती से निषिद्ध है और अमान्य माना जाएगा। ऐप को किसी भी उपयोगकर्ता की आयु सत्यापित करने और नाबालिग उपयोगकर्ताओं के खाते तुरंत समाप्त करने का अधिकार है।
                            </Text>

                            <Text style={styles.termsSubHeading}>1.2 विवाह के लिए कानूनी योग्यता</Text>
                            <Text style={styles.termsParagraph}>
                                केवल वही व्यक्ति पंजीकरण कर सकते हैं जिन्हें भारतीय कानूनों के अंतर्गत विवाह करने की अनुमति है। इसमें, लेकिन केवल इन्हीं तक सीमित नहीं, निम्नलिखित कानून शामिल हैं:
                                {"\n"}• हिंदू विवाह अधिनियम, 1955
                                {"\n"}• विशेष विवाह अधिनियम, 1954
                                {"\n"}• बाल विवाह निषेध अधिनियम, 2006
                                {"\n"}• भारतीय ईसाई विवाह अधिनियम, 1872
                                {"\n"}• पारसी विवाह और तलाक अधिनियम, 1936
                                {"\n"}• मुस्लिम व्यक्तिगत कानून (शरीयत) अधिनियम, 1937
                                {"\n\n"}उपयोगकर्ताओं को यह सुनिश्चित करना होगा कि वेः
                                {"\n"}• पहले से विवाहित न हों (जब तक कि उनके निजी कानून द्वारा अनुमति न हो)।
                                {"\n"}• स्वस्थ मस्तिष्क के हों और विवाह की प्रकृति को समझने में सक्षम हों।
                                {"\n"}• किसी भी कानूनी अक्षमता या अदालत के आदेश से विवाह करने से वंचित न हों।
                            </Text>

                            <Text style={styles.termsSubHeading}>1.3 जानकारी की सटीकता</Text>
                            <Text style={styles.termsParagraph}>
                                पंजीकरण के दौरान, उपयोगकर्ताओं को सच्ची, सही, वर्तमान और पूर्ण जानकारी प्रदान करनी होगी। झूठी, भ्रामक या अधूरी जानकारी (जैसे वैवाहिक स्थिति छिपाना, पहले से मौजूद संबंध, आपराधिक इतिहास, गंभीर चिकित्सीय स्थितियाँ) देना इन शर्तों का उल्लंघन होगा और इसके परिणामस्वरूप खाते का समापन (बिना रिफंड) तथा कानूनी कार्रवाई हो सकती है।
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>1.4 उपयोगकर्ता की घोषणा</Text>
                            <Text style={styles.termsParagraph}>
                                पंजीकरण करके, उपयोगकर्ता यह प्रतिनिधित्व और आश्वासन देता है किः
                                {"\n"}• वह विवाह के लिए सभी कानूनी आवश्यकताओं को पूरा करता /करती है।
                                {"\n"}• प्रदान की गई जानकारी वास्तविक और सत्यापन योग्य है।
                                {"\n"}• वह इस ऐप का उपयोग केवल वैवाहिक उद्देश्यों के लिए कर रहा/रही है।
                                {"\n\n"}Shaadivasi.in किसी भी उपयोगकर्ता द्वारा की गई झूठी घोषणाओं के लिए जिम्मेदार नहीं होगा। पात्रता सत्यापित करने की जिम्मेदारी केवल उपयोगकर्ताओं की है।
                            </Text>

                            <Text style={styles.termsSubHeading}>2. सेवा का स्वरूप (Nature of Service)</Text>
                            <Text style={styles.termsParagraph}>
                                2.1 Shaadivasi.in एक डिजिटल प्लेटफ़ॉर्म है, जिसे मुख्य रूप से आदिवासी समुदाय के व्यक्तियों को विवाह हेतु जोड़ने के लिए बनाया गया है। यह केवल पंजीकृत उपयोगकर्ताओं के बीच परिचय और संचार का माध्यम है।
                                {"\n\n"}2.2 Shaadivasi.in कोई विवाह ब्यूरो, मैचमेकिंग एजेंसी, या वैवाहिक गारंटर नहीं है। हम ज्योतिषीय सेवाएँ, पृष्ठभूमि जाँच या विवाह के कानूनी आश्वासन प्रदान नहीं करते।
                                {"\n\n"}2.3 यह प्लेटफ़ॉर्म यह वादा या गारंटी नहीं करता किः
                                {"\n"}• विवाह अवश्य होगा।
                                {"\n"}• उपयोगकर्ताओं के बीच संगतता या उपयुक्तता सुनिश्चित होगी।
                                {"\n"}• विवाह या संबंध सफल और स्थायी होंगे।
                                {"\n\n"}2.4 Shaadivasi.in जिम्मेदार नहीं है:
                                {"\n"}• उपयोगकर्ताओं की पृष्ठभूमि, वित्तीय स्थिति, शिक्षा, रोजगार या चरित्र की जाँच करने के लिए।
                                {"\n"}• उपयोगकर्ताओं द्वारा किए गए विवाद, संघर्ष या धोखाधड़ी के लिए।
                                {"\n"}• किसी भी उपयोगकर्ता द्वारा दूसरे को किए गए वादों या बयानों के लिए।
                                {"\n\n"}ऐप केवल एक सुविधा प्रदान करने वाला माध्यम है, और उपयोगकर्ताओं को किसी भी चर्चा, मुलाकात या विवाह से पहले स्वयं पूरी सावधानी बरतनी होगी।
                            </Text>

                            <Text style={styles.termsSubHeading}>3. उपयोगकर्ता की जिम्मेदारियाँ (User Responsibilities)</Text>
                            <Text style={styles.termsParagraph}>
                                3.1 उपयोगकर्ता सहमत हैं कि वे ऐप का उपयोग केवल वैवाहिक उ‌द्देश्यों के लिए करेंगे और वेः
                                {"\n"}• झूठी, भ्रामक, या धोखाधड़ी वाली जानकारी नहीं देंगे।
                                {"\n"}• अश्लील, पोर्नोग्राफिक, आपत्तिजनक, मानहानिकारक, या अवैध सामग्री अपलोड नहीं करेंगे।
                                {"\n"}• उत्पीड़न, धमकी, शोषण या अपमानजनक संचार में शामिल नहीं होंगे।
                                {"\n"}• ऐप का उपयोग कैजुअल डेटिंग, टाइमपास, धन उगाही, या गैर-वैवाहिक गतिविधियों के लिए नहीं करेंगे।
                                {"\n"}• किसी अन्य व्यक्ति का प्रतिरूपण नहीं करेंगे या नकली पहचान के साथ कई खाते नहीं बनाएंगे।
                                {"\n"}• किसी अन्य व्यक्ति की निजी जानकारी (जैसे फोन नंबर, पता, फोटो) बिना अनुमति साझा नहीं करेंगे।
                                {"\n\n"}3.2 उपयोगकर्ता किसी भी संभावित साथी की पृष्ठभूमि, चरित्र और उपयुक्तता की जाँच स्वयं करेंगे।
                                {"\n\n"}3.3 उपयोगकर्ताओं को दूसरों से संवाद करते समय गरिमा और सम्मान बनाए रखना होगा। अनुचित, अपमानजनक या शोषणकारी व्यवहार खाते के निलंबन या स्थायी समाप्ति का कारण बन सकता है।
                                {"\n\n"}3.4 उपयोगकर्ताओं को वित्तीय जानकारी साझा करने, व्यक्तिगत रूप से मिलने, या विवाह की व्यवस्था करने से पहले पर्याप्त सावधानी बरतनी चाहिए।
                            </Text>

                            <Text style={styles.termsSubHeading}>4. सदस्यता और भुगतान (Membership & Payments)</Text>
                            <Text style={styles.termsParagraph}>
                                4.1 Shaadivasi.in निःशुल्क और सशुल्क दोनों प्रकार की सदस्यता योजनाएँ प्रदान करता है। कुछ सुविधाएँ केवल प्रीमियम/पेड सदस्यता लेने पर ही उपलब्ध होती हैं।
                                {"\n\n"}4.2 सभी शुल्क भारतीय रुपये (INR) में लागू होंगे और इन्हें ऐप/वेबसाइट पर सूचीबद्ध किया जाएगा। भुगतान एक बार किया गया तो वह किसी भी परिस्थिति में वापस (Refundable) नहीं होगा।
                                {"\n\n"}4.3 Shaadivasi.in को बिना पूर्व सूचना दिए कभी भी अपनी शुल्क संरचना, भुगतान के तरीके और सुविधाओं में बदलाव करने का अधिकार है।
                                {"\n\n"}4.4 किसी भी अनधिकृत लेन-देन, धोखाधड़ी वाले भुगतान, या भुगतान गेटवे से संबंधित समस्याओं के लिए ऐप जिम्मेदार नहीं होगा। उपयोगकर्ता को ऐसे मामलों में सीधे भुगतान सेवा प्रदाता से संपर्क करना होगा।
                            </Text>

                            <Text style={styles.termsSubHeading}>5. गोपनीयता और डेटा सुरक्षा (Privacy & Data Protection)</Text>
                            <Text style={styles.termsParagraph}>
                                5.1 Shaadivasi.in उपयोगकर्ताओं की व्यक्तिगत जानकारी का दुरुपयोग नहीं करेगा। सभी डेटा केवल पंजीकृत उपयोगकर्ताओं के बीच मैचिंग और संचार के उद्देश्य से उपयोग किया जाएगा।
                                {"\n\n"}5.2 ऐप भारतीय सूचना प्रौ‌द्योगिकी अधिनियम, 2000 तथा डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 (DPDP Act) के नियमों का पालन करेगा।
                                {"\n\n"}5.3 उपयोगकर्ताओं को सलाह दी जाती है कि वे ऐप पर संवेदनशील जानकारी (जैसे वित्तीय विवरण, बैंक खाता नंबर, OTP आदि) साझा न करें।
                                {"\n\n"}5.4 यदि किसी साइबर हमले, हैकिंग या तृतीय पक्ष द्वारा अवैध रूप से डेटा तक पहुँच बनाई जाती है, तो Shaadivasi.in या इसके संस्थापक व्यक्तिगत रूप से जिम्मेदार नहीं होंगे, बशर्ते उचित सुरक्षा उपाय लागू किए गए हों।
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>6. सामग्री का उपयोग (Use of Content)</Text>
                            <Text style={styles.termsParagraph}>
                                6.1 ऐप पर पोस्ट की गई सभी प्रोफ़ाइल, फोटो और विवरण केवल व्यक्तिगत उपयोग के लिए हैं।
                                {"\n\n"}6.2 उपयोगकर्ताओं को ऐप की सामग्री की कॉपी करने, स्क्रीनशॉट लेने, वितरित करने या किसी व्यावसायिक/गैर-कानूनी उद्देश्य से उपयोग करने की अनुमति नहीं है।
                                {"\n\n"}6.3 Shaadivasi.in को किसी भी समय किसी भी उपयोगकर्ता द्वारा अपलोड की गई अनुचित सामग्री को हटाने या संपादित करने का अधिकार है।
                            </Text>

                            <Text style={styles.termsSubHeading}>7. अस्वीकरण (Disclaimer)</Text>
                            <Text style={styles.termsParagraph}>
                                7.1 Shaadivasi.in केवल एक मध्यस्थ (intermediary) के रूप में कार्य करता है और भारतीय सूचना प्रौ‌द्योगिकी अधिनियम, 2000 की धारा 79 के अंतर्गत &quot;सेफ हार्बर&quot; सुरक्षा का लाभ प्राप्त करता है।
                                {"\n\n"}7.2 हम उपयोगकर्ताओं द्वारा साझा की गई किसी भी जानकारी की प्रामाणिकता, सटीकता या पूर्णता के लिए जिम्मेदार नहीं हैं।
                                {"\n\n"}7.3 हम किसी भी उपयोगकर्ता की गतिविधियों, संवाद या विवाह परिणामों की गारंटी नहीं देते।
                                {"\n\n"}7.4 उपयोगकर्ता स्वयं अपने विवेक और सावधानी से किसी भी संबंध या विवाह का निर्णय लें।
                            </Text>

                            <Text style={styles.termsSubHeading}>8. खाता समाप्ति (Termination of Account)</Text>
                            <Text style={styles.termsParagraph}>
                                8.1 Shaadivasi.in किसी भी उपयोगकर्ता का खाता तत्काल प्रभाव से समाप्त कर सकता है यदिः
                                {"\n"}• उसने झूठी या धोखाधड़ी जानकारी दी हो।
                                {"\n"}• वह अनुचित, अपमानजनक या अवैध गतिविधियों में शामिल हो।
                                {"\n"}• उसने ऐप की नीतियों का उल्लंघन किया हो।
                                {"\n\n"}8.2 उपयोगकर्ता स्वयं भी अपना खाता स्थायी रूप से बंद करने का अनुरोध कर सकते हैं।
                                {"\n\n"}8.3 खाते के समाप्त होने पर कोई भी शुल्क वापस नहीं किया जाएगा।
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>9. विवाद समाधान (Dispute Resolution)</Text>
                            <Text style={styles.termsParagraph}>
                                9.1 इन शर्तों से उत्पन्न कोई भी विवाद भारतीय कानूनों के अधीन होगा।
                                {"\n\n"}9.2 किसी भी विवाद का समाधान महाराष्ट्र राज्य, भारत के न्यायालयों में किया जाएगा।
                                {"\n\n"}9.3 उपयोगकर्ताओं को सलाह दी जाती है कि वे किसी भी शिकायत के लिए पहले Shaadivasi.in की सपोर्ट टीम से संपर्क करें।
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>10. संशोधन (Modifications)</Text>
                            <Text style={styles.termsParagraph}>
                                10.1 Shaadivasi.in को इन नियमों और शर्तों में समय-समय पर बदलाव या अपडेट करने का पूरा अधिकार है।
                                {"\n\n"}10.2 ऐसे बदलाव ऐप/वेबसाइट पर प्रकाशित होने के तुरंत बाद प्रभावी हो जाएंगे।
                                {"\n\n"}10.3 उपयोगकर्ता की जिम्मेदारी है कि वे नियमित रूप से इन शर्तों की समीक्षा करें।
                            </Text>
                            
                            <Text style={styles.termsSubHeading}>11. संस्थापकों की सुरक्षा (Founders’ Protection)</Text>
                            <Text style={styles.termsParagraph}>
                                11.1 Shaadivasi.in और इसके संस्थापक केवल एक डिजिटल प्लेटफ़ॉर्म उपलब्ध कराते हैं।
                                {"\n\n"}11.2 उपयोगकर्ताओं के बीच उत्पन्न किसी भी विवाद, धोखाधड़ी, उत्पीड़न, दहेज मांग, या वैवाहिक विफलता के लिए संस्थापक व्यक्तिगत रूप से जिम्मेदार नहीं होंगे।
                                {"\n\n"}11.3 भारतीय सूचना प्रौद्योगिकी अधिनियम, 2000 की धारा 79 के तहत संस्थापकों और प्रबंधन को &quot;Safe Harbour&quot; सुरक्षा प्राप्त है, जिसका अर्थ है कि प्लेटफ़ॉर्म उपयोगकर्ताओं द्वारा डाले गए किसी भी सामग्री या संचार के लिए जिम्मेदार नहीं होगा।
                                {"\n\n"}11.4 यदि किसी भी परिस्थिति में Shaadivasi.in या उसके संस्थापकों की जिम्मेदारी अदालत में सिद्ध होती है, तो अधिकतम जिम्मेदारी केवल उपयोगकर्ता द्वारा चुकाए गए सदस्यता शुल्क तक सीमित होगी।
                                {"\n\n"}11.5 उपयोगकर्ता सहमत होते हैं कि वे Shaadivasi.in, इसके संस्थापकों, कर्मचारियों, और सहयोगियों को किसी भी कानूनी दावे, जुर्माने, या खर्च (जिसमें वकील की फीस भी शामिल है) से सुरक्षित रखेंगे।
                            </Text>

                            <Text style={styles.termsSubHeading}>12. अंतिम घोषणा और स्वीकृति (Final Declaration & Acceptance)</Text>
                            <Text style={styles.termsParagraph}>
                                इस ऐप पर पंजीकरण और उपयोग करके, मैं hereby confirm करता/करती हूँ किः
                                {"\n"}• मैंने सभी नियम और शर्तें ध्यानपूर्वक पढ़ी हैं।
                                {"\n"}• मैं इन शर्तों से सहमत हूँ और इन्हें मानने के लिए बाध्य हूँ।
                                {"\n"}• मैं समझता/समझती हूँ कि Shaadivasi.in और इसके संस्थापक केवल एक परिचयात्मक डिजिटल प्लेटफ़ॉर्म उपलब्ध कराते हैं और किसी भी वैवाहिक विवाद, धोखाधड़ी, या विफलता के लिए व्यक्तिगत रूप से जिम्मेदार नहीं हैं।
                                {"\n"}• मैं यह भी स्वीकार करता/करती हूँ कि मेरी दी गई सभी जानकारी सत्य और सही है।
                            </Text>

                            <Text style={styles.termsParagraph}>
                                उपयोगकर्ता स्वीकृति
                                {"\n"}मैं Shaadivasi.in की नियम एवं शर्तों से सहमत हूँ।
                                {"\n"}(कृपया साइन-अप करते समय बॉक्स पर टिक करके इन नियम एवं शर्तों को स्वीकार करें)
                            </Text>
                            {/* END OF HINDI TEXT REPLACEMENT */}

                        </ScrollView>
                        
                        <TouchableOpacity 
                            style={styles.agreeButton}
                            onPress={() => setShowTerms(false)}
                        >
                            <Text style={styles.agreeButtonText}>I Understand</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        position: 'absolute',
        top: 25,
        left: 0,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    contentContainer: {
        flex: 1,
        padding: 25,
    },
    header: {
        marginTop: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        paddingBottom: 20
    },
    spacer: {
        flex: 1,
    },
    bottomContainer: {
        marginBottom: 20,
    },
    termsLinkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        flexWrap: 'wrap',
    },
    termsText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
    },
    termsLink: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: 14,
        fontWeight: '600',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 18,
        borderRadius: 10,
        marginBottom: 15,
        gap: 12,
    },
    socialButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    dividerText: {
        color: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 10,
        fontSize: 14,
    },
    loginPrompt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        alignItems: 'center'
    },
    loginText: {
        color: 'rgba(255,255,255,0.8)',
    },
    loginLink: {
        color: '#fff',
        fontWeight: '600',
        textDecorationLine: 'underline',
        fontSize: 16
    },
    trustContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        gap: 8,
    },
    trustText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 14,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: 20,
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '100%',
        maxHeight: '80%',
        overflow: 'hidden',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        padding: 5,
    },
    termsContent: {
        padding: 15,
    },
    termsHeading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    termsSubHeading: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
    },
    termsParagraph: {
        fontSize: 12,
        marginBottom: 10,
        lineHeight: 18,
    },
    agreeButton: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        alignItems: 'center',
    },
    agreeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});