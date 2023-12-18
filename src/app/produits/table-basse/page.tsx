"use client";

import ObjectDisplay from "@/components/object-display";
import { TableBasse } from "@/components/object-display/objects/table-basse";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <ObjectDisplay>
        <TableBasse />
      </ObjectDisplay>
    </div>
  );
}
