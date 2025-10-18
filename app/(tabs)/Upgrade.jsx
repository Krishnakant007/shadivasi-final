// // app/(tabs)/Upgrade.jsx
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import React from 'react';
// import { Ionicons, MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function Upgrade() {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Welcome Offer Section */}
//         <View style={styles.welcomeSection}>
//           <View style={styles.giftIconContainer}>
//             <Ionicons name="gift" size={40} color="#FF6B6B" />
//           </View>
//           <Text style={styles.welcomeText}>Welcome Offer!</Text>
//           <Text style={styles.subTitle}>Guaranteed Marriage</Text>
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.cardScroll}
//           contentContainerStyle={styles.cardScrollContent}
//         >
//           {/* Gold Card */}
//           <View style={[styles.membershipCard, styles.goldCard]}>
//             <View style={styles.cardHeader}>
//               <Text style={styles.cardTitle}>Gold</Text>
//               <View style={styles.discountBadge}>
//                 <Text style={styles.discountText}>50% OFF</Text>
//               </View>
//             </View>
//             <View style={styles.priceContainer}>
//               <Text style={styles.originalPrice}>₹1000</Text>
//               <Text style={styles.discountedPrice}>₹500</Text>
//             </View>
//             <View style={styles.validityContainer}>
//               <Text style={styles.validityText}>Valid for 1 month</Text>
//             </View>
//             <View style={styles.featuresContainer}>
//               <View style={styles.featureItem}>
//                 <AntDesign name="checkcircle" size={16} color="#4CAF50" />
//                 <Text style={styles.featureText}>View 50 Contact Numbers</Text>
//               </View>
//               <View style={styles.featureItem}>
//                 <AntDesign name="checkcircle" size={16} color="#4CAF50" />
//                 <Text style={styles.featureText}>Send Unlimited Messages</Text>
//               </View>
//               <View style={styles.featureItem}>
//                 <AntDesign name="checkcircle" size={16} color="#4CAF50" />
//                 <Text style={styles.featureText}>View Verified Profiles with Photos</Text>
//               </View>
//             </View>
//             <TouchableOpacity style={styles.payButton}>
//               <Text style={styles.payButtonText}>Pay Now</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Prime Gold Card */}
//           <View style={[styles.membershipCard, styles.primeCard]}>
//             <View style={styles.cardHeader}>
//               <Text style={styles.cardTitle}>Prime Gold</Text>
//               <View style={styles.discountBadge}>
//                 <Text style={styles.discountText}>60% OFF</Text>
//               </View>
//             </View>
//             <View style={styles.priceContainer}>
//               <Text style={styles.originalPrice}>₹3000</Text>
//               <Text style={styles.discountedPrice}>₹1200</Text>
//             </View>
//             <View style={styles.validityContainer}>
//               <Text style={styles.validityText}>Valid for 3 months</Text>
//             </View>
//             <View style={styles.featuresContainer}>
//               <View style={styles.featureItem}>
//                 <AntDesign name="checkcircle" size={16} color="#4CAF50" />
//                 <Text style={styles.featureText}>View Unlimited Contact Numbers</Text>
//               </View>
//               <View style={styles.featureItem}>
//                 <AntDesign name="checkcircle" size={16} color="#4CAF50" />
//                 <Text style={styles.featureText}>Send Unlimited Messages</Text>
//               </View>
//               <View style={styles.featureItem}>
//                 <AntDesign name="checkcircle" size={16} color="#4CAF50" />
//                 <Text style={styles.featureText}>View Verified Profiles with Photos</Text>
//               </View>
//             </View>
//             <TouchableOpacity style={styles.payButton}>
//               <Text style={styles.payButtonText}>Pay Now</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>

//         {/* Bottom Options */}
//         <View style={styles.bottomOptions}>
//           <TouchableOpacity style={styles.skipButton}>
//             <Text style={styles.skipButtonText}>Skip</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
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
//     flexGrow: 1,
//     paddingBottom: 30,
//   },
//   welcomeSection: {
//     alignItems: 'center',
//     paddingVertical: 30,
//     paddingHorizontal: 20,
//   },
//   giftIconContainer: {
//     backgroundColor: '#FFF0F0',
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   subTitle: {
//     fontSize: 18,
//     color: '#555',
//   },
//   cardScroll: {
//     marginTop: 10,
//   },
//   cardScrollContent: {
//     paddingHorizontal: 20,
//     paddingBottom: 20,
//   },
//   membershipCard: {
//     width: 280,
//     borderRadius: 15,
//     padding: 20,
//     marginRight: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 3,
//   },
//   goldCard: {
//     backgroundColor: '#FFF8E1',
//     borderColor: '#FFD54F',
//     borderWidth: 1,
//   },
//   primeCard: {
//     backgroundColor: '#E3F2FD',
//     borderColor: '#64B5F6',
//     borderWidth: 1,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   cardTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   discountBadge: {
//     backgroundColor: '#FF6B6B',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 15,
//   },
//   discountText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 12,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 15,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   validityContainer: {
//     marginBottom: 20,
//   },
//   validityText: {
//     fontSize: 16,
//     color: '#666',
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   featureText: {
//     marginLeft: 8,
//     color: '#555',
//   },
//   payButton: {
//     backgroundColor: '#FF6B6B',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   bottomOptions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   skipButton: {
//     padding: 15,
//     width: '45%',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#FF6B6B',
//     borderRadius: 10,
//   },
//   skipButtonText: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 15,
//     width: '45%',
//     borderRadius: 10,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
// });






//23/08/2025
// app/(tabs)/Upgrade.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.75;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.8;
// const INACTIVE_CARD_WIDTH = width * 0.7;

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1); // Start with Gold plan as active

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 0 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(0)}
//           >
//             <View style={[styles.indicatorDot, styles.silverIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 0 && styles.planIndicatorTextActive]}>Silver</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 1 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(1)}
//           >
//             <View style={[styles.indicatorDot, styles.goldIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 1 && styles.planIndicatorTextActive]}>Gold</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 2 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(2)}
//           >
//             <View style={[styles.indicatorDot, styles.platinumIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 2 && styles.planIndicatorTextActive]}>Platinum</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//           >
//             {/* Silver Plan */}
//             <Animated.View style={[
//               styles.membershipCard,
//               styles.silverCard,
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(0) }],
//                 opacity: getCardOpacity(0)
//               }
//             ]}>
//               <View style={[styles.cardBadge, styles.silverBadge]}>
//                 <Text style={styles.cardBadgeText}>BASIC</Text>
//               </View>
//               <View style={styles.cardHeader}>
//                 <View>
//                   <Text style={styles.cardTitle}>Silver</Text>
//                   <Text style={styles.cardSubtitle}>Monthly Plan</Text>
//                 </View>
//                 <Ionicons name="medal-outline" size={32} color="#FF6B6B" />
//               </View>
              
//               <View style={styles.priceContainer}>
//                 <Text style={styles.originalPrice}>₹1000</Text>
//                 <Text style={styles.discountedPrice}>₹500</Text>
//                 <Text style={styles.perMonth}>/month</Text>
//               </View>
              
//               <View style={styles.featuresContainer}>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Unlimited profile browsing</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Send likes & view visitors</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>30 connections per day</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>View contact details</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Basic matchmaking filters</Text>
//                 </View>
//               </View>
              
//               <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                 <Text style={styles.payButtonText}>Choose Silver</Text>
//               </TouchableOpacity>
//             </Animated.View>

//             {/* Gold Plan - Recommended */}
//             <Animated.View style={[
//               styles.membershipCard,
//               styles.goldCard,
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(1) }],
//                 opacity: getCardOpacity(1)
//               }
//             ]}>
//               <View style={[styles.cardBadge, styles.recommendedBadge]}>
//                 <Ionicons name="star" size={14} color="#FFF" />
//                 <Text style={styles.cardBadgeText}>RECOMMENDED</Text>
//                 <Ionicons name="star" size={14} color="#FFF" />
//               </View>
//               <View style={styles.cardHeader}>
//                 <View>
//                   <Text style={styles.cardTitle}>Gold</Text>
//                   <Text style={styles.cardSubtitle}>Quarterly Plan</Text>
//                 </View>
//                 <Ionicons name="medal" size={32} color="#FF6B6B" />
//               </View>
              
//               <View style={styles.priceContainer}>
//                 <Text style={styles.originalPrice}>₹1500</Text>
//                 <Text style={styles.discountedPrice}>₹1200</Text>
//                 <Text style={styles.perMonth}>Save ₹300</Text>
//               </View>
              
//               <View style={styles.featuresContainer}>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Everything in Silver +</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Unlimited connections</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Priority visibility</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Advanced filters</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Verified profiles only</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Direct call/chat option</Text>
//                 </View>
//               </View>
              
//               <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                 <Text style={styles.payButtonText}>Choose Gold</Text>
//               </TouchableOpacity>
//             </Animated.View>

//             {/* Platinum Plan with Gradient Shine */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(2) }],
//                 opacity: getCardOpacity(2)
//               }
//             ]}>
//               <LinearGradient
//                 colors={['#ffffff', '#e5e4e2', '#b3b3b3', '#e5e4e2', '#ffffff']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.platinumGradientCard]}
//               >
//                 <View style={[styles.cardBadge, styles.premiumBadge]}>
//                   <Text style={styles.cardBadgeText}>PREMIUM</Text>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Platinum</Text>
//                     <Text style={styles.cardSubtitle}>Yearly Plan</Text>
//                   </View>
//                   <Ionicons name="diamond" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹6000</Text>
//                   <Text style={styles.discountedPrice}>₹3000</Text>
//                   <Text style={styles.perMonth}>Save ₹3000</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Everything in Gold +</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Top profile highlighting</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Personalized matchmaking</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Free invitation templates</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Community events access</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Premium user badge</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Platinum</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / 3
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 2 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === 2}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === 2 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Payment Options */}
//         <View style={styles.paymentOptions}>
//           <Text style={styles.paymentTitle}>Secure Payment Methods</Text>
//           <View style={styles.paymentIcons}>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="credit-card" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="google-wallet" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="paypal" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="bank" size={24} color="#555" />
//             </View>
//           </View>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="headset" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help Deciding?</Text>
//               <Text style={styles.supportText}>Our team is available 24/7 to assist you</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 580,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     marginRight: CARD_SPACING,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//   },
//   silverCard: {
//     backgroundColor: '#F5F7FA',
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//   },
//   goldCard: {
//     backgroundColor: '#FFF8E1',
//     borderColor: '#FFD700',
//     borderWidth: 2,
//   },
//   platinumGradientCard: {
//     borderColor: '#d9d9d9',
//     borderWidth: 1,
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadge: {
//     position: 'absolute',
//     top: -10,
//     alignSelf: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   paymentOptions: {
//     paddingHorizontal: 20,
//     marginBottom: 25,
//   },
//   paymentTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   paymentIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   paymentIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 16,
//     borderRadius: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });









// // app/(tabs)/Upgrade.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;
// const INACTIVE_CARD_WIDTH = width * 0.75;

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1); // Start with Gold plan as active

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1); // Scroll to Gold card (index 1)
//     }, 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 0 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(0)}
//           >
//             <View style={[styles.indicatorDot, styles.silverIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 0 && styles.planIndicatorTextActive]}>Silver</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 1 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(1)}
//           >
//             <View style={[styles.indicatorDot, styles.goldIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 1 && styles.planIndicatorTextActive]}>Gold</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 2 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(2)}
//           >
//             <View style={[styles.indicatorDot, styles.platinumIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 2 && styles.planIndicatorTextActive]}>Platinum</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1} // Start with Gold card
//           >
//             {/* Silver Plan */}
//             <Animated.View style={[
//               styles.membershipCard,
//               styles.silverCard,
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(0) }],
//                 opacity: getCardOpacity(0),
//                 marginRight: CARD_SPACING,
//               }
//             ]}>
//               <View style={[styles.cardBadge, styles.silverBadge]}>
//                 <Text style={styles.cardBadgeText}>BASIC</Text>
//               </View>
//               <View style={styles.cardHeader}>
//                 <View>
//                   <Text style={styles.cardTitle}>Silver</Text>
//                   <Text style={styles.cardSubtitle}>Monthly Plan</Text>
//                 </View>
//                 <Ionicons name="medal-outline" size={32} color="#FF6B6B" />
//               </View>
              
//               <View style={styles.priceContainer}>
//                 <Text style={styles.originalPrice}>₹1000</Text>
//                 <Text style={styles.discountedPrice}>₹500</Text>
//                 <Text style={styles.perMonth}>/month</Text>
//               </View>
              
//               <View style={styles.featuresContainer}>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Unlimited profile browsing</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Send likes & view visitors</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>30 connections per day</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>View contact details</Text>
//                 </View>
//                 <View style={styles.featureItem}>
//                   <Feather name="check" size={18} color="#4CAF50" />
//                   <Text style={styles.featureText}>Basic matchmaking filters</Text>
//                 </View>
//               </View>
              
//               <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                 <Text style={styles.payButtonText}>Choose Silver</Text>
//               </TouchableOpacity>
//             </Animated.View>

//             {/* Gold Plan - Recommended with Enhanced Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(1) }],
//                 opacity: getCardOpacity(1),
//                 marginRight: CARD_SPACING,
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#fff8dc', // soft highlight (ivory gold)
//                   '#fafad2', // light goldenrod yellow
//                   '#ffd700', // pure gold
//                   '#daa520', // goldenrod depth
//                   '#fff8dc'  // highlight again for shine
//                 ]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.goldGradientCard]}
//               >
//                 <View style={[styles.cardBadge, styles.recommendedBadge]}>
//                   <Ionicons name="star" size={14} color="#FFF" />
//                   <Text style={styles.cardBadgeText}>RECOMMENDED</Text>
//                   <Ionicons name="star" size={14} color="#FFF" />
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Gold</Text>
//                     <Text style={styles.cardSubtitle}>Quarterly Plan</Text>
//                   </View>
//                   <Ionicons name="medal" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹1500</Text>
//                   <Text style={styles.discountedPrice}>₹1200</Text>
//                   <Text style={styles.perMonth}>Save ₹300</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Everything in Silver +</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Unlimited connections</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Priority visibility</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Advanced filters</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Verified profiles only</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Direct call/chat option</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Gold</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>

//             {/* Platinum Plan with Premium Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(2) }],
//                 opacity: getCardOpacity(2),
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#E5E4E2', // platinum light
//                   '#F5F5F5', // bright white
//                   '#FFFFFF', // pure white
//                   '#F5F5F5', // bright white
//                   '#E5E4E2'  // platinum light again
//                 ]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.platinumGradientCard]}
//               >
//                 <View style={[styles.cardBadge, styles.premiumBadge]}>
//                   <Ionicons name="diamond" size={14} color="#FFF" />
//                   <Text style={styles.cardBadgeText}>PREMIUM</Text>
//                   <Ionicons name="diamond" size={14} color="#FFF" />
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={[styles.cardTitle, styles.platinumTitle]}>Platinum</Text>
//                     <Text style={styles.cardSubtitle}>Yearly Plan</Text>
//                   </View>
//                   <Ionicons name="diamond" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹6000</Text>
//                   <Text style={styles.discountedPrice}>₹3000</Text>
//                   <Text style={styles.perMonth}>Save ₹3000</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Everything in Gold +</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Top profile highlighting</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Personalized matchmaking</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Free invitation templates</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Community events access</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Premium user badge</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Platinum</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / 3
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 2 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === 2}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === 2 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Payment Options */}
//         <View style={styles.paymentOptions}>
//           <Text style={styles.paymentTitle}>Secure Payment Methods</Text>
//           <View style={styles.paymentIcons}>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="credit-card" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="google-wallet" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="paypal" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="bank" size={24} color="#555" />
//             </View>
//           </View>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="headset" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help Deciding?</Text>
//               <Text style={styles.supportText}>Our team is available 24/7 to assist you</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//   },
//   silverCard: {
//     backgroundColor: '#d8d8d8',
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//   },
//   goldGradientCard: {
//     borderRadius: 20,
//     padding: 25,
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//     minHeight: 550,
//   },
//   platinumGradientCard: {
//     borderRadius: 20,
//     padding: 25,
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//     minHeight: 550,
//   },
//   cardBadge: {
//     position: 'absolute',
//     top: -10,
//     alignSelf: 'center',
//     paddingHorizontal: 12,
//     paddingVertical: 5,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     zIndex: 10,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   paymentOptions: {
//     paddingHorizontal: 20,
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   paymentTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   paymentIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   paymentIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 8,
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 16,
//     borderRadius: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });









//24

