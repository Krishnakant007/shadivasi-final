// // app/homescreen/info4.jsx

// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { indianStates, stateCityMap } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';

// export default function Info4() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [villageName, setVillageName] = useState('');
//   const [filteredStates, setFilteredStates] = useState(indianStates);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [stateSearch, setStateSearch] = useState('');
//   const [citySearch, setCitySearch] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [stateModalVisible, setStateModalVisible] = useState(false);
//   const [cityModalVisible, setCityModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const translations = {
//     title: {
//       ENG: "Now Let's build your profile",
//       HI: "अब अपना प्रोफाइल बनाएं"
//     },
//     selectState: {
//       ENG: "Select State",
//       HI: "राज्य चुनें"
//     },
//     selectCity: {
//       ENG: "Select City",
//       HI: "शहर चुनें"
//     },
//     villageName: {
//       ENG: "Village Name (Optional)",
//       HI: "गाँव का नाम (वैकल्पिक)"
//     },
//     searchPlaceholder: {
//       ENG: "Search for",
//       HI: "खोजें"
//     },
//     noResults: {
//       ENG: "No results found",
//       HI: "कोई परिणाम नहीं मिला"
//     },
//     selectStateFirst: {
//       ENG: "Select a state first",
//       HI: "पहले एक राज्य चुनें"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   useEffect(() => {
//     setIsButtonDisabled(!selectedState || !selectedCity);
//   }, [selectedState, selectedCity]);

//   useEffect(() => {
//     setFilteredStates(
//       indianStates.filter(state =>
//         state.toLowerCase().includes(stateSearch.toLowerCase())
//     ));
//   }, [stateSearch]);

//   useEffect(() => {
//     if (selectedState) {
//       const citiesForState = stateCityMap[selectedState] || [];
//       const filtered = citiesForState.filter(city =>
//         city.toLowerCase().includes(citySearch.toLowerCase())
//       );
//       setFilteredCities(filtered);
//     }
//   }, [selectedState, citySearch]);

//   const handleContinue = () => {
//     if (!isButtonDisabled) {
//       setIsLoading(true);
//       setTimeout(() => {
//         router.push('homescreens/info5');
//         setIsLoading(false);
//       }, 500);
//     }
//   };

//   const handleStateSelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedState(item);
//       setSelectedCity(null);
//       setCitySearch('');
//       setStateModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const handleCitySelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedCity(item);
//       setCityModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const renderStateItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleStateSelect(item)}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderCityItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleCitySelect(item)}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle - Top Right */}
//       <View style={styles.languageToggleContainer}>
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
//       </View>

//       {isLoading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#87e7f5" />
//         </View>
//       )}
      
//       {/* Avatar Icon - Moved down with marginTop */}
//       <View style={[styles.container, { marginTop: 50 }]}>
//         <MaterialIcons name="location-history" size={40} color="white" />
//       </View>
      
//       <Text style={styles.title}>{translations.title[language]}</Text>

//       {/* State Selection - Increased width to 90% */}
//       <Text style={styles.label}>{translations.selectState[language]}</Text>
//       <View style={[styles.box, { width: '90%' }]}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setStateModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedState ? (
//             <Text style={styles.selectedValue}>{selectedState}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectState[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={stateModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => !isLoading && setStateModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={`${translations.searchPlaceholder[language]} ${translations.selectState[language]}`}
//                 value={stateSearch}
//                 onChangeText={setStateSearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setStateModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#87e7f5" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredStates}
//                 renderItem={renderStateItem}
//                 keyExtractor={(item) => item}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
 
//       {/* City Selection - Increased width to 90% */}
//       <Text style={styles.label}>{translations.selectCity[language]}</Text>
//       <View style={[styles.box, { width: '90%' }]}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setCityModalVisible(true)}
//           disabled={isLoading || !selectedState}
//         >
//           {selectedCity ? (
//             <Text style={styles.selectedValue}>{selectedCity}</Text>
//           ) : (
//             <Text style={[styles.placeholderText, !selectedState && {color: '#ccc'}]}>
//               {selectedState ? translations.selectCity[language] : translations.selectStateFirst[language]}
//             </Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={cityModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => !isLoading && setCityModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={`${translations.searchPlaceholder[language]} ${translations.selectCity[language]}`}
//                 value={citySearch}
//                 onChangeText={setCitySearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setCityModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#87e7f5" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredCities}
//                 renderItem={renderCityItem}
//                 keyExtractor={(item) => item}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>
//                       {selectedState ? translations.noResults[language] : translations.selectStateFirst[language]}
//                     </Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
      
//       {/* Village Name - Increased width to 90% */}
//       <Text style={styles.label}>{translations.villageName[language]}</Text>
//       <View style={[styles.box, { width: '90%' }]}>
//         <TextInput
//           placeholder={translations.villageName[language]}
//           value={villageName}
//           onChangeText={setVillageName}
//           style={styles.textInput}
//           editable={!isLoading}
//         />
//       </View>

