"use client";

import DocumentTable from "@/components/DocumentTable";
import HeaderDocument from "@/components/HeaderDocument";
import SelectFilter from "@/components/SelectFilter";

const documents = [
  {
    id: "1",
    name: "Documento 1",
    issuer: "Empresa X",
    totalTaxes: "R$ 1.200,00",
    netValue: "R$ 10.000,00",
    creationDate: "22/11/2023",
    lastUpdate: "22/11/2024",
    code: "1234",
  },
  {
    id: "2",
    name: "Documento 2",
    issuer: "Empresa Y",
    totalTaxes: "R$ 800,00",
    netValue: "R$ 5.000,00",
    creationDate: "21/11/2023",
    lastUpdate: "22/11/2024",
    code: "5678",
  },
];

export default function Home() {
  return (
    <>
      <div className=" flex flex-col gap-6 p-8">
        <HeaderDocument />
        <SelectFilter />
        <DocumentTable data={documents} />
      </div>
    </>
  );
}
