import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 ">
      <div className="padding-container max-container flex flex-col w-full gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href={"/"} className="mb-10 ">
            <Image src={"hilink-logo.svg"} alt="log" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((cols, i) => (
              <FooterCol title={cols.title} key={i}>
                <ul className="regular-14 flex flex-col text-gray-30">
                  {cols.links.map((link, i) => (
                    <Link href="/" key={i}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterCol>
            ))}

            <div className="flex flex-col gap-5 ">
              <FooterCol title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, i) => (
                  <Link
                    href={"/"}
                    key={i}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterCol>
            </div>
            <div className="flex flex-col gap-5 ">
              <FooterCol title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link, i) => (
                    <Link href={"/"} key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterCol>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20 " />
        <p className="regular-14 w-full text-center text-gray-30">
          {new Date().getFullYear() + ` Hilink | All rights reserved`}
        </p>
      </div>
    </footer>
  );
};

type FooterColProps = {
  title: string;
  children: React.ReactNode;
};

const FooterCol = ({ title, children }: FooterColProps) => {
  return (
    <div className="flex flex-col gap-5 ">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
