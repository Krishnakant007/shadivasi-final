







// // app/homescreens/info13.jsx
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
//   Alert
// } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useState } from 'react';

// export default function Info13() {
//   const router = useRouter();
//   const { language } = useLanguage();
//   const { saveUserProfile, userData } = useFirestore();
//   const [loading, setLoading] = useState(false);
  
//   // State for user habits
//   const [habits, setHabits] = useState({
//     smokes: null,
//     smokeFrequency: null,
//     drinks: null,
//     drinkFrequency: null,
//     consumesTobacco: null,
//     tobaccoFrequency: null
//   });

//   // Frequency options
//   const frequencyOptions = [
//     { id: 'daily', label: { ENG: 'Daily', HI: 'रोज़' } },
//     { id: 'weekly', label: { ENG: 'Weekly', HI: 'साप्ताहिक' } },
//     { id: 'monthly', label: { ENG: 'Monthly', HI: 'मासिक' } },
//     { id: 'occasionally', label: { ENG: 'Occasionally', HI: 'कभी-कभी' } }
//   ];

//   // Translations
//   const translations = {
//     title: {
//       ENG: "Lifestyle Habits",
//       HI: "जीवनशैली की आदतें"
//     },
//     smokes: {
//       ENG: "Do you smoke?",
//       HI: "क्या आप धूम्रपान करते हैं?"
//     },
//     drinks: {
//       ENG: "Do you drink alcohol?",
//       HI: "क्या आप शराब पीते हैं?"
//     },
//     tobacco: {
//       ENG: "Do you consume tobacco (Vimal/Gutka)?",
//       HI: "क्या आप तंबाकू (विमल/गुटखा) का सेवन करते हैं?"
//     },
//     frequency: {
//       ENG: "How often?",
//       HI: "कितनी बार?"
//     },
//     yes: {
//       ENG: "Yes",
//       HI: "हाँ"
//     },
//     no: {
//       ENG: "No",
//       HI: "नहीं"
//     },
//     submit: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     required: {
//       ENG: "Please answer all questions",
//       HI: "कृपया सभी प्रश्नों का उत्तर दें"
//     }
//   };

//   const handleHabitChange = (habit, value) => {
//     setHabits(prev => ({
//       ...prev,
//       [habit]: value,
//       // Reset frequency if user selects "No"
//       ...(value === false && {
//         [`${habit}Frequency`]: null
//       })
//     }));
//   };

//   const handleFrequencyChange = (habit, frequency) => {
//     setHabits(prev => ({
//       ...prev,
//       [`${habit}Frequency`]: frequency
//     }));
//   };

