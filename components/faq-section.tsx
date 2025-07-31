"use client";

import { memo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
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

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="snap-start border border-y-primary py-24 bg-white dark:bg-black pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(FAQSection);
