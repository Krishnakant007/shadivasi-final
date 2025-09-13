
// // app/homescreens/info5.jsx
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
// import Feather from '@expo/vector-icons/Feather';
// import { Diet, Height, MaritalStatus } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import Slider from '@react-native-community/slider';
// import Animated from 'react-native-reanimated';
// import { useLanguage } from '../context/LanguageContext';
// import { useState } from 'react';

// export default function Info5() {
//   const router = useRouter();
//   const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState(Height[0]);
//   const [selectedDiet, setSelectedDiet] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
//   const { language, toggleLanguage, translateX } = useLanguage();

//   // Translations
//   const translations = {
//     maritalStatus: {
//       ENG: "Marital Status",
//       HI: "वैवाहिक स्थिति"
//     },
//     height: {
//       ENG: "Height",
//       HI: "ऊंचाई"
//     },
//     diet: {
//       ENG: "Diet",
//       HI: "आहार"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     heightScale: {
//       ENG: ["4'10\"", "6'5\""],
//       HI: ["4'10\"", "6'5\""]
//     },
//     maritalStatusOptions: {
//       ENG: MaritalStatus,
//       HI: ["अविवाहित", "विवाहित", "तलाकशुदा", "विधुर"]
//     },
//     dietOptions: {
//       ENG: Diet,
//       HI: ["शाकाहारी", "मांसाहारी", "शाकाहारी (अंडे सहित)", "वीगन"]
//     }
//   };

//   const isButtonDisabled = !selectedMaritalStatus || !selectedHeight || !selectedDiet;

//   const handleSliderChange = (value) => {
//     const index = Math.round(value);
//     setSliderValue(index);
//     setSelectedHeight(Height[index]);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle */}
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
//           </Animated.View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <Feather name="user-check" size={40} color="white" />
//           </View>

//           <Text style={styles.title}>{translations.maritalStatus[language]}</Text>
          
//           {/* Marital Status Options */}
//           <View style={styles.optionsGrid}>
//             {translations.maritalStatusOptions[language].map((status, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedMaritalStatus(MaritalStatus[index])}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOptionText
//                 ]}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.sectionTitle}>{translations.height[language]}</Text>
          
//           {/* Enhanced Height Selection */}
//           <View style={styles.heightCard}>
//             <View style={styles.heightDisplay}>
//               <Text style={styles.heightFeetText}>{selectedHeight.heightInFeet}</Text>
//               <Text style={styles.heightCmText}>{selectedHeight.heightInCm} cm</Text>
//             </View>
            
//             <View style={styles.sliderContainer}>
//               <Slider
//                 style={styles.slider}
//                 minimumValue={0}
//                 maximumValue={Height.length - 1}
//                 step={1}
//                 value={sliderValue}
//                 onValueChange={handleSliderChange}
//                 minimumTrackTintColor="#e59bf2"
//                 maximumTrackTintColor="#f0f0f0"
//                 thumbTintColor="#e59bf2"
//               />
              
//               <View style={styles.heightScale}>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][0]}</Text>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][1]}</Text>
//               </View>
//             </View>
//           </View>

//           <Text style={styles.sectionTitle}>{translations.diet[language]}</Text>
          
//           {/* Diet Options */}
//           <View style={styles.optionsGrid}>
//             {translations.dietOptions[language].map((diet, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedDiet === Diet[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedDiet(Diet[index])}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedDiet === Diet[index] && styles.selectedOptionText
//                 ]}>
//                   {diet}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Continue Button (now part of scroll flow) */}
//           <TouchableOpacity
//             onPress={() => router.push('homescreens/info6')}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#e59bf2' }
//             ]}
//             disabled={isButtonDisabled}
//           >
//             <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     paddingBottom: 40,
//   },
//   contentContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
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
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#e59bf2',
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
//     marginBottom: 20,
//     color: '#333'
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 25,
//     marginBottom: 15,
//     color: '#555',
//     paddingLeft: 5
//   },
//   optionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   optionButton: {
//     width: '48%',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#e59bf2',
//     borderColor: '#d47fe6',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#495057',
//     textAlign: 'center',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: '600'
//   },
//   heightCard: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   heightDisplay: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'baseline',
//     marginBottom: 20,
//   },
//   heightFeetText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#333',
//     marginRight: 10,
//     fontFamily: 'sans-serif-condensed',
//   },
//   heightCmText: {
//     fontSize: 18,
//     color: '#6c757d',
//     fontFamily: 'sans-serif',
//   },
//   sliderContainer: {
//     marginHorizontal: 5,
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//   },
//   heightScale: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//     paddingHorizontal: 5,
//   },
//   scaleText: {
//     fontSize: 14,
//     color: '#adb5bd',
//     fontFamily: 'sans-serif',
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 18,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });















// // app/homescreens/info5.jsx
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
// import Feather from '@expo/vector-icons/Feather';
// import { Diet, Height, MaritalStatus } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import Slider from '@react-native-community/slider';
// import Animated from 'react-native-reanimated';
// import { useLanguage } from '../context/LanguageContext';
// import { useState } from 'react';
// import { useProfile } from '../context/ProfileContext';

// export default function Info5() {
//   const router = useRouter();
//   const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState(Height[0]);
//   const [selectedDiet, setSelectedDiet] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();

