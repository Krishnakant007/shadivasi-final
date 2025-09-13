// //app/homescreens/info2.jsx

// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Platform, ScrollView, Image, Animated } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';

// const { width, height } = Dimensions.get('window');

// const scaleFont = (size) => Math.min(width / 360, 1.5) * size;
// const scaleHeight = (size) => Math.min(height / 700, 1.5) * size;

// export default function Info2() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   const [errors, setErrors] = useState({
//     day: '',
//     month: '',
//     year: ''
//   });

//   const [firstNameFocused, setFirstNameFocused] = useState(false);
//   const [lastNameFocused, setLastNameFocused] = useState(false);
//   const [dayFocused, setDayFocused] = useState(false);
//   const [monthFocused, setMonthFocused] = useState(false);
//   const [yearFocused, setYearFocused] = useState(false);

//   const translations = {
//     title: {
//       ENG: "Your name",
//       HI: "आपका नाम"
//     },
//     subtitle: {
//       ENG: "Date of birth",
//       HI: "जन्म तिथि"
//     },
//     firstNamePlaceholder: {
//       ENG: "First name",
//       HI: "पहला नाम"
//     },
//     lastNamePlaceholder: {
//       ENG: "Last name",
//       HI: "उपनाम"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     day: {
//       ENG: "Day",
//       HI: "दिन"
//     },
//     month: {
//       ENG: "Month",
//       HI: "महीना"
//     },
//     year: {
//       ENG: "Year",
//       HI: "साल"
//     },
//     invalidDay: {
//       ENG: "Please enter a valid day (1-31)",
//       HI: "कृपया एक वैध दिन दर्ज करें (1-31)"
//     },
//     invalidMonth: {
//       ENG: "Please enter a valid month (1-12)",
//       HI: "कृपया एक वैध महीना दर्ज करें (1-12)"
//     },
//     invalidYear: {
//       ENG: "Please enter a valid 4-digit year",
//       HI: "कृपया एक वैध 4-अंकीय वर्ष दर्ज करें"
//     }
//   };

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const validateDate = () => {
//     let valid = true;
//     const newErrors = { day: '', month: '', year: '' };

//     if (day) {
//       const dayNum = parseInt(day, 10);
//       if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
//         newErrors.day = translations.invalidDay[language];
//         valid = false;
//       }
//     }

//     if (month) {
//       const monthNum = parseInt(month, 10);
//       if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
//         newErrors.month = translations.invalidMonth[language];
//         valid = false;
//       }
//     }

//     if (year) {
//       const yearNum = parseInt(year, 10);
//       if (year.length !== 4 || isNaN(yearNum)) {
//         newErrors.year = translations.invalidYear[language];
//         valid = false;
//       }
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleDayChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setDay(numericText.slice(0, 2));
//     if (numericText) {
//       const dayNum = parseInt(numericText, 10);
//       if (dayNum < 1 || dayNum > 31) {
//         setErrors(prev => ({ ...prev, day: translations.invalidDay[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, day: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, day: '' }));
//     }
//   };

//   const handleMonthChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setMonth(numericText.slice(0, 2));
//     if (numericText) {
//       const monthNum = parseInt(numericText, 10);
//       if (monthNum < 1 || monthNum > 12) {
//         setErrors(prev => ({ ...prev, month: translations.invalidMonth[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, month: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, month: '' }));
//     }
//   };

//   const handleYearChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setYear(numericText.slice(0, 4));
//     if (numericText && numericText.length !== 4) {
//       setErrors(prev => ({ ...prev, year: translations.invalidYear[language] }));
//     } else {
//       setErrors(prev => ({ ...prev, year: '' }));
//     }
//   };

//   const handleContinue = () => {
//     if (validateDate()) {
//       router.push('homescreens/info3');
//     }
//   };

//   const isButtonDisabled = !firstName || !lastName || !day || !month || !year ||
//                           !!errors.day || !!errors.month || !!errors.year;

//   return (
//     <View style={styles.container}>
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
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <FontAwesome6 name="user" size={scaleFont(40)} color="#4c5211" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.nameInputContainer}>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.firstNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={firstName}
//                 onFocus={() => setFirstNameFocused(true)}
//                 onBlur={() => setFirstNameFocused(false)}
//                 onChangeText={setFirstName}
//                 textAlign="left"
//               />
//               {firstNameFocused && <Text style={styles.nameLabel}>{translations.firstNamePlaceholder[language]}</Text>}
//             </View>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.lastNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={lastName}
//                 onFocus={() => setLastNameFocused(true)}
//                 onBlur={() => setLastNameFocused(false)}
//                 onChangeText={setLastName}
//                 textAlign="left"
//               />
//               {lastNameFocused && <Text style={styles.nameLabel}>{translations.lastNamePlaceholder[language]}</Text>}
//             </View>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <View style={styles.dateContainer}>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.day ? styles.errorInput : {}]}
//                 placeholder={translations.day[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={day}
//                 onFocus={() => setDayFocused(true)}
//                 onBlur={() => setDayFocused(false)}
//                 onChangeText={handleDayChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {dayFocused && <Text style={styles.dateLabel}>{translations.day[language]}</Text>}
//               {errors.day ? <Text style={styles.errorText}>{errors.day}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.month ? styles.errorInput : {}]}
//                 placeholder={translations.month[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={month}
//                 onFocus={() => setMonthFocused(true)}
//                 onBlur={() => setMonthFocused(false)}
//                 onChangeText={handleMonthChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {monthFocused && <Text style={styles.dateLabel}>{translations.month[language]}</Text>}
//               {errors.month ? <Text style={styles.errorText}>{errors.month}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.year ? styles.errorInput : {}]}
//                 placeholder={translations.year[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={year}
//                 onFocus={() => setYearFocused(true)}
//                 onBlur={() => setYearFocused(false)}
//                 onChangeText={handleYearChange}
//                 maxLength={4}
//                 textAlign="left"
//               />
//               {yearFocused && <Text style={styles.dateLabel}>{translations.year[language]}</Text>}
//               {errors.year ? <Text style={styles.errorText}>{errors.year}</Text> : null}
//             </View>
//           </View>

