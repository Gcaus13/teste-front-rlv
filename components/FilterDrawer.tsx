"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";

export function FilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botão para abrir o Drawer */}
      <Sheet open={isOpen} onOpenChange={toggleDrawer}>
        <SheetTrigger asChild>
          <Button
            className="flex items-center px-4 py-2 border border-neutral-300 rounded-lg text-sm font-medium gap-2"
            variant="outline"
          >
            <Filter className="w-5 h-5 text-neutral-700" />
            Filtrar
          </Button>
        </SheetTrigger>

        {/* Conteúdo do Drawer */}
        <SheetContent className="p-6">
          <SheetHeader>
            <h2 className="text-lg font-semibold">Opções de Filtro</h2>
          </SheetHeader>
          <div className="mt-4">
            {/* Conteúdo das opções de filtro */}
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="categoria"
                  className="block text-sm font-medium"
                >
                  Categoria
                </label>
                <select
                  id="categoria"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-sm"
                >
                  <option value="">Selecione</option>
                  <option value="categoria1">Categoria 1</option>
                  <option value="categoria2">Categoria 2</option>
                </select>
              </div>

              <div>
                <label htmlFor="status" className="block text-sm font-medium">
                  Status
                </label>
                <select
                  id="status"
                  className="w-full mt-1 px-4 py-2 border rounded-lg text-sm"
                >
                  <option value="">Selecione</option>
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </select>
              </div>
            </div>
          </div>

          {/* Botão de Aplicar */}
          <div className="mt-6">
            <Button
              className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              onClick={() => {
                setIsOpen(false); // Fecha o drawer ao aplicar
              }}
            >
              Aplicar Filtros
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
