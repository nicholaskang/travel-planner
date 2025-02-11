export interface UserPersonality {
  key: string;
  name: string;
  description: string;
  travelPreferences: string[];
}

const userPersonalities: UserPersonality[] = [
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
  },
];

export default userPersonalities;