//   const handleSubmit = async () => {
//     // Validate all questions are answered
//     if (
//       habits.smokes === null ||
//       habits.drinks === null ||
//       habits.consumesTobacco === null ||
//       (habits.smokes && !habits.smokeFrequency) ||
//       (habits.drinks && !habits.drinkFrequency) ||
//       (habits.consumesTobacco && !habits.tobaccoFrequency)
//     ) {
//       Alert.alert(
//         translations.errorTitle?.[language] || "Error",
//         translations.required[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setLoading(true);
//     try {
//       await saveUserProfile({
//         habits,
//         profileProgress: 100, // Mark as complete
//         updatedAt: serverTimestamp()
//       });
//       router.replace('/(tabs)');
//     } catch (error) {
//       console.error("Error saving habits:", error);
//       Alert.alert(
//         translations.errorTitle?.[language] || "Error",
//         "Failed to save preferences. Please try again.",
//         [{ text: "OK" }]
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderQuestion = (habit, question) => (
//     <View style={styles.questionContainer}>
//       <Text style={styles.questionText}>{question[language]}</Text>
      
//       <View style={styles.optionRow}>
//         <TouchableOpacity
//           style={[
//             styles.optionButton,
//             habits[habit] === true && styles.optionSelected
//           ]}
//           onPress={() => handleHabitChange(habit, true)}
//         >
//           <Text style={[
//             styles.optionText,
//             habits[habit] === true && styles.optionTextSelected
//           ]}>
//             {translations.yes[language]}
//           </Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity
//           style={[
//             styles.optionButton,
//             habits[habit] === false && styles.optionSelected
//           ]}
//           onPress={() => handleHabitChange(habit, false)}
//         >
//           <Text style={[
//             styles.optionText,
//             habits[habit] === false && styles.optionTextSelected
//           ]}>
//             {translations.no[language]}
//           </Text>
//         </TouchableOpacity>
//       </View>

//       {habits[habit] === true && (
//         <View style={styles.frequencyContainer}>
//           <Text style={styles.frequencyLabel}>{translations.frequency[language]}</Text>
//           <View style={styles.frequencyOptions}>
//             {frequencyOptions.map((freq) => (
//               <TouchableOpacity
//                 key={freq.id}
//                 style={[
//                   styles.frequencyButton,
//                   habits[`${habit}Frequency`] === freq.id && styles.frequencySelected
//                 ]}
//                 onPress={() => handleFrequencyChange(habit, freq.id)}
//               >
//                 <Text style={[
//                   styles.frequencyText,
//                   habits[`${habit}Frequency`] === freq.id && styles.frequencyTextSelected
//                 ]}>
//                   {freq.label[language]}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       )}
//     </View>
//   );

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>{translations.title[language]}</Text>
      
//       {renderQuestion('smokes', translations.smokes)}
//       {renderQuestion('drinks', translations.drinks)}
//       {renderQuestion('consumesTobacco', translations.tobacco)}

//       {loading ? (
//         <ActivityIndicator size="large" color="#6C63FF" style={styles.loader} />
//       ) : (
//         <TouchableOpacity
//           style={styles.submitButton}
//           onPress={handleSubmit}
//           disabled={loading}
//         >
//           <Text style={styles.submitText}>{translations.submit[language]}</Text>
//           <MaterialIcons name="arrow-forward" size={24} color="white" />
//         </TouchableOpacity>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     color: '#333',
//     textAlign: 'center',
//   },
//   questionContainer: {
//     marginBottom: 30,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 16,
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#333',
//   },
//   optionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   optionButton: {
//     flex: 1,
//     padding: 12,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginHorizontal: 4,
//     alignItems: 'center',
//   },
//   optionSelected: {
//     backgroundColor: '#6C63FF',
//     borderColor: '#6C63FF',
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   optionTextSelected: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   frequencyContainer: {
//     marginTop: 12,
//   },
//   frequencyLabel: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 8,
//   },
//   frequencyOptions: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   frequencyButton: {
//     width: '48%',
//     padding: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginBottom: 8,
//     alignItems: 'center',
//   },
//   frequencySelected: {
//     backgroundColor: '#6C63FF',
//     borderColor: '#6C63FF',
//   },
//   frequencyText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   frequencyTextSelected: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   submitButton: {
//     backgroundColor: '#6C63FF',
//     padding: 16,
//     borderRadius: 12,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 8,
//     marginTop: 20,
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: '600',
//   },
//   loader: {
//     marginTop: 30,
//   },
// });











//21/08/2025
// app/homescreens/info13.jsx
// import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import React from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-expo';

// export default function Info13() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { user } = useUser();
//   const [isLoading, setIsLoading] = React.useState(false);

//   const translations = {
//     title: {
//       ENG: "Profile Complete!",
//       HI: "प्रोफाइल पूर्ण!"
//     },
//     subtitle: {
//       ENG: "Your profile is now complete and ready to find matches",
//       HI: "आपकी प्रोफाइल अब पूर्ण है और मैच ढूंढने के लिए तैयार है"
//     },
//     startExploring: {
//       ENG: "Start Exploring",
//       HI: "ढूंढना शुरू करें"
//     },
//     congrats: {
//       ENG: `Congratulations on completing ${getPrefix().toLowerCase()} profile!`,
//       HI: getPrefix() === 'Your' ? "अपनी प्रोफाइल पूरी करने पर बधाई!" :
//           `${getPrefix()} प्रोफाइल पूरी करने पर बधाई!`
//     }
//   };

//   const handleComplete = async () => {
//     setIsLoading(true);
//     try {
//       // Update Clerk metadata to mark profile as completed
//       await user.update({
//         unsafeMetadata: {
//           ...user.unsafeMetadata,
//           profileCompleted: true
//         }
//       });

//       // Update Firestore with completion status
//       await saveUserProfile({
//         profileCompleted: true,
//         profileProgress: 100,
//         updatedAt: serverTimestamp()
//       });

//       // Navigate to tabs
//       router.replace('/(tabs)');
//     } catch (error) {
//       console.error('Error completing profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity
//         style={styles.backButton}
//         onPress={() => router.back()}
//       >
//         <MaterialIcons name="arrow-back" size={24} color="#333" />
//       </TouchableOpacity>

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
//           <MaterialIcons name="check-circle" size={60} color="#4CAF50" />
//         </View>

//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
        
//         <View style={styles.congratsContainer}>
//           <Text style={styles.congratsText}>{translations.congrats[language]}</Text>
//         </View>

         
      

//         <TouchableOpacity
//           style={[styles.button, isLoading && styles.buttonDisabled]}
//           onPress={handleComplete}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="white" />
//           ) : (
//             <Text style={styles.buttonText}>{translations.startExploring[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 60,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 60,
//     left: 20,
//     zIndex: 10,
//     padding: 10,
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 60,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: 6,
//     zIndex: 10,
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
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 30,
//   },
//   iconContainer: {
//     backgroundColor: '#E8F5E8',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 26,
//   },
//   congratsContainer: {
//     backgroundColor: '#F0F8FF',
//     padding: 20,
//     borderRadius: 16,
//     marginBottom: 30,
//   },
//   congratsText: {
//     fontSize: 16,
//     color: '#1E88E5',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   completeImage: {
//     width: 250,
//     height: 200,
//     marginBottom: 40,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 18,
//     borderRadius: 30,
//     width: '100%',
//     maxWidth: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#4CAF50',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//     marginBottom: 20,
//   },
//   buttonDisabled: {
//     opacity: 0.7,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });









///23/08/2025
// //info13.jsx
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-expo';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info13() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getPreviousScreen } = useProfileNavigation();
//   const { user } = useUser();
//   const [isLoading, setIsLoading] = useState(false);

//   const translations = {
//     title: {
//       ENG: "Profile Complete!",
//       HI: "प्रोफाइल पूर्ण!"
//     },
//     subtitle: {
//       ENG: "Your profile is now complete and ready to find matches",
//       HI: "आपकी प्रोफाइल अब पूर्ण है और मैच ढूंढने के लिए तैयार है"
//     },
//     startExploring: {
//       ENG: "Start Exploring",
//       HI: "ढूंढना शुरू करें"
//     },
//     congrats: {
//       ENG: `Congratulations on completing ${getPrefix().toLowerCase()} profile!`,
//       HI: profileFor === 'MySelf' ? "अपनी प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Son' ? "अपने बेटे की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Daughter' ? "अपनी बेटी की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Sister' ? "अपनी बहन की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Brother' ? "अपने भाई की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Friend' ? "अपने दोस्त की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई की प्रोफाइल पूरी करने पर बधाई!" :
//           "अपने रिश्तेदार की प्रोफाइल पूरी करने पर बधाई!"
//     }
//   };

//   const handleComplete = async () => {
//     setIsLoading(true);
//     try {
//       // Update Clerk metadata to mark profile as completed
//       await user.update({
//         unsafeMetadata: {
//           ...user.unsafeMetadata,
//           profileCompleted: true
//         }
//       });

//       // Update Firestore with completion status
//       const profileData = {
//         ...userData,
//         profileCompleted: true,
//         profileProgress: 100,
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 13);

//       // Navigate to tabs
//       router.replace('/(tabs)');
//     } catch (error) {
//       console.error('Error completing profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info13'))}
//         >
//           <MaterialIcons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>

//         <View style={styles.languageToggleContainer}>
//           <Text style={styles.languageLabel}>ENG</Text>
//           <TouchableOpacity
//             style={styles.toggleContainer}
//             onPress={toggleLanguage}
//             activeOpacity={0.8}
//           >
//             <View style={[
//               styles.toggleButton,
//               {
//                 transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//                 backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//               }
//             ]}>
//               <Image
//                 source={language === 'ENG'
//                   ? require('../../assets/uk-flag.png')
//                   : require('../../assets/india-flag.png')}
//                 style={styles.flag}
//               />
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.languageLabel}>हिंदी</Text>
//         </View>
//       </View>

