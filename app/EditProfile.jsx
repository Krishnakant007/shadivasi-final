// // app/EditProfile.jsx
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, Image } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useLanguage } from './context/LanguageContext';
// import { useFirestore } from './hooks/useFirebase';
// import { Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';

// export default function EditProfile() {
//   const { language } = useLanguage();
//   const { userData, updateUserProfile } = useFirestore();
//   const router = useRouter();
  
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dateOfBirth: '',
//     gender: '',
//     mobileNumber: '',
//     email: '',
//     height: '',
//     maritalStatus: '',
//     religion: '',
//     community: '',
//     qualification: '',
//     occupation: '',
//     employmentType: '',
//     incomeRange: '',
//     city: '',
//     state: '',
//     village: '',
//     aboutMe: '',
//     diet: '',
//     profileFor: '',
//     interests: []
//   });

//   const [loading, setLoading] = useState(false);

//   // Translations
//   const translations = {
//     editProfile: {
//       ENG: "Edit Profile",
//       HI: "प्रोफाइल संपादित करें"
//     },
//     save: {
//       ENG: "Save Changes",
//       HI: "परिवर्तन सहेजें"
//     },
//     cancel: {
//       ENG: "Cancel",
//       HI: "रद्द करें"
//     },
//     personalInfo: {
//       ENG: "Personal Information",
//       HI: "व्यक्तिगत जानकारी"
//     },
//     professionalInfo: {
//       ENG: "Professional Information",
//       HI: "पेशेवर जानकारी"
//     },
//     locationInfo: {
//       ENG: "Location Information",
//       HI: "स्थान की जानकारी"
//     },
//     aboutYou: {
//       ENG: "About You",
//       HI: "आपके बारे में"
//     },
//     firstName: {
//       ENG: "First Name",
//       HI: "पहला नाम"
//     },
//     lastName: {
//       ENG: "Last Name",
//       HI: "अंतिम नाम"
//     },
//     dateOfBirth: {
//       ENG: "Date of Birth",
//       HI: "जन्म तिथि"
//     },
//     gender: {
//       ENG: "Gender",
//       HI: "लिंग"
//     },
//     mobileNumber: {
//       ENG: "Mobile Number",
//       HI: "मोबाइल नंबर"
//     },
//     email: {
//       ENG: "Email",
//       HI: "ईमेल"
//     },
//     height: {
//       ENG: "Height",
//       HI: "ऊंचाई"
//     },
//     maritalStatus: {
//       ENG: "Marital Status",
//       HI: "वैवाहिक स्थिति"
//     },
//     religion: {
//       ENG: "Religion",
//       HI: "धर्म"
//     },
//     community: {
//       ENG: "Community",
//       HI: "समुदाय"
//     },
//     qualification: {
//       ENG: "Qualification",
//       HI: "योग्यता"
//     },
//     occupation: {
//       ENG: "Occupation",
//       HI: "पेशा"
//     },
//     employmentType: {
//       ENG: "Employment Type",
//       HI: "रोजगार का प्रकार"
//     },
//     incomeRange: {
//       ENG: "Income Range",
//       HI: "आय सीमा"
//     },
//     city: {
//       ENG: "City",
//       HI: "शहर"
//     },
//     state: {
//       ENG: "State",
//       HI: "राज्य"
//     },
//     village: {
//       ENG: "Village",
//       HI: "गाँव"
//     },
//     aboutMe: {
//       ENG: "About Me",
//       HI: "मेरे बारे में"
//     },
//     diet: {
//       ENG: "Diet",
//       HI: "आहार"
//     },
//     profileFor: {
//       ENG: "Profile For",
//       HI: "प्रोफाइल किसके लिए"
//     },
//     interests: {
//       ENG: "Interests",
//       HI: "रुचियाँ"
//     }
//   };

