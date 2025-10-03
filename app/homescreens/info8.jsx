// // app/homescreens/info8.jsx
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   ActivityIndicator,
//   Dimensions,
//   Alert
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';
// import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import Animated from 'react-native-reanimated';

// const ITEM_WIDTH = (Dimensions.get('window').width - 48) / 3;

// export default function Info8() {
//   const router = useRouter();
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [galleryPhotos, setGalleryPhotos] = useState([]);
//   const [status, requestPermission] = MediaLibrary.usePermissions();
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();

//   // Complete translations
//   const translations = {
//     title: {
//       ENG: "Upload Photos",
//       HI: "फोटो अपलोड करें"
//     },
//     profilePhoto: {
//       ENG: "Profile Photo*",
//       HI: "प्रोफाइल फोटो*"
//     },
//     addProfilePhoto: {
//       ENG: "Add Profile Photo",
//       HI: "प्रोफाइल फोटो जोड़ें"
//     },
//     addMorePhotos: {
//       ENG: "Additional Photos",
//       HI: "अतिरिक्त फोटो"
//     },
//     addMorePhotosText: {
//       ENG: "Add more Photos",
//       HI: "और फोटो जोड़ें"
//     },
//     selectMultiplePhotos: {
//       ENG: "Select multiple photos (optional)",
//       HI: "कई फोटो चुनें (वैकल्पिक)"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     },
//     profilePhotoRequired: {
//       ENG: "Profile Photo Required",
//       HI: "प्रोफाइल फोटो आवश्यक"
//     },
//     pleaseUploadProfilePhoto: {
//       ENG: "Please upload a profile photo to continue",
//       HI: "जारी रखने के लिए कृपया एक प्रोफाइल फोटो अपलोड करें"
//     }
//   };

//   const pickProfilePhoto = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setProfilePhoto(result.assets[0].uri);
//     }
//   };

//   const pickGalleryPhotos = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const selectedAssets = result.assets.map((asset) => asset.uri);
//       setGalleryPhotos((prev) => [...prev, ...selectedAssets]);
//     }
//   };

//   const removeGalleryPhoto = (index) => {
//     setGalleryPhotos((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleContinue = () => {
//     if (!profilePhoto) {
//       Alert.alert(
//         translations.profilePhotoRequired[language],
//         translations.pleaseUploadProfilePhoto[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }
//     router.push('homescreens/info12');
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

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <AntDesign name="user" size={24} color="#7e57c2" />
//           <Text style={styles.title}>{translations.title[language]}</Text>
//         </View>

//         {/* Profile Photo Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.profilePhoto[language]}</Text>
//           <TouchableOpacity
//             style={styles.profilePhotoContainer}
//             onPress={pickProfilePhoto}
//           >
//             {profilePhoto ? (
//               <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
//             ) : (
//               <View style={styles.profilePhotoPlaceholder}>
//                 <MaterialIcons name="add-a-photo" size={32} color="#7e57c2" />
//                 <Text style={styles.placeholderText}>{translations.addProfilePhoto[language]}</Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>

//         {/* Gallery Photos Section */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.addMorePhotos[language]}</Text>
//             <TouchableOpacity onPress={pickGalleryPhotos} style={styles.addButton}>
//               <FontAwesome name="plus" size={16} color="white" />
//             </TouchableOpacity>
//           </View>
          
//           {galleryPhotos.length > 0 ? (
//             <View style={styles.galleryContainer}>
//               {galleryPhotos.map((uri, index) => (
//                 <View key={index} style={styles.galleryItem}>
//                   <Image source={{ uri }} style={styles.galleryPhoto} />
//                   <TouchableOpacity
//                     style={styles.removeButton}
//                     onPress={() => removeGalleryPhoto(index)}
//                   >
//                     <MaterialIcons name="close" size={20} color="white" />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//             </View>
//           ) : (
//             <TouchableOpacity
//               style={styles.emptyGallery}
//               onPress={pickGalleryPhotos}
//             >
//               <MaterialIcons name="photo-library" size={40} color="#7e57c2" />
//               <Text style={styles.emptyText}>{translations.addMorePhotosText[language]}</Text>
//               <Text style={styles.emptySubtext}>{translations.selectMultiplePhotos[language]}</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </ScrollView>

//       {/* Continue Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.continueButton,
//             { backgroundColor: profilePhoto ? '#7e57c2' : '#ADB5BD' }
//           ]}
//           onPress={handleContinue}
//           disabled={!profilePhoto}
//         >
//           <Text style={styles.continueButtonText}>
//             {translations.continue[language]}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100, // Space for button
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
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profilePhotoContainer: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   profilePhoto: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: '#7e57c2',
//   },
//   profilePhotoPlaceholder: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 2,
//     borderColor: '#7e57c2',
//     borderStyle: 'dashed',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f3e5f5',
//   },
//   placeholderText: {
//     marginTop: 8,
//     color: '#7e57c2',
//     fontWeight: '500',
//   },
//   addButton: {
//     backgroundColor: '#7e57c2',
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   galleryContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   galleryItem: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     margin: 4,
//     borderRadius: 10,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   galleryPhoto: {
//     width: '100%',
//     height: '100%',
//   },
//   removeButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: 'rgba(255, 59, 48, 0.9)',
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyGallery: {
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     borderStyle: 'dashed',
//     borderRadius: 16,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 10,
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     paddingHorizontal: 20,
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });









// // app/homescreens/info8.jsx
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   ActivityIndicator,
//   Dimensions,
//   Alert
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';
// import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import Animated from 'react-native-reanimated';
// import { useProfile } from '../context/ProfileContext';

