import {
  ShoppingCart,
  Shirt,
  ClipboardList,
  Pill,
  HardHat,
  PartyPopper,
  UtensilsCrossed,
  Users,
  Megaphone,
  ChefHat,
  FileText,
  Calculator,
  Boxes,
  HeartPulse,
  Truck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Jobs + categories (single source of truth for all pages)          */
/* ------------------------------------------------------------------ */

export type Job = {
  title: string;
  slug: string;
  locationType: string; // "Across Europe" | "Hybrid"
  workType: string; // Full-time / Part-time / Flexible shifts
  experience: string; // experience level
  training: string; // Yes / For selected roles / Not required
  languages: string; // English / Local language helpful / Varies by employer
  description: string; // 1-2 sentences
};

export type Category = {
  name: string;
  slug: string;
  icon: LucideIcon;
  tagline: string; // short line under the H1
  description: string; // intro paragraph
  image: string; // category hero image
  jobs: Job[];
};

export const categories: Category[] = [
  {
    name: "Grocery Retail",
    slug: "grocery-retail",
    icon: ShoppingCart,
    tagline:
      "Customer-facing and stock roles in supermarkets and grocery stores across Europe.",
    description:
      "Grocery retail is one of the most accessible ways to start or grow a career, with stores hiring year-round across Europe. From the shop floor to supervision, many roles need no prior experience and offer flexible hours.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Grocery Assistant",
        slug: "grocery-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Serve customers, restock shelves and keep the shop floor tidy in busy grocery stores. A great first step into retail.",
      },
      {
        title: "Store Supervisor",
        slug: "store-supervisor",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "1+ year retail preferred",
        training: "For selected roles",
        languages: "Local language helpful",
        description:
          "Lead a small shop-floor team, manage shifts and support daily store operations.",
      },
      {
        title: "Fresh Food / Deli Assistant",
        slug: "fresh-food-deli-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Prepare, weigh and serve fresh produce, deli and bakery items while following food-safety standards.",
      },
      {
        title: "Stock Controller",
        slug: "stock-controller",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "Varies by employer",
        description:
          "Track inventory, manage deliveries and keep stock levels accurate across the store.",
      },
    ],
  },
  {
    name: "Fashion & Non-Food Retail",
    slug: "fashion-retail",
    icon: Shirt,
    tagline: "Style-led retail roles in fashion, homeware and department stores.",
    description:
      "Fashion and lifestyle retailers across Europe look for people who love helping customers and presenting products beautifully. Roles range from the shop floor to store leadership, with training often provided.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Sales Assistant",
        slug: "sales-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Greet customers, offer styling advice and handle the till in fashion and lifestyle stores.",
      },
      {
        title: "Visual Merchandiser",
        slug: "visual-merchandiser",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Create eye-catching window and in-store displays that bring the brand to life and drive sales.",
      },
      {
        title: "Store Manager",
        slug: "store-manager",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "2+ years retail preferred",
        training: "For selected roles",
        languages: "Local language helpful",
        description:
          "Run the store end to end: team, targets, stock and customer experience.",
      },
      {
        title: "Stockroom Assistant",
        slug: "stockroom-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Receive deliveries, organise the stockroom and keep the shop floor replenished.",
      },
    ],
  },
  {
    name: "Buyers & Merchandisers",
    slug: "buyers-merchandisers",
    icon: ClipboardList,
    tagline: "Commercial roles planning ranges, pricing and product for retailers.",
    description:
      "Buying and merchandising teams decide what ends up on the shelves and online. These commercial, data-driven roles suit organised people who enjoy analysis, negotiation and working with suppliers.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Assistant Buyer",
        slug: "assistant-buyer",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Junior / 1+ year preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Support senior buyers with supplier research, sampling and order management for retail ranges.",
      },
      {
        title: "Merchandising Assistant",
        slug: "merchandising-assistant",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Help plan stock levels, analyse sales data and keep product availability on track.",
      },
      {
        title: "Category Coordinator",
        slug: "category-coordinator",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Coordinate product categories, pricing updates and promotions with internal teams.",
      },
      {
        title: "Product Planner",
        slug: "product-planner",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "1+ year preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Forecast demand and plan product flow so the right items arrive at the right time.",
      },
    ],
  },
  {
    name: "Pharmacy Jobs",
    slug: "pharmacy",
    icon: Pill,
    tagline: "Support roles in community and retail pharmacies.",
    description:
      "Pharmacies need friendly, reliable people to support pharmacists and serve the public. Many roles welcome newcomers with on-the-job training, while technical positions offer a clear path to qualify.",
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Pharmacy Assistant",
        slug: "pharmacy-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Serve customers, manage stock and support pharmacists with day-to-day tasks.",
      },
      {
        title: "Pharmacy Technician",
        slug: "pharmacy-technician",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Qualification or training required",
        training: "For selected roles",
        languages: "Local language helpful",
        description:
          "Prepare and dispense medicines accurately under pharmacist supervision.",
      },
      {
        title: "OTC Sales Assistant",
        slug: "otc-sales-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Advise customers on over-the-counter products and handle sales at the counter.",
      },
      {
        title: "Dispensary Support",
        slug: "dispensary-support",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Assist the dispensary team with labelling, stock rotation and prescription handling.",
      },
    ],
  },
  {
    name: "Construction & Engineering",
    slug: "construction-engineering",
    icon: HardHat,
    tagline: "On-site and technical roles across building and engineering projects.",
    description:
      "Construction and engineering projects across Europe need people at every level, from general site support to junior engineers. Many roles offer training, safety certification and strong progression.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Site Labourer",
        slug: "site-labourer",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Support trades on site with materials handling, site prep and general labour.",
      },
      {
        title: "Junior Site Engineer",
        slug: "junior-site-engineer",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Junior / degree welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Assist with setting out, measurements and quality checks on construction projects.",
      },
      {
        title: "Maintenance Technician",
        slug: "maintenance-technician",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "Varies by employer",
        description:
          "Carry out repairs and planned maintenance on buildings, plant and equipment.",
      },
      {
        title: "Health & Safety Assistant",
        slug: "health-safety-assistant",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "English",
        description:
          "Support site safety inspections, documentation and compliance with regulations.",
      },
    ],
  },
  {
    name: "Events",
    slug: "events",
    icon: PartyPopper,
    tagline: "Flexible roles delivering concerts, conferences, festivals and brand events.",
    description:
      "The events industry runs on energetic, reliable people. Roles are often flexible and shift-based, making them ideal alongside studies or other commitments — and a fun way to gain experience.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Event Staff",
        slug: "event-staff",
        locationType: "Across Europe",
        workType: "Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Help set up, run and pack down events — from festivals to corporate conferences.",
      },
      {
        title: "Brand Ambassador",
        slug: "brand-ambassador",
        locationType: "Across Europe",
        workType: "Flexible shifts / Part-time",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Represent brands at events, engage the public and create memorable experiences.",
      },
      {
        title: "Event Coordinator Assistant",
        slug: "event-coordinator-assistant",
        locationType: "Hybrid",
        workType: "Full-time / Flexible shifts",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Support event planning, supplier coordination and on-the-day logistics.",
      },
      {
        title: "Ticketing / Guest Services Assistant",
        slug: "ticketing-guest-services-assistant",
        locationType: "Across Europe",
        workType: "Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Welcome guests, manage check-in and handle ticketing at venue entrances.",
      },
    ],
  },
  {
    name: "Hotel & Catering",
    slug: "hotel-catering",
    icon: UtensilsCrossed,
    tagline: "Hospitality roles in hotels, restaurants, bars and catering.",
    description:
      "Hospitality is hiring across Europe all year round, from seasonal resorts to city-centre hotels and restaurants. Most roles welcome newcomers, provide training and offer flexible shifts.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Waiter / Waitress",
        slug: "waiter-waitress",
        locationType: "Across Europe",
        workType: "Part-time / Full-time / Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Take orders, serve food and drinks and deliver friendly service in restaurants and hotels.",
      },
      {
        title: "Kitchen Porter",
        slug: "kitchen-porter",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Keep the kitchen clean, wash up and support chefs during busy service.",
      },
      {
        title: "Housekeeping Assistant",
        slug: "housekeeping-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Clean and prepare guest rooms to a high standard in hotels and resorts.",
      },
      {
        title: "Barista",
        slug: "barista",
        locationType: "Across Europe",
        workType: "Part-time / Flexible shifts",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Make quality coffee, serve customers and keep the bar area running smoothly.",
      },
      {
        title: "Reception Assistant",
        slug: "reception-assistant",
        locationType: "Across Europe",
        workType: "Full-time / Flexible shifts",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English / Local language helpful",
        description:
          "Welcome guests, manage check-in/out and handle bookings at the front desk.",
      },
    ],
  },
  {
    name: "Human Resources",
    slug: "human-resources",
    icon: Users,
    tagline: "People and HR support roles for growing organisations.",
    description:
      "HR teams keep organisations running by looking after their people. These roles suit organised, people-focused candidates and often offer a hybrid setup and clear progression into specialist areas.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "HR Assistant",
        slug: "hr-assistant",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Support the HR team with records, onboarding and day-to-day employee queries.",
      },
      {
        title: "Recruitment Coordinator",
        slug: "recruitment-coordinator",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Schedule interviews, manage candidates and keep hiring processes running smoothly.",
      },
      {
        title: "Payroll Administrator",
        slug: "payroll-administrator",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "1+ year preferred",
        training: "For selected roles",
        languages: "Varies by employer",
        description:
          "Process payroll accurately and on time and resolve pay-related queries.",
      },
      {
        title: "People Operations Assistant",
        slug: "people-operations-assistant",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Help improve employee experience through HR systems, data and internal support.",
      },
    ],
  },
  {
    name: "Sales & Marketing",
    slug: "sales-marketing",
    icon: Megaphone,
    tagline: "Commercial roles that grow brands, pipelines and revenue.",
    description:
      "Sales and marketing roles reward drive and people skills more than a specific background. From field promotion to account management, there are opportunities across Europe for all experience levels.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Sales Representative",
        slug: "sales-representative",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "All backgrounds",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Build relationships, present products and close deals with new and existing customers.",
      },
      {
        title: "Marketing Assistant",
        slug: "marketing-assistant",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Support campaigns across social, email and content to grow brand awareness.",
      },
      {
        title: "Field Promoter",
        slug: "field-promoter",
        locationType: "Across Europe",
        workType: "Part-time / Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Promote products in stores and at events, engaging customers face to face.",
      },
      {
        title: "Account Executive",
        slug: "account-executive",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Manage client accounts, spot opportunities and hit sales targets.",
      },
    ],
  },
  {
    name: "Chef Jobs",
    slug: "chef",
    icon: ChefHat,
    tagline: "Kitchen roles from entry level to experienced chefs.",
    description:
      "Kitchens across Europe are always looking for talent, whether you're just starting out or ready to run a section. Training and progression are common, and demand is high in hotels, restaurants and catering.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Commis Chef",
        slug: "commis-chef",
        locationType: "Across Europe",
        workType: "Full-time / Flexible shifts",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Learn the trade preparing ingredients and supporting senior chefs across kitchen sections.",
      },
      {
        title: "Chef de Partie",
        slug: "chef-de-partie",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "Varies by employer",
        description:
          "Run your own section of the kitchen and deliver dishes to a high standard.",
      },
      {
        title: "Kitchen Assistant",
        slug: "kitchen-assistant",
        locationType: "Across Europe",
        workType: "Part-time / Full-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Prep ingredients, support chefs and keep the kitchen clean and organised.",
      },
      {
        title: "Pastry Assistant",
        slug: "pastry-assistant",
        locationType: "Across Europe",
        workType: "Full-time / Flexible shifts",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Help produce breads, desserts and pastries alongside the pastry team.",
      },
    ],
  },
  {
    name: "Office & Administrative",
    slug: "office-admin",
    icon: FileText,
    tagline: "Organised support roles that keep workplaces running.",
    description:
      "Administrative roles are the backbone of every organisation. They suit detail-oriented, organised people and are a reliable entry point into office-based careers, often with hybrid working available.",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Administrative Assistant",
        slug: "administrative-assistant",
        locationType: "Hybrid",
        workType: "Full-time / Part-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English / Local language helpful",
        description:
          "Handle scheduling, correspondence and documents to keep the office running smoothly.",
      },
      {
        title: "Data Entry Clerk",
        slug: "data-entry-clerk",
        locationType: "Hybrid",
        workType: "Full-time / Part-time",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Enter and maintain accurate records and data across company systems.",
      },
      {
        title: "Receptionist",
        slug: "receptionist",
        locationType: "Across Europe",
        workType: "Full-time / Part-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "Local language helpful",
        description:
          "Be the welcoming first point of contact, managing calls, visitors and bookings.",
      },
      {
        title: "Office Coordinator",
        slug: "office-coordinator",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Coordinate facilities, suppliers and day-to-day office operations.",
      },
    ],
  },
  {
    name: "Accounting & Finance",
    slug: "accounting-finance",
    icon: Calculator,
    tagline: "Finance support and analyst roles for all experience levels.",
    description:
      "Finance teams need accurate, numerate people at every level. From accounts support to junior analysis, these roles offer structure, progression and often hybrid working across European employers.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Accounts Assistant",
        slug: "accounts-assistant",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Support the finance team with invoices, reconciliations and record keeping.",
      },
      {
        title: "Payroll Assistant",
        slug: "payroll-assistant",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "Varies by employer",
        description:
          "Help process payroll, check timesheets and answer pay queries.",
      },
      {
        title: "Junior Financial Analyst",
        slug: "junior-financial-analyst",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Junior / degree welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Analyse financial data and build reports that support business decisions.",
      },
      {
        title: "Bookkeeping Assistant",
        slug: "bookkeeping-assistant",
        locationType: "Hybrid",
        workType: "Full-time / Part-time",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Maintain accurate ledgers, process transactions and support month-end.",
      },
    ],
  },
  {
    name: "Industrial & Warehouse",
    slug: "industrial-warehouse",
    icon: Boxes,
    tagline: "Hands-on roles in warehouses, factories and distribution centres.",
    description:
      "Warehousing and production offer some of the most available roles in Europe, with flexible shifts and no experience required for many positions. Training is provided and overtime is often available.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Warehouse Operative",
        slug: "warehouse-operative",
        locationType: "Across Europe",
        workType: "Full-time / Part-time / Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Receive, store and dispatch goods in fast-moving warehouse environments.",
      },
      {
        title: "Picker / Packer",
        slug: "picker-packer",
        locationType: "Across Europe",
        workType: "Full-time / Part-time / Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Pick orders accurately and pack them ready for shipping to customers.",
      },
      {
        title: "Forklift Operator",
        slug: "forklift-operator",
        locationType: "Across Europe",
        workType: "Full-time",
        experience: "Licence / experience preferred",
        training: "For selected roles",
        languages: "Varies by employer",
        description:
          "Move and stack pallets safely using counterbalance or reach trucks.",
      },
      {
        title: "Production Assistant",
        slug: "production-assistant",
        locationType: "Across Europe",
        workType: "Full-time / Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Support production lines with assembly, packing and quality checks.",
      },
    ],
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: HeartPulse,
    tagline: "Caring roles supporting patients, residents and clinical teams.",
    description:
      "Healthcare and care settings across Europe need compassionate people to support patients and residents. Many roles welcome newcomers with full training, and demand for caring staff remains high.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Care Assistant",
        slug: "care-assistant",
        locationType: "Across Europe",
        workType: "Full-time / Part-time / Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Support daily living, dignity and wellbeing for people in care settings.",
      },
      {
        title: "Healthcare Support Worker",
        slug: "healthcare-support-worker",
        locationType: "Across Europe",
        workType: "Full-time / Flexible shifts",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Assist nurses and clinicians with patient care in hospitals and clinics.",
      },
      {
        title: "Medical Receptionist",
        slug: "medical-receptionist",
        locationType: "Across Europe",
        workType: "Full-time / Part-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "Local language helpful",
        description:
          "Manage appointments, records and patient enquiries at clinics and surgeries.",
      },
      {
        title: "Patient Services Assistant",
        slug: "patient-services-assistant",
        locationType: "Across Europe",
        workType: "Full-time / Flexible shifts",
        experience: "No experience needed",
        training: "Yes",
        languages: "Local language helpful",
        description:
          "Help patients navigate services and support smooth day-to-day operations.",
      },
    ],
  },
  {
    name: "Transport & Logistics",
    slug: "transport-logistics",
    icon: Truck,
    tagline: "Roles that keep goods and people moving across Europe.",
    description:
      "Transport and logistics is the engine of European trade, with steady demand for drivers, coordinators and planners. Roles range from hands-on driving to office-based planning, with training for many.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80",
    jobs: [
      {
        title: "Delivery Driver",
        slug: "delivery-driver",
        locationType: "Across Europe",
        workType: "Full-time / Part-time / Flexible shifts",
        experience: "Licence required",
        training: "For selected roles",
        languages: "Local language helpful",
        description:
          "Deliver parcels or goods on time while providing friendly customer service.",
      },
      {
        title: "Logistics Coordinator",
        slug: "logistics-coordinator",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Some experience preferred",
        training: "For selected roles",
        languages: "English",
        description:
          "Plan routes, track shipments and keep the supply chain running smoothly.",
      },
      {
        title: "Warehouse Dispatcher",
        slug: "warehouse-dispatcher",
        locationType: "Across Europe",
        workType: "Full-time / Flexible shifts",
        experience: "Entry level welcome",
        training: "Yes",
        languages: "Varies by employer",
        description:
          "Schedule outbound loads and coordinate drivers and carriers.",
      },
      {
        title: "Transport Planner Assistant",
        slug: "transport-planner-assistant",
        locationType: "Hybrid",
        workType: "Full-time",
        experience: "Entry level welcome",
        training: "For selected roles",
        languages: "English",
        description:
          "Support transport planning, scheduling and compliance for fleets.",
      },
    ],
  },
];

