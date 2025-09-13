// //app/(auth)/_layout.jsx

// import { Stack } from "expo-router";

// export default function AuthLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="signup" options={{ headerShown: false }} />
//       <Stack.Screen name="login-email" options={{ headerShown: false }} />
//     </Stack>
//   );
// }


//app/(auth)/_layout.jsx


// import { Stack } from "expo-router";

// export default function AuthLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {/* Main Login Screen */}
//       <Stack.Screen name="index" />
      
//       {/* Email Login Screen */}
//       <Stack.Screen name="email-login" />
      
//       {/* Traditional Email Login (if you want to keep both) */}
//       <Stack.Screen name="login-email" />
      
//       {/* Signup Screen */}
//       <Stack.Screen name="signup" />
      
//       {/* Forgot Password Screen */}
//       <Stack.Screen name="forgot-password" />
      
//       {/* Email Verification Screen */}
//       <Stack.Screen name="verify-email" />
//     </Stack>
//   );
// }


//app/(auth)/_layout.jsx


// import { Stack } from "expo-router";

// export default function AuthLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {/* Main Login Screen */}
//       <Stack.Screen name="index" />
      
//       {/* Email Login Screen */}
//       <Stack.Screen name="email-login" />
      
//       {/* Traditional Email Login (if you want to keep both) */}
//       <Stack.Screen name="login-email" />
      
//       {/* Signup Screen */}
//       <Stack.Screen name="signup" />
      
//       {/* Forgot Password Screen */}
//       <Stack.Screen name="forgot-password" />
      
//       {/* Email Verification Screen */}
//       <Stack.Screen name="verify-email" />
//     </Stack>
//   );
// }







// app/(auth)/_layout.jsx
// import { Stack } from "expo-router";

// export default function AuthLayout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="email-login" />
//       <Stack.Screen name="login-email" />
//       <Stack.Screen name="signup" />
//       <Stack.Screen name="forgot-password" />
//       <Stack.Screen name="verify-email" />
//     </Stack>
//   );
// }





//13/09/2025
// app/(auth)/_layout.jsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="email-login" />
      <Stack.Screen name="login-email" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="verify-email" />
    </Stack>
  );
}