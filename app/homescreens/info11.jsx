// // app/homescreens/info11.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';
// import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [avatar, setAvatar] = useState('https://randomuser.me/api/portraits/lego/1.jpg');
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations
//   const translations = {
//     title: {
//       ENG: "Identity Verification",
//       HI: "पहचान सत्यापन"
//     },
//     subtitle: {
//       ENG: "Complete your profile verification",
//       HI: "अपनी प्रोफाइल सत्यापन पूरा करें"
//     },
//     profilePhoto: {
//       ENG: "Profile Photo",
//       HI: "प्रोफाइल फोटो"
//     },
//     addProfilePhoto: {
//       ENG: "Add Profile Photo",
//       HI: "प्रोफाइल फोटो जोड़ें"
//     },
//     verifiedProfile: {
//       ENG: "Verified Profile",
//       HI: "सत्यापित प्रोफाइल"
//     },
//     unverified: {
//       ENG: "Unverified",
//       HI: "असत्यापित"
//     },
//     selectDocumentType: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload",
//       HI: "अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Capture Document",
//       HI: "दस्तावेज़ कैप्चर करें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. You'll get a notification once verified.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। सत्यापित होने पर आपको एक अधिसूचना प्राप्त होगी।"
//     },
//     continueToApp: {
//       ENG: "Continue to App",
//       HI: "ऐप पर जारी रखें"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     skipForNow: {
//       ENG: "Skip for now",
//       HI: "अभी छोड़ें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'card-account-details',
//       iconLib: MaterialCommunityIcons
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons
//     },
//   ];

//   const pickAvatar = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 0.8,
//     });

//     if (!result.canceled) {
//       setAvatar(result.assets[0].uri);
//     }
//   };

