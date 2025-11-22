// Data structure and sample data for internship registration system

export interface Company {
  id: string
  name: string
  logo: string
  description: string
}

export interface Internship {
  id: string
  companyId: string
  company: Company
  title: string
  description: string
  location: string
  major: string
  field: string
  requirements: string[]
  duration: string
  salary?: string
  postedDate: string
}

export interface Major {
  id: string
  name: string
  description: string
  icon: string
}

export interface Field {
  id: string
  majorId: string
  name: string
  description: string
}

// Sample Companies by Field
const techCompanies: Company[] = [
  { id: "google", name: "Google", logo: "/logos/google.svg", description: "Search and cloud solutions" },
  { id: "microsoft", name: "Microsoft", logo: "/logos/microsoft.svg", description: "Software and cloud services" },
  { id: "apple", name: "Apple", logo: "/logos/apple.svg", description: "Technology and devices" },
  { id: "amazon", name: "Amazon", logo: "/logos/amazon.svg", description: "Cloud and e-commerce" },
  { id: "meta", name: "Meta", logo: "/logos/meta.svg", description: "Social media and AI" },
]

const culinaryCompanies: Company[] = [
  { id: "michelin", name: "Michelin Guide", logo: "/logos/michelin.svg", description: "Fine dining standards" },
  { id: "ritz", name: "Ritz-Carlton", logo: "/logos/ritz.svg", description: "Luxury hospitality" },
  { id: "fourseasons", name: "Four Seasons", logo: "/logos/fourseasons.svg", description: "Premium hotels and dining" },
  {
    id: "gordon",
    name: "Gordon Ramsay Restaurants",
    logo: "/logos/gordon-ramsay.svg",
    description: "Fine dining establishments",
  },
  { id: "nobu", name: "Nobu", logo: "/logos/nobu.svg", description: "Fusion cuisine leader" },
]

const tourismCompanies: Company[] = [
  { id: "booking", name: "Booking.com", logo: "/logos/booking.svg", description: "Travel reservations" },
  { id: "agoda", name: "Agoda", logo: "/logos/agoda.svg", description: "Travel and accommodation" },
  { id: "expedia", name: "Expedia", logo: "/logos/expedia.svg", description: "Global travel platform" },
  { id: "airbnb", name: "Airbnb", logo: "/logos/airbnb.svg", description: "Accommodation sharing" },
  { id: "klook", name: "Klook", logo: "/logos/klook.svg", description: "Asian travel experiences" },
]

const hotelCompanies: Company[] = [
  { id: "marriott", name: "Marriott International", logo: "/logos/marriott.svg", description: "Hotel chain leader" },
  { id: "hilton", name: "Hilton Hotels", logo: "/logos/hilton.svg", description: "Global hospitality brand" },
  { id: "iwc", name: "InterContinental Hotels", logo: "/logos/ihg.svg", description: "Premium hotels worldwide" },
  { id: "hyatt", name: "Hyatt Hotels", logo: "/logos/hyatt.svg", description: "Luxury hotel group" },
  { id: "shangri", name: "Shangri-La Hotels", logo: "/logos/shangri-la.svg", description: "Asian luxury hospitality" },
]

// Majors
export const majors: Major[] = [
  { id: "software", name: "Software Engineering", description: "Programming and software development", icon: "💻" },
  { id: "culinary", name: "Culinary", description: "Chef training and culinary arts", icon: "👨‍🍳" },
  { id: "tourism", name: "Tourism Service Business", description: "Tourism and travel services", icon: "✈️" },
  { id: "hotel", name: "Hotel Accommodation", description: "Hotel management and services", icon: "🏨" },
]

// Fields by Major
export const fields: Field[] = [
  // Software Engineering Fields
  { id: "se-web", majorId: "software", name: "Web Development", description: "Frontend and backend web technologies" },
  { id: "se-mobile", majorId: "software", name: "Mobile Development", description: "iOS and Android app development" },
  { id: "se-cloud", majorId: "software", name: "Cloud Computing", description: "Cloud infrastructure and services" },
  { id: "se-ai", majorId: "software", name: "Artificial Intelligence", description: "Machine learning and AI systems" },
  { id: "se-devops", majorId: "software", name: "DevOps Engineering", description: "Infrastructure and deployment" },

  // Culinary Fields
  { id: "c-pastry", majorId: "culinary", name: "Pastry & Baking", description: "Desserts and bread making" },
  { id: "c-fusion", majorId: "culinary", name: "Fusion Cuisine", description: "Modern fusion cooking techniques" },
  { id: "c-french", majorId: "culinary", name: "French Cuisine", description: "Classic French cooking methods" },
  { id: "c-asian", majorId: "culinary", name: "Asian Cuisine", description: "Asian cooking traditions" },
  { id: "c-prep", majorId: "culinary", name: "Food Preparation", description: "Kitchen prep and food safety" },

  // Tourism Fields
  { id: "t-guide", majorId: "tourism", name: "Tour Guiding", description: "Guided tours and customer service" },
  { id: "t-events", majorId: "tourism", name: "Event Planning", description: "Tourism events and experiences" },
  {
    id: "t-booking",
    majorId: "tourism",
    name: "Booking & Reservations",
    description: "Travel reservations and customer support",
  },
  { id: "t-marketing", majorId: "tourism", name: "Tourism Marketing", description: "Tourism promotion and marketing" },
  { id: "t-logistics", majorId: "tourism", name: "Travel Logistics", description: "Travel coordination and planning" },

  // Hotel Accommodation Fields
  { id: "h-reception", majorId: "hotel", name: "Front Desk Management", description: "Guest reception and check-in" },
  { id: "h-housekeeping", majorId: "hotel", name: "Housekeeping", description: "Room management and maintenance" },
  { id: "h-restaurant", majorId: "hotel", name: "Restaurant Operations", description: "Food and beverage services" },
  {
    id: "h-maintenance",
    majorId: "hotel",
    name: "Facilities Management",
    description: "Building maintenance and operations",
  },
  { id: "h-concierge", majorId: "hotel", name: "Concierge Services", description: "Guest services and concierge" },
]

