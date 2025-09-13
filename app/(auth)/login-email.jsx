// app/(auth)/login-email.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
// import { Redirect, useRouter } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient';
// import { AntDesign } from '@expo/vector-icons';
// import { useState } from 'react';
// import { useSignIn } from '@clerk/clerk-expo';
// import { useAuth } from '../hooks/useAuth';

// export default function LoginEmail() {
//     const router = useRouter();
//     const { signIn, setActive, isLoaded } = useSignIn();
//     const { isSignedIn } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleLogin = async () => {
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
//                         onPress={handleLogin}
//                         disabled={loading || !email || !password}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="white" />
//                         ) : (
//                             <Text style={styles.loginButtonText}>Login</Text>
//                         )}
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity
//                         style={styles.forgotPassword}
//                         onPress={() => router.push('/forgot-password')}
//                     >
//                         <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//                     </TouchableOpacity>
//                 </View>
                
//                 <View style={styles.signupPrompt}>
//                     <Text style={styles.signupText}>Don't have an account?</Text>
//                     <TouchableOpacity onPress={() => router.push('/signup')}>
//                         <Text style={styles.signupLink}> Sign Up</Text>
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
//     forgotPassword: {
//         alignSelf: 'flex-end',
//         marginTop: 10,
//     },
//     forgotPasswordText: {
//         color: '#6C63FF',
//         fontSize: 14,
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



//trail2
// app/(auth)/login-email.jsx
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
// import { useRouter, Redirect } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient';
// import { AntDesign, MaterialIcons } from '@expo/vector-icons';
// import { useState } from 'react';
// import { useSignIn } from '@clerk/clerk-expo';
// import { useAuth } from '../hooks/useAuth';

// export default function LoginEmail() {
//     const router = useRouter();
//     const { signIn, setActive, isLoaded } = useSignIn();
//     const { isSignedIn } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleLogin = async () => {
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
//                 <Text style={styles.title}>Login to your account</Text>
                
//                 {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
//                 <View style={styles.form}>
//                     <View style={styles.inputContainer}>
//                         <MaterialIcons name="email" size={20} color="#6C63FF" />
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
//                         <AntDesign name="lock" size={20} color="#6C63FF" />
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
//                         onPress={handleLogin}
//                         disabled={loading || !email || !password}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="white" />
//                         ) : (
//                             <Text style={styles.loginButtonText}>Login</Text>
//                         )}
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity
//                         style={styles.forgotPassword}
//                         onPress={() => router.push('/forgot-password')}
//                     >
//                         <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//                     </TouchableOpacity>
//                 </View>
                
//                 <View style={styles.signupPrompt}>
//                     <Text style={styles.signupText}>Don't have an account?</Text>
//                     <TouchableOpacity onPress={() => router.push('/signup')}>
//                         <Text style={styles.signupLink}> Sign Up</Text>
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
//         paddingHorizontal: 10,
//     },
//     input: {
//         flex: 1,
//         height: 50,
//         fontSize: 16,
//         marginLeft: 10,
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
//     forgotPassword: {
//         alignSelf: 'flex-end',
//         marginTop: 10,
//     },
//     forgotPasswordText: {
//         color: '#6C63FF',
//         fontSize: 14,
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




//trail3

// import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
// import { useRouter, Redirect } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient';
// import { AntDesign, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { useState } from 'react';
// import { useSignIn, useOAuth } from '@clerk/clerk-expo';
// import { useAuth } from '../hooks/useAuth';
// import useWarmUpBrowser from '../hooks/useWarmUpBrowser';

// export default function LoginEmail() {
//     const router = useRouter();
//     const { signIn, setActive, isLoaded } = useSignIn();
//     const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
//     const { isSignedIn } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
    
//     useWarmUpBrowser();

//     const handleLogin = async () => {
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
//                 router.replace("/login-email");
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
//                 <Text style={styles.title}>Login to your account</Text>
                
//                 {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
//                 <View style={styles.form}>
//                     <View style={styles.inputContainer}>
//                         <MaterialIcons name="email" size={20} color="#6C63FF" />
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
//                         <AntDesign name="lock" size={20} color="#6C63FF" />
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
//                         onPress={handleLogin}
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
                    
