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
          Welcome to 9sols.com, the pulsing heart of the Solana blockchain where cats don't just have nine lives—they also have nine sols! Meet $9Lives, your ticket to not just making a meme out of thin air but making a difference in the lives of our feline friends.

Why are we here? To scratch behind the ears of convention and claw at the walls of the mundane. Launched by the purr-fectly capable hands of Rico Moneybags, a developer whose love for cats is only outmatched by his coding skills, 9Lives isn't just a project—it's a mission!

Join our crusade as we team up with TheCat (a.k.a Gato), a hero running a cat shelter in Chile, featured on Twitter as @morfeox23. With every transaction, with every meme shared, and with every sol we save, we're not just supporting a cause; we're building a community of cat lovers with a purpose.

What’s our goal? Simple: Save sols and souls. We believe in laughter, the power of memes, and the genuine good of supporting animal welfare. Under the watchful eyes of our trusted dev Rico Moneybags—find him @RicoMoneybags on Twitter and YouTube—we're not just building a platform; we're crafting a legacy.

How to get involved?

Twitter: Follow us at @9solssolana for your daily dose of cat memes and project updates.
Telegram: Join the 9 Lives Community here and be a part of the meowvement!
Whether you're here to make profits or make a difference (or both!), at 9Lives, every little bit helps as we support not just any cats—your cats, stray cats, every cat.

Remember: When you invest in $9Lives, you're not just investing in a project. You're investing in nine lives, nine sols, and one un-fur-gettable adventure. Let's make the internet purr, one meme at a time!
          </p>
          <div className="flex flex-row justify-start mt-8">
          
             
           
            
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
