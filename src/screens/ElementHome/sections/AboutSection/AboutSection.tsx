import { ArrowRightIcon, CheckSquareIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      title: "Eco-Friendly Materials",
      description:
        "Spirulina for CO2 Absorption, Bentonite Clay for Non-Toxic Strength",
    },
    {
      title: "Prioritizing Safety and Sustainability",
      description:
        "Combining innovation and eco-friendly materials to ensure safety and sustainability in every brushstroke",
    },
  ];

  return (
    <section className="flex flex-row w-full py-16 px-16  gap-12 m12 ">
      {/* Left side with images */}
      <div className="relative w-full max-w-[600px]  ">
        <div className="relative h-[618px]">
          <div className="relative w-[551px] h-[618px] ">
            {/* Pattern background */}
            <div className="absolute w-[307px] h-[267px] bottom-0 left-0">
              {Array.from({ length: 15 }).map((_, index) => (
                <img
                  key={index}
                  className={`absolute w-[307px] h-[3px] top-[${index * 19}px] left-0`}
                  alt="Pattern line"
                  src={`/group-867${index === 0 ? "" : `-${index}`}.png`}
                />
              ))}
            </div>

            {/* Main images */}
            <img
              className="absolute w-80 h-[373px] top-0 left-[15px] object-cover"
              alt="Atmoclear product"
              src="/rectangle-2654.png"
            />

            <img
              className="absolute w-[312px] h-[312px] top-[287px] left-[239px] object-cover"
              alt="Atmoclear product"
              src="/title.png"
            />

            {/* Experience badge */}
            <Card className="absolute w-[174px] h-[210px] top-[386px] left-[46px] bg-[url(/rectangle-1391.svg)] bg-[100%_100%] border-none rounded-none">
              <CardContent className="relative w-[108px] h-[130px] top-10 left-[38px] p-0">
                <h2 className="absolute top-0 left-0 font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] whitespace-nowrap [font-style:var(--heading-h1-font-style)]">
                  10+
                </h2>
                <p className="absolute w-[104px] top-[70px] left-0 font-body-m font-[number:var(--body-m-font-weight)] text-white text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)]">
                  years of experiences
                </p>
              </CardContent>
            </Card>
          </div>

          <img
            className="absolute w-[244px] h-[217px] top-[45px] left-[356px] object-cover"
            alt="Atmoclear product"
            src="/rectangle-2656.png"
          />
        </div>
      </div>

      {/* Right side with content */}
      <div className="flex flex-col w-full max-w-[901px]  ">
        {/* Header section */}
        <div className="flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-2.5">
            <span className="font-h1-up font-[number:var(--h1-up-font-weight)] text-x-900 text-[length:var(--h1-up-font-size)] tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)] whitespace-nowrap [font-style:var(--h1-up-font-style)]">
              ABOUT US
            </span>
            <img
              className="w-[13.91px] h-3"
              alt="Decorative element"
              src="/object.svg"
            />
          </div>

          <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
            <span className="text-[#16171a]">
              Atmoclear
              <br />
            </span>
            <span className="text-[#034833]">
              Your Path to Eco-Friendly Innovation
            </span>
          </h1>

          <p className="max-w-[609px] font-body-m font-[number:var(--body-m-font-weight)] text-x-800 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)]">
            At Atmoclear, we&apos;re more than just a company — we&apos;re a
            team of passionate innovators committed to creating a sustainable
            future.
          </p>
        </div>

        {/* Features section */}
        <div className="flex gap-10 mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-2 ${index === 0 ? "max-w-[293px]" : "max-w-[414px]"}`}
            >
              <div className="flex items-center gap-2.5">
                <CheckSquareIcon className="text-home-p" size={16} />
                <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-x-900 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                  {feature.title}
                </h3>
              </div>
              <p className="font-body-m font-[number:var(--body-m-font-weight)] text-x-800 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="h-[60px] px-[30px] py-5 bg-home-p rounded-[999px] text-white w-fit">
          <span className="font-button font-[number:var(--button-font-weight)] text-[length:var(--button-font-size)] tracking-[var(--button-letter-spacing)] leading-[var(--button-line-height)] [font-style:var(--button-font-style)]">
            Read More
          </span>
          <ArrowRightIcon className="ml-2" size={16} />
        </Button>
      </div>
    </section>
  );
};
