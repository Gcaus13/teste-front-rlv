"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDocumentStore } from "@/store/useDocumentStore";

export default function CreateDocumentModal() {
  const { addDocument } = useDocumentStore();

  const [formData, setFormData] = useState({
    name: "",
    issuer: "",
    totalTaxes: "",
    netValue: "",
    creationDate: "",
    lastUpdate: "",
    code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ Novo Documento</Button>
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
          <Button variant="ghost" onClick={() => {}}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
