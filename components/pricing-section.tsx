"use client";
import { useRef } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/lib/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function PricingSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!cardsRef.current) return;
      const cards = gsap.utils.toArray<HTMLElement>(
        cardsRef.current.querySelectorAll(".pricing-card")
      );
      gsap.from(cards, {
        x: -800,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: cardsRef }
  );

  return (
    <section
      id="pricing"
      className="snap-start border border-y-primary py-24 bg-gray-50 dark:bg-gray-950 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Only Pay for the{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Results You See
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our
            core AI features and free trial with no credit card required.
          </p>
        </div>

        <div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          ref={cardsRef}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular
                  ? "border-gray-900 dark:border-white bg-white dark:bg-black shadow-lg scale-105"
                  : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center opacity-50"
                  >
                    <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-500 dark:text-gray-500">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-3 text-lg font-semibold ${
                  plan.popular
                    ? "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
