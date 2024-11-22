import React from "react";
import Dropdown from "@/components/Combobox";
import { Button } from "@/components/ui/button";
import { HelpCircle, Plus } from "lucide-react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const SelectFilter = () => {
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-8">
        <div>
          <div className="flex items-center mb-[2px] gap-1">
            <p className="text-sm font-bold text-neutral-700">
              Origem do documento
            </p>
            <HelpCircle className="w-4 h-4 text-neutral-400" />
          </div>
          <Dropdown
            options={frameworks}
            placeholder="Select framework..."
            onSelect={handleSelect}
            initialValue="next.js"
          />
        </div>
        <div>
          <div className="flex items-center mb-[2px] gap-1">
            <p className="text-sm font-bold text-neutral-700">
              Tipo documental
            </p>
            <HelpCircle className="w-4 h-4 text-neutral-400" />
          </div>
          <Dropdown
            options={frameworks}
            placeholder="Select framework..."
            onSelect={handleSelect}
            initialValue="next.js"
          />
        </div>
      </div>
      <div>
        <Button className="mt-6 flex items-center gap-2 bg-primary-500 text-white rounded-sm font-medium h-10">
          <Plus className="w-4 h-4" />
          Novo documento
        </Button>
      </div>
    </div>
  );
};

export default SelectFilter;
