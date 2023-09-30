import Check from "@/public/checkmark.svg"
import Header from "@/components/header";
import Image from "next/image";
import styles from "../../styles/todo.module.css"
import prisma from "@/prisma";
import {use} from "react";
import AddTodo from "@/components/client/todo/todos";
import CheckButton from "@/components/client/todo/update";

const getData = async(id: string) => {
    let _id = Number(id)
    try{
        const res = await prisma.project.findUnique({
          where:{
              id:_id
          },
          include:{
            Todo:true
          }
        })
        return res
    }
    catch(err) {
        console.error(err)
    }
}

export  default function Todo({params}: {params:{id:string}}){
    let id = params.id
    let data = use(getData(id))
    return(
        <main>
           <Header/>
                    <section className={styles.sec} >
                        <strong style={{
                            fontSize:"26px",
                            display:"flex",
                            marginLeft:"23%",
                            marginBottom:"1.5%"
                        }}>
                            {data?.name}
                        </strong>
                        <AddTodo id={id}/>
                        <div>
                            <strong
                                style={{
                                    fontSize:"24px",
                                    display:"flex",
                                    marginLeft:"23%",
                                    marginBottom:"1.5%"}}
                            >
                                Todo
                            </strong>
                            {data?.Todo.map((item)=>
                                !item.stat &&
                                <div style={{
                                    display:"flex",
                                    flexDirection:"column",
                                    justifyContent:"center",
                                    marginRight:"24%",
                                    marginLeft:"24%",
                                }} key={item.id}>
                                    <div className={styles.projects}>
                                        <p
                                            style={{
                                                fontSize:"16px",
                                            }}>
                                            {item.content}
                                        </p>
                                        <CheckButton id={item.id}/>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div>
                            <strong
                                style={{
                                    fontSize:"24px",
                                    display:"flex",
                                    marginLeft:"23%",
                                    marginBottom:"1.5%"}}
                            >
                                Completed
                            </strong>
                            {data?.Todo.map((item)=>
                                item.stat &&
                            <div style={{
                                display:"flex",
                                flexDirection:"column",
                                justifyContent:"center",
                                marginRight:"24%",
                                marginLeft:"24%",
                            }}
                            key={item.id}>
                                <div className={styles.projectsCompleted}>
                                    <p style={{
                                        fontSize:"16px",
                                        color:"#85929E"
                                    }}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                            )}
                        </div>
                    </section>
        </main>
    )
}