//           {!isKeyboardVisible && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleContinue}
//                 style={[styles.button, { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#f79598ff' }]}
//                 disabled={isButtonDisabled}
//               >
//                 <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 40,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: scaleHeight(20),
//   },
//   contentContainer: {
//     paddingTop: scaleHeight(20),
//     paddingHorizontal: scaleHeight(20),
//     alignItems: 'center',
//     paddingBottom: scaleHeight(80),
//   },
//   buttonContainer: {
//     marginTop: scaleHeight(20),
//     width: '100%',
//     paddingHorizontal: scaleHeight(20),
//   },
//   iconContainer: {
//     alignItems: 'center',
//     backgroundColor: '#f7b5b7',
//     borderRadius: 99,
//     width: scaleHeight(80),
//     height: scaleHeight(80),
//     justifyContent: 'center',
//     marginBottom: scaleHeight(20),
//   },
//   title: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   nameInputContainer: {
//     width: '100%',
//     marginBottom: scaleHeight(30),
//   },
//   inputWrapper: {
//     marginBottom: scaleHeight(20),
//     position: 'relative',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: scaleHeight(15),
//     fontSize: scaleFont(16),
//     backgroundColor: '#fff',
//   },
//   errorInput: {
//     borderColor: '#FF6B6B',
//   },
//   nameInput: {
//     width: '100%',
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   nameLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: scaleHeight(20),
//   },
//   dateInputWrapper: {
//     width: '30%',
//     position: 'relative',
//   },
//   dateInput: {
//     height: scaleHeight(50),
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   dateLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   button: {
//     width: '100%',
//     padding: scaleHeight(15),
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   buttonText: {
//     fontSize: scaleFont(20),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
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
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: scaleFont(12),
//     marginTop: scaleHeight(5),
//     marginLeft: scaleHeight(5),
//   },
// });































 















//                           // app/homescreens/info2.jsx
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Platform, ScrollView, Image, Animated } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';


// const { width, height } = Dimensions.get('window');

// const scaleFont = (size) => Math.min(width / 360, 1.5) * size;
// const scaleHeight = (size) => Math.min(height / 700, 1.5) * size;

// export default function Info2() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   const [errors, setErrors] = useState({
//     day: '',
//     month: '',
//     year: ''
//   });

//   const [firstNameFocused, setFirstNameFocused] = useState(false);
//   const [lastNameFocused, setLastNameFocused] = useState(false);
//   const [dayFocused, setDayFocused] = useState(false);
//   const [monthFocused, setMonthFocused] = useState(false);
//   const [yearFocused, setYearFocused] = useState(false);

//   const translations = {
//     title: {
//       ENG: `${getPrefix()} name`,
//       HI: profileFor === 'MySelf' ? "आपका नाम" :
//         profileFor === 'My Son' ? "आपके बेटे का नाम" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का नाम" :
//         profileFor === 'My Sister' ? "आपकी बहन का नाम" :
//         profileFor === 'My Brother' ? "आपके भाई का नाम" :
//         profileFor === 'My Friend' ? "आपके दोस्त का नाम" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का नाम" :
//         "आपके रिश्तेदार का नाम"
//     },
//     subtitle: {
//       ENG: "Date of birth",
//       HI: "जन्म तिथि"
//     },
//     firstNamePlaceholder: {
//       ENG: "First name",
//       HI: "पहला नाम"
//     },
//     lastNamePlaceholder: {
//       ENG: "Last name",
//       HI: "उपनाम"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     day: {
//       ENG: "Day",
//       HI: "दिन"
//     },
//     month: {
//       ENG: "Month",
//       HI: "महीना"
//     },
//     year: {
//       ENG: "Year",
//       HI: "साल"
//     },
//     invalidDay: {
//       ENG: "Please enter a valid day (1-31)",
//       HI: "कृपया एक वैध दिन दर्ज करें (1-31)"
//     },
//     invalidMonth: {
//       ENG: "Please enter a valid month (1-12)",
//       HI: "कृपया एक वैध महीना दर्ज करें (1-12)"
//     },
//     invalidYear: {
//       ENG: "Please enter a valid 4-digit year",
//       HI: "कृपया एक वैध 4-अंकीय वर्ष दर्ज करें"
//     }
//   };

//    useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const validateDate = () => {
//     let valid = true;
//     const newErrors = { day: '', month: '', year: '' };

//     if (day) {
//       const dayNum = parseInt(day, 10);
//       if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
//         newErrors.day = translations.invalidDay[language];
//         valid = false;
//       }
//     }

//     if (month) {
//       const monthNum = parseInt(month, 10);
//       if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
//         newErrors.month = translations.invalidMonth[language];
//         valid = false;
//       }
//     }

//     if (year) {
//       const yearNum = parseInt(year, 10);
//       if (year.length !== 4 || isNaN(yearNum)) {
//         newErrors.year = translations.invalidYear[language];
//         valid = false;
//       }
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleDayChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setDay(numericText.slice(0, 2));
//     if (numericText) {
//       const dayNum = parseInt(numericText, 10);
//       if (dayNum < 1 || dayNum > 31) {
//         setErrors(prev => ({ ...prev, day: translations.invalidDay[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, day: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, day: '' }));
//     }
//   };

//   const handleMonthChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setMonth(numericText.slice(0, 2));
//     if (numericText) {
//       const monthNum = parseInt(numericText, 10);
//       if (monthNum < 1 || monthNum > 12) {
//         setErrors(prev => ({ ...prev, month: translations.invalidMonth[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, month: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, month: '' }));
//     }
//   };

//   const handleYearChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setYear(numericText.slice(0, 4));
//     if (numericText && numericText.length !== 4) {
//       setErrors(prev => ({ ...prev, year: translations.invalidYear[language] }));
//     } else {
//       setErrors(prev => ({ ...prev, year: '' }));
//     }
//   };

//   const handleContinue = () => {
//     if (validateDate()) {
//       router.push('homescreens/info3');
//     }
//   };

//   const isButtonDisabled = !firstName || !lastName || !day || !month || !year ||
//                           !!errors.day || !!errors.month || !!errors.year;




//   return (
//     <View style={styles.container}>
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
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <FontAwesome6 name="user" size={scaleFont(40)} color="#4c5211" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>

          
//           <View style={styles.nameInputContainer}>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.firstNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={firstName}
//                 onFocus={() => setFirstNameFocused(true)}
//                 onBlur={() => setFirstNameFocused(false)}
//                 onChangeText={setFirstName}
//                 textAlign="left"
//               />
//               {firstNameFocused && <Text style={styles.nameLabel}>{translations.firstNamePlaceholder[language]}</Text>}
//             </View>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.lastNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={lastName}
//                 onFocus={() => setLastNameFocused(true)}
//                 onBlur={() => setLastNameFocused(false)}
//                 onChangeText={setLastName}
//                 textAlign="left"
//               />
//               {lastNameFocused && <Text style={styles.nameLabel}>{translations.lastNamePlaceholder[language]}</Text>}
//             </View>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <View style={styles.dateContainer}>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.day ? styles.errorInput : {}]}
//                 placeholder={translations.day[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={day}
//                 onFocus={() => setDayFocused(true)}
//                 onBlur={() => setDayFocused(false)}
//                 onChangeText={handleDayChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {dayFocused && <Text style={styles.dateLabel}>{translations.day[language]}</Text>}
//               {errors.day ? <Text style={styles.errorText}>{errors.day}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.month ? styles.errorInput : {}]}
//                 placeholder={translations.month[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={month}
//                 onFocus={() => setMonthFocused(true)}
//                 onBlur={() => setMonthFocused(false)}
//                 onChangeText={handleMonthChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {monthFocused && <Text style={styles.dateLabel}>{translations.month[language]}</Text>}
//               {errors.month ? <Text style={styles.errorText}>{errors.month}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.year ? styles.errorInput : {}]}
//                 placeholder={translations.year[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={year}
//                 onFocus={() => setYearFocused(true)}
//                 onBlur={() => setYearFocused(false)}
//                 onChangeText={handleYearChange}
//                 maxLength={4}
//                 textAlign="left"
//               />
//               {yearFocused && <Text style={styles.dateLabel}>{translations.year[language]}</Text>}
//               {errors.year ? <Text style={styles.errorText}>{errors.year}</Text> : null}
//             </View>
//           </View>

//           {!isKeyboardVisible && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleContinue}
//                 style={[styles.button, { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#f79598ff' }]}
//                 disabled={isButtonDisabled}
//               >
//                 <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// // ... styles remain the same ...

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 40,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: scaleHeight(20),
//   },
//   contentContainer: {
//     paddingTop: scaleHeight(20),
//     paddingHorizontal: scaleHeight(20),
//     alignItems: 'center',
//     paddingBottom: scaleHeight(80),
//   },
//   buttonContainer: {
//     marginTop: scaleHeight(20),
//     width: '100%',
//     paddingHorizontal: scaleHeight(20),
//   },
//   iconContainer: {
//     alignItems: 'center',
//     backgroundColor: '#f7b5b7',
//     borderRadius: 99,
//     width: scaleHeight(80),
//     height: scaleHeight(80),
//     justifyContent: 'center',
//     marginBottom: scaleHeight(20),
//   },
//   title: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   nameInputContainer: {
//     width: '100%',
//     marginBottom: scaleHeight(30),
//   },
//   inputWrapper: {
//     marginBottom: scaleHeight(20),
//     position: 'relative',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: scaleHeight(15),
//     fontSize: scaleFont(16),
//     backgroundColor: '#fff',
//   },
//   errorInput: {
//     borderColor: '#FF6B6B',
//   },
//   nameInput: {
//     width: '100%',
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   nameLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: scaleHeight(20),
//   },
//   dateInputWrapper: {
//     width: '30%',
//     position: 'relative',
//   },
//   dateInput: {
//     height: scaleHeight(50),
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   dateLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   button: {
//     width: '100%',
//     padding: scaleHeight(15),
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   buttonText: {
//     fontSize: scaleFont(20),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
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
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: scaleFont(12),
//     marginTop: scaleHeight(5),
//     marginLeft: scaleHeight(5),
//   },
// });

















// app/homescreens/info2.jsx
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Platform, ScrollView, Image, Animated, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// const { width, height } = Dimensions.get('window');

// const scaleFont = (size) => Math.min(width / 360, 1.5) * size;
// const scaleHeight = (size) => Math.min(height / 700, 1.5) * size;

// export default function Info2() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix, gender } = useProfile();
//   const { saveUserProfile } = useFirestore();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({
//     day: '',
//     month: '',
//     year: ''
//   });

//   const [firstNameFocused, setFirstNameFocused] = useState(false);
//   const [lastNameFocused, setLastNameFocused] = useState(false);
//   const [dayFocused, setDayFocused] = useState(false);
//   const [monthFocused, setMonthFocused] = useState(false);
//   const [yearFocused, setYearFocused] = useState(false);

//   const translations = {
//     title: {
//       ENG: `${getPrefix()} name`,
//       HI: profileFor === 'MySelf' ? "आपका नाम" :
//         profileFor === 'My Son' ? "आपके बेटे का नाम" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का नाम" :
//         profileFor === 'My Sister' ? "आपकी बहन का नाम" :
//         profileFor === 'My Brother' ? "आपके भाई का नाम" :
//         profileFor === 'My Friend' ? "आपके दोस्त का नाम" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का नाम" :
//         "आपके रिश्तेदार का नाम"
//     },
//     subtitle: {
//       ENG: "Date of birth",
//       HI: "जन्म तिथि"
//     },
//     firstNamePlaceholder: {
//       ENG: "First name",
//       HI: "पहला नाम"
//     },
//     lastNamePlaceholder: {
//       ENG: "Last name",
//       HI: "उपनाम"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     day: {
//       ENG: "Day",
//       HI: "दिन"
//     },
//     month: {
//       ENG: "Month",
//       HI: "महीना"
//     },
//     year: {
//       ENG: "Year",
//       HI: "साल"
//     },
//     invalidDay: {
//       ENG: "Please enter a valid day (1-31)",
//       HI: "कृपया एक वैध दिन दर्ज करें (1-31)"
//     },
//     invalidMonth: {
//       ENG: "Please enter a valid month (1-12)",
//       HI: "कृपया एक वैध महीना दर्ज करें (1-12)"
//     },
//     invalidYear: {
//       ENG: "Please enter a valid 4-digit year",
//       HI: "कृपया एक वैध 4-अंकीय वर्ष दर्ज करें"
//     },
//     submitting: {
//       ENG: "Saving...",
//       HI: "सहेजा जा रहा है..."
//     }
//   };

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const validateDate = () => {
//     let valid = true;
//     const newErrors = { day: '', month: '', year: '' };

//     if (day) {
//       const dayNum = parseInt(day, 10);
//       if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
//         newErrors.day = translations.invalidDay[language];
//         valid = false;
//       }
//     }

//     if (month) {
//       const monthNum = parseInt(month, 10);
//       if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
//         newErrors.month = translations.invalidMonth[language];
//         valid = false;
//       }
//     }

//     if (year) {
//       const yearNum = parseInt(year, 10);
//       if (year.length !== 4 || isNaN(yearNum)) {
//         newErrors.year = translations.invalidYear[language];
//         valid = false;
//       }
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleDayChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setDay(numericText.slice(0, 2));
//     if (numericText) {
//       const dayNum = parseInt(numericText, 10);
//       if (dayNum < 1 || dayNum > 31) {
//         setErrors(prev => ({ ...prev, day: translations.invalidDay[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, day: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, day: '' }));
//     }
//   };

//   const handleMonthChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setMonth(numericText.slice(0, 2));
//     if (numericText) {
//       const monthNum = parseInt(numericText, 10);
//       if (monthNum < 1 || monthNum > 12) {
//         setErrors(prev => ({ ...prev, month: translations.invalidMonth[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, month: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, month: '' }));
//     }
//   };

//   const handleYearChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setYear(numericText.slice(0, 4));
//     if (numericText && numericText.length !== 4) {
//       setErrors(prev => ({ ...prev, year: translations.invalidYear[language] }));
//     } else {
//       setErrors(prev => ({ ...prev, year: '' }));
//     }
//   };

//   const handleContinue = async () => {
//     if (!validateDate()) return;
//     if (isButtonDisabled) return;

//     try {
//       setIsSubmitting(true);

//       // Calculate age
//       const birthDate = new Date(`${year}-${month}-${day}`);
//       const age = new Date().getFullYear() - birthDate.getFullYear();

//       // Prepare profile data
//       const profileData = {
//         firstName,
//         lastName,
//         fullName: `${firstName} ${lastName}`,
//         birthDate: serverTimestamp(),
//         age,
//         profileFor,
//         gender,
//         profileProgress: 20, // 20% complete after this step
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info3');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       // Here you could add error state and display to user
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const isButtonDisabled = !firstName || !lastName || !day || !month || !year ||
//                           !!errors.day || !!errors.month || !!errors.year;

//   return (
//     <View style={styles.container}>
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
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <FontAwesome6 name="user" size={scaleFont(40)} color="#4c5211" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.nameInputContainer}>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.firstNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={firstName}
//                 onFocus={() => setFirstNameFocused(true)}
//                 onBlur={() => setFirstNameFocused(false)}
//                 onChangeText={setFirstName}
//                 textAlign="left"
//               />
//               {firstNameFocused && <Text style={styles.nameLabel}>{translations.firstNamePlaceholder[language]}</Text>}
//             </View>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.lastNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={lastName}
//                 onFocus={() => setLastNameFocused(true)}
//                 onBlur={() => setLastNameFocused(false)}
//                 onChangeText={setLastName}
//                 textAlign="left"
//               />
//               {lastNameFocused && <Text style={styles.nameLabel}>{translations.lastNamePlaceholder[language]}</Text>}
//             </View>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <View style={styles.dateContainer}>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.day ? styles.errorInput : {}]}
//                 placeholder={translations.day[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={day}
//                 onFocus={() => setDayFocused(true)}
//                 onBlur={() => setDayFocused(false)}
//                 onChangeText={handleDayChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {dayFocused && <Text style={styles.dateLabel}>{translations.day[language]}</Text>}
//               {errors.day ? <Text style={styles.errorText}>{errors.day}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.month ? styles.errorInput : {}]}
//                 placeholder={translations.month[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={month}
//                 onFocus={() => setMonthFocused(true)}
//                 onBlur={() => setMonthFocused(false)}
//                 onChangeText={handleMonthChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {monthFocused && <Text style={styles.dateLabel}>{translations.month[language]}</Text>}
//               {errors.month ? <Text style={styles.errorText}>{errors.month}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.year ? styles.errorInput : {}]}
//                 placeholder={translations.year[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={year}
//                 onFocus={() => setYearFocused(true)}
//                 onBlur={() => setYearFocused(false)}
//                 onChangeText={handleYearChange}
//                 maxLength={4}
//                 textAlign="left"
//               />
//               {yearFocused && <Text style={styles.dateLabel}>{translations.year[language]}</Text>}
//               {errors.year ? <Text style={styles.errorText}>{errors.year}</Text> : null}
//             </View>
//           </View>

//           {!isKeyboardVisible && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleContinue}
//                 style={[styles.button, { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#f79598ff' }]}
//                 disabled={isButtonDisabled || isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <ActivityIndicator color="white" />
//                 ) : (
//                   <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 40,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: scaleHeight(20),
//   },
//   contentContainer: {
//     paddingTop: scaleHeight(20),
//     paddingHorizontal: scaleHeight(20),
//     alignItems: 'center',
//     paddingBottom: scaleHeight(80),
//   },
//   buttonContainer: {
//     marginTop: scaleHeight(20),
//     width: '100%',
//     paddingHorizontal: scaleHeight(20),
//   },
//   iconContainer: {
//     alignItems: 'center',
//     backgroundColor: '#f7b5b7',
//     borderRadius: 99,
//     width: scaleHeight(80),
//     height: scaleHeight(80),
//     justifyContent: 'center',
//     marginBottom: scaleHeight(20),
//   },
//   title: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   nameInputContainer: {
//     width: '100%',
//     marginBottom: scaleHeight(30),
//   },
//   inputWrapper: {
//     marginBottom: scaleHeight(20),
//     position: 'relative',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: scaleHeight(15),
//     fontSize: scaleFont(16),
//     backgroundColor: '#fff',
//   },
//   errorInput: {
//     borderColor: '#FF6B6B',
//   },
//   nameInput: {
//     width: '100%',
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   nameLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: scaleHeight(20),
//   },
//   dateInputWrapper: {
//     width: '30%',
//     position: 'relative',
//   },
//   dateInput: {
//     height: scaleHeight(50),
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   dateLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   button: {
//     width: '100%',
//     padding: scaleHeight(15),
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   buttonText: {
//     fontSize: scaleFont(20),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
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
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: scaleFont(12),
//     marginTop: scaleHeight(5),
//     marginLeft: scaleHeight(5),
//   },
// });





// app/homescreens/info2.jsx
//original
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Platform, ScrollView, Image, Animated, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// const { width, height } = Dimensions.get('window');

// const scaleFont = (size) => Math.min(width / 360, 1.5) * size;
// const scaleHeight = (size) => Math.min(height / 700, 1.5) * size;

// export default function Info2() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix, gender } = useProfile();
//   const { saveUserProfile } = useFirestore();
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [formattedDate, setFormattedDate] = useState('');
//   const [age, setAge] = useState(null);
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({
//     day: '',
//     month: '',
//     year: '',
//     date: ''
//   });

//   const [firstNameFocused, setFirstNameFocused] = useState(false);
//   const [lastNameFocused, setLastNameFocused] = useState(false);
//   const [dayFocused, setDayFocused] = useState(false);
//   const [monthFocused, setMonthFocused] = useState(false);
//   const [yearFocused, setYearFocused] = useState(false);

//   const translations = {
//     title: {
//       ENG: `${getPrefix()} name`,
//       HI: profileFor === 'MySelf' ? "आपका नाम" :
//         profileFor === 'My Son' ? "आपके बेटे का नाम" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का नाम" :
//         profileFor === 'My Sister' ? "आपकी बहन का नाम" :
//         profileFor === 'My Brother' ? "आपके भाई का नाम" :
//         profileFor === 'My Friend' ? "आपके दोस्त का नाम" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का नाम" :
//         "आपके रिश्तेदार का नाम"
//     },
//     subtitle: {
//       ENG: "Date of birth",
//       HI: "जन्म तिथि"
//     },
//     firstNamePlaceholder: {
//       ENG: "First name",
//       HI: "पहला नाम"
//     },
//     lastNamePlaceholder: {
//       ENG: "Last name",
//       HI: "उपनाम"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     day: {
//       ENG: "Day",
//       HI: "दिन"
//     },
//     month: {
//       ENG: "Month",
//       HI: "महीना"
//     },
//     year: {
//       ENG: "Year",
//       HI: "साल"
//     },
//     invalidDay: {
//       ENG: "Please enter a valid day (1-31)",
//       HI: "कृपया एक वैध दिन दर्ज करें (1-31)"
//     },
//     invalidMonth: {
//       ENG: "Please enter a valid month (1-12)",
//       HI: "कृपया एक वैध महीना दर्ज करें (1-12)"
//     },
//     invalidYear: {
//       ENG: "Please enter a valid 4-digit year",
//       HI: "कृपया एक वैध 4-अंकीय वर्ष दर्ज करें"
//     },
//     invalidDate: {
//       ENG: "Please enter a valid date",
//       HI: "कृपया एक वैध तिथि दर्ज करें"
//     },
//     age: {
//       ENG: "Age",
//       HI: "उम्र"
//     },
//     submitting: {
//       ENG: "Saving...",
//       HI: "सहेजा जा रहा है..."
//     }
//   };

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   useEffect(() => {
//     if (day && month && year) {
//       validateAndCalculateAge();
//     }
//   }, [day, month, year]);

//   const validateAndCalculateAge = () => {
//     const dayNum = parseInt(day, 10);
//     const monthNum = parseInt(month, 10);
//     const yearNum = parseInt(year, 10);

//     // Basic validation
//     if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
//       setErrors(prev => ({ ...prev, day: translations.invalidDay[language] }));
//       return false;
//     }

//     if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
//       setErrors(prev => ({ ...prev, month: translations.invalidMonth[language] }));
//       return false;
//     }

//     if (isNaN(yearNum) || year.length !== 4) {
//       setErrors(prev => ({ ...prev, year: translations.invalidYear[language] }));
//       return false;
//     }

//     // Advanced date validation
//     const date = new Date(yearNum, monthNum - 1, dayNum);
//     if (
//       date.getFullYear() !== yearNum ||
//       date.getMonth() !== monthNum - 1 ||
//       date.getDate() !== dayNum
//     ) {
//       setErrors(prev => ({ ...prev, date: translations.invalidDate[language] }));
//       return false;
//     }

//     // Check if date is in the future
//     const today = new Date();
//     if (date > today) {
//       setErrors(prev => ({ ...prev, date: translations.invalidDate[language] }));
//       return false;
//     }

//     // Clear errors if valid
//     setErrors({ day: '', month: '', year: '', date: '' });

//     // Format date as DD/MM/YYYY
//     const formatted = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
//     setFormattedDate(formatted);

//     // Calculate age
//     const ageDiff = today.getFullYear() - date.getFullYear();
//     const monthDiff = today.getMonth() - date.getMonth();
//     const dayDiff = today.getDate() - date.getDate();
    
//     const calculatedAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)
//       ? ageDiff - 1
//       : ageDiff;
    
//     setAge(calculatedAge);
//     return true;
//   };

//   const handleDayChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setDay(numericText.slice(0, 2));
//   };

//   const handleMonthChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setMonth(numericText.slice(0, 2));
//   };

//   const handleYearChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setYear(numericText.slice(0, 4));
//   };

//   const handleContinue = async () => {
//     if (!validateAndCalculateAge()) return;
//     if (isButtonDisabled) return;

//     try {
//       setIsSubmitting(true);

//       // Prepare profile data
//       const profileData = {
//         firstName,
//         lastName,
//         fullName: `${firstName} ${lastName}`,
//         dateOfBirth: formattedDate, // DD/MM/YYYY format
//         birthDay: day.padStart(2, '0'),
//         birthMonth: month.padStart(2, '0'),
//         birthYear: year,
//         age,
//         profileFor,
//         gender,
//         profileProgress: 20, // 20% complete after this step
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info3');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       // Here you could add error state and display to user
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const isButtonDisabled = !firstName || !lastName || !day || !month || !year ||
//                           !!errors.day || !!errors.month || !!errors.year || !!errors.date;

//   return (
//     <View style={styles.container}>
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
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <FontAwesome6 name="user" size={scaleFont(40)} color="#4c5211" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.nameInputContainer}>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.firstNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={firstName}
//                 onFocus={() => setFirstNameFocused(true)}
//                 onBlur={() => setFirstNameFocused(false)}
//                 onChangeText={setFirstName}
//                 textAlign="left"
//               />
//               {firstNameFocused && <Text style={styles.nameLabel}>{translations.firstNamePlaceholder[language]}</Text>}
//             </View>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.lastNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={lastName}
//                 onFocus={() => setLastNameFocused(true)}
//                 onBlur={() => setLastNameFocused(false)}
//                 onChangeText={setLastName}
//                 textAlign="left"
//               />
//               {lastNameFocused && <Text style={styles.nameLabel}>{translations.lastNamePlaceholder[language]}</Text>}
//             </View>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <View style={styles.dateContainer}>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.day ? styles.errorInput : {}]}
//                 placeholder={translations.day[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={day}
//                 onFocus={() => setDayFocused(true)}
//                 onBlur={() => setDayFocused(false)}
//                 onChangeText={handleDayChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {dayFocused && <Text style={styles.dateLabel}>{translations.day[language]}</Text>}
//               {errors.day ? <Text style={styles.errorText}>{errors.day}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.month ? styles.errorInput : {}]}
//                 placeholder={translations.month[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={month}
//                 onFocus={() => setMonthFocused(true)}
//                 onBlur={() => setMonthFocused(false)}
//                 onChangeText={handleMonthChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {monthFocused && <Text style={styles.dateLabel}>{translations.month[language]}</Text>}
//               {errors.month ? <Text style={styles.errorText}>{errors.month}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.year ? styles.errorInput : {}]}
//                 placeholder={translations.year[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={year}
//                 onFocus={() => setYearFocused(true)}
//                 onBlur={() => setYearFocused(false)}
//                 onChangeText={handleYearChange}
//                 maxLength={4}
//                 textAlign="left"
//               />
//               {yearFocused && <Text style={styles.dateLabel}>{translations.year[language]}</Text>}
//               {errors.year ? <Text style={styles.errorText}>{errors.year}</Text> : null}
//             </View>
//           </View>

//           {errors.date && (
//             <Text style={[styles.errorText, { alignSelf: 'center', marginBottom: 10 }]}>
//               {errors.date}
//             </Text>
//           )}

//           {formattedDate && (
//             <View style={styles.dateDisplayContainer}>
//               <Text style={styles.dateDisplayText}>
//                 {translations.subtitle[language]}: {formattedDate}
//               </Text>
//             </View>
//           )}

//           {age !== null && (
//             <View style={styles.dateDisplayContainer}>
//               <Text style={styles.dateDisplayText}>
//                 {translations.age[language]}: {age}
//               </Text>
//             </View>
//           )}

//           {!isKeyboardVisible && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleContinue}
//                 style={[styles.button, { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#f79598ff' }]}
//                 disabled={isButtonDisabled || isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <ActivityIndicator color="white" />
//                 ) : (
//                   <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 40,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: scaleHeight(20),
//   },
//   contentContainer: {
//     paddingTop: scaleHeight(20),
//     paddingHorizontal: scaleHeight(20),
//     alignItems: 'center',
//     paddingBottom: scaleHeight(80),
//   },
//   buttonContainer: {
//     marginTop: scaleHeight(20),
//     width: '100%',
//     paddingHorizontal: scaleHeight(20),
//   },
//   iconContainer: {
//     alignItems: 'center',
//     backgroundColor: '#f7b5b7',
//     borderRadius: 99,
//     width: scaleHeight(80),
//     height: scaleHeight(80),
//     justifyContent: 'center',
//     marginBottom: scaleHeight(20),
//   },
//   title: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   nameInputContainer: {
//     width: '100%',
//     marginBottom: scaleHeight(30),
//   },
//   inputWrapper: {
//     marginBottom: scaleHeight(20),
//     position: 'relative',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: scaleHeight(15),
//     fontSize: scaleFont(16),
//     backgroundColor: '#fff',
//   },
//   errorInput: {
//     borderColor: '#FF6B6B',
//   },
//   nameInput: {
//     width: '100%',
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   nameLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: scaleHeight(20),
//   },
//   dateInputWrapper: {
//     width: '30%',
//     position: 'relative',
//   },
//   dateInput: {
//     height: scaleHeight(50),
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   dateLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   button: {
//     width: '100%',
//     padding: scaleHeight(15),
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   buttonText: {
//     fontSize: scaleFont(20),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
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
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: scaleFont(12),
//     marginTop: scaleHeight(5),
//     marginLeft: scaleHeight(5),
//   },
//   dateDisplayContainer: {
//     width: '100%',
//     padding: scaleHeight(10),
//     backgroundColor: '#f8f9fa',
//     borderRadius: 8,
//     marginBottom: scaleHeight(10),
//   },
//   dateDisplayText: {
//     fontSize: scaleFont(16),
//     color: '#495057',
//   },
// });







// 15/08/2025

// app/homescreens/info2.jsx
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Platform, ScrollView, Image, Animated } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { ActivityIndicator } from 'react-native-web';

// const { width, height } = Dimensions.get('window');

// const scaleFont = (size) => Math.min(width / 360, 1.5) * size;
// const scaleHeight = (size) => Math.min(height / 700, 1.5) * size;

// export default function Info2() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const {
//     profileFor,
//     firstName,
//     setFirstName,
//     lastName,
//     setLastName,
//     birthDate,
//     setBirthDate,
//     saveProfile,
//     getPrefix,
//     loading
//   } = useProfile();
  
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   const [errors, setErrors] = useState({
//     day: '',
//     month: '',
//     year: ''
//   });

//   const [firstNameFocused, setFirstNameFocused] = useState(false);
//   const [lastNameFocused, setLastNameFocused] = useState(false);
//   const [dayFocused, setDayFocused] = useState(false);
//   const [monthFocused, setMonthFocused] = useState(false);
//   const [yearFocused, setYearFocused] = useState(false);

//   const translations = {
//     title: {
//       ENG: `${getPrefix()} name`,
//       HI: profileFor === 'MySelf' ? "आपका नाम" :
//         profileFor === 'My Son' ? "आपके बेटे का नाम" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का नाम" :
//         profileFor === 'My Sister' ? "आपकी बहन का नाम" :
//         profileFor === 'My Brother' ? "आपके भाई का नाम" :
//         profileFor === 'My Friend' ? "आपके दोस्त का नाम" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का नाम" :
//         "आपके रिश्तेदार का नाम"
//     },
//     subtitle: {
//       ENG: "Date of birth",
//       HI: "जन्म तिथि"
//     },
//     firstNamePlaceholder: {
//       ENG: "First name",
//       HI: "पहला नाम"
//     },
//     lastNamePlaceholder: {
//       ENG: "Last name",
//       HI: "उपनाम"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     day: {
//       ENG: "Day",
//       HI: "दिन"
//     },
//     month: {
//       ENG: "Month",
//       HI: "महीना"
//     },
//     year: {
//       ENG: "Year",
//       HI: "साल"
//     },
//     invalidDay: {
//       ENG: "Please enter a valid day (1-31)",
//       HI: "कृपया एक वैध दिन दर्ज करें (1-31)"
//     },
//     invalidMonth: {
//       ENG: "Please enter a valid month (1-12)",
//       HI: "कृपया एक वैध महीना दर्ज करें (1-12)"
//     },
//     invalidYear: {
//       ENG: "Please enter a valid 4-digit year",
//       HI: "कृपया एक वैध 4-अंकीय वर्ष दर्ज करें"
//     }
//   };

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   const validateDate = () => {
//     let valid = true;
//     const newErrors = { day: '', month: '', year: '' };

//     if (!day) {
//       newErrors.day = translations.invalidDay[language];
//       valid = false;
//     } else {
//       const dayNum = parseInt(day, 10);
//       if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
//         newErrors.day = translations.invalidDay[language];
//         valid = false;
//       }
//     }

//     if (!month) {
//       newErrors.month = translations.invalidMonth[language];
//       valid = false;
//     } else {
//       const monthNum = parseInt(month, 10);
//       if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
//         newErrors.month = translations.invalidMonth[language];
//         valid = false;
//       }
//     }

//     if (!year) {
//       newErrors.year = translations.invalidYear[language];
//       valid = false;
//     } else if (year.length !== 4 || isNaN(parseInt(year, 10))) {
//       newErrors.year = translations.invalidYear[language];
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleDayChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setDay(numericText.slice(0, 2));
//     if (numericText) {
//       const dayNum = parseInt(numericText, 10);
//       if (dayNum < 1 || dayNum > 31) {
//         setErrors(prev => ({ ...prev, day: translations.invalidDay[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, day: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, day: '' }));
//     }
//   };

//   const handleMonthChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setMonth(numericText.slice(0, 2));
//     if (numericText) {
//       const monthNum = parseInt(numericText, 10);
//       if (monthNum < 1 || monthNum > 12) {
//         setErrors(prev => ({ ...prev, month: translations.invalidMonth[language] }));
//       } else {
//         setErrors(prev => ({ ...prev, month: '' }));
//       }
//     } else {
//       setErrors(prev => ({ ...prev, month: '' }));
//     }
//   };

//   const handleYearChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setYear(numericText.slice(0, 4));
//     if (numericText && numericText.length !== 4) {
//       setErrors(prev => ({ ...prev, year: translations.invalidYear[language] }));
//     } else {
//       setErrors(prev => ({ ...prev, year: '' }));
//     }
//   };

//   const handleContinue = async () => {
//     if (!validateDate()) return;
    
//     try {
//       // Calculate age from birth date
//       const dob = new Date(`${year}-${month}-${day}`);
//       setBirthDate(dob.toISOString());
      
//       // Save the complete profile to Firebase
//       await saveProfile();
      
//       // Navigate to next screen
//       router.push('homescreens/info3');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     }
//   };

//   const isButtonDisabled = !firstName || !lastName || !day || !month || !year ||
//                           !!errors.day || !!errors.month || !!errors.year || loading;

//   return (
//     <View style={styles.container}>
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
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <FontAwesome6 name="user" size={scaleFont(40)} color="#4c5211" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.nameInputContainer}>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.firstNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={firstName}
//                 onFocus={() => setFirstNameFocused(true)}
//                 onBlur={() => setFirstNameFocused(false)}
//                 onChangeText={setFirstName}
//                 textAlign="left"
//               />
//               {firstNameFocused && <Text style={styles.nameLabel}>{translations.firstNamePlaceholder[language]}</Text>}
//             </View>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.lastNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={lastName}
//                 onFocus={() => setLastNameFocused(true)}
//                 onBlur={() => setLastNameFocused(false)}
//                 onChangeText={setLastName}
//                 textAlign="left"
//               />
//               {lastNameFocused && <Text style={styles.nameLabel}>{translations.lastNamePlaceholder[language]}</Text>}
//             </View>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <View style={styles.dateContainer}>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.day ? styles.errorInput : {}]}
//                 placeholder={translations.day[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={day}
//                 onFocus={() => setDayFocused(true)}
//                 onBlur={() => setDayFocused(false)}
//                 onChangeText={handleDayChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {dayFocused && <Text style={styles.dateLabel}>{translations.day[language]}</Text>}
//               {errors.day ? <Text style={styles.errorText}>{errors.day}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.month ? styles.errorInput : {}]}
//                 placeholder={translations.month[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={month}
//                 onFocus={() => setMonthFocused(true)}
//                 onBlur={() => setMonthFocused(false)}
//                 onChangeText={handleMonthChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {monthFocused && <Text style={styles.dateLabel}>{translations.month[language]}</Text>}
//               {errors.month ? <Text style={styles.errorText}>{errors.month}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.year ? styles.errorInput : {}]}
//                 placeholder={translations.year[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={year}
//                 onFocus={() => setYearFocused(true)}
//                 onBlur={() => setYearFocused(false)}
//                 onChangeText={handleYearChange}
//                 maxLength={4}
//                 textAlign="left"
//               />
//               {yearFocused && <Text style={styles.dateLabel}>{translations.year[language]}</Text>}
//               {errors.year ? <Text style={styles.errorText}>{errors.year}</Text> : null}
//             </View>
//           </View>

//           {!isKeyboardVisible && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleContinue}
//                 style={[styles.button, { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#f79598ff' }]}
//                 disabled={isButtonDisabled}
//               >
//                 {loading ? (
//                   <ActivityIndicator color="white" />
//                 ) : (
//                   <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 40,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     paddingBottom: scaleHeight(20),
//   },
//   contentContainer: {
//     paddingTop: scaleHeight(20),
//     paddingHorizontal: scaleHeight(20),
//     alignItems: 'center',
//     paddingBottom: scaleHeight(80),
//   },
//   buttonContainer: {
//     marginTop: scaleHeight(20),
//     width: '100%',
//     paddingHorizontal: scaleHeight(20),
//   },
//   iconContainer: {
//     alignItems: 'center',
//     backgroundColor: '#f7b5b7',
//     borderRadius: 99,
//     width: scaleHeight(80),
//     height: scaleHeight(80),
//     justifyContent: 'center',
//     marginBottom: scaleHeight(20),
//   },
//   title: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   nameInputContainer: {
//     width: '100%',
//     marginBottom: scaleHeight(30),
//   },
//   inputWrapper: {
//     marginBottom: scaleHeight(20),
//     position: 'relative',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: scaleHeight(15),
//     fontSize: scaleFont(16),
//     backgroundColor: '#fff',
//   },
//   errorInput: {
//     borderColor: '#FF6B6B',
//   },
//   nameInput: {
//     width: '100%',
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   nameLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: scaleHeight(20),
//   },
//   dateInputWrapper: {
//     width: '30%',
//     position: 'relative',
//   },
//   dateInput: {
//     height: scaleHeight(50),
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   dateLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   button: {
//     width: '100%',
//     padding: scaleHeight(15),
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   buttonText: {
//     fontSize: scaleFont(20),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
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
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: scaleFont(12),
//     marginTop: scaleHeight(5),
//     marginLeft: scaleHeight(5),
//   },
// });





// 21/08/2025
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Platform, ScrollView, Image, Animated, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useProfileNavigation } from '../utils/navigationHelper';

// const { width, height } = Dimensions.get('window');

// const scaleFont = (size) => Math.min(width / 360, 1.5) * size;
// const scaleHeight = (size) => Math.min(height / 700, 1.5) * size;

// export default function Info2() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix, gender } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  
//   // Load existing data
//   const [firstName, setFirstName] = useState(userData?.firstName || '');
//   const [lastName, setLastName] = useState(userData?.lastName || '');
//   const [day, setDay] = useState(userData?.birthDay || '');
//   const [month, setMonth] = useState(userData?.birthMonth || '');
//   const [year, setYear] = useState(userData?.birthYear || '');
//   const [formattedDate, setFormattedDate] = useState(userData?.dateOfBirth || '');
//   const [age, setAge] = useState(userData?.age || null);
  
//   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({
//     day: '',
//     month: '',
//     year: '',
//     date: ''
//   });

//   const [firstNameFocused, setFirstNameFocused] = useState(false);
//   const [lastNameFocused, setLastNameFocused] = useState(false);
//   const [dayFocused, setDayFocused] = useState(false);
//   const [monthFocused, setMonthFocused] = useState(false);
//   const [yearFocused, setYearFocused] = useState(false);

//   const translations = {
//     title: {
//       ENG: `${getPrefix()} name`,
//       HI: profileFor === 'MySelf' ? "आपका नाम" :
//         profileFor === 'My Son' ? "आपके बेटे का नाम" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का नाम" :
//         profileFor === 'My Sister' ? "आपकी बहन का नाम" :
//         profileFor === 'My Brother' ? "आपके भाई का नाम" :
//         profileFor === 'My Friend' ? "आपके दोस्त का नाम" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का नाम" :
//         "आपके रिश्तेदार का नाम"
//     },
//     subtitle: {
//       ENG: "Date of birth",
//       HI: "जन्म तिथि"
//     },
//     firstNamePlaceholder: {
//       ENG: "First name",
//       HI: "पहला नाम"
//     },
//     lastNamePlaceholder: {
//       ENG: "Last name",
//       HI: "उपनाम"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     day: {
//       ENG: "Day",
//       HI: "दिन"
//     },
//     month: {
//       ENG: "Month",
//       HI: "महीना"
//     },
//     year: {
//       ENG: "Year",
//       HI: "साल"
//     },
//     invalidDay: {
//       ENG: "Please enter a valid day (1-31)",
//       HI: "कृपया एक वैध दिन दर्ज करें (1-31)"
//     },
//     invalidMonth: {
//       ENG: "Please enter a valid month (1-12)",
//       HI: "कृपया एक वैध महीना दर्ज करें (1-12)"
//     },
//     invalidYear: {
//       ENG: "Please enter a valid 4-digit year",
//       HI: "कृपया एक वैध 4-अंकीय वर्ष दर्ज करें"
//     },
//     invalidDate: {
//       ENG: "Please enter a valid date",
//       HI: "कृपया एक वैध तिथि दर्ज करें"
//     },
//     age: {
//       ENG: "Age",
//       HI: "उम्र"
//     },
//     submitting: {
//       ENG: "Saving...",
//       HI: "सहेजा जा रहा है..."
//     }
//   };

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
//       () => setKeyboardVisible(true)
//     );
//     const keyboardDidHideListener = Keyboard.addListener(
//       Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
//       () => setKeyboardVisible(false)
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   useEffect(() => {
//     if (day && month && year) {
//       validateAndCalculateAge();
//     }
//   }, [day, month, year]);

//   const validateAndCalculateAge = () => {
//     const dayNum = parseInt(day, 10);
//     const monthNum = parseInt(month, 10);
//     const yearNum = parseInt(year, 10);

//     // Basic validation
//     if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
//       setErrors(prev => ({ ...prev, day: translations.invalidDay[language] }));
//       return false;
//     }

//     if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
//       setErrors(prev => ({ ...prev, month: translations.invalidMonth[language] }));
//       return false;
//     }

//     if (isNaN(yearNum) || year.length !== 4) {
//       setErrors(prev => ({ ...prev, year: translations.invalidYear[language] }));
//       return false;
//     }

//     // Advanced date validation
//     const date = new Date(yearNum, monthNum - 1, dayNum);
//     if (
//       date.getFullYear() !== yearNum ||
//       date.getMonth() !== monthNum - 1 ||
//       date.getDate() !== dayNum
//     ) {
//       setErrors(prev => ({ ...prev, date: translations.invalidDate[language] }));
//       return false;
//     }

//     // Check if date is in the future
//     const today = new Date();
//     if (date > today) {
//       setErrors(prev => ({ ...prev, date: translations.invalidDate[language] }));
//       return false;
//     }

//     // Clear errors if valid
//     setErrors({ day: '', month: '', year: '', date: '' });

//     // Format date as DD/MM/YYYY
//     const formatted = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
//     setFormattedDate(formatted);

//     // Calculate age
//     const ageDiff = today.getFullYear() - date.getFullYear();
//     const monthDiff = today.getMonth() - date.getMonth();
//     const dayDiff = today.getDate() - date.getDate();
    
//     const calculatedAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)
//       ? ageDiff - 1
//       : ageDiff;
    
//     setAge(calculatedAge);
//     return true;
//   };

//   const handleDayChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setDay(numericText.slice(0, 2));
//   };

//   const handleMonthChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setMonth(numericText.slice(0, 2));
//   };

//   const handleYearChange = (text) => {
//     const numericText = text.replace(/[^0-9]/g, '');
//     setYear(numericText.slice(0, 4));
//   };

//   const handleContinue = async () => {
//     if (!validateAndCalculateAge()) return;
//     if (isButtonDisabled) return;

//     try {
//       setIsSubmitting(true);

//       // Prepare profile data
//       const profileData = {
//         firstName,
//         lastName,
//         fullName: `${firstName} ${lastName}`,
//         dateOfBirth: formattedDate,
//         birthDay: day.padStart(2, '0'),
//         birthMonth: month.padStart(2, '0'),
//         birthYear: year,
//         age,
//         profileFor,
//         gender
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 2);

//       // Navigate to next screen
//       router.push(getNextScreen('homescreens/info2'));
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const isButtonDisabled = !firstName || !lastName || !day || !month || !year ||
//                           !!errors.day || !!errors.month || !!errors.year || !!errors.date;

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info2'))}
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
//         keyboardShouldPersistTaps="handled"
//         showsVerticalScrollIndicator={false}
//       >
//         <View style={styles.contentContainer}>
//           <View style={styles.iconContainer}>
//             <FontAwesome6 name="user" size={scaleFont(40)} color="#4c5211" />
//           </View>

//           <Text style={styles.title}>{translations.title[language]}</Text>

//           <View style={styles.nameInputContainer}>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.firstNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={firstName}
//                 onFocus={() => setFirstNameFocused(true)}
//                 onBlur={() => setFirstNameFocused(false)}
//                 onChangeText={setFirstName}
//                 textAlign="left"
//               />
//               {firstNameFocused && <Text style={styles.nameLabel}>{translations.firstNamePlaceholder[language]}</Text>}
//             </View>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.nameInput]}
//                 placeholder={translations.lastNamePlaceholder[language]}
//                 placeholderTextColor="#888"
//                 value={lastName}
//                 onFocus={() => setLastNameFocused(true)}
//                 onBlur={() => setLastNameFocused(false)}
//                 onChangeText={setLastName}
//                 textAlign="left"
//               />
//               {lastNameFocused && <Text style={styles.nameLabel}>{translations.lastNamePlaceholder[language]}</Text>}
//             </View>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <View style={styles.dateContainer}>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.day ? styles.errorInput : {}]}
//                 placeholder={translations.day[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={day}
//                 onFocus={() => setDayFocused(true)}
//                 onBlur={() => setDayFocused(false)}
//                 onChangeText={handleDayChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {dayFocused && <Text style={styles.dateLabel}>{translations.day[language]}</Text>}
//               {errors.day ? <Text style={styles.errorText}>{errors.day}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.month ? styles.errorInput : {}]}
//                 placeholder={translations.month[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={month}
//                 onFocus={() => setMonthFocused(true)}
//                 onBlur={() => setMonthFocused(false)}
//                 onChangeText={handleMonthChange}
//                 maxLength={2}
//                 textAlign="left"
//               />
//               {monthFocused && <Text style={styles.dateLabel}>{translations.month[language]}</Text>}
//               {errors.month ? <Text style={styles.errorText}>{errors.month}</Text> : null}
//             </View>
//             <View style={styles.dateInputWrapper}>
//               <TextInput
//                 style={[styles.input, styles.dateInput, errors.year ? styles.errorInput : {}]}
//                 placeholder={translations.year[language]}
//                 placeholderTextColor="#888"
//                 keyboardType="number-pad"
//                 value={year}
//                 onFocus={() => setYearFocused(true)}
//                 onBlur={() => setYearFocused(false)}
//                 onChangeText={handleYearChange}
//                 maxLength={4}
//                 textAlign="left"
//               />
//               {yearFocused && <Text style={styles.dateLabel}>{translations.year[language]}</Text>}
//               {errors.year ? <Text style={styles.errorText}>{errors.year}</Text> : null}
//             </View>
//           </View>

//           {errors.date && (
//             <Text style={[styles.errorText, { alignSelf: 'center', marginBottom: 10 }]}>
//               {errors.date}
//             </Text>
//           )}

//           {formattedDate && (
//             <View style={styles.dateDisplayContainer}>
//               <Text style={styles.dateDisplayText}>
//                 {translations.subtitle[language]}: {formattedDate}
//               </Text>
//             </View>
//           )}

//           {age !== null && (
//             <View style={styles.dateDisplayContainer}>
//               <Text style={styles.dateDisplayText}>
//                 {translations.age[language]}: {age}
//               </Text>
//             </View>
//           )}

//           {!isKeyboardVisible && (
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 onPress={handleContinue}
//                 style={[styles.button, { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#f79598ff' }]}
//                 disabled={isButtonDisabled || isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <ActivityIndicator color="white" />
//                 ) : (
//                   <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//                 )}
//               </TouchableOpacity>
//             </View>
//           )}
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
//     paddingBottom: scaleHeight(20),
//   },
//   contentContainer: {
//     paddingTop: scaleHeight(20),
//     paddingHorizontal: scaleHeight(20),
//     alignItems: 'center',
//     paddingBottom: scaleHeight(80),
//   },
//   buttonContainer: {
//     marginTop: scaleHeight(20),
//     width: '100%',
//     paddingHorizontal: scaleHeight(20),
//   },
//   button: {
//     width: '100%',
//     padding: scaleHeight(18),
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#f79598ff',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 6,
//   },
//   buttonText: {
//     fontSize: scaleFont(20),
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   iconContainer: {
//     alignItems: 'center',
//     backgroundColor: '#f7b5b7',
//     borderRadius: 99,
//     width: scaleHeight(80),
//     height: scaleHeight(80),
//     justifyContent: 'center',
//     marginBottom: scaleHeight(20),
//   },
//   title: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   subtitle: {
//     fontSize: scaleFont(30),
//     fontWeight: 'bold',
//     alignSelf: 'flex-start',
//     marginBottom: scaleHeight(20),
//     color: '#333',
//   },
//   nameInputContainer: {
//     width: '100%',
//     marginBottom: scaleHeight(30),
//   },
//   inputWrapper: {
//     marginBottom: scaleHeight(20),
//     position: 'relative',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: scaleHeight(15),
//     fontSize: scaleFont(16),
//     backgroundColor: '#fff',
//   },
//   errorInput: {
//     borderColor: '#FF6B6B',
//   },
//   nameInput: {
//     width: '100%',
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   nameLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   dateContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     marginBottom: scaleHeight(20),
//   },
//   dateInputWrapper: {
//     width: '30%',
//     position: 'relative',
//   },
//   dateInput: {
//     height: scaleHeight(50),
//     textAlign: 'left',
//     paddingLeft: scaleHeight(15),
//   },
//   dateLabel: {
//     position: 'absolute',
//     top: -scaleHeight(10),
//     left: scaleHeight(15),
//     backgroundColor: 'white',
//     paddingHorizontal: scaleHeight(5),
//     fontSize: scaleFont(12),
//     color: '#888',
//   },
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: scaleFont(12),
//     marginTop: scaleHeight(5),
//     marginLeft: scaleHeight(5),
//   },
//   dateDisplayContainer: {
//     width: '100%',
//     padding: scaleHeight(10),
//     backgroundColor: '#f8f9fa',
//     borderRadius: 8,
//     marginBottom: scaleHeight(10),
//   },
//   dateDisplayText: {
//     fontSize: scaleFont(16),
//     color: '#495057',
//   },
// });








//22/08/2025
//app/homescreens/info2.jsx
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Keyboard, Platform, ScrollView, Image, Animated, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfileNavigation } from '../utils/navigationHelper';

const { width, height } = Dimensions.get('window');

const scaleFont = (size) => Math.min(width / 360, 1.5) * size;
const scaleHeight = (size) => Math.min(height / 700, 1.5) * size;

export default function Info2() {
  const router = useRouter();
  const { language, toggleLanguage, translateX } = useLanguage();
  const { profileFor, getPrefix, gender } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  
  // Load existing data
  const [firstName, setFirstName] = useState(userData?.firstName || '');
  const [lastName, setLastName] = useState(userData?.lastName || '');
  const [day, setDay] = useState(userData?.birthDay || '');
  const [month, setMonth] = useState(userData?.birthMonth || '');
  const [year, setYear] = useState(userData?.birthYear || '');
  const [formattedDate, setFormattedDate] = useState(userData?.dateOfBirth || '');
  const [age, setAge] = useState(userData?.age || null);
  
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    day: '',
    month: '',
    year: '',
    date: ''
  });

  const [firstNameFocused, setFirstNameFocused] = useState(false);
  const [lastNameFocused, setLastNameFocused] = useState(false);
  const [dayFocused, setDayFocused] = useState(false);
  const [monthFocused, setMonthFocused] = useState(false);
  const [yearFocused, setYearFocused] = useState(false);

  const translations = {
    title: {
      ENG: `${getPrefix()} name`,
      HI: profileFor === 'MySelf' ? "आपका नाम" :
        profileFor === 'My Son' ? "आपके बेटे का नाम" :
        profileFor === 'My Daughter' ? "आपकी बेटी का नाम" :
        profileFor === 'My Sister' ? "आपकी बहन का नाम" :
        profileFor === 'My Brother' ? "आपके भाई का नाम" :
        profileFor === 'My Friend' ? "आपके दोस्त का नाम" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई का नाम" :
        "आपके रिश्तेदार का नाम"
    },
    subtitle: {
      ENG: "Date of birth",
      HI: "जन्म तिथि"
    },
    firstNamePlaceholder: {
      ENG: "First name",
      HI: "पहला नाम"
    },
    lastNamePlaceholder: {
      ENG: "Last name",
      HI: "उपनाम"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    day: {
      ENG: "Day",
      HI: "दिन"
    },
    month: {
      ENG: "Month",
      HI: "महीना"
    },
    year: {
      ENG: "Year",
      HI: "साल"
    },
    invalidDay: {
      ENG: "Please enter a valid day (1-31)",
      HI: "कृपया एक वैध दिन दर्ज करें (1-31)"
    },
    invalidMonth: {
      ENG: "Please enter a valid month (1-12)",
      HI: "कृपया एक वैध महीना दर्ज करें (1-12)"
    },
    invalidYear: {
      ENG: "Please enter a valid 4-digit year",
      HI: "कृपया एक वैध 4-अंकीय वर्ष दर्ज करें"
    },
    invalidDate: {
      ENG: "Please enter a valid date",
      HI: "कृपया एक वैध तिथि दर्ज करें"
    },
    age: {
      ENG: "Age",
      HI: "उम्र"
    },
    submitting: {
      ENG: "Saving...",
      HI: "सहेजा जा रहा है..."
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (day && month && year) {
      validateAndCalculateAge();
    }
  }, [day, month, year]);

  const validateAndCalculateAge = () => {
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    // Basic validation
    if (isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
      setErrors(prev => ({ ...prev, day: translations.invalidDay[language] }));
      return false;
    }

    if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
      setErrors(prev => ({ ...prev, month: translations.invalidMonth[language] }));
      return false;
    }

    if (isNaN(yearNum) || year.length !== 4) {
      setErrors(prev => ({ ...prev, year: translations.invalidYear[language] }));
      return false;
    }

    // Advanced date validation
    const date = new Date(yearNum, monthNum - 1, dayNum);
    if (
      date.getFullYear() !== yearNum ||
      date.getMonth() !== monthNum - 1 ||
      date.getDate() !== dayNum
    ) {
      setErrors(prev => ({ ...prev, date: translations.invalidDate[language] }));
      return false;
    }

    // Check if date is in the future
    const today = new Date();
    if (date > today) {
      setErrors(prev => ({ ...prev, date: translations.invalidDate[language] }));
      return false;
    }

    // Clear errors if valid
    setErrors({ day: '', month: '', year: '', date: '' });

    // Format date as DD/MM/YYYY
    const formatted = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
    setFormattedDate(formatted);

    // Calculate age
    const ageDiff = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();
    const dayDiff = today.getDate() - date.getDate();
    
    const calculatedAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) 
      ? ageDiff - 1 
      : ageDiff;
    
    setAge(calculatedAge);
    return true;
  };

  const handleDayChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setDay(numericText.slice(0, 2));
  };

  const handleMonthChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setMonth(numericText.slice(0, 2));
  };

  const handleYearChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    setYear(numericText.slice(0, 4));
  };

  const handleContinue = async () => {
    if (!validateAndCalculateAge()) return;
    if (isButtonDisabled) return;

    try {
      setIsSubmitting(true);

      // Prepare profile data
      const profileData = {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        dateOfBirth: formattedDate,
        birthDay: day.padStart(2, '0'),
        birthMonth: month.padStart(2, '0'),
        birthYear: year,
        age,
        profileFor,
        gender
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 2);

      // Navigate to next screen
      router.push(getNextScreen('homescreens/info2'));
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isButtonDisabled = !firstName || !lastName || !day || !month || !year ||
                          !!errors.day || !!errors.month || !!errors.year || !!errors.date;

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info2'))}
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
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome6 name="user" size={scaleFont(40)} color="#4c5211" />
          </View>

          <Text style={styles.title}>{translations.title[language]}</Text>

          <View style={styles.nameInputContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, styles.nameInput]}
                placeholder={translations.firstNamePlaceholder[language]}
                placeholderTextColor="#888"
                value={firstName}
                onFocus={() => setFirstNameFocused(true)}
                onBlur={() => setFirstNameFocused(false)}
                onChangeText={setFirstName}
                textAlign="left"
              />
              {firstNameFocused && <Text style={styles.nameLabel}>{translations.firstNamePlaceholder[language]}</Text>}
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, styles.nameInput]}
                placeholder={translations.lastNamePlaceholder[language]}
                placeholderTextColor="#888"
                value={lastName}
                onFocus={() => setLastNameFocused(true)}
                onBlur={() => setLastNameFocused(false)}
                onChangeText={setLastName}
                textAlign="left"
              />
              {lastNameFocused && <Text style={styles.nameLabel}>{translations.lastNamePlaceholder[language]}</Text>}
            </View>
          </View>

          <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

          <View style={styles.dateContainer}>
            <View style={styles.dateInputWrapper}>
              <TextInput
                style={[styles.input, styles.dateInput, errors.day ? styles.errorInput : {}]}
                placeholder={translations.day[language]}
                placeholderTextColor="#888"
                keyboardType="number-pad"
                value={day}
                onFocus={() => setDayFocused(true)}
                onBlur={() => setDayFocused(false)}
                onChangeText={handleDayChange}
                maxLength={2}
                textAlign="left"
              />
              {dayFocused && <Text style={styles.dateLabel}>{translations.day[language]}</Text>}
              {errors.day ? <Text style={styles.errorText}>{errors.day}</Text> : null}
            </View>
            <View style={styles.dateInputWrapper}>
              <TextInput
                style={[styles.input, styles.dateInput, errors.month ? styles.errorInput : {}]}
                placeholder={translations.month[language]}
                placeholderTextColor="#888"
                keyboardType="number-pad"
                value={month}
                onFocus={() => setMonthFocused(true)}
                onBlur={() => setMonthFocused(false)}
                onChangeText={handleMonthChange}
                maxLength={2}
                textAlign="left"
              />
              {monthFocused && <Text style={styles.dateLabel}>{translations.month[language]}</Text>}
              {errors.month ? <Text style={styles.errorText}>{errors.month}</Text> : null}
            </View>
            <View style={styles.dateInputWrapper}>
              <TextInput
                style={[styles.input, styles.dateInput, errors.year ? styles.errorInput : {}]}
                placeholder={translations.year[language]}
                placeholderTextColor="#888"
                keyboardType="number-pad"
                value={year}
                onFocus={() => setYearFocused(true)}
                onBlur={() => setYearFocused(false)}
                onChangeText={handleYearChange}
                maxLength={4}
                textAlign="left"
              />
              {yearFocused && <Text style={styles.dateLabel}>{translations.year[language]}</Text>}
              {errors.year ? <Text style={styles.errorText}>{errors.year}</Text> : null}
            </View>
          </View>

          {errors.date && (
            <Text style={[styles.errorText, { alignSelf: 'center', marginBottom: 10 }]}>
              {errors.date}
            </Text>
          )}

          {formattedDate && (
            <View style={styles.dateDisplayContainer}>
              <Text style={styles.dateDisplayText}>
                {translations.subtitle[language]}: {formattedDate}
              </Text>
            </View>
          )}

          {age !== null && (
            <View style={styles.dateDisplayContainer}>
              <Text style={styles.dateDisplayText}>
                {translations.age[language]}: {age}
              </Text>
            </View>
          )}

          {!isKeyboardVisible && (
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleContinue}
                style={[styles.button, { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#f79598ff' }]}
                disabled={isButtonDisabled || isSubmitting}
              >
                {isSubmitting ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.buttonText}>{translations.continue[language]}</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
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
    paddingBottom: scaleHeight(20),
  },
  contentContainer: {
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleHeight(20),
    alignItems: 'center',
    paddingBottom: scaleHeight(80),
  },
  buttonContainer: {
    marginTop: scaleHeight(20),
    width: '100%',
    paddingHorizontal: scaleHeight(20),
  },
  button: {
    width: '100%',
    padding: scaleHeight(18),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#f79598ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    fontSize: scaleFont(20),
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#f7b5b7',
    borderRadius: 99,
    width: scaleHeight(80),
    height: scaleHeight(80),
    justifyContent: 'center',
    marginBottom: scaleHeight(20),
  },
  title: {
    fontSize: scaleFont(30),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: scaleHeight(20),
    color: '#333',
  },
  subtitle: {
    fontSize: scaleFont(30),
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: scaleHeight(20),
    color: '#333',
  },
  nameInputContainer: {
    width: '100%',
    marginBottom: scaleHeight(30),
  },
  inputWrapper: {
    marginBottom: scaleHeight(20),
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: scaleHeight(15),
    fontSize: scaleFont(16),
    backgroundColor: '#fff',
  },
  errorInput: {
    borderColor: '#FF6B6B',
  },
  nameInput: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: scaleHeight(15),
  },
  nameLabel: {
    position: 'absolute',
    top: -scaleHeight(10),
    left: scaleHeight(15),
    backgroundColor: 'white',
    paddingHorizontal: scaleHeight(5),
    fontSize: scaleFont(12),
    color: '#888',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: scaleHeight(20),
  },
  dateInputWrapper: {
    width: '30%',
    position: 'relative',
  },
  dateInput: {
    height: scaleHeight(50),
    textAlign: 'left',
    paddingLeft: scaleHeight(15),
  },
  dateLabel: {
    position: 'absolute',
    top: -scaleHeight(10),
    left: scaleHeight(15),
    backgroundColor: 'white',
    paddingHorizontal: scaleHeight(5),
    fontSize: scaleFont(12),
    color: '#888',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: scaleFont(12),
    marginTop: scaleHeight(5),
    marginLeft: scaleHeight(5),
  },
  dateDisplayContainer: {
    width: '100%',
    padding: scaleHeight(10),
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: scaleHeight(10),
  },
  dateDisplayText: {
    fontSize: scaleFont(16),
    color: '#495057',
  },
});