import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <Image
        src="/home/header-logo.svg"
        alt="logo"
        height={100}
        width={100}
        className="animate-pulse"
        priority={false}
      />
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
