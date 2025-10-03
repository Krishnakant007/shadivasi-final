// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
// import { useRouter, Redirect } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient';
// import { AntDesign, FontAwesome } from '@expo/vector-icons';
// import { useState } from 'react';
// import { useSignIn, useOAuth } from '@clerk/clerk-expo';
// import { useAuth } from '../hooks/useAuth';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';

// export default function EmailLogin() {
//     const router = useRouter();
//     const { signIn, setActive, isLoaded } = useSignIn();
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isSignedIn } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
    
//     useWarmUpBrowser();

//     const handleEmailLogin = async () => {
//         if (!isLoaded) return;
        
//         setLoading(true);
//         setError('');
        
//         try {
//             const completeSignIn = await signIn.create({
//                 identifier: email,
//                 password,
//             });

//             await setActive({ session: completeSignIn.createdSessionId });
//             router.replace("/(tabs)");
//         } catch (err) {
//             console.error("Login error:", err.errors);
//             setError(err.errors[0]?.message || "Login failed. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const onGoogleSignIn = async () => {
//         try {
//             setLoading(true);
//             const { createdSessionId, setActive } = await googleAuth();
            
//             if (createdSessionId) {
//                 await setActive({ session: createdSessionId });
//                 router.replace("/homescreens/info1");
//             }
//         } catch (err) {
//             console.error("OAuth error", err);
//             if (err.errors?.[0]?.code === "form_identifier_exists") {
//                 router.replace("/email-login");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (isSignedIn) {
//         return <Redirect href="/(tabs)" />;
//     }

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
//             </View>

//             <View style={styles.content}>
//                 <Image
//                     source={require('../../assets/images/login1.jpg')}
//                     style={styles.logo}
//                 />
                
//                 <Text style={styles.title}>Login to your account</Text>
                
//                 {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
//                 <View style={styles.form}>
//                     <View style={styles.inputContainer}>
//                         <AntDesign name="mail" size={20} color="#6C63FF" style={styles.inputIcon} />
//                         <TextInput
//                             style={styles.input}
//                             placeholder="Email Address"
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
//                             placeholder="Password"
//                             placeholderTextColor="#999"
//                             value={password}
//                             onChangeText={setPassword}
//                             secureTextEntry
//                         />
//                     </View>
                    
//                     <TouchableOpacity
//                         style={styles.loginButton}
//                         onPress={handleEmailLogin}
//                         disabled={loading || !email || !password}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="white" />
//                         ) : (
//                             <Text style={styles.loginButtonText}>Login</Text>
//                         )}
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         style={styles.googleButton}
//                         onPress={onGoogleSignIn}
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="#DB4437" />
//                         ) : (
//                             <>
//                                 <FontAwesome name="google" size={20} color="#DB4437" />
//                                 <Text style={styles.googleButtonText}>Login with Google</Text>
//                             </>
//                         )}
//                     </TouchableOpacity>
                    
//                     <View style={styles.signupPrompt}>
//                         <Text style={styles.signupText}>Don't have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/signup')}>
//                             <Text style={styles.signupLink}> Sign Up</Text>
//                         </TouchableOpacity>
//                     </View>
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
//         padding: 20,
//         paddingTop: 50,
//     },
//     backButton: {
//         padding: 10,
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
//     loginButton: {
//         backgroundColor: '#6C63FF',
//         padding: 15,
//         borderRadius: 10,
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     loginButtonText: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 18,
//     },
//     googleButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'white',
//         padding: 15,
//         borderRadius: 10,
//         marginTop: 15,
//         gap: 12,
//     },
//     googleButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#333',
//     },
//     signupPrompt: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 25,
//     },
//     signupText: {
//         color: 'white',
//     },
//     signupLink: {
//         color: 'white',
//         fontWeight: 'bold',
//         textDecorationLine: 'underline',
//     },
// });








// trail1

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useRouter, Redirect } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useSignIn, useOAuth } from '@clerk/clerk-expo';
import { useAuth } from '../hooks/useAuth';
import useWarmUpBrowser from '../hooks/useWarmUpBrowser';

export default function EmailLogin() {
    const router = useRouter();
    const { signIn, setActive, isLoaded } = useSignIn();
    const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
    const { isSignedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        general: ''
    });
    
    useWarmUpBrowser();

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            email: '',
            password: '',
            general: ''
        };

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleEmailLogin = async () => {
        if (!validateForm()) return;
        
        setLoading(true);
        setErrors({...errors, general: ''});
        
        try {
            const completeSignIn = await signIn.create({
                identifier: email,
                password,
            });

            await setActive({ session: completeSignIn.createdSessionId });
            router.replace("/(tabs)");
        } catch (err) {
            console.error("Login error:", err.errors);
            setErrors({
                ...errors,
                general: err.errors[0]?.message || "Login failed. Please try again."
            });
        } finally {
            setLoading(false);
        }
    };

    const onGoogleSignIn = async () => {
        try {
            setLoading(true);
            const { createdSessionId, setActive } = await googleAuth();
            
            if (createdSessionId) {
                await setActive({ session: createdSessionId });
                router.replace("/homescreens/info1");
            }
        } catch (err) {
            console.error("OAuth error", err);
            setErrors({
                ...errors,
                general: err.errors?.[0]?.message || "Google login failed"
            });
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
                <Image 
                    source={require('../../assets/images/login1.png')} 
                    style={styles.logo}
                />
                
                <Text style={styles.title}>Login with Email</Text>
                
                {errors.general ? <Text style={styles.errorText}>{errors.general}</Text> : null}
                
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Email Address</Text>
                        <View style={[
                            styles.inputContainer,
                            errors.email ? styles.inputError : null
                        ]}>
                            <AntDesign name="mail" size={20} color="#6C63FF" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your email"
                                placeholderTextColor="#999"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                        {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                    </View>
                    
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Password</Text>
                        <View style={[
                            styles.inputContainer,
                            errors.password ? styles.inputError : null
                        ]}>
                            <AntDesign name="lock" size={20} color="#6C63FF" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter your password"
                                placeholderTextColor="#999"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                        {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                    </View>
                    
                    <TouchableOpacity 
                        style={styles.loginButton} 
                        onPress={handleEmailLogin}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text style={styles.loginButtonText}>Login</Text>
                        )}
                    </TouchableOpacity>

                    <View style={styles.dividerContainer}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>OR</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    <TouchableOpacity
                        style={styles.googleButton}
                        onPress={onGoogleSignIn}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#DB4437" />
                        ) : (
                            <>
                                <FontAwesome name="google" size={20} color="#DB4437" />
                                <Text style={styles.googleButtonText}>Continue with Google</Text>
                            </>
                        )}
                    </TouchableOpacity>
                    
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => router.push('/signup')}>
                            <Text style={styles.footerLink}> Sign Up</Text>
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
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 30,
        borderRadius: 40,
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
        fontSize: 14,
        marginTop: 5,
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
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#495057',
        marginBottom: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E9ECEF',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
    },
    inputError: {
        borderColor: '#ff6b6b',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#6C63FF',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E9ECEF',
    },
    dividerText: {
        color: '#6C757D',
        paddingHorizontal: 10,
        fontSize: 14,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#E9ECEF',
        gap: 12,
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
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