"use client";

import { Star, Quote } from "lucide-react";
import { Marquee } from "./magicui/marquee";

const testimonials = [
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

export function TestimonialsSection() {
  return (
    <section className="snap-start py-24 border border-y-primary bg-gray-50 dark:bg-gray-950 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Marketers Say{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of marketers who've transformed their campaigns with
            AI-powered automation.
          </p>
        </div>

        {/* Fix: Only one Marquee, map testimonials inside it, and set repeat to 2+ for smooth loop */}
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          <Marquee className="[--duration:20s]" repeat={2} pauseOnHover>
            {testimonials.map((testimonial, index) => (
              <>
                <div
                  key={index}
                  className="bg-white max-w-md dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 relative mx-4"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-300 dark:text-gray-600" />

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  key={index}
                  className="bg-white max-w-md dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 relative mx-4"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-300 dark:text-gray-600" />

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  key={index}
                  className="bg-white max-w-md dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 relative mx-4"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-300 dark:text-gray-600" />

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} at {testimonial.company}
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
