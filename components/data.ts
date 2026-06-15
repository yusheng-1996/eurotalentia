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

export type JobCategory = {
  name: string;
  icon: LucideIcon;
  slug: string;
};

/** Job categories shown in the carousel. Order mirrors the brief. */
export const jobCategories: JobCategory[] = [
  { name: "Grocery Retail", icon: ShoppingCart, slug: "grocery-retail" },
  { name: "Fashion & Non-Food Retail", icon: Shirt, slug: "fashion-retail" },
  { name: "Buyers & Merchandisers", icon: ClipboardList, slug: "buyers-merchandisers" },
  { name: "Pharmacy Jobs", icon: Pill, slug: "pharmacy" },
  { name: "Construction & Engineering", icon: HardHat, slug: "construction-engineering" },
  { name: "Events", icon: PartyPopper, slug: "events" },
  { name: "Hotel & Catering", icon: UtensilsCrossed, slug: "hotel-catering" },
  { name: "Human Resources", icon: Users, slug: "human-resources" },
  { name: "Sales & Marketing", icon: Megaphone, slug: "sales-marketing" },
  { name: "Chef Jobs", icon: ChefHat, slug: "chef" },
  { name: "Office & Administrative", icon: FileText, slug: "office-admin" },
  { name: "Accounting & Finance", icon: Calculator, slug: "accounting-finance" },
  { name: "Industrial & Warehouse", icon: Boxes, slug: "industrial-warehouse" },
  { name: "Healthcare", icon: HeartPulse, slug: "healthcare" },
  { name: "Transport & Logistics", icon: Truck, slug: "transport-logistics" },
];

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
    a: "We work with employers across 25+ European countries. When you apply you can tell us your preferred country (or countries) and whether you are open to relocation, and we will focus on opportunities that fit.",
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
  { label: "Home", href: "#home" },
  { label: "Roles", href: "#roles" },
  { label: "Categories", href: "#categories" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#apply" },
];