// // app/(tabs)/Upgrade.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;
// const INACTIVE_CARD_WIDTH = width * 0.75;

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1); // Start with Gold plan as active

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1); // Scroll to Gold card (index 1)
//     }, 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 0 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(0)}
//           >
//             <View style={[styles.indicatorDot, styles.silverIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 0 && styles.planIndicatorTextActive]}>Silver</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 1 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(1)}
//           >
//             <View style={[styles.indicatorDot, styles.goldIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 1 && styles.planIndicatorTextActive]}>Gold</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 2 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(2)}
//           >
//             <View style={[styles.indicatorDot, styles.platinumIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 2 && styles.planIndicatorTextActive]}>Platinum</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1} // Start with Gold card
//           >
//             {/* Silver Plan with Silver Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(0) }],
//                 opacity: getCardOpacity(0),
//                 marginRight: CARD_SPACING,
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#a9a9a9', // center bright shine
//                   '#ffff', // platinum
//                   '#c0c0c0', // silver tone
//                   '#a9a9a9'  // darker edge
//                 ]}
//                 locations={[0, 0.4, 0.75, 1]}
//                 start={{ x: 0.5, y: 0.2 }} // center-ish
//                 end={{ x: 0.5, y: 1 }}     // downward fade
//                 style={[styles.membershipCard, styles.silverGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.silverBadge]}>
//                     <Text style={styles.cardBadgeText}>BASIC</Text>
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Silver</Text>
//                     <Text style={styles.cardSubtitle}>Monthly Plan</Text>
//                   </View>
//                   <Ionicons name="medal-outline" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹1000</Text>
//                   <Text style={styles.discountedPrice}>₹500</Text>
//                   <Text style={styles.perMonth}>/month</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Unlimited profile browsing</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Send likes & view visitors</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>30 connections per day</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>View contact details</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Basic matchmaking filters</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Silver</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>

//             {/* Gold Plan - Recommended with Enhanced Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(1) }],
//                 opacity: getCardOpacity(1),
//                 marginRight: CARD_SPACING,
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#fff8dc', // soft highlight (ivory gold)
//                   '#fafad2', // light goldenrod yellow
//                   '#ffd700', // pure gold
//                   '#daa520', // goldenrod depth
//                   '#fff8dc'  // highlight again for shine
//                 ]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.goldGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.recommendedBadge]}>
//                     <Ionicons name="star" size={14} color="#FFF" />
//                     <Text style={styles.cardBadgeText}>RECOMMENDED</Text>
//                     <Ionicons name="star" size={14} color="#FFF" />
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Gold</Text>
//                     <Text style={styles.cardSubtitle}>Quarterly Plan</Text>
//                   </View>
//                   <Ionicons name="medal" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹1500</Text>
//                   <Text style={styles.discountedPrice}>₹1200</Text>
//                   <Text style={styles.perMonth}>Save ₹300</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Everything in Silver +</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Unlimited connections</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Priority visibility</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Advanced filters</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Verified profiles only</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Direct call/chat option</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Gold</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>

//             {/* Platinum Plan with Premium Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(2) }],
//                 opacity: getCardOpacity(2),
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#E5E4E2', // platinum light
//                   '#F5F5F5', // bright white
//                   '#FFFFFF', // pure white
//                   '#F5F5F5', // bright white
//                   '#E5E4E2'  // platinum light again
//                 ]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.platinumGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.premiumBadge]}>
//                     <Ionicons name="diamond" size={14} color="#FFF" />
//                     <Text style={styles.cardBadgeText}>PREMIUM</Text>
//                     <Ionicons name="diamond" size={14} color="#FFF" />
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={[styles.cardTitle, styles.platinumTitle]}>Platinum</Text>
//                     <Text style={styles.cardSubtitle}>Yearly Plan</Text>
//                   </View>
//                   <Ionicons name="diamond" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹6000</Text>
//                   <Text style={styles.discountedPrice}>₹3000</Text>
//                   <Text style={styles.perMonth}>Save ₹3000</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Everything in Gold +</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Top profile highlighting</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Personalized matchmaking</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Free invitation templates</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Community events access</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Premium user badge</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Platinum</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / 3
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 2 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === 2}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === 2 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Payment Options */}
//         <View style={styles.paymentOptions}>
//           <Text style={styles.paymentTitle}>Secure Payment Methods</Text>
//           <View style={styles.paymentIcons}>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="credit-card" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="google-wallet" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="paypal" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="bank" size={24} color="#555" />
//             </View>
//           </View>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="headset" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help Deciding?</Text>
//               <Text style={styles.supportText}>Our team is available 24/7 to assist you</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 5,
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   paymentOptions: {
//     paddingHorizontal: 20,
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   paymentTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   paymentIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   paymentIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 8,
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 16,
//     borderRadius: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });









//25/09/2025
//app/(tabs)/Upgrade.jsx   original
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;
// const INACTIVE_CARD_WIDTH = width * 0.75;

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1); // Start with Gold plan as active

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1); // Scroll to Gold card (index 1)
//     }, 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 0 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(0)}
//           >
//             <View style={[styles.indicatorDot, styles.silverIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 0 && styles.planIndicatorTextActive]}>Silver</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 1 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(1)}
//           >
//             <View style={[styles.indicatorDot, styles.goldIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 1 && styles.planIndicatorTextActive]}>Gold</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 2 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(2)}
//           >
//             <View style={[styles.indicatorDot, styles.platinumIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 2 && styles.planIndicatorTextActive]}>Platinum</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1} // Start with Gold card
//           >
//             {/* Silver Plan with Silver Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(0) }],
//                 opacity: getCardOpacity(0),
//                 marginRight: CARD_SPACING,
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#a9a9a9', // center bright shine
//                   '#ffff', // platinum
//                   '#c0c0c0', // silver tone
//                   '#a9a9a9'  // darker edge
//                 ]}
//                 locations={[0, 0.4, 0.75, 1]}
//                 start={{ x: 0.5, y: 0.2 }} // center-ish
//                 end={{ x: 0.5, y: 1 }}     // downward fade
//                 style={[styles.membershipCard, styles.silverGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.silverBadge]}>
//                     <Text style={styles.cardBadgeText}>BASIC</Text>
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Silver</Text>
//                     <Text style={styles.cardSubtitle}>Monthly Plan</Text>
//                   </View>
//                   <Ionicons name="medal-outline" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹1000</Text>
//                   <Text style={styles.discountedPrice}>₹500</Text>
//                   <Text style={styles.perMonth}>/month</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Unlimited profile browsing</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Send likes & view visitors</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>30 connections per day</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>View contact details</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Basic matchmaking filters</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Silver</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>

//             {/* Gold Plan - Recommended with Enhanced Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(1) }],
//                 opacity: getCardOpacity(1),
//                 marginRight: CARD_SPACING,
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#fff8dc', // soft highlight (ivory gold)
//                   '#fafad2', // light goldenrod yellow
//                   '#ffd700', // pure gold
//                   '#daa520', // goldenrod depth
//                   '#fff8dc'  // highlight again for shine
//                 ]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.goldGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.recommendedBadge]}>
//                     <Ionicons name="star" size={14} color="#FFF" />
//                     <Text style={styles.cardBadgeText}>RECOMMENDED</Text>
//                     <Ionicons name="star" size={14} color="#FFF" />
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Gold</Text>
//                     <Text style={styles.cardSubtitle}>Quarterly Plan</Text>
//                   </View>
//                   <Ionicons name="medal" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹1500</Text>
//                   <Text style={styles.discountedPrice}>₹1200</Text>
//                   <Text style={styles.perMonth}>Save ₹300</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Everything in Silver +</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Unlimited connections</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Priority visibility</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Advanced filters</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Verified profiles only</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Direct call/chat option</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Gold</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>

//             {/* Platinum Plan with Premium Gradient */}
//             <Animated.View style={[
//               {
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(2) }],
//                 opacity: getCardOpacity(2),
//               }
//             ]}>
//               <LinearGradient
//                 colors={[
//                   '#E5E4E2', // platinum light
//                   '#F5F5F5', // bright white
//                   '#FFFFFF', // pure white
//                   '#F5F5F5', // bright white
//                   '#E5E4E2'  // platinum light again
//                 ]}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.platinumGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.premiumBadge]}>
//                     <Ionicons name="diamond" size={14} color="#FFF" />
//                     <Text style={styles.cardBadgeText}>PREMIUM</Text>
//                     <Ionicons name="diamond" size={14} color="#FFF" />
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={[styles.cardTitle, styles.platinumTitle]}>Platinum</Text>
//                     <Text style={styles.cardSubtitle}>Yearly Plan</Text>
//                   </View>
//                   <Ionicons name="diamond" size={32} color="#FF6B6B" />
//                 </View>
                
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹6000</Text>
//                   <Text style={styles.discountedPrice}>₹3000</Text>
//                   <Text style={styles.perMonth}>Save ₹3000</Text>
//                 </View>
                
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Everything in Gold +</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Top profile highlighting</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Personalized matchmaking</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Free invitation templates</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Community events access</Text>
//                   </View>
//                   <View style={styles.featureItem}>
//                     <Feather name="check" size={18} color="#4CAF50" />
//                     <Text style={styles.featureText}>Premium user badge</Text>
//                   </View>
//                 </View>
                
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
//                   <Text style={styles.payButtonText}>Choose Platinum</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / 3
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 2 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === 2}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === 2 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Payment Options */}
//         <View style={styles.paymentOptions}>
//           <Text style={styles.paymentTitle}>Secure Payment Methods</Text>
//           <View style={styles.paymentIcons}>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="credit-card" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="google-wallet" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="paypal" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="bank" size={24} color="#555" />
//             </View>
//           </View>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="headset" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help Deciding?</Text>
//               <Text style={styles.supportText}>Our team is available 24/7 to assist you</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Bottom padding to avoid tab bar overlap */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30, // Added padding for tab bar
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 5,
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   paymentOptions: {
//     paddingHorizontal: 20,
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   paymentTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   paymentIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   paymentIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 8,
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 16,
//     borderRadius: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   bottomPadding: {
//     height: 70, // Added bottom padding for tab bar
//   },
// });







//04/10/2025
// app/(tabs)/Upgrade.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import RazorpayCheckout from 'react-native-razorpay';
// import { useAuth } from '../hooks/useAuth';
// import { useFirestore } from '../hooks/useFirebase';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;
// const INACTIVE_CARD_WIDTH = width * 0.75;

// // Test Razorpay key (replace with your actual test key)
// const RAZORPAY_TEST_KEY = 'rzp_test_YourTestKeyHere'; // Get from Razorpay dashboard

// const PLANS = [
//   {
//     id: 'silver',
//     name: 'Silver',
//     badge: 'BASIC',
//     badgeStyle: 'silverBadge',
//     period: 'Monthly Plan',
//     originalPrice: 1000,
//     discountedPrice: 500,
//     periodText: '/month',
//     features: [
//       'Unlimited profile browsing',
//       'Send likes & view visitors',
//       '30 connections per day',
//       'View contact details',
//       'Basic matchmaking filters'
//     ],
//     duration: 30 // days
//   },
//   {
//     id: 'gold',
//     name: 'Gold',
//     badge: 'RECOMMENDED',
//     badgeStyle: 'recommendedBadge',
//     period: 'Quarterly Plan',
//     originalPrice: 1500,
//     discountedPrice: 1200,
//     periodText: 'Save ₹300',
//     features: [
//       'Everything in Silver +',
//       'Unlimited connections',
//       'Priority visibility',
//       'Advanced filters',
//       'Verified profiles only',
//       'Direct call/chat option'
//     ],
//     duration: 90, // days
//     recommended: true
//   },
//   {
//     id: 'platinum',
//     name: 'Platinum',
//     badge: 'PREMIUM',
//     badgeStyle: 'premiumBadge',
//     period: 'Yearly Plan',
//     originalPrice: 6000,
//     discountedPrice: 3000,
//     periodText: 'Save ₹3000',
//     features: [
//       'Everything in Gold +',
//       'Top profile highlighting',
//       'Personalized matchmaking',
//       'Free invitation templates',
//       'Community events access',
//       'Premium user badge'
//     ],
//     duration: 365 // days
//   }
// ];

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [processingPayment, setProcessingPayment] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const { user } = useAuth();
//   const { userData, updateUserProfile } = useFirestore();

//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1);
//     }, 100);
//   }, []);

//   // Test payment function for eCommerce
//   const handleTestPayment = async (plan) => {
//     if (!user) {
//       Alert.alert('Login Required', 'Please login to upgrade your account');
//       return;
//     }

//     setProcessingPayment(true);
    
//     try {
//       // Generate test receipt
//       const receiptId = `receipt_${Date.now()}_${user.id.substring(0, 8)}`;
      
//       const options = {
//         description: `Shaadivasi ${plan.name} Plan - TEST`,
//         image: 'https://cdn.razorpay.com/logo.png', // Razorpay logo for testing
//         currency: 'INR',
//         key: RAZORPAY_TEST_KEY, // Your test key
//         amount: plan.discountedPrice * 100, // Amount in paise
//         name: 'Shaadivasi Matrimony',
//         prefill: {
//           email: user.primaryEmailAddress?.emailAddress || user.emailAddresses?.[0]?.emailAddress || 'test@example.com',
//           contact: userData?.phoneNumber || '9999999999',
//           name: `${userData?.firstName || 'Test'} ${userData?.lastName || 'User'}`.trim()
//         },
//         theme: { color: '#FF6B6B' },
//         notes: {
//           plan: plan.id,
//           userId: user.id,
//           planName: plan.name,
//           test: 'true'
//         },
//         receipt: receiptId
//       };

//       console.log('Starting Razorpay payment with options:', options);

//       RazorpayCheckout.open(options)
//         .then(async (data) => {
//           console.log('✅ Payment Success Data:', data);
          
//           // For testing - simulate successful subscription
//           const endDate = new Date();
//           endDate.setDate(endDate.getDate() + plan.duration);
          
//           await updateUserProfile({
//             subscription: {
//               plan: plan.id,
//               planName: plan.name,
//               status: 'active',
//               startDate: new Date().toISOString(),
//               endDate: endDate.toISOString(),
//               transactionId: data.razorpay_payment_id,
//               amount: plan.discountedPrice,
//               isRecurring: false, // Manual renewal for eCommerce
//               lastRenewal: new Date().toISOString()
//             },
//             isPremium: true,
//             premiumSince: new Date().toISOString()
//           });
          
//           setPaymentSuccess(true);
//           Alert.alert(
//             '🎉 Upgrade Successful!',
//             `Your ${plan.name} plan has been activated. Enjoy premium features!`,
//             [{ text: 'Continue', onPress: () => console.log('Continue pressed') }]
//           );
//         })
//         .catch((error) => {
//           console.log('❌ Payment Error:', error);
          
//           if (error.code !== 0) { // Not user cancellation
//             if (error.error.code === 404) {
//               Alert.alert(
//                 'Test Mode Required',
//                 'Please use Razorpay test credentials. Check console for setup instructions.'
//               );
//             } else {
//               Alert.alert(
//                 'Payment Failed',
//                 error.error.description || 'Payment could not be processed. Please try again.'
//               );
//             }
//           }
//         })
//         .finally(() => {
//           setProcessingPayment(false);
//         });
        
//     } catch (error) {
//       console.log('🔥 Payment Setup Error:', error);
//       Alert.alert('Error', 'Failed to initialize payment. Please try again.');
//       setProcessingPayment(false);
//     }
//   };

//   // Calculate end date for display
//   const calculateEndDate = (planId) => {
//     const plan = PLANS.find(p => p.id === planId);
//     const endDate = new Date();
//     endDate.setDate(endDate.getDate() + plan.duration);
//     return endDate.toLocaleDateString();
//   };

//   // Success screen
//   if (paymentSuccess && userData?.subscription) {
//     const currentPlan = PLANS.find(p => p.id === userData.subscription.plan);
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.successContainer}>
//           <View style={styles.successIcon}>
//             <Ionicons name="checkmark-circle" size={80} color="#4CAF50" />
//           </View>
//           <Text style={styles.successTitle}>Welcome to Premium! 🎉</Text>
//           <Text style={styles.successMessage}>
//             Your {currentPlan?.name} plan is now active. You have access to all premium features.
//           </Text>
          
//           <View style={styles.successDetails}>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Plan:</Text>
//               <Text style={styles.detailValue}>{currentPlan?.name}</Text>
//             </View>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Amount Paid:</Text>
//               <Text style={styles.detailValue}>₹{currentPlan?.discountedPrice}</Text>
//             </View>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Valid Until:</Text>
//               <Text style={styles.detailValue}>
//                 {calculateEndDate(userData.subscription.plan)}
//               </Text>
//             </View>
//             <View style={styles.detailRow}>
//               <Text style={styles.detailLabel}>Status:</Text>
//               <Text style={[styles.detailValue, styles.activeStatus]}>Active</Text>
//             </View>
//           </View>
          
//           <View style={styles.premiumFeatures}>
//             <Text style={styles.featuresTitle}>🎁 Premium Benefits:</Text>
//             {currentPlan?.features.map((feature, index) => (
//               <View key={index} style={styles.premiumFeatureItem}>
//                 <Ionicons name="sparkles" size={16} color="#FF6B6B" />
//                 <Text style={styles.premiumFeatureText}>{feature}</Text>
//               </View>
//             ))}
//           </View>
          
