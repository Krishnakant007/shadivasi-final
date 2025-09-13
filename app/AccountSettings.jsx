// app/AccountSettings.jsx
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert, Switch } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from './context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AccountSettings() {
  const { language } = useLanguage();
  const router = useRouter();
  
  const [isAccountDeactivated, setIsAccountDeactivated] = useState(false);
  const [callPreferences, setCallPreferences] = useState({
    voiceCalls: true,
    videoCalls: false,
    whatsappCalls: true
  });

  // Translations
  const translations = {
    accountSettings: {
      ENG: "Account Settings",
      HI: "खाता सेटिंग्स"
    },
    blockedProfiles: {
      ENG: "Blocked Profiles",
      HI: "ब्लॉक किए गए प्रोफाइल"
    },
    ignoredProfiles: {
      ENG: "Ignored Profiles",
      HI: "नजरअंदाज किए गए प्रोफाइल"
    },
    callPreferences: {
      ENG: "Call Preferences",
      HI: "कॉल प्राथमिकताएं"
    },
    deactivateAccount: {
      ENG: "Deactivate/Hide Account",
      HI: "खाता निष्क्रिय/छुपाएं"
    },
    deactivateDescription: {
      ENG: "Want to take a small break from Matchmaking? Deactivate your profile. You can view other profiles but cannot contact them while other members cannot view or contact you.",
      HI: "मैचमेकिंग से थोड़ा ब्रेक लेना चाहते हैं? अपनी प्रोफाइल को निष्क्रिय करें। आप अन्य प्रोफाइल देख सकते हैं लेकिन उनसे संपर्क नहीं कर सकते, जबकि अन्य सदस्य आपको देख या संपर्क नहीं कर सकते।"
    },
    deactivateProfile: {
      ENG: "Deactivate Profile",
      HI: "प्रोफाइल निष्क्रिय करें"
    },
    activateProfile: {
      ENG: "Activate Profile",
      HI: "प्रोफाइल सक्रिय करें"
    },
    voiceCalls: {
      ENG: "Voice Calls",
      HI: "वॉयस कॉल"
    },
    videoCalls: {
      ENG: "Video Calls",
      HI: "वीडियो कॉल"
    },
    whatsappCalls: {
      ENG: "WhatsApp Calls",
      HI: "व्हाट्सएप कॉल"
    },
    view: {
      ENG: "View",
      HI: "देखें"
    }
  };

  const toggleAccountStatus = () => {
    setIsAccountDeactivated(!isAccountDeactivated);
    Alert.alert(
      isAccountDeactivated ? "Profile Activated" : "Profile Deactivated",
      isAccountDeactivated 
        ? "Your profile is now active and visible to other members." 
        : "Your profile is now deactivated and hidden from other members."
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{translations.accountSettings[language]}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        {/* Blocked Profiles */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Ionicons name="ban" size={24} color="#FF6B6B" />
            <Text style={styles.menuItemText}>{translations.blockedProfiles[language]}</Text>
          </View>
          <Text style={styles.viewText}>{translations.view[language]}</Text>
        </TouchableOpacity>

        {/* Ignored Profiles */}
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemContent}>
            <Ionicons name="eye-off" size={24} color="#FF6B6B" />
            <Text style={styles.menuItemText}>{translations.ignoredProfiles[language]}</Text>
          </View>
          <Text style={styles.viewText}>{translations.view[language]}</Text>
        </TouchableOpacity>

        {/* Call Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.callPreferences[language]}</Text>
          
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceText}>{translations.voiceCalls[language]}</Text>
            <Switch
              value={callPreferences.voiceCalls}
              onValueChange={(value) => setCallPreferences(prev => ({ ...prev, voiceCalls: value }))}
              trackColor={{ false: '#767577', true: '#FF6B6B' }}
              thumbColor={callPreferences.voiceCalls ? '#fff' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceText}>{translations.videoCalls[language]}</Text>
            <Switch
              value={callPreferences.videoCalls}
              onValueChange={(value) => setCallPreferences(prev => ({ ...prev, videoCalls: value }))}
              trackColor={{ false: '#767577', true: '#FF6B6B' }}
              thumbColor={callPreferences.videoCalls ? '#fff' : '#f4f3f4'}
            />
          </View>
          
          <View style={styles.preferenceItem}>
            <Text style={styles.preferenceText}>{translations.whatsappCalls[language]}</Text>
            <Switch
              value={callPreferences.whatsappCalls}
              onValueChange={(value) => setCallPreferences(prev => ({ ...prev, whatsappCalls: value }))}
              trackColor={{ false: '#767577', true: '#FF6B6B' }}
              thumbColor={callPreferences.whatsappCalls ? '#fff' : '#f4f3f4'}
            />
          </View>
        </View>

        {/* Deactivate Account */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.deactivateAccount[language]}</Text>
          <Text style={styles.deactivateDescription}>
            {translations.deactivateDescription[language]}
          </Text>
          
          <TouchableOpacity 
            style={[styles.deactivateButton, isAccountDeactivated && styles.activateButton]}
            onPress={toggleAccountStatus}
          >
            <Text style={styles.deactivateButtonText}>
              {isAccountDeactivated 
                ? translations.activateProfile[language] 
                : translations.deactivateProfile[language]
              }
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
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 15,
  },
  viewText: {
    color: '#FF6B6B',
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  preferenceText: {
    fontSize: 16,
  },
  deactivateDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  deactivateButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  activateButton: {
    backgroundColor: '#06D6A0',
  },
  deactivateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});