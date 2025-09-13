// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated, ActivityIndicator } from 'react-native';
// // import { useRouter } from 'expo-router';
// // import { useLanguage } from '../context/LanguageContext';
// // import { AntDesign } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';
// // import { useState } from 'react';

// // export default function Info12() {
// //   const router = useRouter();
// //   const { language, toggleLanguage } = useLanguage();
// //   const [feedback, setFeedback] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   const handleContinue = () => {
// //     setLoading(true);
// //     // Simulate processing delay
// //     setTimeout(() => {
// //       router.replace('/(tabs)');
// //       setLoading(false);
// //     }, 1000);
// //   };

// //   // Translations
// //   const translations = {
// //     title: {
// //       ENG: "Almost There!",
// //       HI: "लगभग हो गया!"
// //     },
// //     subtitle: {
// //       ENG: "Share your feedback to help us improve",
// //       HI: "हमें बेहतर बनाने में मदद करने के लिए अपनी प्रतिक्रिया साझा करें"
// //     },
// //     inputPlaceholder: {
// //       ENG: "Your feedback (optional)",
// //       HI: "आपकी प्रतिक्रिया (वैकल्पिक)"
// //     },
// //     continueButton: {
// //       ENG: "Continue to App",
// //       HI: "ऐप पर जारी रखें"
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <LinearGradient
// //         colors={['#6C63FF', '#FF6B6B']}
// //         style={styles.background}
// //       />

// //       {/* Header with language toggle */}
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
// //           <Text style={styles.languageText}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
// //         </TouchableOpacity>
// //       </View>

// //       <View style={styles.content}>
// //         <Image
// //           source={require('../../assets/images/Girl2.png')}
// //           style={styles.image}
// //         />

// //         <Text style={styles.title}>{translations.title[language]}</Text>
// //         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

// //         <TextInput
// //           style={styles.input}
// //           placeholder={translations.inputPlaceholder[language]}
// //           placeholderTextColor="#999"
// //           value={feedback}
// //           onChangeText={setFeedback}
// //           multiline
// //           numberOfLines={4}
// //         />

// //         <TouchableOpacity
// //           style={styles.continueButton}
// //           onPress={handleContinue}
// //           disabled={loading}
// //         >
// //           {loading ? (
// //             <ActivityIndicator color="white" />
// //           ) : (
// //             <Text style={styles.continueButtonText}>
// //               {translations.continueButton[language]}
// //             </Text>
// //           )}
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
// //   image: {
// //     width: 150,
// //     height: 150,
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
// //   input: {
// //     backgroundColor: 'white',
// //     borderRadius: 10,
// //     padding: 15,
// //     minHeight: 100,
// //     textAlignVertical: 'top',
// //     marginBottom: 30,
// //     fontSize: 16,
// //   },
// //   continueButton: {
// //     backgroundColor: 'white',
// //     padding: 16,
// //     borderRadius: 10,
// //     alignItems: 'center',
// //   },
// //   continueButtonText: {
// //     color: '#6C63FF',
// //     fontWeight: 'bold',
// //     fontSize: 18,
// //   },
// // });


// // //app/homescreens/info12.jsx
// // import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
// // import { useRouter } from "expo-router";
// // import { useUser } from "@clerk/clerk-expo";
// // import { useState } from "react";
// // import { useLanguage } from "../context/LanguageContext";

// // export default function Info12() {
// //   const router = useRouter();
// //   const { user } = useUser();
// //   const { language } = useLanguage();
// //   const [loading, setLoading] = useState(false);

// //   const completeProfile = async () => {
// //     setLoading(true);
// //     try {
// //       await user.update({
// //         publicMetadata: {
// //           profileCompleted: true,
// //         },
// //       });
// //       router.replace("/(tabs)");
// //     } catch (err) {
// //       console.error("Error updating profile:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //       {loading ? (
// //         <ActivityIndicator size="large" />
// //       ) : (
// //         <TouchableOpacity onPress={completeProfile}>
// //           <Text>Complete Profile</Text>
// //         </TouchableOpacity>
// //       )}
// //     </View>
// //   );
// // }



// // app/homescreens/info12.jsx

// // app/homescreens/info12.jsx

// import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState } from "react";
// import { useLanguage } from "../context/LanguageContext";

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language } = useLanguage();
//   const [loading, setLoading] = useState(false);

//   const completeProfile = async () => {
//     setLoading(true);
//     try {
//       // Correct way to update publicMetadata with Clerk
//       await user.update({
//         unsafeMetadata: {
//           profileCompleted: true
//         }
//       });
      
//       // Alternative if you want to use publicMetadata (needs to be enabled in Clerk dashboard)
//       // await user.update({
//       //   publicMetadata: {
//       //     profileCompleted: true
//       //   }
//       // });
      
//       router.replace("/(tabs)");
//     } catch (err) {
//       console.error("Error updating profile:", err);
//       // Even if metadata update fails, still redirect
//       router.replace("/(tabs)");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#6C63FF" />
//           <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//         </View>
//       ) : (
//         <TouchableOpacity style={styles.button} onPress={completeProfile}>
//           <Text style={styles.buttonText}>{translations.completeProfile[language]}</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#6C63FF',
//     paddingHorizontal: 32,
//     paddingVertical: 16,
//     borderRadius: 8,
//     elevation: 3,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     gap: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#6C63FF',
//   },
// });













// app/homescreens/info12.jsx
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   Alert
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useFirestore } from "../hooks/useFirebase";
// import { MaterialIcons, Feather } from '@expo/vector-icons';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language } = useLanguage();
//   const { saveUserProfile } = useFirestore();
//   const [loading, setLoading] = useState(false);
//   const [aboutMe, setAboutMe] = useState("");
//   const [charCount, setCharCount] = useState(0);
//   const minChars = 50;

//   useEffect(() => {
//     setCharCount(aboutMe.length);
//   }, [aboutMe]);

//   const handleHelpPress = () => {
//     Alert.alert(
//       "Help with About Me",
//       "Share interesting details about yourself:\n\n- Your hobbies and interests\n- Education background\n- Career aspirations\n- Personality traits\n- Family background\n- Anything special about you",
//       [{ text: "OK" }]
//     );
//   };

//   const completeProfile = async () => {
//     if (charCount < minChars) {
//       Alert.alert(
//         "More Details Needed",
//         `Please write at least ${minChars} characters about yourself`,
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       // Update Clerk metadata
//       await user.update({
//         unsafeMetadata: {
//           profileCompleted: true
//         }
//       });

//       // Save to Firestore
//       await saveUserProfile({
//         aboutMe,
//         profileProgress: 100, // Mark profile as 100% complete
//         updatedAt: serverTimestamp()
//       });

//       router.replace("/(tabs)");
//     } catch (err) {
//       console.error("Error completing profile:", err);
//       Alert.alert(
//         "Error",
//         "Could not complete profile. Please try again.",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     title: {
//       ENG: "A few words about myself",
//       HI: "अपने बारे में कुछ शब्द"
//     },
//     placeholder: {
//       ENG: "Tell us about yourself (minimum 50 characters)...",
//       HI: "अपने बारे में बताएं (कम से कम 50 अक्षर)..."
//     },
//     help: {
//       ENG: "Help me write this",
//       HI: "मुझे लिखने में मदद करें"
//     },
//     characters: {
//       ENG: "characters",
//       HI: "अक्षर"
//     },
//     submit: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     }
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       <View style={styles.content}>
//         <View style={styles.header}>
//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <TouchableOpacity
//             style={styles.helpButton}
//             onPress={handleHelpPress}
//           >
//             <Text style={styles.helpText}>{translations.help[language]}</Text>
//             <Feather name="help-circle" size={20} color="#6C63FF" />
//           </TouchableOpacity>
//         </View>

