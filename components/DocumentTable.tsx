"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, FileText } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { useDocumentStore } from "@/store/useDocumentStore";

export default function DocumentTable() {
  const { documents, fetchDocuments } = useDocumentStore();

  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  useEffect(() => {
    fetchDocuments(); // Carregar os documentos na montagem do componente
  }, [fetchDocuments]);

  const totalPages = Math.ceil(documents.length / rowsPerPage);
  const paginatedData = documents.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked);
    if (checked) {
      setSelectedRows(paginatedData.map((doc) => doc.id));
    } else {
      setSelectedRows([]);
    }
  };

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const handleRowSelection = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows((prev) => [...prev, id]);
    } else {
      setSelectedRows((prev) => prev.filter((rowId) => rowId !== id));
    }
  };

  // Totais
  const totalDocuments = documents.length;
  const totalIssuers = new Set(documents.map((doc) => doc.issuer)).size;
  const totalTaxes = documents.reduce((sum, doc) => {
    const taxValue =
      typeof doc.totalTaxes === "string"
        ? parseFloat(
            doc.totalTaxes
              .replace("R$", "")
              .replace(/\./g, "")
              .replace(",", ".")
              .trim()
          )
        : doc.totalTaxes; // Já é um número
    return sum + (isNaN(taxValue) ? 0 : taxValue);
  }, 0);

  const totalNetValue = documents.reduce((sum, doc) => {
    const netValue =
      typeof doc.netValue === "string"
        ? parseFloat(
            doc.netValue
              .replace("R$", "")
              .replace(/\./g, "")
              .replace(",", ".")
              .trim()
          )
        : doc.netValue; // Já é um número
    return sum + (isNaN(netValue) ? 0 : netValue);
  }, 0);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Tabela */}
      <div className="w-full overflow-auto border border-neutral-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">
                <Checkbox
                  checked={selectAll}
                  onCheckedChange={(checked) =>
                    handleSelectAll(checked === true)
                  }
                />
              </TableHead>
              <TableHead>Nome do Documento</TableHead>
              <TableHead>Emitente</TableHead>
              <TableHead>Valor Total dos Tributos</TableHead>
              <TableHead>Valor Líquido</TableHead>
              <TableHead>Data de Criação</TableHead>
              <TableHead>Última Atualização</TableHead>
              <TableHead className="w-[50px] text-center"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="text-center">
                  <Checkbox
                    checked={selectedRows.includes(doc.id)}
                    onCheckedChange={(checked) =>
                      handleRowSelection(doc.id, checked === true)
                    }
                  />
                </TableCell>
                <TableCell className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary-600" />
                  <div className="flex flex-col text-sm text-neutral-900">
                    <span className="text-xs text-neutral-500">
                      Cód. {doc.code}
                    </span>
                    {doc.name}
                  </div>
                </TableCell>
                <TableCell>{doc.issuer}</TableCell>
                <TableCell>{doc.totalTaxes}</TableCell>
                <TableCell>{doc.netValue}</TableCell>
                <TableCell>{doc.creationDate}</TableCell>
                <TableCell>{doc.lastUpdate}</TableCell>
                <TableCell className="text-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-5 h-5" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <ul className="space-y-2">
                        <li>
                          <Button variant="ghost" className="w-full">
                            Editar
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full">
                            Excluir
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full">
                            Detalhes
                          </Button>
                        </li>
                      </ul>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}

            {/* Linha fixa de totais */}
            <TableRow className="bg-neutral-100">
              <TableCell className="text-center font-bold"></TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">Total</span>
                  <span className="text-sm text-neutral-900">
                    {totalDocuments} Documentos
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">
                    nº de emitentes
                  </span>
                  <span className="text-sm text-neutral-900">
                    {totalIssuers} Emitentes
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">
                    Total de tributos
                  </span>
                  <span className="text-sm text-neutral-900">
                    R$ {totalTaxes.toFixed(2)}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-xs text-neutral-500">
                    Total valor líquido
                  </span>
                  <span className="text-sm text-neutral-900">
                    R$ {totalNetValue.toFixed(2)}
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center"></TableCell>
              <TableCell className="text-center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-end px-4 py-2 gap-4">
        <p className="text-sm">
          Página <span className="font-bold">{currentPage}</span> de{" "}
          <span className="font-bold">{totalPages}</span>
        </p>
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          variant="outline"
        >
          Anterior
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