//       <View style={styles.contentContainer}>
//         <View style={styles.content}>
//           <View style={styles.iconContainer}>
//             <MaterialIcons name="check-circle" size={60} color="#4CAF50" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
          
//           <View style={styles.congratsContainer}>
//             <Text style={styles.congratsText}>{translations.congrats[language]}</Text>
//           </View>

//           <TouchableOpacity
//             style={[styles.continueButton, isLoading && styles.buttonDisabled]}
//             onPress={handleComplete}
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
//             ) : (
//               <Text style={styles.continueButtonText}>{translations.startExploring[language]}</Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     paddingBottom: 15,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E9ECEF',
//   },
//   backButton: {
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: 6,
//     backgroundColor: 'white',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
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
//   contentContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   content: {
//     width: '100%',
//     maxWidth: 400,
//     alignItems: 'center',
//   },
//   iconContainer: {
//     backgroundColor: '#E8F5E8',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 26,
//   },
//   congratsContainer: {
//     backgroundColor: '#F0F8FF',
//     padding: 20,
//     borderRadius: 16,
//     marginBottom: 40,
//     width: '100%',
//   },
//   congratsText: {
//     fontSize: 16,
//     color: '#1E88E5',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   continueButton: {
//     backgroundColor: '#4CAF50',
//     padding: 18,
//     borderRadius: 30,
//     width: '100%',
//     maxWidth: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#4CAF50',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonDisabled: {
//     opacity: 0.7,
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

















