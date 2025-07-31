"use client";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DemoSection } from "@/components/demo-section";
import { PricingSection } from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import { TrustSection } from "@/components/trust-section";
import { Footer } from "@/components/footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ShowcaseSection from "@/components/Features";

export default function Home() {
  const wrapper = useRef(null);

  // Register the plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useGSAP(
    () => {
      // Initialize ScrollSmoother
      ScrollSmoother.create({
        wrapper: wrapper.current,
        content: "#smooth-content",
        smooth: 2, // Adjust the smoothness of the scroll
        effects: true, // Enable scroll effects
      });
    },
    { scope: wrapper }
  );

  return (
    <div ref={wrapper} className="h-screen overflow-y-scroll">
      <div id="smooth-content" className="snap-y snap-mandatory scroll-smooth">
        <Header />
        <HeroSection />
        <ProblemSolutionSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <DemoSection />
        <PricingSection />
        <FAQSection />
        <TrustSection />
        <Footer />
      </div>
    </div>
  );
}
