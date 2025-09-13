// // // app/homescreens/info7.jsx
// // import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
// // import React, { useState } from 'react'
// // import { Brothers, Sisters, WorkDetailMom, WorkDetailsFather } from '../../constant/Info'
// // import { Picker } from '@react-native-picker/picker'
// // import AntDesign from '@expo/vector-icons/AntDesign';
// // import { MaterialIcons } from '@expo/vector-icons';
// // import { useRouter } from 'expo-router';
// // import { useLanguage } from '../context/LanguageContext';
// // import Animated from 'react-native-reanimated';

// // export default function Info7() {
// //   const router = useRouter();
// //   const [fatherStatus, setFatherStatus] = useState(null);
// //   const [motherStatus, setMotherStatus] = useState(null);
// //   const [sistersCount, setSistersCount] = useState(null);
// //   const [brothersCount, setBrothersCount] = useState(null);
// //   const { language, toggleLanguage } = useLanguage();

// //   // Complete translations
// //   const translations = {
// //     headerText: {
// //       ENG: "Family Information",
// //       HI: "परिवार की जानकारी"
// //     },
// //     fatherStatus: {
// //       ENG: "Father's Status",
// //       HI: "पिता की स्थिति"
// //     },
// //     motherStatus: {
// //       ENG: "Mother's Status",
// //       HI: "माता की स्थिति"
// //     },
// //     totalSisters: {
// //       ENG: "Total Sisters",
// //       HI: "कुल बहनें"
// //     },
// //     totalBrothers: {
// //       ENG: "Total Brothers",
// //       HI: "कुल भाई"
// //     },
// //     selectFatherStatus: {
// //       ENG: "Select father's status",
// //       HI: "पिता की स्थिति चुनें"
// //     },
// //     selectMotherStatus: {
// //       ENG: "Select mother's status",
// //       HI: "माता की स्थिति चुनें"
// //     },
// //     selectSistersCount: {
// //       ENG: "Select sisters count",
// //       HI: "बहनों की संख्या चुनें"
// //     },
// //     selectBrothersCount: {
// //       ENG: "Select brothers count",
// //       HI: "भाइयों की संख्या चुनें"
// //     },
// //     continue: {
// //       ENG: "Continue",
// //       HI: "जारी रखें"
// //     },
// //     fatherOptions: {
// //       ENG: WorkDetailsFather,
// //       HI: ["जीवित (नौकरीपेशा)", "जीवित (स्व-नियोजित)", "जीवित (अवकाशप्राप्त)", "निधन हो गया"]
// //     },
// //     motherOptions: {
// //       ENG: WorkDetailMom,
// //       HI: ["गृहिणी", "नौकरीपेशा", "स्व-नियोजित", "अवकाशप्राप्त", "निधन हो गया"]
// //     },
// //     sistersOptions: {
// //       ENG: Sisters,
// //       HI: ["0", "1", "2", "3", "4", "5+"]
// //     },
// //     brothersOptions: {
// //       ENG: Brothers,
// //       HI: ["0", "1", "2", "3", "4", "5+"]
// //     }
// //   };

// //   const isButtonDisabled = !fatherStatus || !motherStatus || !sistersCount || !brothersCount;

// //   return (
// //     <View style={styles.container}>
// //       {/* Language Toggle */}
// //       <View style={styles.languageToggleContainer}>
// //         <Text style={styles.languageLabel}>ENG</Text>
// //         <TouchableOpacity
// //           style={styles.toggleContainer}
// //           onPress={toggleLanguage}
// //           activeOpacity={0.8}
// //         >
// //           <Animated.View style={[
// //             styles.toggleButton,
// //             {
// //               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
// //               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
// //             }
// //           ]}>
// //             <Image
// //               source={language === 'ENG'
// //                 ? require('../../assets/uk-flag.png')
// //                 : require('../../assets/india-flag.png')}
// //               style={styles.flag}
// //             />
// //           </Animated.View>
// //         </TouchableOpacity>
// //         <Text style={styles.languageLabel}>हिंदी</Text>
// //       </View>

// //       {/* Header Section */}
// //       <View style={styles.header}>
// //         <View style={styles.iconCircle}>
// //           <AntDesign name="addusergroup" size={32} color="#7e57c2" />
// //         </View>
// //         <Text style={styles.headerText}>{translations.headerText[language]}</Text>
// //       </View>

// //       <ScrollView
// //         contentContainerStyle={styles.scrollContent}
// //         showsVerticalScrollIndicator={false}
// //       >
// //         {/* Father's Status */}
// //         <View style={styles.inputGroup}>
// //           <View style={styles.labelContainer}>
// //             <MaterialIcons name="family-restroom" size={20} color="#555" />
// //             <Text style={styles.label}>{translations.fatherStatus[language]}</Text>
// //           </View>
// //           <View style={[
// //             styles.pickerContainer,
// //             fatherStatus && styles.pickerContainerActive
// //           ]}>
// //             <Picker
// //               selectedValue={fatherStatus}
// //               onValueChange={(itemValue) => setFatherStatus(itemValue)}
// //               style={styles.picker}
// //               dropdownIconColor="#7e57c2"
// //               mode="dropdown"
// //             >
// //               <Picker.Item
// //                 label={translations.selectFatherStatus[language]}
// //                 value={null}
// //                 style={styles.placeholderText}
// //               />
// //               {WorkDetailsFather.map((work, index) => (
// //                 <Picker.Item
// //                   key={index}
// //                   label={translations.fatherOptions[language][index]}
// //                   value={work}
// //                   style={styles.pickerItemText}
// //                 />
// //               ))}
// //             </Picker>
// //           </View>
// //         </View>