//   const translations = {
//     maritalStatus: {
//       ENG: `${getPrefix()} Marital Status`,
//       HI: profileFor === 'MySelf' ? "आपकी वैवाहिक स्थिति" :
//         profileFor === 'My Son' ? "आपके बेटे की वैवाहिक स्थिति" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की वैवाहिक स्थिति" :
//         profileFor === 'My Sister' ? "आपकी बहन की वैवाहिक स्थिति" :
//         profileFor === 'My Brother' ? "आपके भाई की वैवाहिक स्थिति" :
//         profileFor === 'My Friend' ? "आपके दोस्त की वैवाहिक स्थिति" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की वैवाहिक स्थिति" :
//         "आपके रिश्तेदार की वैवाहिक स्थिति"
//     },
//     height: {
//       ENG: `${getPrefix()} Height`,
//       HI: profileFor === 'MySelf' ? "आपकी ऊंचाई" :
//         profileFor === 'My Son' ? "आपके बेटे की ऊंचाई" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की ऊंचाई" :
//         profileFor === 'My Sister' ? "आपकी बहन की ऊंचाई" :
//         profileFor === 'My Brother' ? "आपके भाई की ऊंचाई" :
//         profileFor === 'My Friend' ? "आपके दोस्त की ऊंचाई" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की ऊंचाई" :
//         "आपके रिश्तेदार की ऊंचाई"
//     },
//     diet: {
//       ENG: `${getPrefix()} Diet`,
//       HI: profileFor === 'MySelf' ? "आपका आहार" :
//         profileFor === 'My Son' ? "आपके बेटे का आहार" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का आहार" :
//         profileFor === 'My Sister' ? "आपकी बहन का आहार" :
//         profileFor === 'My Brother' ? "आपके भाई का आहार" :
//         profileFor === 'My Friend' ? "आपके दोस्त का आहार" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का आहार" :
//         "आपके रिश्तेदार का आहार"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     heightScale: {
//       ENG: ["4'10\"", "6'5\""],
//       HI: ["4'10\"", "6'5\""]
//     },
//     maritalStatusOptions: {
//       ENG: MaritalStatus,
//       HI: ["अविवाहित", "विवाहित", "तलाकशुदा", "विधुर"]
//     },
//     dietOptions: {
//       ENG: Diet,
//       HI: ["शाकाहारी", "मांसाहारी", "शाकाहारी (अंडे सहित)", "वीगन"]
//     }
//   };

//   const isButtonDisabled = !selectedMaritalStatus || !selectedHeight || !selectedDiet;

//   const handleSliderChange = (value) => {
//     const index = Math.round(value);
//     setSliderValue(index);
//     setSelectedHeight(Height[index]);
//   };

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle */}
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
//           </Animated.View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <Feather name="user-check" size={40} color="white" />
//           </View>

//           <Text style={styles.title}>{translations.maritalStatus[language]}</Text>
          
//           {/* Marital Status Options */}
//           <View style={styles.optionsGrid}>
//             {translations.maritalStatusOptions[language].map((status, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedMaritalStatus(MaritalStatus[index])}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOptionText
//                 ]}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.sectionTitle}>{translations.height[language]}</Text>
          
//           {/* Enhanced Height Selection */}
//           <View style={styles.heightCard}>
//             <View style={styles.heightDisplay}>
//               <Text style={styles.heightFeetText}>{selectedHeight.heightInFeet}</Text>
//               <Text style={styles.heightCmText}>{selectedHeight.heightInCm} cm</Text>
//             </View>
            
//             <View style={styles.sliderContainer}>
//               <Slider
//                 style={styles.slider}
//                 minimumValue={0}
//                 maximumValue={Height.length - 1}
//                 step={1}
//                 value={sliderValue}
//                 onValueChange={handleSliderChange}
//                 minimumTrackTintColor="#e59bf2"
//                 maximumTrackTintColor="#f0f0f0"
//                 thumbTintColor="#e59bf2"
//               />
              
//               <View style={styles.heightScale}>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][0]}</Text>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][1]}</Text>
//               </View>
//             </View>
//           </View>

//           <Text style={styles.sectionTitle}>{translations.diet[language]}</Text>
          
//           {/* Diet Options */}
//           <View style={styles.optionsGrid}>
//             {translations.dietOptions[language].map((diet, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedDiet === Diet[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedDiet(Diet[index])}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedDiet === Diet[index] && styles.selectedOptionText
//                 ]}>
//                   {diet}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Continue Button (now part of scroll flow) */}
//           <TouchableOpacity
//             onPress={() => router.push('homescreens/info6')}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#e59bf2' }
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
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     paddingBottom: 40,
//   },
//   contentContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
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
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#e59bf2',
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
//     marginBottom: 20,
//     color: '#333'
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 25,
//     marginBottom: 15,
//     color: '#555',
//     paddingLeft: 5
//   },
//   optionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   optionButton: {
//     width: '48%',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#e59bf2',
//     borderColor: '#d47fe6',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#495057',
//     textAlign: 'center',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: '600'
//   },
//   heightCard: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   heightDisplay: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'baseline',
//     marginBottom: 20,
//   },
//   heightFeetText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#333',
//     marginRight: 10,
//     fontFamily: 'sans-serif-condensed',
//   },
//   heightCmText: {
//     fontSize: 18,
//     color: '#6c757d',
//     fontFamily: 'sans-serif',
//   },
//   sliderContainer: {
//     marginHorizontal: 5,
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//   },
//   heightScale: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//     paddingHorizontal: 5,
//   },
//   scaleText: {
//     fontSize: 14,
//     color: '#adb5bd',
//     fontFamily: 'sans-serif',
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 18,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });












// app/homescreens/info5.jsx
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
// import Feather from '@expo/vector-icons/Feather';
// import { Diet, Height, MaritalStatus } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import Slider from '@react-native-community/slider';
// import Animated from 'react-native-reanimated';
// import { useLanguage } from '../context/LanguageContext';
// import { useState } from 'react';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info5() {
//   const router = useRouter();
//   const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState(Height[0]);
//   const [selectedDiet, setSelectedDiet] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();

