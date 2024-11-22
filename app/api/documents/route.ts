import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { search } = Object.fromEntries(new URL(req.url).searchParams);

  try {
    const documents = await prisma.document.findMany({
      where: search
        ? {
            OR: [
              { name: { contains: search } },
              { issuer: { contains: search } },
            ],
          }
        : undefined,
    });

    return NextResponse.json(documents);
  } catch (error) {
    console.error("Erro ao buscar documentos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar documentos" },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  const body = await req.json();

  const newDocument = await prisma.document.create({
    data: {
      name: body.name,
      issuer: body.issuer,
      totalTaxes: parseFloat(body.totalTaxes.replace("R$", "").replace(",", ".")),
      netValue: parseFloat(body.netValue.replace("R$", "").replace(",", ".")),
      creationDate: new Date(body.creationDate),
      lastUpdate: new Date(body.lastUpdate),
      code: body.code,
    },
  });

  return NextResponse.json(newDocument, { status: 201 });
}