// const ITEM_WIDTH = (Dimensions.get('window').width - 48) / 3;

// export default function Info8() {
//   const router = useRouter();
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [galleryPhotos, setGalleryPhotos] = useState([]);
//   const [status, requestPermission] = MediaLibrary.usePermissions();
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();

//   // Complete translations with dynamic profile context
//   const translations = {
//     title: {
//       ENG: `Upload ${getPrefix()} Photos`,
//       HI: profileFor === 'MySelf' ? "अपनी फोटो अपलोड करें" :
//         profileFor === 'My Son' ? "अपने बेटे की फोटो अपलोड करें" :
//         profileFor === 'My Daughter' ? "अपनी बेटी की फोटो अपलोड करें" :
//         profileFor === 'My Sister' ? "अपनी बहन की फोटो अपलोड करें" :
//         profileFor === 'My Brother' ? "अपने भाई की फोटो अपलोड करें" :
//         profileFor === 'My Friend' ? "अपने दोस्त की फोटो अपलोड करें" :
//         profileFor === 'Cousin' ? "अपने चचेरे भाई की फोटो अपलोड करें" :
//         "अपने रिश्तेदार की फोटो अपलोड करें"
//     },
//     profilePhoto: {
//       ENG: `${getPrefix()} Profile Photo*`,
//       HI: profileFor === 'MySelf' ? "आपकी प्रोफाइल फोटो*" :
//         profileFor === 'My Son' ? "आपके बेटे की प्रोफाइल फोटो*" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफाइल फोटो*" :
//         profileFor === 'My Sister' ? "आपकी बहन की प्रोफाइल फोटो*" :
//         profileFor === 'My Brother' ? "आपके भाई की प्रोफाइल फोटो*" :
//         profileFor === 'My Friend' ? "आपके दोस्त की प्रोफाइल फोटो*" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफाइल फोटो*" :
//         "आपके रिश्तेदार की प्रोफाइल फोटो*"
//     },
//     addProfilePhoto: {
//       ENG: `Add ${getPrefix()} Profile Photo`,
//       HI: profileFor === 'MySelf' ? "प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Son' ? "बेटे की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Daughter' ? "बेटी की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Sister' ? "बहन की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Brother' ? "भाई की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Friend' ? "दोस्त की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'Cousin' ? "चचेरे भाई की प्रोफाइल फोटो जोड़ें" :
//         "रिश्तेदार की प्रोफाइल फोटो जोड़ें"
//     },
//     addMorePhotos: {
//       ENG: "Additional Photos",
//       HI: "अतिरिक्त फोटो"
//     },
//     addMorePhotosText: {
//       ENG: "Add more Photos",
//       HI: "और फोटो जोड़ें"
//     },
//     selectMultiplePhotos: {
//       ENG: "Select multiple photos (optional)",
//       HI: "कई फोटो चुनें (वैकल्पिक)"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     },
//     profilePhotoRequired: {
//       ENG: "Profile Photo Required",
//       HI: "प्रोफाइल फोटो आवश्यक"
//     },
//     pleaseUploadProfilePhoto: {
//       ENG: "Please upload a profile photo to continue",
//       HI: "जारी रखने के लिए कृपया एक प्रोफाइल फोटो अपलोड करें"
//     }
//   };

//   const pickProfilePhoto = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setProfilePhoto(result.assets[0].uri);
//     }
//   };

//   const pickGalleryPhotos = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const selectedAssets = result.assets.map((asset) => asset.uri);
//       setGalleryPhotos((prev) => [...prev, ...selectedAssets]);
//     }
//   };

//   const removeGalleryPhoto = (index) => {
//     setGalleryPhotos((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleContinue = () => {
//     if (!profilePhoto) {
//       Alert.alert(
//         translations.profilePhotoRequired[language],
//         translations.pleaseUploadProfilePhoto[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }
//     router.push('homescreens/info9');
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

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <AntDesign name="user" size={24} color="#7e57c2" />
//           <Text style={styles.title}>{translations.title[language]}</Text>
//         </View>

//         {/* Profile Photo Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.profilePhoto[language]}</Text>
//           <TouchableOpacity
//             style={styles.profilePhotoContainer}
//             onPress={pickProfilePhoto}
//           >
//             {profilePhoto ? (
//               <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
//             ) : (
//               <View style={styles.profilePhotoPlaceholder}>
//                 <MaterialIcons name="add-a-photo" size={32} color="#7e57c2" />
//                 <Text style={styles.placeholderText}>{translations.addProfilePhoto[language]}</Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>

//         {/* Gallery Photos Section */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.addMorePhotos[language]}</Text>
//             <TouchableOpacity onPress={pickGalleryPhotos} style={styles.addButton}>
//               <FontAwesome name="plus" size={16} color="white" />
//             </TouchableOpacity>
//           </View>
          
//           {galleryPhotos.length > 0 ? (
//             <View style={styles.galleryContainer}>
//               {galleryPhotos.map((uri, index) => (
//                 <View key={index} style={styles.galleryItem}>
//                   <Image source={{ uri }} style={styles.galleryPhoto} />
//                   <TouchableOpacity
//                     style={styles.removeButton}
//                     onPress={() => removeGalleryPhoto(index)}
//                   >
//                     <MaterialIcons name="close" size={20} color="white" />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//             </View>
//           ) : (
//             <TouchableOpacity
//               style={styles.emptyGallery}
//               onPress={pickGalleryPhotos}
//             >
//               <MaterialIcons name="photo-library" size={40} color="#7e57c2" />
//               <Text style={styles.emptyText}>{translations.addMorePhotosText[language]}</Text>
//               <Text style={styles.emptySubtext}>{translations.selectMultiplePhotos[language]}</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </ScrollView>

