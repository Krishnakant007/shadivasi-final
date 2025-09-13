//21/08/2025

// app/components/ProfileProgressLoader.jsx
// import { useEffect } from 'react';
// import { useRouter } from 'expo-router';
// import { useFirestore } from '../hooks/useFirebase';
// import { ActivityIndicator, View } from 'react-native';

// export default function ProfileProgressLoader() {
//   const router = useRouter();
//   const { userData, loading } = useFirestore();

//   useEffect(() => {
//     if (!loading && userData) {
//       const progress = userData.profileProgress || 0;
      
//       if (progress >= 100) {
//         router.replace('/(tabs)');
//         return;
//       }

//       // Determine which screen to show based on progress
//       if (progress < 8) router.replace('/homescreens/info1');
//       else if (progress < 16) router.replace('/homescreens/info2');
//       else if (progress < 25) router.replace('/homescreens/info3');
//       else if (progress < 33) router.replace('/homescreens/info4');
//       else if (progress < 42) router.replace('/homescreens/info5');
//       else if (progress < 50) router.replace('/homescreens/info6');
//       else if (progress < 58) router.replace('/homescreens/info7');
//       else if (progress < 67) router.replace('/homescreens/info8');
//       else if (progress < 75) router.replace('/homescreens/info9');
//       else if (progress < 83) router.replace('/homescreens/info10');
//       else if (progress < 92) router.replace('/homescreens/info11');
//       else if (progress < 100) router.replace('/homescreens/info12');
//       else router.replace('/homescreens/info13');
//     }
//   }, [userData, loading]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }





//31
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useFirestore } from '../hooks/useFirebase';
import { View } from 'react-native';

export default function ProfileProgressLoader() {
  const router = useRouter();
  const { userData } = useFirestore();

  useEffect(() => {
    if (userData) {
      const progress = userData.profileProgress || 0;
      
      if (progress >= 100) {
        router.replace('/(tabs)');
        return;
      }

      // Determine which screen to show based on progress
      if (progress < 8) router.replace('/homescreens/info1');
      else if (progress < 16) router.replace('/homescreens/info2');
      else if (progress < 25) router.replace('/homescreens/info3');
      else if (progress < 33) router.replace('/homescreens/info4');
      else if (progress < 42) router.replace('/homescreens/info5');
      else if (progress < 50) router.replace('/homescreens/info6');
      else if (progress < 58) router.replace('/homescreens/info7');
      else if (progress < 67) router.replace('/homescreens/info8');
      else if (progress < 75) router.replace('/homescreens/info9');
      else if (progress < 83) router.replace('/homescreens/info10');
      else if (progress < 92) router.replace('/homescreens/info11');
      else if (progress < 100) router.replace('/homescreens/info12');
      else router.replace('/homescreens/info13');
    }
  }, [userData]);

  // Return empty view while processing
  return <View />;
}