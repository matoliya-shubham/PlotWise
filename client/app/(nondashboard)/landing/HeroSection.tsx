"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import HeroImage from "@/public/landing-splash.jpg";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleLocationSearch = () => {
    // Implement location search logic here
  };
  return (
    <div className="relative h-screen">
      <Image
        src={HeroImage}
        alt="PlotWise Hero Section"
        fill
        className="object-cover object-center"
        priority
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/3 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center"
      >
        <div className="mx-auto max-w-5xl px-16 sm:px-12">
          <h1 className="mb-4 text-5xl leading-[1.2] font-bold text-white">
            Your next chapter starts with the right address, perfectly matched
            to your needs.
          </h1>
          <p className="mb-8 text-xl text-white">
            Discover your ideal property effortlessly with our powerful,
            customizable filters.
          </p>

          <div className="flex justify-center">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, neighborhood or address"
              className="placeholder:text-secondary-300 h-12 w-full max-w-lg rounded-none rounded-l-xl border-none bg-white placeholder:opacity-70"
            />
            <Button
              onClick={handleLocationSearch}
              className="bg-secondary-500 hover:bg-secondary-600 h-12 rounded-none rounded-r-xl border-none text-white"
            >
              Search
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
