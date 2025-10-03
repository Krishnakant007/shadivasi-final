// // app/homescreens/info10.jsx
// import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
// import React, { useState } from 'react';
// import {
//   Creative,
//   Fun,
//   OtherInterest,
//   Fitness,
//   HobbiesInterest,
//   MoviesTVShows,
//   FavoriteFood
// } from '../../constant/Info';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';

// const ITEMS_PER_PAGE = 6;

// export default function Info10() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [currentPages, setCurrentPages] = useState({
//     Creative: 1,
//     Fun: 1,
//     Fitness: 1,
//     OtherInterest: 1,
//     HobbiesInterest: 1,
//     MoviesTVShows: 1,
//     FavoriteFood: 1,
//   });

//   // Translations
//   const translations = {
//     title: {
//       ENG: "Your Hobbies & Interests",
//       HI: "आपकी रुचियाँ और शौक"
//     },
//     subtitle: {
//       ENG: "Select what describes you best",
//       HI: "वह चुनें जो आपको सबसे अच्छी तरह से वर्णित करता है"
//     },
//     selectedCount: {
//       ENG: "selected",
//       HI: "चयनित"
//     },
//     viewMore: {
//       ENG: "View More",
//       HI: "और देखें"
//     },
//     remaining: {
//       ENG: "remaining",
//       HI: "शेष"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     categoryNames: {
//       Creative: {
//         ENG: "Creative",
//         HI: "रचनात्मक"
//       },
//       Fun: {
//         ENG: "Fun",
//         HI: "मनोरंजन"
//       },
//       Fitness: {
//         ENG: "Fitness",
//         HI: "फिटनेस"
//       },
//       OtherInterest: {
//         ENG: "Other Interests",
//         HI: "अन्य रुचियाँ"
//       },
//       HobbiesInterest: {
//         ENG: "Hobbies",
//         HI: "शौक"
//       },
//       MoviesTVShows: {
//         ENG: "Movies & TV Shows",
//         HI: "फिल्में और टीवी शो"
//       },
//       FavoriteFood: {
//         ENG: "Favorite Food",
//         HI: "पसंदीदा भोजन"
//       }
//     }
//   };

//   const toggleInterest = (interest) => {
//     setSelectedInterests(prev =>
//       prev.includes(interest)
//         ? prev.filter(item => item !== interest)
//         : [...prev, interest]
//     );
//   };

//   const loadMore = (category) => {
//     setCurrentPages(prev => ({
//       ...prev,
//       [category]: prev[category] + 1
//     }));
//   };

//   const categories = [
//     {
//       title: "Creative",
//       data: Creative,
//       icon: "palette",
//       color: "#FF7043"
//     },
//     {
//       title: "Fun",
//       data: Fun,
//       icon: "mood",
//       color: "#42A5F5"
//     },
//     {
//       title: "Fitness",
//       data: Fitness,
//       icon: "fitness-center",
//       color: "#66BB6A"
//     },
//     {
//       title: "OtherInterest",
//       data: OtherInterest,
//       icon: "explore",
//       color: "#AB47BC"
//     },
//     {
//       title: "HobbiesInterest",
//       data: HobbiesInterest,
//       icon: "star",
//       color: "#FFA726"
//     },
//     {
//       title: "MoviesTVShows",
//       data: MoviesTVShows,
//       icon: "movie",
//       color: "#EC407A"
//     },
//     {
//       title: "FavoriteFood",
//       data: FavoriteFood,
//       icon: "restaurant",
//       color: "#26C6DA"
//     },
//   ];

//   const renderCategory = ({ item: category }) => {
//     const currentPage = currentPages[category.title];
//     const startIdx = 0;
//     const endIdx = currentPage * ITEMS_PER_PAGE;
//     const visibleItems = category.data.slice(startIdx, endIdx);
//     const hasMore = endIdx < category.data.length;

//     return (
//       <View style={[styles.categoryContainer, { borderLeftColor: category.color }]}>
//         <View style={styles.categoryHeader}>
//           <MaterialIcons
//             name={category.icon}
//             size={24}
//             color={category.color}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryTitle}>
//             {translations.categoryNames[category.title][language]}
//           </Text>
//         </View>

//         <View style={styles.interestGrid}>
//           {visibleItems.map((interest, index) => (
//             <TouchableOpacity
//               key={`${category.title}-${index}`}
//               style={[
//                 styles.interestItem,
//                 selectedInterests.includes(interest) &&
//                   { backgroundColor: category.color }
//               ]}
//               onPress={() => toggleInterest(interest)}
//             >
//               <Text
//                 style={[
//                   styles.interestText,
//                   selectedInterests.includes(interest) &&
//                     styles.selectedInterestText
//                 ]}
//                 numberOfLines={1}
//                 ellipsizeMode="tail"
//               >
//                 {interest}
//               </Text>
//               {selectedInterests.includes(interest) && (
//                 <MaterialIcons name="check" size={18} color="white" />
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {hasMore && (
//           <TouchableOpacity
//             style={styles.viewMoreButton}
//             onPress={() => loadMore(category.title)}
//           >
//             <Text style={[styles.viewMoreText, { color: category.color }]}>
//               {translations.viewMore[language]} ({category.data.length - endIdx} {translations.remaining[language]})
//             </Text>
//             <MaterialIcons
//               name="keyboard-arrow-down"
//               size={20}
//               color={category.color}
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.header}>
//         <MaterialIcons name="interests" size={32} color="#7e57c2" />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>
//           {translations.subtitle[language]} ({selectedInterests.length} {translations.selectedCount[language]})
//         </Text>
//       </View>

//       <FlatList
//         data={categories}
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.title}
//         contentContainerStyle={styles.listContent}
//         showsVerticalScrollIndicator={false}
//       />

