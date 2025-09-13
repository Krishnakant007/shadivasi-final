
// //app/homescreen/info3.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated, Dimensions } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Community, Religions } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { MaterialIcons } from '@expo/vector-icons';

// const { width, height } = Dimensions.get('window');

// export default function Info3() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const [selectedReligion, setSelectedReligion] = useState(null);
//   const [selectedCommunity, setSelectedCommunity] = useState(null);
//   const [filteredReligions, setFilteredReligions] = useState(Religions);
//   const [filteredCommunities, setFilteredCommunities] = useState(Community);
//   const [religionSearch, setReligionSearch] = useState('');
//   const [communitySearch, setCommunitySearch] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [religionModalVisible, setReligionModalVisible] = useState(false);
//   const [communityModalVisible, setCommunityModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const translations = {
//     titleReligion: {
//       ENG: "Your Religion",
//       HI: "आपका धर्म"
//     },
//     titleCommunity: {
//       ENG: "Community",
//       HI: "समुदाय"
//     },
//     selectReligion: {
//       ENG: "Select your religion",
//       HI: "अपना धर्म चुनें"
//     },
//     selectCommunity: {
//       ENG: "Select your community",
//       HI: "अपना समुदाय चुनें"
//     },
//     searchReligion: {
//       ENG: "Search religions...",
//       HI: "धर्म खोजें..."
//     },
//     searchCommunity: {
//       ENG: "Search communities...",
//       HI: "समुदाय खोजें..."
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     close: {
//       ENG: "Close",
//       HI: "बंद करें"
//     },
//     noResults: {
//       ENG: "No matching religions found",
//       HI: "कोई मिलता धर्म नहीं मिला"
//     },
//     noCommunityResults: {
//       ENG: "No matching communities found",
//       HI: "कोई मिलता समुदाय नहीं मिला"
//     }
//   };

//   useEffect(() => {
//     setIsButtonDisabled(!selectedReligion || !selectedCommunity);
//   }, [selectedReligion, selectedCommunity]);

//   useEffect(() => {
//     setFilteredReligions(
//       Religions.filter(religion =>
//         religion.toLowerCase().includes(religionSearch.toLowerCase())
//     ));
//   }, [religionSearch]);

//   useEffect(() => {
//     setFilteredCommunities(
//       Community.filter(community =>
//         community.toLowerCase().includes(communitySearch.toLowerCase())
//     ));
//   }, [communitySearch]);

//   const handleContinue = () => {
//     if (!isButtonDisabled) {
//       setIsLoading(true);
//       setTimeout(() => {
//         router.push('homescreens/info5');
//         setIsLoading(false);
//       }, 500);
//     }
//   };

//   const handleReligionSelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedReligion(item);
//       setReligionModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const handleCommunitySelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedCommunity(item);
//       setCommunityModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const renderReligionItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleReligionSelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderCommunityItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleCommunitySelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle - Updated to right position */}
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
//           <ActivityIndicator size="large" color="#608c07" />
//         </View>
//       )}
      
//       <View style={styles.container}>
//         <FontAwesome name="users" size={40} color="#608c07" />
//       </View>
    
//       <Text style={styles.title}>{translations.titleReligion[language]}</Text>
//       <View style={styles.box}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setReligionModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedReligion ? (
//             <Text style={styles.selectedValue}>{selectedReligion}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectReligion[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={religionModalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => !isLoading && setReligionModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchReligion[language]}
//                 value={religionSearch}
//                 onChangeText={setReligionSearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setReligionModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#608c07" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredReligions}
//                 renderItem={renderReligionItem}
//                 keyExtractor={(item, index) => index.toString()}
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
    
//       <Text style={styles.title}>{translations.titleCommunity[language]}</Text>
//       <View style={styles.box}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setCommunityModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedCommunity ? (
//             <Text style={styles.selectedValue}>{selectedCommunity}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectCommunity[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={communityModalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => !isLoading && setCommunityModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchCommunity[language]}
//                 value={communitySearch}
//                 onChangeText={setCommunitySearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setCommunityModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#608c07" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredCommunities}
//                 renderItem={renderCommunityItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>{translations.noCommunityResults[language]}</Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
    
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
//     paddingTop: 40,
//     backgroundColor: 'white',
//     height: '100%',
//     alignItems: 'center'
//   },
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#c1e677',
//     borderRadius: 99,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     paddingTop: 10
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     width: '80%',
//     marginVertical: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9'
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
//     borderRadius: 10,
//     maxHeight: '70%',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     alignItems: 'center',
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   listText: {
//     fontSize: 16,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30
//   },
//   noResultsText: {
//     padding: 20,
//     textAlign: 'center',
//     color: '#888',
//   },
//   button: {
//     marginTop: 30,
//     padding: 15,
//     paddingHorizontal: 60,
//     borderRadius: 30,
//     width: '80%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//     height: 55,
//   },
//   buttonEnabled: {
//     backgroundColor: '#608c07'
//   },
//   buttonDisabled: {
//     backgroundColor: '#cccccc'
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white'
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
// });




///14-08-2025

// app/homescreens/info3.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated, Dimensions } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Community, Religions } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useProfile } from '../context/ProfileContext';

// const { width, height } = Dimensions.get('window');

// export default function Info3() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const [selectedReligion, setSelectedReligion] = useState(null);
//   const [selectedCommunity, setSelectedCommunity] = useState(null);
//   const [filteredReligions, setFilteredReligions] = useState(Religions);
//   const [filteredCommunities, setFilteredCommunities] = useState(Community);
//   const [religionSearch, setReligionSearch] = useState('');
//   const [communitySearch, setCommunitySearch] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [religionModalVisible, setReligionModalVisible] = useState(false);
//   const [communityModalVisible, setCommunityModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const translations = {
//     titleReligion: {
//       ENG: `${getPrefix()} Religion`,
//       HI: profileFor === 'MySelf' ? "आपका धर्म" :
//         profileFor === 'My Son' ? "आपके बेटे का धर्म" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का धर्म" :
//         profileFor === 'My Sister' ? "आपकी बहन का धर्म" :
//         profileFor === 'My Brother' ? "आपके भाई का धर्म" :
//         profileFor === 'My Friend' ? "आपके दोस्त का धर्म" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का धर्म" :
//         "आपके रिश्तेदार का धर्म"
//     },
//     titleCommunity: {
//       ENG: `${getPrefix()} Community`,
//       HI: profileFor === 'MySelf' ? "आपका समुदाय" :
//         profileFor === 'My Son' ? "आपके बेटे का समुदाय" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का समुदाय" :
//         profileFor === 'My Sister' ? "आपकी बहन का समुदाय" :
//         profileFor === 'My Brother' ? "आपके भाई का समुदाय" :
//         profileFor === 'My Friend' ? "आपके दोस्त का समुदाय" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का समुदाय" :
//         "आपके रिश्तेदार का समुदाय"
//     },
//     selectReligion: {
//       ENG: `Select ${getPrefix().toLowerCase()} religion`,
//       HI: profileFor === 'MySelf' ? "अपना धर्म चुनें" :
//         profileFor === 'My Son' ? "अपने बेटे का धर्म चुनें" :
//         profileFor === 'My Daughter' ? "अपनी बेटी का धर्म चुनें" :
//         profileFor === 'My Sister' ? "अपनी बहन का धर्म चुनें" :
//         profileFor === 'My Brother' ? "अपने भाई का धर्म चुनें" :
//         profileFor === 'My Friend' ? "अपने दोस्त का धर्म चुनें" :
//         profileFor === 'Cousin' ? "अपने चचेरे भाई का धर्म चुनें" :
//         "अपने रिश्तेदार का धर्म चुनें"
//     },
//     selectCommunity: {
//       ENG: `Select ${getPrefix().toLowerCase()} community`,
//       HI: profileFor === 'MySelf' ? "अपना समुदाय चुनें" :
//         profileFor === 'My Son' ? "अपने बेटे का समुदाय चुनें" :
//         profileFor === 'My Daughter' ? "अपनी बेटी का समुदाय चुनें" :
//         profileFor === 'My Sister' ? "अपनी बहन का समुदाय चुनें" :
//         profileFor === 'My Brother' ? "अपने भाई का समुदाय चुनें" :
//         profileFor === 'My Friend' ? "अपने दोस्त का समुदाय चुनें" :
//         profileFor === 'Cousin' ? "अपने चचेरे भाई का समुदाय चुनें" :
//         "अपने रिश्तेदार का समुदाय चुनें"
//     },
//     searchReligion: {
//       ENG: "Search religions...",
//       HI: "धर्म खोजें..."
//     },
//     searchCommunity: {
//       ENG: "Search communities...",
//       HI: "समुदाय खोजें..."
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     close: {
//       ENG: "Close",
//       HI: "बंद करें"
//     },
//     noResults: {
//       ENG: "No matching religions found",
//       HI: "कोई मिलता धर्म नहीं मिला"
//     },
//     noCommunityResults: {
//       ENG: "No matching communities found",
//       HI: "कोई मिलता समुदाय नहीं मिला"
//     }
//   };

//   useEffect(() => {
//     setIsButtonDisabled(!selectedReligion || !selectedCommunity);
//   }, [selectedReligion, selectedCommunity]);

//   useEffect(() => {
//     setFilteredReligions(
//       Religions.filter(religion =>
//         religion.toLowerCase().includes(religionSearch.toLowerCase())
//     ));
//   }, [religionSearch]);

//   useEffect(() => {
//     setFilteredCommunities(
//       Community.filter(community =>
//         community.toLowerCase().includes(communitySearch.toLowerCase())
//     ));
//   }, [communitySearch]);

//   const handleContinue = () => {
//     if (!isButtonDisabled) {
//       setIsLoading(true);
//       setTimeout(() => {
//         router.push('homescreens/info5');
//         setIsLoading(false);
//       }, 500);
//     }
//   };

//   const handleReligionSelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedReligion(item);
//       setReligionModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const handleCommunitySelect = (item) => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setSelectedCommunity(item);
//       setCommunityModalVisible(false);
//       setIsLoading(false);
//     }, 300);
//   };

//   const renderReligionItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleReligionSelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderCommunityItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleCommunitySelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.mainContainer}>
//       {/* Language Toggle - Updated to right position */}
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
//           <ActivityIndicator size="large" color="#608c07" />
//         </View>
//       )}
      
//       <View style={styles.container}>
//         <FontAwesome name="users" size={40} color="#608c07" />
//       </View>
    
//       <Text style={styles.title}>{translations.titleReligion[language]}</Text>
//       <View style={styles.box}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setReligionModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedReligion ? (
//             <Text style={styles.selectedValue}>{selectedReligion}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectReligion[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={religionModalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => !isLoading && setReligionModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchReligion[language]}
//                 value={religionSearch}
//                 onChangeText={setReligionSearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setReligionModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#608c07" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredReligions}
//                 renderItem={renderReligionItem}
//                 keyExtractor={(item, index) => index.toString()}
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
    
//       <Text style={styles.title}>{translations.titleCommunity[language]}</Text>
//       <View style={styles.box}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setCommunityModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedCommunity ? (
//             <Text style={styles.selectedValue}>{selectedCommunity}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectCommunity[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={communityModalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => !isLoading && setCommunityModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchCommunity[language]}
//                 value={communitySearch}
//                 onChangeText={setCommunitySearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setCommunityModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#608c07" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredCommunities}
//                 renderItem={renderCommunityItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>{translations.noCommunityResults[language]}</Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
    
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
//     paddingTop: 40,
//     backgroundColor: 'white',
//     height: '100%',
//     alignItems: 'center'
//   },
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#c1e677',
//     borderRadius: 99,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     paddingTop: 10
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     width: '80%',
//     marginVertical: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9'
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
//     borderRadius: 10,
//     maxHeight: '70%',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     alignItems: 'center',
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   listText: {
//     fontSize: 16,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30
//   },
//   noResultsText: {
//     padding: 20,
//     textAlign: 'center',
//     color: '#888',
//   },
//   button: {
//     marginTop: 30,
//     padding: 15,
//     paddingHorizontal: 60,
//     borderRadius: 30,
//     width: '80%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//     height: 55,
//   },
//   buttonEnabled: {
//     backgroundColor: '#608c07'
//   },
//   buttonDisabled: {
//     backgroundColor: '#cccccc'
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white'
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
// });






//16/08/2025
// app/homescreens/info3.jsx
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated, Dimensions } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Community, Religions } from '../../constant/Info';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// const { width, height } = Dimensions.get('window');

// export default function Info3() {
//   const router = useRouter();
//   const { language, toggleLanguage, translateX } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [selectedReligion, setSelectedReligion] = useState(null);
//   const [selectedCommunity, setSelectedCommunity] = useState(null);
//   const [filteredReligions, setFilteredReligions] = useState(Religions);
//   const [filteredCommunities, setFilteredCommunities] = useState(Community);
//   const [religionSearch, setReligionSearch] = useState('');
//   const [communitySearch, setCommunitySearch] = useState('');
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [religionModalVisible, setReligionModalVisible] = useState(false);
//   const [communityModalVisible, setCommunityModalVisible] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const translations = {
//     titleReligion: {
//       ENG: `${getPrefix()} Religion`,
//       HI: profileFor === 'MySelf' ? "आपका धर्म" :
//         profileFor === 'My Son' ? "आपके बेटे का धर्म" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का धर्म" :
//         profileFor === 'My Sister' ? "आपकी बहन का धर्म" :
//         profileFor === 'My Brother' ? "आपके भाई का धर्म" :
//         profileFor === 'My Friend' ? "आपके दोस्त का धर्म" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का धर्म" :
//         "आपके रिश्तेदार का धर्म"
//     },
//     titleCommunity: {
//       ENG: `${getPrefix()} Community`,
//       HI: profileFor === 'MySelf' ? "आपका समुदाय" :
//         profileFor === 'My Son' ? "आपके बेटे का समुदाय" :
//         profileFor === 'My Daughter' ? "आपकी बेटी का समुदाय" :
//         profileFor === 'My Sister' ? "आपकी बहन का समुदाय" :
//         profileFor === 'My Brother' ? "आपके भाई का समुदाय" :
//         profileFor === 'My Friend' ? "आपके दोस्त का समुदाय" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई का समुदाय" :
//         "आपके रिश्तेदार का समुदाय"
//     },
//     selectReligion: {
//       ENG: `Select ${getPrefix().toLowerCase()} religion`,
//       HI: profileFor === 'MySelf' ? "अपना धर्म चुनें" :
//         profileFor === 'My Son' ? "अपने बेटे का धर्म चुनें" :
//         profileFor === 'My Daughter' ? "अपनी बेटी का धर्म चुनें" :
//         profileFor === 'My Sister' ? "अपनी बहन का धर्म चुनें" :
//         profileFor === 'My Brother' ? "अपने भाई का धर्म चुनें" :
//         profileFor === 'My Friend' ? "अपने दोस्त का धर्म चुनें" :
//         profileFor === 'Cousin' ? "अपने चचेरे भाई का धर्म चुनें" :
//         "अपने रिश्तेदार का धर्म चुनें"
//     },
//     selectCommunity: {
//       ENG: `Select ${getPrefix().toLowerCase()} community`,
//       HI: profileFor === 'MySelf' ? "अपना समुदाय चुनें" :
//         profileFor === 'My Son' ? "अपने बेटे का समुदाय चुनें" :
//         profileFor === 'My Daughter' ? "अपनी बेटी का समुदाय चुनें" :
//         profileFor === 'My Sister' ? "अपनी बहन का समुदाय चुनें" :
//         profileFor === 'My Brother' ? "अपने भाई का समुदाय चुनें" :
//         profileFor === 'My Friend' ? "अपने दोस्त का समुदाय चुनें" :
//         profileFor === 'Cousin' ? "अपने चचेरे भाई का समुदाय चुनें" :
//         "अपने रिश्तेदार का समुदाय चुनें"
//     },
//     searchReligion: {
//       ENG: "Search religions...",
//       HI: "धर्म खोजें..."
//     },
//     searchCommunity: {
//       ENG: "Search communities...",
//       HI: "समुदाय खोजें..."
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     close: {
//       ENG: "Close",
//       HI: "बंद करें"
//     },
//     noResults: {
//       ENG: "No matching religions found",
//       HI: "कोई मिलता धर्म नहीं मिला"
//     },
//     noCommunityResults: {
//       ENG: "No matching communities found",
//       HI: "कोई मिलता समुदाय नहीं मिला"
//     }
//   };

//   useEffect(() => {
//     setIsButtonDisabled(!selectedReligion || !selectedCommunity);
//   }, [selectedReligion, selectedCommunity]);

//   useEffect(() => {
//     setFilteredReligions(
//       Religions.filter(religion =>
//         religion.toLowerCase().includes(religionSearch.toLowerCase())
//     ));
//   }, [religionSearch]);

//   useEffect(() => {
//     setFilteredCommunities(
//       Community.filter(community =>
//         community.toLowerCase().includes(communitySearch.toLowerCase())
//     ));
//   }, [communitySearch]);

//   const handleContinue = async () => {
//     if (isButtonDisabled) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare profile data
//       const profileData = {
//         ...userData,
//         religion: selectedReligion,
//         community: selectedCommunity,
//         profileProgress: 30, // Update progress to 30%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info4');
//     } catch (error) {
//       console.error('Error saving profile:', error);
//       // Here you could add error state and display to user
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleReligionSelect = async (item) => {
//     try {
//       setIsLoading(true);
//       setSelectedReligion(item);
//       setReligionModalVisible(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleCommunitySelect = async (item) => {
//     try {
//       setIsLoading(true);
//       setSelectedCommunity(item);
//       setCommunityModalVisible(false);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const renderReligionItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleReligionSelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

//   const renderCommunityItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.listItem}
//       onPress={() => handleCommunitySelect(item)}
//       disabled={isLoading}
//     >
//       <Text style={styles.listText}>{item}</Text>
//     </TouchableOpacity>
//   );

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
//           <ActivityIndicator size="large" color="#608c07" />
//         </View>
//       )}
      
//       <View style={styles.container}>
//         <FontAwesome name="users" size={40} color="#608c07" />
//       </View>
    
//       <Text style={styles.title}>{translations.titleReligion[language]}</Text>
//       <View style={styles.box}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setReligionModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedReligion ? (
//             <Text style={styles.selectedValue}>{selectedReligion}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectReligion[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={religionModalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => !isLoading && setReligionModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchReligion[language]}
//                 value={religionSearch}
//                 onChangeText={setReligionSearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setReligionModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#608c07" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredReligions}
//                 renderItem={renderReligionItem}
//                 keyExtractor={(item, index) => index.toString()}
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
    
//       <Text style={styles.title}>{translations.titleCommunity[language]}</Text>
//       <View style={styles.box}>
//         <TouchableOpacity
//           style={styles.pickerTouchable}
//           onPress={() => setCommunityModalVisible(true)}
//           disabled={isLoading}
//         >
//           {selectedCommunity ? (
//             <Text style={styles.selectedValue}>{selectedCommunity}</Text>
//           ) : (
//             <Text style={styles.placeholderText}>{translations.selectCommunity[language]}</Text>
//           )}
//         </TouchableOpacity>
//       </View>

//       <Modal
//         visible={communityModalVisible}
//         animationType="fade"
//         transparent={true}
//         onRequestClose={() => !isLoading && setCommunityModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.searchContainer}>
//               <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchCommunity[language]}
//                 value={communitySearch}
//                 onChangeText={setCommunitySearch}
//                 autoFocus={true}
//                 editable={!isLoading}
//               />
//               <TouchableOpacity
//                 onPress={() => !isLoading && setCommunityModalVisible(false)}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="close" size={24} color="#888" />
//               </TouchableOpacity>
//             </View>
//             {isLoading ? (
//               <View style={styles.loaderInsideModal}>
//                 <ActivityIndicator size="large" color="#608c07" />
//               </View>
//             ) : (
//               <FlatList
//                 data={filteredCommunities}
//                 renderItem={renderCommunityItem}
//                 keyExtractor={(item, index) => index.toString()}
//                 style={styles.list}
//                 ListEmptyComponent={
//                   <View style={styles.emptyContainer}>
//                     <MaterialIcons name="search-off" size={50} color="#ddd" />
//                     <Text style={styles.noResultsText}>{translations.noCommunityResults[language]}</Text>
//                   </View>
//                 }
//               />
//             )}
//           </View>
//         </View>
//       </Modal>
    
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
//     paddingTop: 40,
//     backgroundColor: 'white',
//     height: '100%',
//     alignItems: 'center'
//   },
//   container: {
//     alignItems: 'center',
//     backgroundColor: '#c1e677',
//     borderRadius: 99,
//     width: 80,
//     height: 80,
//     justifyContent: 'center',
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     paddingTop: 10
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     width: '80%',
//     marginVertical: 10,
//     borderRadius: 8,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9'
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
//     borderRadius: 10,
//     maxHeight: '70%',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     alignItems: 'center',
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     marginRight: 10,
//   },
//   list: {
//     paddingHorizontal: 10,
//   },
//   listItem: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   listText: {
//     fontSize: 16,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30
//   },
//   noResultsText: {
//     padding: 20,
//     textAlign: 'center',
//     color: '#888',
//   },
//   button: {
//     marginTop: 30,
//     padding: 15,
//     paddingHorizontal: 60,
//     borderRadius: 30,
//     width: '80%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//     height: 55,
//   },
//   buttonEnabled: {
//     backgroundColor: '#608c07'
//   },
//   buttonDisabled: {
//     backgroundColor: '#cccccc'
//   },
//   buttonText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white'
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
// });









//23/08/2025
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, FlatList, ActivityIndicator, Image, Animated, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Community, Religions } from '../../constant/Info';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import { MaterialIcons } from '@expo/vector-icons';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { useProfileNavigation } from '../utils/navigationHelper';

const { width, height } = Dimensions.get('window');

export default function Info3() {
  const router = useRouter();
  const { language, toggleLanguage, translateX } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const [selectedReligion, setSelectedReligion] = useState(null);
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [filteredReligions, setFilteredReligions] = useState(Religions);
  const [filteredCommunities, setFilteredCommunities] = useState(Community);
  const [religionSearch, setReligionSearch] = useState('');
  const [communitySearch, setCommunitySearch] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [religionModalVisible, setReligionModalVisible] = useState(false);
  const [communityModalVisible, setCommunityModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load existing data
  useEffect(() => {
    if (userData) {
      if (userData.religion) {
        setSelectedReligion(userData.religion);
      }
      if (userData.community) {
        setSelectedCommunity(userData.community);
      }
    }
  }, [userData]);

  const translations = {
    titleReligion: {
      ENG: `${getPrefix()} Religion`,
      HI: profileFor === 'MySelf' ? "आपका धर्म" : 
        profileFor === 'My Son' ? "आपके बेटे का धर्म" :
        profileFor === 'My Daughter' ? "आपकी बेटी का धर्म" :
        profileFor === 'My Sister' ? "आपकी बहन का धर्म" :
        profileFor === 'My Brother' ? "आपके भाई का धर्म" :
        profileFor === 'My Friend' ? "आपके दोस्त का धर्म" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई का धर्म" :
        "आपके रिश्तेदार का धर्म"
    },
    titleCommunity: {
      ENG: `${getPrefix()} Community`,
      HI: profileFor === 'MySelf' ? "आपका समुदाय" : 
        profileFor === 'My Son' ? "आपके बेटे का समुदाय" :
        profileFor === 'My Daughter' ? "आपकी बेटी का समुदाय" :
        profileFor === 'My Sister' ? "आपकी बहन का समुदाय" :
        profileFor === 'My Brother' ? "आपके भाई का समुदाय" :
        profileFor === 'My Friend' ? "आपके दोस्त का समुदाय" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई का समुदाय" :
        "आपके रिश्तेदार का समुदाय"
    },
    selectReligion: {
      ENG: `Select ${getPrefix().toLowerCase()} religion`,
      HI: profileFor === 'MySelf' ? "अपना धर्म चुनें" : 
        profileFor === 'My Son' ? "अपने बेटे का धर्म चुनें" :
        profileFor === 'My Daughter' ? "अपनी बेटी का धर्म चुनें" :
        profileFor === 'My Sister' ? "अपनी बहन का धर्म चुनें" :
        profileFor === 'My Brother' ? "अपने भाई का धर्म चुनें" :
        profileFor === 'My Friend' ? "अपने दोस्त का धर्म चुनें" :
        profileFor === 'Cousin' ? "अपने चचेरे भाई का धर्म चुनें" :
        "अपने रिश्तेदार का धर्म चुनें"
    },
    selectCommunity: {
      ENG: `Select ${getPrefix().toLowerCase()} community`,
      HI: profileFor === 'MySelf' ? "अपना समुदाय चुनें" : 
        profileFor === 'My Son' ? "अपने बेटे का समुदाय चुनें" :
        profileFor === 'My Daughter' ? "अपनी बेटी का समुदाय चुनें" :
        profileFor === 'My Sister' ? "अपनी बहन का समुदाय चुनें" :
        profileFor === 'My Brother' ? "अपने भाई का समुदाय चुनें" :
        profileFor === 'My Friend' ? "अपने दोस्त का समुदाय चुनें" :
        profileFor === 'Cousin' ? "अपने चचेरे भाई का समुदाय चुनें" :
        "अपने रिश्तेदार का समुदाय चुनें"
    },
    searchReligion: {
      ENG: "Search religions...",
      HI: "धर्म खोजें..."
    },
    searchCommunity: {
      ENG: "Search communities...",
      HI: "समुदाय खोजें..."
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    close: {
      ENG: "Close",
      HI: "बंद करें"
    },
    noResults: {
      ENG: "No matching religions found",
      HI: "कोई मिलता धर्म नहीं मिला"
    },
    noCommunityResults: {
      ENG: "No matching communities found",
      HI: "कोई मिलता समुदाय नहीं मिला"
    }
  };

  useEffect(() => {
    setIsButtonDisabled(!selectedReligion || !selectedCommunity);
  }, [selectedReligion, selectedCommunity]);

  useEffect(() => {
    setFilteredReligions(
      Religions.filter(religion => 
        religion.toLowerCase().includes(religionSearch.toLowerCase())
    ));
  }, [religionSearch]);

  useEffect(() => {
    setFilteredCommunities(
      Community.filter(community => 
        community.toLowerCase().includes(communitySearch.toLowerCase())
    ));
  }, [communitySearch]);

  const handleContinue = async () => {
    if (isButtonDisabled) return;
    
    try {
      setIsLoading(true);
      
      // Prepare profile data
      const profileData = {
        ...userData,
        religion: selectedReligion,
        community: selectedCommunity,
        profileProgress: 30,
        updatedAt: serverTimestamp()
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 3);

      // Navigate to next screen
      router.push(getNextScreen('homescreens/info3'));
    } catch (error) {
      console.error('Error saving profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReligionSelect = async (item) => {
    try {
      setIsLoading(true);
      setSelectedReligion(item);
      setReligionModalVisible(false);
      setReligionSearch('');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCommunitySelect = async (item) => {
    try {
      setIsLoading(true);
      setSelectedCommunity(item);
      setCommunityModalVisible(false);
      setCommunitySearch('');
    } finally {
      setIsLoading(false);
    }
  };

  const renderReligionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleReligionSelect(item)}
      disabled={isLoading}
    >
      <Text style={styles.listText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderCommunityItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleCommunitySelect(item)}
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
          onPress={() => router.push(getPreviousScreen('homescreens/info3'))}
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
            <ActivityIndicator size="large" color="#608c07" />
          </View>
        )}
        
        <View style={styles.iconContainer}>
          <FontAwesome name="users" size={40} color="#608c07" />
        </View>
      
        <Text style={styles.title}>{translations.titleReligion[language]}</Text>
        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.pickerTouchable}
            onPress={() => setReligionModalVisible(true)}
            disabled={isLoading}
          >
            {selectedReligion ? (
              <Text style={styles.selectedValue}>{selectedReligion}</Text>
            ) : (
              <Text style={styles.placeholderText}>{translations.selectReligion[language]}</Text>
            )}
          </TouchableOpacity>
        </View>

        <Modal
          visible={religionModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => !isLoading && setReligionModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder={translations.searchReligion[language]}
                  value={religionSearch}
                  onChangeText={setReligionSearch}
                  autoFocus={true}
                  editable={!isLoading}
                />
                <TouchableOpacity 
                  onPress={() => !isLoading && setReligionModalVisible(false)}
                  disabled={isLoading}
                >
                  <MaterialIcons name="close" size={24} color="#888" />
                </TouchableOpacity>
              </View>
              {isLoading ? (
                <View style={styles.loaderInsideModal}>
                  <ActivityIndicator size="large" color="#608c07" />
                </View>
              ) : (
                <FlatList
                  data={filteredReligions}
                  renderItem={renderReligionItem}
                  keyExtractor={(item, index) => index.toString()}
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
      
        <Text style={styles.title}>{translations.titleCommunity[language]}</Text>
        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.pickerTouchable}
            onPress={() => setCommunityModalVisible(true)}
            disabled={isLoading}
          >
            {selectedCommunity ? (
              <Text style={styles.selectedValue}>{selectedCommunity}</Text>
            ) : (
              <Text style={styles.placeholderText}>{translations.selectCommunity[language]}</Text>
            )}
          </TouchableOpacity>
        </View>

        <Modal
          visible={communityModalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => !isLoading && setCommunityModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={24} color="#888" style={styles.searchIcon} />
                <TextInput
                  style={styles.searchInput}
                  placeholder={translations.searchCommunity[language]}
                  value={communitySearch}
                  onChangeText={setCommunitySearch}
                  autoFocus={true}
                  editable={!isLoading}
                />
                <TouchableOpacity 
                  onPress={() => !isLoading && setCommunityModalVisible(false)}
                  disabled={isLoading}
                >
                  <MaterialIcons name="close" size={24} color="#888" />
                </TouchableOpacity>
              </View>
              {isLoading ? (
                <View style={styles.loaderInsideModal}>
                  <ActivityIndicator size="large" color="#608c07" />
                </View>
              ) : (
                <FlatList
                  data={filteredCommunities}
                  renderItem={renderCommunityItem}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.list}
                  ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                      <MaterialIcons name="search-off" size={50} color="#ddd" />
                      <Text style={styles.noResultsText}>{translations.noCommunityResults[language]}</Text>
                    </View>
                  }
                />
              )}
            </View>
          </View>
        </Modal>
      
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
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#c1e677',
    borderRadius: 99,
    width: 80,
    height: 80,
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    alignSelf: 'flex-start',
  },
  box: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9'
  },
  pickerTouchable: {
    padding: 15,
    width: '100%',
  },
  selectedValue: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
    maxHeight: '70%',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listText: {
    fontSize: 16,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  noResultsText: {
    padding: 20,
    textAlign: 'center',
    color: '#888',
  },
  button: {
    marginTop: 30,
    padding: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    height: 55,
  },
  buttonEnabled: {
    backgroundColor: '#608c07'
  },
  buttonDisabled: {
    backgroundColor: '#cccccc'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
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