import prisma from "@/prisma"
import {NextResponse, NextRequest} from "next/server";

export async function main(){
   try{
       prisma.$connect()
   }catch (err){
       console.log(err)
   }
}

 export async function POST(req: Request){
    try{
        const {name} = await req.json()
        await main()
        await prisma.project.create({data: {name}})
        return NextResponse.json({message:"data validate"}, {status:201})
    } catch(err){
        return NextResponse.json({message:"Error data don't validate: ", err}, {status:500})
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