//02/09
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { useUser } from '@clerk/clerk-expo';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info13() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getPreviousScreen } = useProfileNavigation();
//   const { user } = useUser();
//   const [isLoading, setIsLoading] = useState(false);
  
//   // State for form fields
//   const [hasDisability, setHasDisability] = useState(null);
//   const [usesTobacco, setUsesTobacco] = useState(null);
//   const [tobaccoFrequency, setTobaccoFrequency] = useState('');
//   const [drinksAlcohol, setDrinksAlcohol] = useState(null);
//   const [alcoholFrequency, setAlcoholFrequency] = useState('');

//   const translations = {
//     title: {
//       ENG: "Lifestyle Information",
//       HI: "जीवनशैली जानकारी"
//     },
//     subtitle: {
//       ENG: "Help us understand your lifestyle better",
//       HI: "हमें आपकी जीवनशैली को बेहतर ढंग से समझने में मदद करें"
//     },
//     disability: {
//       ENG: "Do you have any disabilities?",
//       HI: "क्या आपको कोई विकलांगता है?"
//     },
//     tobacco: {
//       ENG: "Do you use tobacco/cigarettes?",
//       HI: "क्या आप तंबाकू/सिगरेट का उपयोग करते हैं?"
//     },
//     alcohol: {
//       ENG: "Do you drink alcohol?",
//       HI: "क्या आप शराब पीते हैं?"
//     },
//     frequency: {
//       ENG: "How often?",
//       HI: "कितनी बार?"
//     },
//     daily: {
//       ENG: "Daily",
//       HI: "रोजाना"
//     },
//     weekly: {
//       ENG: "Weekly",
//       HI: "साप्ताहिक"
//     },
//     monthly: {
//       ENG: "Monthly",
//       HI: "मासिक"
//     },
//     yes: {
//       ENG: "Yes",
//       HI: "हाँ"
//     },
//     no: {
//       ENG: "No",
//       HI: "नहीं"
//     },
//     completeProfile: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूर्ण करें"
//     },
//     congrats: {
//       ENG: `Congratulations on completing ${getPrefix().toLowerCase()} profile!`,
//       HI: profileFor === 'MySelf' ? "अपनी प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Son' ? "अपने बेटे की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Daughter' ? "अपनी बेटी की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Sister' ? "अपनी बहन की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Brother' ? "अपने भाई की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'My Friend' ? "अपने दोस्त की प्रोफाइल पूरी करने पर बधाई!" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई की प्रोफाइल पूरी करने पर बधाई!" :
//           "अपने रिश्तेदार की प्रोफाइल पूरी करने पर बधाई!"
//     }
//   };

//   const isButtonDisabled = hasDisability === null || usesTobacco === null || drinksAlcohol === null ||
//                           (usesTobacco === 'Yes' && !tobaccoFrequency) ||
//                           (drinksAlcohol === 'Yes' && !alcoholFrequency);

//   const handleComplete = async () => {
//     if (isButtonDisabled) return;
    
//     setIsLoading(true);
//     try {
//       // Update Clerk metadata
//       await user.update({
//         unsafeMetadata: {
//           ...user.unsafeMetadata,
//           profileCompleted: true
//         }
//       });

