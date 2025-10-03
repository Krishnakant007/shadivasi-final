// // app/homescreens/info1.jsx
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useRouter } from 'expo-router';
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
// import { useLanguage } from '../context/LanguageContext';

// export default function Info1() {
//   const [selectedProfileFor, setSelectedProfileFor] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showGenderSelection, setShowGenderSelection] = useState(false);
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();

//   // Create mappings between English and Hindi options
//   const profileMappings = {
//     'MySelf': 'मैं खुद',
//     'My Son': 'मेरा बेटा',
//     'My Daughter': 'मेरी बेटी',
//     'My Sister': 'मेरी बहन',
//     'My Brother': 'मेरा भाई',
//     'My Friend': 'मेरा दोस्त',
//     'Cousin': 'मेरा चचेरा भाई',
//     'My Relative': 'मेरा रिश्तेदार'
//   };

//   const reverseProfileMappings = Object.fromEntries(
//     Object.entries(profileMappings).map(([key, value]) => [value, key])
//   );

//   const handleProfileForSelect = (item) => {
//     setSelectedProfileFor(prev => prev === item ? null : item);
    
//     const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
    
//     const showGenderOptions = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//     const maleOptions = ['My Son', 'My Brother'];
//     const femaleOptions = ['My Daughter', 'My Sister'];

//     if (showGenderOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(true);
//       setSelectedGender(null);
//     }
//     else if (maleOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(false);
//       setSelectedGender(language === 'ENG' ? 'Male' : 'पुरुष');
//     }
//     else if (femaleOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(false);
//       setSelectedGender(language === 'ENG' ? 'Female' : 'महिला');
//     }
//   };

//   const handleGenderSelect = (item) => {
//     setSelectedGender(prev => prev === item ? null : item);
//   };

//   const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//   const currentSelectionEnglish = language === 'ENG'
//     ? selectedProfileFor
//     : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

//   const isButtonDisabled = !selectedProfileFor ||
//     (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

//   // Translations
//   const translations = {
//     title: {
//       ENG: "This Profile is for",
//       HI: "यह प्रोफाइल किसके लिए है"
//     },
//     genderTitle: {
//       ENG: "Your Gender",
//       HI: "आपका लिंग"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   // Get the appropriate data based on language
//   const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
//   const genderData = language === 'ENG' ? Gender : GenderHindi;

//   return (
//     <View style={styles.container}>
//       {/* Language Toggle at Top Right */}
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

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         {/* Centered Profile Icon */}
//         <View style={styles.profileIconContainer}>
//           <View style={styles.profileContainer}>
//             <AntDesign name="user" size={32} color="white" />
//           </View>
//         </View>

//         {/* Main Content */}
//         <View style={styles.contentWrapper}>
//           <Text style={styles.title}>{translations.title[language]}</Text>

//           {/* Profile For Options - 2 column grid */}
//           <View style={styles.gridContainer}>
//             {profileData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.gridItem,
//                   {
//                     backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
//                     borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
//                   }
//                 ]}
//                 onPress={() => handleProfileForSelect(item)}
//               >
//                 <Text style={[
//                   styles.itemText,
//                   { color: selectedProfileFor === item ? 'white' : '#495057' }
//                 ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Gender selection (when needed) */}
//           {showGenderSelection && (
//             <>
//               <Text style={styles.subtitle}>{translations.genderTitle[language]}</Text>
//               <View style={styles.gridContainer}>
//                 {genderData.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.gridItem,
//                       {
//                         backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
//                         borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
//                       }
//                     ]}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={[
//                       styles.itemText,
//                       { color: selectedGender === item ? 'white' : '#495057' }
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </>
//           )}

//           {/* Continue Button (scrollable, not fixed) */}
//           <TouchableOpacity
//             onPress={() => router.push('homescreens/info2')}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF' }
//             ]}
//             disabled={isButtonDisabled}
//           >
//             <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     paddingBottom: 30,
//   },
//   contentWrapper: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 40,
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
//   profileIconContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   profileContainer: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#212529',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   gridItem: {
//     width: '48%', // Leaves 4% space between items (2% on each side)
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 60,
//   },
//   itemText: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   continueButton: {
//     width: '100%',
//     maxWidth: 300,
//     padding: 16,
//     borderRadius: 99,
//     marginTop: 30,
//     marginBottom: 20,
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });








//app/homescreens/info1.jsx


// app/homescreens/info1.jsx
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useRouter } from 'expo-router';
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info1() {
//   const [selectedProfileFor, setSelectedProfileFor] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showGenderSelection, setShowGenderSelection] = useState(false);
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { setProfileFor, setGender } = useProfile();

//   const profileMappings = {
//     'MySelf': 'मैं खुद',
//     'My Son': 'मेरा बेटा',
//     'My Daughter': 'मेरी बेटी',
//     'My Sister': 'मेरी बहन',
//     'My Brother': 'मेरा भाई',
//     'My Friend': 'मेरा दोस्त',
//     'Cousin': 'मेरा चचेरा भाई',
//     'My Relative': 'मेरा रिश्तेदार'
//   };

//   const reverseProfileMappings = Object.fromEntries(
//     Object.entries(profileMappings).map(([key, value]) => [value, key])
//   );

//   const handleProfileForSelect = (item) => {
//     setSelectedProfileFor(prev => prev === item ? null : item);
    
//     const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
//     setProfileFor(englishEquivalent);
    
//     const showGenderOptions = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//     const maleOptions = ['My Son', 'My Brother'];
//     const femaleOptions = ['My Daughter', 'My Sister'];

//     if (showGenderOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(true);
//       setSelectedGender(null);
//       setGender(null);
//     }
//     else if (maleOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(false);
//       const genderText = language === 'ENG' ? 'Male' : 'पुरुष';
//       setSelectedGender(genderText);
//       setGender('Male');
//     }
//     else if (femaleOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(false);
//       const genderText = language === 'ENG' ? 'Female' : 'महिला';
//       setSelectedGender(genderText);
//       setGender('Female');
//     }
//   };

//   const handleGenderSelect = (item) => {
//     setSelectedGender(prev => prev === item ? null : item);
//     const englishEquivalent = language === 'ENG' ? item :
//       (item === 'पुरुष' ? 'Male' : 'Female');
//     setGender(englishEquivalent);
//   };

//   const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//   const currentSelectionEnglish = language === 'ENG'
//     ? selectedProfileFor
//     : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

//   const isButtonDisabled = !selectedProfileFor ||
//     (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

//   const translations = {
//     title: {
//       ENG: "This Profile is for",
//       HI: "यह प्रोफाइल किसके लिए है"
//     },
//     genderTitle: {
//       ENG: "Your Gender",
//       HI: "आपका लिंग"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
//   const genderData = language === 'ENG' ? Gender : GenderHindi;

//   return (
//     <View style={styles.container}>
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

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.profileIconContainer}>
//           <View style={styles.profileContainer}>
//             <AntDesign name="user" size={32} color="white" />
//           </View>
//         </View>

