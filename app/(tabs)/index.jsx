// // app/(tabs)/index.jsx
// // import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
// // import React from 'react'
// // import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
// // import { SafeAreaView } from 'react-native-safe-area-context'

// // const recommendedProfiles = [
// //   {
// //     id: 1,
// //     name: 'Ananya',
// //     age: 24,
// //     height: "5'4\"",
// //     image: 'https://i.pinimg.com/736x/f3/da/67/f3da67caf09a8735732d20ec977e10a5.jpg'
// //   },
// //   {
// //     id: 2,
// //     name: 'Meera',
// //     age: 25,
// //     height: "5'6\"",
// //     image: 'https://e1.pxfuel.com/desktop-wallpaper/943/493/desktop-wallpaper-pin-on-ketan-adivasi-girl.jpg'
// //   },
// //   {
// //     id: 3,
// //     name: 'Divya',
// //     age: 23,
// //     height: "5'3\"",
// //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqVKWCXV3WJODsfiJlmsKE-Y8eNPCsfmZNVOpRRm2DyTAWCOon5en92RSGpLIFsicM-A&usqp=CAU'
// //   },
// //   {
// //     id: 4,
// //     name: 'Shreya',
// //     age: 26,
// //     height: "5'5\"",
// //     image: 'https://randomuser.me/api/portraits/women/76.jpg'
// //   },
// // ]

// // export default function HomeScreen() {
// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <ScrollView style={styles.container}>
// //         {/* Header */}
// //         <View style={styles.header}>
// //           <View style={styles.profileInfo}>
// //             <Image
// //               source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQHf_2XPEYLSXg/profile-displayphoto-shrink_800_800/B4DZbeCk0.GYAc-/0/1747481940888?e=1756944000&v=beta&t=DO_MkGXDbmZYmxmDAomppAs4B_asLSpJ737Img7QF1g' }}
// //               style={styles.avatar}
// //             />
// //             <View style={styles.profileText}>
// //               <Text style={styles.name}>jaykumar patil</Text>
// //               <Text style={styles.memberType}>Free Member</Text>
// //             </View>
// //             <TouchableOpacity style={styles.upgradeButton}>
// //               <AntDesign name="arrowup" size={14} color="white" />
// //               <Text style={styles.upgradeText}>Upgrade</Text>
// //             </TouchableOpacity>
// //           </View>
          
// //           <View style={styles.headerRight}>
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Feather name="bell" size={22} color="black" />
// //             </TouchableOpacity>
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Feather name="search" size={22} color="black" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Promo Banner */}
// //         <View style={styles.promoBanner}>
// //           <Image
// //             source={{ uri: 'https://via.placeholder.com/300x100?text=Adivasi+Shadi+60%25+Off' }}
// //             style={styles.promoImage}
// //             resizeMode="cover"
// //           />
// //         </View>
        
// //         {/* Profile Completion */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Complete Your Profile</Text>
// //           <View style={styles.progressContainer}>
// //             <View style={styles.progressBar}>
// //               <View style={[styles.progressFill, { width: '70%' }]} />
// //             </View>
// //             <Text style={styles.progressText}>70% complete</Text>
// //           </View>
          
// //           <View style={styles.profileActions}>
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, { backgroundColor: '#FFD166' }]}>
// //                 <MaterialIcons name="verified" size={20} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Verify Profile</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, { backgroundColor: '#06D6A0' }]}>
// //                 <FontAwesome5 name="users" size={16} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Family Details</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, { backgroundColor: '#118AB2' }]}>
// //                 <Feather name="user" size={18} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Complete Profile</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Daily Recommendations */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Daily Recommendations</Text>
// //             <View style={styles.timerBadge}>
// //               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
// //               <Text style={styles.timerText}>24h left</Text>
// //             </View>
// //           </View>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                 <Text style={styles.profileDetails}>{profile.height}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
          
// //           <TouchableOpacity style={styles.viewAllButton}>
// //             <Text style={styles.viewAllText}>View all</Text>
// //             <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //           </TouchableOpacity>
// //         </View>
        
// //         {/* All Matches */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>All Matches (1000)</Text>
// //           <Text style={styles.sectionSubtitle}>Members who match your partner preferences</Text>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                 <Text style={styles.profileDetails}>{profile.height}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
          
// //           <TouchableOpacity style={styles.viewAllButton}>
// //             <Text style={styles.viewAllText}>View all</Text>
// //             <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //           </TouchableOpacity>
// //         </View>
        
// //         {/* Membership Promo */}
// //         <View style={[styles.section, styles.membershipSection]}>
// //           <Text style={styles.membershipTitle}>Become a paid member</Text>
// //           <Text style={styles.membershipSubtitle}>Get up to 60% off on paid membership!</Text>
          
// //           <View style={styles.membershipFeatures}>
// //             <View style={styles.featureItem}>
// //               <Feather name="phone" size={18} color="#FF6B6B" />
// //               <Text style={styles.featureText}>Call/WhatsApp matches</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <Feather name="message-square" size={18} color="#FF6B6B" />
// //               <Text style={styles.featureText}>Unlimited messages</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
// //               <Text style={styles.featureText}>Higher chances of response</Text>
// //             </View>
// //           </View>
          
// //           <TouchableOpacity style={styles.membershipButton}>
// //             <Text style={styles.membershipButtonText}>See membership plans</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   container: {
// //     flex: 1,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   profileInfo: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   avatar: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginRight: 10,
// //   },
// //   name: {
// //     fontWeight: '600',
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   memberType: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   upgradeButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FF6B6B',
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 15,
// //     marginLeft: 10,
// //   },
// //   upgradeText: {
// //     color: 'white',
// //     fontSize: 12,
// //     marginLeft: 4,
// //     fontWeight: '600',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 16,
// //   },
// //   promoBanner: {
// //     height: 100,
// //     margin: 16,
// //     borderRadius: 10,
// //     overflow: 'hidden',
// //   },
// //   promoImage: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   section: {
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#333',
// //     marginBottom: 4,
// //   },
// //   sectionSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 12,
// //   },
// //   progressContainer: {
// //     marginBottom: 16,
// //   },
// //   progressBar: {
// //     height: 6,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 3,
// //     marginBottom: 6,
// //     overflow: 'hidden',
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 3,
// //   },
// //   progressText: {
// //     fontSize: 12,
// //     color: '#666',
// //     textAlign: 'right',
// //   },
// //   profileActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 12,
// //   },
// //   profileAction: {
// //     alignItems: 'center',
// //     width: '30%',
// //   },
// //   actionIcon: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //   },
// //   actionText: {
// //     fontSize: 12,
// //     color: '#333',
// //     textAlign: 'center',
// //   },
// //   timerBadge: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 12,
// //   },
// //   timerText: {
// //     fontSize: 12,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //   },
// //   profilesContainer: {
// //     paddingBottom: 8,
// //   },
// //   profileCard: {
// //     width: 120,
// //     marginRight: 12,
// //   },
// //   profileImage: {
// //     width: 120,
// //     height: 150,
// //     borderRadius: 8,
// //     marginBottom: 8,
// //   },
// //   profileName: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   profileDetails: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   viewAllButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     marginTop: 8,
// //   },
// //   viewAllText: {
// //     color: '#FF6B6B',
// //     fontSize: 14,
// //     fontWeight: '600',
// //   },
// //   membershipSection: {
// //     backgroundColor: '#FFF9F9',
// //     borderBottomWidth: 0,
// //   },
// //   membershipTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#333',
// //     textAlign: 'center',
// //     marginBottom: 4,
// //   },
// //   membershipSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     textAlign: 'center',
// //     marginBottom: 16,
// //   },
// //   membershipFeatures: {
// //     marginBottom: 16,
// //   },
// //   featureItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   featureText: {
// //     fontSize: 14,
// //     color: '#333',
// //     marginLeft: 8,
// //   },
// //   membershipButton: {
// //     backgroundColor: '#FF6B6B',
// //     padding: 14,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   membershipButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },
// // })










// // //2nd
// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { Redirect } from 'expo-router'

// // export default function HomeScreen() {
// //   return (
// //     <View>
// //           <Redirect href={'login'} />
      
// //     </View>
// //   )
// // } // <Redirect href={'homescreens/info12'} />















// //20/08/2025

// // app/(tabs)/index.jsx
// // app/(tabs)/index.jsx
// // import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated } from 'react-native'
// // import React, { useState } from 'react'
// // import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
// // import { SafeAreaView } from 'react-native-safe-area-context'

// // const recommendedProfiles = [
// //   {
// //     id: 1,
// //     name: 'Ananya',
// //     age: 24,
// //     height: "5'4\"",
// //     image: 'https://i.pinimg.com/736x/f3/da/67/f3da67caf09a8735732d20ec977e10a5.jpg'
// //   },
// //   {
// //     id: 2,
// //     name: 'Meera',
// //     age: 25,
// //     height: "5'6\"",
// //     image: 'https://e1.pxfuel.com/desktop-wallpaper/943/493/desktop-wallpaper-pin-on-ketan-adivasi-girl.jpg'
// //   },
// //   {
// //     id: 3,
// //     name: 'Divya',
// //     age: 23,
// //     height: "5'3\"",
// //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqVKWCXV3WJODsfiJlmsKE-Y8eNPCsfmZNVOpRRm2DyTAWCOon5en92RSGpLIFsicM-A&usqp=CAU'
// //   },
// //   {
// //     id: 4,
// //     name: 'Shreya',
// //     age: 26,
// //     height: "5'5\"",
// //     image: 'https://randomuser.me/api/portraits/women/76.jpg'
// //   },
// // ]

// // export default function HomeScreen() {
// //   const [membershipType, setMembershipType] = useState('REGULAR');
// //   const [translateX] = useState(new Animated.Value(0));
// //   const [language, setLanguage] = useState('ENG');

// //   const toggleMembership = () => {
// //     const toValue = membershipType === 'REGULAR' ? 1 : 0;
// //     Animated.spring(translateX, {
// //       toValue,
// //       friction: 10,
// //       useNativeDriver: false,
// //     }).start();
// //     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
// //   };

// //   const toggleLanguage = () => {
// //     setLanguage(prev => prev === 'ENG' ? 'HI' : 'ENG');
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <ScrollView style={styles.container}>
// //         {/* Top Bar with Toggle, Language and Icons */}
// //         <View style={styles.topBar}>
// //           {/* Membership Toggle */}
// //           <View style={styles.toggleContainer}>
// //             <TouchableOpacity 
// //               style={styles.toggleWrapper}
// //               onPress={toggleMembership}
// //               activeOpacity={0.8}
// //             >
// //               <Animated.View style={[
// //                 styles.toggleBackground,
// //                 {
// //                   transform: [{
// //                     translateX: translateX.interpolate({
// //                       inputRange: [0, 1],
// //                       outputRange: [0, 70] // Width of each toggle option
// //                     })
// //                   }]
// //                 }
// //               ]} />
// //               <View style={styles.toggleOptions}>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'REGULAR' && styles.toggleTextActive
// //                 ]}>
// //                   Regular
// //                 </Text>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'PRIME' && styles.toggleTextActive
// //                 ]}>
// //                   PRIME
// //                 </Text>
// //               </View>
// //             </TouchableOpacity>
// //           </View>

// //           {/* Right side icons */}
// //           <View style={styles.topIcons}>
// //             <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
// //               <Text style={styles.languageText}>{language}</Text>
// //             </TouchableOpacity>
            
// //           </View>
// //         </View>

// //         {/* Header */}
// //         <View style={styles.header}>
// //           <View style={styles.profileInfo}>
// //             <Image
// //               source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQHf_2XPEYLSXg/profile-displayphoto-shrink_800_800/B4DZbeCk0.GYAc-/0/1747481940888?e=1756944000&v=beta&t=DO_MkGXDbmZYmxmDAomppAs4B_asLSpJ737Img7QF1g' }}
// //               style={styles.avatar}
// //             />
// //             <View style={styles.profileText}>
// //               <Text style={styles.name}>jaykumar patil</Text>
// //               <Text style={styles.memberType}>Free Member</Text>
// //             </View>
// //             <TouchableOpacity style={styles.upgradeButton}>
// //               <AntDesign name="arrowup" size={14} color="white" />
// //               <Text style={styles.upgradeText}>Upgrade</Text>
// //             </TouchableOpacity>
// //           </View>
          
// //           <View style={styles.headerRight}>
// //            <TouchableOpacity style={styles.iconButton}>
// //               <Ionicons name="notifications-outline" size={22} color="black" />
// //               <View style={styles.notificationBadge}>
// //                 <Text style={styles.badgeText}>3</Text>
// //               </View>
// //             </TouchableOpacity>
       
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Feather name="search" size={22} color="black" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Promo Banner */}
// //         <View style={styles.promoBanner}>
// //           <Image
// //             source={{ uri: 'https://via.placeholder.com/300x100?text=Adivasi+Shadi+60%25+Off' }}
// //             style={styles.promoImage}
// //             resizeMode="cover"
// //           />
// //         </View>
        
// //         {/* Profile Completion */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Complete Your Profile</Text>
// //           <View style={styles.progressContainer}>
// //             <View style={styles.progressBar}>
// //               <View style={[styles.progressFill, { width: '70%' }]} />
// //             </View>
// //             <Text style={styles.progressText}>70% complete</Text>
// //           </View>
          
// //           <View style={styles.profileActions}>
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, { backgroundColor: '#FFD166' }]}>
// //                 <MaterialIcons name="verified" size={20} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Verify Profile</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, { backgroundColor: '#06D6A0' }]}>
// //                 <FontAwesome5 name="users" size={16} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Family Details</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, { backgroundColor: '#118AB2' }]}>
// //                 <Feather name="user" size={18} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Complete Profile</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Daily Recommendations */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Daily Recommendations</Text>
// //             <View style={styles.timerBadge}>
// //               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
// //               <Text style={styles.timerText}>24h left</Text>
// //             </View>
// //           </View>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                 <Text style={styles.profileDetails}>{profile.height}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
          
// //           <TouchableOpacity style={styles.viewAllButton}>
// //             <Text style={styles.viewAllText}>View all</Text>
// //             <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //           </TouchableOpacity>
// //         </View>
        
// //         {/* All Matches */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>All Matches (1000)</Text>
// //           <Text style={styles.sectionSubtitle}>Members who match your partner preferences</Text>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                 <Text style={styles.profileDetails}>{profile.height}</Text>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
          
// //           <TouchableOpacity style={styles.viewAllButton}>
// //             <Text style={styles.viewAllText}>View all</Text>
// //             <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //           </TouchableOpacity>
// //         </View>
        
// //         {/* Membership Promo */}
// //         <View style={[styles.section, styles.membershipSection]}>
// //           <Text style={styles.membershipTitle}>Become a paid member</Text>
// //           <Text style={styles.membershipSubtitle}>Get up to 60% off on paid membership!</Text>
          
// //           <View style={styles.membershipFeatures}>
// //             <View style={styles.featureItem}>
// //               <Feather name="phone" size={18} color="#FF6B6B" />
// //               <Text style={styles.featureText}>Call/WhatsApp matches</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <Feather name="message-square" size={18} color="#FF6B6B" />
// //               <Text style={styles.featureText}>Unlimited messages</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
// //               <Text style={styles.featureText}>Higher chances of response</Text>
// //             </View>
// //           </View>
          
// //           <TouchableOpacity style={styles.membershipButton}>
// //             <Text style={styles.membershipButtonText}>See membership plans</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   container: {
// //     flex: 1,
// //   },
// //   topBar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   toggleContainer: {
// //     flex: 1,
// //   },
// //   toggleWrapper: {
// //     width: 140,
// //     height: 32,
// //     borderRadius: 16,
// //     backgroundColor: '#f0f0f0',
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   toggleBackground: {
// //     position: 'absolute',
// //     top: 2,
// //     left: 2,
// //     width: 68,
// //     height: 28,
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 14,
// //   },
// //   toggleOptions: {
// //     flexDirection: 'row',
// //     height: '100%',
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //   },
// //   toggleText: {
// //     fontSize: 12,
// //     fontWeight: '500',
// //     color: '#666',
// //     width: 70,
// //     textAlign: 'center',
// //     zIndex: 1,
// //   },
// //   toggleTextActive: {
// //     color: '#fff',
// //     fontWeight: '600',
// //   },
// //   topIcons: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   languageButton: {
// //     paddingHorizontal: 10,
// //     paddingVertical: 5,
// //     borderRadius: 12,
// //     backgroundColor: '#f0f0f0',
// //     marginRight: 12,
// //   },
// //   languageText: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   notificationBadge: {
// //     position: 'absolute',
// //     top: -5,
// //     right: -5,
// //     backgroundColor: '#FF6B6B',
// //     width: 16,
// //     height: 16,
// //     borderRadius: 8,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   badgeText: {
// //     color: '#fff',
// //     fontSize: 10,
// //     fontWeight: 'bold',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   profileInfo: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   avatar: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     marginRight: 10,
// //   },
// //   name: {
// //     fontWeight: '600',
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   memberType: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   upgradeButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FF6B6B',
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 15,
// //     marginLeft: 10,
// //   },
// //   upgradeText: {
// //     color: 'white',
// //     fontSize: 12,
// //     marginLeft: 4,
// //     fontWeight: '600',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 16,
// //     position: 'relative',
// //   },
// //   promoBanner: {
// //     height: 100,
// //     margin: 16,
// //     borderRadius: 10,
// //     overflow: 'hidden',
// //   },
// //   promoImage: {
// //     width: '100%',
// //     height: '100%',
// //   },
// //   section: {
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#333',
// //     marginBottom: 4,
// //   },
// //   sectionSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 12,
// //   },
// //   progressContainer: {
// //     marginBottom: 16,
// //   },
// //   progressBar: {
// //     height: 6,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 3,
// //     marginBottom: 6,
// //     overflow: 'hidden',
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 3,
// //   },
// //   progressText: {
// //     fontSize: 12,
// //     color: '#666',
// //     textAlign: 'right',
// //   },
// //   profileActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 12,
// //   },
// //   profileAction: {
// //     alignItems: 'center',
// //     width: '30%',
// //   },
// //   actionIcon: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //   },
// //   actionText: {
// //     fontSize: 12,
// //     color: '#333',
// //     textAlign: 'center',
// //   },
// //   timerBadge: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 12,
// //   },
// //   timerText: {
// //     fontSize: 12,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //   },
// //   profilesContainer: {
// //     paddingBottom: 8,
// //   },
// //   profileCard: {
// //     width: 120,
// //     marginRight: 12,
// //   },
// //   profileImage: {
// //     width: 120,
// //     height: 150,
// //     borderRadius: 8,
// //     marginBottom: 8,
// //   },
// //   profileName: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   profileDetails: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   viewAllButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     marginTop: 8,
// //   },
// //   viewAllText: {
// //     color: '#FF6B6B',
// //     fontSize: 14,
// //     fontWeight: '600',
// //   },
// //   membershipSection: {
// //     backgroundColor: '#FFF9F9',
// //     borderBottomWidth: 0,
// //   },
// //   membershipTitle: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#333',
// //     textAlign: 'center',
// //     marginBottom: 4,
// //   },
// //   membershipSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     textAlign: 'center',
// //     marginBottom: 16,
// //   },
// //   membershipFeatures: {
// //     marginBottom: 16,
// //   },
// //   featureItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   featureText: {
// //     fontSize: 14,
// //     color: '#333',
// //     marginLeft: 8,
// //   },
// //   membershipButton: {
// //     backgroundColor: '#FF6B6B',
// //     padding: 14,
// //     borderRadius: 8,
// //     alignItems: 'center',
// //   },
// //   membershipButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '600',
// //   },  
// // })












// // app/(tabs)/index.jsx
// // import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated } from 'react-native'
// // import React, { useState } from 'react'
// // import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
// // import { SafeAreaView } from 'react-native-safe-area-context'

// // const recommendedProfiles = [
// //   {
// //     id: 1,
// //     name: 'Ananya',
// //     age: 24,
// //     height: "5'4\"",
// //     image: 'https://i.pinimg.com/736x/f3/da/67/f3da67caf09a8735732d20ec977e10a5.jpg'
// //   },
// //   {
// //     id: 2,
// //     name: 'Meera',
// //     age: 25,
// //     height: "5'6\"",
// //     image: 'https://e1.pxfuel.com/desktop-wallpaper/943/493/desktop-wallpaper-pin-on-ketan-adivasi-girl.jpg'
// //   },
// //   {
// //     id: 3,
// //     name: 'Divya',
// //     age: 23,
// //     height: "5'3\"",
// //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqVKWCXV3WJODsfiJlmsKE-Y8eNPCsfmZNVOpRRm2DyTAWCOon5en92RSGpLIFsicM-A&usqp=CAU'
// //   },
// //   {
// //     id: 4,
// //     name: 'Shreya',
// //     age: 26,
// //     height: "5'5\"",
// //     image: 'https://randomuser.me/api/portraits/women/76.jpg'
// //   },
// // ]

// // export default function HomeScreen() {
// //   const [membershipType, setMembershipType] = useState('REGULAR');
// //   const [translateX] = useState(new Animated.Value(0));
// //   const [language, setLanguage] = useState('ENG');

// //   const toggleMembership = () => {
// //     const toValue = membershipType === 'REGULAR' ? 1 : 0;
// //     Animated.spring(translateX, {
// //       toValue,
// //       friction: 10,
// //       useNativeDriver: false,
// //     }).start();
// //     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
// //   };

// //   const toggleLanguage = () => {
// //     setLanguage(prev => prev === 'ENG' ? 'HI' : 'ENG');
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
// //         {/* Top Bar with Toggle and Language */}
// //         <View style={styles.topBar}>
// //           <View style={styles.toggleContainer}>
// //             <TouchableOpacity 
// //               style={styles.toggleWrapper}
// //               onPress={toggleMembership}
// //               activeOpacity={0.8}
// //             >
// //               <Animated.View style={[
// //                 styles.toggleBackground,
// //                 {
// //                   transform: [{
// //                     translateX: translateX.interpolate({
// //                       inputRange: [0, 1],
// //                       outputRange: [0, 70] // Width of each toggle option
// //                     })
// //                   }]
// //                 }
// //               ]} />
// //               <View style={styles.toggleOptions}>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'REGULAR' && styles.toggleTextActive
// //                 ]}>
// //                   Regular
// //                 </Text>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'PRIME' && styles.toggleTextActive
// //                 ]}>
// //                   PRIME
// //                 </Text>
// //               </View>
// //             </TouchableOpacity>
// //           </View>

// //           <TouchableOpacity onPress={toggleLanguage} style={styles.languageButton}>
// //             <Text style={styles.languageText}>{language}</Text>
// //           </TouchableOpacity>
// //         </View>

// //         {/* Header */}
// //         <View style={styles.header}>
// //           <View style={styles.profileInfo}>
// //             <Image
// //               source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQHf_2XPEYLSXg/profile-displayphoto-shrink_800_800/B4DZbeCk0.GYAc-/0/1747481940888?e=1756944000&v=beta&t=DO_MkGXDbmZYmxmDAomppAs4B_asLSpJ737Img7QF1g' }}
// //               style={styles.avatar}
// //             />
// //             <View style={styles.profileText}>
// //               <Text style={styles.name}>jaykumar patil</Text> 
// //               <Text style={styles.memberType}>Free Member</Text>
// //               <TouchableOpacity style={styles.upgradeButton}>
// //                 <AntDesign name="arrowup" size={12} color="white" />
// //                 <Text style={styles.upgradeText}>Upgrade</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
          
// //           <View style={styles.headerRight}>
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Ionicons name="notifications-outline" size={24} color="#333" />
// //               <View style={styles.notificationBadge}>
// //                 <Text style={styles.badgeText}>3</Text>
// //               </View>
// //             </TouchableOpacity>
       
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Ionicons name="menu" size={24} color="#333" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Promo Banner */}
// //         <View style={styles.promoBanner}>
// //           <Image
// //             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
// //             style={styles.promoImage}
// //             resizeMode="cover"
// //           />
// //         </View>
        