/** Lightweight list used by the home carousel and the /jobs grid. */
export const jobCategories = categories.map(({ name, slug, icon }) => ({
  name,
  slug,
  icon,
}));

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

/**
 * Builds an apply link that lands on the home form (#apply) while preserving
 * category/role query params for future tracking or form prefill.
 * e.g. applyHref("hotel-catering", "barista") -> "/?category=hotel-catering&role=barista#apply"
 */
export function applyHref(categorySlug?: string, roleSlug?: string): string {
  const params = new URLSearchParams();
  if (categorySlug) params.set("category", categorySlug);
  if (roleSlug) params.set("role", roleSlug);
  const q = params.toString();
  return `/${q ? `?${q}` : ""}#apply`;
}

/**
 * Page heading / title for a category. Avoids a doubled "Jobs" when the
 * category name already ends in "Jobs" (e.g. "Chef Jobs", "Pharmacy Jobs").
 */
export function categoryHeading(name: string): string {
  return /jobs$/i.test(name.trim())
    ? `${name} Across Europe`
    : `${name} Jobs Across Europe`;
}

/* ------------------------------------------------------------------ */
/*  Home page content                                                  */
/* ------------------------------------------------------------------ */

export type FeaturedRole = {
  category: string;
  examples: string;
  workType: string;
  experience: string;
  image: string;
};

