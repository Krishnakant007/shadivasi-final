// // // app/homescreens/info9.jsx
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
// // import React, { useState, useEffect, useRef } from 'react';
// // import { MaterialIcons } from '@expo/vector-icons';
// // import { useRouter } from 'expo-router';
// // import { useLanguage } from '../context/LanguageContext';

// // export default function Info9() {
// //   const router = useRouter();
// //   const { language, toggleLanguage } = useLanguage();
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
// //   const [isOtpSent, setIsOtpSent] = useState(false);
// //   const [countdown, setCountdown] = useState(30);
// //   const [isResendDisabled, setIsResendDisabled] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // Translations
// //   const translations = {
// //     title: {
// //       ENG: "Mobile Verification",
// //       HI: "मोबाइल सत्यापन"
// //     },
// //     subtitle: {
// //       ENG: "We'll send you a verification code",
// //       HI: "हम आपको एक सत्यापन कोड भेजेंगे"
// //     },
// //     enterMobile: {
// //       ENG: "Enter mobile number",
// //       HI: "मोबाइल नंबर दर्ज करें"
// //     },
// //     sendOtp: {
// //       ENG: "Send OTP",
// //       HI: "OTP भेजें"
// //     },
// //     otpSent: {
// //       ENG: "OTP sent to +91",
// //       HI: "OTP भेजा गया +91"
// //     },
// //     resendIn: {
// //       ENG: "Resend OTP in",
// //       HI: "OTP पुनः भेजें"
// //     },
// //     didntReceive: {
// //       ENG: "Didn't receive OTP?",
// //       HI: "OTP प्राप्त नहीं हुआ?"
// //     },
// //     resend: {
// //       ENG: "Resend",
// //       HI: "पुनः भेजें"
// //     },
// //     verify: {
// //       ENG: "Verify",
// //       HI: "सत्यापित करें"
// //     },
// //     success: {
// //       ENG: "Success",
// //       HI: "सफलता"
// //     },
// //     verified: {
// //       ENG: "Mobile number verified successfully!",
// //       HI: "मोबाइल नंबर सफलतापूर्वक सत्यापित!"
// //     },
// //     invalidNumber: {
// //       ENG: "Invalid Number",
// //       HI: "अमान्य नंबर"
// //     },
// //     validNumber: {
// //       ENG: "Please enter a valid 10-digit mobile number",
// //       HI: "कृपया एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
// //     },
// //     invalidOtp: {
// //       ENG: "Invalid OTP",
// //       HI: "अमान्य OTP"
// //     },
// //     completeOtp: {
// //       ENG: "Please enter the complete 6-digit OTP",
// //       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
// //     }
// //   };

// //   const otpInputRefs = useRef([]);

// //   useEffect(() => {
// //     let timer;
// //     if (countdown > 0 && isOtpSent) {
// //       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
// //     } else if (countdown === 0 && isOtpSent) {
// //       setIsResendDisabled(false);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [countdown, isOtpSent]);

// //   const handleSendOtp = () => {
// //     if (!mobileNumber || mobileNumber.length !== 10) {
// //       Alert.alert(
// //         translations.invalidNumber[language],
// //         translations.validNumber[language]
// //       );
// //       return;
// //     }
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsOtpSent(true);
// //       setIsResendDisabled(true);
// //       setCountdown(30);
// //       setIsLoading(false);
// //     }, 1000);
// //   };

// //   const handleResendOtp = () => {
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsResendDisabled(true);
// //       setCountdown(30);
// //       setIsLoading(false);
// //     }, 1000);
// //   };

