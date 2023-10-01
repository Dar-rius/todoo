import { type NextRequest, NextResponse } from "next/server";
import { main } from "@/app/api/project/route";
import prisma from "@/prisma";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    await main();
    await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        stat: true,
      },
    });
    return NextResponse.json({ message: "data updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 404 });
  } finally {
    prisma.$disconnect();
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    await main();
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "task delete" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Id don't found" }, { status: 404 });
  } finally {
    prisma.$disconnect;
  }
}
