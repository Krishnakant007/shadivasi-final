// // app/homescreens/info6.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, Image } from 'react-native'
// import React, { useState } from 'react'
// import { Income, occupationList, Qualification, WorkDetails } from '../../constant/Info'
// import { useRouter } from 'expo-router'
// import { MaterialIcons, FontAwesome, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
// import { useLanguage } from '../context/LanguageContext'
// import Animated from 'react-native-reanimated'

// export default function Info6() {
//   const router = useRouter();
//   const [selectedQualification, setSelectedQualification] = useState(null);
//   const [selectedEmployment, setSelectedEmployment] = useState(null);
//   const [selectedOccupation, setSelectedOccupation] = useState(null);
//   const [selectedIncome, setSelectedIncome] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeModal, setActiveModal] = useState(null);
//   const [filteredData, setFilteredData] = useState([]);
//   const { language, toggleLanguage } = useLanguage();

//   // Complete translations object
//   const translations = {
//     headerText: {
//       ENG: "Professional Details",
//       HI: "पेशेवर विवरण"
//     },
//     qualification: {
//       ENG: "qualification",
//       HI: "योग्यता"
//     },
//     employment: {
//       ENG: "employment type",
//       HI: "रोजगार प्रकार"
//     },
//     occupation: {
//       ENG: "occupation",
//       HI: "व्यवसाय"
//     },
//     income: {
//       ENG: "income range",
//       HI: "आय सीमा"
//     },
//     selectQualification: {
//       ENG: "Select qualification",
//       HI: "योग्यता चुनें"
//     },
//     selectEmployment: {
//       ENG: "Select employment type",
//       HI: "रोजगार प्रकार चुनें"
//     },
//     selectOccupation: {
//       ENG: "Select occupation",
//       HI: "व्यवसाय चुनें"
//     },
//     selectIncome: {
//       ENG: "Select income range",
//       HI: "आय सीमा चुनें"
//     },
//     searchPlaceholder: {
//       ENG: "Search for",
//       HI: "खोजें"
//     },
//     noResults: {
//       ENG: "No results found",
//       HI: "कोई परिणाम नहीं मिला"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     qualificationOptions: {
//       ENG: Qualification,
//       HI: ["हाई स्कूल", "स्नातक", "स्नातकोत्तर", "डॉक्टरेट", "डिप्लोमा", "व्यावसायिक"]
//     },
//     employmentOptions: {
//       ENG: WorkDetails,
//       HI: ["निजी", "सरकारी", "स्वरोजगार", "बेरोजगार", "छात्र"]
//     },
//     occupationOptions: {
//       ENG: occupationList,
//       HI: ["डॉक्टर", "इंजीनियर", "शिक्षक", "वकील", "किसान", "कलाकार", "व्यवसायी", "अन्य"]
//     },
//     incomeOptions: {
//       ENG: Income,
//       HI: ["5 लाख से कम", "5-10 लाख", "10-20 लाख", "20-50 लाख", "50 लाख से अधिक"]
//     }
//   };

//   const isButtonDisabled = !selectedQualification || !selectedEmployment ||
//                          !selectedOccupation || !selectedIncome;

//   const openModal = (type, data) => {
//     if (!data) return;
//     setActiveModal(type);
//     setFilteredData(data);
//     setSearchQuery('');
//   };

//   const closeModal = () => {
//     setActiveModal(null);
//     setSearchQuery('');
//   };

//   const handleSelect = (item) => {
//     if (!activeModal) return;
    
//     switch(activeModal) {
//       case 'qualification':
//         setSelectedQualification(item);
//         break;
//       case 'employment':
//         setSelectedEmployment(item);
//         break;
//       case 'occupation':
//         setSelectedOccupation(item);
//         break;
//       case 'income':
//         setSelectedIncome(item);
//         break;
//       default:
//         break;
//     }
//     closeModal();
//   };

//   const filteredItems = filteredData.filter(item =>
//     item && item.toString().toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleSelect(item)}
//     >
//       <Text style={styles.listText}>
//         {translations[`${activeModal}Options`]?.[language]?.[index] || item}
//       </Text>
//     </TouchableOpacity>
//   );

//   const renderModal = () => {
//     if (!activeModal) return null;
    
//     const modalTitle = translations[activeModal]?.[language] || '';
//     const searchPlaceholder = `${translations.searchPlaceholder[language]} ${modalTitle}`;

//     return (
//       <Modal
//         visible={!!activeModal}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={searchPlaceholder}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//                 autoFocus={true}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity onPress={closeModal}>
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             <FlatList
//               data={filteredItems}
//               renderItem={renderItem}
//               keyExtractor={(item, index) => index.toString()}
//               style={styles.list}
//               ListEmptyComponent={
//                 <View style={styles.emptyContainer}>
//                   <MaterialIcons name="search-off" size={50} color="#ddd" />
//                   <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
//                 </View>
//               }
//             />
//           </View>
//         </View>
//       </Modal>
//     );
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

//       {/* Header with Icon */}
//       <View style={styles.header}>
//         <MaterialIcons name="work-outline" size={40} color="#fff" />
//         <Text style={styles.headerText}>{translations.headerText[language]}</Text>
//       </View>