//         <TextInput
//           style={[
//             styles.input,
//             charCount > 0 && charCount < minChars && styles.inputWarning
//           ]}
//           multiline
//           numberOfLines={6}
//           placeholder={translations.placeholder[language]}
//           placeholderTextColor="#999"
//           value={aboutMe}
//           onChangeText={setAboutMe}
//           textAlignVertical="top"
//         />

//         <View style={styles.counterContainer}>
//           <Text style={[
//             styles.counterText,
//             charCount < minChars && styles.counterWarning
//           ]}>
//             {charCount}/{minChars} {translations.characters[language]}
//           </Text>
//           {charCount < minChars && (
//             <Text style={styles.warningText}>
//               {minChars - charCount} more required
//             </Text>
//           )}
//         </View>

//         {loading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#6C63FF" />
//             <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={[
//               styles.button,
//               charCount < minChars && styles.buttonDisabled
//             ]}
//             onPress={completeProfile}
//             disabled={charCount < minChars}
//           >
//             <Text style={styles.buttonText}>{translations.submit[language]}</Text>
//             <MaterialIcons name="arrow-forward" size={24} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 600,
//     width: '100%',
//     alignSelf: 'center',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   helpButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 4,
//   },
//   helpText: {
//     color: '#6C63FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   input: {
//     minHeight: 150,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 12,
//     padding: 16,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//     marginBottom: 8,
//     textAlign: 'left',
//   },
//   inputWarning: {
//     borderColor: '#FF6B6B',
//     backgroundColor: '#FFF9F9',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   counterWarning: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   warningText: {
//     fontSize: 14,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   button: {
//     backgroundColor: '#6C63FF',
//     padding: 16,
//     borderRadius: 12,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 8,
//     elevation: 3,
//   },
//   buttonDisabled: {
//     backgroundColor: '#ADB5BD',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     gap: 16,
//     padding: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#6C63FF',
//   },
// });









// app/homescreens/info12.jsx
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   Alert,
//   Animated
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect, useRef } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useFirestore } from "../hooks/useFirebase";
// import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language, toggleLanguage } = useLanguage();
//   const { saveUserProfile } = useFirestore();
//   const [loading, setLoading] = useState(false);
//   const [aboutMe, setAboutMe] = useState("");
//   const [charCount, setCharCount] = useState(0);
//   const minChars = 50;
//   const toggleAnim = useRef(new Animated.Value(language === 'ENG' ? 0 : 1)).current;

//   useEffect(() => {
//     setCharCount(aboutMe.length);
//   }, [aboutMe]);

//   useEffect(() => {
//     Animated.timing(toggleAnim, {
//       toValue: language === 'ENG' ? 0 : 1,
//       duration: 300,
//       useNativeDriver: true
//     }).start();
//   }, [language]);

//   const handleHelpPress = () => {
//     Alert.alert(
//       language === 'ENG' ? "Help with About Me" : "अपने बारे में मदद",
//       language === 'ENG'
//         ? "Share interesting details about yourself:\n\n- Your hobbies and interests\n- Education background\n- Career aspirations\n- Personality traits\n- Family background\n- Anything special about you"
//         : "अपने बारे में रोचक विवरण साझा करें:\n\n- आपकी रुचियाँ और शौक\n- शैक्षिक पृष्ठभूमि\n- करियर की आकांक्षाएँ\n- व्यक्तित्व विशेषताएँ\n- पारिवारिक पृष्ठभूमि\n- आपके बारे में कुछ विशेष",
//       [{ text: "OK" }]
//     );
//   };

//   const completeProfile = async () => {
//     if (charCount < minChars) {
//       Alert.alert(
//         language === 'ENG' ? "More Details Needed" : "अधिक विवरण आवश्यक",
//         language === 'ENG'
//           ? `Please write at least ${minChars} characters about yourself`
//           : `कृपया अपने बारे में कम से कम ${minChars} अक्षर लिखें`,
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       await user.update({
//         unsafeMetadata: {
//           profileCompleted: true
//         }
//       });

//       await saveUserProfile({
//         aboutMe,
//         profileProgress: 100,
//         updatedAt: serverTimestamp()
//       });

//       router.replace("/(tabs)");
//     } catch (err) {
//       console.error("Error completing profile:", err);
//       Alert.alert(
//         language === 'ENG' ? "Error" : "त्रुटि",
//         language === 'ENG'
//           ? "Could not complete profile. Please try again."
//           : "प्रोफ़ाइल पूरी नहीं की जा सकी। कृपया पुनः प्रयास करें।",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     title: {
//       ENG: "A few words about myself",
//       HI: "अपने बारे में कुछ शब्द"
//     },
//     placeholder: {
//       ENG: "Tell us about yourself (minimum 50 characters)...",
//       HI: "अपने बारे में बताएं (कम से कम 50 अक्षर)..."
//     },
//     help: {
//       ENG: "Need help writing about yourself?",
//       HI: "अपने बारे में लिखने में मदद चाहिए?"
//     },
//     characters: {
//       ENG: `${charCount}/${minChars} characters`,
//       HI: `${charCount}/${minChars} अक्षर`
//     },
//     submit: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     }
//   };

//   const translateX = toggleAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [0, 32]
//   });

//   const bgColor = toggleAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#6C63FF', '#FF6B6B']
//   });

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       {/* Language Toggle Switch */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <Animated.View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX }],
//               backgroundColor: bgColor
//             }
//           ]}>
//             <Ionicons
//               name={language === 'ENG' ? 'language' : 'language-outline'}
//               size={16}
//               color="#fff"
//             />
//           </Animated.View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <Text style={styles.title}>{translations.title[language]}</Text>

//         <TextInput
//           style={[
//             styles.input,
//             charCount > 0 && charCount < minChars && styles.inputWarning
//           ]}
//           multiline
//           numberOfLines={6}
//           placeholder={translations.placeholder[language]}
//           placeholderTextColor="#999"
//           value={aboutMe}
//           onChangeText={setAboutMe}
//           textAlignVertical="top"
//         />

//         <View style={styles.helpContainer}>
//           <TouchableOpacity
//             style={styles.helpButton}
//             onPress={handleHelpPress}
//           >
//             <Feather name="help-circle" size={18} color="#6C63FF" />
//             <Text style={styles.helpText}>{translations.help[language]}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.counterContainer}>
//           <Text style={[
//             styles.counterText,
//             charCount < minChars && styles.counterWarning
//           ]}>
//             {translations.characters[language]}
//           </Text>
//           {charCount < minChars && (
//             <View style={styles.warningBadge}>
//               <Text style={styles.warningText}>
//                 {minChars - charCount} {language === 'ENG' ? 'more needed' : 'और आवश्यक'}
//               </Text>
//             </View>
//           )}
//         </View>

//         {loading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#6C63FF" />
//             <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={[
//               styles.button,
//               charCount < minChars && styles.buttonDisabled
//             ]}
//             onPress={completeProfile}
//             disabled={charCount < minChars}
//           >
//             <Text style={styles.buttonText}>{translations.submit[language]}</Text>
//             <Ionicons name="arrow-forward" size={22} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginBottom: 20,
//     alignSelf: 'flex-end',
//   },
//   languageLabel: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#495057',
//     marginHorizontal: 8,
//   },
//   toggleContainer: {
//     width: 64,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 600,
//     width: '100%',
//     alignSelf: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   input: {
//     minHeight: 180,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 16,
//     padding: 20,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//     textAlign: 'left',
//     lineHeight: 24,
//   },
//   inputWarning: {
//     borderColor: '#FF6B6B',
//     backgroundColor: '#FFF9F9',
//   },
//   helpContainer: {
//     marginTop: 12,
//     marginBottom: 8,
//   },
//   helpButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   helpText: {
//     color: '#6C63FF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   counterWarning: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   warningBadge: {
//     backgroundColor: '#FFEBEE',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   warningText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   button: {
//     backgroundColor: '#6C63FF',
//     padding: 18,
//     borderRadius: 16,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   buttonDisabled: {
//     backgroundColor: '#E0E0E0',
//     shadowColor: '#BDBDBD',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     gap: 16,
//     padding: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#6C63FF',
//   },
// });









// // info12.jsx

// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   Alert,
//   Image
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect, useRef } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useProfile } from "../context/ProfileContext";
// import { useFirestore } from "../hooks/useFirebase";
// import { Feather, Ionicons } from '@expo/vector-icons';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [loading, setLoading] = useState(false);
//   const [aboutMe, setAboutMe] = useState(userData?.aboutMe || "");
//   const [charCount, setCharCount] = useState(0);
//   const [showWarning, setShowWarning] = useState(false);
//   const minChars = 50;
//   const inputRef = useRef(null);

