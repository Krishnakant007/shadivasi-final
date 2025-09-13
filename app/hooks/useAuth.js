// import { useUser } from "@clerk/clerk-expo";

// export default function useAuth() {
//   const { isLoaded, isSignedIn, user } = useUser();

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted: user?.publicMetadata?.profileCompleted || false,
//   };
// }



// import { useUser } from "@clerk/clerk-expo";

// export default function useAuth() {
//   const { isLoaded, isSignedIn, user } = useUser();

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted: user?.publicMetadata?.profileCompleted || false,
//   };
// }


//app/hooks/useAuth.js

// import { useUser } from "@clerk/clerk-expo";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted: user?.publicMetadata?.profileCompleted || false,
//   };
// };





//14-08-2025
// app/hooks/useAuth.js

// import { useUser } from "@clerk/clerk-expo";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted: user?.unsafeMetadata?.profileCompleted || false,
//     // If using publicMetadata, use this instead:
//     // profileCompleted: user?.publicMetadata?.profileCompleted || false,
//   };
// };








// app/hooks/useAuth.js
// app/hooks/useAuth.js
// import { useUser } from "@clerk/clerk-expo";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted: user?.unsafeMetadata?.profileCompleted || false,
//     gender: user?.unsafeMetadata?.gender || null,
//     profileFor: user?.unsafeMetadata?.profileFor || null
//   };
// };

// // Add named export
// export default useAuth;









// app/hooks/useAuth.js
// import { useUser } from "@clerk/clerk-expo";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted: user?.unsafeMetadata?.profileCompleted || false
//   };
// };

// export default useAuth;
















//16
// app/hooks/useAuth.js  original
// import { useUser } from "@clerk/clerk-expo";
// import { useEffect, useState } from "react";
// import { db } from "../../config/firebase";
// import { doc, setDoc, getDoc } from "firebase/firestore";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [firestoreUser, setFirestoreUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isLoaded || !isSignedIn) {
//       setLoading(false);
//       return;
//     }

//     const checkAndCreateUser = async () => {
//       try {
//         const userRef = doc(db, "Users", user.id);
//         const docSnap = await getDoc(userRef);

//         if (!docSnap.exists()) {
//           // Create new user in Firestore
//           await setDoc(userRef, {
//             clerkId: user.id,
//             email: user.primaryEmailAddress.emailAddress,
//             firstName: user.firstName || "",
//             lastName: user.lastName || "",
//             profileImageUrl: user.imageUrl || "",
//             createdAt: new Date().toISOString(),
//             updatedAt: new Date().toISOString(),
//             profileCompleted: false
//           });
//         }

//         // Get the user data
//         const userData = (await getDoc(userRef)).data();
//         setFirestoreUser(userData);
//       } catch (error) {
//         console.error("Error handling user data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkAndCreateUser();
//   }, [isLoaded, isSignedIn, user]);

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     firestoreUser,
//     loading,
//     profileCompleted: firestoreUser?.profileCompleted || false
//   };
// };

// export default useAuth;







// // app/hooks/useAuth.js
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect } from "react";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [profileCompleted, setProfileCompleted] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (isLoaded && user) {
//       // Check if profile is completed in Clerk metadata
//       const isProfileComplete = user.unsafeMetadata?.profileCompleted === true;
//       setProfileCompleted(isProfileComplete);
//     }
//     setLoading(false);
//   }, [isLoaded, isSignedIn, user]);

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted,
//     loading
//   };
// };




//21/08/2025

// // // app/hooks/useAuth.js (updated) original
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect } from "react";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [profileCompleted, setProfileCompleted] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkProfileCompletion = async () => {
//       if (isLoaded && user) {
//         try {
//           // Check if profile is completed in Clerk metadata
//           const isProfileComplete = user.unsafeMetadata?.profileCompleted === true;
//           setProfileCompleted(isProfileComplete);
//         } catch (error) {
//           console.error("Error checking profile completion:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };

//     checkProfileCompletion();
//   }, [isLoaded, isSignedIn, user]);

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted,
//     loading
//   };
// };


//11/09
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect } from "react";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user } = useUser();
//   const [profileCompleted, setProfileCompleted] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkProfileCompletion = async () => {
//       if (isLoaded && user) {
//         try {
//           // Check if profile is completed in Clerk metadata
//           const isProfileComplete = user.unsafeMetadata?.profileCompleted === true;
//           setProfileCompleted(isProfileComplete);
//         } catch (error) {
//           console.error("Error checking profile completion:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };

//     checkProfileCompletion();
//   }, [isLoaded, isSignedIn, user]);

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted,
//     loading
//   };
// };









//31/08/2023
// // app/hooks/useAuth.js
// import { useUser } from "@clerk/clerk-expo";
// import { useState, useEffect } from "react";

// export const useAuth = () => {
//   const { isLoaded, isSignedIn, user: clerkUser } = useUser();
//   const [profileCompleted, setProfileCompleted] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkProfileCompletion = async () => {
//       if (isLoaded && clerkUser) {
//         try {
//           const isProfileComplete = clerkUser.unsafeMetadata?.profileCompleted === true;
//           setProfileCompleted(isProfileComplete);
//         } catch (error) {
//           console.error("Error checking profile completion:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else {
//         setLoading(false);
//       }
//     };

//     checkProfileCompletion();
//   }, [isLoaded, isSignedIn, clerkUser]);

//   // Create consistent user object
//   const getUserData = () => {
//     if (!clerkUser) return null;
    
//     return {
//       id: clerkUser.id || '',
//       uid: clerkUser.id || '',
//       firstName: clerkUser.firstName || '',
//       lastName: clerkUser.lastName || '',
//       displayName: clerkUser.fullName || `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || 'User',
//       email: clerkUser.primaryEmailAddress?.emailAddress || '',
//       profilePhoto: clerkUser.imageUrl || '',
//       profileCompleted: clerkUser.unsafeMetadata?.profileCompleted === true
//     };
//   };

//   const user = getUserData();

//   return {
//     isLoaded,
//     isSignedIn,
//     user,
//     profileCompleted,
//     loading
//   };
// };





//01/09/2025
//app/hooks/useAuth.js
import { useUser } from "@clerk/clerk-expo";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const { isLoaded, isSignedIn, user: clerkUser } = useUser();
  const [profileCompleted, setProfileCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkProfileCompletion = async () => {
      if (isLoaded && clerkUser) {
        try {
          const isProfileComplete = clerkUser.unsafeMetadata?.profileCompleted === true;
          setProfileCompleted(isProfileComplete);
        } catch (error) {
          console.error("Error checking profile completion:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkProfileCompletion();
  }, [isLoaded, isSignedIn, clerkUser]);

  // Create consistent user object with proper null checks
  const getUserData = () => {
    if (!clerkUser) return null;
    
    return {
      id: clerkUser.id || '',
      uid: clerkUser.id || '',
      firstName: clerkUser.firstName || '',
      lastName: clerkUser.lastName || '',
      displayName: clerkUser.fullName || `${clerkUser.firstName || ''} ${clerkUser.lastName || ''}`.trim() || 'User',
      email: clerkUser.primaryEmailAddress?.emailAddress || '',
      profilePhoto: clerkUser.imageUrl || '',
      profileCompleted: clerkUser.unsafeMetadata?.profileCompleted === true
    };
  };

  const user = getUserData();

  return {
    isLoaded,
    isSignedIn,
    user,
    profileCompleted,
    loading
  };
};