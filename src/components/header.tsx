"use client";
import { CustomButton } from "@/modules/core/components/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const MenuClassName = "text-base font-bold text-gray-50 hover:text-gray-300";
  return (
    <div className="flex items-center justify-between p-6">
      <a className="flex items-center">
        <Image
          className="h-8 xw-auto sm:h-10"
          src="/home/header-logo.svg"
          alt=""
          height={40}
          width={40}
        />
        <span className="hidden lg:inline text-white font-semibold ml-5 text-xl">
          Women&apos;s&nbsp;Business&nbsp;Club
        </span>
      </a>
      <div className="flex gap-10 items-center">
        <Link href="/awards" className={MenuClassName}>
          Awards
        </Link>
        <Link href="/conference" className={MenuClassName}>
          Conference
        </Link>
        <Link href="/events" className={MenuClassName}>
          Events
        </Link>
        <Link href="/membership" className={MenuClassName}>
          Membership
        </Link>
        {/* <Link href="/leaders"> */}
        <Link
          href="https://news.womensbusiness.club"
          target="_blank"
          className={MenuClassName}
        >
          News
        </Link>

        <CustomButton
          type="button"
          text="CLUBHOUSE"
          onClick={() => window.open("/login", "_blank")}
          className="button text-base font-bold bg-primary-light text-brand-white px-4 py-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default Header;
