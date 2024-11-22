"use client";

import React from "react";
import Dropdown from "@/components/Combobox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HelpCircle, Plus } from "lucide-react";
import { useDocumentStore } from "@/store/useDocumentStore";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const SelectFilter = () => {
  const {
    isModalOpen,
    toggleModal,
    formData,
    resetForm,
    updateForm,
    addDocument,
  } = useDocumentStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateForm(name as keyof typeof formData, value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/documents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar documento");
      }

      const newDocument = await response.json();
      addDocument(newDocument);
      resetForm();
      toggleModal(); // Fecha a modal
    } catch (error) {
      console.error(error);
    }
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
            onSelect={(value) => console.log("Selected value:", value)}
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
            onSelect={(value) => console.log("Selected value:", value)}
            initialValue="next.js"
          />
        </div>
      </div>

      <div>
        <Dialog open={isModalOpen} onOpenChange={toggleModal}>
          <DialogTrigger asChild>
            <Button className="mt-6 flex items-center gap-2 bg-primary-500 text-white rounded-sm font-medium h-10">
              <Plus className="w-4 h-4" />
              Novo documento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Novo Documento</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Input
                name="name"
                placeholder="Nome do Documento"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="issuer"
                placeholder="Emitente"
                value={formData.issuer}
                onChange={handleChange}
              />
              <Input
                name="totalTaxes"
                placeholder="Total de Tributos (ex.: R$ 1200,00)"
                value={formData.totalTaxes}
                onChange={handleChange}
              />
              <Input
                name="netValue"
                placeholder="Valor Líquido (ex.: R$ 10000,00)"
                value={formData.netValue}
                onChange={handleChange}
              />
              <Input
                name="creationDate"
                placeholder="Data de Criação (YYYY-MM-DD)"
                value={formData.creationDate}
                onChange={handleChange}
              />
              <Input
                name="lastUpdate"
                placeholder="Última Atualização (YYYY-MM-DD)"
                value={formData.lastUpdate}
                onChange={handleChange}
              />
              <Input
                name="code"
                placeholder="Código"
                value={formData.code}
                onChange={handleChange}
              />
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={resetForm}>
                Cancelar
              </Button>
              <Button onClick={handleSubmit}>Salvar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SelectFilter;