// //   const handleVerifyOtp = () => {
// //     const enteredOtp = otp.join('');
// //     if (enteredOtp.length !== 6) {
// //       Alert.alert(
// //         translations.invalidOtp[language],
// //         translations.completeOtp[language]
// //       );
// //       return;
// //     }
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       Alert.alert(
// //         translations.success[language],
// //         translations.verified[language]
// //       );
// //       setIsLoading(false);
// //       router.replace('/(homescreens/info9)');
// //     }, 1500);
// //   };

// //   const handleOtpChange = (value, index) => {
// //     if (isNaN(value)) return;

// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);

// //     if (value && index < 5) {
// //       otpInputRefs.current[index + 1].focus();
// //     }
// //   };

// //   const handleKeyPress = (e, index) => {
// //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// //       otpInputRefs.current[index - 1].focus();
// //     }
// //   };

// //   return (
// //     <KeyboardAvoidingView
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //       style={styles.container}
// //     >
// //       {/* Language Toggle */}
// //       <View style={styles.languageToggleContainer}>
// //         <Text style={styles.languageLabel}>ENG</Text>
// //         <TouchableOpacity
// //           style={styles.toggleContainer}
// //           onPress={toggleLanguage}
// //           activeOpacity={0.8}
// //         >
// //           <View style={[
// //             styles.toggleButton,
// //             {
// //               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
// //               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
// //             }
// //           ]}>
// //             <Image
// //               source={language === 'ENG'
// //                 ? require('../../assets/uk-flag.png')
// //                 : require('../../assets/india-flag.png')}
// //               style={styles.flag}
// //             />
// //           </View>
// //         </TouchableOpacity>
// //         <Text style={styles.languageLabel}>हिंदी</Text>
// //       </View>

// //       <View style={styles.content}>
// //         <MaterialIcons name="verified-user" size={60} color="#7e57c2" style={styles.icon} />
// //         <Text style={styles.title}>{translations.title[language]}</Text>
// //         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

// //         {isLoading && (
// //           <View style={styles.loaderOverlay}>
// //             <ActivityIndicator size="large" color="#7e57c2" />
// //           </View>
// //         )}

// //         {!isOtpSent ? (
// //           <>
// //             {/* Mobile Number Input View */}
// //             <View style={styles.inputContainer}>
// //               <TextInput
// //                 style={styles.input}
// //                 placeholder={translations.enterMobile[language]}
// //                 keyboardType="phone-pad"
// //                 maxLength={10}
// //                 value={mobileNumber}
// //                 onChangeText={setMobileNumber}
// //               />
// //             </View>
// //             <TouchableOpacity
// //               style={styles.button}
// //               onPress={handleSendOtp}
// //               disabled={isLoading}
// //             >
// //               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
// //             </TouchableOpacity>
// //           </>
// //         ) : (
// //           <>
// //             {/* OTP Input View */}
// //             <Text style={styles.otpSentText}>
// //               {translations.otpSent[language]} {mobileNumber}
// //             </Text>
            
// //             <View style={styles.otpContainer}>
// //               {otp.map((digit, index) => (
// //                 <TextInput
// //                   ref={(ref) => (otpInputRefs.current[index] = ref)}
// //                   key={index}
// //                   style={styles.otpInput}
// //                   keyboardType="number-pad"
// //                   maxLength={1}
// //                   value={digit}
// //                   onChangeText={(value) => handleOtpChange(value, index)}
// //                   onKeyPress={(e) => handleKeyPress(e, index)}
// //                 />
// //               ))}
// //             </View>

// //             {/* Resend OTP Section */}
// //             <View style={styles.resendContainer}>
// //               <Text style={styles.countdownText}>
// //                 {countdown > 0
// //                   ? `${translations.resendIn[language]} ${countdown}s`
// //                   : translations.didntReceive[language]}
// //               </Text>
// //               <TouchableOpacity
// //                 onPress={handleResendOtp}
// //                 disabled={isResendDisabled || isLoading}
// //               >
// //                 <Text style={[
// //                   styles.resendText,
// //                   (isResendDisabled || isLoading) && styles.disabledResend
// //                 ]}>
// //                   {translations.resend[language]}
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>

// //             {/* Verify Button */}
// //             <TouchableOpacity
// //               style={[
// //                 styles.button,
// //                 styles.verifyButton,
// //                 otp.join('').length !== 6 && styles.disabledButton
// //               ]}
// //               onPress={handleVerifyOtp}
// //               disabled={otp.join('').length !== 6 || isLoading}
// //             >
// //               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
// //             </TouchableOpacity>
// //           </>
// //         )}
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //     justifyContent: 'center',
// //     paddingTop: 40,
// //   },
// //   languageToggleContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     paddingHorizontal: 20,
// //     marginBottom: 10,
// //     gap: 6,
// //   },
// //   languageLabel: {
// //     fontWeight: '600',
// //     fontSize: 14,
// //     color: '#495057',
// //   },
// //   toggleContainer: {
// //     width: 60,
// //     height: 28,
// //     borderRadius: 14,
// //     backgroundColor: '#E9ECEF',
// //     justifyContent: 'center',
// //     paddingHorizontal: 2,
// //   },
// //   toggleButton: {
// //     width: 24,
// //     height: 24,
// //     borderRadius: 12,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   flag: {
// //     width: 18,
// //     height: 13,
// //     borderRadius: 2,
// //   },
// //   content: {
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   loaderOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(255,255,255,0.7)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     zIndex: 1000,
// //   },
// //   icon: {
// //     marginBottom: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#333',
// //     marginBottom: 8,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#666',
// //     marginBottom: 30,
// //   },
// //   inputContainer: {
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     backgroundColor: 'white',
// //     padding: 15,
// //     borderRadius: 10,
// //     fontSize: 16,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //   },
// //   button: {
// //     backgroundColor: '#7e57c2',
// //     padding: 15,
// //     borderRadius: 10,
// //     width: '100%',
// //     alignItems: 'center',
// //   },
// //   disabledButton: {
// //     backgroundColor: '#b39ddb',
// //   },
// //   verifyButton: {
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: 'white',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   otpSentText: {
// //     color: '#666',
// //     marginBottom: 20,
// //   },
// //   otpContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '100%',
// //     maxWidth: 320,
// //     marginBottom: 20,
// //   },
// //   otpInput: {
// //     backgroundColor: 'white',
// //     width: 45,
// //     height: 50,
// //     borderRadius: 10,
// //     textAlign: 'center',
// //     fontSize: 18,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //   },
// //   resendContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   countdownText: {
// //     color: '#666',
// //     marginRight: 5,
// //   },
// //   resendText: {
// //     color: '#7e57c2',
// //     fontWeight: 'bold',
// //   },
// //   disabledResend: {
// //     color: '#b39ddb',
// //   },
// // });








// // // app/homescreens/info9.jsx
// // // app/homescreens/info9.jsx
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
// // import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
// // import React, { useState, useEffect, useRef } from 'react';
// // import React, { useState, useEffect, useRef } from 'react';
// // import { MaterialIcons } from '@expo/vector-icons';
// // import { useRouter } from 'expo-router';
// // import { useLanguage } from '../context/LanguageContext';
// // import { useProfile } from '../context/ProfileContext';

// // export default function Info9() {
// //   const router = useRouter();
// //   const { language, toggleLanguage } = useLanguage();
// //   const { profileFor, getPrefix } = useProfile();
// //   const [mobileNumber, setMobileNumber] = useState('');
// //   const [otp, setOtp] = useState(['', '', '', '', '', '']);
// //   const [isOtpSent, setIsOtpSent] = useState(false);
// //   const [countdown, setCountdown] = useState(30);
// //   const [isResendDisabled, setIsResendDisabled] = useState(true);
// //   const [isLoading, setIsLoading] = useState(false);

// //   // Translations
// //   const translations = {
// //     title: {
// //       ENG: `${getPrefix()} Mobile Verification`,
// //       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
// //           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
// //           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
// //           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
// //           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
// //           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
// //           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
// //           "आपके रिश्तेदार का मोबाइल सत्यापन"
// //     },
// //     subtitle: {
// //       ENG: "We'll send you a verification code",
// //       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
// //           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
// //           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
// //           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
// //           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
// //           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
// //           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
// //           "हम आपको एक सत्यापन कोड भेजेंगे"
// //     },
// //     enterMobile: {
// //       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
// //       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
// //           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
// //     },
// //     sendOtp: {
// //       ENG: "Send OTP",
// //       HI: "OTP भेजें"
// //     },
// //     otpSent: {
// //       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
// //       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
// //           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
// //           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
// //           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
// //           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
// //           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
// //           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
// //           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
// //     },
// //     resendIn: {
// //       ENG: "Resend OTP in",
// //       HI: "OTP पुनः भेजें"
// //     },
// //     didntReceive: {
// //       ENG: "Didn't receive OTP?",
// //       HI: "OTP प्राप्त नहीं हुआ?"
// //     },
// //     resend: {
// //       ENG: "Resend",
// //       HI: "पुनः भेजें"
// //     },
// //     verify: {
// //       ENG: "Verify",
// //       HI: "सत्यापित करें"
// //     },
// //     success: {
// //       ENG: "Success",
// //       HI: "सफलता"
// //     },
// //     verified: {
// //       ENG: `${getPrefix()} mobile number verified successfully!`,
// //       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
// //           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
// //           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
// //           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
// //           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
// //           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
// //           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
// //           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
// //     },
// //     invalidNumber: {
// //       ENG: "Invalid Number",
// //       HI: "अमान्य नंबर"
// //     },
// //     validNumber: {
// //       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
// //       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
// //           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
// //           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
// //     },
// //     invalidOtp: {
// //       ENG: "Invalid OTP",
// //       HI: "अमान्य OTP"
// //     },
// //     completeOtp: {
// //       ENG: "Please enter the complete 6-digit OTP",
// //       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
// //     }
// //   };

// //   const otpInputRefs = useRef([]);

// //   useEffect(() => {
// //     let timer;
// //     if (countdown > 0 && isOtpSent) {
// //       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
// //     } else if (countdown === 0 && isOtpSent) {
// //       setIsResendDisabled(false);
// //     }
// //     return () => clearTimeout(timer);
// //   }, [countdown, isOtpSent]);

// //   const handleSendOtp = () => {
// //     if (!mobileNumber || mobileNumber.length !== 10) {
// //       Alert.alert(
// //         translations.invalidNumber[language],
// //         translations.validNumber[language]
// //       );
// //       return;
// //     }
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsOtpSent(true);
// //       setIsResendDisabled(true);
// //       setCountdown(30);
// //       setIsLoading(false);
// //     }, 1000);
// //   };

// //   const handleResendOtp = () => {
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsResendDisabled(true);
// //       setCountdown(30);
// //       setIsLoading(false);
// //     }, 1000);
// //   };

// //   const handleVerifyOtp = () => {
// //     const enteredOtp = otp.join('');
// //     if (enteredOtp.length !== 6) {
// //       Alert.alert(
// //         translations.invalidOtp[language],
// //         translations.completeOtp[language]
// //       );
// //       return;
// //     }
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       Alert.alert(
// //         translations.success[language],
// //         translations.verified[language]
// //       );
// //       setIsLoading(false);
// //       router.replace('/(homescreens/info10)');
// //     }, 1500);
// //   };

// //   const handleOtpChange = (value, index) => {
// //     if (isNaN(value)) return;

// //     const newOtp = [...otp];
// //     newOtp[index] = value;
// //     setOtp(newOtp);

// //     if (value && index < 5) {
// //       otpInputRefs.current[index + 1].focus();
// //     }
// //   };

// //   const handleKeyPress = (e, index) => {
// //     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
// //       otpInputRefs.current[index - 1].focus();
// //     }
// //   };

// //   return (
// //     <KeyboardAvoidingView
// //       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //       style={styles.container}
// //     >
// //       {/* Language Toggle */}
// //       <View style={styles.languageToggleContainer}>
// //         <Text style={styles.languageLabel}>ENG</Text>
// //         <TouchableOpacity
// //           style={styles.toggleContainer}
// //           onPress={toggleLanguage}
// //           activeOpacity={0.8}
// //         >
// //           <View style={[
// //             styles.toggleButton,
// //             {
// //               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
// //               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
// //             }
// //           ]}>
// //             <Image
// //               source={language === 'ENG'
// //                 ? require('../../assets/uk-flag.png')
// //                 : require('../../assets/india-flag.png')}
// //               style={styles.flag}
// //             />
// //           </View>
// //         </TouchableOpacity>
// //         <Text style={styles.languageLabel}>हिंदी</Text>
// //       </View>

// //       <View style={styles.content}>
// //         <MaterialIcons name="verified-user" size={60} color="#7e57c2" style={styles.icon} />
// //         <Text style={styles.title}>{translations.title[language]}</Text>
// //         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

// //         {isLoading && (
// //           <View style={styles.loaderOverlay}>
// //             <ActivityIndicator size="large" color="#7e57c2" />
// //           </View>
// //         )}

// //         {!isOtpSent ? (
// //           <>
// //             {/* Mobile Number Input View */}
// //             <View style={styles.inputContainer}>
// //               <TextInput
// //                 style={styles.input}
// //                 placeholder={translations.enterMobile[language]}
// //                 keyboardType="phone-pad"
// //                 maxLength={10}
// //                 value={mobileNumber}
// //                 onChangeText={setMobileNumber}
// //               />
// //             </View>
// //             <TouchableOpacity
// //               style={styles.button}
// //               onPress={handleSendOtp}
// //               disabled={isLoading}
// //             >
// //               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
// //             </TouchableOpacity>
// //           </>
// //         ) : (
// //           <>
// //             {/* OTP Input View */}
// //             <Text style={styles.otpSentText}>
// //               {translations.otpSent[language]} {mobileNumber}
// //             </Text>
            
// //             <View style={styles.otpContainer}>
// //               {otp.map((digit, index) => (
// //                 <TextInput
// //                   ref={(ref) => (otpInputRefs.current[index] = ref)}
// //                   key={index}
// //                   style={styles.otpInput}
// //                   keyboardType="number-pad"
// //                   maxLength={1}
// //                   value={digit}
// //                   onChangeText={(value) => handleOtpChange(value, index)}
// //                   onKeyPress={(e) => handleKeyPress(e, index)}
// //                 />
// //               ))}
// //             </View>

// //             {/* Resend OTP Section */}
// //             <View style={styles.resendContainer}>
// //               <Text style={styles.countdownText}>
// //                 {countdown > 0
// //                   ? `${translations.resendIn[language]} ${countdown}s`
// //                   : translations.didntReceive[language]}
// //               </Text>
// //               <TouchableOpacity
// //                 onPress={handleResendOtp}
// //                 disabled={isResendDisabled || isLoading}
// //               >
// //                 <Text style={[
// //                   styles.resendText,
// //                   (isResendDisabled || isLoading) && styles.disabledResend
// //                 ]}>
// //                   {translations.resend[language]}
// //                 </Text>
// //               </TouchableOpacity>
// //             </View>

// //             {/* Verify Button */}
// //             <TouchableOpacity
// //               style={[
// //                 styles.button,
// //                 styles.verifyButton,
// //                 otp.join('').length !== 6 && styles.disabledButton
// //               ]}
// //               onPress={handleVerifyOtp}
// //               disabled={otp.join('').length !== 6 || isLoading}
// //             >
// //               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
// //             </TouchableOpacity>
// //           </>
// //         )}
// //       </View>
// //     </KeyboardAvoidingView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //     justifyContent: 'center',
// //     paddingTop: 40,
// //   },
// //   languageToggleContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     paddingHorizontal: 20,
// //     marginBottom: 10,
// //     gap: 6,
// //   },
// //   languageLabel: {
// //     fontWeight: '600',
// //     fontSize: 14,
// //     color: '#495057',
// //   },
// //   toggleContainer: {
// //     width: 60,
// //     height: 28,
// //     borderRadius: 14,
// //     backgroundColor: '#E9ECEF',
// //     justifyContent: 'center',
// //     paddingHorizontal: 2,
// //   },
// //   toggleButton: {
// //     width: 24,
// //     height: 24,
// //     borderRadius: 12,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   flag: {
// //     width: 18,
// //     height: 13,
// //     borderRadius: 2,
// //   },
// //   content: {
// //     padding: 20,
// //     alignItems: 'center',
// //   },
// //   loaderOverlay: {
// //     ...StyleSheet.absoluteFillObject,
// //     backgroundColor: 'rgba(255,255,255,0.7)',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     zIndex: 1000,
// //   },
// //   icon: {
// //     marginBottom: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#333',
// //     marginBottom: 8,
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     color: '#666',
// //     marginBottom: 30,
// //   },
// //   inputContainer: {
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     backgroundColor: 'white',
// //     padding: 15,
// //     borderRadius: 10,
// //     fontSize: 16,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //   },
// //   button: {
// //     backgroundColor: '#7e57c2',
// //     padding: 15,
// //     borderRadius: 10,
// //     width: '100%',
// //     alignItems: 'center',
// //   },
// //   disabledButton: {
// //     backgroundColor: '#b39ddb',
// //   },
// //   verifyButton: {
// //     marginTop: 20,
// //   },
// //   buttonText: {
// //     color: 'white',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   otpSentText: {
// //     color: '#666',
// //     marginBottom: 20,
// //   },
// //   otpContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '100%',
// //     maxWidth: 320,
// //     marginBottom: 20,
// //   },
// //   otpInput: {
// //     backgroundColor: 'white',
// //     width: 45,
// //     height: 50,
// //     borderRadius: 10,
// //     textAlign: 'center',
// //     fontSize: 18,
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //   },
// //   resendContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   countdownText: {
// //     color: '#666',
// //     marginRight: 5,
// //   },
// //   resendText: {
// //     color: '#7e57c2',
// //     fontWeight: 'bold',
// //   },
// //   disabledResend: {
// //     color: '#b39ddb',
// //   },
// // });










// //16/08/2025

// app/homescreens/info9.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { sendOtp, verifyOtp } from '../services/otpService';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       Alert.alert(
//         translations.invalidNumber[language],
//         translations.validNumber[language]
//       );
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await sendOtp(mobileNumber);
//       if (response.Status === "Success") {
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//       } else {
//         Alert.alert("Error", "Failed to send OTP");
//       }
//     } catch (error) {
//       Alert.alert("Error", "OTP sending failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     setIsLoading(true);
//     try {
//       const response = await sendOtp(mobileNumber);
//       if (response.Status === "Success") {
//         setIsResendDisabled(true);
//         setCountdown(30);
//       } else {
//         Alert.alert("Error", "Failed to resend OTP");
//       }
//     } catch (error) {
//       Alert.alert("Error", "OTP resend failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       Alert.alert(
//         translations.invalidOtp[language],
//         translations.completeOtp[language]
//       );
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await verifyOtp(mobileNumber, enteredOtp);
//       if (response.Status === "Success") {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 80, // Update progress to 80%
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData);

//         Alert.alert(
//           translations.success[language],
//           translations.verified[language]
//         );
//         router.replace('/(homescreens/info10)');
//       } else {
//         Alert.alert("Error", "Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "OTP verification failed.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
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
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#7e57c2" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleSendOtp}
//               disabled={isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <View style={styles.otpContainer}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   ref={(ref) => (otpInputRefs.current[index] = ref)}
//                   key={index}
//                   style={styles.otpInput}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   value={digit}
//                   onChangeText={(value) => handleOtpChange(value, index)}
//                   onKeyPress={(e) => handleKeyPress(e, index)}
//                 />
//               ))}
//             </View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0
//                   ? `${translations.resendIn[language]} ${countdown}s`
//                   : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity
//                 onPress={handleResendOtp}
//                 disabled={isResendDisabled || isLoading}
//               >
//                 <Text style={[
//                   styles.resendText,
//                   (isResendDisabled || isLoading) && styles.disabledResend
//                 ]}>
//                   {translations.resend[language]}
//                 </Text>
//                 </TouchableOpacity>
                
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 styles.verifyButton,
//                 otp.join('').length !== 6 && styles.disabledButton
//               ]}
//               onPress={handleVerifyOtp}
//               disabled={otp.join('').length !== 6 || isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     paddingTop: 40,
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
//   content: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   loaderOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   button: {
//     backgroundColor: '#7e57c2',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   disabledButton: {
//     backgroundColor: '#b39ddb',
//   },
//   verifyButton: {
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 20,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#b39ddb',
//   },
// });



















// //17/08/2025

// app/homescreens/info9.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { sendOtp, verifyOtp } from '../services/otpService';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();

//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState(null); // ✅ store sessionId from API

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: { ENG: "Send OTP", HI: "OTP भेजें" },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: "OTP मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: { ENG: "Resend OTP in", HI: "OTP पुनः भेजें" },
//     didntReceive: { ENG: "Didn't receive OTP?", HI: "OTP प्राप्त नहीं हुआ?" },
//     resend: { ENG: "Resend", HI: "पुनः भेजें" },
//     verify: { ENG: "Verify", HI: "सत्यापित करें" },
//     success: { ENG: "Success", HI: "सफलता" },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: "मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: { ENG: "Invalid Number", HI: "अमान्य नंबर" },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: "कृपया वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: { ENG: "Invalid OTP", HI: "अमान्य OTP" },
//     completeOtp: { ENG: "Please enter the complete 6-digit OTP", HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें" }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // ✅ Send OTP
//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       Alert.alert(translations.invalidNumber[language], translations.validNumber[language]);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await sendOtp(mobileNumber);
//       if (response.Status === "Success") {
//         setSessionId(response.Details); // ✅ Save sessionId
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//       } else {
//         Alert.alert("Error", "Failed to send OTP");
//       }
//     } catch (error) {
//       Alert.alert("Error", "OTP sending failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ Resend OTP
//   const handleResendOtp = async () => {
//     setIsLoading(true);
//     try {
//       const response = await sendOtp(mobileNumber);
//       if (response.Status === "Success") {
//         setSessionId(response.Details); // ✅ update sessionId
//         setIsResendDisabled(true);
//         setCountdown(30);
//       } else {
//         Alert.alert("Error", "Failed to resend OTP");
//       }
//     } catch (error) {
//       Alert.alert("Error", "OTP resend failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // ✅ Verify OTP
//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       Alert.alert(translations.invalidOtp[language], translations.completeOtp[language]);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await verifyOtp(sessionId, enteredOtp); // ✅ use sessionId
//       if (response.Status === "Success") {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 80,
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData);

//         Alert.alert(translations.success[language], translations.verified[language]);
//         router.replace('/(homescreens/info10)');
//       } else {
//         Alert.alert("Error", "Invalid OTP. Please try again.");
//       }
//     } catch (error) {
//       Alert.alert("Error", "OTP verification failed.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity style={styles.toggleContainer} onPress={toggleLanguage} activeOpacity={0.8}>
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG' ? require('../../assets/uk-flag.png') : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#7e57c2" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity style={styles.button} onPress={handleSendOtp} disabled={isLoading}>
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <View style={styles.otpContainer}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   ref={(ref) => (otpInputRefs.current[index] = ref)}
//                   key={index}
//                   style={styles.otpInput}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   value={digit}
//                   onChangeText={(value) => handleOtpChange(value, index)}
//                   onKeyPress={(e) => handleKeyPress(e, index)}
//                 />
//               ))}
//             </View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0 ? `${translations.resendIn[language]} ${countdown}s` : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity onPress={handleResendOtp} disabled={isResendDisabled || isLoading}>
//                 <Text style={[styles.resendText, (isResendDisabled || isLoading) && styles.disabledResend]}>
//                   {translations.resend[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 styles.verifyButton,
//                 otp.join('').length !== 6 && styles.disabledButton
//               ]}
//               onPress={handleVerifyOtp}
//               disabled={otp.join('').length !== 6 || isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', padding: 20 },
//   languageToggleContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
//   languageLabel: { fontSize: 16, fontWeight: '600', marginHorizontal: 10 },
//   toggleContainer: { width: 64, height: 32, backgroundColor: '#ddd', borderRadius: 16, justifyContent: 'center' },
//   toggleButton: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
//   flag: { width: 24, height: 24, borderRadius: 12 },
//   content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
//   icon: { marginBottom: 20 },
//   title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
//   subtitle: { fontSize: 16, color: '#666', marginBottom: 20 },
//   inputContainer: { width: '100%', marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, fontSize: 16, width: '100%' },
//   button: { backgroundColor: '#7e57c2', padding: 15, borderRadius: 8, alignItems: 'center', marginVertical: 10, width: '100%' },
//   buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
//   otpSentText: { fontSize: 14, color: '#555', marginBottom: 15 },
//   otpContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 20 },
//   otpInput: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, fontSize: 18, textAlign: 'center', width: 45, height: 55 },
//   resendContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
//   countdownText: { marginRight: 10, fontSize: 14 },
//   resendText: { color: '#7e57c2', fontWeight: '600' },
//   disabledResend: { color: '#aaa' },
//   verifyButton: { backgroundColor: '#4caf50' },
//   disabledButton: { backgroundColor: '#ccc' },
//   loaderOverlay: { position: 'absolute', top: '50%', left: '50%', marginLeft: -20, marginTop: -20 }
// });







// // info9.jsx
// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
// import axios from "axios";

// const API_KEY = "efbeb1f4-7613-11f0-a562-0200cd936042"; // replace with your 2Factor.in API key

// export default function Info9() {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [sessionId, setSessionId] = useState(null);
//   const [step, setStep] = useState("enterMobile"); // step control

//   // Send OTP
//   const sendOtp = async () => {
//     if (!mobile || mobile.length !== 10) {
//       Alert.alert("Error", "Please enter a valid 10-digit mobile number");
//       return;
//     }
//     try {
//       const response = await axios.get(
//         `https://2factor.in/API/V1/${API_KEY}/SMS/+91${mobile}/AUTOGEN`
//       );
//       if (response.data.Status === "Success") {
//         setSessionId(response.data.Details);
//         setStep("enterOtp");
//         Alert.alert("Success", "OTP sent successfully!");
//       } else {
//         Alert.alert("Error", "Failed to send OTP");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Something went wrong while sending OTP");
//     }
//   };

//   // Verify OTP
//   const verifyOtp = async () => {
//     if (!otp) {
//       Alert.alert("Error", "Please enter OTP");
//       return;
//     }
//     try {
//       const response = await axios.get(
//         `https://2factor.in/API/V1/${API_KEY}/SMS/VERIFY/${sessionId}/${otp}`
//       );
//       if (response.data.Status === "Success" && response.data.Details === "OTP Matched") {
//         Alert.alert("Success", "OTP verified successfully!");
//         setStep("done");
//       } else {
//         Alert.alert("Error", "Invalid OTP");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Something went wrong while verifying OTP");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>OTP Verification</Text>

//       {step === "enterMobile" && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter Mobile Number"
//             keyboardType="phone-pad"
//             value={mobile}
//             onChangeText={setMobile}
//           />
//           <TouchableOpacity style={styles.button} onPress={sendOtp}>
//             <Text style={styles.buttonText}>Send OTP</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {step === "enterOtp" && (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter OTP"
//             keyboardType="numeric"
//             value={otp}
//             onChangeText={setOtp}
//           />
//           <TouchableOpacity style={styles.button} onPress={verifyOtp}>
//             <Text style={styles.buttonText}>Verify OTP</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {step === "done" && (
//         <Text style={styles.successText}>🎉 OTP Verified Successfully!</Text>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   input: {
//     width: "80%",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 8,
//     padding: 12,
//     marginBottom: 15,
//     fontSize: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   button: {
//     backgroundColor: "#007bff",
//     paddingVertical: 12,
//     paddingHorizontal: 30,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   successText: {
//     fontSize: 20,
//     color: "green",
//     fontWeight: "bold",
//   },
// });






















// app/homescreens/info9.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       Alert.alert(
//         translations.invalidNumber[language],
//         translations.validNumber[language]
//       );
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Simulate OTP sending
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       setIsOtpSent(true);
//       setIsResendDisabled(true);
//       setCountdown(30);
//     } catch (error) {
//       Alert.alert("Error", "OTP sending failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     setIsLoading(true);
//     try {
//       // Simulate OTP resending
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       setIsResendDisabled(true);
//       setCountdown(30);
//     } catch (error) {
//       Alert.alert("Error", "OTP resend failed. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       Alert.alert(
//         translations.invalidOtp[language],
//         translations.completeOtp[language]
//       );
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // Save mobile number to Firestore
//       const profileData = {
//         ...userData,
//         mobileNumber: `+91${mobileNumber}`,
//         isMobileVerified: true,
//         profileProgress: 80, // Update progress to 80%
//         updatedAt: serverTimestamp()
//       };

//       await saveUserProfile(profileData);

//       Alert.alert(
//         translations.success[language],
//         translations.verified[language]
//       );
//       router.replace('/homescreens/info10');
//     } catch (error) {
//       Alert.alert("Error", "Failed to save mobile number. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
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
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#7e57c2" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleSendOtp}
//               disabled={isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <View style={styles.otpContainer}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   ref={(ref) => (otpInputRefs.current[index] = ref)}
//                   key={index}
//                   style={styles.otpInput}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   value={digit}
//                   onChangeText={(value) => handleOtpChange(value, index)}
//                   onKeyPress={(e) => handleKeyPress(e, index)}
//                 />
//               ))}
//             </View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0
//                   ? `${translations.resendIn[language]} ${countdown}s`
//                   : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity
//                 onPress={handleResendOtp}
//                 disabled={isResendDisabled || isLoading}
//               >
//                 <Text style={[
//                   styles.resendText,
//                   (isResendDisabled || isLoading) && styles.disabledResend
//                 ]}>
//                   {translations.resend[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 styles.verifyButton,
//                 otp.join('').length !== 6 && styles.disabledButton
//               ]}
//               onPress={handleVerifyOtp}
//               disabled={otp.join('').length !== 6 || isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     paddingTop: 40,
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
//   content: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   loaderOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   button: {
//     backgroundColor: '#7e57c2',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   disabledButton: {
//     backgroundColor: '#b39ddb',
//   },
//   verifyButton: {
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 20,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#b39ddb',
//   },
// });





//21/08/2025
// app/homescreens/info9.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp, resendOtp } from '../services/otpService';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       Alert.alert(
//         translations.invalidNumber[language],
//         translations.validNumber[language]
//       );
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         Alert.alert(
//           translations.success[language],
//           translations.otpSent[language] + mobileNumber
//         );
//       } else {
//         Alert.alert(
//           translations.otpError[language],
//           result.message
//         );
//       }
//     } catch (error) {
//       Alert.alert(
//         translations.otpError[language],
//         "Failed to send OTP. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     setIsLoading(true);
//     try {
//       const result = await resendOtp(sessionId);
      
//       if (result.success) {
//         setIsResendDisabled(true);
//         setCountdown(30);
//         Alert.alert(
//           translations.success[language],
//           "OTP has been resent successfully"
//         );
//       } else {
//         Alert.alert(
//           translations.otpError[language],
//           result.message
//         );
//       }
//     } catch (error) {
//       Alert.alert(
//         translations.otpError[language],
//         "Failed to resend OTP. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       Alert.alert(
//         translations.invalidOtp[language],
//         translations.completeOtp[language]
//       );
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 80, // Update progress to 80%
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData);

//         Alert.alert(
//           translations.success[language],
//           translations.verified[language]
//         );
//         router.replace('/homescreens/info10');
//       } else {
//         Alert.alert(
//           translations.invalidOtp[language],
//           result.message
//         );
//       }
//     } catch (error) {
//       Alert.alert(
//         "Error",
//         "Failed to verify OTP. Please try again."
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
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
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#7e57c2" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={handleSendOtp}
//               disabled={isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <View style={styles.otpContainer}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   ref={(ref) => (otpInputRefs.current[index] = ref)}
//                   key={index}
//                   style={styles.otpInput}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   value={digit}
//                   onChangeText={(value) => handleOtpChange(value, index)}
//                   onKeyPress={(e) => handleKeyPress(e, index)}
//                 />
//               ))}
//             </View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0
//                   ? `${translations.resendIn[language]} ${countdown}s`
//                   : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity
//                 onPress={handleResendOtp}
//                 disabled={isResendDisabled || isLoading}
//               >
//                 <Text style={[
//                   styles.resendText,
//                   (isResendDisabled || isLoading) && styles.disabledResend
//                 ]}>
//                   {translations.resend[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 styles.verifyButton,
//                 otp.join('').length !== 6 && styles.disabledButton
//               ]}
//               onPress={handleVerifyOtp}
//               disabled={otp.join('').length !== 6 || isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     justifyContent: 'center',
//     paddingTop: 40,
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
//   content: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   loaderOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   button: {
//     backgroundColor: '#7e57c2',
//     padding: 15,
//     borderRadius: 10,
//     width: '100%',
//     alignItems: 'center',
//   },
//   disabledButton: {
//     backgroundColor: '#b39ddb',
//   },
//   verifyButton: {
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 20,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#b39ddb',
//   },
// });















// app/homescreens/info9.jsx
//trail2
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image, Modal } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp, resendOtp } from '../services/otpService';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   const showModalWithMessage = (message) => {
//     setModalMessage(message);
//     setShowSuccessModal(true);
//     setTimeout(() => {
//       setShowSuccessModal(false);
//     }, 2000);
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language]);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage(translations.otpSent[language] + mobileNumber);
//       } else {
//         showModalWithMessage(result.message);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send OTP. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     setIsLoading(true);
//     try {
//       const result = await resendOtp(sessionId);
      