//       // Update Firestore with lifestyle information
//       const profileData = {
//         ...userData,
//         hasDisability,
//         usesTobacco,
//         tobaccoFrequency: usesTobacco === 'Yes' ? tobaccoFrequency : null,
//         drinksAlcohol,
//         alcoholFrequency: drinksAlcohol === 'Yes' ? alcoholFrequency : null,
//         profileCompleted: true,
//         profileProgress: 100,
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 13);

//       // Navigate to tabs
//       router.replace('/(tabs)');
//     } catch (error) {
//       console.error('Error completing profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderOptionButton = (value, selectedValue, onPress, text) => (
//     <TouchableOpacity
//       style={[
//         styles.optionButton,
//         selectedValue === value && styles.selectedOption
//       ]}
//       onPress={() => onPress(value)}
//     >
//       <Text style={[
//         styles.optionText,
//         selectedValue === value && styles.selectedOptionText
//       ]}>
//         {text}
//       </Text>
//     </TouchableOpacity>
//   );

//   const renderFrequencyOptions = (selectedFrequency, onSelect, show) => {
//     if (!show) return null;

//     return (
//       <View style={styles.frequencyContainer}>
//         <Text style={styles.frequencyLabel}>{translations.frequency[language]}</Text>
//         <View style={styles.frequencyOptions}>
//           {renderOptionButton('Daily', selectedFrequency, onSelect, translations.daily[language])}
//           {renderOptionButton('Weekly', selectedFrequency, onSelect, translations.weekly[language])}
//           {renderOptionButton('Monthly', selectedFrequency, onSelect, translations.monthly[language])}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info13'))}
//         >
//           <MaterialIcons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>

//         <View style={styles.languageToggleContainer}>
//           <Text style={styles.languageLabel}>ENG</Text>
//           <TouchableOpacity
//             style={styles.toggleContainer}
//             onPress={toggleLanguage}
//             activeOpacity={0.8}
//           >
//             <View style={[
//               styles.toggleButton,
//               {
//                 transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//                 backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//               }
//             ]}>
//               <Image
//                 source={language === 'ENG'
//                   ? require('../../assets/uk-flag.png')
//                   : require('../../assets/india-flag.png')}
//                 style={styles.flag}
//               />
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.languageLabel}>हिंदी</Text>
//         </View>
//       </View>

//       <ScrollView
//         style={styles.scrollContainer}
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <MaterialIcons name="lifestyle" size={40} color="#7e57c2" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
          
//           {/* Disability Section */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>{translations.disability[language]}</Text>
//             <View style={styles.optionsRow}>
//               {renderOptionButton('Yes', hasDisability, setHasDisability, translations.yes[language])}
//               {renderOptionButton('No', hasDisability, setHasDisability, translations.no[language])}
//             </View>
//           </View>

//           {/* Tobacco Section */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>{translations.tobacco[language]}</Text>
//             <View style={styles.optionsRow}>
//               {renderOptionButton('Yes', usesTobacco, setUsesTobacco, translations.yes[language])}
//               {renderOptionButton('No', usesTobacco, setUsesTobacco, translations.no[language])}
//             </View>
//             {renderFrequencyOptions(tobaccoFrequency, setTobaccoFrequency, usesTobacco === 'Yes')}
//           </View>

//           {/* Alcohol Section */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>{translations.alcohol[language]}</Text>
//             <View style={styles.optionsRow}>
//               {renderOptionButton('Yes', drinksAlcohol, setDrinksAlcohol, translations.yes[language])}
//               {renderOptionButton('No', drinksAlcohol, setDrinksAlcohol, translations.no[language])}
//             </View>
//             {renderFrequencyOptions(alcoholFrequency, setAlcoholFrequency, drinksAlcohol === 'Yes')}
//           </View>

