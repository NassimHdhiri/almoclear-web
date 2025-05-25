import { CheckSquareIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const GroundbreakingInitiativesSection = (): JSX.Element => {
  // Data for benefits to enable mapping
  const benefits = [
    {
      id: 1,
      title: "Captures CO2 and Purifies the Air",
      description:
        "Our algae-based paint absorbs carbon dioxide, pollutants, and particulate matter, improving air quality and reducing greenhouse gases.",
    },
    {
      id: 2,
      title: "Eco-Friendly Materials",
      description:
        "Made from locally sourced Spirulina, our paint supports sustainable development by utilizing locally available resources and reducing production costs.",
    },
    {
      id: 3,
      title: "Eco-Friendly Materials",
      description:
        "Beyond its environmental impact, our paint provides vibrant, aesthetic solutions for walls, ceilings, and exterior surfaces.",
    },
  ];

  return (
    <section className="w-full max-w-[1578px] mx-auto py-16">
      

      <Card className="relative rounded-[50px] overflow-hidden">
        
        <CardContent className="p-0 flex flex-row">
          
          <div className="w-[960px] bg-x-100 rounded-[32px] m-[54px_0_34px_30px] p-12 relative">
            <span>Our Groundbreaking Solution</span>
            <img
              className="w-3.5 h-3 absolute top-[47px] left-[378px]"
              alt="Object"
              src="/object.svg"
            />

            <div className="mt-[49px] font-body-m text-x-800">
              At Atmoclear, we&apos;re proud to introduce our flagship product —
              an algae-based paint that not only transforms spaces but also
              transforms the environment. This innovative paint captures CO2
              from the air, purifies it, and contributes to healthier indoor and
              outdoor spaces. Here&apos;s how it works:
            </div>

            <div className="mt-[77px]">
              <div className="font-body-m text-black">Key Benefits:</div>

              <div className="mt-10 space-y-8">
                {benefits.map((benefit) => (
                  <div key={benefit.id} className="relative">
                    <h4 className="font-heading-h4 text-x-900 ml-[26px]">
                      {benefit.title}
                    </h4>
                    <p className="font-body-m text-x-800 mt-2">
                      {benefit.description}
                    </p>
                    <CheckSquareIcon className="absolute text-home-p text-base left-0 top-[28px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <img
              className="w-[502px] h-[754px] object-cover absolute top-1.5"
              alt="Atmoclear paint product"
              src="/product.png"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

