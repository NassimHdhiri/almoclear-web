import { ArrowRightIcon, MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-x-100 rounded-[50px]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side illustration */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative">
              <img
                className="w-full max-w-[590px]  mx-auto"
                alt="Background simple"
                src="/contact-us-3.png"
              />
{/* 
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  className="w-[294px] h-auto absolute top-0 left-1/2 -translate-x-1/2"
                  alt="Group"
                  src="/group-40.png"
                />

                <img
                  className="w-[174px] h-auto absolute bottom-0 left-0"
                  alt="Group"
                  src="/group-41.png"
                />

                <img
                  className="w-[174px] h-auto absolute bottom-0 right-0"
                  alt="Group"
                  src="/group-42.png"
                />
              </div> */}

              {/* <img
                className="absolute w-[250px] h-auto top-1/3 right-0"
                alt="Money"
                src="/money.png"
              />

              <img
                className="absolute w-[301px] h-auto top-1/3 left-0"
                alt="Passport"
                src="/passport.png"
              />

              <img
                className="absolute w-[475px] h-auto bottom-0 left-1/2 -translate-x-1/2"
                alt="Earth globe"
                src="/earth-globe.png"
              />

              <img
                className="absolute w-72 h-auto bottom-0 left-1/2 -translate-x-1/2"
                alt="Ubication icons"
                src="/ubication-icons.png"
              />

              <img
                className="absolute w-[129px] h-auto top-0 left-1/2 -translate-x-1/2"
                alt="Character"
                src="/character.png"
              /> */}
            </div>
          </div>

          {/* Right side form */}
          <div className="w-full lg:w-1/2">
            <div className="mb-12">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="font-h1-up text-x-900 tracking-[1.4px] uppercase">
                  CONTACT INFORMATION
                </span>
                <img
                  className="w-[13.91px] h-3"
                  alt="Object"
                  src="/object.svg"
                />
              </div>
              <h2 className="font-bold font-heading-h1 text-x-900 text-[45px] leading-[60px]">
                Let Atmoclear Guide Your Sustainable Journey
              </h2>
            </div>

            <Card className="w-full rounded-[20px] border-none shadow-none">
              <CardContent className="p-10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-body-m text-x-900">
                        Your Email
                      </label>
                      <div className="relative">
                        <Input
                          className="h-[60px] rounded-[999px] border-[#e3dbd8] pl-5 pr-10"
                          placeholder="Your Email"
                        />
                        <StarIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-x-900" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body-m text-x-900">
                        Your Phone
                      </label>
                      <div className="relative">
                        <Input
                          className="h-[60px] rounded-[999px] border-[#e3dbd8] pl-5 pr-10"
                          placeholder="Your Phone"
                        />
                        <PhoneIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-x-900" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body-m text-x-900">
                      Your Address
                    </label>
                    <div className="relative">
                      <Input
                        className="h-[60px] rounded-[999px] border-[#e3dbd8] pl-5 pr-10"
                        placeholder="Your Address"
                      />
                      <MapPinIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-x-900" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body-m text-x-900">Message</label>
                    <div className="relative">
                      <Textarea
                        className="min-h-[130px] rounded-[30px] border-[#e3dbd8] pl-5 pr-10 py-3.5"
                        placeholder="Write Message.."
                      />
                      <StarIcon className="absolute right-4 top-5 h-4 w-4 text-x-900" />
                    </div>
                  </div>

                  <Button className="w-full h-[60px] rounded-[999px] bg-home-p hover:bg-home-p/90 font-button text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-24 relative">
          <Card className="w-full rounded-[20px] shadow-shadow-l overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                <div className="p-10 lg:w-1/2">
                  <h2 className="text-x-900 font-heading-h1 mb-6">
                    Let&apos;s Do Great!
                  </h2>
                  <p className="text-x-800 font-body-m mb-8 max-w-lg">
                    At Atmoclear, we believe in making a difference and
                    we&apos;re here to help you join our journey towards a
                    sustainable future. If you have any questions, feedback, or
                    would like to get involved, we&apos;d love to hear from you!
                  </p>
                  <Button className="rounded-[999px] bg-home-p hover:bg-home-p/90 font-button text-white">
                    Contact us
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="lg:w-1/2 h-[300px] lg:h-auto bg-[#d9d9d9] rounded-b-[20px] lg:rounded-l-none lg:rounded-r-[20px]">
                  <img
                    className="w-full h-full object-cover"
                    alt="Element"
                    src="/------2-1.png"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
