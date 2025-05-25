import React from "react";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { ContactUsSection } from "./sections/ContactUsSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GroundbreakingInitiativesSection } from "./sections/GroundbreakingInitiativesSection/GroundbreakingInitiativesSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { ImpactSection } from "./sections/ImpactSection/ImpactSection";
import { ProcessOverviewSection } from "./sections/ProcessOverviewSection";
import { SponsorsSection } from "./sections/SponsorsSection/SponsorsSection";
import { TeamMembersSection } from "./sections/TeamMembersSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { VisionSection } from "./sections/VisionSection/VisionSection";

export const ElementHome = (): JSX.Element => {
  // Sponsor logos data
  const sponsorLogos = [
    { src: "/company-logo.svg", alt: "Company logo", width: "171px" },
    { src: "/company-logo-1.svg", alt: "Company logo", width: "108px" },
    { src: "/company-logo-2.svg", alt: "Company logo", width: "114px" },
    { src: "/company-logo-4.svg", alt: "Company logo", width: "127px" },
    { src: "/company-logo-3.svg", alt: "Company logo", width: "36px" },
  ];

  // Special thanks logos data
  const specialThanksLogos = [
    { src: "/enit-300-1.png", alt: "Enit", width: "65px" },
    { src: "/injaz.png", alt: "injez", width: "194px" },
    {
      src: "/3be80564-523e-4a06-82b3-95c9262d1d7c-1.png",
      alt: "Element",
      width: "59px",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-20 bg-white gap-y-6">
      <HeroBannerSection />
      <AboutSection />

      {/* Special Thanks Section */}
      <section id="Special Thanks Section" className="w-full flex flex-col items-center">
        <div className="w-full max-w-[879px] flex flex-col items-center gap-12">
          <div className="flex items-center gap-2.5 ">
            <span className="font-h1-up font-[number:var(--h1-up-font-weight)] text-x-900 text-[length:var(--h1-up-font-size)] tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)] whitespace-nowrap [font-style:var(--h1-up-font-style)]">
              Thanks
            </span>
            <img
              className="w-[13.91px] h-3"
              alt="Decorative element"
              src="/object.svg"
            />
          </div>
          <h2 className="font-heading-h1 mt-0 text-x-900 text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)]">
            Special thanks
          </h2>

          <div className="w-full flex justify-between items-center pt-9">
            {specialThanksLogos.map((logo, index) => (
              <img
                key={index}
                className="h-[65px]"
                style={{ width: logo.width }}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>

      

      {/* Background Image Section */}

      <GroundbreakingInitiativesSection />
      <SponsorsSection />
      {/* <ImpactSection /> */}
       {/* Our sponsors section  */}
      <section id=" Our sponsors section" className="w-full flex flex-col items-center">
        <div className="w-full max-w-[879px] flex flex-col items-center gap-12">
          <div className="flex items-center gap-2.5 ">
            <span className="font-h1-up font-[number:var(--h1-up-font-weight)] text-x-900 text-[length:var(--h1-up-font-size)] tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)] whitespace-nowrap [font-style:var(--h1-up-font-style)]">
              sponsors
            </span>
            <img
              className="w-[13.91px] h-3"
              alt="Decorative element"
              src="/object.svg"
            />
          </div>
          <h2 className="max-w-[734px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-x-900 text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
            Our Sponsors
          </h2>

          <div className="w-full flex justify-between items-center pt-9">
            {specialThanksLogos.map((logo, index) => (
              <img
                key={index}
                className="h-[65px]"
                style={{ width: logo.width }}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </section>

      
      <TestimonialsSection />
      <TeamMembersSection />
      <ProcessOverviewSection />
      <VisionSection />
      <ContactUsSection />
      <FooterSection />

    </div>
  );
};