//   // Initialize with existing data if available
//   useEffect(() => {
//     if (userData?.aboutMe) {
//       setAboutMe(userData.aboutMe);
//       setCharCount(userData.aboutMe.length);
//     }
//   }, [userData]);

//   // Character count and warning logic
//   useEffect(() => {
//     setCharCount(aboutMe.length);
//     const timer = setTimeout(() => {
//       setShowWarning(aboutMe.length > 0 && aboutMe.length < minChars);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [aboutMe]);

//   const handleHelpPress = () => {
//     Alert.alert(
//       language === 'ENG' ? "Help with About Me" : "अपने बारे में मदद",
//       language === 'ENG'
//         ? "Share interesting details about yourself:\n\n- Your hobbies and interests\n- Education background\n- Career aspirations\n- Personality traits\n- Family background\n- Anything special about you"
//         : "अपने बारे में रोचक विवरण साझा करें:\n\n- आपकी रुचियाँ और शौक\n- शैक्षिक पृष्ठभूमि\n- करियर की आकांक्षाएँ\n- व्यक्तित्व विशेषताएँ\n- पारिवारिक पृष्ठभूमि\n- आपके बारे में कुछ विशेष",
//       [{ text: "OK" }]
//     );
//   };

//   const completeProfile = async () => {
//     if (charCount < minChars) {
//       Alert.alert(
//         language === 'ENG' ? "More Details Needed" : "अधिक विवरण आवश्यक",
//         language === 'ENG'
//           ? `Please write at least ${minChars} characters about yourself`
//           : `कृपया अपने बारे में कम से कम ${minChars} अक्षर लिखें`,
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       // Update Clerk metadata
//       await user.update({
//         unsafeMetadata: {
//           profileCompleted: true
//         }
//       });

//       // Save to Firestore
//       const profileData = {
//         ...userData,
//         aboutMe,
//         profileFor,
//         gender,
//         profileProgress: 100,
//         updatedAt: serverTimestamp()
//       };

//       await saveUserProfile(profileData);

//       // Redirect to home
//       router.replace("/(tabs)");
//     } catch (err) {
//       console.error("Error completing profile:", err);
//       Alert.alert(
//         language === 'ENG' ? "Error" : "त्रुटि",
//         language === 'ENG'
//           ? "Could not complete profile. Please try again."
//           : "प्रोफ़ाइल पूरी नहीं की जा सकी। कृपया पुनः प्रयास करें।",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     title: {
//       ENG: `Tell us about ${getPrefix().toLowerCase()}self`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में बताएं" :
//           `${getPrefix()} के बारे में बताएं`
//     },
//     placeholder: {
//       ENG: `Describe ${getPrefix().toLowerCase()}self (minimum 50 characters)...`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
//           `${getPrefix()} के बारे में वर्णन करें (कम से कम 50 अक्षर)...`
//     },
//     help: {
//       ENG: "Need help writing about yourself?",
//       HI: getPrefix() === 'Your' ? "अपने बारे में लिखने में मदद चाहिए?" :
//           `${getPrefix()} के बारे में लिखने में मदद चाहिए?`
//     },
//     characters: {
//       ENG: `${charCount}/${minChars} characters`,
//       HI: `${charCount}/${minChars} अक्षर`
//     },
//     submit: {
//       ENG: "Submit Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     },
//     moreNeeded: {
//       ENG: "more needed",
//       HI: "और आवश्यक"
//     }
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.iconContainer}>
//           <Feather name="edit-3" size={40} color="white" />
//         </View>

//         <Text style={styles.title}>{translations.title[language]}</Text>

//         <TextInput
//           ref={inputRef}
//           style={[
//             styles.input,
//             showWarning && styles.inputWarning
//           ]}
//           multiline
//           numberOfLines={6}
//           placeholder={translations.placeholder[language]}
//           placeholderTextColor="#999"
//           value={aboutMe}
//           onChangeText={setAboutMe}
//           textAlignVertical="top"
//           autoFocus={true}
//         />

//         <View style={styles.helpContainer}>
//           <TouchableOpacity
//             style={styles.helpButton}
//             onPress={handleHelpPress}
//           >
//             <Feather name="help-circle" size={20} color="#6C63FF" />
//             <Text style={styles.helpText}>{translations.help[language]}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.counterContainer}>
//           <Text style={[
//             styles.counterText,
//             showWarning && styles.counterWarning
//           ]}>
//             {translations.characters[language]}
//           </Text>
//           {showWarning && (
//             <View style={styles.warningBadge}>
//               <Text style={styles.warningText}>
//                 {minChars - charCount} {translations.moreNeeded[language]}
//               </Text>
//             </View>
//           )}
//         </View>

//         {loading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#e59bf2" />
//             <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={[
//               styles.button,
//               charCount < minChars && styles.buttonDisabled
//             ]}
//             onPress={completeProfile}
//             disabled={charCount < minChars || loading}
//           >
//             <Text style={styles.buttonText}>{translations.submit[language]}</Text>
//             <Ionicons name="arrow-forward" size={22} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 600,
//     width: '100%',
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#a4ed51',
//     borderRadius: 50,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 24,
//     color: '#333',
//     lineHeight: 32,
//   },
//   input: {
//     minHeight: 200,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 16,
//     padding: 20,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//     textAlign: 'left',
//     lineHeight: 24,
//     textAlignVertical: 'top',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   inputWarning: {
//     borderColor: '#FF6B6B',
//     backgroundColor: '#FFF9F9',
//   },
//   helpContainer: {
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   helpButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     alignSelf: 'flex-start',
//     padding: 8,
//     paddingLeft: 0,
//   },
//   helpText: {
//     color: '#6C63FF',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//     marginTop: 8,
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   counterWarning: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   warningBadge: {
//     backgroundColor: '#FFEBEE',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 12,
//   },
//   warningText: {
//     fontSize: 13,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   button: {
//     backgroundColor: '#a4ed51',
//     padding: 18,
//     borderRadius: 30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonDisabled: {
//     backgroundColor: '#E0E0E0',
//     shadowColor: '#BDBDBD',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     gap: 16,
//     padding: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#e59bf2',
//     fontWeight: '500',
//   },
// });














// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   Alert,
//   Image
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect, useRef } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useProfile } from "../context/ProfileContext";
// import { useFirestore } from "../hooks/useFirebase";
// import { Feather, Ionicons } from '@expo/vector-icons';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [loading, setLoading] = useState(false);
//   const [aboutMe, setAboutMe] = useState(userData?.aboutMe || "");
//   const [charCount, setCharCount] = useState(0);
//   const [showWarning, setShowWarning] = useState(false);
//   const minChars = 50;
//   const inputRef = useRef(null);