//   const translations = {
//     maritalStatus: {
//       ENG: `${getPrefix()} Marital Status`,
//       HI: profileFor === 'MySelf' ? "आपकी वैवाहिक स्थिति" :
//         profileFor === 'My Son' ? "आपके बेटे की वैवाहिक स्थिति" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की वैवाहिक स्थिति" :
//         profileFor === 'My Sister' ? "आपकी बहन की वैवाहिक स्थिति" :
//         profileFor === 'My Brother' ? "आपके भाई की वैवाहिक स्थिति" :
//         profileFor === 'My Friend' ? "आपके दोस्त की वैवाहिक स्थिति" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की वैवाहिक स्थिति" :
//         "आपके रिश्तेदार की वैवाहिक स्थिति"
//     },
//     height: {
//       ENG: `${getPrefix()} Height`,
//       HI: profileFor === 'MySelf' ? "आपकी ऊंचाई" :
//         profileFor === 'My Son' ? "आपके बेटे की ऊंचाई" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की ऊंचाई" :
//         profileFor === 'My Sister' ? "आपकी बहन की ऊंचाई" :
//         profileFor === 'My Brother' ? "आपके भाई की ऊंचाई" :
//         profileFor === 'My Friend' ? "आपके दोस्त की ऊंचाई" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की ऊंचाई" :
//         "आपके रिश्तेदार की ऊंचाई"
//     },
//     diet: {
//       ENG: `${getPrefix()} Diet`,
//       HI: profileFor === 'MySelf' ? "आपका आहार" :
//         profileFor === 'My Son' ? "आपके बेटे का आहार" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का आहार" :
//         profileFor === 'My Sister' ? "आपकी बहन का आहार" :
//         profileFor === 'My Brother' ? "आपके भाई का आहार" :
//         profileFor === 'My Friend' ? "आपके दोस्त का आहार" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का आहार" :
//         "आपके रिश्तेदार का आहार"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     heightScale: {
//       ENG: ["4'10\"", "6'5\""],
//       HI: ["4'10\"", "6'5\""]
//     },
//     maritalStatusOptions: {
//       ENG: MaritalStatus,
//       HI: ["अविवाहित", "विवाहित", "तलाकशुदा", "विधुर"]
//     },
//     dietOptions: {
//       ENG: Diet,
//       HI: ["शाकाहारी", "मांसाहारी", "शाकाहारी (अंडे सहित)", "वीगन"]
//     }
//   };

//   const isButtonDisabled = !selectedMaritalStatus || !selectedHeight || !selectedDiet;

//   const handleSliderChange = (value) => {
//     const index = Math.round(value);
//     setSliderValue(index);
//     setSelectedHeight(Height[index]);
//   };

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare profile data
//       const profileData = {
//         ...userData,
//         maritalStatus: selectedMaritalStatus,
//         height: {
//           feet: selectedHeight.heightInFeet,
//           cm: selectedHeight.heightInCm,
//           value: selectedHeight.value
//         },
//         diet: selectedDiet,
//         profileProgress: 50, // Update progress to 50%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info6');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       // Here you could add error state and display to user
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle */}
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
//           </Animated.View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       {isLoading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#e59bf2" />
//         </View>
//       )}

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <Feather name="user-check" size={40} color="white" />
//           </View>

//           <Text style={styles.title}>{translations.maritalStatus[language]}</Text>
          
//           {/* Marital Status Options */}
//           <View style={styles.optionsGrid}>
//             {translations.maritalStatusOptions[language].map((status, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedMaritalStatus(MaritalStatus[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOptionText
//                 ]}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.sectionTitle}>{translations.height[language]}</Text>
          
//           {/* Enhanced Height Selection */}
//           <View style={styles.heightCard}>
//             <View style={styles.heightDisplay}>
//               <Text style={styles.heightFeetText}>{selectedHeight.heightInFeet}</Text>
//               <Text style={styles.heightCmText}>{selectedHeight.heightInCm} cm</Text>
//             </View>
            
//             <View style={styles.sliderContainer}>
//               <Slider
//                 style={styles.slider}
//                 minimumValue={0}
//                 maximumValue={Height.length - 1}
//                 step={1}
//                 value={sliderValue}
//                 onValueChange={handleSliderChange}
//                 minimumTrackTintColor="#e59bf2"
//                 maximumTrackTintColor="#f0f0f0"
//                 thumbTintColor="#e59bf2"
//                 disabled={isLoading}
//               />
              
//               <View style={styles.heightScale}>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][0]}</Text>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][1]}</Text>
//               </View>
//             </View>
//           </View>

//           <Text style={styles.sectionTitle}>{translations.diet[language]}</Text>
          
//           {/* Diet Options */}
//           <View style={styles.optionsGrid}>
//             {translations.dietOptions[language].map((diet, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedDiet === Diet[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedDiet(Diet[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedDiet === Diet[index] && styles.selectedOptionText
//                 ]}>
//                   {diet}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Continue Button */}
//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#e59bf2' }
//             ]}
//             disabled={isButtonDisabled || isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
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
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: 40,
//   },
//   contentContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
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
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#e59bf2',
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
//     marginBottom: 20,
//     color: '#333'
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 25,
//     marginBottom: 15,
//     color: '#555',
//     paddingLeft: 5
//   },
//   optionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   optionButton: {
//     width: '48%',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#e59bf2',
//     borderColor: '#d47fe6',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#495057',
//     textAlign: 'center',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: '600'
//   },
//   heightCard: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   heightDisplay: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'baseline',
//     marginBottom: 20,
//   },
//   heightFeetText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#333',
//     marginRight: 10,
//     fontFamily: 'sans-serif-condensed',
//   },
//   heightCmText: {
//     fontSize: 18,
//     color: '#6c757d',
//     fontFamily: 'sans-serif',
//   },
//   sliderContainer: {
//     marginHorizontal: 5,
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//   },
//   heightScale: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//     paddingHorizontal: 5,
//   },
//   scaleText: {
//     fontSize: 14,
//     color: '#adb5bd',
//     fontFamily: 'sans-serif',
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 18,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });










//trail2







// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
// import Feather from '@expo/vector-icons/Feather';
// import { Diet, Height, MaritalStatus } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import Slider from '@react-native-community/slider';
// import Animated from 'react-native-reanimated';
// import { useLanguage } from '../context/LanguageContext';
// import { useState, useRef } from 'react';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info5() {
//   const router = useRouter();
//   const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState(Height[0].heightInFeet); // Store as string
//   const [selectedDiet, setSelectedDiet] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const sliderRef = useRef(null);