//         <View style={styles.contentWrapper}>
//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.gridContainer}>
//             {profileData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.gridItem,
//                   {
//                     backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
//                     borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
//                   }
//                 ]}
//                 onPress={() => handleProfileForSelect(item)}
//               >
//                 <Text style={[
//                   styles.itemText,
//                   { color: selectedProfileFor === item ? 'white' : '#495057' }
//                 ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {showGenderSelection && (
//             <>
//               <Text style={styles.subtitle}>{translations.genderTitle[language]}</Text>
//               <View style={styles.gridContainer}>
//                 {genderData.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.gridItem,
//                       {
//                         backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
//                         borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
//                       }
//                     ]}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={[
//                       styles.itemText,
//                       { color: selectedGender === item ? 'white' : '#495057' }
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </>
//           )}

//           <TouchableOpacity
//             onPress={() => router.push('homescreens/info2')}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF' }
//             ]}
//             disabled={isButtonDisabled}
//           >
//             <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     paddingBottom: 30,
//   },
//   contentWrapper: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 40,
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
//   profileIconContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   profileContainer: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#212529',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   gridItem: {
//     width: '48%',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 60,
//   },
//   itemText: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   continueButton: {
//     width: '100%',
//     maxWidth: 300,
//     padding: 16,
//     borderRadius: 99,
//     marginTop: 30,
//     marginBottom: 20,
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });



//14-08-2025

// // app/homescreens/info1.jsx
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useRouter } from 'expo-router';
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info1() {
//   const [selectedProfileFor, setSelectedProfileFor] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showGenderSelection, setShowGenderSelection] = useState(false);
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { setProfileFor, setGender } = useProfile();

//   const profileMappings = {
//     'MySelf': 'मैं खुद',
//     'My Son': 'मेरा बेटा',
//     'My Daughter': 'मेरी बेटी',
//     'My Sister': 'मेरी बहन',
//     'My Brother': 'मेरा भाई',
//     'My Friend': 'मेरा दोस्त',
//     'Cousin': 'मेरा चचेरा भाई',
//     'My Relative': 'मेरा रिश्तेदार'
//   };

//   const reverseProfileMappings = Object.fromEntries(
//     Object.entries(profileMappings).map(([key, value]) => [value, key])
//   );

//   const getGenderTitle = (profileFor) => {
//     if (!profileFor) return "";
    
//     const englishEquivalent = language === 'ENG' ? profileFor : reverseProfileMappings[profileFor];
    
//     const titles = {
//       ENG: {
//         'MySelf': 'Your Gender',
//         'My Friend': 'Your Friend\'s Gender',
//         'Cousin': 'Your Cousin\'s Gender',
//         'My Relative': 'Your Relative\'s Gender'
//       },
//       HI: {
//         'MySelf': 'आपका लिंग',
//         'My Friend': 'आपके दोस्त का लिंग',
//         'Cousin': 'आपके चचेरे भाई का लिंग',
//         'My Relative': 'आपके रिश्तेदार का लिंग'
//       }
//     };
    
//     return titles[language][englishEquivalent] || titles[language]['MySelf'];
//   };

//   const handleProfileForSelect = (item) => {
//     setSelectedProfileFor(prev => prev === item ? null : item);
    
//     const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
//     setProfileFor(englishEquivalent);
    
//     const showGenderOptions = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//     const maleOptions = ['My Son', 'My Brother'];
//     const femaleOptions = ['My Daughter', 'My Sister'];

//     if (showGenderOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(true);
//       setSelectedGender(null);
//       setGender(null);
//     }
//     else if (maleOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(false);
//       const genderText = language === 'ENG' ? 'Male' : 'पुरुष';
//       setSelectedGender(genderText);
//       setGender('Male');
//     }
//     else if (femaleOptions.includes(englishEquivalent)) {
//       setShowGenderSelection(false);
//       const genderText = language === 'ENG' ? 'Female' : 'महिला';
//       setSelectedGender(genderText);
//       setGender('Female');
//     }
//   };

//   const handleGenderSelect = (item) => {
//     setSelectedGender(prev => prev === item ? null : item);
//     const englishEquivalent = language === 'ENG' ? item :
//       (item === 'पुरुष' ? 'Male' : 'Female');
//     setGender(englishEquivalent);
//   };

//   const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//   const currentSelectionEnglish = language === 'ENG'
//     ? selectedProfileFor
//     : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

//   const isButtonDisabled = !selectedProfileFor ||
//     (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

//   const translations = {
//     title: {
//       ENG: "This Profile is for",
//       HI: "यह प्रोफाइल किसके लिए है"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
//   const genderData = language === 'ENG' ? Gender : GenderHindi;

//   return (
//     <View style={styles.container}>
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

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.profileIconContainer}>
//           <View style={styles.profileContainer}>
//             <AntDesign name="user" size={32} color="white" />
//           </View>
//         </View>