// //         {/* Profile Completion */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Complete Your Profile</Text>
// //           <View style={styles.progressContainer}>
// //             <View style={styles.progressBar}>
// //               <View style={[styles.progressFill, { width: '70%' }]} />
// //             </View>
// //             <Text style={styles.progressText}>70% complete</Text>
// //           </View>
          
// //           <View style={styles.profileActions}>
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.verifyIcon]}>
// //                 <MaterialIcons name="verified" size={20} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Verify Profile</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.familyIcon]}>
// //                 <FontAwesome5 name="users" size={16} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Family Details</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.completeIcon]}>
// //                 <Feather name="user" size={18} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>Complete Profile</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Daily Recommendations */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>Daily Recommendations</Text>
// //             <View style={styles.timerBadge}>
// //               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
// //               <Text style={styles.timerText}>24h left</Text>
// //             </View>
// //           </View>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <View style={styles.profileInfoOverlay}>
// //                   <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                   <Text style={styles.profileDetails}>{profile.height}</Text>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
          
// //           <TouchableOpacity style={styles.viewAllButton}>
// //             <Text style={styles.viewAllText}>View all</Text>
// //             <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //           </TouchableOpacity>
// //         </View>
        
// //         {/* All Matches */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>All Matches (1000)</Text>
// //             <TouchableOpacity style={styles.viewAllButton}>
// //               <Text style={styles.viewAllText}>View all</Text>
// //               <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //             </TouchableOpacity>
// //           </View>
// //           <Text style={styles.sectionSubtitle}>Members who match your partner preferences</Text>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <View style={styles.profileInfoOverlay}>
// //                   <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                   <Text style={styles.profileDetails}>{profile.height}</Text>
// //                 </View>
// //                 <View style={styles.interestIndicator}>
// //                   <Ionicons name="heart" size={14} color="#FF6B6B" />
// //                   <Text style={styles.interestText}>Interested</Text>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>
        
// //         {/* Membership Promo */}
// //         <View style={[styles.section, styles.membershipSection]}>
// //           <Text style={styles.membershipTitle}>Become a paid member</Text>
// //           <Text style={styles.membershipSubtitle}>Get up to 60% off on paid membership!</Text>
          
// //           <View style={styles.membershipFeatures}>
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <Feather name="phone" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>Call/WhatsApp matches</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <Feather name="message-square" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>Unlimited messages</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>Higher chances of response</Text>
// //             </View>
// //           </View>
          
// //           <TouchableOpacity style={styles.membershipButton}>
// //             <Text style={styles.membershipButtonText}>See membership plans</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   container: {
// //     flex: 1,
// //   },
// //   topBar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   toggleContainer: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   toggleWrapper: {
// //     width: 140,
// //     height: 32,
// //     borderRadius: 16,
// //     backgroundColor: '#f0f0f0',
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   toggleBackground: {
// //     position: 'absolute',
// //     top: 2,
// //     left: 2,
// //     width: 68,
// //     height: 28,
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 14,
// //   },
// //   toggleOptions: {
// //     flexDirection: 'row',
// //     height: '100%',
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //   },
// //   toggleText: {
// //     fontSize: 12,
// //     fontWeight: '500',
// //     color: '#666',
// //     width: 70,
// //     textAlign: 'center',
// //     zIndex: 1,
// //   },
// //   toggleTextActive: {
// //     color: '#fff',
// //     fontWeight: '600',
// //   },
// //   languageButton: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 16,
// //     backgroundColor: '#f0f0f0',
// //   },
// //   languageText: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   profileInfo: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   avatar: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     marginRight: 12,
// //   },
// //   profileText: {
// //     flex: 1,
// //   },
// //   name: {
// //     fontWeight: '600',
// //     fontSize: 18,
// //     color: '#333',
// //     textTransform: 'capitalize',
// //   },
// //   memberType: {
// //     fontSize: 13,
// //     color: '#666',
// //     marginBottom: 4,
// //   },
// //   upgradeButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FF6B6B',
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 15,
// //     alignSelf: 'flex-start',
// //   },
// //   upgradeText: {
// //     color: 'white',
// //     fontSize: 12,
// //     marginLeft: 4,
// //     fontWeight: '600',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 16,
// //     position: 'relative',
// //   },
// //   notificationBadge: {
// //     position: 'absolute',
// //     top: -5,
// //     right: -5,
// //     backgroundColor: '#FF6B6B',
// //     width: 18,
// //     height: 18,
// //     borderRadius: 9,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   badgeText: {
// //     color: '#fff',
// //     fontSize: 10,
// //     fontWeight: 'bold',
// //   },
// //   promoBanner: {
// //     height: 120,
// //     margin: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   promoImage: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 12,
// //   },
// //   section: {
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '700',
// //     color: '#333',
// //     marginBottom: 4,
// //   },
// //   sectionSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 12,
// //   },
// //   progressContainer: {
// //     marginBottom: 16,
// //   },
// //   progressBar: {
// //     height: 6,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 3,
// //     marginBottom: 6,
// //     overflow: 'hidden',
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 3,
// //   },
// //   progressText: {
// //     fontSize: 12,
// //     color: '#666',
// //     textAlign: 'right',
// //   },
// //   profileActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 12,
// //   },
// //   profileAction: {
// //     alignItems: 'center',
// //     width: '30%',
// //   },
// //   actionIcon: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   verifyIcon: {
// //     backgroundColor: '#1da1f2',
// //   },
// //   familyIcon: {
// //     backgroundColor: '#06D6A0',
// //   },
// //   completeIcon: {
// //     backgroundColor: '#118AB2',
// //   },
// //   actionText: {
// //     fontSize: 12,
// //     color: '#333',
// //     textAlign: 'center',
// //     fontWeight: '500',
// //   },
// //   timerBadge: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 12,
// //   },
// //   timerText: {
// //     fontSize: 12,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //     fontWeight: '500',
// //   },
// //   profilesContainer: {
// //     paddingBottom: 8,
// //   },
// //   profileCard: {
// //     width: 140,
// //     marginRight: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //     backgroundColor: '#fff',
// //   },
// //   profileImage: {
// //     width: 140,
// //     height: 160,
// //   },
// //   profileInfoOverlay: {
// //     padding: 8,
// //   },
// //   profileName: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   profileDetails: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   interestIndicator: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     position: 'absolute',
// //     top: 8,
// //     right: 8,
// //     borderRadius: 12,
// //   },
// //   interestText: {
// //     fontSize: 10,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //     fontWeight: '500',
// //   },
// //   viewAllButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     marginTop: 8,
// //   },
// //   viewAllText: {
// //     color: '#FF6B6B',
// //     fontSize: 14,
// //     fontWeight: '600',
// //     marginRight: 4,
// //   },
// //   membershipSection: {
// //     backgroundColor: '#FFF9F9',
// //     borderBottomWidth: 0,
// //     borderRadius: 12,
// //     margin: 16,
// //     marginTop: 0,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   membershipTitle: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     color: '#333',
// //     textAlign: 'center',
// //     marginBottom: 4,
// //   },
// //   membershipSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //   },
// //   membershipFeatures: {
// //     marginBottom: 20,
// //   },
// //   featureItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   featureIcon: {
// //     width: 36,
// //     height: 36,
// //     borderRadius: 18,
// //     backgroundColor: '#FFF0F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   featureText: {
// //     fontSize: 14,
// //     color: '#333',
// //     fontWeight: '500',
// //   },
// //   membershipButton: {
// //     backgroundColor: '#FF6B6B',
// //     padding: 16,
// //     borderRadius: 12,
// //     alignItems: 'center',
// //     marginTop: 10,
// //   },
// //   membershipButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '700',
// //   },
// // });









// // app/(tabs)/index.jsx
// // import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated } from 'react-native'
// // import React, { useState, useEffect } from 'react'
// // import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
// // import { SafeAreaView } from 'react-native-safe-area-context'
// // import { useFirestore } from '../hooks/useFirebase'
// // import { useLanguage } from '../context/LanguageContext'

// // const recommendedProfiles = [
// //   {
// //     id: 1,
// //     name: 'Ananya',
// //     age: 24,
// //     height: "5'4\"",
// //     image: 'https://i.pinimg.com/736x/f3/da/67/f3da67caf09a8735732d20ec977e10a5.jpg'
// //   },
// //   {
// //     id: 2,
// //     name: 'Meera',
// //     age: 25,
// //     height: "5'6\"",
// //     image: 'https://e1.pxfuel.com/desktop-wallpaper/943/493/desktop-wallpaper-pin-on-ketan-adivasi-girl.jpg'
// //   },
// //   {
// //     id: 3,
// //     name: 'Divya',
// //     age: 23,
// //     height: "5'3\"",
// //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqVKWCXV3WJODsfiJlmsKE-Y8eNPCsfmZNVOpRRm2DyTAWCOon5en92RSGpLIFsicM-A&usqp=CAU'
// //   },
// //   {
// //     id: 4,
// //     name: 'Shreya',
// //     age: 26,
// //     height: "5'5\"",
// //     image: 'https://randomuser.me/api/portraits/women/76.jpg'
// //   },
// // ]

// // export default function HomeScreen() {
// //   const [membershipType, setMembershipType] = useState('REGULAR');
// //   const [translateX] = useState(new Animated.Value(0));
// //   const { language } = useLanguage();
// //   const { userData, loading } = useFirestore();

// //   const toggleMembership = () => {
// //     const toValue = membershipType === 'REGULAR' ? 1 : 0;
// //     Animated.spring(translateX, {
// //       toValue,
// //       friction: 10,
// //       useNativeDriver: false,
// //     }).start();
// //     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
// //   };

// //   // Translations
// //   const translations = {
// //     completeProfile: {
// //       ENG: "Complete Your Profile",
// //       HI: "अपनी प्रोफाइल पूरी करें"
// //     },
// //     dailyRecommendations: {
// //       ENG: "Daily Recommendations",
// //       HI: "दैनिक सिफारिशें"
// //     },
// //     allMatches: {
// //       ENG: "All Matches",
// //       HI: "सभी मैच"
// //     },
// //     becomePaidMember: {
// //       ENG: "Become a paid member",
// //       HI: "एक भुगतान सदस्य बनें"
// //     },
// //     viewAll: {
// //       ENG: "View all",
// //       HI: "सभी देखें"
// //     },
// //     verifyProfile: {
// //       ENG: "Verify Profile",
// //       HI: "प्रोफाइल सत्यापित करें"
// //     },
// //     familyDetails: {
// //       ENG: "Family Details",
// //       HI: "परिवार का विवरण"
// //     },
// //     completeProfileBtn: {
// //       ENG: "Complete Profile",
// //       HI: "प्रोफाइल पूरी करें"
// //     },
// //     hoursLeft: {
// //       ENG: "24h left",
// //       HI: "24 घंटे बचे"
// //     },
// //     freeMember: {
// //       ENG: "Free Member",
// //       HI: "मुफ्त सदस्य"
// //     },
// //     upgrade: {
// //       ENG: "Upgrade",
// //       HI: "अपग्रेड करें"
// //     },
// //     seeMembershipPlans: {
// //       ENG: "See membership plans",
// //       HI: "सदस्यता योजनाएं देखें"
// //     },
// //     membersWhoMatch: {
// //       ENG: "Members who match your partner preferences",
// //       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
// //     },
// //     getUpToDiscount: {
// //       ENG: "Get up to 60% off on paid membership!",
// //       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
// //     },
// //     callWhatsAppMatches: {
// //       ENG: "Call/WhatsApp matches",
// //       HI: "मैचों को कॉल/व्हाट्सएप करें"
// //     },
// //     unlimitedMessages: {
// //       ENG: "Unlimited messages",
// //       HI: "असीमित संदेश"
// //     },
// //     higherChancesResponse: {
// //       ENG: "Higher chances of response",
// //       HI: "प्रतिक्रिया की अधिक संभावना"
// //     },
// //     interested: {
// //       ENG: "Interested",
// //       HI: "रुचि"
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <SafeAreaView style={styles.safeArea}>
// //         <View style={styles.loadingContainer}>
// //           <Text>Loading...</Text>
// //         </View>
// //       </SafeAreaView>
// //     );
// //   }

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
// //         {/* Top Bar with Toggle and Language */}
// //         <View style={styles.topBar}>
// //           <View style={styles.toggleContainer}>
// //             <TouchableOpacity 
// //               style={styles.toggleWrapper}
// //               onPress={toggleMembership}
// //               activeOpacity={0.8}
// //             >
// //               <Animated.View style={[
// //                 styles.toggleBackground,
// //                 {
// //                   transform: [{
// //                     translateX: translateX.interpolate({
// //                       inputRange: [0, 1],
// //                       outputRange: [0, 70] // Width of each toggle option
// //                     })
// //                   }]
// //                 }
// //               ]} />
// //               <View style={styles.toggleOptions}>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'REGULAR' && styles.toggleTextActive
// //                 ]}>
// //                   Regular
// //                 </Text>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'PRIME' && styles.toggleTextActive
// //                 ]}>
// //                   PRIME
// //                 </Text>
// //               </View>
// //             </TouchableOpacity>
// //           </View>

// //           <View style={styles.languageButton}>
// //             <Text style={styles.languageText}>{language}</Text>
// //           </View>
// //         </View>

// //         {/* Header */}
// //         <View style={styles.header}>
// //           <View style={styles.profileInfo}>
// //             <Image
// //               source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
// //               style={styles.avatar}
// //             />
// //             <View style={styles.profileText}>
// //               <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
// //               <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
// //               <TouchableOpacity style={styles.upgradeButton}>
// //                 <AntDesign name="arrowup" size={12} color="white" />
// //                 <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
// //               </TouchableOpacity>
// //             </View>
// //           </View>
          
// //           <View style={styles.headerRight}>
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Ionicons name="notifications-outline" size={24} color="#333" />
// //               <View style={styles.notificationBadge}>
// //                 <Text style={styles.badgeText}>3</Text>
// //               </View>
// //             </TouchableOpacity>
       
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Ionicons name="menu" size={24} color="#333" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Promo Banner */}
// //         <View style={styles.promoBanner}>
// //           <Image
// //             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
// //             style={styles.promoImage}
// //             resizeMode="cover"
// //           />
// //         </View>
        
// //         {/* Profile Completion */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
// //           <View style={styles.progressContainer}>
// //             <View style={styles.progressBar}>
// //               <View style={[styles.progressFill, { width: '70%' }]} />
// //             </View>
// //             <Text style={styles.progressText}>70% complete</Text>
// //           </View>
          
// //           <View style={styles.profileActions}>
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.verifyIcon]}>
// //                 <MaterialIcons name="verified" size={20} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.familyIcon]}>
// //                 <FontAwesome5 name="users" size={16} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.completeIcon]}>
// //                 <Feather name="user" size={18} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Daily Recommendations */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
// //             <View style={styles.timerBadge}>
// //               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
// //               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
// //             </View>
// //           </View>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <View style={styles.profileInfoOverlay}>
// //                   <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                   <Text style={styles.profileDetails}>{profile.height}</Text>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
          
// //           <TouchableOpacity style={styles.viewAllButton}>
// //             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
// //             <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //           </TouchableOpacity>
// //         </View>
        
// //         {/* All Matches */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>{translations.allMatches[language]} (1000)</Text>
// //             <TouchableOpacity style={styles.viewAllButton}>
// //               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
// //               <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //             </TouchableOpacity>
// //           </View>
// //           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
// //           <ScrollView
// //             horizontal
// //             showsHorizontalScrollIndicator={false}
// //             contentContainerStyle={styles.profilesContainer}
// //           >
// //             {recommendedProfiles.map(profile => (
// //               <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                 <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                 <View style={styles.profileInfoOverlay}>
// //                   <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                   <Text style={styles.profileDetails}>{profile.height}</Text>
// //                 </View>
// //                 <View style={styles.interestIndicator}>
// //                   <Ionicons name="heart" size={14} color="#FF6B6B" />
// //                   <Text style={styles.interestText}>{translations.interested[language]}</Text>
// //                 </View>
// //               </TouchableOpacity>
// //             ))}
// //           </ScrollView>
// //         </View>
        
// //         {/* Membership Promo */}
// //         <View style={[styles.section, styles.membershipSection]}>
// //           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
// //           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
// //           <View style={styles.membershipFeatures}>
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <Feather name="phone" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <Feather name="message-square" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
// //             </View>
// //           </View>
          
