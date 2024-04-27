"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
    9Sols{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Cats",
                1000,
                "Have",
                1000,
                "9",
                1000,
                "Sols",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to 9 Lives - Where Every Sol Counts!
          </p>
          <div>
          <Link
  href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=3EyXMFoZvdag1evXsoHU5BtxcxjaF7vnJvd3SxSNkqm8&fixed=in"
  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-400 to-blue-600 hover:bg-slate-200 text-white"
>
  buy
</Link>

<Link
  href="https://www.dextools.io/app/en/solana/pair-explorer/ASThX5XiNkwyxa6Hm2UuzwioYvs21i9SvfsSMEDoQ2Xy"
  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-transparent border border-blue-300 hover:bg-slate-800 text-white mt-3"
>
  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
    Dextools
  </span>
</Link>

          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-blue-200 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">

            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
