"use client";

import { useState } from "react";
import { Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="snap-start py-24 bg-white dark:bg-black pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            See How It Works in{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Under 90 Seconds
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Watch how ADmyBRAND AI Suite transforms your marketing workflow from
            setup to optimization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {!isVideoPlaying ? (
              <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
                <div className="absolute inset-0 bg-black/20"></div>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Product Demo</h3>
                  <p className="text-white/80">See ADmyBRAND in action</p>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Demo video would play here</p>
                  <p className="text-sm opacity-75 mt-2">
                    Integration with actual video player needed
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-gray-600 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Personalized Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