//       {/* Qualification Field */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="graduation-cap" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('qualification', Qualification)}
//         >
//           <Text style={selectedQualification ? styles.selectedText : styles.placeholderText}>
//             {selectedQualification
//               ? translations.qualificationOptions[language][Qualification.indexOf(selectedQualification)]
//               : translations.selectQualification[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Employment Field */}
//       <View style={styles.inputContainer}>
//         <MaterialCommunityIcons name="office-building" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('employment', WorkDetails)}
//         >
//           <Text style={selectedEmployment ? styles.selectedText : styles.placeholderText}>
//             {selectedEmployment
//               ? translations.employmentOptions[language][WorkDetails.indexOf(selectedEmployment)]
//               : translations.selectEmployment[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Occupation Field */}
//       <View style={styles.inputContainer}>
//         <Ionicons name="briefcase-outline" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('occupation', occupationList)}
//         >
//           <Text style={selectedOccupation ? styles.selectedText : styles.placeholderText}>
//             {selectedOccupation
//               ? translations.occupationOptions[language][occupationList.indexOf(selectedOccupation)]
//               : translations.selectOccupation[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Income Field */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="money" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('income', Income)}
//         >
//           <Text style={selectedIncome ? styles.selectedText : styles.placeholderText}>
//             {selectedIncome
//               ? translations.incomeOptions[language][Income.indexOf(selectedIncome)]
//               : translations.selectIncome[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity
//         onPress={() => router.push('homescreens/info7')}
//         style={[
//           styles.button,
//           { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#4a90e2' }
//         ]}
//         disabled={isButtonDisabled}
//       >
//         <Text style={styles.buttonText}>{translations.continue[language]}</Text>
 
//       </TouchableOpacity>

//       {renderModal()}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 40
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
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4a90e2',
//     padding: 20,
//     borderRadius: 15,
//     marginBottom: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginLeft: 15
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20
//   },
//   fieldIcon: {
//     marginRight: 15
//   },
//   selectionBox: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f9fa',
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 10,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2
//   },
//   selectedText: {
//     fontSize: 16,
//     color: '#212529',
//     flex: 1
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#6c757d',
//     flex: 1
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     marginHorizontal: 20,
//     borderRadius: 15,
//     maxHeight: '70%',
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 10
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5'
//   },
//   searchIcon: {
//     marginRight: 10
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#212529'
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 18,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5'
//   },
//   listText: {
//     fontSize: 16,
//     color: '#212529'
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30
//   },
//   noResultsText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 10
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 16,
//     marginTop: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10
//   }
// });




// // app/homescreens/info6.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, Image } from 'react-native'
// import React, { useState } from 'react'
// import { Income, occupationList, Qualification, WorkDetails } from '../../constant/Info'
// import { useRouter } from 'expo-router'
// import { MaterialIcons, FontAwesome, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
// import { useLanguage } from '../context/LanguageContext'
// import Animated from 'react-native-reanimated'
// import { useProfile } from '../context/ProfileContext'

// export default function Info6() {
//   const router = useRouter();
//   const [selectedQualification, setSelectedQualification] = useState(null);
//   const [selectedEmployment, setSelectedEmployment] = useState(null);
//   const [selectedOccupation, setSelectedOccupation] = useState(null);
//   const [selectedIncome, setSelectedIncome] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeModal, setActiveModal] = useState(null);
//   const [filteredData, setFilteredData] = useState([]);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();