//       <TouchableOpacity
//         style={[
//           styles.continueButton,
//           selectedInterests.length === 0 && styles.disabledButton
//         ]}
//         onPress={() => router.push('homescreens/info11')}
//         disabled={selectedInterests.length === 0}
//       >
//         <Text style={styles.continueButtonText}>
//           {translations.continue[language]}
//         </Text>
//         <MaterialIcons name="arrow-forward" size={24} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//     paddingTop: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingTop: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   listContent: {
//     paddingBottom: 100,
//   },
//   categoryContainer: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     marginBottom: 16,
//     padding: 16,
//     borderLeftWidth: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   categoryHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   categoryIcon: {
//     marginRight: 10,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   interestGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   interestItem: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 12,
//     marginBottom: 8,
//   },
//   interestText: {
//     fontSize: 14,
//     color: '#333',
//     flex: 1,
//     marginRight: 8,
//   },
//   selectedInterestText: {
//     color: 'white',
//     fontWeight: '500',
//   },
//   viewMoreButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//     marginTop: 5,
//   },
//   viewMoreText: {
//     fontSize: 14,
//     fontWeight: '500',
//     marginRight: 5,
//   },
//   continueButton: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#7e57c2',
//     borderRadius: 30,
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   disabledButton: {
//     backgroundColor: '#b39ddb',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
// });






// // app/homescreens/info10.jsx
// import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
// import React, { useState } from 'react';
// import {
//   Creative,
//   Fun,
//   OtherInterest,
//   Fitness,
//   HobbiesInterest,
//   MoviesTVShows,
//   FavoriteFood
// } from '../../constant/Info';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';

// const ITEMS_PER_PAGE = 6;

// export default function Info10() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [currentPages, setCurrentPages] = useState({
//     Creative: 1,
//     Fun: 1,
//     Fitness: 1,
//     OtherInterest: 1,
//     HobbiesInterest: 1,
//     MoviesTVShows: 1,
//     FavoriteFood: 1,
//   });

//   // Translations with dynamic profile context
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Hobbies & Interests`,
//       HI: profileFor === 'MySelf' ? "आपकी रुचियाँ और शौक" :
//         profileFor === 'My Son' ? "आपके बेटे की रुचियाँ और शौक" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की रुचियाँ और शौक" :
//         profileFor === 'My Sister' ? "आपकी बहन की रुचियाँ और शौक" :
//         profileFor === 'My Brother' ? "आपके भाई की रुचियाँ और शौक" :
//         profileFor === 'My Friend' ? "आपके दोस्त की रुचियाँ और शौक" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की रुचियाँ और शौक" :
//         "आपके रिश्तेदार की रुचियाँ और शौक"
//     },
//     subtitle: {
//       ENG: `Select what describes ${getPrefix().toLowerCase()} best`,
//       HI: profileFor === 'MySelf' ? "वह चुनें जो आपको सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Son' ? "वह चुनें जो आपके बेटे को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Daughter' ? "वह चुनें जो आपकी बेटी को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Sister' ? "वह चुनें जो आपकी बहन को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Brother' ? "वह चुनें जो आपके भाई को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Friend' ? "वह चुनें जो आपके दोस्त को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'Cousin' ? "वह चुनें जो आपके चचेरे भाई को सबसे अच्छी तरह से वर्णित करता है" :
//         "वह चुनें जो आपके रिश्तेदार को सबसे अच्छी तरह से वर्णित करता है"
//     },
//     selectedCount: {
//       ENG: "selected",
//       HI: "चयनित"
//     },
//     viewMore: {
//       ENG: "View More",
//       HI: "और देखें"
//     },
//     remaining: {
//       ENG: "remaining",
//       HI: "शेष"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     categoryNames: {
//       Creative: {
//         ENG: "Creative",
//         HI: "रचनात्मक"
//       },
//       Fun: {
//         ENG: "Fun",
//         HI: "मनोरंजन"
//       },
//       Fitness: {
//         ENG: "Fitness",
//         HI: "फिटनेस"
//       },
//       OtherInterest: {
//         ENG: "Other Interests",
//         HI: "अन्य रुचियाँ"
//       },
//       HobbiesInterest: {
//         ENG: "Hobbies",
//         HI: "शौक"
//       },
//       MoviesTVShows: {
//         ENG: "Movies & TV Shows",
//         HI: "फिल्में और टीवी शो"
//       },
//       FavoriteFood: {
//         ENG: "Favorite Food",
//         HI: "पसंदीदा भोजन"
//       }
//     }
//   };

//   const toggleInterest = (interest) => {
//     setSelectedInterests(prev =>
//       prev.includes(interest)
//         ? prev.filter(item => item !== interest)
//         : [...prev, interest]
//     );
//   };

//   const loadMore = (category) => {
//     setCurrentPages(prev => ({
//       ...prev,
//       [category]: prev[category] + 1
//     }));
//   };

//   const categories = [
//     {
//       title: "Creative",
//       data: Creative,
//       icon: "palette",
//       color: "#FF7043"
//     },
//     {
//       title: "Fun",
//       data: Fun,
//       icon: "mood",
//       color: "#42A5F5"
//     },
//     {
//       title: "Fitness",
//       data: Fitness,
//       icon: "fitness-center",
//       color: "#66BB6A"
//     },
//     {
//       title: "OtherInterest",
//       data: OtherInterest,
//       icon: "explore",
//       color: "#AB47BC"
//     },
//     {
//       title: "HobbiesInterest",
//       data: HobbiesInterest,
//       icon: "star",
//       color: "#FFA726"
//     },
//     {
//       title: "MoviesTVShows",
//       data: MoviesTVShows,
//       icon: "movie",
//       color: "#EC407A"
//     },
//     {
//       title: "FavoriteFood",
//       data: FavoriteFood,
//       icon: "restaurant",
//       color: "#26C6DA"
//     },
//   ];

//   const renderCategory = ({ item: category }) => {
//     const currentPage = currentPages[category.title];
//     const startIdx = 0;
//     const endIdx = currentPage * ITEMS_PER_PAGE;
//     const visibleItems = category.data.slice(startIdx, endIdx);
//     const hasMore = endIdx < category.data.length;

//     return (
//       <View style={[styles.categoryContainer, { borderLeftColor: category.color }]}>
//         <View style={styles.categoryHeader}>
//           <MaterialIcons
//             name={category.icon}
//             size={24}
//             color={category.color}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryTitle}>
//             {translations.categoryNames[category.title][language]}
//           </Text>
//         </View>

//         <View style={styles.interestGrid}>
//           {visibleItems.map((interest, index) => (
//             <TouchableOpacity
//               key={`${category.title}-${index}`}
//               style={[
//                 styles.interestItem,
//                 selectedInterests.includes(interest) &&
//                   { backgroundColor: category.color }
//               ]}
//               onPress={() => toggleInterest(interest)}
//             >
//               <Text
//                 style={[
//                   styles.interestText,
//                   selectedInterests.includes(interest) &&
//                     styles.selectedInterestText
//                 ]}
//                 numberOfLines={1}
//                 ellipsizeMode="tail"
//               >
//                 {interest}
//               </Text>
//               {selectedInterests.includes(interest) && (
//                 <MaterialIcons name="check" size={18} color="white" />
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {hasMore && (
//           <TouchableOpacity
//             style={styles.viewMoreButton}
//             onPress={() => loadMore(category.title)}
//           >
//             <Text style={[styles.viewMoreText, { color: category.color }]}>
//               {translations.viewMore[language]} ({category.data.length - endIdx} {translations.remaining[language]})
//             </Text>
//             <MaterialIcons
//               name="keyboard-arrow-down"
//               size={20}
//               color={category.color}
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       <View style={styles.header}>
//         <MaterialIcons name="interests" size={32} color="#7e57c2" />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>
//           {translations.subtitle[language]} ({selectedInterests.length} {translations.selectedCount[language]})
//         </Text>
//       </View>

//       <FlatList
//         data={categories}
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.title}
//         contentContainerStyle={styles.listContent}
//         showsVerticalScrollIndicator={false}
//       />

//       <TouchableOpacity
//         style={[
//           styles.continueButton,
//           selectedInterests.length === 0 && styles.disabledButton
//         ]}
//         onPress={() => router.push('homescreens/info11')}
//         disabled={selectedInterests.length === 0}
//       >
//         <Text style={styles.continueButtonText}>
//           {translations.continue[language]}
//         </Text>
//         <MaterialIcons name="arrow-forward" size={24} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//     paddingTop: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingTop: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   listContent: {
//     paddingBottom: 100,
//   },
//   categoryContainer: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     marginBottom: 16,
//     padding: 16,
//     borderLeftWidth: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   categoryHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   categoryIcon: {
//     marginRight: 10,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   interestGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   interestItem: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 12,
//     marginBottom: 8,
//   },
//   interestText: {
//     fontSize: 14,
//     color: '#333',
//     flex: 1,
//     marginRight: 8,
//   },
//   selectedInterestText: {
//     color: 'white',
//     fontWeight: '500',
//   },
//   viewMoreButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//     marginTop: 5,
//   },
//   viewMoreText: {
//     fontSize: 14,
//     fontWeight: '500',
//     marginRight: 5,
//   },
//   continueButton: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#7e57c2',
//     borderRadius: 30,
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   disabledButton: {
//     backgroundColor: '#b39ddb',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
// });









//16/08/2025

// app/homescreens/info10.jsx
// import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
// import React, { useState } from 'react';
// import {
//   Creative,
//   Fun,
//   OtherInterest,
//   Fitness,
//   HobbiesInterest,
//   MoviesTVShows,
//   FavoriteFood
// } from '../../constant/Info';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';

// const ITEMS_PER_PAGE = 6;

// export default function Info10() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [currentPages, setCurrentPages] = useState({
//     Creative: 1,
//     Fun: 1,
//     Fitness: 1,
//     OtherInterest: 1,
//     HobbiesInterest: 1,
//     MoviesTVShows: 1,
//     FavoriteFood: 1,
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   // Translations with dynamic profile context
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Hobbies & Interests`,
//       HI: profileFor === 'MySelf' ? "आपकी रुचियाँ और शौक" :
//         profileFor === 'My Son' ? "आपके बेटे की रुचियाँ और शौक" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की रुचियाँ और शौक" :
//         profileFor === 'My Sister' ? "आपकी बहन की रुचियाँ और शौक" :
//         profileFor === 'My Brother' ? "आपके भाई की रुचियाँ और शौक" :
//         profileFor === 'My Friend' ? "आपके दोस्त की रुचियाँ और शौक" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की रुचियाँ और शौक" :
//         "आपके रिश्तेदार की रुचियाँ और शौक"
//     },
//     subtitle: {
//       ENG: `Select what describes ${getPrefix().toLowerCase()} best`,
//       HI: profileFor === 'MySelf' ? "वह चुनें जो आपको सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Son' ? "वह चुनें जो आपके बेटे को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Daughter' ? "वह चुनें जो आपकी बेटी को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Sister' ? "वह चुनें जो आपकी बहन को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Brother' ? "वह चुनें जो आपके भाई को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Friend' ? "वह चुनें जो आपके दोस्त को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'Cousin' ? "वह चुनें जो आपके चचेरे भाई को सबसे अच्छी तरह से वर्णित करता है" :
//         "वह चुनें जो आपके रिश्तेदार को सबसे अच्छी तरह से वर्णित करता है"
//     },
//     selectedCount: {
//       ENG: "selected",
//       HI: "चयनित"
//     },
//     viewMore: {
//       ENG: "View More",
//       HI: "और देखें"
//     },
//     remaining: {
//       ENG: "remaining",
//       HI: "शेष"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     categoryNames: {
//       Creative: {
//         ENG: "Creative",
//         HI: "रचनात्मक"
//       },
//       Fun: {
//         ENG: "Fun",
//         HI: "मनोरंजन"
//       },
//       Fitness: {
//         ENG: "Fitness",
//         HI: "फिटनेस"
//       },
//       OtherInterest: {
//         ENG: "Other Interests",
//         HI: "अन्य रुचियाँ"
//       },
//       HobbiesInterest: {
//         ENG: "Hobbies",
//         HI: "शौक"
//       },
//       MoviesTVShows: {
//         ENG: "Movies & TV Shows",
//         HI: "फिल्में और टीवी शो"
//       },
//       FavoriteFood: {
//         ENG: "Favorite Food",
//         HI: "पसंदीदा भोजन"
//       }
//     }
//   };

//   const toggleInterest = (interest) => {
//     setSelectedInterests(prev =>
//       prev.includes(interest)
//         ? prev.filter(item => item !== interest)
//         : [...prev, interest]
//     );
//   };

//   const loadMore = (category) => {
//     setCurrentPages(prev => ({
//       ...prev,
//       [category]: prev[category] + 1
//     }));
//   };

//   const handleContinue = async () => {
//     if (selectedInterests.length === 0) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare profile data with interests
//       const profileData = {
//         ...userData,
//         interests: selectedInterests,
//         profileProgress: 90, // Update progress to 90%
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore
//       await saveUserProfile(profileData);

//       // Navigate to next screen
//       router.push('homescreens/info11');
//     } catch (error) {
//       console.error('Error saving interests:', error);
//       // Here you could add error state and display to user
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const categories = [
//     {
//       title: "Creative",
//       data: Creative,
//       icon: "palette",
//       color: "#FF7043"
//     },
//     {
//       title: "Fun",
//       data: Fun,
//       icon: "mood",
//       color: "#42A5F5"
//     },
//     {
//       title: "Fitness",
//       data: Fitness,
//       icon: "fitness-center",
//       color: "#66BB6A"
//     },
//     {
//       title: "OtherInterest",
//       data: OtherInterest,
//       icon: "explore",
//       color: "#AB47BC"
//     },
//     {
//       title: "HobbiesInterest",
//       data: HobbiesInterest,
//       icon: "star",
//       color: "#FFA726"
//     },
//     {
//       title: "MoviesTVShows",
//       data: MoviesTVShows,
//       icon: "movie",
//       color: "#EC407A"
//     },
//     {
//       title: "FavoriteFood",
//       data: FavoriteFood,
//       icon: "restaurant",
//       color: "#26C6DA"
//     },
//   ];

//   const renderCategory = ({ item: category }) => {
//     const currentPage = currentPages[category.title];
//     const startIdx = 0;
//     const endIdx = currentPage * ITEMS_PER_PAGE;
//     const visibleItems = category.data.slice(startIdx, endIdx);
//     const hasMore = endIdx < category.data.length;

//     return (
//       <View style={[styles.categoryContainer, { borderLeftColor: category.color }]}>
//         <View style={styles.categoryHeader}>
//           <MaterialIcons
//             name={category.icon}
//             size={24}
//             color={category.color}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryTitle}>
//             {translations.categoryNames[category.title][language]}
//           </Text>
//         </View>

//         <View style={styles.interestGrid}>
//           {visibleItems.map((interest, index) => (
//             <TouchableOpacity
//               key={`${category.title}-${index}`}
//               style={[
//                 styles.interestItem,
//                 selectedInterests.includes(interest) &&
//                   { backgroundColor: category.color }
//               ]}
//               onPress={() => toggleInterest(interest)}
//             >
//               <Text
//                 style={[
//                   styles.interestText,
//                   selectedInterests.includes(interest) &&
//                     styles.selectedInterestText
//                 ]}
//                 numberOfLines={1}
//                 ellipsizeMode="tail"
//               >
//                 {interest}
//               </Text>
//               {selectedInterests.includes(interest) && (
//                 <MaterialIcons name="check" size={18} color="white" />
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {hasMore && (
//           <TouchableOpacity
//             style={styles.viewMoreButton}
//             onPress={() => loadMore(category.title)}
//           >
//             <Text style={[styles.viewMoreText, { color: category.color }]}>
//               {translations.viewMore[language]} ({category.data.length - endIdx} {translations.remaining[language]})
//             </Text>
//             <MaterialIcons
//               name="keyboard-arrow-down"
//               size={20}
//               color={category.color}
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Language Toggle */}
//       <View style={styles.languageToggleContainer}>
//         <Text style={styles.languageLabel}>ENG</Text>
//         <TouchableOpacity
//           style={styles.toggleContainer}
//           onPress={toggleLanguage}
//           activeOpacity={0.8}
//         >
//           <View style={[
//             styles.toggleButton,
//             {
//               transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//               backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//             }
//           ]}>
//             <Image
//               source={language === 'ENG'
//                 ? require('../../assets/uk-flag.png')
//                 : require('../../assets/india-flag.png')}
//               style={styles.flag}
//             />
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.languageLabel}>हिंदी</Text>
//       </View>

//       {isLoading && (
//         <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="#7e57c2" />
//         </View>
//       )}

//       <View style={styles.header}>
//         <MaterialIcons name="interests" size={32} color="#7e57c2" />
//         <Text style={styles.title}>{translations.title[language]}</Text>
//         <Text style={styles.subtitle}>
//           {translations.subtitle[language]} ({selectedInterests.length} {translations.selectedCount[language]})
//         </Text>
//       </View>

//       <FlatList
//         data={categories}
//         renderItem={renderCategory}
//         keyExtractor={(item) => item.title}
//         contentContainerStyle={styles.listContent}
//         showsVerticalScrollIndicator={false}
//       />

//       <TouchableOpacity
//         style={[
//           styles.continueButton,
//           selectedInterests.length === 0 && styles.disabledButton
//         ]}
//         onPress={handleContinue}
//         disabled={selectedInterests.length === 0 || isLoading}
//       >
//         {isLoading ? (
//           <ActivityIndicator size="small" color="white" />
//         ) : (
//           <>
//             <Text style={styles.continueButtonText}>
//               {translations.continue[language]}
//             </Text>
//             <MaterialIcons name="arrow-forward" size={24} color="white" />
//           </>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//     paddingTop: 40,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     marginBottom: 10,
//     gap: 6,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//     paddingTop: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   listContent: {
//     paddingBottom: 100,
//   },
//   categoryContainer: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     marginBottom: 16,
//     padding: 16,
//     borderLeftWidth: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   categoryHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   categoryIcon: {
//     marginRight: 10,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   interestGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   interestItem: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 12,
//     marginBottom: 8,
//   },
//   interestText: {
//     fontSize: 14,
//     color: '#333',
//     flex: 1,
//     marginRight: 8,
//   },
//   selectedInterestText: {
//     color: 'white',
//     fontWeight: '500',
//   },
//   viewMoreButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//     marginTop: 5,
//   },
//   viewMoreText: {
//     fontSize: 14,
//     fontWeight: '500',
//     marginRight: 5,
//   },
//   continueButton: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#7e57c2',
//     borderRadius: 30,
//     paddingVertical: 16,
//     paddingHorizontal: 24,
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   disabledButton: {
//     backgroundColor: '#b39ddb',
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.7)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
// });







//app/homescreens/info10.jsx

// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   Image,
//   ActivityIndicator,
//   ScrollView,
//   Dimensions
// } from 'react-native';
// import { MaterialIcons, AntDesign } from '@expo/vector-icons';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useProfile } from '../context/ProfileContext';
// import { useFirestore } from '../hooks/useFirebase';
// import { serverTimestamp } from 'firebase/firestore';
// import {
//   Creative,
//   Fun,
//   OtherInterest,
//   Fitness,
//   HobbiesInterest,
//   MoviesTVShows,
//   FavoriteFood
// } from '../../constant/Info';
// import { useProfileNavigation } from '../utils/navigationHelper';

// const ITEMS_PER_PAGE = 6;

// export default function Info10() {
//   const router = useRouter();
//   const { language, toggleLanguage } = useLanguage();
//   const { profileFor, getPrefix } = useProfile();
//   const { saveUserProfile, userData } = useFirestore();
//   const { getNextScreen, getPreviousScreen } = useProfileNavigation();
//   const [selectedInterests, setSelectedInterests] = useState([]);
//   const [currentPages, setCurrentPages] = useState({
//     Creative: 1,
//     Fun: 1,
//     Fitness: 1,
//     OtherInterest: 1,
//     HobbiesInterest: 1,
//     MoviesTVShows: 1,
//     FavoriteFood: 1,
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   // Load existing data
//   useEffect(() => {
//     if (userData && userData.interests) {
//       setSelectedInterests(userData.interests);
//     }
//   }, [userData]);

//   // Translations with dynamic profile context
//   const translations = {
//     title: {
//       ENG: `${getPrefix()} Hobbies & Interests`,
//       HI: profileFor === 'MySelf' ? "आपकी रुचियाँ और शौक" :
//         profileFor === 'My Son' ? "आपके बेटे की रुचियाँ और शौक" :
//         profileFor === 'My Daughter' ? "आपकी बेटी की रुचियाँ और शौक" :
//         profileFor === 'My Sister' ? "आपकी बहन की रुचियाँ और शौक" :
//         profileFor === 'My Brother' ? "आपके भाई की रुचियाँ और शौक" :
//         profileFor === 'My Friend' ? "आपके दोस्त की रुचियाँ और शौक" :
//         profileFor === 'Cousin' ? "आपके चचेरे भाई की रुचियाँ और शौक" :
//         "आपके रिश्तेदार की रुचियाँ और शौक"
//     },
//     subtitle: {
//       ENG: `Select what describes ${getPrefix().toLowerCase()} best`,
//       HI: profileFor === 'MySelf' ? "वह चुनें जो आपको सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Son' ? "वह चुनें जो आपके बेटे को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Daughter' ? "वह चुनें जो आपकी बेटी को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Sister' ? "वह चुनें जो आपकी बहन को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Brother' ? "वह चुनें जो आपके भाई को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'My Friend' ? "वह चुनें जो आपके दोस्त को सबसे अच्छी तरह से वर्णित करता है" :
//         profileFor === 'Cousin' ? "वह चुनें जो आपके चचेरे भाई को सबसे अच्छी तरह से वर्णित करता है" :
//         "वह चुनें जो आपके रिश्तेदार को सबसे अच्छी तरह से वर्णित करता है"
//     },
//     selectedCount: {
//       ENG: "selected",
//       HI: "चयनित"
//     },
//     viewMore: {
//       ENG: "View More",
//       HI: "और देखें"
//     },
//     remaining: {
//       ENG: "remaining",
//       HI: "शेष"
//     },
//     continue: {
//       ENG: "Continue",
//       HI: "जारी रखें"
//     },
//     categoryNames: {
//       Creative: {
//         ENG: "Creative",
//         HI: "रचनात्मक"
//       },
//       Fun: {
//         ENG: "Fun",
//         HI: "मनोरंजन"
//       },
//       Fitness: {
//         ENG: "Fitness",
//         HI: "फिटनेस"
//       },
//       OtherInterest: {
//         ENG: "Other Interests",
//         HI: "अन्य रुचियाँ"
//       },
//       HobbiesInterest: {
//         ENG: "Hobbies",
//         HI: "शौक"
//       },
//       MoviesTVShows: {
//         ENG: "Movies & TV Shows",
//         HI: "फिल्में और टीवी शो"
//       },
//       FavoriteFood: {
//         ENG: "Favorite Food",
//         HI: "पसंदीदा भोजन"
//       }
//     }
//   };

//   const toggleInterest = (interest) => {
//     setSelectedInterests(prev =>
//       prev.includes(interest)
//         ? prev.filter(item => item !== interest)
//         : [...prev, interest]
//     );
//   };

//   const loadMore = (category) => {
//     setCurrentPages(prev => ({
//       ...prev,
//       [category]: prev[category] + 1
//     }));
//   };

//   const handleContinue = async () => {
//     if (selectedInterests.length === 0) return;
    
//     try {
//       setIsLoading(true);
      
//       // Prepare profile data with interests
//       const profileData = {
//         ...userData,
//         interests: selectedInterests,
//         profileProgress: 100, // Update progress to 100% (final screen)
//         updatedAt: serverTimestamp()
//       };

//       // Save to Firestore with screen number
//       await saveUserProfile(profileData, 10);

//       // Navigate to next screen
//       router.push(getNextScreen('homescreens/info10'));
//     } catch (error) {
//       console.error('Error saving interests:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const categories = [
//     {
//       title: "Creative",
//       data: Creative,
//       icon: "palette",
//       color: "#FF7043"
//     },
//     {
//       title: "Fun",
//       data: Fun,
//       icon: "mood",
//       color: "#42A5F5"
//     },
//     {
//       title: "Fitness",
//       data: Fitness,
//       icon: "fitness-center",
//       color: "#66BB6A"
//     },
//     {
//       title: "OtherInterest",
//       data: OtherInterest,
//       icon: "explore",
//       color: "#AB47BC"
//     },
//     {
//       title: "HobbiesInterest",
//       data: HobbiesInterest,
//       icon: "star",
//       color: "#FFA726"
//     },
//     {
//       title: "MoviesTVShows",
//       data: MoviesTVShows,
//       icon: "movie",
//       color: "#EC407A"
//     },
//     {
//       title: "FavoriteFood",
//       data: FavoriteFood,
//       icon: "restaurant",
//       color: "#26C6DA"
//     },
//   ];

//   const renderCategory = ({ item: category }) => {
//     const currentPage = currentPages[category.title];
//     const startIdx = 0;
//     const endIdx = currentPage * ITEMS_PER_PAGE;
//     const visibleItems = category.data.slice(startIdx, endIdx);
//     const hasMore = endIdx < category.data.length;

//     return (
//       <View style={[styles.categoryContainer, { borderLeftColor: category.color }]}>
//         <View style={styles.categoryHeader}>
//           <MaterialIcons
//             name={category.icon}
//             size={24}
//             color={category.color}
//             style={styles.categoryIcon}
//           />
//           <Text style={styles.categoryTitle}>
//             {translations.categoryNames[category.title][language]}
//           </Text>
//         </View>

//         <View style={styles.interestGrid}>
//           {visibleItems.map((interest, index) => (
//             <TouchableOpacity
//               key={`${category.title}-${index}`}
//               style={[
//                 styles.interestItem,
//                 selectedInterests.includes(interest) &&
//                   { backgroundColor: category.color }
//               ]}
//               onPress={() => toggleInterest(interest)}
//             >
//               <Text
//                 style={[
//                   styles.interestText,
//                   selectedInterests.includes(interest) &&
//                     styles.selectedInterestText
//                 ]}
//                 numberOfLines={1}
//                 ellipsizeMode="tail"
//               >
//                 {interest}
//               </Text>
//               {selectedInterests.includes(interest) && (
//                 <MaterialIcons name="check" size={18} color="white" />
//               )}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {hasMore && (
//           <TouchableOpacity
//             style={styles.viewMoreButton}
//             onPress={() => loadMore(category.title)}
//           >
//             <Text style={[styles.viewMoreText, { color: category.color }]}>
//               {translations.viewMore[language]} ({category.data.length - endIdx} {translations.remaining[language]})
//             </Text>
//             <MaterialIcons
//               name="keyboard-arrow-down"
//               size={20}
//               color={category.color}
//             />
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with fixed buttons */}
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backButton}
//           onPress={() => router.push(getPreviousScreen('homescreens/info10'))}
//         >
//           <MaterialIcons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>

