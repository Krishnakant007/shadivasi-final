// // app/utils/navigationHelper.js
// export const getNextScreen = (user, currentScreen) => {
//   const screenNumber = parseInt(currentScreen.replace('info', ''));
  
//   // If we're on the last screen, check if all data is complete
//   if (screenNumber === 12) {
//     const allComplete = user.firstName && user.lastName && user.username && user.imageUrl &&
//       user.unsafeMetadata?.birthDate && user.unsafeMetadata?.gender && user.unsafeMetadata?.height &&
//       user.unsafeMetadata?.relationshipStatus && user.unsafeMetadata?.educationLevel &&
//       user.unsafeMetadata?.religion && user.unsafeMetadata?.interests &&
//       user.unsafeMetadata.interests.length > 0 && user.unsafeMetadata?.bio &&
//       user.unsafeMetadata?.location && user.unsafeMetadata?.occupation &&
//       user.unsafeMetadata?.relationshipGoals;
    
//     if (allComplete) {
//       return "/(tabs)";
//     } else {
//       return `/homescreens/info${screenNumber}`;
//     }
//   }
  
//   // Otherwise, go to the next screen
//   return `/homescreens/info${screenNumber + 1}`;
// };





//21/08/2025
// app/utils/navigationHelper.js
// import { useFirestore } from '../hooks/useFirebase';

// export const useProfileNavigation = () => {
//   const { userData } = useFirestore();

//   const getNextScreen = (currentScreen) => {
//     if (!userData || !userData.profileProgress) return 'homescreens/info1';
    
//     const progress = userData.profileProgress;
//     const screenOrder = [
//       'homescreens/info1',
//       'homescreens/info2',
//       'homescreens/info3',
//       'homescreens/info4',
//       'homescreens/info5',
//       'homescreens/info6',
//       'homescreens/info7',
//       'homescreens/info8',
//       'homescreens/info9',
//       'homescreens/info10',
//       'homescreens/info11',
//       'homescreens/info12',
//       'homescreens/info13'
//     ];
    
//     const currentIndex = screenOrder.indexOf(currentScreen);
//     return screenOrder[currentIndex + 1] || 'homescreens/info13';
//   };

//   const getPreviousScreen = (currentScreen) => {
//     const screenOrder = [
//       'homescreens/info1',
//       'homescreens/info2',
//       'homescreens/info3',
//       'homescreens/info4',
//       'homescreens/info5',
//       'homescreens/info6',
//       'homescreens/info7',
//       'homescreens/info8',
//       'homescreens/info9',
//       'homescreens/info10',
//       'homescreens/info11',
//       'homescreens/info12',
//       'homescreens/info13'
//     ];
    
//     const currentIndex = screenOrder.indexOf(currentScreen);
//     return screenOrder[Math.max(0, currentIndex - 1)];
//   };

//   return { getNextScreen, getPreviousScreen };
// };





//13/09/2025
// app/utils/navigationHelper.js
// import { useFirestore } from '../hooks/useFirebase';

// export const useProfileNavigation = () => {
//   const { userData } = useFirestore();

//   const getNextScreen = (currentScreen) => {
//     if (!userData || !userData.profileProgress) return 'homescreens/info1';
    
//     const progress = userData.profileProgress;
//     const screenOrder = [
//       'homescreens/info1',
//       'homescreens/info2',
//       'homescreens/info3',
//       'homescreens/info4',
//       'homescreens/info5',
//       'homescreens/info6',
//       'homescreens/info7',
//       'homescreens/info8',
//       'homescreens/info9',
//       'homescreens/info10',
//       'homescreens/info11',
//       'homescreens/info12',
//       'homescreens/info13'
//     ];
    
//     const currentIndex = screenOrder.indexOf(currentScreen);
//     return screenOrder[currentIndex + 1] || 'homescreens/info13';
//   };

//   const getPreviousScreen = (currentScreen) => {
//     const screenOrder = [
//       'homescreens/info1',
//       'homescreens/info2',
//       'homescreens/info3',
//       'homescreens/info4',
//       'homescreens/info5',
//       'homescreens/info6',
//       'homescreens/info7',
//       'homescreens/info8',
//       'homescreens/info9',
//       'homescreens/info10',
//       'homescreens/info11',
//       'homescreens/info12',
//       'homescreens/info13'
//     ];
    
//     const currentIndex = screenOrder.indexOf(currentScreen);
//     return screenOrder[Math.max(0, currentIndex - 1)];
//   };

//   return { getNextScreen, getPreviousScreen };
// };







//30/09/2025
// app/utils/navigationHelper.js
import { useFirestore } from '../hooks/useFirebase';

export const useProfileNavigation = () => {
  const { userData } = useFirestore();

  const getNextScreen = (currentScreen) => {
    // If no user data, start from info1
    if (!userData) return 'homescreens/info1';
    
    const screenOrder = [
      'homescreens/info1',
      'homescreens/info2', 
      'homescreens/info3',
      'homescreens/info4',
      'homescreens/info5',
      'homescreens/info6',
      'homescreens/info7',
      'homescreens/info8',
      'homescreens/info9',
      'homescreens/info10',
      'homescreens/info11',
      'homescreens/info12',
      'homescreens/info13'
    ];
    
    const currentIndex = screenOrder.indexOf(currentScreen);
    
    // Always go to next screen in sequence, regardless of progress
    // This ensures immediate navigation
    return screenOrder[currentIndex + 1] || 'homescreens/info13';
  };

  const getPreviousScreen = (currentScreen) => {
    const screenOrder = [
      'homescreens/info1',
      'homescreens/info2',
      'homescreens/info3',
      'homescreens/info4',
      'homescreens/info5',
      'homescreens/info6',
      'homescreens/info7',
      'homescreens/info8',
      'homescreens/info9',
      'homescreens/info10',
      'homescreens/info11',
      'homescreens/info12',
      'homescreens/info13'
    ];
    
    const currentIndex = screenOrder.indexOf(currentScreen);
    return screenOrder[Math.max(0, currentIndex - 1)];
  };

  return { getNextScreen, getPreviousScreen };
};