//   const translations = {
//     maritalStatus: {
//       ENG: `${getPrefix()} Marital Status`,
//       HI: profileFor === 'MySelf' ? "आपकी वैवाहिक स्थिति" :
//         profileFor === 'My Son' ? "आपके बेटे की वैवाहिक स्थिति" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की वैवाहिक स्थिति" :
//         profileFor === 'My Sister' ? "आपकी बहन की वैवाहिक स्थिति" :
//         profileFor === 'My Brother' ? "आपके भाई की वैवाहिक स्थिति" :
//         profileFor === 'My Friend' ? "आपके दोस्त की वैवाहिक स्थिति" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की वैवाहिक स्थिति" :
//         "आपके रिश्तेदार की वैवाहिक स्थिति"
//     },
//     height: {
//       ENG: `${getPrefix()} Height`,
//       HI: profileFor === 'MySelf' ? "आपकी ऊंचाई" :
//         profileFor === 'My Son' ? "आपके बेटे की ऊंचाई" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की ऊंचाई" :
//         profileFor === 'My Sister' ? "आपकी बहन की ऊंचाई" :
//         profileFor === 'My Brother' ? "आपके भाई की ऊंचाई" :
//         profileFor === 'My Friend' ? "आपके दोस्त की ऊंचाई" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की ऊंचाई" :
//         "आपके रिश्तेदार की ऊंचाई"
//     },
//     diet: {
//       ENG: `${getPrefix()} Diet`,
//       HI: profileFor === 'MySelf' ? "आपका आहार" :
//         profileFor === 'My Son' ? "आपके बेटे का आहार" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का आहार" :
//         profileFor === 'My Sister' ? "आपकी बहन का आहार" :
//         profileFor === 'My Brother' ? "आपके भाई का आहार" :
//         profileFor === 'My Friend' ? "आपके दोस्त का आहार" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का आहार" :
//         "आपके रिश्तेदार का आहार"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     heightScale: {
//       ENG: ["4'10\"", "6'5\""],
//       HI: ["4'10\"", "6'5\""]
//     },
//     maritalStatusOptions: {
//       ENG: MaritalStatus,
//       HI: ["अविवाहित", "विवाहित", "तलाकशुदा", "विधुर"]
//     },
//     dietOptions: {
//       ENG: Diet,
//       HI: ["शाकाहारी", "मांसाहारी", "शाकाहारी (अंडे सहित)", "वीगन"]
//     }
//   };

//   const isButtonDisabled = !selectedMaritalStatus || !selectedHeight || !selectedDiet;

//   const handleSliderChange = (value) => {
//     const index = Math.round(value);
//     setSliderValue(index);
//     setSelectedHeight(Height[index].heightInFeet);
//   };

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       // Get the cm value for the selected height
//       const selectedHeightData = Height.find(h => h.heightInFeet === selectedHeight);
      
//       // Prepare profile data with height as string
//       const profileData = {
//         ...userData,
//         maritalStatus: selectedMaritalStatus,
//         height: selectedHeight, // Stored as string like "5'9"
//         heightInCm: selectedHeightData?.heightInCm || 0, // Store cm as number
//         diet: selectedDiet,
//         profileProgress: 50,
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info6');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Find the cm value for display
//   const selectedHeightCm = Height.find(h => h.heightInFeet === selectedHeight)?.heightInCm || '';

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle */}
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
//           </Animated.View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       {isLoading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#e59bf2" />
//         </View>
//       )}

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <Feather name="user-check" size={40} color="white" />
//           </View>

//           <Text style={styles.title}>{translations.maritalStatus[language]}</Text>
          
//           {/* Marital Status Options */}
//           <View style={styles.optionsGrid}>
//             {translations.maritalStatusOptions[language].map((status, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedMaritalStatus(MaritalStatus[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOptionText
//                 ]}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.sectionTitle}>{translations.height[language]}</Text>
          
//           {/* Height Selection */}
//           <View style={styles.heightCard}>
//             <View style={styles.heightDisplay}>
//               <Text style={styles.heightFeetText}>{selectedHeight}</Text>
//               <Text style={styles.heightCmText}>{selectedHeightCm} cm</Text>
//             </View>
            
//             <View style={styles.sliderContainer}>
//               <Slider
//                 ref={sliderRef}
//                 style={styles.slider}
//                 minimumValue={0}
//                 maximumValue={Height.length - 1}
//                 step={1}
//                 value={sliderValue}
//                 onValueChange={handleSliderChange}
//                 minimumTrackTintColor="#e59bf2"
//                 maximumTrackTintColor="#f0f0f0"
//                 thumbTintColor="#e59bf2"
//                 disabled={isLoading}
//               />
              
//               <View style={styles.heightScale}>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][0]}</Text>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][1]}</Text>
//               </View>
//             </View>
//           </View>

//           <Text style={styles.sectionTitle}>{translations.diet[language]}</Text>
          
//           {/* Diet Options */}
//           <View style={styles.optionsGrid}>
//             {translations.dietOptions[language].map((diet, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedDiet === Diet[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedDiet(Diet[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedDiet === Diet[index] && styles.selectedOptionText
//                 ]}>
//                   {diet}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Continue Button */}
//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#e59bf2' }
//             ]}
//             disabled={isButtonDisabled || isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
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
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: 40,
//   },
//   contentContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
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
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#e59bf2',
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
//     marginBottom: 20,
//     color: '#333'
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 25,
//     marginBottom: 15,
//     color: '#555',
//     paddingLeft: 5
//   },
//   optionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   optionButton: {
//     width: '48%',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#e59bf2',
//     borderColor: '#d47fe6',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#495057',
//     textAlign: 'center',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: '600'
//   },
//   heightCard: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   heightDisplay: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'baseline',
//     marginBottom: 20,
//   },
//   heightFeetText: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#333',
//     marginRight: 10,
//     fontFamily: 'sans-serif-condensed',
//   },
//   heightCmText: {
//     fontSize: 18,
//     color: '#6c757d',
//     fontFamily: 'sans-serif',
//   },
//   sliderContainer: {
//     marginHorizontal: 5,
//   },
//   slider: {
//     width: '100%',
//     height: 40,
//   },
//   heightScale: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 8,
//     paddingHorizontal: 5,
//   },
//   scaleText: {
//     fontSize: 14,
//     color: '#adb5bd',
//     fontFamily: 'sans-serif',
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 18,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });






//19/08/2025

