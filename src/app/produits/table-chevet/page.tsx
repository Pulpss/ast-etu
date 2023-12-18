"use client";

import ObjectDisplay from "@/components/object-display";
import { TableChevet } from "@/components/object-display/objects/table-chevet";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <ObjectDisplay>
        <TableChevet />
      </ObjectDisplay>
    </div>
  );
}
