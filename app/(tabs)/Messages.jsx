// // app/(tabs)/Messages.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList } from 'react-native';
// import React, { useState } from 'react';
// import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Received');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample messages data
//   const messagesData = [
//     {
//       id: 1,
//       name: 'Ananya',
//       lastMessage: 'Hi there! How are you doing?',
//       time: '2h ago',
//       unread: true,
//       image: 'https://randomuser.me/api/portraits/women/44.jpg',
//       status: 'online'
//     },
//     {
//       id: 2,
//       name: 'Meera',
//       lastMessage: 'Let me know when you are free',
//       time: '1d ago',
//       unread: false,
//       image: 'https://randomuser.me/api/portraits/women/68.jpg',
//       status: 'offline'
//     },
//     {
//       id: 3,
//       name: 'Divya',
//       lastMessage: 'Thanks for your message!',
//       time: '3d ago',
//       unread: false,
//       image: 'https://randomuser.me/api/portraits/women/32.jpg',
//       status: 'online'
//     },
//   ];

//   const filteredMessages = messagesData.filter(message => {
//     if (activeTab === 'Received' && !message.unread) return false;
//     if (activeTab === 'Awaiting Response' && message.unread) return false;
//     if (searchQuery && !message.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
//     return true;
//   });

//   const renderMessageItem = ({ item }) => (
//     <TouchableOpacity style={styles.messageItem}>
//       <View style={styles.avatarContainer}>
//         <Image source={{ uri: item.image }} style={styles.avatar} />
//         {item.status === 'online' && <View style={styles.onlineBadge} />}
//       </View>
//       <View style={styles.messageContent}>
//         <View style={styles.messageHeader}>
//           <Text style={styles.messageName}>{item.name}</Text>
//           <Text style={styles.messageTime}>{item.time}</Text>
//         </View>
//         <Text
//           style={[
//             styles.messageText,
//             item.unread && styles.unreadMessage
//           ]}
//           numberOfLines={1}
//         >
//           {item.lastMessage}
//         </Text>
//       </View>
//       {item.unread && <View style={styles.unreadBadge} />}
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Messages</Text>
//           <TouchableOpacity>
//             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs - Now with compact sizing */}
//         <View style={styles.tabsContainer}>
//           {['Received', 'Awaiting Response', 'Calls'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Received'
//               ? 'Incoming messages'
//               : activeTab === 'Awaiting Response'
//                 ? 'Awaiting your response'
//                 : 'Call history'}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search messages"
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages List */}
//         <FlatList
//           data={filteredMessages}
//           renderItem={renderMessageItem}
//           keyExtractor={item => item.id.toString()}
//           contentContainerStyle={styles.messagesList}
//           showsVerticalScrollIndicator={false}
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 15,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     marginBottom: 12,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//   },
//   searchContainer: {
//     marginBottom: 12,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 13,
//     color: '#666',
//     marginBottom: 8,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     height: 36,
//     marginRight: 10,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#333',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 6,
//   },
//   messagesList: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f5f5f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   avatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 4,
//   },
//   messageName: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#333',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#888',
//   },
//   messageText: {
//     fontSize: 13,
//     color: '#888',
//   },
//   unreadMessage: {
//     color: '#333',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
// });











//23/08/2025
// app/(tabs)/Messages.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList } from 'react-native';
// import React, { useState } from 'react';
// import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Received');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample messages data
//   const messagesData = [
//     {
//       id: 1,
//       name: 'Ananya',
//       lastMessage: 'Hi there! How are you doing?',
//       time: '2h ago',
//       unread: true,
//       image: 'https://randomuser.me/api/portraits/women/44.jpg',
//       status: 'online'
//     },
//     {
//       id: 2,
//       name: 'Meera',
//       lastMessage: 'Let me know when you are free',
//       time: '1d ago',
//       unread: false,
//       image: 'https://randomuser.me/api/portraits/women/68.jpg',
//       status: 'offline'
//     },
//     {
//       id: 3,
//       name: 'Divya',
//       lastMessage: 'Thanks for your message!',
//       time: '3d ago',
//       unread: false,
//       image: 'https://randomuser.me/api/portraits/women/32.jpg',
//       status: 'online'
//     },
//     {
//       id: 4,
//       name: 'Shreya',
//       lastMessage: 'Would love to connect with you!',
//       time: '5d ago',
//       unread: false,
//       image: 'https://randomuser.me/api/portraits/women/76.jpg',
//       status: 'offline'
//     },
//   ];

//   const filteredMessages = messagesData.filter(message => {
//     if (activeTab === 'Received' && !message.unread) return false;
//     if (activeTab === 'Awaiting Response' && message.unread) return false;
//     if (searchQuery && !message.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
//     return true;
//   });

//   const renderMessageItem = ({ item }) => (
//     <TouchableOpacity style={styles.messageItem}>
//       <View style={styles.avatarContainer}>
//         <Image source={{ uri: item.image }} style={styles.avatar} />
//         {item.status === 'online' && <View style={styles.onlineBadge} />}
//       </View>
//       <View style={styles.messageContent}>
//         <View style={styles.messageHeader}>
//           <Text style={styles.messageName}>{item.name}</Text>
//           <Text style={styles.messageTime}>{item.time}</Text>
//         </View>
//         <Text
//           style={[
//             styles.messageText,
//             item.unread && styles.unreadMessage
//           ]}
//           numberOfLines={1}
//         >
//           {item.lastMessage}
//         </Text>
//       </View>
//       {item.unread && <View style={styles.unreadBadge} />}
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Messages</Text>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Received', 'Awaiting Response', 'Calls'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Received'
//               ? 'Incoming messages'
//               : activeTab === 'Awaiting Response'
//                 ? 'Awaiting your response'
//                 : 'Call history'}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search messages"
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages List */}
//         <FlatList
//           data={filteredMessages}
//           renderItem={renderMessageItem}
//           keyExtractor={item => item.id.toString()}
//           contentContainerStyle={styles.messagesList}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={
//             <View style={styles.emptyContainer}>
//               <Feather name="message-square" size={48} color="#ddd" />
//               <Text style={styles.emptyText}>No messages found</Text>
//             </View>
//           }
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   messagesList: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
// });






// 29/08/2025
// // app/(tabs)/Messages.js
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();

//   // Translations
//   const translations = {
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     incomingMessages: {
//       ENG: "Incoming messages",
//       HI: "आने वाले संदेश"
//     },
//     awaitingResponse: {
//       ENG: "Awaiting your response",
//       HI: "आपकी प्रतिक्रिया का इंतजार"
//     },
//     callHistory: {
//       ENG: "Call history",
//       HI: "कॉल इतिहास"
//     },
//     searchMessages: {
//       ENG: "Search messages",
//       HI: "संदेश खोजें"
//     },
//     noMessages: {
//       ENG: "No messages yet",
//       HI: "अभी तक कोई संदेश नहीं"
//     },
//     startConversation: {
//       ENG: "Start a conversation with someone you're interested in",
//       HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो"
//     },
//     noInterests: {
//       ENG: "No interests found",
//       HI: "कोई रुचि नहीं मिली"
//     },
//     interestsReceived: {
//       ENG: "Interests received",
//       HI: "प्राप्त रुचियाँ"
//     },
//     interestsSent: {
//       ENG: "Interests sent",
//       HI: "भेजी गई रुचियाँ"
//     },
//     accept: {
//       ENG: "Accept",
//       HI: "स्वीकार करें"
//     },
//     decline: {
//       ENG: "Decline",
//       HI: "अस्वीकार करें"
//     },
//     pending: {
//       ENG: "Pending",
//       HI: "लंबित"
//     },
//     accepted: {
//       ENG: "Accepted",
//       HI: "स्वीकृत"
//     },
//     declined: {
//       ENG: "Declined",
//       HI: "अस्वीकृत"
//     },
//     viewProfile: {
//       ENG: "View Profile",
//       HI: "प्रोफाइल देखें"
//     },
//     startChat: {
//       ENG: "Start Chat",
//       HI: "चैट शुरू करें"
//     }
//   };

//   // Listen for real-time chat updates
//   useEffect(() => {
//     if (!user) return;

//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const chatsData = [];
//       querySnapshot.forEach((doc) => {
//         chatsData.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
//       setChats(chatsData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Listen for received interests
//   useEffect(() => {
//     if (!user) return;

//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const interestsData = [];
//       querySnapshot.forEach((doc) => {
//         interestsData.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
//       setReceivedInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Listen for sent interests
//   useEffect(() => {
//     if (!user) return;

//     const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const interestsData = [];
//       querySnapshot.forEach((doc) => {
//         interestsData.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
//       setSentInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Listen for online users
//   useEffect(() => {
//     if (!user) return;

//     const onlineRef = collection(db, 'onlineUsers');
//     const q = query(onlineRef, where('lastSeen', '>', new Date(Date.now() - 300000))); // 5 minutes
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const onlineUsersData = [];
//       querySnapshot.forEach((doc) => {
//         if (doc.id !== user.id) {
//           onlineUsersData.push(doc.id);
//         }
//       });
//       setOnlineUsers(onlineUsersData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         // Chat exists, navigate to it
//         router.push(`/chat/${existingChat.id}?name=${interest.fromUserName}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             `${user.firstName} ${user.lastName}`,
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: `${user.firstName} ${user.lastName}`,
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         // Navigate to the new chat
//         router.push(`/chat/${chatRef.id}?name=${interest.fromUserName}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const otherParticipant = item.participants.find(p => p !== `${user.firstName} ${user.lastName}`);
//     const otherParticipantId = item.participantIds.find(id => id !== user.id);
//     const isOnline = onlineUsers.includes(otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${otherParticipant}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{otherParticipant}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
    
//     return (
//       <View style={styles.interestItem}>
//         <Image
//           source={{ uri: interest.fromUserImage || 'https://randomuser.me/api/portraits/women/44.jpg' }}
//           style={styles.interestAvatar}
//         />
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{interest.fromUserName}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.participants.some(p =>
//           p.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     marginRight: 16,
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });



//31/08
// app/(tabs)/Messages.js
// app/(tabs)/Messages.js
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();