//       {/* Continue Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.continueButton,
//             { backgroundColor: profilePhoto ? '#7e57c2' : '#ADB5BD' }
//           ]}
//           onPress={handleContinue}
//           disabled={!profilePhoto}
//         >
//           <Text style={styles.continueButtonText}>
//             {translations.continue[language]}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100, // Space for button
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
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profilePhotoContainer: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   profilePhoto: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: '#7e57c2',
//   },
//   profilePhotoPlaceholder: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 2,
//     borderColor: '#7e57c2',
//     borderStyle: 'dashed',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f3e5f5',
//   },
//   placeholderText: {
//     marginTop: 8,
//     color: '#7e57c2',
//     fontWeight: '500',
//   },
//   addButton: {
//     backgroundColor: '#7e57c2',
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   galleryContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   galleryItem: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     margin: 4,
//     borderRadius: 10,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   galleryPhoto: {
//     width: '100%',
//     height: '100%',
//   },
//   removeButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: 'rgba(255, 59, 48, 0.9)',
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyGallery: {
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     borderStyle: 'dashed',
//     borderRadius: 16,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 10,
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     paddingHorizontal: 20,
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });




// 16/08/2025
// app/homescreens/info8.jsx
// import React, { useState } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   ActivityIndicator,
//   Dimensions,
//   Alert
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';
// import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import Animated from 'react-native-reanimated';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { serverTimestamp } from 'firebase/firestore';

// const ITEM_WIDTH = (Dimensions.get('window').width - 48) / 3;

// export default function Info8() {
//   const router = useRouter();
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [galleryPhotos, setGalleryPhotos] = useState([]);
//   const [status, requestPermission] = MediaLibrary.usePermissions();
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const storage = getStorage();

//   // Complete translations with dynamic profile context
//   const translations = {
//     title: {
//       ENG: `Upload ${getPrefix()} Photos`,
//       HI: profileFor === 'MySelf' ? "अपनी फोटो अपलोड करें" :
//         profileFor === 'My Son' ? "अपने बेटे की फोटो अपलोड करें" :
//         profileFor === 'My Daughter' ? "अपनी बेटी की फोटो अपलोड करें" :
//         profileFor === 'My Sister' ? "अपनी बहन की फोटो अपलोड करें" :
//         profileFor === 'My Brother' ? "अपने भाई की फोटो अपलोड करें" :
//         profileFor === 'My Friend' ? "अपने दोस्त की फोटो अपलोड करें" :
//         profileFor === 'Cousin' ? "अपने चचेरे भाई की फोटो अपलोड करें" :
//         "अपने रिश्तेदार की फोटो अपलोड करें"
//     },
//     profilePhoto: {
//       ENG: `${getPrefix()} Profile Photo*`,
//       HI: profileFor === 'MySelf' ? "आपकी प्रोफाइल फोटो*" :
//         profileFor === 'My Son' ? "आपके बेटे की प्रोफाइल फोटो*" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफाइल फोटो*" :
//         profileFor === 'My Sister' ? "आपकी बहन की प्रोफाइल फोटो*" :
//         profileFor === 'My Brother' ? "आपके भाई की प्रोफाइल फोटो*" :
//         profileFor === 'My Friend' ? "आपके दोस्त की प्रोफाइल फोटो*" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफाइल फोटो*" :
//         "आपके रिश्तेदार की प्रोफाइल फोटो*"
//     },
//     addProfilePhoto: {
//       ENG: `Add ${getPrefix()} Profile Photo`,
//       HI: profileFor === 'MySelf' ? "प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Son' ? "बेटे की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Daughter' ? "बेटी की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Sister' ? "बहन की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Brother' ? "भाई की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Friend' ? "दोस्त की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'Cousin' ? "चचेरे भाई की प्रोफाइल फोटो जोड़ें" :
//         "रिश्तेदार की प्रोफाइल फोटो जोड़ें"
//     },
//     addMorePhotos: {
//       ENG: "Additional Photos",
//       HI: "अतिरिक्त फोटो"
//     },
//     addMorePhotosText: {
//       ENG: "Add more Photos",
//       HI: "और फोटो जोड़ें"
//     },
//     selectMultiplePhotos: {
//       ENG: "Select multiple photos (optional)",
//       HI: "कई फोटो चुनें (वैकल्पिक)"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     },
//     profilePhotoRequired: {
//       ENG: "Profile Photo Required",
//       HI: "प्रोफाइल फोटो आवश्यक"
//     },
//     pleaseUploadProfilePhoto: {
//       ENG: "Please upload a profile photo to continue",
//       HI: "जारी रखने के लिए कृपया एक प्रोफाइल फोटो अपलोड करें"
//     },
//     uploading: {
//       ENG: "Uploading photos...",
//       HI: "फोटो अपलोड हो रही हैं..."
//     }
//   };

//   const pickProfilePhoto = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setProfilePhoto(result.assets[0].uri);
//     }
//   };

//   const pickGalleryPhotos = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const selectedAssets = result.assets.map((asset) => asset.uri);
//       setGalleryPhotos((prev) => [...prev, ...selectedAssets]);
//     }
//   };

//   const removeGalleryPhoto = (index) => {
//     setGalleryPhotos((prev) => prev.filter((_, i) => i !== index));
//   };