// //         {/* Mother's Status */}
// //         <View style={styles.inputGroup}>
// //           <View style={styles.labelContainer}>
// //             <MaterialIcons name="family-restroom" size={20} color="#555" />
// //             <Text style={styles.label}>{translations.motherStatus[language]}</Text>
// //           </View>
// //           <View style={[
// //             styles.pickerContainer,
// //             motherStatus && styles.pickerContainerActive
// //           ]}>
// //             <Picker
// //               selectedValue={motherStatus}
// //               onValueChange={(itemValue) => setMotherStatus(itemValue)}
// //               style={styles.picker}
// //               dropdownIconColor="#7e57c2"
// //               mode="dropdown"
// //             >
// //               <Picker.Item
// //                 label={translations.selectMotherStatus[language]}
// //                 value={null}
// //                 style={styles.placeholderText}
// //               />
// //               {WorkDetailMom.map((mom, index) => (
// //                 <Picker.Item
// //                   key={index}
// //                   label={translations.motherOptions[language][index]}
// //                   value={mom}
// //                   style={styles.pickerItemText}
// //                 />
// //               ))}
// //             </Picker>
// //           </View>
// //         </View>

// //         {/* Sisters Count */}
// //         <View style={styles.inputGroup}>
// //           <View style={styles.labelContainer}>
// //             <MaterialIcons name="female" size={20} color="#e91e63" />
// //             <Text style={styles.label}>{translations.totalSisters[language]}</Text>
// //           </View>
// //           <View style={[
// //             styles.pickerContainer,
// //             sistersCount && styles.pickerContainerActive
// //           ]}>
// //             <Picker
// //               selectedValue={sistersCount}
// //               onValueChange={(itemValue) => setSistersCount(itemValue)}
// //               style={styles.picker}
// //               dropdownIconColor="#7e57c2"
// //               mode="dropdown"
// //             >
// //               <Picker.Item
// //                 label={translations.selectSistersCount[language]}
// //                 value={null}
// //                 style={styles.placeholderText}
// //               />
// //               {Sisters.map((count, index) => (
// //                 <Picker.Item
// //                   key={index}
// //                   label={translations.sistersOptions[language][index]}
// //                   value={count}
// //                   style={styles.pickerItemText}
// //                 />
// //               ))}
// //             </Picker>
// //           </View>
// //         </View>

// //         {/* Brothers Count */}
// //         <View style={styles.inputGroup}>
// //           <View style={styles.labelContainer}>
// //             <MaterialIcons name="male" size={20} color="#2196f3" />
// //             <Text style={styles.label}>{translations.totalBrothers[language]}</Text>
// //           </View>
// //           <View style={[
// //             styles.pickerContainer,
// //             brothersCount && styles.pickerContainerActive
// //           ]}>
// //             <Picker
// //               selectedValue={brothersCount}
// //               onValueChange={(itemValue) => setBrothersCount(itemValue)}
// //               style={styles.picker}
// //               dropdownIconColor="#7e57c2"
// //               mode="dropdown"
// //             >
// //               <Picker.Item
// //                 label={translations.selectBrothersCount[language]}
// //                 value={null}
// //                 style={styles.placeholderText}
// //               />
// //               {Brothers.map((count, index) => (
// //                 <Picker.Item
// //                   key={index}
// //                   label={translations.brothersOptions[language][index]}
// //                   value={count}
// //                   style={styles.pickerItemText}
// //                 />
// //               ))}
// //             </Picker>
// //           </View>
// //         </View>

// //         {/* Continue Button (now part of scroll flow) */}
// //         <View style={styles.buttonContainer}>
// //           <TouchableOpacity
// //             onPress={() => router.push('homescreens/info8')}
// //             style={[
// //               styles.button,
// //               {
// //                 backgroundColor: isButtonDisabled ? '#ADB5BD' : '#7e57c2',
// //                 opacity: isButtonDisabled ? 0.7 : 1
// //               }
// //             ]}
// //             disabled={isButtonDisabled}
// //           >
// //             <Text style={styles.buttonText}>{translations.continue[language]}</Text>

// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </View>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   languageToggleContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     paddingHorizontal: 20,
// //     paddingTop: 20,
// //     marginBottom: 10,
// //     gap: 6,
// //   },
// //   languageLabel: {
// //     fontWeight: '600',
// //     fontSize: 14,
// //     color: '#495057',
// //   },
// //   toggleContainer: {
// //     width: 60,
// //     height: 28,
// //     borderRadius: 14,
// //     backgroundColor: '#E9ECEF',
// //     justifyContent: 'center',
// //     paddingHorizontal: 2,
// //   },
// //   toggleButton: {
// //     width: 24,
// //     height: 24,
// //     borderRadius: 12,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   flag: {
// //     width: 18,
// //     height: 13,
// //     borderRadius: 2,
// //   },
// //   header: {
// //     alignItems: 'center',
// //     paddingTop: 10,
// //     paddingBottom: 20,
// //     backgroundColor: 'white',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e0e0e0',
// //     marginBottom: 10,
// //   },
// //   iconCircle: {
// //     backgroundColor: '#ede7f6',
// //     width: 60,
// //     height: 60,
// //     borderRadius: 30,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   headerText: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// //   scrollContent: {
// //     padding: 20,
// //     paddingBottom: 30,
// //   },
// //   inputGroup: {
// //     marginBottom: 20,
// //     backgroundColor: 'white',
// //     borderRadius: 12,
// //     padding: 15,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 2,
// //   },
// //   labelContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //     paddingBottom: 8,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   label: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#555',
// //     marginLeft: 10,
// //   },
// //   pickerContainer: {
// //     borderWidth: 1,
// //     borderColor: '#e0e0e0',
// //     borderRadius: 8,
// //     overflow: 'hidden',
// //     backgroundColor: '#fafafa',
// //   },
// //   pickerContainerActive: {
// //     borderColor: '#7e57c2',
// //     backgroundColor: '#f5f0ff',
// //   },
// //   picker: {
// //     width: '100%',
// //   },
// //   placeholderText: {
// //     color: '#999',
// //     fontSize: 16,
// //   },
// //   pickerItemText: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   buttonContainer: {
// //     alignItems: 'center',
// //     marginTop: 20,
// //     marginBottom: 40,
// //   },
// //   button: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: 30,
// //     paddingVertical: 16,
// //     paddingHorizontal: 30,
// //     width: '80%',
// //     shadowColor: '#7e57c2',
// //     shadowOffset: { width: 0, height: 4 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 8,
// //     elevation: 5,
// //   },
// //   buttonText: {
// //     color: 'white',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginRight: 10,
// //   },
// // });






