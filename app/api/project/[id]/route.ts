import { main } from "../route";
import { type NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const id = Number(params.id);
    await main();
    await prisma.todo.deleteMany({
      where: {
        projectId: id,
      },
    });
    await prisma.project.delete({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ message: "Data deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Id not found" }, { status: 404 });
  } finally {
    prisma.$disconnect();
  }
}