//         <View style={styles.contentWrapper}>
//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.gridContainer}>
//             {profileData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.gridItem,
//                   {
//                     backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
//                     borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
//                   }
//                 ]}
//                 onPress={() => handleProfileForSelect(item)}
//               >
//                 <Text style={[
//                   styles.itemText,
//                   { color: selectedProfileFor === item ? 'white' : '#495057' }
//                 ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {showGenderSelection && (
//             <>
//               <Text style={styles.subtitle}>{getGenderTitle(selectedProfileFor)}</Text>
//               <View style={styles.gridContainer}>
//                 {genderData.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.gridItem,
//                       {
//                         backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
//                         borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
//                       }
//                     ]}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={[
//                       styles.itemText,
//                       { color: selectedGender === item ? 'white' : '#495057' }
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </>
//           )}

//           <TouchableOpacity
//             onPress={() => router.push('homescreens/info2')}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF' }
//             ]}
//             disabled={isButtonDisabled}
//           >
//             <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     paddingBottom: 30,
//   },
//   contentWrapper: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 40,
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
//   profileIconContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   profileContainer: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#212529',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   gridItem: {
//     width: '48%',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 60,
//   },
//   itemText: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   continueButton: {
//     width: '100%',
//     maxWidth: 300,
//     padding: 16,
//     borderRadius: 99,
//     marginTop: 30,
//     marginBottom: 20,
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });











//15/08/2025

// app/homescreens/info1.jsx
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useRouter } from 'expo-router';
// import { useState } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { ActivityIndicator } from 'react-native';


// export default function Info1() {
//   const [selectedProfileFor, setSelectedProfileFor] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showGenderSelection, setShowGenderSelection] = useState(false);
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, setProfileFor, gender, setGender } = useProfile();
//  const { saveUserProfile } = useFirestore();
//   const [isSubmitting, setIsSubmitting] = useState(false);



//     const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsSubmitting(true);
      
//       // Save initial profile data
//       await saveUserProfile({
//         profileFor: language === 'ENG' ? selectedProfileFor : reverseProfileMappings[selectedProfileFor],
//         gender: language === 'ENG' ? selectedGender : (selectedGender === 'पुरुष' ? 'Male' : 'Female'),
//         // Other initial data if needed
//       });

//       router.push('homescreens/info2');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       // Handle error (show toast, etc.)
//     } finally {
//       setIsSubmitting(false);
//     }
//   };




  
//   const profileMappings = {
//     'MySelf': 'मैं खुद',
//     'My Son': 'मेरा बेटा',
//     'My Daughter': 'मेरी बेटी',
//     'My Sister': 'मेरी बहन',
//     'My Brother': 'मेरा भाई',
//     'My Friend': 'मेरा दोस्त',
//     'Cousin': 'मेरा चचेरा भाई',
//     'My Relative': 'मेरा रिश्तेदार'
//   };

//   const reverseProfileMappings = Object.fromEntries(
//     Object.entries(profileMappings).map(([key, value]) => [value, key])
//   );

//   const getGenderTitle = (profileFor) => {
//     if (!profileFor) return "";
    
//     const englishEquivalent = language === 'ENG' ? profileFor : reverseProfileMappings[profileFor];
    
//     const titles = {
//       ENG: {
//         'MySelf': 'Your Gender',
//         'My Friend': 'Your Friend\'s Gender',
//         'Cousin': 'Your Cousin\'s Gender',
//         'My Relative': 'Your Relative\'s Gender'
//       },
//       HI: {
//         'MySelf': 'आपका लिंग',
//         'My Friend': 'आपके दोस्त का लिंग',
//         'Cousin': 'आपके चचेरे भाई का लिंग',
//         'My Relative': 'आपके रिश्तेदार का लिंग'
//       }
//     };
    
//     return titles[language][englishEquivalent] || titles[language]['MySelf'];
//   };

//   const handleProfileForSelect = (item) => {
//     setSelectedProfileFor(item);
//     setProfileFor(language === 'ENG' ? item : reverseProfileMappings[item]);
    
//     const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
    
//     // Automatically set gender for specific cases
//     switch(englishEquivalent) {
//       case 'My Son':
//       case 'My Brother':
//         setSelectedGender(language === 'ENG' ? 'Male' : 'पुरुष');
//         setGender('Male');
//         setShowGenderSelection(false);
//         break;
//       case 'My Daughter':
//       case 'My Sister':
//         setSelectedGender(language === 'ENG' ? 'Female' : 'महिला');
//         setGender('Female');
//         setShowGenderSelection(false);
//         break;
//       case 'MySelf':
//       case 'My Friend':
//       case 'Cousin':
//       case 'My Relative':
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(true);
//         break;
//       default:
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(false);
//     }
//   };

//   const handleGenderSelect = (item) => {
//     setSelectedGender(item);
//     setGender(language === 'ENG' ? item : (item === 'पुरुष' ? 'Male' : 'Female'));
//   };

//   const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//   const currentSelectionEnglish = language === 'ENG'
//     ? selectedProfileFor
//     : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

//   const isButtonDisabled = !selectedProfileFor ||
//     (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

//   const translations = {
//     title: {
//       ENG: "This Profile is for",
//       HI: "यह प्रोफाइल किसके लिए है"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
//   const genderData = language === 'ENG' ? Gender : GenderHindi;

//   return (
//     <View style={styles.container}>
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

//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <View style={styles.profileIconContainer}>
//           <View style={styles.profileContainer}>
//             <AntDesign name="user" size={32} color="white" />
//           </View>
//         </View>

