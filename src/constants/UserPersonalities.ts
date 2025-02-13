export interface UserPersonality {
  key: string;
  name: string;
  description: string;
  travelPreferences: string[];
  image: {
    src: string;
    alt: string;
  };
}

const UserPersonalities: UserPersonality[] = [
  {
    key: "thrillSeeker",
    name: "Thrill Seeker",
    description:
      "You live for the adrenaline rush. Whether it’s skydiving, bungee jumping, whitewater rafting, or scaling mountains, you crave high-energy, heart-pounding adventures.",
    travelPreferences: [
      "Extreme sports",
      "Off-the-grid exploration",
      "Adventure parks",
      "Survival experiences",
    ],
    image: {
      src: "/images/thrill-seeker.webp",
      alt: "A bold, adventurous traveler mid-air while skydiving, wearing a stylish jumpsuit and goggles, with a wide, excited smile. The wind rushes past their face as they free-fall above breathtaking mountains.",
    },
  },
  {
    key: "wildernessExplorer",
    name: "Wilderness Explorer",
    description:
      "You feel most at home in nature, far from crowds. You prefer trekking, camping under the stars, and immersing yourself in untouched landscapes and wildlife.",
    travelPreferences: [
      "National parks",
      "Remote hiking trails",
      "Camping",
      "Wildlife safaris",
    ],
    image: {
      src: "/images/wilderness-explorer.webp",
      alt: "A rugged, outdoorsy traveler deep in the wilderness, wearing a weathered hiking outfit, a large backpack, and sturdy boots. They stand on a misty mountain trail, surrounded by lush green trees and a scenic valley below.",
    },
  },
  {
    key: "backpacker",
    name: "Backpacker",
    description:
      "You travel light, stretch every dollar, and prioritize experiences over luxury. You seek budget-friendly, off-the-beaten-path adventures, meeting fellow travelers along the way.",
    travelPreferences: [
      "Budget hostels",
      "Street food",
      "Local public transport",
      "Long-term travel",
    ],
    image: {
      src: "/images/backpacker.webp",
      alt: "A budget-savvy traveler exploring a bustling foreign city, wearing a light backpack, comfortable travel clothes, and a wristband from a hostel. They stand near a lively street food market, trying a local delicacy with a curious and delighted expression.",
    },
  },
  {
    key: "cityExplorer",
    name: "City Explorer",
    description:
      "You love the energy and culture of big cities. Museums, nightlife, street markets, and architectural marvels fuel your wanderlust.",
    travelPreferences: [
      "Iconic landmarks",
      "Trendy neighborhoods",
      "Cultural attractions",
      "Nightlife hotspots",
    ],
    image: {
      src: "/images/city-explorer.webp",
      alt: "A stylish traveler walking through a vibrant city street. They hold a cup of coffee, and a camera, capturing the lively atmosphere of skyscrapers and bustling crowds.",
    },
  },
  {
    key: "luxuryTraveler",
    name: "Luxury Traveler",
    description:
      "You seek the finest experiences the world has to offer. From five-star resorts to gourmet dining and private tours, your travels are all about exclusivity and indulgence.",
    travelPreferences: [
      "High-end hotels",
      "First-class flights",
      "Michelin-starred restaurants",
      "VIP experiences",
    ],
    image: {
      src: "/images/luxury-traveler.webp",
      alt: "A sophisticated traveler sitting in the lounge of a five-star hotel, elegantly dressed in designer clothes. They sip a glass of champagne while overlooking a breathtaking ocean view from a luxury suite. Their expression is confident and refined, radiating exclusivity.",
    },
  },
  {
    key: "foodieTraveler",
    name: "Foodie Traveler",
    description:
      "For you, travel is about tasting the world. You explore destinations through their culinary scene, from local street food to fine dining experiences.",
    travelPreferences: [
      "Authentic local cuisine",
      "Food tours",
      "Cooking classes",
      "Michelin-starred dining",
    ],
    image: {
      src: "/images/foodie.webp",
      alt: "A passionate traveler in a lively food market, holding a plate of exotic street food, eyes wide with excitement. They wear casual yet stylish clothing and have a joyful, adventurous look as they take a bite of their dish. Behind them, colorful food stalls display spices, fresh produce, and traditional meals from different cultures.",
    },
  },
  {
    key: "familyVacationer",
    name: "Family Vacationer",
    description:
      "You prioritize making memories with loved ones. Your trips are family-friendly, filled with activities that cater to all ages, ensuring relaxation and fun for everyone.",
    travelPreferences: [
      "Theme parks",
      "Kid-friendly resorts",
      "Cultural experiences",
      "Guided tours",
    ],
    image: {
      src: "/images/family-vacationer.webp",
      alt: "A cheerful parent with kids, enjoying a fun day at a theme park. They are dressed casually, holding hands with their children while pointing at a roller coaster in the background. Their faces are full of happiness and excitement, capturing the joy of family adventures.",
    },
  },
  {
    key: "soloTraveler",
    name: "Solo Traveler",
    description:
      "You embrace independence and self-discovery. Whether exploring a new city alone or meeting locals and fellow travelers, you enjoy the freedom of traveling on your own terms.",
    travelPreferences: [
      "Hostel stays",
      "Cultural immersion",
      "Local experiences",
      "Solo-friendly activities",
    ],
    image: {
      src: "/images/solo-traveler.webp",
      alt: "A confident, independent traveler standing at a scenic viewpoint, overlooking a breathtaking landscape. They wear a stylish yet functional outfit, carrying a small backpack, and taking a deep breath as they soak in the moment. Their posture and expression convey freedom, self-discovery, and the excitement of exploring the world alone.",
    },
  },
  {
    key: "cultureSeeker",
    name: "Culture Seeker",
    description:
      "You are fascinated by history, traditions, and local customs. You travel to dive deep into the cultural heart of each place, appreciating art, music, and heritage.",
    travelPreferences: [
      "Museums",
      "Historical landmarks",
      "Festivals",
      "Traditional performances",
    ],
    image: {
      src: "/images/culture-seeker.webp",
      alt: "A traveler immersed in a traditional cultural festival, wearing local attire and engaging in a vibrant street performance. They are surrounded by colorful decorations, musicians, and dancers, eagerly learning about the rich heritage of the place. Their face glows with curiosity and appreciation.",
    },
  },
  {
    key: "historyBuff",
    name: "History Buff",
    description:
      "You love stepping back in time, exploring ancient ruins, medieval castles, and historic cities. Learning about the past is the highlight of your travels.",
    travelPreferences: [
      "Archaeological sites",
      "Historical museums",
      "Guided history tours",
      "UNESCO heritage sites",
    ],
    image: {
      src: "/images/history-buff.webp",
      alt: "A curious traveler exploring an ancient ruin, wearing a light jacket and carrying a travel guidebook. They stand in awe before an old castle, running their fingers along the ancient stone walls. Their expression is one of fascination, deeply absorbed in history.",
    },
  },
  {
    key: "beachLover",
    name: "Beach Lover",
    description:
      "You live for the sun, sand, and sea. Your ideal trip involves lounging on pristine beaches, snorkeling in clear waters, and enjoying water sports.",
    travelPreferences: [
      "Tropical destinations",
      "Water sports",
      "Beachfront resorts",
      "Island hopping",
    ],
    image: {
      src: "/images/beach-lover.webp",
      alt: "A relaxed traveler lounging on a tropical beach, wearing stylish sunglasses and a breezy summer outfit. They are sitting under a palm tree with a coconut drink in hand, gazing at the waves. Behind them, vibrant beach umbrellas, surfboards, and crystal-clear turquoise water set the perfect vacation mood.",
    },
  },
];

export default UserPersonalities;