// // app/homescreens/info5.jsx
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
// import Feather from '@expo/vector-icons/Feather';
// import { Diet, Height, MaritalStatus } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import Slider from '@react-native-community/slider';
// import Animated from 'react-native-reanimated';
// import { useLanguage } from '../context/LanguageContext';
// import { useState, useRef } from 'react';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info5() {
//   const router = useRouter();
//   const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState(Height[0].heightInFeet);
//   const [selectedDiet, setSelectedDiet] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const sliderRef = useRef(null);

//   const translations = {
//     maritalStatus: {
//       ENG: `${getPrefix()} Marital Status`,
//       HI: profileFor === 'MySelf' ? "आपकी वैवाहिक स्थिति" :
//         profileFor === 'My Son' ? "आपके बेटे की वैवाहिक स्थिति" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की वैवाहिक स्थिति" :
//         profileFor === 'My Sister' ? "आपकी बहन की वैवाहिक स्थिति" :
//         profileFor === 'My Brother' ? "आपके भाई की वैवाहिक स्थिति" :
//         profileFor === 'My Friend' ? "आपके दोस्त की वैवाहिक स्थिति" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की वैवाहिक स्थिति" :
//         "आपके रिश्तेदार की वैवाहिक स्थिति"
//     },
//     height: {
//       ENG: `${getPrefix()} Height`,
//       HI: profileFor === 'MySelf' ? "आपकी ऊंचाई" :
//         profileFor === 'My Son' ? "आपके बेटे की ऊंचाई" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की ऊंचाई" :
//         profileFor === 'My Sister' ? "आपकी बहन की ऊंचाई" :
//         profileFor === 'My Brother' ? "आपके भाई की ऊंचाई" :
//         profileFor === 'My Friend' ? "आपके दोस्त की ऊंचाई" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की ऊंचाई" :
//         "आपके रिश्तेदार की ऊंचाई"
//     },
//     diet: {
//       ENG: `${getPrefix()} Diet`,
//       HI: profileFor === 'MySelf' ? "आपका आहार" :
//         profileFor === 'My Son' ? "आपके बेटे का आहार" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का आहार" :
//         profileFor === 'My Sister' ? "आपकी बहन का आहार" :
//         profileFor === 'My Brother' ? "आपके भाई का आहार" :
//         profileFor === 'My Friend' ? "आपके दोस्त का आहार" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का आहार" :
//         "आपके रिश्तेदार का आहार"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     heightScale: {
//       ENG: ["4'10\"", "6'5\""],
//       HI: ["4'10\"", "6'5\""]
//     },
//     maritalStatusOptions: {
//       ENG: MaritalStatus,
//       HI: ["अविवाहित", "विवाहित", "तलाकशुदा", "विधुर"]
//     },
//     dietOptions: {
//       ENG: Diet,
//       HI: ["शाकाहारी", "मांसाहारी", "शाकाहारी (अंडे सहित)", "वीगन"]
//     }
//   };

//   const isButtonDisabled = !selectedMaritalStatus || !selectedHeight || !selectedDiet;

//   const handleSliderChange = (value) => {
//     const index = Math.round(value);
//     setSliderValue(index);
//     setSelectedHeight(Height[index].heightInFeet);
//   };

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       const selectedHeightData = Height.find(h => h.heightInFeet === selectedHeight);
      
//       const profileData = {
//         ...userData,
//         maritalStatus: selectedMaritalStatus,
//         height: selectedHeight,
//         heightInCm: selectedHeightData?.heightInCm || 0,
//         diet: selectedDiet,
//         profileProgress: 50,
//         updatedAt: serverTimestamp()
//       };

//       await saveUserProfile(profileData);
//       router.push('homescreens/info6');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const selectedHeightCm = Height.find(h => h.heightInFeet === selectedHeight)?.heightInCm || '';

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle */}
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
//           </Animated.View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       {isLoading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#e59bf2" />
//         </View>
//       )}

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <Feather name="user-check" size={40} color="white" />
//           </View>

//           <Text style={styles.title}>{translations.maritalStatus[language]}</Text>
          
//           {/* Marital Status Options */}
//           <View style={styles.optionsGrid}>
//             {translations.maritalStatusOptions[language].map((status, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedMaritalStatus(MaritalStatus[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOptionText
//                 ]}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.sectionTitle}>{translations.height[language]}</Text>
          
//           {/* New Height Selection UI */}
//           <View style={styles.heightContainer}>
//             <View style={styles.heightDisplay}>
//               <View style={styles.heightValueContainer}>
//                 <Text style={styles.heightFeetText}>{selectedHeight}</Text>
//                 <Text style={styles.heightCmText}>{selectedHeightCm} cm</Text>
//               </View>
//             </View>
            
//             <View style={styles.sliderWrapper}>
//               <Slider
//                 ref={sliderRef}
//                 style={styles.slider}
//                 minimumValue={0}
//                 maximumValue={Height.length - 1}
//                 step={1}
//                 value={sliderValue}
//                 onValueChange={handleSliderChange}
//                 minimumTrackTintColor="#e59bf2"
//                 maximumTrackTintColor="#f0f0f0"
//                 thumbTintColor="#e59bf2"
//                 disabled={isLoading}
//               />
              
//               <View style={styles.heightScale}>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][0]}</Text>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][1]}</Text>
//               </View>
//             </View>
//           </View>

//           <Text style={styles.sectionTitle}>{translations.diet[language]}</Text>
          