//         <View style={styles.contentWrapper}>
//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.gridContainer}>
//             {profileData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.gridItem,
//                   {
//                     backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
//                     borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
//                   }
//                 ]}
//                 onPress={() => handleProfileForSelect(item)}
//               >
//                 <Text style={[
//                   styles.itemText,
//                   { color: selectedProfileFor === item ? 'white' : '#495057' }
//                 ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {showGenderSelection && (
//             <>
//               <Text style={styles.subtitle}>{getGenderTitle(selectedProfileFor)}</Text>
//               <View style={styles.gridContainer}>
//                 {genderData.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.gridItem,
//                       {
//                         backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
//                         borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
//                       }
//                     ]}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={[
//                       styles.itemText,
//                       { color: selectedGender === item ? 'white' : '#495057' }
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </>
//           )}

          
//   <TouchableOpacity
//     onPress={handleContinue}
//     style={[
//       styles.continueButton,
//       {
//         backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF',
//         opacity: isSubmitting ? 0.7 : 1
//       }
//     ]}
//     disabled={isButtonDisabled || isSubmitting}
//   >
//     {isSubmitting ? (
//       <ActivityIndicator color="white" />
//     ) : (
//       <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//     )}
//           </TouchableOpacity>
          

//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     paddingBottom: 30,
//   },
//   contentWrapper: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingTop: 40,
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
//   profileIconContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   profileContainer: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#212529',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   gridItem: {
//     width: '48%',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 60,
//   },
//   itemText: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   continueButton: {
//     width: '100%',
//     maxWidth: 300,
//     padding: 16,
//     borderRadius: 99,
//     marginTop: 30,
//     marginBottom: 20,
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });









//21/08/2025
//app/homescreens/info1.jsx
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useRouter } from 'expo-router';
// import { useState, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { ActivityIndicator } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info1() {
//   const [selectedProfileFor, setSelectedProfileFor] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showGenderSelection, setShowGenderSelection] = useState(false);
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, setProfileFor, gender, setGender } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Load existing data
//   useEffect(() => {
//     if (userData) {
//       if (userData.profileFor) {
//         setSelectedProfileFor(userData.profileFor);
//         setProfileFor(userData.profileFor);
//       }
//       if (userData.gender) {
//         setSelectedGender(userData.gender);
//         setGender(userData.gender);
        
//         // Show gender selection if needed
//         const requiresGender = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//         if (requiresGender.includes(userData.profileFor)) {
//           setShowGenderSelection(true);
//         }
//       }
//     }
//   }, [userData]);

//   const profileMappings = {
//     'MySelf': 'मैं खुद',
//     'My Son': 'मेरा बेटा',
//     'My Daughter': 'मेरी बेटी',
//     'My Sister': 'मेरी बहन',
//     'My Brother': 'मेरा भाई',
//     'My Friend': 'मेरा दोस्त',
//     'Cousin': 'मेरा चचेरा भाई',
//     'My Relative': 'मेरा रिश्तेदार'
//   };

//   const reverseProfileMappings = Object.fromEntries(
//     Object.entries(profileMappings).map(([key, value]) => [value, key])
//   );

//   const getGenderTitle = (profileFor) => {
//     if (!profileFor) return "";
    
//     const englishEquivalent = language === 'ENG' ? profileFor : reverseProfileMappings[profileFor];
    
//     const titles = {
//       ENG: {
//         'MySelf': 'Your Gender',
//         'My Friend': 'Your Friend\'s Gender',
//         'Cousin': 'Your Cousin\'s Gender',
//         'My Relative': 'Your Relative\'s Gender'
//       },
//       HI: {
//         'MySelf': 'आपका लिंग',
//         'My Friend': 'आपके दोस्त का लिंग',
//         'Cousin': 'आपके चचेरे भाई का लिंग',
//         'My Relative': 'आपके रिश्तेदार का लिंग'
//       }
//     };
    
//     return titles[language][englishEquivalent] || titles[language]['MySelf'];
//   };

//   const handleProfileForSelect = (item) => {
//     setSelectedProfileFor(item);
//     setProfileFor(language === 'ENG' ? item : reverseProfileMappings[item]);
    
//     const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
    
//     // Automatically set gender for specific cases
//     switch(englishEquivalent) {
//       case 'My Son':
//       case 'My Brother':
//         setSelectedGender(language === 'ENG' ? 'Male' : 'पुरुष');
//         setGender('Male');
//         setShowGenderSelection(false);
//         break;
//       case 'My Daughter':
//       case 'My Sister':
//         setSelectedGender(language === 'ENG' ? 'Female' : 'महिला');
//         setGender('Female');
//         setShowGenderSelection(false);
//         break;
//       case 'MySelf':
//       case 'My Friend':
//       case 'Cousin':
//       case 'My Relative':
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(true);
//         break;
//       default:
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(false);
//     }
//   };

//   const handleGenderSelect = (item) => {
//     setSelectedGender(item);
//     setGender(language === 'ENG' ? item : (item === 'पुरुष' ? 'Male' : 'Female'));
//   };

//   const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//   const currentSelectionEnglish = language === 'ENG'
//     ? selectedProfileFor
//     : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

//   const isButtonDisabled = !selectedProfileFor ||
//     (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

//   const translations = {
//     title: {
//       ENG: "This Profile is for",
//       HI: "यह प्रोफाइल किसके लिए है"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
//   const genderData = language === 'ENG' ? Gender : GenderHindi;

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsSubmitting(true);
      
//       // Save initial profile data
//       await saveUserProfile({
//         profileFor: language === 'ENG' ? selectedProfileFor : reverseProfileMappings[selectedProfileFor],
//         gender: language === 'ENG' ? selectedGender : (selectedGender === 'पुरुष' ? 'Male' : 'Female'),
//       }, 1);

//       router.push(getNextScreen('homescreens/info1'));
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info1'))}
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
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.profileIconContainer}>
//           <View style={styles.profileContainer}>
//             <AntDesign name="user" size={32} color="white" />
//           </View>
//         </View>

