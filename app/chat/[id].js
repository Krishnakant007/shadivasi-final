// // // app/chat/[id].js
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TextInput,
// //   TouchableOpacity,
// //   FlatList,
// //   KeyboardAvoidingView,
// //   Platform,
// //   Image
// // } from 'react-native';
// // import React, { useState, useEffect } from 'react';
// // import { SafeAreaView } from 'react-native-safe-area-context';
// // import { Ionicons } from '@expo/vector-icons';
// // import {
// //   collection,
// //   doc,
// //   addDoc,
// //   onSnapshot,
// //   orderBy,
// //   query,
// //   updateDoc,
// //   serverTimestamp
// // } from 'firebase/firestore';
// // import { db } from '../../config/firebase';
// // import { useAuth } from '../context/AuthContext';
// // import { useLocalSearchParams, useRouter } from 'expo-router';

// // export default function ChatScreen() {
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState('');
// //   const { user } = useAuth();
// //   const { id, name } = useLocalSearchParams();
// //   const router = useRouter();

// //   // Listen for messages in real-time
// //   useEffect(() => {
// //     if (!id) return;

// //     const messagesRef = collection(db, 'chats', id, 'messages');
// //     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
// //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
// //       const messagesData = [];
// //       querySnapshot.forEach((doc) => {
// //         messagesData.push({
// //           id: doc.id,
// //           ...doc.data()
// //         });
// //       });
// //       setMessages(messagesData);
// //     });

// //     return () => unsubscribe();
// //   }, [id]);

// //   // Send a new message
// //   const sendMessage = async () => {
// //     if (!newMessage.trim() || !user || !id) return;

// //     try {
// //       const messagesRef = collection(db, 'chats', id, 'messages');
      
// //       await addDoc(messagesRef, {
// //         text: newMessage,
// //         senderId: user.uid,
// //         senderName: user.displayName,
// //         timestamp: serverTimestamp(),
// //         type: 'text'
// //       });
      
// //       // Update the chat's last message and timestamp
// //       const chatRef = doc(db, 'chats', id);
// //       await updateDoc(chatRef, {
// //         lastMessage: newMessage,
// //         lastMessageTime: serverTimestamp()
// //       });
      
// //       setNewMessage('');
// //     } catch (error) {
// //       console.error('Error sending message:', error);
// //     }
// //   };

// //   const renderMessage = ({ item }) => {
// //     const isMyMessage = item.senderId === user.uid;
    
// //     return (
// //       <View style={[
// //         styles.messageBubble,
// //         isMyMessage ? styles.myMessage : styles.theirMessage
// //       ]}>
// //         <Text style={[
// //           styles.messageText,
// //           isMyMessage ? styles.myMessageText : styles.theirMessageText
// //         ]}>
// //           {item.text}
// //         </Text>
// //         <Text style={styles.messageTime}>
// //           {item.timestamp ? formatTime(item.timestamp.toDate()) : 'Just now'}
// //         </Text>
// //       </View>
// //     );
// //   };

// //   const formatTime = (date) => {
// //     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
// //   };

// //   return (
// //     <SafeAreaView style={styles.safeArea}>
// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
// //           <Ionicons name="arrow-back" size={24} color="#333" />
// //         </TouchableOpacity>
// //         <View style={styles.headerInfo}>
// //           <Text style={styles.headerName}>{name}</Text>
// //           <Text style={styles.headerStatus}>Online</Text>
// //         </View>
// //         <TouchableOpacity style={styles.headerButton}>
// //           <Ionicons name="call" size={24} color="#FF6B6B" />
// //         </TouchableOpacity>
// //       </View>

// //       <FlatList
// //         data={messages}
// //         renderItem={renderMessage}
// //         keyExtractor={item => item.id}
// //         contentContainerStyle={styles.messagesList}
// //         showsVerticalScrollIndicator={false}
// //       />

// //       <KeyboardAvoidingView
// //         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
// //         style={styles.inputContainer}
// //       >
// //         <TextInput
// //           style={styles.textInput}
// //           value={newMessage}
// //           onChangeText={setNewMessage}
// //           placeholder="Type a message..."
// //           multiline
// //         />
// //         <TouchableOpacity
// //           style={styles.sendButton}
// //           onPress={sendMessage}
// //           disabled={!newMessage.trim()}
// //         >
// //           <Ionicons
// //             name="send"
// //             size={24}
// //             color={newMessage.trim() ? "#FF6B6B" : "#ccc"}
// //           />
// //         </TouchableOpacity>
// //       </KeyboardAvoidingView>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   safeArea: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     padding: 16,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#e9ecef',
// //   },
// //   backButton: {
// //     marginRight: 16,
// //   },
// //   headerInfo: {
// //     flex: 1,
// //   },
// //   headerName: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#212529',
// //   },
// //   headerStatus: {
// //     fontSize: 14,
// //     color: '#4CAF50',
// //   },
// //   headerButton: {
// //     padding: 8,
// //   },
// //   messagesList: {
// //     padding: 16,
// //   },
// //   messageBubble: {
// //     maxWidth: '80%',
// //     padding: 12,
// //     borderRadius: 18,
// //     marginBottom: 8,
// //   },
// //   myMessage: {
// //     alignSelf: 'flex-end',
// //     backgroundColor: '#FF6B6B',
// //     borderBottomRightRadius: 4,
// //   },
// //   theirMessage: {
// //     alignSelf: 'flex-start',
// //     backgroundColor: '#f1f3f5',
// //     borderBottomLeftRadius: 4,
// //   },
// //   messageText: {
// //     fontSize: 16,
// //     marginBottom: 4,
// //   },
// //   myMessageText: {
// //     color: '#fff',
// //   },
// //   theirMessageText: {
// //     color: '#212529',
// //   },
// //   messageTime: {
// //     fontSize: 12,
// //     opacity: 0.7,
// //   },
// //   inputContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     padding: 16,
// //     borderTopWidth: 1,
// //     borderTopColor: '#e9ecef',
// //     backgroundColor: '#fff',
// //   },
// //   textInput: {
// //     flex: 1,
// //     borderWidth: 1,
// //     borderColor: '#e9ecef',
// //     borderRadius: 24,
// //     paddingHorizontal: 16,
// //     paddingVertical: 8,
// //     maxHeight: 100,
// //     marginRight: 8,
// //   },
// //   sendButton: {
// //     padding: 8,
// //   },
// // });







// //31/08/2025
// // app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Send a new message - FIXED VERSION
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text'
//       };

//       // Remove any undefined or null values
//       const cleanMessageData = {};
//       for (const [key, value] of Object.entries(messageData)) {
//         if (value !== undefined && value !== null) {
//           cleanMessageData[key] = value;
//         }
//       }

//       await addDoc(messagesRef, cleanMessageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   const renderMessage = ({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
    
//     return (
//       <View style={[
//         styles.messageBubble,
//         isMyMessage ? styles.myMessage : styles.theirMessage
//       ]}>
//         <Text style={[
//           styles.messageText,
//           isMyMessage ? styles.myMessageText : styles.theirMessageText
//         ]}>
//           {item.text}
//         </Text>
//         <Text style={styles.messageTime}>
//           {item.timestamp?.toDate ? formatTime(item.timestamp.toDate()) : 'Just now'}
//         </Text>
//       </View>
//     );
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <View style={styles.headerInfo}>
//           <Text style={styles.headerName}>{name || 'Chat'}</Text>
//           <Text style={styles.headerStatus}>Online</Text>
//         </View>
//         <TouchableOpacity style={styles.headerButton}>
//           <Ionicons name="call" size={24} color="#FF6B6B" />
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//       />

