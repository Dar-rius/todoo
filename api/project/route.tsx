import prisma from "@/prisma"
import {NextResponse} from "next/server";
import {Request} from "next/dist/compiled/@edge-runtime/primitives";

async function main(){
   try{
       prisma.$connect()
   }catch (err){
       console.log(err)
   }
}

export const AddProject = async (req: Request, res: NextResponse) =>{
    try{
        await main()
        let name = await req.json()
        await prisma.project.create({
            data: {
                name: name,
            }
        })
        NextResponse.json({message:"data validate"}, {status:201})
    } catch{
        NextResponse.json({message:"Error data don't validate"}, {status:500})
    } finally {
        prisma.$disconnect()
    }
}

export const DeleteProject = async(_id:number, req: Request, res: NextResponse) =>{
    try{
        await main()
        await prisma.project.delete({
            where: {
                id: _id
            }
        })
        NextResponse.json({message:"Delete success"}, {status:200})
    }
    catch{
        NextResponse.json({message:"Delete data failed"}, {status:404})
    }
    finally {
        prisma.$disconnect()
    }
}