//       {/* Continue Button - Moved up with marginBottom */}
//       <View style={[styles.buttonContainer, { marginBottom: 30 }]}>
//         <TouchableOpacity
//           onPress={handleContinue}
//           style={[
//             styles.button,
//             isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled
//           ]}
//           disabled={isButtonDisabled || isLoading}
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="white" />
//           ) : (
//             <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//   },
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#87e7f5',
//     borderRadius: 99,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignSelf: 'center'
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     paddingTop: 10,
//     textAlign: 'center',
//     marginBottom: 20
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: '600',
//     paddingTop: 10,
//     color: 'grey',
//     marginLeft: '5%',
//     width: '90%'
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginVertical: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9',
//     alignSelf: 'center'
//   },
//   pickerTouchable: {
//     padding: 15,
//     width: '100%',
//   },
//   selectedValue: {
//     fontSize: 16,
//     color: '#333',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#888',
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
//   textInput: {
//     padding: 15,
//     width: '100%',
//     fontSize: 16,
//     color: '#333'
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   button: {
//     width: '80%',
//     paddingVertical: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   buttonEnabled: {
//     backgroundColor: '#87e7f5'
//   },
//   buttonDisabled: {
//     backgroundColor: '#cccccc'
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   loaderInsideModal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: 6,
//     zIndex: 100,
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
// });













// // app/homescreens/info4.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { indianStates, stateCityMap } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info4() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [villageName, setVillageName] = useState('');
//   const [filteredStates, setFilteredStates] = useState(indianStates);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [stateSearch, setStateSearch] = useState('');
//   const [citySearch, setCitySearch] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [stateModalVisible, setStateModalVisible] = useState(false);
//   const [cityModalVisible, setCityModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const translations = {
//     title: {
//       ENG: `Now Let's build ${getPrefix().toLowerCase()} profile`,
//       HI: profileFor === 'MySelf' ? "अब अपना प्रोफाइल बनाएं" :
//         profileFor === 'My Son' ? "अब अपने बेटे का प्रोफाइल बनाएं" :
//         profileFor === 'My Daughter' ? "अब अपनी बेटी का प्रोफाइल बनाएं" :
//         profileFor === 'My Sister' ? "अब अपनी बहन का प्रोफाइल बनाएं" :
//         profileFor === 'My Brother' ? "अब अपने भाई का प्रोफाइल बनाएं" :
//         profileFor === 'My Friend' ? "अब अपने दोस्त का प्रोफाइल बनाएं" :
//         profileFor === 'Cousin' ? "अब अपने चचेरे भाई का प्रोफाइल बनाएं" :
//         "अब अपने रिश्तेदार का प्रोफाइल बनाएं"
//     },
//     selectState: {
//       ENG: "Select State",
//       HI: "राज्य चुनें"
//     },
//     selectCity: {
//       ENG: "Select City",
//       HI: "शहर चुनें"
//     },
//     villageName: {
//       ENG: "Village Name (Optional)",
//       HI: "गाँव का नाम (वैकल्पिक)"
//     },
//     searchPlaceholder: {
//       ENG: "Search for",
//       HI: "खोजें"
//     },
//     noResults: {
//       ENG: "No results found",
//       HI: "कोई परिणाम नहीं मिला"
//     },
//     selectStateFirst: {
//       ENG: "Select a state first",
//       HI: "पहले एक राज्य चुनें"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   useEffect(() => {
//     setIsButtonDisabled(!selectedState || !selectedCity);
//   }, [selectedState, selectedCity]);

//   useEffect(() => {
//     setFilteredStates(
//       indianStates.filter(state =>
//         state.toLowerCase().includes(stateSearch.toLowerCase())
//     ));
//   }, [stateSearch]);

//   useEffect(() => {
//     if (selectedState) {
//       const citiesForState = stateCityMap[selectedState] || [];
//       const filtered = citiesForState.filter(city =>
//         city.toLowerCase().includes(citySearch.toLowerCase())
//       );
//       setFilteredCities(filtered);
//     }
//   }, [selectedState, citySearch]);

//   const handleContinue = () => {
//     if (!isButtonDisabled) {
//       setIsLoading(true);
//       setTimeout(() => {
//         router.push('homescreens/info5');
//         setIsLoading(false);
//       }, 500);
//     }
//   };

//   const handleStateSelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedState(item);
//       setSelectedCity(null);
//       setCitySearch('');
//       setStateModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const handleCitySelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedCity(item);
//       setCityModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const renderStateItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleStateSelect(item)}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderCityItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleCitySelect(item)}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle - Top Right */}
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
//           <ActivityIndicator size="large" color="#87e7f5" />
//         </View>
//       )}
      
//       {/* Avatar Icon - Moved down with marginTop */}
//       <View style={[styles.container, { marginTop: 50 }]}>
//         <MaterialIcons name="location-history" size={40} color="white" />
//       </View>
      
//       <Text style={styles.title}>{translations.title[language]}</Text>

//       {/* State Selection - Increased width to 90% */}
//       <Text style={styles.label}>{translations.selectState[language]}</Text>
//       <View style={[styles.box, { width: '90%' }]}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setStateModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedState ? (
//             <Text style={styles.selectedValue}>{selectedState}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectState[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={stateModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => !isLoading && setStateModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={`${translations.searchPlaceholder[language]} ${translations.selectState[language]}`}
//                 value={stateSearch}
//                 onChangeText={setStateSearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setStateModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#87e7f5" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredStates}
//                 renderItem={renderStateItem}
//                 keyExtractor={(item) => item}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
 
//       {/* City Selection - Increased width to 90% */}
//       <Text style={styles.label}>{translations.selectCity[language]}</Text>
//       <View style={[styles.box, { width: '90%' }]}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setCityModalVisible(true)}
//           disabled={isLoading || !selectedState}
//         >
//           {selectedCity ? (
//             <Text style={styles.selectedValue}>{selectedCity}</Text>
//           ) : (
//             <Text style={[styles.placeholderText, !selectedState && {color: '#ccc'}]}>
//               {selectedState ? translations.selectCity[language] : translations.selectStateFirst[language]}
//             </Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={cityModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => !isLoading && setCityModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={`${translations.searchPlaceholder[language]} ${translations.selectCity[language]}`}
//                 value={citySearch}
//                 onChangeText={setCitySearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setCityModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#87e7f5" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredCities}
//                 renderItem={renderCityItem}
//                 keyExtractor={(item) => item}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>
//                       {selectedState ? translations.noResults[language] : translations.selectStateFirst[language]}
//                     </Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
      
//       {/* Village Name - Increased width to 90% */}
//       <Text style={styles.label}>{translations.villageName[language]}</Text>
//       <View style={[styles.box, { width: '90%' }]}>
//         <TextInput
//           placeholder={translations.villageName[language]}
//           value={villageName}
//           onChangeText={setVillageName}
//           style={styles.textInput}
//           editable={!isLoading}
//         />
//       </View>

//       {/* Continue Button - Moved up with marginBottom */}
//       <View style={[styles.buttonContainer, { marginBottom: 30 }]}>
//         <TouchableOpacity
//           onPress={handleContinue}
//           style={[
//             styles.button,
//             isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled
//           ]}
//           disabled={isButtonDisabled || isLoading}
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="white" />
//           ) : (
//             <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//   },
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#87e7f5',
//     borderRadius: 99,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     alignSelf: 'center'
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     paddingTop: 10,
//     textAlign: 'center',
//     marginBottom: 20
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: '600',
//     paddingTop: 10,
//     color: 'grey',
//     marginLeft: '5%',
//     width: '90%'
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginVertical: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9',
//     alignSelf: 'center'
//   },
//   pickerTouchable: {
//     padding: 15,
//     width: '100%',
//   },
//   selectedValue: {
//     fontSize: 16,
//     color: '#333',
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#888',
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
//   textInput: {
//     padding: 15,
//     width: '100%',
//     fontSize: 16,
//     color: '#333'
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 30,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   button: {
//     width: '80%',
//     paddingVertical: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 8,
//     elevation: 5
//   },
//   buttonEnabled: {
//     backgroundColor: '#87e7f5'
//   },
//   buttonDisabled: {
//     backgroundColor: '#cccccc'
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   loaderInsideModal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: 6,
//     zIndex: 100,
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
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
// });




// app/homescreens/info4.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated, Dimensions } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { indianStates, stateCityMap } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// const { width, height } = Dimensions.get('window');

// export default function Info4() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [villageName, setVillageName] = useState('');
//   const [filteredStates, setFilteredStates] = useState(indianStates);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [stateSearch, setStateSearch] = useState('');
//   const [citySearch, setCitySearch] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [stateModalVisible, setStateModalVisible] = useState(false);
//   const [cityModalVisible, setCityModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const translations = {
//     title: {
//       ENG: `Now Let's build ${getPrefix().toLowerCase()} profile`,
//       HI: profileFor === 'MySelf' ? "अब अपना प्रोफाइल बनाएं" :
//         profileFor === 'My Son' ? "अब अपने बेटे का प्रोफाइल बनाएं" :
//         profileFor === 'My Daughter' ? "अब अपनी बेटी का प्रोफाइल बनाएं" :
//         profileFor === 'My Sister' ? "अब अपनी बहन का प्रोफाइल बनाएं" :
//         profileFor === 'My Brother' ? "अब अपने भाई का प्रोफाइल बनाएं" :
//         profileFor === 'My Friend' ? "अब अपने दोस्त का प्रोफाइल बनाएं" :
//         profileFor === 'Cousin' ? "अब अपने चचेरे भाई का प्रोफाइल बनाएं" :
//         "अब अपने रिश्तेदार का प्रोफाइल बनाएं"
//     },
//     selectState: {
//       ENG: "Select State",
//       HI: "राज्य चुनें"
//     },
//     selectCity: {
//       ENG: "Select City",
//       HI: "शहर चुनें"
//     },
//     villageName: {
//       ENG: "Village Name (Optional)",
//       HI: "गाँव का नाम (वैकल्पिक)"
//     },
//     searchPlaceholder: {
//       ENG: "Search for",
//       HI: "खोजें"
//     },
//     noResults: {
//       ENG: "No results found",
//       HI: "कोई परिणाम नहीं मिला"
//     },
//     selectStateFirst: {
//       ENG: "Select a state first",
//       HI: "पहले एक राज्य चुनें"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   useEffect(() => {
//     setIsButtonDisabled(!selectedState || !selectedCity);
//   }, [selectedState, selectedCity]);

//   useEffect(() => {
//     setFilteredStates(
//       indianStates.filter(state =>
//         state.toLowerCase().includes(stateSearch.toLowerCase())
//     ));
//   }, [stateSearch]);

//   useEffect(() => {
//     if (selectedState) {
//       const citiesForState = stateCityMap[selectedState] || [];
//       const filtered = citiesForState.filter(city =>
//         city.toLowerCase().includes(citySearch.toLowerCase())
//       );
//       setFilteredCities(filtered);
//     }
//   }, [selectedState, citySearch]);

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare profile data
//       const profileData = {
//         ...userData,
//         state: selectedState,
//         city: selectedCity,
//         village: villageName || null,
//         profileProgress: 40, // Update progress to 40%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info5');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       // Here you could add error state and display to user
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleStateSelect = async (item) => {
//     try {
//       setIsLoading(true);
//       setSelectedState(item);
//       setSelectedCity(null);
//       setCitySearch('');
//       setStateModalVisible(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCitySelect = async (item) => {
//     try {
//       setIsLoading(true);
//       setSelectedCity(item);
//       setCityModalVisible(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderStateItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleStateSelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderCityItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleCitySelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle - Top Right */}
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
//           <ActivityIndicator size="large" color="#87e7f5" />
//         </View>
//       )}
      
//       {/* Avatar Icon */}
//       <View style={styles.avatarContainer}>
//         <MaterialIcons name="location-history" size={40} color="white" />
//       </View>
      
//       <Text style={styles.title}>{translations.title[language]}</Text>

//       {/* State Selection */}
//       <Text style={styles.label}>{translations.selectState[language]}</Text>
//       <TouchableOpacity
//         style={styles.selectBox}
//         onPress={() => setStateModalVisible(true)}
//         disabled={isLoading}
//       >
//         {selectedState ? (
//           <Text style={styles.selectedValue}>{selectedState}</Text>
//         ) : (
//           <Text style={styles.placeholderText}>{translations.selectState[language]}</Text>
//         )}
//         <MaterialIcons name="arrow-drop-down" size={24} color="#888" />
//       </TouchableOpacity>

//       <Modal
//         visible={stateModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => !isLoading && setStateModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={`${translations.searchPlaceholder[language]} ${translations.selectState[language]}`}
//                 value={stateSearch}
//                 onChangeText={setStateSearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setStateModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#87e7f5" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredStates}
//                 renderItem={renderStateItem}
//                 keyExtractor={(item) => item}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
 
//       {/* City Selection */}
//       <Text style={styles.label}>{translations.selectCity[language]}</Text>
//       <TouchableOpacity
//         style={[
//           styles.selectBox,
//           !selectedState && { backgroundColor: '#f5f5f5' }
//         ]}
//         onPress={() => setCityModalVisible(true)}
//         disabled={isLoading || !selectedState}
//       >
//         {selectedCity ? (
//           <Text style={styles.selectedValue}>{selectedCity}</Text>
//         ) : (
//           <Text style={[
//             styles.placeholderText,
//             !selectedState && { color: '#ccc' }
//           ]}>
//             {selectedState ? translations.selectCity[language] : translations.selectStateFirst[language]}
//           </Text>
//         )}
//         <MaterialIcons name="arrow-drop-down" size={24} color={!selectedState ? '#ccc' : '#888'} />
//       </TouchableOpacity>

//       <Modal
//         visible={cityModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => !isLoading && setCityModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={`${translations.searchPlaceholder[language]} ${translations.selectCity[language]}`}
//                 value={citySearch}
//                 onChangeText={setCitySearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//                 placeholderTextColor="#888"
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setCityModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#87e7f5" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredCities}
//                 renderItem={renderCityItem}
//                 keyExtractor={(item) => item}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>
//                       {selectedState ? translations.noResults[language] : translations.selectStateFirst[language]}
//                     </Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
      
//       {/* Village Name */}
//       <Text style={styles.label}>{translations.villageName[language]}</Text>
//       <View style={styles.inputBox}>
//         <TextInput
//           placeholder={translations.villageName[language]}
//           value={villageName}
//           onChangeText={setVillageName}
//           style={styles.textInput}
//           editable={!isLoading}
//           placeholderTextColor="#888"
//         />
//       </View>

//       {/* Continue Button */}
//       <TouchableOpacity
//         onPress={handleContinue}
//         style={[
//           styles.button,
//           isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled
//         ]}
//         disabled={isButtonDisabled || isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator size="small" color="white" />
//         ) : (
//           <Text style={styles.buttonText}>{translations.continue[language]}</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   avatarContainer: {
//     alignItems: 'center',
//     backgroundColor: '#87e7f5',
//     borderRadius: 50,
//     width: 70,
//     height: 70,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginTop: 42,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#333',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#555',
//     marginBottom: 8,
//     marginLeft: 5,
//   },
//   selectBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: 16,
//     marginBottom: 20,
//     backgroundColor: 'white',
//     height: 56,
//   },
//   selectedValue: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#888',
//     flex: 1,
//   },
//   inputBox: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     marginBottom: 30,
//     backgroundColor: 'white',
//     height: 56,
//     justifyContent: 'center',
//   },
//   textInput: {
//     padding: 16,
//     fontSize: 16,
//     color: '#333',
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
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#212529',
//     paddingVertical: 8,
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   listText: {
//     fontSize: 16,
//     color: '#212529',
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//   },
//   noResultsText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 10,
//   },
//   button: {
//     width: '100%',
//     padding: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//     marginBottom: 30,
//   },
//   buttonEnabled: {
//     backgroundColor: '#87e7f5',
//   },
//   buttonDisabled: {
//     backgroundColor: '#cccccc',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   loaderInsideModal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: 6,
//     zIndex: 100,
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
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
// });







//23/08/2025

// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated, Dimensions } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { indianStates, stateCityMap } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { useProfileNavigation } from '../utils/navigationHelper';

// const { width, height } = Dimensions.get('window');

// export default function Info4() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   const [villageName, setVillageName] = useState('');
//   const [filteredStates, setFilteredStates] = useState(indianStates);
//   const [filteredCities, setFilteredCities] = useState([]);
//   const [stateSearch, setStateSearch] = useState('');
//   const [citySearch, setCitySearch] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [stateModalVisible, setStateModalVisible] = useState(false);
//   const [cityModalVisible, setCityModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // Load existing data
//   useEffect(() => {
//     if (userData) {
//       if (userData.state) {
//         setSelectedState(userData.state);
//       }
//       if (userData.city) {
//         setSelectedCity(userData.city);
//       }
//       if (userData.village) {
//         setVillageName(userData.village);
//       }
//     }
//   }, [userData]);

//   const translations = {
//     title: {
//       ENG: `Now Let's build ${getPrefix().toLowerCase()} profile`,
//       HI: profileFor === 'MySelf' ? "अब अपना प्रोफाइल बनाएं" : 
//         profileFor === 'My Son' ? "अब अपने बेटे का प्रोफाइल बनाएं" :
//         profileFor === 'My Daughter' ? "अब अपनी बेटी का प्रोफाइल बनाएं" :
//         profileFor === 'My Sister' ? "अब अपनी बहन का प्रोफाइल बनाएं" :
//         profileFor === 'My Brother' ? "अब अपने भाई का प्रोफाइल बनाएं" :
//         profileFor === 'My Friend' ? "अब अपने दोस्त का प्रोफाइल बनाएं" :
//         profileFor === 'Cousin' ? "अब अपने चचेरे भाई का प्रोफाइल बनाएं" :
//         "अब अपने रिश्तेदार का प्रोफाइल बनाएं"
//     },
//     selectState: {
//       ENG: "Select State",
//       HI: "राज्य चुनें"
//     },
//     selectCity: {
//       ENG: "Select City",
//       HI: "शहर चुनें"
//     },
//     villageName: {
//       ENG: "Village Name (Optional)",
//       HI: "गाँव का नाम (वैकल्पिक)"
//     },
//     searchPlaceholder: {
//       ENG: "Search for",
//       HI: "खोजें"
//     },
//     noResults: {
//       ENG: "No results found",
//       HI: "कोई परिणाम नहीं मिला"
//     },
//     selectStateFirst: {
//       ENG: "Select a state first",
//       HI: "पहले एक राज्य चुनें"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     }
//   };

//   useEffect(() => {
//     setIsButtonDisabled(!selectedState || !selectedCity);
//   }, [selectedState, selectedCity]);

//   useEffect(() => {
//     setFilteredStates(
//       indianStates.filter(state =>
//         state.toLowerCase().includes(stateSearch.toLowerCase())
//     ));
//   }, [stateSearch]);

//   useEffect(() => {
//     if (selectedState) {
//       const citiesForState = stateCityMap[selectedState] || [];
//       const filtered = citiesForState.filter(city =>
//         city.toLowerCase().includes(citySearch.toLowerCase())
//       );
//       setFilteredCities(filtered);
//     }
//   }, [selectedState, citySearch]);

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare profile data
//       const profileData = {
//         ...userData,
//         state: selectedState,
//         city: selectedCity,
//         village: villageName || null,
//         profileProgress: 40,
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 4);

//       // Navigate to next screen
//       router.push(getNextScreen('homescreens/info4'));
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleStateSelect = async (item) => {
//     try {
//       setIsLoading(true);
//       setSelectedState(item);
//       setSelectedCity(null);
//       setCitySearch('');
//       setStateModalVisible(false);
//       setStateSearch('');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCitySelect = async (item) => {
//     try {
//       setIsLoading(true);
//       setSelectedCity(item);
//       setCityModalVisible(false);
//       setCitySearch('');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderStateItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleStateSelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderCityItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleCitySelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info4'))}
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

//       <View style={styles.contentContainer}>
//         {isLoading && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#87e7f5" />
//           </View>
//         )}
        
//         {/* Avatar Icon */}
//         <View style={styles.avatarContainer}>
//           <MaterialIcons name="location-history" size={40} color="white" />
//         </View>
        
//         <Text style={styles.title}>{translations.title[language]}</Text>

//         {/* State Selection */}
//         <Text style={styles.label}>{translations.selectState[language]}</Text>
//         <TouchableOpacity 
//           style={styles.selectBox}
//           onPress={() => setStateModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedState ? (
//             <Text style={styles.selectedValue}>{selectedState}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectState[language]}</Text>
//           )}
//           <MaterialIcons name="arrow-drop-down" size={24} color="#888" />
//         </TouchableOpacity>

//         <Modal
//           visible={stateModalVisible}
//           animationType="slide"
//           transparent={true}
//           onRequestClose={() => !isLoading && setStateModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <View style={styles.searchContainer}>
//                 <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//                 <TextInput
//                   style={styles.searchInput}
//                   placeholder={`${translations.searchPlaceholder[language]} ${translations.selectState[language]}`}
//                   value={stateSearch}
//                   onChangeText={setStateSearch}
//                   autoFocus={true}
//                   editable={!isLoading}
//                   placeholderTextColor="#888"
//                 />
//                 <TouchableOpacity 
//                   onPress={() => !isLoading && setStateModalVisible(false)}
//                   disabled={isLoading}
//                 >
//                   <MaterialIcons name="close" size={24} color="#888" />
//                 </TouchableOpacity>
//               </View>
//               {isLoading ? (
//                 <View style={styles.loaderInsideModal}>
//                   <ActivityIndicator size="large" color="#87e7f5" />
//                 </View>
//               ) : (
//                 <FlatList
//                   data={filteredStates}
//                   renderItem={renderStateItem}
//                   keyExtractor={(item) => item}
//                   style={styles.list}
//                   ListEmptyComponent={
//                     <View style={styles.emptyContainer}>
//                       <MaterialIcons name="search-off" size={50} color="#ddd" />
//                       <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
//                     </View>
//                   }
//                 />
//               )}
//             </View>
//           </View>
//         </Modal>

//         {/* City Selection */}
//         <Text style={styles.label}>{translations.selectCity[language]}</Text>
//         <TouchableOpacity 
//           style={[
//             styles.selectBox,
//             !selectedState && { backgroundColor: '#f5f5f5' }
//           ]}
//           onPress={() => setCityModalVisible(true)}
//           disabled={isLoading || !selectedState}
//         >
//           {selectedCity ? (
//             <Text style={styles.selectedValue}>{selectedCity}</Text>
//           ) : (
//             <Text style={[
//               styles.placeholderText,
//               !selectedState && { color: '#ccc' }
//             ]}>
//               {selectedState ? translations.selectCity[language] : translations.selectStateFirst[language]}
//             </Text>
//           )}
//           <MaterialIcons name="arrow-drop-down" size={24} color={!selectedState ? '#ccc' : '#888'} />
//         </TouchableOpacity>

//         <Modal
//           visible={cityModalVisible}
//           animationType="slide"
//           transparent={true}
//           onRequestClose={() => !isLoading && setCityModalVisible(false)}
//         >
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <View style={styles.searchContainer}>
//                 <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//                 <TextInput
//                   style={styles.searchInput}
//                   placeholder={`${translations.searchPlaceholder[language]} ${translations.selectCity[language]}`}
//                   value={citySearch}
//                   onChangeText={setCitySearch}
//                   autoFocus={true}
//                   editable={!isLoading}
//                   placeholderTextColor="#888"
//                 />
//                 <TouchableOpacity 
//                   onPress={() => !isLoading && setCityModalVisible(false)}
//                   disabled={isLoading}
//                 >
//                   <MaterialIcons name="close" size={24} color="#888" />
//                 </TouchableOpacity>
//               </View>
//               {isLoading ? (
//                 <View style={styles.loaderInsideModal}>
//                   <ActivityIndicator size="large" color="#87e7f5" />
//                 </View>
//               ) : (
//                 <FlatList
//                   data={filteredCities}
//                   renderItem={renderCityItem}
//                   keyExtractor={(item) => item}
//                   style={styles.list}
//                   ListEmptyComponent={
//                     <View style={styles.emptyContainer}>
//                       <MaterialIcons name="search-off" size={50} color="#ddd" />
//                       <Text style={styles.noResultsText}>
//                         {selectedState ? translations.noResults[language] : translations.selectStateFirst[language]}
//                       </Text>
//                     </View>
//                   }
//                 />
//               )}
//             </View>
//           </View>
//         </Modal>
        
//         {/* Village Name */}
//         <Text style={styles.label}>{translations.villageName[language]}</Text>
//         <View style={styles.inputBox}>
//           <TextInput 
//             placeholder={translations.villageName[language]}
//             value={villageName}
//             onChangeText={setVillageName}
//             style={styles.textInput}
//             editable={!isLoading}
//             placeholderTextColor="#888"
//           />
//         </View>

//         {/* Continue Button */}
//         <TouchableOpacity 
//           onPress={handleContinue} 
//           style={[
//             styles.button,
//             isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled
//           ]}
//           disabled={isButtonDisabled || isLoading}
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="white" />
//           ) : (
//             <Text style={styles.buttonText}>{translations.continue[language]}</Text>
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
//     paddingHorizontal: 20,
//     paddingTop: 20,
//   },
//   avatarContainer: {
//     alignItems: 'center',
//     backgroundColor: '#87e7f5',
//     borderRadius: 50,
//     width: 70,
//     height: 70,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24, 
//     fontWeight: 'bold', 
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#333',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#555',
//     marginBottom: 8,
//     marginLeft: 5,
//   },
//   selectBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     padding: 16,
//     marginBottom: 20,
//     backgroundColor: 'white',
//     height: 56,
//   },
//   selectedValue: {
//     fontSize: 16,
//     color: '#333',
//     flex: 1,
//   },
//   placeholderText: {
//     fontSize: 16,
//     color: '#888',
//     flex: 1,
//   },
//   inputBox: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     marginBottom: 30,
//     backgroundColor: 'white',
//     height: 56,
//     justifyContent: 'center',
//   },
//   textInput: {
//     padding: 16,
//     fontSize: 16,
//     color: '#333',
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
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#212529',
//     paddingVertical: 8,
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   listText: {
//     fontSize: 16,
//     color: '#212529',
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//   },
//   noResultsText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 10,
//   },
//   button: {
//     width: '100%',
//     padding: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//     marginBottom: 30,
//   },
//   buttonEnabled: {
//     backgroundColor: '#87e7f5',
//   },
//   buttonDisabled: {
//     backgroundColor: '#cccccc',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   loaderInsideModal: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
// });








//02/09/2025

//23/08/2025
//app/homescreens/info4.jsx
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated, Dimensions, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { indianStates, stateCityMap } from '../../constant/Info';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { useProfileNavigation } from '../utils/navigationHelper';

const { width, height } = Dimensions.get('window');

export default function Info4() {
  const router = useRouter();
  const { language, toggleLanguage, translateX } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [villageName, setVillageName] = useState('');
  const [filteredStates, setFilteredStates] = useState(indianStates);
  const [filteredCities, setFilteredCities] = useState([]);
  const [stateSearch, setStateSearch] = useState('');
  const [citySearch, setCitySearch] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [stateModalVisible, setStateModalVisible] = useState(false);
  const [cityModalVisible, setCityModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load existing data
  useEffect(() => {
    if (userData) {
      if (userData.state) {
        setSelectedState(userData.state);
      }
      if (userData.city) {
        setSelectedCity(userData.city);
      }
      if (userData.village) {
        setVillageName(userData.village);
      }
    }
  }, [userData]);

  const translations = {
    title: {
      ENG: `Now Let's build ${getPrefix().toLowerCase()} profile`,
      HI: profileFor === 'MySelf' ? "अब अपना प्रोफाइल बनाएं" : 
        profileFor === 'My Son' ? "अब अपने बेटे का प्रोफाइल बनाएं" :
        profileFor === 'My Daughter' ? "अब अपनी बेटी का प्रोफाइल बनाएं" :
        profileFor === 'My Sister' ? "अब अपनी बहन का प्रोफाइल बनाएं" :
        profileFor === 'My Brother' ? "अब अपने भाई का प्रोफाइल बनाएं" :
        profileFor === 'My Friend' ? "अब अपने दोस्त का प्रोफाइल बनाएं" :
        profileFor === 'Cousin' ? "अब अपने चचेरे भाई का प्रोफाइल बनाएं" :
        "अब अपने रिश्तेदार का प्रोफाइल बनाएं"
    },
    selectState: {
      ENG: "Select State",
      HI: "राज्य चुनें"
    },
    selectCity: {
      ENG: "Select City",
      HI: "शहर चुनें"
    },
    villageName: {
      ENG: "Village Name (Optional)",
      HI: "गाँव का नाम (वैकल्पिक)"
    },
    searchPlaceholder: {
      ENG: "Search for",
      HI: "खोजें"
    },
    noResults: {
      ENG: "No results found",
      HI: "कोई परिणाम नहीं मिला"
    },
    selectStateFirst: {
      ENG: "Select a state first",
      HI: "पहले एक राज्य चुनें"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    }
  };

  useEffect(() => {
    setIsButtonDisabled(!selectedState || !selectedCity);
  }, [selectedState, selectedCity]);

  useEffect(() => {
    setFilteredStates(
      indianStates.filter(state =>
        state.toLowerCase().includes(stateSearch.toLowerCase())
    ));
  }, [stateSearch]);

  useEffect(() => {
    if (selectedState) {
      const citiesForState = stateCityMap[selectedState] || [];
      const filtered = citiesForState.filter(city =>
        city.toLowerCase().includes(citySearch.toLowerCase())
      );
      setFilteredCities(filtered);
    }
  }, [selectedState, citySearch]);

  const handleContinue = async () => {
    if (isButtonDisabled) return;
    
    try {
      setIsLoading(true);
      
      // Prepare profile data
      const profileData = {
        ...userData,
        state: selectedState,
        city: selectedCity,
        village: villageName || null,
        profileProgress: 40,
        updatedAt: serverTimestamp()
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 4);

      // Navigate to next screen
      router.push(getNextScreen('homescreens/info4'));
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStateSelect = async (item) => {
    try {
      setIsLoading(true);
      setSelectedState(item);
      setSelectedCity(null);
      setCitySearch('');
      setStateModalVisible(false);
      setStateSearch('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCitySelect = async (item) => {
    try {
      setIsLoading(true);
      setSelectedCity(item);
      setCityModalVisible(false);
      setCitySearch('');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStateItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleStateSelect(item)}
      disabled={isLoading}
    >
      <Text style={styles.listText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderCityItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleCitySelect(item)}
      disabled={isLoading}
    >
      <Text style={styles.listText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info4'))}
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
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentContainer}>
          {isLoading && (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#87e7f5" />
            </View>
          )}
          
          {/* Avatar Icon */}
          <View style={styles.avatarContainer}>
            <MaterialIcons name="location-history" size={40} color="white" />
          </View>
          
          <Text style={styles.title}>{translations.title[language]}</Text>

          {/* State Selection */}
          <Text style={styles.label}>{translations.selectState[language]}</Text>
          <TouchableOpacity 
            style={styles.selectBox}
            onPress={() => setStateModalVisible(true)}
            disabled={isLoading}
          >
            {selectedState ? (
              <Text style={styles.selectedValue}>{selectedState}</Text>
            ) : (
              <Text style={styles.placeholderText}>{translations.selectState[language]}</Text>
            )}
            <MaterialIcons name="arrow-drop-down" size={24} color="#888" />
          </TouchableOpacity>

          <Modal
            visible={stateModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => !isLoading && setStateModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.searchContainer}>
                  <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
                  <TextInput
                    style={styles.searchInput}
                    placeholder={`${translations.searchPlaceholder[language]} ${translations.selectState[language]}`}
                    value={stateSearch}
                    onChangeText={setStateSearch}
                    autoFocus={true}
                    editable={!isLoading}
                    placeholderTextColor="#888"
                  />
                  <TouchableOpacity 
                    onPress={() => !isLoading && setStateModalVisible(false)}
                    disabled={isLoading}
                  >
                    <MaterialIcons name="close" size={24} color="#888" />
                  </TouchableOpacity>
                </View>
                {isLoading ? (
                  <View style={styles.loaderInsideModal}>
                    <ActivityIndicator size="large" color="#87e7f5" />
                  </View>
                ) : (
                  <FlatList
                    data={filteredStates}
                    renderItem={renderStateItem}
                    keyExtractor={(item) => item}
                    style={styles.list}
                    ListEmptyComponent={
                      <View style={styles.emptyContainer}>
                        <MaterialIcons name="search-off" size={50} color="#ddd" />
                        <Text style={styles.noResultsText}>{translations.noResults[language]}</Text>
                      </View>
                    }
                  />
                )}
              </View>
            </View>
          </Modal>

          {/* City Selection */}
          <Text style={styles.label}>{translations.selectCity[language]}</Text>
          <TouchableOpacity 
            style={[
              styles.selectBox,
              !selectedState && { backgroundColor: '#f5f5f5' }
            ]}
            onPress={() => setCityModalVisible(true)}
            disabled={isLoading || !selectedState}
          >
            {selectedCity ? (
              <Text style={styles.selectedValue}>{selectedCity}</Text>
            ) : (
              <Text style={[
                styles.placeholderText,
                !selectedState && { color: '#ccc' }
              ]}>
                {selectedState ? translations.selectCity[language] : translations.selectStateFirst[language]}
              </Text>
            )}
            <MaterialIcons name="arrow-drop-down" size={24} color={!selectedState ? '#ccc' : '#888'} />
          </TouchableOpacity>

          <Modal
            visible={cityModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => !isLoading && setCityModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.searchContainer}>
                  <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
                  <TextInput
                    style={styles.searchInput}
                    placeholder={`${translations.searchPlaceholder[language]} ${translations.selectCity[language]}`}
                    value={citySearch}
                    onChangeText={setCitySearch}
                    autoFocus={true}
                    editable={!isLoading}
                    placeholderTextColor="#888"
                  />
                  <TouchableOpacity 
                    onPress={() => !isLoading && setCityModalVisible(false)}
                    disabled={isLoading}
                  >
                    <MaterialIcons name="close" size={24} color="#888" />
                  </TouchableOpacity>
                </View>
                {isLoading ? (
                  <View style={styles.loaderInsideModal}>
                    <ActivityIndicator size="large" color="#87e7f5" />
                  </View>
                ) : (
                  <FlatList
                    data={filteredCities}
                    renderItem={renderCityItem}
                    keyExtractor={(item) => item}
                    style={styles.list}
                    ListEmptyComponent={
                      <View style={styles.emptyContainer}>
                        <MaterialIcons name="search-off" size={50} color="#ddd" />
                        <Text style={styles.noResultsText}>
                          {selectedState ? translations.noResults[language] : translations.selectStateFirst[language]}
                        </Text>
                      </View>
                    }
                  />
                )}
              </View>
            </View>
          </Modal>
          
          {/* Village Name */}
          <Text style={styles.label}>{translations.villageName[language]}</Text>
          <View style={styles.inputBox}>
            <TextInput 
              placeholder={translations.villageName[language]}
              value={villageName}
              onChangeText={setVillageName}
              style={styles.textInput}
              editable={!isLoading}
              placeholderTextColor="#888"
            />
          </View>

          {/* Continue Button */}
          <TouchableOpacity 
            onPress={handleContinue} 
            style={[
              styles.button,
              isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled
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
  scrollContainer: {
    flex: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
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
    paddingBottom: 40, // Added padding at bottom for better scrolling
  },
  avatarContainer: {
    alignItems: 'center',
    backgroundColor: '#87e7f5',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
    marginLeft: 5,
  },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    backgroundColor: 'white',
    height: 56,
  },
  selectedValue: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    flex: 1,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 30,
    backgroundColor: 'white',
    height: 56,
    justifyContent: 'center',
  },
  textInput: {
    padding: 16,
    fontSize: 16,
    color: '#333',
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
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#212529',
    paddingVertical: 8,
  },
  list: {
    paddingHorizontal: 10,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  listText: {
    fontSize: 16,
    color: '#212529',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  noResultsText: {
    fontSize: 16,
    color: '#adb5bd',
    marginTop: 10,
  },
  button: {
    width: '100%',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  buttonEnabled: {
    backgroundColor: '#87e7f5',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loaderInsideModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});