//           <TouchableOpacity
//             style={styles.continueButton}
//             onPress={() => setPaymentSuccess(false)}
//           >
//             <Text style={styles.continueButtonText}>Start Exploring</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
          
//           {/* Test Mode Banner */}
//           <View style={styles.testBanner}>
//             <Ionicons name="flash" size={16} color="#FFF" />
//             <Text style={styles.testBannerText}>TEST MODE - Use Razorpay Test Cards</Text>
//           </View>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           {PLANS.map((plan, index) => (
//             <TouchableOpacity
//               key={plan.id}
//               style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]}
//               onPress={() => scrollToPlan(index)}
//             >
//               <View style={[styles.indicatorDot, styles[`${plan.id}Indicator`]]} />
//               <Text style={[styles.planIndicatorText, activeIndex === index && styles.planIndicatorTextActive]}>
//                 {plan.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Membership Cards */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1}
//           >
//             {PLANS.map((plan, index) => (
//               <Animated.View
//                 key={plan.id}
//                 style={[
//                   {
//                     width: ACTIVE_CARD_WIDTH,
//                     transform: [{ scale: getCardScale(index) }],
//                     opacity: getCardOpacity(index),
//                     marginRight: CARD_SPACING,
//                   }
//                 ]}
//               >
//                 <LinearGradient
//                   colors={getGradientColors(plan.id)}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 1 }}
//                   style={[styles.membershipCard, styles[`${plan.id}GradientCard`]]}
//                 >
//                   <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                     <View style={[styles.cardBadge, styles[plan.badgeStyle]]}>
//                       {plan.badge === 'RECOMMENDED' || plan.badge === 'PREMIUM' ? (
//                         <>
//                           <Ionicons
//                             name={plan.badge === 'RECOMMENDED' ? "star" : "diamond"}
//                             size={14}
//                             color="#FFF"
//                           />
//                           <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//                           <Ionicons
//                             name={plan.badge === 'RECOMMENDED' ? "star" : "diamond"}
//                             size={14}
//                             color="#FFF"
//                           />
//                         </>
//                       ) : (
//                         <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//                       )}
//                     </View>
//                   </View>
                  
//                   <View style={styles.cardHeader}>
//                     <View>
//                       <Text style={[
//                         styles.cardTitle,
//                         plan.id === 'platinum' && styles.platinumTitle
//                       ]}>
//                         {plan.name}
//                       </Text>
//                       <Text style={styles.cardSubtitle}>{plan.period}</Text>
//                       <Text style={styles.validityText}>
//                         Valid for {plan.duration} days
//                       </Text>
//                     </View>
//                     <Ionicons
//                       name={plan.id === 'platinum' ? "diamond" : plan.id === 'gold' ? "medal" : "medal-outline"}
//                       size={32}
//                       color="#FF6B6B"
//                     />
//                   </View>
                  
//                   <View style={styles.priceContainer}>
//                     <Text style={styles.originalPrice}>₹{plan.originalPrice}</Text>
//                     <Text style={styles.discountedPrice}>₹{plan.discountedPrice}</Text>
//                     <Text style={styles.perMonth}>{plan.periodText}</Text>
//                   </View>
                  
//                   <View style={styles.featuresContainer}>
//                     {plan.features.map((feature, i) => (
//                       <View key={i} style={styles.featureItem}>
//                         <Feather name="check" size={18} color="#4CAF50" />
//                         <Text style={styles.featureText}>{feature}</Text>
//                       </View>
//                     ))}
//                   </View>
                  
//                   <TouchableOpacity
//                     style={[
//                       styles.payButton,
//                       styles.primaryButton,
//                       processingPayment && styles.disabledButton
//                     ]}
//                     onPress={() => handleTestPayment(plan)}
//                     disabled={processingPayment}
//                   >
//                     {processingPayment && activeIndex === index ? (
//                       <View style={styles.loadingContainer}>
//                         <Ionicons name="refresh" size={20} color="#FFF" style={styles.spinning} />
//                         <Text style={styles.payButtonText}>Processing...</Text>
//                       </View>
//                     ) : (
//                       <Text style={styles.payButtonText}>
//                         {userData?.isPremium ? 'Manage Plan' : `Choose ${plan.name}`}
//                       </Text>
//                     )}
//                   </TouchableOpacity>
                  