// // app/homescreens/info7.jsx
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
// import React, { useState } from 'react'
// import { Brothers, Sisters, WorkDetailMom, WorkDetailsFather } from '../../constant/Info'
// import { Picker } from '@react-native-picker/picker'
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import Animated from 'react-native-reanimated';
// import { useProfile } from '../context/ProfileContext';

// export default function Info7() {
//   const router = useRouter();
//   const [fatherStatus, setFatherStatus] = useState(null);
//   const [motherStatus, setMotherStatus] = useState(null);
//   const [sistersCount, setSistersCount] = useState(null);
//   const [brothersCount, setBrothersCount] = useState(null);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();

//   // Complete translations
//   const translations = {
//     headerText: {
//       ENG: `${getPrefix()} Family Information`,
//       HI: profileFor === 'MySelf' ? "आपकी पारिवारिक जानकारी" :
//           profileFor === 'My Son' ? "आपके बेटे की पारिवारिक जानकारी" :
//           profileFor === 'My Daughter' ? "आपकी बेटी की पारिवारिक जानकारी" :
//           profileFor === 'My Sister' ? "आपकी बहन की पारिवारिक जानकारी" :
//           profileFor === 'My Brother' ? "आपके भाई की पारिवारिक जानकारी" :
//           profileFor === 'My Friend' ? "आपके दोस्त की पारिवारिक जानकारी" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई की पारिवारिक जानकारी" :
//           "आपके रिश्तेदार की पारिवारिक जानकारी"
//     },
//     fatherStatus: {
//       ENG: "Father's Status",
//       HI: profileFor === 'MySelf' ? "आपके पिता की स्थिति" :
//           profileFor === 'My Son' ? "आपके पिता की स्थिति" :
//           profileFor === 'My Daughter' ? "आपके पिता की स्थिति" :
//           profileFor === 'My Sister' ? "आपके पिता की स्थिति" :
//           profileFor === 'My Brother' ? "आपके पिता की स्थिति" :
//           profileFor === 'My Friend' ? "आपके दोस्त के पिता की स्थिति" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई के पिता की स्थिति" :
//           "आपके रिश्तेदार के पिता की स्थिति"
//     },
//     motherStatus: {
//       ENG: "Mother's Status",
//       HI: profileFor === 'MySelf' ? "आपकी माता की स्थिति" :
//           profileFor === 'My Son' ? "आपकी माता की स्थिति" :
//           profileFor === 'My Daughter' ? "आपकी माता की स्थिति" :
//           profileFor === 'My Sister' ? "आपकी माता की स्थिति" :
//           profileFor === 'My Brother' ? "आपकी माता की स्थिति" :
//           profileFor === 'My Friend' ? "आपके दोस्त की माता की स्थिति" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई की माता की स्थिति" :
//           "आपके रिश्तेदार की माता की स्थिति"
//     },
//     totalSisters: {
//       ENG: "Total Sisters",
//       HI: profileFor === 'MySelf' ? "कुल बहनें" :
//           profileFor === 'My Son' ? "उसकी कुल बहनें" :
//           profileFor === 'My Daughter' ? "उसकी कुल बहनें" :
//           profileFor === 'My Sister' ? "उसकी कुल बहनें" :
//           profileFor === 'My Brother' ? "उसकी कुल बहनें" :
//           profileFor === 'My Friend' ? "उसकी कुल बहनें" :
//           profileFor === 'Cousin' ? "उसकी कुल बहनें" :
//           "उसकी कुल बहनें"
//     },
//     totalBrothers: {
//       ENG: "Total Brothers",
//       HI: profileFor === 'MySelf' ? "कुल भाई" :
//           profileFor === 'My Son' ? "उसके कुल भाई" :
//           profileFor === 'My Daughter' ? "उसके कुल भाई" :
//           profileFor === 'My Sister' ? "उसके कुल भाई" :
//           profileFor === 'My Brother' ? "उसके कुल भाई" :
//           profileFor === 'My Friend' ? "उसके कुल भाई" :
//           profileFor === 'Cousin' ? "उसके कुल भाई" :
//           "उसके कुल भाई"
//     },
//     selectFatherStatus: {
//       ENG: `Select ${getPrefix().toLowerCase()} father's status`,
//       HI: profileFor === 'MySelf' ? "अपने पिता की स्थिति चुनें" :
//           profileFor === 'My Son' ? "अपने पिता की स्थिति चुनें" :
//           profileFor === 'My Daughter' ? "अपने पिता की स्थिति चुनें" :
//           profileFor === 'My Sister' ? "अपने पिता की स्थिति चुनें" :
//           profileFor === 'My Brother' ? "अपने पिता की स्थिति चुनें" :
//           profileFor === 'My Friend' ? "अपने दोस्त के पिता की स्थिति चुनें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई के पिता की स्थिति चुनें" :
//           "अपने रिश्तेदार के पिता की स्थिति चुनें"
//     },
//     selectMotherStatus: {
//       ENG: `Select ${getPrefix().toLowerCase()} mother's status`,
//       HI: profileFor === 'MySelf' ? "अपनी माता की स्थिति चुनें" :
//           profileFor === 'My Son' ? "अपनी माता की स्थिति चुनें" :
//           profileFor === 'My Daughter' ? "अपनी माता की स्थिति चुनें" :
//           profileFor === 'My Sister' ? "अपनी माता की स्थिति चुनें" :
//           profileFor === 'My Brother' ? "अपनी माता की स्थिति चुनें" :
//           profileFor === 'My Friend' ? "अपने दोस्त की माता की स्थिति चुनें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई की माता की स्थिति चुनें" :
//           "अपने रिश्तेदार की माता की स्थिति चुनें"
//     },
//     selectSistersCount: {
//       ENG: `Select ${getPrefix().toLowerCase()} sisters count`,
//       HI: profileFor === 'MySelf' ? "अपनी बहनों की संख्या चुनें" :
//           profileFor === 'My Son' ? "उसकी बहनों की संख्या चुनें" :
//           profileFor === 'My Daughter' ? "उसकी बहनों की संख्या चुनें" :
//           profileFor === 'My Sister' ? "उसकी बहनों की संख्या चुनें" :
//           profileFor === 'My Brother' ? "उसकी बहनों की संख्या चुनें" :
//           profileFor === 'My Friend' ? "उसकी बहनों की संख्या चुनें" :
//           profileFor === 'Cousin' ? "उसकी बहनों की संख्या चुनें" :
//           "उसकी बहनों की संख्या चुनें"
//     },
//     selectBrothersCount: {
//       ENG: `Select ${getPrefix().toLowerCase()} brothers count`,
//       HI: profileFor === 'MySelf' ? "अपने भाइयों की संख्या चुनें" :
//           profileFor === 'My Son' ? "उसके भाइयों की संख्या चुनें" :
//           profileFor === 'My Daughter' ? "उसके भाइयों की संख्या चुनें" :
//           profileFor === 'My Sister' ? "उसके भाइयों की संख्या चुनें" :
//           profileFor === 'My Brother' ? "उसके भाइयों की संख्या चुनें" :
//           profileFor === 'My Friend' ? "उसके भाइयों की संख्या चुनें" :
//           profileFor === 'Cousin' ? "उसके भाइयों की संख्या चुनें" :
//           "उसके भाइयों की संख्या चुनें"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     fatherOptions: {
//       ENG: WorkDetailsFather,
//       HI: ["जीवित (नौकरीपेशा)", "जीवित (स्व-नियोजित)", "जीवित (अवकाशप्राप्त)", "निधन हो गया"]
//     },
//     motherOptions: {
//       ENG: WorkDetailMom,
//       HI: ["गृहिणी", "नौकरीपेशा", "स्व-नियोजित", "अवकाशप्राप्त", "निधन हो गया"]
//     },
//     sistersOptions: {
//       ENG: Sisters,
//       HI: ["0", "1", "2", "3", "4", "5+"]
//     },
//     brothersOptions: {
//       ENG: Brothers,
//       HI: ["0", "1", "2", "3", "4", "5+"]
//     }
//   };

