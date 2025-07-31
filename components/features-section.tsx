"use client"

import { Brain, BarChart3, Zap, Target, Users, Shield } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Campaign Automation",
    description: "Auto-setup, real-time bid tuning, and intelligent campaign management that learns from your data.",
  },
  {
    icon: Target,
    title: "Predictive Targeting & Segmentation",
    description: "Advanced audience targeting based on live customer behavior and predictive analytics.",
  },
  {
    icon: Zap,
    title: "Creative Intelligence Engine",
    description: "Generate and A/B test high-converting assets with our AI-powered creative optimization.",
  },
  {
    icon: BarChart3,
    title: "Unified Analytics Dashboard",
    description: "See results across all platforms in one place with real-time performance tracking.",
  },
  {
    icon: Users,
    title: "Auto Optimization Loops",
    description: "Performance-based AI improvements every day that continuously enhance your campaigns.",
  },
  {
    icon: Shield,
    title: "Plug & Play Integrations",
    description: "Works seamlessly with Google, Meta, HubSpot, and more with zero technical setup.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The Smartest Way to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Launch & Optimize Campaigns
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our AI-powered suite provides all the tools and insights you need to create, launch, and optimize successful
            marketing campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
