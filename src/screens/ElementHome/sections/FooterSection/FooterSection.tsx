import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";

// Define footer data for mapping
const companyLinks = [
  { title: "About" },
  { title: "Our Mission" },
  { title: "Contact" },
];

const resourceLinks = [
  { title: "Blog" },
  { title: "Help Center" },
  { title: "Support" },
];

const socialLinks = [
  {
    title: "Follow us on Facebook",
    icon: <FacebookIcon className="h-6 w-6" />,
    bgImage: null,
    link: "https://www.youtube.com/",
  },
  {
    title: "Follow us on Instagram",
    icon: <InstagramIcon className="h-6 w-6" />,
    bgImage: null,
    link: "https://www.youtube.com/",
  },
  {
    title: "Follow us on LinkedIn",
    icon: <LinkedinIcon className="h-6 w-6" />,
    bgImage: null,
    link: "https://www.youtube.com/",

  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-backgrounddark-green py-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Brand */}
          <div className="mb-12 flex items-center">
            <img
              className="h-[33px] w-[110px]"
              alt="Brand logo"
              src="/brand-logo.svg"
            />
            <div className="ml-4 font-label-200 text-contentreversed">
              ATMOCLEAR
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex gap-8">
            {/* Company Links */}
            <div className="flex flex-col gap-6">
              <div className="font-label-200 text-contentreversed">Company</div>
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-body-200 text-contentalpha-80 hover:text-contentreversed transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>

            {/* Resource Links */}
            <div className="flex flex-col gap-6">
              <div className="font-label-200 text-contentreversed">
                Resources
              </div>
              {resourceLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-body-200 text-contentalpha-80 hover:text-contentreversed transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col gap-4 w-64">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="flex items-center gap-4 rounded-[100px] bg-[#ffffff3d] p-1 hover:bg-[#ffffff52] transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[100px] bg-backgroundgreen">
                  {social.icon}
                </div>
                <div className="flex-1 font-label-200 text-contentreversed">
                  {social.title}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="relative mt-8">
          <img className="w-[850px] " alt="Lines"  />
        </div>

        {/* Copyright */}
        <div className="  text-right align-center" >
          <div className="font-body-300 text-contentalpha-80 flex justify-center mb-0  ">
            © 2024 Atmoclear. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