//   // Load user data when component mounts
//   useEffect(() => {
//     if (userData) {
//       setFormData({
//         firstName: userData.firstName || '',
//         lastName: userData.lastName || '',
//         dateOfBirth: userData.dateOfBirth || '',
//         gender: userData.gender || '',
//         mobileNumber: userData.mobileNumber || '',
//         email: userData.email || '',
//         height: userData.height || '',
//         maritalStatus: userData.maritalStatus || '',
//         religion: userData.religion || '',
//         community: userData.community || '',
//         qualification: userData.qualification || '',
//         occupation: userData.occupation || '',
//         employmentType: userData.employmentType || '',
//         incomeRange: userData.incomeRange || '',
//         city: userData.city || '',
//         state: userData.state || '',
//         village: userData.village || '',
//         aboutMe: userData.aboutMe || '',
//         diet: userData.diet || '',
//         profileFor: userData.profileFor || 'MySelf',
//         interests: userData.interests || []
//       });
//     }
//   }, [userData]);

//   // Handle form input changes
//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Save profile changes
//   const handleSave = async () => {
//     try {
//       setLoading(true);
//       await updateUserProfile(formData);
//       Alert.alert("Success", "Profile updated successfully!");
//       router.back();
//     } catch (error) {
//       console.error("Error updating profile:", error);
//       Alert.alert("Error", "Failed to update profile");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()}>
//           <Ionicons name="arrow-back" size={24} color="#000" />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>{translations.editProfile[language]}</Text>
//         <View style={{ width: 24 }} />
//       </View>

//       <ScrollView style={styles.container}>
//         {/* Personal Information */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.personalInfo[language]}</Text>
          
//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.firstName[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.firstName}
//                 onChangeText={(text) => handleInputChange('firstName', text)}
//                 placeholder={translations.firstName[language]}
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.lastName[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.lastName}
//                 onChangeText={(text) => handleInputChange('lastName', text)}
//                 placeholder={translations.lastName[language]}
//               />
//             </View>
//           </View>

//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.dateOfBirth[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.dateOfBirth}
//                 onChangeText={(text) => handleInputChange('dateOfBirth', text)}
//                 placeholder="DD/MM/YYYY"
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.gender[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.gender}
//                 onChangeText={(text) => handleInputChange('gender', text)}
//                 placeholder={translations.gender[language]}
//               />
//             </View>
//           </View>

//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.mobileNumber[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.mobileNumber}
//                 onChangeText={(text) => handleInputChange('mobileNumber', text)}
//                 placeholder={translations.mobileNumber[language]}
//                 keyboardType="phone-pad"
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.email[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.email}
//                 onChangeText={(text) => handleInputChange('email', text)}
//                 placeholder={translations.email[language]}
//                 keyboardType="email-address"
//                 editable={false}
//               />
//             </View>
//           </View>

//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.height[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.height}
//                 onChangeText={(text) => handleInputChange('height', text)}
//                 placeholder={translations.height[language]}
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.maritalStatus[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.maritalStatus}
//                 onChangeText={(text) => handleInputChange('maritalStatus', text)}
//                 placeholder={translations.maritalStatus[language]}
//               />
//             </View>
//           </View>

//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.religion[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.religion}
//                 onChangeText={(text) => handleInputChange('religion', text)}
//                 placeholder={translations.religion[language]}
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.community[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.community}
//                 onChangeText={(text) => handleInputChange('community', text)}
//                 placeholder={translations.community[language]}
//               />
//             </View>
//           </View>
//         </View>

//         {/* Professional Information */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.professionalInfo[language]}</Text>
          
//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.qualification[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.qualification}
//                 onChangeText={(text) => handleInputChange('qualification', text)}
//                 placeholder={translations.qualification[language]}
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.occupation[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.occupation}
//                 onChangeText={(text) => handleInputChange('occupation', text)}
//                 placeholder={translations.occupation[language]}
//               />
//             </View>
//           </View>

//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.employmentType[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.employmentType}
//                 onChangeText={(text) => handleInputChange('employmentType', text)}
//                 placeholder={translations.employmentType[language]}
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.incomeRange[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.incomeRange}
//                 onChangeText={(text) => handleInputChange('incomeRange', text)}
//                 placeholder={translations.incomeRange[language]}
//               />
//             </View>
//           </View>
//         </View>

