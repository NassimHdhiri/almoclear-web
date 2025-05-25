import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const VisionSection = (): JSX.Element => {
  // Data for vision cards to enable mapping
  const visionCards = [
    {
      id: 1,
      title: "Innovation",
      description:
        "Lead in creating sustainable building materials, such as microalgae-infused paints, enabling urban and industrial structures to actively participate in environmental restoration",
      iconSrc: "/group-37.png",
    },
    {
      id: 2,
      title: "Sustainability",
      description:
        "Lead in creating sustainable building materials, such as microalgae-infused paints, enabling urban and industrial structures to actively participate in environmental restoration",
      iconSrc: "/group-38.png",
      isBackgroundImage: true,
    },
    {
      id: 3,
      title: "Sustainability",
      description:
        "Implement sustainable practices by limiting waste, lowering energy usage, and sourcing renewable materials, and create templates for environmental responsibility in the industry.",
      iconSrc: "/group-39.png",
    },
  ];

  return (
    <section className="relative w-full max-w-[1290px] mx-auto py-16">
      {/* Heading Section */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="font-h1-up font-[number:var(--h1-up-font-weight)] text-x-900 text-[length:var(--h1-up-font-size)] text-center tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)] whitespace-nowrap [font-style:var(--h1-up-font-style)]">
            OUR VISION AND VALUES
          </div>
          <img className="w-[13.91px] h-3" alt="Object" src="/object.svg" />
        </div>
        <h1 className="max-w-[734px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-x-900 text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
          Leading the paint industry toward a sustainable future
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Cards Column */}
        <div className="flex-1 flex flex-col gap-8">
          {visionCards.map((card) => (
            <Card
              key={card.id}
              className="border border-solid border-[#e3dbd8] rounded-[20px] shadow-shadow-l"
            >
              <CardContent className="p-0">
                <div className="relative h-[170px] p-[30px]">
                  <div className="w-20 h-20 bg-home-p rounded-[40px] flex items-center justify-center">
                    {card.isBackgroundImage ? (
                      <div className="w-[45px] h-[45px] bg-[url(/group-38.png)] bg-[100%_100%]" />
                    ) : (
                      <div className="w-[45px] h-[45px] flex items-center justify-center">
                        <img
                          className="w-[45px]"
                          alt={card.title}
                          src={card.iconSrc}
                        />
                      </div>
                    )}
                  </div>

                  <h3 className="absolute top-[29px] left-[137px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-x-900 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] whitespace-nowrap [font-style:var(--heading-h3-font-style)]">
                    {card.title}
                  </h3>

                  <p className="absolute top-[79px] left-[139px] font-body-m font-[number:var(--body-m-font-weight)] text-x-800 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] [font-style:var(--body-m-font-style)]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Images Column */}
        <div className="flex-1 relative h-[600px]">
          <div className="relative w-[616px] h-[591px] top-1">
            <img
              className="absolute w-[408px] h-[511px] top-0 left-[207px] object-cover"
              alt="Rectangle"
              src="/rectangle-5285.png"
            />

            <img
              className="absolute w-[400px] h-[479px] top-28 left-7 object-cover"
              alt="Rectangle"
              src="/rectangle-5286.png"
            />

            <div className="absolute w-[124px] h-[49px] top-[31px] left-[132px] overflow-hidden rotate-[-30deg]">
              <img
                className="absolute w-[132px] h-[105px] -top-7 -left-1 rotate-[30deg]"
                alt="Group"
                src="/group-36.png"
              />
            </div>

            <img
              className="absolute w-[37px] h-[38px] top-[165px] left-0"
              alt="Group"
              src="/group-35.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
