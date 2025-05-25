import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SponsorsSection = (): JSX.Element => {
  // Data for composition cards
  const compositionCards = [
    {
      id: 1,
      amount: "20 g",
      description: "spirutual",
      iconSrc: "/group-2.png",
      isComplexIcon: true,
    },
    {
      id: 2,
      amount: "40 ml",
      description: "flaiou",
      iconSrc: "/group.png",
      isComplexIcon: false,
    },
    {
      id: 3,
      amount: "12 g",
      description: "zhar",
      iconSrc: "/group-9.png",
      isComplexIcon: false,
    },
    {
      id: 4,
      amount: "20 g",
      description: "aaaaaaaaaterchiyaaaa",
      iconSrc: "/group-1.png",
      isComplexIcon: false,
    },
  ];

  return (
    <section className="w-full py-8 " id="Composition information section">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Video preview section */}
         <div className="flex-1">
          <Card className="bg-[#d9d9d9] rounded-[20px] h-full flex items-center justify-center">
            <CardContent className="p-0 w-full h-full flex items-center justify-center">
              <iframe
                className="w-full h-full rounded-[20px]"
                src="https://www.youtube.com/embed/AkM-BgOpEhM"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </div>
          {/* Composition information section */}
          <div className="flex-1">
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="font-h1-up text-x-900 tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)]">
                  COMPOSITIONS
                </span>
                <img
              className="w-[13.91px] h-3"
              alt="Decorative element"
              src="/object.svg"
            />
              </div>
              <h2 className="max-w-[734px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-x-900 text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Let&apos;s see the composition Almoclear
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {compositionCards.map((card) => (
                <Card key={card.id} className="rounded-[20px] shadow-shadow-l">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-16 h-16 bg-home-p rounded-[32px] flex items-center justify-center mr-6">
                      {card.isComplexIcon ? (
                        <div className="relative w-[30px] h-[30px] overflow-hidden">
                          <div className="relative w-[26px] h-[30px] left-0.5">
                            <div className="absolute w-[26px] h-[13px] top-[17px] left-0 bg-[url(/group-2.png)] bg-[100%_100%]" />
                            <div className="absolute w-[7px] h-[7px] top-0 left-2.5 bg-[url(/group-3.png)] bg-[100%_100%]" />
                            <div className="absolute w-[13px] h-[7px] top-2 left-[7px] bg-[url(/group-4.png)] bg-[100%_100%]" />
                            <div className="absolute w-1.5 h-1.5 top-0.5 left-[3px] bg-[url(/group-5.png)] bg-[100%_100%]" />
                            <div className="absolute w-[5px] h-[7px] top-[9px] left-0 bg-[url(/group-6.png)] bg-[100%_100%]" />
                            <div className="absolute w-1.5 h-1.5 top-0.5 left-[17px] bg-[url(/group-7.png)] bg-[100%_100%]" />
                            <div className="absolute w-[5px] h-[7px] top-[9px] left-[21px] bg-[url(/group-8.png)] bg-[100%_100%]" />
                          </div>
                        </div>
                      ) : (
                        <div className="w-[30px] h-[30px] flex items-center justify-center">
                          <img
                            className="max-w-full max-h-full"
                            alt="Composition icon"
                            src={card.iconSrc}
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-heading-h1 text-x-900 text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)]">
                        {card.amount}
                      </div>
                      <div className="font-body-m text-x-800 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)] mt-4">
                        {card.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
