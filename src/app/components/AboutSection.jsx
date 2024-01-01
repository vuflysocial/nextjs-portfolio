"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Why Upgrade?",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Brand New</li>
        <li>Faster</li>
        <li>Sexier</li>
        <li>Drastically Less Auto Shop tune ups</li>
      </ul>
    ),
  },
 
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Solclaren is a Brand new , not used Mclaren on the Solana blockchain
            ready to solve all your used car problems. No more constantly going in to get your car checked every couple weeks cause it keeps falling apart. No more ugly sounding loud mufflers. No more people passing you on the highway
            becuase you cant get your Rpm up fast enough. No more people giving you the side eye cause you stepped out a 2001 honda with the emblem falling off. Upgrade your life with Solclaren.
          </p>
          <div className="flex flex-row justify-start mt-8">
          
             
           
            
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
