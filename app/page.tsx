"use client";

import DocumentTable from "@/components/DocumentTable";
import HeaderDocument from "@/components/HeaderDocument";
import SelectFilter from "@/components/SelectFilter";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-6 p-8">
        <HeaderDocument />
        <SelectFilter />
        <DocumentTable />
      </div>
    </>
  );
}