//         <View style={styles.contentWrapper}>
//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.gridContainer}>
//             {profileData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.gridItem,
//                   {
//                     backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
//                     borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
//                   }
//                 ]}
//                 onPress={() => handleProfileForSelect(item)}
//               >
//                 <Text style={[
//                   styles.itemText,
//                   { color: selectedProfileFor === item ? 'white' : '#495057' }
//                 ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {showGenderSelection && (
//             <>
//               <Text style={styles.subtitle}>{getGenderTitle(selectedProfileFor)}</Text>
//               <View style={styles.gridContainer}>
//                 {genderData.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.gridItem,
//                       {
//                         backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
//                         borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
//                       }
//                     ]}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={[
//                       styles.itemText,
//                       { color: selectedGender === item ? 'white' : '#495057' }
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </>
//           )}

//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.continueButton,
//               {
//                 backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF',
//                 opacity: isSubmitting ? 0.7 : 1
//               }
//             ]}
//             disabled={isButtonDisabled || isSubmitting}
//           >
//             {isSubmitting ? (
//               <ActivityIndicator color="white" />
//             ) : (
//               <Text style={styles.buttonText}>{translations.continue[language]}</Text>
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
//     backgroundColor: 'white',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 50, // Safe area for status bar
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
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: 30,
//   },
//   contentWrapper: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   profileIconContainer: {
//     alignItems: 'center',
//     marginTop: 30,
//     marginBottom: 30,
//   },
//   profileContainer: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#212529',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//     gap: 10,
//   },
//   gridItem: {
//     width: '48%',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 60,
//   },
//   itemText: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   continueButton: {
//     width: '100%',
//     maxWidth: 300,
//     padding: 18,
//     borderRadius: 30,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });




//13/09/2025
// app/homescreens/info1.jsx
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useRouter } from 'expo-router';
// import { useState, useEffect } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { ActivityIndicator } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info1() {
//   const [selectedProfileFor, setSelectedProfileFor] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showGenderSelection, setShowGenderSelection] = useState(false);
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, setProfileFor, gender, setGender } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Load existing data
//   useEffect(() => {
//     if (userData) {
//       if (userData.profileFor) {
//         setSelectedProfileFor(userData.profileFor);
//         setProfileFor(userData.profileFor);
//       }
//       if (userData.gender) {
//         setSelectedGender(userData.gender);
//         setGender(userData.gender);
        
//         // Show gender selection if needed
//         const requiresGender = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//         if (requiresGender.includes(userData.profileFor)) {
//           setShowGenderSelection(true);
//         }
//       }
//     }
//   }, [userData]);

//   const profileMappings = {
//     'MySelf': 'मैं खुद',
//     'My Son': 'मेरा बेटा',
//     'My Daughter': 'मेरी बेटी',
//     'My Sister': 'मेरी बहन',
//     'My Brother': 'मेरा भाई',
//     'My Friend': 'मेरा दोस्त',
//     'Cousin': 'मेरा चचेरा भाई',
//     'My Relative': 'मेरा रिश्तेदार'
//   };

//   const reverseProfileMappings = Object.fromEntries(
//     Object.entries(profileMappings).map(([key, value]) => [value, key])
//   );

//   const getGenderTitle = (profileFor) => {
//     if (!profileFor) return "";
    
//     const englishEquivalent = language === 'ENG' ? profileFor : reverseProfileMappings[profileFor];
    
//     const titles = {
//       ENG: {
//         'MySelf': 'Your Gender',
//         'My Friend': 'Your Friend\'s Gender',
//         'Cousin': 'Your Cousin\'s Gender',
//         'My Relative': 'Your Relative\'s Gender'
//       },
//       HI: {
//         'MySelf': 'आपका लिंग',
//         'My Friend': 'आपके दोस्त का लिंग',
//         'Cousin': 'आपके चचेरे भाई का लिंग',
//         'My Relative': 'आपके रिश्तेदार का लिंग'
//       }
//     };
    
//     return titles[language][englishEquivalent] || titles[language]['MySelf'];
//   };

//   const handleProfileForSelect = (item) => {
//     setSelectedProfileFor(item);
//     setProfileFor(language === 'ENG' ? item : reverseProfileMappings[item]);
    
//     const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
    
//     // Automatically set gender for specific cases
//     switch(englishEquivalent) {
//       case 'My Son':
//       case 'My Brother':
//         setSelectedGender(language === 'ENG' ? 'Male' : 'पुरुष');
//         setGender('Male');
//         setShowGenderSelection(false);
//         break;
//       case 'My Daughter':
//       case 'My Sister':
//         setSelectedGender(language === 'ENG' ? 'Female' : 'महिला');
//         setGender('Female');
//         setShowGenderSelection(false);
//         break;
//       case 'MySelf':
//       case 'My Friend':
//       case 'Cousin':
//       case 'My Relative':
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(true);
//         break;
//       default:
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(false);
//     }
//   };

//   const handleGenderSelect = (item) => {
//     setSelectedGender(item);
//     setGender(language === 'ENG' ? item : (item === 'पुरुष' ? 'Male' : 'Female'));
//   };

//   const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//   const currentSelectionEnglish = language === 'ENG'
//     ? selectedProfileFor
//     : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

//   const isButtonDisabled = !selectedProfileFor ||
//     (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

//   const translations = {
//     title: {
//       ENG: "This Profile is for",
//       HI: "यह प्रोफाइल किसके लिए है"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
//   const genderData = language === 'ENG' ? Gender : GenderHindi;

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsSubmitting(true);
      
//       // Save initial profile data
//       await saveUserProfile({
//         profileFor: language === 'ENG' ? selectedProfileFor : reverseProfileMappings[selectedProfileFor],
//         gender: language === 'ENG' ? selectedGender : (selectedGender === 'पुरुष' ? 'Male' : 'Female'),
//       }, 1);

//       router.push(getNextScreen('homescreens/info1'));
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info1'))}
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
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.profileIconContainer}>
//           <View style={styles.profileContainer}>
//             <AntDesign name="user" size={32} color="white" />
//           </View>
//         </View>