//   // Initialize with existing data if available
//   useEffect(() => {
//     if (userData?.aboutMe) {
//       setAboutMe(userData.aboutMe);
//       setCharCount(userData.aboutMe.length);
//     }
//   }, [userData]);

//   // Character count and warning logic
//   useEffect(() => {
//     setCharCount(aboutMe.length);
//     const timer = setTimeout(() => {
//       setShowWarning(aboutMe.length > 0 && aboutMe.length < minChars);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [aboutMe]);

//   const handleHelpPress = () => {
//     Alert.alert(
//       language === 'ENG' ? "Help with About Me" : "अपने बारे में मदद",
//       language === 'ENG'
//         ? "Share interesting details about yourself:\n\n- Your hobbies and interests\n- Education background\n- Career aspirations\n- Personality traits\n- Family background\n- Anything special about you"
//         : "अपने बारे में रोचक विवरण साझा करें:\n\n- आपकी रुचियाँ और शौक\n- शैक्षिक पृष्ठभूमि\n- करियर की आकांक्षाएँ\n- व्यक्तित्व विशेषताएँ\n- पारिवारिक पृष्ठभूमि\n- आपके बारे में कुछ विशेष",
//       [{ text: "OK" }]
//     );
//   };

//   const completeProfile = async () => {
//     if (charCount < minChars) {
//       Alert.alert(
//         language === 'ENG' ? "More Details Needed" : "अधिक विवरण आवश्यक",
//         language === 'ENG'
//           ? `Please write at least ${minChars} characters about yourself`
//           : `कृपया अपने बारे में कम से कम ${minChars} अक्षर लिखें`,
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     if (!user || !gender) {
//       Alert.alert(
//         language === 'ENG' ? "Error" : "त्रुटि",
//         language === 'ENG'
//           ? "User information is incomplete. Please complete previous steps."
//           : "उपयोगकर्ता जानकारी अधूरी है। कृपया पिछले चरण पूरे करें।",
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       // Update Clerk metadata
//       await user.update({
//         unsafeMetadata: {
//           profileCompleted: true
//         }
//       });

//       // Prepare complete profile data with all required fields
//       const profileData = {
//         ...userData,
//         aboutMe,
//         profileFor: profileFor || 'MySelf',
//         gender,
//         email: user.primaryEmailAddress.emailAddress,
//         clerkId: user.id,
//         profileProgress: 100,
//         createdAt: userData?.createdAt || serverTimestamp(),
//         updatedAt: serverTimestamp()
//       };

//       await saveUserProfile(profileData);

//       // Redirect to home
//       router.replace("/(tabs)");
//     } catch (err) {
//       console.error("Error completing profile:", err);
//       Alert.alert(
//         language === 'ENG' ? "Error" : "त्रुटि",
//         language === 'ENG'
//           ? "Could not complete profile. Please try again."
//           : "प्रोफ़ाइल पूरी नहीं की जा सकी। कृपया पुनः प्रयास करें।",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     title: {
//       ENG: `Tell us about ${getPrefix().toLowerCase()}self`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में बताएं" :
//           `${getPrefix()} के बारे में बताएं`
//     },
//     placeholder: {
//       ENG: `Describe ${getPrefix().toLowerCase()}self (minimum 50 characters)...`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
//           `${getPrefix()} के बारे में वर्णन करें (कम से कम 50 अक्षर)...`
//     },
//     help: {
//       ENG: "Need help writing about yourself?",
//       HI: getPrefix() === 'Your' ? "अपने बारे में लिखने में मदद चाहिए?" :
//           `${getPrefix()} के बारे में लिखने में मदद चाहिए?`
//     },
//     characters: {
//       ENG: `${charCount}/${minChars} characters`,
//       HI: `${charCount}/${minChars} अक्षर`
//     },
//     submit: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     },
//     moreNeeded: {
//       ENG: "more needed",
//       HI: "और आवश्यक"
//     }
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.iconContainer}>
//           <Feather name="edit-3" size={40} color="white" />
//         </View>

//         <Text style={styles.title}>{translations.title[language]}</Text>

//         <TextInput
//           ref={inputRef}
//           style={[
//             styles.input,
//             showWarning && styles.inputWarning
//           ]}
//           multiline
//           numberOfLines={6}
//           placeholder={translations.placeholder[language]}
//           placeholderTextColor="#999"
//           value={aboutMe}
//           onChangeText={setAboutMe}
//           textAlignVertical="top"
//           autoFocus={true}
//         />

//         <View style={styles.helpContainer}>
//           <TouchableOpacity
//             style={styles.helpButton}
//             onPress={handleHelpPress}
//           >
//             <Feather name="help-circle" size={20} color="#6C63FF" />
//             <Text style={styles.helpText}>{translations.help[language]}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.counterContainer}>
//           <Text style={[
//             styles.counterText,
//             showWarning && styles.counterWarning
//           ]}>
//             {translations.characters[language]}
//           </Text>
//           {showWarning && (
//             <View style={styles.warningBadge}>
//               <Text style={styles.warningText}>
//                 {minChars - charCount} {translations.moreNeeded[language]}
//               </Text>
//             </View>
//           )}
//         </View>

//         {loading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#a4ed51" />
//             <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={[
//               styles.button,
//               (charCount < minChars || !gender) && styles.buttonDisabled
//             ]}
//             onPress={completeProfile}
//             disabled={charCount < minChars || !gender || loading}
//           >
//             <Text style={styles.buttonText}>{translations.submit[language]}</Text>
//             <Ionicons name="arrow-forward" size={22} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 600,
//     width: '100%',
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#a4ed51',
//     borderRadius: 50,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 24,
//     color: '#333',
//     lineHeight: 32,
//   },
//   input: {
//     minHeight: 200,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 16,
//     padding: 20,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//     textAlign: 'left',
//     lineHeight: 24,
//     textAlignVertical: 'top',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   inputWarning: {
//     borderColor: '#FF6B6B',
//     backgroundColor: '#FFF9F9',
//   },
//   helpContainer: {
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   helpButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     alignSelf: 'flex-start',
//     padding: 8,
//     paddingLeft: 0,
//   },
//   helpText: {
//     color: '#6C63FF',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//     marginTop: 8,
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   counterWarning: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   warningBadge: {
//     backgroundColor: '#FFEBEE',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 12,
//   },
//   warningText: {
//     fontSize: 13,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   button: {
//     backgroundColor: '#a4ed51',
//     padding: 18,
//     borderRadius: 30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonDisabled: {
//     backgroundColor: '#E0E0E0',
//     shadowColor: '#BDBDBD',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     gap: 16,
//     padding: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#a4ed51',
//     fontWeight: '500',
//   },
// });






// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   Alert,
//   Image
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect, useRef } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useProfile } from "../context/ProfileContext";
// import { useFirestore } from "../hooks/useFirebase";
// import { Feather, Ionicons } from '@expo/vector-icons';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [loading, setLoading] = useState(false);
//   const [aboutMe, setAboutMe] = useState(userData?.aboutMe || "");
//   const [charCount, setCharCount] = useState(0);
//   const [showWarning, setShowWarning] = useState(false);
//   const minChars = 50;
//   const inputRef = useRef(null);

