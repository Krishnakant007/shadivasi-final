// app/PrivacyPolicy.jsx
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from './context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const router = useRouter();

  // Translations
  const translations = {
    privacyPolicy: {
      ENG: "Privacy Policy",
      HI: "गोपनीयता नीति"
    }
  };

  const englishPolicy = `
Privacy Policy for Shaadivasi.in

Last Updated: [Date]

At Shaadivasi.in, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our matrimonial services.

1. Information We Collect
We collect information that you provide directly to us, including:
- Personal details (name, age, gender, date of birth)
- Contact information (email address, phone number)
- Profile information (photos, preferences, lifestyle details)
- Professional and educational background
- Family information
- Communication preferences

2. How We Use Your Information
We use your information to:
- Provide and personalize our matrimonial services
- Facilitate matches based on your preferences
- Communicate with you about potential matches and service updates
- Improve our services and user experience
- Ensure the security and integrity of our platform

3. Information Sharing
We may share your information with:
- Other registered users as part of our matchmaking services
- Service providers who assist in operating our platform
- Legal authorities when required by law
- We do not sell your personal information to third parties

4. Data Security
We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.

5. Your Rights
You have the right to:
- Access and update your personal information
- Delete your account and personal data
- Opt-out of certain communications
- Request information about how your data is used

6. Cookies and Tracking
We use cookies and similar technologies to enhance your experience and analyze platform usage.

7. Changes to This Policy
We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.

8. Contact Us
If you have any questions about this Privacy Policy, please contact us at [contact email/phone].

By using Shaadivasi.in, you consent to the practices described in this Privacy Policy.
  `;

  const hindiPolicy = `
Shaadivasi.in के लिए गोपनीयता नीति

अंतिम अद्यतन: [तारीख]

Shaadivasi.in पर, हम आपकी गोपनीयता की रक्षा करने और आपकी व्यक्तिगत जानकारी की सुरक्षा सुनिश्चित करने के लिए प्रतिबद्ध हैं। यह गोपनीयता नीति बताती है कि हम आपकी वैवाहिक सेवाओं का उपयोग करते समय आपकी जानकारी को कैसे एकत्र, उपयोग, प्रकट और सुरक्षित करते हैं।

1. जानकारी जो हम एकत्र करते हैं
हम वह जानकारी एकत्र करते हैं जो आप सीधे हमें प्रदान करते हैं, जिसमें शामिल है:
- व्यक्तिगत विवरण (नाम, आयु, लिंग, जन्म तिथि)
- संपर्क जानकारी (ईमेल पता, फोन नंबर)
- प्रोफाइल जानकारी (फोटो, प्राथमिकताएं, जीवनशैली विवरण)
- पेशेवर और शैक्षिक पृष्ठभूमि
- परिवार की जानकारी
- संचार प्राथमिकताएं

2. हम आपकी जानकारी का उपयोग कैसे करते हैं
हम आपकी जानकारी का उपयोग करते हैं:
- हमारी वैवाहिक सेवाएं प्रदान करने और उन्हें व्यक्तिगत बनाने के लिए
- आपकी प्राथमिकताओं के आधार पर मैचों को सुविधाजनक बनाने के लिए
- संभावित मैचों और सेवा अपडेट के बारे में आपसे संवाद करने के लिए
- हमारी सेवाओं और उपयोगकर्ता अनुभव में सुधार करने के लिए
- हमारे प्लेटफ़ॉर्म की सुरक्षा और अखंडता सुनिश्चित करने के लिए

3. जानकारी साझा करना
हम आपकी जानकारी साझा कर सकते हैं:
- हमारी मैचमेकिंग सेवाओं के हिस्से के रूप में अन्य पंजीकृत उपयोगकर्ताओं के साथ
- सेवा प्रदाताओं के साथ जो हमारे प्लेटफ़ॉर्म को संचालित करने में सहायता करते हैं
- कानूनी अधिकारियों के साथ जब कानून द्वारा आवश्यक हो
- हम आपकी व्यक्तिगत जानकारी तृतीय पक्षों को नहीं बेचते हैं

4. डेटा सुरक्षा
हम आपकी व्यक्तिगत जानकारी को अनधिकृत पहुंच, परिवर्तन, प्रकटीकरण या विनाश से बचाने के लिए उचित सुरक्षा उपाय लागू करते हैं।

5. आपके अधिकार
आपको अधिकार है:
- अपनी व्यक्तिगत जानकारी तक पहुंचने और उसे अपडेट करने का
- अपना खाता और व्यक्तिगत डेटा हटाने का
- कुछ संचारों से ऑप्ट-आउट करने का
- अपने डेटा के उपयोग के बारे में जानकारी का अनुरोध करने का

6. कुकीज़ और ट्रैकिंग
हम आपके अनुभव को बढ़ाने और प्लेटफ़ॉर्म के उपयोग का विश्लेषण करने के लिए कुकीज़ और समान तकनीकों का उपयोग करते हैं।

7. इस नीति में परिवर्तन
हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। हम इस पृष्ठ पर नई नीति पोस्ट करके आपको किसी भी परिवर्तन के बारे में सूचित करेंगे।

8. हमसे संपर्क करें
यदि आपके पास इस गोपनीयता नीति के बारे में कोई प्रश्न हैं, तो कृपया [संपर्क ईमेल/फोन] पर हमसे संपर्क करें।

Shaadivasi.in का उपयोग करके, आप इस गोपनीयता नीति में वर्णित प्रथाओं से सहमत होते हैं।
  `;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{translations.privacyPolicy[language]}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.policyText}>
          {language === 'HI' ? hindiPolicy : englishPolicy}
        </Text>
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
  policyText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },
});