//                   {/* Test Card Info */}
//                   <View style={styles.testInfo}>
//                     <Text style={styles.testInfoText}>
//                       💳 Test Card: 4111 1111 1111 1111
//                     </Text>
//                     <Text style={styles.testInfoText}>
//                       📅 Any future date | 🔒 Any CVV
//                     </Text>
//                   </View>
//                 </LinearGradient>
//               </Animated.View>
//             ))}
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / {PLANS.length}
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === PLANS.length - 1 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === PLANS.length - 1}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === PLANS.length - 1 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Test Instructions */}
//         <View style={styles.instructions}>
//           <Text style={styles.instructionsTitle}>🧪 Testing Instructions</Text>
//           <View style={styles.instructionItem}>
//             <Text style={styles.instructionText}>1. Use Razorpay test key in code</Text>
//             <Text style={styles.instructionText}>2. Card: 4111 1111 1111 1111</Text>
//             <Text style={styles.instructionText}>3. Expiry: Any future date</Text>
//             <Text style={styles.instructionText}>4. CVV: Any 3 digits</Text>
//           </View>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="help-circle" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help Testing?</Text>
//               <Text style={styles.supportText}>Contact us for testing assistance</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const getGradientColors = (planId) => {
//   switch (planId) {
//     case 'silver':
//       return ['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9'];
//     case 'gold':
//       return ['#fff8dc', '#fafad2', '#ffd700', '#daa520', '#fff8dc'];
//     case 'platinum':
//       return ['#E5E4E2', '#F5F5F5', '#FFFFFF', '#F5F5F5', '#E5E4E2'];
//     default:
//       return ['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9'];
//   }
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   testBanner: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FF6B6B',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginTop: 5,
//   },
//   testBannerText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginLeft: 5,
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 650,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 580,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   validityText: {
//     fontSize: 12,
//     color: '#888',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 20,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   disabledButton: {
//     backgroundColor: '#CCC',
//   },
//   loadingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   spinning: {
//     marginRight: 8,
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   testInfo: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//     padding: 10,
//     borderRadius: 8,
//     borderLeftWidth: 3,
//     borderLeftColor: '#FF6B6B',
//   },
//   testInfoText: {
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 2,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   instructions: {
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   instructionsTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   instructionItem: {
//     backgroundColor: '#F8F9FA',
//     padding: 15,
//     borderRadius: 10,
//     borderLeftWidth: 4,
//     borderLeftColor: '#FF6B6B',
//   },
//   instructionText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   // Success screen styles
//   successContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   successIcon: {
//     marginBottom: 20,
//   },
//   successTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   successMessage: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginBottom: 30,
//     lineHeight: 24,
//   },
//   successDetails: {
//     width: '100%',
//     backgroundColor: '#F9F9F9',
//     borderRadius: 12,
//     padding: 20,
//     marginBottom: 25,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   detailLabel: {
//     fontSize: 16,
//     color: '#666',
//     fontWeight: '500',
//   },
//   detailValue: {
//     fontSize: 16,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   activeStatus: {
//     color: '#4CAF50',
//   },
//   premiumFeatures: {
//     width: '100%',
//     marginBottom: 30,
//   },
//   featuresTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   premiumFeatureItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   premiumFeatureText: {
//     marginLeft: 10,
//     color: '#555',
//     fontSize: 14,
//     flex: 1,
//   },
//   continueButton: {
//     backgroundColor: '#FF6B6B',
//     paddingVertical: 16,
//     paddingHorizontal: 40,
//     borderRadius: 12,
//     width: '100%',
//     alignItems: 'center',
//   },
//   continueButtonText: {
//     color: '#FFF',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


//10/10/2025
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import RazorpayCheckout from 'react-native-razorpay';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;

// // Your Razorpay test key
// const RAZORPAY_KEY_ID = 'rzp_test_RP9jVzAyEEN7Xr';

// // Plans data
// const SubscriptionPlans = [
//   {
//     id: 'silver',
//     name: 'Silver',
//     badge: 'BASIC',
//     badgeStyle: 'silverBadge',
//     icon: 'medal-outline',
//     originalPrice: 1000,
//     discountedPrice: 500,
//     duration: 'Monthly Plan',
//     savings: '',
//     features: [
//       'Unlimited profile browsing',
//       'Send likes & view visitors',
//       '30 connections per day',
//       'View contact details',
//       'Basic matchmaking filters'
//     ],
//     gradient: ['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9']
//   },
//   {
//     id: 'gold',
//     name: 'Gold',
//     badge: 'RECOMMENDED',
//     badgeStyle: 'recommendedBadge',
//     icon: 'medal',
//     originalPrice: 1500,
//     discountedPrice: 1200,
//     duration: 'Quarterly Plan',
//     savings: 'Save ₹300',
//     features: [
//       'Everything in Silver +',
//       'Unlimited connections',
//       'Priority visibility',
//       'Advanced filters',
//       'Verified profiles only',
//       'Direct call/chat option'
//     ],
//     gradient: ['#fff8dc', '#fafad2', '#ffd700', '#daa520', '#fff8dc']
//   },
//   {
//     id: 'platinum',
//     name: 'Platinum',
//     badge: 'PREMIUM',
//     badgeStyle: 'premiumBadge',
//     icon: 'diamond',
//     originalPrice: 6000,
//     discountedPrice: 3000,
//     duration: 'Yearly Plan',
//     savings: 'Save ₹3000',
//     features: [
//       'Everything in Gold +',
//       'Top profile highlighting',
//       'Personalized matchmaking',
//       'Free invitation templates',
//       'Community events access',
//       'Premium user badge'
//     ],
//     gradient: ['#E5E4E2', '#F5F5F5', '#FFFFFF', '#F5F5F5', '#E5E4E2']
//   }
// ];

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Generate order ID (in production, this should come from your backend)
//   const generateOrderId = () => {
//     return 'order_' + Math.random().toString(36).substr(2, 9);
//   };

//   // Handle Razorpay payment
//   const handlePayment = async (plan) => {
//     if (loading) return;
    
//     setLoading(true);
    
//     try {
//       // Create order details
//       const orderId = generateOrderId();
//       const amount = plan.discountedPrice * 100; // Convert to paise

//       // Razorpay checkout options
//       const options = {
//         description: `Shaadivasi ${plan.name} Plan Subscription`,
//         image: 'https://i.imgur.com/3g7nmJC.jpg', // Your app logo
//         currency: 'INR',
//         key: RAZORPAY_KEY_ID,
//         amount: amount.toString(),
//         name: 'Shaadivasi',
//         order_id: orderId,
//         prefill: {
//           email: 'user@example.com', // You can get from user profile
//           contact: '919876543210',   // You can get from user profile
//           name: 'Test User'          // You can get from user profile
//         },
//         theme: {
//           color: '#FF6B6B',
//           backdrop_color: '#FFFFFF'
//         },
//         notes: {
//           plan: plan.name,
//           duration: plan.duration,
//           type: 'subscription'
//         },
//         config: {
//           display: {
//             language: 'en',
//             show_notes: true
//           }
//         }
//       };

//       console.log('Opening Razorpay with options:', options);

//       // Open Razorpay checkout - THIS WILL SHOW ALL PAYMENT OPTIONS
//       const data = await RazorpayCheckout.open(options);
      
//       // Payment successful
//       console.log('Payment Success:', data);
      
//       Alert.alert(
//         '🎉 Payment Successful!',
//         `Your ${plan.name} plan has been activated!\n\n` +
//         `Payment ID: ${data.razorpay_payment_id}\n` +
//         `Order ID: ${data.razorpay_order_id}\n` +
//         `Amount: ₹${plan.discountedPrice}\n\n` +
//         `You now have access to all premium features!`,
//         [
//           {
//             text: 'Continue',
//             onPress: () => {
//               console.log('Subscription activated:', plan.name);
//               // Here you would update user subscription in your backend
//             }
//           }
//         ]
//       );
      
//     } catch (error) {
//       // Payment failed or user cancelled
//       console.log('Payment Error:', error);
      
//       if (error.code !== 0) { // 0 means user closed the checkout
//         Alert.alert(
//           'Payment Failed',
//           error.description || 'Something went wrong with the payment. Please try again.',
//           [{ text: 'OK' }]
//         );
//       } else {
//         // User closed the payment gateway
//         console.log('User closed payment gateway');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Render plan card
//   const renderPlanCard = (plan, index) => {
//     const isGold = index === 1;
//     const isPlatinum = index === 2;
    
//     return (
//       <Animated.View
//         key={index}
//         style={[
//           {
//             width: ACTIVE_CARD_WIDTH,
//             transform: [{ scale: getCardScale(index) }],
//             opacity: getCardOpacity(index),
//             marginRight: CARD_SPACING,
//           }
//         ]}
//       >
//         <LinearGradient
//           colors={plan.gradient}
//           locations={isGold || isPlatinum ? [0, 0.2, 0.5, 0.8, 1] : [0, 0.4, 0.75, 1]}
//           start={{ x: 0.5, y: 0.2 }}
//           end={{ x: 0.5, y: 1 }}
//           style={[
//             styles.membershipCard,
//             isGold ? styles.goldGradientCard :
//             isPlatinum ? styles.platinumGradientCard : styles.silverGradientCard
//           ]}
//         >
//           <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//             <View style={[styles.cardBadge, styles[plan.badgeStyle]]}>
//               {isGold || isPlatinum ? (
//                 <>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                   <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                 </>
//               ) : (
//                 <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//               )}
//             </View>
//           </View>
          
//           <View style={styles.cardHeader}>
//             <View>
//               <Text style={[
//                 styles.cardTitle,
//                 isPlatinum && styles.platinumTitle
//               ]}>{plan.name}</Text>
//               <Text style={styles.cardSubtitle}>{plan.duration}</Text>
//             </View>
//             <Ionicons name={plan.icon} size={32} color="#FF6B6B" />
//           </View>
          
//           <View style={styles.priceContainer}>
//             <Text style={styles.originalPrice}>₹{plan.originalPrice}</Text>
//             <Text style={styles.discountedPrice}>₹{plan.discountedPrice}</Text>
//             {plan.savings ? (
//               <Text style={styles.perMonth}>{plan.savings}</Text>
//             ) : (
//               <Text style={styles.perMonth}>/month</Text>
//             )}
//           </View>
          
//           <View style={styles.featuresContainer}>
//             {plan.features.map((feature, featureIndex) => (
//               <View key={featureIndex} style={styles.featureItem}>
//                 <Feather name="check" size={18} color="#4CAF50" />
//                 <Text style={styles.featureText}>{feature}</Text>
//               </View>
//             ))}
//           </View>
          
//           <TouchableOpacity
//             style={[
//               styles.payButton,
//               styles.primaryButton,
//               loading && styles.disabledButton
//             ]}
//             onPress={() => handlePayment(plan)}
//             disabled={loading}
//           >
//             <Text style={styles.payButtonText}>
//               {loading ? 'Opening Payment...' : `Choose ${plan.name}`}
//             </Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1);
//     }, 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//           <View style={styles.liveBadge}>
//             <Ionicons name="flash" size={14} color="#FFF" />
//             <Text style={styles.liveBadgeText}>LIVE PAYMENTS</Text>
//             <Ionicons name="flash" size={14} color="#FFF" />
//           </View>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           {SubscriptionPlans.map((plan, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]}
//               onPress={() => scrollToPlan(index)}
//             >
//               <View style={[
//                 styles.indicatorDot,
//                 index === 0 ? styles.silverIndicator :
//                 index === 1 ? styles.goldIndicator : styles.platinumIndicator
//               ]} />
//               <Text style={[
//                 styles.planIndicatorText,
//                 activeIndex === index && styles.planIndicatorTextActive
//               ]}>
//                 {plan.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1}
//           >
//             {SubscriptionPlans.map((plan, index) => renderPlanCard(plan, index))}
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / {SubscriptionPlans.length}
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === SubscriptionPlans.length - 1 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === SubscriptionPlans.length - 1}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === SubscriptionPlans.length - 1 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Payment Info */}
//         <View style={styles.paymentInfo}>
//           <Ionicons name="shield-checkmark" size={20} color="#4CAF50" />
//           <Text style={styles.paymentInfoText}>
//             Secure payments powered by Razorpay • All payment methods accepted
//           </Text>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="headset" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help?</Text>
//               <Text style={styles.supportText}>Our support team is here to help you 24/7</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Bottom padding to avoid tab bar overlap */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   liveBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     paddingHorizontal: 15,
//     paddingVertical: 5,
//     borderRadius: 15,
//   },
//   liveBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 5,
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 5,
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   disabledButton: {
//     backgroundColor: '#CCCCCC',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   paymentInfo: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#F0F9FF',
//     padding: 12,
//     borderRadius: 10,
//     marginHorizontal: 20,
//   },
//   paymentInfoText: {
//     marginLeft: 8,
//     color: '#1E40AF',
//     fontSize: 13,
//     fontWeight: '500',
//     textAlign: 'center',
//     flex: 1,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 16,
//     borderRadius: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   bottomPadding: {
//     height: 70,
//   },
// });


//11/10/2025
//app/(tabs)/upgrade.js

// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import RazorpayCheckout from 'react-native-razorpay';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;

// // Your Razorpay test key
// const RAZORPAY_KEY_ID = 'rzp_test_RP9jVzAyEEN7Xr';

// // Plans data
// const SubscriptionPlans = [
//   {
//     id: 'silver',
//     name: 'Silver',
//     badge: 'BASIC',
//     badgeStyle: 'silverBadge',
//     icon: 'medal-outline',
//     originalPrice: 1000,
//     discountedPrice: 500,
//     duration: 'Monthly Plan',
//     savings: '',
//     features: [
//       'Unlimited profile browsing',
//       'Send likes & view visitors',
//       '30 connections per day',
//       'View contact details',
//       'Basic matchmaking filters'
//     ],
//     gradient: ['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9']
//   },
//   {
//     id: 'gold',
//     name: 'Gold',
//     badge: 'RECOMMENDED',
//     badgeStyle: 'recommendedBadge',
//     icon: 'medal',
//     originalPrice: 1500,
//     discountedPrice: 1200,
//     duration: 'Quarterly Plan',
//     savings: 'Save ₹300',
//     features: [
//       'Everything in Silver +',
//       'Unlimited connections',
//       'Priority visibility',
//       'Advanced filters',
//       'Verified profiles only',
//       'Direct call/chat option'
//     ],
//     gradient: ['#fff8dc', '#fafad2', '#ffd700', '#daa520', '#fff8dc']
//   },
//   {
//     id: 'platinum',
//     name: 'Platinum',
//     badge: 'PREMIUM',
//     badgeStyle: 'premiumBadge',
//     icon: 'diamond',
//     originalPrice: 6000,
//     discountedPrice: 3000,
//     duration: 'Yearly Plan',
//     savings: 'Save ₹3000',
//     features: [
//       'Everything in Gold +',
//       'Top profile highlighting',
//       'Personalized matchmaking',
//       'Free invitation templates',
//       'Community events access',
//       'Premium user badge'
//     ],
//     gradient: ['#E5E4E2', '#F5F5F5', '#FFFFFF', '#F5F5F5', '#E5E4E2']
//   }
// ];

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Generate order ID (in production, this should come from your backend)
//   const generateOrderId = () => {
//     return 'order_' + Math.random().toString(36).substr(2, 9);
//   };

//   // Handle Razorpay payment
//   const handlePayment = async (plan) => {
//     if (loading) return;
    
//     setLoading(true);
    
//     try {
//       // Create order details
//       const orderId = generateOrderId();
//       const amount = plan.discountedPrice * 100; // Convert to paise

//       // Razorpay checkout options
//       const options = {
//         description: `Shaadivasi ${plan.name} Plan Subscription`,
//         image: 'https://i.imgur.com/3g7nmJC.jpg', // Your app logo
//         currency: 'INR',
//         key: RAZORPAY_KEY_ID,
//         amount: amount.toString(),
//         name: 'Shaadivasi',
//         order_id: orderId,
//         prefill: {
//           email: 'user@example.com', // You can get from user profile
//           contact: '919876543210',   // You can get from user profile
//           name: 'Test User'          // You can get from user profile
//         },
//         theme: {
//           color: '#FF6B6B',
//           backdrop_color: '#FFFFFF'
//         },
//         notes: {
//           plan: plan.name,
//           duration: plan.duration,
//           type: 'subscription'
//         },
//         config: {
//           display: {
//             language: 'en',
//             show_notes: true
//           }
//         }
//       };

//       console.log('Opening Razorpay with options:', options);

//       // Open Razorpay checkout - THIS WILL SHOW ALL PAYMENT OPTIONS
//       const data = await RazorpayCheckout.open(options);
      
//       // Payment successful
//       console.log('Payment Success:', data);
      
//       Alert.alert(
//         '🎉 Payment Successful!',
//         `Your ${plan.name} plan has been activated!\n\n` +
//         `Payment ID: ${data.razorpay_payment_id}\n` +
//         `Order ID: ${data.razorpay_order_id}\n` +
//         `Amount: ₹${plan.discountedPrice}\n\n` +
//         `You now have access to all premium features!`,
//         [
//           {
//             text: 'Continue',
//             onPress: () => {
//               console.log('Subscription activated:', plan.name);
//               // Here you would update user subscription in your backend
//             }
//           }
//         ]
//       );
      
//     } catch (error) {
//       // Payment failed or user cancelled
//       console.log('Payment Error:', error);
      
//       if (error.code !== 0) { // 0 means user closed the checkout
//         Alert.alert(
//           'Payment Failed',
//           error.description || 'Something went wrong with the payment. Please try again.',
//           [{ text: 'OK' }]
//         );
//       } else {
//         // User closed the payment gateway
//         console.log('User closed payment gateway');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Render plan card
//   const renderPlanCard = (plan, index) => {
//     const isGold = index === 1;
//     const isPlatinum = index === 2;
    
//     return (
//       <Animated.View
//         key={index}
//         style={[
//           {
//             width: ACTIVE_CARD_WIDTH,
//             transform: [{ scale: getCardScale(index) }],
//             opacity: getCardOpacity(index),
//             marginRight: CARD_SPACING,
//           }
//         ]}
//       >
//         <LinearGradient
//           colors={plan.gradient}
//           locations={isGold || isPlatinum ? [0, 0.2, 0.5, 0.8, 1] : [0, 0.4, 0.75, 1]}
//           start={{ x: 0.5, y: 0.2 }}
//           end={{ x: 0.5, y: 1 }}
//           style={[
//             styles.membershipCard,
//             isGold ? styles.goldGradientCard :
//             isPlatinum ? styles.platinumGradientCard : styles.silverGradientCard
//           ]}
//         >
//           <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//             <View style={[styles.cardBadge, styles[plan.badgeStyle]]}>
//               {isGold || isPlatinum ? (
//                 <>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                   <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                 </>
//               ) : (
//                 <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//               )}
//             </View>
//           </View>
          
//           <View style={styles.cardHeader}>
//             <View>
//               <Text style={[
//                 styles.cardTitle,
//                 isPlatinum && styles.platinumTitle
//               ]}>{plan.name}</Text>
//               <Text style={styles.cardSubtitle}>{plan.duration}</Text>
//             </View>
//             <Ionicons name={plan.icon} size={32} color="#FF6B6B" />
//           </View>
          
//           <View style={styles.priceContainer}>
//             <Text style={styles.originalPrice}>₹{plan.originalPrice}</Text>
//             <Text style={styles.discountedPrice}>₹{plan.discountedPrice}</Text>
//             {plan.savings ? (
//               <Text style={styles.perMonth}>{plan.savings}</Text>
//             ) : (
//               <Text style={styles.perMonth}>/month</Text>
//             )}
//           </View>
          
//           <View style={styles.featuresContainer}>
//             {plan.features.map((feature, featureIndex) => (
//               <View key={featureIndex} style={styles.featureItem}>
//                 <Feather name="check" size={18} color="#4CAF50" />
//                 <Text style={styles.featureText}>{feature}</Text>
//               </View>
//             ))}
//           </View>
          
//           <TouchableOpacity
//             style={[
//               styles.payButton,
//               styles.primaryButton,
//               loading && styles.disabledButton
//             ]}
//             onPress={() => handlePayment(plan)}
//             disabled={loading}
//           >
//             <Text style={styles.payButtonText}>
//               {loading ? 'Opening Payment...' : `Choose ${plan.name}`}
//             </Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1);
//     }, 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//           <View style={styles.liveBadge}>
//             <Ionicons name="flash" size={14} color="#FFF" />
//             <Text style={styles.liveBadgeText}>LIVE PAYMENTS</Text>
//             <Ionicons name="flash" size={14} color="#FFF" />
//           </View>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           {SubscriptionPlans.map((plan, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]}
//               onPress={() => scrollToPlan(index)}
//             >
//               <View style={[
//                 styles.indicatorDot,
//                 index === 0 ? styles.silverIndicator :
//                 index === 1 ? styles.goldIndicator : styles.platinumIndicator
//               ]} />
//               <Text style={[
//                 styles.planIndicatorText,
//                 activeIndex === index && styles.planIndicatorTextActive
//               ]}>
//                 {plan.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1}
//           >
//             {SubscriptionPlans.map((plan, index) => renderPlanCard(plan, index))}
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / {SubscriptionPlans.length}
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === SubscriptionPlans.length - 1 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === SubscriptionPlans.length - 1}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === SubscriptionPlans.length - 1 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Payment Info */}
//         <View style={styles.paymentInfo}>
//           <Ionicons name="shield-checkmark" size={20} color="#4CAF50" />
//           <Text style={styles.paymentInfoText}>
//             Secure payments powered by Razorpay • All payment methods accepted
//           </Text>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="headset" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help?</Text>
//               <Text style={styles.supportText}>Our support team is here to help you 24/7</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Bottom padding to avoid tab bar overlap */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   liveBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     paddingHorizontal: 15,
//     paddingVertical: 5,
//     borderRadius: 15,
//   },
//   liveBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 5,
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 5,
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   disabledButton: {
//     backgroundColor: '#CCCCCC',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   paymentInfo: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#F0F9FF',
//     padding: 12,
//     borderRadius: 10,
//     marginHorizontal: 20,
//   },
//   paymentInfoText: {
//     marginLeft: 8,
//     color: '#1E40AF',
//     fontSize: 13,
//     fontWeight: '500',
//     textAlign: 'center',
//     flex: 1,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 16,
//     borderRadius: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   bottomPadding: {
//     height: 70,
//   },
// });





//11/10/2025
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import RazorpayCheckout from 'react-native-razorpay';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;

// // Your Razorpay test key
// const RAZORPAY_KEY_ID = 'rzp_test_RP9jVzAyEEN7Xr';

// // Plans data
// const SubscriptionPlans = [
//   {
//     id: 'silver',
//     name: 'Silver',
//     badge: 'BASIC',
//     badgeStyle: 'silverBadge',
//     icon: 'medal-outline',
//     originalPrice: 1000,
//     discountedPrice: 500,
//     duration: 'Monthly Plan',
//     savings: '',
//     features: [
//       'Unlimited profile browsing',
//       'Send likes & view visitors',
//       '30 connections per day',
//       'View contact details',
//       'Basic matchmaking filters'
//     ],
//     gradient: ['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9']
//   },
//   {
//     id: 'gold',
//     name: 'Gold',
//     badge: 'RECOMMENDED',
//     badgeStyle: 'recommendedBadge',
//     icon: 'medal',
//     originalPrice: 1500,
//     discountedPrice: 1200,
//     duration: 'Quarterly Plan',
//     savings: 'Save ₹300',
//     features: [
//       'Everything in Silver +',
//       'Unlimited connections',
//       'Priority visibility',
//       'Advanced filters',
//       'Verified profiles only',
//       'Direct call/chat option'
//     ],
//     gradient: ['#fff8dc', '#fafad2', '#ffd700', '#daa520', '#fff8dc']
//   },
//   {
//     id: 'platinum',
//     name: 'Platinum',
//     badge: 'PREMIUM',
//     badgeStyle: 'premiumBadge',
//     icon: 'diamond',
//     originalPrice: 6000,
//     discountedPrice: 3000,
//     duration: 'Yearly Plan',
//     savings: 'Save ₹3000',
//     features: [
//       'Everything in Gold +',
//       'Top profile highlighting',
//       'Personalized matchmaking',
//       'Free invitation templates',
//       'Community events access',
//       'Premium user badge'
//     ],
//     gradient: ['#E5E4E2', '#F5F5F5', '#FFFFFF', '#F5F5F5', '#E5E4E2']
//   }
// ];

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Handle Razorpay payment - FIXED VERSION
//   const handlePayment = async (plan) => {
//     if (loading) return;
    
//     setLoading(true);
    
//     try {
//       const amount = plan.discountedPrice * 100; // Convert to paise

//       // Razorpay checkout options - SIMPLIFIED for testing
//       const options = {
//         description: `Shaadivasi ${plan.name} Plan`,
//         image: 'https://i.imgur.com/3g7nmJC.png',
//         currency: 'INR',
//         key: RAZORPAY_KEY_ID,
//         amount: amount.toString(),
//         name: 'Shaadivasi',
//         prefill: {
//           email: 'test@shaadivasi.com',
//           contact: '9876543210',
//           name: 'Test User'
//         },
//         theme: {
//           color: '#FF6B6B'
//         }
//       };

//       console.log('Opening Razorpay with amount:', amount);

//       // Open Razorpay checkout
//       RazorpayCheckout.open(options)
//         .then((data) => {
//           // Handle success
//           setLoading(false);
//           console.log('Payment Success:', data);
          
//           Alert.alert(
//             '🎉 Payment Successful!',
//             `Your ${plan.name} plan has been activated!\n\n` +
//             `Payment ID: ${data.razorpay_payment_id}\n` +
//             `Amount: ₹${plan.discountedPrice}\n\n` +
//             `Thank you for upgrading!`,
//             [
//               {
//                 text: 'Continue',
//                 onPress: () => {
//                   console.log('Subscription activated:', plan.name);
//                 }
//               }
//             ]
//           );
//         })
//         .catch((error) => {
//           // Handle failure
//           setLoading(false);
//           console.log('Payment Error Details:', error);
          
//           if (error.code === 0) {
//             // User closed the checkout
//             console.log('User closed payment gateway');
//           } else if (error.code === 2) {
//             // Network error
//             Alert.alert(
//               'Network Error',
//               'Please check your internet connection and try again.',
//               [{ text: 'OK' }]
//             );
//           } else {
//             // Other errors - show detailed message
//             Alert.alert(
//               'Payment Failed',
//               `Error: ${error.description || 'Something went wrong'}\n\nCode: ${error.code}`,
//               [{ text: 'Try Again' }]
//             );
//           }
//         });
      
//     } catch (error) {
//       setLoading(false);
//       console.log('Unexpected error:', error);
//       Alert.alert(
//         'Error',
//         'An unexpected error occurred. Please try again.',
//         [{ text: 'OK' }]
//       );
//     }
//   };

//   // Render plan card
//   const renderPlanCard = (plan, index) => {
//     const isGold = index === 1;
//     const isPlatinum = index === 2;
    
//     return (
//       <Animated.View
//         key={index}
//         style={[
//           {
//             width: ACTIVE_CARD_WIDTH,
//             transform: [{ scale: getCardScale(index) }],
//             opacity: getCardOpacity(index),
//             marginRight: CARD_SPACING,
//           }
//         ]}
//       >
//         <LinearGradient
//           colors={plan.gradient}
//           locations={isGold || isPlatinum ? [0, 0.2, 0.5, 0.8, 1] : [0, 0.4, 0.75, 1]}
//           start={{ x: 0.5, y: 0.2 }}
//           end={{ x: 0.5, y: 1 }}
//           style={[
//             styles.membershipCard,
//             isGold ? styles.goldGradientCard :
//             isPlatinum ? styles.platinumGradientCard : styles.silverGradientCard
//           ]}
//         >
//           <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//             <View style={[styles.cardBadge, styles[plan.badgeStyle]]}>
//               {isGold || isPlatinum ? (
//                 <>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                   <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                 </>
//               ) : (
//                 <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//               )}
//             </View>
//           </View>
          
//           <View style={styles.cardHeader}>
//             <View>
//               <Text style={[
//                 styles.cardTitle,
//                 isPlatinum && styles.platinumTitle
//               ]}>{plan.name}</Text>
//               <Text style={styles.cardSubtitle}>{plan.duration}</Text>
//             </View>
//             <Ionicons name={plan.icon} size={32} color="#FF6B6B" />
//           </View>
          
//           <View style={styles.priceContainer}>
//             <Text style={styles.originalPrice}>₹{plan.originalPrice}</Text>
//             <Text style={styles.discountedPrice}>₹{plan.discountedPrice}</Text>
//             {plan.savings ? (
//               <Text style={styles.perMonth}>{plan.savings}</Text>
//             ) : (
//               <Text style={styles.perMonth}>/month</Text>
//             )}
//           </View>
          
//           <View style={styles.featuresContainer}>
//             {plan.features.map((feature, featureIndex) => (
//               <View key={featureIndex} style={styles.featureItem}>
//                 <Feather name="check" size={18} color="#4CAF50" />
//                 <Text style={styles.featureText}>{feature}</Text>
//               </View>
//             ))}
//           </View>
          
//           <TouchableOpacity
//             style={[
//               styles.payButton,
//               styles.primaryButton,
//               loading && styles.disabledButton
//             ]}
//             onPress={() => handlePayment(plan)}
//             disabled={loading}
//           >
//             <Text style={styles.payButtonText}>
//               {loading ? 'Opening Payment...' : `Choose ${plan.name}`}
//             </Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1);
//     }, 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//           <View style={styles.testBadge}>
//             <Ionicons name="card" size={14} color="#FFF" />
//             <Text style={styles.testBadgeText}>TEST MODE - Use Test Cards</Text>
//             <Ionicons name="card" size={14} color="#FFF" />
//           </View>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           {SubscriptionPlans.map((plan, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]}
//               onPress={() => scrollToPlan(index)}
//             >
//               <View style={[
//                 styles.indicatorDot,
//                 index === 0 ? styles.silverIndicator :
//                 index === 1 ? styles.goldIndicator : styles.platinumIndicator
//               ]} />
//               <Text style={[
//                 styles.planIndicatorText,
//                 activeIndex === index && styles.planIndicatorTextActive
//               ]}>
//                 {plan.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1}
//           >
//             {SubscriptionPlans.map((plan, index) => renderPlanCard(plan, index))}
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / {SubscriptionPlans.length}
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === SubscriptionPlans.length - 1 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === SubscriptionPlans.length - 1}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === SubscriptionPlans.length - 1 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Test Card Instructions */}
//         <View style={styles.testInstructions}>
//           <Text style={styles.testInstructionsTitle}>💳 Test Card Details</Text>
//           <Text style={styles.testInstructionsText}>
//             Card Number: <Text style={styles.highlight}>4111 1111 1111 1111</Text>
//           </Text>
//           <Text style={styles.testInstructionsText}>
//             Expiry: Any future date | CVV: Any 3 digits
//           </Text>
//           <Text style={styles.testInstructionsText}>
//             Name: Any name | No real money deducted
//           </Text>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="help-circle" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Testing Payment?</Text>
//               <Text style={styles.supportText}>Use the test card details above. No real payment will be processed.</Text>
//             </View>
//           </View>
//         </View>

