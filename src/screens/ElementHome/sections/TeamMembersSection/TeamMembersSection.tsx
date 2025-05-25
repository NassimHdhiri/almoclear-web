import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TeamMembersSection = (): JSX.Element => {
  // Team members data for easier mapping
  const teamMembers = [
    {
      id: 1,
      name: "Regaieg Khadija",
      position: "CEO",
      image: "/Regaieg-Khadija.png",
      socialIcons: [
        { src: "/social-icon.svg", alt: "Social icon" },
        { src: "/linkedin.svg", alt: "Social media" },
      ],
    },
    {
      id: 2,
      name: "Nabli Malek Taieb",
      position: "Project Manager",
      image:
        "/Koulak-Aymen.png",
      socialIcons: [
        { src: "/social-icon.svg", alt: "Social icon" },
        { src: "/linkedin.svg", alt: "Social media" },
      ],
    },
    {
      id: 3,
      name: "Koulak Aymen",
      position: "Human Resources",
      image:
        "/Koulak-Aymen.png",
      socialIcons: [
        { src: "/social-icon.svg", alt: "Social icon" },
        { src: "/linkedin.svg", alt: "Social media" },
      ],
    },
    {
      id: 4,
      name: "Marai Mohamed Aziz",
      position: "COO",
      image: "/Marai-Mohamed-Aziz.png",
      socialIcons: [
        { src: "/social-icon.svg", alt: "Social icon" },
        { src: "/linkedin.svg", alt: "Social media" },
      ],
    },
    {
      id: 5,
      name: "Jemli Roudeina",
      position: "Media Manager",
      image: "/Jemli-Roudeina.png",
      socialIcons: [
        { src: "/social-icon.svg", alt: "Social icon" },
        { src: "/linkedin.svg", alt: "Social media" },
      ],
    },
    {
      id: 6,
      name: "Jawedi Aya",
      position: "CFO",
      image: "/Jawedi-Aya.png",
      socialIcons: [
        { src: "/social-icon.svg", alt: "Social icon" },
        { src: "/linkedin.svg", alt: "Social media" },
      ],
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2.5">
          <h2 className="font-h1-up font-[number:var(--h1-up-font-weight)] text-x-900 text-[length:var(--h1-up-font-size)] text-center tracking-[var(--h1-up-letter-spacing)] leading-[var(--h1-up-line-height)] whitespace-nowrap [font-style:var(--h1-up-font-style)]">
            TEAM SECTION
          </h2>
          <img className="w-[13.91px] h-3" alt="Object" src="/object.svg" />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <h1 className="max-w-[734px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-x-900 text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)] pb-20">
              Meet our team members
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full max-w-[1184px]">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="rounded-xl overflow-hidden border-none shadow-none"
            >
              <div className="relative h-[309px]">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <CardContent className="p-0">
                <div className="flex flex-col w-full items-start justify-center gap-4 px-6 py-4 bg-[#f8f8f8] rounded-[0px_0px_12px_12px]">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="h-6 mt-[-1.00px] font-[number:var(--title-title-4-18-px-bold-font-weight)] text-[#19191b] text-[length:var(--title-title-4-18-px-bold-font-size)] leading-[var(--title-title-4-18-px-bold-line-height)] w-full font-title-title-4-18-px-bold tracking-[var(--title-title-4-18-px-bold-letter-spacing)] whitespace-nowrap [font-style:var(--title-title-4-18-px-bold-font-style)]">
                      {member.name}
                    </h3>
                    <p className="h-4 font-[number:var(--body-body-2-14-px-medium-font-weight)] text-[#6236f5] text-[length:var(--body-body-2-14-px-medium-font-size)] leading-[var(--body-body-2-14-px-medium-line-height)] w-full font-body-body-2-14-px-medium tracking-[var(--body-body-2-14-px-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-body-2-14-px-medium-font-style)]">
                      {member.position}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    {member.socialIcons.map((icon, index) =>
                      icon.src.endsWith(".svg") ? (
                        <img
                          key={index}
                          className="w-8 h-8"
                          alt={icon.alt}
                          src={icon.src}
                        />
                      ) : (
                        <div
                          key={index}
                          className="w-4 h-4 bg-cover bg-center"
                          style={{ backgroundImage: `url(${icon.src})` }}
                        />
                      ),
                    )}
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