//       if (result.success) {
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("OTP has been resent successfully");
//       } else {
//         showModalWithMessage(result.message);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend OTP. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language]);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 80, // Update progress to 80%
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData);

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.replace('/homescreens/info10');
//         }, 2000);
//       } else {
//         showModalWithMessage(result.message);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify OTP. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       {/* Fixed Language Toggle at Top Right */}
//       <View style={styles.languageToggleContainer}>
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
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#ae43d9" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#ae43d9" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 placeholderTextColor="#999"
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity
//               style={[styles.button, isLoading && styles.disabledButton]}
//               onPress={handleSendOtp}
//               disabled={isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <View style={styles.otpContainer}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   ref={(ref) => (otpInputRefs.current[index] = ref)}
//                   key={index}
//                   style={styles.otpInput}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   value={digit}
//                   onChangeText={(value) => handleOtpChange(value, index)}
//                   onKeyPress={(e) => handleKeyPress(e, index)}
//                 />
//               ))}
//             </View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0
//                   ? `${translations.resendIn[language]} ${countdown}s`
//                   : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity
//                 onPress={handleResendOtp}
//                 disabled={isResendDisabled || isLoading}
//               >
//                 <Text style={[
//                   styles.resendText,
//                   (isResendDisabled || isLoading) && styles.disabledResend
//                 ]}>
//                   {translations.resend[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 styles.verifyButton,
//                 (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//               ]}
//               onPress={handleVerifyOtp}
//               disabled={otp.join('').length !== 6 || isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     justifyContent: 'center',
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     zIndex: 1000,
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
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
//   content: {
//     padding: 20,
//     alignItems: 'center',
//     marginTop: 60,
//   },
//   loaderOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   button: {
//     backgroundColor: '#ae43d9',
//     padding: 16,
//     borderRadius: 12,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#d8b4e5',
//   },
//   verifyButton: {
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 20,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#ae43d9',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#d8b4e5',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//   },
// });










//trail3
// app/homescreens/info9.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image, Modal } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp, resendOtp } from '../services/otpService';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइל नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     wrongOtp: {
//       ENG: "Wrong OTP entered. Please try again.",
//       HI: "गलत OTP दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
//     setIsError(isError);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage(translations.otpSent[language] + mobileNumber);
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // For resend, we need to call sendOtp again with the same number
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("OTP has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 80, // Update progress to 80%
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData);

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.replace('/homescreens/info10');
//         }, 2000);
//       } else {
//         showModalWithMessage(translations.wrongOtp[language], true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   // Handle OTP paste functionality
//   const handleOtpPaste = (event) => {
//     const pastedData = event.nativeEvent.text;
//     if (pastedData.length === 6 && !isNaN(pastedData)) {
//       const otpArray = pastedData.split('');
//       setOtp(otpArray);
      