//   // Complete translations object
//   const translations = {
//     headerText: {
//       ENG: `${getPrefix()} Professional Details`,
//       HI: profileFor === 'MySelf' ? "आपका पेशेवर विवरण" :
//           profileFor === 'My Son' ? "आपके बेटे का पेशेवर विवरण" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का पेशेवर विवरण" :
//           profileFor === 'My Sister' ? "आपकी बहन का पेशेवर विवरण" :
//           profileFor === 'My Brother' ? "आपके भाई का पेशेवर विवरण" :
//           profileFor === 'My Friend' ? "आपके दोस्त का पेशेवर विवरण" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का पेशेवर विवरण" :
//           "आपके रिश्तेदार का पेशेवर विवरण"
//     },
//     qualification: {
//       ENG: "qualification",
//       HI: "योग्यता"
//     },
//     employment: {
//       ENG: "employment type",
//       HI: "रोजगार प्रकार"
//     },
//     occupation: {
//       ENG: "occupation",
//       HI: "व्यवसाय"
//     },
//     income: {
//       ENG: "income range",
//       HI: "आय सीमा"
//     },
//     selectQualification: {
//       ENG: `Select ${getPrefix().toLowerCase()} qualification`,
//       HI: profileFor === 'MySelf' ? "अपनी योग्यता चुनें" :
//           profileFor === 'My Son' ? "अपने बेटे की योग्यता चुनें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी की योग्यता चुनें" :
//           profileFor === 'My Sister' ? "अपनी बहन की योग्यता चुनें" :
//           profileFor === 'My Brother' ? "अपने भाई की योग्यता चुनें" :
//           profileFor === 'My Friend' ? "अपने दोस्त की योग्यता चुनें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई की योग्यता चुनें" :
//           "अपने रिश्तेदार की योग्यता चुनें"
//     },
//     selectEmployment: {
//       ENG: `Select ${getPrefix().toLowerCase()} employment type`,
//       HI: profileFor === 'MySelf' ? "अपना रोजगार प्रकार चुनें" :
//           profileFor === 'My Son' ? "अपने बेटे का रोजगार प्रकार चुनें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का रोजगार प्रकार चुनें" :
//           profileFor === 'My Sister' ? "अपनी बहन का रोजगार प्रकार चुनें" :
//           profileFor === 'My Brother' ? "अपने भाई का रोजगार प्रकार चुनें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का रोजगार प्रकार चुनें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का रोजगार प्रकार चुनें" :
//           "अपने रिश्तेदार का रोजगार प्रकार चुनें"
//     },
//     selectOccupation: {
//       ENG: `Select ${getPrefix().toLowerCase()} occupation`,
//       HI: profileFor === 'MySelf' ? "अपना व्यवसाय चुनें" :
//           profileFor === 'My Son' ? "अपने बेटे का व्यवसाय चुनें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का व्यवसाय चुनें" :
//           profileFor === 'My Sister' ? "अपनी बहन का व्यवसाय चुनें" :
//           profileFor === 'My Brother' ? "अपने भाई का व्यवसाय चुनें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का व्यवसाय चुनें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का व्यवसाय चुनें" :
//           "अपने रिश्तेदार का व्यवसाय चुनें"
//     },
//     selectIncome: {
//       ENG: `Select ${getPrefix().toLowerCase()} income range`,
//       HI: profileFor === 'MySelf' ? "अपनी आय सीमा चुनें" :
//           profileFor === 'My Son' ? "अपने बेटे की आय सीमा चुनें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी की आय सीमा चुनें" :
//           profileFor === 'My Sister' ? "अपनी बहन की आय सीमा चुनें" :
//           profileFor === 'My Brother' ? "अपने भाई की आय सीमा चुनें" :
//           profileFor === 'My Friend' ? "अपने दोस्त की आय सीमा चुनें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई की आय सीमा चुनें" :
//           "अपने रिश्तेदार की आय सीमा चुनें"
//     },
//     searchPlaceholder: {
//       ENG: "Search for",
//       HI: "खोजें"
//     },
//     noResults: {
//       ENG: "No results found",
//       HI: "कोई परिणाम नहीं मिला"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     qualificationOptions: {
//       ENG: Qualification,
//       HI: ["हाई स्कूल", "स्नातक", "स्नातकोत्तर", "डॉक्टरेट", "डिप्लोमा", "व्यावसायिक"]
//     },
//     employmentOptions: {
//       ENG: WorkDetails,
//       HI: ["निजी", "सरकारी", "स्वरोजगार", "बेरोजगार", "छात्र"]
//     },
//     occupationOptions: {
//       ENG: occupationList,
//       HI: ["डॉक्टर", "इंजीनियर", "शिक्षक", "वकील", "किसान", "कलाकार", "व्यवसायी", "अन्य"]
//     },
//     incomeOptions: {
//       ENG: Income,
//       HI: ["5 लाख से कम", "5-10 लाख", "10-20 लाख", "20-50 लाख", "50 लाख से अधिक"]
//     }
//   };

//   const isButtonDisabled = !selectedQualification || !selectedEmployment ||
//                          !selectedOccupation || !selectedIncome;

//   const openModal = (type, data) => {
//     if (!data) return;
//     setActiveModal(type);
//     setFilteredData(data);
//     setSearchQuery('');
//   };

//   const closeModal = () => {
//     setActiveModal(null);
//     setSearchQuery('');
//   };

//   const handleSelect = (item) => {
//     if (!activeModal) return;
    
//     switch(activeModal) {
//       case 'qualification':
//         setSelectedQualification(item);
//         break;
//       case 'employment':
//         setSelectedEmployment(item);
//         break;
//       case 'occupation':
//         setSelectedOccupation(item);
//         break;
//       case 'income':
//         setSelectedIncome(item);
//         break;
//       default:
//         break;
//     }
//     closeModal();
//   };

//   const filteredItems = filteredData.filter(item =>
//     item && item.toString().toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleSelect(item)}
//     >
//       <Text style={styles.listText}>
//         {translations[`${activeModal}Options`]?.[language]?.[index] || item}
//       </Text>
//     </TouchableOpacity>
//   );

//   const renderModal = () => {
//     if (!activeModal) return null;
    
//     const modalTitle = translations[activeModal]?.[language] || '';
//     const searchPlaceholder = `${translations.searchPlaceholder[language]} ${modalTitle}`;

//     return (
//       <Modal
//         visible={!!activeModal}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={searchPlaceholder}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//                 autoFocus={true}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity onPress={closeModal}>
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             <FlatList
//               data={filteredItems}
//               renderItem={renderItem}
//               keyExtractor={(item, index) => index.toString()}
//               style={styles.list}
//               ListEmptyComponent={
//                 <View style={styles.emptyContainer}>
//                   <MaterialIcons name="search-off" size={50} color="#ddd" />
//                   <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
//                 </View>
//               }
//             />
//           </View>
//         </View>
//       </Modal>
//     );
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

//       {/* Header with Icon */}
//       <View style={styles.header}>
//         <MaterialIcons name="work-outline" size={40} color="#fff" />
//         <Text style={styles.headerText}>{translations.headerText[language]}</Text>
//       </View>

