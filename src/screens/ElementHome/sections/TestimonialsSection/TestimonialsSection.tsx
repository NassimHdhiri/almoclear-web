import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  // Testimonial data
  const testimonial = {
    quote:
      "Leverage agile frameworks to provide a robust syns is for strategy foster Leverage agile frameworks to provide a robust synopsis for go for strategy foster",
    author: "Eleanor Pena",
    position: "President of Sales",
  };

  return (
    <section className="w-full py-12 relative">
      <div className="container mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="font-h1-up text-x-900 text-center tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)]">
              CLIENT TESTIMONIALS
            </div>
            <img
              className="w-[14.24px] h-3"
              alt="Frame"
              src="/frame-1000009710.svg"
            />
          </div>
          <h1 className="max-w-[734px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-x-900 text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
            Escape to Extraordinary Where Every Journey
          </h1>
        </div>

        {/* Testimonials Content */}
        <div className="flex flex-row gap-8 relative">
          {/* Testimonial Card */}
          <Card className="w-full max-w-[740px] rounded-[20px] shadow-shadow-l relative">
            <CardContent className="p-[60px]">
              {/* Background decoration */}
              <div className="absolute w-[334px] h-[261px] top-[72px] right-[60px] opacity-20 bg-[url(/group-23.png)] bg-[100%_100%]" />

              {/* Testimonial text */}
              <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-x-900 text-3xl tracking-[0] leading-[50px] mb-12 relative z-10">
                {testimonial.quote}
              </p>

              {/* Author info */}
              <div className="flex items-center">
                <Avatar className="w-20 h-20 rounded-full bg-[#d9d9d9]">
                  <AvatarFallback>EP</AvatarFallback>
                </Avatar>
                <div className="ml-[20px]">
                  <h3 className="font-heading-h3 text-x-900 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)]">
                    {testimonial.author}
                  </h3>
                  <p className="font-body-m text-x-800 text-[length:var(--body-m-font-size)] tracking-[var(--body-m-letter-spacing)] leading-[var(--body-m-line-height)]">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image placeholder */}
          <div className="w-[630px] h-[611px] bg-[#d9d9d9] rounded-[20px]" />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-end gap-5 mt-[-60px] ml-[540px] relative z-10">
          <button className="w-[62px] h-[60px] flex items-center justify-center relative">
            <div className="relative w-40 h-40 -top-11 left-[-50px] bg-[url(/group-24.png)] bg-[100%_100%] flex items-center justify-center">
              <ArrowLeftIcon className="text-x-900" />
            </div>
          </button>
          <button className="w-[62px] h-[60px] flex items-center justify-center">
            <div className="w-[60px] h-[60px] bg-[url(/ellipse-1.svg)] bg-[100%_100%] flex items-center justify-center">
              <ArrowRightIcon className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
