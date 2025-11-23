"use client";

import { Vortex } from "@/components/ui/vortex";

export default function Page() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex flex-col items-center justify-center w-full h-full px-4 md:px-10"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Website Under Development
        </h2>

        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          We’re working hard to bring you an amazing experience.
          Stay tuned Your website will be live soon with complete features and updates.
        </p>

      </Vortex>
    </div>
  );
}