//           {/* Diet Options */}
//           <View style={styles.optionsGrid}>
//             {translations.dietOptions[language].map((diet, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedDiet === Diet[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedDiet(Diet[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedDiet === Diet[index] && styles.selectedOptionText
//                 ]}>
//                   {diet}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Continue Button */}
//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#e59bf2' }
//             ]}
//             disabled={isButtonDisabled || isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
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
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   scrollContent: {
//     paddingBottom: 40,
//   },
//   contentContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
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
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#e59bf2',
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
//     marginBottom: 20,
//     color: '#333'
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 25,
//     marginBottom: 15,
//     color: '#555',
//     paddingLeft: 5
//   },
//   optionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   optionButton: {
//     width: '48%',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#e59bf2',
//     borderColor: '#d47fe6',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#495057',
//     textAlign: 'center',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: '600'
//   },
//   // New Height UI Styles
//   heightContainer: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   heightDisplay: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   heightValueContainer: {
//     alignItems: 'center',
//   },
//   heightFeetText: {
//     fontSize: 42,
//     fontWeight: 'bold',
//     color: '#333',
//     fontFamily: 'sans-serif-condensed',
//     marginBottom: 5,
//   },
//   heightCmText: {
//     fontSize: 18,
//     color: '#6c757d',
//     fontFamily: 'sans-serif',
//   },
//   sliderWrapper: {
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   slider: {
//     width: '100%',
//     height: 50,
//   },
//   heightScale: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 5,
//     paddingHorizontal: 5,
//   },
//   scaleText: {
//     fontSize: 14,
//     color: '#adb5bd',
//     fontFamily: 'sans-serif',
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 18,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });





//23/08/2025

//info5.jsx
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native';
// import Feather from '@expo/vector-icons/Feather';
// import { Diet, Height, MaritalStatus } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import Slider from '@react-native-community/slider';
// import Animated from 'react-native-reanimated';
// import { useLanguage } from '../context/LanguageContext';
// import { useState, useRef } from 'react';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useProfileNavigation } from '../utils/navigationHelper';
// import { useEffect } from 'react';

// export default function Info5() {
//   const router = useRouter();
//   const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
//   const [selectedHeight, setSelectedHeight] = useState(Height[0].heightInFeet);
//   const [selectedDiet, setSelectedDiet] = useState(null);
//   const [sliderValue, setSliderValue] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const sliderRef = useRef(null);

//   // Load existing data
//   useEffect(() => {
//     if (userData) {
//       if (userData.maritalStatus) {
//         setSelectedMaritalStatus(userData.maritalStatus);
//       }
//       if (userData.height) {
//         setSelectedHeight(userData.height);
//         const heightIndex = Height.findIndex(h => h.heightInFeet === userData.height);
//         if (heightIndex !== -1) {
//           setSliderValue(heightIndex);
//         }
//       }
//       if (userData.diet) {
//         setSelectedDiet(userData.diet);
//       }
//     }
//   }, [userData]);

//   const translations = {
//     maritalStatus: {
//       ENG: `${getPrefix()} Marital Status`,
//       HI: profileFor === 'MySelf' ? "आपकी वैवाहिक स्थिति" :
//         profileFor === 'My Son' ? "आपके बेटे की वैवाहिक स्थिति" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की वैवाहिक स्थिति" :
//         profileFor === 'My Sister' ? "आपकी बहन की वैवाहिक स्थिति" :
//         profileFor === 'My Brother' ? "आपके भाई की वैवाहिक स्थिति" :
//         profileFor === 'My Friend' ? "आपके दोस्त की वैवाहिक स्थिति" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की वैवाहिक स्थिति" :
//         "आपके रिश्तेदार की वैवाहिक स्थिति"
//     },
//     height: {
//       ENG: `${getPrefix()} Height`,
//       HI: profileFor === 'MySelf' ? "आपकी ऊंचाई" :
//         profileFor === 'My Son' ? "आपके बेटे की ऊंचाई" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की ऊंचाई" :
//         profileFor === 'My Sister' ? "आपकी बहन की ऊंचाई" :
//         profileFor === 'My Brother' ? "आपके भाई की ऊंचाई" :
//         profileFor === 'My Friend' ? "आपके दोस्त की ऊंचाई" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की ऊंचाई" :
//         "आपके रिश्तेदार की ऊंचाई"
//     },
//     diet: {
//       ENG: `${getPrefix()} Diet`,
//       HI: profileFor === 'MySelf' ? "आपका आहार" :
//         profileFor === 'My Son' ? "आपके बेटे का आहार" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का आहार" :
//         profileFor === 'My Sister' ? "आपकी बहन का आहार" :
//         profileFor === 'My Brother' ? "आपके भाई का आहार" :
//         profileFor === 'My Friend' ? "आपके दोस्त का आहार" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का आहार" :
//         "आपके रिश्तेदार का आहार"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     heightScale: {
//       ENG: ["4'10\"", "6'5\""],
//       HI: ["4'10\"", "6'5\""]
//     },
//     maritalStatusOptions: {
//       ENG: MaritalStatus,
//       HI: ["अविवाहित", "विवाहित", "तलाकशुदा", "विधुर"]
//     },
//     dietOptions: {
//       ENG: Diet,
//       HI: ["शाकाहारी", "मांसाहारी", "शाकाहारी (अंडे सहित)", "वीगन"]
//     }
//   };

//   const isButtonDisabled = !selectedMaritalStatus || !selectedHeight || !selectedDiet;

//   const handleSliderChange = (value) => {
//     const index = Math.round(value);
//     setSliderValue(index);
//     setSelectedHeight(Height[index].heightInFeet);
//   };

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       const selectedHeightData = Height.find(h => h.heightInFeet === selectedHeight);
      
//       const profileData = {
//         ...userData,
//         maritalStatus: selectedMaritalStatus,
//         height: selectedHeight,
//         heightInCm: selectedHeightData?.heightInCm || 0,
//         diet: selectedDiet,
//         profileProgress: 50,
//         updatedAt: serverTimestamp()
//       };

//       await saveUserProfile(profileData, 5);
//       router.push(getNextScreen('homescreens/info5'));
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const selectedHeightCm = Height.find(h => h.heightInFeet === selectedHeight)?.heightInCm || '';

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info5'))}
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
//             <Animated.View style={[
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
//             </Animated.View>
//           </TouchableOpacity>
//           <Text style={styles.languageLabel}>हिंदी</Text>
//         </View>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.contentContainer}>
//           {isLoading && (
//             <View style={styles.loaderContainer}>
//               <ActivityIndicator size="large" color="#e59bf2" />
//             </View>
//           )}

//           <View style={styles.iconContainer}>
//             <Feather name="user-check" size={40} color="white" />
//           </View>

//           <Text style={styles.title}>{translations.maritalStatus[language]}</Text>
          
