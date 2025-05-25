import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Link } from "react-router-dom";

// Navigation menu items data
const navigationItems = [
  { label: "HOME",url:"/", active: true },
  { label: "ABOUT US",url:"/about-us", active: false },
  { label: "SERVICES",url:"/services",active: false },
  { label: "PROJECTS",url:"/projects", active: false },
  { label: "BLOG",url:"/blog", active: false },
];

export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[900px]">
      <div className="h-full bg-x-900">
        <div className="relative h-full bg-[#696969]">
          

          <div className="absolute h-full w-full">
            {/* Dark overlay (comme une ombre) */}
            <div className="absolute w-full h-full top-0 left-0 z-10 bg-black opacity-30" />

            {/* Background image */}
            <img
              className="absolute w-full h-[867px] top-[33px] left-0 object-cover z-0"
              alt="Background image"
              src="/frame-8365.png"
            />
          </div>

          {/* Navigation bar background */}
          <div className="z-50 absolute w-full h-[100px] top-0 left-0 bg-white " />

          {/* Navigation content */}
          <div className="z-50 absolute w-full max-w-[1177px] h-10 top-[31px] left-[66px]">
            {/* Logo */}
            <div className="inline-flex items-center gap-2.5  top-0 left-0">
              <img
                className="w-[167px] h-[77px] absolute top-[-22px] left-[88px]"
                alt="RouteX Logo"
                src="/logo-almoclear.png"
              />
              <div className="relative  w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-white text-[22px] tracking-[-1.44px] leading-10 whitespace-nowrap">
                RouteX
              </div>
            </div>

            {/* Navigation menu */}
            <NavigationMenu className="z-50 absolute top-0.5 left-[608px]">
              <NavigationMenuList className="flex items-start gap-2">
                {navigationItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      className={`inline-flex items-baseline gap-[5px] px-[18px] py-[5px] ${
                        item.active ? "bg-home-p rounded-[25px]" : ""
                      }`}
                    >
                      
                        <div
                          className={`relative w-fit mt-[-1.00px] font-navigation font-[number:var(--navigation-font-weight)] ${
                            item.active ? "text-white" : "text-x-900"
                          } text-[length:var(--navigation-font-size)] tracking-[var(--navigation-letter-spacing)] leading-[var(--navigation-line-height)] whitespace-nowrap [font-style:var(--navigation-font-style)]`}
                        >
                          
                          {item.label}
                                

                        </div>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Hero content */}
          <div className="z-50 absolute w-[984px] top-[314px] left-1/2 -translate-x-1/2 font-display-d1 font-[number:var(--display-d1-font-weight)] text-white text-[length:var(--display-d1-font-size)] text-center tracking-[var(--display-d1-letter-spacing)] leading-[var(--display-d1-line-height)] [font-style:var(--display-d1-font-style)]">
            <span className="text-[#ffffff] font-display-d1 [font-style:var(--display-d1-font-style)] font-[number:var(--display-d1-font-weight)] tracking-[var(--display-d1-letter-spacing)] leading-[var(--display-d1-line-height)] text-[length:var(--display-d1-font-size)]">
              PAINTING A{" "}
            </span>
            <span className="z-50 text-[#83cd20] font-display-d1 [font-style:var(--display-d1-font-style)] font-[number:var(--display-d1-font-weight)] tracking-[var(--display-d1-letter-spacing)] leading-[var(--display-d1-line-height)] text-[length:var(--display-d1-font-size)]">
              GREENER
            </span>
            <span className="z-50 text-[#ffffff] font-display-d1 [font-style:var(--display-d1-font-style)] font-[number:var(--display-d1-font-weight)] tracking-[var(--display-d1-letter-spacing)] leading-[var(--display-d1-line-height)] text-[length:var(--display-d1-font-size)]">
              {" "}
              TOMORROW
            </span>
          </div>

          {/* Subtitle */}
          <div className="z-50 absolute w-[695px] top-[524px] left-1/2 -translate-x-1/2 font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-white text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] [font-style:var(--heading-h3-font-style)]">
            Eco-friendly algae-based paint that beautifies spaces, purifies the
            air, and promotes sustainability.
          </div>

          {/* CTA Button */}
          <Button className=" z-50 absolute top-[630px] left-1/2 -translate-x-1/2 px-[30px] py-5 bg-home-p rounded-[150px] h-[60px] flex items-center justify-center gap-2.5">
            <span className="relative w-fit mt-[-6.00px] mb-[-4.00px] font-button font-[number:var(--button-font-weight)] text-white text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] whitespace-nowrap [font-style:var(--button-font-style)]">
              Learn More
            </span>
            <ArrowRightIcon className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};