//         {/* Bottom padding to avoid tab bar overlap */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   testBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FF6B6B',
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//   },
//   testBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 5,
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 5,
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   disabledButton: {
//     backgroundColor: '#CCCCCC',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   testInstructions: {
//     backgroundColor: '#F0F9FF',
//     padding: 15,
//     borderRadius: 10,
//     marginHorizontal: 20,
//     marginBottom: 20,
//   },
//   testInstructionsTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#1E40AF',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   testInstructionsText: {
//     fontSize: 12,
//     color: '#374151',
//     marginBottom: 4,
//     textAlign: 'center',
//   },
//   highlight: {
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   bottomPadding: {
//     height: 70,
//   },
// });






//trail test
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert, Platform } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;

// // Check if running on emulator
// const IS_EMULATOR = Platform.OS === 'android' && !Platform.isRealDevice;

// // Plans data
// const SubscriptionPlans = [
//   {
//     id: 'silver',
//     name: 'Silver',
//     badge: 'BASIC',
//     badgeStyle: 'silverBadge',
//     icon: 'medal-outline',
//     originalPrice: 1000,
//     discountedPrice: 500,
//     duration: 'Monthly Plan',
//     savings: '',
//     features: [
//       'Unlimited profile browsing',
//       'Send likes & view visitors',
//       '30 connections per day',
//       'View contact details',
//       'Basic matchmaking filters'
//     ],
//     gradient: ['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9']
//   },
//   {
//     id: 'gold',
//     name: 'Gold',
//     badge: 'RECOMMENDED',
//     badgeStyle: 'recommendedBadge',
//     icon: 'medal',
//     originalPrice: 1500,
//     discountedPrice: 1200,
//     duration: 'Quarterly Plan',
//     savings: 'Save ₹300',
//     features: [
//       'Everything in Silver +',
//       'Unlimited connections',
//       'Priority visibility',
//       'Advanced filters',
//       'Verified profiles only',
//       'Direct call/chat option'
//     ],
//     gradient: ['#fff8dc', '#fafad2', '#ffd700', '#daa520', '#fff8dc']
//   },
//   {
//     id: 'platinum',
//     name: 'Platinum',
//     badge: 'PREMIUM',
//     badgeStyle: 'premiumBadge',
//     icon: 'diamond',
//     originalPrice: 6000,
//     discountedPrice: 3000,
//     duration: 'Yearly Plan',
//     savings: 'Save ₹3000',
//     features: [
//       'Everything in Gold +',
//       'Top profile highlighting',
//       'Personalized matchmaking',
//       'Free invitation templates',
//       'Community events access',
//       'Premium user badge'
//     ],
//     gradient: ['#E5E4E2', '#F5F5F5', '#FFFFFF', '#F5F5F5', '#E5E4E2']
//   }
// ];

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [loading, setLoading] = useState(false);

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Handle payment - with emulator detection
//   const handlePayment = async (plan) => {
//     if (loading) return;
    
//     setLoading(true);
    
//     try {
//       if (IS_EMULATOR) {
//         // Show emulator warning and simulation
//         Alert.alert(
//           '🔧 Emulator Detected',
//           `Razorpay requires a real Android device.\n\nPlan: ${plan.name}\nAmount: ₹${plan.discountedPrice}\n\nWould you like to simulate payment success?`,
//           [
//             {
//               text: 'Simulate Success',
//               onPress: () => simulatePaymentSuccess(plan)
//             },
//             {
//               text: 'Simulate Failure',
//               onPress: () => simulatePaymentFailure(plan)
//             },
//             {
//               text: 'Cancel',
//               style: 'cancel',
//               onPress: () => setLoading(false)
//             }
//           ]
//         );
//       } else {
//         // Real device - try actual Razorpay
//         try {
//           const RazorpayCheckout = require('react-native-razorpay').default;
//           const RAZORPAY_KEY_ID = 'rzp_test_RP9jVzAyEEN7Xr';
          
//           const options = {
//             description: `Shaadivasi ${plan.name} Plan`,
//             image: 'https://i.imgur.com/3g7nmJC.png',
//             currency: 'INR',
//             key: RAZORPAY_KEY_ID,
//             amount: (plan.discountedPrice * 100).toString(),
//             name: 'Shaadivasi',
//             prefill: {
//               email: 'test@shaadivasi.com',
//               contact: '9876543210',
//               name: 'Test User'
//             },
//             theme: { color: '#FF6B6B' }
//           };

//           const data = await RazorpayCheckout.open(options);
//           handlePaymentSuccess(plan, data);
//         } catch (error) {
//           handlePaymentError(error);
//         }
//       }
//     } catch (error) {
//       setLoading(false);
//       Alert.alert('Error', 'Something went wrong. Please try again.');
//     }
//   };

//   // Simulate payment success for emulator
//   const simulatePaymentSuccess = (plan) => {
//     setTimeout(() => {
//       setLoading(false);
//       const mockData = {
//         razorpay_payment_id: 'pay_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
//         razorpay_order_id: 'order_' + Math.random().toString(36).substr(2, 9)
//       };
//       handlePaymentSuccess(plan, mockData);
//     }, 2000);
//   };

//   // Simulate payment failure for emulator
//   const simulatePaymentFailure = (plan) => {
//     setTimeout(() => {
//       setLoading(false);
//       Alert.alert(
//         '❌ Payment Failed',
//         `Simulated payment failure for ${plan.name} plan.\n\nOn a real device, this would show Razorpay gateway.`,
//         [{ text: 'OK' }]
//       );
//     }, 2000);
//   };

//   // Handle successful payment
//   const handlePaymentSuccess = (plan, data) => {
//     Alert.alert(
//       '🎉 Payment Successful!',
//       `Your ${plan.name} plan has been activated!\n\n` +
//       `Payment ID: ${data.razorpay_payment_id}\n` +
//       `Amount: ₹${plan.discountedPrice}\n\n` +
//       `Thank you for upgrading!`,
//       [
//         {
//           text: 'Continue',
//           onPress: () => {
//             console.log('Subscription activated:', plan.name);
//           }
//         }
//       ]
//     );
//   };

//   // Handle payment error
//   const handlePaymentError = (error) => {
//     setLoading(false);
//     if (error.code === 0) {
//       console.log('User closed payment gateway');
//     } else {
//       Alert.alert(
//         'Payment Failed',
//         error.description || 'Something went wrong with the payment.',
//         [{ text: 'OK' }]
//       );
//     }
//   };

//   // Render plan card
//   const renderPlanCard = (plan, index) => {
//     const isGold = index === 1;
//     const isPlatinum = index === 2;
    
//     return (
//       <Animated.View
//         key={index}
//         style={[
//           {
//             width: ACTIVE_CARD_WIDTH,
//             transform: [{ scale: getCardScale(index) }],
//             opacity: getCardOpacity(index),
//             marginRight: CARD_SPACING,
//           }
//         ]}
//       >
//         <LinearGradient
//           colors={plan.gradient}
//           locations={isGold || isPlatinum ? [0, 0.2, 0.5, 0.8, 1] : [0, 0.4, 0.75, 1]}
//           start={{ x: 0.5, y: 0.2 }}
//           end={{ x: 0.5, y: 1 }}
//           style={[
//             styles.membershipCard,
//             isGold ? styles.goldGradientCard :
//             isPlatinum ? styles.platinumGradientCard : styles.silverGradientCard
//           ]}
//         >
//           <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//             <View style={[styles.cardBadge, styles[plan.badgeStyle]]}>
//               {isGold || isPlatinum ? (
//                 <>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                   <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//                   <Ionicons name={isGold ? "star" : "diamond"} size={14} color="#FFF" />
//                 </>
//               ) : (
//                 <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//               )}
//             </View>
//           </View>
          
//           <View style={styles.cardHeader}>
//             <View>
//               <Text style={[
//                 styles.cardTitle,
//                 isPlatinum && styles.platinumTitle
//               ]}>{plan.name}</Text>
//               <Text style={styles.cardSubtitle}>{plan.duration}</Text>
//             </View>
//             <Ionicons name={plan.icon} size={32} color="#FF6B6B" />
//           </View>
          
//           <View style={styles.priceContainer}>
//             <Text style={styles.originalPrice}>₹{plan.originalPrice}</Text>
//             <Text style={styles.discountedPrice}>₹{plan.discountedPrice}</Text>
//             {plan.savings ? (
//               <Text style={styles.perMonth}>{plan.savings}</Text>
//             ) : (
//               <Text style={styles.perMonth}>/month</Text>
//             )}
//           </View>
          
//           <View style={styles.featuresContainer}>
//             {plan.features.map((feature, featureIndex) => (
//               <View key={featureIndex} style={styles.featureItem}>
//                 <Feather name="check" size={18} color="#4CAF50" />
//                 <Text style={styles.featureText}>{feature}</Text>
//               </View>
//             ))}
//           </View>
          
//           <TouchableOpacity
//             style={[
//               styles.payButton,
//               styles.primaryButton,
//               loading && styles.disabledButton
//             ]}
//             onPress={() => handlePayment(plan)}
//             disabled={loading}
//           >
//             <Text style={styles.payButtonText}>
//               {loading ? 'Processing...' : `Choose ${plan.name}`}
//             </Text>
//           </TouchableOpacity>
//         </LinearGradient>
//       </Animated.View>
//     );
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1);
//     }, 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//           {IS_EMULATOR ? (
//             <View style={styles.emulatorBadge}>
//               <Ionicons name="warning" size={14} color="#FFF" />
//               <Text style={styles.emulatorBadgeText}>EMULATOR MODE</Text>
//               <Ionicons name="warning" size={14} color="#FFF" />
//             </View>
//           ) : (
//             <View style={styles.liveBadge}>
//               <Ionicons name="flash" size={14} color="#FFF" />
//               <Text style={styles.liveBadgeText}>LIVE PAYMENTS</Text>
//               <Ionicons name="flash" size={14} color="#FFF" />
//             </View>
//           )}
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           {SubscriptionPlans.map((plan, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]}
//               onPress={() => scrollToPlan(index)}
//             >
//               <View style={[
//                 styles.indicatorDot,
//                 index === 0 ? styles.silverIndicator :
//                 index === 1 ? styles.goldIndicator : styles.platinumIndicator
//               ]} />
//               <Text style={[
//                 styles.planIndicatorText,
//                 activeIndex === index && styles.planIndicatorTextActive
//               ]}>
//                 {plan.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1}
//           >
//             {SubscriptionPlans.map((plan, index) => renderPlanCard(plan, index))}
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / {SubscriptionPlans.length}
//           </Text>
          
//           <TouchableOpacity
//             style={[styles.arrowButton, activeIndex === SubscriptionPlans.length - 1 && styles.arrowButtonDisabled]}
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === SubscriptionPlans.length - 1}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === SubscriptionPlans.length - 1 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Device-specific instructions */}
//         {IS_EMULATOR ? (
//           <View style={styles.emulatorInfo}>
//             <Text style={styles.emulatorInfoTitle}>📱 Real Device Required</Text>
//             <Text style={styles.emulatorInfoText}>
//               Razorpay payments work only on real Android devices with Google Play Services.
//             </Text>
//             <Text style={styles.emulatorInfoText}>
//               Connect a real phone or use the simulation above for testing.
//             </Text>
//           </View>
//         ) : (
//           <View style={styles.liveInfo}>
//             <Text style={styles.liveInfoTitle}>💳 Test Payment Ready</Text>
//             <Text style={styles.liveInfoText}>
//               Use test card: <Text style={styles.highlight}>4111 1111 1111 1111</Text>
//             </Text>
//             <Text style={styles.liveInfoText}>
//               Real Razorpay gateway will open with all payment options.
//             </Text>
//           </View>
//         )}

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="help-circle" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help?</Text>
//               <Text style={styles.supportText}>
//                 {IS_EMULATOR
//                   ? "Use a real Android device for actual payment testing."
//                   : "Use the test card details for payment testing."
//                 }
//               </Text>
//             </View>
//           </View>
//         </View>

//         {/* Bottom padding */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//     marginBottom: 10,
//   },
//   emulatorBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFA500',
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//   },
//   emulatorBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 5,
//   },
//   liveBadge: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#4CAF50',
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//   },
//   liveBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 5,
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 5,
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   disabledButton: {
//     backgroundColor: '#CCCCCC',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   emulatorInfo: {
//     backgroundColor: '#FFF3CD',
//     padding: 15,
//     borderRadius: 10,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderLeftWidth: 4,
//     borderLeftColor: '#FFA500',
//   },
//   emulatorInfoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#856404',
//     marginBottom: 8,
//   },
//   emulatorInfoText: {
//     fontSize: 12,
//     color: '#856404',
//     marginBottom: 4,
//   },
//   liveInfo: {
//     backgroundColor: '#D1ECF1',
//     padding: 15,
//     borderRadius: 10,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     borderLeftWidth: 4,
//     borderLeftColor: '#0C5460',
//   },
//   liveInfoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#0C5460',
//     marginBottom: 8,
//   },
//   liveInfoText: {
//     fontSize: 12,
//     color: '#0C5460',
//     marginBottom: 4,
//   },
//   highlight: {
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   bottomPadding: {
//     height: 70,
//   },
// });



// //12/10/2025
// import React, { useRef, useState, useEffect } from "react";
// import {
//   View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert
// } from "react-native";
// import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { LinearGradient } from "expo-linear-gradient";
// import RazorpayCheckout from "react-native-razorpay";
// import axios from "axios";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;

// const PLANS = [
//   { name: "Silver", price: 500, planId: "plan_SilverId", duration: "Monthly" },
//   { name: "Gold", price: 1200, planId: "plan_GoldId", duration: "Quarterly" },
//   { name: "Platinum", price: 3000, planId: "plan_PlatinumId", duration: "Yearly" },
// ];

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1);

//   // Scroll animation
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       },
//     }
//   );

//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true,
//     });
//   };

//   const getCardScale = (index) =>
//     scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: "clamp",
//     });

//   const getCardOpacity = (index) =>
//     scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: "clamp",
//     });

//   // Razorpay Checkout
//   const handlePayment = async (plan) => {
//     try {
//       // 1️⃣ Create subscription from backend
//       const res = await axios.post("http://106.78.37.227:5000/create-subscription", {
//         planId: plan.planId,
//         customerEmail: "test@example.com", // replace with real user email
//       });

//       const subscriptionId = res.data.id;
//       console.log("Subscription created:", subscriptionId);

//       // 2️⃣ Open Razorpay Checkout
//       const options = {
//         description: `${plan.name} Subscription`,
//         subscription_id: subscriptionId,
//         prefill: {
//           email: "test@example.com",
//           contact: "9999999999",
//           name: "Shaadivasi User",
//         },
//         theme: { color: "#FF6B6B" },
//       };

