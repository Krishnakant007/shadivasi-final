// app/TermsAndConditions.jsx
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from './context/LanguageContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function TermsAndConditions() {
  const { language } = useLanguage();
  const router = useRouter();

  // Translations
  const translations = {
    termsAndConditions: {
      ENG: "Terms & Conditions",
      HI: "नियम और शर्तें"
    },
    privacyPolicy: {
      ENG: "Privacy Policy",
      HI: "गोपनीयता नीति"
    },
    // Add more translations as needed
  };

  const englishTerms = `
Welcome to Shaadivasi.in (hereinafter referred to as the "App" / "Platform" / "Service").
These Terms and Conditions ("T&C") govern the use of the App, including all features, functionalities, content, and services provided therein.

By accessing, registering on, or using Shaadivasi.in, you agree to be bound by these Terms.
If you do not agree, you must refrain from using the App.
We strongly advise you to read these Terms carefully and review them periodically, as they may be updated from time to time.

Eligibility
1.1 Minimum Age Requirement
To use Shaadivasi.in, a user must be at least 18 years of age as per the Indian Majority Act.

Any registration by a person under the age of 18 is strictly prohibited and shall be treated as invalid.
The App reserves the right to verify the age of any user and to immediately terminate accounts of underage users.

1.2 Legal Competency to Marry
Only individuals who are legally permitted to marry under Indian laws are eligible to register.
This includes, but is not limited to, the following laws:
• Hindu Marriage Act, 1955
• Special Marriage Act, 1954
• Prohibition of Child Marriage Act, 2006
• Indian Christian Marriage Act, 1872
• Parsi Marriage and Divorce Act, 1936
• Muslim Personal Law (Shariat) Application Act, 1937

Users must ensure they are:
• Not already married, unless permitted by their personal law.
• Of sound mind and capable of understanding the nature of marriage.
• Free from any legal disability or court orders disqualifying them from marriage.

1.3 Accuracy of Information
During registration, users must provide true, accurate, current, and complete information.
Providing false, misleading, or incomplete details (such as hiding marital status, existing relationships, criminal history, or serious medical conditions) shall constitute a breach of these Terms and may result in termination of the account without refund, as well as possible legal action.

1.4 User Representation
By registering, the user represents and warrants that:
• They meet all legal requirements for marriage.
• The information they provide is authentic and verifiable.
• They are using the App exclusively for matrimonial purposes.
Shaadivasi.in shall not be responsible for any false declarations made by users.
The responsibility for verifying eligibility lies solely with the users themselves.

[Additional terms continue...]
  `;

  const hindiTerms = `
Shaadivasi.in में आपका स्वागत है (आगे इसे "ऐप" / "प्लेटफ़ॉर्म" "सेवा" कहा जाएगा)।
ये नियम और शर्तें ("T&C") इस ऐप के उपयोग को नियंत्रित करती हैं, जिसमें सभी फीचर्स, कार्यक्षमताएँ, सामग्री और प्रदान की गई सेवाएँ शामिल हैं।

Shaadivasi.in का उपयोग, पंजीकरण या एक्सेस करके, आप इन शर्तों से बंधे होने के लिए सहमत होते हैं।
यदि आप सहमत नहीं हैं, तो आपको इस ऐप का उपयोग करने से बचना चाहिए।
हम आपको दृढ़ता से सलाह देते हैं कि आप इन शर्तों को ध्यानपूर्वक पढ़ें और समय-समय पर उनकी समीक्षा करें, क्योंकि इनमें समय-समय पर अपडेट किए जा सकते हैं।

पात्रता (Eligibility)
1.1 न्यूनतम आयु आवश्यकता
Shaadivasi.in का उपयोग करने के लिए, उपयोगकर्ता की आयु भारतीय प्रौढ़ता अधिनियम, 1875 के अनुसार कम से कम 18 वर्ष होनी चाहिए।

18 वर्ष से कम आयु वाले व्यक्ति द्वारा कोई भी पंजीकरण सख्ती से निषिद्ध है और अमान्य माना जाएगा।
ऐप को किसी भी उपयोगकर्ता की आयु सत्यापित करने और नाबालिग उपयोगकर्ताओं के खाते तुरंत समाप्त करने का अधिकार है।

1.2 विवाह के लिए कानूनी योग्यता
केवल वही व्यक्ति पंजीकरण कर सकते हैं जिन्हें भारतीय कानूनों के अंतर्गत विवाह करने की अनुमति है।
इसमें, लेकिन केवल इन्हीं तक सीमित नहीं, निम्नलिखित कानून शामिल हैं:
• हिंदू विवाह अधिनियम, 1955
• विशेष विवाह अधिनियम, 1954
• बाल विवाह निषेध अधिनियम, 2006
• भारतीय ईसाई विवाह अधिनियम, 1872
• पारसी विवाह और तलाक अधिनियम, 1936
• मुस्लिम व्यक्तिगत कानून (शरीयत) अधिनियम, 1937

उपयोगकर्ताओं को यह सुनिश्चित करना होगा कि वेः
• पहले से विवाहित न हों (जब तक कि उनके निजी कानून द्वारा अनुमति न हो)।
• स्वस्थ मस्तिष्क के हों और विवाह की प्रकृति को समझने में सक्षम हों।
• किसी भी कानूनी अक्षमता या अदालत के आदेश से विवाह करने से वंचित न हों।

1.3 जानकारी की सटीकता
पंजीकरण के दौरान, उपयोगकर्ताओं को सच्ची, सही, वर्तमान और पूर्ण जानकारी प्रदान करनी होगी।
झूठी, भ्रामक या अधूरी जानकारी (जैसे वैवाहिक स्थिति छिपाना, पहले से मौजूद संबंध, आपराधिक इतिहास, गंभीर चिकित्सीय स्थितियाँ) देना इन शर्तों का उल्लंघन होगा और इसके परिणामस्वरूप खाते का समापन (बिना रिफंड) तथा कानूनी कार्रवाई हो सकती है।

1.4 उपयोगकर्ता की घोषणा
पंजीकरण करके, उपयोगकर्ता यह प्रतिनिधित्व और आश्वासन देता है किः
• वह विवाह के लिए सभी कानूनी आवश्यकताओं को पूरा करता /करती है।
• प्रदान की गई जानकारी वास्तविक और सत्यापन योग्य है।
• वह इस ऐप का उपयोग केवल वैवाहिक उद्देश्यों के लिए कर रहा/रही है।
Shaadivasi.in किसी भी उपयोगकर्ता द्वारा की गई झूठी घोषणाओं के लिए जिम्मेदार नहीं होगा।
पात्रता सत्यापित करने की जिम्मेदारी केवल उपयोगकर्ताओं की है।

[अतिरिक्त नियम जारी...]
  `;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{translations.termsAndConditions[language]}</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.termsText}>
          {language === 'HI' ? hindiTerms : englishTerms}
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
  termsText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
  },
});