//   const uploadImageToFirebase = async (uri, path) => {
//     try {
//       // Fetch the image from the device
//       const response = await fetch(uri);
//       const blob = await response.blob();
      
//       // Create a reference to the Firebase Storage location
//       const storageRef = ref(storage, path);
      
//       // Upload the file
//       await uploadBytes(storageRef, blob);
      
//       // Get the download URL
//       const downloadURL = await getDownloadURL(storageRef);
      
//       return downloadURL;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       throw error;
//     }
//   };

//   const handleContinue = async () => {
//     if (!profilePhoto) {
//       Alert.alert(
//         translations.profilePhotoRequired[language],
//         translations.pleaseUploadProfilePhoto[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Generate a unique ID for the user's images folder
//       const userId = userData?.uid || Date.now().toString();
//       const profilePhotoPath = `users/${userId}/profile/profilePhoto.jpg`;
//       const galleryPhotosPath = `users/${userId}/gallery/`;

//       // Upload profile photo
//       const profilePhotoUrl = await uploadImageToFirebase(profilePhoto, profilePhotoPath);

//       // Upload gallery photos
//       const galleryPhotoUrls = [];
//       for (const [index, photoUri] of galleryPhotos.entries()) {
//         const path = `${galleryPhotosPath}photo_${index}.jpg`;
//         const url = await uploadImageToFirebase(photoUri, path);
//         galleryPhotoUrls.push(url);
//       }

//       // Prepare profile data with photo URLs
//       const profileData = {
//         ...userData,
//         profilePhoto: profilePhotoUrl,
//         galleryPhotos: galleryPhotoUrls,
//         profileProgress: 80, // Update progress to 80%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info9');
//     } catch (error) {
//       console.error("Error uploading photos:", error);
//       Alert.alert(
//         "Error",
//         "Failed to upload photos. Please try again.",
//         [{ text: "OK" }]
//       );
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
//           <Text style={styles.loaderText}>{translations.uploading[language]}</Text>
//         </View>
//       )}

//       <ScrollView
//         contentContainerStyle={styles.scrollContent}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <AntDesign name="user" size={24} color="#7e57c2" />
//           <Text style={styles.title}>{translations.title[language]}</Text>
//         </View>

//         {/* Profile Photo Section */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.profilePhoto[language]}</Text>
//           <TouchableOpacity
//             style={styles.profilePhotoContainer}
//             onPress={pickProfilePhoto}
//             disabled={isLoading}
//           >
//             {profilePhoto ? (
//               <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
//             ) : (
//               <View style={styles.profilePhotoPlaceholder}>
//                 <MaterialIcons name="add-a-photo" size={32} color="#7e57c2" />
//                 <Text style={styles.placeholderText}>{translations.addProfilePhoto[language]}</Text>
//               </View>
//             )}
//           </TouchableOpacity>
//         </View>

//         {/* Gallery Photos Section */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.addMorePhotos[language]}</Text>
//             <TouchableOpacity
//               onPress={pickGalleryPhotos}
//               style={styles.addButton}
//               disabled={isLoading}
//             >
//               <FontAwesome name="plus" size={16} color="white" />
//             </TouchableOpacity>
//           </View>
          
//           {galleryPhotos.length > 0 ? (
//             <View style={styles.galleryContainer}>
//               {galleryPhotos.map((uri, index) => (
//                 <View key={index} style={styles.galleryItem}>
//                   <Image source={{ uri }} style={styles.galleryPhoto} />
//                   <TouchableOpacity
//                     style={styles.removeButton}
//                     onPress={() => removeGalleryPhoto(index)}
//                     disabled={isLoading}
//                   >
//                     <MaterialIcons name="close" size={20} color="white" />
//                   </TouchableOpacity>
//                 </View>
//               ))}
//             </View>
//           ) : (
//             <TouchableOpacity
//               style={styles.emptyGallery}
//               onPress={pickGalleryPhotos}
//               disabled={isLoading}
//             >
//               <MaterialIcons name="photo-library" size={40} color="#7e57c2" />
//               <Text style={styles.emptyText}>{translations.addMorePhotosText[language]}</Text>
//               <Text style={styles.emptySubtext}>{translations.selectMultiplePhotos[language]}</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </ScrollView>

//       {/* Continue Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={[
//             styles.continueButton,
//             {
//               backgroundColor: profilePhoto ? '#7e57c2' : '#ADB5BD',
//               opacity: isLoading ? 0.7 : 1
//             }
//           ]}
//           onPress={handleContinue}
//           disabled={!profilePhoto || isLoading}
//         >
//           {isLoading ? (
//             <ActivityIndicator size="small" color="white" />
//           ) : (
//             <Text style={styles.continueButtonText}>
//               {translations.continue[language]}
//             </Text>
//           )}
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100, // Space for button
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
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   loaderText: {
//     marginTop: 16,
//     fontSize: 16,
//     color: '#7e57c2',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profilePhotoContainer: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   profilePhoto: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: '#7e57c2',
//   },
//   profilePhotoPlaceholder: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 2,
//     borderColor: '#7e57c2',
//     borderStyle: 'dashed',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f3e5f5',
//   },
//   placeholderText: {
//     marginTop: 8,
//     color: '#7e57c2',
//     fontWeight: '500',
//   },
//   addButton: {
//     backgroundColor: '#7e57c2',
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   galleryContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   galleryItem: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     margin: 4,
//     borderRadius: 10,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   galleryPhoto: {
//     width: '100%',
//     height: '100%',
//   },
//   removeButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: 'rgba(255, 59, 48, 0.9)',
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyGallery: {
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     borderStyle: 'dashed',
//     borderRadius: 16,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 10,
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     paddingHorizontal: 20,
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });





//23/08/2025

//homescreens/info8.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   ActivityIndicator,
//   Dimensions,
//   Alert
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';
// import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import Animated from 'react-native-reanimated';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { serverTimestamp } from 'firebase/firestore';
// import { useProfileNavigation } from '../utils/navigationHelper';

// const ITEM_WIDTH = (Dimensions.get('window').width - 48) / 3;

// export default function Info8() {
//   const router = useRouter();
//   const [profilePhoto, setProfilePhoto] = useState(null);
//   const [galleryPhotos, setGalleryPhotos] = useState([]);
//   const [status, requestPermission] = MediaLibrary.usePermissions();
//   const [isLoading, setIsLoading] = useState(false);
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const storage = getStorage();

//   // Load existing data
//   useEffect(() => {
//     if (userData) {
//       if (userData.profilePhoto) {
//         setProfilePhoto(userData.profilePhoto);
//       }
//       if (userData.galleryPhotos) {
//         setGalleryPhotos(userData.galleryPhotos);
//       }
//     }
//   }, [userData]);

//   // Complete translations with dynamic profile context
//   const translations = {
//     title: {
//       ENG: `Upload ${getPrefix()} Photos`,
//       HI: profileFor === 'MySelf' ? "अपनी फोटो अपलोड करें" :
//         profileFor === 'My Son' ? "अपने बेटे की फोटो अपलोड करें" :
//         profileFor === 'My Daughter' ? "अपनी बेटी की फोटो अपलोड करें" :
//         profileFor === 'My Sister' ? "अपनी बहन की फोटो अपलोड करें" :
//         profileFor === 'My Brother' ? "अपने भाई की फोटो अपलオード करें" :
//         profileFor === 'My Friend' ? "अपने दोस्त की फोटो अपलोड करें" :
//         profileFor === 'Cousin' ? "अपने चचेरे भाई की फोटो अपलोड करें" :
//         "अपने रिश्तेदार की फोटो अपलोड करें"
//     },
//     profilePhoto: {
//       ENG: `${getPrefix()} Profile Photo*`,
//       HI: profileFor === 'MySelf' ? "आपकी प्रोफाइल फोटो*" :
//         profileFor === 'My Son' ? "आपके बेटे की प्रोफाइल फोटो*" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफाइल फोटो*" :
//         profileFor === 'My Sister' ? "आपकी बहन की प्रोफाइल फोटो*" :
//         profileFor === 'My Brother' ? "आपके भाई की प्रोफाइल फोटो*" :
//         profileFor === 'My Friend' ? "आपके दोस्त की प्रोफाइल फोटो*" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफाइल फोटो*" :
//         "आपके रिश्तेदार की प्रोफाइल फोटो*"
//     },
//     addProfilePhoto: {
//       ENG: `Add ${getPrefix()} Profile Photo`,
//       HI: profileFor === 'MySelf' ? "प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Son' ? "बेटे की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Daughter' ? "बेटी की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Sister' ? "बहन की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Brother' ? "भाई की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'My Friend' ? "दोस्त की प्रोफाइल फोटो जोड़ें" :
//         profileFor === 'Cousin' ? "चचेरे भाई की प्रोफाइल फोटो जोड़ें" :
//         "रिश्तेदार की प्रोफाइल फोटो जोड़ें"
//     },
//     addMorePhotos: {
//       ENG: "Additional Photos",
//       HI: "अतिरिक्त फोटो"
//     },
//     addMorePhotosText: {
//       ENG: "Add more Photos",
//       HI: "और फोटो जोड़ें"
//     },
//     selectMultiplePhotos: {
//       ENG: "Select multiple photos (optional)",
//       HI: "कई फोटो चुनें (वैकल्पिक)"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     },
//     profilePhotoRequired: {
//       ENG: "Profile Photo Required",
//       HI: "प्रोफाइल फोटो आवश्यक"
//     },
//     pleaseUploadProfilePhoto: {
//       ENG: "Please upload a profile photo to continue",
//       HI: "जारी रखने के लिए कृपया एक प्रोफाइल फोटो अपलोड करें"
//     },
//     uploading: {
//       ENG: "Uploading photos...",
//       HI: "फोटो अपलोड हो रही हैं..."
//     }
//   };

//   const pickProfilePhoto = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setProfilePhoto(result.assets[0].uri);
//     }
//   };

//   const pickGalleryPhotos = async () => {
//     if (!status?.granted) {
//       const permission = await requestPermission();
//       if (!permission.granted) {
//         Alert.alert(
//           translations.permissionRequired[language],
//           translations.allowPhotoAccess[language],
//           [{ text: "OK" }]
//         );
//         return;
//       }
//     }

//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsMultipleSelection: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const selectedAssets = result.assets.map((asset) => asset.uri);
//       setGalleryPhotos((prev) => [...prev, ...selectedAssets]);
//     }
//   };

//   const removeGalleryPhoto = (index) => {
//     setGalleryPhotos((prev) => prev.filter((_, i) => i !== index));
//   };

//   const uploadImageToFirebase = async (uri, path) => {
//     try {
//       // Fetch the image from the device
//       const response = await fetch(uri);
//       const blob = await response.blob();
      
//       // Create a reference to the Firebase Storage location
//       const storageRef = ref(storage, path);
      