//         <View style={styles.languageToggleContainer}>
//           <Text style={styles.languageLabel}>ENG</Text>
//           <TouchableOpacity
//             style={styles.toggleContainer}
//             onPress={toggleLanguage}
//             activeOpacity={0.8}
//           >
//             <View style={[
//               styles.toggleButton,
//               {
//                 transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
//                 backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
//               }
//             ]}>
//               <Image
//                 source={language === 'ENG'
//                   ? require('../../assets/uk-flag.png')
//                   : require('../../assets/india-flag.png')}
//                 style={styles.flag}
//               />
//             </View>
//           </TouchableOpacity>
//           <Text style={styles.languageLabel}>हिंदी</Text>
//         </View>
//       </View>

//       <View style={styles.contentContainer}>
//         {isLoading && (
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="#7e57c2" />
//           </View>
//         )}

//         <ScrollView
//           contentContainerStyle={styles.scrollContent}
//           showsVerticalScrollIndicator={false}
//         >
//           {/* Header */}
//           <View style={styles.headerSection}>
//             <AntDesign name="heart" size={24} color="#7e57c2" />
//             <Text style={styles.title}>{translations.title[language]}</Text>
//           </View>

//           <Text style={styles.subtitle}>
//             {translations.subtitle[language]} ({selectedInterests.length} {translations.selectedCount[language]})
//           </Text>