//       {/* Qualification Field */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="graduation-cap" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('qualification', Qualification)}
//         >
//           <Text style={selectedQualification ? styles.selectedText : styles.placeholderText}>
//             {selectedQualification
//               ? translations.qualificationOptions[language][Qualification.indexOf(selectedQualification)]
//               : translations.selectQualification[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Employment Field */}
//       <View style={styles.inputContainer}>
//         <MaterialCommunityIcons name="office-building" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('employment', WorkDetails)}
//         >
//           <Text style={selectedEmployment ? styles.selectedText : styles.placeholderText}>
//             {selectedEmployment
//               ? translations.employmentOptions[language][WorkDetails.indexOf(selectedEmployment)]
//               : translations.selectEmployment[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Occupation Field */}
//       <View style={styles.inputContainer}>
//         <Ionicons name="briefcase-outline" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('occupation', occupationList)}
//         >
//           <Text style={selectedOccupation ? styles.selectedText : styles.placeholderText}>
//             {selectedOccupation
//               ? translations.occupationOptions[language][occupationList.indexOf(selectedOccupation)]
//               : translations.selectOccupation[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Income Field */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="money" size={20} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('income', Income)}
//         >
//           <Text style={selectedIncome ? styles.selectedText : styles.placeholderText}>
//             {selectedIncome
//               ? translations.incomeOptions[language][Income.indexOf(selectedIncome)]
//               : translations.selectIncome[language]}
//           </Text>
//           <Feather name="chevron-down" size={20} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity
//         onPress={() => router.push('homescreens/info7')}
//         style={[
//           styles.button,
//           { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#4a90e2' }
//         ]}
//         disabled={isButtonDisabled}
//       >
//         <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//       </TouchableOpacity>

//       {renderModal()}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 40
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
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4a90e2',
//     padding: 20,
//     borderRadius: 15,
//     marginBottom: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginLeft: 15
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20
//   },
//   fieldIcon: {
//     marginRight: 15
//   },
//   selectionBox: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f9fa',
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 10,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2
//   },
//   selectedText: {
//     fontSize: 16,
//     color: '#212529',
//     flex: 1
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#6c757d',
//     flex: 1
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     marginHorizontal: 20,
//     borderRadius: 15,
//     maxHeight: '70%',
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 10
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5'
//   },
//   searchIcon: {
//     marginRight: 10
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#212529'
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 18,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5'
//   },
//   listText: {
//     fontSize: 16,
//     color: '#212529'
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30
//   },
//   noResultsText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 10
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 16,
//     marginTop: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10
//   }
// });



 


//16/08/2025
//app/homescreens/info6.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, Image, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import { Income, occupationList, Qualification, WorkDetails } from '../../constant/Info'
// import { useRouter } from 'expo-router'
// import { MaterialIcons, FontAwesome, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
// import { useLanguage } from '../context/LanguageContext'
// import Animated from 'react-native-reanimated'
// import { useProfile } from '../context/ProfileContext'
// import { useFirestore } from '../hooks/useFirebase'
// import { serverTimestamp } from 'firebase/firestore'

// export default function Info6() {
//   const router = useRouter();
//   const [selectedQualification, setSelectedQualification] = useState(null);
//   const [selectedEmployment, setSelectedEmployment] = useState(null);
//   const [selectedOccupation, setSelectedOccupation] = useState(null);
//   const [selectedIncome, setSelectedIncome] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeModal, setActiveModal] = useState(null);
//   const [filteredData, setFilteredData] = useState([]);
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