//       // Upload the file
//       await uploadBytes(storageRef, blob);
      
//       // Get the download URL
//       const downloadURL = await getDownloadURL(storageRef);
      
//       return downloadURL;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       throw error;
//     }
//   };

//   const handleContinue = async () => {
//     if (!profilePhoto) {
//       Alert.alert(
//         translations.profilePhotoRequired[language],
//         translations.pleaseUploadProfilePhoto[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Generate a unique ID for the user's images folder
//       const userId = userData?.uid || Date.now().toString();
//       const profilePhotoPath = `users/${userId}/profile/profilePhoto.jpg`;
//       const galleryPhotosPath = `users/${userId}/gallery/`;

//       // Upload profile photo
//       const profilePhotoUrl = await uploadImageToFirebase(profilePhoto, profilePhotoPath);

//       // Upload gallery photos
//       const galleryPhotoUrls = [];
//       for (const [index, photoUri] of galleryPhotos.entries()) {
//         const path = `${galleryPhotosPath}photo_${index}.jpg`;
//         const url = await uploadImageToFirebase(photoUri, path);
//         galleryPhotoUrls.push(url);
//       }

//       // Prepare profile data with photo URLs
//       const profileData = {
//         ...userData,
//         profilePhoto: profilePhotoUrl,
//         galleryPhotos: galleryPhotoUrls,
//         profileProgress: 80,
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 8);

//       // Navigate to next screen
//       router.push(getNextScreen('homescreens/info8'));
//     } catch (error) {
//       console.error("Error uploading photos:", error);
//       Alert.alert(
//         "Error",
//         "Failed to upload photos. Please try again.",
//         [{ text: "OK" }]
//       );
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
//           onPress={() => router.push(getPreviousScreen('homescreens/info8'))}
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
//             <ActivityIndicator size="large" color="#7e57c2" />
//             <Text style={styles.loaderText}>{translations.uploading[language]}</Text>
//           </View>
//         )}

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header */}
//           <View style={styles.headerSection}>
//             <AntDesign name="user" size={24} color="#7e57c2" />
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           {/* Profile Photo Section */}
//           <View style={styles.section}>
//             <Text style={styles.sectionTitle}>{translations.profilePhoto[language]}</Text>
//             <TouchableOpacity
//               style={styles.profilePhotoContainer}
//               onPress={pickProfilePhoto}
//               disabled={isLoading}
//             >
//               {profilePhoto ? (
//                 <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
//               ) : (
//                 <View style={styles.profilePhotoPlaceholder}>
//                   <MaterialIcons name="add-a-photo" size={32} color="#7e57c2" />
//                   <Text style={styles.placeholderText}>{translations.addProfilePhoto[language]}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
//           </View>

//           {/* Gallery Photos Section */}
//           <View style={styles.section}>
//             <View style={styles.sectionHeader}>
//               <Text style={styles.sectionTitle}>{translations.addMorePhotos[language]}</Text>
//               <TouchableOpacity
//                 onPress={pickGalleryPhotos}
//                 style={styles.addButton}
//                 disabled={isLoading}
//               >
//                 <FontAwesome name="plus" size={16} color="white" />
//               </TouchableOpacity>
//             </View>
            
//             {galleryPhotos.length > 0 ? (
//               <View style={styles.galleryContainer}>
//                 {galleryPhotos.map((uri, index) => (
//                   <View key={index} style={styles.galleryItem}>
//                     <Image source={{ uri }} style={styles.galleryPhoto} />
//                     <TouchableOpacity
//                       style={styles.removeButton}
//                       onPress={() => removeGalleryPhoto(index)}
//                       disabled={isLoading}
//                     >
//                       <MaterialIcons name="close" size={20} color="white" />
//                     </TouchableOpacity>
//                   </View>
//                 ))}
//               </View>
//             ) : (
//               <TouchableOpacity
//                 style={styles.emptyGallery}
//                 onPress={pickGalleryPhotos}
//                 disabled={isLoading}
//               >
//                 <MaterialIcons name="photo-library" size={40} color="#7e57c2" />
//                 <Text style={styles.emptyText}>{translations.addMorePhotosText[language]}</Text>
//                 <Text style={styles.emptySubtext}>{translations.selectMultiplePhotos[language]}</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </ScrollView>