//   // Translations
//   const translations = {
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     incomingMessages: {
//       ENG: "Incoming messages",
//       HI: "आने वाले संदेश"
//     },
//     awaitingResponse: {
//       ENG: "Awaiting your response",
//       HI: "आपकी प्रतिक्रिया का इंतजार"
//     },
//     callHistory: {
//       ENG: "Call history",
//       HI: "कॉल इतिहास"
//     },
//     searchMessages: {
//       ENG: "Search messages",
//       HI: "संदेश खोजें"
//     },
//     noMessages: {
//       ENG: "No messages yet",
//       HI: "अभी तक कोई संदेश नहीं"
//     },
//     startConversation: {
//       ENG: "Start a conversation with someone you're interested in",
//       HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो"
//     },
//     noInterests: {
//       ENG: "No interests found",
//       HI: "कोई रुचि नहीं मिली"
//     },
//     interestsReceived: {
//       ENG: "Interests received",
//       HI: "प्राप्त रुचियाँ"
//     },
//     interestsSent: {
//       ENG: "Interests sent",
//       HI: "भेजी गई रुचियाँ"
//     },
//     accept: {
//       ENG: "Accept",
//       HI: "स्वीकार करें"
//     },
//     decline: {
//       ENG: "Decline",
//       HI: "अस्वीकार करें"
//     },
//     pending: {
//       ENG: "Pending",
//       HI: "लंबित"
//     },
//     accepted: {
//       ENG: "Accepted",
//       HI: "स्वीकृत"
//     },
//     declined: {
//       ENG: "Declined",
//       HI: "अस्वीकृत"
//     },
//     viewProfile: {
//       ENG: "View Profile",
//       HI: "प्रोफाइल देखें"
//     },
//     startChat: {
//       ENG: "Start Chat",
//       HI: "चैट शुरू करें"
//     }
//   };

//   // Listen for real-time chat updates (WITH INDEX)
//   useEffect(() => {
//     if (!user?.id) return;

//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const chatsData = [];
//       querySnapshot.forEach((doc) => {
//         chatsData.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
//       setChats(chatsData);
//     }, (error) => {
//       console.error('Error listening to chats:', error);
//       // Fallback to client-side filtering if index not ready
//       const fallbackUnsubscribe = onSnapshot(chatsRef, (querySnapshot) => {
//         const chatsData = [];
//         querySnapshot.forEach((doc) => {
//           const chatData = doc.data();
//           if (chatData.participantIds && chatData.participantIds.includes(user.id)) {
//             chatsData.push({
//               id: doc.id,
//               ...chatData
//             });
//           }
//         });
//         // Sort manually
//         chatsData.sort((a, b) => {
//           const timeA = a.lastMessageTime?.toDate?.() || new Date(0);
//           const timeB = b.lastMessageTime?.toDate?.() || new Date(0);
//           return timeB - timeA;
//         });
//         setChats(chatsData);
//       });
//       return () => fallbackUnsubscribe();
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Listen for received interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const interestsData = [];
//       querySnapshot.forEach((doc) => {
//         interestsData.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
//       setReceivedInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Listen for sent interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const interestsData = [];
//       querySnapshot.forEach((doc) => {
//         interestsData.push({
//           id: doc.id,
//           ...doc.data()
//         });
//       });
//       setSentInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
//     const q = query(onlineRef, where('lastSeen', '>', new Date(Date.now() - 300000)));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const onlineUsersData = [];
//       querySnapshot.forEach((doc) => {
//         if (doc.id !== user.id) {
//           onlineUsersData.push(doc.id);
//         }
//       });
//       setOnlineUsers(onlineUsersData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest && interest.fromUserId) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         router.push(`/chat/${existingChat.id}?name=${interest.fromUserName}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             user.displayName || 'You',
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: user.displayName || 'You',
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         router.push(`/chat/${chatRef.id}?name=${interest.fromUserName}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const otherParticipant = item.participants.find(p => p !== (user?.displayName || 'You'));
//     const otherParticipantId = item.participantIds.find(id => id !== user?.id);
//     const isOnline = onlineUsers.includes(otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${otherParticipant}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{otherParticipant || 'Unknown User'}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
    
//     return (
//       <View style={styles.interestItem}>
//         <Image
//           source={{ uri: interest.fromUserImage || 'https://randomuser.me/api/portraits/women/44.jpg' }}
//           style={styles.interestAvatar}
//         />
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{interest.fromUserName || 'Unknown User'}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.participants.some(p =>
//           p.toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//     marginRight: 16,
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });

















//1/09/2025
// app/(tabs)/Messages.js
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useOnlineStatus } from '../hooks/useOnlineStatus';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userProfiles, setUserProfiles] = useState({});
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();

//   // Set up online status
//   useOnlineStatus();

//   // Translations
//   const translations = {
//     messages: {
//       ENG: "Messages",
//       HI: "संदेश"
//     },
//     incomingMessages: {
//       ENG: "Incoming messages",
//       HI: "आने वाले संदेश"
//     },
//     awaitingResponse: {
//       ENG: "Awaiting your response",
//       HI: "आपकी प्रतिक्रिया का इंतजार"
//     },
//     callHistory: {
//       ENG: "Call history",
//       HI: "कॉल इतिहास"
//     },
//     searchMessages: {
//       ENG: "Search messages",
//       HI: "संदेश खोजें"
//     },
//     noMessages: {
//       ENG: "No messages yet",
//       HI: "अभी तक कोई संदेश नहीं"
//     },
//     startConversation: {
//       ENG: "Start a conversation with someone you're interested in",
//       HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो"
//     },
//     noInterests: {
//       ENG: "No interests found",
//       HI: "कोई रुचि नहीं मिली"
//     },
//     interestsReceived: {
//       ENG: "Interests received",
//       HI: "प्राप्त रुचियाँ"
//     },
//     interestsSent: {
//       ENG: "Interests sent",
//       HI: "भेजी गई रुचियाँ"
//     },
//     accept: {
//       ENG: "Accept",
//       HI: "स्वीकार करें"
//     },
//     decline: {
//       ENG: "Decline",
//       HI: "अस्वीकार करें"
//     },
//     pending: {
//       ENG: "Pending",
//       HI: "लंबित"
//     },
//     accepted: {
//       ENG: "Accepted",
//       HI: "स्वीकृत"
//     },
//     declined: {
//       ENG: "Declined",
//       HI: "अस्वीकृत"
//     },
//     viewProfile: {
//       ENG: "View Profile",
//       HI: "प्रोफाइल देखें"
//     },
//     startChat: {
//       ENG: "Start Chat",
//       HI: "चैट शुरू करें"
//     },
//     online: {
//       ENG: "Online",
//       HI: "ऑनलाइन"
//     },
//     offline: {
//       ENG: "Offline",
//       HI: "ऑफलाइन"
//     }
//   };

//   // Fetch user profile data
//   const fetchUserProfile = async (userId) => {
//     if (userProfiles[userId]) return userProfiles[userId];
    
//     try {
//       // Check both Male and Female collections
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           const userProfile = {
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150',
//             age: profileData.age,
//             city: profileData.city
//           };
          
//           setUserProfiles(prev => ({ ...prev, [userId]: userProfile }));
//           return userProfile;
//         }
//       }
      
//       // Fallback if no profile found
//       const fallbackProfile = {
//         id: userId,
//         name: 'User',
//         photo: 'https://via.placeholder.com/150',
//         age: null,
//         city: null
//       };
      
//       setUserProfiles(prev => ({ ...prev, [userId]: fallbackProfile }));
//       return fallbackProfile;
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       return null;
//     }
//   };

//   // Listen for real-time chat updates
//   useEffect(() => {
//     if (!user?.id) return;

//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const chatsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const chatData = doc.data();
//         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
//         if (otherParticipantId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[otherParticipantId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(otherParticipantId);
//           }
          
//           chatsData.push({
//             id: doc.id,
//             ...chatData,
//             otherParticipantId,
//             otherParticipantName: userProfile?.name || 'User',
//             otherParticipantPhoto: userProfile?.photo
//           });
//         }
//       }
      
//       setChats(chatsData);
//     }, (error) => {
//       console.error('Error listening to chats:', error);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for received interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.fromUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.fromUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.fromUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             fromUserPhoto: userProfile?.photo,
//             fromUserName: userProfile?.name || interestData.fromUserName
//           });
//         }
//       }
      
//       setReceivedInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for sent interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.toUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.toUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.toUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             toUserPhoto: userProfile?.photo,
//             toUserName: userProfile?.name || interestData.toUserName
//           });
//         }
//       }
      
//       setSentInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
//     const q = query(onlineRef);
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const onlineUsersData = [];
//       const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (doc.id !== user.id && userData.lastSeen) {
//           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
//             onlineUsersData.push(doc.id);
//           }
//         }
//       });
      
//       setOnlineUsers(onlineUsersData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest && interest.fromUserId) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         router.push(`/chat/${existingChat.id}?name=${interest.fromUserName}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             user.displayName || 'You',
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: user.displayName || 'You',
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         router.push(`/chat/${chatRef.id}?name=${interest.fromUserName}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${item.otherParticipantName}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//           {isOnline && (
//             <View style={styles.onlineStatus}>
//               <View style={styles.onlineDot} />
//               <Text style={styles.onlineText}>{translations.online[language]}</Text>
//             </View>
//           )}
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
//     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
//     const userName = isReceived ? interest.fromUserName : interest.toUserName;
    
//     return (
//       <View style={styles.interestItem}>
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: userPhoto || 'https://via.placeholder.com/150' }}
//             style={styles.interestAvatar}
//           />
//           {onlineUsers.includes(isReceived ? interest.fromUserId : interest.toUserId) && (
//             <View style={styles.onlineBadge} />
//           )}
//         </View>
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{userName}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//     marginBottom: 4,
//   },
//   onlineStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 4,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });


















//trail2

// app/(tabs)/Messages.js
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useOnlineStatus } from '../hooks/useOnlineStatus';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userProfiles, setUserProfiles] = useState({});
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const appState = useRef(AppState.currentState);

//   // Set up online status
//   useOnlineStatus();

//   // Handle app state changes for online status
//   useEffect(() => {
//     const subscription = AppState.addEventListener('change', nextAppState => {
//       if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
//         // App came to foreground, update online status
//         updateOnlineStatus(true);
//       } else if (nextAppState.match(/inactive|background/)) {
//         // App went to background, update online status
//         updateOnlineStatus(false);
//       }
//       appState.current = nextAppState;
//     });

//     return () => {
//       subscription.remove();
//     };
//   }, [user]);

//   const updateOnlineStatus = async (isOnline) => {
//     if (!user?.id) return;
    
//     try {
//       const userStatusRef = doc(db, 'onlineUsers', user.id);
//       await setDoc(userStatusRef, {
//         isOnline,
//         lastSeen: serverTimestamp(),
//         userId: user.id,
//         userName: user.displayName || 'User'
//       });
//     } catch (error) {
//       console.error('Error updating online status:', error);
//     }
//   };

//   // Translations (same as before)
//   const translations = {
//     messages: { ENG: "Messages", HI: "संदेश" },
//     incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
//     awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
//     searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
//     noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
//     startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
//     noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
//     interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
//     interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
//     accept: { ENG: "Accept", HI: "स्वीकार करें" },
//     decline: { ENG: "Decline", HI: "अस्वीकार करें" },
//     pending: { ENG: "Pending", HI: "लंबित" },
//     accepted: { ENG: "Accepted", HI: "स्वीकृत" },
//     declined: { ENG: "Declined", HI: "अस्वीकृत" },
//     viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
//     startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
//     online: { ENG: "Online", HI: "ऑनलाइन" },
//     offline: { ENG: "Offline", HI: "ऑफलाइन" }
//   };

//   // Fetch user profile data
//   const fetchUserProfile = async (userId) => {
//     if (userProfiles[userId]) return userProfiles[userId];
    
//     try {
//       // Check both Male and Female collections
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           const userProfile = {
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           };
          
//           setUserProfiles(prev => ({ ...prev, [userId]: userProfile }));
//           return userProfile;
//         }
//       }
      
//       // Fallback if no profile found
//       const fallbackProfile = {
//         id: userId,
//         name: 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       };
      
//       setUserProfiles(prev => ({ ...prev, [userId]: fallbackProfile }));
//       return fallbackProfile;
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       return null;
//     }
//   };

//   // Listen for real-time chat updates
//   useEffect(() => {
//     if (!user?.id) return;

//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const chatsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const chatData = doc.data();
//         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
//         if (otherParticipantId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[otherParticipantId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(otherParticipantId);
//           }
          
//           chatsData.push({
//             id: doc.id,
//             ...chatData,
//             otherParticipantId,
//             otherParticipantName: userProfile?.name || 'User',
//             otherParticipantPhoto: userProfile?.photo
//           });
//         }
//       }
      
//       setChats(chatsData);
//     }, (error) => {
//       console.error('Error listening to chats:', error);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for received interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.fromUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.fromUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.fromUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             fromUserPhoto: userProfile?.photo,
//             fromUserName: userProfile?.name || interestData.fromUserName
//           });
//         }
//       }
      
//       setReceivedInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for sent interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.toUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.toUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.toUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             toUserPhoto: userProfile?.photo,
//             toUserName: userProfile?.name || interestData.toUserName
//           });
//         }
//       }
      
//       setSentInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for online users (simplified)
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (doc.id !== user.id && userData.lastSeen) {
//           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           // Consider user online if they were active in the last 5 minutes
//           if (lastSeen > fiveMinutesAgo) {
//             onlineUsersData.push(doc.id);
//           }
//         }
//       });
      
//       setOnlineUsers(onlineUsersData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest && interest.fromUserId) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         router.push(`/chat/${existingChat.id}?name=${interest.fromUserName}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             user.displayName || 'You',
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: user.displayName || 'You',
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         router.push(`/chat/${chatRef.id}?name=${interest.fromUserName}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${item.otherParticipantName}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//           {isOnline && (
//             <View style={styles.onlineStatus}>
//               <View style={styles.onlineDot} />
//               <Text style={styles.onlineText}>{translations.online[language]}</Text>
//             </View>
//           )}
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
//     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
//     const userName = isReceived ? interest.fromUserName : interest.toUserName;
//     const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
//     return (
//       <View style={styles.interestItem}>
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.interestAvatar}
//           />
//           {onlineUsers.includes(userId) && (
//             <View style={styles.onlineBadge} />
//           )}
//         </View>
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{userName}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//     marginBottom: 4,
//   },
//   onlineStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 4,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });




//10/09/2025
// // app/(tabs)/Messages.js Originals
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState } from 'react-native';
// import React, { useState, useEffect, useRef } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import { useOnlineStatus } from '../hooks/useOnlineStatus';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userProfiles, setUserProfiles] = useState({});
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const appState = useRef(AppState.currentState);

//   // Set up online status
//   useOnlineStatus();

//   // Handle app state changes for online status
//   useEffect(() => {
//     const subscription = AppState.addEventListener('change', nextAppState => {
//       if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
//         // App came to foreground, update online status
//         updateOnlineStatus(true);
//       } else if (nextAppState.match(/inactive|background/)) {
//         // App went to background, update online status
//         updateOnlineStatus(false);
//       }
//       appState.current = nextAppState;
//     });

//     return () => {
//       subscription.remove();
//     };
//   }, [user]);

//   const updateOnlineStatus = async (isOnline) => {
//     if (!user?.id) return;
    
//     try {
//       const userStatusRef = doc(db, 'onlineUsers', user.id);
//       await setDoc(userStatusRef, {
//         isOnline,
//         lastSeen: serverTimestamp(),
//         userId: user.id,
//         userName: user.displayName || 'User'
//       });
//     } catch (error) {
//       console.error('Error updating online status:', error);
//     }
//   };

//   // Translations
//   const translations = {
//     messages: { ENG: "Messages", HI: "संदेश" },
//     incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
//     awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
//     searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
//     noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
//     startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
//     noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
//     interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
//     interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
//     accept: { ENG: "Accept", HI: "स्वीकार करें" },
//     decline: { ENG: "Decline", HI: "अस्वीकार करें" },
//     pending: { ENG: "Pending", HI: "लंबित" },
//     accepted: { ENG: "Accepted", HI: "स्वीकृत" },
//     declined: { ENG: "Declined", HI: "अस्वीकृत" },
//     viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
//     startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
//     online: { ENG: "Online", HI: "ऑनलाइन" },
//     offline: { ENG: "Offline", HI: "ऑफलाइन" },
//     lastSeen: { ENG: "Last seen", HI: "अंतिम बार देखा गया" }
//   };

//   // Load user profiles from AsyncStorage
//   const loadUserProfilesFromStorage = async () => {
//     try {
//       const storedProfiles = await AsyncStorage.getItem('userProfiles');
//       if (storedProfiles) {
//         setUserProfiles(JSON.parse(storedProfiles));
//       }
//     } catch (error) {
//       console.error('Error loading user profiles from storage:', error);
//     }
//   };

//   // Save user profiles to AsyncStorage
//   const saveUserProfilesToStorage = async (profiles) => {
//     try {
//       await AsyncStorage.setItem('userProfiles', JSON.stringify(profiles));
//     } catch (error) {
//       console.error('Error saving user profiles to storage:', error);
//     }
//   };

//   // Fetch user profile data with caching
//   const fetchUserProfile = async (userId) => {
//     // Check if profile is already in state
//     if (userProfiles[userId]) return userProfiles[userId];
    
//     // Check if profile is in AsyncStorage
//     try {
//       const storedProfiles = await AsyncStorage.getItem('userProfiles');
//       if (storedProfiles) {
//         const parsedProfiles = JSON.parse(storedProfiles);
//         if (parsedProfiles[userId]) {
//           setUserProfiles(parsedProfiles);
//           return parsedProfiles[userId];
//         }
//       }
//     } catch (error) {
//       console.error('Error checking stored profiles:', error);
//     }
    
//     try {
//       // Check both Male and Female collections
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           const userProfile = {
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           };
          
//           // Update state and storage
//           const updatedProfiles = { ...userProfiles, [userId]: userProfile };
//           setUserProfiles(updatedProfiles);
//           saveUserProfilesToStorage(updatedProfiles);
          
//           return userProfile;
//         }
//       }
      
//       // Fallback if no profile found
//       const fallbackProfile = {
//         id: userId,
//         name: 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       };
      
//       const updatedProfiles = { ...userProfiles, [userId]: fallbackProfile };
//       setUserProfiles(updatedProfiles);
//       saveUserProfilesToStorage(updatedProfiles);
      
//       return fallbackProfile;
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       return null;
//     }
//   };

//   // Load cached profiles on component mount
//   useEffect(() => {
//     loadUserProfilesFromStorage();
//   }, []);

//   // Listen for real-time chat updates
//   useEffect(() => {
//     if (!user?.id) return;

//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id),
//       orderBy('lastMessageTime', 'desc')
//     );
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const chatsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const chatData = doc.data();
//         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
//         if (otherParticipantId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[otherParticipantId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(otherParticipantId);
//           }
          
//           chatsData.push({
//             id: doc.id,
//             ...chatData,
//             otherParticipantId,
//             otherParticipantName: userProfile?.name || 'User',
//             otherParticipantPhoto: userProfile?.photo
//           });
//         }
//       }
      
//       setChats(chatsData);
//     }, (error) => {
//       console.error('Error listening to chats:', error);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for received interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.fromUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.fromUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.fromUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             fromUserPhoto: userProfile?.photo,
//             fromUserName: userProfile?.name || interestData.fromUserName
//           });
//         }
//       }
      
//       setReceivedInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for sent interests
//   useEffect(() => {
//     if (!user?.id) return;

//     const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
//     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.toUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.toUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.toUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             toUserPhoto: userProfile?.photo,
//             toUserName: userProfile?.name || interestData.toUserName
//           });
//         }
//       }
      
//       setSentInterests(interestsData);
//     });

//     return () => unsubscribe();
//   }, [user, userProfiles]);

//   // Listen for online users with last seen
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const onlineUsersWithTime = {};
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (doc.id !== user.id && userData.lastSeen) {
//           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           onlineUsersWithTime[doc.id] = {
//             isOnline: userData.isOnline,
//             lastSeen: lastSeen
//           };
          
//           const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
//           // Consider user online if they were active in the last 5 minutes
//           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
//             onlineUsersData.push(doc.id);
//           }
//         }
//       });
      
//       setOnlineUsers(onlineUsersData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest && interest.fromUserId) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         router.push(`/chat/${existingChat.id}?name=${interest.fromUserName}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             user.displayName || 'You',
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: user.displayName || 'You',
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         router.push(`/chat/${chatRef.id}?name=${interest.fromUserName}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const formatLastSeen = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const lastSeenDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - lastSeenDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 1) return 'just now';
//     if (minutes < 60) return `${minutes} minutes ago`;
//     if (hours < 24) return `${hours} hours ago`;
//     if (days < 7) return `${days} days ago`;
//     return lastSeenDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${item.otherParticipantName}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//           {isOnline ? (
//             <View style={styles.onlineStatus}>
//               <View style={styles.onlineDot} />
//               <Text style={styles.onlineText}>{translations.online[language]}</Text>
//             </View>
//           ) : (
//             <Text style={styles.offlineText}>
//               {translations.lastSeen[language]} {formatLastSeen(item.lastMessageTime)}
//             </Text>
//           )}
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
//     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
//     const userName = isReceived ? interest.fromUserName : interest.toUserName;
//     const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
//     return (
//       <View style={styles.interestItem}>
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.interestAvatar}
//           />
//           {onlineUsers.includes(userId) && (
//             <View style={styles.onlineBadge} />
//           )}
//         </View>
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{userName}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//     marginBottom: 4,
//   },
//   onlineStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 4,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 11,
//     color: '#6c757d',
//     fontStyle: 'italic',
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });





// //11/09/2025
// // app/(tabs)/Messages.js
// // import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState } from 'react-native';
// // import React, { useState, useEffect, useRef } from 'react';
// // import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
// // import { db } from '../../config/firebase';
// // import { useAuth } from '../hooks/useAuth';
// // import { useRouter } from 'expo-router';
// // import { useLanguage } from '../context/LanguageContext';
// // import { useOnlineStatus } from '../hooks/useOnlineStatus';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // // Add this import at the top
// // import * as Notifications from 'expo-notifications';

// // export default function Messages() {
// //   const [activeTab, setActiveTab] = useState('Chats');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [chats, setChats] = useState([]);
// //   const [receivedInterests, setReceivedInterests] = useState([]);
// //   const [sentInterests, setSentInterests] = useState([]);
// //   const [onlineUsers, setOnlineUsers] = useState([]);
// //   const [userProfiles, setUserProfiles] = useState({});
// //   const { user } = useAuth();
// //   const router = useRouter();
// //   const { language } = useLanguage();
// //   const appState = useRef(AppState.currentState);

// //   // Set up online status
// //   useOnlineStatus();

// //   // Handle app state changes for online status
// //   useEffect(() => {
// //     const subscription = AppState.addEventListener('change', nextAppState => {
// //       if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
// //         // App came to foreground, update online status
// //         updateOnlineStatus(true);
// //       } else if (nextAppState.match(/inactive|background/)) {
// //         // App went to background, update online status
// //         updateOnlineStatus(false);
// //       }
// //       appState.current = nextAppState;
// //     });

// //     return () => {
// //       subscription.remove();
// //     };
// //   }, [user]);

// //   const updateOnlineStatus = async (isOnline) => {
// //     if (!user?.id) return;
    
// //     try {
// //       const userStatusRef = doc(db, 'onlineUsers', user.id);
// //       await setDoc(userStatusRef, {
// //         isOnline,
// //         lastSeen: serverTimestamp(),
// //         userId: user.id,
// //         userName: user.displayName || 'User'
// //       });
// //     } catch (error) {
// //       console.error('Error updating online status:', error);
// //     }
// //   };

// //   // Translations
// //   const translations = {
// //     messages: { ENG: "Messages", HI: "संदेश" },
// //     incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
// //     awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
// //     searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
// //     noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
// //     startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
// //     noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
// //     interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
// //     interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
// //     accept: { ENG: "Accept", HI: "स्वीकार करें" },
// //     decline: { ENG: "Decline", HI: "अस्वीकार करें" },
// //     pending: { ENG: "Pending", HI: "लंबित" },
// //     accepted: { ENG: "Accepted", HI: "स्वीकृत" },
// //     declined: { ENG: "Declined", HI: "अस्वीकृत" },
// //     viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
// //     startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
// //     online: { ENG: "Online", HI: "ऑनलाइन" },
// //     offline: { ENG: "Offline", HI: "ऑफलाइन" },
// //     lastSeen: { ENG: "Last seen", HI: "अंतिम बार देखा गया" }
// //   };

// //   // Load user profiles from AsyncStorage
// //   const loadUserProfilesFromStorage = async () => {
// //     try {
// //       const storedProfiles = await AsyncStorage.getItem('userProfiles');
// //       if (storedProfiles) {
// //         setUserProfiles(JSON.parse(storedProfiles));
// //       }
// //     } catch (error) {
// //       console.error('Error loading user profiles from storage:', error);
// //     }
// //   };

// //   // Save user profiles to AsyncStorage
// //   const saveUserProfilesToStorage = async (profiles) => {
// //     try {
// //       await AsyncStorage.setItem('userProfiles', JSON.stringify(profiles));
// //     } catch (error) {
// //       console.error('Error saving user profiles to storage:', error);
// //     }
// //   };

// //   // Fetch user profile data with caching
// //   const fetchUserProfile = async (userId) => {
// //     // Check if profile is already in state
// //     if (userProfiles[userId]) return userProfiles[userId];
    
// //     // Check if profile is in AsyncStorage
// //     try {
// //       const storedProfiles = await AsyncStorage.getItem('userProfiles');
// //       if (storedProfiles) {
// //         const parsedProfiles = JSON.parse(storedProfiles);
// //         if (parsedProfiles[userId]) {
// //           setUserProfiles(parsedProfiles);
// //           return parsedProfiles[userId];
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Error checking stored profiles:', error);
// //     }
    
// //     try {
// //       // Check both Male and Female collections
// //       const collections = ['Male', 'Female'];
// //       for (const gender of collections) {
// //         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
// //         const profileSnap = await getDoc(profileRef);
        
// //         if (profileSnap.exists()) {
// //           const profileData = profileSnap.data();
// //           const userProfile = {
// //             id: userId,
// //             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
// //             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
// //             age: profileData.age,
// //             city: profileData.city
// //           };
          
// //           // Update state and storage
// //           const updatedProfiles = { ...userProfiles, [userId]: userProfile };
// //           setUserProfiles(updatedProfiles);
// //           saveUserProfilesToStorage(updatedProfiles);
          
// //           return userProfile;
// //         }
// //       }
      
// //       // Fallback if no profile found
// //       const fallbackProfile = {
// //         id: userId,
// //         name: 'User',
// //         photo: 'https://via.placeholder.com/150?text=User',
// //         age: null,
// //         city: null
// //       };
      
// //       const updatedProfiles = { ...userProfiles, [userId]: fallbackProfile };
// //       setUserProfiles(updatedProfiles);
// //       saveUserProfilesToStorage(updatedProfiles);
      
// //       return fallbackProfile;
// //     } catch (error) {
// //       console.error('Error fetching user profile:', error);
// //       return null;
// //     }
// //   };

// //   // Load cached profiles on component mount
// //   useEffect(() => {
// //     loadUserProfilesFromStorage();
// //   }, []);

// //   // Listen for real-time chat updates
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const chatsRef = collection(db, 'chats');
// //     const q = query(
// //       chatsRef,
// //       where('participantIds', 'array-contains', user.id),
// //       orderBy('lastMessageTime', 'desc')
// //     );
    
// //     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
// //       const chatsData = [];
      
// //       for (const doc of querySnapshot.docs) {
// //         const chatData = doc.data();
// //         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
// //         if (otherParticipantId) {
// //           // Get or fetch user profile
// //           let userProfile = userProfiles[otherParticipantId];
// //           if (!userProfile) {
// //             userProfile = await fetchUserProfile(otherParticipantId);
// //           }
          
// //           chatsData.push({
// //             id: doc.id,
// //             ...chatData,
// //             otherParticipantId,
// //             otherParticipantName: userProfile?.name || 'User',
// //             otherParticipantPhoto: userProfile?.photo
// //           });
// //         }
// //       }
      
// //       setChats(chatsData);
// //     }, (error) => {
// //       console.error('Error listening to chats:', error);
// //     });

// //     return () => unsubscribe();
// //   }, [user, userProfiles]);

// //   // Listen for received interests
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
// //     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
// //     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
// //       const interestsData = [];
      
// //       for (const doc of querySnapshot.docs) {
// //         const interestData = doc.data();
        
// //         if (interestData.fromUserId) {
// //           // Get or fetch user profile
// //           let userProfile = userProfiles[interestData.fromUserId];
// //           if (!userProfile) {
// //             userProfile = await fetchUserProfile(interestData.fromUserId);
// //           }
          
// //           interestsData.push({
// //             id: doc.id,
// //             ...interestData,
// //             fromUserPhoto: userProfile?.photo,
// //             fromUserName: userProfile?.name || interestData.fromUserName
// //           });
// //         }
// //       }
      
// //       setReceivedInterests(interestsData);
// //     });

// //     return () => unsubscribe();
// //   }, [user, userProfiles]);

// //   // Listen for sent interests
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
// //     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
// //     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
// //       const interestsData = [];
      
// //       for (const doc of querySnapshot.docs) {
// //         const interestData = doc.data();
        
// //         if (interestData.toUserId) {
// //           // Get or fetch user profile
// //           let userProfile = userProfiles[interestData.toUserId];
// //           if (!userProfile) {
// //             userProfile = await fetchUserProfile(interestData.toUserId);
// //           }
          
// //           interestsData.push({
// //             id: doc.id,
// //             ...interestData,
// //             toUserPhoto: userProfile?.photo,
// //             toUserName: userProfile?.name || interestData.toUserName
// //           });
// //         }
// //       }
      
// //       setSentInterests(interestsData);
// //     });

// //     return () => unsubscribe();
// //   }, [user, userProfiles]);

// //   // Listen for online users with last seen
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const onlineRef = collection(db, 'onlineUsers');
    
// //     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
// //       const onlineUsersData = [];
// //       const onlineUsersWithTime = {};
      
// //       querySnapshot.forEach((doc) => {
// //         const userData = doc.data();
// //         if (doc.id !== user.id && userData.lastSeen) {
// //           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
// //           onlineUsersWithTime[doc.id] = {
// //             isOnline: userData.isOnline,
// //             lastSeen: lastSeen
// //           };
          
// //           const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
// //           // Consider user online if they were active in the last 5 minutes
// //           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
// //             onlineUsersData.push(doc.id);
// //           }
// //         }
// //       });
      
// //       setOnlineUsers(onlineUsersData);
// //     });

// //     return () => unsubscribe();
// //   }, [user]);

// //   // Respond to an interest (accept/decline) with notifications
// //   const respondToInterest = async (interestId, response) => {
// //     try {
// //       if (!user?.id) throw new Error('User not available');
  
// //       // Update the received interest
// //       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
// //       await updateDoc(receivedInterestRef, {
// //         status: response,
// //         respondedAt: serverTimestamp()
// //       });
  
// //       // Find the original sent interest to update
// //       const interest = receivedInterests.find(i => i.id === interestId);
// //       if (interest && interest.fromUserId) {
// //         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
// //         await updateDoc(sentInterestRef, {
// //           status: response,
// //           respondedAt: serverTimestamp()
// //         });
  
// //         // Send notification to the sender about the response
// //         if (response === 'accepted') {
// //           await Notifications.scheduleNotificationAsync({
// //             content: {
// //               title: 'Interest Accepted!',
// //               body: `${user.displayName || 'Someone'} accepted your interest`,
// //               data: {
// //                 type: 'interest_response',
// //                 id: interestId,
// //                 screen: 'Messages',
// //                 status: 'accepted'
// //               },
// //             },
// //             trigger: null, // send immediately
// //           });
// //         }
// //       }
  
// //       if (response === 'accepted') {
// //         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
// //       } else {
// //         Alert.alert('Interest declined');
// //       }
// //     } catch (error) {
// //       console.error('Error responding to interest:', error);
// //       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
// //     }
// //   };

// //   // Start a chat from an interest
// //   const startChatFromInterest = async (interest) => {
// //     try {
// //       if (!user?.id) throw new Error('User not available');

// //       // Check if chat already exists
// //       const chatsRef = collection(db, 'chats');
// //       const q = query(
// //         chatsRef,
// //         where('participantIds', 'array-contains', user.id)
// //       );
      
// //       const querySnapshot = await getDocs(q);
// //       let existingChat = null;
      
// //       querySnapshot.forEach((doc) => {
// //         const chatData = doc.data();
// //         if (chatData.participantIds.includes(interest.fromUserId)) {
// //           existingChat = { id: doc.id, ...chatData };
// //         }
// //       });
      
// //       if (existingChat) {
// //         router.push(`/chat/${existingChat.id}?name=${interest.fromUserName}`);
// //       } else {
// //         // Create new chat
// //         const chatData = {
// //           participants: [
// //             user.displayName || 'You',
// //             interest.fromUserName
// //           ],
// //           participantIds: [user.id, interest.fromUserId],
// //           lastMessage: '',
// //           lastMessageTime: serverTimestamp(),
// //           createdAt: serverTimestamp()
// //         };
        
// //         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
// //         // Create participants subcollection
// //         await Promise.all([
// //           addDoc(collection(chatRef, 'participants'), {
// //             userId: user.id,
// //             userName: user.displayName || 'You',
// //             joinedAt: serverTimestamp()
// //           }),
// //           addDoc(collection(chatRef, 'participants'), {
// //             userId: interest.fromUserId,
// //             userName: interest.fromUserName,
// //             joinedAt: serverTimestamp()
// //           })
// //         ]);
        
// //         router.push(`/chat/${chatRef.id}?name=${interest.fromUserName}`);
// //       }
// //     } catch (error) {
// //       console.error('Error starting chat:', error);
// //       Alert.alert('Error', 'Failed to start chat. Please try again.');
// //     }
// //   };

// //   const formatTime = (date) => {
// //     if (!date) return '';
    
// //     const now = new Date();
// //     const messageDate = date.toDate ? date.toDate() : new Date(date);
// //     const diff = now - messageDate;
// //     const minutes = Math.floor(diff / 60000);
// //     const hours = Math.floor(diff / 3600000);
// //     const days = Math.floor(diff / 86400000);
    
// //     if (minutes < 60) return `${minutes}m ago`;
// //     if (hours < 24) return `${hours}h ago`;
// //     if (days < 7) return `${days}d ago`;
// //     return messageDate.toLocaleDateString();
// //   };

// //   const formatLastSeen = (date) => {
// //     if (!date) return '';
    
// //     const now = new Date();
// //     const lastSeenDate = date.toDate ? date.toDate() : new Date(date);
// //     const diff = now - lastSeenDate;
// //     const minutes = Math.floor(diff / 60000);
// //     const hours = Math.floor(diff / 3600000);
// //     const days = Math.floor(diff / 86400000);
    
// //     if (minutes < 1) return 'just now';
// //     if (minutes < 60) return `${minutes} minutes ago`;
// //     if (hours < 24) return `${hours} hours ago`;
// //     if (days < 7) return `${days} days ago`;
// //     return lastSeenDate.toLocaleDateString();
// //   };

// //   const renderMessageItem = ({ item }) => {
// //     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
// //     return (
// //       <TouchableOpacity
// //         style={styles.messageItem}
// //         onPress={() => router.push(`/chat/${item.id}?name=${item.otherParticipantName}`)}
// //       >
// //         <View style={styles.avatarContainer}>
// //           <Image
// //             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
// //             style={styles.avatar}
// //           />
// //           {isOnline && <View style={styles.onlineBadge} />}
// //         </View>
// //         <View style={styles.messageContent}>
// //           <View style={styles.messageHeader}>
// //             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
// //             <Text style={styles.messageTime}>
// //               {formatTime(item.lastMessageTime)}
// //             </Text>
// //           </View>
// //           <Text
// //             style={[
// //               styles.messageText,
// //               item.unread && styles.unreadMessage
// //             ]}
// //             numberOfLines={1}
// //           >
// //             {item.lastMessage || 'Start a conversation...'}
// //           </Text>
// //           {isOnline ? (
// //             <View style={styles.onlineStatus}>
// //               <View style={styles.onlineDot} />
// //               <Text style={styles.onlineText}>{translations.online[language]}</Text>
// //             </View>
// //           ) : (
// //             <Text style={styles.offlineText}>
// //               {translations.lastSeen[language]} {formatLastSeen(item.lastMessageTime)}
// //             </Text>
// //           )}
// //         </View>
// //         {item.unread && <View style={styles.unreadBadge} />}
// //       </TouchableOpacity>
// //     );
// //   };

// //   const renderInterestItem = ({ item }) => {
// //     const isReceived = activeTab === 'Interests Received';
// //     const interest = isReceived ? item : item;
// //     const status = interest.status || 'pending';
// //     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
// //     const userName = isReceived ? interest.fromUserName : interest.toUserName;
// //     const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
// //     return (
// //       <View style={styles.interestItem}>
// //         <View style={styles.avatarContainer}>
// //           <Image
// //             source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
// //             style={styles.interestAvatar}
// //           />
// //           {onlineUsers.includes(userId) && (
// //             <View style={styles.onlineBadge} />
// //           )}
// //         </View>
// //         <View style={styles.interestContent}>
// //           <View style={styles.interestHeader}>
// //             <Text style={styles.interestName}>{userName}</Text>
// //             <Text style={styles.interestTime}>
// //               {formatTime(interest.timestamp)}
// //             </Text>
// //           </View>
// //           <View style={styles.interestActions}>
// //             <View style={[
// //               styles.statusBadge,
// //               status === 'accepted' && styles.acceptedBadge,
// //               status === 'declined' && styles.declinedBadge
// //             ]}>
// //               <Text style={[
// //                 styles.statusText,
// //                 status === 'accepted' && styles.acceptedText,
// //                 status === 'declined' && styles.declinedText
// //               ]}>
// //                 {translations[status.toLowerCase()]?.[language] || status}
// //               </Text>
// //             </View>
            
// //             {isReceived && status === 'pending' ? (
// //               <View style={styles.actionButtons}>
// //                 <TouchableOpacity
// //                   style={[styles.actionButton, styles.acceptButton]}
// //                   onPress={() => respondToInterest(item.id, 'accepted')}
// //                 >
// //                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity
// //                   style={[styles.actionButton, styles.declineButton]}
// //                   onPress={() => respondToInterest(item.id, 'declined')}
// //                 >
// //                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             ) : status === 'accepted' ? (
// //               <TouchableOpacity
// //                 style={[styles.actionButton, styles.chatButton]}
// //                 onPress={() => startChatFromInterest(item)}
// //               >
// //                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
// //               </TouchableOpacity>
// //             ) : null}
// //           </View>
// //         </View>
// //       </View>
// //     );
// //   };

// //   const getFilteredData = () => {
// //     if (activeTab === 'Chats') {
// //       return chats.filter(chat =>
// //         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     } else if (activeTab === 'Interests Received') {
// //       return receivedInterests.filter(interest =>
// //         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     } else if (activeTab === 'Interests Sent') {
// //       return sentInterests.filter(interest =>
// //         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }
// //     return [];
// //   };

// //   const renderEmptyState = () => {
// //     if (activeTab === 'Chats') {
// //       return (
// //         <View style={styles.emptyContainer}>
// //           <Feather name="message-square" size={48} color="#ddd" />
// //           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
// //           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
// //         </View>
// //       );
// //     } else {
// //       return (
// //         <View style={styles.emptyContainer}>
// //           <Ionicons name="heart" size={48} color="#ddd" />
// //           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
// //         </View>
// //       );
// //     }
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <View style={styles.container}>
// //         {/* Header */}
// //         <View style={styles.header}>
// //           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
// //           <TouchableOpacity style={styles.headerButton}>
// //             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Tabs */}
// //         <View style={styles.tabsContainer}>
// //           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
// //             <TouchableOpacity
// //               key={tab}
// //               style={[
// //                 styles.tabButton,
// //                 activeTab === tab && styles.activeTabButton
// //               ]}
// //               onPress={() => setActiveTab(tab)}
// //             >
// //               <Text style={[
// //                 styles.tabText,
// //                 activeTab === tab && styles.activeTabText
// //               ]}>
// //                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
// //                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
// //               </Text>
// //               {activeTab === tab && <View style={styles.activeTabIndicator} />}
// //             </TouchableOpacity>
// //           ))}
// //         </View>

// //         {/* Search and Filter */}
// //         <View style={styles.searchContainer}>
// //           <Text style={styles.searchTitle}>
// //             {activeTab === 'Chats'
// //               ? translations.incomingMessages[language]
// //               : activeTab === 'Interests Received'
// //                 ? translations.awaitingResponse[language]
// //                 : translations.interestsSent[language]}
// //           </Text>
// //           <View style={styles.searchBar}>
// //             <View style={styles.searchInputContainer}>
// //               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
// //               <TextInput
// //                 style={styles.searchInput}
// //                 placeholder={translations.searchMessages[language]}
// //                 value={searchQuery}
// //                 onChangeText={setSearchQuery}
// //               />
// //             </View>
// //             <TouchableOpacity style={styles.filterButton}>
// //               <Feather name="filter" size={18} color="#FF6B6B" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Messages/Interests List */}
// //         <FlatList
// //           data={getFilteredData()}
// //           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
// //           keyExtractor={item => item.id}
// //           contentContainerStyle={styles.listContainer}
// //           showsVerticalScrollIndicator={false}
// //           ListEmptyComponent={renderEmptyState}
// //         />
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   container: {
// //     flex: 1,
// //     paddingHorizontal: 16,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingVertical: 16,
// //     paddingHorizontal: 4,
// //   },
// //   headerTitle: {
// //     fontSize: 24,
// //     fontWeight: '700',
// //     color: '#212529',
// //   },
// //   headerButton: {
// //     padding: 4,
// //   },
// //   tabsContainer: {
// //     flexDirection: 'row',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e9ecef',
// //     marginBottom: 16,
// //   },
// //   tabButton: {
// //     flex: 1,
// //     paddingVertical: 12,
// //     alignItems: 'center',
// //     position: 'relative',
// //   },
// //   activeTabButton: {
// //     // No additional styling needed as we're using the indicator
// //   },
// //   tabText: {
// //     fontSize: 14,
// //     color: '#6c757d',
// //     fontWeight: '500',
// //   },
// //   activeTabText: {
// //     color: '#FF6B6B',
// //     fontWeight: '600',
// //   },
// //   activeTabIndicator: {
// //     position: 'absolute',
// //     bottom: -1,
// //     height: 2,
// //     width: '60%',
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 2,
// //   },
// //   searchContainer: {
// //     marginBottom: 16,
// //     paddingHorizontal: 4,
// //   },
// //   searchTitle: {
// //     fontSize: 14,
// //     color: '#6c757d',
// //     marginBottom: 10,
// //     fontWeight: '500',
// //   },
// //   searchBar: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   searchInputContainer: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#f8f9fa',
// //     borderRadius: 20,
// //     paddingHorizontal: 16,
// //     height: 40,
// //     marginRight: 12,
// //   },
// //   searchIcon: {
// //     marginRight: 8,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     fontSize: 14,
// //     color: '#495057',
// //     paddingVertical: 8,
// //   },
// //   filterButton: {
// //     padding: 8,
// //     backgroundColor: '#f8f9fa',
// //     borderRadius: 20,
// //   },
// //   listContainer: {
// //     paddingBottom: 20,
// //   },
// //   messageItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 14,
// //     paddingHorizontal: 4,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f1f3f5',
// //   },
// //   avatarContainer: {
// //     position: 'relative',
// //     marginRight: 16,
// //   },
// //   avatar: {
// //     width: 52,
// //     height: 52,
// //     borderRadius: 26,
// //   },
// //   interestAvatar: {
// //     width: 52,
// //     height: 52,
// //     borderRadius: 26,
// //   },
// //   onlineBadge: {
// //     position: 'absolute',
// //     bottom: 2,
// //     right: 2,
// //     width: 12,
// //     height: 12,
// //     borderRadius: 6,
// //     backgroundColor: '#4CAF50',
// //     borderWidth: 2,
// //     borderColor: '#fff',
// //   },
// //   messageContent: {
// //     flex: 1,
// //   },
// //   messageHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 6,
// //   },
// //   messageName: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#212529',
// //   },
// //   messageTime: {
// //     fontSize: 12,
// //     color: '#adb5bd',
// //   },
// //   messageText: {
// //     fontSize: 14,
// //     color: '#6c757d',
// //     lineHeight: 20,
// //     marginBottom: 4,
// //   },
// //   onlineStatus: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   onlineDot: {
// //     width: 8,
// //     height: 8,
// //     borderRadius: 4,
// //     backgroundColor: '#4CAF50',
// //     marginRight: 4,
// //   },
// //   onlineText: {
// //     fontSize: 12,
// //     color: '#4CAF50',
// //     fontWeight: '500',
// //   },
// //   offlineText: {
// //     fontSize: 11,
// //     color: '#6c757d',
// //     fontStyle: 'italic',
// //   },
// //   unreadMessage: {
// //     color: '#212529',
// //     fontWeight: '500',
// //   },
// //   unreadBadge: {
// //     width: 10,
// //     height: 10,
// //     borderRadius: 5,
// //     backgroundColor: '#FF6B6B',
// //     marginLeft: 8,
// //   },
// //   interestItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 14,
// //     paddingHorizontal: 4,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f1f3f5',
// //   },
// //   interestContent: {
// //     flex: 1,
// //   },
// //   interestHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //   },
// //   interestName: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#212529',
// //   },
// //   interestTime: {
// //     fontSize: 12,
// //     color: '#adb5bd',
// //   },
// //   interestActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   statusBadge: {
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 10,
// //   },
// //   acceptedBadge: {
// //     backgroundColor: '#E8F5E9',
// //   },
// //   declinedBadge: {
// //     backgroundColor: '#FFEBEE',
// //   },
// //   statusText: {
// //     fontSize: 12,
// //     color: '#FF6B6B',
// //     fontWeight: '500',
// //   },
// //   acceptedText: {
// //     color: '#4CAF50',
// //   },
// //   declinedText: {
// //     color: '#F44336',
// //   },
// //   actionButtons: {
// //     flexDirection: 'row',
// //   },
// //   actionButton: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 15,
// //     marginLeft: 8,
// //   },
// //   acceptButton: {
// //     backgroundColor: '#E8F5E9',
// //   },
// //   declineButton: {
// //     backgroundColor: '#FFEBEE',
// //   },
// //   chatButton: {
// //     backgroundColor: '#FF6B6B',
// //   },
// //   acceptButtonText: {
// //     color: '#4CAF50',
// //     fontWeight: '500',
// //     fontSize: 12,
// //   },
// //   declineButtonText: {
// //     color: '#F44336',
// //     fontWeight: '500',
// //     fontSize: 12,
// //   },
// //   chatButtonText: {
// //     color: '#fff',
// //     fontWeight: '500',
// //     fontSize: 12,
// //   },
// //   emptyContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 60,
// //   },
// //   emptyText: {
// //     fontSize: 16,
// //     color: '#adb5bd',
// //     marginTop: 16,
// //     fontWeight: '500',
// //   },
// //   emptySubtext: {
// //     fontSize: 14,
// //     color: '#adb5bd',
// //     marginTop: 8,
// //     textAlign: 'center',
// //     paddingHorizontal: 20,
// //   },
// // });





// //12/09/2025 reerror

// // app/(tabs)/Messages.js
// // import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState } from 'react-native';
// // import React, { useState, useEffect, useRef } from 'react';
// // import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
// // import { db } from '../../config/firebase';
// // import { useAuth } from '../hooks/useAuth';
// // import { useRouter } from 'expo-router';
// // import { useLanguage } from '../context/LanguageContext';
// // import { useOnlineStatus } from '../hooks/useOnlineStatus';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// // export default function Messages() {
// //   const [activeTab, setActiveTab] = useState('Chats');
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [chats, setChats] = useState([]);
// //   const [receivedInterests, setReceivedInterests] = useState([]);
// //   const [sentInterests, setSentInterests] = useState([]);
// //   const [onlineUsers, setOnlineUsers] = useState([]);
// //   const [userProfiles, setUserProfiles] = useState({});
// //   const { user } = useAuth();
// //   const router = useRouter();
// //   const { language } = useLanguage();
// //   const appState = useRef(AppState.currentState);

// //   // Set up online status
// //   useOnlineStatus();

// //   // Handle app state changes for online status
// //   useEffect(() => {
// //     const subscription = AppState.addEventListener('change', nextAppState => {
// //       if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
// //         // App came to foreground, update online status
// //         updateOnlineStatus(true);
// //       } else if (nextAppState.match(/inactive|background/)) {
// //         // App went to background, update online status
// //         updateOnlineStatus(false);
// //       }
// //       appState.current = nextAppState;
// //     });

// //     return () => {
// //       subscription.remove();
// //     };
// //   }, [user]);

// //   const updateOnlineStatus = async (isOnline) => {
// //     if (!user?.id) return;
    
// //     try {
// //       const userStatusRef = doc(db, 'onlineUsers', user.id);
// //       await setDoc(userStatusRef, {
// //         isOnline,
// //         lastSeen: serverTimestamp(),
// //         userId: user.id,
// //         userName: user.displayName || 'User'
// //       });
// //     } catch (error) {
// //       console.error('Error updating online status:', error);
// //     }
// //   };

// //   // Translations
// //   const translations = {
// //     messages: { ENG: "Messages", HI: "संदेश" },
// //     incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
// //     awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
// //     searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
// //     noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
// //     startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
// //     noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
// //     interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
// //     interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
// //     accept: { ENG: "Accept", HI: "स्वीकार करें" },
// //     decline: { ENG: "Decline", HI: "अस्वीकार करें" },
// //     pending: { ENG: "Pending", HI: "लंबित" },
// //     accepted: { ENG: "Accepted", HI: "स्वीकृत" },
// //     declined: { ENG: "Declined", HI: "अस्वीकृत" },
// //     viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
// //     startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
// //     online: { ENG: "Online", HI: "ऑनलाइन" },
// //     offline: { ENG: "Offline", HI: "ऑफलाइन" },
// //     lastSeen: { ENG: "Last seen", HI: "अंतिम बार देखा गया" }
// //   };

// //   // Load user profiles from AsyncStorage
// //   const loadUserProfilesFromStorage = async () => {
// //     try {
// //       const storedProfiles = await AsyncStorage.getItem('userProfiles');
// //       if (storedProfiles) {
// //         setUserProfiles(JSON.parse(storedProfiles));
// //       }
// //     } catch (error) {
// //       console.error('Error loading user profiles from storage:', error);
// //     }
// //   };

// //   // Save user profiles to AsyncStorage
// //   const saveUserProfilesToStorage = async (profiles) => {
// //     try {
// //       await AsyncStorage.setItem('userProfiles', JSON.stringify(profiles));
// //     } catch (error) {
// //       console.error('Error saving user profiles to storage:', error);
// //     }
// //   };

// //   // Fetch user profile data with caching
// //   const fetchUserProfile = async (userId) => {
// //     // Check if profile is already in state
// //     if (userProfiles[userId]) return userProfiles[userId];
    
// //     // Check if profile is in AsyncStorage
// //     try {
// //       const storedProfiles = await AsyncStorage.getItem('userProfiles');
// //       if (storedProfiles) {
// //         const parsedProfiles = JSON.parse(storedProfiles);
// //         if (parsedProfiles[userId]) {
// //           setUserProfiles(parsedProfiles);
// //           return parsedProfiles[userId];
// //         }
// //       }
// //     } catch (error) {
// //       console.error('Error checking stored profiles:', error);
// //     }
    
// //     try {
// //       // Check both Male and Female collections
// //       const collections = ['Male', 'Female'];
// //       for (const gender of collections) {
// //         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
// //         const profileSnap = await getDoc(profileRef);
        
// //         if (profileSnap.exists()) {
// //           const profileData = profileSnap.data();
// //           const userProfile = {
// //             id: userId,
// //             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
// //             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
// //             age: profileData.age,
// //             city: profileData.city
// //           };
          
// //           // Update state and storage
// //           const updatedProfiles = { ...userProfiles, [userId]: userProfile };
// //           setUserProfiles(updatedProfiles);
// //           saveUserProfilesToStorage(updatedProfiles);
          
// //           return userProfile;
// //         }
// //       }
      
// //       // Fallback if no profile found
// //       const fallbackProfile = {
// //         id: userId,
// //         name: 'User',
// //         photo: 'https://via.placeholder.com/150?text=User',
// //         age: null,
// //         city: null
// //       };
      
// //       const updatedProfiles = { ...userProfiles, [userId]: fallbackProfile };
// //       setUserProfiles(updatedProfiles);
// //       saveUserProfilesToStorage(updatedProfiles);
      
// //       return fallbackProfile;
// //     } catch (error) {
// //       console.error('Error fetching user profile:', error);
// //       return null;
// //     }
// //   };

// //   // Load cached profiles on component mount
// //   useEffect(() => {
// //     loadUserProfilesFromStorage();
// //   }, []);

// //   // Listen for real-time chat updates
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const chatsRef = collection(db, 'chats');
// //     const q = query(
// //       chatsRef,
// //       where('participantIds', 'array-contains', user.id),
// //       orderBy('lastMessageTime', 'desc')
// //     );
    
// //     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
// //       const chatsData = [];
      
// //       for (const doc of querySnapshot.docs) {
// //         const chatData = doc.data();
// //         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
// //         if (otherParticipantId) {
// //           // Get or fetch user profile
// //           let userProfile = userProfiles[otherParticipantId];
// //           if (!userProfile) {
// //             userProfile = await fetchUserProfile(otherParticipantId);
// //           }
          
// //           chatsData.push({
// //             id: doc.id,
// //             ...chatData,
// //             otherParticipantId,
// //             otherParticipantName: userProfile?.name || 'User',
// //             otherParticipantPhoto: userProfile?.photo
// //           });
// //         }
// //       }
      
// //       setChats(chatsData);
// //     }, (error) => {
// //       console.error('Error listening to chats:', error);
// //     });

// //     return () => unsubscribe();
// //   }, [user, userProfiles]);

// //   // Listen for received interests
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
// //     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
// //     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
// //       const interestsData = [];
      
// //       for (const doc of querySnapshot.docs) {
// //         const interestData = doc.data();
        
// //         if (interestData.fromUserId) {
// //           // Get or fetch user profile
// //           let userProfile = userProfiles[interestData.fromUserId];
// //           if (!userProfile) {
// //             userProfile = await fetchUserProfile(interestData.fromUserId);
// //           }
          
// //           interestsData.push({
// //             id: doc.id,
// //             ...interestData,
// //             fromUserPhoto: userProfile?.photo,
// //             fromUserName: userProfile?.name || interestData.fromUserName
// //           });
// //         }
// //       }
      
// //       setReceivedInterests(interestsData);
// //     });

// //     return () => unsubscribe();
// //   }, [user, userProfiles]);

// //   // Listen for sent interests
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
// //     const q = query(interestsRef, orderBy('timestamp', 'desc'));
    
// //     const unsubscribe = onSnapshot(q, async (querySnapshot) => {
// //       const interestsData = [];
      
// //       for (const doc of querySnapshot.docs) {
// //         const interestData = doc.data();
        
// //         if (interestData.toUserId) {
// //           // Get or fetch user profile
// //           let userProfile = userProfiles[interestData.toUserId];
// //           if (!userProfile) {
// //             userProfile = await fetchUserProfile(interestData.toUserId);
// //           }
          
// //           interestsData.push({
// //             id: doc.id,
// //             ...interestData,
// //             toUserPhoto: userProfile?.photo,
// //             toUserName: userProfile?.name || interestData.toUserName
// //           });
// //         }
// //       }
      
// //       setSentInterests(interestsData);
// //     });

// //     return () => unsubscribe();
// //   }, [user, userProfiles]);

// //   // Listen for online users with last seen
// //   useEffect(() => {
// //     if (!user?.id) return;

// //     const onlineRef = collection(db, 'onlineUsers');
    
// //     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
// //       const onlineUsersData = [];
// //       const onlineUsersWithTime = {};
      
// //       querySnapshot.forEach((doc) => {
// //         const userData = doc.data();
// //         if (doc.id !== user.id && userData.lastSeen) {
// //           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
// //           onlineUsersWithTime[doc.id] = {
// //             isOnline: userData.isOnline,
// //             lastSeen: lastSeen
// //           };
          
// //           const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
// //           // Consider user online if they were active in the last 5 minutes
// //           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
// //             onlineUsersData.push(doc.id);
// //           }
// //         }
// //       });
      
// //       setOnlineUsers(onlineUsersData);
// //     });

// //     return () => unsubscribe();
// //   }, [user]);

// //   // Respond to an interest (accept/decline)
// //   const respondToInterest = async (interestId, response) => {
// //     try {
// //       if (!user?.id) throw new Error('User not available');

// //       // Update the received interest
// //       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
// //       await updateDoc(receivedInterestRef, {
// //         status: response,
// //         respondedAt: serverTimestamp()
// //       });

// //       // Find the original sent interest to update
// //       const interest = receivedInterests.find(i => i.id === interestId);
// //       if (interest && interest.fromUserId) {
// //         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
// //         await updateDoc(sentInterestRef, {
// //           status: response,
// //           respondedAt: serverTimestamp()
// //         });
// //       }

// //       if (response === 'accepted') {
// //         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
// //       } else {
// //         Alert.alert('Interest declined');
// //       }
// //     } catch (error) {
// //       console.error('Error responding to interest:', error);
// //       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
// //     }
// //   };

// //   // Start a chat from an interest
// //   const startChatFromInterest = async (interest) => {
// //     try {
// //       if (!user?.id) throw new Error('User not available');

// //       // Check if chat already exists
// //       const chatsRef = collection(db, 'chats');
// //       const q = query(
// //         chatsRef,
// //         where('participantIds', 'array-contains', user.id)
// //       );
      
// //       const querySnapshot = await getDocs(q);
// //       let existingChat = null;
      
// //       querySnapshot.forEach((doc) => {
// //         const chatData = doc.data();
// //         if (chatData.participantIds.includes(interest.fromUserId)) {
// //           existingChat = { id: doc.id, ...chatData };
// //         }
// //       });
      
// //       if (existingChat) {
// //         router.push(`/chat/${existingChat.id}?name=${interest.fromUserName}`);
// //       } else {
// //         // Create new chat
// //         const chatData = {
// //           participants: [
// //             user.displayName || 'You',
// //             interest.fromUserName
// //           ],
// //           participantIds: [user.id, interest.fromUserId],
// //           lastMessage: '',
// //           lastMessageTime: serverTimestamp(),
// //           createdAt: serverTimestamp()
// //         };
        
// //         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
// //         // Create participants subcollection
// //         await Promise.all([
// //           addDoc(collection(chatRef, 'participants'), {
// //             userId: user.id,
// //             userName: user.displayName || 'You',
// //             joinedAt: serverTimestamp()
// //           }),
// //           addDoc(collection(chatRef, 'participants'), {
// //             userId: interest.fromUserId,
// //             userName: interest.fromUserName,
// //             joinedAt: serverTimestamp()
// //           })
// //         ]);
        
// //         router.push(`/chat/${chatRef.id}?name=${interest.fromUserName}`);
// //       }
// //     } catch (error) {
// //       console.error('Error starting chat:', error);
// //       Alert.alert('Error', 'Failed to start chat. Please try again.');
// //     }
// //   };

// //   const formatTime = (date) => {
// //     if (!date) return '';
    
// //     const now = new Date();
// //     const messageDate = date.toDate ? date.toDate() : new Date(date);
// //     const diff = now - messageDate;
// //     const minutes = Math.floor(diff / 60000);
// //     const hours = Math.floor(diff / 3600000);
// //     const days = Math.floor(diff / 86400000);
    
// //     if (minutes < 60) return `${minutes}m ago`;
// //     if (hours < 24) return `${hours}h ago`;
// //     if (days < 7) return `${days}d ago`;
// //     return messageDate.toLocaleDateString();
// //   };

// //   const formatLastSeen = (date) => {
// //     if (!date) return '';
    
// //     const now = new Date();
// //     const lastSeenDate = date.toDate ? date.toDate() : new Date(date);
// //     const diff = now - lastSeenDate;
// //     const minutes = Math.floor(diff / 60000);
// //     const hours = Math.floor(diff / 3600000);
// //     const days = Math.floor(diff / 86400000);
    
// //     if (minutes < 1) return 'just now';
// //     if (minutes < 60) return `${minutes} minutes ago`;
// //     if (hours < 24) return `${hours} hours ago`;
// //     if (days < 7) return `${days} days ago`;
// //     return lastSeenDate.toLocaleDateString();
// //   };

// //   const renderMessageItem = ({ item }) => {
// //     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
// //     return (
// //       <TouchableOpacity
// //         style={styles.messageItem}
// //         onPress={() => router.push(`/chat/${item.id}?name=${item.otherParticipantName}`)}
// //       >
// //         <View style={styles.avatarContainer}>
// //           <Image
// //             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
// //             style={styles.avatar}
// //           />
// //           {isOnline && <View style={styles.onlineBadge} />}
// //         </View>
// //         <View style={styles.messageContent}>
// //           <View style={styles.messageHeader}>
// //             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
// //             <Text style={styles.messageTime}>
// //               {formatTime(item.lastMessageTime)}
// //             </Text>
// //           </View>
// //           <Text
// //             style={[
// //               styles.messageText,
// //               item.unread && styles.unreadMessage
// //             ]}
// //             numberOfLines={1}
// //           >
// //             {item.lastMessage || 'Start a conversation...'}
// //           </Text>
// //           {isOnline ? (
// //             <View style={styles.onlineStatus}>
// //               <View style={styles.onlineDot} />
// //               <Text style={styles.onlineText}>{translations.online[language]}</Text>
// //             </View>
// //           ) : (
// //             <Text style={styles.offlineText}>
// //               {translations.lastSeen[language]} {formatLastSeen(item.lastMessageTime)}
// //             </Text>
// //           )}
// //         </View>
// //         {item.unread && <View style={styles.unreadBadge} />}
// //       </TouchableOpacity>
// //     );
// //   };

// //   const renderInterestItem = ({ item }) => {
// //     const isReceived = activeTab === 'Interests Received';
// //     const interest = isReceived ? item : item;
// //     const status = interest.status || 'pending';
// //     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
// //     const userName = isReceived ? interest.fromUserName : interest.toUserName;
// //     const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
// //     return (
// //       <View style={styles.interestItem}>
// //         <View style={styles.avatarContainer}>
// //           <Image
// //             source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
// //             style={styles.interestAvatar}
// //           />
// //           {onlineUsers.includes(userId) && (
// //             <View style={styles.onlineBadge} />
// //           )}
// //         </View>
// //         <View style={styles.interestContent}>
// //           <View style={styles.interestHeader}>
// //             <Text style={styles.interestName}>{userName}</Text>
// //             <Text style={styles.interestTime}>
// //               {formatTime(interest.timestamp)}
// //             </Text>
// //           </View>
// //           <View style={styles.interestActions}>
// //             <View style={[
// //               styles.statusBadge,
// //               status === 'accepted' && styles.acceptedBadge,
// //               status === 'declined' && styles.declinedBadge
// //             ]}>
// //               <Text style={[
// //                 styles.statusText,
// //                 status === 'accepted' && styles.acceptedText,
// //                 status === 'declined' && styles.declinedText
// //               ]}>
// //                 {translations[status.toLowerCase()]?.[language] || status}
// //               </Text>
// //             </View>
            
// //             {isReceived && status === 'pending' ? (
// //               <View style={styles.actionButtons}>
// //                 <TouchableOpacity
// //                   style={[styles.actionButton, styles.acceptButton]}
// //                   onPress={() => respondToInterest(item.id, 'accepted')}
// //                 >
// //                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity
// //                   style={[styles.actionButton, styles.declineButton]}
// //                   onPress={() => respondToInterest(item.id, 'declined')}
// //                 >
// //                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
// //                 </TouchableOpacity>
// //               </View>
// //             ) : status === 'accepted' ? (
// //               <TouchableOpacity
// //                 style={[styles.actionButton, styles.chatButton]}
// //                 onPress={() => startChatFromInterest(item)}
// //               >
// //                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
// //               </TouchableOpacity>
// //             ) : null}
// //           </View>
// //         </View>
// //       </View>
// //     );
// //   };

// //   const getFilteredData = () => {
// //     if (activeTab === 'Chats') {
// //       return chats.filter(chat =>
// //         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     } else if (activeTab === 'Interests Received') {
// //       return receivedInterests.filter(interest =>
// //         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     } else if (activeTab === 'Interests Sent') {
// //       return sentInterests.filter(interest =>
// //         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }
// //     return [];
// //   };

// //   const renderEmptyState = () => {
// //     if (activeTab === 'Chats') {
// //       return (
// //         <View style={styles.emptyContainer}>
// //           <Feather name="message-square" size={48} color="#ddd" />
// //           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
// //           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
// //         </View>
// //       );
// //     } else {
// //       return (
// //         <View style={styles.emptyContainer}>
// //           <Ionicons name="heart" size={48} color="#ddd" />
// //           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
// //         </View>
// //       );
// //     }
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <View style={styles.container}>
// //         {/* Header */}
// //         <View style={styles.header}>
// //           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
// //           <TouchableOpacity style={styles.headerButton}>
// //             <Ionicons name="ellipsis-vertical" size={20} color="#333" />
// //           </TouchableOpacity>
// //         </View>

// //         {/* Tabs */}
// //         <View style={styles.tabsContainer}>
// //           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
// //             <TouchableOpacity
// //               key={tab}
// //               style={[
// //                 styles.tabButton,
// //                 activeTab === tab && styles.activeTabButton
// //               ]}
// //               onPress={() => setActiveTab(tab)}
// //             >
// //               <Text style={[
// //                 styles.tabText,
// //                 activeTab === tab && styles.activeTabText
// //               ]}>
// //                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
// //                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
// //               </Text>
// //               {activeTab === tab && <View style={styles.activeTabIndicator} />}
// //             </TouchableOpacity>
// //           ))}
// //         </View>

// //         {/* Search and Filter */}
// //         <View style={styles.searchContainer}>
// //           <Text style={styles.searchTitle}>
// //             {activeTab === 'Chats'
// //               ? translations.incomingMessages[language]
// //               : activeTab === 'Interests Received'
// //                 ? translations.awaitingResponse[language]
// //                 : translations.interestsSent[language]}
// //           </Text>
// //           <View style={styles.searchBar}>
// //             <View style={styles.searchInputContainer}>
// //               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
// //               <TextInput
// //                 style={styles.searchInput}
// //                 placeholder={translations.searchMessages[language]}
// //                 value={searchQuery}
// //                 onChangeText={setSearchQuery}
// //               />
// //             </View>
// //             <TouchableOpacity style={styles.filterButton}>
// //               <Feather name="filter" size={18} color="#FF6B6B" />
// //             </TouchableOpacity>
// //           </View>
// //         </View>

// //         {/* Messages/Interests List */}
// //         <FlatList
// //           data={getFilteredData()}
// //           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
// //           keyExtractor={item => item.id}
// //           contentContainerStyle={styles.listContainer}
// //           showsVerticalScrollIndicator={false}
// //           ListEmptyComponent={renderEmptyState}
// //         />
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   container: {
// //     flex: 1,
// //     paddingHorizontal: 16,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     paddingVertical: 16,
// //     paddingHorizontal: 4,
// //   },
// //   headerTitle: {
// //     fontSize: 24,
// //     fontWeight: '700',
// //     color: '#212529',
// //   },
// //   headerButton: {
// //     padding: 4,
// //   },
// //   tabsContainer: {
// //     flexDirection: 'row',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e9ecef',
// //     marginBottom: 16,
// //   },
// //   tabButton: {
// //     flex: 1,
// //     paddingVertical: 12,
// //     alignItems: 'center',
// //     position: 'relative',
// //   },
// //   activeTabButton: {
// //     // No additional styling needed as we're using the indicator
// //   },
// //   tabText: {
// //     fontSize: 14,
// //     color: '#6c757d',
// //     fontWeight: '500',
// //   },
// //   activeTabText: {
// //     color: '#FF6B6B',
// //     fontWeight: '600',
// //   },
// //   activeTabIndicator: {
// //     position: 'absolute',
// //     bottom: -1,
// //     height: 2,
// //     width: '60%',
// //     backgroundColor: '#FF6B6B',
// //     borderRadius: 2,
// //   },
// //   searchContainer: {
// //     marginBottom: 16,
// //     paddingHorizontal: 4,
// //   },
// //   searchTitle: {
// //     fontSize: 14,
// //     color: '#6c757d',
// //     marginBottom: 10,
// //     fontWeight: '500',
// //   },
// //   searchBar: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   searchInputContainer: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#f8f9fa',
// //     borderRadius: 20,
// //     paddingHorizontal: 16,
// //     height: 40,
// //     marginRight: 12,
// //   },
// //   searchIcon: {
// //     marginRight: 8,
// //   },
// //   searchInput: {
// //     flex: 1,
// //     fontSize: 14,
// //     color: '#495057',
// //     paddingVertical: 8,
// //   },
// //   filterButton: {
// //     padding: 8,
// //     backgroundColor: '#f8f9fa',
// //     borderRadius: 20,
// //   },
// //   listContainer: {
// //     paddingBottom: 20,
// //   },
// //   messageItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 14,
// //     paddingHorizontal: 4,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f1f3f5',
// //   },
// //   avatarContainer: {
// //     position: 'relative',
// //     marginRight: 16,
// //   },
// //   avatar: {
// //     width: 52,
// //     height: 52,
// //     borderRadius: 26,
// //   },
// //   interestAvatar: {
// //     width: 52,
// //     height: 52,
// //     borderRadius: 26,
// //   },
// //   onlineBadge: {
// //     position: 'absolute',
// //     bottom: 2,
// //     right: 2,
// //     width: 12,
// //     height: 12,
// //     borderRadius: 6,
// //     backgroundColor: '#4CAF50',
// //     borderWidth: 2,
// //     borderColor: '#fff',
// //   },
// //   messageContent: {
// //     flex: 1,
// //   },
// //   messageHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 6,
// //   },
// //   messageName: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#212529',
// //   },
// //   messageTime: {
// //     fontSize: 12,
// //     color: '#adb5bd',
// //   },
// //   messageText: {
// //     fontSize: 14,
// //     color: '#6c757d',
// //     lineHeight: 20,
// //     marginBottom: 4,
// //   },
// //   onlineStatus: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   onlineDot: {
// //     width: 8,
// //     height: 8,
// //     borderRadius: 4,
// //     backgroundColor: '#4CAF50',
// //     marginRight: 4,
// //   },
// //   onlineText: {
// //     fontSize: 12,
// //     color: '#4CAF50',
// //     fontWeight: '500',
// //   },
// //   offlineText: {
// //     fontSize: 11,
// //     color: '#6c757d',
// //     fontStyle: 'italic',
// //   },
// //   unreadMessage: {
// //     color: '#212529',
// //     fontWeight: '500',
// //   },
// //   unreadBadge: {
// //     width: 10,
// //     height: 10,
// //     borderRadius: 5,
// //     backgroundColor: '#FF6B6B',
// //     marginLeft: 8,
// //   },
// //   interestItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     paddingVertical: 14,
// //     paddingHorizontal: 4,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#f1f3f5',
// //   },
// //   interestContent: {
// //     flex: 1,
// //   },
// //   interestHeader: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 8,
// //   },
// //   interestName: {
// //     fontSize: 16,
// //     fontWeight: '600',
// //     color: '#212529',
// //   },
// //   interestTime: {
// //     fontSize: 12,
// //     color: '#adb5bd',
// //   },
// //   interestActions: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   statusBadge: {
// //     backgroundColor: '#FFF0F0',
// //     paddingHorizontal: 8,
// //     paddingVertical: 4,
// //     borderRadius: 10,
// //   },
// //   acceptedBadge: {
// //     backgroundColor: '#E8F5E9',
// //   },
// //   declinedBadge: {
// //     backgroundColor: '#FFEBEE',
// //   },
// //   statusText: {
// //     fontSize: 12,
// //     color: '#FF6B6B',
// //     fontWeight: '500',
// //   },
// //   acceptedText: {
// //     color: '#4CAF50',
// //   },
// //   declinedText: {
// //     color: '#F44336',
// //   },
// //   actionButtons: {
// //     flexDirection: 'row',
// //   },
// //   actionButton: {
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 15,
// //     marginLeft: 8,
// //   },
// //   acceptButton: {
// //     backgroundColor: '#E8F5E9',
// //   },
// //   declineButton: {
// //     backgroundColor: '#FFEBEE',
// //   },
// //   chatButton: {
// //     backgroundColor: '#FF6B6B',
// //   },
// //   acceptButtonText: {
// //     color: '#4CAF50',
// //     fontWeight: '500',
// //     fontSize: 12,
// //   },
// //   declineButtonText: {
// //     color: '#F44336',
// //     fontWeight: '500',
// //     fontSize: 12,
// //   },
// //   chatButtonText: {
// //     color: '#fff',
// //     fontWeight: '500',
// //     fontSize: 12,
// //   },
// //   emptyContainer: {
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingVertical: 60,
// //   },
// //   emptyText: {
// //     fontSize: 16,
// //     color: '#adb5bd',
// //     marginTop: 16,
// //     fontWeight: '500',
// //   },
// //   emptySubtext: {
// //     fontSize: 14,
// //     color: '#adb5bd',
// //     marginTop: 8,
// //     textAlign: 'center',
// //     paddingHorizontal: 20,
// //   }
// // });








//13/09/2025
// app/(tabs)/Messages.js
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState, RefreshControl } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userProfiles, setUserProfiles] = useState({});
//   const [refreshing, setRefreshing] = useState(false);
//   const [lastUpdateTime, setLastUpdateTime] = useState(null);
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const appState = useRef(AppState.currentState);

//   // Translations
//   const translations = {
//     messages: { ENG: "Messages", HI: "संदेश" },
//     incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
//     awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
//     searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
//     noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
//     startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
//     noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
//     interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
//     interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
//     accept: { ENG: "Accept", HI: "स्वीकार करें" },
//     decline: { ENG: "Decline", HI: "अस्वीकार करें" },
//     pending: { ENG: "Pending", HI: "लंबित" },
//     accepted: { ENG: "Accepted", HI: "स्वीकृत" },
//     declined: { ENG: "Declined", HI: "अस्वीकृत" },
//     viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
//     startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
//     online: { ENG: "Online", HI: "ऑनलाइन" },
//     offline: { ENG: "Offline", HI: "ऑफलाइन" },
//     lastSeen: { ENG: "Last seen", HI: "अंतिम बार देखा गया" },
//     pullToRefresh: { ENG: "Pull to refresh", HI: "ताज़ा करने के लिए खींचें" }
//   };

//   // Load cached data from AsyncStorage on component mount
//   useEffect(() => {
//     loadCachedData();
//   }, []);

//   // Load all cached data from AsyncStorage
//   const loadCachedData = async () => {
//     try {
//       const [
//         cachedChats,
//         cachedReceivedInterests,
//         cachedSentInterests,
//         cachedUserProfiles,
//         cachedLastUpdate
//       ] = await Promise.all([
//         AsyncStorage.getItem('cachedChats'),
//         AsyncStorage.getItem('cachedReceivedInterests'),
//         AsyncStorage.getItem('cachedSentInterests'),
//         AsyncStorage.getItem('cachedUserProfiles'),
//         AsyncStorage.getItem('lastUpdateTime')
//       ]);

//       if (cachedChats) setChats(JSON.parse(cachedChats));
//       if (cachedReceivedInterests) setReceivedInterests(JSON.parse(cachedReceivedInterests));
//       if (cachedSentInterests) setSentInterests(JSON.parse(cachedSentInterests));
//       if (cachedUserProfiles) setUserProfiles(JSON.parse(cachedUserProfiles));
//       if (cachedLastUpdate) setLastUpdateTime(JSON.parse(cachedLastUpdate));
      
//       // After loading cache, refresh data if needed
//       refreshDataIfNeeded();
//     } catch (error) {
//       console.error('Error loading cached data:', error);
//     }
//   };

//   // Check if we need to refresh data based on last update time
//   const refreshDataIfNeeded = useCallback(async () => {
//     if (!user?.id) return;
    
//     const now = Date.now();
//     const fiveMinutesAgo = now - (5 * 60 * 1000); // 5 minutes in milliseconds
    
//     // If data is older than 5 minutes or doesn't exist, refresh it
//     if (!lastUpdateTime || lastUpdateTime < fiveMinutesAgo) {
//       await refreshData();
//     }
//   }, [user, lastUpdateTime]);

//   // Refresh all data manually
//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await refreshData();
//     setRefreshing(false);
//   }, [user]);

//   // Refresh data from Firestore
//   const refreshData = async () => {
//     if (!user?.id) return;
    
//     try {
//       await Promise.all([
//         loadChats(),
//         loadReceivedInterests(),
//         loadSentInterests(),
//         loadOnlineUsers()
//       ]);
      
//       // Update last refresh time
//       const now = Date.now();
//       setLastUpdateTime(now);
//       await AsyncStorage.setItem('lastUpdateTime', JSON.stringify(now));
//     } catch (error) {
//       console.error('Error refreshing data:', error);
//     }
//   };

//   // Load chats with caching
//   const loadChats = async () => {
//     if (!user?.id) return;

//     try {
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id),
//         orderBy('lastMessageTime', 'desc')
//       );
      
//       const querySnapshot = await getDocs(q);
//       const chatsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const chatData = doc.data();
//         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
//         if (otherParticipantId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[otherParticipantId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(otherParticipantId);
//           }
          
//           chatsData.push({
//             id: doc.id,
//             ...chatData,
//             otherParticipantId,
//             otherParticipantName: userProfile?.name || 'User',
//             otherParticipantPhoto: userProfile?.photo
//           });
//         }
//       }
      
//       setChats(chatsData);
//       await AsyncStorage.setItem('cachedChats', JSON.stringify(chatsData));
//     } catch (error) {
//       console.error('Error loading chats:', error);
//       // If online loading fails, use cached data
//       const cachedChats = await AsyncStorage.getItem('cachedChats');
//       if (cachedChats) setChats(JSON.parse(cachedChats));
//     }
//   };

//   // Load received interests with caching
//   const loadReceivedInterests = async () => {
//     if (!user?.id) return;

//     try {
//       const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//       const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
//       const querySnapshot = await getDocs(q);
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.fromUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.fromUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.fromUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             fromUserPhoto: userProfile?.photo,
//             fromUserName: userProfile?.name || interestData.fromUserName
//           });
//         }
//       }
      
//       setReceivedInterests(interestsData);
//       await AsyncStorage.setItem('cachedReceivedInterests', JSON.stringify(interestsData));
//     } catch (error) {
//       console.error('Error loading received interests:', error);
//       // If online loading fails, use cached data
//       const cachedInterests = await AsyncStorage.getItem('cachedReceivedInterests');
//       if (cachedInterests) setReceivedInterests(JSON.parse(cachedInterests));
//     }
//   };

//   // Load sent interests with caching
//   const loadSentInterests = async () => {
//     if (!user?.id) return;

//     try {
//       const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//       const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
//       const querySnapshot = await getDocs(q);
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.toUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.toUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.toUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             toUserPhoto: userProfile?.photo,
//             toUserName: userProfile?.name || interestData.toUserName
//           });
//         }
//       }
      
//       setSentInterests(interestsData);
//       await AsyncStorage.setItem('cachedSentInterests', JSON.stringify(interestsData));
//     } catch (error) {
//       console.error('Error loading sent interests:', error);
//       // If online loading fails, use cached data
//       const cachedInterests = await AsyncStorage.getItem('cachedSentInterests');
//       if (cachedInterests) setSentInterests(JSON.parse(cachedInterests));
//     }
//   };

//   // Load online users
//   const loadOnlineUsers = async () => {
//     if (!user?.id) return;

//     try {
//       const onlineRef = collection(db, 'onlineUsers');
//       const querySnapshot = await getDocs(onlineRef);
      
//       const onlineUsersData = [];
//       const onlineUsersWithTime = {};
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (doc.id !== user.id && userData.lastSeen) {
//           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           onlineUsersWithTime[doc.id] = {
//             isOnline: userData.isOnline,
//             lastSeen: lastSeen
//           };
          
//           const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
//           // Consider user online if they were active in the last 5 minutes
//           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
//             onlineUsersData.push(doc.id);
//           }
//         }
//       });
      
//       setOnlineUsers(onlineUsersData);
//     } catch (error) {
//       console.error('Error loading online users:', error);
//     }
//   };

//   // Fetch user profile data with caching
//   const fetchUserProfile = async (userId) => {
//     // Check if profile is already in state
//     if (userProfiles[userId]) return userProfiles[userId];
    
//     // Check if profile is in AsyncStorage
//     try {
//       const storedProfiles = await AsyncStorage.getItem('cachedUserProfiles');
//       if (storedProfiles) {
//         const parsedProfiles = JSON.parse(storedProfiles);
//         if (parsedProfiles[userId]) {
//           setUserProfiles(parsedProfiles);
//           return parsedProfiles[userId];
//         }
//       }
//     } catch (error) {
//       console.error('Error checking stored profiles:', error);
//     }
    
//     try {
//       // Check Users collection directly
//       const profileRef = doc(db, 'Users', userId);
//       const profileSnap = await getDoc(profileRef);
      
//       if (profileSnap.exists()) {
//         const profileData = profileSnap.data();
//         const userProfile = {
//           id: userId,
//           name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//           photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//           age: profileData.age,
//           city: profileData.city
//         };
        
//         // Update state and storage
//         const updatedProfiles = { ...userProfiles, [userId]: userProfile };
//         setUserProfiles(updatedProfiles);
//         await AsyncStorage.setItem('cachedUserProfiles', JSON.stringify(updatedProfiles));
        
//         return userProfile;
//       }
      
//       // Fallback if no profile found
//       const fallbackProfile = {
//         id: userId,
//         name: 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       };
      
//       const updatedProfiles = { ...userProfiles, [userId]: fallbackProfile };
//       setUserProfiles(updatedProfiles);
//       await AsyncStorage.setItem('cachedUserProfiles', JSON.stringify(updatedProfiles));
      
//       return fallbackProfile;
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       return null;
//     }
//   };

//   // Set up real-time listeners only for message updates
//   useEffect(() => {
//     if (!user?.id) return;

//     // Set up real-time listener for new messages
//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id)
//     );
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       // Only update if there are actual changes
//       querySnapshot.docChanges().forEach((change) => {
//         if (change.type === 'modified') {
//           // Update the specific chat in our state
//           const updatedChat = change.doc.data();
//           setChats(prevChats => {
//             const updatedChats = prevChats.map(chat =>
//               chat.id === change.doc.id ? { ...chat, ...updatedChat } : chat
//             );
            
//             // Also update cache
//             AsyncStorage.setItem('cachedChats', JSON.stringify(updatedChats));
//             return updatedChats;
//           });
//         }
//       });
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest && interest.fromUserId) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       // Update local state
//       setReceivedInterests(prev =>
//         prev.map(item =>
//           item.id === interestId ? { ...item, status: response } : item
//         )
//       );
      
//       // Update cache
//       await AsyncStorage.setItem('cachedReceivedInterests', JSON.stringify(receivedInterests));

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds && chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         router.push(`/chat/${existingChat.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         router.push(`/chat/${chatRef.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const formatLastSeen = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const lastSeenDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - lastSeenDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 1) return 'just now';
//     if (minutes < 60) return `${minutes} minutes ago`;
//     if (hours < 24) return `${hours} hours ago`;
//     if (days < 7) return `${days} days ago`;
//     return lastSeenDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${encodeURIComponent(item.otherParticipantName)}&profileId=${item.otherParticipantId}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//           {isOnline ? (
//             <View style={styles.onlineStatus}>
//               <View style={styles.onlineDot} />
//               <Text style={styles.onlineText}>{translations.online[language]}</Text>
//             </View>
//           ) : (
//             <Text style={styles.offlineText}>
//               {translations.lastSeen[language]} {formatLastSeen(item.lastMessageTime)}
//             </Text>
//           )}
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
//     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
//     const userName = isReceived ? interest.fromUserName : interest.toUserName;
//     const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
//     return (
//       <View style={styles.interestItem}>
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.interestAvatar}
//           />
//           {onlineUsers.includes(userId) && (
//             <View style={styles.onlineBadge} />
//           )}
//         </View>
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{userName}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton} onPress={onRefresh}>
//             <Ionicons name="refresh" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//           refreshControl={
//             <RefreshControl
//               refreshing={refreshing}
//               onRefresh={onRefresh}
//               title={translations.pullToRefresh[language]}
//               tintColor="#FF6B6B"
//               titleColor="#666"
//             />
//           }
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//     marginBottom: 4,
//   },
//   onlineStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 4,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 11,
//     color: '#6c757d',
//     fontStyle: 'italic',
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });







//14/09/2025
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState, RefreshControl } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useFirestore } from '../hooks/useFirebase';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userProfiles, setUserProfiles] = useState({});
//   const [refreshing, setRefreshing] = useState(false);
//   const [lastUpdateTime, setLastUpdateTime] = useState(null);
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const appState = useRef(AppState.currentState);
//   const { fetchProfiles } = useFirestore();

//   // Cache expiration time (5 minutes)
//   const CACHE_EXPIRY = 5 * 60 * 1000;

//   // Get cached data with expiration check
//   const getCachedData = async (key) => {
//     try {
//       const cached = await AsyncStorage.getItem(key);
//       if (!cached) return null;
      
//       const { data, timestamp } = JSON.parse(cached);
//       if (Date.now() - timestamp > CACHE_EXPIRY) {
//         await AsyncStorage.removeItem(key);
//         return null;
//       }
      
//       return data;
//     } catch (error) {
//       console.error('Error getting cached data:', error);
//       return null;
//     }
//   };

//   // Set data to cache with timestamp
//   const setCachedData = async (key, data) => {
//     try {
//       const cacheData = {
//         data,
//         timestamp: Date.now()
//       };
//       await AsyncStorage.setItem(key, JSON.stringify(cacheData));
//     } catch (error) {
//       console.error('Error setting cached data:', error);
//     }
//   };

//   // Translations
//   const translations = {
//     messages: { ENG: "Messages", HI: "संदेश" },
//     incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
//     awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
//     searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
//     noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
//     startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
//     noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
//     interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
//     interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
//     accept: { ENG: "Accept", HI: "स्वीकार करें" },
//     decline: { ENG: "Decline", HI: "अस्वीकार करें" },
//     pending: { ENG: "Pending", HI: "लंबित" },
//     accepted: { ENG: "Accepted", HI: "स्वीकृत" },
//     declined: { ENG: "Declined", HI: "अस्वीकृत" },
//     viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
//     startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
//     online: { ENG: "Online", HI: "ऑनलाइन" },
//     offline: { ENG: "Offline", HI: "ऑफलाइन" },
//     lastSeen: { ENG: "Last seen", HI: "अंतिम बार देखा गया" },
//     pullToRefresh: { ENG: "Pull to refresh", HI: "ताज़ा करने के लिए खींचें" }
//   };

//   // Load cached data from AsyncStorage on component mount
//   useEffect(() => {
//     loadCachedData();
//   }, []);

//   // Load all cached data from AsyncStorage
//   const loadCachedData = async () => {
//     try {
//       const [
//         cachedChats, 
//         cachedReceivedInterests, 
//         cachedSentInterests, 
//         cachedUserProfiles,
//         cachedLastUpdate
//       ] = await Promise.all([
//         getCachedData(`chats_${user.id}`),
//         getCachedData(`receivedInterests_${user.id}`),
//         getCachedData(`sentInterests_${user.id}`),
//         getCachedData(`userProfiles`),
//         getCachedData(`lastUpdateTime_${user.id}`)
//       ]);

//       if (cachedChats) setChats(cachedChats);
//       if (cachedReceivedInterests) setReceivedInterests(cachedReceivedInterests);
//       if (cachedSentInterests) setSentInterests(cachedSentInterests);
//       if (cachedUserProfiles) setUserProfiles(cachedUserProfiles);
//       if (cachedLastUpdate) setLastUpdateTime(cachedLastUpdate);
      
//       // After loading cache, refresh data if needed
//       refreshDataIfNeeded();
//     } catch (error) {
//       console.error('Error loading cached data:', error);
//     }
//   };

//   // Check if we need to refresh data based on last update time
//   const refreshDataIfNeeded = useCallback(async () => {
//     if (!user?.id) return;
    
//     const now = Date.now();
//     const fiveMinutesAgo = now - (5 * 60 * 1000); // 5 minutes in milliseconds
    
//     // If data is older than 5 minutes or doesn't exist, refresh it
//     if (!lastUpdateTime || lastUpdateTime < fiveMinutesAgo) {
//       await refreshData();
//     }
//   }, [user, lastUpdateTime]);

//   // Refresh all data manually
//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await refreshData();
//     setRefreshing(false);
//   }, [user]);

//   // Refresh data from Firestore
//   const refreshData = async () => {
//     if (!user?.id) return;
    
//     try {
//       await Promise.all([
//         loadChats(),
//         loadReceivedInterests(),
//         loadSentInterests(),
//         loadOnlineUsers()
//       ]);
      
//       // Update last refresh time
//       const now = Date.now();
//       setLastUpdateTime(now);
//       await setCachedData(`lastUpdateTime_${user.id}`, now);
//     } catch (error) {
//       console.error('Error refreshing data:', error);
//     }
//   };

//   // Load chats with caching
//   const loadChats = async () => {
//     if (!user?.id) return;

//     try {
//       const cacheKey = `chats_${user.id}`;
//       const cachedChats = await getCachedData(cacheKey);
      
//       if (cachedChats) {
//         setChats(cachedChats);
//         return;
//       }
      
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id),
//         orderBy('lastMessageTime', 'desc')
//       );
      
//       const querySnapshot = await getDocs(q);
//       const chatsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const chatData = doc.data();
//         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
//         if (otherParticipantId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[otherParticipantId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(otherParticipantId);
//           }
          
//           chatsData.push({
//             id: doc.id,
//             ...chatData,
//             otherParticipantId,
//             otherParticipantName: userProfile?.name || 'User',
//             otherParticipantPhoto: userProfile?.photo
//           });
//         }
//       }
      
//       setChats(chatsData);
//       await setCachedData(cacheKey, chatsData);
//     } catch (error) {
//       console.error('Error loading chats:', error);
//       // If online loading fails, use cached data
//       const cachedChats = await getCachedData(`chats_${user.id}`);
//       if (cachedChats) setChats(cachedChats);
//     }
//   };

//   // Load received interests with caching
//   const loadReceivedInterests = async () => {
//     if (!user?.id) return;

//     try {
//       const cacheKey = `receivedInterests_${user.id}`;
//       const cachedInterests = await getCachedData(cacheKey);
      
//       if (cachedInterests) {
//         setReceivedInterests(cachedInterests);
//         return;
//       }
      
//       const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//       const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
//       const querySnapshot = await getDocs(q);
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.fromUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.fromUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.fromUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             fromUserPhoto: userProfile?.photo,
//             fromUserName: userProfile?.name || interestData.fromUserName
//           });
//         }
//       }
      
//       setReceivedInterests(interestsData);
//       await setCachedData(cacheKey, interestsData);
//     } catch (error) {
//       console.error('Error loading received interests:', error);
//       // If online loading fails, use cached data
//       const cachedInterests = await getCachedData(`receivedInterests_${user.id}`);
//       if (cachedInterests) setReceivedInterests(cachedInterests);
//     }
//   };

//   // Load sent interests with caching
//   const loadSentInterests = async () => {
//     if (!user?.id) return;

//     try {
//       const cacheKey = `sentInterests_${user.id}`;
//       const cachedInterests = await getCachedData(cacheKey);
      
//       if (cachedInterests) {
//         setSentInterests(cachedInterests);
//         return;
//       }
      
//       const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//       const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
//       const querySnapshot = await getDocs(q);
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.toUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.toUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.toUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             toUserPhoto: userProfile?.photo,
//             toUserName: userProfile?.name || interestData.toUserName
//           });
//         }
//       }
      
//       setSentInterests(interestsData);
//       await setCachedData(cacheKey, interestsData);
//     } catch (error) {
//       console.error('Error loading sent interests:', error);
//       // If online loading fails, use cached data
//       const cachedInterests = await getCachedData(`sentInterests_${user.id}`);
//       if (cachedInterests) setSentInterests(cachedInterests);
//     }
//   };

//   // Load online users
//   const loadOnlineUsers = async () => {
//     if (!user?.id) return;

//     try {
//       const onlineRef = collection(db, 'onlineUsers');
//       const querySnapshot = await getDocs(onlineRef);
      
//       const onlineUsersData = [];
//       const onlineUsersWithTime = {};
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (doc.id !== user.id && userData.lastSeen) {
//           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           onlineUsersWithTime[doc.id] = {
//             isOnline: userData.isOnline,
//             lastSeen: lastSeen
//           };
          
//           const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
//           // Consider user online if they were active in the last 5 minutes
//           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
//             onlineUsersData.push(doc.id);
//           }
//         }
//       });
      
//       setOnlineUsers(onlineUsersData);
//     } catch (error) {
//       console.error('Error loading online users:', error);
//     }
//   };

//   // Fetch user profile data with caching
//   const fetchUserProfile = async (userId) => {
//     // Check if profile is already in state
//     if (userProfiles[userId]) return userProfiles[userId];
    
//     // Check if profile is in cache
//     try {
//       const cachedProfiles = await getCachedData('userProfiles');
//       if (cachedProfiles && cachedProfiles[userId]) {
//         setUserProfiles(cachedProfiles);
//         return cachedProfiles[userId];
//       }
//     } catch (error) {
//       console.error('Error checking stored profiles:', error);
//     }
    
//     try {
//       // Use the optimized fetchProfiles function to get user data
//       const profiles = await fetchProfiles('', 1, userId);
      
//       if (profiles.length > 0) {
//         const profileData = profiles[0];
//         const userProfile = {
//           id: userId,
//           name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//           photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//           age: profileData.age,
//           city: profileData.city
//         };
        
//         // Update state and storage
//         const updatedProfiles = { ...userProfiles, [userId]: userProfile };
//         setUserProfiles(updatedProfiles);
//         await setCachedData('userProfiles', updatedProfiles);
        
//         return userProfile;
//       }
      
//       // Fallback if no profile found
//       const fallbackProfile = {
//         id: userId,
//         name: 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       };
      
//       const updatedProfiles = { ...userProfiles, [userId]: fallbackProfile };
//       setUserProfiles(updatedProfiles);
//       await setCachedData('userProfiles', updatedProfiles);
      
//       return fallbackProfile;
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       return null;
//     }
//   };

//   // Set up real-time listeners only for message updates
//   useEffect(() => {
//     if (!user?.id) return;

//     // Set up real-time listener for new messages
//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id)
//     );
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       // Only update if there are actual changes
//       querySnapshot.docChanges().forEach((change) => {
//         if (change.type === 'modified') {
//           // Update the specific chat in our state
//           const updatedChat = change.doc.data();
//           setChats(prevChats => {
//             const updatedChats = prevChats.map(chat => 
//               chat.id === change.doc.id ? { ...chat, ...updatedChat } : chat
//             );
            
//             // Also update cache
//             setCachedData(`chats_${user.id}`, updatedChats);
//             return updatedChats;
//           });
//         }
//       });
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest && interest.fromUserId) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       // Update local state
//       setReceivedInterests(prev => 
//         prev.map(item => 
//           item.id === interestId ? { ...item, status: response } : item
//         )
//       );
      
//       // Update cache
//       await setCachedData(`receivedInterests_${user.id}`, receivedInterests);

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds && chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         router.push(`/chat/${existingChat.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         router.push(`/chat/${chatRef.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const formatLastSeen = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const lastSeenDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - lastSeenDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 1) return 'just now';
//     if (minutes < 60) return `${minutes} minutes ago`;
//     if (hours < 24) return `${hours} hours ago`;
//     if (days < 7) return `${days} days ago`;
//     return lastSeenDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${encodeURIComponent(item.otherParticipantName)}&profileId=${item.otherParticipantId}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//           {isOnline ? (
//             <View style={styles.onlineStatus}>
//               <View style={styles.onlineDot} />
//               <Text style={styles.onlineText}>{translations.online[language]}</Text>
//             </View>
//           ) : (
//             <Text style={styles.offlineText}>
//               {translations.lastSeen[language]} {formatLastSeen(item.lastMessageTime)}
//             </Text>
//           )}
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
//     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
//     const userName = isReceived ? interest.fromUserName : interest.toUserName;
//     const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
//     return (
//       <View style={styles.interestItem}>
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.interestAvatar}
//           />
//           {onlineUsers.includes(userId) && (
//             <View style={styles.onlineBadge} />
//           )}
//         </View>
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{userName}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton} onPress={onRefresh}>
//             <Ionicons name="refresh" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//           refreshControl={
//             <RefreshControl
//               refreshing={refreshing}
//               onRefresh={onRefresh}
//               title={translations.pullToRefresh[language]}
//               tintColor="#FF6B6B"
//               titleColor="#666"
//             />
//           }
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//     marginBottom: 4,
//   },
//   onlineStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 4,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 11,
//     color: '#6c757d',
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//  actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });







//15/09/2025
// //app/(tabs)/Messages.jsx
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState, RefreshControl } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'expo-router';
// import { useLanguage } from '../context/LanguageContext';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useFirestore } from '../hooks/useFirebase';

// export default function Messages() {
//   const [activeTab, setActiveTab] = useState('Chats');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [chats, setChats] = useState([]);
//   const [receivedInterests, setReceivedInterests] = useState([]);
//   const [sentInterests, setSentInterests] = useState([]);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userProfiles, setUserProfiles] = useState({});
//   const [refreshing, setRefreshing] = useState(false);
//   const [lastUpdateTime, setLastUpdateTime] = useState(null);
//   const { user } = useAuth();
//   const router = useRouter();
//   const { language } = useLanguage();
//   const appState = useRef(AppState.currentState);
//   const { fetchProfiles } = useFirestore();

//   // Cache expiration time (5 minutes)
//   const CACHE_EXPIRY = 5 * 60 * 1000;

//   // Get cached data with expiration check
//   const getCachedData = async (key) => {
//     try {
//       const cached = await AsyncStorage.getItem(key);
//       if (!cached) return null;
      
//       const { data, timestamp } = JSON.parse(cached);
//       if (Date.now() - timestamp > CACHE_EXPIRY) {
//         await AsyncStorage.removeItem(key);
//         return null;
//       }
      
//       return data;
//     } catch (error) {
//       console.error('Error getting cached data:', error);
//       return null;
//     }
//   };

//   // Set data to cache with timestamp
//   const setCachedData = async (key, data) => {
//     try {
//       const cacheData = {
//         data,
//         timestamp: Date.now()
//       };
//       await AsyncStorage.setItem(key, JSON.stringify(cacheData));
//     } catch (error) {
//       console.error('Error setting cached data:', error);
//     }
//   };

//   // Translations
//   const translations = {
//     messages: { ENG: "Messages", HI: "संदेश" },
//     incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
//     awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
//     searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
//     noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
//     startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
//     noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
//     interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
//     interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
//     accept: { ENG: "Accept", HI: "स्वीकार करें" },
//     decline: { ENG: "Decline", HI: "अस्वीकार करें" },
//     pending: { ENG: "Pending", HI: "लंबित" },
//     accepted: { ENG: "Accepted", HI: "स्वीकृत" },
//     declined: { ENG: "Declined", HI: "अस्वीकृत" },
//     viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
//     startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
//     online: { ENG: "Online", HI: "ऑनलाइन" },
//     offline: { ENG: "Offline", HI: "ऑफलाइन" },
//     lastSeen: { ENG: "Last seen", HI: "अंतिम बार देखा गया" },
//     pullToRefresh: { ENG: "Pull to refresh", HI: "ताज़ा करने के लिए खींचें" }
//   };

//   // Load cached data from AsyncStorage on component mount
//   useEffect(() => {
//     loadCachedData();
//   }, []);

//   // Load all cached data from AsyncStorage
//   const loadCachedData = async () => {
//     try {
//       const [
//         cachedChats, 
//         cachedReceivedInterests, 
//         cachedSentInterests, 
//         cachedUserProfiles,
//         cachedLastUpdate
//       ] = await Promise.all([
//         getCachedData(`chats_${user.id}`),
//         getCachedData(`receivedInterests_${user.id}`),
//         getCachedData(`sentInterests_${user.id}`),
//         getCachedData(`userProfiles`),
//         getCachedData(`lastUpdateTime_${user.id}`)
//       ]);

//       if (cachedChats) setChats(cachedChats);
//       if (cachedReceivedInterests) setReceivedInterests(cachedReceivedInterests);
//       if (cachedSentInterests) setSentInterests(cachedSentInterests);
//       if (cachedUserProfiles) setUserProfiles(cachedUserProfiles);
//       if (cachedLastUpdate) setLastUpdateTime(cachedLastUpdate);
      
//       // After loading cache, refresh data if needed
//       refreshDataIfNeeded();
//     } catch (error) {
//       console.error('Error loading cached data:', error);
//     }
//   };

//   // Check if we need to refresh data based on last update time
//   const refreshDataIfNeeded = useCallback(async () => {
//     if (!user?.id) return;
    
//     const now = Date.now();
//     const fiveMinutesAgo = now - (5 * 60 * 1000); // 5 minutes in milliseconds
    
//     // If data is older than 5 minutes or doesn't exist, refresh it
//     if (!lastUpdateTime || lastUpdateTime < fiveMinutesAgo) {
//       await refreshData();
//     }
//   }, [user, lastUpdateTime]);

//   // Refresh all data manually
//   const onRefresh = useCallback(async () => {
//     setRefreshing(true);
//     await refreshData();
//     setRefreshing(false);
//   }, [user]);

//   // Refresh data from Firestore
//   const refreshData = async () => {
//     if (!user?.id) return;
    
//     try {
//       await Promise.all([
//         loadChats(),
//         loadReceivedInterests(),
//         loadSentInterests(),
//         loadOnlineUsers()
//       ]);
      
//       // Update last refresh time
//       const now = Date.now();
//       setLastUpdateTime(now);
//       await setCachedData(`lastUpdateTime_${user.id}`, now);
//     } catch (error) {
//       console.error('Error refreshing data:', error);
//     }
//   };

//   // Load chats with caching
//   const loadChats = async () => {
//     if (!user?.id) return;

//     try {
//       const cacheKey = `chats_${user.id}`;
//       const cachedChats = await getCachedData(cacheKey);
      
//       if (cachedChats) {
//         setChats(cachedChats);
//         return;
//       }
      
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id),
//         orderBy('lastMessageTime', 'desc')
//       );
      
//       const querySnapshot = await getDocs(q);
//       const chatsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const chatData = doc.data();
//         const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
//         if (otherParticipantId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[otherParticipantId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(otherParticipantId);
//           }
          
//           chatsData.push({
//             id: doc.id,
//             ...chatData,
//             otherParticipantId,
//             otherParticipantName: userProfile?.name || 'User',
//             otherParticipantPhoto: userProfile?.photo || 'https://via.placeholder.com/150?text=User'
//           });
//         }
//       }
      
//       setChats(chatsData);
//       await setCachedData(cacheKey, chatsData);
//     } catch (error) {
//       console.error('Error loading chats:', error);
//       // If online loading fails, use cached data
//       const cachedChats = await getCachedData(`chats_${user.id}`);
//       if (cachedChats) setChats(cachedChats);
//     }
//   };

//   // Load received interests with caching
//   const loadReceivedInterests = async () => {
//     if (!user?.id) return;

//     try {
//       const cacheKey = `receivedInterests_${user.id}`;
//       const cachedInterests = await getCachedData(cacheKey);
      
//       if (cachedInterests) {
//         setReceivedInterests(cachedInterests);
//         return;
//       }
      
//       const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
//       const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
//       const querySnapshot = await getDocs(q);
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.fromUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.fromUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.fromUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             fromUserPhoto: userProfile?.photo || 'https://via.placeholder.com/150?text=User',
//             fromUserName: userProfile?.name || interestData.fromUserName || 'User'
//           });
//         }
//       }
      
//       setReceivedInterests(interestsData);
//       await setCachedData(cacheKey, interestsData);
//     } catch (error) {
//       console.error('Error loading received interests:', error);
//       // If online loading fails, use cached data
//       const cachedInterests = await getCachedData(`receivedInterests_${user.id}`);
//       if (cachedInterests) setReceivedInterests(cachedInterests);
//     }
//   };

//   // Load sent interests with caching
//   const loadSentInterests = async () => {
//     if (!user?.id) return;

//     try {
//       const cacheKey = `sentInterests_${user.id}`;
//       const cachedInterests = await getCachedData(cacheKey);
      
//       if (cachedInterests) {
//         setSentInterests(cachedInterests);
//         return;
//       }
      
//       const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
//       const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
//       const querySnapshot = await getDocs(q);
//       const interestsData = [];
      
//       for (const doc of querySnapshot.docs) {
//         const interestData = doc.data();
        
//         if (interestData.toUserId) {
//           // Get or fetch user profile
//           let userProfile = userProfiles[interestData.toUserId];
//           if (!userProfile) {
//             userProfile = await fetchUserProfile(interestData.toUserId);
//           }
          
//           interestsData.push({
//             id: doc.id,
//             ...interestData,
//             toUserPhoto: userProfile?.photo || 'https://via.placeholder.com/150?text=User',
//             toUserName: userProfile?.name || interestData.toUserName || 'User'
//           });
//         }
//       }
      
//       setSentInterests(interestsData);
//       await setCachedData(cacheKey, interestsData);
//     } catch (error) {
//       console.error('Error loading sent interests:', error);
//       // If online loading fails, use cached data
//       const cachedInterests = await getCachedData(`sentInterests_${user.id}`);
//       if (cachedInterests) setSentInterests(cachedInterests);
//     }
//   };

//   // Load online users
//   const loadOnlineUsers = async () => {
//     if (!user?.id) return;

//     try {
//       const onlineRef = collection(db, 'onlineUsers');
//       const querySnapshot = await getDocs(onlineRef);
      
//       const onlineUsersData = [];
//       const onlineUsersWithTime = {};
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (doc.id !== user.id && userData.lastSeen) {
//           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           onlineUsersWithTime[doc.id] = {
//             isOnline: userData.isOnline,
//             lastSeen: lastSeen
//           };
          
//           const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
//           // Consider user online if they were active in the last 5 minutes
//           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
//             onlineUsersData.push(doc.id);
//           }
//         }
//       });
      
//       setOnlineUsers(onlineUsersData);
//     } catch (error) {
//       console.error('Error loading online users:', error);
//     }
//   };

//   // Fetch user profile data with caching - FIXED VERSION
//   const fetchUserProfile = async (userId) => {
//     // Check if profile is already in state
//     if (userProfiles[userId]) return userProfiles[userId];
    
//     // Check if profile is in cache
//     try {
//       const cachedProfiles = await getCachedData('userProfiles');
//       if (cachedProfiles && cachedProfiles[userId]) {
//         return cachedProfiles[userId];
//       }
//     } catch (error) {
//       console.error('Error checking stored profiles:', error);
//     }
    
//     try {
//       // Get user profile directly from Users collection
//       const userRef = doc(db, 'Users', userId);
//       const userSnap = await getDoc(userRef);
      
//       if (userSnap.exists()) {
//         const userData = userSnap.data();
//         const userProfile = {
//           id: userId,
//           name: `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || 'User',
//           photo: userData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//           age: userData.age,
//           city: userData.city,
//           verificationStatus: userData.verificationStatus
//         };
        
//         // Update state and storage
//         const updatedProfiles = { ...userProfiles, [userId]: userProfile };
//         setUserProfiles(updatedProfiles);
//         await setCachedData('userProfiles', updatedProfiles);
        
//         return userProfile;
//       }
      
//       // Fallback if no profile found
//       const fallbackProfile = {
//         id: userId,
//         name: 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null,
//         verificationStatus: null
//       };
      
//       const updatedProfiles = { ...userProfiles, [userId]: fallbackProfile };
//       setUserProfiles(updatedProfiles);
//       await setCachedData('userProfiles', updatedProfiles);
      
//       return fallbackProfile;
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       return null;
//     }
//   };

//   // Set up real-time listeners only for message updates
//   useEffect(() => {
//     if (!user?.id) return;

//     // Set up real-time listener for new messages
//     const chatsRef = collection(db, 'chats');
//     const q = query(
//       chatsRef,
//       where('participantIds', 'array-contains', user.id)
//     );
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       // Only update if there are actual changes
//       querySnapshot.docChanges().forEach((change) => {
//         if (change.type === 'modified') {
//           // Update the specific chat in our state
//           const updatedChat = change.doc.data();
//           setChats(prevChats => {
//             const updatedChats = prevChats.map(chat => 
//               chat.id === change.doc.id ? { ...chat, ...updatedChat } : chat
//             );
            
//             // Also update cache
//             setCachedData(`chats_${user.id}`, updatedChats);
//             return updatedChats;
//           });
//         }
//       });
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Respond to an interest (accept/decline)
//   const respondToInterest = async (interestId, response) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Update the received interest
//       const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
//       await updateDoc(receivedInterestRef, {
//         status: response,
//         respondedAt: serverTimestamp()
//       });

//       // Find the original sent interest to update
//       const interest = receivedInterests.find(i => i.id === interestId);
//       if (interest && interest.fromUserId) {
//         const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
//         await updateDoc(sentInterestRef, {
//           status: response,
//           respondedAt: serverTimestamp()
//         });
//       }

//       // Update local state
//       setReceivedInterests(prev => 
//         prev.map(item => 
//           item.id === interestId ? { ...item, status: response } : item
//         )
//       );
      
//       // Update cache
//       await setCachedData(`receivedInterests_${user.id}`, receivedInterests);

//       if (response === 'accepted') {
//         Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
//       } else {
//         Alert.alert('Interest declined');
//       }
//     } catch (error) {
//       console.error('Error responding to interest:', error);
//       Alert.alert('Error', 'Failed to respond to interest. Please try again.');
//     }
//   };

//   // Start a chat from an interest
//   const startChatFromInterest = async (interest) => {
//     try {
//       if (!user?.id) throw new Error('User not available');

//       // Check if chat already exists
//       const chatsRef = collection(db, 'chats');
//       const q = query(
//         chatsRef,
//         where('participantIds', 'array-contains', user.id)
//       );
      
//       const querySnapshot = await getDocs(q);
//       let existingChat = null;
      
//       querySnapshot.forEach((doc) => {
//         const chatData = doc.data();
//         if (chatData.participantIds && chatData.participantIds.includes(interest.fromUserId)) {
//           existingChat = { id: doc.id, ...chatData };
//         }
//       });
      
//       if (existingChat) {
//         router.push(`/chat/${existingChat.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
//       } else {
//         // Create new chat
//         const chatData = {
//           participants: [
//             user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
//             interest.fromUserName
//           ],
//           participantIds: [user.id, interest.fromUserId],
//           lastMessage: '',
//           lastMessageTime: serverTimestamp(),
//           createdAt: serverTimestamp()
//         };
        
//         const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
//         // Create participants subcollection
//         await Promise.all([
//           addDoc(collection(chatRef, 'participants'), {
//             userId: user.id,
//             userName: user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
//             joinedAt: serverTimestamp()
//           }),
//           addDoc(collection(chatRef, 'participants'), {
//             userId: interest.fromUserId,
//             userName: interest.fromUserName,
//             joinedAt: serverTimestamp()
//           })
//         ]);
        
//         router.push(`/chat/${chatRef.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
//       }
//     } catch (error) {
//       console.error('Error starting chat:', error);
//       Alert.alert('Error', 'Failed to start chat. Please try again.');
//     }
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const messageDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - messageDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 60) return `${minutes}m ago`;
//     if (hours < 24) return `${hours}h ago`;
//     if (days < 7) return `${days}d ago`;
//     return messageDate.toLocaleDateString();
//   };

//   const formatLastSeen = (date) => {
//     if (!date) return '';
    
//     const now = new Date();
//     const lastSeenDate = date.toDate ? date.toDate() : new Date(date);
//     const diff = now - lastSeenDate;
//     const minutes = Math.floor(diff / 60000);
//     const hours = Math.floor(diff / 3600000);
//     const days = Math.floor(diff / 86400000);
    
//     if (minutes < 1) return 'just now';
//     if (minutes < 60) return `${minutes} minutes ago`;
//     if (hours < 24) return `${hours} hours ago`;
//     if (days < 7) return `${days} days ago`;
//     return lastSeenDate.toLocaleDateString();
//   };

//   const renderMessageItem = ({ item }) => {
//     const isOnline = onlineUsers.includes(item.otherParticipantId);
    
//     return (
//       <TouchableOpacity
//         style={styles.messageItem}
//         onPress={() => router.push(`/chat/${item.id}?name=${encodeURIComponent(item.otherParticipantName)}&profileId=${item.otherParticipantId}`)}
//       >
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.avatar}
//           />
//           {isOnline && <View style={styles.onlineBadge} />}
//         </View>
//         <View style={styles.messageContent}>
//           <View style={styles.messageHeader}>
//             <Text style={styles.messageName}>{item.otherParticipantName}</Text>
//             <Text style={styles.messageTime}>
//               {formatTime(item.lastMessageTime)}
//             </Text>
//           </View>
//           <Text
//             style={[
//               styles.messageText,
//               item.unread && styles.unreadMessage
//             ]}
//             numberOfLines={1}
//           >
//             {item.lastMessage || 'Start a conversation...'}
//           </Text>
//           {isOnline ? (
//             <View style={styles.onlineStatus}>
//               <View style={styles.onlineDot} />
//               <Text style={styles.onlineText}>{translations.online[language]}</Text>
//             </View>
//           ) : (
//             <Text style={styles.offlineText}>
//               {translations.lastSeen[language]} {formatLastSeen(item.lastMessageTime)}
//             </Text>
//           )}
//         </View>
//         {item.unread && <View style={styles.unreadBadge} />}
//       </TouchableOpacity>
//     );
//   };

//   const renderInterestItem = ({ item }) => {
//     const isReceived = activeTab === 'Interests Received';
//     const interest = isReceived ? item : item;
//     const status = interest.status || 'pending';
//     const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
//     const userName = isReceived ? interest.fromUserName : interest.toUserName;
//     const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
//     return (
//       <View style={styles.interestItem}>
//         <View style={styles.avatarContainer}>
//           <Image
//             source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.interestAvatar}
//           />
//           {onlineUsers.includes(userId) && (
//             <View style={styles.onlineBadge} />
//           )}
//         </View>
//         <View style={styles.interestContent}>
//           <View style={styles.interestHeader}>
//             <Text style={styles.interestName}>{userName}</Text>
//             <Text style={styles.interestTime}>
//               {formatTime(interest.timestamp)}
//             </Text>
//           </View>
//           <View style={styles.interestActions}>
//             <View style={[
//               styles.statusBadge,
//               status === 'accepted' && styles.acceptedBadge,
//               status === 'declined' && styles.declinedBadge
//             ]}>
//               <Text style={[
//                 styles.statusText,
//                 status === 'accepted' && styles.acceptedText,
//                 status === 'declined' && styles.declinedText
//               ]}>
//                 {translations[status.toLowerCase()]?.[language] || status}
//               </Text>
//             </View>
            
//             {isReceived && status === 'pending' ? (
//               <View style={styles.actionButtons}>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.acceptButton]}
//                   onPress={() => respondToInterest(item.id, 'accepted')}
//                 >
//                   <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.actionButton, styles.declineButton]}
//                   onPress={() => respondToInterest(item.id, 'declined')}
//                 >
//                   <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
//                 </TouchableOpacity>
//               </View>
//             ) : status === 'accepted' ? (
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.chatButton]}
//                 onPress={() => startChatFromInterest(item)}
//               >
//                 <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
//               </TouchableOpacity>
//             ) : null}
//           </View>
//         </View>
//       </View>
//     );
//   };

//   const getFilteredData = () => {
//     if (activeTab === 'Chats') {
//       return chats.filter(chat =>
//         chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Received') {
//       return receivedInterests.filter(interest =>
//         interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     } else if (activeTab === 'Interests Sent') {
//       return sentInterests.filter(interest =>
//         interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return [];
//   };

//   const renderEmptyState = () => {
//     if (activeTab === 'Chats') {
//       return (
//         <View style={styles.emptyContainer}>
//           <Feather name="message-square" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
//           <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
//         </View>
//       );
//     } else {
//       return (
//         <View style={styles.emptyContainer}>
//           <Ionicons name="heart" size={48} color="#ddd" />
//           <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
//           <TouchableOpacity style={styles.headerButton} onPress={onRefresh}>
//             <Ionicons name="refresh" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>

//         {/* Tabs */}
//         <View style={styles.tabsContainer}>
//           {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
//             <TouchableOpacity
//               key={tab}
//               style={[
//                 styles.tabButton,
//                 activeTab === tab && styles.activeTabButton
//               ]}
//               onPress={() => setActiveTab(tab)}
//             >
//               <Text style={[
//                 styles.tabText,
//                 activeTab === tab && styles.activeTabText
//               ]}>
//                 {tab === 'Interests Received' ? translations.interestsReceived[language] :
//                  tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
//               </Text>
//               {activeTab === tab && <View style={styles.activeTabIndicator} />}
//             </TouchableOpacity>
//           ))}
//         </View>

//         {/* Search and Filter */}
//         <View style={styles.searchContainer}>
//           <Text style={styles.searchTitle}>
//             {activeTab === 'Chats'
//               ? translations.incomingMessages[language]
//               : activeTab === 'Interests Received'
//                 ? translations.awaitingResponse[language]
//                 : translations.interestsSent[language]}
//           </Text>
//           <View style={styles.searchBar}>
//             <View style={styles.searchInputContainer}>
//               <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
//               <TextInput
//                 style={styles.searchInput}
//                 placeholder={translations.searchMessages[language]}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//               />
//             </View>
//             <TouchableOpacity style={styles.filterButton}>
//               <Feather name="filter" size={18} color="#FF6B6B" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Messages/Interests List */}
//         <FlatList
//           data={getFilteredData()}
//           renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
//           keyExtractor={item => item.id}
//           contentContainerStyle={styles.listContainer}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={renderEmptyState}
//           refreshControl={
//             <RefreshControl
//               refreshing={refreshing}
//               onRefresh={onRefresh}
//               title={translations.pullToRefresh[language]}
//               tintColor="#FF6B6B"
//               titleColor="#666"
//             />
//           }
//         />
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
//     paddingHorizontal: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 16,
//     paddingHorizontal: 4,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#212529',
//   },
//   headerButton: {
//     padding: 4,
//   },
//   tabsContainer: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     marginBottom: 16,
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 12,
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeTabButton: {
//     // No additional styling needed as we're using the indicator
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#6c757d',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#FF6B6B',
//     fontWeight: '600',
//   },
//   activeTabIndicator: {
//     position: 'absolute',
//     bottom: -1,
//     height: 2,
//     width: '60%',
//     backgroundColor: '#FF6B6B',
//     borderRadius: 2,
//   },
//   searchContainer: {
//     marginBottom: 16,
//     paddingHorizontal: 4,
//   },
//   searchTitle: {
//     fontSize: 14,
//     color: '#6c757d',
//     marginBottom: 10,
//     fontWeight: '500',
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   searchInputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     height: 40,
//     marginRight: 12,
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 14,
//     color: '#495057',
//     paddingVertical: 8,
//   },
//   filterButton: {
//     padding: 8,
//     backgroundColor: '#f8f9fa',
//     borderRadius: 20,
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   messageItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 16,
//   },
//   avatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   interestAvatar: {
//     width: 52,
//     height: 52,
//     borderRadius: 26,
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 2,
//     right: 2,
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   messageContent: {
//     flex: 1,
//   },
//   messageHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   messageName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   messageText: {
//     fontSize: 14,
//     color: '#6c757d',
//     lineHeight: 20,
//     marginBottom: 4,
//   },
//   onlineStatus: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 4,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 11,
//     color: '#6c757d',
//   },
//   unreadMessage: {
//     color: '#212529',
//     fontWeight: '500',
//   },
//   unreadBadge: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#FF6B6B',
//     marginLeft: 8,
//   },
//   interestItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f1f3f5',
//   },
//   interestContent: {
//     flex: 1,
//   },
//   interestHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   interestName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   interestTime: {
//     fontSize: 12,
//     color: '#adb5bd',
//   },
//   interestActions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   statusBadge: {
//     backgroundColor: '#FFF0F0',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 10,
//   },
//   acceptedBadge: {
//     backgroundColor: '#E8F5E9',
//   },
//   declinedBadge: {
//     backgroundColor: '#FFEBEE',
//   },
//   statusText: {
//     fontSize: 12,
//     color: '#FF6B6B',
//     fontWeight: '500',
//   },
//   acceptedText: {
//     color: '#4CAF50',
//   },
//   declinedText: {
//     color: '#F44336',
//   },
//   actionButtons: {
//     flexDirection: 'row',
//   },
//   actionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 15,
//     marginLeft: 8,
//   },
//   acceptButton: {
//     backgroundColor: '#E8F5E9',
//   },
//   declineButton: {
//     backgroundColor: '#FFEBEE',
//   },
//   chatButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   acceptButtonText: {
//     color: '#4CAF50',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   declineButtonText: {
//     color: '#F44336',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   chatButtonText: {
//     color: '#fff',
//     fontWeight: '500',
//     fontSize: 12,
//   },
//   emptyContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#adb5bd',
//     marginTop: 16,
//     fontWeight: '500',
//   },
//   emptySubtext: {
//     fontSize: 14,
//     color: '#adb5bd',
//     marginTop: 8,
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
// });






//19/09/2024
//app/(tabs)/Messages.jsx
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput, FlatList, Alert, AppState, RefreshControl, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { collection, query, where, onSnapshot, orderBy, doc, getDoc, updateDoc, addDoc, serverTimestamp, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';
import { useLanguage } from '../context/LanguageContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFirestore } from '../hooks/useFirebase';

export default function Messages() {
  const [activeTab, setActiveTab] = useState('Chats');
  const [searchQuery, setSearchQuery] = useState('');
  const [chats, setChats] = useState([]);
  const [receivedInterests, setReceivedInterests] = useState([]);
  const [sentInterests, setSentInterests] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [userProfiles, setUserProfiles] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
  const { user } = useAuth();
  const router = useRouter();
  const { language } = useLanguage();
  const appState = useRef(AppState.currentState);
  const { fetchProfiles } = useFirestore();

  // Cache expiration time (5 minutes)
  const CACHE_EXPIRY = 5 * 60 * 1000;

  // Get cached data with expiration check
  const getCachedData = async (key) => {
    try {
      const cached = await AsyncStorage.getItem(key);
      if (!cached) return null;
      
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp > CACHE_EXPIRY) {
        await AsyncStorage.removeItem(key);
        return null;
      }
      
      return data;
    } catch (error) {
      console.error('Error getting cached data:', error);
      return null;
    }
  };

  // Set data to cache with timestamp
  const setCachedData = async (key, data) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now()
      };
      await AsyncStorage.setItem(key, JSON.stringify(cacheData));
    } catch (error) {
      console.error('Error setting cached data:', error);
    }
  };

  // Translations
  const translations = {
    messages: { ENG: "Messages", HI: "संदेश" },
    incomingMessages: { ENG: "Incoming messages", HI: "आने वाले संदेश" },
    awaitingResponse: { ENG: "Awaiting your response", HI: "आपकी प्रतिक्रिया का इंतजार" },
    searchMessages: { ENG: "Search messages", HI: "संदेश खोजें" },
    noMessages: { ENG: "No messages yet", HI: "अभी तक कोई संदेश नहीं" },
    startConversation: { ENG: "Start a conversation with someone you're interested in", HI: "किसी ऐसे व्यक्ति से बातचीत शुरू करें जिसमें आपकी रुचि हो" },
    noInterests: { ENG: "No interests found", HI: "कोई रुचि नहीं मिली" },
    interestsReceived: { ENG: "Interests received", HI: "प्राप्त रुचियाँ" },
    interestsSent: { ENG: "Interests sent", HI: "भेजी गई रुचियाँ" },
    accept: { ENG: "Accept", HI: "स्वीकार करें" },
    decline: { ENG: "Decline", HI: "अस्वीकार करें" },
    pending: { ENG: "Pending", HI: "लंबित" },
    accepted: { ENG: "Accepted", HI: "स्वीकृत" },
    declined: { ENG: "Declined", HI: "अस्वीकृत" },
    viewProfile: { ENG: "View Profile", HI: "प्रोफाइल देखें" },
    startChat: { ENG: "Start Chat", HI: "चैट शुरू करें" },
    online: { ENG: "Online", HI: "ऑनलाइन" },
    offline: { ENG: "Offline", HI: "ऑफलाइन" },
    lastSeen: { ENG: "Last seen", HI: "अंतिम बार देखा गया" },
    pullToRefresh: { ENG: "Pull to refresh", HI: "ताज़ा करने के लिए खींचें" },
    loading: { ENG: "Loading...", HI: "लोड हो रहा है..." }
  };

  // Load cached data from AsyncStorage on component mount
  useEffect(() => {
    loadCachedData();
  }, []);

  // Load all cached data from AsyncStorage
  const loadCachedData = async () => {
    try {
      const [
        cachedChats, 
        cachedReceivedInterests, 
        cachedSentInterests, 
        cachedUserProfiles,
        cachedLastUpdate
      ] = await Promise.all([
        getCachedData(`chats_${user.id}`),
        getCachedData(`receivedInterests_${user.id}`),
        getCachedData(`sentInterests_${user.id}`),
        getCachedData(`userProfiles`),
        getCachedData(`lastUpdateTime_${user.id}`)
      ]);

      if (cachedChats) setChats(cachedChats);
      if (cachedReceivedInterests) setReceivedInterests(cachedReceivedInterests);
      if (cachedSentInterests) setSentInterests(cachedSentInterests);
      if (cachedUserProfiles) setUserProfiles(cachedUserProfiles);
      if (cachedLastUpdate) setLastUpdateTime(cachedLastUpdate);
      
      // After loading cache, refresh data if needed
      refreshDataIfNeeded();
    } catch (error) {
      console.error('Error loading cached data:', error);
    }
  };

  // Check if we need to refresh data based on last update time
  const refreshDataIfNeeded = useCallback(async () => {
    if (!user?.id) return;
    
    const now = Date.now();
    const fiveMinutesAgo = now - (5 * 60 * 1000); // 5 minutes in milliseconds
    
    // If data is older than 5 minutes or doesn't exist, refresh it
    if (!lastUpdateTime || lastUpdateTime < fiveMinutesAgo) {
      await refreshData();
    } else {
      setLoading(false); // Data is fresh, hide loader
    }
  }, [user, lastUpdateTime]);

  // Refresh all data manually
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refreshData();
    setRefreshing(false);
  }, [user]);

  // Refresh data from Firestore
  const refreshData = async () => {
    if (!user?.id) return;
    
    try {
      await Promise.all([
        loadChats(),
        loadReceivedInterests(),
        loadSentInterests(),
        loadOnlineUsers()
      ]);
      
      // Update last refresh time
      const now = Date.now();
      setLastUpdateTime(now);
      await setCachedData(`lastUpdateTime_${user.id}`, now);
      
      // Hide loader after data is loaded
      setLoading(false);
    } catch (error) {
      console.error('Error refreshing data:', error);
      setLoading(false); // Hide loader even if there's an error
    }
  };

  // Load chats with caching
  const loadChats = async () => {
    if (!user?.id) return;

    try {
      const cacheKey = `chats_${user.id}`;
      const cachedChats = await getCachedData(cacheKey);
      
      if (cachedChats) {
        setChats(cachedChats);
        return;
      }
      
      const chatsRef = collection(db, 'chats');
      const q = query(
        chatsRef,
        where('participantIds', 'array-contains', user.id),
        orderBy('lastMessageTime', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const chatsData = [];
      
      for (const doc of querySnapshot.docs) {
        const chatData = doc.data();
        const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
        
        if (otherParticipantId) {
          // Get or fetch user profile
          let userProfile = userProfiles[otherParticipantId];
          if (!userProfile) {
            userProfile = await fetchUserProfile(otherParticipantId);
          }
          
          chatsData.push({
            id: doc.id,
            ...chatData,
            otherParticipantId,
            otherParticipantName: userProfile?.name || 'User',
            otherParticipantPhoto: userProfile?.photo || 'https://via.placeholder.com/150?text=User'
          });
        }
      }
      
      setChats(chatsData);
      await setCachedData(cacheKey, chatsData);
    } catch (error) {
      console.error('Error loading chats:', error);
      // If online loading fails, use cached data
      const cachedChats = await getCachedData(`chats_${user.id}`);
      if (cachedChats) setChats(cachedChats);
    }
  };

  // Load received interests with caching
  const loadReceivedInterests = async () => {
    if (!user?.id) return;

    try {
      const cacheKey = `receivedInterests_${user.id}`;
      const cachedInterests = await getCachedData(cacheKey);
      
      if (cachedInterests) {
        setReceivedInterests(cachedInterests);
        return;
      }
      
      const interestsRef = collection(db, 'Users', user.id, 'receivedInterests');
      const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const interestsData = [];
      
      for (const doc of querySnapshot.docs) {
        const interestData = doc.data();
        
        if (interestData.fromUserId) {
          // Get or fetch user profile
          let userProfile = userProfiles[interestData.fromUserId];
          if (!userProfile) {
            userProfile = await fetchUserProfile(interestData.fromUserId);
          }
          
          interestsData.push({
            id: doc.id,
            ...interestData,
            fromUserPhoto: userProfile?.photo || 'https://via.placeholder.com/150?text=User',
            fromUserName: userProfile?.name || interestData.fromUserName || 'User'
          });
        }
      }
      
      setReceivedInterests(interestsData);
      await setCachedData(cacheKey, interestsData);
    } catch (error) {
      console.error('Error loading received interests:', error);
      // If online loading fails, use cached data
      const cachedInterests = await getCachedData(`receivedInterests_${user.id}`);
      if (cachedInterests) setReceivedInterests(cachedInterests);
    }
  };

  // Load sent interests with caching
  const loadSentInterests = async () => {
    if (!user?.id) return;

    try {
      const cacheKey = `sentInterests_${user.id}`;
      const cachedInterests = await getCachedData(cacheKey);
      
      if (cachedInterests) {
        setSentInterests(cachedInterests);
        return;
      }
      
      const interestsRef = collection(db, 'Users', user.id, 'sentInterests');
      const q = query(interestsRef, orderBy('timestamp', 'desc'));
      
      const querySnapshot = await getDocs(q);
      const interestsData = [];
      
      for (const doc of querySnapshot.docs) {
        const interestData = doc.data();
        
        if (interestData.toUserId) {
          // Get or fetch user profile
          let userProfile = userProfiles[interestData.toUserId];
          if (!userProfile) {
            userProfile = await fetchUserProfile(interestData.toUserId);
          }
          
          interestsData.push({
            id: doc.id,
            ...interestData,
            toUserPhoto: userProfile?.photo || 'https://via.placeholder.com/150?text=User',
            toUserName: userProfile?.name || interestData.toUserName || 'User'
          });
        }
      }
      
      setSentInterests(interestsData);
      await setCachedData(cacheKey, interestsData);
    } catch (error) {
      console.error('Error loading sent interests:', error);
      // If online loading fails, use cached data
      const cachedInterests = await getCachedData(`sentInterests_${user.id}`);
      if (cachedInterests) setSentInterests(cachedInterests);
    }
  };

  // Load online users
  const loadOnlineUsers = async () => {
    if (!user?.id) return;

    try {
      const onlineRef = collection(db, 'onlineUsers');
      const querySnapshot = await getDocs(onlineRef);
      
      const onlineUsersData = [];
      const onlineUsersWithTime = {};
      
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (doc.id !== user.id && userData.lastSeen) {
          const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
          onlineUsersWithTime[doc.id] = {
            isOnline: userData.isOnline,
            lastSeen: lastSeen
          };
          
          const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
          // Consider user online if they were active in the last 5 minutes
          if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
            onlineUsersData.push(doc.id);
          }
        }
      });
      
      setOnlineUsers(onlineUsersData);
    } catch (error) {
      console.error('Error loading online users:', error);
    }
  };

  // Fetch user profile data with caching - FIXED VERSION
  const fetchUserProfile = async (userId) => {
    // Check if profile is already in state
    if (userProfiles[userId]) return userProfiles[userId];
    
    // Check if profile is in cache
    try {
      const cachedProfiles = await getCachedData('userProfiles');
      if (cachedProfiles && cachedProfiles[userId]) {
        return cachedProfiles[userId];
      }
    } catch (error) {
      console.error('Error checking stored profiles:', error);
    }
    
    try {
      // Get user profile directly from Users collection
      const userRef = doc(db, 'Users', userId);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const userProfile = {
          id: userId,
          name: `${userData.firstName || ''} ${userData.lastName || ''}`.trim() || 'User',
          photo: userData.profilePhoto || 'https://via.placeholder.com/150?text=User',
          age: userData.age,
          city: userData.city,
          verificationStatus: userData.verificationStatus
        };
        
        // Update state and storage
        const updatedProfiles = { ...userProfiles, [userId]: userProfile };
        setUserProfiles(updatedProfiles);
        await setCachedData('userProfiles', updatedProfiles);
        
        return userProfile;
      }
      
      // Fallback if no profile found
      const fallbackProfile = {
        id: userId,
        name: 'User',
        photo: 'https://via.placeholder.com/150?text=User',
        age: null,
        city: null,
        verificationStatus: null
      };
      
      const updatedProfiles = { ...userProfiles, [userId]: fallbackProfile };
      setUserProfiles(updatedProfiles);
      await setCachedData('userProfiles', updatedProfiles);
      
      return fallbackProfile;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  // Set up real-time listeners only for message updates
  useEffect(() => {
    if (!user?.id) return;

    // Set up real-time listener for new messages
    const chatsRef = collection(db, 'chats');
    const q = query(
      chatsRef,
      where('participantIds', 'array-contains', user.id)
    );
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // Only update if there are actual changes
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === 'modified') {
          // Update the specific chat in our state
          const updatedChat = change.doc.data();
          setChats(prevChats => {
            const updatedChats = prevChats.map(chat => 
              chat.id === change.doc.id ? { ...chat, ...updatedChat } : chat
            );
            
            // Also update cache
            setCachedData(`chats_${user.id}`, updatedChats);
            return updatedChats;
          });
        }
      });
    });

    return () => unsubscribe();
  }, [user]);

  // Respond to an interest (accept/decline)
  const respondToInterest = async (interestId, response) => {
    try {
      if (!user?.id) throw new Error('User not available');

      // Update the received interest
      const receivedInterestRef = doc(db, 'Users', user.id, 'receivedInterests', interestId);
      await updateDoc(receivedInterestRef, {
        status: response,
        respondedAt: serverTimestamp()
      });

      // Find the original sent interest to update
      const interest = receivedInterests.find(i => i.id === interestId);
      if (interest && interest.fromUserId) {
        const sentInterestRef = doc(db, 'Users', interest.fromUserId, 'sentInterests', interestId);
        await updateDoc(sentInterestRef, {
          status: response,
          respondedAt: serverTimestamp()
        });
      }

      // Update local state
      setReceivedInterests(prev => 
        prev.map(item => 
          item.id === interestId ? { ...item, status: response } : item
        )
      );
      
      // Update cache
      await setCachedData(`receivedInterests_${user.id}`, receivedInterests);

      if (response === 'accepted') {
        Alert.alert('Success', 'Interest accepted! You can now chat with this user.');
      } else {
        Alert.alert('Interest declined');
      }
    } catch (error) {
      console.error('Error responding to interest:', error);
      Alert.alert('Error', 'Failed to respond to interest. Please try again.');
    }
  };

  // Start a chat from an interest
  const startChatFromInterest = async (interest) => {
    try {
      if (!user?.id) throw new Error('User not available');

      // Check if chat already exists
      const chatsRef = collection(db, 'chats');
      const q = query(
        chatsRef,
        where('participantIds', 'array-contains', user.id)
      );
      
      const querySnapshot = await getDocs(q);
      let existingChat = null;
      
      querySnapshot.forEach((doc) => {
        const chatData = doc.data();
        if (chatData.participantIds && chatData.participantIds.includes(interest.fromUserId)) {
          existingChat = { id: doc.id, ...chatData };
        }
      });
      
      if (existingChat) {
        router.push(`/chat/${existingChat.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
      } else {
        // Create new chat
        const chatData = {
          participants: [
            user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
            interest.fromUserName
          ],
          participantIds: [user.id, interest.fromUserId],
          lastMessage: '',
          lastMessageTime: serverTimestamp(),
          createdAt: serverTimestamp()
        };
        
        const chatRef = await addDoc(collection(db, 'chats'), chatData);
        
        // Create participants subcollection
        await Promise.all([
          addDoc(collection(chatRef, 'participants'), {
            userId: user.id,
            userName: user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'You',
            joinedAt: serverTimestamp()
          }),
          addDoc(collection(chatRef, 'participants'), {
            userId: interest.fromUserId,
            userName: interest.fromUserName,
            joinedAt: serverTimestamp()
          })
        ]);
        
        router.push(`/chat/${chatRef.id}?name=${encodeURIComponent(interest.fromUserName)}&profileId=${interest.fromUserId}`);
      }
    } catch (error) {
      console.error('Error starting chat:', error);
      Alert.alert('Error', 'Failed to start chat. Please try again.');
    }
  };

  const formatTime = (date) => {
    if (!date) return '';
    
    const now = new Date();
    const messageDate = date.toDate ? date.toDate() : new Date(date);
    const diff = now - messageDate;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return messageDate.toLocaleDateString();
  };

  const formatLastSeen = (date) => {
    if (!date) return '';
    
    const now = new Date();
    const lastSeenDate = date.toDate ? date.toDate() : new Date(date);
    const diff = now - lastSeenDate;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 24) return `${hours} hours ago`;
    if (days < 7) return `${days} days ago`;
    return lastSeenDate.toLocaleDateString();
  };

  const renderMessageItem = ({ item }) => {
    const isOnline = onlineUsers.includes(item.otherParticipantId);
    
    return (
      <TouchableOpacity
        style={styles.messageItem}
        onPress={() => router.push(`/chat/${item.id}?name=${encodeURIComponent(item.otherParticipantName)}&profileId=${item.otherParticipantId}`)}
      >
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: item.otherParticipantPhoto || 'https://via.placeholder.com/150?text=User' }}
            style={styles.avatar}
          />
          {isOnline && <View style={styles.onlineBadge} />}
        </View>
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.messageName}>{item.otherParticipantName}</Text>
            <Text style={styles.messageTime}>
              {formatTime(item.lastMessageTime)}
            </Text>
          </View>
          <Text
            style={[
              styles.messageText,
              item.unread && styles.unreadMessage
            ]}
            numberOfLines={1}
          >
            {item.lastMessage || 'Start a conversation...'}
          </Text>
          {isOnline ? (
            <View style={styles.onlineStatus}>
              <View style={styles.onlineDot} />
              <Text style={styles.onlineText}>{translations.online[language]}</Text>
            </View>
          ) : (
            <Text style={styles.offlineText}>
              {translations.lastSeen[language]} {formatLastSeen(item.lastMessageTime)}
            </Text>
          )}
        </View>
        {item.unread && <View style={styles.unreadBadge} />}
      </TouchableOpacity>
    );
  };

  const renderInterestItem = ({ item }) => {
    const isReceived = activeTab === 'Interests Received';
    const interest = isReceived ? item : item;
    const status = interest.status || 'pending';
    const userPhoto = isReceived ? interest.fromUserPhoto : interest.toUserPhoto;
    const userName = isReceived ? interest.fromUserName : interest.toUserName;
    const userId = isReceived ? interest.fromUserId : interest.toUserId;
    
    return (
      <View style={styles.interestItem}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: userPhoto || 'https://via.placeholder.com/150?text=User' }}
            style={styles.interestAvatar}
          />
          {onlineUsers.includes(userId) && (
            <View style={styles.onlineBadge} />
          )}
        </View>
        <View style={styles.interestContent}>
          <View style={styles.interestHeader}>
            <Text style={styles.interestName}>{userName}</Text>
            <Text style={styles.interestTime}>
              {formatTime(interest.timestamp)}
            </Text>
          </View>
          <View style={styles.interestActions}>
            <View style={[
              styles.statusBadge,
              status === 'accepted' && styles.acceptedBadge,
              status === 'declined' && styles.declinedBadge
            ]}>
              <Text style={[
                styles.statusText,
                status === 'accepted' && styles.acceptedText,
                status === 'declined' && styles.declinedText
              ]}>
                {translations[status.toLowerCase()]?.[language] || status}
              </Text>
            </View>
            
            {isReceived && status === 'pending' ? (
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.acceptButton]}
                  onPress={() => respondToInterest(item.id, 'accepted')}
                >
                  <Text style={styles.acceptButtonText}>{translations.accept[language]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.declineButton]}
                  onPress={() => respondToInterest(item.id, 'declined')}
                >
                  <Text style={styles.declineButtonText}>{translations.decline[language]}</Text>
                </TouchableOpacity>
              </View>
            ) : status === 'accepted' ? (
              <TouchableOpacity
                style={[styles.actionButton, styles.chatButton]}
                onPress={() => startChatFromInterest(item)}
              >
                <Text style={styles.chatButtonText}>{translations.startChat[language]}</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </View>
    );
  };

  const getFilteredData = () => {
    if (activeTab === 'Chats') {
      return chats.filter(chat =>
        chat.otherParticipantName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeTab === 'Interests Received') {
      return receivedInterests.filter(interest =>
        interest.fromUserName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (activeTab === 'Interests Sent') {
      return sentInterests.filter(interest =>
        interest.toUserName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return [];
  };

  const renderEmptyState = () => {
    if (loading) {
      return null; // Don't show empty state while loading
    }
    
    if (activeTab === 'Chats') {
      return (
        <View style={styles.emptyContainer}>
          <Feather name="message-square" size={48} color="#ddd" />
          <Text style={styles.emptyText}>{translations.noMessages[language]}</Text>
          <Text style={styles.emptySubtext}>{translations.startConversation[language]}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.emptyContainer}>
          <Ionicons name="heart" size={48} color="#ddd" />
          <Text style={styles.emptyText}>{translations.noInterests[language]}</Text>
        </View>
      );
    }
  };

  // Show loading indicator while data is being fetched
  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
            <TouchableOpacity style={styles.headerButton} onPress={onRefresh}>
              <Ionicons name="refresh" size={20} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Loading indicator */}
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FF6B6B" />
            <Text style={styles.loadingText}>{translations.loading[language]}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{translations.messages[language]}</Text>
          <TouchableOpacity style={styles.headerButton} onPress={onRefresh}>
            <Ionicons name="refresh" size={20} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          {['Chats', 'Interests Received', 'Interests Sent'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTabButton
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}>
                {tab === 'Interests Received' ? translations.interestsReceived[language] :
                 tab === 'Interests Sent' ? translations.interestsSent[language] : tab}
              </Text>
              {activeTab === tab && <View style={styles.activeTabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Search and Filter */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchTitle}>
            {activeTab === 'Chats'
              ? translations.incomingMessages[language]
              : activeTab === 'Interests Received'
                ? translations.awaitingResponse[language]
                : translations.interestsSent[language]}
          </Text>
          <View style={styles.searchBar}>
            <View style={styles.searchInputContainer}>
              <Feather name="search" size={16} color="#888" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder={translations.searchMessages[language]}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Feather name="filter" size={18} color="#FF6B6B" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages/Interests List */}
        <FlatList
          data={getFilteredData()}
          renderItem={activeTab === 'Chats' ? renderMessageItem : renderInterestItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={renderEmptyState}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              title={translations.pullToRefresh[language]}
              tintColor="#FF6B6B"
              titleColor="#666"
            />
          }
        />
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
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
  },
  headerButton: {
    padding: 4,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    position: 'relative',
  },
  activeTabButton: {
    // No additional styling needed as we're using the indicator
  },
  tabText: {
    fontSize: 14,
    color: '#6c757d',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FF6B6B',
    fontWeight: '600',
  },
  activeTabIndicator: {
    position: 'absolute',
    bottom: -1,
    height: 2,
    width: '60%',
    backgroundColor: '#FF6B6B',
    borderRadius: 2,
  },
  searchContainer: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  searchTitle: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 10,
    fontWeight: '500',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 40,
    marginRight: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#495057',
    paddingVertical: 8,
  },
  filterButton: {
    padding: 8,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
  },
  listContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  interestAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  messageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
  messageTime: {
    fontSize: 12,
    color: '#adb5bd',
  },
  messageText: {
    fontSize: 14,
    color: '#6c757d',
    lineHeight: 20,
    marginBottom: 4,
  },
  onlineStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 4,
  },
  onlineText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  offlineText: {
    fontSize: 11,
    color: '#6c757d',
  },
  unreadMessage: {
    color: '#212529',
    fontWeight: '500',
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    marginLeft: 8,
  },
  interestItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  interestContent: {
    flex: 1,
  },
  interestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  interestName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
  },
  interestTime: {
    fontSize: 12,
    color: '#adb5bd',
  },
  interestActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: '#FFF0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  acceptedBadge: {
    backgroundColor: '#E8F5E9',
  },
  declinedBadge: {
    backgroundColor: '#FFEBEE',
  },
  statusText: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '500',
  },
  acceptedText: {
    color: '#4CAF50',
  },
  declinedText: {
    color: '#F44336',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 8,
  },
  acceptButton: {
    backgroundColor: '#E8F5E9',
  },
  declineButton: {
    backgroundColor: '#FFEBEE',
  },
  chatButton: {
    backgroundColor: '#FF6B6B',
  },
  acceptButtonText: {
    color: '#4CAF50',
    fontWeight: '500',
    fontSize: 12,
  },
  declineButtonText: {
    color: '#F44336',
    fontWeight: '500',
    fontSize: 12,
  },
  chatButtonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: '#adb5bd',
    marginTop: 16,
    fontWeight: '500',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#adb5bd',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6c757d',
  },
});