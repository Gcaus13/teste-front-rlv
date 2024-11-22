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

interface Document {
  id: string;
  name: string;
  issuer: string;
  totalTaxes: string;
  netValue: string;
  creationDate: string;
  lastUpdate: string;
  code: string;
}

interface TableProps {
  data: Document[];
}

export default function DocumentTable({ data }: TableProps) {
  return (
    <div className="w-full overflow-auto border border-neutral-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px] text-center">#</TableHead>
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
          {data.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell className="text-center">
                <Checkbox />
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
                    <ul className="">
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
        </TableBody>
      </Table>
    </div>
  );
}