//         {/* Continue Button */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[
//               styles.continueButton,
//               {
//                 backgroundColor: profilePhoto ? '#7e57c2' : '#ADB5BD',
//                 opacity: isLoading ? 0.7 : 1
//               }
//             ]}
//             onPress={handleContinue}
//             disabled={!profilePhoto || isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
//             ) : (
//               <Text style={styles.continueButtonText}>
//                 {translations.continue[language]}
//               </Text>
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
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   loaderText: {
//     marginTop: 16,
//     fontSize: 16,
//     color: '#7e57c2',
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100,
//   },
//   headerSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   section: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 16,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profilePhotoContainer: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   profilePhoto: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 3,
//     borderColor: '#7e57c2',
//   },
//   profilePhotoPlaceholder: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     borderWidth: 2,
//     borderColor: '#7e57c2',
//     borderStyle: 'dashed',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f3e5f5',
//   },
//   placeholderText: {
//     marginTop: 8,
//     color: '#7e57c2',
//     fontWeight: '500',
//   },
//   addButton: {
//     backgroundColor: '#7e57c2',
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   galleryContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   galleryItem: {
//     width: ITEM_WIDTH,
//     height: ITEM_WIDTH,
//     margin: 4,
//     borderRadius: 10,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   galleryPhoto: {
//     width: '100%',
//     height: '100%',
//   },
//   removeButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: 'rgba(255, 59, 48, 0.9)',
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   emptyGallery: {
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     borderStyle: 'dashed',
//     borderRadius: 16,
//     padding: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emptyText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 10,
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     paddingHorizontal: 20,
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

//20/09/2025
//homescreens/info8.jsx
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Alert,
  Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import Animated from 'react-native-reanimated';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { serverTimestamp } from 'firebase/firestore';
import { useProfileNavigation } from '../utils/navigationHelper';

const ITEM_WIDTH = (Dimensions.get('window').width - 48) / 3;

export default function Info8() {
  const router = useRouter();
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [isLoading, setIsLoading] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const storage = getStorage();
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [showFixedButton, setShowFixedButton] = useState(false);

  // Check if we need to show fixed button when content overflows
  useEffect(() => {
    if (scrollViewHeight > 0 && contentHeight > scrollViewHeight) {
      setShowFixedButton(true);
    } else {
      setShowFixedButton(false);
    }
  }, [contentHeight, scrollViewHeight]);

  // Load existing data
  useEffect(() => {
    if (userData) {
      if (userData.profilePhoto) {
        setProfilePhoto(userData.profilePhoto);
      }
      if (userData.galleryPhotos) {
        setGalleryPhotos(userData.galleryPhotos);
      }
    }
  }, [userData]);

  // Complete translations with dynamic profile context
  const translations = {
    title: {
      ENG: `Upload ${getPrefix()} Photos`,
      HI: profileFor === 'MySelf' ? "अपनी फोटो अपलोड करें" : 
        profileFor === 'My Son' ? "अपने बेटे की फोटो अपलोड करें" :
        profileFor === 'My Daughter' ? "अपनी बेटी की फोटो अपलोड करें" :
        profileFor === 'My Sister' ? "अपनी बहन की फोटो अपलोड करें" :
        profileFor === 'My Brother' ? "अपने भाई की फोटो अपलオード करें" :
        profileFor === 'My Friend' ? "अपने दोस्त की फोटो अपलोड करें" :
        profileFor === 'Cousin' ? "अपने चचेरे भाई की फोटो अपलोड करें" :
        "अपने रिश्तेदार की फोटो अपलोड करें"
    },
    profilePhoto: {
      ENG: `${getPrefix()} Profile Photo*`,
      HI: profileFor === 'MySelf' ? "आपकी प्रोफाइल फोटो*" : 
        profileFor === 'My Son' ? "आपके बेटे की प्रोफाइल फोटो*" :
        profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफाइल फोटो*" :
        profileFor === 'My Sister' ? "आपकी बहन की प्रोफाइल फोटो*" :
        profileFor === 'My Brother' ? "आपके भाई की प्रोफाइल फोटो*" :
        profileFor === 'My Friend' ? "आपके दोस्त की प्रोफाइल फोटो*" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफाइल फोटो*" :
        "आपके रिश्तेदार की प्रोफाइल फोटो*"
    },
    addProfilePhoto: {
      ENG: `Add ${getPrefix()} Profile Photo`,
      HI: profileFor === 'MySelf' ? "प्रोफाइल फोटो जोड़ें" : 
        profileFor === 'My Son' ? "बेटे की प्रोफाइल फोटो जोड़ें" :
        profileFor === 'My Daughter' ? "बेटी की प्रोफाइल फोटो जोड़ें" :
        profileFor === 'My Sister' ? "बहन की प्रोफाइल फोटो जोड़ें" :
        profileFor === 'My Brother' ? "भाई की प्रोफाइल फोटो जोड़ें" :
        profileFor === 'My Friend' ? "दोस्त की प्रोफाइल फोटो जोड़ें" :
        profileFor === 'Cousin' ? "चचेरे भाई की प्रोफाइल फोटो जोड़ें" :
        "रिश्तेदार की प्रोफाइल फोटो जोड़ें"
    },
    addMorePhotos: {
      ENG: "Additional Photos",
      HI: "अतिरिक्त फोटो"
    },
    addMorePhotosText: {
      ENG: "Add more Photos",
      HI: "और फोटो जोड़ें"
    },
    selectMultiplePhotos: {
      ENG: "Select multiple photos (optional)",
      HI: "कई फोटो चुनें (वैकल्पिक)"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    permissionRequired: {
      ENG: "Permission Required",
      HI: "अनुमति आवश्यक"
    },
    allowPhotoAccess: {
      ENG: "Please allow photo access to upload images",
      HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
    },
    profilePhotoRequired: {
      ENG: "Profile Photo Required",
      HI: "प्रोफाइल फोटो आवश्यक"
    },
    pleaseUploadProfilePhoto: {
      ENG: "Please upload a profile photo to continue",
      HI: "जारी रखने के लिए कृपया एक प्रोफाइल फोटो अपलोड करें"
    },
    uploading: {
      ENG: "Uploading photos...",
      HI: "फोटो अपलोड हो रही हैं..."
    }
  };

  const pickProfilePhoto = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        Alert.alert(
          translations.permissionRequired[language],
          translations.allowPhotoAccess[language],
          [{ text: "OK" }]
        );
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePhoto(result.assets[0].uri);
    }
  };

  const pickGalleryPhotos = async () => {
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        Alert.alert(
          translations.permissionRequired[language],
          translations.allowPhotoAccess[language],
          [{ text: "OK" }]
        );
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      const selectedAssets = result.assets.map((asset) => asset.uri);
      setGalleryPhotos((prev) => [...prev, ...selectedAssets]);
    }
  };

  const removeGalleryPhoto = (index) => {
    setGalleryPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImageToFirebase = async (uri, path) => {
    try {
      // Fetch the image from the device
      const response = await fetch(uri);
      const blob = await response.blob();
      
      // Create a reference to the Firebase Storage location
      const storageRef = ref(storage, path);
      
      // Upload the file
      await uploadBytes(storageRef, blob);
      
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleContinue = async () => {
    if (!profilePhoto) {
      Alert.alert(
        translations.profilePhotoRequired[language],
        translations.pleaseUploadProfilePhoto[language],
        [{ text: "OK" }]
      );
      return;
    }

    setIsLoading(true);

    try {
      // Generate a unique ID for the user's images folder
      const userId = userData?.uid || Date.now().toString();
      const profilePhotoPath = `users/${userId}/profile/profilePhoto.jpg`;
      const galleryPhotosPath = `users/${userId}/gallery/`;

      // Upload profile photo
      const profilePhotoUrl = await uploadImageToFirebase(profilePhoto, profilePhotoPath);

      // Upload gallery photos
      const galleryPhotoUrls = [];
      for (const [index, photoUri] of galleryPhotos.entries()) {
        const path = `${galleryPhotosPath}photo_${index}.jpg`;
        const url = await uploadImageToFirebase(photoUri, path);
        galleryPhotoUrls.push(url);
      }

      // Prepare profile data with photo URLs
      const profileData = {
        ...userData,
        profilePhoto: profilePhotoUrl,
        galleryPhotos: galleryPhotoUrls,
        profileProgress: 80,
        updatedAt: serverTimestamp()
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 8);

      // Navigate to next screen
      router.push(getNextScreen('homescreens/info8'));
    } catch (error) {
      console.error("Error uploading photos:", error);
      Alert.alert(
        "Error",
        "Failed to upload photos. Please try again.",
        [{ text: "OK" }]
      );
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
          onPress={() => router.push(getPreviousScreen('homescreens/info8'))}
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
            <Text style={styles.loaderText}>{translations.uploading[language]}</Text>
          </View>
        )}

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(w, h) => setContentHeight(h)}
          onLayout={(e) => setScrollViewHeight(e.nativeEvent.layout.height)}
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <AntDesign name="user" size={24} color="#7e57c2" />
            <Text style={styles.title}>{translations.title[language]}</Text>
          </View>

          {/* Profile Photo Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{translations.profilePhoto[language]}</Text>
            <TouchableOpacity
              style={styles.profilePhotoContainer}
              onPress={pickProfilePhoto}
              disabled={isLoading}
            >
              {profilePhoto ? (
                <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
              ) : (
                <View style={styles.profilePhotoPlaceholder}>
                  <MaterialIcons name="add-a-photo" size={32} color="#7e57c2" />
                  <Text style={styles.placeholderText}>{translations.addProfilePhoto[language]}</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>

          {/* Gallery Photos Section */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{translations.addMorePhotos[language]}</Text>
              <TouchableOpacity 
                onPress={pickGalleryPhotos} 
                style={styles.addButton}
                disabled={isLoading}
              >
                <FontAwesome name="plus" size={16} color="white" />
              </TouchableOpacity>
            </View>
            
            {galleryPhotos.length > 0 ? (
              <View style={styles.galleryContainer}>
                {galleryPhotos.map((uri, index) => (
                  <View key={index} style={styles.galleryItem}>
                    <Image source={{ uri }} style={styles.galleryPhoto} />
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => removeGalleryPhoto(index)}
                      disabled={isLoading}
                    >
                      <MaterialIcons name="close" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ) : (
              <TouchableOpacity
                style={styles.emptyGallery}
                onPress={pickGalleryPhotos}
                disabled={isLoading}
              >
                <MaterialIcons name="photo-library" size={40} color="#7e57c2" />
                <Text style={styles.emptyText}>{translations.addMorePhotosText[language]}</Text>
                <Text style={styles.emptySubtext}>{translations.selectMultiplePhotos[language]}</Text>
              </TouchableOpacity>
            )}
          </View>
          
          {/* Invisible spacer to ensure content doesn't get hidden behind fixed button */}
          {showFixedButton && <View style={{ height: 80 }} />}
        </ScrollView>

        {/* Continue Button - Fixed at bottom when content overflows, otherwise normal */}
        <View style={[
          styles.buttonContainer,
          showFixedButton && styles.fixedButtonContainer
        ]}>
          <TouchableOpacity
            style={[
              styles.continueButton,
              { 
                backgroundColor: profilePhoto ? '#7e57c2' : '#ADB5BD',
                opacity: isLoading ? 0.7 : 1
              }
            ]}
            onPress={handleContinue}
            disabled={!profilePhoto || isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.continueButtonText}>
                {translations.continue[language]}
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
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    zIndex: 10,
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
    position: 'relative',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loaderText: {
    marginTop: 16,
    fontSize: 16,
    color: '#7e57c2',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 20,
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
  section: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  profilePhotoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#7e57c2',
  },
  profilePhotoPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#7e57c2',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5f5',
  },
  placeholderText: {
    marginTop: 8,
    color: '#7e57c2',
    fontWeight: '500',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#7e57c2',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  galleryItem: {
    width: ITEM_WIDTH,
    height: ITEM_WIDTH,
    margin: 4,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  galleryPhoto: {
    width: '100%',
    height: '100%',
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 59, 48, 0.9)',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyGallery: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#E9ECEF',
  },
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
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