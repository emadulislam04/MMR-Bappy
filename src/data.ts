import { Project, Experience, Skill } from "./types";

export const PERSONAL_INFO = {
  name: "Md Muhyminur Rahman Bappy",
  nickname: "Bappy",
  title: "Senior Apparel Merchandiser & Textile Engineer",
  subTitle: "8+ Years of proven success in Woven, Knit, and Denim apparel. Specialist in Costing, Sourcing, International Buyer Management, and End-to-End Product Execution.",
  photoUrl: "https://media.licdn.com/dms/image/v2/D5603AQEKMyblV5RPCA/profile-displayphoto-crop_800_800/B56Z2Q0QWQKkAI-/0/1776251123794?e=1782950400&v=beta&t=Rq0N-zF1cRebtFmHIMbVOCihcHhKzriiCJoP-4NQSLo",
  email: "mmrbappy07@gmail.com",
  phone: "+8801911543922",
  whatsapp: "https://wa.me/8801911543922",
  linkedin: "https://www.linkedin.com/in/mmrbappy07/",
  location: "Dhaka, Bangladesh",
  bio: "Highly analytical and detail-oriented Textile Engineer & Merchandising Professional with over 8 years of hands-on experience under prestigious clothing groups. Proven record in managing high-volume international buyers, formulating precise costings, sourcing elite accessories, and ensuring seamless T&A coordination from fiber to final shipment.",
  stats: [
    { label: "Apparel Experience", value: "8+ Years" },
    { label: "Buyers Managed", value: "18+ Brands" },
    { label: "Shipment Success Rate", value: "99.4%" },
    { label: "Annual Pieces Shipped", value: "2.4M+ Units" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "woven-project-1",
    title: "Promod France Autumn Outerwear Series",
    description: "End-to-end merchandising operation for a premium woven jacket collection, managing tight fabric costings and precision dyeing approvals.",
    longDescription: "Orchestrated the entire supply pipeline for Europe including sourcing heavy organic twill, managing prototype fitting rounds with Promod's tech team, and executing bulk shipments within a tight 75-day turnaround window. Managed an initial order of 45,000 pieces with zero quality failures.",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
    tags: ["Woven Twill", "Yarn Dyeing", "Promod France", "Heavy Outerwear", "Time & Action (T&A)"],
    featured: true,
    category: "Woven"
  },
  {
    id: "denim-project-2",
    title: "Eco-Denim Smart Costing Architecture",
    description: "Structured high-load cost model for sustainable wash denim jeans, decreasing material waste margins during high-throughput garment manufacture.",
    longDescription: "Developed a comprehensive fabric utilization framework for European partners, lowering fabric waste during grading by 3.8%. Managed water-saving dye processes, accessory sourcing, and certified Oeko-Tex metal trim compliance checks.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    tags: ["Eco Dyeing", "Laid Consumption", "Costing Analytics", "Oeko-Tex Standard", "Denim Sourcing"],
    featured: true,
    category: "Denim"
  },
  {
    id: "knit-project-3",
    title: "Gemo Casualwear Active Knits Execution",
    description: "Engineered and delivered a high-volume knitwear contract consisting of active shirts and fleece hoodies under tight European timelines.",
    longDescription: "Coordinated circular knitting schedules from premium combed cotton, arranged laboratory tests for GSM color fastness, and structured trims bookings. The final delivery comprised 120,000 units with audited compliance status.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    tags: ["GSM Verification", "Combed Knit Cotton", "Gemo", "Accessories Integration", "Trims Sourcing"],
    featured: true,
    category: "Knit"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-eco",
    role: "Senior Merchandiser",
    company: "ECO Sourcing Limited",
    location: "Dhaka, Bangladesh · On-site",
    period: "Jun 2026 - Present",
    description: [
      "Managing end-to-end costings, buyer negotiations, sampling lines, and apparel production schedules.",
      "Sourcing specialty trims and negotiating optimal raw material prices with global textile supply chains."
    ],
    skills: ["Costing & Negotiations", "Sampling Processes", "Production Planning", "Trims Sourcing", "Effective Communication", "Shipping & Compliance"]
  },
  {
    id: "exp-crossline",
    role: "Merchandiser",
    company: "Crossline Bangladesh Ltd",
    location: "Banani, Dhaka 1213, Bangladesh · On-site",
    period: "October 2018 - March 2026",
    description: [
      "Handled costing & price negotiations, achieving 8–12% overall cost optimization",
      "Managed 800+ customer orders across multiple product categories efficiently",
      "Coordinated 2000+ sample developments with timely approvals and follow-ups",
      "Sourced accessories, trims, and ensured 100% raw material readiness for production",
      "Monitored production workflow, maintaining 95%+ operational efficiency consistently",
      "Ensured 98%+ on-time delivery through active production follow-ups",
      "Managed buyer and supplier communication for smooth coordination flow",
      "Prepared detailed order sheets, shipping documents, and ensured 100% accuracy"
    ],
    buyers: "CAMAIEU (Woven Top & Bottom) • PROMOD (Woven Top & Bottom) • DISTRICENTER (Woven Top & Bottom) • GEMO (Woven Top & Bottom) • TAO (Woven Top & Bottom)",
    skills: ["Costing & Negotiations", "Order Execution", "Sample Development", "Sourcing Trims", "Workflow Monitoring", "On-Time Delivery", "Buyer Follow Up"]
  },
  {
    id: "exp-michaelson",
    role: "Assistant Merchandiser",
    company: "Michelson Emmanuel Sourcing",
    location: "Banani, Dhaka 1212, Bangladesh · On-site",
    period: "April 2016 - October 2018",
    description: [
      "Managed end-to-end product development & sampling, coordinating 400+ samples with approvals",
      "Conducted market & product analysis across categories, generating insights for optimization",
      "Booked and tracked 65+ customer orders, ensuring smooth execution and flow",
      "Ensured 100% raw material readiness for uninterrupted production",
      "Monitored production workflow, maintaining 95%+ operational efficiency",
      "Achieved 98%+ on-time delivery through production follow-ups",
      "Coordinated internal & external communication for seamless execution",
      "Prepared order sheets & shipping documents with 100% accuracy"
    ],
    buyers: "ALL SIZE COMPANY A/S • SUIT, NORTH, REPLICA (Woven Top) • TAILORED & ORIGINAL, SOLID (Knit & Woven Top) • CNS GROUP • FIVE BROTHERS (Woven Top) • POINT ZERO (Woven Top)",
    skills: ["Product Development", "Sampling line", "Order Booking", "Raw Materials Readiness", "Efficiency Monitoring", "Communication Coordination", "Shipping Documents"]
  },
  {
    id: "exp-linkon",
    role: "Assistant Merchandiser",
    company: "Linkon Fashion Ltd",
    location: "Mirpur-10, Shanpara, Parbota, Dhaka · On-site",
    period: "March 2015 - April 2016",
    description: [
      "Reduced costs by 8–12% through strategic pricing and negotiation while maintaining quality",
      "Managed 40+ orders and coordinated sample developments with smooth execution",
      "Maintained 95%+ production efficiency and achieved 98%+ on-time delivery",
      "Handled supplier communication and documentation with near 100% accuracy"
    ],
    buyers: "SONNY BONO (Woven Bottom) • CARRY SP Z O.O (Woven Bottom) • ROBI TEX (Knit & Woven Top & Bottom) • CANADA HOUSE (Woven Bottom) • SKIVA INTERNATIONAL INC (Woven Top)",
    skills: ["Cost Optimization", "Pricing & Negotiation", "Supplier Communication", "Documentation Accuracy", "Production Efficiency"]
  }
];

export const SKILLS: Skill[] = [
  // Professional
  { name: "Costing & Price Negotiation", category: "merchandising", level: 98, iconName: "scale" },
  { name: "Production Goal & Workflow T&A", category: "merchandising", level: 95, iconName: "calendar" },
  { name: "Supplier & Buyer Coordination", category: "merchandising", level: 96, iconName: "users" },
  { name: "Time Management & Multitasking", category: "merchandising", level: 94, iconName: "clock" },
  
  // Sourcing
  { name: "Yarn & Raw Fabric Sourcing", category: "sourcing", level: 94, iconName: "box" },
  { name: "Accessories & Trim Supply Chains", category: "sourcing", level: 95, iconName: "scissors" },
  { name: "Local & Global Spinning Mills", category: "sourcing", level: 91, iconName: "globe" },

  // Compliance
  { name: "Quality Control & Assurance QA/QC", category: "compliance", level: 95, iconName: "check" },
  { name: "Document Audit & Record Accuracy", category: "compliance", level: 98, iconName: "award" },

  // Technical
  { name: "Microsoft Excel Data Analysis", category: "technical", level: 95, iconName: "file-spreadsheet" },
  { name: "Wet Processing & Dye Specialty", category: "technical", level: 93, iconName: "droplet" },
  { name: "SMV & Cycle-Time Work Study", category: "technical", level: 89, iconName: "cpu" }
];
