/**
 * Centralized Portfolio Projects Data for DeepNova AI Website
 *
 * Full detailed specifications, features, workflows, and metrics
 * for each of the 5 portfolio projects matching deepnovaai.com exactly.
 */

export interface ProjectFeature {
  title: string;
  description?: string;
}

export interface HowItWorksStep {
  step?: number;
  title: string;
  description?: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  image: string;
  secondaryImage?: string;
  video?: string;
  cardGridTitle?: string;
  showcaseTitle?: string;
  showcaseItems?: string[];
  benefitsTitle?: string;
  stats?: ProjectStat[];
  targetAudience?: string[];
  capabilities?: string[];
  coreFeatures: ProjectFeature[];
  benefits: string[];
  howItWorks: HowItWorksStep[];
  howItWorksItems?: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    slug: "certificate-automation-platform",
    title: "Certificate Automation Platform",
    tagline: "AI-Powered Certificate Generation",
    overview:
      "Eliminate manual data entry and reduce certificate generation time from hours to minutes. Our AI-powered platform extracts the specifications from your PDFs, validates data automatically, and generates professional test reports — all from one unified dashboard.",
    image: "/images/portfolio/portfolio-1.webp",
    secondaryImage: "/images/portfolio/portfolio-1-sub.webp",
    video: "/api/video/Certificate-Automation-Platform.mp4",
    cardGridTitle: "CORE FEATURES",
    coreFeatures: [
      { title: "AI-powered PDF data extraction" },
      { title: "Professional document generation" },
      { title: "Real-time data editing" },
      { title: "Cloud document management" },
      { title: "Multi-user collaboration" },
    ],
    showcaseTitle: "PLATFORM CAPABILITIES",
    showcaseItems: [
      "Parallel AI processing",
      "Smart data normalization",
      "Flexible export options",
      "Secure cloud storage",
      "Mobile responsive review",
    ],
    benefitsTitle: "KEY BENEFITS",
    benefits: [
      "95% time savings per certificate",
      "Eliminate manual data entry errors",
      "Generate multiple document types",
      "Reduce processing costs by 90%+",
      "Accelerate customer delivery times",
      "Centralized cloud document archive",
    ],
    howItWorks: [
      { step: 1, title: "Upload customer test reports" },
      { step: 2, title: "AI extracts all data automatically" },
      { step: 3, title: "Review and edit extracted information" },
      { step: 4, title: "Generate professional certificates instantly" },
      { step: 5, title: "Download or store in cloud" },
    ],
    howItWorksItems: [
      "Upload customer test reports",
      "AI extracts all data automatically",
      "Review and edit extracted information",
      "Generate professional certificates instantly",
      "Download or store in cloud",
    ],
    stats: [
      { value: "95%", label: "Time Savings per Certificate" },
      { value: "90%+", label: "Processing Cost Reduction" },
      { value: "100%", label: "Automated Data Validation" },
    ],
  },
  {
    id: 2,
    slug: "ai-powered-quotation-generator",
    title: "AI Powered Quotation Generator",
    tagline: "Smarter, Faster Quotation Management",
    overview:
      "Automate your quotation process with our AI-powered platform. Instantly convert customer inquiries into structured quotations, edit Terms & Conditions with simple instructions, and export branded files in multiple formats — all from centralized systems.",
    image: "/images/portfolio/portfolio-2.png",
    secondaryImage: "/images/portfolio/portfolio-2.png",
    video: "/api/video/AI-Powerd-BOQ-Generator.mp4",
    cardGridTitle: "PLATFORM CAPABILITIES",
    coreFeatures: [
      { title: "Convert customer inquiry PDFs into structured quotations" },
      { title: "AI extracts product & specifications instantly" },
      { title: "Smart matching with your product database" },
      { title: "Generate ready professional quotations" },
      { title: "Edit documents using simple instructions" },
      { title: "Preserve original formatting" },
      { title: "Export Quotations as Per Requirement" },
    ],
    showcaseTitle: "IMPACT STATS",
    showcaseItems: [
      "95% Time Savings",
      "₹10+ Lakh Annual Cost Savings",
      "98.5% Accuracy Level",
      "5-10 minutes per quotation",
      "AI-assisted editing with 98.5% accuracy",
    ],
    benefitsTitle: "PERFECT FOR",
    benefits: [
      "Manufacturers",
      "Distributors & Dealers",
      "Sales Teams",
      "Management Teams",
      "MSME Businesses",
    ],
    howItWorks: [
      { step: 1, title: "Upload customer inquiry" },
      { step: 2, title: "AI extracts specifications" },
      { step: 3, title: "Smart database matching" },
      { step: 4, title: "Auto-generate quotation" },
      { step: 5, title: "Export Quotations as Per Requirement" },
    ],
    howItWorksItems: [
      "Upload customer inquiry",
      "AI extracts specifications",
      "Smart database matching",
      "Auto-generate quotation",
      "Export Quotations as Per Requirement",
    ],
    stats: [
      { value: "95%", label: "Time Savings" },
      { value: "₹10L+", label: "Annual Cost Savings" },
      { value: "98.5%", label: "Accuracy Level" },
    ],
  },
  {
    id: 3,
    slug: "business-management-platform",
    title: "Business Management Platform",
    tagline: "Streamline Your Business Operations in One Place",
    overview:
      "Transform your business operations with comprehensive management platform. Track inquiries, generate quotations, manage purchase orders, create invoices, and monitor financial sustainability — all from one unified dashboard with real-time insights and automated workflows.",
    image: "/images/portfolio/portfolio-3.png",
    secondaryImage: "/images/portfolio/portfolio-3.png",
    video: "/api/video/Business-Management-Platform.mp4",
    cardGridTitle: "CORE FEATURES",
    coreFeatures: [
      { title: "Inquiry & Lead Management" },
      { title: "Quotation Generation" },
      { title: "Purchase Order Management" },
      { title: "Invoice Generation & Tracking" },
      { title: "Additional Supply Management" },
      { title: "Financial Sustainability Dashboard" },
    ],
    showcaseTitle: "WHO SHOULD USE",
    showcaseItems: [
      "Business Owners",
      "Sales Teams",
      "Project Managers",
      "Finance Departments",
      "Operations Managers",
      "Administrative Staff",
      "Manufacturing Companies",
      "B2B Service Providers",
    ],
    benefitsTitle: "KEY BENEFITS",
    benefits: [
      "Automated workflows save time",
      "AI-powered document processing",
      "Real-time financial insights",
      "Improved order tracking",
      "Automated email notifications",
      "Role-based security",
      "Scalable cloud-ready architecture",
    ],
    howItWorks: [
      { step: 1, title: "Set up companies and contacts in master database" },
      { step: 2, title: "Generate quotations with automatic revision control" },
      { step: 3, title: "Convert to purchase orders with AI PDF extraction" },
      { step: 4, title: "Generate invoices with auto-numbering" },
      { step: 5, title: "Track payments and deliveries in real time" },
      { step: 6, title: "Monitor financial sustainability daily" },
      { step: 7, title: "Receive automated email alerts and reminders" },
    ],
    howItWorksItems: [
      "Set up companies and contacts in master database",
      "Generate quotations with automatic revision control",
      "Convert to purchase orders with AI PDF extraction",
      "Generate invoices with auto-numbering",
      "Track payments and deliveries in real time",
      "Monitor financial sustainability daily",
      "Receive automated email alerts and reminders",
    ],
    stats: [
      { value: "360°", label: "Business Visibility" },
      { value: "60%", label: "Faster PO Processing" },
      { value: "100%", label: "Automated Reconciliation" },
    ],
  },
  {
    id: 4,
    slug: "smart-business-intelligence-platform",
    title: "Smart Business Intelligence Platform",
    tagline: "Power Your Business with Data-Driven Insights",
    overview:
      "Make smarter business decisions with our advanced Business Intelligence platform. Connect your data, visualize performance, track KPIs, and manage operations from one unified dashboard — in real time.",
    image: "/images/portfolio/portfolio-4.webp",
    secondaryImage: "/images/portfolio/portfolio-4.webp",
    video: "/api/video/Smart-Business-Intelligence-dashboard.mp4",
    cardGridTitle: "BUSINESS USE CASES",
    coreFeatures: [
      { title: "Sales performance tracking" },
      { title: "Inventory & operations monitoring" },
      { title: "Financial reporting" },
      { title: "Customer behavior analysis" },
      { title: "Department performance review" },
    ],
    showcaseTitle: "CORE FEATURES",
    showcaseItems: [
      "Interactive real-time dashboards",
      "Visual reports and smart charts",
      "Live performance monitoring",
      "Integrated with ERP, CRM, Excel, databases, apps, SAP",
      "Predictive Analytics",
      "Custom report builder",
      "Personalized dashboard views",
      "KPI & metric tracking",
      "Define and monitor key business goals",
      "Instant performance visibility",
    ],
    benefitsTitle: "KEY BENEFITS",
    benefits: [
      "Faster decision making",
      "Multiple Business Insights",
      "Clear data visualization",
      "One platform for all reports",
      "Reduced manual reporting work",
      "Better forecasting & planning",
      "Improved business control",
    ],
    howItWorks: [
      { step: 1, title: "Connect your data sources" },
      { step: 2, title: "Build smart dashboards" },
      { step: 3, title: "Track KPIs in real time" },
      { step: 4, title: "Make data-driven decisions" },
    ],
    howItWorksItems: [
      "Connect your data sources",
      "Build smart dashboards",
      "Track KPIs in real time",
      "Make data-driven decisions",
    ],
    stats: [
      { value: "10x", label: "Faster Decisions" },
      { value: "30+", label: "Data Integrations" },
      { value: "24/7", label: "Live Monitoring" },
    ],
  },
  {
    id: 5,
    slug: "ai-powered-smart-inventory-counting-system",
    title: "AI-Powered Smart Inventory Counting System",
    tagline:
      "Automate warehouse stock counting with AI-powered photo detection and real-time inventory synchronization.",
    overview:
      "Modernize your warehouse operations with our AI-based mobile app and web dashboard. Capture a photo to count stock automatically, extract product label data, and sync everything to a centralized dashboard in real time.",
    image: "/images/portfolio/portfolio-5.png",
    secondaryImage: "/images/portfolio/portfolio-5-sub.png",
    video: "/api/video/Inventory%20final%20video.mp4",
    cardGridTitle: "MOBILE APP FEATURES",
    coreFeatures: [
      {
        title: "AI photo-based stock counting — no manual counting required",
      },
      {
        title: "Detects and counts visible product boxes instantly",
      },
      {
        title:
          "Automatic label data extraction (Product Name, Batch No., Expiry Date)",
      },
      {
        title: "Real-time scan preview and verification",
      },
      {
        title: "Multi-warehouse tagging support",
      },
      {
        title: "Easy warehouse switching inside the app",
      },
    ],
    showcaseTitle: "WEB DASHBOARD FEATURES",
    showcaseItems: [
      "Centralized live inventory database",
      "Real-time sync from all mobile users",
      "Multi-location warehouse tracking",
      "Filter and manage stock by location",
      "Customizable data fields & parameters",
      "Automatic digital record keeping",
    ],
    benefitsTitle: "KEY BENEFITS",
    benefits: [
      "Faster stock audits",
      "Reduced human errors",
      "No paperwork or spreadsheets",
      "Real-time inventory visibility",
      "Multi-warehouse control",
      "AI-driven automation",
    ],
    howItWorks: [
      { step: 1, title: "Capture product image" },
      { step: 2, title: "AI counts & reads label data" },
      { step: 3, title: "Verify results" },
      { step: 4, title: "Auto sync to dashboard" },
    ],
    howItWorksItems: [
      "Capture product image",
      "AI counts & reads label data",
      "Verify results",
      "Auto sync to dashboard",
    ],
    stats: [
      { value: "85%", label: "Faster Audits" },
      { value: "99%", label: "CV Accuracy" },
      { value: "100%", label: "Paperless" },
    ],
  },
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}