//   const isButtonDisabled = !fatherStatus || !motherStatus || !sistersCount || !brothersCount;

//   return (
//     <View style={styles.container}>
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

//       {/* Header Section */}
//       <View style={styles.header}>
//         <View style={styles.iconCircle}>
//           <AntDesign name="addusergroup" size={32} color="#7e57c2" />
//         </View>
//         <Text style={styles.headerText}>{translations.headerText[language]}</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Father's Status */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="family-restroom" size={20} color="#555" />
//             <Text style={styles.label}>{translations.fatherStatus[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             fatherStatus && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={fatherStatus}
//               onValueChange={(itemValue) => setFatherStatus(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectFatherStatus[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {WorkDetailsFather.map((work, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.fatherOptions[language][index]}
//                   value={work}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Mother's Status */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="family-restroom" size={20} color="#555" />
//             <Text style={styles.label}>{translations.motherStatus[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             motherStatus && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={motherStatus}
//               onValueChange={(itemValue) => setMotherStatus(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectMotherStatus[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {WorkDetailMom.map((mom, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.motherOptions[language][index]}
//                   value={mom}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Sisters Count */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="female" size={20} color="#e91e63" />
//             <Text style={styles.label}>{translations.totalSisters[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             sistersCount && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={sistersCount}
//               onValueChange={(itemValue) => setSistersCount(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectSistersCount[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {Sisters.map((count, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.sistersOptions[language][index]}
//                   value={count}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Brothers Count */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="male" size={20} color="#2196f3" />
//             <Text style={styles.label}>{translations.totalBrothers[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             brothersCount && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={brothersCount}
//               onValueChange={(itemValue) => setBrothersCount(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectBrothersCount[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {Brothers.map((count, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.brothersOptions[language][index]}
//                   value={count}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Continue Button (now part of scroll flow) */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={() => router.push('homescreens/info8')}
//             style={[
//               styles.button,
//               {
//                 backgroundColor: isButtonDisabled ? '#ADB5BD' : '#7e57c2',
//                 opacity: isButtonDisabled ? 0.7 : 1
//               }
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
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
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
//   header: {
//     alignItems: 'center',
//     paddingTop: 10,
//     paddingBottom: 20,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   iconCircle: {
//     backgroundColor: '#ede7f6',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 30,
//   },
//   inputGroup: {
//     marginBottom: 20,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   labelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#555',
//     marginLeft: 10,
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#fafafa',
//   },
//   pickerContainerActive: {
//     borderColor: '#7e57c2',
//     backgroundColor: '#f5f0ff',
//   },
//   picker: {
//     width: '100%',
//   },
//   placeholderText: {
//     color: '#999',
//     fontSize: 16,
//   },
//   pickerItemText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 16,
//     paddingHorizontal: 30,
//     width: '80%',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
// });







//16/08/2025