//       // Focus on the last input after pasting
//       if (otpInputRefs.current[5]) {
//         otpInputRefs.current[5].focus();
//       }
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       {/* Fixed Language Toggle at Top Right */}
//       <View style={styles.languageToggleContainer}>
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
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#ae43d9" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#ae43d9" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 placeholderTextColor="#999"
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity
//               style={[styles.button, isLoading && styles.disabledButton]}
//               onPress={handleSendOtp}
//               disabled={isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <View style={styles.otpContainer}>
//               {otp.map((digit, index) => (
//                 <TextInput
//                   ref={(ref) => (otpInputRefs.current[index] = ref)}
//                   key={index}
//                   style={styles.otpInput}
//                   keyboardType="number-pad"
//                   maxLength={1}
//                   value={digit}
//                   onChangeText={(value) => handleOtpChange(value, index)}
//                   onKeyPress={(e) => handleKeyPress(e, index)}
//                   onPaste={index === 0 ? handleOtpPaste : null} // Only handle paste on first input
//                 />
//               ))}
//             </View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0
//                   ? `${translations.resendIn[language]} ${countdown}s`
//                   : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity
//                 onPress={handleResendOtp}
//                 disabled={isResendDisabled || isLoading}
//               >
//                 <Text style={[
//                   styles.resendText,
//                   (isResendDisabled || isLoading) && styles.disabledResend
//                 ]}>
//                   {translations.resend[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 styles.verifyButton,
//                 (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//               ]}
//               onPress={handleVerifyOtp}
//               disabled={otp.join('').length !== 6 || isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     justifyContent: 'center',
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     zIndex: 1000,
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
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
//   content: {
//     padding: 20,
//     alignItems: 'center',
//     marginTop: 60,
//   },
//   loaderOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   button: {
//     backgroundColor: '#ae43d9',
//     padding: 16,
//     borderRadius: 12,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#d8b4e5',
//   },
//   verifyButton: {
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 20,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#ae43d9',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#d8b4e5',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });


//trail3
// app/homescreens/info9.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image, Modal, Animated } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp, resendOtp } from '../services/otpService';
// import * as SMS from 'expo-sms';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);
//   const shakeAnimation = useRef(new Animated.Value(0)).current;

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     wrongOtp: {
//       ENG: "Wrong OTP entered. Please try again.",
//       HI: "गलत OTP दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     },
//     pasteOtp: {
//       ENG: "Paste OTP",
//       HI: "OTP चिपकाएं"
//     }
//   };

//   const otpInputRefs = useRef([]);
//   const hiddenOtpInputRef = useRef(null);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]).start();
//   };

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
//     setIsError(isError);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage(translations.otpSent[language] + mobileNumber);
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // For resend, we need to call sendOtp again with the same number
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("OTP has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 80, // Update progress to 80%
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData);

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.replace('/homescreens/info10');
//         }, 2000);
//       } else {
//         // Shake animation for wrong OTP
//         startShake();
//         showModalWithMessage(translations.wrongOtp[language], true);
//         // Clear OTP fields
//         setOtp(['', '', '', '', '', '']);
//         // Focus on first OTP input
//         if (otpInputRefs.current[0]) {
//           otpInputRefs.current[0].focus();
//         }
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   // Handle OTP paste functionality
//   const handleOtpPaste = async () => {
//     try {
//       // Check if SMS is available
//       const isAvailable = await SMS.isAvailableAsync();
//       if (isAvailable) {
//         // Request SMS permissions and read the latest OTP
//         // This is a simplified approach - in a real app you'd use more sophisticated OTP detection
//         Alert.alert(
//           "Paste OTP",
//           "Please check your messages for the OTP and paste it here",
//           [
//             {
//               text: "Cancel",
//               style: "cancel"
//             },
//             {
//               text: "OK",
//               onPress: () => {
//                 // Focus on the hidden input to trigger paste
//                 if (hiddenOtpInputRef.current) {
//                   hiddenOtpInputRef.current.focus();
//                 }
//               }
//             }
//           ]
//         );
//       }
//     } catch (error) {
//       console.log("SMS not available", error);
//     }
//   };

//   const handleHiddenOtpPaste = (event) => {
//     const pastedData = event.nativeEvent.text;
//     // Extract numbers from pasted text (in case there are other characters)
//     const numbersOnly = pastedData.replace(/\D/g, '');
    
//     if (numbersOnly.length >= 6) {
//       const otpCode = numbersOnly.substring(0, 6);
//       const otpArray = otpCode.split('');
//       setOtp(otpArray);
      
//       // Focus on the last input after pasting
//       if (otpInputRefs.current[5]) {
//         otpInputRefs.current[5].focus();
//       }
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       {/* Fixed Language Toggle at Top Right */}
//       <View style={styles.languageToggleContainer}>
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
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#ae43d9" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#ae43d9" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 placeholderTextColor="#999"
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity
//               style={[styles.button, isLoading && styles.disabledButton]}
//               onPress={handleSendOtp}
//               disabled={isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
//               <View style={styles.otpContainer}>
//                 {otp.map((digit, index) => (
//                   <TextInput
//                     ref={(ref) => (otpInputRefs.current[index] = ref)}
//                     key={index}
//                     style={styles.otpInput}
//                     keyboardType="number-pad"
//                     maxLength={1}
//                     value={digit}
//                     onChangeText={(value) => handleOtpChange(value, index)}
//                     onKeyPress={(e) => handleKeyPress(e, index)}
//                     contextMenuHidden={true} // Disable context menu to prevent custom paste
//                   />
//                 ))}
//               </View>

//               {/* Hidden TextInput for OTP paste */}
//               <TextInput
//                 ref={hiddenOtpInputRef}
//                 style={styles.hiddenInput}
//                 onChangeText={handleHiddenOtpPaste}
//                 value=""
//                 contextMenuHidden={false}
//                 keyboardType="number-pad"
//               />

//               {/* Paste OTP Button */}
//               <TouchableOpacity
//                 style={styles.pasteButton}
//                 onPress={handleOtpPaste}
//               >
//                 <Ionicons name="clipboard-outline" size={20} color="#ae43d9" />
//                 <Text style={styles.pasteButtonText}>{translations.pasteOtp[language]}</Text>
//               </TouchableOpacity>
//             </Animated.View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0
//                   ? `${translations.resendIn[language]} ${countdown}s`
//                   : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity
//                 onPress={handleResendOtp}
//                 disabled={isResendDisabled || isLoading}
//               >
//                 <Text style={[
//                   styles.resendText,
//                   (isResendDisabled || isLoading) && styles.disabledResend
//                 ]}>
//                   {translations.resend[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Manual Verify Button (only shown if auto-submit fails) */}
//             {otp.join('').length === 6 && (
//               <TouchableOpacity
//                 style={[
//                   styles.button,
//                   styles.verifyButton,
//                   isLoading && styles.disabledButton
//                 ]}
//                 onPress={handleVerifyOtp}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//               </TouchableOpacity>
//             )}
//           </>
//         )}
//       </View>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     justifyContent: 'center',
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     zIndex: 1000,
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
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
//   content: {
//     padding: 20,
//     alignItems: 'center',
//     marginTop: 60,
//   },
//   loaderOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   button: {
//     backgroundColor: '#ae43d9',
//     padding: 16,
//     borderRadius: 12,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#d8b4e5',
//   },
//   verifyButton: {
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   otpSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 15,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   pasteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 8,
//     backgroundColor: '#f0e6f5',
//   },
//   pasteButtonText: {
//     color: '#ae43d9',
//     marginLeft: 5,
//     fontWeight: '600',
//   },
//   hiddenInput: {
//     position: 'absolute',
//     width: 0,
//     height: 0,
//     opacity: 0,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#ae43d9',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#d8b4e5',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });'''''''







//trail4


// app/homescreens/info9.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, Image, Modal, Animated, Clipboard } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp, resendOtp } from '../services/otpService';
// import * as SMS from 'expo-sms';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);
//   const shakeAnimation = useRef(new Animated.Value(0)).current;

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     wrongOtp: {
//       ENG: "Wrong OTP entered. Please try again.",
//       HI: "गलत OTP दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     }
//   };

//   const otpInputRefs = useRef([]);
//   const hiddenOtpInputRef = useRef(null);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]).start();
//   };

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
//     setIsError(isError);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage(translations.otpSent[language] + mobileNumber);
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       // For resend, we need to call sendOtp again with the same number
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("OTP has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 80, // Update progress to 80%
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData);

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.replace('/homescreens/info10');
//         }, 2000);
//       } else {
//         // Shake animation for wrong OTP
//         startShake();
//         showModalWithMessage(translations.wrongOtp[language], true);
//         // Clear OTP fields
//         setOtp(['', '', '', '', '', '']);
//         // Focus on first OTP input
//         if (otpInputRefs.current[0]) {
//           otpInputRefs.current[0].focus();
//         }
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   // Handle OTP paste functionality for all inputs
//   const handleOtpPaste = async (index) => {
//     try {
//       // Get clipboard content
//       const content = await Clipboard.getString();
      
//       // Extract numbers from pasted text (in case there are other characters)
//       const numbersOnly = content.replace(/\D/g, '');
      
//       if (numbersOnly.length >= 6) {
//         const otpCode = numbersOnly.substring(0, 6);
//         const otpArray = otpCode.split('');
//         setOtp(otpArray);
        
//         // Focus on the last input after pasting
//         if (otpInputRefs.current[5]) {
//           otpInputRefs.current[5].focus();
//         }
//       }
//     } catch (error) {
//       console.log("Clipboard error", error);
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       {/* Fixed Language Toggle at Top Right */}
//       <View style={styles.languageToggleContainer}>
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
//       </View>

//       <View style={styles.content}>
//         <MaterialIcons name="verified-user" size={60} color="#ae43d9" style={styles.icon} />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//         {isLoading && (
//           <View style={styles.loaderOverlay}>
//             <ActivityIndicator size="large" color="#ae43d9" />
//           </View>
//         )}

//         {!isOtpSent ? (
//           <>
//             {/* Mobile Number Input View */}
//             <View style={styles.inputContainer}>
//               <TextInput
//                 style={styles.input}
//                 placeholder={translations.enterMobile[language]}
//                 placeholderTextColor="#999"
//                 keyboardType="phone-pad"
//                 maxLength={10}
//                 value={mobileNumber}
//                 onChangeText={setMobileNumber}
//               />
//             </View>
//             <TouchableOpacity
//               style={[styles.button, isLoading && styles.disabledButton]}
//               onPress={handleSendOtp}
//               disabled={isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.sendOtp[language]}</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <>
//             {/* OTP Input View */}
//             <Text style={styles.otpSentText}>
//               {translations.otpSent[language]} {mobileNumber}
//             </Text>
            
//             <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
//               <View style={styles.otpContainer}>
//                 {otp.map((digit, index) => (
//                   <TextInput
//                     ref={(ref) => (otpInputRefs.current[index] = ref)}
//                     key={index}
//                     style={styles.otpInput}
//                     keyboardType="number-pad"
//                     maxLength={1}
//                     value={digit}
//                     onChangeText={(value) => handleOtpChange(value, index)}
//                     onKeyPress={(e) => handleKeyPress(e, index)}
//                     onFocus={() => {
//                       // Enable paste functionality for all inputs
//                       if (index === 0) {
//                         // For the first input, we'll handle the paste
//                       }
//                     }}
//                     contextMenuHidden={false} // Enable context menu for paste
//                     onPaste={(e) => {
//                       // Handle paste for all inputs
//                       handleOtpPaste(index);
//                     }}
//                     showSoftInputOnFocus={true}
//                   />
//                 ))}
//               </View>
//             </Animated.View>

//             {/* Resend OTP Section */}
//             <View style={styles.resendContainer}>
//               <Text style={styles.countdownText}>
//                 {countdown > 0
//                   ? `${translations.resendIn[language]} ${countdown}s`
//                   : translations.didntReceive[language]}
//               </Text>
//               <TouchableOpacity
//                 onPress={handleResendOtp}
//                 disabled={isResendDisabled || isLoading}
//               >
//                 <Text style={[
//                   styles.resendText,
//                   (isResendDisabled || isLoading) && styles.disabledResend
//                 ]}>
//                   {translations.resend[language]}
//                 </Text>
//               </TouchableOpacity>
//             </View>

//             {/* Verify Button */}
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 styles.verifyButton,
//                 (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//               ]}
//               onPress={handleVerifyOtp}
//               disabled={otp.join('').length !== 6 || isLoading}
//             >
//               <Text style={styles.buttonText}>{translations.verify[language]}</Text>
//             </TouchableOpacity>
//           </>
//         )}
//       </View>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     justifyContent: 'center',
//   },
//   languageToggleContainer: {
//     position: 'absolute',
//     top: 50,
//     right: 20,
//     zIndex: 1000,
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
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
//   content: {
//     padding: 20,
//     alignItems: 'center',
//     marginTop: 60,
//   },
//   loaderOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   icon: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   button: {
//     backgroundColor: '#ae43d9',
//     padding: 16,
//     borderRadius: 12,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   disabledButton: {
//     backgroundColor: '#d8b4e5',
//   },
//   verifyButton: {
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   otpSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 15,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#ae43d9',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#d8b4e5',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });











//23/08/2025

// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   Image,
//   Modal,
//   Animated,
//   Clipboard,
//   ScrollView,
//   Dimensions
// } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp } from '../services/otpService';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);
//   const shakeAnimation = useRef(new Animated.Value(0)).current;

//   // Load existing data
//   useEffect(() => {
//     if (userData && userData.mobileNumber) {
//       const numberWithoutCountryCode = userData.mobileNumber.replace('+91', '');
//       setMobileNumber(numberWithoutCountryCode);
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     wrongOtp: {
//       ENG: "Wrong OTP entered. Please try again.",
//       HI: "गलत OTP दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]).start();
//   };

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
//     setIsError(isError);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage(translations.otpSent[language] + mobileNumber);
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("OTP has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 90, // Update progress
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData, 9); // Pass screen number

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.push(getNextScreen('homescreens/info9'));
//         }, 2000);
//       } else {
//         // Shake animation for wrong OTP
//         startShake();
//         showModalWithMessage(translations.wrongOtp[language], true);
//         // Clear OTP fields
//         setOtp(['', '', '', '', '', '']);
//         // Focus on first OTP input
//         if (otpInputRefs.current[0]) {
//           otpInputRefs.current[0].focus();
//         }
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleOtpPaste = async (index) => {
//     try {
//       const content = await Clipboard.getString();
//       const numbersOnly = content.replace(/\D/g, '');
      
//       if (numbersOnly.length >= 6) {
//         const otpCode = numbersOnly.substring(0, 6);
//         const otpArray = otpCode.split('');
//         setOtp(otpArray);
        
//         if (otpInputRefs.current[5]) {
//           otpInputRefs.current[5].focus();
//         }
//       }
//     } catch (error) {
//       console.log("Clipboard error", error);
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info9'))}
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

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.contentContainer}
//       >
//         {isLoading && (
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

//           {!isOtpSent ? (
//             <>
//               {/* Mobile Number Input View */}
//               <View style={styles.inputContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder={translations.enterMobile[language]}
//                   placeholderTextColor="#999"
//                   keyboardType="phone-pad"
//                   maxLength={10}
//                   value={mobileNumber}
//                   onChangeText={setMobileNumber}
//                 />
//               </View>
//               <TouchableOpacity
//                 style={[styles.continueButton, isLoading && styles.disabledButton]}
//                 onPress={handleSendOtp}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.sendOtp[language]}</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {/* OTP Input View */}
//               <Text style={styles.otpSentText}>
//                 {translations.otpSent[language]} {mobileNumber}
//               </Text>
              
//               <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
//                 <View style={styles.otpContainer}>
//                   {otp.map((digit, index) => (
//                     <TextInput
//                       ref={(ref) => (otpInputRefs.current[index] = ref)}
//                       key={index}
//                       style={styles.otpInput}
//                       keyboardType="number-pad"
//                       maxLength={1}
//                       value={digit}
//                       onChangeText={(value) => handleOtpChange(value, index)}
//                       onKeyPress={(e) => handleKeyPress(e, index)}
//                       onPaste={() => handleOtpPaste(index)}
//                       contextMenuHidden={false}
//                       showSoftInputOnFocus={true}
//                     />
//                   ))}
//                 </View>
//               </Animated.View>

//               {/* Resend OTP Section */}
//               <View style={styles.resendContainer}>
//                 <Text style={styles.countdownText}>
//                   {countdown > 0
//                     ? `${translations.resendIn[language]} ${countdown}s`
//                     : translations.didntReceive[language]}
//                 </Text>
//                 <TouchableOpacity
//                   onPress={handleResendOtp}
//                   disabled={isResendDisabled || isLoading}
//                 >
//                   <Text style={[
//                     styles.resendText,
//                     (isResendDisabled || isLoading) && styles.disabledResend
//                   ]}>
//                     {translations.resend[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Verify Button */}
//               <TouchableOpacity
//                 style={[
//                   styles.continueButton,
//                   (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//                 ]}
//                 onPress={handleVerifyOtp}
//                 disabled={otp.join('').length !== 6 || isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.verify[language]}</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
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
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 16,
//     borderRadius: 30,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   disabledButton: {
//     backgroundColor: '#ADB5BD',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   otpSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 15,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 45,
//     height: 50,
//     borderRadius: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     justifyContent: 'center',
//   },
//   countdownText: {
//     color: '#666',
//     marginRight: 5,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//   },
//   disabledResend: {
//     color: '#ADB5BD',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });







//02/09/2025

//app/homescreens/info9.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   Image,
//   Modal,
//   Animated,
//   Clipboard,
//   ScrollView,
//   Dimensions
// } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp } from '../services/otpService';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);
//   const shakeAnimation = useRef(new Animated.Value(0)).current;

//   // Load existing data
//   useEffect(() => {
//     if (userData && userData.mobileNumber) {
//       const numberWithoutCountryCode = userData.mobileNumber.replace('+91', '');
//       setMobileNumber(numberWithoutCountryCode);
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मоबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     wrongOtp: {
//       ENG: "Wrong OTP entered. Please try again.",
//       HI: "गलत OTP दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]).start();
//   };

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
//     setIsError(isError);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage(translations.otpSent[language] + mobileNumber);
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("OTP has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 90, // Update progress
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData, 9); // Pass screen number

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.push(getNextScreen('homescreens/info9'));
//         }, 2000);
//       } else {
//         // Shake animation for wrong OTP
//         startShake();
//         showModalWithMessage(translations.wrongOtp[language], true);
//         // Clear OTP fields
//         setOtp(['', '', '', '', '', '']);
//         // Focus on first OTP input
//         if (otpInputRefs.current[0]) {
//           otpInputRefs.current[0].focus();
//         }
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleOtpPaste = async (index) => {
//     try {
//       const content = await Clipboard.getString();
//       const numbersOnly = content.replace(/\D/g, '');
      
//       if (numbersOnly.length >= 6) {
//         const otpCode = numbersOnly.substring(0, 6);
//         const otpArray = otpCode.split('');
//         setOtp(otpArray);
        
//         if (otpInputRefs.current[5]) {
//           otpInputRefs.current[5].focus();
//         }
//       }
//     } catch (error) {
//       console.log("Clipboard error", error);
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info9'))}
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

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.contentContainer}
//       >
//         {isLoading && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Large Icon Section */}
//           <View style={styles.iconSection}>
//             <View style={styles.iconCircle}>
//               <MaterialIcons name="verified-user" size={60} color="white" />
//             </View>
//           </View>

//           {/* Header */}
//           <View style={styles.headerSection}>
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           {!isOtpSent ? (
//             <>
//               {/* Mobile Number Input View */}
//               <View style={styles.inputContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder={translations.enterMobile[language]}
//                   placeholderTextColor="#999"
//                   keyboardType="phone-pad"
//                   maxLength={10}
//                   value={mobileNumber}
//                   onChangeText={setMobileNumber}
//                 />
//               </View>
//               <TouchableOpacity
//                 style={[styles.continueButton, isLoading && styles.disabledButton]}
//                 onPress={handleSendOtp}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.sendOtp[language]}</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {/* OTP Input View */}
//               <Text style={styles.otpSentText}>
//                 {translations.otpSent[language]} {mobileNumber}
//               </Text>
              
//               <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
//                 <View style={styles.otpContainer}>
//                   {otp.map((digit, index) => (
//                     <TextInput
//                       ref={(ref) => (otpInputRefs.current[index] = ref)}
//                       key={index}
//                       style={styles.otpInput}
//                       keyboardType="number-pad"
//                       maxLength={1}
//                       value={digit}
//                       onChangeText={(value) => handleOtpChange(value, index)}
//                       onKeyPress={(e) => handleKeyPress(e, index)}
//                       onPaste={() => handleOtpPaste(index)}
//                       contextMenuHidden={false}
//                       showSoftInputOnFocus={true}
//                     />
//                   ))}
//                 </View>
//               </Animated.View>

//               {/* Resend OTP Section */}
//               <View style={styles.resendContainer}>
//                 <Text style={styles.countdownText}>
//                   {countdown > 0
//                     ? `${translations.resendIn[language]} ${countdown}s`
//                     : translations.didntReceive[language]}
//                 </Text>
//                 <TouchableOpacity
//                   onPress={handleResendOtp}
//                   disabled={isResendDisabled || isLoading}
//                 >
//                   <Text style={[
//                     styles.resendText,
//                     (isResendDisabled || isLoading) && styles.disabledResend
//                   ]}>
//                     {translations.resend[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Verify Button */}
//               <TouchableOpacity
//                 style={[
//                   styles.continueButton,
//                   (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//                 ]}
//                 onPress={handleVerifyOtp}
//                 disabled={otp.join('').length !== 6 || isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.verify[language]}</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
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
//     alignItems: 'center',
//   },
//   // New Icon Section
//   iconSection: {
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   iconCircle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#7e57c2',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   headerSection: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//     lineHeight: 22,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//     textAlign: 'center',
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 18,
//     borderRadius: 30,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//     marginTop: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#ADB5BD',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpSentText: {
//     color: '#666',
//     marginBottom: 25,
//     textAlign: 'center',
//     fontSize: 15,
//     lineHeight: 20,
//   },
//   otpSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 20,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 50,
//     height: 55,
//     borderRadius: 12,
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 25,
//     justifyContent: 'center',
//     gap: 8,
//   },
//   countdownText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   disabledResend: {
//     color: '#ADB5BD',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//     lineHeight: 22,
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });


//20/09/2025
//app/homescreens/info9.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   Image,
//   Modal,
//   Animated,
//   Clipboard,
//   ScrollView,
//   Dimensions
// } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp } from '../services/otpService';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);
//   const shakeAnimation = useRef(new Animated.Value(0)).current;

//   // Load existing data
//   useEffect(() => {
//     if (userData && userData.mobileNumber) {
//       const numberWithoutCountryCode = userData.mobileNumber.replace('+91', '');
//       setMobileNumber(numberWithoutCountryCode);
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `OTP sent to ${getPrefix().toLowerCase()} mobile +91`,
//       HI: profileFor === 'MySelf' ? "OTP आपके मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Son' ? "OTP आपके बेटे के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Daughter' ? "OTP आपकी बेटी के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Sister' ? "OTP आपकी बहन के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Brother' ? "OTP आपके भाई के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'My Friend' ? "OTP आपके दोस्त के मोबाइल +91 पर भेजा गया" :
//           profileFor === 'Cousin' ? "OTP आपके चचेरे भाई के मोबाइल +91 पर भेजा गया" :
//           "OTP आपके रिश्तेदार के मोबाइल +91 पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend OTP in",
//       HI: "OTP पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive OTP?",
//       HI: "OTP प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid OTP",
//       HI: "अमान्य OTP"
//     },
//     wrongOtp: {
//       ENG: "Wrong OTP entered. Please try again.",
//       HI: "गलत OTP दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit OTP",
//       HI: "कृपया पूरा 6-अंकीय OTP दर्ज करें"
//     },
//     otpError: {
//       ENG: "OTP Error",
//       HI: "OTP त्रुटि"
//     },
//     editNumber: {
//       ENG: "Edit Number",
//       HI: "नंबर संपादित करें"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]).start();
//   };

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
//     setIsError(isError);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage(translations.otpSent[language] + mobileNumber);
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("OTP has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 90, // Update progress
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData, 9); // Pass screen number

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.push(getNextScreen('homescreens/info9'));
//         }, 2000);
//       } else {
//         // Shake animation for wrong OTP
//         startShake();
//         showModalWithMessage(translations.wrongOtp[language], true);
//         // Clear OTP fields
//         setOtp(['', '', '', '', '', '']);
//         // Focus on first OTP input
//         if (otpInputRefs.current[0]) {
//           otpInputRefs.current[0].focus();
//         }
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify OTP. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleOtpPaste = async (index) => {
//     try {
//       const content = await Clipboard.getString();
//       const numbersOnly = content.replace(/\D/g, '');
      
//       if (numbersOnly.length >= 6) {
//         const otpCode = numbersOnly.substring(0, 6);
//         const otpArray = otpCode.split('');
//         setOtp(otpArray);
        
//         if (otpInputRefs.current[5]) {
//           otpInputRefs.current[5].focus();
//         }
//       }
//     } catch (error) {
//       console.log("Clipboard error", error);
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   const handleEditNumber = () => {
//     setIsOtpSent(false);
//     setOtp(['', '', '', '', '', '']);
//     setCountdown(30);
//     setIsResendDisabled(true);
//   };

//   // Auto-detect OTP from SMS (Android only)
//   useEffect(() => {
//     if (Platform.OS === 'android') {
//       const handleSMSListener = async () => {
//         try {
//           // Request SMS read permission
//           const { status } = await Permissions.askAsync(Permissions.SMS);
          
//           if (status === 'granted') {
//             // Listen for incoming SMS with OTP
//             // This is a simplified implementation - you might need a library like react-native-otp-verify
//             // For now, we'll just check the clipboard periodically
//             const checkClipboard = async () => {
//               try {
//                 const content = await Clipboard.getString();
//                 const otpMatch = content.match(/\b\d{6}\b/);
                
//                 if (otpMatch && isOtpSent) {
//                   const otpCode = otpMatch[0];
//                   const otpArray = otpCode.split('');
//                   setOtp(otpArray);
//                 }
//               } catch (error) {
//                 console.log("Clipboard check error", error);
//               }
//             };
            
//             // Check clipboard every 2 seconds
//             const interval = setInterval(checkClipboard, 2000);
//             return () => clearInterval(interval);
//           }
//         } catch (error) {
//           console.log("SMS permission error", error);
//         }
//       };
      
//       handleSMSListener();
//     }
//   }, [isOtpSent]);

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info9'))}
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

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.contentContainer}
//       >
//         {isLoading && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Large Icon Section */}
//           <View style={styles.iconSection}>
//             <View style={styles.iconCircle}>
//               <MaterialIcons name="verified-user" size={60} color="white" />
//             </View>
//           </View>

//           {/* Header */}
//           <View style={styles.headerSection}>
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           {!isOtpSent ? (
//             <>
//               {/* Mobile Number Input View */}
//               <View style={styles.inputContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder={translations.enterMobile[language]}
//                   placeholderTextColor="#999"
//                   keyboardType="phone-pad"
//                   maxLength={10}
//                   value={mobileNumber}
//                   onChangeText={setMobileNumber}
//                 />
//               </View>
//               <TouchableOpacity
//                 style={[styles.continueButton, isLoading && styles.disabledButton]}
//                 onPress={handleSendOtp}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.sendOtp[language]}</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {/* OTP Input View with Edit Number Option */}
//               <View style={styles.otpHeader}>
//                 <Text style={styles.otpSentText}>
//                   {translations.otpSent[language]} {mobileNumber}
//                 </Text>
//                 <TouchableOpacity onPress={handleEditNumber} style={styles.editButton}>
//                   <MaterialIcons name="edit" size={18} color="#7e57c2" />
//                   <Text style={styles.editText}>{translations.editNumber[language]}</Text>
//                 </TouchableOpacity>
//               </View>
              
//               <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
//                 <View style={styles.otpContainer}>
//                   {otp.map((digit, index) => (
//                     <TextInput
//                       ref={(ref) => (otpInputRefs.current[index] = ref)}
//                       key={index}
//                       style={styles.otpInput}
//                       keyboardType="number-pad"
//                       maxLength={1}
//                       value={digit}
//                       onChangeText={(value) => handleOtpChange(value, index)}
//                       onKeyPress={(e) => handleKeyPress(e, index)}
//                       onPaste={() => handleOtpPaste(index)}
//                       contextMenuHidden={false}
//                       showSoftInputOnFocus={true}
//                     />
//                   ))}
//                 </View>
                
//                 {/* Paste OTP Button */}
//                 <TouchableOpacity
//                   style={styles.pasteButton}
//                   onPress={async () => {
//                     try {
//                       const content = await Clipboard.getString();
//                       const numbersOnly = content.replace(/\D/g, '');
                      
//                       if (numbersOnly.length >= 6) {
//                         const otpCode = numbersOnly.substring(0, 6);
//                         const otpArray = otpCode.split('');
//                         setOtp(otpArray);
                        
//                         if (otpInputRefs.current[5]) {
//                           otpInputRefs.current[5].focus();
//                         }
//                       } else {
//                         showModalWithMessage("No valid OTP found in clipboard", true);
//                       }
//                     } catch (error) {
//                       console.log("Clipboard error", error);
//                       showModalWithMessage("Failed to read from clipboard", true);
//                     }
//                   }}
//                 >
//                   <MaterialIcons name="content-paste" size={18} color="#7e57c2" />
//                   <Text style={styles.pasteText}>Paste OTP</Text>
//                 </TouchableOpacity>
//               </Animated.View>

//               {/* Resend OTP Section */}
//               <View style={styles.resendContainer}>
//                 <Text style={styles.countdownText}>
//                   {countdown > 0
//                     ? `${translations.resendIn[language]} ${countdown}s`
//                     : translations.didntReceive[language]}
//                 </Text>
//                 <TouchableOpacity
//                   onPress={handleResendOtp}
//                   disabled={isResendDisabled || isLoading}
//                 >
//                   <Text style={[
//                     styles.resendText,
//                     (isResendDisabled || isLoading) && styles.disabledResend
//                   ]}>
//                     {translations.resend[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Verify Button */}
//               <TouchableOpacity
//                 style={[
//                   styles.continueButton,
//                   (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//                 ]}
//                 onPress={handleVerifyOtp}
//                 disabled={otp.join('').length !== 6 || isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.verify[language]}</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
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
//     alignItems: 'center',
//   },
//   // New Icon Section
//   iconSection: {
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   iconCircle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#7e57c2',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   headerSection: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//     lineHeight: 22,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//     textAlign: 'center',
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 18,
//     borderRadius: 30,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//     marginTop: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#ADB5BD',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 15,
//   },
//   otpSentText: {
//     color: '#666',
//     fontSize: 15,
//     lineHeight: 20,
//     flex: 1,
//   },
//   editButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 8,
//   },
//   editText: {
//     color: '#7e57c2',
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   otpSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 15,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 50,
//     height: 55,
//     borderRadius: 12,
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   pasteButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#f0e6ff',
//     borderRadius: 8,
//   },
//   pasteText: {
//     color: '#7e57c2',
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 25,
//     justifyContent: 'center',
//     gap: 8,
//   },
//   countdownText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   disabledResend: {
//     color: '#ADB5BD',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//     lineHeight: 22,
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });



//21/09/2025
// //app/homescreens/info9.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   Image,
//   Modal,
//   Animated,
//   Clipboard,
//   ScrollView,
//   Dimensions
// } from 'react-native';
// import { MaterialIcons, Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp } from '../services/otpService';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const [isError, setIsError] = useState(false);
//   const shakeAnimation = useRef(new Animated.Value(0)).current;

//   // Load existing data
//   useEffect(() => {
//     if (userData && userData.mobileNumber) {
//       const numberWithoutCountryCode = userData.mobileNumber.replace('+91', '');
//       setMobileNumber(numberWithoutCountryCode);
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `Code sent to`,
//       HI: profileFor === 'MySelf' ? "कोड आपके मोबाइल पर भेजा गया" :
//           profileFor === 'My Son' ? "कोड आपके बेटे के मोबाइल पर भेजा गया" :
//           profileFor === 'My Daughter' ? "कोड आपकी बेटी के मोबाइल पर भेजा गया" :
//           profileFor === 'My Sister' ? "कोड आपकी बहन के मोबाइल पर भेजा गया" :
//           profileFor === 'My Brother' ? "कोड आपके भाई के मोबाइल पर भेजा गया" :
//           profileFor === 'My Friend' ? "कोड आपके दोस्त के मोबाइल पर भेजा गया" :
//           profileFor === 'Cousin' ? "कोड आपके चचेरे भाई के मोबाइल पर भेजा गया" :
//           "कोड आपके रिश्तेदार के मोबाइल पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend code in",
//       HI: "कोड पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive code?",
//       HI: "कोड प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     success: {
//       ENG: "Success",
//       HI: "सफलता"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     invalidNumber: {
//       ENG: "Invalid Number",
//       HI: "अमान्य नंबर"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     invalidOtp: {
//       ENG: "Invalid Code",
//       HI: "अमान्य कोड"
//     },
//     wrongOtp: {
//       ENG: "Wrong code entered. Please try again.",
//       HI: "गलत कोड दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit code",
//       HI: "कृपया पूरा 6-अंकीय कोड दर्ज करें"
//     },
//     otpError: {
//       ENG: "Code Error",
//       HI: "कोड त्रुटि"
//     },
//     editNumber: {
//       ENG: "Edit Number",
//       HI: "नंबर संपादित करें"
//     }
//   };

//   const otpInputRefs = useRef([]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]).start();
//   };

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
//     setIsError(isError);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("Code sent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send code. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         showModalWithMessage("Code has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend code. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         // Save mobile number to Firestore
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 90, // Update progress
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData, 9); // Pass screen number

//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.push(getNextScreen('homescreens/info9'));
//         }, 2000);
//       } else {
//         // Shake animation for wrong OTP
//         startShake();
//         showModalWithMessage(translations.wrongOtp[language], true);
//         // Clear OTP fields
//         setOtp(['', '', '', '', '', '']);
//         // Focus on first OTP input
//         if (otpInputRefs.current[0]) {
//           otpInputRefs.current[0].focus();
//         }
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify code. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   const handleEditNumber = () => {
//     setIsOtpSent(false);
//     setOtp(['', '', '', '', '', '']);
//     setCountdown(30);
//     setIsResendDisabled(true);
//   };

//   // Auto-detect OTP from SMS (Android only)
//   useEffect(() => {
//     if (Platform.OS === 'android' && isOtpSent) {
//       let interval;
      
//       const checkClipboard = async () => {
//         try {
//           const content = await Clipboard.getString();
//           const otpMatch = content.match(/\b\d{6}\b/);
          
//           if (otpMatch) {
//             const otpCode = otpMatch[0];
//             const otpArray = otpCode.split('');
//             setOtp(otpArray);
            
//             // Clear the interval once OTP is detected
//             clearInterval(interval);
//           }
//         } catch (error) {
//           console.log("Clipboard check error", error);
//         }
//       };
      
//       // Check clipboard every 1 second for OTP
//       interval = setInterval(checkClipboard, 1000);
      
//       return () => clearInterval(interval);
//     }
//   }, [isOtpSent]);

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info9'))}
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

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.contentContainer}
//       >
//         {isLoading && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Large Icon Section */}
//           <View style={styles.iconSection}>
//             <View style={styles.iconCircle}>
//               <MaterialIcons name="verified-user" size={60} color="white" />
//             </View>
//           </View>

//           {/* Header */}
//           <View style={styles.headerSection}>
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           {!isOtpSent ? (
//             <>
//               {/* Mobile Number Input View */}
//               <View style={styles.inputContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder={translations.enterMobile[language]}
//                   placeholderTextColor="#999"
//                   keyboardType="phone-pad"
//                   maxLength={10}
//                   value={mobileNumber}
//                   onChangeText={setMobileNumber}
//                 />
//               </View>
//               <TouchableOpacity
//                 style={[styles.continueButton, isLoading && styles.disabledButton]}
//                 onPress={handleSendOtp}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.sendOtp[language]}</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {/* OTP Input View with Edit Number Option */}
//               <View style={styles.otpHeader}>
//                 <Text style={styles.otpSentText}>
//                   {translations.otpSent[language]} {mobileNumber}
//                 </Text>
//                 <TouchableOpacity onPress={handleEditNumber} style={styles.editButton}>
//                   <MaterialIcons name="edit" size={18} color="#7e57c2" />
//                   <Text style={styles.editText}>{translations.editNumber[language]}</Text>
//                 </TouchableOpacity>
//               </View>
              
//               <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
//                 <View style={styles.otpContainer}>
//                   {otp.map((digit, index) => (
//                     <TextInput
//                       ref={(ref) => (otpInputRefs.current[index] = ref)}
//                       key={index}
//                       style={styles.otpInput}
//                       keyboardType="number-pad"
//                       maxLength={1}
//                       value={digit}
//                       onChangeText={(value) => handleOtpChange(value, index)}
//                       onKeyPress={(e) => handleKeyPress(e, index)}
//                       textContentType="oneTimeCode"
//                       autoComplete="one-time-code"
//                     />
//                   ))}
//                 </View>
//               </Animated.View>

//               {/* Resend OTP Section */}
//               <View style={styles.resendContainer}>
//                 <Text style={styles.countdownText}>
//                   {countdown > 0
//                     ? `${translations.resendIn[language]} ${countdown}s`
//                     : translations.didntReceive[language]}
//                 </Text>
//                 <TouchableOpacity
//                   onPress={handleResendOtp}
//                   disabled={isResendDisabled || isLoading}
//                 >
//                   <Text style={[
//                     styles.resendText,
//                     (isResendDisabled || isLoading) && styles.disabledResend
//                   ]}>
//                     {translations.resend[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Verify Button */}
//               <TouchableOpacity
//                 style={[
//                   styles.continueButton,
//                   (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//                 ]}
//                 onPress={handleVerifyOtp}
//                 disabled={otp.join('').length !== 6 || isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.verify[language]}</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
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
//     alignItems: 'center',
//   },
//   // New Icon Section
//   iconSection: {
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   iconCircle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#7e57c2',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   headerSection: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//     lineHeight: 22,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//     textAlign: 'center',
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 18,
//     borderRadius: 30,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//     marginTop: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#ADB5BD',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 15,
//   },
//   otpSentText: {
//     color: '#666',
//     fontSize: 15,
//     lineHeight: 20,
//     flex: 1,
//   },
//   editButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 8,
//   },
//   editText: {
//     color: '#7e57c2',
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   otpSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 15,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 50,
//     height: 55,
//     borderRadius: 12,
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 25,
//     justifyContent: 'center',
//     gap: 8,
//   },
//   countdownText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   disabledResend: {
//     color: '#ADB5BD',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//     lineHeight: 22,
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });



//23/09/2025
// //app/homescreens/info9.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   ActivityIndicator,
//   Image,
//   Modal,
//   Animated,
//   ScrollView
// } from 'react-native';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import { sendOtp, verifyOtp } from '../services/otpService';
// import { useProfileNavigation } from '../utils/navigationHelper';

// export default function Info9() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [countdown, setCountdown] = useState(30);
//   const [isResendDisabled, setIsResendDisabled] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const [sessionId, setSessionId] = useState('');
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');
//   const shakeAnimation = useRef(new Animated.Value(0)).current;

//   // Load existing data
//   useEffect(() => {
//     if (userData && userData.mobileNumber) {
//       const numberWithoutCountryCode = userData.mobileNumber.replace('+91', '');
//       setMobileNumber(numberWithoutCountryCode);
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Mobile Verification`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
//           "आपके रिश्तेदार का मोबाइल सत्यापन"
//     },
//     subtitle: {
//       ENG: "We'll send you a verification code",
//       HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
//           "हम आपको एक सत्यापन कोड भेजेंगे"
//     },
//     enterMobile: {
//       ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
//           "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
//     },
//     sendOtp: {
//       ENG: "Send OTP",
//       HI: "OTP भेजें"
//     },
//     otpSent: {
//       ENG: `Code sent to`,
//       HI: profileFor === 'MySelf' ? "कोड आपके मोबाइल पर भेजा गया" :
//           profileFor === 'My Son' ? "कोड आपके बेटे के मोबाइल पर भेजा गया" :
//           profileFor === 'My Daughter' ? "कोड आपकी बेटी के मोबाइल पर भेजा गया" :
//           profileFor === 'My Sister' ? "कोड आपकी बहन के मोबाइल पर भेजा गया" :
//           profileFor === 'My Brother' ? "कोड आपके भाई के मोबाइल पर भेजा गया" :
//           profileFor === 'My Friend' ? "कोड आपके दोस्त के मोबाइल पर भेजा गया" :
//           profileFor === 'Cousin' ? "कोड आपके चचेरे भाई के मोबाइल पर भेजा गया" :
//           "कोड आपके रिश्तेदार के मोबाइल पर भेजा गया"
//     },
//     resendIn: {
//       ENG: "Resend code in",
//       HI: "कोड पुनः भेजें"
//     },
//     didntReceive: {
//       ENG: "Didn't receive code?",
//       HI: "कोड प्राप्त नहीं हुआ?"
//     },
//     resend: {
//       ENG: "Resend",
//       HI: "पुनः भेजें"
//     },
//     verify: {
//       ENG: "Verify",
//       HI: "सत्यापित करें"
//     },
//     verified: {
//       ENG: `${getPrefix()} mobile number verified successfully!`,
//       HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
//           "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
//     },
//     validNumber: {
//       ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
//       HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
//           "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
//     },
//     wrongOtp: {
//       ENG: "Wrong code entered. Please try again.",
//       HI: "गलत कोड दर्ज किया गया। कृपया पुनः प्रयास करें।"
//     },
//     completeOtp: {
//       ENG: "Please enter the complete 6-digit code",
//       HI: "कृपया पूरा 6-अंकीय कोड दर्ज करें"
//     },
//     editNumber: {
//       ENG: "Edit Number",
//       HI: "नंबर संपादित करें"
//     }
//   };

//   const otpInputRefs = useRef([]);
//   const hiddenOtpInputRef = useRef(null);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0 && isOtpSent) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     } else if (countdown === 0 && isOtpSent) {
//       setIsResendDisabled(false);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown, isOtpSent]);

//   // Auto-submit OTP when all 6 digits are entered
//   useEffect(() => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length === 6 && isOtpSent) {
//       handleVerifyOtp();
//     }
//   }, [otp]);

//   const startShake = () => {
//     Animated.sequence([
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
//       Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
//     ]).start();
//   };

//   const showModalWithMessage = (message, isError = false) => {
//     setModalMessage(message);
    
//     if (isError) {
//       setShowErrorModal(true);
//       setTimeout(() => {
//         setShowErrorModal(false);
//       }, 3000);
//     } else {
//       setShowSuccessModal(true);
//       setTimeout(() => {
//         setShowSuccessModal(false);
//       }, 2000);
//     }
//   };

//   const handleSendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsOtpSent(true);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         setOtp(['', '', '', '', '', '']);
        
//         // Focus on first OTP input
//         setTimeout(() => {
//           if (otpInputRefs.current[0]) {
//             otpInputRefs.current[0].focus();
//           }
//         }, 500);
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to send code. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOtp = async () => {
//     if (!mobileNumber || mobileNumber.length !== 10) {
//       showModalWithMessage(translations.validNumber[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await sendOtp(`+91${mobileNumber}`);
      
//       if (result.success) {
//         setSessionId(result.sessionId);
//         setIsResendDisabled(true);
//         setCountdown(30);
//         setOtp(['', '', '', '', '', '']);
//         showModalWithMessage("Code has been resent successfully");
//       } else {
//         showModalWithMessage(result.message, true);
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to resend code. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp.length !== 6) {
//       showModalWithMessage(translations.completeOtp[language], true);
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const result = await verifyOtp(sessionId, enteredOtp);
      
//       if (result.success) {
//         const profileData = {
//           ...userData,
//           mobileNumber: `+91${mobileNumber}`,
//           isMobileVerified: true,
//           profileProgress: 90,
//           updatedAt: serverTimestamp()
//         };

//         await saveUserProfile(profileData, 9);
//         showModalWithMessage(translations.verified[language]);
        
//         setTimeout(() => {
//           router.push(getNextScreen('homescreens/info9'));
//         }, 2000);
//       } else {
//         startShake();
//         showModalWithMessage(translations.wrongOtp[language], true);
//         setOtp(['', '', '', '', '', '']);
//         if (otpInputRefs.current[0]) {
//           otpInputRefs.current[0].focus();
//         }
//       }
//     } catch (error) {
//       showModalWithMessage("Failed to verify code. Please try again.", true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle individual OTP input
//   const handleOtpChange = (value, index) => {
//     if (isNaN(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     // Auto-focus next input
//     if (value && index < 5) {
//       otpInputRefs.current[index + 1].focus();
//     }
//   };

//   // Handle paste in OTP inputs
//   const handleOtpPaste = (event) => {
//     const pastedData = event.nativeEvent.text;
//     const numbersOnly = pastedData.replace(/\D/g, '');
    
//     if (numbersOnly.length === 6) {
//       const otpArray = numbersOnly.split('');
//       setOtp(otpArray);
      
//       // Focus on last input after paste
//       if (otpInputRefs.current[5]) {
//         otpInputRefs.current[5].focus();
//       }
//     }
//   };

//   const handleKeyPress = (e, index) => {
//     if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
//       otpInputRefs.current[index - 1].focus();
//     }
//   };

//   const handleEditNumber = () => {
//     setIsOtpSent(false);
//     setOtp(['', '', '', '', '', '']);
//     setCountdown(30);
//     setIsResendDisabled(true);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity 
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info9'))}
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

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.contentContainer}
//       >
//         {isLoading && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView 
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Large Icon Section */}
//           <View style={styles.iconSection}>
//             <View style={styles.iconCircle}>
//               <MaterialIcons name="verified-user" size={60} color="white" />
//             </View>
//           </View>

//           {/* Header */}
//           <View style={styles.headerSection}>
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>

//           {!isOtpSent ? (
//             <>
//               {/* Mobile Number Input View */}
//               <View style={styles.inputContainer}>
//                 <TextInput
//                   style={styles.input}
//                   placeholder={translations.enterMobile[language]}
//                   placeholderTextColor="#999"
//                   keyboardType="phone-pad"
//                   maxLength={10}
//                   value={mobileNumber}
//                   onChangeText={setMobileNumber}
//                 />
//               </View>
//               <TouchableOpacity
//                 style={[styles.continueButton, isLoading && styles.disabledButton]}
//                 onPress={handleSendOtp}
//                 disabled={isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.sendOtp[language]}</Text>
//               </TouchableOpacity>
//             </>
//           ) : (
//             <>
//               {/* OTP Input View with Edit Number Option */}
//               <View style={styles.otpHeader}>
//                 <Text style={styles.otpSentText}>
//                   {translations.otpSent[language]} {mobileNumber}
//                 </Text>
//                 <TouchableOpacity onPress={handleEditNumber} style={styles.editButton}>
//                   <MaterialIcons name="edit" size={18} color="#7e57c2" />
//                   <Text style={styles.editText}>{translations.editNumber[language]}</Text>
//                 </TouchableOpacity>
//               </View>
              
//               <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
//                 {/* Hidden input for better paste handling */}
//                 <TextInput
//                   ref={hiddenOtpInputRef}
//                   style={styles.hiddenInput}
//                   value={otp.join('')}
//                   onChangeText={(text) => {
//                     const numbersOnly = text.replace(/\D/g, '');
//                     if (numbersOnly.length === 6) {
//                       const otpArray = numbersOnly.split('');
//                       setOtp(otpArray);
//                     }
//                   }}
//                   keyboardType="number-pad"
//                   maxLength={6}
//                 />
                
//                 <View style={styles.otpContainer}>
//                   {otp.map((digit, index) => (
//                     <TextInput
//                       ref={(ref) => (otpInputRefs.current[index] = ref)}
//                       key={index}
//                       style={styles.otpInput}
//                       keyboardType="number-pad"
//                       maxLength={1}
//                       value={digit}
//                       onChangeText={(value) => handleOtpChange(value, index)}
//                       onKeyPress={(e) => handleKeyPress(e, index)}
//                       onPaste={handleOtpPaste}
//                       contextMenuHidden={false}
//                       showSoftInputOnFocus={true}
//                     />
//                   ))}
//                 </View>
//               </Animated.View>

//               {/* Resend OTP Section */}
//               <View style={styles.resendContainer}>
//                 <Text style={styles.countdownText}>
//                   {countdown > 0
//                     ? `${translations.resendIn[language]} ${countdown}s`
//                     : translations.didntReceive[language]}
//                 </Text>
//                 <TouchableOpacity
//                   onPress={handleResendOtp}
//                   disabled={isResendDisabled || isLoading}
//                 >
//                   <Text style={[
//                     styles.resendText,
//                     (isResendDisabled || isLoading) && styles.disabledResend
//                   ]}>
//                     {translations.resend[language]}
//                   </Text>
//                 </TouchableOpacity>
//               </View>

//               {/* Verify Button */}
//               <TouchableOpacity
//                 style={[
//                   styles.continueButton,
//                   (otp.join('').length !== 6 || isLoading) && styles.disabledButton
//                 ]}
//                 onPress={handleVerifyOtp}
//                 disabled={otp.join('').length !== 6 || isLoading}
//               >
//                 <Text style={styles.continueButtonText}>{translations.verify[language]}</Text>
//               </TouchableOpacity>
//             </>
//           )}
//         </ScrollView>
//       </KeyboardAvoidingView>

//       {/* Success Modal */}
//       <Modal
//         visible={showSuccessModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowSuccessModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
//             <Text style={styles.modalText}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>

//       {/* Error Modal */}
//       <Modal
//         visible={showErrorModal}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setShowErrorModal(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContent, styles.errorModalContent]}>
//             <Ionicons name="close-circle" size={50} color="#F44336" />
//             <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
//           </View>
//         </View>
//       </Modal>
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
//     alignItems: 'center',
//   },
//   iconSection: {
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   iconCircle: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: '#7e57c2',
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 6 },
//     shadowOpacity: 0.4,
//     shadowRadius: 8,
//     elevation: 8,
//   },
//   headerSection: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 30,
//     textAlign: 'center',
//     lineHeight: 22,
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 12,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//     textAlign: 'center',
//   },
//   continueButton: {
//     backgroundColor: '#7e57c2',
//     padding: 18,
//     borderRadius: 30,
//     width: '100%',
//     alignItems: 'center',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//     marginTop: 10,
//   },
//   disabledButton: {
//     backgroundColor: '#ADB5BD',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   otpHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 15,
//   },
//   otpSentText: {
//     color: '#666',
//     fontSize: 15,
//     lineHeight: 20,
//     flex: 1,
//   },
//   editButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 8,
//   },
//   editText: {
//     color: '#7e57c2',
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   otpSection: {
//     width: '100%',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   hiddenInput: {
//     position: 'absolute',
//     width: 1,
//     height: 1,
//     opacity: 0,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     maxWidth: 320,
//     marginBottom: 15,
//   },
//   otpInput: {
//     backgroundColor: 'white',
//     width: 50,
//     height: 55,
//     borderRadius: 12,
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     borderWidth: 2,
//     borderColor: '#e0e0e0',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   resendContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 25,
//     justifyContent: 'center',
//     gap: 8,
//   },
//   countdownText: {
//     color: '#666',
//     fontSize: 14,
//   },
//   resendText: {
//     color: '#7e57c2',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   disabledResend: {
//     color: '#ADB5BD',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 25,
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '80%',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 6,
//   },
//   errorModalContent: {
//     borderLeftWidth: 6,
//     borderLeftColor: '#F44336',
//   },
//   modalText: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginTop: 15,
//     color: '#333',
//     lineHeight: 22,
//   },
//   errorModalText: {
//     color: '#F44336',
//     fontWeight: '600',
//   },
// });




//30/09/2025
//app/homescreens/info9.jsx
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Image,
  Modal,
  Animated,
  ScrollView
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { sendOtp, verifyOtp } from '../services/otpService';
import { useProfileNavigation } from '../utils/navigationHelper';

export default function Info9() {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  // Load existing data
  useEffect(() => {
    if (userData && userData.mobileNumber) {
      const numberWithoutCountryCode = userData.mobileNumber.replace('+91', '');
      setMobileNumber(numberWithoutCountryCode);
    }
  }, [userData]);

  // Translations
  const translations = {
    title: {
      ENG: `${getPrefix()} Mobile Verification`,
      HI: profileFor === 'MySelf' ? "आपका मोबाइल सत्यापन" :
          profileFor === 'My Son' ? "आपके बेटे का मोबाइल सत्यापन" :
          profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल सत्यापन" :
          profileFor === 'My Sister' ? "आपकी बहन का मोबाइल सत्यापन" :
          profileFor === 'My Brother' ? "आपके भाई का मोबाइल सत्यापन" :
          profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल सत्यापन" :
          profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल सत्यापन" :
          "आपके रिश्तेदार का मोबाइल सत्यापन"
    },
    subtitle: {
      ENG: "We'll send you a verification code",
      HI: profileFor === 'MySelf' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
          profileFor === 'My Son' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
          profileFor === 'My Daughter' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
          profileFor === 'My Sister' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
          profileFor === 'My Brother' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
          profileFor === 'My Friend' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
          profileFor === 'Cousin' ? "हम आपको एक सत्यापन कोड भेजेंगे" :
          "हम आपको एक सत्यापन कोड भेजेंगे"
    },
    enterMobile: {
      ENG: `Enter ${getPrefix().toLowerCase()} mobile number`,
      HI: profileFor === 'MySelf' ? "अपना मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Son' ? "अपने बेटे का मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Daughter' ? "अपनी बेटी का मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Sister' ? "अपनी बहन का मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Brother' ? "अपने भाई का मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Friend' ? "अपने दोस्त का मोबाइल नंबर दर्ज करें" :
          profileFor === 'Cousin' ? "अपने चचेरे भाई का मोबाइल नंबर दर्ज करें" :
          "अपने रिश्तेदार का मोबाइल नंबर दर्ज करें"
    },
    sendOtp: {
      ENG: "Send OTP",
      HI: "OTP भेजें"
    },
    otpSent: {
      ENG: `Code sent to`,
      HI: profileFor === 'MySelf' ? "कोड आपके मोबाइल पर भेजा गया" :
          profileFor === 'My Son' ? "कोड आपके बेटे के मोबाइल पर भेजा गया" :
          profileFor === 'My Daughter' ? "कोड आपकी बेटी के मोबाइल पर भेजा गया" :
          profileFor === 'My Sister' ? "कोड आपकी बहन के मोबाइल पर भेजा गया" :
          profileFor === 'My Brother' ? "कोड आपके भाई के मोबाइल पर भेजा गया" :
          profileFor === 'My Friend' ? "कोड आपके दोस्त के मोबाइल पर भेजा गया" :
          profileFor === 'Cousin' ? "कोड आपके चचेरे भाई के मोबाइल पर भेजा गया" :
          "कोड आपके रिश्तेदार के मोबाइल पर भेजा गया"
    },
    enterOtp: {
      ENG: "Enter 6-digit code",
      HI: "6-अंकीय कोड दर्ज करें"
    },
    resendIn: {
      ENG: "Resend code in",
      HI: "कोड पुनः भेजें"
    },
    didntReceive: {
      ENG: "Didn't receive code?",
      HI: "कोड प्राप्त नहीं हुआ?"
    },
    resend: {
      ENG: "Resend",
      HI: "पुनः भेजें"
    },
    verify: {
      ENG: "Verify",
      HI: "सत्यापित करें"
    },
    verified: {
      ENG: `${getPrefix()} mobile number verified successfully!`,
      HI: profileFor === 'MySelf' ? "आपका मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
          profileFor === 'My Son' ? "आपके बेटे का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
          profileFor === 'My Daughter' ? "आपकी बेटी का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
          profileFor === 'My Sister' ? "आपकी बहन का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
          profileFor === 'My Brother' ? "आपके भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
          profileFor === 'My Friend' ? "आपके दोस्त का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
          profileFor === 'Cousin' ? "आपके चचेरे भाई का मोबाइल नंबर सफलतापूर्वक सत्यापित!" :
          "आपके रिश्तेदार का मोबाइल नंबर सफलतापूर्वक सत्यापित!"
    },
    validNumber: {
      ENG: `Please enter a valid 10-digit ${getPrefix().toLowerCase()} mobile number`,
      HI: profileFor === 'MySelf' ? "कृपया अपना वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Son' ? "कृपया अपने बेटे का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Daughter' ? "कृपया अपनी बेटी का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Sister' ? "कृपया अपनी बहन का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Brother' ? "कृपया अपने भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
          profileFor === 'My Friend' ? "कृपया अपने दोस्त का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
          profileFor === 'Cousin' ? "कृपया अपने चचेरे भाई का वैध 10-अंकीय मोबाइल नंबर दर्ज करें" :
          "कृपया अपने रिश्तेदार का वैध 10-अंकीय मोबाइल नंबर दर्ज करें"
    },
    wrongOtp: {
      ENG: "Wrong code entered. Please try again.",
      HI: "गलत कोड दर्ज किया गया। कृपया पुनः प्रयास करें।"
    },
    completeOtp: {
      ENG: "Please enter the complete 6-digit code",
      HI: "कृपया पूरा 6-अंकीय कोड दर्ज करें"
    },
    editNumber: {
      ENG: "Edit Number",
      HI: "नंबर संपादित करें"
    }
  };

  const otpInputRefs = useRef([]);
  const hiddenOtpInputRef = useRef(null);

  useEffect(() => {
    let timer;
    if (countdown > 0 && isOtpSent) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0 && isOtpSent) {
      setIsResendDisabled(false);
    }
    return () => clearTimeout(timer);
  }, [countdown, isOtpSent]);

  // Auto-submit OTP when all 6 digits are entered
  useEffect(() => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 6 && isOtpSent) {
      handleVerifyOtp();
    }
  }, [otp]);

  const startShake = () => {
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 100, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 100, useNativeDriver: true })
    ]).start();
  };

  const showModalWithMessage = (message, isError = false) => {
    setModalMessage(message);
    
    if (isError) {
      setShowErrorModal(true);
      setTimeout(() => {
        setShowErrorModal(false);
      }, 3000);
    } else {
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 2000);
    }
  };

  const handleSendOtp = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      showModalWithMessage(translations.validNumber[language], true);
      return;
    }

    setIsLoading(true);
    try {
      const result = await sendOtp(`+91${mobileNumber}`);
      
      if (result.success) {
        setSessionId(result.sessionId);
        setIsOtpSent(true);
        setIsResendDisabled(true);
        setCountdown(30);
        setOtp(['', '', '', '', '', '']);
        
        // Focus on first OTP input
        setTimeout(() => {
          if (otpInputRefs.current[0]) {
            otpInputRefs.current[0].focus();
          }
        }, 500);
      } else {
        showModalWithMessage(result.message, true);
      }
    } catch (error) {
      showModalWithMessage("Failed to send code. Please try again.", true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      showModalWithMessage(translations.validNumber[language], true);
      return;
    }

    setIsLoading(true);
    try {
      const result = await sendOtp(`+91${mobileNumber}`);
      
      if (result.success) {
        setSessionId(result.sessionId);
        setIsResendDisabled(true);
        setCountdown(30);
        setOtp(['', '', '', '', '', '']);
        showModalWithMessage("Code has been resent successfully");
      } else {
        showModalWithMessage(result.message, true);
      }
    } catch (error) {
      showModalWithMessage("Failed to resend code. Please try again.", true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      showModalWithMessage(translations.completeOtp[language], true);
      return;
    }

    setIsLoading(true);
    try {
      const result = await verifyOtp(sessionId, enteredOtp);
      
      if (result.success) {
        const profileData = {
          ...userData,
          mobileNumber: `+91${mobileNumber}`,
          isMobileVerified: true,
          profileProgress: 90,
          updatedAt: serverTimestamp()
        };

        await saveUserProfile(profileData, 9);
        showModalWithMessage(translations.verified[language]);
        
        setTimeout(() => {
          router.push(getNextScreen('homescreens/info9'));
        }, 2000);
      } else {
        startShake();
        showModalWithMessage(translations.wrongOtp[language], true);
        setOtp(['', '', '', '', '', '']);
        if (otpInputRefs.current[0]) {
          otpInputRefs.current[0].focus();
        }
      }
    } catch (error) {
      showModalWithMessage("Failed to verify code. Please try again.", true);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle individual OTP input
  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1].focus();
    }
  };

  // Handle paste in OTP inputs
  const handleOtpPaste = (event) => {
    const pastedData = event.nativeEvent.text;
    const numbersOnly = pastedData.replace(/\D/g, '');
    
    if (numbersOnly.length === 6) {
      const otpArray = numbersOnly.split('');
      setOtp(otpArray);
      
      // Focus on last input after paste
      if (otpInputRefs.current[5]) {
        otpInputRefs.current[5].focus();
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  const handleEditNumber = () => {
    setIsOtpSent(false);
    setOtp(['', '', '', '', '', '']);
    setCountdown(30);
    setIsResendDisabled(true);
  };

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info9'))}
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

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.contentContainer}
      >
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#7e57c2" />
          </View>
        )}

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Show Icon only when OTP is not sent */}
          {!isOtpSent && (
            <View style={styles.iconSection}>
              <View style={styles.iconCircle}>
                <MaterialIcons name="verified-user" size={60} color="white" />
              </View>
            </View>
          )}

          {/* Header */}
          <View style={styles.headerSection}>
            <Text style={styles.title}>{translations.title[language]}</Text>
          </View>

          {!isOtpSent ? (
            <>
              {/* Mobile Number Input View */}
              <Text style={styles.subtitle}>{translations.subtitle[language]}</Text>
              
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder={translations.enterMobile[language]}
                  placeholderTextColor="#999"
                  keyboardType="phone-pad"
                  maxLength={10}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                />
              </View>
              <TouchableOpacity
                style={[styles.continueButton, isLoading && styles.disabledButton]}
                onPress={handleSendOtp}
                disabled={isLoading}
              >
                <Text style={styles.continueButtonText}>{translations.sendOtp[language]}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* OTP Input View - Clean UI without icon */}
              <View style={styles.otpHeader}>
                <View style={styles.otpInfo}>
                  <Text style={styles.otpSentText}>
                    {translations.otpSent[language]}
                  </Text>
                  <Text style={styles.mobileNumberText}>
                    +91 {mobileNumber}
                  </Text>
                </View>
                <TouchableOpacity onPress={handleEditNumber} style={styles.editButton}>
                  <MaterialIcons name="edit" size={18} color="#7e57c2" />
                  <Text style={styles.editText}>{translations.editNumber[language]}</Text>
                </TouchableOpacity>
              </View>
              
              <Text style={styles.otpInstruction}>{translations.enterOtp[language]}</Text>
              
              <Animated.View style={[styles.otpSection, { transform: [{ translateX: shakeAnimation }] }]}>
                {/* Hidden input for better paste handling */}
                <TextInput
                  ref={hiddenOtpInputRef}
                  style={styles.hiddenInput}
                  value={otp.join('')}
                  onChangeText={(text) => {
                    const numbersOnly = text.replace(/\D/g, '');
                    if (numbersOnly.length === 6) {
                      const otpArray = numbersOnly.split('');
                      setOtp(otpArray);
                    }
                  }}
                  keyboardType="number-pad"
                  maxLength={6}
                />
                
                <View style={styles.otpContainer}>
                  {otp.map((digit, index) => (
                    <TextInput
                      ref={(ref) => (otpInputRefs.current[index] = ref)}
                      key={index}
                      style={[
                        styles.otpInput,
                        digit && styles.otpInputFilled
                      ]}
                      keyboardType="number-pad"
                      maxLength={1}
                      value={digit}
                      onChangeText={(value) => handleOtpChange(value, index)}
                      onKeyPress={(e) => handleKeyPress(e, index)}
                      onPaste={handleOtpPaste}
                      contextMenuHidden={false}
                      showSoftInputOnFocus={true}
                      selectionColor="#7e57c2"
                    />
                  ))}
                </View>
              </Animated.View>

              {/* Resend OTP Section */}
              <View style={styles.resendContainer}>
                <Text style={styles.countdownText}>
                  {countdown > 0
                    ? `${translations.resendIn[language]} ${countdown}s`
                    : translations.didntReceive[language]}
                </Text>
                <TouchableOpacity
                  onPress={handleResendOtp}
                  disabled={isResendDisabled || isLoading}
                >
                  <Text style={[
                    styles.resendText,
                    (isResendDisabled || isLoading) && styles.disabledResend
                  ]}>
                    {translations.resend[language]}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Verify Button */}
              <TouchableOpacity
                style={[
                  styles.continueButton,
                  (otp.join('').length !== 6 || isLoading) && styles.disabledButton
                ]}
                onPress={handleVerifyOtp}
                disabled={otp.join('').length !== 6 || isLoading}
              >
                <Text style={styles.continueButtonText}>{translations.verify[language]}</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Success Modal */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="checkmark-circle" size={50} color="#4CAF50" />
            <Text style={styles.modalText}>{modalMessage}</Text>
          </View>
        </View>
      </Modal>

      {/* Error Modal */}
      <Modal
        visible={showErrorModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowErrorModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, styles.errorModalContent]}>
            <Ionicons name="close-circle" size={50} color="#F44336" />
            <Text style={[styles.modalText, styles.errorModalText]}>{modalMessage}</Text>
          </View>
        </View>
      </Modal>
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
    alignItems: 'center',
  },
  iconSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#7e57c2',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 25,
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#7e57c2',
    padding: 18,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: '#ADB5BD',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  otpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  otpInfo: {
    flex: 1,
  },
  otpSentText: {
    color: '#666',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  mobileNumberText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#f3e5f5',
    borderRadius: 8,
  },
  editText: {
    color: '#7e57c2',
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '500',
  },
  otpInstruction: {
    fontSize: 16,
    color: '#666',
    marginBottom: 25,
    textAlign: 'center',
    width: '100%',
  },
  otpSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  hiddenInput: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 320,
    marginBottom: 15,
  },
  otpInput: {
    backgroundColor: 'white',
    width: 50,
    height: 55,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  otpInputFilled: {
    borderColor: '#7e57c2',
    backgroundColor: '#f3e5f5',
  },
  resendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    justifyContent: 'center',
    gap: 8,
  },
  countdownText: {
    color: '#666',
    fontSize: 14,
  },
  resendText: {
    color: '#7e57c2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  disabledResend: {
    color: '#ADB5BD',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  errorModalContent: {
    borderLeftWidth: 6,
    borderLeftColor: '#F44336',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
    color: '#333',
    lineHeight: 22,
  },
  errorModalText: {
    color: '#F44336',
    fontWeight: '600',
  }, 
});