//           <TouchableOpacity
//             style={[
//               styles.continueButton,
//               isButtonDisabled && styles.buttonDisabled
//             ]}
//             onPress={handleComplete}
//             disabled={isButtonDisabled || isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
//             ) : (
//               <Text style={styles.continueButtonText}>{translations.completeProfile[language]}</Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     paddingBottom: 15,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E9ECEF',
//   },
//   backButton: {
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: 6,
//     backgroundColor: 'white',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
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
//   scrollContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 40,
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   iconContainer: {
//     backgroundColor: '#EDE7F6',
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 22,
//   },
//   section: {
//     width: '100%',
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 16,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//   },
//   optionsRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   optionButton: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 12,
//     backgroundColor: '#f8f9fa',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 5,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//   },
//   selectedOption: {
//     backgroundColor: '#7e57c2',
//     borderColor: '#673ab7',
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#495057',
//     fontWeight: '500',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: '600',
//   },
//   frequencyContainer: {
//     marginTop: 10,
//   },
//   frequencyLabel: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#555',
//     marginBottom: 10,
//   },
//   frequencyOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 18,
//     borderRadius: 30,
//     width: '100%',
//     maxWidth: 300,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//     marginTop: 20,
//   },
//   buttonDisabled: {
//     backgroundColor: '#ADB5BD',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });






import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { useUser } from '@clerk/clerk-expo';
import { useProfileNavigation } from '../utils/navigationHelper';

export default function Info13() {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getPreviousScreen } = useProfileNavigation();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  
  // State for form fields
  const [hasDisability, setHasDisability] = useState(null);
  const [usesTobacco, setUsesTobacco] = useState(null);
  const [tobaccoFrequency, setTobaccoFrequency] = useState('');
  const [drinksAlcohol, setDrinksAlcohol] = useState(null);
  const [alcoholFrequency, setAlcoholFrequency] = useState('');

  const translations = {
    title: {
      ENG: "Lifestyle Information",
      HI: "जीवनशैली जानकारी"
    },
    subtitle: {
      ENG: "Help us understand your lifestyle better",
      HI: "हमें आपकी जीवनशैली को बेहतर ढंग से समझने में मदद करें"
    },
    disability: {
      ENG: "Do you have any disabilities?",
      HI: "क्या आपको कोई विकलांगता है?"
    },
    tobacco: {
      ENG: "Do you use tobacco/cigarettes?",
      HI: "क्या आप तंबाकू/सिगरेट का उपयोग करते हैं?"
    },
    alcohol: {
      ENG: "Do you drink alcohol?",
      HI: "क्या आप शराब पीते हैं?"
    },
    frequency: {
      ENG: "How often?",
      HI: "कितनी बार?"
    },
    daily: {
      ENG: "Daily",
      HI: "रोजाना"
    },
    weekly: {
      ENG: "Weekly",
      HI: "साप्ताहिक"
    },
    monthly: {
      ENG: "Monthly",
      HI: "मासिक"
    },
    yes: {
      ENG: "Yes",
      HI: "हाँ"
    },
    no: {
      ENG: "No",
      HI: "नहीं"
    },
    completeProfile: {
      ENG: "Complete Profile",
      HI: "प्रोफाइल पूर्ण करें"
    },
    congrats: {
      ENG: `Congratulations on completing ${getPrefix().toLowerCase()} profile!`,
      HI: profileFor === 'MySelf' ? "अपनी प्रोफाइल पूरी करने पर बधाई!" : 
          profileFor === 'My Son' ? "अपने बेटे की प्रोफाइल पूरी करने पर बधाई!" :
          profileFor === 'My Daughter' ? "अपनी बेटी की प्रोफाइल पूरी करने पर बधाई!" :
          profileFor === 'My Sister' ? "अपनी बहन की प्रोफाइल पूरी करने पर बधाई!" :
          profileFor === 'My Brother' ? "अपने भाई की प्रोफाइल पूरी करने पर बधाई!" :
          profileFor === 'My Friend' ? "अपने दोस्त की प्रोफाइल पूरी करने पर बधाई!" :
          profileFor === 'Cousin' ? "अपने चचेरे भाई की प्रोफाइल पूरी करने पर बधाई!" :
          "अपने रिश्तेदार की प्रोफाइल पूरी करने पर बधाई!"
    }
  };

  const isButtonDisabled = hasDisability === null || usesTobacco === null || drinksAlcohol === null || 
                          (usesTobacco === 'Yes' && !tobaccoFrequency) || 
                          (drinksAlcohol === 'Yes' && !alcoholFrequency);

  const handleComplete = async () => {
    if (isButtonDisabled) return;
    
    setIsLoading(true);
    try {
      // Update Clerk metadata
      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          profileCompleted: true
        }
      });

      // Update Firestore with lifestyle information
      const profileData = {
        ...userData,
        hasDisability,
        usesTobacco,
        tobaccoFrequency: usesTobacco === 'Yes' ? tobaccoFrequency : null,
        drinksAlcohol,
        alcoholFrequency: drinksAlcohol === 'Yes' ? alcoholFrequency : null,
        profileCompleted: true,
        profileProgress: 100,
        updatedAt: serverTimestamp()
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 13);

      // Navigate to tabs
      router.replace('/(tabs)');
    } catch (error) {
      console.error('Error completing profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderOptionButton = (value, selectedValue, onPress, text) => (
    <TouchableOpacity
      style={[
        styles.optionButton,
        selectedValue === value && styles.selectedOption
      ]}
      onPress={() => onPress(value)}
    >
      <Text style={[
        styles.optionText,
        selectedValue === value && styles.selectedOptionText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  const renderFrequencyOption = (value, selectedValue, onSelect, text, iconName) => (
    <TouchableOpacity
      style={[
        styles.frequencyOption,
        selectedValue === value && styles.selectedFrequencyOption
      ]}
      onPress={() => onSelect(value)}
    >
      <MaterialIcons 
        name={iconName} 
        size={24} 
        color={selectedValue === value ? '#7e57c2' : '#666'} 
        style={styles.frequencyIcon}
      />
      <Text style={[
        styles.frequencyOptionText,
        selectedValue === value && styles.selectedFrequencyOptionText
      ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );

  const renderFrequencyOptions = (selectedFrequency, onSelect, show) => {
    if (!show) return null;

    return (
      <View style={styles.frequencyContainer}>
        <Text style={styles.frequencyLabel}>{translations.frequency[language]}</Text>
        <View style={styles.frequencyOptions}>
          {renderFrequencyOption('Daily', selectedFrequency, onSelect, translations.daily[language], 'event-available')}
          {renderFrequencyOption('Weekly', selectedFrequency, onSelect, translations.weekly[language], 'date-range')}
          {renderFrequencyOption('Monthly', selectedFrequency, onSelect, translations.monthly[language], 'calendar-today')}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info13'))}
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

      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="lifestyle" size={40} color="#7e57c2" />
          </View>

          <Text style={styles.title}>{translations.title[language]}</Text>
          <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
          
          {/* Disability Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{translations.disability[language]}</Text>
            <View style={styles.optionsRow}>
              {renderOptionButton('Yes', hasDisability, setHasDisability, translations.yes[language])}
              {renderOptionButton('No', hasDisability, setHasDisability, translations.no[language])}
            </View>
          </View>

          {/* Tobacco Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{translations.tobacco[language]}</Text>
            <View style={styles.optionsRow}>
              {renderOptionButton('Yes', usesTobacco, setUsesTobacco, translations.yes[language])}
              {renderOptionButton('No', usesTobacco, setUsesTobacco, translations.no[language])}
            </View>
            {renderFrequencyOptions(tobaccoFrequency, setTobaccoFrequency, usesTobacco === 'Yes')}
          </View>

          {/* Alcohol Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{translations.alcohol[language]}</Text>
            <View style={styles.optionsRow}>
              {renderOptionButton('Yes', drinksAlcohol, setDrinksAlcohol, translations.yes[language])}
              {renderOptionButton('No', drinksAlcohol, setDrinksAlcohol, translations.no[language])}
            </View>
            {renderFrequencyOptions(alcoholFrequency, setAlcoholFrequency, drinksAlcohol === 'Yes')}
          </View>

          <TouchableOpacity 
            style={[
              styles.continueButton,
              isButtonDisabled && styles.buttonDisabled
            ]}
            onPress={handleComplete}
            disabled={isButtonDisabled || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.continueButtonText}>{translations.completeProfile[language]}</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: '#EDE7F6',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  section: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    gap: 10,
  },
  optionButton: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  selectedOption: {
    backgroundColor: '#7e57c2',
    borderColor: '#673ab7',
  },
  optionText: {
    fontSize: 16,
    color: '#495057',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: 'white',
    fontWeight: '600',
  },
  frequencyContainer: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  frequencyLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 12,
  },
  frequencyOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  frequencyOption: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
    minHeight: 80,
    justifyContent: 'center',
  },
  selectedFrequencyOption: {
    backgroundColor: '#EDE7F6',
    borderColor: '#7e57c2',
    borderWidth: 2,
  },
  frequencyIcon: {
    marginBottom: 6,
  },
  frequencyOptionText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
    textAlign: 'center',
  },
  selectedFrequencyOptionText: {
    color: '#7e57c2',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#7e57c2',
    padding: 18,
    borderRadius: 30,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ADB5BD',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});