// //           <TouchableOpacity style={styles.membershipButton}>
// //             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   container: {
// //     flex: 1,
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   topBar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   toggleContainer: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   toggleWrapper: {
// //     width: 140,
// //     height: 32,
// //     borderRadius: 16,
// //     backgroundColor: '#f0f0f0',
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   toggleBackground: {
// //     position: 'absolute',
// //     top: 2,
// //     left: 2,
// //     width: 68,
// //     height: 28,
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 14,
// //   },
// //   toggleOptions: {
// //     flexDirection: 'row',
// //     height: '100%',
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //   },
// //   toggleText: {
// //     fontSize: 12,
// //     fontWeight: '500',
// //     color: '#666',
// //     width: 70,
// //     textAlign: 'center',
// //     zIndex: 1,
// //   },
// //   toggleTextActive: {
// //     color: '#fff',
// //     fontWeight: '600',
// //   },
// //   languageButton: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 16,
// //     backgroundColor: '#f0f0f0',
// //   },
// //   languageText: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   profileInfo: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   avatar: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     marginRight: 12,
// //   },
// //   profileText: {
// //     flex: 1,
// //   },
// //   name: {
// //     fontWeight: '600',
// //     fontSize: 18,
// //     color: '#333',
// //     textTransform: 'capitalize',
// //   },
// //   memberType: {
// //     fontSize: 13,
// //     color: '#666',
// //     marginBottom: 4,
// //   },
// //   upgradeButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FF6B6B',
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 15,
// //     alignSelf: 'flex-start',
// //   },
// //   upgradeText: {
// //     color: 'white',
// //     fontSize: 12,
// //     marginLeft: 4,
// //     fontWeight: '600',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 16,
// //     position: 'relative',
// //   },
// //   notificationBadge: {
// //     position: 'absolute',
// //     top: -5,
// //     right: -5,
// //     backgroundColor: '#FF6B6B',
// //     width: 18,
// //     height: 18,
// //     borderRadius: 9,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   badgeText: {
// //     color: '#fff',
// //     fontSize: 10,
// //     fontWeight: 'bold',
// //   },
// //   promoBanner: {
// //     height: 120,
// //     margin: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   promoImage: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 12,
// //   },
// //   section: {
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '700',
// //     color: '#333',
// //     marginBottom: 4,
// //   },
// //   sectionSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 12,
// //   },
// //   progressContainer: {
// //     marginBottom: 16,
// //   },
// //   progressBar: {
// //     height: 6,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 3,
// //     marginBottom: 6,
// //     overflow: 'hidden',
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 3,
// //   },
// //   progressText: {
// //     fontSize: 12,
// //     color: '#666',
// //     textAlign: 'right',
// //   },
// //   profileActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 12,
// //   },
// //   profileAction: {
// //     alignItems: 'center',
// //     width: '30%',
// //   },
// //   actionIcon: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   verifyIcon: {
// //     backgroundColor: '#1da1f2',
// //   },
// //   familyIcon: {
// //     backgroundColor: '#06D6A0',
// //   },
// //   completeIcon: {
// //     backgroundColor: '#118AB2',
// //   },
// //   actionText: {
// //     fontSize: 12,
// //     color: '#333',
// //     textAlign: 'center',
// //     fontWeight: '500',
// //   },
// //   timerBadge: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 12,
// //   },
// //   timerText: {
// //     fontSize: 12,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //     fontWeight: '500',
// //   },
// //   profilesContainer: {
// //     paddingBottom: 8,
// //   },
// //   profileCard: {
// //     width: 140,
// //     marginRight: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //     backgroundColor: '#fff',
// //   },
// //   profileImage: {
// //     width: 140,
// //     height: 160,
// //   },
// //   profileInfoOverlay: {
// //     padding: 8,
// //   },
// //   profileName: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   profileDetails: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   interestIndicator: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     position: 'absolute',
// //     top: 8,
// //     right: 8,
// //     borderRadius: 12,
// //   },
// //   interestText: {
// //     fontSize: 10,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //     fontWeight: '500',
// //   },
// //   viewAllButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     marginTop: 8,
// //   },
// //   viewAllText: {
// //     color: '#FF6B6B',
// //     fontSize: 14,
// //     fontWeight: '600',
// //     marginRight: 4,
// //   },
// //   membershipSection: {
// //     backgroundColor: '#FFF9F9',
// //     borderBottomWidth: 0,
// //     borderRadius: 12,
// //     margin: 16,
// //     marginTop: 0,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   membershipTitle: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     color: '#333',
// //     textAlign: 'center',
// //     marginBottom: 4,
// //   },
// //   membershipSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //   },
// //   membershipFeatures: {
// //     marginBottom: 20,
// //   },
// //   featureItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   featureIcon: {
// //     width: 36,
// //     height: 36,
// //     borderRadius: 18,
// //     backgroundColor: '#FFF0F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   featureText: {
// //     fontSize: 14,
// //     color: '#333',
// //     fontWeight: '500',
// //   },
// //   membershipButton: {
// //     backgroundColor: '#FF6B6B',
// //     padding: 16,
// //     borderRadius: 12,
// //     alignItems: 'center',
// //     marginTop: 10,
// //   },
// //   membershipButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '700',
// //   },
// // });















// // app/(tabs)/index.jsx
// // import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator } from 'react-native'
// // import React, { useState, useEffect } from 'react'
// // import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
// // import { SafeAreaView } from 'react-native-safe-area-context'
// // import { useFirestore } from '../hooks/useFirebase'
// // import { useLanguage } from '../context/LanguageContext'
// // import { collection, query, where, getDocs, limit } from 'firebase/firestore'
// // import { db } from '../../config/firebase'

// // export default function HomeScreen() {
// //   const [membershipType, setMembershipType] = useState('REGULAR');
// //   const [translateX] = useState(new Animated.Value(0));
// //   const { language } = useLanguage();
// //   const { userData, loading: userLoading } = useFirestore();
// //   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
// //   const [allMatches, setAllMatches] = useState([]);
// //   const [loadingProfiles, setLoadingProfiles] = useState(true);
// //   const [profileCompletion, setProfileCompletion] = useState(0);

// //   const toggleMembership = () => {
// //     const toValue = membershipType === 'REGULAR' ? 1 : 0;
// //     Animated.spring(translateX, {
// //       toValue,
// //       friction: 10,
// //       useNativeDriver: false,
// //     }).start();
// //     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
// //   };

// //   // Calculate profile completion percentage
// //   const calculateProfileCompletion = (userData) => {
// //     if (!userData) return 0;
    
// //     let completedFields = 0;
// //     let totalFields = 0;
    
// //     // Basic info fields
// //     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
// //     totalFields += basicInfoFields.length;
// //     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
// //     // Profile details
// //     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
// //     totalFields += profileFields.length;
// //     completedFields += profileFields.filter(field => userData[field]).length;
    
// //     // Family details
// //     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
// //     totalFields += familyFields.length;
// //     completedFields += familyFields.filter(field => userData[field]).length;
    
// //     // Partner preferences
// //     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
// //     totalFields += preferenceFields.length;
// //     completedFields += preferenceFields.filter(field => userData[field]).length;
    
// //     // Calculate percentage
// //     const percentage = Math.round((completedFields / totalFields) * 100);
// //     return percentage;
// //   };

// //   // Fetch recommended profiles from backend
// //   const fetchRecommendedProfiles = async () => {
// //     if (!userData) return;
    
// //     try {
// //       setLoadingProfiles(true);
// //       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
// //       const profilesRef = collection(db, 'Users', genderToFetch, 'profiles');
      
// //       // Get 4 random profiles
// //       const q = query(profilesRef, limit(4));
// //       const querySnapshot = await getDocs(q);
      
// //       const profiles = [];
// //       querySnapshot.forEach((doc) => {
// //         const profileData = doc.data();
// //         profiles.push({
// //           id: doc.id,
// //           name: profileData.firstName || 'User',
// //           age: profileData.age || calculateAge(profileData.dateOfBirth),
// //           height: profileData.height || "5'5\"",
// //           image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
// //           city: profileData.city || '',
// //           occupation: profileData.occupation || ''
// //         });
// //       });
      
// //       setRecommendedProfiles(profiles);
      
// //       // For all matches, get more profiles
// //       const allMatchesQuery = query(profilesRef, limit(8));
// //       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
// //       const allMatchesProfiles = [];
// //       allMatchesSnapshot.forEach((doc) => {
// //         const profileData = doc.data();
// //         allMatchesProfiles.push({
// //           id: doc.id,
// //           name: profileData.firstName || 'User',
// //           age: profileData.age || calculateAge(profileData.dateOfBirth),
// //           height: profileData.height || "5'5\"",
// //           image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
// //           city: profileData.city || '',
// //           occupation: profileData.occupation || ''
// //         });
// //       });
      
// //       setAllMatches(allMatchesProfiles);
// //     } catch (error) {
// //       console.error('Error fetching profiles:', error);
// //     } finally {
// //       setLoadingProfiles(false);
// //     }
// //   };

// //   // Calculate age from date of birth
// //   const calculateAge = (dateOfBirth) => {
// //     if (!dateOfBirth) return 25;
// //     try {
// //       const [day, month, year] = dateOfBirth.split('/');
// //       const birthDate = new Date(`${year}-${month}-${day}`);
// //       const today = new Date();
// //       let age = today.getFullYear() - birthDate.getFullYear();
// //       const monthDiff = today.getMonth() - birthDate.getMonth();
      
// //       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
// //         age--;
// //       }
      
// //       return age;
// //     } catch (error) {
// //       return 25;
// //     }
// //   };

// //   useEffect(() => {
// //     if (userData) {
// //       const completion = calculateProfileCompletion(userData);
// //       setProfileCompletion(completion);
// //       fetchRecommendedProfiles();
// //     }
// //   }, [userData]);

// //   // Translations
// //   const translations = {
// //     completeProfile: {
// //       ENG: "Complete Your Profile",
// //       HI: "अपनी प्रोफाइल पूरी करें"
// //     },
// //     dailyRecommendations: {
// //       ENG: "Daily Recommendations",
// //       HI: "दैनिक सिफारिशें"
// //     },
// //     allMatches: {
// //       ENG: "All Matches",
// //       HI: "सभी मैच"
// //     },
// //     becomePaidMember: {
// //       ENG: "Become a paid member",
// //       HI: "एक भुगतान सदस्य बनें"
// //     },
// //     viewAll: {
// //       ENG: "View all",
// //       HI: "सभी देखें"
// //     },
// //     verifyProfile: {
// //       ENG: "Verify Profile",
// //       HI: "प्रोफाइल सत्यापित करें"
// //     },
// //     familyDetails: {
// //       ENG: "Family Details",
// //       HI: "परिवार का विवरण"
// //     },
// //     completeProfileBtn: {
// //       ENG: "Complete Profile",
// //       HI: "प्रोफाइल पूरी करें"
// //     },
// //     hoursLeft: {
// //       ENG: "24h left",
// //       HI: "24 घंटे बचे"
// //     },
// //     freeMember: {
// //       ENG: "Free Member",
// //       HI: "मुफ्त सदस्य"
// //     },
// //     upgrade: {
// //       ENG: "Upgrade",
// //       HI: "अपग्रेड करें"
// //     },
// //     seeMembershipPlans: {
// //       ENG: "See membership plans",
// //       HI: "सदस्यता योजनाएं देखें"
// //     },
// //     membersWhoMatch: {
// //       ENG: "Members who match your partner preferences",
// //       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
// //     },
// //     getUpToDiscount: {
// //       ENG: "Get up to 60% off on paid membership!",
// //       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
// //     },
// //     callWhatsAppMatches: {
// //       ENG: "Call/WhatsApp matches",
// //       HI: "मैचों को कॉल/व्हाट्सएप करें"
// //     },
// //     unlimitedMessages: {
// //       ENG: "Unlimited messages",
// //       HI: "असीमित संदेश"
// //     },
// //     higherChancesResponse: {
// //       ENG: "Higher chances of response",
// //       HI: "प्रतिक्रिया की अधिक संभावना"
// //     },
// //     interested: {
// //       ENG: "Interested",
// //       HI: "रुचि"
// //     },
// //     complete: {
// //       ENG: "complete",
// //       HI: "पूर्ण"
// //     },
// //     loading: {
// //       ENG: "Loading...",
// //       HI: "लोड हो रहा है..."
// //     }
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
// //         {/* Top Bar with Toggle and Language */}
// //         <View style={styles.topBar}>
// //           <View style={styles.toggleContainer}>
// //             <TouchableOpacity 
// //               style={styles.toggleWrapper}
// //               onPress={toggleMembership}
// //               activeOpacity={0.8}
// //             >
// //               <Animated.View style={[
// //                 styles.toggleBackground,
// //                 {
// //                   transform: [{
// //                     translateX: translateX.interpolate({
// //                       inputRange: [0, 1],
// //                       outputRange: [0, 70]
// //                     })
// //                   }]
// //                 }
// //               ]} />
// //               <View style={styles.toggleOptions}>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'REGULAR' && styles.toggleTextActive
// //                 ]}>
// //                   Regular
// //                 </Text>
// //                 <Text style={[
// //                   styles.toggleText, 
// //                   membershipType === 'PRIME' && styles.toggleTextActive
// //                 ]}>
// //                   PRIME
// //                 </Text>
// //               </View>
// //             </TouchableOpacity>
// //           </View>

// //           <View style={styles.languageButton}>
// //             <Text style={styles.languageText}>{language}</Text>
// //           </View>
// //         </View>

// //         {/* Header */}
// //         <View style={styles.header}>
// //           {userLoading ? (
// //             <View style={styles.profileInfo}>
// //               <View style={[styles.avatar, styles.avatarLoading]} />
// //               <View style={styles.profileText}>
// //                 <View style={styles.nameLoading} />
// //                 <View style={styles.memberTypeLoading} />
// //                 <View style={styles.upgradeButtonLoading} />
// //               </View>
// //             </View>
// //           ) : (
// //             <View style={styles.profileInfo}>
// //               <Image
// //                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
// //                 style={styles.avatar}
// //               />
// //               <View style={styles.profileText}>
// //                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
// //                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
// //                 <TouchableOpacity style={styles.upgradeButton}>
// //                   <AntDesign name="arrowup" size={12} color="white" />
// //                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             </View>
// //           )}
          
// //           <View style={styles.headerRight}>
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Ionicons name="notifications-outline" size={24} color="#333" />
// //               <View style={styles.notificationBadge}>
// //                 <Text style={styles.badgeText}>3</Text>
// //               </View>
// //             </TouchableOpacity>
       
// //             <TouchableOpacity style={styles.iconButton}>
// //               <Ionicons name="menu" size={24} color="#333" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Promo Banner */}
// //         <View style={styles.promoBanner}>
// //           <Image
// //             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
// //             style={styles.promoImage}
// //             resizeMode="cover"
// //           />
// //         </View>
        
// //         {/* Profile Completion */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
// //           <View style={styles.progressContainer}>
// //             <View style={styles.progressBar}>
// //               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
// //             </View>
// //             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
// //           </View>
          
// //           <View style={styles.profileActions}>
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.verifyIcon]}>
// //                 <MaterialIcons name="verified" size={20} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.familyIcon]}>
// //                 <FontAwesome5 name="users" size={16} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
// //             </TouchableOpacity>
            
// //             <TouchableOpacity style={styles.profileAction}>
// //               <View style={[styles.actionIcon, styles.completeIcon]}>
// //                 <Feather name="user" size={18} color="#fff" />
// //               </View>
// //               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
// //             </TouchableOpacity>
// //           </View>
// //         </View>
        
// //         {/* Daily Recommendations */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
// //             <View style={styles.timerBadge}>
// //               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
// //               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
// //             </View>
// //           </View>
          
// //           {loadingProfiles ? (
// //             <View style={styles.loadingContainerSection}>
// //               <ActivityIndicator size="large" color="#FF6B6B" />
// //               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
// //             </View>
// //           ) : (
// //             <ScrollView
// //               horizontal
// //               showsHorizontalScrollIndicator={false}
// //               contentContainerStyle={styles.profilesContainer}
// //             >
// //               {recommendedProfiles.map(profile => (
// //                 <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                   <View style={styles.profileInfoOverlay}>
// //                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                     <Text style={styles.profileDetails}>{profile.height}</Text>
// //                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
// //                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
// //                   </View>
// //                 </TouchableOpacity>
// //               ))}
// //             </ScrollView>
// //           )}
          
// //           <TouchableOpacity style={styles.viewAllButton}>
// //             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
// //             <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //           </TouchableOpacity>
// //         </View>
        
// //         {/* All Matches */}
// //         <View style={styles.section}>
// //           <View style={styles.sectionHeader}>
// //             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
// //             <TouchableOpacity style={styles.viewAllButton}>
// //               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
// //               <Feather name="chevron-right" size={16} color="#FF6B6B" />
// //             </TouchableOpacity>
// //           </View>
// //           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
// //           {loadingProfiles ? (
// //             <View style={styles.loadingContainerSection}>
// //               <ActivityIndicator size="large" color="#FF6B6B" />
// //               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
// //             </View>
// //           ) : (
// //             <ScrollView
// //               horizontal
// //               showsHorizontalScrollIndicator={false}
// //               contentContainerStyle={styles.profilesContainer}
// //             >
// //               {allMatches.map(profile => (
// //                 <TouchableOpacity key={profile.id} style={styles.profileCard}>
// //                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
// //                   <View style={styles.profileInfoOverlay}>
// //                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
// //                     <Text style={styles.profileDetails}>{profile.height}</Text>
// //                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
// //                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
// //                   </View>
// //                   <View style={styles.interestIndicator}>
// //                     <Ionicons name="heart" size={14} color="#FF6B6B" />
// //                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
// //                   </View>
// //                 </TouchableOpacity>
// //               ))}
// //             </ScrollView>
// //           )}
// //         </View>
        
// //         {/* Membership Promo */}
// //         <View style={[styles.section, styles.membershipSection]}>
// //           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
// //           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
// //           <View style={styles.membershipFeatures}>
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <Feather name="phone" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <Feather name="message-square" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
// //             </View>
            
// //             <View style={styles.featureItem}>
// //               <View style={styles.featureIcon}>
// //                 <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
// //               </View>
// //               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
// //             </View>
// //           </View>
          