//   // Complete translations object
//   const translations = {
//     headerText: {
//       ENG: `${getPrefix()} Professional Details`,
//       HI: profileFor === 'MySelf' ? "पेशेवर विवरण" :
//           profileFor === 'My Son' ? "बेटे का पेशेवर विवरण" :
//           profileFor === 'My Daughter' ? "बेटी का पेशेवर विवरण" :
//           profileFor === 'My Sister' ? "बहन का पेशेवर विवरण" :
//           profileFor === 'My Brother' ? "भाई का पेशेवर विवरण" :
//           profileFor === 'My Friend' ? "दोस्त का पेशेवर विवरण" :
//           profileFor === 'Cousin' ? "चचेरे भाई का पेशेवर विवरण" :
//           "रिश्तेदार का पेशेवर विवरण"
//     },
//     qualification: {
//       ENG: "qualification",
//       HI: "योग्यता"
//     },
//     employment: {
//       ENG: "employment type",
//       HI: "रोजगार प्रकार"
//     },
//     occupation: {
//       ENG: "occupation",
//       HI: "व्यवसाय"
//     },
//     income: {
//       ENG: "income range",
//       HI: "आय सीमा"
//     },
//     selectQualification: {
//       ENG: `Select ${getProperPrefix('qualification')} qualification`,
//       HI: profileFor === 'MySelf' ? "योग्यता चुनें" :
//           profileFor === 'My Son' ? "बेटे की योग्यता चुनें" :
//           profileFor === 'My Daughter' ? "बेटी की योग्यता चुनें" :
//           profileFor === 'My Sister' ? "बहन की योग्यता चुनें" :
//           profileFor === 'My Brother' ? "भाई की योग्यता चुनें" :
//           profileFor === 'My Friend' ? "दोस्त की योग्यता चुनें" :
//           profileFor === 'Cousin' ? "चचेरे भाई की योग्यता चुनें" :
//           "रिश्तेदार की योग्यता चुनें"
//     },
//     selectEmployment: {
//       ENG: `Select ${getProperPrefix('employment')} employment type`,
//       HI: profileFor === 'MySelf' ? "रोजगार प्रकार चुनें" :
//           profileFor === 'My Son' ? "बेटे का रोजगार प्रकार चुनें" :
//           profileFor === 'My Daughter' ? "बेटी का रोजगार प्रकार चुनें" :
//           profileFor === 'My Sister' ? "बहन का रोजगार प्रकार चुनें" :
//           profileFor === 'My Brother' ? "भाई का रोजगार प्रकार चुनें" :
//           profileFor === 'My Friend' ? "दोस्त का रोजगार प्रकार चुनें" :
//           profileFor === 'Cousin' ? "चचेरे भाई का रोजगार प्रकार चुनें" :
//           "रिश्तेदार का रोजगार प्रकार चुनें"
//     },
//     selectOccupation: {
//       ENG: `Select ${getProperPrefix('occupation')} occupation`,
//       HI: profileFor === 'MySelf' ? "व्यवसाय चुनें" :
//           profileFor === 'My Son' ? "बेटे का व्यवसाय चुनें" :
//           profileFor === 'My Daughter' ? "बेटी का व्यवसाय चुनें" :
//           profileFor === 'My Sister' ? "बहन का व्यवसाय चुनें" :
//           profileFor === 'My Brother' ? "भाई का व्यवसाय चुनें" :
//           profileFor === 'My Friend' ? "दोस्त का व्यवसाय चुनें" :
//           profileFor === 'Cousin' ? "चचेरे भाई का व्यवसाय चुनें" :
//           "रिश्तेदार का व्यवसाय चुनें"
//     },
//     selectIncome: {
//       ENG: `Select ${getProperPrefix('income')} income range`,
//       HI: profileFor === 'MySelf' ? "आय सीमा चुनें" :
//           profileFor === 'My Son' ? "बेटे की आय सीमा चुनें" :
//           profileFor === 'My Daughter' ? "बेटी की आय सीमा चुनें" :
//           profileFor === 'My Sister' ? "बहन की आय सीमा चुनें" :
//           profileFor === 'My Brother' ? "भाई की आय सीमा चुनें" :
//           profileFor === 'My Friend' ? "दोस्त की आय सीमा चुनें" :
//           profileFor === 'Cousin' ? "चचेरे भाई की आय सीमा चुनें" :
//           "रिश्तेदार की आय सीमा चुनें"
//     },
//     searchPlaceholder: {
//       ENG: "Search for",
//       HI: "खोजें"
//     },
//     noResults: {
//       ENG: "No results found",
//       HI: "कोई परिणाम नहीं मिला"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     qualificationOptions: {
//       ENG: Qualification,
//       HI: ["हाई स्कूल", "स्नातक", "स्नातकोत्तर", "डॉक्टरेट", "डिप्लोमा", "व्यावसायिक"]
//     },
//     employmentOptions: {
//       ENG: WorkDetails,
//       HI: ["निजी", "सरकारी", "स्वरोजगार", "बेरोजगार", "छात्र"]
//     },
//     occupationOptions: {
//       ENG: occupationList,
//       HI: ["डॉक्टर", "इंजीनियर", "शिक्षक", "वकील", "किसान", "कलाकार", "व्यवसायी", "अन्य"]
//     },
//     incomeOptions: {
//       ENG: Income,
//       HI: ["5 लाख से कम", "5-10 लाख", "10-20 लाख", "20-50 लाख", "50 लाख से अधिक"]
//     }
//   };

//   const isButtonDisabled = !selectedQualification || !selectedEmployment ||
//                          !selectedOccupation || !selectedIncome;

//   const openModal = (type, data) => {
//     if (!data) return;
//     setActiveModal(type);
//     setFilteredData(data);
//     setSearchQuery('');
//   };

//   const closeModal = () => {
//     setActiveModal(null);
//     setSearchQuery('');
//   };

//   const handleSelect = (item) => {
//     if (!activeModal) return;
    
//     switch(activeModal) {
//       case 'qualification':
//         setSelectedQualification(item);
//         break;
//       case 'employment':
//         setSelectedEmployment(item);
//         break;
//       case 'occupation':
//         setSelectedOccupation(item);
//         break;
//       case 'income':
//         setSelectedIncome(item);
//         break;
//       default:
//         break;
//     }
//     closeModal();
//   };

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare profile data
//       const profileData = {
//         ...userData,
//         qualification: selectedQualification,
//         employmentType: selectedEmployment,
//         occupation: selectedOccupation,
//         incomeRange: selectedIncome,
//         profileProgress: 60, // Update progress to 60%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info7');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const filteredItems = filteredData.filter(item =>
//     item && item.toString().toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const renderItem = ({ item, index }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleSelect(item)}
//     >
//       <Text style={styles.listText}>
//         {translations[`${activeModal}Options`]?.[language]?.[index] || item}
//       </Text>
//     </TouchableOpacity>
//   );

//   const renderModal = () => {
//     if (!activeModal) return null;
    
//     const modalTitle = translations[activeModal]?.[language] || '';
//     const searchPlaceholder = `${translations.searchPlaceholder[language]} ${modalTitle}`;

//     return (
//       <Modal
//         visible={!!activeModal}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={closeModal}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={searchPlaceholder}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//                 autoFocus={true}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity onPress={closeModal}>
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             <FlatList
//               data={filteredItems}
//               renderItem={renderItem}
//               keyExtractor={(item, index) => index.toString()}
//               style={styles.list}
//               ListEmptyComponent={
//                 <View style={styles.emptyContainer}>
//                   <MaterialIcons name="search-off" size={50} color="#ddd" />
//                   <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
//                 </View>
//               }
//             />
//           </View>
//         </View>
//       </Modal>
//     );
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
//           <ActivityIndicator size="large" color="#4a90e2" />
//         </View>
//       )}

