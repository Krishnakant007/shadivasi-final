// app/(auth)/forgot-password.jsx
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useSignIn } from '@clerk/clerk-expo';

export default function ForgotPassword() {
    const router = useRouter();
    const { signIn } = useSignIn();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleResetPassword = async () => {
        setLoading(true);
        setError('');
        setSuccess('');
        
        try {
            await signIn.create({
                strategy: "reset_password_email_code",
                identifier: email,
            });
            
            setSuccess("Password reset link sent to your email");
        } catch (err) {
            console.error("Reset password error:", err.errors);
            setError(err.errors[0]?.message || "Failed to send reset link. Please try again.");
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
                <Text style={styles.title}>Reset your password</Text>
                <Text style={styles.subtitle}>Enter your email to receive a reset link</Text>
                
                {error ? <Text style={styles.errorText}>{error}</Text> : null}
                {success ? <Text style={styles.successText}>{success}</Text> : null}
                
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    
                    <TouchableOpacity 
                        style={styles.resetButton} 
                        onPress={handleResetPassword}
                        disabled={loading || !email}
                    >
                        {loading ? (
                            <ActivityIndicator color="white" />
                        ) : (
                            <Text style={styles.resetButtonText}>Send Reset Link</Text>
                        )}
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        style={styles.backToLogin}
                        onPress={() => router.push('/login-email')}
                    >
                        <Text style={styles.backToLoginText}>Back to Login</Text>
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
    successText: {
        color: '#4CAF50',
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
    resetButton: {
        backgroundColor: '#6C63FF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    resetButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    backToLogin: {
        alignSelf: 'center',
        marginTop: 20,
    },
    backToLoginText: {
        color: '#6C63FF',
        fontSize: 14,
        fontWeight: '600',
    },
});