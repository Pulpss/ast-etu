"use client";

import ObjectDisplay from "@/components/object-display";
import { Lit } from "@/components/object-display/objects/lit";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <ObjectDisplay>
        <Lit />
      </ObjectDisplay>
    </div>
  );
}