//app/homescreens/info7.jsx
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import { Brothers, Sisters, WorkDetailMom, WorkDetailsFather } from '../../constant/Info'
// import { Picker } from '@react-native-picker/picker'
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import Animated from 'react-native-reanimated';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info7() {
//   const router = useRouter();
//   const [fatherStatus, setFatherStatus] = useState(null);
//   const [motherStatus, setMotherStatus] = useState(null);
//   const [sistersCount, setSistersCount] = useState(null);
//   const [brothersCount, setBrothersCount] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();

//   // Helper function to get the proper prefix for translations
//   const getProperPrefix = (field) => {
//     if (profileFor === 'MySelf') {
//       return language === 'ENG' ? 'your' : 'अपना/अपनी';
//     }
//     return getPrefix().toLowerCase();
//   };

//   // Complete translations
//   const translations = {
//     headerText: {
//       ENG: `${getPrefix()} Family Information`,
//       HI: profileFor === 'MySelf' ? "पारिवारिक जानकारी" :
//           profileFor === 'My Son' ? "बेटे की पारिवारिक जानकारी" :
//           profileFor === 'My Daughter' ? "बेटी की पारिवारिक जानकारी" :
//           profileFor === 'My Sister' ? "बहन की पारिवारिक जानकारी" :
//           profileFor === 'My Brother' ? "भाई की पारिवारिक जानकारी" :
//           profileFor === 'My Friend' ? "दोस्त की पारिवारिक जानकारी" :
//           profileFor === 'Cousin' ? "चचेरे भाई की पारिवारिक जानकारी" :
//           "रिश्तेदार की पारिवारिक जानकारी"
//     },
//     fatherStatus: {
//       ENG: "Father's Status",
//       HI: profileFor === 'MySelf' ? "पिता की स्थिति" :
//           profileFor === 'My Son' ? "पिता की स्थिति" :
//           profileFor === 'My Daughter' ? "पिता की स्थिति" :
//           profileFor === 'My Sister' ? "पिता की स्थिति" :
//           profileFor === 'My Brother' ? "पिता की स्थिति" :
//           profileFor === 'My Friend' ? "दोस्त के पिता की स्थिति" :
//           profileFor === 'Cousin' ? "चचेरे भाई के पिता की स्थिति" :
//           "रिश्तेदार के पिता की स्थिति"
//     },
//     motherStatus: {
//       ENG: "Mother's Status",
//       HI: profileFor === 'MySelf' ? "माता की स्थिति" :
//           profileFor === 'My Son' ? "माता की स्थिति" :
//           profileFor === 'My Daughter' ? "माता की स्थिति" :
//           profileFor === 'My Sister' ? "माता की स्थिति" :
//           profileFor === 'My Brother' ? "माता की स्थिति" :
//           profileFor === 'My Friend' ? "दोस्त की माता की स्थिति" :
//           profileFor === 'Cousin' ? "चचेरे भाई की माता की स्थिति" :
//           "रिश्तेदार की माता की स्थिति"
//     },
//     totalSisters: {
//       ENG: "Total Sisters",
//       HI: profileFor === 'MySelf' ? "कुल बहनें" :
//           profileFor === 'My Son' ? "कुल बहनें" :
//           profileFor === 'My Daughter' ? "कुल बहनें" :
//           profileFor === 'My Sister' ? "कुल बहनें" :
//           profileFor === 'My Brother' ? "कुल बहनें" :
//           profileFor === 'My Friend' ? "कुल बहनें" :
//           profileFor === 'Cousin' ? "कुल बहनें" :
//           "कुल बहनें"
//     },
//     totalBrothers: {
//       ENG: "Total Brothers",
//       HI: profileFor === 'MySelf' ? "कुल भाई" :
//           profileFor === 'My Son' ? "कुल भाई" :
//           profileFor === 'My Daughter' ? "कुल भाई" :
//           profileFor === 'My Sister' ? "कुल भाई" :
//           profileFor === 'My Brother' ? "कुल भाई" :
//           profileFor === 'My Friend' ? "कुल भाई" :
//           profileFor === 'Cousin' ? "कुल भाई" :
//           "कुल भाई"
//     },
//     selectFatherStatus: {
//       ENG: `Select ${getProperPrefix('father')} father's status`,
//       HI: profileFor === 'MySelf' ? "पिता की स्थिति चुनें" :
//           profileFor === 'My Son' ? "पिता की स्थिति चुनें" :
//           profileFor === 'My Daughter' ? "पिता की स्थिति चुनें" :
//           profileFor === 'My Sister' ? "पिता की स्थिति चुनें" :
//           profileFor === 'My Brother' ? "पिता की स्थिति चुनें" :
//           profileFor === 'My Friend' ? "दोस्त के पिता की स्थिति चुनें" :
//           profileFor === 'Cousin' ? "चचेरे भाई के पिता की स्थिति चुनें" :
//           "रिश्तेदार के पिता की स्थिति चुनें"
//     },
//     selectMotherStatus: {
//       ENG: `Select ${getProperPrefix('mother')} mother's status`,
//       HI: profileFor === 'MySelf' ? "माता की स्थिति चुनें" :
//           profileFor === 'My Son' ? "माता की स्थिति चुनें" :
//           profileFor === 'My Daughter' ? "माता की स्थिति चुनें" :
//           profileFor === 'My Sister' ? "माता की स्थिति चुनें" :
//           profileFor === 'My Brother' ? "माता की स्थिति चुनें" :
//           profileFor === 'My Friend' ? "दोस्त की माता की स्थिति चुनें" :
//           profileFor === 'Cousin' ? "चचेरे भाई की माता की स्थिति चुनें" :
//           "रिश्तेदार की माता की स्थिति चुनें"
//     },
//     selectSistersCount: {
//       ENG: `Select ${getProperPrefix('sisters')} sisters count`,
//       HI: profileFor === 'MySelf' ? "बहनों की संख्या चुनें" :
//           profileFor === 'My Son' ? "बहनों की संख्या चुनें" :
//           profileFor === 'My Daughter' ? "बहनों की संख्या चुनें" :
//           profileFor === 'My Sister' ? "बहनों की संख्या चुनें" :
//           profileFor === 'My Brother' ? "बहनों की संख्या चुनें" :
//           profileFor === 'My Friend' ? "बहनों की संख्या चुनें" :
//           profileFor === 'Cousin' ? "बहनों की संख्या चुनें" :
//           "बहनों की संख्या चुनें"
//     },
//     selectBrothersCount: {
//       ENG: `Select ${getProperPrefix('brothers')} brothers count`,
//       HI: profileFor === 'MySelf' ? "भाइयों की संख्या चुनें" :
//           profileFor === 'My Son' ? "भाइयों की संख्या चुनें" :
//           profileFor === 'My Daughter' ? "भाइयों की संख्या चुनें" :
//           profileFor === 'My Sister' ? "भाइयों की संख्या चुनें" :
//           profileFor === 'My Brother' ? "भाइयों की संख्या चुनें" :
//           profileFor === 'My Friend' ? "भाइयों की संख्या चुनें" :
//           profileFor === 'Cousin' ? "भाइयों की संख्या चुनें" :
//           "भाइयों की संख्या चुनें"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     fatherOptions: {
//       ENG: WorkDetailsFather,
//       HI: ["जीवित (नौकरीपेशा)", "जीवित (स्व-नियोजित)", "जीवित (अवकाशप्राप्त)", "निधन हो गया"]
//     },
//     motherOptions: {
//       ENG: WorkDetailMom,
//       HI: ["गृहिणी", "नौकरीपेशा", "स्व-नियोजित", "अवकाशप्राप्त", "निधन हो गया"]
//     },
//     sistersOptions: {
//       ENG: Sisters,
//       HI: ["0", "1", "2", "3", "4", "5+"]
//     },
//     brothersOptions: {
//       ENG: Brothers,
//       HI: ["0", "1", "2", "3", "4", "5+"]
//     }
//   };

//   const isButtonDisabled = !fatherStatus || !motherStatus || !sistersCount || !brothersCount;

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare family data
//       const profileData = {
//         ...userData,
//         familyInfo: {
//           fatherStatus,
//           motherStatus,
//           sistersCount,
//           brothersCount
//         },
//         profileProgress: 70, // Update progress to 70%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info8');
//     } catch (error) {
//       console.error('Error saving family info:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
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
//           <ActivityIndicator size="large" color="#7e57c2" />
//         </View>
//       )}

//       {/* Header Section */}
//       <View style={styles.header}>
//         <View style={styles.iconCircle}>
//           <AntDesign name="addusergroup" size={32} color="#7e57c2" />
//         </View>
//         <Text style={styles.headerText}>{translations.headerText[language]}</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Father's Status */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="family-restroom" size={24} color="#555" />
//             <Text style={styles.label}>{translations.fatherStatus[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             fatherStatus && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={fatherStatus}
//               onValueChange={(itemValue) => setFatherStatus(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectFatherStatus[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {WorkDetailsFather.map((work, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.fatherOptions[language][index]}
//                   value={work}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Mother's Status */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="family-restroom" size={24} color="#555" />
//             <Text style={styles.label}>{translations.motherStatus[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             motherStatus && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={motherStatus}
//               onValueChange={(itemValue) => setMotherStatus(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectMotherStatus[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {WorkDetailMom.map((mom, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.motherOptions[language][index]}
//                   value={mom}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Sisters Count */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="female" size={24} color="#e91e63" />
//             <Text style={styles.label}>{translations.totalSisters[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             sistersCount && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={sistersCount}
//               onValueChange={(itemValue) => setSistersCount(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectSistersCount[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {Sisters.map((count, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.sistersOptions[language][index]}
//                   value={count}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Brothers Count */}
//         <View style={styles.inputGroup}>
//           <View style={styles.labelContainer}>
//             <MaterialIcons name="male" size={24} color="#2196f3" />
//             <Text style={styles.label}>{translations.totalBrothers[language]}</Text>
//           </View>
//           <View style={[
//             styles.pickerContainer,
//             brothersCount && styles.pickerContainerActive
//           ]}>
//             <Picker
//               selectedValue={brothersCount}
//               onValueChange={(itemValue) => setBrothersCount(itemValue)}
//               style={styles.picker}
//               dropdownIconColor="#7e57c2"
//               mode="dropdown"
//             >
//               <Picker.Item
//                 label={translations.selectBrothersCount[language]}
//                 value={null}
//                 style={styles.placeholderText}
//               />
//               {Brothers.map((count, index) => (
//                 <Picker.Item
//                   key={index}
//                   label={translations.brothersOptions[language][index]}
//                   value={count}
//                   style={styles.pickerItemText}
//                 />
//               ))}
//             </Picker>
//           </View>
//         </View>

//         {/* Continue Button */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             onPress={handleContinue}
//             style={[
//               styles.button,
//               {
//                 backgroundColor: isButtonDisabled ? '#ADB5BD' : '#7e57c2',
//                 opacity: isButtonDisabled ? 0.7 : 1
//               }
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
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
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
//   header: {
//     alignItems: 'center',
//     paddingTop: 10,
//     paddingBottom: 20,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     marginBottom: 10,
//   },
//   iconCircle: {
//     backgroundColor: '#ede7f6',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 30,
//   },
//   inputGroup: {
//     marginBottom: 20,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   labelContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#555',
//     marginLeft: 10,
//   },
//   pickerContainer: {
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#fafafa',
//   },
//   pickerContainerActive: {
//     borderColor: '#7e57c2',
//     backgroundColor: '#f5f0ff',
//   },
//   picker: {
//     width: '100%',
//   },
//   placeholderText: {
//     color: '#999',
//     fontSize: 16,
//   },
//   pickerItemText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   buttonContainer: {
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 16,
//     paddingHorizontal: 30,
//     width: '80%',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
// });









//23/08/2025


import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Brothers, Sisters, WorkDetailMom, WorkDetailsFather } from '../../constant/Info'
import { Picker } from '@react-native-picker/picker'
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import Animated from 'react-native-reanimated';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { useProfileNavigation } from '../utils/navigationHelper';

