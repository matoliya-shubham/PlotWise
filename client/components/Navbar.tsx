import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "@/public/logo.svg";
import { MapPinHouse } from "lucide-react";

export default function Navbar() {
  return (
    <div
      className="fixed left-0 top-0 z-50 w-full shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-primary-700 text-white">
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-3">
              <MapPinHouse className="w-8 h-8 text-white" />
              <div className="text-xl font-bold">
                Plot
                <span className="text-secondary-500 font-light hover:!text-primary-300">
                  Wise
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-200 hidden md:block">
          Discover your perfect plot with our advanced search
        </p>
        <div className="flex items-center gap-5">
          <Link href="/signin">
            <Button
              variant="outline"
              className="text-white border-white bg-transparent hover:bg-white hover:text-primary-700 rounded-lg"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              variant="secondary"
              className="text-white bg-secondary-600 hover:bg-white hover:text-primary-700 rounded-lg"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