//         <View style={styles.contentWrapper}>
//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.gridContainer}>
//             {profileData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.gridItem,
//                   {
//                     backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
//                     borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
//                   }
//                 ]}
//                 onPress={() => handleProfileForSelect(item)}
//               >
//                 <Text style={[
//                   styles.itemText,
//                   { color: selectedProfileFor === item ? 'white' : '#495057' }
//                 ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {showGenderSelection && (
//             <>
//               <Text style={styles.subtitle}>{getGenderTitle(selectedProfileFor)}</Text>
//               <View style={styles.gridContainer}>
//                 {genderData.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.gridItem,
//                       {
//                         backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
//                         borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
//                       }
//                     ]}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={[
//                       styles.itemText,
//                       { color: selectedGender === item ? 'white' : '#495057' }
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </>
//           )}

//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.continueButton,
//               {
//                 backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF',
//                 opacity: isSubmitting ? 0.7 : 1
//               }
//             ]}
//             disabled={isButtonDisabled || isSubmitting}
//           >
//             {isSubmitting ? (
//               <ActivityIndicator color="white" />
//             ) : (
//               <Text style={styles.buttonText}>{translations.continue[language]}</Text>
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
//     backgroundColor: 'white',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 50, // Safe area for status bar
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
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: 30,
//   },
//   contentWrapper: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   profileIconContainer: {
//     alignItems: 'center',
//     marginTop: 30,
//     marginBottom: 30,
//   },
//   profileContainer: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#212529',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//     gap: 10,
//   },
//   gridItem: {
//     width: '48%',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 60,
//   },
//   itemText: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   continueButton: {
//     width: '100%',
//     maxWidth: 300,
//     padding: 18,
//     borderRadius: 30,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });



//23/09/2025
// // app/homescreens/info1.jsx
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { useRouter } from 'expo-router';
// import { useState, useEffect, useCallback } from 'react';
// import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
// import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { ActivityIndicator } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info1() {
//   const [selectedProfileFor, setSelectedProfileFor] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [showGenderSelection, setShowGenderSelection] = useState(false);
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, setProfileFor, gender, setGender } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isInitialized, setIsInitialized] = useState(false);

//   // Load existing data - Fixed useEffect
//   useEffect(() => {
//     if (userData && !isInitialized) {
//       console.log('Initializing with userData:', userData);
      
//       if (userData.profileFor) {
//         const profileValue = language === 'ENG' ? userData.profileFor : profileMappings[userData.profileFor];
//         setSelectedProfileFor(profileValue);
//         setProfileFor(userData.profileFor);
//       }
      
//       if (userData.gender) {
//         const genderValue = language === 'ENG' ? userData.gender : (userData.gender === 'Male' ? 'पुरुष' : 'महिला');
//         setSelectedGender(genderValue);
//         setGender(userData.gender);
        
//         // Show gender selection if needed
//         const requiresGender = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//         if (userData.profileFor && requiresGender.includes(userData.profileFor)) {
//           setShowGenderSelection(true);
//         }
//       }
      
//       setIsInitialized(true);
//     }
//   }, [userData, language, isInitialized]);

//   const profileMappings = {
//     'MySelf': 'मैं खुद',
//     'My Son': 'मेरा बेटा',
//     'My Daughter': 'मेरी बेटी',
//     'My Sister': 'मेरी बहन',
//     'My Brother': 'मेरा भाई',
//     'My Friend': 'मेरा दोस्त',
//     'Cousin': 'मेरा चचेरा भाई',
//     'My Relative': 'मेरा रिश्तेदार'
//   };

//   const reverseProfileMappings = Object.fromEntries(
//     Object.entries(profileMappings).map(([key, value]) => [value, key])
//   );

//   const getGenderTitle = (profileFor) => {
//     if (!profileFor) return "";
    
//     const englishEquivalent = language === 'ENG' ? profileFor : reverseProfileMappings[profileFor];
    
//     const titles = {
//       ENG: {
//         'MySelf': 'Your Gender',
//         'My Friend': 'Your Friend\'s Gender',
//         'Cousin': 'Your Cousin\'s Gender',
//         'My Relative': 'Your Relative\'s Gender'
//       },
//       HI: {
//         'MySelf': 'आपका लिंग',
//         'My Friend': 'आपके दोस्त का लिंग',
//         'Cousin': 'आपके चचेरे भाई का लिंग',
//         'My Relative': 'आपके रिश्तेदार का लिंग'
//       }
//     };
    
//     return titles[language][englishEquivalent] || titles[language]['MySelf'];
//   };

//   const handleProfileForSelect = useCallback((item) => {
//     console.log('Profile selected:', item);
//     setSelectedProfileFor(item);
    
//     const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
//     setProfileFor(englishEquivalent);
    
//     // Automatically set gender for specific cases
//     switch(englishEquivalent) {
//       case 'My Son':
//       case 'My Brother':
//         const maleGender = language === 'ENG' ? 'Male' : 'पुरुष';
//         setSelectedGender(maleGender);
//         setGender('Male');
//         setShowGenderSelection(false);
//         break;
//       case 'My Daughter':
//       case 'My Sister':
//         const femaleGender = language === 'ENG' ? 'Female' : 'महिला';
//         setSelectedGender(femaleGender);
//         setGender('Female');
//         setShowGenderSelection(false);
//         break;
//       case 'MySelf':
//       case 'My Friend':
//       case 'Cousin':
//       case 'My Relative':
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(true);
//         break;
//       default:
//         setSelectedGender(null);
//         setGender(null);
//         setShowGenderSelection(false);
//     }
//   }, [language, setProfileFor, setGender]);

//   const handleGenderSelect = useCallback((item) => {
//     console.log('Gender selected:', item);
//     setSelectedGender(item);
//     const englishGender = language === 'ENG' ? item : (item === 'पुरुष' ? 'Male' : 'Female');
//     setGender(englishGender);
//   }, [language, setGender]);