//       RazorpayCheckout.open(options)
//         .then((data) => {
//           Alert.alert("Success", `Payment ID: ${data.razorpay_payment_id}`);
//           // TODO: Mark user as premium in backend
//         })
//         .catch((error) => {
//           Alert.alert("Payment failed", error.description);
//         });
//     } catch (err) {
//       console.error(err);
//       Alert.alert("Error", "Failed to create subscription");
//     }
//   };

//   useEffect(() => {
//     setTimeout(() => scrollToPlan(1), 100);
//   }, []);

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           {PLANS.map((plan, index) => (
//             <TouchableOpacity key={index} style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]} onPress={() => scrollToPlan(index)}>
//               <View style={[styles.indicatorDot, index === 0 ? styles.silverIndicator : index === 1 ? styles.goldIndicator : styles.platinumIndicator]} />
//               <Text style={[styles.planIndicatorText, activeIndex === index && styles.planIndicatorTextActive]}>{plan.name}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Membership Cards */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//           >
//             {PLANS.map((plan, index) => (
//               <Animated.View key={index} style={{
//                 width: ACTIVE_CARD_WIDTH,
//                 transform: [{ scale: getCardScale(index) }],
//                 opacity: getCardOpacity(index),
//                 marginRight: CARD_SPACING,
//               }}>
//                 <LinearGradient
//                   colors={index === 0 ? ['#C0C0C0','#fff'] : index === 1 ? ['#ffd700','#fffacd'] : ['#E5E4E2','#fff']}
//                   style={styles.membershipCard}
//                 >
//                   <View style={styles.cardHeader}>
//                     <View>
//                       <Text style={styles.cardTitle}>{plan.name}</Text>
//                       <Text style={styles.cardSubtitle}>{plan.duration} Plan</Text>
//                     </View>
//                     <Ionicons name="medal-outline" size={32} color="#FF6B6B" />
//                   </View>

//                   <View style={styles.priceContainer}>
//                     <Text style={styles.discountedPrice}>₹{plan.price}</Text>
//                   </View>

//                   <TouchableOpacity style={[styles.payButton, styles.primaryButton]} onPress={() => handlePayment(plan)}>
//                     <Text style={styles.payButtonText}>Choose {plan.name}</Text>
//                   </TouchableOpacity>
//                 </LinearGradient>
//               </Animated.View>
//             ))}
//           </Animated.ScrollView>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: "#fff" },
//   container: { flexGrow: 1, paddingBottom: 30, backgroundColor: "#fff" },
//   header: { alignItems: "center", paddingVertical: 25, paddingHorizontal: 20 },
//   headerTitle: { fontSize: 26, fontWeight: "bold", color: "#FF6B6B", marginBottom: 5 },
//   headerSubtitle: { fontSize: 16, color: "#666" },
//   planIndicators: { flexDirection: "row", justifyContent: "center", marginBottom: 20, paddingHorizontal: 20 },
//   planIndicator: { flexDirection: "row", alignItems: "center", padding: 10, borderRadius: 20, marginHorizontal: 5 },
//   planIndicatorActive: { backgroundColor: "rgba(255,107,107,0.1)" },
//   planIndicatorText: { fontSize: 14, color: "#888", fontWeight: "500", marginLeft: 5 },
//   planIndicatorTextActive: { color: "#FF6B6B", fontWeight: "bold" },
//   indicatorDot: { width: 12, height: 12, borderRadius: 6 },
//   silverIndicator: { backgroundColor: "#C0C0C0" },
//   goldIndicator: { backgroundColor: "#FFD700" },
//   platinumIndicator: { backgroundColor: "#E5E4E2" },
//   cardsContainer: { height: 400, marginBottom: 15 },
//   cardScrollContent: { paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2 },
//   membershipCard: { borderRadius: 20, padding: 25, shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 15, elevation: 5, minHeight: 300, justifyContent: "space-between" },
//   cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 },
//   cardTitle: { fontSize: 28, fontWeight: "bold", color: "#FF6B6B" },
//   cardSubtitle: { fontSize: 14, color: "#666", marginTop: 2 },
//   priceContainer: { flexDirection: "row", alignItems: "flex-end", marginBottom: 20 },
//   discountedPrice: { fontSize: 32, fontWeight: "bold", color: "#333" },
//   payButton: { padding: 16, borderRadius: 12, alignItems: "center" },
//   primaryButton: { backgroundColor: "#FF6B6B" },
//   payButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
// });






// // app/(tabs)/Upgrade.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import RazorpayCheckout from 'react-native-razorpay';
// import axios from 'axios';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;
// const INACTIVE_CARD_WIDTH = width * 0.75;

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1); // Start with Gold plan as active

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1); // Scroll to Gold card (index 1)
//     }, 100);
//   }, []);

//   // ---------- RAZORPAY PAYMENT HANDLER ----------
//   const handlePayment = async (plan) => {
//     try {
//       // Replace with your PC local IP
//       const res = await axios.post("http://106.78.37.227:5000/create-subscription", { plan });
//       const subscription = res.data;

//       const options = {
//         key: "rzp_test_RP9jVzAyEEN7Xr", // your key_id
//         subscription_id: subscription.id,
//         name: "Shaadivasi Premium",
//         description: `${plan} Plan Subscription`,
//         prefill: {
//           email: "user@example.com",
//           contact: "9999999999",
//         },
//         theme: { color: "#FF6B6B" },
//       };

//       RazorpayCheckout.open(options)
//         .then((data) => {
//           Alert.alert("Payment Success", `Payment ID: ${data.razorpay_payment_id}`);
//         })
//         .catch((error) => {
//           Alert.alert("Payment Failed", `${error.description}`);
//         });

//     } catch (err) {
//       console.error(err);
//       Alert.alert("Error", "Failed to create subscription. Check server/network.");
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 0 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(0)}
//           >
//             <View style={[styles.indicatorDot, styles.silverIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 0 && styles.planIndicatorTextActive]}>Silver</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 1 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(1)}
//           >
//             <View style={[styles.indicatorDot, styles.goldIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 1 && styles.planIndicatorTextActive]}>Gold</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity
//             style={[styles.planIndicator, activeIndex === 2 && styles.planIndicatorActive]}
//             onPress={() => scrollToPlan(2)}
//           >
//             <View style={[styles.indicatorDot, styles.platinumIndicator]} />
//             <Text style={[styles.planIndicatorText, activeIndex === 2 && styles.planIndicatorTextActive]}>Platinum</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Membership Cards */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//           >
//             {/* Silver Card */}
//             <Animated.View style={[{ width: ACTIVE_CARD_WIDTH, transform: [{ scale: getCardScale(0) }], opacity: getCardOpacity(0), marginRight: CARD_SPACING }]}>
//               <LinearGradient
//                 colors={['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9']}
//                 locations={[0, 0.4, 0.75, 1]}
//                 start={{ x: 0.5, y: 0.2 }}
//                 end={{ x: 0.5, y: 1 }}
//                 style={[styles.membershipCard, styles.silverGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.silverBadge]}>
//                     <Text style={styles.cardBadgeText}>BASIC</Text>
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Silver</Text>
//                     <Text style={styles.cardSubtitle}>Monthly Plan</Text>
//                   </View>
//                   <Ionicons name="medal-outline" size={32} color="#FF6B6B" />
//                 </View>
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹1000</Text>
//                   <Text style={styles.discountedPrice}>₹500</Text>
//                   <Text style={styles.perMonth}>/month</Text>
//                 </View>
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Unlimited profile browsing</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Send likes & view visitors</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>30 connections per day</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>View contact details</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Basic matchmaking filters</Text></View>
//                 </View>
//                 <TouchableOpacity style={[styles.payButton, styles.primaryButton]} onPress={() => handlePayment("Silver")}>
//                   <Text style={styles.payButtonText}>Choose Silver</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>

//             {/* Gold Card */}
//             <Animated.View style={[{ width: ACTIVE_CARD_WIDTH, transform: [{ scale: getCardScale(1) }], opacity: getCardOpacity(1), marginRight: CARD_SPACING }]}>
//               <LinearGradient
//                 colors={['#fff8dc', '#fafad2', '#ffd700', '#daa520', '#fff8dc']}
//                 start={{ x: 0, y: 0 }}
//                 end={{ x: 1, y: 1 }}
//                 style={[styles.membershipCard, styles.goldGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.recommendedBadge]}>
//                     <Ionicons name="star" size={14} color="#FFF" />
//                     <Text style={styles.cardBadgeText}>RECOMMENDED</Text>
//                     <Ionicons name="star" size={14} color="#FFF" />
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Gold</Text>
//                     <Text style={styles.cardSubtitle}>Quarterly Plan</Text>
//                   </View>
//                   <Ionicons name="medal" size={32} color="#FF6B6B" />
//                 </View>
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹1500</Text>
//                   <Text style={styles.discountedPrice}>₹1200</Text>
//                   <Text style={styles.perMonth}>Save ₹300</Text>
//                 </View>
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Everything in Silver +</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Unlimited connections</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Priority visibility</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Access to Gold badge</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Advanced matchmaking filters</Text></View>
//                 </View>
//                 <TouchableOpacity style={[styles.payButton, styles.goldButton]} onPress={() => handlePayment("Gold")}>
//                   <Text style={styles.payButtonText}>Choose Gold</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>

//             {/* Platinum Card */}
//             <Animated.View style={[{ width: ACTIVE_CARD_WIDTH, transform: [{ scale: getCardScale(2) }], opacity: getCardOpacity(2), marginRight: CARD_SPACING }]}>
//               <LinearGradient
//                 colors={['#e5e4e2', '#f5f5f5', '#dcdcdc', '#c0c0c0']}
//                 style={[styles.membershipCard, styles.platinumGradientCard]}
//               >
//                 <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
//                   <View style={[styles.cardBadge, styles.platinumBadge]}>
//                     <Text style={styles.cardBadgeText}>PREMIUM</Text>
//                   </View>
//                 </View>
//                 <View style={styles.cardHeader}>
//                   <View>
//                     <Text style={styles.cardTitle}>Platinum</Text>
//                     <Text style={styles.cardSubtitle}>Yearly Plan</Text>
//                   </View>
//                   <Ionicons name="medal" size={32} color="#FF6B6B" />
//                 </View>
//                 <View style={styles.priceContainer}>
//                   <Text style={styles.originalPrice}>₹5000</Text>
//                   <Text style={styles.discountedPrice}>₹4000</Text>
//                   <Text style={styles.perMonth}>Save ₹1000</Text>
//                 </View>
//                 <View style={styles.featuresContainer}>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Everything in Gold +</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Dedicated support</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Platinum badge</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Featured profile</Text></View>
//                   <View style={styles.featureItem}><Feather name="check" size={18} color="#4CAF50" /><Text style={styles.featureText}>Exclusive events access</Text></View>
//                 </View>
//                 <TouchableOpacity style={[styles.payButton, styles.platinumButton]} onPress={() => handlePayment("Platinum")}>
//                   <Text style={styles.payButtonText}>Choose Platinum</Text>
//                 </TouchableOpacity>
//               </LinearGradient>
//             </Animated.View>
//           </Animated.ScrollView>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: { flex: 1, backgroundColor: '#f7f7f7' },
//   container: { paddingVertical: 20 },
//   header: { alignItems: 'center', marginBottom: 30 },
//   headerTitle: { fontSize: 26, fontWeight: 'bold', color: '#333' },
//   headerSubtitle: { fontSize: 16, color: '#666', marginTop: 5 },
//   planIndicators: { flexDirection: 'row', justifyContent: 'center', marginBottom: 20 },
//   planIndicator: { alignItems: 'center', marginHorizontal: 10 },
//   planIndicatorActive: {},
//   indicatorDot: { width: 12, height: 12, borderRadius: 6, marginBottom: 5 },
//   silverIndicator: { backgroundColor: '#C0C0C0' },
//   goldIndicator: { backgroundColor: '#FFD700' },
//   platinumIndicator: { backgroundColor: '#E5E4E2' },
//   planIndicatorText: { fontSize: 12, color: '#888' },
//   planIndicatorTextActive: { fontWeight: 'bold', color: '#333' },
//   cardsContainer: { flexDirection: 'row' },
//   cardScrollContent: { paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2 },
//   membershipCard: { borderRadius: 20, padding: 20, height: 520 },
//   silverGradientCard: {},
//   goldGradientCard: {},
//   platinumGradientCard: {},
//   cardBadgeContainer: { alignItems: 'center' },
//   cardBadge: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12 },
//   silverBadge: { backgroundColor: '#C0C0C0' },
//   recommendedBadge: { backgroundColor: '#FFD700' },
//   platinumBadge: { backgroundColor: '#E5E4E2' },
//   cardBadgeText: { color: '#fff', marginHorizontal: 5, fontSize: 12, fontWeight: 'bold' },
//   cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
//   cardTitle: { fontSize: 22, fontWeight: 'bold', color: '#333' },
//   cardSubtitle: { fontSize: 14, color: '#666' },
//   priceContainer: { flexDirection: 'row', alignItems: 'flex-end', marginBottom: 20 },
//   originalPrice: { fontSize: 16, color: '#999', textDecorationLine: 'line-through', marginRight: 10 },
//   discountedPrice: { fontSize: 24, fontWeight: 'bold', color: '#333' },
//   perMonth: { fontSize: 14, color: '#666', marginLeft: 5 },
//   featuresContainer: { marginBottom: 20 },
//   featureItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
//   featureText: { marginLeft: 10, fontSize: 14, color: '#333' },
//   payButton: { paddingVertical: 15, borderRadius: 12, alignItems: 'center' },
//   primaryButton: { backgroundColor: '#FF6B6B' },
//   goldButton: { backgroundColor: '#FFD700' },
//   platinumButton: { backgroundColor: '#C0C0C0' },
//   payButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
// });






//13
// app/(tabs)/Upgrade.jsx
// import React from "react"
// import  {StyleSheet, Text , View , Button , Alert} from 'react-native';

// import RazorpayCheckout from 'react-native-razorpay';



// export default function Upgrade(){
//   const handlePayment = ()=>{
//     const options = {
//       description: 'subscirption payment',
//       image: 'https://your-company.png',
//       currency: "INR",
//       key: 'rzp_test_RP9jVzAyEEN7Xr',
//       amount: '50000',
//       name: 'Shadivasi',
//       prefill: {
//         email: 'user@example.com',
//         contact: '9999999999',
//         name: 'john Doe'
//       },
//       theme: { color: "#F37254" }
      
//     };
//     RazorpayCheckout.open(options).then((data) => {
//     }).catch((error) => { 
//       Alert.alert(`Error: ${error.code} | ${error.description}`);
//     })
//   }
//   return (
//     <View style={styles.container} > 
//       <Text>Pay 100 INR</Text>
//       <Button title="Pay Now" onPress={handlePayment} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:'#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// })

















//13/10/2025
// app/(tabs)/Upgrade.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert } from 'react-native';
// import React, { useRef, useState } from 'react';
// import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { LinearGradient } from 'expo-linear-gradient';
// import RazorpayCheckout from 'react-native-razorpay';

// const { width } = Dimensions.get('window');
// const CARD_WIDTH = width * 0.85;
// const CARD_SPACING = 15;
// const ACTIVE_CARD_WIDTH = width * 0.85;
// const INACTIVE_CARD_WIDTH = width * 0.75;

// // Razorpay configuration
// const RAZORPAY_KEY_ID = 'rzp_test_RP9jVzAyEEN7Xr';

// // Plan configurations
// const PLANS = [
//   {
//     id: 'silver',
//     name: 'Silver',
//     badge: 'BASIC',
//     badgeStyle: 'silverBadge',
//     duration: 'Monthly Plan',
//     originalPrice: 1000,
//     discountedPrice: 500,
//     savings: 0,
//     icon: 'medal-outline',
//     features: [
//       'Unlimited profile browsing',
//       'Send likes & view visitors',
//       '30 connections per day',
//       'View contact details',
//       'Basic matchmaking filters'
//     ],
//     description: 'Monthly Plan'
//   },
//   {
//     id: 'gold',
//     name: 'Gold',
//     badge: 'RECOMMENDED',
//     badgeStyle: 'recommendedBadge',
//     duration: 'Quarterly Plan',
//     originalPrice: 1500,
//     discountedPrice: 1200,
//     savings: 300,
//     icon: 'medal',
//     features: [
//       'Everything in Silver +',
//       'Unlimited connections',
//       'Priority visibility',
//       'Advanced filters',
//       'Verified profiles only',
//       'Direct call/chat option'
//     ],
//     description: 'Quarterly Plan'
//   },
//   {
//     id: 'platinum',
//     name: 'Platinum',
//     badge: 'PREMIUM',
//     badgeStyle: 'premiumBadge',
//     duration: 'Yearly Plan',
//     originalPrice: 6000,
//     discountedPrice: 3000,
//     savings: 3000,
//     icon: 'diamond',
//     features: [
//       'Everything in Gold +',
//       'Top profile highlighting',
//       'Personalized matchmaking',
//       'Free invitation templates',
//       'Community events access',
//       'Premium user badge'
//     ],
//     description: 'Yearly Plan'
//   }
// ];

