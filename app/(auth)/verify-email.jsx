// app/(auth)/verify-email.jsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useSignUp } from '@clerk/clerk-expo';

export default function VerifyEmail() {
    const router = useRouter();
    const { email } = useLocalSearchParams();
    const { signUp, setActive, isLoaded } = useSignUp();
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleVerify = async () => {
        if (!isLoaded) return;
        
        setLoading(true);
        setError('');
        
        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            await setActive({ session: completeSignUp.createdSessionId });
            router.replace("/(tabs)");
        } catch (err) {
            console.error("Verification error:", err.errors);
            setError(err.errors[0]?.message || "Verification failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                <Text style={styles.title}>Verify your email</Text>
                <Text style={styles.subtitle}>We sent a verification code to {email}</Text>
                
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Verification code"
                        placeholderTextColor="#999"
                        value={code}
                        onChangeText={setCode}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                    />
                    
                    <TouchableOpacity 
                        style={styles.verifyButton} 
                        onPress={handleVerify}
                        disabled={loading || !code}
                    >
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text style={styles.verifyButtonText}>Verify Email</Text>
                        )}
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.resendCode}
                        onPress={async () => {
                            try {
                                await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
                                alert("New verification code sent!");
                            } catch (err) {
                                console.error("Resend error:", err);
                                alert("Failed to resend code. Please try again.");
                            }
                        }}
                    >
                        <Text style={styles.resendCodeText}>Resend code</Text>
                    </TouchableOpacity>
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
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
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
    input: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 30,
        fontSize: 16,
        paddingHorizontal: 10,
    },
    verifyButton: {
        backgroundColor: '#6C63FF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    verifyButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    resendCode: {
        alignSelf: 'center',
        marginTop: 20,
    },
    resendCodeText: {
        color: '#6C63FF',
        fontSize: 14,
        fontWeight: '600',
    },
});