// //           <TouchableOpacity style={styles.membershipButton}>
// //             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
// //           </TouchableOpacity>
// //         </View>
// //       </ScrollView>
// //     </SafeAreaView>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   container: {
// //     flex: 1,
// //   },
// //   topBar: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingHorizontal: 16,
// //     paddingVertical: 12,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   toggleContainer: {
// //     flex: 1,
// //     alignItems: 'center',
// //   },
// //   toggleWrapper: {
// //     width: 140,
// //     height: 32,
// //     borderRadius: 16,
// //     backgroundColor: '#f0f0f0',
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   toggleBackground: {
// //     position: 'absolute',
// //     top: 2,
// //     left: 2,
// //     width: 68,
// //     height: 28,
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 14,
// //   },
// //   toggleOptions: {
// //     flexDirection: 'row',
// //     height: '100%',
// //     alignItems: 'center',
// //     justifyContent: 'space-around',
// //   },
// //   toggleText: {
// //     fontSize: 12,
// //     fontWeight: '500',
// //     color: '#666',
// //     width: 70,
// //     textAlign: 'center',
// //     zIndex: 1,
// //   },
// //   toggleTextActive: {
// //     color: '#fff',
// //     fontWeight: '600',
// //   },
// //   languageButton: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 16,
// //     backgroundColor: '#f0f0f0',
// //   },
// //   languageText: {
// //     fontSize: 12,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   profileInfo: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     flex: 1,
// //   },
// //   avatar: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     marginRight: 12,
// //   },
// //   avatarLoading: {
// //     backgroundColor: '#f0f0f0',
// //   },
// //   profileText: {
// //     flex: 1,
// //   },
// //   name: {
// //     fontWeight: '600',
// //     fontSize: 18,
// //     color: '#333',
// //     textTransform: 'capitalize',
// //   },
// //   nameLoading: {
// //     height: 20,
// //     width: 120,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 4,
// //     marginBottom: 4,
// //   },
// //   memberType: {
// //     fontSize: 13,
// //     color: '#666',
// //     marginBottom: 4,
// //   },
// //   memberTypeLoading: {
// //     height: 14,
// //     width: 80,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 4,
// //     marginBottom: 8,
// //   },
// //   upgradeButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FF6B6B',
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 15,
// //     alignSelf: 'flex-start',
// //   },
// //   upgradeButtonLoading: {
// //     height: 24,
// //     width: 70,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 15,
// //   },
// //   upgradeText: {
// //     color: 'white',
// //     fontSize: 12,
// //     marginLeft: 4,
// //     fontWeight: '600',
// //   },
// //   headerRight: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   iconButton: {
// //     marginLeft: 16,
// //     position: 'relative',
// //   },
// //   notificationBadge: {
// //     position: 'absolute',
// //     top: -5,
// //     right: -5,
// //     backgroundColor: '#FF6B6B',
// //     width: 18,
// //     height: 18,
// //     borderRadius: 9,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   badgeText: {
// //     color: '#fff',
// //     fontSize: 10,
// //     fontWeight: 'bold',
// //   },
// //   promoBanner: {
// //     height: 120,
// //     margin: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   promoImage: {
// //     width: '100%',
// //     height: '100%',
// //     borderRadius: 12,
// //   },
// //   section: {
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f0f0f0',
// //   },
// //   sectionHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 12,
// //   },
// //   sectionTitle: {
// //     fontSize: 18,
// //     fontWeight: '700',
// //     color: '#333',
// //     marginBottom: 4,
// //   },
// //   sectionSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     marginBottom: 12,
// //   },
// //   progressContainer: {
// //     marginBottom: 16,
// //   },
// //   progressBar: {
// //     height: 6,
// //     backgroundColor: '#f0f0f0',
// //     borderRadius: 3,
// //     marginBottom: 6,
// //     overflow: 'hidden',
// //   },
// //   progressFill: {
// //     height: '100%',
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 3,
// //   },
// //   progressText: {
// //     fontSize: 12,
// //     color: '#666',
// //     textAlign: 'right',
// //   },
// //   profileActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 12,
// //   },
// //   profileAction: {
// //     alignItems: 'center',
// //     width: '30%',
// //   },
// //   actionIcon: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   verifyIcon: {
// //     backgroundColor: '#1da1f2',
// //   },
// //   familyIcon: {
// //     backgroundColor: '#06D6A0',
// //   },
// //   completeIcon: {
// //     backgroundColor: '#118AB2',
// //   },
// //   actionText: {
// //     fontSize: 12,
// //     color: '#333',
// //     textAlign: 'center',
// //     fontWeight: '500',
// //   },
// //   timerBadge: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 12,
// //   },
// //   timerText: {
// //     fontSize: 12,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //     fontWeight: '500',
// //   },
// //   profilesContainer: {
// //     paddingBottom: 8,
// //   },
// //   profileCard: {
// //     width: 140,
// //     marginRight: 16,
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //     backgroundColor: '#fff',
// //   },
// //   profileImage: {
// //     width: 140,
// //     height: 160,
// //   },
// //   profileInfoOverlay: {
// //     padding: 8,
// //   },
// //   profileName: {
// //     fontSize: 14,
// //     fontWeight: '600',
// //     color: '#333',
// //   },
// //   profileDetails: {
// //     fontSize: 12,
// //     color: '#666',
// //   },
// //   profileCity: {
// //     fontSize: 11,
// //     color: '#888',
// //     marginTop: 2,
// //   },
// //   profileOccupation: {
// //     fontSize: 11,
// //     color: '#888',
// //     marginTop: 2,
// //   },
// //   interestIndicator: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     position: 'absolute',
// //     top: 8,
// //     right: 8,
// //     borderRadius: 12,
// //   },
// //   interestText: {
// //     fontSize: 10,
// //     color: '#FF6B6B',
// //     marginLeft: 4,
// //     fontWeight: '500',
// //   },
// //   viewAllButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'flex-end',
// //     marginTop: 8,
// //   },
// //   viewAllText: {
// //     color: '#FF6B6B',
// //     fontSize: 14,
// //     fontWeight: '600',
// //     marginRight: 4,
// //   },
// //   membershipSection: {
// //     backgroundColor: '#FFF9F9',
// //     borderBottomWidth: 0,
// //     borderRadius: 12,
// //     margin: 16,
// //     marginTop: 0,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 3,
// //     elevation: 3,
// //   },
// //   membershipTitle: {
// //     fontSize: 20,
// //     fontWeight: '700',
// //     color: '#333',
// //     textAlign: 'center',
// //     marginBottom: 4,
// //   },
// //   membershipSubtitle: {
// //     fontSize: 14,
// //     color: '#666',
// //     textAlign: 'center',
// //     marginBottom: 20,
// //   },
// //   membershipFeatures: {
// //     marginBottom: 20,
// //   },
// //   featureItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 16,
// //   },
// //   featureIcon: {
// //     width: 36,
// //     height: 36,
// //     borderRadius: 18,
// //     backgroundColor: '#FFF0F0',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginRight: 12,
// //   },
// //   featureText: {
// //     fontSize: 14,
// //     color: '#333',
// //     fontWeight: '500',
// //   },
// //   membershipButton: {
// //     backgroundColor: '#FF6B6B',
// //     padding: 16,
// //     borderRadius: 12,
// //     alignItems: 'center',
// //     marginTop: 10,
// //   },
// //   membershipButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: '700',
// //   },
// //   loadingContainerSection: {
// //     height: 160,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   loadingText: {
// //     marginTop: 10,
// //     color: '#666',
// //   },
// // });







// //25/08/2025

// // app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useFirestore } from '../hooks/useFirebase'
// import { useLanguage } from '../context/LanguageContext'
// import { collection, query, where, getDocs, limit } from 'firebase/firestore'
// import { db } from '../../config/firebase'
// import { useRouter } from 'expo-router'

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const router = useRouter();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Calculate profile completion percentage
//   const calculateProfileCompletion = (userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     // Basic info fields
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     // Profile details
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     // Family details
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     // Partner preferences
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     // Calculate percentage
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   };

//   // Fetch recommended profiles from backend
//   const fetchRecommendedProfiles = async () => {
//     if (!userData) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users', genderToFetch, 'profiles');
      
//       // Get 4 random profiles
//       const q = query(profilesRef, limit(4));
//       const querySnapshot = await getDocs(q);
      