//           {categories.map((category) => {
//             const currentPage = currentPages[category.title];
//             const startIdx = 0;
//             const endIdx = currentPage * ITEMS_PER_PAGE;
//             const visibleItems = category.data.slice(startIdx, endIdx);
//             const hasMore = endIdx < category.data.length;

//             return (
//               <View key={category.title} style={[styles.categoryContainer, { borderLeftColor: category.color }]}>
//                 <View style={styles.categoryHeader}>
//                   <MaterialIcons
//                     name={category.icon}
//                     size={24}
//                     color={category.color}
//                     style={styles.categoryIcon}
//                   />
//                   <Text style={styles.categoryTitle}>
//                     {translations.categoryNames[category.title][language]}
//                   </Text>
//                 </View>

//                 <View style={styles.interestGrid}>
//                   {visibleItems.map((interest, index) => (
//                     <TouchableOpacity
//                       key={`${category.title}-${index}`}
//                       style={[
//                         styles.interestItem,
//                         selectedInterests.includes(interest) &&
//                           { backgroundColor: category.color }
//                       ]}
//                       onPress={() => toggleInterest(interest)}
//                     >
//                       <Text
//                         style={[
//                           styles.interestText,
//                           selectedInterests.includes(interest) &&
//                             styles.selectedInterestText
//                         ]}
//                         numberOfLines={1}
//                         ellipsizeMode="tail"
//                       >
//                         {interest}
//                       </Text>
//                       {selectedInterests.includes(interest) && (
//                         <MaterialIcons name="check" size={18} color="white" />
//                       )}
//                     </TouchableOpacity>
//                   ))}
//                 </View>