//   const pickDocumentImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = () => {
//     if (!docImage) return;
    
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleContinue = () => {
//     router.replace('/(tabs)');
//   };

//   const handleSkip = () => {
//     router.replace('/(tabs)');
//   };

//   return (
//     <View style={styles.screenContainer}>
//       {/* Language Toggle at the very top */}
//       <View style={styles.languageToggleTopContainer}>
//         <Text style={styles.languageLabel}>{language === 'ENG' ? 'ENG' : 'हिंदी'}</Text>
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
//         <Text style={styles.languageLabel}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//       </View>

//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//         </View>

//         <View style={styles.profileSection}>
//           <TouchableOpacity onPress={pickAvatar} style={styles.avatarContainer}>
//             <Image
//               source={{ uri: avatar }}
//               style={styles.avatar}
//             />
//             <View style={styles.cameraIcon}>
//               <Feather name="camera" size={18} color="#fff" />
//             </View>
//             {isVerified && (
//               <View style={styles.verifiedBadge}>
//                 <Ionicons name="checkmark" size={16} color="#fff" />
//               </View>
//             )}
//           </TouchableOpacity>
//           <Text style={styles.profileName}>User Name</Text>
//           {isVerified ? (
//             <View style={styles.verifiedStatus}>
//               <Octicons name="verified" size={18} color="#007AFF" />
//               <Text style={styles.verifiedText}>{translations.verifiedProfile[language]}</Text>
//             </View>
//           ) : (
//             <Text style={styles.unverifiedText}>{translations.unverified[language]}</Text>
//           )}
//         </View>

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <TouchableOpacity
//               style={styles.continueButton}
//               onPress={handleContinue}
//             >
//               <Text style={styles.continueButtonText}>{translations.continueToApp[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocumentType[language]}</Text>
//               <View style={styles.documentsContainer}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={styles.documentIcon}>
//                         <Icon name={doc.icon} size={24} color="#007AFF" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]} {selectedDoc.name}
//                 </Text>
//                 <View style={styles.uploadSection}>
//                   {docImage ? (
//                     <View style={styles.imagePreviewContainer}>
//                       <Image source={{ uri: docImage }} style={styles.previewImage} />
//                     </View>
//                   ) : (
//                     <TouchableOpacity
//                       style={styles.uploadButton}
//                       onPress={pickDocumentImage}
//                     >
//                       <MaterialIcons name="add-a-photo" size={28} color="#fff" />
//                       <Text style={styles.uploadButtonText}>{translations.captureDocument[language]}</Text>
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
//               <TouchableOpacity
//                 style={styles.skipButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.skipButtonText}>
//                   {isVerified ? translations.continueToApp[language] : translations.skipForNow[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   languageToggleTopContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50,
//     paddingBottom: 10,
//     backgroundColor: '#f8f9fa',
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//     marginHorizontal: 8,
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
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   header: {
//     marginBottom: 24,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//   },
//   profileSection: {
//     alignItems: 'center',
//     marginBottom: 30,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginBottom: 12,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 3,
//     borderColor: '#007AFF',
//   },
//   cameraIcon: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#007AFF',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   verifiedBadge: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     backgroundColor: '#4CAF50',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   verifiedStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e6f2ff',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   verifiedText: {
//     color: '#007AFF',
//     marginLeft: 6,
//     fontWeight: '500',
//   },
//   unverifiedText: {
//     color: '#ff6b6b',
//     fontWeight: '500',
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsContainer: {
//     marginBottom: 8,
//     width: '100%',
//   },
//   documentCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     borderColor: '#007AFF',
//     backgroundColor: '#e6f2ff',
//   },
//   documentIcon: {
//     marginRight: 12,
//   },
//   documentText: {
//     fontSize: 16,
//     flex: 1,
//     color: '#333',
//   },
//   uploadSection: {
//     alignItems: 'center',
//     width: '100%',
//   },
//   uploadButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     width: '100%',
//     justifyContent: 'center',
//   },
//   uploadButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   imagePreviewContainer: {
//     position: 'relative',
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   skipButton: {
//     backgroundColor: '#f0f0f0',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//   },
//   skipButtonText: {
//     color: '#007AFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 24,
//     marginBottom: 16,
//   },
//   continueButton: {
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 20,
//     width: '100%',
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



















// import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
// import { useRouter } from "expo-router";
// import { useUser } from "@clerk/clerk-expo";
// import { useState } from "react";

// export default function Info11() {
//   const router = useRouter();
//   const { user } = useUser();
//   const [isLoading, setIsLoading] = useState(false);

//   const completeOnboarding = async () => {
//     setIsLoading(true);
//     try {
//       await user.update({
//         publicMetadata: {
//           profileCompleted: true,
//         },
//       });
//       router.replace("/(tabs)");
//     } catch (err) {
//       console.error("Error updating user metadata:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Profile Verification</Text>
//       <Text style={styles.subtitle}>Step 11 of 11</Text>
      
//       <View style={styles.content}>
//         <Text style={styles.congratsText}>Congratulations!</Text>
//         <Text style={styles.description}>
//           Your profile is complete. Now you can start finding matches.
//         </Text>
//       </View>
      
//       <TouchableOpacity
//         style={styles.completeButton}
//         onPress={completeOnboarding}
//         disabled={isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator color="white" />
//         ) : (
//           <Text style={styles.completeButtonText}>Complete Profile</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#666",
//     marginBottom: 30,
//   },
//   content: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   congratsText: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#6C63FF",
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 16,
//     color: "#666",
//     textAlign: "center",
//     paddingHorizontal: 30,
//   },
//   completeButton: {
//     backgroundColor: "#6C63FF",
//     padding: 15,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 20,
//   },
//   completeButtonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });










// app/homescreens/info11.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [avatar, setAvatar] = useState('https://randomuser.me/api/portraits/lego/1.jpg');
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations with profile context integration
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Identity Verification`,
//       HI: `${getPrefix()} पहचान सत्यापन`
//     },
//     subtitle: {
//       ENG: "Complete your profile verification",
//       HI: "अपनी प्रोफाइल सत्यापन पूरा करें"
//     },
//     profilePhoto: {
//       ENG: "Profile Photo",
//       HI: "प्रोफाइल फोटो"
//     },
//     addProfilePhoto: {
//       ENG: "Add Profile Photo",
//       HI: "प्रोफाइल फोटो जोड़ें"
//     },
//     verifiedProfile: {
//       ENG: "Verified Profile",
//       HI: "सत्यापित प्रोफाइल"
//     },
//     unverified: {
//       ENG: "Unverified",
//       HI: "असत्यापित"
//     },
//     selectDocumentType: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload",
//       HI: "अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Capture Document",
//       HI: "दस्तावेज़ कैप्चर करें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. You'll get a notification once verified.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। सत्यापित होने पर आपको एक अधिसूचना प्राप्त होगी।"
//     },
//     continueToApp: {
//       ENG: "Continue to App",
//       HI: "ऐप पर जारी रखें"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     skipForNow: {
//       ENG: "Skip for now",
//       HI: "अभी छोड़ें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'card-account-details',
//       iconLib: MaterialCommunityIcons
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons
//     },
//   ];

//   const pickAvatar = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [1, 1],
//       quality: 0.8,
//     });

//     if (!result.canceled) {
//       setAvatar(result.assets[0].uri);
//     }
//   };

//   const pickDocumentImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = () => {
//     if (!docImage) return;
    
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleContinue = () => {
//     router.replace('/(tabs)');
//   };

//   const handleSkip = () => {
//     router.replace('/(tabs)');
//   };

//   return (
//     <View style={styles.screenContainer}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header with language toggle on the right */}
//         <View style={styles.headerContainer}>
//           <View style={styles.headerTextContainer}>
//             <Text style={styles.title}>{translations.title[language]}</Text>
//             <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//           </View>
//           <View style={styles.languageToggleContainer}>
//             <Text style={styles.languageLabel}>{language === 'ENG' ? 'ENG' : 'हिंदी'}</Text>
//             <TouchableOpacity
//               style={styles.toggleContainer}
//               onPress={toggleLanguage}
//               activeOpacity={0.8}
//             >
//               <View style={[
//                 styles.toggleButton,
//                 {
//                   transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//                   backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//                 }
//               ]}>
//                 <Image
//                   source={language === 'ENG'
//                     ? require('../../assets/uk-flag.png')
//                     : require('../../assets/india-flag.png')}
//                   style={styles.flag}
//                 />
//               </View>
//             </TouchableOpacity>
//             <Text style={styles.languageLabel}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//           </View>
//         </View>

//         <View style={styles.profileSection}>
//           <TouchableOpacity onPress={pickAvatar} style={styles.avatarContainer}>
//             <Image
//               source={{ uri: avatar }}
//               style={styles.avatar}
//             />
//             <View style={styles.cameraIcon}>
//               <Feather name="camera" size={18} color="#fff" />
//             </View>
//             {isVerified && (
//               <View style={styles.verifiedBadge}>
//                 <Ionicons name="checkmark" size={16} color="#fff" />
//               </View>
//             )}
//           </TouchableOpacity>
//           <Text style={styles.profileName}>User Name</Text>
//           {isVerified ? (
//             <View style={styles.verifiedStatus}>
//               <Octicons name="verified" size={18} color="#007AFF" />
//               <Text style={styles.verifiedText}>{translations.verifiedProfile[language]}</Text>
//             </View>
//           ) : (
//             <Text style={styles.unverifiedText}>{translations.unverified[language]}</Text>
//           )}
//         </View>

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <TouchableOpacity
//               style={styles.continueButton}
//               onPress={handleContinue}
//             >
//               <Text style={styles.continueButtonText}>{translations.continueToApp[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocumentType[language]}</Text>
//               <View style={styles.documentsContainer}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={styles.documentIcon}>
//                         <Icon name={doc.icon} size={24} color="#007AFF" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                       {selectedDoc?.id === doc.id && (
//                         <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
//                       )}
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]} {selectedDoc.name}
//                 </Text>
//                 <View style={styles.uploadSection}>
//                   {docImage ? (
//                     <View style={styles.imagePreviewContainer}>
//                       <Image source={{ uri: docImage }} style={styles.previewImage} />
//                       <TouchableOpacity
//                         style={styles.retakeButton}
//                         onPress={pickDocumentImage}
//                       >
//                         <Text style={styles.retakeButtonText}>
//                           {language === 'ENG' ? 'Retake' : 'फिर से लें'}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   ) : (
//                     <TouchableOpacity
//                       style={styles.uploadButton}
//                       onPress={pickDocumentImage}
//                     >
//                       <MaterialIcons name="add-a-photo" size={28} color="#fff" />
//                       <Text style={styles.uploadButtonText}>{translations.captureDocument[language]}</Text>
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
//               <TouchableOpacity
//                 style={styles.skipButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.skipButtonText}>
//                   {isVerified ? translations.continueToApp[language] : translations.skipForNow[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingTop: 40,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   headerTextContainer: {
//     flex: 1,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 10,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#495057',
//     marginHorizontal: 4,
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
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   profileSection: {
//     alignItems: 'center',
//     marginBottom: 30,
//     padding: 20,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginBottom: 12,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     borderWidth: 3,
//     borderColor: '#007AFF',
//   },
//   cameraIcon: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     backgroundColor: '#007AFF',
//     borderRadius: 15,
//     width: 30,
//     height: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   verifiedBadge: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     backgroundColor: '#4CAF50',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileName: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginBottom: 4,
//   },
//   verifiedStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#e6f2ff',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   verifiedText: {
//     color: '#007AFF',
//     marginLeft: 6,
//     fontWeight: '500',
//   },
//   unverifiedText: {
//     color: '#ff6b6b',
//     fontWeight: '500',
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsContainer: {
//     marginBottom: 8,
//     width: '100%',
//   },
//   documentCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     borderColor: '#007AFF',
//     backgroundColor: '#e6f2ff',
//   },
//   documentIcon: {
//     marginRight: 12,
//   },
//   documentText: {
//     fontSize: 14,
//     flex: 1,
//     color: '#333',
//   },
//   uploadSection: {
//     alignItems: 'center',
//     width: '100%',
//   },
//   uploadButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     width: '100%',
//     justifyContent: 'center',
//   },
//   uploadButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   imagePreviewContainer: {
//     position: 'relative',
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   retakeButton: {
//     marginTop: 10,
//     padding: 8,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#007AFF',
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   skipButton: {
//     backgroundColor: '#f0f0f0',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//   },
//   skipButtonText: {
//     color: '#007AFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   continueButton: {
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 20,
//     width: '100%',
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });











// 18/08/2025

// app/homescreens/info11.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations with profile context integration
//   const translations = {
//     title: {
//       ENG: "Verify your profile",
//       HI: "अपनी प्रोफ़ाइल सत्यापित करें"
//     },
//     subtitle: {
//       ENG: "Verify your profile details to get verified tick for free",
//       HI: "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. You'll get a notification once verified.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। सत्यापित होने पर आपको सूचना मिलेगी।"
//     },
//     continueToApp: {
//       ENG: "Continue to App",
//       HI: "ऐप पर जारी रखें"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     skipForNow: {
//       ENG: "Skip for now",
//       HI: "अभी के लिए छोड़ें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff'
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome,
//       color: '#ff6b6b'
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome,
//       color: '#6c63ff'
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons,
//       color: '#4caf50'
//     },
//   ];

//   const pickDocumentImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = () => {
//     if (!docImage) return;
    
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleContinue = () => {
//     router.replace('/(tabs)');
//   };

//   const handleSkip = () => {
//     router.replace('/(tabs)');
//   };

//   return (
//     <View style={styles.screenContainer}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Language toggle at top right */}
//         <View style={styles.languageToggleContainer}>
//           <TouchableOpacity
//             style={styles.languageButton}
//             onPress={toggleLanguage}
//           >
//             <Text style={styles.languageText}>
//               {language === 'ENG' ? 'हिंदी' : 'ENG'}
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Verification header */}
//         <View style={styles.headerContainer}>
//           <Image
//             source={require('../../assets/Verify.png')}
//             style={styles.verifyImage}
//           />
//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//         </View>

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <TouchableOpacity
//               style={styles.continueButton}
//               onPress={handleContinue}
//             >
//               <Text style={styles.continueButtonText}>{translations.continueToApp[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             {/* Document Type Selection */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//               <View style={styles.documentsGrid}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                         { borderColor: doc.color }
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                         <Icon name={doc.icon} size={20} color="#fff" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]}
//                 </Text>
//                 <View style={styles.uploadSection}>
//                   {docImage ? (
//                     <View style={styles.imagePreviewContainer}>
//                       <Image source={{ uri: docImage }} style={styles.previewImage} />
//                       <TouchableOpacity
//                         style={styles.retakeButton}
//                         onPress={pickDocumentImage}
//                       >
//                         <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                         <Text style={styles.retakeButtonText}>
//                           {translations.captureDocument[language]}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   ) : (
//                     <TouchableOpacity
//                       style={styles.uploadButton}
//                       onPress={pickDocumentImage}
//                     >
//                       <MaterialIcons name="camera-alt" size={28} color="#fff" />
//                       <Text style={styles.uploadButtonText}>{translations.captureDocument[language]}</Text>
//                     </TouchableOpacity>
//                   )}
//                 </View>
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
//               <TouchableOpacity
//                 style={styles.skipButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.skipButtonText}>
//                   {translations.skipForNow[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingTop: 40,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     alignItems: 'flex-end',
//     marginBottom: 10,
//   },
//   languageButton: {
//     backgroundColor: '#e9ecef',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 20,
//   },
//   languageText: {
//     fontWeight: '600',
//     color: '#495057',
//   },
//   headerContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   verifyImage: {
//     width: 120,
//     height: 120,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 15,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     paddingHorizontal: 20,
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     backgroundColor: '#f0f7ff',
//     borderWidth: 2,
//   },
//   documentIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     flexShrink: 1,
//   },
//   uploadSection: {
//     alignItems: 'center',
//     width: '100%',
//   },
//   uploadButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     width: '100%',
//     justifyContent: 'center',
//   },
//   uploadButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//     marginLeft: 10,
//   },
//   imagePreviewContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   skipButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   skipButtonText: {
//     color: '#007AFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   continueButton: {
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 20,
//     width: '100%',
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });








//18/08/2025

// app/homescreens/info11.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations with profile context integration
//   const translations = {
//     title: {
//       ENG: "Verify your profile",
//       HI: "अपनी प्रोफ़ाइल सत्यापित करें"
//     },
//     subtitle: {
//       ENG: "Verify your profile details to get verified tick for free",
//       HI: "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. You'll get a notification once verified.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। सत्यापित होने पर आपको सूचना मिलेगी।"
//     },
//     continueToApp: {
//       ENG: "Continue to App",
//       HI: "ऐप पर जारी रखें"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     skipForNow: {
//       ENG: "Skip for now",
//       HI: "अभी के लिए छोड़ें"
//     },
//     verifyNow: {
//       ENG: "Verify Now",
//       HI: "अभी सत्यापित करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff'
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome,
//       color: '#ff6b6b'
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome,
//       color: '#6c63ff'
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons,
//       color: '#4caf50'
//     },
//   ];

//   const pickDocumentImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = () => {
//     if (!docImage) return;
    
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleContinue = () => {
//     router.replace('/(tabs)');
//   };

//   const handleSkip = () => {
//     router.replace('/(tabs)');
//   };

//   return (
//     <View style={styles.screenContainer}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header with language toggle */}
//         <View style={styles.headerContainer}>
//           <View style={styles.headerTextContainer}>
//             <Text style={styles.title}>{translations.title[language]}</Text>
//             <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//           </View>
//           <View style={styles.languageToggleContainer}>
//             <Text style={styles.languageLabel}>{language === 'ENG' ? 'ENG' : 'हिंदी'}</Text>
//             <TouchableOpacity
//               style={styles.toggleContainer}
//               onPress={toggleLanguage}
//               activeOpacity={0.8}
//             >
//               <View style={[
//                 styles.toggleButton,
//                 {
//                   transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//                   backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//                 }
//               ]}>
//                 <Image
//                   source={language === 'ENG'
//                     ? require('../../assets/uk-flag.png')
//                     : require('../../assets/india-flag.png')}
//                   style={styles.flag}
//                 />
//               </View>
//             </TouchableOpacity>
//             <Text style={styles.languageLabel}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//           </View>
//         </View>

//         {/* Verification image */}
//         <Image
//           source={require('../../assets/Verify.png')}
//           style={styles.verifyImage}
//         />

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <TouchableOpacity
//               style={styles.continueButton}
//               onPress={handleContinue}
//             >
//               <Text style={styles.continueButtonText}>{translations.continueToApp[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             {/* Document Type Selection */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//               <View style={styles.documentsGrid}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                         { borderColor: doc.color }
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                         <Icon name={doc.icon} size={20} color="#fff" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]}
//                 </Text>
//                 <View style={styles.uploadOptions}>
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.captureOption]}
//                     onPress={pickDocumentImage}
//                   >
//                     <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.galleryOption]}
//                     onPress={pickDocumentFromGallery}
//                   >
//                     <MaterialIcons name="upload" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                   </TouchableOpacity>
//                 </View>
                
//                 {docImage && (
//                   <View style={styles.imagePreviewContainer}>
//                     <Image source={{ uri: docImage }} style={styles.previewImage} />
//                     <TouchableOpacity
//                       style={styles.retakeButton}
//                       onPress={pickDocumentImage}
//                     >
//                       <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                       <Text style={styles.retakeButtonText}>
//                         {translations.captureDocument[language]}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
//               <TouchableOpacity
//                 style={styles.skipButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.skipButtonText}>
//                   {translations.skipForNow[language]}
//                 </Text>
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.laterButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.laterButtonText}>
//                   {translations.willDoLater[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingTop: 40,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   headerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   headerTextContainer: {
//     flex: 1,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 10,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#495057',
//     marginHorizontal: 4,
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
//     transition: 'transform 0.3s ease',
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   verifyImage: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     backgroundColor: '#f0f7ff',
//     borderWidth: 2,
//   },
//   documentIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     flexShrink: 1,
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   captureOption: {
//     backgroundColor: '#007AFF',
//   },
//   galleryOption: {
//     backgroundColor: '#6C63FF',
//   },
//   uploadOptionText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   imagePreviewContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   skipButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   skipButtonText: {
//     color: '#007AFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   laterButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//   },
//   laterButtonText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   continueButton: {
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 20,
//     width: '100%',
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });









// // app/homescreens/info11.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations with profile context integration
//   const translations = {
//     title: {
//       ENG: "Verify your profile",
//       HI: "अपनी प्रोफ़ाइल सत्यापित करें"
//     },
//     subtitle: {
//       ENG: "Verify your profile details to get verified tick for free",
//       HI: "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. You'll get a notification once verified.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। सत्यापित होने पर आपको सूचना मिलेगी।"
//     },
//     continueToApp: {
//       ENG: "Continue to App",
//       HI: "ऐप पर जारी रखें"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     skipForNow: {
//       ENG: "Skip for now",
//       HI: "अभी के लिए छोड़ें"
//     },
//     verifyNow: {
//       ENG: "Verify Now",
//       HI: "अभी सत्यापित करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff'
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome,
//       color: '#ff6b6b'
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome,
//       color: '#6c63ff'
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons,
//       color: '#4caf50'
//     },
//   ];

//   const pickDocumentImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = () => {
//     if (!docImage) return;
    
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleContinue = () => {
//     router.replace('//homescreens/info12');
//   };

//   const handleSkip = () => {
//     router.replace('/homescreens/info12');
//   };

//   return (
//     <View style={styles.screenContainer}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Language toggle at the very top */}
//         <View style={styles.languageToggleContainer}>
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'ENG' : 'हिंदी'}</Text>
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
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//         </View>

//         {/* Header text below the toggle */}
//         <View style={styles.headerTextContainer}>
//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//         </View>

//         {/* Verification image */}
//         <Image
//           source={require('../../assets/Verify.png')}
//           style={styles.verifyImage}
//         />

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <TouchableOpacity
//               style={styles.continueButton}
//               onPress={handleContinue}
//             >
//               <Text style={styles.continueButtonText}>{translations.continueToApp[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <>
//             {/* Document Type Selection */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//               <View style={styles.documentsGrid}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                         { borderColor: doc.color }
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                         <Icon name={doc.icon} size={20} color="#fff" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]}
//                 </Text>
//                 <View style={styles.uploadOptions}>
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.captureOption]}
//                     onPress={pickDocumentImage}
//                   >
//                     <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.galleryOption]}
//                     onPress={pickDocumentFromGallery}
//                   >
//                     <MaterialIcons name="upload" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                   </TouchableOpacity>
//                 </View>
                
//                 {docImage && (
//                   <View style={styles.imagePreviewContainer}>
//                     <Image source={{ uri: docImage }} style={styles.previewImage} />
//                     <TouchableOpacity
//                       style={styles.retakeButton}
//                       onPress={pickDocumentImage}
//                     >
//                       <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                       <Text style={styles.retakeButtonText}>
//                         {translations.captureDocument[language]}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
            
//               <TouchableOpacity
//                 style={styles.laterButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.laterButtonText}>
//                   {translations.willDoLater[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingTop: 20,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#495057',
//     marginHorizontal: 4,
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
//     transition: 'transform 0.3s ease',
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   headerTextContainer: {
//     marginBottom: 16,
//   },
//   verifyImage: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     backgroundColor: '#f0f7ff',
//     borderWidth: 2,
//   },
//   documentIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     flexShrink: 1,
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   captureOption: {
//     backgroundColor: '#007AFF',
//   },
//   galleryOption: {
//     backgroundColor: '#6C63FF',
//   },
//   uploadOptionText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   imagePreviewContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   skipButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   skipButtonText: {
//     color: '#007AFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   laterButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//   },
//   laterButtonText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   continueButton: {
//     backgroundColor: '#007AFF',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 20,
//     width: '100%',
//   },
//   continueButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });











// // app/homescreens/info11.jsx
// //perfect ui
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations with profile context integration
//   const translations = {
//     title: {
//       ENG: "Verify your profile",
//       HI: "अपनी प्रोफ़ाइल सत्यापित करें"
//     },
//     subtitle: {
//       ENG: "Verify your profile details to get verified tick for free",
//       HI: "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. It may take up to 24 hours to verify your documents.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। आपके दस्तावेज़ों को सत्यापित करने में 24 घंटे तक का समय लग सकता है।"
//     },
//     continueToApp: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     skipForNow: {
//       ENG: "Skip for now",
//       HI: "अभी के लिए छोड़ें"
//     },
//     verifyNow: {
//       ENG: "Verify Now",
//       HI: "अभी सत्यापित करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     retakePhoto: {
//       ENG: "Retake Photo",
//       HI: "फोटो फिर से लें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff'
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome,
//       color: '#ff6b6b'
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome,
//       color: '#6c63ff'
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons,
//       color: '#4caf50'
//     },
//   ];

//   const pickDocumentImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const handleSubmit = () => {
//     if (!docImage) return;
    
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const handleContinue = () => {
//     router.replace('/homescreens/info12');
//   };

//   const handleSkip = () => {
//     router.replace('/homescreens/info12');
//   };

//   // Automatically navigate to next screen after 3 seconds when verified
//   useEffect(() => {
//     if (showVerificationMessage) {
//       const timer = setTimeout(() => {
//         handleContinue();
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showVerificationMessage]);

//   return (
//     <View style={styles.screenContainer}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Language toggle at the very top */}
//         <View style={styles.languageToggleContainer}>
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'ENG' : 'हिंदी'}</Text>
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
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//         </View>

//         {/* Header text below the toggle */}
//         <View style={styles.headerTextContainer}>
//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//         </View>

//         {/* Verification image */}
//         <Image
//           source={require('../../assets/Verify.png')}
//           style={styles.verifyImage}
//         />

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <ActivityIndicator size="large" color="#6C63FF" style={styles.loadingIndicator} />
//           </View>
//         ) : (
//           <>
//             {/* Document Type Selection */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//               <View style={styles.documentsGrid}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                         { borderColor: doc.color }
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                         <Icon name={doc.icon} size={20} color="#fff" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]}
//                 </Text>
//                 <View style={styles.uploadOptions}>
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.captureOption]}
//                     onPress={pickDocumentImage}
//                   >
//                     <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.galleryOption]}
//                     onPress={pickDocumentFromGallery}
//                   >
//                     <MaterialIcons name="upload" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                   </TouchableOpacity>
//                 </View>
                
//                 {docImage && (
//                   <View style={styles.imagePreviewContainer}>
//                     <Image source={{ uri: docImage }} style={styles.previewImage} />
//                     <TouchableOpacity
//                       style={styles.retakeButton}
//                       onPress={pickDocumentImage}
//                     >
//                       <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                       <Text style={styles.retakeButtonText}>
//                         {translations.retakePhoto[language]}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
//               <TouchableOpacity
//                 style={styles.laterButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.laterButtonText}>
//                   {translations.willDoLater[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingTop: 20,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#495057',
//     marginHorizontal: 4,
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
//     transition: 'transform 0.3s ease',
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   headerTextContainer: {
//     marginBottom: 16,
//   },
//   verifyImage: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     backgroundColor: '#f0f7ff',
//     borderWidth: 2,
//   },
//   documentIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     flexShrink: 1,
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   captureOption: {
//     backgroundColor: '#007AFF',
//   },
//   galleryOption: {
//     backgroundColor: '#6C63FF',
//   },
//   uploadOptionText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   imagePreviewContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   laterButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//   },
//   laterButtonText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   loadingIndicator: {
//     marginTop: 20,
//   }
// });











// app/homescreens/info11.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, MaterialCommunityIcons, Octicons, Feather } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const storage = getStorage();

//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations with profile context integration
//   const translations = {
//     title: {
//       ENG: "Verify your profile",
//       HI: "अपनी प्रोफ़ाइल सत्यापित करें"
//     },
//     subtitle: {
//       ENG: "Verify your profile details to get verified tick for free",
//       HI: "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. It may take up to 24 hours to verify your documents.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। आपके दस्तावेज़ों को सत्यापित करने में 24 घंटे तक का समय लग सकता है।"
//     },
//     continueToApp: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     skipForNow: {
//       ENG: "Skip for now",
//       HI: "अभी के लिए छोड़ें"
//     },
//     verifyNow: {
//       ENG: "Verify Now",
//       HI: "अभी सत्यापित करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     retakePhoto: {
//       ENG: "Retake Photo",
//       HI: "फोटो फिर से लें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     },
//     errorTitle: {
//       ENG: "Error",
//       HI: "त्रुटि"
//     },
//     uploadError: {
//       ENG: "Failed to upload document. Please try again.",
//       HI: "दस्तावेज़ अपलोड करने में विफल। कृपया पुनः प्रयास करें।"
//     },
//     documentRequired: {
//       ENG: "Document Required",
//       HI: "दस्तावेज़ आवश्यक"
//     },
//     pleaseSelectDocument: {
//       ENG: "Please select a document type and upload the document",
//       HI: "कृपया एक दस्तावेज़ प्रकार चुनें और दस्तावेज़ अपलोड करें"
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff',
//       type: 'aadhar'
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome,
//       color: '#ff6b6b',
//       type: 'pan'
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome,
//       color: '#6c63ff',
//       type: 'driving_license'
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons,
//       color: '#4caf50',
//       type: 'voter_id'
//     },
//   ];

//   const pickDocumentImage = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const uploadDocumentToFirebase = async (uri, path) => {
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
//       console.error("Error uploading document:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async () => {
//     if (!selectedDoc || !docImage) {
//       Alert.alert(
//         translations.documentRequired[language],
//         translations.pleaseSelectDocument[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       // Generate a unique path for the document
//       const userId = userData?.uid || Date.now().toString();
//       const docPath = `verification_docs/${userId}/${selectedDoc.type}_${Date.now()}.jpg`;
      
//       // Upload the document image
//       const docUrl = await uploadDocumentToFirebase(docImage, docPath);
      
//       // Prepare verification data
//       const verificationData = {
//         verificationStatus: 'pending',
//         verificationDocument: {
//           type: selectedDoc.type,
//           name: selectedDoc.name,
//           url: docUrl,
//           uploadedAt: serverTimestamp()
//         },
//         profileProgress: 90, // Update progress to 90%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(verificationData);
      
//       // Show success state
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//     } catch (error) {
//       console.error("Error submitting verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleContinue = () => {
//     router.replace('/homescreens/info12');
//   };

//   const handleSkip = () => {
//     // Even when skipping, we should update the profile progress
//     const skipData = {
//       verificationStatus: 'skipped',
//       profileProgress: 90, // Update progress to 90%
//       updatedAt: serverTimestamp()
//     };
    
//     saveUserProfile(skipData)
//       .then(() => {
//         router.replace('/homescreens/info12');
//       })
//       .catch(error => {
//         console.error("Error updating profile:", error);
//         Alert.alert(
//           translations.errorTitle[language],
//           translations.uploadError[language],
//           [{ text: "OK" }]
//         );
//       });
//   };

//   // Automatically navigate to next screen after 3 seconds when verified
//   useEffect(() => {
//     if (showVerificationMessage) {
//       const timer = setTimeout(() => {
//         handleContinue();
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showVerificationMessage]);

//   return (
//     <View style={styles.screenContainer}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Language toggle at the very top */}
//         <View style={styles.languageToggleContainer}>
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'ENG' : 'हिंदी'}</Text>
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
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//         </View>

//         {/* Header text below the toggle */}
//         <View style={styles.headerTextContainer}>
//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//         </View>

//         {/* Verification image */}
//         <Image
//           source={require('../../assets/Verify.png')}
//           style={styles.verifyImage}
//         />

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <ActivityIndicator size="large" color="#6C63FF" style={styles.loadingIndicator} />
//           </View>
//         ) : (
//           <>
//             {/* Document Type Selection */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//               <View style={styles.documentsGrid}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                         { borderColor: doc.color }
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                         <Icon name={doc.icon} size={20} color="#fff" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]}
//                 </Text>
//                 <View style={styles.uploadOptions}>
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.captureOption]}
//                     onPress={pickDocumentImage}
//                   >
//                     <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.galleryOption]}
//                     onPress={pickDocumentFromGallery}
//                   >
//                     <MaterialIcons name="upload" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                   </TouchableOpacity>
//                 </View>
                
//                 {docImage && (
//                   <View style={styles.imagePreviewContainer}>
//                     <Image source={{ uri: docImage }} style={styles.previewImage} />
//                     <TouchableOpacity
//                       style={styles.retakeButton}
//                       onPress={pickDocumentImage}
//                     >
//                       <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                       <Text style={styles.retakeButtonText}>
//                         {translations.retakePhoto[language]}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
//               <TouchableOpacity
//                 style={styles.laterButton}
//                 onPress={handleSkip}
//               >
//                 <Text style={styles.laterButtonText}>
//                   {translations.willDoLater[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingTop: 20,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#495057',
//     marginHorizontal: 4,
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
//     transition: 'transform 0.3s ease',
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   headerTextContainer: {
//     marginBottom: 16,
//   },
//   verifyImage: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     backgroundColor: '#f0f7ff',
//     borderWidth: 2,
//   },
//   documentIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     flexShrink: 1,
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   captureOption: {
//     backgroundColor: '#007AFF',
//   },
//   galleryOption: {
//     backgroundColor: '#6C63FF',
//   },
//   uploadOptionText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   imagePreviewContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   laterButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//   },
//   laterButtonText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   loadingIndicator: {
//     marginTop: 20,
//   }
// });









// app/homescreens/info11.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ActivityIndicator, Alert } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const storage = getStorage();

//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isVerified, setIsVerified] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Translations
//   const translations = {
//     title: {
//       ENG: "Verify your profile",
//       HI: "अपनी प्रोफ़ाइल सत्यापित करें"
//     },
//     subtitle: {
//       ENG: "Verify your profile details to get verified tick for free",
//       HI: "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. It may take up to 24 hours to verify your documents.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। आपके दस्तावेज़ों को सत्यापित करने में 24 घंटे तक का समय लग सकता है।"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     retakePhoto: {
//       ENG: "Retake Photo",
//       HI: "फोटो फिर से लें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     },
//     errorTitle: {
//       ENG: "Error",
//       HI: "त्रुटि"
//     },
//     uploadError: {
//       ENG: "Failed to upload document. Please try again.",
//       HI: "दस्तावेज़ अपलोड करने में विफल। कृपया पुनः प्रयास करें।"
//     },
//     documentRequired: {
//       ENG: "Document Required",
//       HI: "दस्तावेज़ आवश्यक"
//     },
//     pleaseSelectDocument: {
//       ENG: "Please select a document type and upload the document",
//       HI: "कृपया एक दस्तावेज़ प्रकार चुनें और दस्तावेज़ अपलोड करें"
//     },
//     profileIncomplete: {
//       ENG: "Profile incomplete. Please complete your profile first.",
//       HI: "प्रोफ़ाइल अधूरी है। कृपया पहले अपनी प्रोफ़ाइल पूरी करें।"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff',
//       type: 'aadhar'
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome,
//       color: '#ff6b6b',
//       type: 'pan'
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome,
//       color: '#6c63ff',
//       type: 'driving_license'
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons,
//       color: '#4caf50',
//       type: 'voter_id'
//     },
//   ];

//   const checkProfileComplete = () => {
//     if (!userData || !gender || !profileFor) {
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.profileIncomplete[language],
//         [{ text: "OK", onPress: () => router.replace('/homescreens/info1') }]
//       );
//       return false;
//     }
//     return true;
//   };

//   const pickDocumentImage = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const uploadDocumentToFirebase = async (uri, path) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const storageRef = ref(storage, path);
//       await uploadBytes(storageRef, blob);
//       return await getDownloadURL(storageRef);
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async () => {
//     if (!checkProfileComplete()) return;
//     if (!selectedDoc || !docImage) {
//       Alert.alert(
//         translations.documentRequired[language],
//         translations.pleaseSelectDocument[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       const docPath = `verification_docs/${userData.id}/${selectedDoc.type}_${Date.now()}.jpg`;
//       const docUrl = await uploadDocumentToFirebase(docImage, docPath);
      
//       await saveUserProfile({
//         verificationStatus: 'pending',
//         verificationDocument: {
//           type: selectedDoc.type,
//           name: selectedDoc.name,
//           url: docUrl,
//           uploadedAt: serverTimestamp()
//         },
//         profileProgress: 90,
//         updatedAt: serverTimestamp(),
//         gender,
//         profileFor
//       });
      
//       setIsVerified(true);
//       setShowVerificationMessage(true);
//     } catch (error) {
//       console.error("Error submitting verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSkip = async () => {
//     if (!checkProfileComplete()) return;

//     setIsSubmitting(true);
//     try {
//       await saveUserProfile({
//         verificationStatus: 'skipped',
//         profileProgress: 90,
//         updatedAt: serverTimestamp(),
//         gender,
//         profileFor
//       });
//       router.replace('/homescreens/info12');
//     } catch (error) {
//       console.error("Error skipping verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (showVerificationMessage) {
//       const timer = setTimeout(() => {
//         router.replace('/homescreens/info12');
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showVerificationMessage]);

//   return (
//     <View style={styles.screenContainer}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Language toggle */}
//         <View style={styles.languageToggleContainer}>
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'ENG' : 'हिंदी'}</Text>
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
//           <Text style={styles.languageLabel}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//         </View>

//         {/* Header text */}
//         <View style={styles.headerTextContainer}>
//           <Text style={styles.title}>{translations.title[language]}</Text>
//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
//         </View>

//         {/* Verification image */}
//         <Image
//           source={require('../../assets/Verify.png')}
//           style={styles.verifyImage}
//         />

//         {showVerificationMessage ? (
//           <View style={styles.verificationMessage}>
//             <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//             <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//             <Text style={styles.verificationMessageText}>
//               {translations.verificationMessage[language]}
//             </Text>
//             <ActivityIndicator size="large" color="#6C63FF" style={styles.loadingIndicator} />
//           </View>
//         ) : (
//           <>
//             {/* Document Type Selection */}
//             <View style={styles.section}>
//               <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//               <View style={styles.documentsGrid}>
//                 {documentTypes.map((doc) => {
//                   const Icon = doc.iconLib;
//                   return (
//                     <TouchableOpacity
//                       key={doc.id}
//                       style={[
//                         styles.documentCard,
//                         selectedDoc?.id === doc.id && styles.selectedDocument,
//                         { borderColor: doc.color }
//                       ]}
//                       onPress={() => setSelectedDoc(doc)}
//                     >
//                       <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                         <Icon name={doc.icon} size={20} color="#fff" />
//                       </View>
//                       <Text style={styles.documentText}>{doc.name}</Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             </View>

//             {selectedDoc && (
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>
//                   {translations.uploadDocument[language]}
//                 </Text>
//                 <View style={styles.uploadOptions}>
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.captureOption]}
//                     onPress={pickDocumentImage}
//                     disabled={isSubmitting}
//                   >
//                     <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                   </TouchableOpacity>
                  
//                   <TouchableOpacity
//                     style={[styles.uploadOption, styles.galleryOption]}
//                     onPress={pickDocumentFromGallery}
//                     disabled={isSubmitting}
//                   >
//                     <MaterialIcons name="upload" size={24} color="#fff" />
//                     <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                   </TouchableOpacity>
//                 </View>
                
//                 {docImage && (
//                   <View style={styles.imagePreviewContainer}>
//                     <Image source={{ uri: docImage }} style={styles.previewImage} />
//                     <TouchableOpacity
//                       style={styles.retakeButton}
//                       onPress={pickDocumentImage}
//                       disabled={isSubmitting}
//                     >
//                       <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                       <Text style={styles.retakeButtonText}>
//                         {translations.retakePhoto[language]}
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             )}

//             <View style={styles.buttonContainer}>
//               {docImage && !isVerified && (
//                 <TouchableOpacity
//                   style={styles.submitButton}
//                   onPress={handleSubmit}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <ActivityIndicator color="#fff" />
//                   ) : (
//                     <Text style={styles.submitButtonText}>{translations.submitForVerification[language]}</Text>
//                   )}
//                 </TouchableOpacity>
//               )}
              
//               <TouchableOpacity
//                 style={styles.laterButton}
//                 onPress={handleSkip}
//                 disabled={isSubmitting}
//               >
//                 <Text style={styles.laterButtonText}>
//                   {translations.willDoLater[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screenContainer: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingTop: 20,
//   },
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     paddingBottom: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#495057',
//     marginHorizontal: 4,
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
//   headerTextContainer: {
//     marginBottom: 16,
//   },
//   verifyImage: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#1a1a1a',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 4,
//     textAlign: 'center',
//   },
//   section: {
//     marginBottom: 24,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginBottom: 16,
//     color: '#1a1a1a',
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     backgroundColor: '#f0f7ff',
//     borderWidth: 2,
//   },
//   documentIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     flexShrink: 1,
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   captureOption: {
//     backgroundColor: '#007AFF',
//   },
//   galleryOption: {
//     backgroundColor: '#6C63FF',
//   },
//   uploadOptionText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   imagePreviewContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 12,
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   laterButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '100%',
//   },
//   laterButtonText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   verificationMessage: {
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//     width: '100%',
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#1a1a1a',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   loadingIndicator: {
//     marginTop: 20,
//   }
// });







//23/08/2025

//app/homescreens/info11.jsx
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
//   Alert
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { serverTimestamp } from 'firebase/firestore';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const storage = getStorage();

//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Load existing data
//   useEffect(() => {
//     if (userData && userData.verificationDocument) {
//       setSelectedDoc({
//         type: userData.verificationDocument.type,
//         name: userData.verificationDocument.name
//       });
//       // Note: We can't set the image from URL as it's stored in Firebase
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Profile Verification`,
//       HI: profileFor === 'MySelf' ? "आपकी प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफ़ाइल सत्यापन" :
//           "आपके रिश्तेदार की प्रोफ़ाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: `Verify ${getPrefix().toLowerCase()} profile details to get verified tick for free`,
//       HI: profileFor === 'MySelf' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Son' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने बेटे की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Daughter' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बेटी की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Sister' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बहन की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Brother' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Friend' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने दोस्त की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'Cousin' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने चचेरे भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
//           "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने रिश्तेदार की प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. It may take up to 24 hours to verify your documents.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। आपके दस्तावेज़ों को सत्यापित करने में 24 घंटे तक का समय लग सकता है।"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     retakePhoto: {
//       ENG: "Retake Photo",
//       HI: "फोटो फिर से लें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     },
//     errorTitle: {
//       ENG: "Error",
//       HI: "त्रुटि"
//     },
//     uploadError: {
//       ENG: "Failed to upload document. Please try again.",
//       HI: "दस्तावेज़ अपलोड करने में विफल। कृपया पुनः प्रयास करें।"
//     },
//     documentRequired: {
//       ENG: "Document Required",
//       HI: "दस्तावेज़ आवश्यक"
//     },
//     pleaseSelectDocument: {
//       ENG: "Please select a document type and upload the document",
//       HI: "कृपया एक दस्तावेज़ प्रकार चुनें और दस्तावेज़ अपलोड करें"
//     },
//     profileIncomplete: {
//       ENG: "Profile incomplete. Please complete your profile first.",
//       HI: "प्रोफ़ाइल अधूरी है। कृपया पहले अपनी प्रोफ़ाइल पूरी करें।"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     }
//   };

//   const documentTypes = [
//     {
//       id: 1,
//       name: translations.documentTypes.aadharCard[language],
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff',
//       type: 'aadhar'
//     },
//     {
//       id: 2,
//       name: translations.documentTypes.panCard[language],
//       icon: 'credit-card',
//       iconLib: FontAwesome,
//       color: '#ff6b6b',
//       type: 'pan'
//     },
//     {
//       id: 3,
//       name: translations.documentTypes.drivingLicense[language],
//       icon: 'car',
//       iconLib: FontAwesome,
//       color: '#6c63ff',
//       type: 'driving_license'
//     },
//     {
//       id: 4,
//       name: translations.documentTypes.voterId[language],
//       icon: 'how-to-vote',
//       iconLib: MaterialIcons,
//       color: '#4caf50',
//       type: 'voter_id'
//     },
//   ];

//   const checkProfileComplete = () => {
//     if (!userData || !gender || !profileFor) {
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.profileIncomplete[language],
//         [{ text: "OK", onPress: () => router.replace('/homescreens/info1') }]
//       );
//       return false;
//     }
//     return true;
//   };

//   const pickDocumentImage = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const uploadDocumentToFirebase = async (uri, path) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const storageRef = ref(storage, path);
//       await uploadBytes(storageRef, blob);
//       return await getDownloadURL(storageRef);
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async () => {
//     if (!checkProfileComplete()) return;
//     if (!selectedDoc || !docImage) {
//       Alert.alert(
//         translations.documentRequired[language],
//         translations.pleaseSelectDocument[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       const userId = userData?.uid || Date.now().toString();
//       const docPath = `verification_docs/${userId}/${selectedDoc.type}_${Date.now()}.jpg`;
//       const docUrl = await uploadDocumentToFirebase(docImage, docPath);
      
//       const profileData = {
//         ...userData,
//         verificationStatus: 'pending',
//         verificationDocument: {
//           type: selectedDoc.type,
//           name: selectedDoc.name,
//           url: docUrl,
//           uploadedAt: serverTimestamp()
//         },
//         profileProgress: 100, // Update progress to 100%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 11);
      
//       setShowVerificationMessage(true);
//     } catch (error) {
//       console.error("Error submitting verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSkip = async () => {
//     if (!checkProfileComplete()) return;

//     setIsSubmitting(true);
//     try {
//       const profileData = {
//         ...userData,
//         verificationStatus: 'skipped',
//         profileProgress: 100, // Update progress to 100%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 11);
      
//       router.push(getNextScreen('homescreens/info11'));
//     } catch (error) {
//       console.error("Error skipping verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (showVerificationMessage) {
//       const timer = setTimeout(() => {
//         router.push(getNextScreen('homescreens/info11'));
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showVerificationMessage]);

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info11'))}
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
//         {isSubmitting && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header */}
//           <View style={styles.headerSection}>
//             <MaterialIcons name="verified-user" size={24} color="#7e57c2" />
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <Image
//             source={require('../../assets/Verify.png')}
//             style={styles.verifyImage}
//           />

//           {showVerificationMessage ? (
//             <View style={styles.verificationMessage}>
//               <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//               <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//               <Text style={styles.verificationMessageText}>
//                 {translations.verificationMessage[language]}
//               </Text>
//               <ActivityIndicator size="large" color="#7e57c2" style={styles.loadingIndicator} />
//             </View>
//           ) : (
//             <>
//               {/* Document Type Selection */}
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//                 <View style={styles.documentsGrid}>
//                   {documentTypes.map((doc) => {
//                     const Icon = doc.iconLib;
//                     return (
//                       <TouchableOpacity
//                         key={doc.id}
//                         style={[
//                           styles.documentCard,
//                           selectedDoc?.id === doc.id && styles.selectedDocument,
//                           { borderColor: doc.color }
//                         ]}
//                         onPress={() => setSelectedDoc(doc)}
//                       >
//                         <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                           <Icon name={doc.icon} size={20} color="#fff" />
//                         </View>
//                         <Text style={styles.documentText}>{doc.name}</Text>
//                       </TouchableOpacity>
//                     );
//                   })}
//                 </View>
//               </View>

//               {selectedDoc && (
//                 <View style={styles.section}>
//                   <Text style={styles.sectionTitle}>
//                     {translations.uploadDocument[language]}
//                   </Text>
//                   <View style={styles.uploadOptions}>
//                     <TouchableOpacity
//                       style={[styles.uploadOption, styles.captureOption]}
//                       onPress={pickDocumentImage}
//                       disabled={isSubmitting}
//                     >
//                       <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                       <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity
//                       style={[styles.uploadOption, styles.galleryOption]}
//                       onPress={pickDocumentFromGallery}
//                       disabled={isSubmitting}
//                     >
//                       <MaterialIcons name="upload" size={24} color="#fff" />
//                       <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                     </TouchableOpacity>
//                   </View>
                  
//                   {docImage && (
//                     <View style={styles.imagePreviewContainer}>
//                       <Image source={{ uri: docImage }} style={styles.previewImage} />
//                       <TouchableOpacity
//                         style={styles.retakeButton}
//                         onPress={pickDocumentImage}
//                         disabled={isSubmitting}
//                       >
//                         <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                         <Text style={styles.retakeButtonText}>
//                           {translations.retakePhoto[language]}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   )}
//                 </View>
//               )}

//               {/* Continue Button */}
//               <View style={styles.buttonContainer}>
//                 {docImage && !showVerificationMessage && (
//                   <TouchableOpacity
//                     style={[
//                       styles.continueButton,
//                       {
//                         backgroundColor: selectedDoc && docImage ? '#7e57c2' : '#ADB5BD',
//                         opacity: isSubmitting ? 0.7 : 1
//                       }
//                     ]}
//                     onPress={handleSubmit}
//                     disabled={!selectedDoc || !docImage || isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <ActivityIndicator size="small" color="white" />
//                     ) : (
//                       <Text style={styles.continueButtonText}>
//                         {translations.submitForVerification[language]}
//                       </Text>
//                     )}
//                   </TouchableOpacity>
//                 )}
                
//                 <TouchableOpacity
//                   style={styles.skipButton}
//                   onPress={handleSkip}
//                   disabled={isSubmitting}
//                 >
//                   <Text style={styles.skipButtonText}>
//                     {translations.willDoLater[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </>
//           )}
//         </ScrollView>
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
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100,
//   },
//   headerSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   verifyImage: {
//     width: 150,
//     height: 150,
//     alignSelf: 'center',
//     marginBottom: 20,
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
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderWidth: 1,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: '#fafafa',
//   },
//   selectedDocument: {
//     backgroundColor: '#f0f7ff',
//     borderWidth: 2,
//   },
//   documentIcon: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     flexShrink: 1,
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 12,
//     borderRadius: 8,
//     marginHorizontal: 4,
//   },
//   captureOption: {
//     backgroundColor: '#007AFF',
//   },
//   galleryOption: {
//     backgroundColor: '#7e57c2',
//   },
//   uploadOptionText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   imagePreviewContainer: {
//     width: '100%',
//     alignItems: 'center',
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     resizeMode: 'contain',
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     marginBottom: 12,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007AFF',
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//   },
//   retakeButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: '500',
//     marginLeft: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 12,
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
//   skipButton: {
//     backgroundColor: 'transparent',
//     padding: 16,
//     borderRadius: 30,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ADB5BD',
//   },
//   skipButtonText: {
//     color: '#666',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   verificationMessage: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 24,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   verificationMessageTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 16,
//     marginBottom: 8,
//     color: '#333',
//     textAlign: 'center',
//   },
//   verificationMessageText: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 16,
//   },
//   loadingIndicator: {
//     marginTop: 20,
//   }
// });



//17/09/2025

// app/homescreens/in11.jsx
// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   Image, 
//   StyleSheet, 
//   ScrollView, 
//   ActivityIndicator, 
//   Alert 
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { serverTimestamp } from 'firebase/firestore';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData, refreshUserData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const storage = getStorage();

//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Load existing data
//   useEffect(() => {
//     if (userData) {
//       if (userData.verificationStatus === 'verified') {
//         // If already verified, skip this screen
//         router.push(getNextScreen('homescreens/info11'));
//         return;
//       }
      
//       if (userData.verificationDocument) {
//         setSelectedDoc({
//           type: userData.verificationDocument.type,
//           name: userData.verificationDocument.name
//         });
//       }
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Profile Verification`,
//       HI: profileFor === 'MySelf' ? "आपकी प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफ़ाइल सत्यापन" :
//           "आपके रिश्तेदार की प्रोफ़ाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: `Verify ${getPrefix().toLowerCase()} profile details to get verified tick for free`,
//       HI: profileFor === 'MySelf' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Son' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने बेटे की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Daughter' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बेटी की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Sister' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बहन की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Brother' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Friend' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने दोस्त की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'Cousin' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने चचेरे भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
//           "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने रिश्तेदार की प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. It may take up to 24 hours to verify your documents.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। आपके दस्तावेज़ों को सत्यापित करने में 24 घंटे तक का समय लग सकता है।"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     retakePhoto: {
//       ENG: "Retake Photo",
//       HI: "फोटो फिर से लें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     },
//     errorTitle: {
//       ENG: "Error",
//       HI: "त्रुटि"
//     },
//     uploadError: {
//       ENG: "Failed to upload document. Please try again.",
//       HI: "दस्तावेज़ अपलोड करने में विफल। कृपया पुनः प्रयास करें।"
//     },
//     documentRequired: {
//       ENG: "Document Required",
//       HI: "दस्तावेज़ आवश्यक"
//     },
//     pleaseSelectDocument: {
//       ENG: "Please select a document type and upload the document",
//       HI: "कृपया एक दस्तावेज़ प्रकार चुनें और दस्तावेज़ अपलोड करें"
//     },
//     profileIncomplete: {
//       ENG: "Profile incomplete. Please complete your profile first.",
//       HI: "प्रोफ़ाइल अधूरी है। कृपया पहले अपनी प्रोफ़ाइल पूरी करें।"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     },
//     alreadyVerified: {
//       ENG: "Already Verified",
//       HI: "पहले से सत्यापित"
//     },
//     alreadyVerifiedText: {
//       ENG: "Your profile is already verified!",
//       HI: "आपकी प्रोफ़ाइल पहले से सत्यापित है!"
//     },
//     pendingVerification: {
//       ENG: "Verification Pending",
//       HI: "सत्यापन लंबित"
//     },
//     pendingVerificationText: {
//       ENG: "Your verification is under review. Please wait for admin approval.",
//       HI: "आपका सत्यापन समीक्षा के अधीन है। कृपया प्रशासक अनुमोदन की प्रतीक्षा करें।"
//     }
//   };

//   const documentTypes = [
//     { 
//       id: 1, 
//       name: translations.documentTypes.aadharCard[language], 
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff',
//       type: 'aadhar'
//     },
//     { 
//       id: 2, 
//       name: translations.documentTypes.panCard[language], 
//       icon: 'credit-card', 
//       iconLib: FontAwesome,
//       color: '#ff6b6b',
//       type: 'pan'
//     },
//     { 
//       id: 3, 
//       name: translations.documentTypes.drivingLicense[language], 
//       icon: 'car', 
//       iconLib: FontAwesome,
//       color: '#6c63ff',
//       type: 'driving_license'
//     },
//     { 
//       id: 4, 
//       name: translations.documentTypes.voterId[language], 
//       icon: 'how-to-vote', 
//       iconLib: MaterialIcons,
//       color: '#4caf50',
//       type: 'voter_id'
//     },
//   ];

//   const checkProfileComplete = () => {
//     if (!userData || !gender || !profileFor) {
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.profileIncomplete[language],
//         [{ text: "OK", onPress: () => router.replace('/homescreens/info1') }]
//       );
//       return false;
//     }
//     return true;
//   };

//   const pickDocumentImage = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const uploadDocumentToFirebase = async (uri, path) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const storageRef = ref(storage, path);
//       await uploadBytes(storageRef, blob);
//       return await getDownloadURL(storageRef);
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async () => {
//     if (!checkProfileComplete()) return;
//     if (!selectedDoc || !docImage) {
//       Alert.alert(
//         translations.documentRequired[language],
//         translations.pleaseSelectDocument[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       const userId = userData?.uid || Date.now().toString();
//       const docPath = `verification_docs/${userId}/${selectedDoc.type}_${Date.now()}.jpg`;
//       const docUrl = await uploadDocumentToFirebase(docImage, docPath);
      
//       const profileData = {
//         ...userData,
//         verificationStatus: 'pending', // Set to pending for admin review
//         verificationDocument: {
//           type: selectedDoc.type,
//           name: selectedDoc.name,
//           url: docUrl,
//           uploadedAt: serverTimestamp()
//         },
//         profileProgress: 100, // Update progress to 100%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 11);
      
//       setShowVerificationMessage(true);
//     } catch (error) {
//       console.error("Error submitting verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSkip = async () => {
//     if (!checkProfileComplete()) return;

//     setIsSubmitting(true);
//     try {
//       const profileData = {
//         ...userData,
//         verificationStatus: 'skipped',
//         profileProgress: 100, // Update progress to 100%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 11);
      
//       router.push(getNextScreen('homescreens/info11'));
//     } catch (error) {
//       console.error("Error skipping verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (showVerificationMessage) {
//       const timer = setTimeout(() => {
//         router.push(getNextScreen('homescreens/info11'));
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showVerificationMessage]);

//   // Check verification status and show appropriate UI
//   const checkVerificationStatus = () => {
//     if (userData?.verificationStatus === 'verified') {
//       return (
//         <View style={styles.alreadyVerifiedContainer}>
//           <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//           <Text style={styles.alreadyVerifiedText}>{translations.alreadyVerifiedText[language]}</Text>
//         </View>
//       );
//     } else if (userData?.verificationStatus === 'pending') {
//       return (
//         <View style={styles.pendingVerificationContainer}>
//           <Ionicons name="time" size={48} color="#FF9800" />
//           <Text style={styles.pendingVerificationText}>
//             {translations.pendingVerificationText[language]}
//           </Text>
//         </View>
//       );
//     }
//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info11'))}
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
//         {isSubmitting && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView 
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header */}
//           <View style={styles.headerSection}>
//             <MaterialIcons name="verified-user" size={24} color="#7e57c2" />
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <Image 
//             source={require('../../assets/Verify.png')} 
//             style={styles.verifyImage}
//           />

//           {checkVerificationStatus() || showVerificationMessage ? (
//             <View style={styles.verificationMessage}>
//               <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//               <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//               <Text style={styles.verificationMessageText}>
//                 {translations.verificationMessage[language]}
//               </Text>
//               <ActivityIndicator size="large" color="#7e57c2" style={styles.loadingIndicator} />
//             </View>
//           ) : (
//             <>
//               {/* Document Type Selection */}
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//                 <View style={styles.documentsGrid}>
//                   {documentTypes.map((doc) => {
//                     const Icon = doc.iconLib;
//                     return (
//                       <TouchableOpacity
//                         key={doc.id}
//                         style={[
//                           styles.documentCard,
//                           selectedDoc?.id === doc.id && styles.selectedDocument,
//                           { borderColor: doc.color }
//                         ]}
//                         onPress={() => setSelectedDoc(doc)}
//                       >
//                         <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                           <Icon name={doc.icon} size={20} color="#fff" />
//                         </View>
//                         <Text style={styles.documentText}>{doc.name}</Text>
//                       </TouchableOpacity>
//                     );
//                   })}
//                 </View>
//               </View>

//               {selectedDoc && (
//                 <View style={styles.section}>
//                   <Text style={styles.sectionTitle}>
//                     {translations.uploadDocument[language]}
//                   </Text>
//                   <View style={styles.uploadOptions}>
//                     <TouchableOpacity 
//                       style={[styles.uploadOption, styles.captureOption]}
//                       onPress={pickDocumentImage}
//                       disabled={isSubmitting}
//                     >
//                       <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                       <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity 
//                       style={[styles.uploadOption, styles.galleryOption]}
//                       onPress={pickDocumentFromGallery}
//                       disabled={isSubmitting}
//                     >
//                       <MaterialIcons name="upload" size={24} color="#fff" />
//                       <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                     </TouchableOpacity>
//                   </View>
                  
//                   {docImage && (
//                     <View style={styles.imagePreviewContainer}>
//                       <Image source={{ uri: docImage }} style={styles.previewImage} />
//                       <TouchableOpacity 
//                         style={styles.retakeButton}
//                         onPress={pickDocumentImage}
//                         disabled={isSubmitting}
//                       >
//                         <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                         <Text style={styles.retakeButtonText}>
//                           {translations.retakePhoto[language]}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   )}
//                 </View>
//               )}

//               {/* Continue Button */}
//               <View style={styles.buttonContainer}>
//                 {docImage && !showVerificationMessage && (
//                   <TouchableOpacity
//                     style={[
//                       styles.continueButton,
//                       { 
//                         backgroundColor: selectedDoc && docImage ? '#7e57c2' : '#ADB5BD',
//                         opacity: isSubmitting ? 0.7 : 1
//                       }
//                     ]}
//                     onPress={handleSubmit}
//                     disabled={!selectedDoc || !docImage || isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <ActivityIndicator size="small" color="white" />
//                     ) : (
//                       <Text style={styles.continueButtonText}>
//                         {translations.submitForVerification[language]}
//                       </Text>
//                     )}
//                   </TouchableOpacity>
//                 )}
                
//                 <TouchableOpacity
//                   style={styles.skipButton}
//                   onPress={handleSkip}
//                   disabled={isSubmitting}
//                 >
//                   <Text style={styles.skipButtonText}>
//                     {translations.willDoLater[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </>
//           )}
//         </ScrollView>
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
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100,
//   },
//   headerSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     lineHeight: 22,
//   },
//   verifyImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginVertical: 20,
//   },
//   section: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     gap: 12,
//     justifyContent: 'space-between',
//   },
//   documentCard: {
//     width: '48%',
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 15,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: 'transparent',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   selectedDocument: {
//     borderWidth: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 4,
//   },
//   documentIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     textAlign: 'center',
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap: 15,
//     marginBottom: 20,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 15,
//     borderRadius: 10,
//     gap: 8,
//   },
//   captureOption: {
//     backgroundColor: '#28a745',
//   },
//   galleryOption: {
//     backgroundColor: '#007bff',
//   },
//   uploadOptionText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   imagePreviewContainer: {
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#6c757d',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     gap: 5,
//   },
//   retakeButtonText: {
//     color: 'white',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     gap: 15,
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   skipButton: {
//     padding: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#6c757d',
//   },
//   skipButtonText: {
//     color: '#6c757d',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   verificationMessage: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   verificationMessageTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#28a745',
//     marginVertical: 10,
//   },
//   verificationMessageText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 15,
//   },
//   loadingIndicator: {
//     marginTop: 10,
//   },
//   alreadyVerifiedContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#E8F5E9',
//     borderRadius: 16,
//     marginBottom: 20,
//   },
//   alreadyVerifiedText: {
//     marginTop: 16,
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2E7D32',
//     textAlign: 'center',
//   },
//   pendingVerificationContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#FFF3E0',
//     borderRadius: 16,
//     marginBottom: 20,
//   },
//   pendingVerificationText: {
//     marginTop: 16,
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#EF6C00',
//     textAlign: 'center',
//   },
// });





//20/09/2025
// app/homescreens/info11.jsx
// import React, { useState, useEffect } from 'react';
// import { 
//   View, 
//   Text, 
//   TouchableOpacity, 
//   Image, 
//   StyleSheet, 
//   ScrollView, 
//   ActivityIndicator, 
//   Alert,
//   Dimensions 
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { MaterialIcons, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { serverTimestamp } from 'firebase/firestore';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info11() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, gender, getPrefix } = useProfile();
//   const { saveUserProfile, userData, refreshUserData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const storage = getStorage();

//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [docImage, setDocImage] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showVerificationMessage, setShowVerificationMessage] = useState(false);

//   // Get screen width for responsive layout
//   const screenWidth = Dimensions.get('window').width;

//   // Load existing data
//   useEffect(() => {
//     if (userData) {
//       if (userData.verificationStatus === 'verified') {
//         // If already verified, skip this screen
//         router.push(getNextScreen('homescreens/info11'));
//         return;
//       }
      
//       if (userData.verificationDocument) {
//         setSelectedDoc({
//           type: userData.verificationDocument.type,
//           name: userData.verificationDocument.name
//         });
//       }
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Profile Verification`,
//       HI: profileFor === 'MySelf' ? "आपकी प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त की प्रोफ़ाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफ़ाइल सत्यापन" :
//           "आपके रिश्तेदार की प्रोफ़ाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: `Verify ${getPrefix().toLowerCase()} profile details to get verified tick for free`,
//       HI: profileFor === 'MySelf' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Son' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने बेटे की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Daughter' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बेटी की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Sister' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बहन की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Brother' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'My Friend' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने दोस्त की प्रोफ़ाइल विवरण सत्यापित करें" :
//           profileFor === 'Cousin' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने चचेरे भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
//           "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने रिश्तेदार की प्रोफ़ाइल विवरण सत्यापित करें"
//     },
//     selectDocument: {
//       ENG: "Select Document Type",
//       HI: "दस्तावेज़ प्रकार चुनें"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     captureDocument: {
//       ENG: "Take Photo",
//       HI: "फोटो लें"
//     },
//     verificationSubmitted: {
//       ENG: "Verification Submitted!",
//       HI: "सत्यापन सबमिट किया गया!"
//     },
//     verificationMessage: {
//       ENG: "Your documents are under review. It may take up to 24 hours to verify your documents.",
//       HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। आपके दस्तावेज़ों को सत्यापित करने में 24 घंटे तक का समय लग सकता है।"
//     },
//     submitForVerification: {
//       ENG: "Submit for Verification",
//       HI: "सत्यापन के लिए सबमिट करें"
//     },
//     willDoLater: {
//       ENG: "I will do this later",
//       HI: "मैं इसे बाद में करूँगा"
//     },
//     retakePhoto: {
//       ENG: "Retake Photo",
//       HI: "फोटो फिर से लें"
//     },
//     documentTypes: {
//       aadharCard: {
//         ENG: "Aadhar Card",
//         HI: "आधार कार्ड"
//       },
//       panCard: {
//         ENG: "PAN Card",
//         HI: "पैन कार्ड"
//       },
//       drivingLicense: {
//         ENG: "Driving License",
//         HI: "ड्राइविंग लाइसेंस"
//       },
//       voterId: {
//         ENG: "Voter ID",
//         HI: "मतदाता पहचान पत्र"
//       }
//     },
//     errorTitle: {
//       ENG: "Error",
//       HI: "त्रुटि"
//     },
//     uploadError: {
//       ENG: "Failed to upload document. Please try again.",
//       HI: "दस्तावेज़ अपलोड करने में विफल। कृपया पुनः प्रयास करें।"
//     },
//     documentRequired: {
//       ENG: "Document Required",
//       HI: "दस्तावेज़ आवश्यक"
//     },
//     pleaseSelectDocument: {
//       ENG: "Please select a document type and upload the document",
//       HI: "कृपया एक दस्तावेज़ प्रकार चुनें और दस्तावेज़ अपलोड करें"
//     },
//     profileIncomplete: {
//       ENG: "Profile incomplete. Please complete your profile first.",
//       HI: "प्रोफ़ाइल अधूरी है। कृपया पहले अपनी प्रोफ़ाइल पूरी करें।"
//     },
//     permissionRequired: {
//       ENG: "Permission Required",
//       HI: "अनुमति आवश्यक"
//     },
//     allowPhotoAccess: {
//       ENG: "Please allow photo access to upload images",
//       HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
//     },
//     alreadyVerified: {
//       ENG: "Already Verified",
//       HI: "पहले से सत्यापित"
//     },
//     alreadyVerifiedText: {
//       ENG: "Your profile is already verified!",
//       HI: "आपकी प्रोफ़ाइल पहले से सत्यापित है!"
//     },
//     pendingVerification: {
//       ENG: "Verification Pending",
//       HI: "सत्यापन लंबित"
//     },
//     pendingVerificationText: {
//       ENG: "Your verification is under review. Please wait for admin approval.",
//       HI: "आपका सत्यापन समीक्षा के अधीन है। कृपया प्रशासक अनुमोदन की प्रतीक्षा करें।"
//     }
//   };

//   const documentTypes = [
//     { 
//       id: 1, 
//       name: translations.documentTypes.aadharCard[language], 
//       icon: 'id-card',
//       iconLib: FontAwesome,
//       color: '#4e7cff',
//       type: 'aadhar'
//     },
//     { 
//       id: 2, 
//       name: translations.documentTypes.panCard[language], 
//       icon: 'credit-card', 
//       iconLib: FontAwesome,
//       color: '#ff6b6b',
//       type: 'pan'
//     },
//     { 
//       id: 3, 
//       name: translations.documentTypes.drivingLicense[language], 
//       icon: 'car', 
//       iconLib: FontAwesome,
//       color: '#6c63ff',
//       type: 'driving_license'
//     },
//     { 
//       id: 4, 
//       name: translations.documentTypes.voterId[language], 
//       icon: 'how-to-vote', 
//       iconLib: MaterialIcons,
//       color: '#4caf50',
//       type: 'voter_id'
//     },
//   ];

//   const checkProfileComplete = () => {
//     if (!userData || !gender || !profileFor) {
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.profileIncomplete[language],
//         [{ text: "OK", onPress: () => router.replace('/homescreens/info1') }]
//       );
//       return false;
//     }
//     return true;
//   };

//   const pickDocumentImage = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestCameraPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const pickDocumentFromGallery = async () => {
//     if (!checkProfileComplete()) return;

//     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (status !== 'granted') {
//       Alert.alert(
//         translations.permissionRequired[language],
//         translations.allowPhotoAccess[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setDocImage(result.assets[0].uri);
//     }
//   };

//   const uploadDocumentToFirebase = async (uri, path) => {
//     try {
//       const response = await fetch(uri);
//       const blob = await response.blob();
//       const storageRef = ref(storage, path);
//       await uploadBytes(storageRef, blob);
//       return await getDownloadURL(storageRef);
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       throw error;
//     }
//   };

//   const handleSubmit = async () => {
//     if (!checkProfileComplete()) return;
//     if (!selectedDoc || !docImage) {
//       Alert.alert(
//         translations.documentRequired[language],
//         translations.pleaseSelectDocument[language],
//         [{ text: "OK" }]
//       );
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       const userId = userData?.uid || Date.now().toString();
//       const docPath = `verification_docs/${userId}/${selectedDoc.type}_${Date.now()}.jpg`;
//       const docUrl = await uploadDocumentToFirebase(docImage, docPath);
      
//       const profileData = {
//         ...userData,
//         verificationStatus: 'pending', // Set to pending for admin review
//         verificationDocument: {
//           type: selectedDoc.type,
//           name: selectedDoc.name,
//           url: docUrl,
//           uploadedAt: serverTimestamp()
//         },
//         profileProgress: 100, // Update progress to 100%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 11);
      
//       setShowVerificationMessage(true);
//     } catch (error) {
//       console.error("Error submitting verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleSkip = async () => {
//     if (!checkProfileComplete()) return;

//     setIsSubmitting(true);
//     try {
//       const profileData = {
//         ...userData,
//         verificationStatus: 'skipped',
//         profileProgress: 100, // Update progress to 100%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 11);
      
//       router.push(getNextScreen('homescreens/info11'));
//     } catch (error) {
//       console.error("Error skipping verification:", error);
//       Alert.alert(
//         translations.errorTitle[language],
//         translations.uploadError[language],
//         [{ text: "OK" }]
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   useEffect(() => {
//     if (showVerificationMessage) {
//       const timer = setTimeout(() => {
//         router.push(getNextScreen('homescreens/info11'));
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [showVerificationMessage]);

//   // Check verification status and show appropriate UI
//   const checkVerificationStatus = () => {
//     if (userData?.verificationStatus === 'verified') {
//       return (
//         <View style={styles.alreadyVerifiedContainer}>
//           <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//           <Text style={styles.alreadyVerifiedText}>{translations.alreadyVerifiedText[language]}</Text>
//         </View>
//       );
//     } else if (userData?.verificationStatus === 'pending') {
//       return (
//         <View style={styles.pendingVerificationContainer}>
//           <Ionicons name="time" size={48} color="#FF9800" />
//           <Text style={styles.pendingVerificationText}>
//             {translations.pendingVerificationText[language]}
//           </Text>
//         </View>
//       );
//     }
//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info11'))}
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
//         {isSubmitting && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView 
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header */}
//           <View style={styles.headerSection}>
//             <MaterialIcons name="verified-user" size={24} color="#7e57c2" />
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           <Image 
//             source={require('../../assets/Verify.png')} 
//             style={styles.verifyImage}
//           />

//           {checkVerificationStatus() || showVerificationMessage ? (
//             <View style={styles.verificationMessage}>
//               <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
//               <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
//               <Text style={styles.verificationMessageText}>
//                 {translations.verificationMessage[language]}
//               </Text>
//               <ActivityIndicator size="large" color="#7e57c2" style={styles.loadingIndicator} />
//             </View>
//           ) : (
//             <>
//               {/* Document Type Selection */}
//               <View style={styles.section}>
//                 <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
//                 <View style={styles.documentsGrid}>
//                   {documentTypes.map((doc) => {
//                     const Icon = doc.iconLib;
//                     return (
//                       <TouchableOpacity
//                         key={doc.id}
//                         style={[
//                           styles.documentCard,
//                           selectedDoc?.type === doc.type && styles.selectedDocument,
//                           { borderColor: doc.color }
//                         ]}
//                         onPress={() => setSelectedDoc(doc)}
//                       >
//                         <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
//                           <Icon name={doc.icon} size={20} color="#fff" />
//                         </View>
//                         <Text style={styles.documentText}>{doc.name}</Text>
//                         {selectedDoc?.type === doc.type && (
//                           <View style={styles.selectedIndicator}>
//                             <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
//                           </View>
//                         )}
//                       </TouchableOpacity>
//                     );
//                   })}
//                 </View>
//               </View>

//               {selectedDoc && (
//                 <View style={styles.section}>
//                   <Text style={styles.sectionTitle}>
//                     {translations.uploadDocument[language]}
//                   </Text>
//                   <View style={styles.uploadOptions}>
//                     <TouchableOpacity 
//                       style={[styles.uploadOption, styles.captureOption]}
//                       onPress={pickDocumentImage}
//                       disabled={isSubmitting}
//                     >
//                       <MaterialIcons name="camera-alt" size={24} color="#fff" />
//                       <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity 
//                       style={[styles.uploadOption, styles.galleryOption]}
//                       onPress={pickDocumentFromGallery}
//                       disabled={isSubmitting}
//                     >
//                       <MaterialIcons name="upload" size={24} color="#fff" />
//                       <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
//                     </TouchableOpacity>
//                   </View>
                  
//                   {docImage && (
//                     <View style={styles.imagePreviewContainer}>
//                       <Image source={{ uri: docImage }} style={styles.previewImage} />
//                       <TouchableOpacity 
//                         style={styles.retakeButton}
//                         onPress={pickDocumentImage}
//                         disabled={isSubmitting}
//                       >
//                         <MaterialIcons name="camera-alt" size={20} color="#fff" />
//                         <Text style={styles.retakeButtonText}>
//                           {translations.retakePhoto[language]}
//                         </Text>
//                       </TouchableOpacity>
//                     </View>
//                   )}
//                 </View>
//               )}

//               {/* Continue Button */}
//               <View style={styles.buttonContainer}>
//                 {docImage && !showVerificationMessage && (
//                   <TouchableOpacity
//                     style={[
//                       styles.continueButton,
//                       { 
//                         backgroundColor: selectedDoc && docImage ? '#7e57c2' : '#ADB5BD',
//                         opacity: isSubmitting ? 0.7 : 1
//                       }
//                     ]}
//                     onPress={handleSubmit}
//                     disabled={!selectedDoc || !docImage || isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <ActivityIndicator size="small" color="white" />
//                     ) : (
//                       <Text style={styles.continueButtonText}>
//                         {translations.submitForVerification[language]}
//                       </Text>
//                     )}
//                   </TouchableOpacity>
//                 )}
                
//                 <TouchableOpacity
//                   style={styles.skipButton}
//                   onPress={handleSkip}
//                   disabled={isSubmitting}
//                 >
//                   <Text style={styles.skipButtonText}>
//                     {translations.willDoLater[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </>
//           )}
//         </ScrollView>
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
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100,
//   },
//   headerSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     lineHeight: 22,
//   },
//   verifyImage: {
//     width: '100%',
//     height: 200,
//     resizeMode: 'contain',
//     marginVertical: 20,
//   },
//   section: {
//     marginBottom: 25,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//   },
//   documentsGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     gap: 12,
//   },
//   documentCard: {
//     width: '48%', // 2 cards per row with gap
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 15,
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: 'transparent',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//     position: 'relative',
//     minHeight: 120, // Fixed height for consistency
//   },
//   selectedDocument: {
//     borderWidth: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 4,
//   },
//   documentIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   documentText: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#333',
//     textAlign: 'center',
//   },
//   selectedIndicator: {
//     position: 'absolute',
//     top: 8,
//     right: 8,
//   },
//   uploadOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap: 15,
//     marginBottom: 20,
//   },
//   uploadOption: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 15,
//     borderRadius: 10,
//     gap: 8,
//   },
//   captureOption: {
//     backgroundColor: '#28a745',
//   },
//   galleryOption: {
//     backgroundColor: '#007bff',
//   },
//   uploadOptionText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   imagePreviewContainer: {
//     alignItems: 'center',
//     marginTop: 15,
//   },
//   previewImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   retakeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#6c757d',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     gap: 5,
//   },
//   retakeButtonText: {
//     color: 'white',
//     fontWeight: '500',
//     fontSize: 14,
//   },
//   buttonContainer: {
//     marginTop: 20,
//     gap: 15,
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   skipButton: {
//     padding: 16,
//     borderRadius: 10,
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#6c757d',
//   },
//   skipButtonText: {
//     color: '#6c757d',
//     fontWeight: '600',
//     fontSize: 16,
//   },
//   verificationMessage: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   verificationMessageTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#28a745',
//     marginVertical: 10,
//   },
//   verificationMessageText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     lineHeight: 22,
//     marginBottom: 15,
//   },
//   loadingIndicator: {
//     marginTop: 10,
//   },
//   alreadyVerifiedContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#E8F5E9',
//     borderRadius: 16,
//     marginBottom: 20,
//   },
//   alreadyVerifiedText: {
//     marginTop: 16,
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#2E7D32',
//     textAlign: 'center',
//   },
//   pendingVerificationContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#FFF3E0',
//     borderRadius: 16,
//     marginBottom: 20,
//   },
//   pendingVerificationText: {
//     marginTop: 16,
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#EF6C00',
//     textAlign: 'center',
//   },
// });







//28/09/2025
// app/homescreens/info11.jsx
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  ScrollView, 
  ActivityIndicator, 
  Alert,
  Dimensions 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons, FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { serverTimestamp, doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useProfileNavigation } from '../utils/navigationHelper';

export default function Info11() {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, gender, getPrefix } = useProfile();
  const { saveUserProfile, userData, refreshUserData, user } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const storage = getStorage();

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [docImage, setDocImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showVerificationMessage, setShowVerificationMessage] = useState(false);
  const [existingDocument, setExistingDocument] = useState(null);

  // Get screen width for responsive layout
  const screenWidth = Dimensions.get('window').width;

  // Load existing data
  useEffect(() => {
    if (userData) {
      if (userData.verificationStatus === 'verified') {
        // If already verified, skip this screen
        router.push(getNextScreen('homescreens/info11'));
        return;
      }
      
      // Check if user already has a verification document
      if (userData.verificationDocument) {
        setExistingDocument(userData.verificationDocument);
        setSelectedDoc({
          type: userData.verificationDocument.type,
          name: userData.verificationDocument.name
        });
        
        // If document exists but status is pending, show the existing document
        if (userData.verificationDocument.url) {
          setDocImage(userData.verificationDocument.url);
        }
      }
    }
  }, [userData]);

  // Translations
  const translations = {
    title: {
      ENG: `${getPrefix()} Profile Verification`,
      HI: profileFor === 'MySelf' ? "आपकी प्रोफ़ाइल सत्यापन" :
          profileFor === 'My Son' ? "आपके बेटे की प्रोफ़ाइल सत्यापन" :
          profileFor === 'My Daughter' ? "आपकी बेटी की प्रोफ़ाइल सत्यापन" :
          profileFor === 'My Sister' ? "आपकी बहन की प्रोफ़ाइल सत्यापन" :
          profileFor === 'My Brother' ? "आपके भाई की प्रोफ़ाइल सत्यापन" :
          profileFor === 'My Friend' ? "आपके दोस्त की प्रोफ़ाइल सत्यापन" :
          profileFor === 'Cousin' ? "आपके चचेरे भाई की प्रोफ़ाइल सत्यापन" :
          "आपके रिश्तेदार की प्रोफ़ाइल सत्यापन"
    },
    subtitle: {
      ENG: existingDocument ? 
           `You have already submitted ${existingDocument.name} for verification. Status: ${userData?.verificationStatus || 'pending'}` :
           `Verify ${getPrefix().toLowerCase()} profile details to get verified tick for free`,
      HI: existingDocument ? 
          `आपने पहले ही सत्यापन के लिए ${existingDocument.name} जमा कर दिया है। स्थिति: ${userData?.verificationStatus || 'लंबित'}` :
          profileFor === 'MySelf' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी प्रोफ़ाइल विवरण सत्यापित करें" :
          profileFor === 'My Son' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने बेटे की प्रोफ़ाइल विवरण सत्यापित करें" :
          profileFor === 'My Daughter' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बेटी की प्रोफ़ाइल विवरण सत्यापित करें" :
          profileFor === 'My Sister' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपनी बहन की प्रोफ़ाइल विवरण सत्यापित करें" :
          profileFor === 'My Brother' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
          profileFor === 'My Friend' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने दोस्त की प्रोफ़ाइल विवरण सत्यापित करें" :
          profileFor === 'Cousin' ? "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने चचेरे भाई की प्रोफ़ाइल विवरण सत्यापित करें" :
          "मुफ्त में सत्यापित टिक प्राप्त करने के लिए अपने रिश्तेदार की प्रोफ़ाइल विवरण सत्यापित करें"
    },
    selectDocument: {
      ENG: "Select Document Type",
      HI: "दस्तावेज़ प्रकार चुनें"
    },
    uploadDocument: {
      ENG: existingDocument ? "Update Document" : "Upload Document",
      HI: existingDocument ? "दस्तावेज़ अपडेट करें" : "दस्तावेज़ अपलोड करें"
    },
    captureDocument: {
      ENG: "Take Photo",
      HI: "फोटो लें"
    },
    verificationSubmitted: {
      ENG: "Verification Submitted!",
      HI: "सत्यापन सबमिट किया गया!"
    },
    verificationMessage: {
      ENG: "Your documents are under review. It may take up to 24 hours to verify your documents.",
      HI: "आपके दस्तावेज़ समीक्षा के अधीन हैं। आपके दस्तावेज़ों को सत्यापित करने में 24 घंटे तक का समय लग सकता है।"
    },
    submitForVerification: {
      ENG: existingDocument ? "Update Verification" : "Submit for Verification",
      HI: existingDocument ? "सत्यापन अपडेट करें" : "सत्यापन के लिए सबमिट करें"
    },
    willDoLater: {
      ENG: "I will do this later",
      HI: "मैं इसे बाद में करूँगा"
    },
    retakePhoto: {
      ENG: "Retake Photo",
      HI: "फोटो फिर से लें"
    },
    changePhoto: {
      ENG: "Change Photo",
      HI: "फोटो बदलें"
    },
    documentTypes: {
      aadharCard: {
        ENG: "Aadhar Card",
        HI: "आधार कार्ड"
      },
      panCard: {
        ENG: "PAN Card",
        HI: "पैन कार्ड"
      },
      drivingLicense: {
        ENG: "Driving License",
        HI: "ड्राइविंग लाइसेंस"
      },
      voterId: {
        ENG: "Voter ID",
        HI: "मतदाता पहचान पत्र"
      }
    },
    errorTitle: {
      ENG: "Error",
      HI: "त्रुटि"
    },
    uploadError: {
      ENG: "Failed to upload document. Please try again.",
      HI: "दस्तावेज़ अपलोड करने में विफल। कृपया पुनः प्रयास करें।"
    },
    documentRequired: {
      ENG: "Document Required",
      HI: "दस्तावेज़ आवश्यक"
    },
    pleaseSelectDocument: {
      ENG: "Please select a document type and upload the document",
      HI: "कृपया एक दस्तावेज़ प्रकार चुनें और दस्तावेज़ अपलोड करें"
    },
    profileIncomplete: {
      ENG: "Profile incomplete. Please complete your profile first.",
      HI: "प्रोफ़ाइल अधूरी है। कृपया पहले अपनी प्रोफ़ाइल पूरी करें।"
    },
    permissionRequired: {
      ENG: "Permission Required",
      HI: "अनुमति आवश्यक"
    },
    allowPhotoAccess: {
      ENG: "Please allow photo access to upload images",
      HI: "कृपया छवियों को अपलोड करने के लिए फोटो एक्सेस की अनुमति दें"
    },
    alreadyVerified: {
      ENG: "Already Verified",
      HI: "पहले से सत्यापित"
    },
    alreadyVerifiedText: {
      ENG: "Your profile is already verified!",
      HI: "आपकी प्रोफ़ाइल पहले से सत्यापित है!"
    },
    pendingVerification: {
      ENG: "Verification Pending",
      HI: "सत्यापन लंबित"
    },
    pendingVerificationText: {
      ENG: "Your verification is under review. Please wait for admin approval.",
      HI: "आपका सत्यापन समीक्षा के अधीन है। कृपया प्रशासक अनुमोदन की प्रतीक्षा करें।"
    },
    documentAdded: {
      ENG: "Document Already Added",
      HI: "दस्तावेज़ पहले से जोड़ा गया"
    },
    documentAddedText: {
      ENG: "You have already submitted a document for verification.",
      HI: "आपने पहले ही सत्यापन के लिए एक दस्तावेज़ जमा कर दिया है।"
    }
  };

  const documentTypes = [
    { 
      id: 1, 
      name: translations.documentTypes.aadharCard[language], 
      icon: 'id-card',
      iconLib: FontAwesome,
      color: '#4e7cff',
      type: 'aadhar'
    },
    { 
      id: 2, 
      name: translations.documentTypes.panCard[language], 
      icon: 'credit-card', 
      iconLib: FontAwesome,
      color: '#ff6b6b',
      type: 'pan'
    },
    { 
      id: 3, 
      name: translations.documentTypes.drivingLicense[language], 
      icon: 'car', 
      iconLib: FontAwesome,
      color: '#6c63ff',
      type: 'driving_license'
    },
    { 
      id: 4, 
      name: translations.documentTypes.voterId[language], 
      icon: 'how-to-vote', 
      iconLib: MaterialIcons,
      color: '#4caf50',
      type: 'voter_id'
    },
  ];

  const checkProfileComplete = () => {
    if (!userData || !gender || !profileFor) {
      Alert.alert(
        translations.errorTitle[language],
        translations.profileIncomplete[language],
        [{ text: "OK", onPress: () => router.replace('/homescreens/info1') }]
      );
      return false;
    }
    return true;
  };

  const pickDocumentImage = async () => {
    if (!checkProfileComplete()) return;

    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        translations.permissionRequired[language],
        translations.allowPhotoAccess[language],
        [{ text: "OK" }]
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setDocImage(result.assets[0].uri);
    }
  };

  const pickDocumentFromGallery = async () => {
    if (!checkProfileComplete()) return;

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        translations.permissionRequired[language],
        translations.allowPhotoAccess[language],
        [{ text: "OK" }]
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setDocImage(result.assets[0].uri);
    }
  };

  const uploadDocumentToFirebase = async (uri, path) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, blob);
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.error("Error uploading document:", error);
      throw error;
    }
  };

  // Save document to separate collection for admin review
  const saveDocumentToAdminCollection = async (documentData) => {
    try {
      const docRef = doc(collection(db, 'verificationDocuments'));
      await setDoc(docRef, {
        ...documentData,
        id: docRef.id,
        createdAt: serverTimestamp(),
        reviewed: false,
        approved: false
      });
      return docRef.id;
    } catch (error) {
      console.error("Error saving to admin collection:", error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!checkProfileComplete()) return;
    if (!selectedDoc || !docImage) {
      Alert.alert(
        translations.documentRequired[language],
        translations.pleaseSelectDocument[language],
        [{ text: "OK" }]
      );
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const userId = user?.uid || userData?.uid;
      const docPath = `verification_docs/${userId}/${selectedDoc.type}_${Date.now()}.jpg`;
      const docUrl = await uploadDocumentToFirebase(docImage, docPath);
      
      const documentData = {
        userId: userId,
        userEmail: userData?.email,
        userName: `${userData?.firstName} ${userData?.lastName}`,
        documentType: selectedDoc.type,
        documentName: selectedDoc.name,
        documentUrl: docUrl,
        status: 'pending',
        submittedAt: serverTimestamp()
      };

      // Save to admin collection for review
      await saveDocumentToAdminCollection(documentData);

      const profileData = {
        ...userData,
        verificationStatus: 'pending',
        verificationDocument: {
          type: selectedDoc.type,
          name: selectedDoc.name,
          url: docUrl,
          uploadedAt: serverTimestamp(),
          documentId: documentData.id
        },
        profileProgress: 100,
        updatedAt: serverTimestamp()
      };

      // Save to user profile
      await saveUserProfile(profileData, 11);
      
      setShowVerificationMessage(true);
    } catch (error) {
      console.error("Error submitting verification:", error);
      Alert.alert(
        translations.errorTitle[language],
        translations.uploadError[language],
        [{ text: "OK" }]
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkip = async () => {
    if (!checkProfileComplete()) return;

    setIsSubmitting(true);
    try {
      const profileData = {
        ...userData,
        verificationStatus: 'skipped',
        profileProgress: 100,
        updatedAt: serverTimestamp()
      };

      await saveUserProfile(profileData, 11);
      
      router.push(getNextScreen('homescreens/info11'));
    } catch (error) {
      console.error("Error skipping verification:", error);
      Alert.alert(
        translations.errorTitle[language],
        translations.uploadError[language],
        [{ text: "OK" }]
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showVerificationMessage) {
      const timer = setTimeout(() => {
        router.push(getNextScreen('homescreens/info11'));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showVerificationMessage]);

  // Check verification status and show appropriate UI
  const checkVerificationStatus = () => {
    if (userData?.verificationStatus === 'verified') {
      return (
        <View style={styles.alreadyVerifiedContainer}>
          <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
          <Text style={styles.alreadyVerifiedText}>{translations.alreadyVerifiedText[language]}</Text>
        </View>
      );
    } else if (userData?.verificationStatus === 'pending') {
      return (
        <View style={styles.pendingVerificationContainer}>
          <Ionicons name="time" size={48} color="#FF9800" />
          <Text style={styles.pendingVerificationText}>
            {translations.pendingVerificationText[language]}
          </Text>
          {existingDocument && (
            <View style={styles.existingDocumentInfo}>
              <Text style={styles.existingDocumentText}>
                Document: {existingDocument.name}
              </Text>
              <Text style={styles.existingDocumentText}>
                Submitted on: {existingDocument.uploadedAt?.toDate?.()?.toLocaleDateString() || 'Recently'}
              </Text>
            </View>
          )}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info11'))}
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
        {isSubmitting && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#7e57c2" />
          </View>
        )}

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <MaterialIcons name="verified-user" size={24} color="#7e57c2" />
            <Text style={styles.title}>{translations.title[language]}</Text>
          </View>

          <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

          <Image 
            source={require('../../assets/Verify.png')} 
            style={styles.verifyImage}
          />

          {checkVerificationStatus() || showVerificationMessage ? (
            <View style={styles.verificationMessage}>
              <Ionicons name="checkmark-circle" size={48} color="#4CAF50" />
              <Text style={styles.verificationMessageTitle}>{translations.verificationSubmitted[language]}</Text>
              <Text style={styles.verificationMessageText}>
                {translations.verificationMessage[language]}
              </Text>
              <ActivityIndicator size="large" color="#7e57c2" style={styles.loadingIndicator} />
            </View>
          ) : existingDocument && userData?.verificationStatus === 'pending' ? (
            <View style={styles.documentAddedContainer}>
              <Ionicons name="document-text" size={48} color="#FF9800" />
              <Text style={styles.documentAddedTitle}>{translations.documentAdded[language]}</Text>
              <Text style={styles.documentAddedText}>{translations.documentAddedText[language]}</Text>
              <Text style={styles.documentDetails}>
                Document: {existingDocument.name}
              </Text>
              <Text style={styles.documentDetails}>
                Status: Pending Review
              </Text>
            </View>
          ) : (
            <>
              {/* Document Type Selection */}
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>{translations.selectDocument[language]}</Text>
                <View style={styles.documentsGrid}>
                  {documentTypes.map((doc) => {
                    const Icon = doc.iconLib;
                    return (
                      <TouchableOpacity
                        key={doc.id}
                        style={[
                          styles.documentCard,
                          selectedDoc?.type === doc.type && styles.selectedDocument,
                          { borderColor: doc.color }
                        ]}
                        onPress={() => setSelectedDoc(doc)}
                        disabled={existingDocument && userData?.verificationStatus === 'pending'}
                      >
                        <View style={[styles.documentIcon, { backgroundColor: doc.color }]}>
                          <Icon name={doc.icon} size={20} color="#fff" />
                        </View>
                        <Text style={styles.documentText}>{doc.name}</Text>
                        {selectedDoc?.type === doc.type && (
                          <View style={styles.selectedIndicator}>
                            <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                          </View>
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>

              {selectedDoc && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>
                    {translations.uploadDocument[language]}
                  </Text>
                  <View style={styles.uploadOptions}>
                    <TouchableOpacity 
                      style={[styles.uploadOption, styles.captureOption]}
                      onPress={pickDocumentImage}
                      disabled={isSubmitting}
                    >
                      <MaterialIcons name="camera-alt" size={24} color="#fff" />
                      <Text style={styles.uploadOptionText}>{translations.captureDocument[language]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[styles.uploadOption, styles.galleryOption]}
                      onPress={pickDocumentFromGallery}
                      disabled={isSubmitting}
                    >
                      <MaterialIcons name="upload" size={24} color="#fff" />
                      <Text style={styles.uploadOptionText}>{translations.uploadDocument[language]}</Text>
                    </TouchableOpacity>
                  </View>
                  
                  {docImage && (
                    <View style={styles.imagePreviewContainer}>
                      <Image source={{ uri: docImage }} style={styles.previewImage} />
                      <TouchableOpacity 
                        style={styles.retakeButton}
                        onPress={pickDocumentImage}
                        disabled={isSubmitting}
                      >
                        <MaterialIcons name="camera-alt" size={20} color="#fff" />
                        <Text style={styles.retakeButtonText}>
                          {existingDocument ? translations.changePhoto[language] : translations.retakePhoto[language]}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}

              {/* Continue Button */}
              <View style={styles.buttonContainer}>
                {docImage && !showVerificationMessage && (
                  <TouchableOpacity
                    style={[
                      styles.continueButton,
                      { 
                        backgroundColor: selectedDoc && docImage ? '#7e57c2' : '#ADB5BD',
                        opacity: isSubmitting ? 0.7 : 1
                      }
                    ]}
                    onPress={handleSubmit}
                    disabled={!selectedDoc || !docImage || isSubmitting}
                  >
                    {isSubmitting ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                      <Text style={styles.continueButtonText}>
                        {translations.submitForVerification[language]}
                      </Text>
                    )}
                  </TouchableOpacity>
                )}
                
                <TouchableOpacity
                  style={styles.skipButton}
                  onPress={handleSkip}
                  disabled={isSubmitting}
                >
                  <Text style={styles.skipButtonText}>
                    {translations.willDoLater[language]}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </ScrollView>
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
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 22,
  },
  verifyImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  documentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  documentCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    position: 'relative',
    minHeight: 120,
  },
  selectedDocument: {
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  documentIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  documentText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  selectedIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  uploadOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 20,
  },
  uploadOption: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 8,
  },
  captureOption: {
    backgroundColor: '#28a745',
  },
  galleryOption: {
    backgroundColor: '#007bff',
  },
  uploadOptionText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  imagePreviewContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  retakeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6c757d',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 5,
  },
  retakeButtonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 20,
    gap: 15,
  },
  continueButton: {
    backgroundColor: '#7e57c2',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  skipButton: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6c757d',
  },
  skipButtonText: {
    color: '#6c757d',
    fontWeight: '600',
    fontSize: 16,
  },
  verificationMessage: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  verificationMessageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
    marginVertical: 10,
  },
  verificationMessageText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 15,
  },
  loadingIndicator: {
    marginTop: 10,
  },
  alreadyVerifiedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E8F5E9',
    borderRadius: 16,
    marginBottom: 20,
  },
  alreadyVerifiedText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
    textAlign: 'center',
  },
  pendingVerificationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF3E0',
    borderRadius: 16,
    marginBottom: 20,
  },
  pendingVerificationText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#EF6C00',
    textAlign: 'center',
  },
  existingDocumentInfo: {
    marginTop: 15,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 10,
    width: '100%',
  },
  existingDocumentText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
  documentAddedContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF3E0',
    borderRadius: 16,
    marginBottom: 20,
  },
  documentAddedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF9800',
    marginVertical: 10,
  },
  documentAddedText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  documentDetails: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 5,
  },
});