//   // Initialize with existing data if available
//   useEffect(() => {
//     if (userData?.aboutMe) {
//       setAboutMe(userData.aboutMe);
//       setCharCount(userData.aboutMe.length);
//     }
//   }, [userData]);

//   // Character count and warning logic
//   useEffect(() => {
//     setCharCount(aboutMe.length);
//     const timer = setTimeout(() => {
//       setShowWarning(aboutMe.length > 0 && aboutMe.length < minChars);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [aboutMe]);

//   const handleHelpPress = () => {
//     Alert.alert(
//       language === 'ENG' ? "Help with About Me" : "अपने बारे में मदद",
//       language === 'ENG'
//         ? "Share interesting details about yourself..."
//         : "अपने बारे में रोचक विवरण साझा करें...",
//       [{ text: "OK" }]
//     );
//   };

//   const completeProfile = async () => {
//     if (charCount < minChars) {
//       Alert.alert(
//         language === 'ENG' ? "More Details Needed" : "अधिक विवरण आवश्यक",
//         language === 'ENG'
//           ? `Please write at least ${minChars} characters about yourself`
//           : `कृपया अपने बारे में कम से कम ${minChars} अक्षर लिखें`,
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       // Update Clerk metadata
//       await user.update({
//         unsafeMetadata: {
//           profileCompleted: true
//         }
//       });

//       // Prepare complete profile data
//       const profileData = {
//         ...userData,
//         aboutMe,
//         profileFor: profileFor || 'MySelf',
//         gender,
//         email: user.primaryEmailAddress.emailAddress,
//         clerkId: user.id,
//         profileProgress: 100,
//         createdAt: userData?.createdAt || serverTimestamp(),
//         updatedAt: serverTimestamp()
//       };

//       await saveUserProfile(profileData);

//       // Navigate directly to tabs screen
//       router.replace("/(tabs)");

//     } catch (err) {
//       console.error("Error completing profile:", err);
//       Alert.alert(
//         language === 'ENG' ? "Error" : "त्रुटि",
//         language === 'ENG'
//           ? "Could not complete profile. Please try again."
//           : "प्रोफ़ाइल पूरी नहीं की जा सकी। कृपया पुनः प्रयास करें।",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     title: {
//       ENG: `Tell us about ${getPrefix().toLowerCase()}self`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में बताएं" :
//           `${getPrefix()} के बारे में बताएं`
//     },
//     placeholder: {
//       ENG: `Describe ${getPrefix().toLowerCase()}self (minimum 50 characters)...`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
//           `${getPrefix()} के बारे में वर्णन करें (कम से कम 50 अक्षर)...`
//     },
//     help: {
//       ENG: "Need help writing about yourself?",
//       HI: getPrefix() === 'Your' ? "अपने बारे में लिखने में मदद चाहिए?" :
//           `${getPrefix()} के बारे में लिखने में मदद चाहिए?`
//     },
//     characters: {
//       ENG: `${charCount}/${minChars} characters`,
//       HI: `${charCount}/${minChars} अक्षर`
//     },
//     submit: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     },
//     moreNeeded: {
//       ENG: "more needed",
//       HI: "और आवश्यक"
//     }
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.iconContainer}>
//           <Feather name="edit-3" size={40} color="white" />
//         </View>

//         <Text style={styles.title}>{translations.title[language]}</Text>

//         <TextInput
//           ref={inputRef}
//           style={[
//             styles.input,
//             showWarning && styles.inputWarning
//           ]}
//           multiline
//           numberOfLines={6}
//           placeholder={translations.placeholder[language]}
//           placeholderTextColor="#999"
//           value={aboutMe}
//           onChangeText={setAboutMe}
//           textAlignVertical="top"
//           autoFocus={true}
//         />

//         <View style={styles.helpContainer}>
//           <TouchableOpacity
//             style={styles.helpButton}
//             onPress={handleHelpPress}
//           >
//             <Feather name="help-circle" size={20} color="#6C63FF" />
//             <Text style={styles.helpText}>{translations.help[language]}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.counterContainer}>
//           <Text style={[
//             styles.counterText,
//             showWarning && styles.counterWarning
//           ]}>
//             {translations.characters[language]}
//           </Text>
//           {showWarning && (
//             <View style={styles.warningBadge}>
//               <Text style={styles.warningText}>
//                 {minChars - charCount} {translations.moreNeeded[language]}
//               </Text>
//             </View>
//           )}
//         </View>

//         {loading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#a4ed51" />
//             <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={[
//               styles.button,
//               (charCount < minChars) && styles.buttonDisabled
//             ]}
//             onPress={completeProfile}
//             disabled={charCount < minChars || loading}
//           >
//             <Text style={styles.buttonText}>{translations.submit[language]}</Text>
//             <Ionicons name="arrow-forward" size={22} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 600,
//     width: '100%',
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#a4ed51',
//     borderRadius: 50,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 24,
//     color: '#333',
//     lineHeight: 32,
//   },
//   input: {
//     minHeight: 200,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 16,
//     padding: 20,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//     textAlign: 'left',
//     lineHeight: 24,
//     textAlignVertical: 'top',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   inputWarning: {
//     borderColor: '#FF6B6B',
//     backgroundColor: '#FFF9F9',
//   },
//   helpContainer: {
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   helpButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     alignSelf: 'flex-start',
//     padding: 8,
//     paddingLeft: 0,
//   },
//   helpText: {
//     color: '#6C63FF',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//     marginTop: 8,
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   counterWarning: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   warningBadge: {
//     backgroundColor: '#FFEBEE',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 12,
//   },
//   warningText: {
//     fontSize: 13,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   button: {
//     backgroundColor: '#a4ed51',
//     padding: 18,
//     borderRadius: 30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonDisabled: {
//     backgroundColor: '#E0E0E0',
//     shadowColor: '#BDBDBD',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     gap: 16,
//     padding: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#a4ed51',
//     fontWeight: '500',
//   },
// });










// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   Alert,
//   Image
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect, useRef } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useProfile } from "../context/ProfileContext";
// import { useFirestore } from "../hooks/useFirebase";
// import { Feather, Ionicons } from '@expo/vector-icons';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData, updateUserProfile } = useFirestore();
//   const [loading, setLoading] = useState(false);
//   const [aboutMe, setAboutMe] = useState("");
//   const [charCount, setCharCount] = useState(0);
//   const [showWarning, setShowWarning] = useState(false);
//   const minChars = 50;
//   const inputRef = useRef(null);

//   // Initialize with existing data if available
//   useEffect(() => {
//     if (userData?.aboutMe) {
//       setAboutMe(userData.aboutMe);
//       setCharCount(userData.aboutMe.length);
//     }
//   }, [userData]);

