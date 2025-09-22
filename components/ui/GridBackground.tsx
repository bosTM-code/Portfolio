import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black-100 absolute top-0 left-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:80px_80px]",

          "[background-image:linear-gradient(to_right,#262626_0.03,transparent_1px),linear-gradient(to_bottom,#262626_0.03,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100" />
    </div>
  );
}