//           {/* Marital Status Options */}
//           <View style={styles.optionsGrid}>
//             {translations.maritalStatusOptions[language].map((status, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedMaritalStatus(MaritalStatus[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedMaritalStatus === MaritalStatus[index] && styles.selectedOptionText
//                 ]}>
//                   {status}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <Text style={styles.sectionTitle}>{translations.height[language]}</Text>
          
//           {/* Height Selection UI */}
//           <View style={styles.heightContainer}>
//             <View style={styles.heightDisplay}>
//               <View style={styles.heightValueContainer}>
//                 <Text style={styles.heightFeetText}>{selectedHeight}</Text>
//                 <Text style={styles.heightCmText}>{selectedHeightCm} cm</Text>
//               </View>
//             </View>
            
//             <View style={styles.sliderWrapper}>
//               <Slider
//                 ref={sliderRef}
//                 style={styles.slider}
//                 minimumValue={0}
//                 maximumValue={Height.length - 1}
//                 step={1}
//                 value={sliderValue}
//                 onValueChange={handleSliderChange}
//                 minimumTrackTintColor="#e59bf2"
//                 maximumTrackTintColor="#f0f0f0"
//                 thumbTintColor="#e59bf2"
//                 disabled={isLoading}
//               />
              
//               <View style={styles.heightScale}>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][0]}</Text>
//                 <Text style={styles.scaleText}>{translations.heightScale[language][1]}</Text>
//               </View>
//             </View>
//           </View>

//           <Text style={styles.sectionTitle}>{translations.diet[language]}</Text>
          
//           {/* Diet Options */}
//           <View style={styles.optionsGrid}>
//             {translations.dietOptions[language].map((diet, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   selectedDiet === Diet[index] && styles.selectedOption
//                 ]}
//                 onPress={() => setSelectedDiet(Diet[index])}
//                 disabled={isLoading}
//               >
//                 <Text style={[
//                   styles.optionText,
//                   selectedDiet === Diet[index] && styles.selectedOptionText
//                 ]}>
//                   {diet}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Continue Button */}
//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.continueButton,
//               { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#e59bf2' }
//             ]}
//             disabled={isButtonDisabled || isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
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
//     paddingBottom: 40,
//   },
//   contentContainer: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   iconContainer: {
//     alignSelf: 'center',
//     backgroundColor: '#e59bf2',
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
//     marginBottom: 20,
//     color: '#333'
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginTop: 25,
//     marginBottom: 15,
//     color: '#555',
//     paddingLeft: 5
//   },
//   optionsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   optionButton: {
//     width: '48%',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedOption: {
//     backgroundColor: '#e59bf2',
//     borderColor: '#d47fe6',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#495057',
//     textAlign: 'center',
//   },
//   selectedOptionText: {
//     color: 'white',
//     fontWeight: '600'
//   },
//   // Height UI Styles
//   heightContainer: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 20,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   heightDisplay: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   heightValueContainer: {
//     alignItems: 'center',
//   },
//   heightFeetText: {
//     fontSize: 42,
//     fontWeight: 'bold',
//     color: '#333',
//     fontFamily: 'sans-serif-condensed',
//     marginBottom: 5,
//   },
//   heightCmText: {
//     fontSize: 18,
//     color: '#6c757d',
//     fontFamily: 'sans-serif',
//   },
//   sliderWrapper: {
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   slider: {
//     width: '100%',
//     height: 50,
//   },
//   heightScale: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 5,
//     paddingHorizontal: 5,
//   },
//   scaleText: {
//     fontSize: 14,
//     color: '#adb5bd',
//     fontFamily: 'sans-serif',
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 18,
//     marginTop: 30,
//     marginBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#e59bf2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });






//02/09/2025

//info5.jsx
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { Diet, Height, MaritalStatus } from '../../constant/Info';
import { useRouter } from 'expo-router';
import Slider from '@react-native-community/slider';
import Animated from 'react-native-reanimated';
import { useLanguage } from '../context/LanguageContext';
import { useState, useRef } from 'react';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfileNavigation } from '../utils/navigationHelper';
import { useEffect } from 'react';

const { width } = Dimensions.get('window');