//                     <View style={styles.footer}>
//                         <Text style={styles.footerText}>Don't have an account?</Text>
//                         <TouchableOpacity onPress={() => router.push('/signup')}>
//                             <Text style={styles.footerLink}> Sign Up</Text>
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
//         paddingHorizontal: 10,
//     },
//     input: {
//         flex: 1,
//         height: 50,
//         fontSize: 16,
//         marginLeft: 10,
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
//     footer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 25,
//     },
//     footerText: {
//         color: '#495057',
//     },
//     footerLink: {
//         color: '#6C63FF',
//         fontWeight: '600',
//     },
// });



//trail4
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
// import { useRouter, Redirect } from 'expo-router';
// import { LinearGradient } from 'expo-linear-gradient';
// import { AntDesign, MaterialIcons } from '@expo/vector-icons';
// import { useState } from 'react';
// import { useSignIn } from '@clerk/clerk-expo';
// import { useAuth } from '../hooks/useAuth';

// export default function LoginEmail() {
//     const router = useRouter();
//     const { signIn, setActive, isLoaded } = useSignIn();
//     const { isSignedIn } = useAuth();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleLogin = async () => {
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
//                 <Text style={styles.title}>Login with Email</Text>
                
//                 {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
//                 <View style={styles.form}>
//                     <View style={styles.inputContainer}>
//                         <MaterialIcons name="email" size={20} color="#6C63FF" />
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
//                         <AntDesign name="lock" size={20} color="#6C63FF" />
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
//                         onPress={handleLogin}
//                         disabled={loading || !email || !password}
//                     >
//                         {loading ? (
//                             <ActivityIndicator color="white" />
//                         ) : (
//                             <Text style={styles.loginButtonText}>Login</Text>
//                         )}
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity
//                         style={styles.forgotPassword}
//                         onPress={() => router.push('/forgot-password')}
//                     >
//                         <Text style={styles.forgotPasswordText}>Forgot password?</Text>
//                     </TouchableOpacity>
//                 </View>
                
//                 <View style={styles.signupPrompt}>
//                     <Text style={styles.signupText}>Don't have an account?</Text>
//                     <TouchableOpacity onPress={() => router.push('/signup')}>
//                         <Text style={styles.signupLink}> Create Account</Text>
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
//         paddingHorizontal: 10,
//     },
//     input: {
//         flex: 1,
//         height: 50,
//         fontSize: 16,
//         marginLeft: 10,
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
//     forgotPassword: {
//         alignSelf: 'flex-end',
//         marginTop: 10,
//     },
//     forgotPasswordText: {
//         color: '#6C63FF',
//         fontSize: 14,
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










//trail5



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
    const [error, setError] = useState('');
    
    useWarmUpBrowser();

    const handleEmailLogin = async () => {
        if (!isLoaded) return;
        
        setLoading(true);
        setError('');
        
        try {
            const completeSignIn = await signIn.create({
                identifier: email,
                password,
            });

            await setActive({ session: completeSignIn.createdSessionId });
            router.replace("/(tabs)");
        } catch (err) {
            console.error("Login error:", err.errors);
            setError(err.errors[0]?.message || "Login failed. Please try again.");
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
            if (err.errors?.[0]?.code === "form_identifier_exists") {
                router.replace("/email-login");
            }
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
                    source={require('../../assets/images/login1.jpg')} 
                    style={styles.logo}
                />
                
                <Text style={styles.title}>Login to your account</Text>
                
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <AntDesign name="mail" size={20} color="#6C63FF" style={styles.inputIcon} />
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
                        <AntDesign name="lock" size={20} color="#6C63FF" style={styles.inputIcon} />
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
                        style={styles.loginButton} 
                        onPress={handleEmailLogin}
                        disabled={loading || !email || !password}
                    >
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text style={styles.loginButtonText}>Login</Text>
                        )}
                    </TouchableOpacity>

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
                                <Text style={styles.googleButtonText}>Login with Google</Text>
                            </>
                        )}
                    </TouchableOpacity>
                    
                    <View style={styles.signupPrompt}>
                        <Text style={styles.signupText}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => router.push('/signup')}>
                            <Text style={styles.signupLink}> Sign Up</Text>
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
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#6C63FF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginTop: 15,
        gap: 12,
    },
    googleButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    signupPrompt: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25,
    },
    signupText: {
        color: 'white',
    },
    signupLink: {
        color: 'white',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});