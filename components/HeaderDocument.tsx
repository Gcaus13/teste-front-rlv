"use client";

import { FilterDrawer } from "@/components/FilterDrawer";
import InputSearch from "@/components/inputSearch";

export default function Home() {
  return (
    <>
      <div className="gap-6 flex flex-col">
        <div className="flex flex-row gap-4 justify-between">
          <div>
            <p className="text-2xl font-bold text-neutral-700">Documentos</p>
            <span className="text-sm text-neutral-500">
              Crie, gerencie e visualize os documentos
            </span>
          </div>
          <div className="flex flex-row">
            <InputSearch />
            <FilterDrawer />
          </div>
        </div>
        <hr className="border-t border-neutral-200" />
      </div>
    </>
  );
}