//                 {hasMore && (
//                   <TouchableOpacity
//                     style={styles.viewMoreButton}
//                     onPress={() => loadMore(category.title)}
//                   >
//                     <Text style={[styles.viewMoreText, { color: category.color }]}>
//                       {translations.viewMore[language]} ({category.data.length - endIdx} {translations.remaining[language]})
//                     </Text>
//                     <MaterialIcons
//                       name="keyboard-arrow-down"
//                       size={20}
//                       color={category.color}
//                     />
//                   </TouchableOpacity>
//                 )}
//               </View>
//             );
//           })}
//         </ScrollView>

//         {/* Continue Button */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={[
//               styles.continueButton,
//               {
//                 backgroundColor: selectedInterests.length > 0 ? '#7e57c2' : '#ADB5BD',
//                 opacity: isLoading ? 0.7 : 1
//               }
//             ]}
//             onPress={handleContinue}
//             disabled={selectedInterests.length === 0 || isLoading}
//           >
//             {isLoading ? (
//               <ActivityIndicator size="small" color="white" />
//             ) : (
//               <Text style={styles.continueButtonText}>
//                 {translations.continue[language]}
//               </Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     paddingBottom: 15,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#E9ECEF',
//   },
//   backButton: {
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   languageToggleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     gap: 6,
//     backgroundColor: 'white',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   languageLabel: {
//     fontWeight: '600',
//     fontSize: 14,
//     color: '#495057',
//   },
//   toggleContainer: {
//     width: 60,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#E9ECEF',
//     justifyContent: 'center',
//     paddingHorizontal: 2,
//   },
//   toggleButton: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   flag: {
//     width: 18,
//     height: 13,
//     borderRadius: 2,
//   },
//   contentContainer: {
//     flex: 1,
//   },
//   loaderContainer: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(255,255,255,0.8)',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   scrollContent: {
//     padding: 20,
//     paddingBottom: 100,
//   },
//   headerSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginLeft: 10,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   categoryContainer: {
//     backgroundColor: 'white',
//     borderRadius: 16,
//     marginBottom: 20,
//     padding: 16,
//     borderLeftWidth: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   categoryHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   categoryIcon: {
//     marginRight: 10,
//   },
//   categoryTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//   },
//   interestGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   interestItem: {
//     width: '48%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 12,
//     paddingVertical: 12,
//     paddingHorizontal: 12,
//     marginBottom: 10,
//   },
//   interestText: {
//     fontSize: 14,
//     color: '#333',
//     flex: 1,
//     marginRight: 8,
//   },
//   selectedInterestText: {
//     color: 'white',
//     fontWeight: '500',
//   },
//   viewMoreButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//     marginTop: 5,
//   },
//   viewMoreText: {
//     fontSize: 14,
//     fontWeight: '500',
//     marginRight: 5,
//   },
//   buttonContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: 0,
//     right: 0,
//     paddingHorizontal: 20,
//   },
//   continueButton: {
//     borderRadius: 30,
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//     shadowColor: '#7e57c2',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   continueButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });



