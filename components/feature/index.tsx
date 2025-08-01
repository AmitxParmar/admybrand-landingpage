"use client";
import VerticleSlider from "./VerticleSlider";
import { useIsMobile } from "@/hooks/use-mobile";
import Marquee from "react-fast-marquee";
import Link from "next/link";

// Short, punchy feature phrases for the marquee
const aiMarketingTools = [
  "AI Campaign Automation",
  "Predictive Targeting",
  "Creative AI Engine",
  "Unified Analytics",
  "Auto Optimization",
  "Plug & Play Integrations",
  "Zero Setup",
  "A/B Creative Testing",
  "Performance Tracking",
  "Real-Time Bidding",
  "Audience Segments",
  "Chatbot Assist",
];

const ShowcaseSection = () => {
  const isMobile = useIsMobile();

  return (
    <div className="max-h-[900px] border border-y-primary overflow-hidden pb-12 md:px-[3%] bg-black w-screen max-w-full">
      <div className="xl:text-[0.7vw] pt-[6.4em] md:pb-[1.6em] text-xs w-full lg:max-w-[128rem] mx-auto">
        <div className="text-muted-foreground px-4 text-start md:text-center mb-[2.8em]">
          <div className="uppercase text-base font-medium leading-[1.2]">
            The Smartest Way to Launch & Optimize Campaigns
          </div>
          <div className="text-[1.1em] mt-2 text-muted-foreground font-normal">
            <span className="font-semibold text-[#ddb15c]">
              AI Marketing Suite
            </span>
          </div>
        </div>

        {/* It will be hidden in larger display */}
        {/* For mobile Devices */}
        {isMobile ? (
          <div className="mobile__wrapper font-grotesk">
            <div className="text-[#ddb15c] leading-none text-7xl px-4 mb-3.5">
              Built for Marketers
            </div>

            <div className="m-auto grid grid-flow-col gap-2 p-2">
              <Marquee className="text-5xl h-fit text-nowrap odd:!opacity-50 even:!opacity-100 absolute leading-none text-[#ddb15c]">
                {aiMarketingTools.map((tool, index) => (
                  <span key={index} className="mx-1 h-fit">
                    {tool}
                  </span>
                ))}
              </Marquee>
            </div>

            <div className="mt-6 items-start">
              <div className="gap-y-[2.4rem] text-muted-foreground grid auto-rows-auto grid-cols-none items-end text-[2.4rem] px-4 font-normal leading-[1.7]">
                <div className="text-[1.7rem] leading-[1.6]">
                  All-in-one AI platform: automate, analyze, and optimize your
                  marketing—no technical setup required.
                </div>
                <Link
                  href={"/register"}
                  className=" text-start justify-start grid grid-flow-col items-center text-[16.2px] font-medium group transition-transform duration-700 leading-[1.2] hover:transition-[color_.45s_cubic-bezier(.215,.61,.355,1)] hover:text-[#b18023]"
                >
                  <div>Request Demo</div>
                  <div className="w-[1.4rem] flex items-center justify-center">
                    <svg
                      className="group-hover:translate-x-1 duration-700 py-3"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.524 18.7872C14.524 18.7872 19.025 14.2822 20.779 12.5272C20.925 12.3812 20.998 12.1892 20.998 11.9972C20.998 11.8052 20.925 11.6142 20.779 11.4672C19.026 9.71319 14.524 5.20919 14.524 5.20919C14.38 5.06419 14.19 4.99219 14 4.99219C13.807 4.99219 13.615 5.06619 13.468 5.21319C13.175 5.50519 13.173 5.97919 13.464 6.26919L18.442 11.2472H3.75C3.336 11.2472 3 11.5832 3 11.9972C3 12.4112 3.336 12.7472 3.75 12.7472H18.442L13.463 17.7262C13.174 18.0152 13.177 18.4882 13.469 18.7802C13.617 18.9282 13.81 19.0022 14.002 19.0022C14.192 19.0022 14.38 18.9302 14.524 18.7872Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-scroll hidden sm:block lg:text-[0.7vw]">
            <div className="grid leading-none md:gap-[4.8em] text-[#deb566] auto-cols-[1fr] grid-rows-[1fr] grid-cols-[auto_1fr] row-auto">
              <div className="relative z-10 max-w-[42em] gap-x-[2.4em] gap-y-[3.6em] text-right flex flex-col justify-start items-end">
                <div className="max-w-[10ch] text-[5.5em] md:text-[7.4em]">
                  Built for Marketers
                </div>
                <div className="gap-y-[2.4rem] text-[#fff] flex flex-col items-end text-[2.4rem] font-normal leading-[1.7]">
                  <div className="text-[.5em] text-muted-foreground leading-[1.6]">
                    All-in-one AI platform: automate, analyze, and optimize your
                    marketing—no technical setup required.
                  </div>
                  <Link
                    href={"/register"}
                    className="gap-y-[1rem] text-center justify-center grid grid-flow-col items-center py-[0.4rem] text-[16.2px] font-medium group transition-transform duration-700 leading-[1.2] hover:transition-[color_.45s_cubic-bezier(.215,.61,.355,1)] hover:text-[#b18023]"
                  >
                    <div>Request Demo</div>
                    <div className="w-[1.4rem] flex items-center justify-center">
                      <svg
                        className="group-hover:translate-x-1 duration-700 py-3"
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.524 18.7872C14.524 18.7872 19.025 14.2822 20.779 12.5272C20.925 12.3812 20.998 12.1892 20.998 11.9972C20.998 11.8052 20.925 11.6142 20.779 11.4672C19.026 9.71319 14.524 5.20919 14.524 5.20919C14.38 5.06419 14.19 4.99219 14 4.99219C13.807 4.99219 13.615 5.06619 13.468 5.21319C13.175 5.50519 13.173 5.97919 13.464 6.26919L18.442 11.2472H3.75C3.336 11.2472 3 11.5832 3 11.9972C3 12.4112 3.336 12.7472 3.75 12.7472H18.442L13.463 17.7262C13.174 18.0152 13.177 18.4882 13.469 18.7802C13.617 18.9282 13.81 19.0022 14.002 19.0022C14.192 19.0022 14.38 18.9302 14.524 18.7872Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right-side */}
              <div className="fade-y z-20 relative max-h-[700px] h-[700px] sm:block font-grotesk">
                <VerticleSlider />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseSection;
