export interface TravelPreference {
  key: string;
  category: string;
  icon: string;
  items: {
    key: string;
    name: string;
    icon: string;
  }[];
}

const TravelPreferences: TravelPreference[] = [
  {
    key: "destinationType",
    category: "Destination Type",
    icon: "🗺",
    items: [
      { key: "exploreEurope", name: "Explore Europe", icon: "🏰" },
      { key: "exploreAsia", name: "Explore Asia", icon: "🏯" },
      { key: "exploreAfrica", name: "Explore Africa", icon: "🦁" },
      {
        key: "exploreAmericas",
        name: "Explore North & South America",
        icon: "🌎",
      },
      {
        key: "islandParadise",
        name: "Island & Tropical Destinations",
        icon: "🏝",
      },
      {
        key: "offTheBeatenPath",
        name: "Off-the-Beaten-Path Travel",
        icon: "🚶",
      },
    ],
  },
  {
    key: "travelStyle",
    category: "Travel Style",
    icon: "🎒",
    items: [
      { key: "luxuryTravel", name: "Luxury & High-End Travel", icon: "💎" },
      {
        key: "budgetFriendly",
        name: "Budget-Friendly & Backpacking",
        icon: "💰",
      },
      { key: "slowTravel", name: "Slow Travel & Extended Stays", icon: "⏳" },
      {
        key: "adventureTravel",
        name: "Extreme Adventure & Thrill-Seeking",
        icon: "⚡",
      },
      { key: "wellnessTravel", name: "Wellness & Spa Retreats", icon: "🧘" },
    ],
  },
  {
    key: "safetyAccessibility",
    category: "Safety & Accessibility",
    icon: "🛡",
    items: [
      {
        key: "soloFemaleTravel",
        name: "Solo Female Travel Friendly",
        icon: "🚺",
      },
      {
        key: "familyFriendly",
        name: "Family-Friendly Destinations",
        icon: "🏡",
      },
      { key: "petFriendly", name: "Pet-Friendly Travel", icon: "🐕" },
      {
        key: "accessibleTravel",
        name: "Accessible & Elderly-Friendly Travel",
        icon: "♿",
      },
    ],
  },
  {
    key: "lifestyleWork",
    category: "Lifestyle & Work",
    icon: "💼",
    items: [
      {
        key: "digitalNomadFriendly",
        name: "Digital Nomad Hotspots",
        icon: "💻",
      },
      {
        key: "remoteDigitalDetox",
        name: "Remote Digital Detox Retreats",
        icon: "📵",
      },
      {
        key: "coWorkingSpaces",
        name: "Destinations with Great Co-Working Spaces",
        icon: "🏢",
      },
      {
        key: "voluntourism",
        name: "Volunteering & Social Impact Travel",
        icon: "🤝",
      },
    ],
  },
  {
    key: "adventureActivities",
    category: "Activities & Adventure",
    icon: "🧗",
    items: [
      {
        key: "activeAndAdventurous",
        name: "Active & High-Energy Travel",
        icon: "🏃",
      },
      { key: "hikingTreks", name: "Hiking & Mountain Treks", icon: "🥾" },
      {
        key: "waterSports",
        name: "Surfing, Scuba Diving & Water Sports",
        icon: "🌊",
      },
      {
        key: "wildlifeSafaris",
        name: "Wildlife Safaris & Animal Encounters",
        icon: "🐘",
      },
    ],
  },
  {
    key: "relaxationLeisure",
    category: "Relaxation & Leisure",
    icon: "😌",
    items: [
      {
        key: "slowPacedAndQuiet",
        name: "Slow-Paced & Quiet Destinations",
        icon: "🌄",
      },
      {
        key: "beachfrontResorts",
        name: "Beachfront & Oceanfront Resorts",
        icon: "🏖",
      },
      { key: "hotSprings", name: "Hot Springs & Thermal Spas", icon: "♨️" },
      {
        key: "meditationRetreats",
        name: "Meditation & Yoga Retreats",
        icon: "🙏",
      },
    ],
  },
  {
    key: "cultureHistory",
    category: "Cultural & Historical Travel",
    icon: "🏛",
    items: [
      {
        key: "artAndMuseums",
        name: "Art, Museums & Cultural Heritage",
        icon: "🖼",
      },
      {
        key: "historicalSites",
        name: "Ancient Ruins & Historical Sites",
        icon: "🏺",
      },
      {
        key: "localFestivals",
        name: "Traditional Festivals & Local Events",
        icon: "🎉",
      },
      {
        key: "indigenousCultures",
        name: "Immersive Indigenous Culture Experiences",
        icon: "🌿",
      },
    ],
  },
  {
    key: "foodDrink",
    category: "Food & Drink Experiences",
    icon: "🍽",
    items: [
      { key: "foodieTours", name: "Gourmet & Foodie Travel", icon: "🍣" },
      { key: "streetFood", name: "Street Food & Market Tours", icon: "🌮" },
      { key: "wineTasting", name: "Wine Tasting & Vineyard Tours", icon: "🍷" },
      {
        key: "cookingClasses",
        name: "Local Cooking Classes & Culinary Workshops",
        icon: "👨‍🍳",
      },
    ],
  },
  {
    key: "shopping",
    category: "Shopping & Unique Finds",
    icon: "🛍",
    items: [
      {
        key: "localHandicrafts",
        name: "Local Handicrafts & Artisan Markets",
        icon: "🎭",
      },
      {
        key: "luxuryShopping",
        name: "Luxury Shopping & Designer Brands",
        icon: "💎",
      },
      {
        key: "thriftStores",
        name: "Vintage & Second-Hand Shopping",
        icon: "👗",
      },
      {
        key: "techShopping",
        name: "Best Places for Tech & Electronics Deals",
        icon: "📱",
      },
    ],
  },
];

export default TravelPreferences;