//   // Character count and warning logic
//   useEffect(() => {
//     setCharCount(aboutMe.length);
//     const timer = setTimeout(() => {
//       setShowWarning(aboutMe.length > 0 && aboutMe.length < minChars);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [aboutMe]);

//   const handleHelpPress = () => {
//     Alert.alert(
//       language === 'ENG' ? "Help with About Me" : "अपने बारे में मदद",
//       language === 'ENG'
//         ? "Share interesting details about yourself..."
//         : "अपने बारे में रोचक विवरण साझा करें...",
//       [{ text: "OK" }]
//     );
//   };

//   const completeProfile = async () => {
//     if (charCount < minChars) {
//       Alert.alert(
//         language === 'ENG' ? "More Details Needed" : "अधिक विवरण आवश्यक",
//         language === 'ENG'
//           ? `Please write at least ${minChars} characters about yourself`
//           : `कृपया अपने बारे में कम से कम ${minChars} अक्षर लिखें`,
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       // Update Clerk metadata to mark profile as completed
//       await user.update({
//         unsafeMetadata: {
//           ...user.unsafeMetadata,
//           profileCompleted: true
//         }
//       });

//       // Only update the aboutMe field and profile completion status
//       const updateData = {
//         aboutMe,
//         profileProgress: 100,
//         updatedAt: serverTimestamp()
//       };

//       // Use updateUserProfile to only update specific fields
//       await updateUserProfile(updateData);

//       // Navigate directly to tabs screen using replace to prevent going back
//       router.replace("/(tabs)");

//     } catch (err) {
//       console.error("Error completing profile:", err);
//       Alert.alert(
//         language === 'ENG' ? "Error" : "त्रुटि",
//         language === 'ENG'
//           ? "Could not complete profile. Please try again."
//           : "प्रोफ़ाइल पूरी नहीं की जा सकी। कृपया पुनः प्रयास करें।",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     title: {
//       ENG: `Tell us about ${getPrefix().toLowerCase()}self`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में बताएं" :
//           `${getPrefix()} के बारे में बताएं`
//     },
//     placeholder: {
//       ENG: `Describe ${getPrefix().toLowerCase()}self (minimum 50 characters)...`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
//           `${getPrefix()} के बारे में वर्णन करें (कम से कम 50 अक्षर)...`
//     },
//     help: {
//       ENG: "Need help writing about yourself?",
//       HI: getPrefix() === 'Your' ? "अपने बारे में लिखने में मदद चाहिए?" :
//           `${getPrefix()} के बारे में लिखने में मदद चाहिए?`
//     },
//     characters: {
//       ENG: `${charCount}/${minChars} characters`,
//       HI: `${charCount}/${minChars} अक्षर`
//     },
//     submit: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     },
//     moreNeeded: {
//       ENG: "more needed",
//       HI: "और आवश्यक"
//     }
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.iconContainer}>
//           <Feather name="edit-3" size={40} color="white" />
//         </View>

//         <Text style={styles.title}>{translations.title[language]}</Text>

//         <TextInput
//           ref={inputRef}
//           style={[
//             styles.input,
//             showWarning && styles.inputWarning
//           ]}
//           multiline
//           numberOfLines={6}
//           placeholder={translations.placeholder[language]}
//           placeholderTextColor="#999"
//           value={aboutMe}
//           onChangeText={setAboutMe}
//           textAlignVertical="top"
//           autoFocus={true}
//         />

//         <View style={styles.helpContainer}>
//           <TouchableOpacity
//             style={styles.helpButton}
//             onPress={handleHelpPress}
//           >
//             <Feather name="help-circle" size={20} color="#6C63FF" />
//             <Text style={styles.helpText}>{translations.help[language]}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.counterContainer}>
//           <Text style={[
//             styles.counterText,
//             showWarning && styles.counterWarning
//           ]}>
//             {translations.characters[language]}
//           </Text>
//           {showWarning && (
//             <View style={styles.warningBadge}>
//               <Text style={styles.warningText}>
//                 {minChars - charCount} {translations.moreNeeded[language]}
//               </Text>
//             </View>
//           )}
//         </View>

