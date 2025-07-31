"use client";

import { useRef, useEffect, RefCallback } from "react";
import { AlertTriangle, CheckCircle, Mouse, Scroll } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollStack, {
  ScrollStackItem,
} from "./animated-ui/Components/ScrollStack/ScrollStack";

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
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="snap-start h-screen bg-white flex items-center dark:bg-black overflow-visible pt-16"
    >
      <div className="fade-in container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Built for the Modern Marketer's{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Real Problems
            </span>
          </h2>
        </div>
        <div className="h-[600px] w-full relative">
          {/* Blur backdrop for cards */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 dark:from-black/20 dark:to-black/20 backdrop-blur-sm rounded-3xl -z-10"></div>

          <ScrollStack
            itemStackDistance={8} // slightly more spacing for smoother visual separation
            itemDistance={16} // reduce distance for a tighter, faster stack
            stackPosition="10%" // start stacking a bit earlier for a more fluid effect
            baseScale={0.9} // slightly less shrink for a smoother scale
            blurAmount={8} // slightly less blur for clarity and smoothness
            scaleDuration={4} // faster scale animation for snappier feel
            className="max-h-[70vh] h-[50vh] flex flex-col"
          >
            {problems.map((item, index) => (
              <ScrollStackItem
                itemClassName="
                  mx-auto
                  md:min-w-[800px]
                  sm:w-[95%]
                  md:w-[80%] md:max-w-xl
                  rounded-3xl shadow-xl
                  bg-gradient-to-br from-white via-gray-50 to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900
                  border border-gray-200 dark:border-gray-800
                  px-4 py-6
                  sm:px-6 sm:py-8
                  md:px-8 md:py-10
                  flex flex-col md:flex-row items-center gap-6 md:gap-8
                  will-change-transform
                  transition-all duration-300
                  group
                  min-h-[340px] sm:min-h-[380px] md:min-h-[320px] 
                  box-border
                  overflow-visible
                "
                key={index}
              >
                {/* Left: Problem */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full min-w-0">
                  <div className="mb-3 sm:mb-4 flex items-center justify-center md:justify-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 dark:bg-red-900/30 shadow-md">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400" />
                    </span>
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-tight">
                    Pain Point
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                    {item.problem}
                  </p>
                </div>
                {/* Divider */}
                <div className="block md:hidden w-full h-px bg-gradient-to-r from-red-400/30 via-gray-300/30 to-green-400/30 my-4" />
                <div className="hidden md:block w-px h-20 bg-gradient-to-b from-red-400/30 via-gray-300/30 to-green-400/30 mx-6" />
                {/* Right: Solution */}
                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left w-full min-w-0">
                  <div className="mb-3 sm:mb-4 flex items-center justify-center md:justify-start">
                    <span className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 dark:bg-green-900/30 shadow-md">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                    </span>
                  </div>
                  <h4 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-tight">
                    Our Solution
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed break-words">
                    {item.solution}
                  </p>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
