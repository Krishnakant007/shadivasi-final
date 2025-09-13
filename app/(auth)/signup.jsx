// //app/(auth)/signup.jsx

// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { AntDesign } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useState } from 'react';

// export default function Signup() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async () => {
//     setLoading(true);
//     try {
//       // Add your signup logic here
//       // After successful signup:
//       router.push('/homescreens/info1');
//     } catch (error) {
//       console.error('Signup error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Translations
//   const translations = {
//     title: {
//       ENG: "Create Account",
//       HI: "खाता बनाएं"
//     },
//     namePlaceholder: {
//       ENG: "Full Name",
//       HI: "पूरा नाम"
//     },
//     emailPlaceholder: {
//       ENG: "Email Address",
//       HI: "ईमेल पता"
//     },
//     passwordPlaceholder: {
//       ENG: "Password",
//       HI: "पासवर्ड"
//     },
//     signupButton: {
//       ENG: "Sign Up",
//       HI: "साइन अप करें"
//     },
//     loginPrompt: {
//       ENG: "Already have an account?",
//       HI: "क्या आपके पास पहले से एक खाता है?"
//     },
//     loginLink: {
//       ENG: "Log In",
//       HI: "लॉग इन करें"
//     },
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//     >
//       <LinearGradient
//         colors={['#FF6B6B', '#6C63FF']}
//         style={styles.background}
//       />
      
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <AntDesign name="arrowleft" size={24} color="white" />
//         </TouchableOpacity>
        
//         <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
//           <Text style={styles.languageText}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         <Image
//           source={require('../../assets/images/login1.jpg')}
//           style={styles.logo}
//         />
        
//         <Text style={styles.title}>{translations.title[language]}</Text>
        
//         <View style={styles.form}>
//           <View style={styles.inputContainer}>
//             <AntDesign name="user" size={20} color="#6C63FF" style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder={translations.namePlaceholder[language]}
//               placeholderTextColor="#999"
//               value={name}
//               onChangeText={setName}
//               autoCapitalize="words"
//             />
//           </View>
          
//           <View style={styles.inputContainer}>
//             <AntDesign name="mail" size={20} color="#6C63FF" style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder={translations.emailPlaceholder[language]}
//               placeholderTextColor="#999"
//               value={email}
//               onChangeText={setEmail}
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />
//           </View>
          
//           <View style={styles.inputContainer}>
//             <AntDesign name="lock" size={20} color="#6C63FF" style={styles.inputIcon} />
//             <TextInput
//               style={styles.input}
//               placeholder={translations.passwordPlaceholder[language]}
//               placeholderTextColor="#999"
//               value={password}
//               onChangeText={setPassword}
//               secureTextEntry
//             />
//           </View>
          
//           <TouchableOpacity
//             style={styles.signupButton}
//             onPress={handleSignup}
//             disabled={loading}
//           >
//             <Text style={styles.signupButtonText}>
//               {loading ? '...' : translations.signupButton[language]}
//             </Text>
//           </TouchableOpacity>
//         </View>
        
//         <View style={styles.loginPrompt}>
//           <Text style={styles.loginText}>{translations.loginPrompt[language]}</Text>
//           <TouchableOpacity onPress={() => router.push('/login-email')}>
//             <Text style={styles.loginLink}> {translations.loginLink[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   background: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 20,
//     paddingTop: 50,
//   },
//   backButton: {
//     padding: 10,
//   },
//   languageButton: {
//     backgroundColor: 'rgba(255,255,255,0.2)',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   languageText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   content: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 30,
//   },
//   logo: {
//     width: 80,
//     height: 80,
//     alignSelf: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: 'white',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   form: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 10,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     marginBottom: 25,
//   },
//   inputIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     fontSize: 16,
//   },
//   signupButton: {
//     backgroundColor: '#6C63FF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   signupButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   loginPrompt: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 25,
//   },
//   loginText: {
//     color: 'white',
//   },
//   loginLink: {
//     color: 'white',
//     fontWeight: 'bold',
//     textDecorationLine: 'underline',
//   },
// });





//14/08/2025

