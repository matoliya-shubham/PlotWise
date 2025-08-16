"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CtaImage from "@/public/landing-call-to-action.jpg";

const CallToActionSection = () => {
  return (
    <div className="relative border-red-600 bg-white py-24">
      <Image
        src={CtaImage}
        alt="Call To Action Section Background"
        fill
        className="absolute top-0 object-cover object-center"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12 xl:max-w-6xl xl:px-16"
      >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mr-10 md:mb-0">
            <h2 className="text-2xl font-bold text-white">
              Find Your Dream Rental Property
            </h2>
          </div>
          <div>
            <p className="mb-3 text-white">
              Discover a wide range of properties in your desired location.
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-primary-700 hover:bg-primary-500 hover:text-primary-50 inline-block rounded-lg bg-white px-6 py-3 font-semibold"
              >
                Search
              </button>
              <Link
                href="/signup"
                className="bg-secondary-500 hover:bg-secondary-600 inline-block rounded-lg px-6 py-3 font-semibold text-white"
                scroll={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CallToActionSection;