//   const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
//   const currentSelectionEnglish = language === 'ENG'
//     ? selectedProfileFor
//     : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

//   const isButtonDisabled = !selectedProfileFor ||
//     (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

//   const translations = {
//     title: {
//       ENG: "This Profile is for",
//       HI: "यह प्रोफाइल किसके लिए है"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
//   const genderData = language === 'ENG' ? Gender : GenderHindi;

//   const handleContinue = async () => {
//     if (isButtonDisabled || isSubmitting) return;
    
//     try {
//       console.log('Continuing to next screen...');
//       setIsSubmitting(true);
      
//       const profileForEnglish = language === 'ENG' ? selectedProfileFor : reverseProfileMappings[selectedProfileFor];
//       const genderEnglish = language === 'ENG' ? selectedGender : (selectedGender === 'पुरुष' ? 'Male' : 'Female');
      
//       // Save initial profile data
//       await saveUserProfile({
//         profileFor: profileForEnglish,
//         gender: genderEnglish,
//       }, 1);

//       // Get next screen and navigate
//       const nextScreen = getNextScreen('homescreens/info1');
//       console.log('Navigating to:', nextScreen);
      
//       // Use replace to prevent going back to info1
//       router.replace(nextScreen);
      
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       setIsSubmitting(false);
//     }
//   };

//   // Reset initialization when language changes
//   useEffect(() => {
//     setIsInitialized(false);
//   }, [language]);

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info1'))}
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
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.profileIconContainer}>
//           <View style={styles.profileContainer}>
//             <AntDesign name="user" size={32} color="white" />
//           </View>
//         </View>

//         <View style={styles.contentWrapper}>
//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.gridContainer}>
//             {profileData.map((item, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.gridItem,
//                   {
//                     backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
//                     borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
//                   }
//                 ]}
//                 onPress={() => handleProfileForSelect(item)}
//               >
//                 <Text style={[
//                   styles.itemText,
//                   { color: selectedProfileFor === item ? 'white' : '#495057' }
//                 ]}>
//                   {item}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {showGenderSelection && (
//             <>
//               <Text style={styles.subtitle}>{getGenderTitle(selectedProfileFor)}</Text>
//               <View style={styles.gridContainer}>
//                 {genderData.map((item, index) => (
//                   <TouchableOpacity
//                     key={index}
//                     style={[
//                       styles.gridItem,
//                       {
//                         backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
//                         borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
//                       }
//                     ]}
//                     onPress={() => handleGenderSelect(item)}
//                   >
//                     <Text style={[
//                       styles.itemText,
//                       { color: selectedGender === item ? 'white' : '#495057' }
//                     ]}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             </>
//           )}

//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.continueButton,
//               {
//                 backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF',
//                 opacity: isSubmitting ? 0.7 : 1
//               }
//             ]}
//             disabled={isButtonDisabled || isSubmitting}
//           >
//             {isSubmitting ? (
//               <ActivityIndicator color="white" />
//             ) : (
//               <Text style={styles.buttonText}>{translations.continue[language]}</Text>
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
//     backgroundColor: 'white',
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
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: 30,
//   },
//   contentWrapper: {
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   profileIconContainer: {
//     alignItems: 'center',
//     marginTop: 30,
//     marginBottom: 30,
//   },
//   profileContainer: {
//     backgroundColor: '#6C63FF',
//     borderRadius: 50,
//     width: 60,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//     marginBottom: 25,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#212529',
//     marginTop: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     width: '100%',
//     gap: 10,
//   },
//   gridItem: {
//     width: '48%',
//     borderWidth: 1,
//     borderRadius: 12,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: 60,
//   },
//   itemText: {
//     fontWeight: '500',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   continueButton: {
//     width: '100%',
//     maxWidth: 300,
//     padding: 18,
//     borderRadius: 30,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#6C63FF',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//   },
// });




//30/09/2025
// app/homescreens/info1.jsx
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { Gender, Profilefor, GenderHindi, ProfileforHindi } from '../../constant/Info';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfileNavigation } from '../utils/navigationHelper';

