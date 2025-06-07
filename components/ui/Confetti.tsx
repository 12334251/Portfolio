"use client";

import { useLottie } from "lottie-react";
import animationData from "@/data/confetti.json";

interface ConfettiProps {
  play: boolean;
  width: string;
  height: string;
}

export default function Confetti({ play, width, height }: ConfettiProps) {
  const options = { animationData, loop: play, autoplay: play };
  const { View } = useLottie(options);
  return (
    <div
      // allow % or px values
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
      }}
    >
      {View}
    </div>
  );
}