// app/(auth)/signup.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
// import { Redirect, useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { AntDesign } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useState } from 'react';
// import { useSignUp } from '@clerk/clerk-expo';
// import { useAuth } from '../hooks/useAuth';

// export default function Signup() {
//     const router = useRouter();
//     const { language, toggleLanguage } = useLanguage();
//     const { signUp, setActive, isLoaded } = useSignUp();
//     const { isSignedIn } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleSignup = async () => {
//         if (!isLoaded) return;
        
//         setLoading(true);
//         setError('');
        
//         try {
//             await signUp.create({
//                 emailAddress: email,
//                 password,
//                 firstName: name.split(' ')[0],
//                 lastName: name.split(' ')[1] || '',
//             });

//             await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
//             router.push({ pathname: "/verify-email", params: { email } });
//         } catch (err) {
//             console.error("Signup error:", err.errors);
//             setError(err.errors[0]?.message || "Signup failed. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

//     // Translations
//     const translations = {
//         title: {
//             ENG: "Create Account",
//             HI: "खाता बनाएं"
//         },
//         namePlaceholder: {
//             ENG: "Full Name",
//             HI: "पूरा नाम"
//         },
//         emailPlaceholder: {
//             ENG: "Email Address",
//             HI: "ईमेल पता"
//         },
//         passwordPlaceholder: {
//             ENG: "Password",
//             HI: "पासवर्ड"
//         },
//         signupButton: {
//             ENG: "Sign Up",
//             HI: "साइन अप करें"
//         },
//         loginPrompt: {
//             ENG: "Already have an account?",
//             HI: "क्या आपके पास पहले से एक खाता है?"
//         },
//         loginLink: {
//             ENG: "Log In",
//             HI: "लॉग इन करें"
//         },
//     };

//     return (
//         <KeyboardAvoidingView
//             behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//             style={styles.container}
//         >
//             <LinearGradient
//                 colors={['#FF6B6B', '#6C63FF']}
//                 style={styles.background}
//             />
            
//             <View style={styles.header}>
//                 <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//                     <AntDesign name="arrowleft" size={24} color="white" />
//                 </TouchableOpacity>
                
//                 <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
//                     <Text style={styles.languageText}>{language === 'ENG' ? 'हिंदी' : 'ENG'}</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={styles.content}>
//                 <Image
//                     source={require('../../assets/images/login1.jpg')}
//                     style={styles.logo}
//                 />
                
//                 <Text style={styles.title}>{translations.title[language]}</Text>
                
//                 {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
//                 <View style={styles.form}>
//                     <View style={styles.inputContainer}>
//                         <AntDesign name="user" size={20} color="#6C63FF" style={styles.inputIcon} />
//                         <TextInput
//                             style={styles.input}
//                             placeholder={translations.namePlaceholder[language]}
//                             placeholderTextColor="#999"
//                             value={name}
//                             onChangeText={setName}
//                             autoCapitalize="words"
//                         />
//                     </View>
                    
//                     <View style={styles.inputContainer}>
//                         <AntDesign name="mail" size={20} color="#6C63FF" style={styles.inputIcon} />
//                         <TextInput
//                             style={styles.input}
//                             placeholder={translations.emailPlaceholder[language]}
//                             placeholderTextColor="#999"
//                             value={email}
//                             onChangeText={setEmail}
//                             keyboardType="email-address"
//                             autoCapitalize="none"
//                         />
//                     </View>
                    
//                     <View style={styles.inputContainer}>
//                         <AntDesign name="lock" size={20} color="#6C63FF" style={styles.inputIcon} />
//                         <TextInput
//                             style={styles.input}
//                             placeholder={translations.passwordPlaceholder[language]}
//                             placeholderTextColor="#999"
//                             value={password}
//                             onChangeText={setPassword}
//                             secureTextEntry
//                         />
//                     </View>
                    
//                     <TouchableOpacity
//                         style={styles.signupButton}
//                         onPress={handleSignup}
//                         disabled={loading || !name || !email || !password}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="white" />
//                         ) : (
//                             <Text style={styles.signupButtonText}>
//                                 {translations.signupButton[language]}
//                             </Text>
//                         )}
//                     </TouchableOpacity>
//                 </View>
                
