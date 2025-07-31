"use client";

import { Shield, Users, Zap, Award } from "lucide-react";

const trustItems = [
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

export function TrustSection() {
  return (
    <section className="snap-start py-24 bg-gray-50 dark:bg-gray-950 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            We're Built on{" "}
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Transparency and Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your success is our mission. Here's why thousands of marketers trust
            ADmyBRAND with their most important campaigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Shield className="w-5 h-5" />
            <span className="font-medium">SOC 2 Certified</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Shield className="w-5 h-5" />
            <span className="font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Shield className="w-5 h-5" />
            <span className="font-medium">ISO 27001</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Award className="w-5 h-5" />
            <span className="font-medium">99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