export default function Info7() {
  const router = useRouter();
  const [fatherStatus, setFatherStatus] = useState(null);
  const [motherStatus, setMotherStatus] = useState(null);
  const [sistersCount, setSistersCount] = useState(null);
  const [brothersCount, setBrothersCount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();

  // Load existing data
  useEffect(() => {
    if (userData?.familyInfo) {
      if (userData.familyInfo.fatherStatus) {
        setFatherStatus(userData.familyInfo.fatherStatus);
      }
      if (userData.familyInfo.motherStatus) {
        setMotherStatus(userData.familyInfo.motherStatus);
      }
      if (userData.familyInfo.sistersCount) {
        setSistersCount(userData.familyInfo.sistersCount);
      }
      if (userData.familyInfo.brothersCount) {
        setBrothersCount(userData.familyInfo.brothersCount);
      }
    }
  }, [userData]);

  // Helper function to get the proper prefix for translations
  const getProperPrefix = (field) => {
    if (profileFor === 'MySelf') {
      return language === 'ENG' ? 'your' : 'अपना/अपनी';
    }
    return getPrefix().toLowerCase();
  };

  // Complete translations
  const translations = {
    headerText: {
      ENG: `${getPrefix()} Family Information`,
      HI: profileFor === 'MySelf' ? "पारिवारिक जानकारी" : 
          profileFor === 'My Son' ? "बेटे की पारिवारिक जानकारी" :
          profileFor === 'My Daughter' ? "बेटी की पारिवारिक जानकारी" :
          profileFor === 'My Sister' ? "बहन की पारिवारिक जानकारी" :
          profileFor === 'My Brother' ? "भाई की पारिवारिक जानकारी" :
          profileFor === 'My Friend' ? "दोस्त की पारिवारिक जानकारी" :
          profileFor === 'Cousin' ? "चचेरे भाई की पारिवारिक जानकारी" :
          "रिश्तेदार की पारिवारिक जानकारी"
    },
    fatherStatus: {
      ENG: "Father's Status",
      HI: profileFor === 'MySelf' ? "पिता की स्थिति" : 
          profileFor === 'My Son' ? "पिता की स्थिति" :
          profileFor === 'My Daughter' ? "पिता की स्थिति" :
          profileFor === 'My Sister' ? "पिता की स्थिति" :
          profileFor === 'My Brother' ? "पिता की स्थिति" :
          profileFor === 'My Friend' ? "दोस्त के पिता की स्थिति" :
          profileFor === 'Cousin' ? "चचेरे भाई के पिता की स्थिति" :
          "रिश्तेदार के पिता की स्थिति"
    },
    motherStatus: {
      ENG: "Mother's Status",
      HI: profileFor === 'MySelf' ? "माता की स्थिति" : 
          profileFor === 'My Son' ? "माता की स्थिति" :
          profileFor === 'My Daughter' ? "माता की स्थिति" :
          profileFor === 'My Sister' ? "माता की स्थिति" :
          profileFor === 'My Brother' ? "माता की स्थिति" :
          profileFor === 'My Friend' ? "दोस्त की माता की स्थिति" :
          profileFor === 'Cousin' ? "चचेरे भाई की माता की स्थिति" :
          "रिश्तेदार की माता की स्थिति"
    },
    totalSisters: {
      ENG: "Total Sisters",
      HI: profileFor === 'MySelf' ? "कुल बहनें" : 
          profileFor === 'My Son' ? "कुल बहनें" :
          profileFor === 'My Daughter' ? "कुल बहनें" :
          profileFor === 'My Sister' ? "कुल बहनें" :
          profileFor === 'My Brother' ? "कुल बहनें" :
          profileFor === 'My Friend' ? "कुल बहनें" :
          profileFor === 'Cousin' ? "कुल बहनें" :
          "कुल बहनें"
    },
    totalBrothers: {
      ENG: "Total Brothers",
      HI: profileFor === 'MySelf' ? "कुल भाई" : 
          profileFor === 'My Son' ? "कुल भाई" :
          profileFor === 'My Daughter' ? "कुल भाई" :
          profileFor === 'My Sister' ? "कुल भाई" :
          profileFor === 'My Brother' ? "कुल भाई" :
          profileFor === 'My Friend' ? "कुल भाई" :
          profileFor === 'Cousin' ? "कुल भाई" :
          "कुल भाई"
    },
    selectFatherStatus: {
      ENG: `Select ${getProperPrefix('father')} father's status`,
      HI: profileFor === 'MySelf' ? "पिता की स्थिति चुनें" : 
          profileFor === 'My Son' ? "पिता की स्थिति चुनें" :
          profileFor === 'My Daughter' ? "पिता की स्थिति चुनें" :
          profileFor === 'My Sister' ? "पिता की स्थिति चुनें" :
          profileFor === 'My Brother' ? "पिता की स्थिति चुनें" :
          profileFor === 'My Friend' ? "दोस्त के पिता की स्थिति चुनें" :
          profileFor === 'Cousin' ? "चचेरे भाई के पिता की स्थिति चुनें" :
          "रिश्तेदार के पिता की स्थिति चुनें"
    },
    selectMotherStatus: {
      ENG: `Select ${getProperPrefix('mother')} mother's status`,
      HI: profileFor === 'MySelf' ? "माता की स्थिति चुनें" : 
          profileFor === 'My Son' ? "माता की स्थिति चुनें" :
          profileFor === 'My Daughter' ? "माता की स्थिति चुनें" :
          profileFor === 'My Sister' ? "माता की स्थिति चुनें" :
          profileFor === 'My Brother' ? "माता की स्थिति चुनें" :
          profileFor === 'My Friend' ? "दोस्त की माता की स्थिति चुनें" :
          profileFor === 'Cousin' ? "चचेरे भाई की माता की स्थिति चुनें" :
          "रिश्तेदार की माता की स्थिति चुनें"
    },
    selectSistersCount: {
      ENG: `Select ${getProperPrefix('sisters')} sisters count`,
      HI: profileFor === 'MySelf' ? "बहनों की संख्या चुनें" : 
          profileFor === 'My Son' ? "बहनों की संख्या चुनें" :
          profileFor === 'My Daughter' ? "बहनों की संख्या चुनें" :
          profileFor === 'My Sister' ? "बहनों की संख्या चुनें" :
          profileFor === 'My Brother' ? "बहनों की संख्या चुनें" :
          profileFor === 'My Friend' ? "बहनों की संख्या चुनें" :
          profileFor === 'Cousin' ? "बहनों की संख्या चुनें" :
          "बहनों की संख्या चुनें"
    },
    selectBrothersCount: {
      ENG: `Select ${getProperPrefix('brothers')} brothers count`,
      HI: profileFor === 'MySelf' ? "भाइयों की संख्या चुनें" : 
          profileFor === 'My Son' ? "भाइयों की संख्या चुनें" :
          profileFor === 'My Daughter' ? "भाइयों की संख्या चुनें" :
          profileFor === 'My Sister' ? "भाइयों की संख्या चुनें" :
          profileFor === 'My Brother' ? "भाइयों की संख्या चुनें" :
          profileFor === 'My Friend' ? "भाइयों की संख्या चुनें" :
          profileFor === 'Cousin' ? "भाइयों की संख्या चुनें" :
          "भाइयों की संख्या चुनें"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    fatherOptions: {
      ENG: WorkDetailsFather,
      HI: ["जीवित (नौकरीपेशा)", "जीवित (स्व-नियोजित)", "जीवित (अवकाशप्राप्त)", "निधन हो गया"]
    },
    motherOptions: {
      ENG: WorkDetailMom,
      HI: ["गृहिणी", "नौकरीपेशा", "स्व-नियोजित", "अवकाशप्राप्त", "निधन हो गया"]
    },
    sistersOptions: {
      ENG: Sisters,
      HI: ["0", "1", "2", "3", "4", "5+"]
    },
    brothersOptions: {
      ENG: Brothers,
      HI: ["0", "1", "2", "3", "4", "5+"]
    }
  };

  const isButtonDisabled = !fatherStatus || !motherStatus || !sistersCount || !brothersCount;

  const handleContinue = async () => {
    if (isButtonDisabled) return;
    
    try {
      setIsLoading(true);
      
      // Prepare family data
      const profileData = {
        ...userData,
        familyInfo: {
          fatherStatus,
          motherStatus,
          sistersCount,
          brothersCount
        },
        profileProgress: 70,
        updatedAt: serverTimestamp()
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 7);

      // Navigate to next screen
      router.push(getNextScreen('homescreens/info7'));
    } catch (error) {
      console.error('Error saving family info:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info7'))}
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

      <View style={styles.contentContainer}>
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#7e57c2" />
          </View>
        )}

        {/* Header Section */}
        <View style={styles.headerSection}>
          <View style={styles.iconCircle}>
            <AntDesign name="addusergroup" size={32} color="#7e57c2" />
          </View>
          <Text style={styles.headerText}>{translations.headerText[language]}</Text>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Father's Status */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <MaterialIcons name="family-restroom" size={24} color="#555" />
              <Text style={styles.label}>{translations.fatherStatus[language]}</Text>
            </View>
            <View style={[
              styles.pickerContainer,
              fatherStatus && styles.pickerContainerActive
            ]}>
              <Picker
                selectedValue={fatherStatus}
                onValueChange={(itemValue) => setFatherStatus(itemValue)}
                style={styles.picker}
                dropdownIconColor="#7e57c2"
                mode="dropdown"
              >
                <Picker.Item 
                  label={translations.selectFatherStatus[language]} 
                  value={null} 
                  style={styles.placeholderText}
                />
                {WorkDetailsFather.map((work, index) => (
                  <Picker.Item 
                    key={index} 
                    label={translations.fatherOptions[language][index]} 
                    value={work} 
                    style={styles.pickerItemText}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Mother's Status */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <MaterialIcons name="family-restroom" size={24} color="#555" />
              <Text style={styles.label}>{translations.motherStatus[language]}</Text>
            </View>
            <View style={[
              styles.pickerContainer,
              motherStatus && styles.pickerContainerActive
            ]}>
              <Picker
                selectedValue={motherStatus}
                onValueChange={(itemValue) => setMotherStatus(itemValue)}
                style={styles.picker}
                dropdownIconColor="#7e57c2"
                mode="dropdown"
              >
                <Picker.Item 
                  label={translations.selectMotherStatus[language]} 
                  value={null} 
                  style={styles.placeholderText}
                />
                {WorkDetailMom.map((mom, index) => (
                  <Picker.Item 
                    key={index} 
                    label={translations.motherOptions[language][index]} 
                    value={mom} 
                    style={styles.pickerItemText}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Sisters Count */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <MaterialIcons name="female" size={24} color="#e91e63" />
              <Text style={styles.label}>{translations.totalSisters[language]}</Text>
            </View>
            <View style={[
              styles.pickerContainer,
              sistersCount && styles.pickerContainerActive
            ]}>
              <Picker
                selectedValue={sistersCount}
                onValueChange={(itemValue) => setSistersCount(itemValue)}
                style={styles.picker}
                dropdownIconColor="#7e57c2"
                mode="dropdown"
              >
                <Picker.Item 
                  label={translations.selectSistersCount[language]} 
                  value={null} 
                  style={styles.placeholderText}
                />
                {Sisters.map((count, index) => (
                  <Picker.Item 
                    key={index} 
                    label={translations.sistersOptions[language][index]} 
                    value={count} 
                    style={styles.pickerItemText}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Brothers Count */}
          <View style={styles.inputGroup}>
            <View style={styles.labelContainer}>
              <MaterialIcons name="male" size={24} color="#2196f3" />
              <Text style={styles.label}>{translations.totalBrothers[language]}</Text>
            </View>
            <View style={[
              styles.pickerContainer,
              brothersCount && styles.pickerContainerActive
            ]}>
              <Picker
                selectedValue={brothersCount}
                onValueChange={(itemValue) => setBrothersCount(itemValue)}
                style={styles.picker}
                dropdownIconColor="#7e57c2"
                mode="dropdown"
              >
                <Picker.Item 
                  label={translations.selectBrothersCount[language]} 
                  value={null} 
                  style={styles.placeholderText}
                />
                {Brothers.map((count, index) => (
                  <Picker.Item 
                    key={index} 
                    label={translations.brothersOptions[language][index]} 
                    value={count} 
                    style={styles.pickerItemText}
                  />
                ))}
              </Picker>
            </View>
          </View>

          {/* Continue Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={handleContinue}
              style={[
                styles.button, 
                { 
                  backgroundColor: isButtonDisabled ? '#ADB5BD' : '#7e57c2',
                  opacity: isButtonDisabled ? 0.7 : 1
                }
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f3e5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  inputGroup: {
    marginBottom: 25,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    overflow: 'hidden',
  },
  pickerContainerActive: {
    borderColor: '#7e57c2',
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  placeholderText: {
    color: '#999',
    fontSize: 14,
  },
  pickerItemText: {
    fontSize: 14,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#7e57c2',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});