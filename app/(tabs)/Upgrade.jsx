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

// app/(tabs)/Upgrade.jsx
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_SPACING = 15;
const ACTIVE_CARD_WIDTH = width * 0.85;
const INACTIVE_CARD_WIDTH = width * 0.75;

export default function Upgrade() {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = useState(1); // Start with Gold plan as active

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

  // Auto-scroll to Gold card on component mount
  React.useEffect(() => {
    setTimeout(() => {
      scrollToPlan(1); // Scroll to Gold card (index 1)
    }, 100);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🌸 Shaadivasi Premium</Text>
          <Text style={styles.headerSubtitle}>Upgrade to Find Your Perfect Match</Text>
        </View>

        {/* Plan Indicators */}
        <View style={styles.planIndicators}>
          <TouchableOpacity 
            style={[styles.planIndicator, activeIndex === 0 && styles.planIndicatorActive]} 
            onPress={() => scrollToPlan(0)}
          >
            <View style={[styles.indicatorDot, styles.silverIndicator]} />
            <Text style={[styles.planIndicatorText, activeIndex === 0 && styles.planIndicatorTextActive]}>Silver</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.planIndicator, activeIndex === 1 && styles.planIndicatorActive]} 
            onPress={() => scrollToPlan(1)}
          >
            <View style={[styles.indicatorDot, styles.goldIndicator]} />
            <Text style={[styles.planIndicatorText, activeIndex === 1 && styles.planIndicatorTextActive]}>Gold</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.planIndicator, activeIndex === 2 && styles.planIndicatorActive]} 
            onPress={() => scrollToPlan(2)}
          >
            <View style={[styles.indicatorDot, styles.platinumIndicator]} />
            <Text style={[styles.planIndicatorText, activeIndex === 2 && styles.planIndicatorTextActive]}>Platinum</Text>
          </TouchableOpacity>
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
            initialScrollIndex={1} // Start with Gold card
          >
            {/* Silver Plan with Silver Gradient */}
            <Animated.View style={[
              {
                width: ACTIVE_CARD_WIDTH,
                transform: [{ scale: getCardScale(0) }],
                opacity: getCardOpacity(0),
                marginRight: CARD_SPACING,
              }
            ]}>
              <LinearGradient
                colors={[
                  '#a9a9a9', // center bright shine
                  '#ffff', // platinum
                  '#c0c0c0', // silver tone
                  '#a9a9a9'  // darker edge
                ]}
                locations={[0, 0.4, 0.75, 1]}
                start={{ x: 0.5, y: 0.2 }} // center-ish
                end={{ x: 0.5, y: 1 }}     // downward fade
                style={[styles.membershipCard, styles.silverGradientCard]}
              >
                <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
                  <View style={[styles.cardBadge, styles.silverBadge]}>
                    <Text style={styles.cardBadgeText}>BASIC</Text>
                  </View>
                </View>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.cardTitle}>Silver</Text>
                    <Text style={styles.cardSubtitle}>Monthly Plan</Text>
                  </View>
                  <Ionicons name="medal-outline" size={32} color="#FF6B6B" />
                </View>
                
                <View style={styles.priceContainer}>
                  <Text style={styles.originalPrice}>₹1000</Text>
                  <Text style={styles.discountedPrice}>₹500</Text>
                  <Text style={styles.perMonth}>/month</Text>
                </View>
                
                <View style={styles.featuresContainer}>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Unlimited profile browsing</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Send likes & view visitors</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>30 connections per day</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>View contact details</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Basic matchmaking filters</Text>
                  </View>
                </View>
                
                <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
                  <Text style={styles.payButtonText}>Choose Silver</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Animated.View>

            {/* Gold Plan - Recommended with Enhanced Gradient */}
            <Animated.View style={[
              {
                width: ACTIVE_CARD_WIDTH,
                transform: [{ scale: getCardScale(1) }],
                opacity: getCardOpacity(1),
                marginRight: CARD_SPACING,
              }
            ]}>
              <LinearGradient
                colors={[
                  '#fff8dc', // soft highlight (ivory gold)
                  '#fafad2', // light goldenrod yellow
                  '#ffd700', // pure gold
                  '#daa520', // goldenrod depth
                  '#fff8dc'  // highlight again for shine
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.membershipCard, styles.goldGradientCard]}
              >
                <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
                  <View style={[styles.cardBadge, styles.recommendedBadge]}>
                    <Ionicons name="star" size={14} color="#FFF" />
                    <Text style={styles.cardBadgeText}>RECOMMENDED</Text>
                    <Ionicons name="star" size={14} color="#FFF" />
                  </View>
                </View>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.cardTitle}>Gold</Text>
                    <Text style={styles.cardSubtitle}>Quarterly Plan</Text>
                  </View>
                  <Ionicons name="medal" size={32} color="#FF6B6B" />
                </View>
                
                <View style={styles.priceContainer}>
                  <Text style={styles.originalPrice}>₹1500</Text>
                  <Text style={styles.discountedPrice}>₹1200</Text>
                  <Text style={styles.perMonth}>Save ₹300</Text>
                </View>
                
                <View style={styles.featuresContainer}>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Everything in Silver +</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Unlimited connections</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Priority visibility</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Advanced filters</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Verified profiles only</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Direct call/chat option</Text>
                  </View>
                </View>
                
                <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
                  <Text style={styles.payButtonText}>Choose Gold</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Animated.View>

            {/* Platinum Plan with Premium Gradient */}
            <Animated.View style={[
              {
                width: ACTIVE_CARD_WIDTH,
                transform: [{ scale: getCardScale(2) }],
                opacity: getCardOpacity(2),
              }
            ]}>
              <LinearGradient
                colors={[
                  '#E5E4E2', // platinum light
                  '#F5F5F5', // bright white
                  '#FFFFFF', // pure white
                  '#F5F5F5', // bright white
                  '#E5E4E2'  // platinum light again
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.membershipCard, styles.platinumGradientCard]}
              >
                <View style={[styles.cardBadgeContainer, {marginBottom: 20}]}>
                  <View style={[styles.cardBadge, styles.premiumBadge]}>
                    <Ionicons name="diamond" size={14} color="#FFF" />
                    <Text style={styles.cardBadgeText}>PREMIUM</Text>
                    <Ionicons name="diamond" size={14} color="#FFF" />
                  </View>
                </View>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={[styles.cardTitle, styles.platinumTitle]}>Platinum</Text>
                    <Text style={styles.cardSubtitle}>Yearly Plan</Text>
                  </View>
                  <Ionicons name="diamond" size={32} color="#FF6B6B" />
                </View>
                
                <View style={styles.priceContainer}>
                  <Text style={styles.originalPrice}>₹6000</Text>
                  <Text style={styles.discountedPrice}>₹3000</Text>
                  <Text style={styles.perMonth}>Save ₹3000</Text>
                </View>
                
                <View style={styles.featuresContainer}>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Everything in Gold +</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Top profile highlighting</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Personalized matchmaking</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Free invitation templates</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Community events access</Text>
                  </View>
                  <View style={styles.featureItem}>
                    <Feather name="check" size={18} color="#4CAF50" />
                    <Text style={styles.featureText}>Premium user badge</Text>
                  </View>
                </View>
                
                <TouchableOpacity style={[styles.payButton, styles.primaryButton]}>
                  <Text style={styles.payButtonText}>Choose Platinum</Text>
                </TouchableOpacity>
              </LinearGradient>
            </Animated.View>
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
            {activeIndex + 1} / 3
          </Text>
          
          <TouchableOpacity 
            style={[styles.arrowButton, activeIndex === 2 && styles.arrowButtonDisabled]} 
            onPress={() => scrollToPlan(activeIndex + 1)}
            disabled={activeIndex === 2}
          >
            <Ionicons name="chevron-forward" size={24} color={activeIndex === 2 ? "#CCC" : "#FF6B6B"} />
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flexGrow: 1,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
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
  planIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#FFFFFF',
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
});