//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.inputContainer}
//       >
//         <TextInput
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={setNewMessage}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//         />
//         <TouchableOpacity
//           style={[styles.sendButton, !newMessage.trim() && styles.sendButtonDisabled]}
//           onPress={sendMessage}
//           disabled={!newMessage.trim()}
//         >
//           <Ionicons
//             name="send"
//             size={24}
//             color={newMessage.trim() ? "#FF6B6B" : "#ccc"}
//           />
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     marginRight: 16,
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   headerStatus: {
//     fontSize: 14,
//     color: '#4CAF50',
//   },
//   headerButton: {
//     padding: 8,
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//   },
//   messageBubble: {
//     maxWidth: '80%',
//     padding: 12,
//     borderRadius: 18,
//     marginBottom: 8,
//   },
//   myMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#f1f3f5',
//     borderBottomLeftRadius: 4,
//   },
//   messageText: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 12,
//     opacity: 0.7,
//     color: '#666',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     maxHeight: 100,
//     marginRight: 8,
//     fontSize: 16,
//   },
//   sendButton: {
//     padding: 8,
//     borderRadius: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButtonDisabled: {
//     opacity: 0.5,
//   },
// });









//1/09/2025

// app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp,
//   getDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (userData.lastSeen) {
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

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data
//         });
//       });
//       setMessages(messagesData);
      
//       // Scroll to bottom when new messages arrive
//       setTimeout(() => {
//         if (messagesData.length > 0) {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }
//       }, 100);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   const flatListRef = React.useRef();

//   // Check if other user is online
//   const isOtherUserOnline = otherUserProfile?.id && onlineUsers.includes(otherUserProfile.id);

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text'
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   const renderMessage = ({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer
//       ]}>
//         {!isMyMessage && (
//           <Image
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.messageAvatar}
//           />
//         )}
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           <Text style={[
//             styles.messageText,
//             isMyMessage ? styles.myMessageText : styles.theirMessageText
//           ]}>
//             {item.text}
//           </Text>
//           <Text style={[
//             styles.messageTime,
//             isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//           ]}>
//             {item.timestamp?.toDate ? formatTime(item.timestamp.toDate()) : 'Just now'}
//           </Text>
//         </View>
//         {isMyMessage && (
//           <Image
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
//             style={styles.messageAvatar}
//           />
//         )}
//       </View>
//     );
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//               style={styles.headerAvatar}
//             />
//             {isOtherUserOnline && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline ? (
//                 <>
//                   <View style={styles.onlineDot} />
//                   <Text style={styles.onlineText}>Online</Text>
//                 </>
//               ) : (
//                 <Text style={styles.offlineText}>Offline</Text>
//               )}
//             </View>
//           </View>
//         </View>

//         <View style={styles.headerActions}>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="call" size={24} color="#FF6B6B" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerButton}>
//             <Ionicons name="videocam" size={24} color="#FF6B6B" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//         onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//         onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
//       />

//       {/* Message Input */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity style={styles.emojiButton}>
//           <Ionicons name="happy" size={24} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={setNewMessage}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={24} color="#FF6B6B" />
//           </TouchableOpacity>
//         ) : (
//           <View style={styles.attachmentButtons}>
//             <TouchableOpacity style={styles.attachmentButton}>
//               <Ionicons name="camera" size={24} color="#666" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.attachmentButton}>
//               <Ionicons name="image" size={24} color="#666" />
//             </TouchableOpacity>
//           </View>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   headerActions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerButton: {
//     padding: 8,
//     marginLeft: 8,
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     textAlign: 'right',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//     textAlign: 'left',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 10,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 20,
//   },
//   attachmentButtons: {
//     flexDirection: 'row',
//     marginLeft: 8,
//   },
//   attachmentButton: {
//     padding: 8,
//     marginLeft: 4,
//   },
// });











// app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp,
//   getDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(id => id !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (userData.lastSeen) {
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

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data
//         });
//       });
//       setMessages(messagesData);
      
//       // Scroll to bottom when new messages arrive
//       setTimeout(() => {
//         if (messagesData.length > 0) {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }
//       }, 100);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   const flatListRef = React.useRef();

//   // Check if other user is online
//   const isOtherUserOnline = otherUserProfile?.id && onlineUsers.includes(otherUserProfile.id);

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text'
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//     setShowEmojiPicker(false);
//   };

//   const renderMessage = ({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer
//       ]}>
//         {!isMyMessage && (
//           <Image
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.messageAvatar}
//           />
//         )}
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           <Text style={[
//             styles.messageText,
//             isMyMessage ? styles.myMessageText : styles.theirMessageText
//           ]}>
//             {item.text}
//           </Text>
//           <Text style={[
//             styles.messageTime,
//             isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//           ]}>
//             {item.timestamp?.toDate ? formatTime(item.timestamp.toDate()) : 'Just now'}
//           </Text>
//         </View>
//         {isMyMessage && (
//           <Image
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
//             style={styles.messageAvatar}
//           />
//         )}
//       </View>
//     );
//   };

//   const formatTime = (date) => {
//     if (!date) return '';
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   // Simple emoji picker component
//   const EmojiPicker = () => {
//     const emojis = ['😀', '😂', '😍', '🥰', '😎', '🤔', '👍', '❤️', '🔥', '🎉'];
    
//     return (
//       <View style={styles.emojiPicker}>
//         <View style={styles.emojiPickerHeader}>
//           <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//           <TouchableOpacity onPress={() => setShowEmojiPicker(false)}>
//             <Ionicons name="close" size={24} color="#333" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.emojiGrid}>
//           {emojis.map((emoji, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.emojiButton}
//               onPress={() => addEmoji(emoji)}
//             >
//               <Text style={styles.emoji}>{emoji}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//               style={styles.headerAvatar}
//             />
//             {isOtherUserOnline && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline ? (
//                 <>
//                   <View style={styles.onlineDot} />
//                   <Text style={styles.onlineText}>Online</Text>
//                 </>
//               ) : (
//                 <Text style={styles.offlineText}>Offline</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//         onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
//         onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
//       />

//       {/* Emoji Picker */}
//       {showEmojiPicker && <EmojiPicker />}

//       {/* Message Input */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(!showEmojiPicker)}
//         >
//           <Ionicons name="happy" size={24} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={setNewMessage}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={24} color="#FF6B6B" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart" size={24} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     textAlign: 'right',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//     textAlign: 'left',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 10,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 20,
//   },
//   emojiPicker: {
//     position: 'absolute',
//     bottom: 70,
//     left: 0,
//     right: 0,
//     backgroundColor: '#fff',
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     padding: 10,
//     zIndex: 10,
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   emojiPickerTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   emojiButton: {
//     padding: 8,
//     width: '10%',
//     alignItems: 'center',
//   },
//   emoji: {
//     fontSize: 24,
//   },
// });




// app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert,
//   Modal,
//   ScrollView
// } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp,
//   getDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// // Categorized emojis
// const emojiCategories = [
//   {
//     name: 'Smileys & People',
//     emojis: [
//       '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
//       '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
//       '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
//       '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
//       '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
//       '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
//       '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
//       '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
//       '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
//       '😷', '🤒', '🤕', '🦠', '💀', '☠️', '💩', '🤡', '👹', '👺',
//       '👻', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼',
//       '😽', '🙀', '😿', '😾'
//     ]
//   },
//   {
//     name: 'Animals & Nature',
//     emojis: [
//       '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨',
//       '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊',
//       '🐒', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺',
//       '🐗', '🐴', '🦄', '🐝', '🪱', '🐛', '🦋', '🐌', '🐞', '🐜',
//       '🪰', '🪲', '🪳', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎',
//       '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟',
//       '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧',
//       '🦣', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃',
//       '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕',
//       '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛', '🪶', '🐓', '🦃', '🦤', '🦚',
//       '🦜', '🦢', '🦩', '🕊️', '🐇', '🦝', '🦨', '🦡', '🦫', '🦦',
//       '🦥', '🐁', '🐀', '🐿️', '🦔', '🌵', '🎄', '🌲', '🌳', '🌴',
//       '🪵', '🌱', '🌿', '☘️', '🍀', '🎍', '🪴', '🎋', '🍃', '🍂',
//       '🍁', '🪺', '🪹', '🍄', '🐚', '🪨', '🌾', '💐', '🌷', '🌹',
//       '🥀', '🌺', '🌸', '🌼', '🌻'
//     ]
//   },
//   {
//     name: 'Food & Drink',
//     emojis: [
//       '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐',
//       '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑',
//       '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅',
//       '🥔', '🍠', '🫚', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚',
//       '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭',
//       '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔',
//       '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱',
//       '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢',
//       '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭',
//       '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼',
//       '🫖', '☕️', '🍵', '🧃', '🥤', '🍶', '🍺', '🍻', '🥂', '🍷',
//       '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥄', '🍴', '🍽️', '🥣',
//       '🥡', '🥢', '🧂'
//     ]
//   },
//   {
//     name: 'Travel & Places',
//     emojis: [
//       '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️',
//       '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥',
//       '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️',
//       '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️', '⌛️', '⏳', '📡', '🔋',
//       '🔌', '💡', '🔦', '🕯️', '🪔', '🧯', '🛢️', '💸', '💵', '💴',
//       '💶', '💷', '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛', '🔧',
//       '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🧱', '⛓️', '🧲', '🔫',
//       '💣', '🧨', '🪓', '🔪', '🗡️', '⚔️', '🛡️', '🚬', '⚰️', '🪦',
//       '⚱️', '🏺', '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳️',
//       '🩹', '🩺', '💊', '💉', '🩸', '🧬', '🦠', '🧫', '🧪', '🌡️',
//       '🧹', '🧺', '🧻', '🚽', '🚰', '🚿', '🛁', '🧼', '🪒', '🧽',
//       '🧴', '🛎️', '🔑', '🗝️', '🚪', '🪑', '🛋️', '🛏️', '🧸', '🖼️',
//       '🛍️', '🛒', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮',
//       '🎐', '🧧', '✉️', '📩', '📨', '📧', '💌', '📥', '📤', '📦',
//       '🏷️', '📪', '📫', '📬', '📭', '📮', '📯', '📜', '📃', '📄',
//       '📑', '🧾', '📊', '📈', '📉', '🗒️', '🗓️', '📆', '📅', '🧮',
//       '📇', '🗃️', '🗳️', '🗄️', '📋', '📁', '📂', '🗂️', '🗞️', '📰',
//       '📓', '📔', '📒', '📕', '📗', '📘', '📙', '📚', '📖', '🔖',
//       '🧷', '🔗', '📎', '🖇️', '📐', '📏', '🧮', '📌', '📍', '✂️',
//       '🖊️', '🖋️', '✒️', '🖌️', '🖍️', '📝', '✏️', '🔍', '🔎', '🔏',
//       '🔐', '🔒', '🔓'
//     ]
//   },
//   {
//     name: 'Activities',
//     emojis: [
//       '⚽️', '⚾️', '🥎', '🏀', '🏐', '🏈', '🏉', '🎾', '🥏', '🎳',
//       '🏏', '🏑', '🏒', '🥍', '🏓', '🏸', '🥊', '🥋', '🥅', '⛳️',
//       '🎣', '🤿', '🎽', '🎿', '🛷', '🥌', '🎯', '🪀', '🪁', '🎱',
//       '🔮', '🎮', '🕹️', '🎰', '🎲', '🧩', '🧸', '♠️', '♥️', '♦️',
//       '♣️', '🃏', '🀄️', '🎴', '🎭', '🖼️', '🎨', '🧵', '🪡', '🧶',
//       '🪢', '👓', '🕶️', '🥽', '🥼', '🦺', '👔', '👕', '👖', '🧣',
//       '🧤', '🧥', '🧦', '👗', '👘', '🥻', '🩱', '🩲', '🩳', '👙',
//       '👚', '👛', '👜', '👝', '🛍️', '🎒', '👞', '👟', '🥾', '🥿',
//       '👠', '👡', '🩰', '👢', '👑', '👒', '🎩', '🎓', '🧢', '🪖',
//       '⛑️', '📿', '💄', '💍', '💎'
//     ]
//   },
//   {
//     name: 'Symbols',
//     emojis: [
//       '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
//       '❤️‍🔥', '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟',
//       '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️',
//       '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️',
//       '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴',
//       '📳', '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐',
//       '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑',
//       '🅾️', '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢',
//       '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕',
//       '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱',
//       '⚜️', '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐',
//       '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳',
//       '🈂️', '🛂', '🛃', '🛄', '🛅', '🚹', '🚺', '🚼', '⚧️', '🚻',
//       '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖',
//       '🆗', '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣',
//       '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔢', '#️⃣', '*️⃣', '⏏️',
//       '▶️', '⏸️', '⏯️', '⏹️', '⏺️', '⏭️', '⏮️', '⏩', '⏪', '⏫',
//       '⏬', '◀️', '🔼', '🔽', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️',
//       '↙️', '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁',
//       '🔂', '🔄', '🔃', '🎵', '🎶', '➕', '➖', '➗', '✖️', '♾️',
//       '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙',
//       '🔛', '🔝', '🔜', '✔️', '☑️', '🔘', '🔴', '🟠', '🟡', '🟢',
//       '🔵', '🟣', '⚫️', '⚪️', '🟤', '🔺', '🔻', '🔸', '🔹', '🔶',
//       '🔷', '🔳', '🔲', '▪️', '▫️', '◾️', '◽️', '◼️', '◻️', '🟥',
//       '🟧', '🟨', '🟩', '🟦', '🟪', '🟫', '⬛️', '⬜️', '🔈', '🔇',
//       '🔉', '🔊', '🔔', '🔕', '📣', '📢', '👁‍🗨', '💬', '💭', '🗯',
//       '♠️', '♣️', '♥️', '♦️', '🃏', '🎴', '🀄️', '📜', '📄', '📰',
//       '🎙️', '🎚️', '🎛️', '📻', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓'
//     ]
//   }
// ];

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(0);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();
//   const flatListRef = useRef();

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (userData.lastSeen) {
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

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data,
//           // Ensure timestamp is a Date object
//           timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (flatListRef.current && messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   // Check if other user is online
//   const isOtherUserOnline = otherUserProfile?.id && onlineUsers.includes(otherUserProfile.id);

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text'
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//   };

//   const renderMessage = useCallback(({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer
//       ]}>
//         {!isMyMessage && (
//           <Image
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.messageAvatar}
//           />
//         )}
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           <Text style={[
//             styles.messageText,
//             isMyMessage ? styles.myMessageText : styles.theirMessageText
//           ]}>
//             {item.text}
//           </Text>
//           <Text style={[
//             styles.messageTime,
//             isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//           ]}>
//             {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
//           </Text>
//         </View>
//         {isMyMessage && (
//           <Image
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
//             style={styles.messageAvatar}
//           />
//         )}
//       </View>
//     );
//   }, [user, otherUserProfile]);

//   const formatTime = (date) => {
//     if (!date) return '';
//     const now = new Date();
//     const messageDate = new Date(date);
    
//     // If message is from today, show time only
//     if (messageDate.toDateString() === now.toDateString()) {
//       return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // If message is from yesterday, show "Yesterday"
//     else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
//       return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // Otherwise show date and time
//     else {
//       return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
//              messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//   };

//   // Simple emoji picker component
//   const EmojiPicker = () => {
//     return (
//       <Modal
//         transparent={true}
//         visible={showEmojiPicker}
//         animationType="slide"
//         onRequestClose={() => setShowEmojiPicker(false)}
//       >
//         <View style={styles.emojiPickerContainer}>
//           <View style={styles.emojiPicker}>
//             <View style={styles.emojiPickerHeader}>
//               <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//               <TouchableOpacity
//                 onPress={() => setShowEmojiPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Ionicons name="close" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
            
//             {/* Category Tabs */}
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               style={styles.categoryTabs}
//             >
//               {emojiCategories.map((category, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.categoryTab,
//                     activeCategory === index && styles.activeCategoryTab
//                   ]}
//                   onPress={() => setActiveCategory(index)}
//                 >
//                   <Text style={[
//                     styles.categoryTabText,
//                     activeCategory === index && styles.activeCategoryTabText
//                   ]}>
//                     {category.name}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
            
//             {/* Emoji Grid */}
//             <View style={styles.emojiGridContainer}>
//               <ScrollView>
//                 <View style={styles.emojiGrid}>
//                   {emojiCategories[activeCategory].emojis.map((emoji, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.emojiItem}
//                       onPress={() => addEmoji(emoji)}
//                     >
//                       <Text style={styles.emoji}>{emoji}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//               style={styles.headerAvatar}
//             />
//             {isOtherUserOnline && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline ? (
//                 <>
//                   <View style={styles.onlineDot} />
//                   <Text style={styles.onlineText}>Online</Text>
//                 </>
//               ) : (
//                 <Text style={styles.offlineText}>Offline</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Emoji Picker */}
//       <EmojiPicker />

//       {/* Message Input */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(true)}
//         >
//           <Ionicons name="happy-outline" size={28} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={setNewMessage}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={22} color="#fff" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart-outline" size={28} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     textAlign: 'right',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//     textAlign: 'left',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 12,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 24,
//     width: 48,
//     height: 48,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emojiPickerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   emojiPicker: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 16,
//     maxHeight: '50%',
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   emojiPickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   categoryTabs: {
//     marginBottom: 12,
//     maxHeight: 40,
//   },
//   categoryTab: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   activeCategoryTab: {
//     backgroundColor: '#FF6B6B',
//   },
//   categoryTabText: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeCategoryTabText: {
//     color: '#fff',
//   },
//   emojiGridContainer: {
//     height: 200,
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   emojiItem: {
//     width: '10%',
//     alignItems: 'center',
//     padding: 8,
//   },
//   emoji: {
//     fontSize: 24,
//   },
// });





//02/09
// app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert,
//   Modal,
//   ScrollView
// } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp,
//   getDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// // Categorized emojis
// const emojiCategories = [
//   {
//     name: 'Smileys & People',
//     emojis: [
//       '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
//       '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
//       '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
//       '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
//       '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
//       '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
//       '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
//       '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
//       '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
//       '😷', '🤒', '🤕', '🦠', '💀', '☠️', '💩', '🤡', '👹', '👺',
//       '👻', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼',
//       '😽', '🙀', '😿', '😾'
//     ]
//   },
//   {
//     name: 'Animals & Nature',
//     emojis: [
//       '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐻‍❄️', '🐨',
//       '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊',
//       '🐒', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺',
//       '🐗', '🐴', '🦄', '🐝', '🪱', '🐛', '🦋', '🐌', '🐞', '🐜',
//       '🪰', '🪲', '🪳', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎',
//       '🦖', '🦕', '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟',
//       '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧',
//       '🦣', '🐘', '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃',
//       '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕',
//       '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛', '🪶', '🐓', '🦃', '🦤', '🦚',
//       '🦜', '🦢', '🦩', '🕊️', '🐇', '🦝', '🦨', '🦡', '🦫', '🦦',
//       '🦥', '🐁', '🐀', '🐿️', '🦔', '🌵', '🎄', '🌲', '🌳', '🌴',
//       '🪵', '🌱', '🌿', '☘️', '🍀', '🎍', '🪴', '🎋', '🍃', '🍂',
//       '🍁', '🪺', '🪹', '🍄', '🐚', '🪨', '🌾', '💐', '🌷', '🌹',
//       '🥀', '🌺', '🌸', '🌼', '🌻'
//     ]
//   },
//   {
//     name: 'Food & Drink',
//     emojis: [
//       '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐',
//       '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑',
//       '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅',
//       '🥔', '🍠', '🫚', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚',
//       '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🦴', '🌭',
//       '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔',
//       '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱',
//       '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢',
//       '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭',
//       '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼',
//       '🫖', '☕️', '🍵', '🧃', '🥤', '🍶', '🍺', '🍻', '🥂', '🍷',
//       '🥃', '🍸', '🍹', '🧉', '🍾', '🧊', '🥄', '🍴', '🍽️', '🥣',
//       '🥡', '🥢', '🧂'
//     ]
//   },
//   {
//     name: 'Travel & Places',
//     emojis: [
//       '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️',
//       '🗜️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥',
//       '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️',
//       '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️', '⌛️', '⏳', '📡', '🔋',
//       '🔌', '💡', '🔦', '🕯️', '🪔', '🧯', '🛢️', '💸', '💵', '💴',
//       '💶', '💷', '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛', '🔧',
//       '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🧱', '⛓️', '🧲', '🔫',
//       '💣', '🧨', '🪓', '🔪', '🗡️', '⚔️', '🛡️', '🚬', '⚰️', '🪦',
//       '⚱️', '🏺', '🔮', '📿', '🧿', '💈', '⚗️', '🔭', '🔬', '🕳️',
//       '🩹', '🩺', '💊', '💉', '🩸', '🧬', '🦠', '🧫', '🧪', '🌡️',
//       '🧹', '🧺', '🧻', '🚽', '🚰', '🚿', '🛁', '🧼', '🪒', '🧽',
//       '🧴', '🛎️', '🔑', '🗝️', '🚪', '🪑', '🛋️', '🛏️', '🧸', '🖼️',
//       '🛍️', '🛒', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮',
//       '🎐', '🧧', '✉️', '📩', '📨', '📧', '💌', '📥', '📤', '📦',
//       '🏷️', '📪', '📫', '📬', '📭', '📮', '📯', '📜', '📃', '📄',
//       '📑', '🧾', '📊', '📈', '📉', '🗒️', '🗓️', '📆', '📅', '🧮',
//       '📇', '🗃️', '🗳️', '🗄️', '📋', '📁', '📂', '🗂️', '🗞️', '📰',
//       '📓', '📔', '📒', '📕', '📗', '📘', '📙', '📚', '📖', '🔖',
//       '🧷', '🔗', '📎', '🖇️', '📐', '📏', '🧮', '📌', '📍', '✂️',
//       '🖊️', '🖋️', '✒️', '🖌️', '🖍️', '📝', '✏️', '🔍', '🔎', '🔏',
//       '🔐', '🔒', '🔓'
//     ]
//   },
//   {
//     name: 'Activities',
//     emojis: [
//       '⚽️', '⚾️', '🥎', '🏀', '🏐', '🏈', '🏉', '🎾', '🥏', '🎳',
//       '🏏', '🏑', '🏒', '🥍', '🏓', '🏸', '🥊', '🥋', '🥅', '⛳️',
//       '🎣', '🤿', '🎽', '🎿', '🛷', '🥌', '🎯', '🪀', '🪁', '🎱',
//       '🔮', '🎮', '🕹️', '🎰', '🎲', '🧩', '🧸', '♠️', '♥️', '♦️',
//       '♣️', '🃏', '🀄️', '🎴', '🎭', '🖼️', '🎨', '🧵', '🪡', '🧶',
//       '🪢', '👓', '🕶️', '🥽', '🥼', '🦺', '👔', '👕', '👖', '🧣',
//       '🧤', '🧥', '🧦', '👗', '👘', '🥻', '🩱', '🩲', '🩳', '👙',
//       '👚', '👛', '👜', '👝', '🛍️', '🎒', '👞', '👟', '🥾', '🥿',
//       '👠', '👡', '🩰', '👢', '👑', '👒', '🎩', '🎓', '🧢', '🪖',
//       '⛑️', '📿', '💄', '💍', '💎'
//     ]
//   },
//   {
//     name: 'Symbols',
//     emojis: [
//       '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
//       '❤️‍🔥', '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟',
//       '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️',
//       '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️',
//       '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴',
//       '📳', '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐',
//       '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑',
//       '🅾️', '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢',
//       '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕',
//       '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱',
//       '⚜️', '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐',
//       '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳',
//       '🈂️', '🛂', '🛃', '🛄', '🛅', '🚹', '🚺', '🚼', '⚧️', '🚻',
//       '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖',
//       '🆗', '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣',
//       '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔢', '#️⃣', '*️⃣', '⏏️',
//       '▶️', '⏸️', '⏯️', '⏹️', '⏺️', '⏭️', '⏮️', '⏩', '⏪', '⏫',
//       '⏬', '◀️', '🔼', '🔽', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️',
//       '↙️', '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁',
//       '🔂', '🔄', '🔃', '🎵', '🎶', '➕', '➖', '➗', '✖️', '♾️',
//       '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙',
//       '🔛', '🔝', '🔜', '✔️', '☑️', '🔘', '🔴', '🟠', '🟡', '🟢',
//       '🔵', '🟣', '⚫️', '⚪️', '🟤', '🔺', '🔻', '🔸', '🔹', '🔶',
//       '🔷', '🔳', '🔲', '▪️', '▫️', '◾️', '◽️', '◼️', '◻️', '🟥',
//       '🟧', '🟨', '🟩', '🟦', '🟪', '🟫', '⬛️', '⬜️', '🔈', '🔇',
//       '🔉', '🔊', '🔔', '🔕', '📣', '📢', '👁‍🗨', '💬', '💭', '🗯',
//       '♠️', '♣️', '♥️', '♦️', '🃏', '🎴', '🀄️', '📜', '📄', '📰',
//       '🎙️', '🎚️', '🎛️', '📻', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓'
//     ]
//   }
// ];

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(0);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();
//   const flatListRef = useRef();

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (userData.lastSeen) {
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

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data,
//           // Ensure timestamp is a Date object
//           timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (flatListRef.current && messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   // Check if other user is online
//   const isOtherUserOnline = otherUserProfile?.id && onlineUsers.includes(otherUserProfile.id);

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text'
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//   };

//   const renderMessage = useCallback(({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer
//       ]}>
//         {!isMyMessage && (
//           <Image
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.messageAvatar}
//           />
//         )}
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           <Text style={[
//             styles.messageText,
//             isMyMessage ? styles.myMessageText : styles.theirMessageText
//           ]}>
//             {item.text}
//           </Text>
//           <Text style={[
//             styles.messageTime,
//             isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//           ]}>
//             {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
//           </Text>
//         </View>
//         {isMyMessage && (
//           <Image
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
//             style={styles.messageAvatar}
//           />
//         )}
//       </View>
//     );
//   }, [user, otherUserProfile]);

//   const formatTime = (date) => {
//     if (!date) return '';
//     const now = new Date();
//     const messageDate = new Date(date);
    
//     // If message is from today, show time only
//     if (messageDate.toDateString() === now.toDateString()) {
//       return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // If message is from yesterday, show "Yesterday"
//     else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
//       return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // Otherwise show date and time
//     else {
//       return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
//              messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//   };

//   // Simple emoji picker component
//   const EmojiPicker = () => {
//     return (
//       <Modal
//         transparent={true}
//         visible={showEmojiPicker}
//         animationType="slide"
//         onRequestClose={() => setShowEmojiPicker(false)}
//       >
//         <View style={styles.emojiPickerContainer}>
//           <View style={styles.emojiPicker}>
//             <View style={styles.emojiPickerHeader}>
//               <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//               <TouchableOpacity
//                 onPress={() => setShowEmojiPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Ionicons name="close" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
            
//             {/* Category Tabs */}
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               style={styles.categoryTabs}
//             >
//               {emojiCategories.map((category, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.categoryTab,
//                     activeCategory === index && styles.activeCategoryTab
//                   ]}
//                   onPress={() => setActiveCategory(index)}
//                 >
//                   <Text style={[
//                     styles.categoryTabText,
//                     activeCategory === index && styles.activeCategoryTabText
//                   ]}>
//                     {category.name}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
            
//             {/* Emoji Grid */}
//             <View style={styles.emojiGridContainer}>
//               <ScrollView>
//                 <View style={styles.emojiGrid}>
//                   {emojiCategories[activeCategory].emojis.map((emoji, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.emojiItem}
//                       onPress={() => addEmoji(emoji)}
//                     >
//                       <Text style={styles.emoji}>{emoji}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//               style={styles.headerAvatar}
//             />
//             {isOtherUserOnline && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline ? (
//                 <>
//                   <View style={styles.onlineDot} />
//                   <Text style={styles.onlineText}>Online</Text>
//                 </>
//               ) : (
//                 <Text style={styles.offlineText}>Offline</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Emoji Picker */}
//       <EmojiPicker />

//       {/* Message Input */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(true)}
//         >
//           <Ionicons name="happy-outline" size={28} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={setNewMessage}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={22} color="#fff" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart-outline" size={28} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     textAlign: 'right',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//     textAlign: 'left',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 12,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 24,
//     width: 48,
//     height: 48,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emojiPickerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   emojiPicker: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 16,
//     maxHeight: '50%',
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   emojiPickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   categoryTabs: {
//     marginBottom: 12,
//     maxHeight: 40,
//   },
//   categoryTab: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   activeCategoryTab: {
//     backgroundColor: '#FF6B6B',
//   },
//   categoryTabText: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeCategoryTabText: {
//     color: '#fff',
//   },
//   emojiGridContainer: {
//     height: 200,
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   emojiItem: {
//     width: '10%',
//     alignItems: 'center',
//     padding: 8,
//   },
//   emoji: {
//     fontSize: 24,
//   },
// });



//03/09/2025
 // app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert,
//   Modal,
//   ScrollView
// } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp,
//   getDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// // Categorized emojis
// const emojiCategories = [
//   {
//     name: 'Smileys',
//     emojis: [
//       '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
//       '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
//       '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
//       '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
//       '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
//       '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
//       '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
//       '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
//       '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
//       '😷', '🤒', '🤕'
//     ]
//   },
//   {
//     name: 'Animals',
//     emojis: [
//       '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
//       '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒',
//       '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗',
//       '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗',
//       '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐',
//       '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊',
//       '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘', '🦛', '🦏', '🐪',
//       '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏',
//       '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛'
//     ]
//   },
//   {
//     name: 'Food',
//     emojis: [
//       '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐',
//       '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑',
//       '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅',
//       '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳',
//       '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🌭', '🍔', '🍟',
//       '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘',
//       '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪',
//       '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧',
//       '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫',
//       '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '🫖', '☕️'
//     ]
//   },
//   {
//     name: 'Travel',
//     emojis: [
//       '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️',
//       '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠',
//       '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️',
//       '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🪔', '🧯',
//       '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛', '🔧', '🔨', '⚒️',
//       '🛠️', '⛏️', '🔩', '⚙️', '🔗', '📎', '🖇️', '📐', '📏', '🧮',
//       '📌', '📍', '✂️', '🖊️', '🖋️', '✒️', '🖌️', '🖍️', '📝', '✏️',
//       '🔍', '🔎', '🔏', '🔐', '🔒', '🔓'
//     ]
//   },
//   {
//     name: 'Symbols',
//     emojis: [
//       '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
//       '❤️‍🔥', '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟',
//       '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️',
//       '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️',
//       '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴',
//       '📳', '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐',
//       '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑',
//       '🅾️', '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢',
//       '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕',
//       '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱',
//       '⚜️', '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐',
//       '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳'
//     ]
//   }
// ];

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(0);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();
//   const flatListRef = useRef(null);

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (userData.lastSeen) {
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

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data,
//           // Ensure timestamp is a Date object
//           timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (flatListRef.current && messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   // Check if other user is online
//   const isOtherUserOnline = otherUserProfile?.id && onlineUsers.includes(otherUserProfile.id);

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text'
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//   };

//   const renderMessage = useCallback(({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer
//       ]}>
//         {!isMyMessage && (
//           <Image
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.messageAvatar}
//           />
//         )}
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           <Text style={[
//             styles.messageText,
//             isMyMessage ? styles.myMessageText : styles.theirMessageText
//           ]}>
//             {item.text}
//           </Text>
//           <Text style={[
//             styles.messageTime,
//             isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//           ]}>
//             {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
//           </Text>
//         </View>
//         {isMyMessage && (
//           <Image
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
//             style={styles.messageAvatar}
//           />
//         )}
//       </View>
//     );
//   }, [user, otherUserProfile]);

//   const formatTime = (date) => {
//     if (!date) return '';
//     const now = new Date();
//     const messageDate = new Date(date);
    
//     // If message is from today, show time only
//     if (messageDate.toDateString() === now.toDateString()) {
//       return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // If message is from yesterday, show "Yesterday"
//     else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
//       return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // Otherwise show date and time
//     else {
//       return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
//              messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//   };

//   // Simple emoji picker component
//   const EmojiPicker = () => {
//     return (
//       <Modal
//         transparent={true}
//         visible={showEmojiPicker}
//         animationType="slide"
//         onRequestClose={() => setShowEmojiPicker(false)}
//       >
//         <View style={styles.emojiPickerContainer}>
//           <View style={styles.emojiPicker}>
//             <View style={styles.emojiPickerHeader}>
//               <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//               <TouchableOpacity
//                 onPress={() => setShowEmojiPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Ionicons name="close" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
            
//             {/* Category Tabs */}
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               style={styles.categoryTabs}
//               contentContainerStyle={styles.categoryTabsContent}
//             >
//               {emojiCategories.map((category, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.categoryTab,
//                     activeCategory === index && styles.activeCategoryTab
//                   ]}
//                   onPress={() => setActiveCategory(index)}
//                 >
//                   <Text style={[
//                     styles.categoryTabText,
//                     activeCategory === index && styles.activeCategoryTabText
//                   ]}>
//                     {category.name}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
            
//             {/* Emoji Grid */}
//             <View style={styles.emojiGridContainer}>
//               <ScrollView>
//                 <View style={styles.emojiGrid}>
//                   {emojiCategories[activeCategory].emojis.map((emoji, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.emojiItem}
//                       onPress={() => {
//                         addEmoji(emoji);
//                         setShowEmojiPicker(false);
//                       }}
//                     >
//                       <Text style={styles.emoji}>{emoji}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//               style={styles.headerAvatar}
//             />
//             {isOtherUserOnline && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline ? (
//                 <>
//                   <View style={styles.onlineDot} />
//                   <Text style={styles.onlineText}>Online</Text>
//                 </>
//               ) : (
//                 <Text style={styles.offlineText}>Offline</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//         onContentSizeChange={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//         onLayout={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//       />

//       {/* Emoji Picker */}
//       <EmojiPicker />

//       {/* Message Input */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(true)}
//         >
//           <Ionicons name="happy-outline" size={28} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={setNewMessage}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={22} color="#fff" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart-outline" size={28} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     textAlign: 'right',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//     textAlign: 'left',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 12,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 24,
//     width: 48,
//     height: 48,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emojiPickerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   emojiPicker: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 16,
//     maxHeight: '50%',
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   emojiPickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   categoryTabs: {
//     marginBottom: 12,
//     maxHeight: 40,
//   },
//   categoryTabsContent: {
//     paddingHorizontal: 8,
//   },
//   categoryTab: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   activeCategoryTab: {
//     backgroundColor: '#FF6B6B',
//   },
//   categoryTabText: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeCategoryTabText: {
//     color: '#fff',
//   },
//   emojiGridContainer: {
//     height: 200,
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   emojiItem: {
//     width: '10%',
//     alignItems: 'center',
//     padding: 8,
//   },
//   emoji: {
//     fontSize: 24,
//   },
// });



//10/09/2025

// app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert,
//   Modal,
//   ScrollView,
//   ActivityIndicator
// } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
//   deleteDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// // Categorized emojis
// const emojiCategories = [
//   {
//     name: 'Smileys',
//     emojis: [
//       '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
//       '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
//       '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
//       '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
//       '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
//       '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
//       '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
//       '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
//       '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
//       '😷', '🤒', '🤕'
//     ]
//   },
//   {
//     name: 'Animals',
//     emojis: [
//       '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯',
//       '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒',
//       '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉', '🦇', '🐺', '🐗',
//       '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞', '🐜', '🦟', '🦗',
//       '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐',
//       '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊',
//       '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘', '🦛', '🦏', '🐪',
//       '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏',
//       '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮', '🐕‍🦺', '🐈', '🐈‍⬛'
//     ]
//   },
//   {
//     name: 'Food',
//     emojis: [
//       '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🫐',
//       '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝', '🍅', '🍆', '🥑',
//       '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕', '🫒', '🧄', '🧅',
//       '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨', '🧀', '🥚', '🍳',
//       '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖', '🌭', '🍔', '🍟',
//       '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯', '🫔', '🥗', '🥘',
//       '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🦪',
//       '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮', '🍢', '🍡', '🍧',
//       '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫',
//       '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '🫖', '☕️'
//     ]
//   },
//   {
//     name: 'Travel',
//     emojis: [
//       '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '🕹️',
//       '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠',
//       '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️', '⏰', '🕰️',
//       '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯️', '🪔', '🧯',
//       '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛', '🔧', '🔨', '⚒️',
//       '🛠️', '⛏️', '🔩', '⚙️', '🔗', '📎', '🖇️', '📐', '📏', '🧮',
//       '📌', '📍', '✂️', '🖊️', '🖋️', '✒️', '🖌️', '🖍️', '📝', '✏️',
//       '🔍', '🔎', '🔏', '🔐', '🔒', '🔓'
//     ]
//   },
//   {
//     name: 'Symbols',
//     emojis: [
//       '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
//       '❤️‍🔥', '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟',
//       '☮️', '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️',
//       '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️',
//       '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴',
//       '📳', '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐',
//       '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑',
//       '🅾️', '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢',
//       '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕',
//       '❓', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱',
//       '⚜️', '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐',
//       '💠', 'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳'
//     ]
//   }
// ];

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [editingMessage, setEditingMessage] = useState(null);
//   const [replyingTo, setReplyingTo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();
//   const flatListRef = useRef(null);
//   const textInputRef = useRef(null);

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         setLoading(true);
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users
//   useEffect(() => {
//     if (!user?.id) return;

//     const onlineRef = collection(db, 'onlineUsers');
    
//     const unsubscribe = onSnapshot(onlineRef, (querySnapshot) => {
//       const onlineUsersData = [];
//       const onlineUsersWithTime = {};
      
//       querySnapshot.forEach((doc) => {
//         const userData = doc.data();
//         if (userData.lastSeen) {
//           const lastSeen = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           onlineUsersWithTime[doc.id] = {
//             isOnline: userData.isOnline,
//             lastSeen: lastSeen
//           };
          
//           const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
//           if (lastSeen > fiveMinutesAgo && userData.isOnline !== false) {
//             onlineUsersData.push(doc.id);
//           }
//         }
//       });
      
//       setOnlineUsers(onlineUsersData);
//     });

//     return () => unsubscribe();
//   }, [user]);

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data,
//           // Ensure timestamp is a Date object
//           timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (flatListRef.current && messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   // Check if other user is online
//   const isOtherUserOnline = otherUserProfile?.id && onlineUsers.includes(otherUserProfile.id);

//   // Format last seen time
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

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text',
//         edited: false,
//         replyTo: replyingTo ? {
//           messageId: replyingTo.id,
//           text: replyingTo.text,
//           senderId: replyingTo.senderId,
//           senderName: replyingTo.senderName
//         } : null
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//       setReplyingTo(null);
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Edit a message
//   const editMessage = async (messageId, newText) => {
//     if (!newText.trim()) return;
    
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await updateDoc(messageRef, {
//         text: newText.trim(),
//         edited: true,
//         editedAt: serverTimestamp()
//       });
      
//       setEditingMessage(null);
//       Alert.alert('Success', 'Message updated successfully');
//     } catch (error) {
//       console.error('Error editing message:', error);
//       Alert.alert('Error', 'Failed to edit message. Please try again.');
//     }
//   };

//   // Delete a message
//   const deleteMessage = async (messageId) => {
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await deleteDoc(messageRef);
//       Alert.alert('Success', 'Message deleted successfully');
//     } catch (error) {
//       console.error('Error deleting message:', error);
//       Alert.alert('Error', 'Failed to delete message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//   };

//   // Reply to a message
//   const replyToMessage = (message) => {
//     setReplyingTo(message);
//     textInputRef.current?.focus();
//   };

//   // Cancel reply
//   const cancelReply = () => {
//     setReplyingTo(null);
//   };

//   const renderMessage = useCallback(({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
//     const isReplying = replyingTo?.id === item.id;
//     const isEditing = editingMessage?.id === item.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer,
//         isReplying && styles.replyingMessage,
//         isEditing && styles.editingMessage
//       ]}>
//         {/* Reply indicator */}
//         {item.replyTo && (
//           <View style={styles.replyContainer}>
//             <View style={styles.replyLine} />
//             <View style={styles.replyContent}>
//               <Text style={styles.replyName}>
//                 {item.replyTo.senderId === user?.id ? 'You' : item.replyTo.senderName}
//               </Text>
//               <Text style={styles.replyText} numberOfLines={1}>
//                 {item.replyTo.text}
//               </Text>
//             </View>
//           </View>
//         )}
        
//         {!isMyMessage && (
//           <Image
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.messageAvatar}
//           />
//         )}
        
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           {isEditing ? (
//             <View style={styles.editContainer}>
//               <TextInput
//                 style={styles.editInput}
//                 defaultValue={item.text}
//                 onSubmitEditing={(e) => editMessage(item.id, e.nativeEvent.text)}
//                 autoFocus
//                 multiline
//               />
//               <View style={styles.editActions}>
//                 <TouchableOpacity
//                   style={styles.editActionButton}
//                   onPress={() => setEditingMessage(null)}
//                 >
//                   <Text style={styles.editActionText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.editActionButton, styles.saveButton]}
//                   onPress={() => editMessage(item.id, item.text)}
//                 >
//                   <Text style={styles.editActionText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ) : (
//             <>
//               <Text style={[
//                 styles.messageText,
//                 isMyMessage ? styles.myMessageText : styles.theirMessageText
//               ]}>
//                 {item.text}
//               </Text>
              
//               <View style={styles.messageFooter}>
//                 <Text style={[
//                   styles.messageTime,
//                   isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//                 ]}>
//                   {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
//                   {item.edited && ' (edited)'}
//                 </Text>
                
//                 {isMyMessage && (
//                   <View style={styles.messageActions}>
//                     <TouchableOpacity
//                       style={styles.messageAction}
//                       onPress={() => replyToMessage(item)}
//                     >
//                       <Ionicons name="arrow-undo" size={14} color="#666" />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       style={styles.messageAction}
//                       onPress={() => setEditingMessage(item)}
//                     >
//                       <Ionicons name="create-outline" size={14} color="#666" />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       style={styles.messageAction}
//                       onPress={() => deleteMessage(item.id)}
//                     >
//                       <Ionicons name="trash-outline" size={14} color="#FF6B6B" />
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             </>
//           )}
//         </View>
        
//         {isMyMessage && (
//           <Image
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
//             style={styles.messageAvatar}
//           />
//         )}
//       </View>
//     );
//   }, [user, otherUserProfile, replyingTo, editingMessage]);

//   const formatTime = (date) => {
//     if (!date) return '';
//     const now = new Date();
//     const messageDate = new Date(date);
    
//     // If message is from today, show time only
//     if (messageDate.toDateString() === now.toDateString()) {
//       return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // If message is from yesterday, show "Yesterday"
//     else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
//       return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // Otherwise show date and time
//     else {
//       return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
//              messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//   };

//   // Enhanced emoji picker component
//   const EmojiPicker = () => {
//     return (
//       <Modal
//         transparent={true}
//         visible={showEmojiPicker}
//         animationType="slide"
//         onRequestClose={() => setShowEmojiPicker(false)}
//       >
//         <View style={styles.emojiPickerContainer}>
//           <View style={styles.emojiPicker}>
//             <View style={styles.emojiPickerHeader}>
//               <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//               <TouchableOpacity
//                 onPress={() => setShowEmojiPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Ionicons name="close" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
            
//             {/* Category Tabs */}
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               style={styles.categoryTabs}
//               contentContainerStyle={styles.categoryTabsContent}
//             >
//               {emojiCategories.map((category, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={[
//                     styles.categoryTab,
//                     activeCategory === index && styles.activeCategoryTab
//                   ]}
//                   onPress={() => setActiveCategory(index)}
//                 >
//                   <Text style={[
//                     styles.categoryTabText,
//                     activeCategory === index && styles.activeCategoryTabText
//                   ]}>
//                     {category.name}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
            
//             {/* Emoji Grid */}
//             <View style={styles.emojiGridContainer}>
//               <ScrollView>
//                 <View style={styles.emojiGrid}>
//                   {emojiCategories[activeCategory].emojis.map((emoji, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.emojiItem}
//                       onPress={() => {
//                         addEmoji(emoji);
//                         setShowEmojiPicker(false);
//                       }}
//                     >
//                       <Text style={styles.emoji}>{emoji}</Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//           <Text style={styles.loadingText}>Loading chat...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//               style={styles.headerAvatar}
//             />
//             {isOtherUserOnline && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline ? (
//                 <>
//                   <View style={styles.onlineDot} />
//                   <Text style={styles.onlineText}>Online</Text>
//                 </>
//               ) : (
//                 <Text style={styles.offlineText}>
//                   Last seen {formatLastSeen(otherUserProfile?.lastSeen)}
//                 </Text>
//               )}
//             </View>
//           </View>
//         </View>
        
//         <View style={styles.headerRight}>
//           <TouchableOpacity style={styles.headerIcon}>
//             <Ionicons name="call" size={20} color="#333" />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIcon}>
//             <Ionicons name="videocam" size={20} color="#333" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//         onContentSizeChange={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//         onLayout={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//       />

//       {/* Reply Indicator */}
//       {replyingTo && (
//         <View style={styles.replyIndicator}>
//           <View style={styles.replyIndicatorContent}>
//             <View style={styles.replyIndicatorText}>
//               <Text style={styles.replyIndicatorName}>
//                 Replying to {replyingTo.senderId === user?.id ? 'yourself' : replyingTo.senderName}
//               </Text>
//               <Text style={styles.replyIndicatorMessage} numberOfLines={1}>
//                 {replyingTo.text}
//               </Text>
//             </View>
//             <TouchableOpacity onPress={cancelReply} style={styles.replyCancelButton}>
//               <Ionicons name="close" size={20} color="#666" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}

//       {/* Emoji Picker */}
//       <EmojiPicker />

//       {/* Message Input */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(true)}
//         >
//           <Ionicons name="happy-outline" size={28} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           ref={textInputRef}
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={setNewMessage}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={22} color="#fff" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart-outline" size={28} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 14,
//     color: '#4CAF50',
//     fontWeight: '500',
//   },
//   offlineText: {
//     fontSize: 12,
//     color: '#6c757d',
//   },
//   headerRight: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerIcon: {
//     padding: 8,
//     marginLeft: 8,
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   replyingMessage: {
//     backgroundColor: '#f0f8ff',
//     borderRadius: 8,
//     padding: 4,
//   },
//   editingMessage: {
//     backgroundColor: '#fff8e1',
//     borderRadius: 8,
//     padding: 4,
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   replyContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   replyLine: {
//     width: 3,
//     backgroundColor: '#FF6B6B',
//     marginRight: 8,
//     borderRadius: 2,
//   },
//   replyContent: {
//     flex: 1,
//   },
//   replyName: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#FF6B6B',
//     marginBottom: 2,
//   },
//   replyText: {
//     fontSize: 12,
//     color: '#666',
//     fontStyle: 'italic',
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//   },
//   messageActions: {
//     flexDirection: 'row',
//     marginLeft: 8,
//   },
//   messageAction: {
//     padding: 4,
//     marginLeft: 4,
//   },
//   editContainer: {
//     flex: 1,
//   },
//   editInput: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 8,
//     fontSize: 16,
//     minHeight: 40,
//   },
//   editActions: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   editActionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//     marginLeft: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   saveButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   editActionText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   replyIndicator: {
//     padding: 12,
//     backgroundColor: '#f0f8ff',
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//   },
//   replyIndicatorContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   replyIndicatorText: {
//     flex: 1,
//     marginRight: 12,
//   },
//   replyIndicatorName: {
//     fontSize: 12,
//     fontWeight: '600',
//     color: '#FF6B6B',
//     marginBottom: 2,
//   },
//   replyIndicatorMessage: {
//     fontSize: 12,
//     color: '#666',
//     fontStyle: 'italic',
//   },
//   replyCancelButton: {
//     padding: 4,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 12,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 24,
//     width: 48,
//     height: 48,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emojiPickerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   emojiPicker: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 16,
//     maxHeight: '50%',
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   emojiPickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   categoryTabs: {
//     marginBottom: 12,
//     maxHeight: 40,
//   },
//   categoryTabsContent: {
//     paddingHorizontal: 8,
//   },
//   categoryTab: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   activeCategoryTab: {
//     backgroundColor: '#FF6B6B',
//   },
//   categoryTabText: {
//     fontSize: 12,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeCategoryTabText: {
//     color: '#fff',
//   },
//   emojiGridContainer: {
//     height: 200,
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   emojiItem: {
//     width: '10%',
//     alignItems: 'center',
//     padding: 8,
//   },
//   emoji: {
//     fontSize: 24,
//   },
// });


//trail2
// app/chat/[id].js
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
//   KeyboardAvoidingView,
//   Platform,
//   Image,
//   Alert,
//   Modal,
//   ScrollView,
//   ActivityIndicator,
//   Dimensions
// } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import {
//   collection,
//   doc,
//   addDoc,
//   onSnapshot,
//   orderBy,
//   query,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
//   deleteDoc,
//   setDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// const { width } = Dimensions.get('window');

// // All emojis in one flat list
// const allEmojis = [
//   '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
//   '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
//   '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
//   '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
//   '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
//   '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
//   '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
//   '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
//   '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
//   '😷', '🤒', '🤕', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻',
//   '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈',
//   '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉',
//   '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞',
//   '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕',
//   '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳',
//   '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘',
//   '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄',
//   '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮',
//   '🐕‍🦺', '🐈', '🐈‍⬛', '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉',
//   '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
//   '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕',
//   '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨',
//   '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖',
//   '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯',
//   '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣',
//   '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮',
//   '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮',
//   '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛',
//   '🍼', '🫖', '☕️', '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️',
//   '🖱️', '🖲️', '🕹️', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞',
//   '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️',
//   '⏲️', '⏰', '🕰️', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦',
//   '🕯️', '🪔', '🧯', '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛',
//   '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🔗', '📎', '🖇️',
//   '📐', '📏', '🧮', '📌', '📍', '✂️', '🖊️', '🖋️', '✒️', '🖌️',
//   '🖍️', '📝', '✏️', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓', '❤️',
//   '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❤️‍🔥',
//   '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️',
//   '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐',
//   '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️',
//   '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳',
//   '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️',
//   '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️',
//   '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️',
//   '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕', '❓',
//   '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️',
//   '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐', '💠',
//   'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳'
// ];

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userTyping, setUserTyping] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [editingMessage, setEditingMessage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [lastSeen, setLastSeen] = useState(null);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();
//   const flatListRef = useRef(null);
//   const textInputRef = useRef(null);
//   const typingTimeoutRef = useRef(null);

//   // Calculate emoji size based on screen width
//   const emojiSize = Math.floor(width / 10);

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         setLoading(true);
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users and typing status
//   useEffect(() => {
//     if (!user?.id || !otherUserProfile?.id) return;

//     const onlineRef = doc(db, 'onlineUsers', otherUserProfile.id);
    
//     const unsubscribe = onSnapshot(onlineRef, (doc) => {
//       if (doc.exists()) {
//         const userData = doc.data();
//         if (userData.lastSeen) {
//           const lastSeenDate = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           setLastSeen(lastSeenDate);
//         }
        
//         // Check if user is typing
//         if (userData.typing === true) {
//           setUserTyping(true);
          
//           // Reset typing status after 3 seconds if no update
//           if (typingTimeoutRef.current) {
//             clearTimeout(typingTimeoutRef.current);
//           }
          
//           typingTimeoutRef.current = setTimeout(() => {
//             setUserTyping(false);
//           }, 3000);
//         } else {
//           setUserTyping(false);
//         }
//       }
//     });

//     return () => {
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
//       unsubscribe();
//     };
//   }, [user, otherUserProfile]);

//   // Update typing status in Firestore
//   const updateTypingStatus = async (isTyping) => {
//     if (!user?.id) return;
    
//     try {
//       const userStatusRef = doc(db, 'onlineUsers', user.id);
//       await setDoc(userStatusRef, {
//         isOnline: true,
//         lastSeen: serverTimestamp(),
//         userId: user.id,
//         userName: user.displayName || 'User',
//         typing: isTyping
//       }, { merge: true });
//     } catch (error) {
//       console.error('Error updating typing status:', error);
//     }
//   };

//   // Handle text input changes
//   const handleTextChange = (text) => {
//     setNewMessage(text);
    
//     // Update typing status
//     if (text.length > 0) {
//       updateTypingStatus(true);
      
//       // Clear previous timeout
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
      
//       // Set new timeout to reset typing status
//       typingTimeoutRef.current = setTimeout(() => {
//         updateTypingStatus(false);
//       }, 1000);
//     } else {
//       updateTypingStatus(false);
//     }
//   };

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data,
//           // Ensure timestamp is a Date object
//           timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (flatListRef.current && messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   // Check if other user is online
//   const isOtherUserOnline = () => {
//     if (!lastSeen || !otherUserProfile?.id) return false;
    
//     const now = new Date();
//     const lastSeenDate = new Date(lastSeen);
//     const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
//     // Consider user online if they were active in the last 2 minutes
//     return diff < 120;
//   };

//   // Format last seen time in a detailed way
//   const formatLastSeen = (date) => {
//     if (!date) return 'recently';
    
//     const now = new Date();
//     const lastSeenDate = new Date(date);
//     const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
//     if (diff < 60) {
//       return 'online';
//     } else if (diff < 3600) {
//       const minutes = Math.floor(diff / 60);
//       return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
//     } else if (diff < 86400) {
//       const hours = Math.floor(diff / 3600);
//       return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
//     } else if (diff < 604800) {
//       const days = Math.floor(diff / 86400);
//       return `${days} day${days !== 1 ? 's' : ''} ago`;
//     } else {
//       return lastSeenDate.toLocaleDateString();
//     }
//   };

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       // Reset typing status
//       updateTypingStatus(false);
      
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text',
//         edited: false
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Edit a message
//   const editMessage = async (messageId, newText) => {
//     if (!newText.trim()) return;
    
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await updateDoc(messageRef, {
//         text: newText.trim(),
//         edited: true,
//         editedAt: serverTimestamp()
//       });
      
//       setEditingMessage(null);
//       Alert.alert('Success', 'Message updated successfully');
//     } catch (error) {
//       console.error('Error editing message:', error);
//       Alert.alert('Error', 'Failed to edit message. Please try again.');
//     }
//   };

//   // Delete a message
//   const deleteMessage = async (messageId) => {
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await deleteDoc(messageRef);
//       Alert.alert('Success', 'Message deleted successfully');
//     } catch (error) {
//       console.error('Error deleting message:', error);
//       Alert.alert('Error', 'Failed to delete message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//     setShowEmojiPicker(false);
//   };

//   const renderMessage = useCallback(({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
//     const isEditing = editingMessage?.id === item.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer,
//         isEditing && styles.editingMessage
//       ]}>
//         {!isMyMessage && (
//           <Image
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//             style={styles.messageAvatar}
//           />
//         )}
        
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           {isEditing ? (
//             <View style={styles.editContainer}>
//               <TextInput
//                 style={styles.editInput}
//                 defaultValue={item.text}
//                 onSubmitEditing={(e) => editMessage(item.id, e.nativeEvent.text)}
//                 autoFocus
//                 multiline
//               />
//               <View style={styles.editActions}>
//                 <TouchableOpacity
//                   style={styles.editActionButton}
//                   onPress={() => setEditingMessage(null)}
//                 >
//                   <Text style={styles.editActionText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.editActionButton, styles.saveButton]}
//                   onPress={() => editMessage(item.id, item.text)}
//                 >
//                   <Text style={styles.editActionText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ) : (
//             <>
//               <Text style={[
//                 styles.messageText,
//                 isMyMessage ? styles.myMessageText : styles.theirMessageText
//               ]}>
//                 {item.text}
//               </Text>
              
//               <View style={styles.messageFooter}>
//                 <Text style={[
//                   styles.messageTime,
//                   isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//                 ]}>
//                   {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
//                   {item.edited && ' (edited)'}
//                 </Text>
                
//                 {isMyMessage && (
//                   <View style={styles.messageActions}>
//                     <TouchableOpacity
//                       style={styles.messageAction}
//                       onPress={() => setEditingMessage(item)}
//                     >
//                       <Ionicons name="create-outline" size={14} color="#666" />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       style={styles.messageAction}
//                       onPress={() => deleteMessage(item.id)}
//                     >
//                       <Ionicons name="trash-outline" size={14} color="#FF6B6B" />
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             </>
//           )}
//         </View>
        
//         {isMyMessage && (
//           <Image
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
//             style={styles.messageAvatar}
//           />
//         )}
//       </View>
//     );
//   }, [user, otherUserProfile, editingMessage]);

//   const formatTime = (date) => {
//     if (!date) return '';
//     const now = new Date();
//     const messageDate = new Date(date);
    
//     // If message is from today, show time only
//     if (messageDate.toDateString() === now.toDateString()) {
//       return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // If message is from yesterday, show "Yesterday"
//     else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
//       return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // Otherwise show date and time
//     else {
//       return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
//              messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//   };

//   // Enhanced emoji picker component with all emojis
//   const EmojiPicker = () => {
//     return (
//       <Modal
//         transparent={true}
//         visible={showEmojiPicker}
//         animationType="slide"
//         onRequestClose={() => setShowEmojiPicker(false)}
//       >
//         <View style={styles.emojiPickerContainer}>
//           <View style={styles.emojiPicker}>
//             <View style={styles.emojiPickerHeader}>
//               <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//               <TouchableOpacity
//                 onPress={() => setShowEmojiPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Ionicons name="close" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
            
//             {/* All Emojis Grid */}
//             <View style={styles.emojiGridContainer}>
//               <ScrollView>
//                 <View style={styles.emojiGrid}>
//                   {allEmojis.map((emoji, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.emojiItem}
//                       onPress={() => addEmoji(emoji)}
//                     >
//                       <Text style={[styles.emoji, { fontSize: emojiSize * 0.6 }]}>
//                         {emoji}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//           <Text style={styles.loadingText}>Loading chat...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
//               style={styles.headerAvatar}
//             />
//             {isOtherUserOnline() && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline() ? (
//                 userTyping ? (
//                   <View style={styles.typingContainer}>
//                     <Text style={styles.typingText}>typing</Text>
//                     <View style={styles.typingDots}>
//                       <View style={[styles.typingDot, styles.typingDot1]} />
//                       <View style={[styles.typingDot, styles.typingDot2]} />
//                       <View style={[styles.typingDot, styles.typingDot3]} />
//                     </View>
//                   </View>
//                 ) : (
//                   <>
//                     <View style={styles.onlineDot} />
//                     <Text style={styles.onlineText}>online</Text>
//                   </>
//                 )
//               ) : lastSeen ? (
//                 <Text style={styles.offlineText}>
//                   {formatLastSeen(lastSeen)}
//                 </Text>
//               ) : (
//                 <Text style={styles.offlineText}>offline</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//         onContentSizeChange={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//         onLayout={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//       />

//       {/* Emoji Picker */}
//       <EmojiPicker />

//       {/* Message Input */}
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(true)}
//         >
//           <Ionicons name="happy-outline" size={28} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           ref={textInputRef}
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={handleTextChange}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={22} color="#fff" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart-outline" size={28} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//     textTransform: 'lowercase',
//   },
//   offlineText: {
//     fontSize: 12,
//     color: '#6c757d',
//     textTransform: 'lowercase',
//   },
//   typingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   typingText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontStyle: 'italic',
//     marginRight: 4,
//   },
//   typingDots: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   typingDot: {
//     width: 4,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: '#4CAF50',
//     marginHorizontal: 1,
//   },
//   typingDot1: {
//     opacity: 0.4,
//     animationDelay: '0s',
//   },
//   typingDot2: {
//     opacity: 0.6,
//     animationDelay: '0.2s',
//   },
//   typingDot3: {
//     opacity: 0.8,
//     animationDelay: '0.4s',
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   editingMessage: {
//     backgroundColor: '#fff8e1',
//     borderRadius: 8,
//     padding: 4,
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//   },
//   messageActions: {
//     flexDirection: 'row',
//     marginLeft: 8,
//   },
//   messageAction: {
//     padding: 4,
//     marginLeft: 4,
//   },
//   editContainer: {
//     flex: 1,
//   },
//   editInput: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 8,
//     fontSize: 16,
//     minHeight: 40,
//   },
//   editActions: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   editActionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//     marginLeft: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   saveButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   editActionText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 12,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 24,
//     width: 48,
//     height: 48,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emojiPickerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   emojiPicker: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 16,
//     maxHeight: '50%',
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   emojiPickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   emojiGridContainer: {
//     height: 200,
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   emojiItem: {
//     width: '10%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//   },
//   emoji: {
//     textAlign: 'center',
//   },
// });





//11/09/2025

// app/chat/[id].js
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TextInput, 
//   TouchableOpacity, 
//   FlatList, 
//   KeyboardAvoidingView, 
//   Platform,
//   Image,
//   Alert,
//   Modal,
//   ScrollView,
//   ActivityIndicator,
//   Dimensions
// } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { 
//   collection, 
//   doc, 
//   addDoc, 
//   onSnapshot, 
//   orderBy, 
//   query, 
//   updateDoc,
//   serverTimestamp,
//   getDoc,
//   deleteDoc,
//   setDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// const { width } = Dimensions.get('window');

// // All emojis in one flat array
// const allEmojis = [
//   '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
//   '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
//   '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
//   '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
//   '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
//   '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
//   '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
//   '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
//   '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
//   '😷', '🤒', '🤕', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻',
//   '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈',
//   '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉',
//   '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞',
//   '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕',
//   '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳',
//   '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘',
//   '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄',
//   '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮',
//   '🐕‍🦺', '🐈', '🐈‍⬛', '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉',
//   '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
//   '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕',
//   '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨',
//   '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖',
//   '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯',
//   '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣',
//   '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮',
//   '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮',
//   '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛',
//   '🍼', '🫖', '☕️', '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️',
//   '🖱️', '🖲️', '🕹️', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞',
//   '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️',
//   '⏲️', '⏰', '🕰️', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦',
//   '🕯️', '🪔', '🧯', '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛',
//   '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🔗', '📎', '🖇️',
//   '📐', '📏', '🧮', '📌', '📍', '✂️', '🖊️', '🖋️', '✒️', '🖌️',
//   '🖍️', '📝', '✏️', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓', '❤️',
//   '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❤️‍🔥',
//   '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️',
//   '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐',
//   '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️',
//   '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳',
//   '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️',
//   '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️',
//   '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️',
//   '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕', '❓',
//   '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️',
//   '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐', '💠',
//   'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳'
// ];

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userTyping, setUserTyping] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [editingMessage, setEditingMessage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [lastSeen, setLastSeen] = useState(null);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();
//   const flatListRef = useRef(null);
//   const textInputRef = useRef(null);
//   const typingTimeoutRef = useRef(null);

//   // Calculate emoji size based on screen width
//   const emojiSize = Math.floor(width / 10);

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         setLoading(true);
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users and typing status
//   useEffect(() => {
//     if (!user?.id || !otherUserProfile?.id) return;

//     const onlineRef = doc(db, 'onlineUsers', otherUserProfile.id);
    
//     const unsubscribe = onSnapshot(onlineRef, (doc) => {
//       if (doc.exists()) {
//         const userData = doc.data();
//         if (userData.lastSeen) {
//           const lastSeenDate = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           setLastSeen(lastSeenDate);
//         }
        
//         // Check if user is typing
//         if (userData.typing === true) {
//           setUserTyping(true);
          
//           // Reset typing status after 3 seconds if no update
//           if (typingTimeoutRef.current) {
//             clearTimeout(typingTimeoutRef.current);
//           }
          
//           typingTimeoutRef.current = setTimeout(() => {
//             setUserTyping(false);
//           }, 3000);
//         } else {
//           setUserTyping(false);
//         }
//       }
//     });

//     return () => {
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
//       unsubscribe();
//     };
//   }, [user, otherUserProfile]);

//   // Update typing status in Firestore
//   const updateTypingStatus = async (isTyping) => {
//     if (!user?.id) return;
    
//     try {
//       const userStatusRef = doc(db, 'onlineUsers', user.id);
//       await setDoc(userStatusRef, {
//         isOnline: true,
//         lastSeen: serverTimestamp(),
//         userId: user.id,
//         userName: user.displayName || 'User',
//         typing: isTyping
//       }, { merge: true });
//     } catch (error) {
//       console.error('Error updating typing status:', error);
//     }
//   };

//   // Handle text input changes
//   const handleTextChange = (text) => {
//     setNewMessage(text);
    
//     // Update typing status
//     if (text.length > 0) {
//       updateTypingStatus(true);
      
//       // Clear previous timeout
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
      
//       // Set new timeout to reset typing status
//       typingTimeoutRef.current = setTimeout(() => {
//         updateTypingStatus(false);
//       }, 1000);
//     } else {
//       updateTypingStatus(false);
//     }
//   };

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data,
//           // Ensure timestamp is a Date object
//           timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (flatListRef.current && messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   // Check if other user is online
//   const isOtherUserOnline = () => {
//     if (!lastSeen) return false;
    
//     const now = new Date();
//     const lastSeenDate = new Date(lastSeen);
//     const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
//     // Consider user online if they were active in the last 2 minutes
//     return diff < 120;
//   };

//   // Format last seen time
//   const formatLastSeen = (date) => {
//     if (!date) return 'recently';
    
//     const now = new Date();
//     const lastSeenDate = new Date(date);
//     const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
//     if (diff < 60) {
//       return 'online';
//     } else if (diff < 3600) {
//       const minutes = Math.floor(diff / 60);
//       return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
//     } else if (diff < 86400) {
//       const hours = Math.floor(diff / 3600);
//       return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
//     } else if (diff < 604800) {
//       const days = Math.floor(diff / 86400);
//       return `${days} day${days !== 1 ? 's' : ''} ago`;
//     } else {
//       return lastSeenDate.toLocaleDateString();
//     }
//   };

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       // Reset typing status
//       updateTypingStatus(false);
      
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text',
//         edited: false
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Edit a message
//   const editMessage = async (messageId, newText) => {
//     if (!newText.trim()) return;
    
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await updateDoc(messageRef, {
//         text: newText.trim(),
//         edited: true,
//         editedAt: serverTimestamp()
//       });
      
//       setEditingMessage(null);
//       Alert.alert('Success', 'Message updated successfully');
//     } catch (error) {
//       console.error('Error editing message:', error);
//       Alert.alert('Error', 'Failed to edit message. Please try again.');
//     }
//   };

//   // Delete a message
//   const deleteMessage = async (messageId) => {
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await deleteDoc(messageRef);
//       Alert.alert('Success', 'Message deleted successfully');
//     } catch (error) {
//       console.error('Error deleting message:', error);
//       Alert.alert('Error', 'Failed to delete message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//     setShowEmojiPicker(false);
//   };

//   const renderMessage = useCallback(({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
//     const isEditing = editingMessage?.id === item.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer,
//         isEditing && styles.editingMessage
//       ]}>
//         {!isMyMessage && (
//           <Image 
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }} 
//             style={styles.messageAvatar} 
//           />
//         )}
        
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           {isEditing ? (
//             <View style={styles.editContainer}>
//               <TextInput
//                 style={styles.editInput}
//                 defaultValue={item.text}
//                 onSubmitEditing={(e) => editMessage(item.id, e.nativeEvent.text)}
//                 autoFocus
//                 multiline
//               />
//               <View style={styles.editActions}>
//                 <TouchableOpacity 
//                   style={styles.editActionButton}
//                   onPress={() => setEditingMessage(null)}
//                 >
//                   <Text style={styles.editActionText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                   style={[styles.editActionButton, styles.saveButton]}
//                   onPress={() => editMessage(item.id, item.text)}
//                 >
//                   <Text style={styles.editActionText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ) : (
//             <>
//               <Text style={[
//                 styles.messageText,
//                 isMyMessage ? styles.myMessageText : styles.theirMessageText
//               ]}>
//                 {item.text}
//               </Text>
              
//               <View style={styles.messageFooter}>
//                 <Text style={[
//                   styles.messageTime,
//                   isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//                 ]}>
//                   {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
//                   {item.edited && ' (edited)'}
//                 </Text>
                
//                 {isMyMessage && (
//                   <View style={styles.messageActions}>
//                     <TouchableOpacity 
//                       style={styles.messageAction}
//                       onPress={() => setEditingMessage(item)}
//                     >
//                       <Ionicons name="create-outline" size={14} color="#666" />
//                     </TouchableOpacity>
//                     <TouchableOpacity 
//                       style={styles.messageAction}
//                       onPress={() => deleteMessage(item.id)}
//                     >
//                       <Ionicons name="trash-outline" size={14} color="#FF6B6B" />
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             </>
//           )}
//         </View>
        
//         {isMyMessage && (
//           <Image 
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }} 
//             style={styles.messageAvatar} 
//           />
//         )}
//       </View>
//     );
//   }, [user, otherUserProfile, editingMessage]);

//   const formatTime = (date) => {
//     if (!date) return '';
//     const now = new Date();
//     const messageDate = new Date(date);
    
//     // If message is from today, show time only
//     if (messageDate.toDateString() === now.toDateString()) {
//       return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     } 
//     // If message is from yesterday, show "Yesterday"
//     else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
//       return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // Otherwise show date and time
//     else {
//       return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' + 
//              messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//   };

//   // Enhanced emoji picker component with all emojis
//   const EmojiPicker = () => {
//     return (
//       <Modal
//         transparent={true}
//         visible={showEmojiPicker}
//         animationType="slide"
//         onRequestClose={() => setShowEmojiPicker(false)}
//       >
//         <View style={styles.emojiPickerContainer}>
//           <View style={styles.emojiPicker}>
//             <View style={styles.emojiPickerHeader}>
//               <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//               <TouchableOpacity 
//                 onPress={() => setShowEmojiPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Ionicons name="close" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
            
//             {/* All Emojis Grid */}
//             <View style={styles.emojiGridContainer}>
//               <ScrollView>
//                 <View style={styles.emojiGrid}>
//                   {allEmojis.map((emoji, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.emojiItem}
//                       onPress={() => addEmoji(emoji)}
//                     >
//                       <Text style={[styles.emoji, { fontSize: emojiSize * 0.6 }]}>
//                         {emoji}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//           <Text style={styles.loadingText}>Loading chat...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image 
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }} 
//               style={styles.headerAvatar} 
//             />
//             {isOtherUserOnline() && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline() ? (
//                 userTyping ? (
//                   <View style={styles.typingContainer}>
//                     <Text style={styles.typingText}>typing</Text>
//                     <View style={styles.typingDots}>
//                       <View style={[styles.typingDot, styles.typingDot1]} />
//                       <View style={[styles.typingDot, styles.typingDot2]} />
//                       <View style={[styles.typingDot, styles.typingDot3]} />
//                     </View>
//                   </View>
//                 ) : (
//                   <>
//                     <View style={styles.onlineDot} />
//                     <Text style={styles.onlineText}>online</Text>
//                   </>
//                 )
//               ) : lastSeen ? (
//                 <Text style={styles.offlineText}>
//                   {formatLastSeen(lastSeen)}
//                 </Text>
//               ) : (
//                 <Text style={styles.offlineText}>offline</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//         onContentSizeChange={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//         onLayout={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//       />

//       {/* Emoji Picker */}
//       <EmojiPicker />

//       {/* Message Input */}
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity 
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(true)}
//         >
//           <Ionicons name="happy-outline" size={28} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           ref={textInputRef}
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={handleTextChange}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity 
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={22} color="#fff" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart-outline" size={28} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//     textTransform: 'lowercase',
//   },
//   offlineText: {
//     fontSize: 12,
//     color: '#6c757d',
//     textTransform: 'lowercase',
//   },
//   typingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   typingText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontStyle: 'italic',
//     marginRight: 4,
//   },
//   typingDots: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   typingDot: {
//     width: 4,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: '#4CAF50',
//     marginHorizontal: 1,
//   },
//   typingDot1: {
//     opacity: 0.4,
//   },
//   typingDot2: {
//     opacity: 0.6,
//   },
//   typingDot3: {
//     opacity: 0.8,
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   editingMessage: {
//     backgroundColor: '#fff8e1',
//     borderRadius: 8,
//     padding: 4,
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//   },
//   messageActions: {
//     flexDirection: 'row',
//     marginLeft: 8,
//   },
//   messageAction: {
//     padding: 4,
//     marginLeft: 4,
//   },
//   editContainer: {
//     flex: 1,
//   },
//   editInput: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 8,
//     fontSize: 16,
//     minHeight: 40,
//   },
//   editActions: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   editActionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//     marginLeft: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   saveButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   editActionText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 12,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 24,
//     width: 48,
//     height: 48,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emojiPickerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   emojiPicker: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 16,
//     maxHeight: '50%',
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   emojiPickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   emojiGridContainer: {
//     height: 200,
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   emojiItem: {
//     width: '10%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//   },
//   emoji: {
//     textAlign: 'center',
//   },
// });



//12/09/2025

// app/chat/[id].js
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   TextInput, 
//   TouchableOpacity, 
//   FlatList, 
//   KeyboardAvoidingView, 
//   Platform,
//   Image,
//   Alert,
//   Modal,
//   ScrollView,
//   ActivityIndicator,
//   Dimensions
// } from 'react-native';
// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { Ionicons, MaterialIcons } from '@expo/vector-icons';
// import { 
//   collection, 
//   doc, 
//   addDoc, 
//   onSnapshot, 
//   orderBy, 
//   query, 
//   updateDoc,
//   serverTimestamp,
//   getDoc,
//   deleteDoc,
//   setDoc
// } from 'firebase/firestore';
// import { db } from '../../config/firebase';
// import { useAuth } from '../hooks/useAuth';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// const { width } = Dimensions.get('window');

// // All emojis in one flat array
// const allEmojis = [
//   '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
//   '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
//   '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
//   '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
//   '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
//   '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
//   '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
//   '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
//   '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
//   '😷', '🤒', '🤕', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻',
//   '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈',
//   '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉',
//   '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞',
//   '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕',
//   '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳',
//   '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘',
//   '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄',
//   '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮',
//   '🐕‍🦺', '🐈', '🐈‍⬛', '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉',
//   '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
//   '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕',
//   '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨',
//   '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖',
//   '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯',
//   '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣',
//   '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮',
//   '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮',
//   '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛',
//   '🍼', '🫖', '☕️', '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️',
//   '🖱️', '🖲️', '🕹️', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞',
//   '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️',
//   '⏲️', '⏰', '🕰️', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦',
//   '🕯️', '🪔', '🧯', '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛',
//   '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🔗', '📎', '🖇️',
//   '📐', '📏', '🧮', '📌', '📍', '✂️', '🖊️', '🖋️', '✒️', '🖌️',
//   '🖍️', '📝', '✏️', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓', '❤️',
//   '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❤️‍🔥',
//   '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️',
//   '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐',
//   '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️',
//   '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳',
//   '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️',
//   '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️',
//   '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️',
//   '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕', '❓',
//   '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️',
//   '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐', '💠',
//   'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳'
// ];

// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [otherUserProfile, setOtherUserProfile] = useState(null);
//   const [onlineUsers, setOnlineUsers] = useState([]);
//   const [userTyping, setUserTyping] = useState(false);
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);
//   const [editingMessage, setEditingMessage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [lastSeen, setLastSeen] = useState(null);
//   const { user } = useAuth();
//   const { id, name } = useLocalSearchParams();
//   const router = useRouter();
//   const flatListRef = useRef(null);
//   const textInputRef = useRef(null);
//   const typingTimeoutRef = useRef(null);

//   // Calculate emoji size based on screen width
//   const emojiSize = Math.floor(width / 10);

//   // Get the other participant's ID and fetch their profile
//   useEffect(() => {
//     const fetchChatInfo = async () => {
//       if (!id || !user?.id) return;

//       try {
//         setLoading(true);
//         // Get chat document to find other participant
//         const chatRef = doc(db, 'chats', id);
//         const chatSnap = await getDoc(chatRef);
        
//         if (chatSnap.exists()) {
//           const chatData = chatSnap.data();
//           const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
          
//           if (otherParticipantId) {
//             // Fetch other user's profile
//             await fetchUserProfile(otherParticipantId);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching chat info:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChatInfo();
//   }, [id, user]);

//   // Fetch user profile from both Male and Female collections
//   const fetchUserProfile = async (userId) => {
//     try {
//       const collections = ['Male', 'Female'];
//       for (const gender of collections) {
//         const profileRef = doc(db, 'Users', gender, 'profiles', userId);
//         const profileSnap = await getDoc(profileRef);
        
//         if (profileSnap.exists()) {
//           const profileData = profileSnap.data();
//           setOtherUserProfile({
//             id: userId,
//             name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
//             photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
//             age: profileData.age,
//             city: profileData.city
//           });
//           return;
//         }
//       }
      
//       // Fallback if no profile found
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     } catch (error) {
//       console.error('Error fetching user profile:', error);
//       setOtherUserProfile({
//         id: userId,
//         name: name || 'User',
//         photo: 'https://via.placeholder.com/150?text=User',
//         age: null,
//         city: null
//       });
//     }
//   };

//   // Listen for online users and typing status
//   useEffect(() => {
//     if (!user?.id || !otherUserProfile?.id) return;

//     const onlineRef = doc(db, 'onlineUsers', otherUserProfile.id);
    
//     const unsubscribe = onSnapshot(onlineRef, (doc) => {
//       if (doc.exists()) {
//         const userData = doc.data();
//         if (userData.lastSeen) {
//           const lastSeenDate = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
//           setLastSeen(lastSeenDate);
//         }
        
//         // Check if user is typing
//         if (userData.typing === true) {
//           setUserTyping(true);
          
//           // Reset typing status after 3 seconds if no update
//           if (typingTimeoutRef.current) {
//             clearTimeout(typingTimeoutRef.current);
//           }
          
//           typingTimeoutRef.current = setTimeout(() => {
//             setUserTyping(false);
//           }, 3000);
//         } else {
//           setUserTyping(false);
//         }
//       }
//     });

//     return () => {
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
//       unsubscribe();
//     };
//   }, [user, otherUserProfile]);

//   // Update typing status in Firestore
//   const updateTypingStatus = async (isTyping) => {
//     if (!user?.id) return;
    
//     try {
//       const userStatusRef = doc(db, 'onlineUsers', user.id);
//       await setDoc(userStatusRef, {
//         isOnline: true,
//         lastSeen: serverTimestamp(),
//         userId: user.id,
//         userName: user.displayName || 'User',
//         typing: isTyping
//       }, { merge: true });
//     } catch (error) {
//       console.error('Error updating typing status:', error);
//     }
//   };

//   // Handle text input changes
//   const handleTextChange = (text) => {
//     setNewMessage(text);
    
//     // Update typing status
//     if (text.length > 0) {
//       updateTypingStatus(true);
      
//       // Clear previous timeout
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
      
//       // Set new timeout to reset typing status
//       typingTimeoutRef.current = setTimeout(() => {
//         updateTypingStatus(false);
//       }, 1000);
//     } else {
//       updateTypingStatus(false);
//     }
//   };

//   // Listen for messages in real-time
//   useEffect(() => {
//     if (!id) return;

//     const messagesRef = collection(db, 'chats', id, 'messages');
//     const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       const messagesData = [];
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         messagesData.push({
//           id: doc.id,
//           ...data,
//           // Ensure timestamp is a Date object
//           timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
//         });
//       });
//       setMessages(messagesData);
//     });

//     return () => unsubscribe();
//   }, [id]);

//   // Scroll to bottom when messages change
//   useEffect(() => {
//     if (flatListRef.current && messages.length > 0) {
//       setTimeout(() => {
//         flatListRef.current?.scrollToEnd({ animated: true });
//       }, 100);
//     }
//   }, [messages]);

//   // Check if other user is online
//   const isOtherUserOnline = () => {
//     if (!lastSeen) return false;
    
//     const now = new Date();
//     const lastSeenDate = new Date(lastSeen);
//     const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
//     // Consider user online if they were active in the last 2 minutes
//     return diff < 120;
//   };

//   // Format last seen time
//   const formatLastSeen = (date) => {
//     if (!date) return 'recently';
    
//     const now = new Date();
//     const lastSeenDate = new Date(date);
//     const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
//     if (diff < 60) {
//       return 'online';
//     } else if (diff < 3600) {
//       const minutes = Math.floor(diff / 60);
//       return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
//     } else if (diff < 86400) {
//       const hours = Math.floor(diff / 3600);
//       return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
//     } else if (diff < 604800) {
//       const days = Math.floor(diff / 86400);
//       return `${days} day${days !== 1 ? 's' : ''} ago`;
//     } else {
//       return lastSeenDate.toLocaleDateString();
//     }
//   };

//   // Send a new message
//   const sendMessage = async () => {
//     if (!newMessage.trim() || !user || !user.id || !id) {
//       Alert.alert('Error', 'Cannot send message. User information missing.');
//       return;
//     }

//     try {
//       // Reset typing status
//       updateTypingStatus(false);
      
//       const messagesRef = collection(db, 'chats', id, 'messages');
      
//       // Create message data with validated fields
//       const messageData = {
//         text: newMessage.trim(),
//         senderId: user.id,
//         senderName: user.displayName || 'User',
//         timestamp: serverTimestamp(),
//         type: 'text',
//         edited: false
//       };

//       await addDoc(messagesRef, messageData);
      
//       // Update the chat's last message and timestamp
//       const chatRef = doc(db, 'chats', id);
//       await updateDoc(chatRef, {
//         lastMessage: newMessage.trim(),
//         lastMessageTime: serverTimestamp()
//       });
      
//       setNewMessage('');
//     } catch (error) {
//       console.error('Error sending message:', error);
//       Alert.alert('Error', 'Failed to send message. Please try again.');
//     }
//   };

//   // Edit a message
//   const editMessage = async (messageId, newText) => {
//     if (!newText.trim()) return;
    
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await updateDoc(messageRef, {
//         text: newText.trim(),
//         edited: true,
//         editedAt: serverTimestamp()
//       });
      
//       setEditingMessage(null);
//       Alert.alert('Success', 'Message updated successfully');
//     } catch (error) {
//       console.error('Error editing message:', error);
//       Alert.alert('Error', 'Failed to edit message. Please try again.');
//     }
//   };

//   // Delete a message
//   const deleteMessage = async (messageId) => {
//     try {
//       const messageRef = doc(db, 'chats', id, 'messages', messageId);
//       await deleteDoc(messageRef);
//       Alert.alert('Success', 'Message deleted successfully');
//     } catch (error) {
//       console.error('Error deleting message:', error);
//       Alert.alert('Error', 'Failed to delete message. Please try again.');
//     }
//   };

//   // Add emoji to message
//   const addEmoji = (emoji) => {
//     setNewMessage(prevMessage => prevMessage + emoji);
//     setShowEmojiPicker(false);
//   };

//   const renderMessage = useCallback(({ item }) => {
//     const isMyMessage = item.senderId === user?.id;
//     const isEditing = editingMessage?.id === item.id;
    
//     return (
//       <View style={[
//         styles.messageContainer,
//         isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer,
//         isEditing && styles.editingMessage
//       ]}>
//         {!isMyMessage && (
//           <Image 
//             source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }} 
//             style={styles.messageAvatar} 
//           />
//         )}
        
//         <View style={[
//           styles.messageBubble,
//           isMyMessage ? styles.myMessage : styles.theirMessage
//         ]}>
//           {isEditing ? (
//             <View style={styles.editContainer}>
//               <TextInput
//                 style={styles.editInput}
//                 defaultValue={item.text}
//                 onSubmitEditing={(e) => editMessage(item.id, e.nativeEvent.text)}
//                 autoFocus
//                 multiline
//               />
//               <View style={styles.editActions}>
//                 <TouchableOpacity 
//                   style={styles.editActionButton}
//                   onPress={() => setEditingMessage(null)}
//                 >
//                   <Text style={styles.editActionText}>Cancel</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity 
//                   style={[styles.editActionButton, styles.saveButton]}
//                   onPress={() => editMessage(item.id, item.text)}
//                 >
//                   <Text style={styles.editActionText}>Save</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           ) : (
//             <>
//               <Text style={[
//                 styles.messageText,
//                 isMyMessage ? styles.myMessageText : styles.theirMessageText
//               ]}>
//                 {item.text}
//               </Text>
              
//               <View style={styles.messageFooter}>
//                 <Text style={[
//                   styles.messageTime,
//                   isMyMessage ? styles.myMessageTime : styles.theirMessageTime
//                 ]}>
//                   {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
//                   {item.edited && ' (edited)'}
//                 </Text>
                
//                 {isMyMessage && (
//                   <View style={styles.messageActions}>
//                     <TouchableOpacity 
//                       style={styles.messageAction}
//                       onPress={() => setEditingMessage(item)}
//                     >
//                       <Ionicons name="create-outline" size={14} color="#666" />
//                     </TouchableOpacity>
//                     <TouchableOpacity 
//                       style={styles.messageAction}
//                       onPress={() => deleteMessage(item.id)}
//                     >
//                       <Ionicons name="trash-outline" size={14} color="#FF6B6B" />
//                     </TouchableOpacity>
//                   </View>
//                 )}
//               </View>
//             </>
//           )}
//         </View>
        
//         {isMyMessage && (
//           <Image 
//             source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }} 
//             style={styles.messageAvatar} 
//           />
//         )}
//       </View>
//     );
//   }, [user, otherUserProfile, editingMessage]);

//   const formatTime = (date) => {
//     if (!date) return '';
//     const now = new Date();
//     const messageDate = new Date(date);
    
//     // If message is from today, show time only
//     if (messageDate.toDateString() === now.toDateString()) {
//       return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     } 
//     // If message is from yesterday, show "Yesterday"
//     else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
//       return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//     // Otherwise show date and time
//     else {
//       return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' + 
//              messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }
//   };

//   // Enhanced emoji picker component with all emojis
//   const EmojiPicker = () => {
//     return (
//       <Modal
//         transparent={true}
//         visible={showEmojiPicker}
//         animationType="slide"
//         onRequestClose={() => setShowEmojiPicker(false)}
//       >
//         <View style={styles.emojiPickerContainer}>
//           <View style={styles.emojiPicker}>
//             <View style={styles.emojiPickerHeader}>
//               <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
//               <TouchableOpacity 
//                 onPress={() => setShowEmojiPicker(false)}
//                 style={styles.closeButton}
//               >
//                 <Ionicons name="close" size={24} color="#333" />
//               </TouchableOpacity>
//             </View>
            
//             {/* All Emojis Grid */}
//             <View style={styles.emojiGridContainer}>
//               <ScrollView>
//                 <View style={styles.emojiGrid}>
//                   {allEmojis.map((emoji, index) => (
//                     <TouchableOpacity
//                       key={index}
//                       style={styles.emojiItem}
//                       onPress={() => addEmoji(emoji)}
//                     >
//                       <Text style={[styles.emoji, { fontSize: emojiSize * 0.6 }]}>
//                         {emoji}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#FF6B6B" />
//           <Text style={styles.loadingText}>Loading chat...</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       {/* Header with Profile Photo and Online Status */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
        
//         <View style={styles.headerProfile}>
//           <View style={styles.avatarContainer}>
//             <Image 
//               source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }} 
//               style={styles.headerAvatar} 
//             />
//             {isOtherUserOnline() && <View style={styles.onlineBadge} />}
//           </View>
//           <View style={styles.headerInfo}>
//             <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
//             <View style={styles.statusContainer}>
//               {isOtherUserOnline() ? (
//                 userTyping ? (
//                   <View style={styles.typingContainer}>
//                     <Text style={styles.typingText}>typing</Text>
//                     <View style={styles.typingDots}>
//                       <View style={[styles.typingDot, styles.typingDot1]} />
//                       <View style={[styles.typingDot, styles.typingDot2]} />
//                       <View style={[styles.typingDot, styles.typingDot3]} />
//                     </View>
//                   </View>
//                 ) : (
//                   <>
//                     <View style={styles.onlineDot} />
//                     <Text style={styles.onlineText}>online</Text>
//                   </>
//                 )
//               ) : lastSeen ? (
//                 <Text style={styles.offlineText}>
//                   {formatLastSeen(lastSeen)}
//                 </Text>
//               ) : (
//                 <Text style={styles.offlineText}>offline</Text>
//               )}
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Messages List */}
//       <FlatList
//         ref={flatListRef}
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={item => item.id}
//         contentContainerStyle={styles.messagesList}
//         showsVerticalScrollIndicator={false}
//         onContentSizeChange={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//         onLayout={() => {
//           flatListRef.current?.scrollToEnd({ animated: true });
//         }}
//       />

//       {/* Emoji Picker */}
//       <EmojiPicker />

//       {/* Message Input */}
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
//         style={styles.inputContainer}
//       >
//         <TouchableOpacity 
//           style={styles.emojiButton}
//           onPress={() => setShowEmojiPicker(true)}
//         >
//           <Ionicons name="happy-outline" size={28} color="#666" />
//         </TouchableOpacity>
        
//         <TextInput
//           ref={textInputRef}
//           style={styles.textInput}
//           value={newMessage}
//           onChangeText={handleTextChange}
//           placeholder="Type a message..."
//           multiline
//           maxLength={500}
//           placeholderTextColor="#999"
//         />
        
//         {newMessage.trim() ? (
//           <TouchableOpacity 
//             style={styles.sendButton}
//             onPress={sendMessage}
//           >
//             <Ionicons name="send" size={22} color="#fff" />
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.emojiButton}>
//             <Ionicons name="heart-outline" size={28} color="#666" />
//           </TouchableOpacity>
//         )}
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loadingText: {
//     marginTop: 10,
//     color: '#666',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   backButton: {
//     marginRight: 12,
//     padding: 4,
//   },
//   headerProfile: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatarContainer: {
//     position: 'relative',
//     marginRight: 12,
//   },
//   headerAvatar: {
//     width: 45,
//     height: 45,
//     borderRadius: 22.5,
//     borderWidth: 2,
//     borderColor: '#FF6B6B',
//   },
//   onlineBadge: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 14,
//     height: 14,
//     borderRadius: 7,
//     backgroundColor: '#4CAF50',
//     borderWidth: 2,
//     borderColor: '#fff',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   headerName: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//     marginBottom: 2,
//   },
//   statusContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   onlineDot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: '#4CAF50',
//     marginRight: 6,
//   },
//   onlineText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontWeight: '500',
//     textTransform: 'lowercase',
//   },
//   offlineText: {
//     fontSize: 12,
//     color: '#6c757d',
//     textTransform: 'lowercase',
//   },
//   typingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   typingText: {
//     fontSize: 12,
//     color: '#4CAF50',
//     fontStyle: 'italic',
//     marginRight: 4,
//   },
//   typingDots: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   typingDot: {
//     width: 4,
//     height: 4,
//     borderRadius: 2,
//     backgroundColor: '#4CAF50',
//     marginHorizontal: 1,
//   },
//   typingDot1: {
//     opacity: 0.4,
//   },
//   typingDot2: {
//     opacity: 0.6,
//   },
//   typingDot3: {
//     opacity: 0.8,
//   },
//   messagesList: {
//     padding: 16,
//     flexGrow: 1,
//     paddingBottom: 80,
//   },
//   messageContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     marginBottom: 16,
//     maxWidth: '100%',
//   },
//   myMessageContainer: {
//     justifyContent: 'flex-end',
//   },
//   theirMessageContainer: {
//     justifyContent: 'flex-start',
//   },
//   editingMessage: {
//     backgroundColor: '#fff8e1',
//     borderRadius: 8,
//     padding: 4,
//   },
//   messageAvatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   messageBubble: {
//     maxWidth: '70%',
//     padding: 12,
//     borderRadius: 18,
//     marginHorizontal: 8,
//   },
//   myMessage: {
//     backgroundColor: '#FF6B6B',
//     borderBottomRightRadius: 4,
//   },
//   theirMessage: {
//     backgroundColor: '#fff',
//     borderBottomLeftRadius: 4,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   messageText: {
//     fontSize: 16,
//     lineHeight: 22,
//     marginBottom: 4,
//   },
//   myMessageText: {
//     color: '#fff',
//   },
//   theirMessageText: {
//     color: '#212529',
//   },
//   messageFooter: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   messageTime: {
//     fontSize: 11,
//     opacity: 0.7,
//   },
//   myMessageTime: {
//     color: 'rgba(255, 255, 255, 0.8)',
//   },
//   theirMessageTime: {
//     color: '#6c757d',
//   },
//   messageActions: {
//     flexDirection: 'row',
//     marginLeft: 8,
//   },
//   messageAction: {
//     padding: 4,
//     marginLeft: 4,
//   },
//   editContainer: {
//     flex: 1,
//   },
//   editInput: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 8,
//     marginBottom: 8,
//     fontSize: 16,
//     minHeight: 40,
//   },
//   editActions: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   editActionButton: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//     marginLeft: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   saveButton: {
//     backgroundColor: '#FF6B6B',
//   },
//   editActionText: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderTopWidth: 1,
//     borderTopColor: '#e9ecef',
//     backgroundColor: '#fff',
//   },
//   emojiButton: {
//     padding: 8,
//     marginRight: 8,
//   },
//   textInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#e9ecef',
//     borderRadius: 24,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     maxHeight: 100,
//     fontSize: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   sendButton: {
//     padding: 12,
//     marginLeft: 8,
//     backgroundColor: '#FF6B6B',
//     borderRadius: 24,
//     width: 48,
//     height: 48,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   emojiPickerContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   emojiPicker: {
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     padding: 16,
//     maxHeight: '50%',
//   },
//   emojiPickerHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//     paddingBottom: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#e9ecef',
//   },
//   emojiPickerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#212529',
//   },
//   closeButton: {
//     padding: 4,
//   },
//   emojiGridContainer: {
//     height: 200,
//   },
//   emojiGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'flex-start',
//   },
//   emojiItem: {
//     width: '10%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 8,
//   },
//   emoji: {
//     textAlign: 'center',
//   },
// });





//13/09/2025
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  Modal,
  ScrollView,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  collection,
  doc,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  serverTimestamp,
  getDoc,
  deleteDoc,
  setDoc,
  where
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../context/AuthContext';
import { useLocalSearchParams, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

// All emojis in one flat list
const allEmojis = [
  '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
  '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
  '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩',
  '🥳', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣',
  '😖', '😫', '😩', '🥺', '😢', '😭', '😤', '😠', '😡', '🤬',
  '🤯', '😳', '🥵', '🥶', '😱', '😨', '😰', '😥', '😓', '🫣',
  '🤗', '🫡', '🤔', '🫢', '🤭', '🤫', '🤥', '😶', '🫠', '😐',
  '🫤', '😑', '😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱',
  '😴', '🤤', '😪', '😵', '🫥', '🤐', '🥴', '🤢', '🤮', '🤧',
  '😷', '🤒', '🤕', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻',
  '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈',
  '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🦆', '🦅', '🦉',
  '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐞',
  '🐜', '🦟', '🦗', '🕷️', '🦂', '🐢', '🐍', '🦎', '🦖', '🦕',
  '🐙', '🦑', '🦐', '🦞', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳',
  '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🦧', '🦣', '🐘',
  '🦛', '🦏', '🐪', '🐫', '🦒', '🦘', '🦬', '🐃', '🐂', '🐄',
  '🐎', '🐖', '🐏', '🐑', '🦙', '🐐', '🦌', '🐕', '🐩', '🦮',
  '🐕‍🦺', '🐈', '🐈‍⬛', '🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉',
  '🍇', '🍓', '🫐', '🍈', '🍒', '🍑', '🥭', '🍍', '🥥', '🥝',
  '🍅', '🍆', '🥑', '🥦', '🥬', '🥒', '🌶️', '🫑', '🌽', '🥕',
  '🫒', '🧄', '🧅', '🥔', '🍠', '🥐', '🥯', '🍞', '🥖', '🥨',
  '🧀', '🥚', '🍳', '🧈', '🥞', '🧇', '🥓', '🥩', '🍗', '🍖',
  '🌭', '🍔', '🍟', '🍕', '🫓', '🥪', '🥙', '🧆', '🌮', '🌯',
  '🫔', '🥗', '🥘', '🫕', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣',
  '🍱', '🥟', '🦪', '🍤', '🍙', '🍚', '🍘', '🍥', '🥠', '🥮',
  '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🧁', '🍰', '🎂', '🍮',
  '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛',
  '🍼', '🫖', '☕️', '⌚️', '📱', '📲', '💻', '⌨️', '🖥️', '🖨️',
  '🖱️', '🖲️', '🕹️', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞',
  '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️',
  '⏲️', '⏰', '🕰️', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦',
  '🕯️', '🪔', '🧯', '💰', '💳', '💎', '⚖️', '🪜', '🧰', '🪛',
  '🔧', '🔨', '⚒️', '🛠️', '⛏️', '🔩', '⚙️', '🔗', '📎', '🖇️',
  '📐', '📏', '🧮', '📌', '📍', '✂️', '🖊️', '🖋️', '✒️', '🖌️',
  '🖍️', '📝', '✏️', '🔍', '🔎', '🔏', '🔐', '🔒', '🔓', '❤️',
  '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❤️‍🔥',
  '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️',
  '✝️', '☪️', '🕉️', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐',
  '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️',
  '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳',
  '🈶', '🈚️', '🈸', '🈺', '🈷️', '✴️', '🆚', '💮', '🉐', '㊙️',
  '㊗️', '🈴', '🈵', '🈹', '🈲', '🅰️', '🅱️', '🆎', '🆑', '🅾️',
  '🆘', '❌', '⭕️', '🛑', '⛔️', '📛', '🚫', '💯', '💢', '♨️',
  '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❗️', '❕', '❓',
  '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️',
  '🔰', '♻️', '✅', '🈯️', '💹', '❇️', '✳️', '❎', '🌐', '💠',
  'Ⓜ️', '🌀', '💤', '🏧', '🚾', '♿️', '🅿️', '🛗', '🈳'
];

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [otherUserProfile, setOtherUserProfile] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [userTyping, setUserTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [editingMessage, setEditingMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastSeen, setLastSeen] = useState(null);
  const { user } = useAuth();
  const { id, name, profileId } = useLocalSearchParams();
  const router = useRouter();
  const flatListRef = useRef(null);
  const textInputRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Calculate emoji size based on screen width
  const emojiSize = Math.floor(width / 10);

  // Get the other participant's ID and fetch their profile
  useEffect(() => {
    const fetchChatInfo = async () => {
      if (!id || !user?.id) return;

      try {
        setLoading(true);
        
        // If we have profileId from params, use it directly
        if (profileId) {
          await fetchUserProfile(profileId);
        } else {
          // Get chat document to find other participant
          const chatRef = doc(db, 'chats', id);
          const chatSnap = await getDoc(chatRef);
          
          if (chatSnap.exists()) {
            const chatData = chatSnap.data();
            const otherParticipantId = chatData.participantIds.find(pid => pid !== user.id);
            
            if (otherParticipantId) {
              // Fetch other user's profile
              await fetchUserProfile(otherParticipantId);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching chat info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChatInfo();
  }, [id, user, profileId]);

  // Fetch user profile from Users collection
  const fetchUserProfile = async (userId) => {
    try {
      const profileRef = doc(db, 'Users', userId);
      const profileSnap = await getDoc(profileRef);
      
      if (profileSnap.exists()) {
        const profileData = profileSnap.data();
        setOtherUserProfile({
          id: userId,
          name: `${profileData.firstName || ''} ${profileData.lastName || ''}`.trim() || 'User',
          photo: profileData.profilePhoto || 'https://via.placeholder.com/150?text=User',
          age: profileData.age,
          city: profileData.city
        });
        return;
      }
      
      // Fallback if no profile found
      setOtherUserProfile({
        id: userId,
        name: name || 'User',
        photo: 'https://via.placeholder.com/150?text=User',
        age: null,
        city: null
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setOtherUserProfile({
        id: userId,
        name: name || 'User',
        photo: 'https://via.placeholder.com/150?text=User',
        age: null,
        city: null
      });
    }
  };

  // Listen for online users and typing status
  useEffect(() => {
    if (!user?.id || !otherUserProfile?.id) return;

    const onlineRef = doc(db, 'onlineUsers', otherUserProfile.id);
    
    const unsubscribe = onSnapshot(onlineRef, (doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        if (userData.lastSeen) {
          const lastSeenDate = userData.lastSeen.toDate ? userData.lastSeen.toDate() : new Date(userData.lastSeen);
          setLastSeen(lastSeenDate);
        }
        
        // Check if user is typing
        if (userData.typing === true) {
          setUserTyping(true);
          
          // Reset typing status after 3 seconds if no update
          if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
          }
          
          typingTimeoutRef.current = setTimeout(() => {
            setUserTyping(false);
          }, 3000);
        } else {
          setUserTyping(false);
        }
      }
    });

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      unsubscribe();
    };
  }, [user, otherUserProfile]);

  // Update typing status in Firestore
  const updateTypingStatus = async (isTyping) => {
    if (!user?.id) return;
    
    try {
      const userStatusRef = doc(db, 'onlineUsers', user.id);
      await setDoc(userStatusRef, {
        isOnline: true,
        lastSeen: serverTimestamp(),
        userId: user.id,
        userName: user.displayName || 'User',
        typing: isTyping
      }, { merge: true });
    } catch (error) {
      console.error('Error updating typing status:', error);
    }
  };

  // Handle text input changes
  const handleTextChange = (text) => {
    setNewMessage(text);
    
    // Update typing status
    if (text.length > 0) {
      updateTypingStatus(true);
      
      // Clear previous timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      
      // Set new timeout to reset typing status
      typingTimeoutRef.current = setTimeout(() => {
        updateTypingStatus(false);
      }, 1000);
    } else {
      updateTypingStatus(false);
    }
  };

  // Listen for messages in real-time
  useEffect(() => {
    if (!id) return;

    const messagesRef = collection(db, 'chats', id, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        messagesData.push({
          id: doc.id,
          ...data,
          // Ensure timestamp is a Date object
          timestamp: data.timestamp ? data.timestamp.toDate() : new Date()
        });
      });
      setMessages(messagesData);
      
      // Scroll to bottom when new messages arrive
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    });

    return () => unsubscribe();
  }, [id]);

  // Check if other user is online
  const isOtherUserOnline = () => {
    if (!lastSeen || !otherUserProfile?.id) return false;
    
    const now = new Date();
    const lastSeenDate = new Date(lastSeen);
    const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
    // Consider user online if they were active in the last 2 minutes
    return diff < 120;
  };

  // Format last seen time in a detailed way
  const formatLastSeen = (date) => {
    if (!date) return 'recently';
    
    const now = new Date();
    const lastSeenDate = new Date(date);
    const diff = Math.floor((now - lastSeenDate) / 1000); // difference in seconds
    
    if (diff < 60) {
      return 'just now';
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diff < 604800) {
      const days = Math.floor(diff / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
      return lastSeenDate.toLocaleDateString();
    }
  };

  // Send a new message
  const sendMessage = async () => {
    if (!newMessage.trim() || !user || !user.id || !id) {
      Alert.alert('Error', 'Cannot send empty message');
      return;
    }

    try {
      // Reset typing status
      updateTypingStatus(false);
      
      const messagesRef = collection(db, 'chats', id, 'messages');
      
      // Create message data with validated fields
      const messageData = {
        text: newMessage.trim(),
        senderId: user.id,
        senderName: user.displayName || `${user.firstName} ${user.lastName}`.trim() || 'User',
        timestamp: serverTimestamp(),
        type: 'text',
        edited: false
      };

      await addDoc(messagesRef, messageData);
      
      // Update the chat's last message and timestamp
      const chatRef = doc(db, 'chats', id);
      await updateDoc(chatRef, {
        lastMessage: newMessage.trim(),
        lastMessageTime: serverTimestamp()
      });
      
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      Alert.alert('Error', 'Failed to send message. Please try again.');
    }
  };

  // Edit a message
  const editMessage = async (messageId, newText) => {
    if (!newText.trim()) return;
    
    try {
      const messageRef = doc(db, 'chats', id, 'messages', messageId);
      await updateDoc(messageRef, {
        text: newText.trim(),
        edited: true,
        editedAt: serverTimestamp()
      });
      
      setEditingMessage(null);
      Alert.alert('Success', 'Message updated successfully');
    } catch (error) {
      console.error('Error editing message:', error);
      Alert.alert('Error', 'Failed to edit message. Please try again.');
    }
  };

  // Delete a message
  const deleteMessage = async (messageId) => {
    try {
      const messageRef = doc(db, 'chats', id, 'messages', messageId);
      await deleteDoc(messageRef);
      Alert.alert('Success', 'Message deleted successfully');
    } catch (error) {
      console.error('Error deleting message:', error);
      Alert.alert('Error', 'Failed to delete message. Please try again.');
    }
  };

  // Add emoji to message
  const addEmoji = (emoji) => {
    setNewMessage(prevMessage => prevMessage + emoji);
    setShowEmojiPicker(false);
  };

  const renderMessage = useCallback(({ item }) => {
    const isMyMessage = item.senderId === user?.id;
    const isEditing = editingMessage?.id === item.id;
    
    return (
      <View style={[
        styles.messageContainer,
        isMyMessage ? styles.myMessageContainer : styles.theirMessageContainer,
        isEditing && styles.editingMessage
      ]}>
        {!isMyMessage && (
          <Image
            source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
            style={styles.messageAvatar}
          />
        )}
        
        <View style={[
          styles.messageBubble,
          isMyMessage ? styles.myMessage : styles.theirMessage
        ]}>
          {isEditing ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.editInput}
                defaultValue={item.text}
                onSubmitEditing={(e) => editMessage(item.id, e.nativeEvent.text)}
                autoFocus
                multiline
              />
              <View style={styles.editActions}>
                <TouchableOpacity
                  style={styles.editActionButton}
                  onPress={() => setEditingMessage(null)}
                >
                  <Text style={styles.editActionText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.editActionButton, styles.saveButton]}
                  onPress={() => editMessage(item.id, item.text)}
                >
                  <Text style={styles.editActionText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <Text style={[
                styles.messageText,
                isMyMessage ? styles.myMessageText : styles.theirMessageText
              ]}>
                {item.text}
              </Text>
              
              <View style={styles.messageFooter}>
                <Text style={[
                  styles.messageTime,
                  isMyMessage ? styles.myMessageTime : styles.theirMessageTime
                ]}>
                  {item.timestamp ? formatTime(item.timestamp) : 'Just now'}
                  {item.edited && ' (edited)'}
                </Text>
                
                {isMyMessage && (
                  <View style={styles.messageActions}>
                    <TouchableOpacity
                      style={styles.messageAction}
                      onPress={() => setEditingMessage(item)}
                    >
                      <Ionicons name="create-outline" size={14} color="#666" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.messageAction}
                      onPress={() => deleteMessage(item.id)}
                    >
                      <Ionicons name="trash-outline" size={14} color="#FF6B6B" />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </>
          )}
        </View>
        
        {isMyMessage && (
          <Image
            source={{ uri: user.profilePhoto || 'https://via.placeholder.com/150?text=You' }}
            style={styles.messageAvatar}
          />
        )}
      </View>
    );
  }, [user, otherUserProfile, editingMessage]);

  const formatTime = (date) => {
    if (!date) return '';
    const now = new Date();
    const messageDate = new Date(date);
    
    // If message is from today, show time only
    if (messageDate.toDateString() === now.toDateString()) {
      return messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    // If message is from yesterday, show "Yesterday"
    else if (messageDate.toDateString() === new Date(now.setDate(now.getDate() - 1)).toDateString()) {
      return 'Yesterday ' + messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    // Otherwise show date and time
    else {
      return messageDate.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' +
             messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  };

  // Enhanced emoji picker component with all emojis
  const EmojiPicker = () => {
    return (
      <Modal
        transparent={true}
        visible={showEmojiPicker}
        animationType="slide"
        onRequestClose={() => setShowEmojiPicker(false)}
      >
        <View style={styles.emojiPickerContainer}>
          <View style={styles.emojiPicker}>
            <View style={styles.emojiPickerHeader}>
              <Text style={styles.emojiPickerTitle}>Select Emoji</Text>
              <TouchableOpacity
                onPress={() => setShowEmojiPicker(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#333" />
              </TouchableOpacity>
            </View>
            
            {/* All Emojis Grid */}
            <View style={styles.emojiGridContainer}>
              <ScrollView>
                <View style={styles.emojiGrid}>
                  {allEmojis.map((emoji, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.emojiItem}
                      onPress={() => addEmoji(emoji)}
                    >
                      <Text style={[styles.emoji, { fontSize: emojiSize * 0.6 }]}>
                        {emoji}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FF6B6B" />
          <Text style={styles.loadingText}>Loading chat...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header with Profile Photo and Online Status */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        
        <View style={styles.headerProfile}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: otherUserProfile?.photo || 'https://via.placeholder.com/150?text=User' }}
              style={styles.headerAvatar}
            />
            {isOtherUserOnline() && <View style={styles.onlineBadge} />}
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>{otherUserProfile?.name || name || 'User'}</Text>
            <View style={styles.statusContainer}>
              {isOtherUserOnline() ? (
                userTyping ? (
                  <View style={styles.typingContainer}>
                    <Text style={styles.typingText}>typing</Text>
                    <View style={styles.typingDots}>
                      <View style={[styles.typingDot, styles.typingDot1]} />
                      <View style={[styles.typingDot, styles.typingDot2]} />
                      <View style={[styles.typingDot, styles.typingDot3]} />
                    </View>
                  </View>
                ) : (
                  <>
                    <View style={styles.onlineDot} />
                    <Text style={styles.onlineText}>online</Text>
                  </>
                )
              ) : lastSeen ? (
                <Text style={styles.offlineText}>
                  last seen {formatLastSeen(lastSeen)}
                </Text>
              ) : (
                <Text style={styles.offlineText}>offline</Text>
              )}
            </View>
          </View>
        </View>
      </View>

      {/* Messages List */}
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => {
          flatListRef.current?.scrollToEnd({ animated: true });
        }}
        onLayout={() => {
          flatListRef.current?.scrollToEnd({ animated: true });
        }}
      />

      {/* Emoji Picker */}
      <EmojiPicker />

      {/* Message Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        style={styles.inputContainer}
      >
        <TouchableOpacity
          style={styles.emojiButton}
          onPress={() => setShowEmojiPicker(true)}
        >
          <Ionicons name="happy-outline" size={28} color="#666" />
        </TouchableOpacity>
        
        <TextInput
          ref={textInputRef}
          style={styles.textInput}
          value={newMessage}
          onChangeText={handleTextChange}
          placeholder="Type a message..."
          multiline
          maxLength={500}
          placeholderTextColor="#999"
        />
        
        {newMessage.trim() ? (
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessage}
          >
            <Ionicons name="send" size={22} color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.emojiButton}>
            <Ionicons name="heart-outline" size={28} color="#666" />
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  headerProfile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  headerAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: '#FF6B6B',
  },
  onlineBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  headerInfo: {
    flex: 1,
  },
  headerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 2,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onlineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginRight: 6,
  },
  onlineText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
    textTransform: 'lowercase',
  },
  offlineText: {
    fontSize: 12,
    color: '#6c757d',
    textTransform: 'lowercase',
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typingText: {
    fontSize: 12,
    color: '#4CAF50',
    fontStyle: 'italic',
    marginRight: 4,
  },
  typingDots: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typingDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#4CAF50',
    marginHorizontal: 1,
  },
  typingDot1: {
    opacity: 0.4,
  },
  typingDot2: {
    opacity: 0.6,
  },
  typingDot3: {
    opacity: 0.8,
  },
  messagesList: {
    padding: 16,
    flexGrow: 1,
    paddingBottom: 80,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
    maxWidth: '100%',
  },
  myMessageContainer: {
    justifyContent: 'flex-end',
  },
  theirMessageContainer: {
    justifyContent: 'flex-start',
  },
  editingMessage: {
    backgroundColor: '#fff8e1',
    borderRadius: 8,
    padding: 4,
  },
  messageAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 12,
    borderRadius: 18,
    marginHorizontal: 8,
  },
  myMessage: {
    backgroundColor: '#FF6B6B',
    borderBottomRightRadius: 4,
  },
  theirMessage: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    borderWidth: 1,
    borderColor: '#e9ecef',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
  },
  myMessageText: {
    color: '#fff',
  },
  theirMessageText: {
    color: '#212529',
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageTime: {
    fontSize: 11,
    opacity: 0.7,
  },
  myMessageTime: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
  theirMessageTime: {
    color: '#6c757d',
  },
  messageActions: {
    flexDirection: 'row',
    marginLeft: 8,
  },
  messageAction: {
    padding: 4,
    marginLeft: 4,
  },
  editContainer: {
    flex: 1,
  },
  editInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    fontSize: 16,
    minHeight: 40,
  },
  editActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editActionButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 8,
    backgroundColor: '#f0f0f0',
  },
  saveButton: {
    backgroundColor: '#FF6B6B',
  },
  editActionText: {
    fontSize: 12,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    backgroundColor: '#fff',
  },
  emojiButton: {
    padding: 8,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxHeight: 100,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
  },
  sendButton: {
    padding: 12,
    marginLeft: 8,
    backgroundColor: '#FF6B6B',
    borderRadius: 24,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emojiPickerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  emojiPicker: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    maxHeight: '50%',
  },
  emojiPickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  emojiPickerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
  },
  closeButton: {
    padding: 4,
  },
  emojiGridContainer: {
    height: 200,
  },
  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  emojiItem: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  emoji: {
    textAlign: 'center',
  },
});