import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProcessOverviewSection = (): JSX.Element => {
  // Process step data for mapping
  const processSteps = [
    {
      id: "01",
      title: "extraction",
      description: "There are many variati of passages of engineer",
      iconUrl: "/group-32.png",
    },
    {
      id: "02",
      title: "clearing",
      description: "There are many variati of passages of engineer",
      iconUrl: "/group-33.png",
    },
    {
      id: "03",
      title: "doing",
      description: "There are many variati of passages of engineer",
      iconUrl: "/group-34.png",
    },
  ];

  return (
    <section className="w-full py-16 bg-x-100 rounded-[20px]">
      <div className="relative w-full max-w-[1800px] mx-auto">
        {/* Background decorative elements with reduced opacity */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden opacity-[0.08] z-0">
          <div className="relative">
            <img
              className="w-full h-auto"
              alt="Background pattern"
              src="/group-31.png"
            />
            {/* Other vector images are omitted for clarity as they're just decorative */}
          </div>
        </div>

        {/* Section heading */}
        <div className="relative z-10 mb-16 px-6 md:px-0 md:ml-[255px]">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <div className="font-h1-up font-[number:var(--h1-up-font-weight)] text-x-900 text-[length:var(--h1-up-font-size)] tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)]">
              PROCESS OVERVIEW
            </div>
            <img
              className="w-[13.91px] h-3"
              alt="Decorative element"
              src="/object.svg"
            />
          </div>
          <h2 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-x-900 text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)]">
            through clair process ...
          </h2>
        </div>

        {/* Process cards */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-center px-6 md:px-0">
          {processSteps.map((step, index) => (
            <Card
              key={step.id}
              className="w-full max-w-[410px] h-[188px] rounded-[20px] border-none shadow-none mx-auto"
            >
              <CardContent className="p-0 h-full">
                <div className="flex h-full">
                  {/* Colored left section with number and icon */}
                  <div className="w-40 h-[168px] m-2.5 bg-home-p rounded-[10px] flex flex-col items-center">
                    <div className="mt-[9px] ml-[9px] self-start [-webkit-text-stroke:1px_#ffffff] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-transparent text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)]">
                      {step.id}
                    </div>
                    {index === 2 ? (
                      <div className="w-[65px] h-[65px] mt-[43px]">
                        <img
                          className="w-[59px] h-[65px] mx-auto"
                          alt={`Process step ${step.id}`}
                          src={step.iconUrl}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-[65px] h-[65px] mt-[43px] bg-cover bg-center"
                        style={{ backgroundImage: `url(${step.iconUrl})` }}
                      />
                    )}
                  </div>

                  {/* Content section */}
                  <div className="flex flex-col ml-[30px] mt-10">
                    <h3 className="font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-x-900 text-[length:var(--heading-h4-font-size)] tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)]">
                      {step.title}
                    </h3>
                    <p className="w-[190px] mt-5 font-body-m font-[number:var(--body-m-font-weight)] text-x-800 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