// export default function Upgrade() {
//   const scrollViewRef = useRef(null);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [activeIndex, setActiveIndex] = useState(1);
//   const [processingPayment, setProcessingPayment] = useState(false);

//   // Handle scroll event to update active index
//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     {
//       useNativeDriver: false,
//       listener: (event) => {
//         const offsetX = event.nativeEvent.contentOffset.x;
//         const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
//         setActiveIndex(index);
//       }
//     }
//   );

//   // Scroll to specific plan
//   const scrollToPlan = (index) => {
//     setActiveIndex(index);
//     scrollViewRef.current?.scrollTo({
//       x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       animated: true
//     });
//   };

//   // Get card scale based on index
//   const getCardScale = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.9, 1, 0.9],
//       extrapolate: 'clamp',
//     });
//   };

//   // Get card opacity based on index
//   const getCardOpacity = (index) => {
//     return scrollX.interpolate({
//       inputRange: [
//         (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//         (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
//       ],
//       outputRange: [0.7, 1, 0.7],
//       extrapolate: 'clamp',
//     });
//   };

//   // Handle payment for a specific plan
//   const handlePayment = async (plan) => {
//     if (processingPayment) return;
    
//     setProcessingPayment(true);
    
//     try {
//       const amount = plan.discountedPrice * 100; // Convert to paise
      
//       const options = {
//         description: `Shaadivasi ${plan.name} Plan Subscription`,
//         image: 'https://your-company-logo.png', // Replace with your logo
//         currency: 'INR',
//         key: RAZORPAY_KEY_ID,
//         amount: amount.toString(),
//         name: 'Shaadivasi Matrimony',
//         prefill: {
//           email: 'user@example.com',
//           contact: '9999999999',
//           name: 'User Name'
//         },
//         theme: { color: '#FF6B6B' },
//         notes: {
//           plan: plan.id,
//           duration: plan.duration
//         }
//       };

//       RazorpayCheckout.open(options).then((data) => {
//         // Handle successful payment
//         setProcessingPayment(false);
//         Alert.alert(
//           'Payment Successful!',
//           `You have successfully subscribed to ${plan.name} plan.`,
//           [
//             {
//               text: 'OK',
//               onPress: () => console.log('OK Pressed')
//             }
//           ]
//         );
//         console.log('Payment Success:', data);
//       }).catch((error) => {
//         setProcessingPayment(false);
        
//         // Handle specific error cases
//         if (error.code === 2) {
//           // User cancelled payment
//           console.log('Payment cancelled by user');
//         } else {
//           // Other errors
//           Alert.alert(
//             'Payment Failed',
//             `Error: ${error.description || 'Something went wrong'}`,
//             [
//               {
//                 text: 'OK',
//                 onPress: () => console.log('OK Pressed')
//               }
//             ]
//           );
//           console.log('Payment Error:', error);
//         }
//       });

//     } catch (error) {
//       setProcessingPayment(false);
//       Alert.alert(
//         'Error',
//         'Failed to process payment. Please try again.',
//         [
//           {
//             text: 'OK',
//             onPress: () => console.log('OK Pressed')
//           }
//         ]
//       );
//       console.error('Payment processing error:', error);
//     }
//   };

//   // Auto-scroll to Gold card on component mount
//   React.useEffect(() => {
//     setTimeout(() => {
//       scrollToPlan(1);
//     }, 100);
//   }, []);

//   // Render badge based on plan
//   const renderBadge = (plan) => {
//     const isRecommended = plan.badge === 'RECOMMENDED';
//     const isPremium = plan.badge === 'PREMIUM';
    
//     return (
//       <View style={[styles.cardBadgeContainer, { marginBottom: 20 }]}>
//         <View style={[styles.cardBadge, styles[plan.badgeStyle]]}>
//           {isRecommended && <Ionicons name="star" size={14} color="#FFF" />}
//           {isPremium && <Ionicons name="diamond" size={14} color="#FFF" />}
//           <Text style={styles.cardBadgeText}>{plan.badge}</Text>
//           {isRecommended && <Ionicons name="star" size={14} color="#FFF" />}
//           {isPremium && <Ionicons name="diamond" size={14} color="#FFF" />}
//         </View>
//       </View>
//     );
//   };

//   // Render price section
//   const renderPriceSection = (plan) => (
//     <View style={styles.priceContainer}>
//       <Text style={styles.originalPrice}>₹{plan.originalPrice}</Text>
//       <Text style={styles.discountedPrice}>₹{plan.discountedPrice}</Text>
//       <Text style={styles.perMonth}>
//         {plan.savings > 0 ? `Save ₹${plan.savings}` : `/month`}
//       </Text>
//     </View>
//   );

//   // Render features list
//   const renderFeatures = (plan) => (
//     <View style={styles.featuresContainer}>
//       {plan.features.map((feature, index) => (
//         <View key={index} style={styles.featureItem}>
//           <Feather name="check" size={18} color="#4CAF50" />
//           <Text style={styles.featureText}>{feature}</Text>
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView 
//         contentContainerStyle={styles.container}
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
//           <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
//         </View>

//         {/* Plan Indicators */}
//         <View style={styles.planIndicators}>
//           {PLANS.map((plan, index) => (
//             <TouchableOpacity 
//               key={plan.id}
//               style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]} 
//               onPress={() => scrollToPlan(index)}
//             >
//               <View style={[styles.indicatorDot, styles[`${plan.id}Indicator`]]} />
//               <Text style={[styles.planIndicatorText, activeIndex === index && styles.planIndicatorTextActive]}>
//                 {plan.name}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Membership Cards - Horizontal Scroll */}
//         <View style={styles.cardsContainer}>
//           <Animated.ScrollView
//             ref={scrollViewRef}
//             horizontal
//             pagingEnabled
//             showsHorizontalScrollIndicator={false}
//             snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
//             decelerationRate="fast"
//             contentContainerStyle={styles.cardScrollContent}
//             onScroll={handleScroll}
//             scrollEventThrottle={16}
//             initialScrollIndex={1}
//           >
//             {PLANS.map((plan, index) => (
//               <Animated.View 
//                 key={plan.id}
//                 style={[
//                   {
//                     width: ACTIVE_CARD_WIDTH,
//                     transform: [{ scale: getCardScale(index) }],
//                     opacity: getCardOpacity(index),
//                     marginRight: index < PLANS.length - 1 ? CARD_SPACING : 0,
//                   }
//                 ]}
//               >
//                 <LinearGradient
//                   colors={getGradientColors(plan.id)}
//                   start={{ x: 0, y: 0 }}
//                   end={{ x: 1, y: 1 }}
//                   style={[styles.membershipCard, styles[`${plan.id}GradientCard`]]}
//                 >
//                   {renderBadge(plan)}
                  
//                   <View style={styles.cardHeader}>
//                     <View>
//                       <Text style={[
//                         styles.cardTitle, 
//                         plan.id === 'platinum' && styles.platinumTitle
//                       ]}>
//                         {plan.name}
//                       </Text>
//                       <Text style={styles.cardSubtitle}>{plan.description}</Text>
//                     </View>
//                     <Ionicons name={plan.icon} size={32} color="#FF6B6B" />
//                   </View>
                  
//                   {renderPriceSection(plan)}
//                   {renderFeatures(plan)}
                  
//                   <TouchableOpacity 
//                     style={[
//                       styles.payButton, 
//                       styles.primaryButton,
//                       processingPayment && styles.disabledButton
//                     ]}
//                     onPress={() => handlePayment(plan)}
//                     disabled={processingPayment}
//                   >
//                     <Text style={styles.payButtonText}>
//                       {processingPayment ? 'Processing...' : `Choose ${plan.name}`}
//                     </Text>
//                   </TouchableOpacity>
//                 </LinearGradient>
//               </Animated.View>
//             ))}
//           </Animated.ScrollView>
//         </View>

//         {/* Navigation Arrows */}
//         <View style={styles.navigationArrows}>
//           <TouchableOpacity 
//             style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]} 
//             onPress={() => scrollToPlan(activeIndex - 1)}
//             disabled={activeIndex === 0}
//           >
//             <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
          
//           <Text style={styles.navigationText}>
//             {activeIndex + 1} / {PLANS.length}
//           </Text>
          
//           <TouchableOpacity 
//             style={[styles.arrowButton, activeIndex === PLANS.length - 1 && styles.arrowButtonDisabled]} 
//             onPress={() => scrollToPlan(activeIndex + 1)}
//             disabled={activeIndex === PLANS.length - 1}
//           >
//             <Ionicons name="chevron-forward" size={24} color={activeIndex === PLANS.length - 1 ? "#CCC" : "#FF6B6B"} />
//           </TouchableOpacity>
//         </View>

//         {/* Payment Options */}
//         <View style={styles.paymentOptions}>
//           <Text style={styles.paymentTitle}>Secure Payment Methods</Text>
//           <View style={styles.paymentIcons}>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="credit-card" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="google-wallet" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="paypal" size={24} color="#555" />
//             </View>
//             <View style={styles.paymentIcon}>
//               <FontAwesome name="bank" size={24} color="#555" />
//             </View>
//           </View>
//         </View>

//         {/* Support Section */}
//         <View style={styles.supportSection}>
//           <View style={styles.supportCard}>
//             <View style={styles.supportIcon}>
//               <Ionicons name="headset" size={28} color="#FF6B6B" />
//             </View>
//             <View style={styles.supportContent}>
//               <Text style={styles.supportTitle}>Need Help Deciding?</Text>
//               <Text style={styles.supportText}>Our team is available 24/7 to assist you</Text>
//             </View>
//           </View>
          
//           <TouchableOpacity style={styles.chatButton}>
//             <FontAwesome name="whatsapp" size={20} color="#fff" />
//             <Text style={styles.chatButtonText}>Chat with us</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Bottom padding to avoid tab bar overlap */}
//         <View style={styles.bottomPadding} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// // Helper function to get gradient colors based on plan
// const getGradientColors = (planId) => {
//   switch (planId) {
//     case 'silver':
//       return [
//         '#a9a9a9',
//         '#ffff',
//         '#c0c0c0',
//         '#a9a9a9'
//       ];
//     case 'gold':
//       return [
//         '#fff8dc',
//         '#fafad2',
//         '#ffd700',
//         '#daa520',
//         '#fff8dc'
//       ];
//     case 'platinum':
//       return [
//         '#E5E4E2',
//         '#F5F5F5',
//         '#FFFFFF',
//         '#F5F5F5',
//         '#E5E4E2'
//       ];
//     default:
//       return ['#FFF', '#FFF'];
//   }
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   container: {
//     flexGrow: 1,
//     paddingBottom: 30,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     alignItems: 'center',
//     paddingVertical: 25,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//     marginBottom: 5,
//   },
//   headerSubtitle: {
//     fontSize: 16,
//     color: '#666',
//   },
//   planIndicators: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   planIndicator: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   planIndicatorActive: {
//     backgroundColor: 'rgba(255, 107, 107, 0.1)',
//   },
//   planIndicatorText: {
//     fontSize: 14,
//     color: '#888',
//     fontWeight: '500',
//     marginLeft: 5,
//   },
//   planIndicatorTextActive: {
//     color: '#FF6B6B',
//     fontWeight: 'bold',
//   },
//   indicatorDot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//   },
//   silverIndicator: {
//     backgroundColor: '#C0C0C0',
//   },
//   goldIndicator: {
//     backgroundColor: '#FFD700',
//   },
//   platinumIndicator: {
//     backgroundColor: '#E5E4E2',
//   },
//   cardsContainer: {
//     height: 600,
//     marginBottom: 15,
//   },
//   cardScrollContent: {
//     paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
//   },
//   membershipCard: {
//     borderRadius: 20,
//     padding: 25,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 15,
//     elevation: 5,
//     minHeight: 550,
//     position: 'relative',
//   },
//   silverGradientCard: {
//     borderWidth: 1,
//     borderColor: '#dcdcdc',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 5,
//   },
//   goldGradientCard: {
//     borderWidth: 1,
//     borderColor: '#e6c200',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   platinumGradientCard: {
//     borderWidth: 1,
//     borderColor: '#D3D3D3',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.25,
//     shadowOffset: { width: 2, height: 2 },
//     shadowRadius: 4,
//   },
//   cardBadgeContainer: {
//     position: 'relative',
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: -40,
//     zIndex: 10,
//   },
//   cardBadge: {
//     paddingHorizontal: 15,
//     paddingVertical: 6,
//     borderRadius: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   silverBadge: {
//     backgroundColor: '#C0C0C0',
//   },
//   recommendedBadge: {
//     backgroundColor: '#FF6B6B',
//   },
//   premiumBadge: {
//     backgroundColor: '#5D6D7E',
//   },
//   cardBadgeText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//     fontSize: 12,
//     marginHorizontal: 4,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//     marginBottom: 20,
//   },
//   cardTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#FF6B6B',
//   },
//   platinumTitle: {
//     color: '#5D6D7E',
//   },
//   cardSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 20,
//   },
//   originalPrice: {
//     fontSize: 16,
//     color: '#888',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   discountedPrice: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   perMonth: {
//     fontSize: 14,
//     color: '#666',
//     marginLeft: 10,
//     marginBottom: 5,
//   },
//   featuresContainer: {
//     marginBottom: 25,
//   },
//   featureItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 12,
//   },
//   featureText: {
//     marginLeft: 10,
//     color: '#555',
//     flex: 1,
//     lineHeight: 20,
//   },
//   payButton: {
//     padding: 16,
//     borderRadius: 12,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   disabledButton: {
//     backgroundColor: '#CCC',
//   },
//   payButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   navigationArrows: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   arrowButton: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   arrowButtonDisabled: {
//     backgroundColor: '#F5F5F5',
//   },
//   navigationText: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#666',
//     width: 40,
//     textAlign: 'center',
//   },
//   paymentOptions: {
//     paddingHorizontal: 20,
//     marginBottom: 25,
//     backgroundColor: '#FFFFFF',
//   },
//   paymentTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   paymentIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   paymentIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 8,
//     shadowColor: 'rgba(0, 0, 0, 0.1)',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportSection: {
//     paddingHorizontal: 20,
//     backgroundColor: '#FFFFFF',
//   },
//   supportCard: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     marginBottom: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   supportIcon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFF0F0',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   supportContent: {
//     flex: 1,
//   },
//   supportTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   supportText: {
//     fontSize: 14,
//     color: '#666',
//   },
//   chatButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#25D366',
//     padding: 16,
//     borderRadius: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   bottomPadding: {
//     height: 70,
//   },
// });




// app/(tabs)/Upgrade.jsx
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated, Alert } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFirestore } from '../hooks/useFirebase';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_SPACING = 15;
const ACTIVE_CARD_WIDTH = width * 0.85;
const INACTIVE_CARD_WIDTH = width * 0.75;

// Razorpay configuration
const RAZORPAY_KEY_ID = 'rzp_test_RP9jVzAyEEN7Xr';

// Plan configurations
const PLANS = [
  {
    id: 'silver',
    name: 'Silver',
    badge: 'BASIC',
    badgeStyle: 'silverBadge',
    duration: 'Monthly Plan',
    originalPrice: 1000,
    discountedPrice: 500,
    savings: 0,
    icon: 'medal-outline',
    features: [
      'Unlimited profile browsing',
      'Send likes & view visitors',
      '30 connections per day',
      'View contact details',
      'Basic matchmaking filters'
    ],
    description: 'Monthly Plan',
    durationInDays: 30
  },
  {
    id: 'gold',
    name: 'Gold',
    badge: 'RECOMMENDED',
    badgeStyle: 'recommendedBadge',
    duration: 'Quarterly Plan',
    originalPrice: 1500,
    discountedPrice: 1200,
    savings: 300,
    icon: 'medal',
    features: [
      'Everything in Silver +',
      'Unlimited connections',
      'Priority visibility',
      'Advanced filters',
      'Verified profiles only',
      'Direct call/chat option'
    ],
    description: 'Quarterly Plan',
    durationInDays: 90
  },
  {
    id: 'platinum',
    name: 'Platinum',
    badge: 'PREMIUM',
    badgeStyle: 'premiumBadge',
    duration: 'Yearly Plan',
    originalPrice: 6000,
    discountedPrice: 3000,
    savings: 3000,
    icon: 'diamond',
    features: [
      'Everything in Gold +',
      'Top profile highlighting',
      'Personalized matchmaking',
      'Free invitation templates',
      'Community events access',
      'Premium user badge'
    ],
    description: 'Yearly Plan',
    durationInDays: 365
  }
];

// Storage keys
const USER_SUBSCRIPTION_KEY = 'user_subscription';

