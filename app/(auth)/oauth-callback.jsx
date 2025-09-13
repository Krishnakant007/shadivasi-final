import { useEffect } from 'react';
import { useOAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

export default function OAuthCallback() {
  const { handleRedirect } = useOAuth();
  const router = useRouter();

  useEffect(() => {
    const processOAuth = async () => {
      try {
        await handleRedirect();
        router.replace("/homescreens/info1");
      } catch (err) {
        console.error("OAuth processing error", err);
        router.replace("/");
      }
    };
    
    processOAuth();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}