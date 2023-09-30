"use client"
import styles from "@/app/styles/todo.module.css";
import {useState} from "react";
import {undefined} from "zod";

const handleSubmit = async({content, id}:{content:string, id:string}) =>{
    try{
        let projectId = Number(id)
        console.log(projectId)
        console.log(content)
        let res = await fetch("/api/todo",{
            method: "POST",
            body: JSON.stringify({content, projectId}),
            headers: {"Content-Type":"application/json"}
        })
        if (!res.ok){
            console.log("Error in pos data")
        }
        return res.json()
    }
    catch (err){
        console.error(err)
    }
}
export default function AddTodo({id}:{id:string}){
    let [content, setContent] = useState("")

    const handleChange = (e:any) =>{
        setContent(e.target.value)
    }

    return(
        <form
            onSubmit={(e: any)=>{
                e.preventDefault()
                handleSubmit({content, id}).then((res)=>{
                    console.log(res)
                })
            }}
            className={styles.sec2}>
            <input
                placeholder="Ajouter une nouvelle tache"
                onChange={handleChange}/>
            <button type="submit">+</button>
        </form>
    )
}