export default function Upgrade() {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(1);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [userSubscription, setUserSubscription] = useState(null);
  const { userData, updateUserProfile } = useFirestore();

  // Load user subscription on component mount
  useEffect(() => {
    loadUserSubscription();
  }, []);

  // Load user subscription from storage and backend
  const loadUserSubscription = async () => {
    try {
      // First check local storage
      const subscription = await AsyncStorage.getItem(USER_SUBSCRIPTION_KEY);
      if (subscription) {
        const subscriptionData = JSON.parse(subscription);
        setUserSubscription(subscriptionData);
      }
      
      // Then check backend user data
      if (userData?.subscription) {
        const backendSubscription = userData.subscription;
        setUserSubscription(backendSubscription);
        await AsyncStorage.setItem(USER_SUBSCRIPTION_KEY, JSON.stringify(backendSubscription));
      }
    } catch (error) {
      console.error('Error loading subscription:', error);
    }
  };

  // Save user subscription to storage and backend
  const saveUserSubscription = async (subscriptionData) => {
    try {
      // Save to local storage
      await AsyncStorage.setItem(USER_SUBSCRIPTION_KEY, JSON.stringify(subscriptionData));
      setUserSubscription(subscriptionData);
      
      // Save to backend
      await updateUserProfile({
        subscription: subscriptionData,
        isPremium: true,
        premiumPlan: subscriptionData.planId,
        premiumSince: subscriptionData.startDate,
        premiumUntil: subscriptionData.endDate
      });
      
    } catch (error) {
      console.error('Error saving subscription:', error);
      throw error;
    }
  };

  // Check if user has active subscription
  const hasActiveSubscription = () => {
    if (!userSubscription) return false;
    
    const currentDate = new Date();
    const endDate = new Date(userSubscription.endDate);
    return currentDate <= endDate && userSubscription.status === 'active';
  };

  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Calculate remaining days
  const getRemainingDays = () => {
    if (!userSubscription) return 0;
    
    const currentDate = new Date();
    const endDate = new Date(userSubscription.endDate);
    const diffTime = endDate - currentDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? diffDays : 0;
  };

  // Handle scroll event to update active index
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / (ACTIVE_CARD_WIDTH + CARD_SPACING));
        setActiveIndex(index);
      }
    }
  );

  // Scroll to specific plan
  const scrollToPlan = (index) => {
    setActiveIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
      animated: true
    });
  };

  // Get card scale based on index
  const getCardScale = (index) => {
    return scrollX.interpolate({
      inputRange: [
        (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
        index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
        (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
      ],
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });
  };

  // Get card opacity based on index
  const getCardOpacity = (index) => {
    return scrollX.interpolate({
      inputRange: [
        (index - 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
        index * (ACTIVE_CARD_WIDTH + CARD_SPACING),
        (index + 1) * (ACTIVE_CARD_WIDTH + CARD_SPACING),
      ],
      outputRange: [0.7, 1, 0.7],
      extrapolate: 'clamp',
    });
  };

  // Handle payment for a specific plan
  const handlePayment = async (plan) => {
    if (processingPayment) return;
    
    setProcessingPayment(true);
    
    try {
      const amount = plan.discountedPrice * 100; // Convert to paise
      
      const options = {
        description: `Shaadivasi ${plan.name} Plan Subscription`,
        image: 'https://your-company-logo.png',
        currency: 'INR',
        key: RAZORPAY_KEY_ID,
        amount: amount.toString(),
        name: 'Shaadivasi Matrimony',
        prefill: {
          email: 'user@example.com',
          contact: '9999999999',
          name: 'User Name'
        },
        theme: { color: '#FF6B6B' },
        notes: {
          plan: plan.id,
          duration: plan.duration
        }
      };

      RazorpayCheckout.open(options).then(async (data) => {
        // Handle successful payment
        setProcessingPayment(false);
        
        // Create subscription data
        const startDate = new Date();
        const endDate = new Date();
        endDate.setDate(startDate.getDate() + plan.durationInDays);
        
        const subscriptionData = {
          planId: plan.id,
          planName: plan.name,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          paymentId: data.razorpay_payment_id,
          amount: plan.discountedPrice,
          status: 'active',
          durationInDays: plan.durationInDays,
          purchasedAt: new Date().toISOString()
        };
        
        // Save subscription to both storage and backend
        await saveUserSubscription(subscriptionData);
        
        Alert.alert(
          'Payment Successful! 🎉',
          `You have successfully subscribed to ${plan.name} plan.\n\nValid from ${formatDate(startDate)} to ${formatDate(endDate)}`,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed')
            }
          ]
        );
        console.log('Payment Success:', data);
      }).catch((error) => {
        setProcessingPayment(false);
        
        // Handle specific error cases
        if (error.code === 2) {
          // User cancelled payment
          Alert.alert(
            'Payment Cancelled',
            'Your payment was cancelled. You can try again whenever you are ready.',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
              }
            ]
          );
          console.log('Payment cancelled by user');
        } else if (error.code === 1) {
          // Network error
          Alert.alert(
            'Network Error',
            'Please check your internet connection and try again.',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
              }
            ]
          );
          console.log('Network error:', error);
        } else {
          // Other errors
          Alert.alert(
            'Payment Failed ❌',
            `We couldn't process your payment. Please try again.\n\nError: ${error.description || 'Unknown error'}`,
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
              }
            ]
          );
          console.log('Payment Error:', error);
        }
      });

    } catch (error) {
      setProcessingPayment(false);
      Alert.alert(
        'Error',
        'Failed to process payment. Please try again.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
          }
        ]
      );
      console.error('Payment processing error:', error);
    }
  };

  // Auto-scroll to Gold card on component mount
  React.useEffect(() => {
    setTimeout(() => {
      scrollToPlan(1);
    }, 100);
  }, []);

  // Render badge based on plan
  const renderBadge = (plan) => {
    const isRecommended = plan.badge === 'RECOMMENDED';
    const isPremium = plan.badge === 'PREMIUM';
    
    return (
      <View style={[styles.cardBadgeContainer, { marginBottom: 20 }]}>
        <View style={[styles.cardBadge, styles[plan.badgeStyle]]}>
          {isRecommended && <Ionicons name="star" size={14} color="#FFF" />}
          {isPremium && <Ionicons name="diamond" size={14} color="#FFF" />}
          <Text style={styles.cardBadgeText}>{plan.badge}</Text>
          {isRecommended && <Ionicons name="star" size={14} color="#FFF" />}
          {isPremium && <Ionicons name="diamond" size={14} color="#FFF" />}
        </View>
      </View>
    );
  };

  // Render price section
  const renderPriceSection = (plan) => (
    <View style={styles.priceContainer}>
      <Text style={styles.originalPrice}>₹{plan.originalPrice}</Text>
      <Text style={styles.discountedPrice}>₹{plan.discountedPrice}</Text>
      <Text style={styles.perMonth}>
        {plan.savings > 0 ? `Save ₹${plan.savings}` : `/month`}
      </Text>
    </View>
  );

  // Render features list
  const renderFeatures = (plan) => (
    <View style={styles.featuresContainer}>
      {plan.features.map((feature, index) => (
        <View key={index} style={styles.featureItem}>
          <Feather name="check" size={18} color="#4CAF50" />
          <Text style={styles.featureText}>{feature}</Text>
        </View>
      ))}
    </View>
  );

  // Render user subscription info
  const renderSubscriptionInfo = () => {
    if (!hasActiveSubscription()) return null;

    const remainingDays = getRemainingDays();
    
    return (
      <View style={styles.subscriptionContainer}>
        <LinearGradient
          colors={['#4CAF50', '#45a049']}
          style={styles.subscriptionCard}
        >
          <View style={styles.subscriptionHeader}>
            <Ionicons name="checkmark-circle" size={28} color="#FFF" />
            <Text style={styles.subscriptionTitle}>Premium Member</Text>
          </View>
          
          <View style={styles.subscriptionDetails}>
            <View style={styles.subscriptionDetail}>
              <Text style={styles.detailLabel}>Current Plan:</Text>
              <Text style={styles.detailValue}>{userSubscription.planName}</Text>
            </View>
            
            <View style={styles.subscriptionDetail}>
              <Text style={styles.detailLabel}>Valid From:</Text>
              <Text style={styles.detailValue}>{formatDate(userSubscription.startDate)}</Text>
            </View>
            
            <View style={styles.subscriptionDetail}>
              <Text style={styles.detailLabel}>Valid Until:</Text>
              <Text style={styles.detailValue}>{formatDate(userSubscription.endDate)}</Text>
            </View>
            
            <View style={styles.subscriptionDetail}>
              <Text style={styles.detailLabel}>Remaining Days:</Text>
              <Text style={[styles.detailValue, styles.remainingDays]}>
                {remainingDays} {remainingDays === 1 ? 'day' : 'days'}
              </Text>
            </View>
          </View>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${(remainingDays / userSubscription.durationInDays) * 100}%` }
                ]} 
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView 
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
          <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
        </View>

        {/* Current Subscription Info */}
        {renderSubscriptionInfo()}

        {/* Plan Indicators */}
        <View style={styles.planIndicators}>
          {PLANS.map((plan, index) => (
            <TouchableOpacity 
              key={plan.id}
              style={[styles.planIndicator, activeIndex === index && styles.planIndicatorActive]} 
              onPress={() => scrollToPlan(index)}
            >
              <View style={[styles.indicatorDot, styles[`${plan.id}Indicator`]]} />
              <Text style={[styles.planIndicatorText, activeIndex === index && styles.planIndicatorTextActive]}>
                {plan.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Membership Cards - Horizontal Scroll */}
        <View style={styles.cardsContainer}>
          <Animated.ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={ACTIVE_CARD_WIDTH + CARD_SPACING}
            decelerationRate="fast"
            contentContainerStyle={styles.cardScrollContent}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            initialScrollIndex={1}
          >
            {PLANS.map((plan, index) => (
              <Animated.View 
                key={plan.id}
                style={[
                  {
                    width: ACTIVE_CARD_WIDTH,
                    transform: [{ scale: getCardScale(index) }],
                    opacity: getCardOpacity(index),
                    marginRight: index < PLANS.length - 1 ? CARD_SPACING : 0,
                  }
                ]}
              >
                <LinearGradient
                  colors={getGradientColors(plan.id)}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[styles.membershipCard, styles[`${plan.id}GradientCard`]]}
                >
                  {renderBadge(plan)}
                  
                  <View style={styles.cardHeader}>
                    <View>
                      <Text style={[
                        styles.cardTitle, 
                        plan.id === 'platinum' && styles.platinumTitle
                      ]}>
                        {plan.name}
                      </Text>
                      <Text style={styles.cardSubtitle}>{plan.description}</Text>
                    </View>
                    <Ionicons name={plan.icon} size={32} color="#FF6B6B" />
                  </View>
                  
                  {renderPriceSection(plan)}
                  {renderFeatures(plan)}
                  
                  <TouchableOpacity 
                    style={[
                      styles.payButton, 
                      styles.primaryButton,
                      (processingPayment || hasActiveSubscription()) && styles.disabledButton
                    ]}
                    onPress={() => handlePayment(plan)}
                    disabled={processingPayment || hasActiveSubscription()}
                  >
                    <Text style={styles.payButtonText}>
                      {processingPayment 
                        ? 'Processing...' 
                        : hasActiveSubscription() 
                          ? 'Already Subscribed' 
                          : `Choose ${plan.name}`
                      }
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </Animated.View>
            ))}
          </Animated.ScrollView>
        </View>

        {/* Navigation Arrows */}
        <View style={styles.navigationArrows}>
          <TouchableOpacity 
            style={[styles.arrowButton, activeIndex === 0 && styles.arrowButtonDisabled]} 
            onPress={() => scrollToPlan(activeIndex - 1)}
            disabled={activeIndex === 0}
          >
            <Ionicons name="chevron-back" size={24} color={activeIndex === 0 ? "#CCC" : "#FF6B6B"} />
          </TouchableOpacity>
          
          <Text style={styles.navigationText}>
            {activeIndex + 1} / {PLANS.length}
          </Text>
          
          <TouchableOpacity 
            style={[styles.arrowButton, activeIndex === PLANS.length - 1 && styles.arrowButtonDisabled]} 
            onPress={() => scrollToPlan(activeIndex + 1)}
            disabled={activeIndex === PLANS.length - 1}
          >
            <Ionicons name="chevron-forward" size={24} color={activeIndex === PLANS.length - 1 ? "#CCC" : "#FF6B6B"} />
          </TouchableOpacity>
        </View>

        {/* Payment Options */}
        <View style={styles.paymentOptions}>
          <Text style={styles.paymentTitle}>Secure Payment Methods</Text>
          <View style={styles.paymentIcons}>
            <View style={styles.paymentIcon}>
              <FontAwesome name="credit-card" size={24} color="#555" />
            </View>
            <View style={styles.paymentIcon}>
              <FontAwesome name="google-wallet" size={24} color="#555" />
            </View>
            <View style={styles.paymentIcon}>
              <FontAwesome name="paypal" size={24} color="#555" />
            </View>
            <View style={styles.paymentIcon}>
              <FontAwesome name="bank" size={24} color="#555" />
            </View>
          </View>
        </View>

        {/* Support Section */}
        <View style={styles.supportSection}>
          <View style={styles.supportCard}>
            <View style={styles.supportIcon}>
              <Ionicons name="headset" size={28} color="#FF6B6B" />
            </View>
            <View style={styles.supportContent}>
              <Text style={styles.supportTitle}>Need Help Deciding?</Text>
              <Text style={styles.supportText}>Our team is available 24/7 to assist you</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.chatButton}>
            <FontAwesome name="whatsapp" size={20} color="#fff" />
            <Text style={styles.chatButtonText}>Chat with us</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom padding to avoid tab bar overlap */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper function to get gradient colors based on plan
const getGradientColors = (planId) => {
  switch (planId) {
    case 'silver':
      return [
        '#a9a9a9',
        '#ffff',
        '#c0c0c0',
        '#a9a9a9'
      ];
    case 'gold':
      return [
        '#fff8dc',
        '#fafad2',
        '#ffd700',
        '#daa520',
        '#fff8dc'
      ];
    case 'platinum':
      return [
        '#E5E4E2',
        '#F5F5F5',
        '#FFFFFF',
        '#F5F5F5',
        '#E5E4E2'
      ];
    default:
      return ['#FFF', '#FFF'];
  }
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: '#F8F9FA',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  subscriptionContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  subscriptionCard: {
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  subscriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 10,
  },
  subscriptionDetails: {
    marginBottom: 15,
  },
  subscriptionDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#E0E0E0',
    fontWeight: '500',
  },
  detailValue: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '600',
  },
  remainingDays: {
    color: '#FFEB3B',
    fontWeight: 'bold',
  },
  progressContainer: {
    marginTop: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFEB3B',
    borderRadius: 3,
  },
  planIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
  },
  planIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  planIndicatorActive: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
  },
  planIndicatorText: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
    marginLeft: 5,
  },
  planIndicatorTextActive: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  indicatorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  silverIndicator: {
    backgroundColor: '#C0C0C0',
  },
  goldIndicator: {
    backgroundColor: '#FFD700',
  },
  platinumIndicator: {
    backgroundColor: '#E5E4E2',
  },
  cardsContainer: {
    height: 600,
    marginBottom: 15,
  },
  cardScrollContent: {
    paddingHorizontal: (width - ACTIVE_CARD_WIDTH) / 2,
  },
  membershipCard: {
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
    minHeight: 550,
    position: 'relative',
  },
  silverGradientCard: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  goldGradientCard: {
    borderWidth: 1,
    borderColor: '#e6c200',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  platinumGradientCard: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  cardBadgeContainer: {
    position: 'relative',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -40,
    zIndex: 10,
  },
  cardBadge: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  silverBadge: {
    backgroundColor: '#C0C0C0',
  },
  recommendedBadge: {
    backgroundColor: '#FF6B6B',
  },
  premiumBadge: {
    backgroundColor: '#5D6D7E',
  },
  cardBadgeText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
    marginHorizontal: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  platinumTitle: {
    color: '#5D6D7E',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  originalPrice: {
    fontSize: 16,
    color: '#888',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  perMonth: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
    marginBottom: 5,
  },
  featuresContainer: {
    marginBottom: 25,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  featureText: {
    marginLeft: 10,
    color: '#555',
    flex: 1,
    lineHeight: 20,
  },
  payButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#FF6B6B',
  },
  disabledButton: {
    backgroundColor: '#CCC',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navigationArrows: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    backgroundColor: '#F8F9FA',
  },
  arrowButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  arrowButtonDisabled: {
    backgroundColor: '#F5F5F5',
  },
  navigationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    width: 40,
    textAlign: 'center',
  },
  paymentOptions: {
    paddingHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#F8F9FA',
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paymentIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  supportSection: {
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
  },
  supportCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  supportIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  supportContent: {
    flex: 1,
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  supportText: {
    fontSize: 14,
    color: '#666',
  },
  chatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25D366',
    padding: 16,
    borderRadius: 12,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  bottomPadding: {
    height: 70,
  },
});