//       const profiles = [];
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         profiles.push({
//           id: doc.id,
//           name: profileData.firstName || 'User',
//           age: profileData.age || calculateAge(profileData.dateOfBirth),
//           height: profileData.height || "5'5\"",
//           image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//           city: profileData.city || '',
//           occupation: profileData.occupation || '',
//           fullData: profileData // Include full data for navigation
//         });
//       });
      
//       setRecommendedProfiles(profiles);
      
//       // For all matches, get more profiles
//       const allMatchesQuery = query(profilesRef, limit(8));
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         allMatchesProfiles.push({
//           id: doc.id,
//           name: profileData.firstName || 'User',
//           age: profileData.age || calculateAge(profileData.dateOfBirth),
//           height: profileData.height || "5'5\"",
//           image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//           city: profileData.city || '',
//           occupation: profileData.occupation || '',
//           fullData: profileData // Include full data for navigation
//         });
//       });
      
//       setAllMatches(allMatchesProfiles);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   };

//   // Calculate age from date of birth
//   const calculateAge = (dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       const [day, month, year] = dateOfBirth.split('/');
//       const birthDate = new Date(`${year}-${month}-${day}`);
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   };

//   // Navigate to profile details in Matches screen
//   const navigateToProfile = (profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         profile: JSON.stringify(profile)
//       }
//     });
//   };

//   // Navigate to all matches view
//   const navigateToAllMatches = () => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   };

//   useEffect(() => {
//     if (userData) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '##666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });







// app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { useFirestore } from '../hooks/useFirebase'
// import { useLanguage } from '../context/LanguageContext'
// import { collection, query, where, getDocs, limit, doc, getDoc } from 'firebase/firestore'
// import { db } from '../../config/firebase'
// import { useRouter } from 'expo-router'

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const router = useRouter();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Calculate profile completion percentage
//   const calculateProfileCompletion = (userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     // Basic info fields
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     // Profile details
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     // Family details
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     // Partner preferences
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     // Calculate percentage
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   };

//   // Fetch recommended profiles from backend
//   const fetchRecommendedProfiles = async () => {
//     if (!userData) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users', genderToFetch, 'profiles');
      
//       // Get 4 random profiles
//       const q = query(profilesRef, limit(4));
//       const querySnapshot = await getDocs(q);
      
//       const profiles = [];
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         profiles.push({
//           id: doc.id,
//           name: profileData.firstName || 'User',
//           age: profileData.age || calculateAge(profileData.dateOfBirth),
//           height: profileData.height || "5'5\"",
//           image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//           city: profileData.city || '',
//           occupation: profileData.occupation || '',
//           fullData: {
//             id: doc.id,
//             ...profileData
//           } // Include full data for navigation
//         });
//       });
      
//       setRecommendedProfiles(profiles);
      
//       // For all matches, get more profiles
//       const allMatchesQuery = query(profilesRef, limit(8));
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         allMatchesProfiles.push({
//           id: doc.id,
//           name: profileData.firstName || 'User',
//           age: profileData.age || calculateAge(profileData.dateOfBirth),
//           height: profileData.height || "5'5\"",
//           image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//           city: profileData.city || '',
//           occupation: profileData.occupation || '',
//           fullData: {
//             id: doc.id,
//             ...profileData
//           } // Include full data for navigation
//         });
//       });
      
//       setAllMatches(allMatchesProfiles);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   };

//   // Calculate age from date of birth
//   const calculateAge = (dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       const [day, month, year] = dateOfBirth.split('/');
//       const birthDate = new Date(`${year}-${month}-${day}`);
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   };

//   // Navigate to profile details in Matches screen
//   const navigateToProfile = (profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   };

//   // Navigate to all matches view
//   const navigateToAllMatches = () => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   };

//   useEffect(() => {
//     if (userData) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '##666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });



//03/09/2025
// app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const router = useRouter();
//   const { user } = useAuth();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Calculate age from date of birth
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       // Handle different date formats
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Calculate profile completion percentage
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     // Basic info fields
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     // Profile details
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     // Family details
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     // Partner preferences
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     // Calculate percentage
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Fetch recommended profiles from backend
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users');
      
//       // Query users by gender
//       const q = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(4)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         // Check if profile has required data and exclude current user
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setRecommendedProfiles(profiles);
      
//       // For all matches, get more profiles
//       const allMatchesQuery = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(8)
//       );
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         // Check if profile has required data and exclude current user
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           allMatchesProfiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setAllMatches(allMatchesProfiles);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, calculateAge]);

//   // Navigate to profile details in Matches screen
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   // Navigate to all matches view
//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   // Navigate to Upgrade screen
//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   useEffect(() => {
//     if (userData) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
      
//       // Only fetch profiles if we haven't already loaded them
//       if (recommendedProfiles.length === 0 && allMatches.length === 0) {
//         fetchRecommendedProfiles();
//       }
//     }
//   }, [userData, calculateProfileCompletion, fetchRecommendedProfiles, recommendedProfiles.length, allMatches.length]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });











//trail1
// app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Calculate age from date of birth
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       // Handle different date formats
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Calculate profile completion percentage
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     // Basic info fields
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     // Profile details
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     // Family details
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     // Partner preferences
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     // Calculate percentage
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Fetch recommended profiles from backend
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users');
      
//       // Query users by gender
//       const q = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(4)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         // Check if profile has required data and exclude current user
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setRecommendedProfiles(profiles);
      
//       // For all matches, get more profiles
//       const allMatchesQuery = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(8)
//       );
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         // Check if profile has required data and exclude current user
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           allMatchesProfiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setAllMatches(allMatchesProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, calculateAge, hasFetchedProfiles]);

//   // Navigate to profile details in Matches screen
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   // Navigate to all matches view
//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   // Navigate to Upgrade screen
//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, calculateProfileCompletion, fetchRecommendedProfiles, hasFetchedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });







//09/09/2025
// app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Calculate age from date of birth
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       // Handle different date formats
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Calculate profile completion percentage
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     // Basic info fields
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     // Profile details
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     // Family details
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     // Partner preferences
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     // Calculate percentage
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Fetch recommended profiles from backend
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users');
      
//       // Query users by gender
//       const q = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(4)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         // Check if profile has required data and exclude current user
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setRecommendedProfiles(profiles);
      
//       // For all matches, get more profiles
//       const allMatchesQuery = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(8)
//       );
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         // Check if profile has required data and exclude current user
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           allMatchesProfiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setAllMatches(allMatchesProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, calculateAge, hasFetchedProfiles]);

//   // Navigate to profile details in Matches screen
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   // Navigate to all matches view
//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   // Navigate to Upgrade screen
//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   // Navigate to different screens
//   const navigateToScreen = useCallback((screen) => {
//     setMenuVisible(false);
//     router.push(screen);
//   }, [router]);

//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, calculateProfileCompletion, fetchRecommendedProfiles, hasFetchedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     },
//     settings: {
//       ENG: "Settings",
//       HI: "सेटिंग्स"
//     },
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     matches: {
//       ENG: "Matches",
//       HI: "मैच"
//     },
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     upgradeMembership: {
//       ENG: "Upgrade Membership",
//       HI: "सदस्यता अपग्रेड करें"
//     },
//     helpSupport: {
//       ENG: "Help & Support",
//       HI: "मदद और सहायता"
//     },
//     logout: {
//       ENG: "Logout",
//       HI: "लॉगआउट"
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setMenuVisible(true)}
//             >
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Hamburger Menu Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={menuVisible}
//           onRequestClose={() => setMenuVisible(false)}
//         >
//           <TouchableOpacity 
//             style={styles.menuOverlay}
//             activeOpacity={1}
//             onPress={() => setMenuVisible(false)}
//           >
//             <View style={styles.menuContainer}>
//               <View style={styles.menuHeader}>
//                 <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Profile')}
//               >
//                 <Ionicons name="person-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Matches')}
//               >
//                 <Ionicons name="heart-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Messages')}
//               >
//                 <Ionicons name="chatbubble-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//               >
//                 <Ionicons name="star-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/HelpSupport')}
//               >
//                 <Ionicons name="help-circle-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={styles.menuItem}>
//                 <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
//                 <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   menuOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-end',
//   },
//   menuContainer: {
//     width: '70%',
//     height: '100%',
//     backgroundColor: '#fff',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   menuHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 30,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuItemText: {
//     fontSize: 16,
//     marginLeft: 15,
//     color: '#333',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });






//10/09/2025
//app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Memoized calculateAge function
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Memoized calculateProfileCompletion function
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Memoized fetchRecommendedProfiles function
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users');
      
//       const q = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(4)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setRecommendedProfiles(profiles);
      
//       const allMatchesQuery = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(8)
//       );
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           allMatchesProfiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setAllMatches(allMatchesProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, hasFetchedProfiles, calculateAge]);

//   // Memoized navigate functions
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   const navigateToScreen = useCallback((screen) => {
//     setMenuVisible(false);
//     router.push(screen);
//   }, [router]);

//   // Fixed useEffect with proper dependencies
//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, hasFetchedProfiles, calculateProfileCompletion, fetchRecommendedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     },
//     settings: {
//       ENG: "Settings",
//       HI: "सेटिंग्स"
//     },
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     matches: {
//       ENG: "Matches",
//       HI: "मैच"
//     },
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     upgradeMembership: {
//       ENG: "Upgrade Membership",
//       HI: "सदस्यता अपग्रेड करें"
//     },
//     helpSupport: {
//       ENG: "Help & Support",
//       HI: "मदद और सहायता"
//     },
//     logout: {
//       ENG: "Logout",
//       HI: "लॉगआउट"
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setMenuVisible(true)}
//             >
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Hamburger Menu Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={menuVisible}
//           onRequestClose={() => setMenuVisible(false)}
//         >
//           <TouchableOpacity 
//             style={styles.menuOverlay}
//             activeOpacity={1}
//             onPress={() => setMenuVisible(false)}
//           >
//             <View style={styles.menuContainer}>
//               <View style={styles.menuHeader}>
//                 <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Profile')}
//               >
//                 <Ionicons name="person-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Matches')}
//               >
//                 <Ionicons name="heart-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Messages')}
//               >
//                 <Ionicons name="chatbubble-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//               >
//                 <Ionicons name="star-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/HelpSupport')}
//               >
//                 <Ionicons name="help-circle-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={styles.menuItem}>
//                 <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
//                 <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   menuOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-end',
//   },
//   menuContainer: {
//     width: '70%',
//     height: '100%',
//     backgroundColor: '#fff',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   menuHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 30,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuItemText: {
//     fontSize: 16,
//     marginLeft: 15,
//     color: '#333',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });



//11/09/2025
// app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';
// import { useNotifications } from '../context/NotificationContext';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [notificationModalVisible, setNotificationModalVisible] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();
//   const { notifications, unreadCount, markAsRead } = useNotifications();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Handle notification press
//   const handleNotificationPress = (notification) => {
//     setNotificationModalVisible(false);
//     markAsRead();
    
//     const { data } = notification.request.content;
//     if (data.screen === 'Messages') {
//       router.push('/(tabs)/Messages');
//     } else if (data.screen === 'Chat' && data.chatId) {
//       router.push(`/chat/${data.chatId}?name=${data.name || 'User'}`);
//     }
//   };

//   // Memoized calculateAge function
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Memoized calculateProfileCompletion function
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Memoized fetchRecommendedProfiles function
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users');
      
//       const q = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(4)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setRecommendedProfiles(profiles);
      
//       const allMatchesQuery = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(8)
//       );
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           allMatchesProfiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setAllMatches(allMatchesProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, hasFetchedProfiles, calculateAge]);

//   // Memoized navigate functions
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   const navigateToScreen = useCallback((screen) => {
//     setMenuVisible(false);
//     router.push(screen);
//   }, [router]);

//   // Fixed useEffect with proper dependencies
//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, hasFetchedProfiles, calculateProfileCompletion, fetchRecommendedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     },
//     settings: {
//       ENG: "Settings",
//       HI: "सेटिंग्स"
//     },
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     matches: {
//       ENG: "Matches",
//       HI: "मैच"
//     },
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     upgradeMembership: {
//       ENG: "Upgrade Membership",
//       HI: "सदस्यता अपग्रेड करें"
//     },
//     helpSupport: {
//       ENG: "Help & Support",
//       HI: "मदद और सहायता"
//     },
//     logout: {
//       ENG: "Logout",
//       HI: "लॉगआउट"
//     },
//     notifications: {
//       ENG: "Notifications",
//       HI: "सूचनाएं"
//     },
//     noNotifications: {
//       ENG: "No notifications",
//       HI: "कोई सूचना नहीं"
//     },
//     markAllAsRead: {
//       ENG: "Mark all as read",
//       HI: "सभी को पढ़ा हुआ चिह्नित करें"
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setNotificationModalVisible(true)}
//             >
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               {unreadCount > 0 && (
//                 <View style={styles.notificationBadge}>
//                   <Text style={styles.badgeText}>{unreadCount > 9 ? '9+' : unreadCount}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
       
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setMenuVisible(true)}
//             >
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Notifications Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={notificationModalVisible}
//           onRequestClose={() => setNotificationModalVisible(false)}
//         >
//           <View style={styles.notificationModalContainer}>
//             <View style={styles.notificationModal}>
//               <View style={styles.notificationHeader}>
//                 <Text style={styles.notificationTitle}>{translations.notifications[language]}</Text>
//                 <TouchableOpacity 
//                   style={styles.markAllButton}
//                   onPress={markAsRead}
//                 >
//                   <Text style={styles.markAllText}>{translations.markAllAsRead[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                   style={styles.closeButton}
//                   onPress={() => setNotificationModalVisible(false)}
//                 >
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <ScrollView style={styles.notificationList}>
//                 {notifications.length === 0 ? (
//                   <View style={styles.noNotifications}>
//                     <Ionicons name="notifications-off-outline" size={48} color="#ddd" />
//                     <Text style={styles.noNotificationsText}>{translations.noNotifications[language]}</Text>
//                   </View>
//                 ) : (
//                   notifications.map((notification, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.notificationItem}
//                       onPress={() => handleNotificationPress(notification)}
//                     >
//                       <View style={styles.notificationIcon}>
//                         <Ionicons 
//                           name={notification.request.content.data.type === 'interest' ? 'heart' : 'chatbubble'} 
//                           size={20} 
//                           color="#FF6B6B" 
//                         />
//                       </View>
//                       <View style={styles.notificationContent}>
//                         <Text style={styles.notificationTitleText}>
//                           {notification.request.content.title}
//                         </Text>
//                         <Text style={styles.notificationBody}>
//                           {notification.request.content.body}
//                         </Text>
//                         <Text style={styles.notificationTime}>
//                           {new Date(notification.date).toLocaleTimeString()}
//                         </Text>
//                       </View>
//                     </TouchableOpacity>
//                   ))
//                 )}
//               </ScrollView>
//             </View>
//           </View>
//         </Modal>
        
//         {/* Hamburger Menu Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={menuVisible}
//           onRequestClose={() => setMenuVisible(false)}
//         >
//           <TouchableOpacity 
//             style={styles.menuOverlay}
//             activeOpacity={1}
//             onPress={() => setMenuVisible(false)}
//           >
//             <View style={styles.menuContainer}>
//               <View style={styles.menuHeader}>
//                 <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Profile')}
//               >
//                 <Ionicons name="person-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Matches')}
//               >
//                 <Ionicons name="heart-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Messages')}
//               >
//                 <Ionicons name="chatbubble-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//               >
//                 <Ionicons name="star-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/HelpSupport')}
//               >
//                 <Ionicons name="help-circle-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={styles.menuItem}>
//                 <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
//                 <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   notificationModalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-end',
//   },
//   notificationModal: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     height: '80%',
//     padding: 16,
//   },
//   notificationHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   notificationTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     flex: 1,
//   },
//   markAllButton: {
//     marginRight: 16,
//   },
//   markAllText: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   notificationList: {
//     flex: 1,
//   },
//   noNotifications: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   noNotificationsText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   notificationIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   notificationContent: {
//     flex: 1,
//   },
//   notificationTitleText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 4,
//   },
//   notificationBody: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   notificationTime: {
//     fontSize: 12,
//     color: '#999',
//   },
//   menuOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-end',
//   },
//   menuContainer: {
//     width: '70%',
//     height: '100%',
//     backgroundColor: '#fff',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   menuHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 30,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuItemText: {
//     fontSize: 16,
//     marginLeft: 15,
//     color: '#333',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });





//trail2
// app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';
// import { useNotifications } from '../context/NotificationContext';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [notificationModalVisible, setNotificationModalVisible] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();
//   const { notifications, unreadCount, markAsRead } = useNotifications();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Handle notification press
//   const handleNotificationPress = (notification) => {
//     setNotificationModalVisible(false);
//     markAsRead();
    
//     const { data } = notification.request.content;
//     if (data.screen === 'Messages') {
//       router.push('/(tabs)/Messages');
//     } else if (data.screen === 'Chat' && data.chatId) {
//       router.push(`/chat/${data.chatId}?name=${data.name || 'User'}`);
//     }
//   };

//   // Memoized calculateAge function
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Memoized calculateProfileCompletion function
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Memoized fetchRecommendedProfiles function
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users');
      
//       const q = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(4)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setRecommendedProfiles(profiles);
      
//       const allMatchesQuery = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(8)
//       );
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           allMatchesProfiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setAllMatches(allMatchesProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, hasFetchedProfiles, calculateAge]);

//   // Memoized navigate functions
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   const navigateToScreen = useCallback((screen) => {
//     setMenuVisible(false);
//     router.push(screen);
//   }, [router]);

//   // Fixed useEffect with proper dependencies
//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, hasFetchedProfiles, calculateProfileCompletion, fetchRecommendedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     },
//     settings: {
//       ENG: "Settings",
//       HI: "सेटिंग्स"
//     },
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     matches: {
//       ENG: "Matches",
//       HI: "मैच"
//     },
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     upgradeMembership: {
//       ENG: "Upgrade Membership",
//       HI: "सदस्यता अपग्रेड करें"
//     },
//     helpSupport: {
//       ENG: "Help & Support",
//       HI: "मदद और सहायता"
//     },
//     logout: {
//       ENG: "Logout",
//       HI: "लॉगआउट"
//     },
//     notifications: {
//       ENG: "Notifications",
//       HI: "सूचनाएं"
//     },
//     noNotifications: {
//       ENG: "No notifications",
//       HI: "कोई सूचना नहीं"
//     },
//     markAllAsRead: {
//       ENG: "Mark all as read",
//       HI: "सभी को पढ़ा हुआ चिह्नित करें"
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setNotificationModalVisible(true)}
//             >
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               {unreadCount > 0 && (
//                 <View style={styles.notificationBadge}>
//                   <Text style={styles.badgeText}>{unreadCount > 9 ? '9+' : unreadCount}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
       
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setMenuVisible(true)}
//             >
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Notifications Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={notificationModalVisible}
//           onRequestClose={() => setNotificationModalVisible(false)}
//         >
//           <View style={styles.notificationModalContainer}>
//             <View style={styles.notificationModal}>
//               <View style={styles.notificationHeader}>
//                 <Text style={styles.notificationTitle}>{translations.notifications[language]}</Text>
//                 <TouchableOpacity 
//                   style={styles.markAllButton}
//                   onPress={markAsRead}
//                 >
//                   <Text style={styles.markAllText}>{translations.markAllAsRead[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                   style={styles.closeButton}
//                   onPress={() => setNotificationModalVisible(false)}
//                 >
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <ScrollView style={styles.notificationList}>
//                 {notifications.length === 0 ? (
//                   <View style={styles.noNotifications}>
//                     <Ionicons name="notifications-off-outline" size={48} color="#ddd" />
//                     <Text style={styles.noNotificationsText}>{translations.noNotifications[language]}</Text>
//                   </View>
//                 ) : (
//                   notifications.map((notification, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.notificationItem}
//                       onPress={() => handleNotificationPress(notification)}
//                     >
//                       <View style={styles.notificationIcon}>
//                         <Ionicons 
//                           name={notification.request.content.data.type === 'interest' ? 'heart' : 'chatbubble'} 
//                           size={20} 
//                           color="#FF6B6B" 
//                         />
//                       </View>
//                       <View style={styles.notificationContent}>
//                         <Text style={styles.notificationTitleText}>
//                           {notification.request.content.title}
//                         </Text>
//                         <Text style={styles.notificationBody}>
//                           {notification.request.content.body}
//                         </Text>
//                         <Text style={styles.notificationTime}>
//                           {new Date(notification.date).toLocaleTimeString()}
//                         </Text>
//                       </View>
//                     </TouchableOpacity>
//                   ))
//                 )}
//               </ScrollView>
//             </View>
//           </View>
//         </Modal>
        
//         {/* Hamburger Menu Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={menuVisible}
//           onRequestClose={() => setMenuVisible(false)}
//         >
//           <TouchableOpacity 
//             style={styles.menuOverlay}
//             activeOpacity={1}
//             onPress={() => setMenuVisible(false)}
//           >
//             <View style={styles.menuContainer}>
//               <View style={styles.menuHeader}>
//                 <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Profile')}
//               >
//                 <Ionicons name="person-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Matches')}
//               >
//                 <Ionicons name="heart-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Messages')}
//               >
//                 <Ionicons name="chatbubble-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//               >
//                 <Ionicons name="star-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/HelpSupport')}
//               >
//                 <Ionicons name="help-circle-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={styles.menuItem}>
//                 <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
//                 <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
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
//   topBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   toggleContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   toggleWrapper: {
//     width: 140,
//     height: 32,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   toggleBackground: {
//     position: 'absolute',
//     top: 2,
//     left: 2,
//     width: 68,
//     height: 28,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 14,
//   },
//   toggleOptions: {
//     flexDirection: 'row',
//     height: '100%',
//     alignItems: 'center',
//     justifyContent: 'space-around',
//   },
//   toggleText: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#666',
//     width: 70,
//     textAlign: 'center',
//     zIndex: 1,
//   },
//   toggleTextActive: {
//     color: '#fff',
//     fontWeight: '600',
//   },
//   languageButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 16,
//     backgroundColor: '#f0f0f0',
//   },
//   languageText: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#333',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flex: 1,
//   },
//   avatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 12,
//   },
//   avatarLoading: {
//     backgroundColor: '#f0f0f0',
//   },
//   profileText: {
//     flex: 1,
//   },
//   name: {
//     fontWeight: '600',
//     fontSize: 18,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nameLoading: {
//     height: 20,
//     width: 120,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
//     marginBottom: 4,
//   },
//   memberType: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 4,
//   },
//   memberTypeLoading: {
//     height: 14,
//     width: 80,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 4,
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
//   upgradeButtonLoading: {
//     height: 24,
//     width: 70,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 15,
//   },
//   upgradeText: {
//     color: 'white',
//     fontSize: 12,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     marginLeft: 16,
//     position: 'relative',
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: '#FF6B6B',
//     width: 18,
//     height: 18,
//     borderRadius: 9,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: 'bold',
//   },
//   notificationModalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-end',
//   },
//   notificationModal: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     height: '80%',
//     padding: 16,
//   },
//   notificationHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   notificationTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     flex: 1,
//   },
//   markAllButton: {
//     marginRight: 16,
//   },
//   markAllText: {
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   notificationList: {
//     flex: 1,
//   },
//   noNotifications: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   noNotificationsText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   notificationIcon: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   notificationContent: {
//     flex: 1,
//   },
//   notificationTitleText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 4,
//   },
//   notificationBody: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   notificationTime: {
//     fontSize: 12,
//     color: '#999',
//   },
//   menuOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-end',
//   },
//   menuContainer: {
//     width: '70%',
//     height: '100%',
//     backgroundColor: '#fff',
//     paddingTop: 60,
//     paddingHorizontal: 20,
//   },
//   menuHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 30,
//     paddingBottom: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   menuItemText: {
//     fontSize: 16,
//     marginLeft: 15,
//     color: '#333',
//   },
//   promoBanner: {
//     height: 120,
//     margin: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   promoImage: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 12,
//   },
//   section: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f0f0f0',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 4,
//   },
//   sectionSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 12,
//   },
//   progressContainer: {
//     marginBottom: 16,
//   },
//   progressBar: {
//     height: 6,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 3,
//     marginBottom: 6,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 3,
//   },
//   progressText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   profileActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 12,
//   },
//   profileAction: {
//     alignItems: 'center',
//     width: '30%',
//   },
//   actionIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   verifyIcon: {
//     backgroundColor: '#1da1f2',
//   },
//   familyIcon: {
//     backgroundColor: '#06D6A0',
//   },
//   completeIcon: {
//     backgroundColor: '#118AB2',
//   },
//   actionText: {
//     fontSize: 12,
//     color: '#333',
//     textAlign: 'center',
//     fontWeight: '500',
//   },
//   timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },
//   timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   profilesContainer: {
//     paddingBottom: 8,
//   },
//   profileCard: {
    

//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
//   },  profileImage: {
//     width: 140,
//     height: 160,
//   },
//   profileInfoOverlay: {
//     padding: 8,
//   },
//   profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
//   },
//   profileDetails: {
//     fontSize: 12,
//     color: '#666',
//   },
//   profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
//   },
//   interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
//   },
//   interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
//   },
//   viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
//   },
//   viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
//   },
//   membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
//   },
//   membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   membershipFeatures: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
//   },
//   featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
//   },
//   loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
// });






//12/09/2025 rewirt

 // app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Memoized calculateAge function
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Memoized calculateProfileCompletion function
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Memoized fetchRecommendedProfiles function
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
//       const profilesRef = collection(db, 'Users');
      
//       const q = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(4)
//       );
      
//       const querySnapshot = await getDocs(q);
//       const profiles = [];
      
//       querySnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           profiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setRecommendedProfiles(profiles);
      
//       const allMatchesQuery = query(
//         profilesRef, 
//         where('gender', '==', genderToFetch),
//         limit(8)
//       );
//       const allMatchesSnapshot = await getDocs(allMatchesQuery);
      
//       const allMatchesProfiles = [];
//       allMatchesSnapshot.forEach((doc) => {
//         const profileData = doc.data();
//         if ((profileData.firstName || profileData.profilePhoto) && doc.id !== user.id) {
//           allMatchesProfiles.push({
//             id: doc.id,
//             name: profileData.firstName || 'User',
//             age: profileData.age || calculateAge(profileData.dateOfBirth),
//             height: profileData.height || "5'5\"",
//             image: profileData.profilePhoto || 'https://via.placeholder.com/140x160',
//             city: profileData.city || '',
//             occupation: profileData.occupation || '',
//             fullData: {
//               id: doc.id,
//               ...profileData
//             }
//           });
//         }
//       });
      
//       setAllMatches(allMatchesProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, hasFetchedProfiles, calculateAge]);

//   // Memoized navigate functions
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   const navigateToScreen = useCallback((screen) => {
//     setMenuVisible(false);
//     router.push(screen);
//   }, [router]);

//   // Fixed useEffect with proper dependencies
//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, hasFetchedProfiles, calculateProfileCompletion, fetchRecommendedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     },
//     settings: {
//       ENG: "Settings",
//       HI: "सेटिंग्स"
//     },
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     matches: {
//       ENG: "Matches",
//       HI: "मैच"
//     },
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     upgradeMembership: {
//       ENG: "Upgrade Membership",
//       HI: "सदस्यता अपग्रेड करें"
//     },
//     helpSupport: {
//       ENG: "Help & Support",
//       HI: "मदद और सहायता"
//     },
//     logout: {
//       ENG: "Logout",
//       HI: "लॉगआउट"
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setMenuVisible(true)}
//             >
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Hamburger Menu Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={menuVisible}
//           onRequestClose={() => setMenuVisible(false)}
//         >
//           <TouchableOpacity 
//             style={styles.menuOverlay}
//             activeOpacity={1}
//             onPress={() => setMenuVisible(false)}
//           >
//             <View style={styles.menuContainer}>
//               <View style={styles.menuHeader}>
//                 <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Profile')}
//               >
//                 <Ionicons name="person-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Matches')}
//               >
//                 <Ionicons name="heart-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Messages')}
//               >
//                 <Ionicons name="chatbubble-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//               >
//                 <Ionicons name="star-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/HelpSupport')}
//               >
//                 <Ionicons name="help-circle-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={styles.menuItem}>
//                 <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
//                 <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     container: {
//         flex: 1,
//     },
//     topBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     toggleContainer: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     toggleWrapper: {
//         width: 140,
//         height: 32,
//         borderRadius: 16,
//         backgroundColor: '#f0f0f0',
//         position: 'relative',
//         overflow: 'hidden',
//     },
//     toggleBackground: {
//         position: 'absolute',
//         top: 2,
//         left: 2,
//         width: 68,
//         height: 28,
//         backgroundColor: '#FF6B6B',
//         borderRadius: 14,
//     },
//     toggleOptions: {
//         flexDirection: 'row',
//         height: '100%',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     toggleText: {
//         fontSize: 12,
//         fontWeight: '500',
//         color: '#666',
//         width: 70,
//         textAlign: 'center',
//         zIndex: 1,
//     },
//     toggleTextActive: {
//         color: '#fff',
//         fontWeight: '600',
//     },
//     languageButton: {
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 16,
//         backgroundColor: '#f0f0f0',
//     },
//     languageText: {
//         fontSize: 12,
//         fontWeight: '600',
//         color: '#333',
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     profileInfo: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         flex: 1,
//     },
//     avatar: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 12,
//     },
//     avatarLoading: {
//         backgroundColor: '#f0f0f0',
//     },
//     profileText: {
//         flex: 1,
//     },
//     name: {
//         fontWeight: '600',
//         fontSize: 18,
//         color: '#333',
//         textTransform: 'capitalize',
//     },
//     nameLoading: {
//         height: 20,
//         width: 120,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 4,
//         marginBottom: 4,
//     },
//     memberType: {
//         fontSize: 13,
//         color: '#666',
//         marginBottom: 4,
//     },
//     memberTypeLoading: {
//         height: 14,
//         width: 80,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 4,
//         marginBottom: 8,
//     },
//     upgradeButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#FF6B6B',
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 15,
//         alignSelf: 'flex-start',
//     },
//     upgradeButtonLoading: {
//         height: 24,
//         width: 70,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 15,
//     },
//     upgradeText: {
//         color: 'white',
//         fontSize: 12,
//         marginLeft: 4,
//         fontWeight: '600',
//     },
//     headerRight: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconButton: {
//         marginLeft: 16,
//         position: 'relative',
//     },
//     notificationBadge: {
//         position: 'absolute',
//         top: -5,
//         right: -5,
//         backgroundColor: '#FF6B6B',
//         width: 18,
//         height: 18,
//         borderRadius: 9,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     badgeText: {
//         color: '#fff',
//         fontSize: 10,
//         fontWeight: 'bold',
//     },
//     menuOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-start',
//         alignItems: 'flex-end',
//     },
//     menuContainer: {
//         width: '70%',
//         height: '100%',
//         backgroundColor: '#fff',
//         paddingTop: 60,
//         paddingHorizontal: 20,
//     },
//     menuHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 30,
//         paddingBottom: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     menuTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     menuItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     menuItemText: {
//         fontSize: 16,
//         marginLeft: 15,
//         color: '#333',
//     },
//     promoBanner: {
//         height: 120,
//         margin: 16,
//         borderRadius: 12,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 3,
//     },
//     promoImage: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 12,
//     },
//     section: {
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     sectionHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 12,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: '#333',
//         marginBottom: 4,
//     },
//     sectionSubtitle: {
//         fontSize: 14,
//         color: '#666',
//         marginBottom: 12,
//     },
//     progressContainer: {
//         marginBottom: 16,
//     },
//     progressBar: {
//         height: 6,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 3,
//         marginBottom: 6,
//         overflow: 'hidden',
//     },
//     progressFill: {
//         height: '100%',
//         backgroundColor: '#FF6B6B',
//         borderRadius: 3,
//     },
//     progressText: {
//         fontSize: 12,
//         color: '#666',
//         textAlign: 'right',
//     },
//     profileActions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 12,
//     },
//     profileAction: {
//         alignItems: 'center',
//         width: '30%',
//     },
//     actionIcon: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 8,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         elevation: 3,
//     },
//     verifyIcon: {
//         backgroundColor: '#1da1f2',
//     },
//     familyIcon: {
//         backgroundColor: '#06D6A0',
//     },
//     completeIcon: {
//         backgroundColor: '#118AB2',
//     },
//     actionText: {
//         fontSize: 12,
//         color: '#333',
//         textAlign: 'center',
//         fontWeight: '500',
//     },
//     timerBadge: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#FFF0F0',
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         borderRadius: 12,
//     },
//     timerText: {
//         fontSize: 12,
//         color: '#FF6B6B',
//         marginLeft: 4,
//         fontWeight: '500',
//     },
//     profilesContainer: {
//         paddingBottom: 8,
//     },
//     profileCard: {
//         width: 140,
//         marginRight: 16,
//         borderRadius: 12,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 3,
//         backgroundColor: '#fff',
//     },
//     profileImage: {
//         width: 140,
//         height: 160,
//     },
//     profileInfoOverlay: {
//         padding: 8,
//     },
//     profileName: {
//         fontSize: 14,
//         fontWeight: '600',
//         color: '#333',
//     },
//     profileDetails: {
//         fontSize: 12,
//         color: '#666',
//     },
//     profileCity: {
//         fontSize: 11,
//         color: '#888',
//         marginTop: 2,
//     },
//     profileOccupation: {
//         fontSize: 11,
//         color: '#888',
//         marginTop: 2,
//     },
//     interestIndicator: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#FFF0F0',
//         paddingHorizontal: 8,
//         paddingVertical: 4,
//         position: 'absolute',
//         top: 8,
//         right: 8,
//         borderRadius: 12,
//     },
//     interestText: {
//         fontSize: 10,
//         color: '#FF6B6B',
//         marginLeft: 4,
//         fontWeight: '500',
//     },
//     viewAllButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'flex-end',
//         marginTop: 8,
//     },
//     viewAllText: {
//         color: '#FF6B6B',
//         fontSize: 14,
//         fontWeight: '600',
//         marginRight: 4,
//     },
//     membershipSection: {
//         backgroundColor: '#FFF9F9',
//         borderBottomWidth: 0,
//         borderRadius: 12,
//         margin: 16,
//         marginTop: 0,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 3,
//     },
//     membershipTitle: {
//         fontSize: 20,
//         fontWeight: '700',
//         color: '#333',
//         textAlign: 'center',
//         marginBottom: 4,
//     },
//     membershipSubtitle: {
//         fontSize: 14,
//         color: '#666',
//         textAlign: 'center',
//         marginBottom: 20,
//     },
//     membershipFeatures: {
//         marginBottom: 20,
//     },
//     featureItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     featureIcon: {
//         width: 36,
//         height: 36,
//         borderRadius: 18,
//         backgroundColor: '#FFF0F0',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 12,
//     },
//     featureText: {
//         fontSize: 14,
//         color: '#333',
//         fontWeight: '500',
//     },
//     membershipButton: {
//         backgroundColor: '#FF6B6B',
//         padding: 16,
//         borderRadius: 12,
//         alignItems: 'center',
//         marginTop: 10,
//     },
//     membershipButtonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: '700',
//     },
//     loadingContainerSection: {
//         height: 160,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     loadingText: {
//         marginTop: 10,
//         color: '#666',
//     }
// });








//14/09/2025
//app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading, fetchProfiles } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Memoized calculateAge function
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Memoized calculateProfileCompletion function
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Memoized fetchRecommendedProfiles function - UPDATED
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
      
//       // Use the optimized fetchProfiles function
//       const profiles = await fetchProfiles(genderToFetch, 8);
      
//       const formattedProfiles = profiles.map(profile => ({
//         id: profile.id,
//         name: profile.firstName || 'User',
//         age: profile.age || calculateAge(profile.dateOfBirth),
//         height: profile.height || "5'5\"",
//         image: profile.profilePhoto || 'https://via.placeholder.com/140x160',
//         city: profile.city || '',
//         occupation: profile.occupation || '',
//         fullData: profile
//       }));
      
//       // Set recommended profiles (first 4)
//       setRecommendedProfiles(formattedProfiles.slice(0, 4));
      
//       // Set all matches (all 8)
//       setAllMatches(formattedProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, hasFetchedProfiles, calculateAge, fetchProfiles]);

//   // Memoized navigate functions
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   const navigateToScreen = useCallback((screen) => {
//     setMenuVisible(false);
//     router.push(screen);
//   }, [router]);

//   // Fixed useEffect with proper dependencies
//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, hasFetchedProfiles, calculateProfileCompletion, fetchRecommendedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     },
//     settings: {
//       ENG: "Settings",
//       HI: "सेटिंग्स"
//     },
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     matches: {
//       ENG: "Matches",
//       HI: "मैच"
//     },
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     upgradeMembership: {
//       ENG: "Upgrade Membership",
//       HI: "सदस्यता अपग्रेड करें"
//     },
//     helpSupport: {
//       ENG: "Help & Support",
//       HI: "मदद और सहायता"
//     },
//     logout: {
//       ENG: "Logout",
//       HI: "लॉगआउट"
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity style={styles.iconButton}>
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               <View style={styles.notificationBadge}>
//                 <Text style={styles.badgeText}>3</Text>
//               </View>
//             </TouchableOpacity>
       
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setMenuVisible(true)}
//             >
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Hamburger Menu Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={menuVisible}
//           onRequestClose={() => setMenuVisible(false)}
//         >
//           <TouchableOpacity 
//             style={styles.menuOverlay}
//             activeOpacity={1}
//             onPress={() => setMenuVisible(false)}
//           >
//             <View style={styles.menuContainer}>
//               <View style={styles.menuHeader}>
//                 <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Profile')}
//               >
//                 <Ionicons name="person-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Matches')}
//               >
//                 <Ionicons name="heart-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Messages')}
//               >
//                 <Ionicons name="chatbubble-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//               >
//                 <Ionicons name="star-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/HelpSupport')}
//               >
//                 <Ionicons name="help-circle-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={styles.menuItem}>
//                 <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
//                 <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     container: {
//         flex: 1,
//     },
//     topBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     toggleContainer: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     toggleWrapper: {
//         width: 140,
//         height: 32,
//         borderRadius: 16,
//         backgroundColor: '#f0f0f0',
//         position: 'relative',
//         overflow: 'hidden',
//     },
//     toggleBackground: {
//         position: 'absolute',
//         top: 2,
//         left: 2,
//         width: 68,
//         height: 28,
//         backgroundColor: '#FF6B6B',
//         borderRadius: 14,
//     },
//     toggleOptions: {
//         flexDirection: 'row',
//         height: '100%',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     toggleText: {
//         fontSize: 12,
//         fontWeight: '500',
//         color: '#666',
//         width: 70,
//         textAlign: 'center',
//         zIndex: 1,
//     },
//     toggleTextActive: {
//         color: '#fff',
//         fontWeight: '600',
//     },
//     languageButton: {
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 16,
//         backgroundColor: '#f0f0f0',
//     },
//     languageText: {
//         fontSize: 12,
//         fontWeight: '600',
//         color: '#333',
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     profileInfo: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         flex: 1,
//     },
//     avatar: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 12,
//     },
//     avatarLoading: {
//         backgroundColor: '#f0f0f0',
//     },
//     profileText: {
//         flex: 1,
//     },
//     name: {
//         fontWeight: '600',
//         fontSize: 18,
//         color: '#333',
//         textTransform: 'capitalize',
//     },
//     nameLoading: {
//         height: 20,
//         width: 120,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 4,
//         marginBottom: 4,
//     },
//     memberType: {
//         fontSize: 13,
//         color: '#666',
//         marginBottom: 4,
//     },
//     memberTypeLoading: {
//         height: 14,
//         width: 80,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 4,
//         marginBottom: 8,
//     },
//     upgradeButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#FF6B6B',
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 15,
//         alignSelf: 'flex-start',
//     },
//     upgradeButtonLoading: {
//         height: 24,
//         width: 70,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 15,
//     },
//     upgradeText: {
//         color: 'white',
//         fontSize: 12,
//         marginLeft: 4,
//         fontWeight: '600',
//     },
//     headerRight: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconButton: {
//         marginLeft: 16,
//         position: 'relative',
//     },
//     notificationBadge: {
//         position: 'absolute',
//         top: -5,
//         right: -5,
//         backgroundColor: '#FF6B6B',
//         width: 18,
//         height: 18,
//         borderRadius: 9,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     badgeText: {
//         color: '#fff',
//         fontSize: 10,
//         fontWeight: 'bold',
//     },
//     menuOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-start',
//         alignItems: 'flex-end',
//     },
//     menuContainer: {
//         width: '70%',
//         height: '100%',
//         backgroundColor: '#fff',
//         paddingTop: 60,
//         paddingHorizontal: 20,
//     },
//     menuHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 30,
//         paddingBottom: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     menuTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     menuItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     menuItemText: {
//         fontSize: 16,
//         marginLeft: 15,
//         color: '#333',
//     },
//     promoBanner: {
//         height: 120,
//         margin: 16,
//         borderRadius: 12,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 3,
//     },
//     promoImage: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 12,
//     },
//     section: {
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     sectionHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 12,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: '#333',
//         marginBottom: 4,
//     },
//     sectionSubtitle: {
//         fontSize: 14,
//         color: '#666',
//         marginBottom: 12,
//     },
//     progressContainer: {
//         marginBottom: 16,
//     },
//     progressBar: {
//         height: 6,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 3,
//         marginBottom: 6,
//         overflow: 'hidden',
//     },
//     progressFill: {
//         height: '100%',
//         backgroundColor: '#FF6B6B',
//         borderRadius: 3,
//     },
//     progressText: {
//         fontSize: 12,
//         color: '#666',
//         textAlign: 'right',
//     },
//     profileActions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 12,
//     },
//     profileAction: {
//         alignItems: 'center',
//         width: '30%',
//     },
//     actionIcon: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 8,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         elevation: 3,
//     },
//     verifyIcon: {
//         backgroundColor: '#1da1f2',
//     },
//     familyIcon: {
//         backgroundColor: '#06D6A0',
//     },
//     completeIcon: {
//         backgroundColor: '#118AB2',
//     },
//     actionText: {
//         fontSize: 12,
//         color: '#333',
//         textAlign: 'center',
//         fontWeight: '500',
//     },
//    timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
// },
// timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
// },
// profilesContainer: {
//     paddingBottom: 8,
// },
// profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
// },
// profileImage: {
//     width: 140,
//     height: 160,
// },
// profileInfoOverlay: {
//     padding: 8,
// },
// profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
// },
// profileDetails: {
//     fontSize: 12,
//     color: '#666',
// },
// profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
// },
// profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
// },
// interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
// },
// interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
// },
// viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
// },
// viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
// },
// membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
// },
// membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
// },
// membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
// },
// membershipFeatures: {
//     marginBottom: 20,
// },
// featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
// },
// featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
// },
// featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
// },
// membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
// },
// membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
// },
// loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// loadingText: {
//     marginTop: 10,
//     color: '#666',
// }
// });




//17/09/2025
// app/(tabs)/index.jsx
// import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
// import React, { useState, useEffect, useCallback } from 'react';
// import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFirestore } from '../hooks/useFirebase';
// import { useLanguage } from '../context/LanguageContext';
// import { collection, query, where, getDocs, limit, onSnapshot } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useRouter } from 'expo-router';
// import { useAuth } from '../context/AuthContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Notifications from 'expo-notifications';

// export default function HomeScreen() {
//   const [membershipType, setMembershipType] = useState('REGULAR');
//   const [translateX] = useState(new Animated.Value(0));
//   const { language } = useLanguage();
//   const { userData, loading: userLoading, fetchProfiles } = useFirestore();
//   const [recommendedProfiles, setRecommendedProfiles] = useState([]);
//   const [allMatches, setAllMatches] = useState([]);
//   const [loadingProfiles, setLoadingProfiles] = useState(true);
//   const [profileCompletion, setProfileCompletion] = useState(0);
//   const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
//   const [menuVisible, setMenuVisible] = useState(false);
//   const [notifications, setNotifications] = useState([]);
//   const [notificationCount, setNotificationCount] = useState(0);
//   const [notificationsModalVisible, setNotificationsModalVisible] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();

//   // Configure notifications
//   useEffect(() => {
//     Notifications.setNotificationHandler({
//       handleNotification: async () => ({
//         shouldShowAlert: true,
//         shouldPlaySound: true,
//         shouldSetBadge: true,
//       }),
//     });
//   }, []);

//   // Listen for new messages and interests
//   useEffect(() => {
//     if (!user?.id) return;

//     // Listen for received interests
//     const receivedInterestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const interestsUnsubscribe = onSnapshot(receivedInterestsRef, (snapshot) => {
//       const newInterests = [];
//       snapshot.docChanges().forEach((change) => {
//         if (change.type === 'added') {
//           const interest = change.doc.data();
//           newInterests.push({
//             id: change.doc.id,
//             type: 'interest',
//             message: `${interest.fromUserName || 'Someone'} expressed interest in you`,
//             timestamp: interest.timestamp,
//             userId: interest.fromUserId,
//             userName: interest.fromUserName || 'User'
//           });
//         }
//       });

//       if (newInterests.length > 0) {
//         // Save to notifications
//         saveNotifications(newInterests);
        
//         // Show push notification
//         newInterests.forEach(interest => {
//           Notifications.scheduleNotificationAsync({
//             content: {
//               title: 'New Interest',
//               body: interest.message,
//               data: { type: 'interest', id: interest.id, userId: interest.userId },
//             },
//             trigger: null,
//           });
//         });
//       }
//     });

//     // Listen for new messages
//     const chatsRef = collection(db, 'chats');
//     const chatsQuery = query(chatsRef, where('participantIds', 'array-contains', user.id));
//     const chatsUnsubscribe = onSnapshot(chatsQuery, (snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         if (change.type === 'modified') {
//           const chatData = change.doc.data();
//           const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
          
//           // Check if this is a new message (not from current user)
//           if (chatData.lastMessage && chatData.lastMessageSenderId !== user.id) {
//             const otherParticipantName = chatData.participants 
//               ? chatData.participants.find(name => name !== (user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You'))
//               : 'User';
              
//             const newMessage = {
//               id: change.doc.id,
//               type: 'message',
//               message: `New message from ${otherParticipantName}`,
//               timestamp: chatData.lastMessageTime,
//               userId: otherParticipantId,
//               userName: otherParticipantName,
//               chatId: change.doc.id
//             };
            
//             // Save to notifications
//             saveNotifications([newMessage]);
            
//             // Show push notification
//             Notifications.scheduleNotificationAsync({
//               content: {
//                 title: 'New Message',
//                 body: newMessage.message,
//                 data: { type: 'message', id: newMessage.id, userId: newMessage.userId, chatId: newMessage.chatId },
//               },
//               trigger: null,
//             });
//           }
//         }
//       });
//     });

//     // Load existing notifications
//     loadNotifications();

//     return () => {
//       interestsUnsubscribe();
//       chatsUnsubscribe();
//     };
//   }, [user]);

//   // Load notifications from storage
//   const loadNotifications = async () => {
//     try {
//       const storedNotifications = await AsyncStorage.getItem(`notifications_${user.id}`);
//       if (storedNotifications) {
//         const parsedNotifications = JSON.parse(storedNotifications);
//         setNotifications(parsedNotifications);
//         setNotificationCount(parsedNotifications.filter(n => !n.read).length);
//       }
//     } catch (error) {
//       console.error('Error loading notifications:', error);
//     }
//   };

//   // Save notifications to storage
//   const saveNotifications = async (newNotifications) => {
//     try {
//       const updatedNotifications = [...newNotifications, ...notifications].slice(0, 50); // Keep only 50 most recent
//       setNotifications(updatedNotifications);
//       setNotificationCount(updatedNotifications.filter(n => !n.read).length);
//       await AsyncStorage.setItem(`notifications_${user.id}`, JSON.stringify(updatedNotifications));
//     } catch (error) {
//       console.error('Error saving notifications:', error);
//     }
//   };

//   // Mark notification as read
//   const markAsRead = async (id) => {
//     try {
//       const updatedNotifications = notifications.map(n => 
//         n.id === id ? { ...n, read: true } : n
//       );
//       setNotifications(updatedNotifications);
//       setNotificationCount(updatedNotifications.filter(n => !n.read).length);
//       await AsyncStorage.setItem(`notifications_${user.id}`, JSON.stringify(updatedNotifications));
//     } catch (error) {
//       console.error('Error marking notification as read:', error);
//     }
//   };

//   // Clear all notifications
//   const clearAllNotifications = async () => {
//     try {
//       setNotifications([]);
//       setNotificationCount(0);
//       await AsyncStorage.removeItem(`notifications_${user.id}`);
//     } catch (error) {
//       console.error('Error clearing notifications:', error);
//     }
//   };

//   // Handle notification click
//   const handleNotificationClick = (notification) => {
//     markAsRead(notification.id);
//     setNotificationsModalVisible(false);
    
//     if (notification.type === 'interest') {
//       // Navigate to user profile
//       router.push({
//         pathname: '/(tabs)/Matches',
//         params: {
//           selectedProfile: JSON.stringify({
//             id: notification.userId,
//             firstName: notification.userName,
//             profilePhoto: 'https://via.placeholder.com/150'
//           })
//         }
//       });
//     } else if (notification.type === 'message') {
//       // Navigate to chat
//       router.push(`/chat/${notification.chatId}?name=${encodeURIComponent(notification.userName)}&profileId=${notification.userId}`);
//     }
//   };

//   const toggleMembership = () => {
//     const toValue = membershipType === 'REGULAR' ? 1 : 0;
//     Animated.spring(translateX, {
//       toValue,
//       friction: 10,
//       useNativeDriver: false,
//     }).start();
//     setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
//   };

//   // Memoized calculateAge function
//   const calculateAge = useCallback((dateOfBirth) => {
//     if (!dateOfBirth) return 25;
//     try {
//       let birthDate;
//       if (dateOfBirth.includes('/')) {
//         const [day, month, year] = dateOfBirth.split('/');
//         birthDate = new Date(`${year}-${month}-${day}`);
//       } else {
//         birthDate = new Date(dateOfBirth);
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDate.getFullYear();
//       const monthDiff = today.getMonth() - birthDate.getMonth();
      
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//       }
      
//       return age;
//     } catch (error) {
//       return 25;
//     }
//   }, []);

//   // Memoized calculateProfileCompletion function
//   const calculateProfileCompletion = useCallback((userData) => {
//     if (!userData) return 0;
    
//     let completedFields = 0;
//     let totalFields = 0;
    
//     const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
//     totalFields += basicInfoFields.length;
//     completedFields += basicInfoFields.filter(field => userData[field]).length;
    
//     const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
//     totalFields += profileFields.length;
//     completedFields += profileFields.filter(field => userData[field]).length;
    
//     const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
//     totalFields += familyFields.length;
//     completedFields += familyFields.filter(field => userData[field]).length;
    
//     const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
//     totalFields += preferenceFields.length;
//     completedFields += preferenceFields.filter(field => userData[field]).length;
    
//     const percentage = Math.round((completedFields / totalFields) * 100);
//     return percentage;
//   }, []);

//   // Memoized fetchRecommendedProfiles function - UPDATED
//   const fetchRecommendedProfiles = useCallback(async () => {
//     if (!userData || !user || hasFetchedProfiles) return;
    
//     try {
//       setLoadingProfiles(true);
//       const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
      
//       // Use the optimized fetchProfiles function
//       const profiles = await fetchProfiles(genderToFetch, 8);
      
//       const formattedProfiles = profiles.map(profile => ({
//         id: profile.id,
//         name: profile.firstName || 'User',
//         age: profile.age || calculateAge(profile.dateOfBirth),
//         height: profile.height || "5'5\"",
//         image: profile.profilePhoto || 'https://via.placeholder.com/140x160',
//         city: profile.city || '',
//         occupation: profile.occupation || '',
//         fullData: profile
//       }));
      
//       // Set recommended profiles (first 4)
//       setRecommendedProfiles(formattedProfiles.slice(0, 4));
      
//       // Set all matches (all 8)
//       setAllMatches(formattedProfiles);
//       setHasFetchedProfiles(true);
//     } catch (error) {
//       console.error('Error fetching profiles:', error);
//     } finally {
//       setLoadingProfiles(false);
//     }
//   }, [userData, user, hasFetchedProfiles, calculateAge, fetchProfiles]);

//   // Memoized navigate functions
//   const navigateToProfile = useCallback((profile) => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         selectedProfile: JSON.stringify(profile.fullData)
//       }
//     });
//   }, [router]);

//   const navigateToAllMatches = useCallback(() => {
//     router.push({
//       pathname: '/(tabs)/Matches',
//       params: {
//         viewAll: 'true',
//         profiles: JSON.stringify(allMatches)
//       }
//     });
//   }, [router, allMatches]);

//   const navigateToUpgrade = useCallback(() => {
//     router.push('/(tabs)/Upgrade');
//   }, [router]);

//   const navigateToScreen = useCallback((screen) => {
//     setMenuVisible(false);
//     router.push(screen);
//   }, [router]);

//   // Fixed useEffect with proper dependencies
//   useEffect(() => {
//     if (userData && !hasFetchedProfiles) {
//       const completion = calculateProfileCompletion(userData);
//       setProfileCompletion(completion);
//       fetchRecommendedProfiles();
//     }
//   }, [userData, hasFetchedProfiles, calculateProfileCompletion, fetchRecommendedProfiles]);

//   // Translations
//   const translations = {
//     completeProfile: {
//       ENG: "Complete Your Profile",
//       HI: "अपनी प्रोफाइल पूरी करें"
//     },
//     dailyRecommendations: {
//       ENG: "Daily Recommendations",
//       HI: "दैनिक सिफारिशें"
//     },
//     allMatches: {
//       ENG: "All Matches",
//       HI: "सभी मैच"
//     },
//     becomePaidMember: {
//       ENG: "Become a paid member",
//       HI: "एक भुगतान सदस्य बनें"
//     },
//     viewAll: {
//       ENG: "View all",
//       HI: "सभी देखें"
//     },
//     verifyProfile: {
//       ENG: "Verify Profile",
//       HI: "प्रोफाइल सत्यापित करें"
//     },
//     familyDetails: {
//       ENG: "Family Details",
//       HI: "परिवार का विवरण"
//     },
//     completeProfileBtn: {
//       ENG: "Complete Profile",
//       HI: "प्रोफाइल पूरी करें"
//     },
//     hoursLeft: {
//       ENG: "24h left",
//       HI: "24 घंटे बचे"
//     },
//     freeMember: {
//       ENG: "Free Member",
//       HI: "मुफ्त सदस्य"
//     },
//     upgrade: {
//       ENG: "Upgrade",
//       HI: "अपग्रेड करें"
//     },
//     seeMembershipPlans: {
//       ENG: "See membership plans",
//       HI: "सदस्यता योजनाएं देखें"
//     },
//     membersWhoMatch: {
//       ENG: "Members who match your partner preferences",
//       HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
//     },
//     getUpToDiscount: {
//       ENG: "Get up to 60% off on paid membership!",
//       HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
//     },
//     callWhatsAppMatches: {
//       ENG: "Call/WhatsApp matches",
//       HI: "मैचों को कॉल/व्हाट्सएप करें"
//     },
//     unlimitedMessages: {
//       ENG: "Unlimited messages",
//       HI: "असीमित संदेश"
//     },
//     higherChancesResponse: {
//       ENG: "Higher chances of response",
//       HI: "प्रतिक्रिया की अधिक संभावना"
//     },
//     interested: {
//       ENG: "Interested",
//       HI: "रुचि"
//     },
//     complete: {
//       ENG: "complete",
//       HI: "पूर्ण"
//     },
//     loading: {
//       ENG: "Loading...",
//       HI: "लोड हो रहा है..."
//     },
//     settings: {
//       ENG: "Settings",
//       HI: "सेटिंग्स"
//     },
//     profile: {
//       ENG: "Profile",
//       HI: "प्रोफाइल"
//     },
//     matches: {
//       ENG: "Matches",
//       HI: "मैच"
//     },
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     upgradeMembership: {
//       ENG: "Upgrade Membership",
//       HI: "सदस्यता अपग्रेड करें"
//     },
//     helpSupport: {
//       ENG: "Help & Support",
//       HI: "मदद और सहायता"
//     },
//     logout: {
//       ENG: "Logout",
//       HI: "लॉगआउट"
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//         {/* Top Bar with Toggle and Language */}
//         <View style={styles.topBar}>
//           <View style={styles.toggleContainer}>
//             <TouchableOpacity 
//               style={styles.toggleWrapper}
//               onPress={toggleMembership}
//               activeOpacity={0.8}
//             >
//               <Animated.View style={[
//                 styles.toggleBackground,
//                 {
//                   transform: [{
//                     translateX: translateX.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 70]
//                     })
//                   }]
//                 }
//               ]} />
//               <View style={styles.toggleOptions}>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'REGULAR' && styles.toggleTextActive
//                 ]}>
//                   Regular
//                 </Text>
//                 <Text style={[
//                   styles.toggleText, 
//                   membershipType === 'PRIME' && styles.toggleTextActive
//                 ]}>
//                   PRIME
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>

//           <View style={styles.languageButton}>
//             <Text style={styles.languageText}>{language}</Text>
//           </View>
//         </View>

//         {/* Header */}
//         <View style={styles.header}>
//           {userLoading ? (
//             <View style={styles.profileInfo}>
//               <View style={[styles.avatar, styles.avatarLoading]} />
//               <View style={styles.profileText}>
//                 <View style={styles.nameLoading} />
//                 <View style={styles.memberTypeLoading} />
//                 <View style={styles.upgradeButtonLoading} />
//               </View>
//             </View>
//           ) : (
//             <View style={styles.profileInfo}>
//               <Image
//                 source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
//                 style={styles.avatar}
//               />
//               <View style={styles.profileText}>
//                 <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
//                 <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
//                 <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
//                   <AntDesign name="arrowup" size={12} color="white" />
//                   <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           )}
          
//           <View style={styles.headerRight}>
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setNotificationsModalVisible(true)}
//             >
//               <Ionicons name="notifications-outline" size={24} color="#333" />
//               {notificationCount > 0 && (
//                 <View style={styles.notificationBadge}>
//                   <Text style={styles.badgeText}>{notificationCount}</Text>
//                 </View>
//               )}
//             </TouchableOpacity>
       
//             <TouchableOpacity 
//               style={styles.iconButton}
//               onPress={() => setMenuVisible(true)}
//             >
//               <Ionicons name="menu" size={24} color="#333" />
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Notifications Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={notificationsModalVisible}
//           onRequestClose={() => setNotificationsModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.notificationsModal}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalTitle}>Notifications</Text>
//                 <TouchableOpacity onPress={() => setNotificationsModalVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               {notifications.length === 0 ? (
//                 <View style={styles.emptyNotifications}>
//                   <Ionicons name="notifications-off-outline" size={48} color="#ddd" />
//                   <Text style={styles.emptyText}>No notifications yet</Text>
//                 </View>
//               ) : (
//                 <>
//                   <TouchableOpacity 
//                     style={styles.clearAllButton}
//                     onPress={clearAllNotifications}
//                   >
//                     <Text style={styles.clearAllText}>Clear All</Text>
//                   </TouchableOpacity>
                  
//                   <ScrollView style={styles.notificationsList}>
//                     {notifications.map((notification, index) => (
//                       <TouchableOpacity
//                         key={index}
//                         style={[
//                           styles.notificationItem,
//                           !notification.read && styles.unreadNotification
//                         ]}
//                         onPress={() => handleNotificationClick(notification)}
//                       >
//                         <View style={styles.notificationIcon}>
//                           {notification.type === 'interest' ? (
//                             <Ionicons name="heart" size={20} color="#FF6B6B" />
//                           ) : (
//                             <Ionicons name="chatbubble" size={20} color="#4CAF50" />
//                           )}
//                         </View>
//                         <View style={styles.notificationContent}>
//                           <Text style={styles.notificationMessage}>
//                             {notification.message}
//                           </Text>
//                           <Text style={styles.notificationTime}>
//                             {formatNotificationTime(notification.timestamp)}
//                           </Text>
//                         </View>
//                         {!notification.read && (
//                           <View style={styles.unreadDot} />
//                         )}
//                       </TouchableOpacity>
//                     ))}
//                   </ScrollView>
//                 </>
//               )}
//             </View>
//           </View>
//         </Modal>
        
//         {/* Hamburger Menu Modal */}
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={menuVisible}
//           onRequestClose={() => setMenuVisible(false)}
//         >
//           <TouchableOpacity 
//             style={styles.menuOverlay}
//             activeOpacity={1}
//             onPress={() => setMenuVisible(false)}
//           >
//             <View style={styles.menuContainer}>
//               <View style={styles.menuHeader}>
//                 <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
//                 <TouchableOpacity onPress={() => setMenuVisible(false)}>
//                   <Ionicons name="close" size={24} color="#333" />
//                 </TouchableOpacity>
//               </View>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Profile')}
//               >
//                 <Ionicons name="person-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Matches')}
//               >
//                 <Ionicons name="heart-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Messages')}
//               >
//                 <Ionicons name="chatbubble-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/(tabs)/Upgrade')}
//               >
//                 <Ionicons name="star-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity 
//                 style={styles.menuItem}
//                 onPress={() => navigateToScreen('/HelpSupport')}
//               >
//                 <Ionicons name="help-circle-outline" size={20} color="#333" />
//                 <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
//               </TouchableOpacity>
              
//               <TouchableOpacity style={styles.menuItem}>
//                 <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
//                 <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
        
//         {/* Promo Banner */}
//         <View style={styles.promoBanner}>
//           <Image
//             source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
//             style={styles.promoImage}
//             resizeMode="cover"
//           />
//         </View>
        
//         {/* Profile Completion */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
//           <View style={styles.progressContainer}>
//             <View style={styles.progressBar}>
//               <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
//             </View>
//             <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
//           </View>
          
//           <View style={styles.profileActions}>
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.verifyIcon]}>
//                 <MaterialIcons name="verified" size={20} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.familyIcon]}>
//                 <FontAwesome5 name="users" size={16} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
//             </TouchableOpacity>
            
//             <TouchableOpacity style={styles.profileAction}>
//               <View style={[styles.actionIcon, styles.completeIcon]}>
//                 <Feather name="user" size={18} color="#fff" />
//               </View>
//               <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
        
//         {/* Daily Recommendations */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
//             <View style={styles.timerBadge}>
//               <Ionicons name="time-outline" size={14} color="#FF6B6B" />
//               <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
//             </View>
//           </View>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {recommendedProfiles.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
          
//           <TouchableOpacity style={styles.viewAllButton}>
//             <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//             <Feather name="chevron-right" size={16} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
        
//         {/* All Matches */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
//             <TouchableOpacity 
//               style={styles.viewAllButton}
//               onPress={navigateToAllMatches}
//             >
//               <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
//               <Feather name="chevron-right" size={16} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//           <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
//           {loadingProfiles ? (
//             <View style={styles.loadingContainerSection}>
//               <ActivityIndicator size="large" color="#FF6B6B" />
//               <Text style={styles.loadingText}>{translations.loading[language]}</Text>
//             </View>
//           ) : (
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.profilesContainer}
//             >
//               {allMatches.map(profile => (
//                 <TouchableOpacity 
//                   key={profile.id} 
//                   style={styles.profileCard}
//                   onPress={() => navigateToProfile(profile)}
//                 >
//                   <Image source={{ uri: profile.image }} style={styles.profileImage} />
//                   <View style={styles.profileInfoOverlay}>
//                     <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
//                     <Text style={styles.profileDetails}>{profile.height}</Text>
//                     {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
//                     {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
//                   </View>
//                   <View style={styles.interestIndicator}>
//                     <Ionicons name="heart" size={14} color="#FF6B6B" />
//                     <Text style={styles.interestText}>{translations.interested[language]}</Text>
//                   </View>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//           )}
//         </View>
        
//         {/* Membership Promo */}
//         <View style={[styles.section, styles.membershipSection]}>
//           <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
//           <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
//           <View style={styles.membershipFeatures}>
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="phone" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <Feather name="message-square" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
//             </View>
            
//             <View style={styles.featureItem}>
//               <View style={styles.featureIcon}>
//                 <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
//               </View>
//               <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
//             <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // Helper function to format notification time
// const formatNotificationTime = (timestamp) => {
//   if (!timestamp) return 'Just now';
  
//   try {
//     let date;
//     if (timestamp && typeof timestamp.toDate === 'function') {
//       date = timestamp.toDate();
//     } else if (timestamp && typeof timestamp === 'object' && timestamp.seconds) {
//       // Handle timestamp objects
//       date = new Date(timestamp.seconds * 1000);
//     } else if (typeof timestamp === 'string') {
//       date = new Date(timestamp);
//     } else {
//       date = new Date(timestamp);
//     }
    
//     // Check if date is valid
//     if (isNaN(date.getTime())) {
//       return 'Just now';
//     }
    
//     const now = new Date();
//     const diff = now - date;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 1) return 'Just now';
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return date.toLocaleDateString();
//   } catch (error) {
//     return 'Just now';
//   }
// };

// const styles = StyleSheet.create({
//     safeArea: {
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     container: {
//         flex: 1,
//     },
//     topBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//         paddingVertical: 12,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     toggleContainer: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     toggleWrapper: {
//         width: 140,
//         height: 32,
//         borderRadius: 16,
//         backgroundColor: '#f0f0f0',
//         position: 'relative',
//         overflow: 'hidden',
//     },
//     toggleBackground: {
//         position: 'absolute',
//         top: 2,
//         left: 2,
//         width: 68,
//         height: 28,
//         backgroundColor: '#FF6B6B',
//         borderRadius: 14,
//     },
//     toggleOptions: {
//         flexDirection: 'row',
//         height: '100%',
//         alignItems: 'center',
//         justifyContent: 'space-around',
//     },
//     toggleText: {
//         fontSize: 12,
//         fontWeight: '500',
//         color: '#666',
//         width: 70,
//         textAlign: 'center',
//         zIndex: 1,
//     },
//     toggleTextActive: {
//         color: '#fff',
//         fontWeight: '600',
//     },
//     languageButton: {
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 16,
//         backgroundColor: '#f0f0f0',
//     },
//     languageText: {
//         fontSize: 12,
//         fontWeight: '600',
//         color: '#333',
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     profileInfo: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         flex: 1,
//     },
//     avatar: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         marginRight: 12,
//     },
//     avatarLoading: {
//         backgroundColor: '#f0f0f0',
//     },
//     profileText: {
//         flex: 1,
//     },
//     name: {
//         fontWeight: '600',
//         fontSize: 18,
//         color: '#333',
//         textTransform: 'capitalize',
//     },
//     nameLoading: {
//         height: 20,
//         width: 120,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 4,
//         marginBottom: 4,
//     },
//     memberType: {
//         fontSize: 13,
//         color: '#666',
//         marginBottom: 4,
//     },
//     memberTypeLoading: {
//         height: 14,
//         width: 80,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 4,
//         marginBottom: 8,
//     },
//     upgradeButton: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#FF6B6B',
//         paddingHorizontal: 12,
//         paddingVertical: 6,
//         borderRadius: 15,
//         alignSelf: 'flex-start',
//     },
//     upgradeButtonLoading: {
//         height: 24,
//         width: 70,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 15,
//     },
//     upgradeText: {
//         color: 'white',
//         fontSize: 12,
//         marginLeft: 4,
//         fontWeight: '600',
//     },
//     headerRight: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     iconButton: {
//         marginLeft: 16,
//         position: 'relative',
//     },
//     notificationBadge: {
//         position: 'absolute',
//         top: -5,
//         right: -5,
//         backgroundColor: '#FF6B6B',
//         width: 18,
//         height: 18,
//         borderRadius: 9,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     badgeText: {
//         color: '#fff',
//         fontSize: 10,
//         fontWeight: 'bold',
//     },
//     menuOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-start',
//         alignItems: 'flex-end',
//     },
//     menuContainer: {
//         width: '70%',
//         height: '100%',
//         backgroundColor: '#fff',
//         paddingTop: 60,
//         paddingHorizontal: 20,
//     },
//     menuHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 30,
//         paddingBottom: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     menuTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     menuItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     menuItemText: {
//         fontSize: 16,
//         marginLeft: 15,
//         color: '#333',
//     },
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'flex-end',
//     },
//     notificationsModal: {
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//         height: '80%',
//         padding: 16,
//     },
//     modalHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 16,
//         paddingBottom: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     modalTitle: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#333',
//     },
//     emptyNotifications: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     emptyText: {
//         marginTop: 16,
//         color: '#999',
//         fontSize: 16,
//     },
//     clearAllButton: {
//         alignSelf: 'flex-end',
//         marginBottom: 16,
//     },
//     clearAllText: {
//         color: '#FF6B6B',
//         fontSize: 14,
//         fontWeight: '500',
//     },
//     notificationsList: {
//         flex: 1,
//     },
//     notificationItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 8,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     unreadNotification: {
//         backgroundColor: '#F8F9FA',
//     },
//     notificationIcon: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         backgroundColor: '#f0f0f0',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginRight: 12,
//     },
//     notificationContent: {
//         flex: 1,
//     },
//     notificationMessage: {
//         fontSize: 14,
//         color: '#333',
//         marginBottom: 4,
//     },
//     notificationTime: {
//         fontSize: 12,
//         color: '#999',
//     },
//     unreadDot: {
//         width: 8,
//         height: 8,
//         borderRadius: 4,
//         backgroundColor: '#FF6B6B',
//         marginLeft: 8,
//     },
//     promoBanner: {
//         height: 120,
//         margin: 16,
//         borderRadius: 12,
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 3,
//     },
//     promoImage: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 12,
//     },
//     section: {
//         padding: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f0f0f0',
//     },
//     sectionHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 12,
//     },
//     sectionTitle: {
//         fontSize: 18,
//         fontWeight: '700',
//         color: '#333',
//         marginBottom: 4,
//     },
//     sectionSubtitle: {
//         fontSize: 14,
//         color: '#666',
//         marginBottom: 12,
//     },
//     progressContainer: {
//         marginBottom: 16,
//     },
//     progressBar: {
//         height: 6,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 3,
//         marginBottom: 6,
//         overflow: 'hidden',
//     },
//     progressFill: {
//         height: '100%',
//         backgroundColor: '#FF6B6B',
//         borderRadius: 3,
//     },
//     progressText: {
//         fontSize: 12,
//         color: '#666',
//         textAlign: 'right',
//     },
//     profileActions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 12,
//     },
//     profileAction: {
//         alignItems: 'center',
//         width: '30%',
//     },
//     actionIcon: {
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: 8,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         elevation: 3,
//     },
//     verifyIcon: {
//         backgroundColor: '#1da1f2',
//     },
//     familyIcon: {
//         backgroundColor: '#06D6A0',
//     },
//     completeIcon: {
//         backgroundColor: '#118AB2',
//     },
//     actionText: {
//         fontSize: 12,
//         color: '#333',
//         textAlign: 'center',
//         fontWeight: '500',
//     },
//    timerBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 12,
// },
// timerText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
// },
// profilesContainer: {
//     paddingBottom: 8,
// },
// profileCard: {
//     width: 140,
//     marginRight: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//     backgroundColor: '#fff',
// },
// profileImage: {
//     width: 140,
//     height: 160,
// },
// profileInfoOverlay: {
//     padding: 8,
// },
// profileName: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#333',
// },
// profileDetails: {
//     fontSize: 12,
//     color: '#666',
// },
// profileCity: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
// },
// profileOccupation: {
//     fontSize: 11,
//     color: '#888',
//     marginTop: 2,
// },
// interestIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     position: 'absolute',
//     top: 8,
//     right: 8,
//     borderRadius: 12,
// },
// interestText: {
//     fontSize: 10,
//     color: '#FF6B6B',
//     marginLeft: 4,
//     fontWeight: '500',
// },
// viewAllButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 8,
// },
// viewAllText: {
//     color: '#FF6B6B',
//     fontSize: 14,
//     fontWeight: '600',
//     marginRight: 4,
// },
// membershipSection: {
//     backgroundColor: '#FFF9F9',
//     borderBottomWidth: 0,
//     borderRadius: 12,
//     margin: 16,
//     marginTop: 0,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
// },
// membershipTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 4,
// },
// membershipSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 20,
// },
// membershipFeatures: {
//     marginBottom: 20,
// },
// featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
// },
// featureIcon: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 12,
// },
// featureText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
// },
// membershipButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginTop: 10,
// },
// membershipButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '700',
// },
// loadingContainerSection: {
//     height: 160,
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// loadingText: {
//     marginTop: 10,
//     color: '#666',
// }
// });









//25/09/2025
// app/(tabs)/index.jsx
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Animated, ActivityIndicator, Modal } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Feather, Ionicons, MaterialIcons, FontAwesome, AntDesign, Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFirestore } from '../hooks/useFirebase';
import { useLanguage } from '../context/LanguageContext';
import { collection, query, where, getDocs, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';

export default function HomeScreen() {
  const [membershipType, setMembershipType] = useState('REGULAR');
  const [translateX] = useState(new Animated.Value(0));
  const { language } = useLanguage();
  const { userData, loading: userLoading, fetchProfiles } = useFirestore();
  const [recommendedProfiles, setRecommendedProfiles] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [loadingProfiles, setLoadingProfiles] = useState(true);
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [hasFetchedProfiles, setHasFetchedProfiles] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationsModalVisible, setNotificationsModalVisible] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  // Configure notifications
  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
  }, []);

  // Listen for new messages and interests
  useEffect(() => {
    if (!user?.id) return;

    // Listen for received interests
    const receivedInterestsRef = collection(db, 'Users', user.id, 'receivedInterests');
    const interestsUnsubscribe = onSnapshot(receivedInterestsRef, (snapshot) => {
      const newInterests = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          const interest = change.doc.data();
          newInterests.push({
            id: change.doc.id,
            type: 'interest',
            message: `${interest.fromUserName || 'Someone'} expressed interest in you`,
            timestamp: interest.timestamp,
            userId: interest.fromUserId,
            userName: interest.fromUserName || 'User'
          });
        }
      });

      if (newInterests.length > 0) {
        // Save to notifications
        saveNotifications(newInterests);
        
        // Show push notification
        newInterests.forEach(interest => {
          Notifications.scheduleNotificationAsync({
            content: {
              title: 'New Interest',
              body: interest.message,
              data: { type: 'interest', id: interest.id, userId: interest.userId },
            },
            trigger: null,
          });
        });
      }
    });

    // Listen for new messages
    const chatsRef = collection(db, 'chats');
    const chatsQuery = query(chatsRef, where('participantIds', 'array-contains', user.id));
    const chatsUnsubscribe = onSnapshot(chatsQuery, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'modified') {
          const chatData = change.doc.data();
          const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
          
          // Check if this is a new message (not from current user)
          if (chatData.lastMessage && chatData.lastMessageSenderId !== user.id) {
            const otherParticipantName = chatData.participants 
              ? chatData.participants.find(name => name !== (user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You'))
              : 'User';
              
            const newMessage = {
              id: change.doc.id,
              type: 'message',
              message: `New message from ${otherParticipantName}`,
              timestamp: chatData.lastMessageTime,
              userId: otherParticipantId,
              userName: otherParticipantName,
              chatId: change.doc.id
            };
            
            // Save to notifications
            saveNotifications([newMessage]);
            
            // Show push notification
            Notifications.scheduleNotificationAsync({
              content: {
                title: 'New Message',
                body: newMessage.message,
                data: { type: 'message', id: newMessage.id, userId: newMessage.userId, chatId: newMessage.chatId },
              },
              trigger: null,
            });
          }
        }
      });
    });

    // Load existing notifications
    loadNotifications();

    return () => {
      interestsUnsubscribe();
      chatsUnsubscribe();
    };
  }, [user]);

  // Load notifications from storage
  const loadNotifications = async () => {
    try {
      const storedNotifications = await AsyncStorage.getItem(`notifications_${user.id}`);
      if (storedNotifications) {
        const parsedNotifications = JSON.parse(storedNotifications);
        setNotifications(parsedNotifications);
        setNotificationCount(parsedNotifications.filter(n => !n.read).length);
      }
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  };

  // Save notifications to storage
  const saveNotifications = async (newNotifications) => {
    try {
      const updatedNotifications = [...newNotifications, ...notifications].slice(0, 50); // Keep only 50 most recent
      setNotifications(updatedNotifications);
      setNotificationCount(updatedNotifications.filter(n => !n.read).length);
      await AsyncStorage.setItem(`notifications_${user.id}`, JSON.stringify(updatedNotifications));
    } catch (error) {
      console.error('Error saving notifications:', error);
    }
  };

  // Mark notification as read
  const markAsRead = async (id) => {
    try {
      const updatedNotifications = notifications.map(n => 
        n.id === id ? { ...n, read: true } : n
      );
      setNotifications(updatedNotifications);
      setNotificationCount(updatedNotifications.filter(n => !n.read).length);
      await AsyncStorage.setItem(`notifications_${user.id}`, JSON.stringify(updatedNotifications));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  // Clear all notifications
  const clearAllNotifications = async () => {
    try {
      setNotifications([]);
      setNotificationCount(0);
      await AsyncStorage.removeItem(`notifications_${user.id}`);
    } catch (error) {
      console.error('Error clearing notifications:', error);
    }
  };

  // Handle notification click
  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
    setNotificationsModalVisible(false);
    
    if (notification.type === 'interest') {
      // Navigate to user profile
      router.push({
        pathname: '/(tabs)/Matches',
        params: {
          selectedProfile: JSON.stringify({
            id: notification.userId,
            firstName: notification.userName,
            profilePhoto: 'https://via.placeholder.com/150'
          })
        }
      });
    } else if (notification.type === 'message') {
      // Navigate to chat
      router.push(`/chat/${notification.chatId}?name=${encodeURIComponent(notification.userName)}&profileId=${notification.userId}`);
    }
  };

  const toggleMembership = () => {
    const toValue = membershipType === 'REGULAR' ? 1 : 0;
    Animated.spring(translateX, {
      toValue,
      friction: 10,
      useNativeDriver: false,
    }).start();
    setMembershipType(prev => prev === 'REGULAR' ? 'PRIME' : 'REGULAR');
  };

  // Memoized calculateAge function
  const calculateAge = useCallback((dateOfBirth) => {
    if (!dateOfBirth) return 25;
    try {
      let birthDate;
      if (dateOfBirth.includes('/')) {
        const [day, month, year] = dateOfBirth.split('/');
        birthDate = new Date(`${year}-${month}-${day}`);
      } else {
        birthDate = new Date(dateOfBirth);
      }
      
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      
      return age;
    } catch (error) {
      return 25;
    }
  }, []);

  // Memoized calculateProfileCompletion function
  const calculateProfileCompletion = useCallback((userData) => {
    if (!userData) return 0;
    
    let completedFields = 0;
    let totalFields = 0;
    
    const basicInfoFields = ['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];
    totalFields += basicInfoFields.length;
    completedFields += basicInfoFields.filter(field => userData[field]).length;
    
    const profileFields = ['profilePhoto', 'aboutMe', 'education', 'occupation', 'annualIncome'];
    totalFields += profileFields.length;
    completedFields += profileFields.filter(field => userData[field]).length;
    
    const familyFields = ['familyStatus', 'familyType', 'familyValues', 'fatherOccupation', 'motherOccupation'];
    totalFields += familyFields.length;
    completedFields += familyFields.filter(field => userData[field]).length;
    
    const preferenceFields = ['preferredAgeMin', 'preferredAgeMax', 'preferredHeightMin', 'preferredHeightMax', 'preferredEducation'];
    totalFields += preferenceFields.length;
    completedFields += preferenceFields.filter(field => userData[field]).length;
    
    const percentage = Math.round((completedFields / totalFields) * 100);
    return percentage;
  }, []);

  // Memoized fetchRecommendedProfiles function - UPDATED
  const fetchRecommendedProfiles = useCallback(async () => {
    if (!userData || !user || hasFetchedProfiles) return;
    
    try {
      setLoadingProfiles(true);
      const genderToFetch = userData.gender === 'Male' ? 'Female' : 'Male';
      
      // Use the optimized fetchProfiles function
      const profiles = await fetchProfiles(genderToFetch, 8);
      
      const formattedProfiles = profiles.map(profile => ({
        id: profile.id,
        name: profile.firstName || 'User',
        age: profile.age || calculateAge(profile.dateOfBirth),
        height: profile.height || "5'5\"",
        image: profile.profilePhoto || 'https://via.placeholder.com/140x160',
        city: profile.city || '',
        occupation: profile.occupation || '',
        fullData: profile
      }));
      
      // Set recommended profiles (first 4)
      setRecommendedProfiles(formattedProfiles.slice(0, 4));
      
      // Set all matches (all 8)
      setAllMatches(formattedProfiles);
      setHasFetchedProfiles(true);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    } finally {
      setLoadingProfiles(false);
    }
  }, [userData, user, hasFetchedProfiles, calculateAge, fetchProfiles]);

  // Memoized navigate functions
  const navigateToProfile = useCallback((profile) => {
    router.push({
      pathname: '/(tabs)/Matches',
      params: {
        selectedProfile: JSON.stringify(profile.fullData)
      }
    });
  }, [router]);

  const navigateToAllMatches = useCallback(() => {
    router.push({
      pathname: '/(tabs)/Matches',
      params: {
        viewAll: 'true',
        profiles: JSON.stringify(allMatches)
      }
    });
  }, [router, allMatches]);

  const navigateToUpgrade = useCallback(() => {
    router.push('/(tabs)/Upgrade');
  }, [router]);

  const navigateToScreen = useCallback((screen) => {
    setMenuVisible(false);
    router.push(screen);
  }, [router]);

  // Fixed useEffect with proper dependencies
  useEffect(() => {
    if (userData && !hasFetchedProfiles) {
      const completion = calculateProfileCompletion(userData);
      setProfileCompletion(completion);
      fetchRecommendedProfiles();
    }
  }, [userData, hasFetchedProfiles, calculateProfileCompletion, fetchRecommendedProfiles]);

  // Translations
  const translations = {
    completeProfile: {
      ENG: "Complete Your Profile",
      HI: "अपनी प्रोफाइल पूरी करें"
    },
    dailyRecommendations: {
      ENG: "Daily Recommendations",
      HI: "दैनिक सिफारिशें"
    },
    allMatches: {
      ENG: "All Matches",
      HI: "सभी मैच"
    },
    becomePaidMember: {
      ENG: "Become a paid member",
      HI: "एक भुगतान सदस्य बनें"
    },
    viewAll: {
      ENG: "View all",
      HI: "सभी देखें"
    },
    verifyProfile: {
      ENG: "Verify Profile",
      HI: "प्रोफाइल सत्यापित करें"
    },
    familyDetails: {
      ENG: "Family Details",
      HI: "परिवार का विवरण"
    },
    completeProfileBtn: {
      ENG: "Complete Profile",
      HI: "प्रोफाइल पूरी करें"
    },
    hoursLeft: {
      ENG: "24h left",
      HI: "24 घंटे बचे"
    },
    freeMember: {
      ENG: "Free Member",
      HI: "मुफ्त सदस्य"
    },
    upgrade: {
      ENG: "Upgrade",
      HI: "अपग्रेड करें"
    },
    seeMembershipPlans: {
      ENG: "See membership plans",
      HI: "सदस्यता योजनाएं देखें"
    },
    membersWhoMatch: {
      ENG: "Members who match your partner preferences",
      HI: "सदस्य जो आपकी पार्टनर प्राथमिकताओं से मेल खाते हैं"
    },
    getUpToDiscount: {
      ENG: "Get up to 60% off on paid membership!",
      HI: "भुगतान सदस्यता पर 60% तक की छूट पाएं!"
    },
    callWhatsAppMatches: {
      ENG: "Call/WhatsApp matches",
      HI: "मैचों को कॉल/व्हाट्सएप करें"
    },
    unlimitedMessages: {
      ENG: "Unlimited messages",
      HI: "असीमित संदेश"
    },
    higherChancesResponse: {
      ENG: "Higher chances of response",
      HI: "प्रतिक्रिया की अधिक संभावना"
    },
    interested: {
      ENG: "Interested",
      HI: "रुचि"
    },
    complete: {
      ENG: "complete",
      HI: "पूर्ण"
    },
    loading: {
      ENG: "Loading...",
      HI: "लोड हो रहा है..."
    },
    settings: {
      ENG: "Settings",
      HI: "सेटिंग्स"
    },
    profile: {
      ENG: "Profile",
      HI: "प्रोफाइल"
    },
    matches: {
      ENG: "Matches",
      HI: "मैच"
    },
    messages: {
      ENG: "Messages",
      HI: "संदेश"
    },
    upgradeMembership: {
      ENG: "Upgrade Membership",
      HI: "सदस्यता अपग्रेड करें"
    },
    helpSupport: {
      ENG: "Help & Support",
      HI: "मदद और सहायता"
    },
    logout: {
      ENG: "Logout",
      HI: "लॉगआउट"
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Bar with Toggle and Language */}
        <View style={styles.topBar}>
          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={styles.toggleWrapper}
              onPress={toggleMembership}
              activeOpacity={0.8}
            >
              <Animated.View style={[
                styles.toggleBackground,
                {
                  transform: [{
                    translateX: translateX.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 70]
                    })
                  }]
                }
              ]} />
              <View style={styles.toggleOptions}>
                <Text style={[
                  styles.toggleText, 
                  membershipType === 'REGULAR' && styles.toggleTextActive
                ]}>
                  Regular
                </Text>
                <Text style={[
                  styles.toggleText, 
                  membershipType === 'PRIME' && styles.toggleTextActive
                ]}>
                  PRIME
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.languageButton}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>

        {/* Header */}
        <View style={styles.header}>
          {userLoading ? (
            <View style={styles.profileInfo}>
              <View style={[styles.avatar, styles.avatarLoading]} />
              <View style={styles.profileText}>
                <View style={styles.nameLoading} />
                <View style={styles.memberTypeLoading} />
                <View style={styles.upgradeButtonLoading} />
              </View>
            </View>
          ) : (
            <View style={styles.profileInfo}>
              <Image
                source={{ uri: userData?.profilePhoto || 'https://via.placeholder.com/50' }}
                style={styles.avatar}
              />
              <View style={styles.profileText}>
                <Text style={styles.name}>{userData?.firstName || 'User'} {userData?.lastName || ''}</Text>
                <Text style={styles.memberType}>{translations.freeMember[language]}</Text>
                <TouchableOpacity style={styles.upgradeButton} onPress={navigateToUpgrade}>
                  <AntDesign name="arrowup" size={12} color="white" />
                  <Text style={styles.upgradeText}>{translations.upgrade[language]}</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          
          <View style={styles.headerRight}>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => setNotificationsModalVisible(true)}
            >
              <Ionicons name="notifications-outline" size={24} color="#333" />
              {notificationCount > 0 && (
                <View style={styles.notificationBadge}>
                  <Text style={styles.badgeText}>{notificationCount}</Text>
                </View>
              )}
            </TouchableOpacity>
       
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => setMenuVisible(true)}
            >
              <Ionicons name="menu" size={24} color="#333" />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Notifications Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={notificationsModalVisible}
          onRequestClose={() => setNotificationsModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.notificationsModal}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Notifications</Text>
                <TouchableOpacity onPress={() => setNotificationsModalVisible(false)}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
              </View>
              
              {notifications.length === 0 ? (
                <View style={styles.emptyNotifications}>
                  <Ionicons name="notifications-off-outline" size={48} color="#ddd" />
                  <Text style={styles.emptyText}>No notifications yet</Text>
                </View>
              ) : (
                <>
                  <TouchableOpacity 
                    style={styles.clearAllButton}
                    onPress={clearAllNotifications}
                  >
                    <Text style={styles.clearAllText}>Clear All</Text>
                  </TouchableOpacity>
                  
                  <ScrollView style={styles.notificationsList}>
                    {notifications.map((notification, index) => (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.notificationItem,
                          !notification.read && styles.unreadNotification
                        ]}
                        onPress={() => handleNotificationClick(notification)}
                      >
                        <View style={styles.notificationIcon}>
                          {notification.type === 'interest' ? (
                            <Ionicons name="heart" size={20} color="#FF6B6B" />
                          ) : (
                            <Ionicons name="chatbubble" size={20} color="#4CAF50" />
                          )}
                        </View>
                        <View style={styles.notificationContent}>
                          <Text style={styles.notificationMessage}>
                            {notification.message}
                          </Text>
                          <Text style={styles.notificationTime}>
                            {formatNotificationTime(notification.timestamp)}
                          </Text>
                        </View>
                        {!notification.read && (
                          <View style={styles.unreadDot} />
                        )}
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </>
              )}
            </View>
          </View>
        </Modal>
        
        {/* Hamburger Menu Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={menuVisible}
          onRequestClose={() => setMenuVisible(false)}
        >
          <TouchableOpacity 
            style={styles.menuOverlay}
            activeOpacity={1}
            onPress={() => setMenuVisible(false)}
          >
            <View style={styles.menuContainer}>
              <View style={styles.menuHeader}>
                <Text style={styles.menuTitle}>{translations.settings[language]}</Text>
                <TouchableOpacity onPress={() => setMenuVisible(false)}>
                  <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
              </View>
              
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => navigateToScreen('/(tabs)/Profile')}
              >
                <Ionicons name="person-outline" size={20} color="#333" />
                <Text style={styles.menuItemText}>{translations.profile[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => navigateToScreen('/(tabs)/Matches')}
              >
                <Ionicons name="heart-outline" size={20} color="#333" />
                <Text style={styles.menuItemText}>{translations.matches[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => navigateToScreen('/(tabs)/Messages')}
              >
                <Ionicons name="chatbubble-outline" size={20} color="#333" />
                <Text style={styles.menuItemText}>{translations.messages[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => navigateToScreen('/(tabs)/Upgrade')}
              >
                <Ionicons name="star-outline" size={20} color="#333" />
                <Text style={styles.menuItemText}>{translations.upgradeMembership[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.menuItem}
                onPress={() => navigateToScreen('/HelpSupport')}
              >
                <Ionicons name="help-circle-outline" size={20} color="#333" />
                <Text style={styles.menuItemText}>{translations.helpSupport[language]}</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
                <Text style={[styles.menuItemText, {color: '#FF6B6B'}]}>{translations.logout[language]}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
        
        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Image
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/432/966/non_2x/3d-white-flowers-and-gold-leaves-on-peach-color-background-spring-floral-banner-with-copy-space-vector.jpg' }}
            style={styles.promoImage}
            resizeMode="cover"
          />
        </View>
        
        {/* Profile Completion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{translations.completeProfile[language]}</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${profileCompletion}%` }]} />
            </View>
            <Text style={styles.progressText}>{profileCompletion}% {translations.complete[language]}</Text>
          </View>
          
          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.profileAction}>
              <View style={[styles.actionIcon, styles.verifyIcon]}>
                <MaterialIcons name="verified" size={20} color="#fff" />
              </View>
              <Text style={styles.actionText}>{translations.verifyProfile[language]}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileAction}>
              <View style={[styles.actionIcon, styles.familyIcon]}>
                <FontAwesome5 name="users" size={16} color="#fff" />
              </View>
              <Text style={styles.actionText}>{translations.familyDetails[language]}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.profileAction}>
              <View style={[styles.actionIcon, styles.completeIcon]}>
                <Feather name="user" size={18} color="#fff" />
              </View>
              <Text style={styles.actionText}>{translations.completeProfileBtn[language]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Daily Recommendations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{translations.dailyRecommendations[language]}</Text>
            <View style={styles.timerBadge}>
              <Ionicons name="time-outline" size={14} color="#FF6B6B" />
              <Text style={styles.timerText}>{translations.hoursLeft[language]}</Text>
            </View>
          </View>
          
          {loadingProfiles ? (
            <View style={styles.loadingContainerSection}>
              <ActivityIndicator size="large" color="#FF6B6B" />
              <Text style={styles.loadingText}>{translations.loading[language]}</Text>
            </View>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.profilesContainer}
            >
              {recommendedProfiles.map(profile => (
                <TouchableOpacity 
                  key={profile.id} 
                  style={styles.profileCard}
                  onPress={() => navigateToProfile(profile)}
                >
                  <Image source={{ uri: profile.image }} style={styles.profileImage} />
                  <View style={styles.profileInfoOverlay}>
                    <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
                    <Text style={styles.profileDetails}>{profile.height}</Text>
                    {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
                    {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
          
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
            <Feather name="chevron-right" size={16} color="#FF6B6B" />
          </TouchableOpacity>
        </View>
        
        {/* All Matches */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{translations.allMatches[language]} ({allMatches.length})</Text>
            <TouchableOpacity 
              style={styles.viewAllButton}
              onPress={navigateToAllMatches}
            >
              <Text style={styles.viewAllText}>{translations.viewAll[language]}</Text>
              <Feather name="chevron-right" size={16} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionSubtitle}>{translations.membersWhoMatch[language]}</Text>
          
          {loadingProfiles ? (
            <View style={styles.loadingContainerSection}>
              <ActivityIndicator size="large" color="#FF6B6B" />
              <Text style={styles.loadingText}>{translations.loading[language]}</Text>
            </View>
          ) : (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.profilesContainer}
            >
              {allMatches.map(profile => (
                <TouchableOpacity 
                  key={profile.id} 
                  style={styles.profileCard}
                  onPress={() => navigateToProfile(profile)}
                >
                  <Image source={{ uri: profile.image }} style={styles.profileImage} />
                  <View style={styles.profileInfoOverlay}>
                    <Text style={styles.profileName}>{profile.name}, {profile.age}</Text>
                    <Text style={styles.profileDetails}>{profile.height}</Text>
                    {profile.city && <Text style={styles.profileCity}>{profile.city}</Text>}
                    {profile.occupation && <Text style={styles.profileOccupation}>{profile.occupation}</Text>}
                  </View>
                  <View style={styles.interestIndicator}>
                    <Ionicons name="heart" size={14} color="#FF6B6B" />
                    <Text style={styles.interestText}>{translations.interested[language]}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}
        </View>
        
        {/* Membership Promo */}
        <View style={[styles.section, styles.membershipSection]}>
          <Text style={styles.membershipTitle}>{translations.becomePaidMember[language]}</Text>
          <Text style={styles.membershipSubtitle}>{translations.getUpToDiscount[language]}</Text>
          
          <View style={styles.membershipFeatures}>
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Feather name="phone" size={18} color="#FF6B6B" />
              </View>
              <Text style={styles.featureText}>{translations.callWhatsAppMatches[language]}</Text>
            </View>
            
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Feather name="message-square" size={18} color="#FF6B6B" />
              </View>
              <Text style={styles.featureText}>{translations.unlimitedMessages[language]}</Text>
            </View>
            
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <MaterialCommunityIcons name="thumb-up" size={18} color="#FF6B6B" />
              </View>
              <Text style={styles.featureText}>{translations.higherChancesResponse[language]}</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.membershipButton} onPress={navigateToUpgrade}>
            <Text style={styles.membershipButtonText}>{translations.seeMembershipPlans[language]}</Text>
          </TouchableOpacity>
        </View>
        
        {/* Bottom padding to avoid tab bar overlap */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper function to format notification time
const formatNotificationTime = (timestamp) => {
  if (!timestamp) return 'Just now';
  
  try {
    let date;
    if (timestamp && typeof timestamp.toDate === 'function') {
      date = timestamp.toDate();
    } else if (timestamp && typeof timestamp === 'object' && timestamp.seconds) {
      // Handle timestamp objects
      date = new Date(timestamp.seconds * 1000);
    } else if (typeof timestamp === 'string') {
      date = new Date(timestamp);
    } else {
      date = new Date(timestamp);
    }
    
    // Check if date is valid
    if (isNaN(date.getTime())) {
      return 'Just now';
    }
    
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  } catch (error) {
    return 'Just now';
  }
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 100, // Added padding for tab bar
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  toggleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  toggleWrapper: {
    width: 140,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    overflow: 'hidden',
  },
  toggleBackground: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 68,
    height: 28,
    backgroundColor: '#FF6B6B',
    borderRadius: 14,
  },
  toggleOptions: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
    width: 70,
    textAlign: 'center',
    zIndex: 1,
  },
  toggleTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  languageButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
  },
  languageText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  avatarLoading: {
    backgroundColor: '#f0f0f0',
  },
  profileText: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: '#333',
    textTransform: 'capitalize',
  },
  nameLoading: {
    height: 20,
    width: 120,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 4,
  },
  memberType: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  memberTypeLoading: {
    height: 14,
    width: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 8,
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
  upgradeButtonLoading: {
    height: 24,
    width: 70,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
  },
  upgradeText: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 16,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF6B6B',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menuContainer: {
    width: '70%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 15,
    color: '#333',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  notificationsModal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
    padding: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  emptyNotifications: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 16,
    color: '#999',
    fontSize: 16,
  },
  clearAllButton: {
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  clearAllText: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: '500',
  },
  notificationsList: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  unreadNotification: {
    backgroundColor: '#F8F9FA',
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B6B',
    marginLeft: 8,
  },
  promoBanner: {
    height: 120,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  promoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    marginBottom: 16,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    marginBottom: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF6B6B',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  profileAction: {
    alignItems: 'center',
    width: '30%',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  verifyIcon: {
    backgroundColor: '#1da1f2',
  },
  familyIcon: {
    backgroundColor: '#06D6A0',
  },
  completeIcon: {
    backgroundColor: '#118AB2',
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  timerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  timerText: {
    fontSize: 12,
    color: '#FF6B6B',
    marginLeft: 4,
    fontWeight: '500',
  },
  profilesContainer: {
    paddingBottom: 8,
  },
  profileCard: {
    width: 140,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 140,
    height: 160,
  },
  profileInfoOverlay: {
    padding: 8,
  },
  profileName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  profileDetails: {
    fontSize: 12,
    color: '#666',
  },
  profileCity: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  profileOccupation: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
  interestIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    top: 8,
    right: 8,
    borderRadius: 12,
  },
  interestText: {
    fontSize: 10,
    color: '#FF6B6B',
    marginLeft: 4,
    fontWeight: '500',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  viewAllText: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
  },
  membershipSection: {
    backgroundColor: '#FFF9F9',
    borderBottomWidth: 0,
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  membershipTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 4,
  },
  membershipSubtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  membershipFeatures: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  membershipButton: {
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  membershipButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  loadingContainerSection: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  bottomPadding: {
    height: 70, // Additional bottom padding
  },
});