//                 <View style={styles.loginPrompt}>
//                     <Text style={styles.loginText}>{translations.loginPrompt[language]}</Text>
//                     <TouchableOpacity onPress={() => router.push('/login-email')}>
//                         <Text style={styles.loginLink}> {translations.loginLink[language]}</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </KeyboardAvoidingView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     background: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 20,
//         paddingTop: 50,
//     },
//     backButton: {
//         padding: 10,
//     },
//     languageButton: {
//         backgroundColor: 'rgba(255,255,255,0.2)',
//         paddingHorizontal: 15,
//         paddingVertical: 8,
//         borderRadius: 20,
//     },
//     languageText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
//     content: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 30,
//     },
//     logo: {
//         width: 80,
//         height: 80,
//         alignSelf: 'center',
//         marginBottom: 30,
//         borderRadius: 40,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'white',
//         marginBottom: 30,
//         textAlign: 'center',
//     },
//     errorText: {
//         color: '#ff6b6b',
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     form: {
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 25,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 10 },
//         shadowOpacity: 0.1,
//         shadowRadius: 20,
//         elevation: 10,
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderBottomWidth: 1,
//         borderBottomColor: '#eee',
//         marginBottom: 25,
//     },
//     inputIcon: {
//         marginRight: 10,
//     },
//     input: {
//         flex: 1,
//         height: 50,
//         fontSize: 16,
//     },
//     signupButton: {
//         backgroundColor: '#6C63FF',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     signupButtonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 18,
//     },
//     loginPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 25,
//     },
//     loginText: {
//         color: 'white',
//     },
//     loginLink: {
//         color: 'white',
//         fontWeight: 'bold',
//         textDecorationLine: 'underline',
//     },
// });





//trail2
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useRouter, Redirect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { useSignUp } from '@clerk/clerk-expo';
import { useAuth } from '../hooks/useAuth';

export default function Signup() {
    const router = useRouter();
    const { signUp, setActive, isLoaded } = useSignUp();
    const { isSignedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async () => {
        if (!isLoaded) return;
        
        setLoading(true);
        setError('');
        
        try {
            await signUp.create({
                emailAddress: email,
                password,
                firstName: name.split(' ')[0],
                lastName: name.split(' ')[1] || '',
            });

            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            router.push({ pathname: "/verify-email", params: { email } });
        } catch (err) {
            console.error("Signup error:", err.errors);
            setError(err.errors[0]?.message || "Signup failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (isSignedIn) {
        return <Redirect href="/(tabs)" />;
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <LinearGradient
                colors={['#FF6B6B', '#6C63FF']}
                style={styles.background}
            />
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>Create Account</Text>
                
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <AntDesign name="user" size={20} color="#6C63FF" />
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            placeholderTextColor="#999"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="words"
                        />
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <MaterialIcons name="email" size={20} color="#6C63FF" />
                        <TextInput
                            style={styles.input}
                            placeholder="Email Address"
                            placeholderTextColor="#999"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    
                    <View style={styles.inputContainer}>
                        <AntDesign name="lock" size={20} color="#6C63FF" />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                    </View>
                    
                    <TouchableOpacity 
                        style={styles.signupButton} 
                        onPress={handleSignup}
                        disabled={loading || !name || !email || !password}
                    >
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text style={styles.signupButtonText}>Sign Up</Text>
                        )}
                    </TouchableOpacity>
                    
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => router.push('/login-email')}>
                            <Text style={styles.footerLink}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    header: {
        padding: 20,
        paddingTop: 50,
    },
    backButton: {
        padding: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
        textAlign: 'center',
    },
    errorText: {
        color: '#ff6b6b',
        textAlign: 'center',
        marginBottom: 20,
    },
    form: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 25,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
        marginLeft: 10,
    },
    signupButton: {
        backgroundColor: '#6C63FF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    signupButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    footerText: {
        color: '#495057',
    },
    footerLink: {
        color: '#6C63FF',
        fontWeight: '600',
    },
});