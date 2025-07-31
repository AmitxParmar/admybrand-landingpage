"use client";

import { useRef, useEffect, RefCallback } from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
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

export function ProblemSolutionSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Create a stable array of ref callbacks, one for each card
  const getCardRef = (index: number): RefCallback<HTMLDivElement> => {
    return (el) => {
      cardsRef.current[index] = el;
    };
  };

  useGSAP(() => {
    if (!cardsRef.current.length) return;

    // Set initial state: all cards except the first are offscreen at the bottom
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, {
        zIndex: i + 1,
        y: i === 0 ? 0 : 120,
        opacity: i === 0 ? 1 : 0,
        scale: 1,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
      });
    });

    // Animate each card to pop up and stack on top as user scrolls
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      ScrollTrigger.create({
        trigger: card,
        start: `top+=${window.innerHeight / 2 + 80 * i} bottom-=100`,
        end: "bottom center",
        onEnter: () => {
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            boxShadow: "0 16px 48px 0 rgba(31, 38, 135, 0.18)",
            duration: 0.6,
            ease: "back.out(1.4)",
          });
        },
        onLeaveBack: () => {
          if (i !== 0) {
            gsap.to(card, {
              y: 120,
              opacity: 0,
              scale: 1,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
              duration: 0.5,
              ease: "power2.in",
            });
          }
        },
      });
    });

    // Clean up triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built for the Modern Marketer's{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Real Problems
            </span>
          </h2>
        </div>

        <div
          className="max-w-2xl mx-auto relative min-h-[600px] flex items-end justify-center"
          style={{ height: 520 }}
        >
          {problems.map((item, index) => (
            <div
              key={index}
              ref={getCardRef(index)}
              className={`
                absolute left-0 right-0 mx-auto
                w-full sm:w-[90%] md:w-[80%]
                rounded-3xl shadow-xl
                bg-gradient-to-br from-white via-gray-50 to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
                border border-gray-200 dark:border-gray-800
                px-8 py-10
                flex flex-col md:flex-row items-center gap-8
                will-change-transform
                transition-all duration-500
                group
                ${index !== 0 ? "pointer-events-none" : ""}
              `}
              style={{
                top: 0,
                zIndex: index + 1,
              }}
            >
              {/* Left: Problem */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 flex items-center justify-center md:justify-start">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 shadow-md">
                    <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 tracking-tight">
                  Pain Point
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {item.problem}
                </p>
              </div>
              {/* Divider */}
              <div className="hidden md:block w-px h-20 bg-gradient-to-b from-red-400/30 via-gray-300/30 to-green-400/30 mx-6" />
              {/* Right: Solution */}
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-4 flex items-center justify-center md:justify-start">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 shadow-md">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2 tracking-tight">
                  Our Solution
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