export default function Info5() {
  const router = useRouter();
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(Height[0].heightInFeet);
  const [selectedDiet, setSelectedDiet] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const sliderRef = useRef(null);

  // Load existing data
  useEffect(() => {
    if (userData) {
      if (userData.maritalStatus) {
        setSelectedMaritalStatus(userData.maritalStatus);
      }
      if (userData.height) {
        setSelectedHeight(userData.height);
        const heightIndex = Height.findIndex(h => h.heightInFeet === userData.height);
        if (heightIndex !== -1) {
          setSliderValue(heightIndex);
        }
      }
      if (userData.diet) {
        setSelectedDiet(userData.diet);
      }
    }
  }, [userData]);

  const translations = {
    maritalStatus: {
      ENG: `${getPrefix()} Marital Status`,
      HI: profileFor === 'MySelf' ? "आपकी वैवाहिक स्थिति" : 
        profileFor === 'My Son' ? "आपके बेटे की वैवाहिक स्थिति" :
        profileFor === 'My Daughter' ? "आपकी बेटी की वैवाहिक स्थिति" :
        profileFor === 'My Sister' ? "आपकी बहन की वैवाहिक स्थिति" :
        profileFor === 'My Brother' ? "आपके भाई की वैवाहिक स्थिति" :
        profileFor === 'My Friend' ? "आपके दोस्त की वैवाहिक स्थिति" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई की वैवाहिक स्थिति" :
        "आपके रिश्तेदार की वैवाहिक स्थिति"
    },
    height: {
      ENG: `${getPrefix()} Height`,
      HI: profileFor === 'MySelf' ? "आपकी ऊंचाई" : 
        profileFor === 'My Son' ? "आपके बेटे की ऊंचाई" :
        profileFor === 'My Daughter' ? "आपकी बेटी की ऊंचाई" :
        profileFor === 'My Sister' ? "आपकी बहन की ऊंचाई" :
        profileFor === 'My Brother' ? "आपके भाई की ऊंचाई" :
        profileFor === 'My Friend' ? "आपके दोस्त की ऊंचाई" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई की ऊंचाई" :
        "आपके रिश्तेदार की ऊंचाई"
    },
    diet: {
      ENG: `${getPrefix()} Diet`,
      HI: profileFor === 'MySelf' ? "आपका आहार" : 
        profileFor === 'My Son' ? "आपके बेटे का आहार" :
        profileFor === 'My Daughter' ? "आपकी बेटी का आहार" :
        profileFor === 'My Sister' ? "आपकी बहन का आहार" :
        profileFor === 'My Brother' ? "आपके भाई का आहार" :
        profileFor === 'My Friend' ? "आपके दोस्त का आहार" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई का आहार" :
        "आपके रिश्तेदार का आहार"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    heightScale: {
      ENG: ["4'10\"", "6'5\""],
      HI: ["4'10\"", "6'5\""]
    },
    maritalStatusOptions: {
      ENG: MaritalStatus,
      HI: ["अविवाहित", "विवाहित", "तलाकशुदा", "विधुर"]
    },
    dietOptions: {
      ENG: Diet,
      HI: ["शाकाहारी", "मांसाहारी", "शाकाहारी (अंडे सहित)", "वीगन"]
    }
  };

  const isButtonDisabled = !selectedMaritalStatus || !selectedHeight || !selectedDiet;

  const handleSliderChange = (value) => {
    const index = Math.round(value);
    setSliderValue(index);
    setSelectedHeight(Height[index].heightInFeet);
  };

  const handleContinue = async () => {
    if (isButtonDisabled) return;
    
    try {
      setIsLoading(true);
      
      const selectedHeightData = Height.find(h => h.heightInFeet === selectedHeight);
      
      const profileData = {
        ...userData,
        maritalStatus: selectedMaritalStatus,
        height: selectedHeight,
        heightInCm: selectedHeightData?.heightInCm || 0,
        diet: selectedDiet,
        profileProgress: 50,
        updatedAt: serverTimestamp()
      };

      await saveUserProfile(profileData, 5);
      router.push(getNextScreen('homescreens/info5'));
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedHeightCm = Height.find(h => h.heightInFeet === selectedHeight)?.heightInCm || '';

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info5'))}
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
            <Animated.View style={[
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
            </Animated.View>
          </TouchableOpacity>
          <Text style={styles.languageLabel}>हिंदी</Text>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentContainer}>
          {isLoading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#e59bf2" />
            </View>
          )}

          <View style={styles.iconContainer}>
            <Feather name="user-check" size={40} color="white" />
          </View>

          <Text style={styles.title}>{translations.maritalStatus[language]}</Text>
          
          {/* Marital Status Options */}
          <View style={styles.optionsRow}>
            {translations.maritalStatusOptions[language].map((status, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButtonRectangular,
                  selectedMaritalStatus === MaritalStatus[index] && styles.selectedOption
                ]}
                onPress={() => setSelectedMaritalStatus(MaritalStatus[index])}
                disabled={isLoading}
              >
                <Text style={[
                  styles.optionText,
                  selectedMaritalStatus === MaritalStatus[index] && styles.selectedOptionText
                ]}>
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>{translations.height[language]}</Text>
          
          {/* Height Selection UI */}
          <View style={styles.heightContainer}>
            <View style={styles.heightDisplay}>
              <View style={styles.heightValueContainer}>
                <Text style={styles.heightFeetText}>{selectedHeight}</Text>
                <Text style={styles.heightCmText}>{selectedHeightCm} cm</Text>
              </View>
            </View>
            
            <View style={styles.sliderWrapper}>
              <Slider
                ref={sliderRef}
                style={styles.slider}
                minimumValue={0}
                maximumValue={Height.length - 1}
                step={1}
                value={sliderValue}
                onValueChange={handleSliderChange}
                minimumTrackTintColor="#e59bf2"
                maximumTrackTintColor="#f0f0f0"
                thumbTintColor="#e59bf2"
                disabled={isLoading}
              />
              
              <View style={styles.heightScale}>
                <Text style={styles.scaleText}>{translations.heightScale[language][0]}</Text>
                <Text style={styles.scaleText}>{translations.heightScale[language][1]}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionTitle}>{translations.diet[language]}</Text>
          
          {/* Diet Options */}
          <View style={styles.optionsRow}>
            {translations.dietOptions[language].map((diet, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.optionButtonRectangular,
                  selectedDiet === Diet[index] && styles.selectedOption
                ]}
                onPress={() => setSelectedDiet(Diet[index])}
                disabled={isLoading}
              >
                <Text style={[
                  styles.optionText,
                  selectedDiet === Diet[index] && styles.selectedOptionText
                ]}>
                  {diet}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Continue Button */}
          <TouchableOpacity 
            onPress={handleContinue} 
            style={[
              styles.continueButton,
              { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#e59bf2' }
            ]}
            disabled={isButtonDisabled || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
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
  contentContainer: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  iconContainer: {
    alignSelf: 'center',
    backgroundColor: '#e59bf2',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#e59bf2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 12,
    color: '#555',
    paddingLeft: 5
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  optionButtonRectangular: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 60,
  },
  selectedOption: {
    backgroundColor: '#e59bf2',
    borderColor: '#d47fe6',
    shadowColor: '#e59bf2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  optionText: {
    fontSize: 14,
    color: '#495057',
    textAlign: 'center',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: 'white',
    fontWeight: '600'
  },
  // Height UI Styles
  heightContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  heightDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  heightValueContainer: {
    alignItems: 'center',
  },
  heightFeetText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'sans-serif-condensed',
    marginBottom: 4,
  },
  heightCmText: {
    fontSize: 16,
    color: '#6c757d',
    fontFamily: 'sans-serif',
  },
  sliderWrapper: {
    width: '100%',
    paddingHorizontal: 5,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  heightScale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 5,
  },
  scaleText: {
    fontSize: 12,
    color: '#adb5bd',
    fontFamily: 'sans-serif',
  },
  continueButton: {
    borderRadius: 25,
    padding: 16,
    marginTop: 25,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#e59bf2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});