// Sample Internships
export const internships: Internship[] = [
  // Software Engineering - Web Development
  {
    id: "int-1",
    companyId: "google",
    company: techCompanies[0],
    title: "Frontend Developer Intern",
    description:
      "Join our team to build responsive web applications using React and modern JavaScript frameworks. Work on real projects that impact millions of users worldwide.",
    location: "Mountain View, California",
    major: "Software Engineering",
    field: "Web Development",
    requirements: ["HTML/CSS/JavaScript", "React experience", "Git knowledge"],
    duration: "3-6 months",
    salary: "$25-30/hour",
    postedDate: "2025-11-15",
  },
  {
    id: "int-2",
    companyId: "microsoft",
    company: techCompanies[1],
    title: "Full Stack Developer Intern",
    description:
      "Work on end-to-end web solutions using Azure cloud platform. Build scalable applications and learn enterprise-level development practices.",
    location: "Seattle, Washington",
    major: "Software Engineering",
    field: "Web Development",
    requirements: [".NET experience", "SQL databases", "Cloud knowledge"],
    duration: "3 months",
    salary: "$28-32/hour",
    postedDate: "2025-11-10",
  },
  {
    id: "int-3",
    companyId: "amazon",
    company: techCompanies[3],
    title: "Backend Engineer Intern",
    description:
      "Build scalable backend services for AWS. Work with microservices, databases, and distributed systems.",
    location: "Seattle, Washington",
    major: "Software Engineering",
    field: "Web Development",
    requirements: ["Java or Python", "RESTful APIs", "Database design"],
    duration: "4-6 months",
    salary: "$30-35/hour",
    postedDate: "2025-11-08",
  },

  // Software Engineering - Mobile Development
  {
    id: "int-4",
    companyId: "apple",
    company: techCompanies[2],
    title: "iOS Developer Intern",
    description: "Develop mobile applications for Apple ecosystem. Work with Swift and latest iOS technologies.",
    location: "Cupertino, California",
    major: "Software Engineering",
    field: "Mobile Development",
    requirements: ["Swift programming", "iOS SDK", "Mobile UI/UX"],
    duration: "3-6 months",
    salary: "$26-31/hour",
    postedDate: "2025-11-12",
  },
  {
    id: "int-5",
    companyId: "meta",
    company: techCompanies[4],
    title: "Android Developer Intern",
    description: "Build Android applications used by billions. Work on performance optimization and user experience.",
    location: "Menlo Park, California",
    major: "Software Engineering",
    field: "Mobile Development",
    requirements: ["Kotlin/Java", "Android Studio", "Mobile testing"],
    duration: "3 months",
    salary: "$28-33/hour",
    postedDate: "2025-11-05",
  },

  // Software Engineering - Cloud Computing
  {
    id: "int-6",
    companyId: "amazon",
    company: techCompanies[3],
    title: "AWS Cloud Intern",
    description: "Explore cloud infrastructure and DevOps. Work on EC2, S3, Lambda, and other AWS services.",
    location: "Seattle, Washington",
    major: "Software Engineering",
    field: "Cloud Computing",
    requirements: ["AWS basics", "Linux commands", "Networking"],
    duration: "4 months",
    salary: "$27-32/hour",
    postedDate: "2025-11-09",
  },

  // Software Engineering - AI/ML
  {
    id: "int-7",
    companyId: "google",
    company: techCompanies[0],
    title: "Machine Learning Intern",
    description: "Work on TensorFlow and neural networks. Contribute to AI research and development projects.",
    location: "Mountain View, California",
    major: "Software Engineering",
    field: "Artificial Intelligence",
    requirements: ["Python", "Machine learning basics", "TensorFlow/PyTorch"],
    duration: "4-6 months",
    salary: "$29-34/hour",
    postedDate: "2025-11-14",
  },

  // Culinary - Pastry & Baking
  {
    id: "int-8",
    companyId: "michelin",
    company: culinaryCompanies[0],
    title: "Pastry Chef Intern",
    description: "Learn classical pastry techniques and modern dessert creation in a Michelin-starred environment.",
    location: "Paris, France",
    major: "Culinary",
    field: "Pastry & Baking",
    requirements: ["Culinary basics", "Attention to detail", "Passion for pastry"],
    duration: "3 months",
    salary: "$15-18/hour",
    postedDate: "2025-11-11",
  },
  {
    id: "int-9",
    companyId: "ritz",
    company: culinaryCompanies[1],
    title: "Baking Assistant Intern",
    description:
      "Work in the pastry kitchen of Ritz-Carlton, creating breads, pastries, and desserts for luxury events.",
    location: "Paris, France",
    major: "Culinary",
    field: "Pastry & Baking",
    requirements: ["Baking knowledge", "Food safety certification", "Team skills"],
    duration: "4 months",
    salary: "$16-19/hour",
    postedDate: "2025-11-07",
  },

  // Culinary - Fusion Cuisine
  {
    id: "int-10",
    companyId: "nobu",
    company: culinaryCompanies[4],
    title: "Fusion Chef Intern",
    description: "Master contemporary fusion cuisine combining Japanese techniques with international flavors.",
    location: "New York, New York",
    major: "Culinary",
    field: "Fusion Cuisine",
    requirements: ["Cooking fundamentals", "Cultural awareness", "Precision"],
    duration: "3 months",
    salary: "$18-22/hour",
    postedDate: "2025-11-13",
  },

  // Tourism - Tour Guiding
  {
    id: "int-11",
    companyId: "booking",
    company: tourismCompanies[0],
    title: "Tour Guide Intern",
    description: "Lead guided tours for international travelers, sharing cultural knowledge and hospitality.",
    location: "Amsterdam, Netherlands",
    major: "Tourism Service Business",
    field: "Tour Guiding",
    requirements: ["Language skills", "Local knowledge", "Communication skills"],
    duration: "3-6 months",
    salary: "$12-16/hour",
    postedDate: "2025-11-06",
  },

  // Tourism - Booking & Reservations
  {
    id: "int-12",
    companyId: "agoda",
    company: tourismCompanies[1],
    title: "Reservations Specialist Intern",
    description: "Support booking operations and customer service for a leading Asian travel platform.",
    location: "Bangkok, Thailand",
    major: "Tourism Service Business",
    field: "Booking & Reservations",
    requirements: ["Customer service", "Booking systems", "Communication"],
    duration: "4 months",
    salary: "$10-14/hour",
    postedDate: "2025-11-04",
  },

  // Hotel - Front Desk Management
  {
    id: "int-13",
    companyId: "marriott",
    company: hotelCompanies[0],
    title: "Front Desk Intern",
    description: "Provide excellent guest service at the front desk of a world-class Marriott hotel.",
    location: "Dubai, United Arab Emirates",
    major: "Hotel Accommodation",
    field: "Front Desk Management",
    requirements: ["Customer service", "Hotel systems", "Language skills"],
    duration: "3 months",
    salary: "$11-15/hour",
    postedDate: "2025-11-16",
  },

  // Hotel - Housekeeping
  {
    id: "int-14",
    companyId: "hilton",
    company: hotelCompanies[1],
    title: "Housekeeping Intern",
    description: "Learn professional housekeeping standards maintaining luxury hotel rooms and facilities.",
    location: "Singapore, Singapore",
    major: "Hotel Accommodation",
    field: "Housekeeping",
    requirements: ["Attention to detail", "Physical fitness", "Team coordination"],
    duration: "3 months",
    salary: "$10-13/hour",
    postedDate: "2025-11-03",
  },

  // Hotel - Restaurant Operations
  {
    id: "int-15",
    companyId: "shangri",
    company: hotelCompanies[4],
    title: "F&B Service Intern",
    description: "Work in food and beverage services at Shangri-La, learning luxury hospitality standards.",
    location: "Hong Kong, Hong Kong",
    major: "Hotel Accommodation",
    field: "Restaurant Operations",
    requirements: ["Food service basics", "Etiquette knowledge", "Languages"],
    duration: "4 months",
    salary: "$12-16/hour",
    postedDate: "2025-11-02",
  },
]

export function getInternshipsByMajor(majorId: string): Internship[] {
  return internships.filter((i) => i.major === majors.find((m) => m.id === majorId)?.name)
}

export function getInternshipsByField(fieldId: string): Internship[] {
  const field = fields.find((f) => f.id === fieldId)
  return internships.filter((i) => i.field === field?.name)
}

export function getFieldsByMajor(majorId: string): Field[] {
  return fields.filter((f) => f.majorId === majorId)
}

export function getMajorById(majorId: string): Major | undefined {
  return majors.find((m) => m.id === majorId)
}

export function getFieldById(fieldId: string): Field | undefined {
  return fields.find((f) => f.id === fieldId)
}

export function getInternshipById(internshipId: string): Internship | undefined {
  return internships.find((i) => i.id === internshipId)
}
