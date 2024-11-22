import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Atualizar um documento pelo ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const body = await req.json();

    const updatedDocument = await prisma.document.update({
      where: isNaN(parseInt(id))
        ? { code: id } // Se não for número, busca pelo código
        : { id: parseInt(id, 10) }, // Caso contrário, busca pelo ID
      data: {
        name: body.name,
        issuer: body.issuer,
        totalTaxes: parseFloat(body.totalTaxes.replace("R$", "").replace(",", ".")),
        netValue: parseFloat(body.netValue.replace("R$", "").replace(",", ".")),
        lastUpdate: new Date(body.lastUpdate),
        code: body.code,
      },
    });

    return NextResponse.json(updatedDocument, { status: 200 });
  } catch (error) {
    console.error("Erro ao atualizar documento:", error);
    return NextResponse.json(
      { error: "Documento não encontrado ou erro na atualização" },
      { status: 404 }
    );
  }
}

// Deletar um documento pelo ID
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.document.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "Documento deletado com sucesso" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Documento não encontrado" }, { status: 404 });
  }
}