export const featuredRoles: FeaturedRole[] = [
  {
    category: "Customer Support",
    examples: "Support Agent, Help Desk, Client Advisor",
    workType: "Remote / On-site",
    experience: "Entry level welcome",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Warehouse & Logistics",
    examples: "Picker/Packer, Forklift Operator, Sorter",
    workType: "Full-time / Part-time",
    experience: "No experience needed",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Hospitality & Catering",
    examples: "Waiter, Kitchen Porter, Barista",
    workType: "Flexible shifts",
    experience: "Entry level welcome",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Retail",
    examples: "Sales Assistant, Stock Associate, Cashier",
    workType: "Part-time / Full-time",
    experience: "No experience needed",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Healthcare Support",
    examples: "Care Assistant, Support Worker, Receptionist",
    workType: "Full-time / On-site",
    experience: "Training provided",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Office Administration",
    examples: "Admin Assistant, Data Entry, Coordinator",
    workType: "Hybrid / On-site",
    experience: "Entry level welcome",
    image:
      "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "Sales & Marketing",
    examples: "Sales Rep, Promoter, Marketing Assistant",
    workType: "Full-time / Commission",
    experience: "All backgrounds",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    category: "IT & Technical",
    examples: "IT Support, QA Tester, Junior Developer",
    workType: "Remote / Hybrid",
    experience: "Junior roles available",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
  },
];

