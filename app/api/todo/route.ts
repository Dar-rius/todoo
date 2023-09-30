import {main} from "@/app/api/project/route";
import prisma from "@/prisma";
import {type NextRequest, NextResponse} from "next/server";

export async function POST(req:Request, res:NextResponse){
    try {
        const {content, projectId} = await req.json()
        await main()
        await prisma.todo.create({
            data:{
                content,
                projectId
            }
        })
        return NextResponse.json({message:"Data validate"}, {status: 201})
    } catch{
        return NextResponse.json({message: "Data don't invalidate"}, {status: 500})
    } finally {
        prisma.$disconnect()
    }
}