//         {loading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#a4ed51" />
//             <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={[
//               styles.button,
//               (charCount < minChars) && styles.buttonDisabled
//             ]}
//             onPress={completeProfile}
//             disabled={charCount < minChars || loading}
//           >
//             <Text style={styles.buttonText}>{translations.submit[language]}</Text>
//             <Ionicons name="arrow-forward" size={22} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 600,
//     width: '100%',
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#a4ed51',
//     borderRadius: 50,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 24,
//     color: '#333',
//     lineHeight: 32,
//   },
//   input: {
//     minHeight: 200,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 16,
//     padding: 20,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//     textAlign: 'left',
//     lineHeight: 24,
//     textAlignVertical: 'top',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   inputWarning: {
//     borderColor: '#FF6B6B',
//     backgroundColor: '#FFF9F9',
//   },
//   helpContainer: {
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   helpButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     alignSelf: 'flex-start',
//     padding: 8,
//     paddingLeft: 0,
//   },
//   helpText: {
//     color: '#6C63FF',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//     marginTop: 8,
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   counterWarning: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   warningBadge: {
//     backgroundColor: '#FFEBEE',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 12,
//   },
//   warningText: {
//     fontSize: 13,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   button: {
//     backgroundColor: '#a4ed51',
//     padding: 18,
//     borderRadius: 30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonDisabled: {
//     backgroundColor: '#E0E0E0',
//     shadowColor: '#BDBDBD',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     alignItems: 'center',
//     gap: 16,
//     padding: 16,
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#a4ed51',
//     fontWeight: '500',
//   },
// });







//app/homescreens/info12.jsx


// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
//   ScrollView,
//   Alert,
//   Image
// } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect, useRef } from "react";
// import { useLanguage } from "../context/LanguageContext";
// import { useProfile } from "../context/ProfileContext";
// import { useFirestore } from "../hooks/useFirebase";
// import { Feather, Ionicons } from '@expo/vector-icons';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info12() {
//   const router = useRouter();
//   const { user } = useUser();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData, updateUserProfile, loading: firestoreLoading } = useFirestore();
//   const [loading, setLoading] = useState(false);
//   const [aboutMe, setAboutMe] = useState("");
//   const [charCount, setCharCount] = useState(0);
//   const [showWarning, setShowWarning] = useState(false);
//   const minChars = 50;
//   const inputRef = useRef(null);

//   // Redirect if profile is already completed
//   useEffect(() => {
//     if (userData?.profileProgress === 100) {
//       router.replace("/(tabs)");
//     }
//   }, [userData, router]);

//   // Initialize with existing data if available
//   useEffect(() => {
//     if (userData?.aboutMe) {
//       setAboutMe(userData.aboutMe);
//       setCharCount(userData.aboutMe.length);
//     }
//   }, [userData]);

//   // Character count and warning logic
//   useEffect(() => {
//     setCharCount(aboutMe.length);
//     const timer = setTimeout(() => {
//       setShowWarning(aboutMe.length > 0 && aboutMe.length < minChars);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, [aboutMe]);

//   const handleHelpPress = () => {
//     Alert.alert(
//       language === 'ENG' ? "Help with About Me" : "अपने बारे में मदद",
//       language === 'ENG'
//         ? "Share interesting details about yourself..."
//         : "अपने बारे में रोचक विवरण साझा करें...",
//       [{ text: "OK" }]
//     );
//   };

//   const completeProfile = async () => {
//     if (charCount < minChars) {
//       Alert.alert(
//         language === 'ENG' ? "More Details Needed" : "अधिक विवरण आवश्यक",
//         language === 'ENG'
//           ? `Please write at least ${minChars} characters about yourself`
//           : `कृपया अपने बारे में कम से कम ${minChars} अक्षर लिखें`,
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       // Update Clerk metadata to mark profile as completed
//       await user.update({
//         unsafeMetadata: {
//           ...user.unsafeMetadata,
//           profileCompleted: true
//         }
//       });

//       // Only update the aboutMe field and profile completion status
//       const updateData = {
//         aboutMe,
//         profileProgress: 100,
//         updatedAt: serverTimestamp()
//       };

//       // Use updateUserProfile to only update specific fields
//       await updateUserProfile(updateData);

//       // Navigate directly to tabs screen using replace to prevent going back
//       router.replace("/(tabs)");

//     } catch (err) {
//       console.error("Error completing profile:", err);
//       Alert.alert(
//         language === 'ENG' ? "Error" : "त्रुटि",
//         language === 'ENG'
//           ? "Could not complete profile. Please try again."
//           : "प्रोफ़ाइल पूरी नहीं की जा सकी। कृपया पुनः प्रयास करें।",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Show loading while checking firestore data
//   if (firestoreLoading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#a4ed51" />
//       </View>
//     );
//   }

//   // Translations
//   const translations = {
//     title: {
//       ENG: `Tell us about ${getPrefix().toLowerCase()}self`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में बताएं" :
//           `${getPrefix()} के बारे में बताएं`
//     },
//     placeholder: {
//       ENG: `Describe ${getPrefix().toLowerCase()}self (minimum 50 characters)...`,
//       HI: getPrefix() === 'Your' ? "अपने बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
//           `${getPrefix()} के बारे में वर्णन करें (कम से कम 50 अक्षर)...`
//     },
//     help: {
//       ENG: "Need help writing about yourself?",
//       HI: getPrefix() === 'Your' ? "अपने बारे में लिखने में मदद चाहिए?" :
//           `${getPrefix()} के बारे में लिखने में मदद चाहिए?`
//     },
//     characters: {
//       ENG: `${charCount}/${minChars} characters`,
//       HI: `${charCount}/${minChars} अक्षर`
//     },
//     submit: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरा करें"
//     },
//     loading: {
//       ENG: "Processing...",
//       HI: "प्रोसेसिंग..."
//     },
//     moreNeeded: {
//       ENG: "more needed",
//       HI: "और आवश्यक"
//     }
//   };

//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       keyboardShouldPersistTaps="handled"
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <View style={styles.iconContainer}>
//           <Feather name="edit-3" size={40} color="white" />
//         </View>

//         <Text style={styles.title}>{translations.title[language]}</Text>

//         <TextInput
//           ref={inputRef}
//           style={[
//             styles.input,
//             showWarning && styles.inputWarning
//           ]}
//           multiline
//           numberOfLines={6}
//           placeholder={translations.placeholder[language]}
//           placeholderTextColor="#999"
//           value={aboutMe}
//           onChangeText={setAboutMe}
//           textAlignVertical="top"
//           autoFocus={true}
//         />

//         <View style={styles.helpContainer}>
//           <TouchableOpacity
//             style={styles.helpButton}
//             onPress={handleHelpPress}
//           >
//             <Feather name="help-circle" size={20} color="#6C63FF" />
//             <Text style={styles.helpText}>{translations.help[language]}</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.counterContainer}>
//           <Text style={[
//             styles.counterText,
//             showWarning && styles.counterWarning
//           ]}>
//             {translations.characters[language]}
//           </Text>
//           {showWarning && (
//             <View style={styles.warningBadge}>
//               <Text style={styles.warningText}>
//                 {minChars - charCount} {translations.moreNeeded[language]}
//               </Text>
//             </View>
//           )}
//         </View>

//         {loading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#a4ed51" />
//             <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//           </View>
//         ) : (
//           <TouchableOpacity
//             style={[
//               styles.button,
//               (charCount < minChars) && styles.buttonDisabled
//             ]}
//             onPress={completeProfile}
//             disabled={charCount < minChars || loading}
//           >
//             <Text style={styles.buttonText}>{translations.submit[language]}</Text>
//             <Ionicons name="arrow-forward" size={22} color="white" />
//           </TouchableOpacity>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 40,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     maxWidth: 600,
//     width: '100%',
//     alignSelf: 'center',
//     marginTop: 20,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#a4ed51',
//     borderRadius: 50,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 24,
//     color: '#333',
//     lineHeight: 32,
//   },
//   input: {
//     minHeight: 200,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 16,
//     padding: 20,
//     fontSize: 16,
//     backgroundColor: '#fafafa',
//     textAlign: 'left',
//     lineHeight: 24,
//     textAlignVertical: 'top',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   inputWarning: {
//     borderColor: '#FF6B6B',
//     backgroundColor: '#FFF9F9',
//   },
//   helpContainer: {
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   helpButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     alignSelf: 'flex-start',
//     padding: 8,
//     paddingLeft: 0,
//   },
//   helpText: {
//     color: '#6C63FF',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 24,
//     marginTop: 8,
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   counterWarning: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   warningBadge: {
//     backgroundColor: '#FFEBEE',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 12,
//   },
//   warningText: {
//     fontSize: 13,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   button: {
//     backgroundColor: '#a4ed51',
//     padding: 18,
//     borderRadius: 30,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//     shadowColor: '#a4ed51',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonDisabled: {
//     backgroundColor: '#E0E0E0',
//     shadowColor: '#BDBDBD',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loadingText: {
//     fontSize: 16,
//     color: '#a4ed51',
//     fontWeight: '500',
//   },
// });












//23/08/2025

import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator, 
  ScrollView,
  Alert,
  Image
} from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import { useLanguage } from "../context/LanguageContext";
import { useProfile } from "../context/ProfileContext";
import { useFirestore } from "../hooks/useFirebase";
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { serverTimestamp } from 'firebase/firestore';
import { useProfileNavigation } from '../utils/navigationHelper';

export default function Info12() {
  const router = useRouter();
  const { user } = useUser();
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, gender, getPrefix } = useProfile();
  const { saveUserProfile, userData, updateUserProfile, loading: firestoreLoading } = useFirestore();
  const { getPreviousScreen } = useProfileNavigation();
  const [loading, setLoading] = useState(false);
  const [aboutMe, setAboutMe] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const minChars = 50;
  const inputRef = useRef(null);

  // Initialize with existing data if available
  useEffect(() => {
    if (userData?.aboutMe) {
      setAboutMe(userData.aboutMe);
      setCharCount(userData.aboutMe.length);
    }
  }, [userData]);

  // Character count and warning logic
  useEffect(() => {
    setCharCount(aboutMe.length);
    const timer = setTimeout(() => {
      setShowWarning(aboutMe.length > 0 && aboutMe.length < minChars);
    }, 1000);
    return () => clearTimeout(timer);
  }, [aboutMe]);

  const handleHelpPress = () => {
    Alert.alert(
      language === 'ENG' ? "Help with About Me" : "अपने बारे में मदद",
      language === 'ENG' 
        ? "Share interesting details about yourself..."
        : "अपने बारे में रोचक विवरण साझा करें...",
      [{ text: "OK" }]
    );
  };

  const saveAboutMe = async () => {
    if (charCount < minChars) {
      Alert.alert(
        language === 'ENG' ? "More Details Needed" : "अधिक विवरण आवश्यक",
        language === 'ENG' 
          ? `Please write at least ${minChars} characters about yourself`
          : `कृपया अपने बारे में कम से कम ${minChars} अक्षर लिखें`,
        [{ text: "OK" }]
      );
      return;
    }

    setLoading(true);
    try {
      const updateData = {
        aboutMe,
        profileProgress: 90,
        updatedAt: serverTimestamp()
      };

      // Use updateUserProfile to only update specific fields
      await updateUserProfile(updateData);

      // Navigate to next screen
      router.push('/homescreens/info13');

    } catch (err) {
      console.error("Error saving about me:", err);
      Alert.alert(
        language === 'ENG' ? "Error" : "त्रुटि",
        language === 'ENG' 
          ? "Could not save information. Please try again."
          : "जानकारी सहेजी नहीं जा सकी। कृपया पुनः प्रयास करें।",
        [{ text: "OK" }]
      );
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking firestore data
  if (firestoreLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7e57c2" />
      </View>
    );
  }

  // Translations
  const translations = {
    title: {
      ENG: `Tell us about ${getPrefix().toLowerCase()}self`,
      HI: profileFor === 'MySelf' ? "अपने बारे में बताएं" : 
          profileFor === 'My Son' ? "अपने बेटे के बारे में बताएं" :
          profileFor === 'My Daughter' ? "अपनी बेटी के बारे में बताएं" :
          profileFor === 'My Sister' ? "अपनी बहन के बारे में बताएं" :
          profileFor === 'My Brother' ? "अपने भाई के बारे में बताएं" :
          profileFor === 'My Friend' ? "अपने दोस्त के बारे में बताएं" :
          profileFor === 'Cousin' ? "अपने चचेरे भाई के बारे में बताएं" :
          "अपने रिश्तेदार के बारे में बताएं"
    },
    placeholder: {
      ENG: `Describe ${getPrefix().toLowerCase()}self (minimum 50 characters)...`,
      HI: profileFor === 'MySelf' ? "अपने बारे में वर्णन करें (कम से कम 50 अक्षर)..." : 
          profileFor === 'My Son' ? "अपने बेटे के बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
          profileFor === 'My Daughter' ? "अपनी बेटी के बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
          profileFor === 'My Sister' ? "अपनी बहन के बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
          profileFor === 'My Brother' ? "अपने भाई के बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
          profileFor === 'My Friend' ? "अपने दोस्त के बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
          profileFor === 'Cousin' ? "अपने चचेरे भाई के बारे में वर्णन करें (कम से कम 50 अक्षर)..." :
          "अपने रिश्तेदार के बारे में वर्णन करें (कम से कम 50 अक्षर)..."
    },
    help: {
      ENG: "Need help writing about yourself?",
      HI: profileFor === 'MySelf' ? "अपने बारे में लिखने में मदद चाहिए?" : 
          profileFor === 'My Son' ? "अपने बेटे के बारे में लिखने में मदद चाहिए?" :
          profileFor === 'My Daughter' ? "अपनी बेटी के बारे में लिखने में मदद चाहिए?" :
          profileFor === 'My Sister' ? "अपनी बहन के बारे में लिखने में मदद चाहिए?" :
          profileFor === 'My Brother' ? "अपने भाई के बारे में लिखने में मदद चाहिए?" :
          profileFor === 'My Friend' ? "अपने दोस्त के बारे में लिखने में मदद चाहिए?" :
          profileFor === 'Cousin' ? "अपने चचेरे भाई के बारे में लिखने में मदद चाहिए?" :
          "अपने रिश्तेदार के बारे में लिखने में मदद चाहिए?"
    },
    characters: {
      ENG: `${charCount}/${minChars} characters`,
      HI: `${charCount}/${minChars} अक्षर`
    },
    submit: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    loading: {
      ENG: "Saving...",
      HI: "सहेजा जा रहा है..."
    },
    moreNeeded: {
      ENG: "more needed",
      HI: "और आवश्यक"
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info12'))}
        >
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.languageToggleContainer}>
          <Text style={styles.languageLabel}>ENG</Text>
          <TouchableOpacity 
            style={styles.toggleContainer}
            onPress={toggleLanguage}
            activeOpacity={0.8}
          >
            <View style={[
              styles.toggleButton,
              { 
                transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
                backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
              }
            ]}>
              <Image 
                source={language === 'ENG' 
                  ? require('../../assets/uk-flag.png') 
                  : require('../../assets/india-flag.png')} 
                style={styles.flag} 
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.languageLabel}>हिंदी</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <Feather name="edit-3" size={24} color="#7e57c2" />
            <Text style={styles.title}>{translations.title[language]}</Text>
          </View>

          <View style={styles.iconContainer}>
            <Feather name="edit-3" size={40} color="white" />
          </View>

          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              showWarning && styles.inputWarning
            ]}
            multiline
            numberOfLines={6}
            placeholder={translations.placeholder[language]}
            placeholderTextColor="#999"
            value={aboutMe}
            onChangeText={setAboutMe}
            textAlignVertical="top"
            autoFocus={true}
          />

          <View style={styles.helpContainer}>
            <TouchableOpacity 
              style={styles.helpButton}
              onPress={handleHelpPress}
            >
              <Feather name="help-circle" size={20} color="#7e57c2" />
              <Text style={styles.helpText}>{translations.help[language]}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.counterContainer}>
            <Text style={[
              styles.counterText,
              showWarning && styles.counterWarning
            ]}>
              {translations.characters[language]}
            </Text>
            {showWarning && (
              <View style={styles.warningBadge}>
                <Text style={styles.warningText}>
                  {minChars - charCount} {translations.moreNeeded[language]}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.continueButton,
              { 
                backgroundColor: charCount >= minChars ? '#7e57c2' : '#ADB5BD',
                opacity: loading ? 0.7 : 1
              }
            ]}
            onPress={saveAboutMe}
            disabled={charCount < minChars || loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.continueButtonText}>
                {translations.submit[language]}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  backButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  languageToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 6,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  languageLabel: {
    fontWeight: '600',
    fontSize: 14,
    color: '#495057',
  },
  toggleContainer: {
    width: 60,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E9ECEF',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  flag: {
    width: 18,
    height: 13,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  iconContainer: {
    alignSelf: 'center',
    backgroundColor: '#7e57c2',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  input: {
    minHeight: 200,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 16,
    padding: 20,
    fontSize: 16,
    backgroundColor: '#fafafa',
    textAlign: 'left',
    lineHeight: 24,
    textAlignVertical: 'top',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  inputWarning: {
    borderColor: '#FF6B6B',
    backgroundColor: '#FFF9F9',
  },
  helpContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-start',
    padding: 8,
    paddingLeft: 0,
  },
  helpText: {
    color: '#7e57c2',
    fontSize: 16,
    fontWeight: '500',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 8,
  },
  counterText: {
    fontSize: 14,
    color: '#666',
  },
  counterWarning: {
    color: '#FF6B6B',
    fontWeight: '500',
  },
  warningBadge: {
    backgroundColor: '#FFEBEE',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  warningText: {
    fontSize: 13,
    color: '#FF6B6B',
    fontWeight: '500',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  continueButton: {
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});