//         {/* Location Information */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.locationInfo[language]}</Text>
          
//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.city[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.city}
//                 onChangeText={(text) => handleInputChange('city', text)}
//                 placeholder={translations.city[language]}
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.state[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.state}
//                 onChangeText={(text) => handleInputChange('state', text)}
//                 placeholder={translations.state[language]}
//               />
//             </View>
//           </View>

//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>{translations.village[language]}</Text>
//             <TextInput
//               style={styles.input}
//               value={formData.village}
//               onChangeText={(text) => handleInputChange('village', text)}
//               placeholder={translations.village[language]}
//             />
//           </View>
//         </View>

//         {/* About You */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.aboutYou[language]}</Text>
          
//           <View style={styles.inputContainer}>
//             <Text style={styles.label}>{translations.aboutMe[language]}</Text>
//             <TextInput
//               style={[styles.input, styles.textArea]}
//               value={formData.aboutMe}
//               onChangeText={(text) => handleInputChange('aboutMe', text)}
//               placeholder={translations.aboutMe[language]}
//               multiline
//               numberOfLines={4}
//             />
//           </View>

//           <View style={styles.formRow}>
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.diet[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.diet}
//                 onChangeText={(text) => handleInputChange('diet', text)}
//                 placeholder={translations.diet[language]}
//               />
//             </View>
            
//             <View style={styles.inputContainer}>
//               <Text style={styles.label}>{translations.profileFor[language]}</Text>
//               <TextInput
//                 style={styles.input}
//                 value={formData.profileFor}
//                 onChangeText={(text) => handleInputChange('profileFor', text)}
//                 placeholder={translations.profileFor[language]}
//               />
//             </View>
//           </View>
//         </View>

