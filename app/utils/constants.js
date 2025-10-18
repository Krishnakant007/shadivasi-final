// App constants for testing
export const RAZORPAY_KEY_ID = 'rzp_test_RP9jVzAyEEN7Xr'; // Your test key

export const SubscriptionPlans = [
  {
    id: 'silver',
    name: 'Silver',
    badge: 'BASIC',
    badgeStyle: 'silverBadge',
    icon: 'medal-outline',
    originalPrice: 1000,
    discountedPrice: 500,
    duration: 'Monthly Plan',
    savings: '',
    features: [
      'Unlimited profile browsing',
      'Send likes & view visitors',
      '30 connections per day',
      'View contact details',
      'Basic matchmaking filters'
    ],
    gradient: ['#a9a9a9', '#ffff', '#c0c0c0', '#a9a9a9']
  },
  {
    id: 'gold',
    name: 'Gold',
    badge: 'RECOMMENDED',
    badgeStyle: 'recommendedBadge',
    icon: 'medal',
    originalPrice: 1500,
    discountedPrice: 1200,
    duration: 'Quarterly Plan',
    savings: 'Save ₹300',
    features: [
      'Everything in Silver +',
      'Unlimited connections',
      'Priority visibility',
      'Advanced filters',
      'Verified profiles only',
      'Direct call/chat option'
    ],
    gradient: ['#fff8dc', '#fafad2', '#ffd700', '#daa520', '#fff8dc']
  },
  {
    id: 'platinum',
    name: 'Platinum',
    badge: 'PREMIUM',
    badgeStyle: 'premiumBadge',
    icon: 'diamond',
    originalPrice: 6000,
    discountedPrice: 3000,
    duration: 'Yearly Plan',
    savings: 'Save ₹3000',
    features: [
      'Everything in Gold +',
      'Top profile highlighting',
      'Personalized matchmaking',
      'Free invitation templates',
      'Community events access',
      'Premium user badge'
    ],
    gradient: ['#E5E4E2', '#F5F5F5', '#FFFFFF', '#F5F5F5', '#E5E4E2']
  }
];