export default function Info1() {
  const [selectedProfileFor, setSelectedProfileFor] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [showGenderSelection, setShowGenderSelection] = useState(false);
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, setProfileFor, gender, setGender } = useProfile();
  const { saveUserProfile, userData, refreshUserData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load existing data - Fixed useEffect
  useEffect(() => {
    if (userData && !isInitialized) {
      console.log('Initializing with userData:', userData);
      
      if (userData.profileFor) {
        const profileValue = language === 'ENG' ? userData.profileFor : profileMappings[userData.profileFor];
        setSelectedProfileFor(profileValue);
        setProfileFor(userData.profileFor);
      }
      
      if (userData.gender) {
        const genderValue = language === 'ENG' ? userData.gender : (userData.gender === 'Male' ? 'पुरुष' : 'महिला');
        setSelectedGender(genderValue);
        setGender(userData.gender);
        
        // Show gender selection if needed
        const requiresGender = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
        if (userData.profileFor && requiresGender.includes(userData.profileFor)) {
          setShowGenderSelection(true);
        }
      }
      
      setIsInitialized(true);
    }
  }, [userData, language, isInitialized]);

  const profileMappings = {
    'MySelf': 'मैं खुद',
    'My Son': 'मेरा बेटा',
    'My Daughter': 'मेरी बेटी',
    'My Sister': 'मेरी बहन',
    'My Brother': 'मेरा भाई',
    'My Friend': 'मेरा दोस्त',
    'Cousin': 'मेरा चचेरा भाई',
    'My Relative': 'मेरा रिश्तेदार'
  };

  const reverseProfileMappings = Object.fromEntries(
    Object.entries(profileMappings).map(([key, value]) => [value, key])
  );

  const getGenderTitle = (profileFor) => {
    if (!profileFor) return "";
    
    const englishEquivalent = language === 'ENG' ? profileFor : reverseProfileMappings[profileFor];
    
    const titles = {
      ENG: {
        'MySelf': 'Your Gender',
        'My Friend': 'Your Friend\'s Gender',
        'Cousin': 'Your Cousin\'s Gender',
        'My Relative': 'Your Relative\'s Gender'
      },
      HI: {
        'MySelf': 'आपका लिंग',
        'My Friend': 'आपके दोस्त का लिंग',
        'Cousin': 'आपके चचेरे भाई का लिंग',
        'My Relative': 'आपके रिश्तेदार का लिंग'
      }
    };
    
    return titles[language][englishEquivalent] || titles[language]['MySelf'];
  };

  const handleProfileForSelect = useCallback((item) => {
    console.log('Profile selected:', item);
    setSelectedProfileFor(item);
    
    const englishEquivalent = language === 'ENG' ? item : reverseProfileMappings[item];
    setProfileFor(englishEquivalent);
    
    // Automatically set gender for specific cases
    switch(englishEquivalent) {
      case 'My Son':
      case 'My Brother':
        const maleGender = language === 'ENG' ? 'Male' : 'पुरुष';
        setSelectedGender(maleGender);
        setGender('Male');
        setShowGenderSelection(false);
        break;
      case 'My Daughter':
      case 'My Sister':
        const femaleGender = language === 'ENG' ? 'Female' : 'महिला';
        setSelectedGender(femaleGender);
        setGender('Female');
        setShowGenderSelection(false);
        break;
      case 'MySelf':
      case 'My Friend':
      case 'Cousin':
      case 'My Relative':
        setSelectedGender(null);
        setGender(null);
        setShowGenderSelection(true);
        break;
      default:
        setSelectedGender(null);
        setGender(null);
        setShowGenderSelection(false);
    }
  }, [language, setProfileFor, setGender]);

  const handleGenderSelect = useCallback((item) => {
    console.log('Gender selected:', item);
    setSelectedGender(item);
    const englishGender = language === 'ENG' ? item : (item === 'पुरुष' ? 'Male' : 'Female');
    setGender(englishGender);
  }, [language, setGender]);

  const requiresGenderSelection = ['MySelf', 'My Friend', 'Cousin', 'My Relative'];
  const currentSelectionEnglish = language === 'ENG' 
    ? selectedProfileFor 
    : selectedProfileFor ? reverseProfileMappings[selectedProfileFor] : null;

  const isButtonDisabled = !selectedProfileFor || 
    (requiresGenderSelection.includes(currentSelectionEnglish) && !selectedGender);

  const translations = {
    title: {
      ENG: "This Profile is for",
      HI: "यह प्रोफाइल किसके लिए है"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    }
  };

  const profileData = language === 'ENG' ? Profilefor : ProfileforHindi;
  const genderData = language === 'ENG' ? Gender : GenderHindi;

  const handleContinue = async () => {
    if (isButtonDisabled || isSubmitting) return;
    
    try {
      console.log('Continuing to next screen...');
      setIsSubmitting(true);
      
      const profileForEnglish = language === 'ENG' ? selectedProfileFor : reverseProfileMappings[selectedProfileFor];
      const genderEnglish = language === 'ENG' ? selectedGender : (selectedGender === 'पुरुष' ? 'Male' : 'Female');
      
      // Save initial profile data
      await saveUserProfile({
        profileFor: profileForEnglish,
        gender: genderEnglish,
      }, 1);

      // Direct navigation to info2 to avoid double-click issue
      const nextScreen = 'homescreens/info2';
      console.log('Navigating to:', nextScreen);
      
      // Use replace to prevent going back to info1
      router.replace(nextScreen);
      
    } catch (error) {
      console.error('Error saving profile:', error);
      setIsSubmitting(false);
    }
  };

  // Reset initialization when language changes
  useEffect(() => {
    setIsInitialized(false);
  }, [language]);

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info1'))}
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
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileIconContainer}>
          <View style={styles.profileContainer}>
            <AntDesign name="user" size={32} color="white" />
          </View>
        </View>

        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{translations.title[language]}</Text>

          <View style={styles.gridContainer}>
            {profileData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.gridItem,
                  { 
                    backgroundColor: selectedProfileFor === item ? '#6C63FF' : '#F8F9FA',
                    borderColor: selectedProfileFor === item ? '#6C63FF' : '#E9ECEF',
                  }
                ]}
                onPress={() => handleProfileForSelect(item)}
              >
                <Text style={[
                  styles.itemText,
                  { color: selectedProfileFor === item ? 'white' : '#495057' }
                ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {showGenderSelection && (
            <>
              <Text style={styles.subtitle}>{getGenderTitle(selectedProfileFor)}</Text>
              <View style={styles.gridContainer}>
                {genderData.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.gridItem,
                      { 
                        backgroundColor: selectedGender === item ? '#6C63FF' : '#F8F9FA',
                        borderColor: selectedGender === item ? '#6C63FF' : '#E9ECEF',
                      }
                    ]}
                    onPress={() => handleGenderSelect(item)}
                  >
                    <Text style={[
                      styles.itemText,
                      { color: selectedGender === item ? 'white' : '#495057' }
                    ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          <TouchableOpacity
            onPress={handleContinue}
            style={[
              styles.continueButton,
              { 
                backgroundColor: isButtonDisabled ? '#ADB5BD' : '#6C63FF',
                opacity: isSubmitting ? 0.7 : 1
              }
            ]}
            disabled={isButtonDisabled || isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>{translations.continue[language]}</Text>
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
    backgroundColor: 'white',
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  contentWrapper: {
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  profileIconContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  profileContainer: {
    backgroundColor: '#6C63FF',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 25,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#212529',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
  },
  gridItem: {
    width: '48%',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 60,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  continueButton: {
    width: '100%',
    maxWidth: 300,
    padding: 18,
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});