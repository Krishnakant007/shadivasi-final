// app/EditPartnerPreference.jsx
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from './context/LanguageContext';
import { useFirestore } from './hooks/useFirebase';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';

// Import constants
import { Height } from '../constant/Info';
import { MaritalStatus } from '../constant/Info';
import { Diet } from '../constant/Info';
import { Religions } from '../constant/Info';
import { occupationList } from '../constant/Info';
import { Income } from '../constant/Info';
import { WorkDetails } from '../constant/Info';
import { Qualification } from '../constant/Info';
import { indianStates } from '../constant/Info';

export default function EditPartnerPreference() {
  const { language } = useLanguage();
  const { userData, updateUserProfile } = useFirestore();
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    preferredAgeMin: '',
    preferredAgeMax: '',
    preferredHeightMin: '',
    preferredHeightMax: '',
    preferredMaritalStatus: '',
    preferredPhysicalStatus: 'Normal',
    preferredDiet: '',
    preferredSmoking: 'Doesn\'t Matter',
    preferredDrinking: 'Doesn\'t Matter',
    preferredReligion: '',
    preferredOccupation: '',
    preferredIncome: '',
    preferredEmploymentType: '',
    preferredEducation: '',
    preferredState: ''
  });

  const [loading, setLoading] = useState(false);

  // Translations
  const translations = {
    editPartnerPreference: {
      ENG: "Edit Partner Preference",
      HI: "पार्टनर प्राथमिकता संपादित करें"
    },
    save: {
      ENG: "Save Preferences",
      HI: "प्राथमिकताएं सहेजें"
    },
    cancel: {
      ENG: "Cancel",
      HI: "रद्द करें"
    },
    basicDetails: {
      ENG: "Basic Details",
      HI: "मूल विवरण"
    },
    lifestyle: {
      ENG: "Lifestyle",
      HI: "जीवनशैली"
    },
    religiousDetails: {
      ENG: "Religious Details",
      HI: "धार्मिक विवरण"
    },
    professionalDetails: {
      ENG: "Professional Details",
      HI: "पेशेवर विवरण"
    },
    locationDetails: {
      ENG: "Location Details",
      HI: "स्थान विवरण"
    },
    age: {
      ENG: "Age",
      HI: "आयु"
    },
    to: {
      ENG: "to",
      HI: "से"
    },
    height: {
      ENG: "Height",
      HI: "ऊंचाई"
    },
    maritalStatus: {
      ENG: "Marital Status",
      HI: "वैवाहिक स्थिति"
    },
    physicalStatus: {
      ENG: "Physical Status",
      HI: "शारीरिक स्थिति"
    },
    eatingHabits: {
      ENG: "Eating Habits",
      HI: "खाने की आदतें"
    },
    smokingHabits: {
      ENG: "Smoking Habits",
      HI: "धूम्रपान की आदतें"
    },
    drinkingHabits: {
      ENG: "Drinking Habits",
      HI: "शराब पीने की आदतें"
    },
    religion: {
      ENG: "Religion",
      HI: "धर्म"
    },
    occupation: {
      ENG: "Occupation",
      HI: "पेशा"
    },
    annualIncome: {
      ENG: "Annual Income",
      HI: "वार्षिक आय"
    },
    employmentType: {
      ENG: "Employment Type",
      HI: "रोजगार का प्रकार"
    },
    education: {
      ENG: "Education",
      HI: "शिक्षा"
    },
    state: {
      ENG: "State",
      HI: "राज्य"
    },
    whatWeAreLookingFor: {
      ENG: "What we are looking for",
      HI: "हम क्या ढूंढ रहे हैं"
    }
  };

  // Load user data when component mounts
  useEffect(() => {
    if (userData) {
      setFormData({
        preferredAgeMin: userData.preferredAgeMin || '',
        preferredAgeMax: userData.preferredAgeMax || '',
        preferredHeightMin: userData.preferredHeightMin || '',
        preferredHeightMax: userData.preferredHeightMax || '',
        preferredMaritalStatus: userData.preferredMaritalStatus || '',
        preferredPhysicalStatus: userData.preferredPhysicalStatus || 'Normal',
        preferredDiet: userData.preferredDiet || '',
        preferredSmoking: userData.preferredSmoking || 'Doesn\'t Matter',
        preferredDrinking: userData.preferredDrinking || 'Doesn\'t Matter',
        preferredReligion: userData.preferredReligion || '',
        preferredOccupation: userData.preferredOccupation || '',
        preferredIncome: userData.preferredIncome || '',
        preferredEmploymentType: userData.preferredEmploymentType || '',
        preferredEducation: userData.preferredEducation || '',
        preferredState: userData.preferredState || ''
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

  // Save preferences
  const handleSave = async () => {
    try {
      setLoading(true);
      await updateUserProfile(formData);
      Alert.alert("Success", "Partner preferences updated successfully!");
      router.back();
    } catch (error) {
      console.error("Error updating preferences:", error);
      Alert.alert("Error", "Failed to update preferences");
    } finally {
      setLoading(false);
    }
  };

  // Prepare options for pickers
  const ageOptions = Array.from({ length: 53 }, (_, i) => ({
    label: `${i + 18} yrs`,
    value: (i + 18).toString()
  }));

  const heightOptions = Height.map(item => ({
    label: item.heightInFeet,
    value: item.heightInFeet
  }));

  const maritalStatusOptions = MaritalStatus.map(status => ({
    label: status,
    value: status
  }));

  const physicalStatusOptions = [
    { label: 'Normal', value: 'Normal' },
    { label: 'Physically Challenged', value: 'Physically Challenged' }
  ];

  const dietOptions = Diet.map(diet => ({
    label: diet,
    value: diet
  }));

  const smokingOptions = [
    { label: 'Doesn\'t Matter', value: 'Doesn\'t Matter' },
    { label: 'No', value: 'No' },
    { label: 'Yes - Daily', value: 'Daily' },
    { label: 'Yes - Weekly', value: 'Weekly' },
    { label: 'Yes - Monthly', value: 'Monthly' }
  ];

  const drinkingOptions = [
    { label: 'Doesn\'t Matter', value: 'Doesn\'t Matter' },
    { label: 'No', value: 'No' },
    { label: 'Yes - Daily', value: 'Daily' },
    { label: 'Yes - Weekly', value: 'Weekly' },
    { label: 'Yes - Monthly', value: 'Monthly' }
  ];

  const religionOptions = Religions.map(religion => ({
    label: religion,
    value: religion
  }));

  const occupationOptions = occupationList.map(occupation => ({
    label: occupation,
    value: occupation
  }));

  const incomeOptions = Income.map(income => ({
    label: income,
    value: income
  }));

  const employmentOptions = WorkDetails.map(work => ({
    label: work,
    value: work
  }));

  const educationOptions = Qualification.map(qualification => ({
    label: qualification,
    value: qualification
  }));

  const stateOptions = indianStates.map(state => ({
    label: state,
    value: state
  }));

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{translations.editPartnerPreference[language]}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        {/* Basic Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.basicDetails[language]}</Text>
          
          {/* Age Range */}
          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.age[language]}</Text>
              <View style={styles.ageContainer}>
                <RNPickerSelect
                  onValueChange={(value) => handleInputChange('preferredAgeMin', value)}
                  items={ageOptions}
                  value={formData.preferredAgeMin}
                  placeholder={{ label: 'Min', value: null }}
                  style={pickerSelectStyles}
                />
                <Text style={styles.toText}>{translations.to[language]}</Text>
                <RNPickerSelect
                  onValueChange={(value) => handleInputChange('preferredAgeMax', value)}
                  items={ageOptions}
                  value={formData.preferredAgeMax}
                  placeholder={{ label: 'Max', value: null }}
                  style={pickerSelectStyles}
                />
              </View>
            </View>
          </View>

          {/* Height Range */}
          <View style={styles.formRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{translations.height[language]}</Text>
              <View style={styles.ageContainer}>
                <RNPickerSelect
                  onValueChange={(value) => handleInputChange('preferredHeightMin', value)}
                  items={heightOptions}
                  value={formData.preferredHeightMin}
                  placeholder={{ label: 'Min', value: null }}
                  style={pickerSelectStyles}
                />
                <Text style={styles.toText}>{translations.to[language]}</Text>
                <RNPickerSelect
                  onValueChange={(value) => handleInputChange('preferredHeightMax', value)}
                  items={heightOptions}
                  value={formData.preferredHeightMax}
                  placeholder={{ label: 'Max', value: null }}
                  style={pickerSelectStyles}
                />
              </View>
            </View>
          </View>

          {/* Marital Status */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.maritalStatus[language]} (Compulsory)</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredMaritalStatus', value)}
              items={maritalStatusOptions}
              value={formData.preferredMaritalStatus}
              placeholder={{ label: 'Select Marital Status', value: null }}
              style={pickerSelectStyles}
            />
          </View>

          {/* Physical Status */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.physicalStatus[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredPhysicalStatus', value)}
              items={physicalStatusOptions}
              value={formData.preferredPhysicalStatus}
              placeholder={{ label: 'Select Physical Status', value: null }}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        {/* Lifestyle */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.lifestyle[language]}</Text>
          
          {/* Diet */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.eatingHabits[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredDiet', value)}
              items={dietOptions}
              value={formData.preferredDiet}
              placeholder={{ label: 'Select Diet', value: null }}
              style={pickerSelectStyles}
            />
          </View>

          {/* Smoking */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.smokingHabits[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredSmoking', value)}
              items={smokingOptions}
              value={formData.preferredSmoking}
              placeholder={{ label: 'Select Smoking Habits', value: null }}
              style={pickerSelectStyles}
            />
          </View>

          {/* Drinking */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.drinkingHabits[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredDrinking', value)}
              items={drinkingOptions}
              value={formData.preferredDrinking}
              placeholder={{ label: 'Select Drinking Habits', value: null }}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        {/* Religious Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.religiousDetails[language]}</Text>
          
          {/* Religion */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.religion[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredReligion', value)}
              items={religionOptions}
              value={formData.preferredReligion}
              placeholder={{ label: 'Select Religion', value: null }}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        {/* Professional Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.professionalDetails[language]}</Text>
          
          {/* Occupation */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.occupation[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredOccupation', value)}
              items={occupationOptions}
              value={formData.preferredOccupation}
              placeholder={{ label: 'Select Occupation', value: null }}
              style={pickerSelectStyles}
            />
          </View>

          {/* Income */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.annualIncome[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredIncome', value)}
              items={incomeOptions}
              value={formData.preferredIncome}
              placeholder={{ label: 'Select Income', value: null }}
              style={pickerSelectStyles}
            />
          </View>

          {/* Employment Type */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.employmentType[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredEmploymentType', value)}
              items={employmentOptions}
              value={formData.preferredEmploymentType}
              placeholder={{ label: 'Select Employment Type', value: null }}
              style={pickerSelectStyles}
            />
          </View>

          {/* Education */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.education[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredEducation', value)}
              items={educationOptions}
              value={formData.preferredEducation}
              placeholder={{ label: 'Select Education', value: null }}
              style={pickerSelectStyles}
            />
          </View>
        </View>

        {/* Location Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.locationDetails[language]}</Text>
          
          {/* State */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{translations.state[language]}</Text>
            <RNPickerSelect
              onValueChange={(value) => handleInputChange('preferredState', value)}
              items={stateOptions}
              value={formData.preferredState}
              placeholder={{ label: 'Select State', value: null }}
              style={pickerSelectStyles}
            />
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  formRow: {
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  ageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toText: {
    marginHorizontal: 10,
    color: '#666',
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
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});