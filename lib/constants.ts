import { Shield, Users, Zap, Award } from "lucide-react";

export const faqs = [
  {
    question: "Will this replace my marketing team?",
    answer:
      "No, ADmyBRAND AI Suite is designed to augment your team's capabilities, not replace them. It handles repetitive tasks and data analysis, freeing your team to focus on strategy, creativity, and relationship building. Think of it as giving your marketers superpowers.",
  },
  {
    question: "Is the AI model actually custom?",
    answer:
      "Yes, our AI models are built on advanced foundations like GPT-4 but are fine-tuned specifically for marketing use cases. We continuously train our models on marketing data, campaign performance, and industry best practices to provide insights tailored to your business.",
  },
  {
    question: "What platforms does this integrate with?",
    answer:
      "We integrate with all major advertising platforms including Google Ads, Meta (Facebook/Instagram), LinkedIn, TikTok, Twitter, and more. We also connect with CRM systems like HubSpot, Salesforce, and marketing tools like Mailchimp, Klaviyo, and Zapier.",
  },
  {
    question: "How is my data protected?",
    answer:
      "We take data security seriously with SOC 2 Type II compliance, end-to-end encryption, and GDPR compliance. Your data is never shared with third parties or used to train models for other customers. We maintain strict access controls and regular security audits.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most customers see initial improvements within 7-14 days of setup. Significant results typically appear within 30 days as our AI learns your audience and optimizes campaigns. The more data we have, the better our predictions and optimizations become.",
  },
  {
    question: "Do you offer support during setup?",
    answer:
      "All plans include onboarding support. Pro and Enterprise customers get dedicated success managers. We also provide 24/7 chat support with real humans (no bots), comprehensive documentation, and video tutorials.",
  },
];

export const problems = [
  {
    problem: "Inaccurate or biased AI insights",
    solution: "Robust data validation & adaptive learning system",
  },
  {
    problem: "Content feels robotic or uninspired",
    solution: "Human-AI collaborative copy generator",
  },
  {
    problem: "Complex tool setup & integrations",
    solution: "Plug-and-play integrations with Meta, Google, CRM",
  },
  {
    problem: "Lack of creative consistency across platforms",
    solution: "Brand-locked AI creative engine",
  },
  {
    problem: "Frustrating support & platform bugs",
    solution: "24/7 real expert support — no bots, no delays",
  },
  {
    problem: "Hard to measure AI ROI",
    solution: "Outcome-based reporting & predictive analytics",
  },
];

export const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description:
      "Perfect for small businesses getting started with AI marketing",
    features: [
      "Basic automation for 3 accounts",
      "Limited AI usage (1000 optimizations/month)",
      "Standard integrations (Google, Meta)",
      "Email support",
      "Basic analytics dashboard",
    ],
    notIncluded: [
      "Advanced AI features",
      "Custom integrations",
      "Priority support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses and agencies",
    features: [
      "Unlimited campaigns & accounts",
      "Full AI automation suite",
      "Advanced integrations (HubSpot, Salesforce)",
      "Priority support",
      "Advanced analytics & reporting",
      "Team collaboration tools",
      "API access",
      "Custom AI model training",
    ],
    notIncluded: ["White-label solution", "Dedicated account manager"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Advanced security & compliance",
      "Custom training & onboarding",
      "Real-time coaching",
    ],
    notIncluded: [],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechFlow Commerce",
    role: "Marketing Director",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "ADmyBRAND reduced our CPA by 60% in just 30 days. The AI insights are incredibly accurate and actionable.",
    rating: 5,
    industry: "eCommerce",
  },
  {
    name: "Marcus Rodriguez",
    company: "GrowthLab Agency",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "Managing 50+ client campaigns became effortless. The automation handles everything while I focus on strategy.",
    rating: 5,
    industry: "Agency",
  },
  {
    name: "Emily Watson",
    company: "CloudSync Solutions",
    role: "Head of Growth",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "The predictive targeting feature helped us identify high-value prospects we never knew existed. ROI increased 3x.",
    rating: 5,
    industry: "B2B SaaS",
  },
  {
    name: "David Park",
    company: "Local Fitness Hub",
    role: "Owner",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "As a local business, the AI helped us compete with big chains. Our membership sign-ups doubled in 2 months.",
    rating: 5,
    industry: "Local Business",
  },
  {
    name: "Sarah Chen",
    company: "TechFlow Commerce",
    role: "Marketing Director",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "ADmyBRAND reduced our CPA by 60% in just 30 days. The AI insights are incredibly accurate and actionable.",
    rating: 5,
    industry: "eCommerce",
  },
  {
    name: "Marcus Rodriguez",
    company: "GrowthLab Agency",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "Managing 50+ client campaigns became effortless. The automation handles everything while I focus on strategy.",
    rating: 5,
    industry: "Agency",
  },
  {
    name: "Emily Watson",
    company: "CloudSync Solutions",
    role: "Head of Growth",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "The predictive targeting feature helped us identify high-value prospects we never knew existed. ROI increased 3x.",
    rating: 5,
    industry: "B2B SaaS",
  },
  {
    name: "David Park",
    company: "Local Fitness Hub",
    role: "Owner",
    image: "/placeholder.svg?height=60&width=60",
    quote:
      "As a local business, the AI helped us compete with big chains. Our membership sign-ups doubled in 2 months.",
    rating: 5,
    industry: "Local Business",
  },
];

export const trustItems = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, GDPR compliant with bank-level encryption",
  },
  {
    icon: Users,
    title: "24/7 Human Support",
    description:
      "Real experts, no bots, no delays - always here when you need us",
  },
  {
    icon: Zap,
    title: "Transparent AI",
    description:
      "Built on GPT-4 with custom fine-tuning for marketing excellence",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "10,000+ successful campaigns with 95% customer satisfaction",
  },
];
