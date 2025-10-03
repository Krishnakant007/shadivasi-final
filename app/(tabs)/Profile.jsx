// // app/(tabs)/Profile.jsx
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
// import React from 'react'
// import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
// import { SafeAreaView } from 'react-native-safe-area-context'

// export default function Profile() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Top Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Feather name="phone" size={24} color="#000" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.headerTitle}>Profile</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <Image
//               source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQHf_2XPEYLSXg/profile-displayphoto-shrink_800_800/B4DZbeCk0.GYAc-/0/1747481940888?e=1756944000&v=beta&t=DO_MkGXDbmZYmxmDAomppAs4B_asLSpJ737Img7QF1g' }}
//               style={styles.profileImage}
//             />
//             <View style={styles.profileInfo}>
//               <Text style={styles.profileName}>Jaykumar patil</Text>
//               <View style={styles.membershipContainer}>
//                 <Text style={styles.membershipText}>Membership - Free</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.upgradeText}>Upgrade Now</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuContainer}>
//             {/* Row 1 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="verified" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Get Verified</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 2 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <FontAwesome name="heart" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Matches</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 3 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Mailbox</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 4 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <AntDesign name="calendar" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Daily Matches</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 5 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="message-square" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Messages</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 6 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="edit" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Edit Profile</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 7 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Edit Partner Preference</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 8 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <AntDesign name="star" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Upgrade Now</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 9 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="lock" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Privacy Settings</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 10 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Communication Settings</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 11 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Octicons name="gear" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Account Settings</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 12 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Entypo name="help" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>24x7 Help Center</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 13 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="more-horizontal" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>More</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 14 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="description" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Terms & Conditions</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 15 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>Privacy Policy</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     width: 80, // To balance the left icons
//   },
//   iconButton: {
//     marginRight: 15,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     flexGrow: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 15,
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   membershipContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   membershipText: {
//     color: '#666',
//     marginRight: 10,
//   },
//   upgradeText: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   menuContainer: {
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   menuIcon: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   divider: {
//     height: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//   },
// })







//20/08/2025
// // app/(tabs)/Profile.jsx
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
// import React from 'react'
// import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useLanguage } from '../context/LanguageContext'
// import { useFirestore } from '../hooks/useFirebase'

// export default function Profile() {
//   const { language } = useLanguage();
//   const { userData } = useFirestore();

//   // Translations
//   const translations = {
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     membership: {
//       ENG: "Membership - Free",
//       HI: "सदस्यता - निःशुल्क"
//     },
//     upgrade: {
//       ENG: "Upgrade Now",
//       HI: "अभी अपग्रेड करें"
//     },
//     menuItems: {
//       verified: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       },
//       matches: {
//         ENG: "Matches",
//         HI: "मेल"
//       },
//       mailbox: {
//         ENG: "Mailbox",
//         HI: "मेलबॉक्स"
//       },
//       dailyMatches: {
//         ENG: "Daily Matches",
//         HI: "दैनिक मेल"
//       },
//       messages: {
//         ENG: "Messages",
//         HI: "संदेश"
//       },
//       editProfile: {
//         ENG: "Edit Profile",
//         HI: "प्रोफाइल संपादित करें"
//       },
//       partnerPreference: {
//         ENG: "Edit Partner Preference",
//         HI: "पार्टनर प्राथमिकता संपादित करें"
//       },
//       upgradeNow: {
//         ENG: "Upgrade Now",
//         HI: "अभी अपग्रेड करें"
//       },
//       privacy: {
//         ENG: "Privacy Settings",
//         HI: "गोपनीयता सेटिंग्स"
//       },
//       communication: {
//         ENG: "Communication Settings",
//         HI: "संचार सेटिंग्स"
//       },
//       account: {
//         ENG: "Account Settings",
//         HI: "खाता सेटिंग्स"
//       },
//       help: {
//         ENG: "24x7 Help Center",
//         HI: "24x7 सहायता केंद्र"
//       },
//       more: {
//         ENG: "More",
//         HI: "अधिक"
//       },
//       terms: {
//         ENG: "Terms & Conditions",
//         HI: "नियम और शर्तें"
//       },
//       privacyPolicy: {
//         ENG: "Privacy Policy",
//         HI: "गोपनीयता नीति"
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Top Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Feather name="phone" size={24} color="#000" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.headerTitle}>{translations.profile[language]}</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <Image
//               source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/80' }}
//               style={styles.profileImage}
//             />
//             <View style={styles.profileInfo}>
//               <View style={styles.nameContainer}>
//                 <Text style={styles.profileName}>{userData?.firstName || 'User'}</Text>
//                 {userData?.verificationStatus === 'approved' && (
//                   <Image
//                     source={require('../../assets/badge.png')}
//                     style={styles.verifiedBadge}
//                   />
//                 )}
//               </View>
//               <View style={styles.membershipContainer}>
//                 <Text style={styles.membershipText}>{translations.membership[language]}</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuContainer}>
//             {/* Row 1 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="verified" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.verified[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 2 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <FontAwesome name="heart" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.matches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 3 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.mailbox[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 4 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <AntDesign name="calendar" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.dailyMatches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 5 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="message-square" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.messages[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 6 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="edit" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.editProfile[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 7 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.partnerPreference[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 8 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <AntDesign name="star" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.upgradeNow[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 9 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="lock" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 10 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.communication[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 11 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Octicons name="gear" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.account[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 12 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Entypo name="help" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.help[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 13 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="more-horizontal" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.more[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 14 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="description" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.terms[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 15 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacyPolicy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     width: 80, // To balance the left icons
//   },
//   iconButton: {
//     marginRight: 15,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     flexGrow: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     marginRight: 15,
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   verifiedBadge: {
//     width: 20,
//     height: 20,
//   },
//   membershipContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   membershipText: {
//     color: '#666',
//     marginRight: 10,
//   },
//   upgradeText: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   menuContainer: {
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   menuIcon: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   divider: {
//     height: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//   },
// });





// // app/(tabs)/Profile.jsx
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
// import React from 'react'
// import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useLanguage } from '../context/LanguageContext'
// import { useFirestore } from '../hooks/useFirebase'

// export default function Profile() {
//   const { language } = useLanguage();
//   const { userData } = useFirestore();

//   // Translations
//   const translations = {
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     membership: {
//       ENG: "Membership - Free",
//       HI: "सदस्यता - निःशुल्क"
//     },
//     upgrade: {
//       ENG: "Upgrade Now",
//       HI: "अभी अपग्रेड करें"
//     },
//     menuItems: {
//       verified: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       },
//       matches: {
//         ENG: "Matches",
//         HI: "मेल"
//       },
//       mailbox: {
//         ENG: "Mailbox",
//         HI: "मेलबॉक्स"
//       },
//       dailyMatches: {
//         ENG: "Daily Matches",
//         HI: "दैनिक मेल"
//       },
//       messages: {
//         ENG: "Messages",
//         HI: "संदेश"
//       },
//       editProfile: {
//         ENG: "Edit Profile",
//         HI: "प्रोफाइल संपादित करें"
//       },
//       partnerPreference: {
//         ENG: "Edit Partner Preference",
//         HI: "पार्टनर प्राथमिकता संपादित करें"
//       },
//       upgradeNow: {
//         ENG: "Upgrade Now",
//         HI: "अभी अपग्रेड करें"
//       },
//       privacy: {
//         ENG: "Privacy Settings",
//         HI: "गोपनीयता सेटिंग्स"
//       },
//       communication: {
//         ENG: "Communication Settings",
//         HI: "संचार सेटिंग्स"
//       },
//       account: {
//         ENG: "Account Settings",
//         HI: "खाता सेटिंग्स"
//       },
//       help: {
//         ENG: "24x7 Help Center",
//         HI: "24x7 सहायता केंद्र"
//       },
//       more: {
//         ENG: "More",
//         HI: "अधिक"
//       },
//       terms: {
//         ENG: "Terms & Conditions",
//         HI: "नियम और शर्तें"
//       },
//       privacyPolicy: {
//         ENG: "Privacy Policy",
//         HI: "गोपनीयता नीति"
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Top Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Feather name="phone" size={24} color="#000" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.headerTitle}>{translations.profile[language]}</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <View style={styles.profileImageContainer}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/80' }}
//                 style={styles.profileImage}
//               />
//               <TouchableOpacity style={styles.editImageButton}>
//                 <Feather name="edit-2" size={14} color="#fff" />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.profileInfo}>
//               <View style={styles.nameContainer}>
//                 <Text style={styles.profileName}>{userData?.firstName || 'User'}</Text>
//                 {userData?.verificationStatus === 'approved' && (
//                   <Image
//                     source={require('../../assets/badge.png')}
//                     style={styles.verifiedBadge}
//                   />
//                 )}
//               </View>
//               <Text style={styles.membershipText}>{translations.membership[language]}</Text>
//               <TouchableOpacity>
//                 <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuContainer}>
//             {/* Row 1 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="verified" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.verified[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 2 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <FontAwesome name="heart" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.matches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 3 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.mailbox[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 4 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <AntDesign name="calendar" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.dailyMatches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 5 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="message-square" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.messages[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 6 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="edit" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.editProfile[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 7 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.partnerPreference[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 8 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <AntDesign name="star" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.upgradeNow[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 9 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="lock" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 10 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.communication[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 11 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Octicons name="gear" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.account[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 12 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Entypo name="help" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.help[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 13 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="more-horizontal" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.more[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 14 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="description" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.terms[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 15 */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacyPolicy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     width: 80, // To balance the left icons
//   },
//   iconButton: {
//     marginRight: 15,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     flexGrow: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImageContainer: {
//     position: 'relative',
//     marginRight: 15,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   editImageButton: {
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   verifiedBadge: {
//     width: 20,
//     height: 20,
//   },
//   membershipText: {
//     color: '#666',
//     marginBottom: 5,
//   },
//   upgradeText: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   menuContainer: {
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   menuIcon: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   divider: {
//     height: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//   },
// });








//09/09/2025

//app/(tabs)/Profile.jsx  original
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert, ActivityIndicator } from 'react-native'
// import React, { useState } from 'react'
// import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useLanguage } from '../context/LanguageContext'
// import { useFirestore } from '../hooks/useFirebase'
// import { useRouter } from 'expo-router'
// import * as ImagePicker from 'expo-image-picker'
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
// import { doc, updateDoc } from 'firebase/firestore'
// import { db } from '../../config/firebase'
// import { useAuth } from '../context/AuthContext'

// export default function Profile() {
//   const { language } = useLanguage();
//   const { userData, updateUserProfile } = useFirestore();
//   const { user } = useAuth();
//   const router = useRouter();
//   const [documentModalVisible, setDocumentModalVisible] = useState(false);
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   // Translations
//   const translations = {
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     membership: {
//       ENG: "Membership - Free",
//       HI: "सदस्यता - निःशुल्क"
//     },
//     upgrade: {
//       ENG: "Upgrade Now",
//       HI: "अभी अपग्रेड करें"
//     },
//     menuItems: {
//       verified: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       },
//       matches: {
//         ENG: "Matches",
//         HI: "मेल"
//       },
//       mailbox: {
//         ENG: "Mailbox",
//         HI: "मेलबॉक्स"
//       },
//       dailyMatches: {
//         ENG: "Daily Matches",
//         HI: "दैनिक मेल"
//       },
//       messages: {
//         ENG: "Messages",
//         HI: "संदेश"
//       },
//       editProfile: {
//         ENG: "Edit Profile",
//         HI: "प्रोफाइल संपादित करें"
//       },
//       partnerPreference: {
//         ENG: "Edit Partner Preference",
//         HI: "पार्टनर प्राथमिकता संपादित करें"
//       },
//       upgradeNow: {
//         ENG: "Upgrade Now",
//         HI: "अभी अपग्रेड करें"
//       },
//       privacy: {
//         ENG: "Privacy Settings",
//         HI: "गोपनीयता सेटिंग्स"
//       },
//       communication: {
//         ENG: "Communication Settings",
//         HI: "संचार सेटिंग्स"
//       },
//       account: {
//         ENG: "Account Settings",
//         HI: "खाता सेटिंग्स"
//       },
//       help: {
//         ENG: "24x7 Help Center",
//         HI: "24x7 सहायता केंद्र"
//       },
//       more: {
//         ENG: "More",
//         HI: "अधिक"
//       },
//       terms: {
//         ENG: "Terms & Conditions",
//         HI: "नियम और शर्तें"
//       },
//       privacyPolicy: {
//         ENG: "Privacy Policy",
//         HI: "गोपनीयता नीति"
//       }
//     },
//     documents: {
//       ENG: "Verification Documents",
//       HI: "सत्यापन दस्तावेज़"
//     },
//     panCard: {
//       ENG: "PAN Card",
//       HI: "पैन कार्ड"
//     },
//     aadharCard: {
//       ENG: "Aadhar Card",
//       HI: "आधार कार्ड"
//     },
//     drivingLicense: {
//       ENG: "Driving License",
//       HI: "ड्राइविंग लाइसेंस"
//     },
//     voterId: {
//       ENG: "Voter ID",
//       HI: "मतदाता पहचान पत्र"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     cancel: {
//       ENG: "Cancel",
//       HI: "रद्द करें"
//     },
//     uploading: {
//       ENG: "Uploading...",
//       HI: "अपलोड हो रहा है..."
//     },
//     uploadSuccess: {
//       ENG: "Document uploaded successfully!",
//       HI: "दस्तावेज़ सफलतापूर्वक अपलोड हो गया!"
//     },
//     uploadError: {
//       ENG: "Error uploading document",
//       HI: "दस्तावेज़ अपलोड करने में त्रुटि"
//     }
//   };

//   // Update profile picture
//   const updateProfilePicture = async () => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `profile_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `users/${user.id}/profile/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         await updateUserProfile({ profilePhoto: downloadURL });
//         Alert.alert("Success", "Profile picture updated successfully!");
//       }
//     } catch (error) {
//       console.error("Error updating profile picture:", error);
//       Alert.alert("Error", "Failed to update profile picture");
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Upload verification document
//   const uploadVerificationDocument = async (documentType) => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `${documentType}_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `verification_docs/${user.id}/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         // Update user document with verification info
//         const userRef = doc(db, "Users", user.id);
//         await updateDoc(userRef, {
//           verificationDocument: {
//             type: documentType,
//             name: translations[documentType][language],
//             url: downloadURL,
//             uploadedAt: new Date()
//           },
//           verificationStatus: "pending"
//         });
        
//         Alert.alert(translations.uploadSuccess[language]);
//         setDocumentModalVisible(false);
//       }
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       Alert.alert(translations.uploadError[language]);
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Navigate to different screens
//   const navigateToScreen = (screen) => {
//     router.push(screen);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Top Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Feather name="phone" size={24} color="#000" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.headerTitle}>{translations.profile[language]}</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <View style={styles.profileImageContainer}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/80' }}
//                 style={styles.profileImage}
//               />
//               <TouchableOpacity
//                 style={styles.editImageButton}
//                 onPress={updateProfilePicture}
//                 disabled={uploading}
//               >
//                 {uploading ? (
//                   <ActivityIndicator size="small" color="#fff" />
//                 ) : (
//                   <Feather name="edit-2" size={14} color="#fff" />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <View style={styles.profileInfo}>
//               <View style={styles.nameContainer}>
//                 <Text style={styles.profileName}>{userData?.firstName || 'User'}</Text>
//                 {userData?.verificationStatus === 'approved' && (
//                   <Image
//                     source={require('../../assets/badge.png')}
//                     style={styles.verifiedBadge}
//                   />
//                 )}
//               </View>
//               <Text style={styles.membershipText}>{translations.membership[language]}</Text>
//               <TouchableOpacity>
//                 <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuContainer}>
//             {/* Row 1 - Get Verified with Document Options */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => setDocumentModalVisible(true)}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="verified" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.verified[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 2 - Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Matches')}
//             >
//               <View style={styles.menuIcon}>
//                 <FontAwesome name="heart" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.matches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 3 - Mailbox */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.mailbox[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 4 - Daily Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/DailyMatches')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="calendar" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.dailyMatches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 5 - Messages */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="message-square" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.messages[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 6 - Edit Profile */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/EditProfile')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="edit" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.editProfile[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 7 - Partner Preference */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.partnerPreference[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 8 - Upgrade Now */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="star" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.upgradeNow[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 9 - Privacy Settings */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="lock" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 10 - Communication Settings */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.communication[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 11 - Account Settings */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Octicons name="gear" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.account[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 12 - Help */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Entypo name="help" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.help[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 13 - More */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="more-horizontal" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.more[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 14 - Terms & Conditions */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="description" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.terms[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 15 - Privacy Policy */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacyPolicy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>

//         {/* Document Selection Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={documentModalVisible}
//           onRequestClose={() => setDocumentModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>{translations.documents[language]}</Text>
//                 <TouchableOpacity onPress={() => setDocumentModalVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('panCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="credit-card" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.panCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('aadharCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="badge" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.aadharCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('drivingLicense')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="directions-car" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.drivingLicense[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('voterId')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="how-to-vote" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.voterId[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.cancelButton}
//                 onPress={() => setDocumentModalVisible(false)}
//                 disabled={uploading}
//               >
//                 <Text style={styles.cancelButtonText}>{translations.cancel[language]}</Text>
//               </TouchableOpacity>
              
//               {uploading && (
//                 <View style={styles.uploadingContainer}>
//                   <ActivityIndicator size="small" color="#FF6B6B" />
//                   <Text style={styles.uploadingText}>{translations.uploading[language]}</Text>
//                 </View>
//               )}
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     width: 80, // To balance the left icons
//   },
//   iconButton: {
//     marginRight: 15,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     flexGrow: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImageContainer: {
//     position: 'relative',
//     marginRight: 15,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   editImageButton: {
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   verifiedBadge: {
//     width: 20,
//     height: 20,
//   },
//   membershipText: {
//     color: '#666',
//     marginBottom: 5,
//   },
//   upgradeText: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   menuContainer: {
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   menuIcon: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   divider: {
//     height: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   documentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   documentOptionText: {
//     fontSize: 16,
//     marginLeft: 15,
//   },
//   cancelButton: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   uploadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 15,
//   },
//   uploadingText: {
//     marginLeft: 10,
//     color: '#666',
//   },
// });







//11/09/2025

//app/(tabs)/Profile.jsx
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert, ActivityIndicator } from 'react-native';
// import React, { useState, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useLanguage } from '../context/LanguageContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import * as ImagePicker from 'expo-image-picker';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';

// export default function Profile() {
//   const { language } = useLanguage();
//   const { userData, updateUserProfile } = useFirestore();
//   const { user } = useAuth();
//   const router = useRouter();
//   const [documentModalVisible, setDocumentModalVisible] = useState(false);
//   const [uploading, setUploading] = useState(false);

//   // Translations
//   const translations = {
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     membership: {
//       ENG: "Membership - Free",
//       HI: "सदस्यता - निःशुल्क"
//     },
//     upgrade: {
//       ENG: "Upgrade Now",
//       HI: "अभी अपग्रेड करें"
//     },
//     menuItems: {
//       verified: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       },
//       matches: {
//         ENG: "Matches",
//         HI: "मेल"
//       },
//       mailbox: {
//         ENG: "Mailbox",
//         HI: "मेलबॉक्स"
//       },
//       dailyMatches: {
//         ENG: "Daily Matches",
//         HI: "दैनिक मेल"
//       },
//       messages: {
//         ENG: "Messages",
//         HI: "संदेश"
//       },
//       editProfile: {
//         ENG: "Edit Profile",
//         HI: "प्रोफाइल संपादित करें"
//       },
//       partnerPreference: {
//         ENG: "Edit Partner Preference",
//         HI: "पार्टनर प्राथमिकता संपादित करें"
//       },
//       upgradeNow: {
//         ENG: "Upgrade Now",
//         HI: "अभी अपग्रेड करें"
//       },
//       privacy: {
//         ENG: "Privacy Settings",
//         HI: "गोपनीयता सेटिंग्स"
//       },
//       communication: {
//         ENG: "Communication Settings",
//         HI: "संचार सेटिंग्स"
//       },
//       account: {
//         ENG: "Account Settings",
//         HI: "खाता सेटिंग्स"
//       },
//       help: {
//         ENG: "24x7 Help Center",
//         HI: "24x7 सहायता केंद्र"
//       },
//       more: {
//         ENG: "More",
//         HI: "अधिक"
//       },
//       terms: {
//         ENG: "Terms & Conditions",
//         HI: "नियम और शर्तें"
//       },
//       privacyPolicy: {
//         ENG: "Privacy Policy",
//         HI: "गोपनीयता नीति"
//       }
//     },
//     documents: {
//       ENG: "Verification Documents",
//       HI: "सत्यापन दस्तावेज़"
//     },
//     panCard: {
//       ENG: "PAN Card",
//       HI: "पैन कार्ड"
//     },
//     aadharCard: {
//       ENG: "Aadhar Card",
//       HI: "आधार कार्ड"
//     },
//     drivingLicense: {
//       ENG: "Driving License",
//       HI: "ड्राइविंग लाइसेंस"
//     },
//     voterId: {
//       ENG: "Voter ID",
//       HI: "मतदाता पहचान पत्र"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     cancel: {
//       ENG: "Cancel",
//       HI: "रद्द करें"
//     },
//     uploading: {
//       ENG: "Uploading...",
//       HI: "अपलोड हो रहा है..."
//     },
//     uploadSuccess: {
//       ENG: "Document uploaded successfully!",
//       HI: "दस्तावेज़ सफलतापूर्वक अपलोड हो गया!"
//     },
//     uploadError: {
//       ENG: "Error uploading document",
//       HI: "दस्तावेज़ अपलोड करने में त्रुटि"
//     }
//   };

//   // Update profile picture - useCallback to prevent recreation
//   const updateProfilePicture = useCallback(async () => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `profile_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `users/${user.id}/profile/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         await updateUserProfile({ profilePhoto: downloadURL });
//         Alert.alert("Success", "Profile picture updated successfully!");
//       }
//     } catch (error) {
//       console.error("Error updating profile picture:", error);
//       Alert.alert("Error", "Failed to update profile picture");
//     } finally {
//       setUploading(false);
//     }
//   }, [user, updateUserProfile]);

//   // Upload verification document - useCallback to prevent recreation
//   const uploadVerificationDocument = useCallback(async (documentType) => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `${documentType}_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `verification_docs/${user.id}/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         // Update user document with verification info
//         const userRef = doc(db, "Users", user.id);
//         await updateDoc(userRef, {
//           verificationDocument: {
//             type: documentType,
//             name: documentType === 'panCard' ? 'PAN Card' :
//                   documentType === 'aadharCard' ? 'Aadhar Card' :
//                   documentType === 'drivingLicense' ? 'Driving License' : 'Voter ID',
//             url: downloadURL,
//             uploadedAt: new Date()
//           },
//           verificationStatus: "pending"
//         });
        
//         Alert.alert("Success", "Document uploaded successfully!");
//         setDocumentModalVisible(false);
//       }
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       Alert.alert("Error", "Failed to upload document");
//     } finally {
//       setUploading(false);
//     }
//   }, [user]);

//   // Navigate to different screens - useCallback to prevent recreation
//   const navigateToScreen = useCallback((screen) => {
//     router.push(screen);
//   }, [router]);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Top Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Feather name="phone" size={24} color="#000" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.headerTitle}>{translations.profile[language]}</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <View style={styles.profileImageContainer}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/80' }}
//                 style={styles.profileImage}
//               />
//               <TouchableOpacity
//                 style={styles.editImageButton}
//                 onPress={updateProfilePicture}
//                 disabled={uploading}
//               >
//                 {uploading ? (
//                   <ActivityIndicator size="small" color="#fff" />
//                 ) : (
//                   <Feather name="edit-2" size={14} color="#fff" />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <View style={styles.profileInfo}>
//               <View style={styles.nameContainer}>
//                 <Text style={styles.profileName}>{userData?.firstName || 'User'}</Text>
//                 {userData?.verificationStatus === 'approved' && (
//                   <MaterialIcons name="verified" size={20} color="#1da1f2" />
//                 )}
//               </View>
//               <Text style={styles.membershipText}>{translations.membership[language]}</Text>
//               <TouchableOpacity>
//                 <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuContainer}>
//             {/* Row 1 - Get Verified with Document Options */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => setDocumentModalVisible(true)}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="verified" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.verified[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 2 - Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Matches')}
//             >
//               <View style={styles.menuIcon}>
//                 <FontAwesome name="heart" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.matches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 3 - Mailbox */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.mailbox[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 4 - Daily Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/DailyMatches')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="calendar" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.dailyMatches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 5 - Messages */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="message-square" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.messages[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 6 - Edit Profile */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/EditProfile')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="edit" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.editProfile[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 7 - Partner Preference */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/EditPartnerPreference')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.partnerPreference[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 8 - Upgrade Now */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="star" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.upgradeNow[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 9 - Privacy Settings */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="lock" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 10 - Communication Settings */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.communication[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 11 - Account Settings */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/AccountSettings')}
//             >
//               <View style={styles.menuIcon}>
//                 <Octicons name="gear" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.account[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 12 - Help */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/HelpSupport')}
//             >
//               <View style={styles.menuIcon}>
//                 <Entypo name="help" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.help[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 13 - More */}
//             <TouchableOpacity style={styles.menuItem}>
//               <View style={styles.menuIcon}>
//                 <Feather name="more-horizontal" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.more[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 14 - Terms & Conditions */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/TermsAndConditions')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="description" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.terms[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 15 - Privacy Policy */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/PrivacyPolicy')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacyPolicy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>

//         {/* Document Selection Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={documentModalVisible}
//           onRequestClose={() => setDocumentModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>{translations.documents[language]}</Text>
//                 <TouchableOpacity onPress={() => setDocumentModalVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('panCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="credit-card" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.panCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('aadharCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="badge" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.aadharCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('drivingLicense')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="directions-car" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.drivingLicense[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('voterId')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="how-to-vote" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.voterId[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.cancelButton}
//                 onPress={() => setDocumentModalVisible(false)}
//                 disabled={uploading}
//               >
//                 <Text style={styles.cancelButtonText}>{translations.cancel[language]}</Text>
//               </TouchableOpacity>
              
//               {uploading && (
//                 <View style={styles.uploadingContainer}>
//                   <ActivityIndicator size="small" color="#FF6B6B" />
//                   <Text style={styles.uploadingText}>{translations.uploading[language]}</Text>
//                 </View>
//               )}
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     width: 80,
//   },
//   iconButton: {
//     marginRight: 15,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     flexGrow: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImageContainer: {
//     position: 'relative',
//     marginRight: 15,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   editImageButton: {
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   membershipText: {
//     color: '#666',
//     marginBottom: 5,
//   },
//   upgradeText: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   menuContainer: {
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   menuIcon: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   divider: {
//     height: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   documentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   documentOptionText: {
//     fontSize: 16,
//     marginLeft: 15,
//   },
//   cancelButton: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   uploadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 15,
//   },
//   uploadingText: {
//     marginLeft: 10,
//     color: '#666',
//   },
// });










// //17/09/2025
// app/(tabs)/Profile.jsx
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert, ActivityIndicator } from 'react-native';
// import React, { useState, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useLanguage } from '../context/LanguageContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import * as ImagePicker from 'expo-image-picker';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';

// export default function Profile() {
//   const { language } = useLanguage();
//   const { userData, updateUserProfile, refreshUserData } = useFirestore();
//   const { user } = useAuth();
//   const router = useRouter();
//   const [documentModalVisible, setDocumentModalVisible] = useState(false);
//   const [uploading, setUploading] = useState(false);

//   // Translations
//   const translations = {
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     membership: {
//       ENG: "Membership - Free",
//       HI: "सदस्यता - निःशुल्क"
//     },
//     upgrade: {
//       ENG: "Upgrade Now",
//       HI: "अभी अपग्रेड करें"
//     },
//     menuItems: {
//       verified: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       },
//       matches: {
//         ENG: "Matches",
//         HI: "मेल"
//       },
//       mailbox: {
//         ENG: "Mailbox",
//         HI: "मेलबॉक्स"
//       },
//       dailyMatches: {
//         ENG: "Daily Matches",
//         HI: "दैनिक मेल"
//       },
//       messages: {
//         ENG: "Messages",
//         HI: "संदेश"
//       },
//       editProfile: {
//         ENG: "Edit Profile",
//         HI: "प्रोफाइल संपादित करें"
//       },
//       partnerPreference: {
//         ENG: "Edit Partner Preference",
//         HI: "पार्टनर प्राथमिकता संपादित करें"
//       },
//       upgradeNow: {
//         ENG: "Upgrade Now",
//         HI: "अभी अपग्रेड करें"
//       },
//       privacy: {
//         ENG: "Privacy Settings",
//         HI: "गोपनीयता सेटिंग्स"
//       },
//       communication: {
//         ENG: "Communication Settings",
//         HI: "संचार सेटिंग्स"
//       },
//       account: {
//         ENG: "Account Settings",
//         HI: "खाता सेटिंग्स"
//       },
//       help: {
//         ENG: "24x7 Help Center",
//         HI: "24x7 सहायता केंद्र"
//       },
//       more: {
//         ENG: "More",
//         HI: "अधिक"
//       },
//       terms: {
//         ENG: "Terms & Conditions",
//         HI: "नियम और शर्तें"
//       },
//       privacyPolicy: {
//         ENG: "Privacy Policy",
//         HI: "गोपनीयता नीति"
//       }
//     },
//     documents: {
//       ENG: "Verification Documents",
//       HI: "सत्यापन दस्तावेज़"
//     },
//     panCard: {
//       ENG: "PAN Card",
//       HI: "पैन कार्ड"
//     },
//     aadharCard: {
//       ENG: "Aadhar Card",
//       HI: "आधार कार्ड"
//     },
//     drivingLicense: {
//       ENG: "Driving License",
//       HI: "ड्राइविंग लाइसेंस"
//     },
//     voterId: {
//       ENG: "Voter ID",
//       HI: "मतदाता पहचान पत्र"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     cancel: {
//       ENG: "Cancel",
//       HI: "रद्द करें"
//     },
//     uploading: {
//       ENG: "Uploading...",
//       HI: "अपलोड हो रहा है..."
//     },
//     uploadSuccess: {
//       ENG: "Document uploaded successfully!",
//       HI: "दस्तावेज़ सफलतापूर्वक अपलोड हो गया!"
//     },
//     uploadError: {
//       ENG: "Error uploading document",
//       HI: "दस्तावेज़ अपलोड करने में त्रुटि"
//     },
//     verificationStatus: {
//       verified: {
//         ENG: "✓ Verified Profile",
//         HI: "✓ सत्यापित प्रोफाइल"
//       },
//       pending: {
//         ENG: "⏳ Verification Pending",
//         HI: "⏳ सत्यापन लंबित"
//       },
//       skipped: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       }
//     }
//   };

//   // Update profile picture - useCallback to prevent recreation
//   const updateProfilePicture = useCallback(async () => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `profile_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `users/${user.id}/profile/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         await updateUserProfile({ profilePhoto: downloadURL });
//         Alert.alert("Success", "Profile picture updated successfully!");
//       }
//     } catch (error) {
//       console.error("Error updating profile picture:", error);
//       Alert.alert("Error", "Failed to update profile picture");
//     } finally {
//       setUploading(false);
//     }
//   }, [user, updateUserProfile]);

//   // Upload verification document - useCallback to prevent recreation
//   const uploadVerificationDocument = useCallback(async (documentType) => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `${documentType}_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `verification_docs/${user.id}/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         // Update user document with verification info
//         const userRef = doc(db, "Users", user.id);
//         await updateDoc(userRef, {
//           verificationDocument: {
//             type: documentType,
//             name: documentType === 'panCard' ? 'PAN Card' :
//                   documentType === 'aadharCard' ? 'Aadhar Card' :
//                   documentType === 'drivingLicense' ? 'Driving License' : 'Voter ID',
//             url: downloadURL,
//             uploadedAt: new Date()
//           },
//           verificationStatus: "pending"
//         });
        
//         // Refresh user data
//         await refreshUserData();
        
//         Alert.alert(translations.uploadSuccess[language]);
//         setDocumentModalVisible(false);
//       }
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       Alert.alert(translations.uploadError[language]);
//     } finally {
//       setUploading(false);
//     }
//   }, [user, language, refreshUserData]);

//   // Navigate to different screens - useCallback to prevent recreation
//   const navigateToScreen = useCallback((screen) => {
//     router.push(screen);
//   }, [router]);

//   // Get verification status text
//   const getVerificationStatusText = () => {
//     if (userData?.verificationStatus === 'verified') {
//       return translations.verificationStatus.verified[language];
//     } else if (userData?.verificationStatus === 'pending') {
//       return translations.verificationStatus.pending[language];
//     } else {
//       return translations.verificationStatus.skipped[language];
//     }
//   };

//   // Get verification status color
//   const getVerificationStatusColor = () => {
//     if (userData?.verificationStatus === 'verified') {
//       return '#4CAF50';
//     } else if (userData?.verificationStatus === 'pending') {
//       return '#FF9800';
//     } else {
//       return '#FF6B6B';
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Top Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Feather name="phone" size={24} color="#000" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.headerTitle}>{translations.profile[language]}</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <View style={styles.profileImageContainer}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/80' }}
//                 style={styles.profileImage}
//               />
//               {userData?.verificationStatus === 'verified' && (
//                 <View style={styles.verifiedBadge}>
//                   <MaterialIcons name="verified" size={16} color="#fff" />
//                 </View>
//               )}
//               <TouchableOpacity
//                 style={styles.editImageButton}
//                 onPress={updateProfilePicture}
//                 disabled={uploading}
//               >
//                 {uploading ? (
//                   <ActivityIndicator size="small" color="#fff" />
//                 ) : (
//                   <Feather name="edit-2" size={14} color="#fff" />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <View style={styles.profileInfo}>
//               <View style={styles.nameContainer}>
//                 <Text style={styles.profileName}>{userData?.firstName || 'User'}</Text>
//                 {userData?.verificationStatus === 'verified' && (
//                   <MaterialIcons name="verified" size={20} color="#1da1f2" />
//                 )}
//               </View>
//               <Text style={styles.membershipText}>{translations.membership[language]}</Text>
              
//               {/* Verification Status */}
//               <Text style={[styles.verificationStatusText, { color: getVerificationStatusColor() }]}>
//                 {getVerificationStatusText()}
//               </Text>
              
//               <TouchableOpacity style={styles.upgradeButton} onPress={() => router.push('/(tabs)/Upgrade')}>
//                 <AntDesign name="arrowup" size={12} color="white" />
//                 <Text style={styles.upgradeButtonText}>{translations.upgrade[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuContainer}>
//             {/* Row 1 - Get Verified with Document Options */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => setDocumentModalVisible(true)}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="verified" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.verified[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 2 - Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Matches')}
//             >
//               <View style={styles.menuIcon}>
//                 <FontAwesome name="heart" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.matches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 3 - Mailbox */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.mailbox[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 4 - Daily Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/DailyMatches')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="calendar" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.dailyMatches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 5 - Messages */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="message-square" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.messages[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 6 - Edit Profile */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/EditProfile')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="edit" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.editProfile[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 7 - Partner Preference */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/EditPartnerPreference')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.partnerPreference[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 8 - Upgrade Now */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="star" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.upgradeNow[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 9 - Privacy Settings */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/PrivacySettings')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="lock" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 10 - Communication Settings */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/CommunicationSettings')}
//             >
//               <View style={styles.menuIcon}>
//                 <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.communication[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 11 - Account Settings */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/AccountSettings')}
//             >
//               <View style={styles.menuIcon}>
//                 <Octicons name="gear" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.account[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 12 - Help */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/HelpSupport')}
//             >
//               <View style={styles.menuIcon}>
//                 <Entypo name="help" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.help[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 13 - More */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/MoreOptions')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="more-horizontal" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.more[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 14 - Terms & Conditions */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/TermsAndConditions')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="description" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.terms[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 15 - Privacy Policy */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/PrivacyPolicy')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacyPolicy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>
//           </View>
//         </ScrollView>

//         {/* Document Selection Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={documentModalVisible}
//           onRequestClose={() => setDocumentModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>{translations.documents[language]}</Text>
//                 <TouchableOpacity onPress={() => setDocumentModalVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('panCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="credit-card" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.panCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('aadharCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="badge" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.aadharCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('drivingLicense')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="directions-car" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.drivingLicense[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('voterId')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="how-to-vote" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.voterId[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.cancelButton}
//                 onPress={() => setDocumentModalVisible(false)}
//                 disabled={uploading}
//               >
//                 <Text style={styles.cancelButtonText}>{translations.cancel[language]}</Text>
//               </TouchableOpacity>
              
//               {uploading && (
//                 <View style={styles.uploadingContainer}>
//                   <ActivityIndicator size="small" color="#FF6B6B" />
//                   <Text style={styles.uploadingText}>{translations.uploading[language]}</Text>
//                 </View>
//               )}
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     width: 80,
//   },
//   iconButton: {
//     marginRight: 15,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//     flexGrow: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImageContainer: {
//     position: 'relative',
//     marginRight: 15,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   verifiedBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#4CAF50',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   editImageButton: {
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   membershipText: {
//     color: '#666',
//     marginBottom: 5,
//   },
//   verificationStatusText: {
//     fontSize: 12,
//     fontWeight: '500',
//     marginBottom: 8,
//   },
//   upgradeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FF6B6B',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     alignSelf: 'flex-start',
//   },
//   upgradeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   menuContainer: {
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   menuIcon: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   divider: {
//     height: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   documentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   documentOptionText: {
//     fontSize: 16,
//     marginLeft: 15,
//   },
//   cancelButton: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   uploadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 15,
//   },
//   uploadingText: {
//     marginLeft: 10,
//     color: '#666',
//   },
// });








// app/(tabs)/Profile.jsx

// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert, ActivityIndicator } from 'react-native';
// import React, { useState, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useLanguage } from '../context/LanguageContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import * as ImagePicker from 'expo-image-picker';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { doc, updateDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';

// export default function Profile() {
//   const { language } = useLanguage();
//   const { userData, updateUserProfile, refreshUserData } = useFirestore();
//   const { user } = useAuth();
//   const router = useRouter();
//   const [documentModalVisible, setDocumentModalVisible] = useState(false);
//   const [uploading, setUploading] = useState(false);

//   // Translations
//   const translations = {
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     membership: {
//       ENG: "Membership - Free",
//       HI: "सदस्यता - निःशुल्क"
//     },
//     upgrade: {
//       ENG: "Upgrade Now",
//       HI: "अभी अपग्रेड करें"
//     },
//     menuItems: {
//       verified: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       },
//       matches: {
//         ENG: "Matches",
//         HI: "मेल"
//       },
//       mailbox: {
//         ENG: "Mailbox",
//         HI: "मेलबॉक्स"
//       },
//       dailyMatches: {
//         ENG: "Daily Matches",
//         HI: "दैनिक मेल"
//       },
//       messages: {
//         ENG: "Messages",
//         HI: "संदेश"
//       },
//       editProfile: {
//         ENG: "Edit Profile",
//         HI: "प्रोफाइल संपादित करें"
//       },
//       partnerPreference: {
//         ENG: "Edit Partner Preference",
//         HI: "पार्टनर प्राथमिकता संपादित करें"
//       },
//       upgradeNow: {
//         ENG: "Upgrade Now",
//         HI: "अभी अपग्रेड करें"
//       },
//       privacy: {
//         ENG: "Privacy Settings",
//         HI: "गोपनीयता सेटिंग्स"
//       },
//       communication: {
//         ENG: "Communication Settings",
//         HI: "संचार सेटिंग्स"
//       },
//       account: {
//         ENG: "Account Settings",
//         HI: "खाता सेटिंग्स"
//       },
//       help: {
//         ENG: "24x7 Help Center",
//         HI: "24x7 सहायता केंद्र"
//       },
//       more: {
//         ENG: "More",
//         HI: "अधिक"
//       },
//       terms: {
//         ENG: "Terms & Conditions",
//         HI: "नियम और शर्तें"
//       },
//       privacyPolicy: {
//         ENG: "Privacy Policy",
//         HI: "गोपनीयता नीति"
//       }
//     },
//     documents: {
//       ENG: "Verification Documents",
//       HI: "सत्यापन दस्तावेज़"
//     },
//     panCard: {
//       ENG: "PAN Card",
//       HI: "पैन कार्ड"
//     },
//     aadharCard: {
//       ENG: "Aadhar Card",
//       HI: "आधार कार्ड"
//     },
//     drivingLicense: {
//       ENG: "Driving License",
//       HI: "ड्राइविंग लाइसेंस"
//     },
//     voterId: {
//       ENG: "Voter ID",
//       HI: "मतदाता पहचान पत्र"
//     },
//     uploadDocument: {
//       ENG: "Upload Document",
//       HI: "दस्तावेज़ अपलोड करें"
//     },
//     cancel: {
//       ENG: "Cancel",
//       HI: "रद्द करें"
//     },
//     uploading: {
//       ENG: "Uploading...",
//       HI: "अपलोड हो रहा है..."
//     },
//     uploadSuccess: {
//       ENG: "Document uploaded successfully!",
//       HI: "दस्तावेज़ सफलतापूर्वक अपलोड हो गया!"
//     },
//     uploadError: {
//       ENG: "Error uploading document",
//       HI: "दस्तावेज़ अपलोड करने में त्रुटि"
//     },
//     verificationStatus: {
//       verified: {
//         ENG: "✓ Verified Profile",
//         HI: "✓ सत्यापित प्रोफाइल"
//       },
//       pending: {
//         ENG: "⏳ Verification Pending",
//         HI: "⏳ सत्यापन लंबित"
//       },
//       skipped: {
//         ENG: "Get Verified",
//         HI: "सत्यापित करें"
//       }
//     }
//   };

//   // Update profile picture - useCallback to prevent recreation
//   const updateProfilePicture = useCallback(async () => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [1, 1],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `profile_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `users/${user.id}/profile/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         await updateUserProfile({ profilePhoto: downloadURL });
//         Alert.alert("Success", "Profile picture updated successfully!");
//       }
//     } catch (error) {
//       console.error("Error updating profile picture:", error);
//       Alert.alert("Error", "Failed to update profile picture");
//     } finally {
//       setUploading(false);
//     }
//   }, [user, updateUserProfile]);

//   // Upload verification document - useCallback to prevent recreation
//   const uploadVerificationDocument = useCallback(async (documentType) => {
//     try {
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
//       if (permissionResult.granted === false) {
//         Alert.alert("Permission required", "Permission to access camera roll is required!");
//         return;
//       }

//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 0.5,
//       });

//       if (!result.canceled) {
//         setUploading(true);
//         const storage = getStorage();
//         const response = await fetch(result.assets[0].uri);
//         const blob = await response.blob();
        
//         const fileName = `${documentType}_${Date.now()}.jpg`;
//         const storageRef = ref(storage, `verification_docs/${user.id}/${fileName}`);
        
//         await uploadBytes(storageRef, blob);
//         const downloadURL = await getDownloadURL(storageRef);
        
//         // Update user document with verification info
//         const userRef = doc(db, "Users", user.id);
//         await updateDoc(userRef, {
//           verificationDocument: {
//             type: documentType,
//             name: documentType === 'panCard' ? 'PAN Card' :
//                   documentType === 'aadharCard' ? 'Aadhar Card' :
//                   documentType === 'drivingLicense' ? 'Driving License' : 'Voter ID',
//             url: downloadURL,
//             uploadedAt: new Date()
//           },
//           verificationStatus: "pending"
//         });
        
//         // Refresh user data
//         await refreshUserData();
        
//         Alert.alert(translations.uploadSuccess[language]);
//         setDocumentModalVisible(false);
//       }
//     } catch (error) {
//       console.error("Error uploading document:", error);
//       Alert.alert(translations.uploadError[language]);
//     } finally {
//       setUploading(false);
//     }
//   }, [user, language, refreshUserData]);

//   // Navigate to different screens - useCallback to prevent recreation
//   const navigateToScreen = useCallback((screen) => {
//     router.push(screen);
//   }, [router]);

//   // Get verification status text
//   const getVerificationStatusText = () => {
//     if (userData?.verificationStatus === 'verified') {
//       return translations.verificationStatus.verified[language];
//     } else if (userData?.verificationStatus === 'pending') {
//       return translations.verificationStatus.pending[language];
//     } else {
//       return translations.verificationStatus.skipped[language];
//     }
//   };

//   // Get verification status color
//   const getVerificationStatusColor = () => {
//     if (userData?.verificationStatus === 'verified') {
//       return '#4CAF50';
//     } else if (userData?.verificationStatus === 'pending') {
//       return '#FF9800';
//     } else {
//       return '#FF6B6B';
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Top Header */}
//         <View style={styles.header}>
//           <View style={styles.headerLeft}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#000" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.iconButton}>
//               <Feather name="phone" size={24} color="#000" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.headerTitle}>{translations.profile[language]}</Text>
//           <View style={styles.headerRight} />
//         </View>

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Profile Section */}
//           <View style={styles.profileSection}>
//             <View style={styles.profileImageContainer}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/80' }}
//                 style={styles.profileImage}
//               />
//               {userData?.verificationStatus === 'verified' && (
//                 <View style={styles.verifiedBadge}>
//                   <MaterialIcons name="verified" size={16} color="#fff" />
//                 </View>
//               )}
//               <TouchableOpacity
//                 style={styles.editImageButton}
//                 onPress={updateProfilePicture}
//                 disabled={uploading}
//               >
//                 {uploading ? (
//                   <ActivityIndicator size="small" color="#fff" />
//                 ) : (
//                   <Feather name="edit-2" size={14} color="#fff" />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <View style={styles.profileInfo}>
//               <View style={styles.nameContainer}>
//                 <Text style={styles.profileName}>{userData?.firstName || 'User'}</Text>
//                 {userData?.verificationStatus === 'verified' && (
//                   <MaterialIcons name="verified" size={20} color="#1da1f2" />
//                 )}
//               </View>
//               <Text style={styles.membershipText}>{translations.membership[language]}</Text>
              
//               {/* Verification Status */}
//               <Text style={[styles.verificationStatusText, { color: getVerificationStatusColor() }]}>
//                 {getVerificationStatusText()}
//               </Text>
              
//               <TouchableOpacity style={styles.upgradeButton} onPress={() => router.push('/(tabs)/Upgrade')}>
//                 <AntDesign name="arrowup" size={12} color="white" />
//                 <Text style={styles.upgradeButtonText}>{translations.upgrade[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Menu Items */}
//           <View style={styles.menuContainer}>
//             {/* Row 1 - Get Verified with Document Options */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => setDocumentModalVisible(true)}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="verified" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.verified[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 2 - Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Matches')}
//             >
//               <View style={styles.menuIcon}>
//                 <FontAwesome name="heart" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.matches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 3 - Mailbox */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.mailbox[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 4 - Daily Matches */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/DailyMatches')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="calendar" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.dailyMatches[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 5 - Messages */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Messages')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="message-square" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.messages[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 6 - Edit Profile */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/EditProfile')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="edit" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.editProfile[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 7 - Partner Preference */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/EditPartnerPreference')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.partnerPreference[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 8 - Upgrade Now */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//             >
//               <View style={styles.menuIcon}>
//                 <AntDesign name="star" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.upgradeNow[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 9 - Privacy Settings */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/PrivacySettings')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="lock" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 10 - Communication Settings */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/CommunicationSettings')}
//             >
//               <View style={styles.menuIcon}>
//                 <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.communication[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 11 - Account Settings */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/AccountSettings')}
//             >
//               <View style={styles.menuIcon}>
//                 <Octicons name="gear" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.account[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 12 - Help */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/HelpSupport')}
//             >
//               <View style={styles.menuIcon}>
//                 <Entypo name="help" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.help[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 13 - More */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/MoreOptions')}
//             >
//               <View style={styles.menuIcon}>
//                 <Feather name="more-horizontal" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.more[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Divider */}
//             <View style={styles.divider} />

//             {/* Row 14 - Terms & Conditions */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/TermsAndConditions')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="description" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.terms[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>

//             {/* Row 15 - Privacy Policy */}
//             <TouchableOpacity
//               style={styles.menuItem}
//               onPress={() => navigateToScreen('/PrivacyPolicy')}
//             >
//               <View style={styles.menuIcon}>
//                 <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
//               </View>
//               <Text style={styles.menuText}>{translations.menuItems.privacyPolicy[language]}</Text>
//               <Feather name="chevron-right" size={20} color="#888" />
//             </TouchableOpacity>
//           </View>

//           {/* Bottom padding to avoid tab bar overlap */}
//           <View style={styles.bottomPadding} />
//         </ScrollView>

//         {/* Document Selection Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={documentModalVisible}
//           onRequestClose={() => setDocumentModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>{translations.documents[language]}</Text>
//                 <TouchableOpacity onPress={() => setDocumentModalVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('panCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="credit-card" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.panCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('aadharCard')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="badge" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.aadharCard[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('drivingLicense')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="directions-car" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.drivingLicense[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.documentOption}
//                 onPress={() => uploadVerificationDocument('voterId')}
//                 disabled={uploading}
//               >
//                 <MaterialIcons name="how-to-vote" size={24} color="#FF6B6B" />
//                 <Text style={styles.documentOptionText}>{translations.voterId[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity
//                 style={styles.cancelButton}
//                 onPress={() => setDocumentModalVisible(false)}
//                 disabled={uploading}
//               >
//                 <Text style={styles.cancelButtonText}>{translations.cancel[language]}</Text>
//               </TouchableOpacity>
              
//               {uploading && (
//                 <View style={styles.uploadingContainer}>
//                   <ActivityIndicator size="small" color="#FF6B6B" />
//                   <Text style={styles.uploadingText}>{translations.uploading[language]}</Text>
//                 </View>
//               )}
//             </View>
//           </View>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   headerLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   headerRight: {
//     width: 80,
//   },
//   iconButton: {
//     marginRight: 15,
//   },
//   scrollContent: {
//     paddingBottom: 30, // Increased padding for tab bar
//     flexGrow: 1,
//   },
//   profileSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   profileImageContainer: {
//     position: 'relative',
//     marginRight: 15,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//   },
//   verifiedBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#4CAF50',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   editImageButton: {
//     position: 'absolute',
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 12,
//     width: 24,
//     height: 24,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   profileInfo: {
//     flex: 1,
//   },
//   nameContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 5,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   membershipText: {
//     color: '#666',
//     marginBottom: 5,
//   },
//   verificationStatusText: {
//     fontSize: 12,
//     fontWeight: '500',
//     marginBottom: 8,
//   },
//   upgradeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FF6B6B',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     alignSelf: 'flex-start',
//   },
//   upgradeButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   menuContainer: {
//     paddingHorizontal: 15,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   menuIcon: {
//     width: 30,
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   menuText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   divider: {
//     height: 10,
//     backgroundColor: '#f5f5f5',
//     marginVertical: 5,
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: 20,
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   documentOption: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   documentOptionText: {
//     fontSize: 16,
//     marginLeft: 15,
//   },
//   cancelButton: {
//     marginTop: 20,
//     padding: 15,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   cancelButtonText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   uploadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 15,
//   },
//   uploadingText: {
//     marginLeft: 10,
//     color: '#666',
//   },
//   bottomPadding: {
//     height: 70, // Added bottom padding for tab bar
//   },
// });











//28/09/2025
// app/(tabs)/Profile.jsx
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLanguage } from '../context/LanguageContext';
import { useFirestore } from '../hooks/useFirebase';
import { Ionicons, Feather, MaterialIcons, FontAwesome, AntDesign, Entypo, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { language } = useLanguage();
  const { userData, updateUserProfile, refreshUserData } = useFirestore();
  const { user } = useAuth();
  const router = useRouter();
  const [documentModalVisible, setDocumentModalVisible] = useState(false);
  const [viewDocumentModalVisible, setViewDocumentModalVisible] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Translations
  const translations = {
    profile: {
      ENG: "Profile",
      HI: "प्रोफाइल"
    },
    membership: {
      ENG: "Membership - Free",
      HI: "सदस्यता - निःशुल्क"
    },
    upgrade: {
      ENG: "Upgrade Now",
      HI: "अभी अपग्रेड करें"
    },
    menuItems: {
      verified: {
        ENG: userData?.verificationStatus === 'verified' ? "Verified" : 
             userData?.verificationStatus === 'pending' ? "Verification Pending" : "Get Verified",
        HI: userData?.verificationStatus === 'verified' ? "सत्यापित" : 
            userData?.verificationStatus === 'pending' ? "सत्यापन लंबित" : "सत्यापित करें"
      },
      matches: {
        ENG: "Matches",
        HI: "मेल"
      },
      mailbox: {
        ENG: "Mailbox",
        HI: "मेलबॉक्स"
      },
      dailyMatches: {
        ENG: "Daily Matches",
        HI: "दैनिक मेल"
      },
      messages: {
        ENG: "Messages",
        HI: "संदेश"
      },
      editProfile: {
        ENG: "Edit Profile",
        HI: "प्रोफाइल संपादित करें"
      },
      partnerPreference: {
        ENG: "Edit Partner Preference",
        HI: "पार्टनर प्राथमिकता संपादित करें"
      },
      upgradeNow: {
        ENG: "Upgrade Now",
        HI: "अभी अपग्रेड करें"
      },
      privacy: {
        ENG: "Privacy Settings",
        HI: "गोपनीयता सेटिंग्स"
      },
      communication: {
        ENG: "Communication Settings",
        HI: "संचार सेटिंग्स"
      },
      account: {
        ENG: "Account Settings",
        HI: "खाता सेटिंग्स"
      },
      help: {
        ENG: "24x7 Help Center",
        HI: "24x7 सहायता केंद्र"
      },
      more: {
        ENG: "More",
        HI: "अधिक"
      },
      terms: {
        ENG: "Terms & Conditions",
        HI: "नियम और शर्तें"
      },
      privacyPolicy: {
        ENG: "Privacy Policy",
        HI: "गोपनीयता नीति"
      }
    },
    documents: {
      ENG: "Verification Documents",
      HI: "सत्यापन दस्तावेज़"
    },
    viewDocument: {
      ENG: "View Document",
      HI: "दस्तावेज़ देखें"
    },
    changeDocument: {
      ENG: "Change Document",
      HI: "दस्तावेज़ बदलें"
    },
    panCard: {
      ENG: "PAN Card",
      HI: "पैन कार्ड"
    },
    aadharCard: {
      ENG: "Aadhar Card",
      HI: "आधार कार्ड"
    },
    drivingLicense: {
      ENG: "Driving License",
      HI: "ड्राइविंग लाइसेंस"
    },
    voterId: {
      ENG: "Voter ID",
      HI: "मतदाता पहचान पत्र"
    },
    uploadDocument: {
      ENG: "Upload Document",
      HI: "दस्तावेज़ अपलोड करें"
    },
    cancel: {
      ENG: "Cancel",
      HI: "रद्द करें"
    },
    close: {
      ENG: "Close",
      HI: "बंद करें"
    },
    uploading: {
      ENG: "Uploading...",
      HI: "अपलोड हो रहा है..."
    },
    uploadSuccess: {
      ENG: "Document uploaded successfully!",
      HI: "दस्तावेज़ सफलतापूर्वक अपलोड हो गया!"
    },
    uploadError: {
      ENG: "Error uploading document",
      HI: "दस्तावेज़ अपलोड करने में त्रुटि"
    },
    verificationStatus: {
      verified: {
        ENG: "✓ Verified Profile",
        HI: "✓ सत्यापित प्रोफाइल"
      },
      pending: {
        ENG: "⏳ Verification Pending",
        HI: "⏳ सत्यापन लंबित"
      },
      skipped: {
        ENG: "Get Verified",
        HI: "सत्यापित करें"
      }
    },
    documentStatusText: {
      verified: {
        ENG: "Verified",
        HI: "सत्यापित"
      },
      pending: {
        ENG: "Under Review",
        HI: "समीक्षाधीन"
      },
      rejected: {
        ENG: "Rejected",
        HI: "अस्वीकृत"
      }
    },
    documentActions: {
      view: {
        ENG: "View Document",
        HI: "दस्तावेज़ देखें"
      },
      change: {
        ENG: "Change Document",
        HI: "दस्तावेज़ बदलें"
      },
      add: {
        ENG: "Add Document",
        HI: "दस्तावेज़ जोड़ें"
      }
    }
  };

  // Update profile picture
  const updateProfilePicture = useCallback(async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        Alert.alert("Permission required", "Permission to access camera roll is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.canceled) {
        setUploading(true);
        const storage = getStorage();
        const response = await fetch(result.assets[0].uri);
        const blob = await response.blob();
        
        const fileName = `profile_${Date.now()}.jpg`;
        const storageRef = ref(storage, `users/${user.id}/profile/${fileName}`);
        
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        
        await updateUserProfile({ profilePhoto: downloadURL });
        Alert.alert("Success", "Profile picture updated successfully!");
      }
    } catch (error) {
      console.error("Error updating profile picture:", error);
      Alert.alert("Error", "Failed to update profile picture");
    } finally {
      setUploading(false);
    }
  }, [user, updateUserProfile]);

  // Upload verification document
  const uploadVerificationDocument = useCallback(async (documentType) => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        Alert.alert("Permission required", "Permission to access camera roll is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled) {
        setUploading(true);
        const storage = getStorage();
        const response = await fetch(result.assets[0].uri);
        const blob = await response.blob();
        
        const fileName = `${documentType}_${Date.now()}.jpg`;
        const storageRef = ref(storage, `verification_docs/${user.id}/${fileName}`);
        
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        
        // Save to admin collection for review
        const docRef = await addDoc(collection(db, 'verificationDocuments'), {
          userId: user.id,
          userEmail: userData?.email,
          userName: `${userData?.firstName} ${userData?.lastName}`,
          documentType: documentType,
          documentName: documentType === 'panCard' ? 'PAN Card' :
                        documentType === 'aadharCard' ? 'Aadhar Card' :
                        documentType === 'drivingLicense' ? 'Driving License' : 'Voter ID',
          documentUrl: downloadURL,
          status: 'pending',
          reviewed: false,
          approved: false,
          submittedAt: serverTimestamp()
        });

        // Update user document with verification info
        const userRef = doc(db, "Users", user.id);
        await updateDoc(userRef, {
          verificationDocument: {
            type: documentType,
            name: documentType === 'panCard' ? 'PAN Card' :
                  documentType === 'aadharCard' ? 'Aadhar Card' :
                  documentType === 'drivingLicense' ? 'Driving License' : 'Voter ID',
            url: downloadURL,
            uploadedAt: new Date(),
            documentId: docRef.id
          },
          verificationStatus: "pending"
        });
        
        // Refresh user data
        await refreshUserData();
        
        Alert.alert(translations.uploadSuccess[language]);
        setDocumentModalVisible(false);
      }
    } catch (error) {
      console.error("Error uploading document:", error);
      Alert.alert(translations.uploadError[language]);
    } finally {
      setUploading(false);
    }
  }, [user, userData, language, refreshUserData]);

  // View document
  const viewDocument = useCallback(() => {
    if (userData?.verificationDocument?.url) {
      setSelectedDocument(userData.verificationDocument);
      setViewDocumentModalVisible(true);
    }
  }, [userData]);

  // Change document
  const changeDocument = useCallback(() => {
    setDocumentModalVisible(true);
  }, []);

  // Navigate to verification screen
  const navigateToVerification = useCallback(() => {
    if (userData?.verificationStatus === 'pending') {
      // Show current status
      Alert.alert(
        "Verification Status",
        `Your ${userData.verificationDocument?.name} is under review. Please wait for admin approval.`
      );
    } else {
      router.push('/homescreens/info11');
    }
  }, [userData, router]);

  // Get verification status text
  const getVerificationStatusText = () => {
    if (userData?.verificationStatus === 'verified') {
      return translations.verificationStatus.verified[language];
    } else if (userData?.verificationStatus === 'pending') {
      return translations.verificationStatus.pending[language];
    } else {
      return translations.verificationStatus.skipped[language];
    }
  };

  // Get verification status color
  const getVerificationStatusColor = () => {
    if (userData?.verificationStatus === 'verified') {
      return '#4CAF50';
    } else if (userData?.verificationStatus === 'pending') {
      return '#FF9800';
    } else {
      return '#FF6B6B';
    }
  };

  // Get document status text
  const getDocumentStatusText = () => {
    if (userData?.verificationStatus === 'verified') {
      return translations.documentStatusText.verified[language];
    } else if (userData?.verificationStatus === 'pending') {
      return translations.documentStatusText.pending[language];
    }
    return '';
  };

  // Get document status color
  const getDocumentStatusColor = () => {
    if (userData?.verificationStatus === 'verified') {
      return '#4CAF50';
    } else if (userData?.verificationStatus === 'pending') {
      return '#FF9800';
    }
    return '#666';
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Top Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="notifications-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="phone" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>{translations.profile[language]}</Text>
          <View style={styles.headerRight} />
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <View style={styles.profileImageContainer}>
              <Image
                source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/80' }}
                style={styles.profileImage}
              />
              {userData?.verificationStatus === 'verified' && (
                <View style={styles.verifiedBadge}>
                  <MaterialIcons name="verified" size={16} color="#fff" />
                </View>
              )}
              <TouchableOpacity
                style={styles.editImageButton}
                onPress={updateProfilePicture}
                disabled={uploading}
              >
                {uploading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Feather name="edit-2" size={14} color="#fff" />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.profileInfo}>
              <View style={styles.nameContainer}>
                <Text style={styles.profileName}>{userData?.firstName || 'User'}</Text>
                {userData?.verificationStatus === 'verified' && (
                  <MaterialIcons name="verified" size={20} color="#1da1f2" />
                )}
              </View>
              <Text style={styles.membershipText}>{translations.membership[language]}</Text>
              
              {/* Verification Status */}
              <Text style={[styles.verificationStatusText, { color: getVerificationStatusColor() }]}>
                {getVerificationStatusText()}
              </Text>

              {/* Document Status */}
              {userData?.verificationDocument && (
                <View style={styles.documentStatusContainer}>
                  <Text style={styles.documentLabel}>
                    Document: {userData.verificationDocument.name}
                  </Text>
                  <Text style={[styles.documentStatusText, { color: getDocumentStatusColor() }]}>
                    {getDocumentStatusText()}
                  </Text>
                </View>
              )}
              
              <TouchableOpacity style={styles.upgradeButton} onPress={() => router.push('/(tabs)/Upgrade')}>
                <AntDesign name="arrowup" size={12} color="white" />
                <Text style={styles.upgradeButtonText}>{translations.upgrade[language]}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Menu Items */}
          <View style={styles.menuContainer}>
            {/* Get Verified Menu Item with Document Actions */}
            <View style={styles.verificationMenuItem}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={navigateToVerification}
              >
                <View style={styles.menuIcon}>
                  <MaterialIcons 
                    name="verified" 
                    size={24} 
                    color={
                      userData?.verificationStatus === 'verified' ? '#4CAF50' : 
                      userData?.verificationStatus === 'pending' ? '#FF9800' : '#FF6B6B'
                    } 
                  />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuText}>{translations.menuItems.verified[language]}</Text>
                  {userData?.verificationDocument && (
                    <Text style={styles.documentSubText}>
                      {userData.verificationDocument.name} • {getDocumentStatusText()}
                    </Text>
                  )}
                </View>
                <Feather name="chevron-right" size={20} color="#888" />
              </TouchableOpacity>

              {/* Document Actions */}
              {userData?.verificationDocument && (
                <View style={styles.documentActions}>
                  <TouchableOpacity 
                    style={styles.documentActionButton}
                    onPress={viewDocument}
                  >
                    <Ionicons name="eye" size={16} color="#007AFF" />
                    <Text style={styles.documentActionText}>
                      {translations.documentActions.view[language]}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.documentActionButton}
                    onPress={changeDocument}
                  >
                    <Ionicons name="swap-horizontal" size={16} color="#FF9500" />
                    <Text style={styles.documentActionText}>
                      {translations.documentActions.change[language]}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* Matches */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/(tabs)/Matches')}
            >
              <View style={styles.menuIcon}>
                <FontAwesome name="heart" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.matches[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Mailbox */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/(tabs)/Messages')}
            >
              <View style={styles.menuIcon}>
                <MaterialCommunityIcons name="email-outline" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.mailbox[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Daily Matches */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/DailyMatches')}
            >
              <View style={styles.menuIcon}>
                <AntDesign name="calendar" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.dailyMatches[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Messages */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/(tabs)/Messages')}
            >
              <View style={styles.menuIcon}>
                <Feather name="message-square" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.messages[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Edit Profile */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/EditProfile')}
            >
              <View style={styles.menuIcon}>
                <Feather name="edit" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.editProfile[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Partner Preference */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/EditPartnerPreference')}
            >
              <View style={styles.menuIcon}>
                <MaterialIcons name="people-alt" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.partnerPreference[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Upgrade Now */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/(tabs)/Upgrade')}
            >
              <View style={styles.menuIcon}>
                <AntDesign name="star" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.upgradeNow[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Privacy Settings */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => router.push('/PrivacySettings')}
            >
              <View style={styles.menuIcon}>
                <Feather name="lock" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.privacy[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Communication Settings */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => router.push('/CommunicationSettings')}
            >
              <View style={styles.menuIcon}>
                <Ionicons name="chatbubbles-outline" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.communication[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Account Settings */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/AccountSettings')}
            >
              <View style={styles.menuIcon}>
                <Octicons name="gear" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.account[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Help */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/HelpSupport')}
            >
              <View style={styles.menuIcon}>
                <Entypo name="help" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.help[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* More */}
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => router.push('/MoreOptions')}
            >
              <View style={styles.menuIcon}>
                <Feather name="more-horizontal" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.more[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.divider} />

            {/* Terms & Conditions */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/TermsAndConditions')}
            >
              <View style={styles.menuIcon}>
                <MaterialIcons name="description" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.terms[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>

            {/* Privacy Policy */}
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => router.push('/PrivacyPolicy')}
            >
              <View style={styles.menuIcon}>
                <MaterialIcons name="privacy-tip" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.menuText}>{translations.menuItems.privacyPolicy[language]}</Text>
              <Feather name="chevron-right" size={20} color="#888" />
            </TouchableOpacity>
          </View>

          {/* Bottom padding to avoid tab bar overlap */}
          <View style={styles.bottomPadding} />
        </ScrollView>

        {/* Document Selection Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={documentModalVisible}
          onRequestClose={() => setDocumentModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{translations.documents[language]}</Text>
                <TouchableOpacity onPress={() => setDocumentModalVisible(false)}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity
                style={styles.documentOption}
                onPress={() => uploadVerificationDocument('panCard')}
                disabled={uploading}
              >
                <MaterialIcons name="credit-card" size={24} color="#FF6B6B" />
                <Text style={styles.documentOptionText}>{translations.panCard[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.documentOption}
                onPress={() => uploadVerificationDocument('aadharCard')}
                disabled={uploading}
              >
                <MaterialIcons name="badge" size={24} color="#FF6B6B" />
                <Text style={styles.documentOptionText}>{translations.aadharCard[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.documentOption}
                onPress={() => uploadVerificationDocument('drivingLicense')}
                disabled={uploading}
              >
                <MaterialIcons name="directions-car" size={24} color="#FF6B6B" />
                <Text style={styles.documentOptionText}>{translations.drivingLicense[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.documentOption}
                onPress={() => uploadVerificationDocument('voterId')}
                disabled={uploading}
              >
                <MaterialIcons name="how-to-vote" size={24} color="#FF6B6B" />
                <Text style={styles.documentOptionText}>{translations.voterId[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setDocumentModalVisible(false)}
                disabled={uploading}
              >
                <Text style={styles.cancelButtonText}>{translations.cancel[language]}</Text>
              </TouchableOpacity>
              
              {uploading && (
                <View style={styles.uploadingContainer}>
                  <ActivityIndicator size="small" color="#FF6B6B" />
                  <Text style={styles.uploadingText}>{translations.uploading[language]}</Text>
                </View>
              )}
            </View>
          </View>
        </Modal>

        {/* View Document Modal */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={viewDocumentModalVisible}
          onRequestClose={() => setViewDocumentModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.viewDocumentModal}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{translations.viewDocument[language]}</Text>
                <TouchableOpacity onPress={() => setViewDocumentModalVisible(false)}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
              </View>
              
              {selectedDocument && (
                <View style={styles.documentView}>
                  <Image
                    source={{ uri: selectedDocument.url }}
                    style={styles.documentImage}
                    resizeMode="contain"
                  />
                  <View style={styles.documentInfo}>
                    <Text style={styles.documentName}>{selectedDocument.name}</Text>
                    <Text style={styles.documentType}>Type: {selectedDocument.type}</Text>
                    <Text style={styles.documentStatusInfo}>
                      Status: {getDocumentStatusText()}
                    </Text>
                    {selectedDocument.uploadedAt && (
                      <Text style={styles.documentDate}>
                        Uploaded: {selectedDocument.uploadedAt.toDate?.().toLocaleDateString() || 'Recently'}
                      </Text>
                    )}
                  </View>
                </View>
              )}
              
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setViewDocumentModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>{translations.close[language]}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    width: 80,
  },
  iconButton: {
    marginRight: 15,
  },
  scrollContent: {
    paddingBottom: 30,
    flexGrow: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  verifiedBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  editImageButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#FF6B6B',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  membershipText: {
    color: '#666',
    marginBottom: 5,
  },
  verificationStatusText: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  },
  documentStatusContainer: {
    marginBottom: 8,
  },
  documentLabel: {
    fontSize: 12,
    color: '#666',
  },
  documentStatusText: {
    fontSize: 11,
    fontWeight: '500',
  },
  upgradeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    alignSelf: 'flex-start',
  },
  upgradeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
  },
  menuContainer: {
    paddingHorizontal: 15,
  },
  verificationMenuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuIcon: {
    width: 30,
    alignItems: 'center',
    marginRight: 15,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuText: {
    fontSize: 16,
  },
  documentSubText: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  documentActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  documentActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eee',
  },
  documentActionText: {
    fontSize: 12,
    marginLeft: 5,
    fontWeight: '500',
  },
  divider: {
    height: 10,
    backgroundColor: '#f5f5f5',
    marginVertical: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  viewDocumentModal: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  documentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  documentOptionText: {
    fontSize: 16,
    marginLeft: 15,
  },
  cancelButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#666',
  },
  uploadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  uploadingText: {
    marginLeft: 10,
    color: '#666',
  },
  documentView: {
    alignItems: 'center',
  },
  documentImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  documentInfo: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  documentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  documentType: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  documentStatusInfo: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 3,
  },
  documentDate: {
    fontSize: 12,
    color: '#888',
  },
  closeButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomPadding: {
    height: 70,
  },
});