//       {/* Header with Icon */}
//       <View style={styles.header}>
//         <MaterialIcons name="work-outline" size={40} color="#fff" />
//         <Text style={styles.headerText}>{translations.headerText[language]}</Text>
//       </View>

//       {/* Qualification Field */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="graduation-cap" size={24} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('qualification', Qualification)}
//         >
//           <Text style={selectedQualification ? styles.selectedText : styles.placeholderText}>
//             {selectedQualification
//               ? translations.qualificationOptions[language][Qualification.indexOf(selectedQualification)]
//               : translations.selectQualification[language]}
//           </Text>
//           <Feather name="chevron-down" size={24} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Employment Field */}
//       <View style={styles.inputContainer}>
//         <MaterialCommunityIcons name="office-building" size={24} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('employment', WorkDetails)}
//         >
//           <Text style={selectedEmployment ? styles.selectedText : styles.placeholderText}>
//             {selectedEmployment
//               ? translations.employmentOptions[language][WorkDetails.indexOf(selectedEmployment)]
//               : translations.selectEmployment[language]}
//           </Text>
//           <Feather name="chevron-down" size={24} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Occupation Field */}
//       <View style={styles.inputContainer}>
//         <Ionicons name="briefcase-outline" size={24} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('occupation', occupationList)}
//         >
//           <Text style={selectedOccupation ? styles.selectedText : styles.placeholderText}>
//             {selectedOccupation
//               ? translations.occupationOptions[language][occupationList.indexOf(selectedOccupation)]
//               : translations.selectOccupation[language]}
//           </Text>
//           <Feather name="chevron-down" size={24} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Income Field */}
//       <View style={styles.inputContainer}>
//         <FontAwesome name="money" size={24} color="#555" style={styles.fieldIcon} />
//         <TouchableOpacity
//           style={styles.selectionBox}
//           onPress={() => openModal('income', Income)}
//         >
//           <Text style={selectedIncome ? styles.selectedText : styles.placeholderText}>
//             {selectedIncome
//               ? translations.incomeOptions[language][Income.indexOf(selectedIncome)]
//               : translations.selectIncome[language]}
//           </Text>
//           <Feather name="chevron-down" size={24} color="#888" />
//         </TouchableOpacity>
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity
//         onPress={handleContinue}
//         style={[
//           styles.button,
//           { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#4a90e2' }
//         ]}
//         disabled={isButtonDisabled || isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator size="small" color="white" />
//         ) : (
//           <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//         )}
//       </TouchableOpacity>

//       {renderModal()}
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 40
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
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4a90e2',
//     padding: 20,
//     borderRadius: 15,
//     marginBottom: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   headerText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginLeft: 15
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20
//   },
//   fieldIcon: {
//     marginRight: 15,
//     width: 24, // Fixed width for consistent alignment
//     textAlign: 'center'
//   },
//   selectionBox: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f9fa',
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 10,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     elevation: 2
//   },
//   selectedText: {
//     fontSize: 16,
//     color: '#212529',
//     flex: 1
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#6c757d',
//     flex: 1
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     marginHorizontal: 20,
//     borderRadius: 15,
//     maxHeight: '70%',
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 10
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5'
//   },
//   searchIcon: {
//     marginRight: 10
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#212529'
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 18,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5'
//   },
//   listText: {
//     fontSize: 16,
//     color: '#212529'
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30
//   },
//   noResultsText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 10
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30,
//     paddingVertical: 16,
//     marginTop: 30,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10
//   }
// });








//23/08/2025

import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Income, occupationList, Qualification, WorkDetails } from '../../constant/Info'
import { useRouter } from 'expo-router'
import { MaterialIcons, FontAwesome, Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useLanguage } from '../context/LanguageContext'
import Animated from 'react-native-reanimated'
import { useProfile } from '../context/ProfileContext'
import { useFirestore } from '../hooks/useFirebase'
import { serverTimestamp } from 'firebase/firestore'
import { useProfileNavigation } from '../utils/navigationHelper'