export type FaqItem = { q: string; a: string };

export const faqItems: FaqItem[] = [
  {
    q: "Is EuroTalentia free for candidates?",
    a: "Yes. Applying through EuroTalentia is completely free for candidates. We are paid by the employers we partner with, so you never pay a fee to register, apply or get matched with a role.",
  },
  {
    q: "Do I need previous experience?",
    a: "Not always. Many of our roles are entry-level and open to all backgrounds, and some include training for selected positions. When you apply, just tell us your experience level and we will match you with suitable opportunities.",
  },
  {
    q: "Which countries do you cover?",
    a: "We work with employers across 25+ European countries. When you apply you can tell us your preferred country (or countries) and we will focus on opportunities that fit. You are responsible for confirming your own legal right to work in your preferred country.",
  },
  {
    q: "Do you provide visa or immigration services?",
    a: "No. EuroTalentia is not a visa, immigration, or relocation agency. We do not provide visa services, immigration advice, work permit processing, or relocation approval. Candidates are responsible for ensuring they have the legal right to work in their preferred country.",
  },
  {
    q: "Can I apply for part-time jobs?",
    a: "Absolutely. We have part-time, full-time and flexible-shift roles. Let us know your availability in the application form and we will only match you with positions that suit your schedule.",
  },
  {
    q: "Do you offer remote roles?",
    a: "Yes, we have remote, hybrid and on-site roles depending on the employer and category. You can indicate your preference in the form so we prioritise the right type of work for you.",
  },
  {
    q: "When will I hear back?",
    a: "Our recruitment team aims to respond within 24 hours of receiving your application. If your profile matches a current opportunity, a recruiter will contact you by email or WhatsApp to discuss next steps.",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Roles", href: "/jobs" },
  { label: "Categories", href: "/#categories" },
  { label: "How it Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Apply", href: "/#apply" },
];

/* ------------------------------------------------------------------ */
/*  Compliance copy (reused across the site)                           */
/* ------------------------------------------------------------------ */

/** Comprehensive disclaimer shown near the form and on legal pages. */
export const DISCLAIMER_FULL =
  "Important: EuroTalentia is a recruitment matching service only. We are not a visa, immigration, work-permit, legal, or relocation agency. We do not provide visa services, immigration advice, work-permit processing, relocation approval, or job-placement guarantees. Candidates are responsible for confirming their own legal right to work before accepting any role.";

/** Consent text shown next to the application form (links to Privacy Policy). */
export const FORM_CONSENT =
  "By submitting this form, you agree that EuroTalentia may contact you about suitable job opportunities. Your details are handled according to our Privacy Policy.";

/** Short footer disclaimer. */
export const FOOTER_VISA_NOTE =
  "EuroTalentia does not provide visa, immigration, work permit, or relocation approval services.";

export const COMPANY_EMAIL = "hello@eurotalentia.com";