//         {/* Action Buttons */}
//         <View style={styles.actionButtons}>
//           <TouchableOpacity
//             style={[styles.button, styles.cancelButton]}
//             onPress={() => router.back()}
//           >
//             <Text style={styles.cancelButtonText}>{translations.cancel[language]}</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.button, styles.saveButton]}
//             onPress={handleSave}
//             disabled={loading}
//           >
//             <Text style={styles.saveButtonText}>
//               {loading ? "Saving..." : translations.save[language]}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 15,
//     color: '#333',
//   },
//   formRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   inputContainer: {
//     flex: 1,
//     marginHorizontal: 5,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: '500',
//     marginBottom: 5,
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   button: {
//     flex: 1,
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   cancelButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   saveButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   cancelButtonText: {
//     color: '#666',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   saveButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });



//10/09/2025

// app/EditProfile.jsx
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, Image, FlatList, Modal, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from './context/LanguageContext';
import { useFirestore } from './hooks/useFirebase';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { useAuth } from './context/AuthContext';

export default function EditProfile() {
  const { language } = useLanguage();
  const { userData, updateUserProfile } = useFirestore();
  const { user } = useAuth();
  const router = useRouter();
  const storage = getStorage();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    mobileNumber: '',
    email: '',
    height: '',
    maritalStatus: '',
    religion: '',
    community: '',
    qualification: '',
    occupation: '',
    employmentType: '',
    incomeRange: '',
    city: '',
    state: '',
    village: '',
    aboutMe: '',
    diet: '',
    profileFor: '',
    interests: [],
    galleryPhotos: []
  });

  const [loading, setLoading] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [galleryModalVisible, setGalleryModalVisible] = useState(false);

  // Translations
  const translations = {
    editProfile: {
      ENG: "Edit Profile",
      HI: "प्रोफाइल संपादित करें"
    },
    save: {
      ENG: "Save Changes",
      HI: "परिवर्तन सहेजें"
    },
    cancel: {
      ENG: "Cancel",
      HI: "रद्द करें"
    },
    personalInfo: {
      ENG: "Personal Information",
      HI: "व्यक्तिगत जानकारी"
    },
    professionalInfo: {
      ENG: "Professional Information",
      HI: "पेशेवर जानकारी"
    },
    locationInfo: {
      ENG: "Location Information",
      HI: "स्थान की जानकारी"
    },
    aboutYou: {
      ENG: "About You",
      HI: "आपके बारे में"
    },
    galleryPhotos: {
      ENG: "Gallery Photos",
      HI: "गैलरी फोटो"
    },
    addPhotos: {
      ENG: "Add Photos",
      HI: "फोटो जोड़ें"
    },
    remove: {
      ENG: "Remove",
      HI: "हटाएं"
    },
    firstName: {
      ENG: "First Name",
      HI: "पहला नाम"
    },
    lastName: {
      ENG: "Last Name",
      HI: "अंतिम नाम"
    },
    dateOfBirth: {
      ENG: "Date of Birth",
      HI: "जन्म तिथि"
    },
    gender: {
      ENG: "Gender",
      HI: "लिंग"
    },
    mobileNumber: {
      ENG: "Mobile Number",
      HI: "मोबाइल नंबर"
    },
    email: {
      ENG: "Email",
      HI: "ईमेल"
    },
    height: {
      ENG: "Height",
      HI: "ऊंचाई"
    },
    maritalStatus: {
      ENG: "Marital Status",
      HI: "वैवाहिक स्थिति"
    },
    religion: {
      ENG: "Religion",
      HI: "धर्म"
    },
    community: {
      ENG: "Community",
      HI: "समुदाय"
    },
    qualification: {
      ENG: "Qualification",
      HI: "योग्यता"
    },
    occupation: {
      ENG: "Occupation",
      HI: "पेशा"
    },
    employmentType: {
      ENG: "Employment Type",
      HI: "रोजगार का प्रकार"
    },
    incomeRange: {
      ENG: "Income Range",
      HI: "आय सीमा"
    },
    city: {
      ENG: "City",
      HI: "शहर"
    },
    state: {
      ENG: "State",
      HI: "राज्य"
    },
    village: {
      ENG: "Village",
      HI: "गाँव"
    },
    aboutMe: {
      ENG: "About Me",
      HI: "मेरे बारे में"
    },
    diet: {
      ENG: "Diet",
      HI: "आहार"
    },
    profileFor: {
      ENG: "Profile For",
      HI: "प्रोफाइल किसके लिए"
    },
    interests: {
      ENG: "Interests",
      HI: "रुचियाँ"
    }
  };

  // Load user data when component mounts
  useEffect(() => {
    if (userData) {
      setFormData({
        firstName: userData.firstName || '',
        lastName: userData.lastName || '',
        dateOfBirth: userData.dateOfBirth || '',
        gender: userData.gender || '',
        mobileNumber: userData.mobileNumber || '',
        email: userData.email || '',
        height: userData.height || '',
        maritalStatus: userData.maritalStatus || '',
        religion: userData.religion || '',
        community: userData.community || '',
        qualification: userData.qualification || '',
        occupation: userData.occupation || '',
        employmentType: userData.employmentType || '',
        incomeRange: userData.incomeRange || '',
        city: userData.city || '',
        state: userData.state || '',
        village: userData.village || '',
        aboutMe: userData.aboutMe || '',
        diet: userData.diet || '',
        profileFor: userData.profileFor || 'MySelf',
        interests: userData.interests || [],
        galleryPhotos: userData.galleryPhotos || []
      });
    }
  }, [userData]);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Add gallery photos
  const addGalleryPhotos = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        Alert.alert("Permission required", "Permission to access camera roll is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.7,
        allowsMultipleSelection: true,
        selectionLimit: 6 - formData.galleryPhotos.length
      });

      if (!result.canceled) {
        setUploadingGallery(true);
        const newPhotos = [];
        
        for (const asset of result.assets) {
          const response = await fetch(asset.uri);
          const blob = await response.blob();
          
          const fileName = `gallery_${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
          const storageRef = ref(storage, `users/${user.id}/gallery/${fileName}`);
          
          await uploadBytes(storageRef, blob);
          const downloadURL = await getDownloadURL(storageRef);
          newPhotos.push(downloadURL);
        }
        
        const updatedGallery = [...formData.galleryPhotos, ...newPhotos];
        setFormData(prev => ({ ...prev, galleryPhotos: updatedGallery }));
        
        // Update in Firebase
        await updateUserProfile({ galleryPhotos: updatedGallery });
        Alert.alert("Success", "Photos added to gallery!");
      }
    } catch (error) {
      console.error("Error adding gallery photos:", error);
      Alert.alert("Error", "Failed to add photos to gallery");
    } finally {
      setUploadingGallery(false);
    }
  };

  // Remove gallery photo
  const removeGalleryPhoto = async (index) => {
    try {
      const photoUrl = formData.galleryPhotos[index];
      const updatedGallery = formData.galleryPhotos.filter((_, i) => i !== index);
      
      setFormData(prev => ({ ...prev, galleryPhotos: updatedGallery }));
      
      // Delete from Firebase Storage
      try {
        const photoRef = ref(storage, photoUrl);
        await deleteObject(photoRef);
      } catch (error) {
        console.warn("Could not delete photo from storage:", error);
      }
      
      // Update in Firebase
      await updateUserProfile({ galleryPhotos: updatedGallery });
      Alert.alert("Success", "Photo removed from gallery!");
    } catch (error) {
      console.error("Error removing gallery photo:", error);
      Alert.alert("Error", "Failed to remove photo from gallery");
    }
  };

  // Save profile changes
  const handleSave = async () => {
    try {
      setLoading(true);
      await updateUserProfile(formData);
      Alert.alert("Success", "Profile updated successfully!");
      router.back();
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  // Render gallery item
  const renderGalleryItem = ({ item, index }) => (
    <View style={styles.galleryItem}>
      <Image source={{ uri: item }} style={styles.galleryImage} />
      <TouchableOpacity 
        style={styles.removeButton}
        onPress={() => removeGalleryPhoto(index)}
      >
        <Ionicons name="close-circle" size={24} color="#FF6B6B" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{translations.editProfile[language]}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        {/* Gallery Photos Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{translations.galleryPhotos[language]}</Text>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => setGalleryModalVisible(true)}
              disabled={formData.galleryPhotos.length >= 6}
            >
              <Text style={styles.addButtonText}>+ {translations.addPhotos[language]}</Text>
            </TouchableOpacity>
          </View>
          
          {formData.galleryPhotos.length > 0 ? (
            <FlatList
              data={formData.galleryPhotos}
              renderItem={renderGalleryItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.galleryContainer}
            />
          ) : (
            <View style={styles.emptyGallery}>
              <Ionicons name="images" size={40} color="#ccc" />
              <Text style={styles.emptyGalleryText}>No photos added yet</Text>
            </View>
          )}
        </View>

        {/* Personal Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.personalInfo[language]}</Text>
          
          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.firstName[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.firstName}
                onChangeText={(text) => handleInputChange('firstName', text)}
                placeholder={translations.firstName[language]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.lastName[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.lastName}
                onChangeText={(text) => handleInputChange('lastName', text)}
                placeholder={translations.lastName[language]}
              />
            </View>
          </View>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.dateOfBirth[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.dateOfBirth}
                onChangeText={(text) => handleInputChange('dateOfBirth', text)}
                placeholder="DD/MM/YYYY"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.gender[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.gender}
                onChangeText={(text) => handleInputChange('gender', text)}
                placeholder={translations.gender[language]}
              />
            </View>
          </View>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.mobileNumber[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.mobileNumber}
                onChangeText={(text) => handleInputChange('mobileNumber', text)}
                placeholder={translations.mobileNumber[language]}
                keyboardType="phone-pad"
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.email[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
                placeholder={translations.email[language]}
                keyboardType="email-address"
                editable={false}
              />
            </View>
          </View>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.height[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.height}
                onChangeText={(text) => handleInputChange('height', text)}
                placeholder={translations.height[language]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.maritalStatus[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.maritalStatus}
                onChangeText={(text) => handleInputChange('maritalStatus', text)}
                placeholder={translations.maritalStatus[language]}
              />
            </View>
          </View>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.religion[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.religion}
                onChangeText={(text) => handleInputChange('religion', text)}
                placeholder={translations.religion[language]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.community[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.community}
                onChangeText={(text) => handleInputChange('community', text)}
                placeholder={translations.community[language]}
              />
            </View>
          </View>
        </View>

        {/* Professional Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.professionalInfo[language]}</Text>
          
          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.qualification[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.qualification}
                onChangeText={(text) => handleInputChange('qualification', text)}
                placeholder={translations.qualification[language]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.occupation[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.occupation}
                onChangeText={(text) => handleInputChange('occupation', text)}
                placeholder={translations.occupation[language]}
              />
            </View>
          </View>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.employmentType[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.employmentType}
                onChangeText={(text) => handleInputChange('employmentType', text)}
                placeholder={translations.employmentType[language]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.incomeRange[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.incomeRange}
                onChangeText={(text) => handleInputChange('incomeRange', text)}
                placeholder={translations.incomeRange[language]}
              />
            </View>
          </View>
        </View>

        {/* Location Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.locationInfo[language]}</Text>
          
          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.city[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.city}
                onChangeText={(text) => handleInputChange('city', text)}
                placeholder={translations.city[language]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.state[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.state}
                onChangeText={(text) => handleInputChange('state', text)}
                placeholder={translations.state[language]}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.village[language]}</Text>
            <TextInput
              style={styles.input}
              value={formData.village}
              onChangeText={(text) => handleInputChange('village', text)}
              placeholder={translations.village[language]}
            />
          </View>
        </View>

        {/* About You */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.aboutYou[language]}</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.aboutMe[language]}</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.aboutMe}
              onChangeText={(text) => handleInputChange('aboutMe', text)}
              placeholder={translations.aboutMe[language]}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.diet[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.diet}
                onChangeText={(text) => handleInputChange('diet', text)}
                placeholder={translations.diet[language]}
              />
            </View>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.profileFor[language]}</Text>
              <TextInput
                style={styles.input}
                value={formData.profileFor}
                onChangeText={(text) => handleInputChange('profileFor', text)}
                placeholder={translations.profileFor[language]}
              />
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[styles.button, styles.cancelButton]}
            onPress={() => router.back()}
          >
            <Text style={styles.cancelButtonText}>{translations.cancel[language]}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.saveButton]}
            onPress={handleSave}
            disabled={loading}
          >
            <Text style={styles.saveButtonText}>
              {loading ? "Saving..." : translations.save[language]}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Gallery Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={galleryModalVisible}
        onRequestClose={() => setGalleryModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{translations.galleryPhotos[language]}</Text>
              <TouchableOpacity onPress={() => setGalleryModalVisible(false)}>
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.modalSubtitle}>
              {formData.galleryPhotos.length}/6 photos added
            </Text>
            
            <TouchableOpacity 
              style={[styles.modalButton, formData.galleryPhotos.length >= 6 && styles.disabledButton]}
              onPress={addGalleryPhotos}
              disabled={formData.galleryPhotos.length >= 6 || uploadingGallery}
            >
              {uploadingGallery ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.modalButtonText}>
                  {translations.addPhotos[language]}
                </Text>
              )}
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.cancelModalButton]}
              onPress={() => setGalleryModalVisible(false)}
            >
              <Text style={styles.cancelModalButtonText}>{translations.cancel[language]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 15,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  galleryContainer: {
    paddingVertical: 10,
  },
  galleryItem: {
    position: 'relative',
    marginRight: 10,
  },
  galleryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  emptyGallery: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    borderStyle: 'dashed',
  },
  emptyGalleryText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  saveButton: {
    backgroundColor: '#FF6B6B',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FF6B6B',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelModalButton: {
    backgroundColor: '#f0f0f0',
  },
  cancelModalButtonText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },
});