export default function Info6() {
  const router = useRouter();
  const [selectedQualification, setSelectedQualification] = useState(null);
  const [selectedEmployment, setSelectedEmployment] = useState(null);
  const [selectedOccupation, setSelectedOccupation] = useState(null);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();

  // Load existing data
  useEffect(() => {
    if (userData) {
      if (userData.qualification) {
        setSelectedQualification(userData.qualification);
      }
      if (userData.employmentType) {
        setSelectedEmployment(userData.employmentType);
      }
      if (userData.occupation) {
        setSelectedOccupation(userData.occupation);
      }
      if (userData.incomeRange) {
        setSelectedIncome(userData.incomeRange);
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

  // Complete translations object
  const translations = {
    headerText: {
      ENG: `${getPrefix()} Professional Details`,
      HI: profileFor === 'MySelf' ? "पेशेवर विवरण" : 
          profileFor === 'My Son' ? "बेटे का पेशेवर विवरण" :
          profileFor === 'My Daughter' ? "बेटी का पेशेवर विवरण" :
          profileFor === 'My Sister' ? "बहन का पेशेवर विवरण" :
          profileFor === 'My Brother' ? "भाई का पेशेवर विवरण" :
          profileFor === 'My Friend' ? "दोस्त का पेशेवर विवरण" :
          profileFor === 'Cousin' ? "चचेरे भाई का पेशेवर विवरण" :
          "रिश्तेदार का पेशेवर विवरण"
    },
    qualification: {
      ENG: "qualification",
      HI: "योग्यता"
    },
    employment: {
      ENG: "employment type",
      HI: "रोजगार प्रकार"
    },
    occupation: {
      ENG: "occupation",
      HI: "व्यवसाय"
    },
    income: {
      ENG: "income range",
      HI: "आय सीमा"
    },
    selectQualification: {
      ENG: `Select ${getProperPrefix('qualification')} qualification`,
      HI: profileFor === 'MySelf' ? "योग्यता चुनें" : 
          profileFor === 'My Son' ? "बेटे की योग्यता चुनें" :
          profileFor === 'My Daughter' ? "बेटी की योग्यता चुनें" :
          profileFor === 'My Sister' ? "बहन की योग्यता चुनें" :
          profileFor === 'My Brother' ? "भाई की योग्यता चुनें" :
          profileFor === 'My Friend' ? "दोस्त की योग्यता चुनें" :
          profileFor === 'Cousin' ? "चचेरे भाई की योग्यता चुनें" :
          "रिश्तेदार की योग्यता चुनें"
    },
    selectEmployment: {
      ENG: `Select ${getProperPrefix('employment')} employment type`,
      HI: profileFor === 'MySelf' ? "रोजगार प्रकार चुनें" : 
          profileFor === 'My Son' ? "बेटे का रोजगार प्रकार चुनें" :
          profileFor === 'My Daughter' ? "बेटी का रोजगार प्रकार चुनें" :
          profileFor === 'My Sister' ? "बहन का रोजगार प्रकार चुनें" :
          profileFor === 'My Brother' ? "भाई का रोजगार प्रकार चुनें" :
          profileFor === 'My Friend' ? "दोस्त का रोजगार प्रकार चुनें" :
          profileFor === 'Cousin' ? "चचेरे भाई का रोजगार प्रकार चुनें" :
          "रिश्तेदार का रोजगार प्रकार चुनें"
    },
    selectOccupation: {
      ENG: `Select ${getProperPrefix('occupation')} occupation`,
      HI: profileFor === 'MySelf' ? "व्यवसाय चुनें" : 
          profileFor === 'My Son' ? "बेटे का व्यवसाय चुनें" :
          profileFor === 'My Daughter' ? "बेटी का व्यवसाय चुनें" :
          profileFor === 'My Sister' ? "बहन का व्यवसाय चुनें" :
          profileFor === 'My Brother' ? "भाई का व्यवसाय चुनें" :
          profileFor === 'My Friend' ? "दोस्त का व्यवसाय चुनें" :
          profileFor === 'Cousin' ? "चचेरे भाई का व्यवसाय चुनें" :
          "रिश्तेदार का व्यवसाय चुनें"
    },
    selectIncome: {
      ENG: `Select ${getProperPrefix('income')} income range`,
      HI: profileFor === 'MySelf' ? "आय सीमा चुनें" : 
          profileFor === 'My Son' ? "बेटे की आय सीमा चुनें" :
          profileFor === 'My Daughter' ? "बेटी की आय सीमा चुनें" :
          profileFor === 'My Sister' ? "बहन की आय सीमा चुनें" :
          profileFor === 'My Brother' ? "भाई की आय सीमा चुनें" :
          profileFor === 'My Friend' ? "दोस्त की आय सीमा चुनें" :
          profileFor === 'Cousin' ? "चचेरे भाई की आय सीमा चुनें" :
          "रिश्तेदार की आय सीमा चुनें"
    },
    searchPlaceholder: {
      ENG: "Search for",
      HI: "खोजें"
    },
    noResults: {
      ENG: "No results found",
      HI: "कोई परिणाम नहीं मिला"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    qualificationOptions: {
      ENG: Qualification,
      HI: ["हाई स्कूल", "स्नातक", "स्नातकोत्तर", "डॉक्टरेट", "डिप्लोमा", "व्यावसायिक"]
    },
    employmentOptions: {
      ENG: WorkDetails,
      HI: ["निजी", "सरकारी", "स्वरोजगार", "बेरोजगार", "छात्र"]
    },
    occupationOptions: {
      ENG: occupationList,
      HI: ["डॉक्टर", "इंजीनियर", "शिक्षक", "वकील", "किसान", "कलाकार", "व्यवसायी", "अन्य"]
    },
    incomeOptions: {
      ENG: Income,
      HI: ["5 लाख से कम", "5-10 लाख", "10-20 लाख", "20-50 लाख", "50 लाख से अधिक"]
    }
  };

  const isButtonDisabled = !selectedQualification || !selectedEmployment || 
                         !selectedOccupation || !selectedIncome;

  const openModal = (type, data) => {
    if (!data) return;
    setActiveModal(type);
    setFilteredData(data);
    setSearchQuery('');
  };

  const closeModal = () => {
    setActiveModal(null);
    setSearchQuery('');
  };

  const handleSelect = (item) => {
    if (!activeModal) return;
    
    switch(activeModal) {
      case 'qualification':
        setSelectedQualification(item);
        break;
      case 'employment':
        setSelectedEmployment(item);
        break;
      case 'occupation':
        setSelectedOccupation(item);
        break;
      case 'income':
        setSelectedIncome(item);
        break;
      default:
        break;
    }
    closeModal();
  };

  const handleContinue = async () => {
    if (isButtonDisabled) return;
    
    try {
      setIsLoading(true);
      
      // Prepare profile data
      const profileData = {
        ...userData,
        qualification: selectedQualification,
        employmentType: selectedEmployment,
        occupation: selectedOccupation,
        incomeRange: selectedIncome,
        profileProgress: 60,
        updatedAt: serverTimestamp()
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 6);

      // Navigate to next screen
      router.push(getNextScreen('homescreens/info6'));
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredItems = filteredData.filter(item =>
    item && item.toString().toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleSelect(item)}
    >
      <Text style={styles.listText}>
        {translations[`${activeModal}Options`]?.[language]?.[index] || item}
      </Text>
    </TouchableOpacity>
  );

  const renderModal = () => {
    if (!activeModal) return null;
    
    const modalTitle = translations[activeModal]?.[language] || '';
    const searchPlaceholder = `${translations.searchPlaceholder[language]} ${modalTitle}`;

    return (
      <Modal
        visible={!!activeModal}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.searchContainer}>
              <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus={true}
                placeholderTextColor="#888"
              />
              <TouchableOpacity onPress={closeModal}>
                <MaterialIcons name="close" size={24} color="#888" />
              </TouchableOpacity>
            </View>
            <FlatList
              data={filteredItems}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              style={styles.list}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <MaterialIcons name="search-off" size={50} color="#ddd" />
                  <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
                </View>
              }
            />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info6'))}
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
            <ActivityIndicator size="large" color="#4a90e2" />
          </View>
        )}

        {/* Header with Icon */}
        <View style={styles.headerSection}>
          <MaterialIcons name="work-outline" size={40} color="#fff" />
          <Text style={styles.headerText}>{translations.headerText[language]}</Text>
        </View>

        {/* Qualification Field */}
        <View style={styles.inputContainer}>
          <FontAwesome name="graduation-cap" size={24} color="#555" style={styles.fieldIcon} />
          <TouchableOpacity 
            style={styles.selectionBox}
            onPress={() => openModal('qualification', Qualification)}
          >
            <Text style={selectedQualification ? styles.selectedText : styles.placeholderText}>
              {selectedQualification 
                ? translations.qualificationOptions[language][Qualification.indexOf(selectedQualification)]
                : translations.selectQualification[language]}
            </Text>
            <Feather name="chevron-down" size={24} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Employment Field */}
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="office-building" size={24} color="#555" style={styles.fieldIcon} />
          <TouchableOpacity 
            style={styles.selectionBox}
            onPress={() => openModal('employment', WorkDetails)}
          >
            <Text style={selectedEmployment ? styles.selectedText : styles.placeholderText}>
              {selectedEmployment 
                ? translations.employmentOptions[language][WorkDetails.indexOf(selectedEmployment)]
                : translations.selectEmployment[language]}
            </Text>
            <Feather name="chevron-down" size={24} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Occupation Field */}
        <View style={styles.inputContainer}>
          <Ionicons name="briefcase-outline" size={24} color="#555" style={styles.fieldIcon} />
          <TouchableOpacity 
            style={styles.selectionBox}
            onPress={() => openModal('occupation', occupationList)}
          >
            <Text style={selectedOccupation ? styles.selectedText : styles.placeholderText}>
              {selectedOccupation 
                ? translations.occupationOptions[language][occupationList.indexOf(selectedOccupation)]
                : translations.selectOccupation[language]}
            </Text>
            <Feather name="chevron-down" size={24} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Income Field */}
        <View style={styles.inputContainer}>
          <FontAwesome name="money" size={24} color="#555" style={styles.fieldIcon} />
          <TouchableOpacity 
            style={styles.selectionBox}
            onPress={() => openModal('income', Income)}
          >
            <Text style={selectedIncome ? styles.selectedText : styles.placeholderText}>
              {selectedIncome 
                ? translations.incomeOptions[language][Income.indexOf(selectedIncome)]
                : translations.selectIncome[language]}
            </Text>
            <Feather name="chevron-down" size={24} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          onPress={handleContinue}
          style={[
            styles.button,
            { backgroundColor: isButtonDisabled ? '#ADB5BD' : '#4a90e2' }
          ]}
          disabled={isButtonDisabled || isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.buttonText}>{translations.continue[language]}</Text>
          )}
        </TouchableOpacity>

        {renderModal()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 15
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  fieldIcon: {
    marginRight: 15,
    width: 24,
    textAlign: 'center'
  },
  selectionBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  },
  selectedText: {
    fontSize: 16,
    color: '#212529',
    flex: 1
  },
  placeholderText: {
    fontSize: 16,
    color: '#6c757d',
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 15,
    maxHeight: '70%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5'
  },
  searchIcon: {
    marginRight: 10
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#212529'
  },
  list: {
    paddingHorizontal: 10,
  },
  listItem: {
    padding: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5'
  },
  listText: {
    fontSize: 16,
    color: '#212529'
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  noResultsText: {
    fontSize: 16,
    color: '#adb5bd',
    marginTop: 10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 16,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10
  }
});