//20/09/2025
//app/homescreens/info10.jsx

import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import { useProfile } from '../context/ProfileContext';
import { useFirestore } from '../hooks/useFirebase';
import { serverTimestamp } from 'firebase/firestore';
import { 
  Creative, 
  Fun, 
  OtherInterest, 
  Fitness, 
  HobbiesInterest, 
  MoviesTVShows, 
  FavoriteFood 
} from '../../constant/Info';
import { useProfileNavigation } from '../utils/navigationHelper';

const ITEMS_PER_PAGE = 6;

export default function Info10() {
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();
  const { profileFor, getPrefix } = useProfile();
  const { saveUserProfile, userData } = useFirestore();
  const { getNextScreen, getPreviousScreen } = useProfileNavigation();
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [currentPages, setCurrentPages] = useState({
    Creative: 1,
    Fun: 1,
    Fitness: 1,
    OtherInterest: 1,
    HobbiesInterest: 1,
    MoviesTVShows: 1,
    FavoriteFood: 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  // Load existing data
  useEffect(() => {
    if (userData && userData.interests) {
      setSelectedInterests(userData.interests);
    }
  }, [userData]);

  // Translations with dynamic profile context
  const translations = {
    title: {
      ENG: `${getPrefix()} Hobbies & Interests`,
      HI: profileFor === 'MySelf' ? "आपकी रुचियाँ और शौक" : 
        profileFor === 'My Son' ? "आपके बेटे की रुचियाँ और शौक" :
        profileFor === 'My Daughter' ? "आपकी बेटी की रुचियाँ और शौक" :
        profileFor === 'My Sister' ? "आपकी बहन की रुचियाँ और शौक" :
        profileFor === 'My Brother' ? "आपके भाई की रुचियाँ और शौक" :
        profileFor === 'My Friend' ? "आपके दोस्त की रुचियाँ और शौक" :
        profileFor === 'Cousin' ? "आपके चचेरे भाई की रुचियाँ और शौक" :
        "आपके रिश्तेदार की रुचियाँ और शौक"
    },
    subtitle: {
      ENG: `Select what describes ${getPrefix().toLowerCase()} best`,
      HI: profileFor === 'MySelf' ? "वह चुनें जो आपको सबसे अच्छी तरह से वर्णित करता है" :
        profileFor === 'My Son' ? "वह चुनें जो आपके बेटे को सबसे अच्छी तरह से वर्णित करता है" :
        profileFor === 'My Daughter' ? "वह चुनें जो आपकी बेटी को सबसे अच्छी तरह से वर्णित करता है" :
        profileFor === 'My Sister' ? "वह चुनें जो आपकी बहन को सबसे अच्छी तरह से वर्णित करता है" :
        profileFor === 'My Brother' ? "वह चुनें जो आपके भाई को सबसे अच्छी तरह से वर्णित करता है" :
        profileFor === 'My Friend' ? "वह चुनें जो आपके दोस्त को सबसे अच्छी तरह से वर्णित करता है" :
        profileFor === 'Cousin' ? "वह चुनें जो आपके चचेरे भाई को सबसे अच्छी तरह से वर्णित करता है" :
        "वह चुनें जो आपके रिश्तेदार को सबसे अच्छी तरह से वर्णित करता है"
    },
    selectedCount: {
      ENG: "selected",
      HI: "चयनित"
    },
    viewMore: {
      ENG: "View More",
      HI: "और देखें"
    },
    remaining: {
      ENG: "remaining",
      HI: "शेष"
    },
    continue: {
      ENG: "Continue",
      HI: "जारी रखें"
    },
    categoryNames: {
      Creative: {
        ENG: "Creative",
        HI: "रचनात्मक"
      },
      Fun: {
        ENG: "Fun",
        HI: "मनोरंजन"
      },
      Fitness: {
        ENG: "Fitness",
        HI: "फिटनेस"
      },
      OtherInterest: {
        ENG: "Other Interests",
        HI: "अन्य रुचियाँ"
      },
      HobbiesInterest: {
        ENG: "Hobbies",
        HI: "शौक"
      },
      MoviesTVShows: {
        ENG: "Movies & TV Shows",
        HI: "फिल्में और टीवी शो"
      },
      FavoriteFood: {
        ENG: "Favorite Food",
        HI: "पसंदीदा भोजन"
      }
    }
  };

  const toggleInterest = (interest) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(item => item !== interest) 
        : [...prev, interest]
    );
  };

  const loadMore = (category) => {
    setCurrentPages(prev => ({
      ...prev,
      [category]: prev[category] + 1
    }));
  };

  const handleContinue = async () => {
    if (selectedInterests.length === 0) return;
    
    try {
      setIsLoading(true);
      
      // Prepare profile data with interests
      const profileData = {
        ...userData,
        interests: selectedInterests,
        profileProgress: 100, // Update progress to 100% (final screen)
        updatedAt: serverTimestamp()
      };

      // Save to Firestore with screen number
      await saveUserProfile(profileData, 10);

      // Navigate to next screen
      router.push(getNextScreen('homescreens/info10'));
    } catch (error) {
      console.error('Error saving interests:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const categories = [
    { 
      title: "Creative", 
      data: Creative, 
      icon: "palette",
      color: "#FF7043"
    },
    { 
      title: "Fun", 
      data: Fun, 
      icon: "mood",
      color: "#42A5F5"
    },
    { 
      title: "Fitness", 
      data: Fitness, 
      icon: "fitness-center",
      color: "#66BB6A"
    },
    { 
      title: "OtherInterest", 
      data: OtherInterest, 
      icon: "explore",
      color: "#AB47BC"
    },
    { 
      title: "HobbiesInterest", 
      data: HobbiesInterest, 
      icon: "star",
      color: "#FFA726"
    },
    { 
      title: "MoviesTVShows", 
      data: MoviesTVShows, 
      icon: "movie",
      color: "#EC407A"
    },
    { 
      title: "FavoriteFood", 
      data: FavoriteFood, 
      icon: "restaurant",
      color: "#26C6DA"
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header with fixed buttons */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push(getPreviousScreen('homescreens/info10'))}
        >
          <MaterialIcons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.languageToggleContainer}>
          <Text style={styles.languageLabel}>ENG</Text>
          <TouchableOpacity 
            style={styles.toggleContainer}
            onPress={toggleLanguage}
            activeOpacity={0.8}
          >
            <View style={[
              styles.toggleButton,
              { 
                transform: [{ translateX: language === 'ENG' ? 0 : 32 }],
                backgroundColor: language === 'ENG' ? '#6C63FF' : '#FF6B6B'
              }
            ]}>
              <Image 
                source={language === 'ENG' 
                  ? require('../../assets/uk-flag.png') 
                  : require('../../assets/india-flag.png')} 
                style={styles.flag} 
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.languageLabel}>हिंदी</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#7e57c2" />
          </View>
        )}

        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <AntDesign name="heart" size={24} color="#7e57c2" />
            <Text style={styles.title}>{translations.title[language]}</Text>
          </View>

          <Text style={styles.subtitle}>
            {translations.subtitle[language]} ({selectedInterests.length} {translations.selectedCount[language]})
          </Text>

          {categories.map((category) => {
            const currentPage = currentPages[category.title];
            const startIdx = 0;
            const endIdx = currentPage * ITEMS_PER_PAGE;
            const visibleItems = category.data.slice(startIdx, endIdx);
            const hasMore = endIdx < category.data.length;

            return (
              <View key={category.title} style={[styles.categoryContainer, { borderLeftColor: category.color }]}>
                <View style={styles.categoryHeader}>
                  <MaterialIcons 
                    name={category.icon} 
                    size={24} 
                    color={category.color} 
                    style={styles.categoryIcon} 
                  />
                  <Text style={styles.categoryTitle}>
                    {translations.categoryNames[category.title][language]}
                  </Text>
                </View>

                <View style={styles.interestGrid}>
                  {visibleItems.map((interest, index) => (
                    <TouchableOpacity
                      key={`${category.title}-${index}`}
                      style={[
                        styles.interestItem,
                        selectedInterests.includes(interest) && 
                          { backgroundColor: category.color }
                      ]}
                      onPress={() => toggleInterest(interest)}
                    >
                      <Text 
                        style={[
                          styles.interestText,
                          selectedInterests.includes(interest) && 
                            styles.selectedInterestText
                        ]}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {interest}
                      </Text>
                      {selectedInterests.includes(interest) && (
                        <MaterialIcons name="check" size={18} color="white" />
                      )}
                    </TouchableOpacity>
                  ))}
                </View>

                {hasMore && (
                  <TouchableOpacity 
                    style={styles.viewMoreButton}
                    onPress={() => loadMore(category.title)}
                  >
                    <Text style={[styles.viewMoreText, { color: category.color }]}>
                      {translations.viewMore[language]} ({category.data.length - endIdx} {translations.remaining[language]})
                    </Text>
                    <MaterialIcons 
                      name="keyboard-arrow-down" 
                      size={20} 
                      color={category.color} 
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          })}

          {/* Continue Button - Now inside ScrollView */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.continueButton,
                { 
                  backgroundColor: selectedInterests.length > 0 ? '#7e57c2' : '#ADB5BD',
                  opacity: isLoading ? 0.7 : 1
                }
              ]}
              onPress={handleContinue}
              disabled={selectedInterests.length === 0 || isLoading}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text style={styles.continueButtonText}>
                  {translations.continue[language]}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    zIndex: 10,
  },
  backButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  languageToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 6,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  languageLabel: {
    fontWeight: '600',
    fontSize: 14,
    color: '#495057',
  },
  toggleContainer: {
    width: 60,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E9ECEF',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  flag: {
    width: 18,
    height: 13,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  categoryContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 20,
    padding: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryIcon: {
    marginRight: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  interestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  interestItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  interestText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  selectedInterestText: {
    color: 'white',
    fontWeight: '500',
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 5,
  },
  viewMoreText: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  continueButton: {
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#7e57c2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});